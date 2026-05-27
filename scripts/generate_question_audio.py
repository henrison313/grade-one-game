#!/usr/bin/env python3
"""提取 question-story.config.ts 中的气泡文字并生成 MP3"""

import re
import asyncio
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
AUDIO_DIR = PROJECT_ROOT / 'public' / 'audio' / 'story'
CONFIG_FILE = PROJECT_ROOT / 'src' / 'config' / 'question-story.config.ts'

VOICE = 'zh-CN-YunxiNeural'  # xiaojun 音色（QuestionStory 默认 speaker）


def extract_all_narratives(filepath):
    """解析 question-story.config.ts，提取所有叙事文本"""
    content = filepath.read_text(encoding='utf-8')

    narrative_block_pattern = re.compile(
        r"narratives:\s*\{(.*?)\n  \},",
        re.DOTALL
    )

    entry_pattern = re.compile(
        r"(\d+):\s*\{\s*text:\s*'((?:[^'\\]|\\.)*)',[^}]*\}",
        re.DOTALL
    )

    config_pattern = re.compile(
        r"export const (\w+StoryConfig): QuestionStoryConfig = \{(.*?)\r?\n\};",
        re.DOTALL
    )

    configs = {}
    for match in config_pattern.finditer(content):
        name = match.group(1)
        body = match.group(2)
        narr_match = narrative_block_pattern.search(body)
        if narr_match:
            narr_body = narr_match.group(1)
            narratives = {}
            for entry in entry_pattern.finditer(narr_body):
                idx = entry.group(1)
                text = entry.group(2)
                narratives[int(idx)] = text
            if narratives:
                configs[name] = narratives

    # 解析 LevelStoryConfigs 映射
    level_map = {}
    ls_start = content.find('export const LevelStoryConfigs')
    if ls_start == -1:
        return configs, level_map
    ls_content = content[ls_start:]

    level_block_pattern = re.compile(
        r"'([^']+)':\s*\{(.*?)\n\s*\},?\s*\n",
        re.DOTALL
    )

    for match in level_block_pattern.finditer(ls_content):
        level_id = match.group(1)
        block = match.group(2)

        diff_pattern = re.compile(r'\[DifficultyLevel\.(\w+)\]:\s*(\w+)')
        for diff_match in diff_pattern.finditer(block):
            difficulty = diff_match.group(1).lower()
            config_name = diff_match.group(2)
            if level_id not in level_map:
                level_map[level_id] = {}
            level_map[level_id][difficulty] = config_name

    # 处理 createLevelStoryConfig
    factory_pattern = re.compile(
        r"'([^']+)':\s*createLevelStoryConfig\(",
        re.DOTALL
    )
    for fm in factory_pattern.finditer(ls_content):
        level_id = fm.group(1)
        if level_id not in level_map:
            func_pattern = re.compile(
                r"createLevelStoryConfig\("
                r"'" + re.escape(level_id) + r"',\s*"
                r"'([^']+)',\s*"
                r"'([^']+)',\s*"
                r"'([^']+)',\s*"
                r"'([^']+)',\s*"
                r"'[^']*'\)",
                re.DOTALL
            )
            func_match = func_pattern.search(ls_content)
            if func_match:
                level_map[level_id] = {
                    'easy': {
                        0: f'{func_match.group(1)}正在等待挑战！第一关：收集武器零件！',
                        1: '第二关：继续前进，收集更多零件！',
                        2: '第三关：接近目标了！',
                        3: '第四关：最后的零件！',
                        4: f'{func_match.group(2)}组装完成！准备战斗！',
                    },
                    'medium': {
                        0: f'{func_match.group(1)}进阶形态出现！挑战开始！',
                        1: '收集更强的零件！',
                        2: '武器能量增强中！',
                        3: f'最终组装！{func_match.group(3)}完成！',
                    },
                    'hard': {
                        0: f'{func_match.group(1)}终极形态降临！终极挑战！',
                        1: '收集终极能量！',
                        2: '终极武器即将完成！',
                        3: f'{func_match.group(4)}组装完成！终极决战！',
                    },
                }

    return configs, level_map


async def generate_audio(text, output_path):
    """使用 edge-tts 生成音频"""
    clean = text.replace("'", "'").replace("'", "'").replace('"', '"').replace('"', '"')

    proc = await asyncio.create_subprocess_exec(
        'edge-tts', '--voice', VOICE, '--text', clean,
        '--write-media', str(output_path),
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
    )
    _, stderr = await proc.communicate()

    if proc.returncode != 0:
        raise RuntimeError(f"edge-tts failed: {stderr.decode()}")

    if not output_path.exists() or output_path.stat().st_size == 0:
        raise RuntimeError(f"Output file empty: {output_path}")

    return output_path.stat().st_size


async def main():
    print("解析 question-story.config.ts ...")
    configs, level_map = extract_all_narratives(CONFIG_FILE)
    print(f"  {len(configs)} 个 StoryConfig, {len(level_map)} 个关卡")

    total = 0
    total_size = 0
    errors = []

    for level_id, diffs in sorted(level_map.items()):
        level_dir = AUDIO_DIR / level_id
        level_dir.mkdir(parents=True, exist_ok=True)

        for diff_name, val in sorted(diffs.items()):
            diff_short = diff_name[:1]  # 'e', 'm', 'h'

            # 获取叙事文本
            if isinstance(val, dict):
                narratives = val  # factory 直接嵌入的
            elif val in configs:
                narratives = configs[val]
            else:
                continue

            for idx, text in sorted(narratives.items()):
                filename = f"q-{diff_short}-{idx + 1:02d}-xiaojun.mp3"
                output_path = level_dir / filename

                if output_path.exists() and output_path.stat().st_size > 0:
                    total += 1
                    total_size += output_path.stat().st_size
                    continue

                short = text[:60] + ('...' if len(text) > 60 else '')
                print(f"  [{level_id}][{diff_name}] {filename} | {short}")

                try:
                    size = await generate_audio(text, output_path)
                    total += 1
                    total_size += size
                except Exception as e:
                    errors.append(f"{level_id}/{filename}: {e}")
                    print(f"    错误: {e}")

    print(f"\n{'='*60}")
    print(f"完成! 共生成 {total} 个气泡音频文件, 总大小 {total_size / 1024:.1f} KB")
    if errors:
        print(f"错误 ({len(errors)}):")
        for e in errors:
            print(f"  - {e}")


if __name__ == '__main__':
    asyncio.run(main())
