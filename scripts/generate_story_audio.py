#!/usr/bin/env python3
"""批量生成炫卡斗士剧情音频 MP3 文件"""

import re
import sys
import asyncio
import subprocess
from pathlib import Path

# 项目根目录
PROJECT_ROOT = Path(__file__).resolve().parent.parent
AUDIO_DIR = PROJECT_ROOT / 'public' / 'audio' / 'story'
LEVELS_FILE = PROJECT_ROOT / 'src' / 'data' / 'levels.data.ts'

# 音色映射
VOICE_MAP = {
    'narration': 'zh-CN-XiaoxiaoNeural',   # 旁白：晓晓-温暖女声
    'xiaojun': 'zh-CN-YunxiNeural',         # 小俊/炫蓝闪电：云希-阳光活力男声
    'guardian': 'zh-CN-YunjianNeural',      # 守护者：云健-激情男声
}

# 小俊的说话人名字
XIAOJUN_SPEAKERS = {'炫蓝闪电', '炫蓝闪电S'}


def map_speaker_id(speaker, seg_type):
    """映射说话人到音色 ID"""
    if seg_type == 'narration' or not speaker:
        return 'narration'
    if speaker in XIAOJUN_SPEAKERS:
        return 'xiaojun'
    return 'guardian'


def parse_story_data(filepath):
    """解析 levels.data.ts 提取所有剧情片段"""
    content = filepath.read_text(encoding='utf-8')

    # 匹配单个剧情片段
    segment_pattern = re.compile(
        r'\{\s*'
        r"id:\s*'(\d+)',\s*"
        r"type:\s*'(\w+)',\s*"
        r"(?:speaker:\s*'([^']*)',\s*)?"
        r"(?:speakerImage:\s*[^,]+,\s*)?"
        r"text:\s*'((?:[^'\\]|\\.)*)',\s*"
        r"duration:\s*\d+\s*,?\s*"
        r'\}',
        re.DOTALL
    )

    # 提取所有 story 数组
    story_vars = {}
    # 匹配每个 StorySegment[] 数组
    story_array_pattern = re.compile(
        r'const\s+(level\w*Story)\s*:\s*StorySegment\[\]\s*=\s*\[(.*?)\];\s*\n(?:/\*\*|export)',
        re.DOTALL
    )

    for match in story_array_pattern.finditer(content):
        var_name = match.group(1)
        body = match.group(2)
        segments = []
        for seg_match in segment_pattern.finditer(body):
            segments.append({
                'id': seg_match.group(1),
                'type': seg_match.group(2),
                'speaker': seg_match.group(3) or '',
                'text': seg_match.group(4),
            })
        if segments:
            story_vars[var_name] = segments

    # 提取关卡 ID 和 story 变量的映射
    # 用 name: 字段区分关卡定义和剧情片段
    level_story_map = {}
    level_pattern = re.compile(
        r"id:\s*'([^']+)',\s*\n\s*name:.*?story:\s*(\w+)",
        re.DOTALL
    )

    for match in level_pattern.finditer(content):
        level_id = match.group(1)
        story_var = match.group(2)
        if story_var in story_vars:
            level_story_map[level_id] = story_var

    return level_story_map, story_vars


async def generate_audio(text, voice, output_path):
    """使用 edge-tts 生成单个音频文件"""
    # 清理文本：移除引号
    clean_text = text.replace("'", "'").replace("'", "'").replace('"', '"').replace('"', '"')

    proc = await asyncio.create_subprocess_exec(
        'edge-tts',
        '--voice', voice,
        '--text', clean_text,
        '--write-media', str(output_path),
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
    )
    stdout, stderr = await proc.communicate()

    if proc.returncode != 0:
        err_msg = stderr.decode() if stderr else ''
        raise RuntimeError(f"edge-tts failed: {err_msg}")

    # 检查文件是否生成且非空
    if not output_path.exists() or output_path.stat().st_size == 0:
        raise RuntimeError(f"Output file empty or missing: {output_path}")

    return output_path.stat().st_size


async def main():
    print("解析剧情数据...")
    level_story_map, story_vars = parse_story_data(LEVELS_FILE)
    print(f"  找到 {len(level_story_map)} 个关卡，{sum(len(v) for v in story_vars.values())} 个剧情片段")

    total_segments = 0
    total_size = 0
    errors = []

    for level_id, story_var in sorted(level_story_map.items()):
        segments = story_vars[story_var]

        # 创建关卡音频目录
        level_dir = AUDIO_DIR / level_id
        level_dir.mkdir(parents=True, exist_ok=True)

        print(f"\n关卡 {level_id} ({len(segments)} 个片段):")

        for idx, seg in enumerate(segments):
            speaker_id = map_speaker_id(seg['speaker'], seg['type'])
            voice = VOICE_MAP[speaker_id]
            filename = f"{idx + 1:02d}-{speaker_id}.mp3"
            output_path = level_dir / filename

            # 跳过已存在的文件
            if output_path.exists() and output_path.stat().st_size > 0:
                print(f"  [{idx+1}/{len(segments)}] {filename} (已存在，跳过)")
                total_segments += 1
                total_size += output_path.stat().st_size
                continue

            text = seg['text']
            print(f"  [{idx+1}/{len(segments)}] {filename} ← {voice.split('-')[-1].replace('Neural','')} | {text[:40]}...")

            try:
                size = await generate_audio(text, voice, output_path)
                total_segments += 1
                total_size += size
            except Exception as e:
                error_msg = f"{level_id}/{filename}: {e}"
                errors.append(error_msg)
                print(f"    错误: {e}")

    print(f"\n{'='*60}")
    print(f"完成! 共生成 {total_segments} 个音频文件")
    print(f"总大小: {total_size / 1024:.1f} KB")
    if errors:
        print(f"错误 ({len(errors)}):")
        for e in errors:
            print(f"  - {e}")


if __name__ == '__main__':
    asyncio.run(main())
