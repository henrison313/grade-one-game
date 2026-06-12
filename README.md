# 炫卡闯关游戏 🎮

一款面向一年级儿童的数学学习卡牌收集游戏。

## 在线游玩

🔗 **[https://grade-one-game.vercel.app/](https://grade-one-game.vercel.app/)**（推荐，国内可直接访问）

备用地址：[https://henrison313.github.io/grade-one-game/](https://henrison313.github.io/grade-one-game/)（GitHub Pages，国内部分地区可能无法访问）

## 游戏简介

- **炫卡斗士**风格的卡牌收集机制激励学习
- 数学课程基于人教版一年级下学期教材
- 题目难度对标《黄冈小状元作业本》
- 目标用户：~7 岁儿童
- 支持离线游玩

## 本地运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 技术栈

- React 19 + TypeScript
- Vite
- styled-components
- framer-motion
- react-router-dom

## 语音朗读功能

游戏支持**预录制音频**作为主力语音方案，彻底解决华为鸿蒙等设备 Web Speech API 不可用的问题。

### 音频文件

| 类型 | 数量 | 音色 | 位置 |
|------|------|------|------|
| 剧情对话（旁白） | ~35 个 | 晓晓 (Xiaoxiao) - 温暖女声 | `public/audio/story/{关卡ID}/0x-narration.mp3` |
| 剧情对话（小俊/炫蓝闪电） | ~30 个 | 云希 (Yunxi) - 阳光活力男声 | `public/audio/story/{关卡ID}/0x-xiaojun.mp3` |
| 剧情对话（守护者） | ~31 个 | 云健 (Yunjian) - 激情男声 | `public/audio/story/{关卡ID}/0x-guardian.mp3` |
| 答题气泡 | 329 个 | 云希 (Yunxi) | `public/audio/story/{关卡ID}/q-{e/m/h}-{序号}-xiaojun.mp3` |

> 共 425+ 个 MP3 文件，覆盖 21 个关卡 × 3 个难度的全部剧情和答题气泡。
> 使用 edge-tts（微软免费 TTS API）批量生成，脚本位于 `scripts/generate_story_audio.py` 和 `scripts/generate_question_audio.py`。

### 播放优先级

```
预录制音频 (PRECORDED) → Web Speech API → 百度云端 TTS → 静音
```

1. **预录制音频** — 存在则播放，优先级最高，不受浏览器兼容性影响
2. **Web Speech API** — 浏览器内置语音合成，作为降级方案
3. **百度云端 TTS** — 需配置 API Key，作为兜底
4. **静音模式** — 以上都不可用时走静音，不阻塞游戏流程

### 播放速度

预录制音频以 **1.20x** 倍速播放（`preservesPitch = true` 保持音调不变），Web Speech 和百度 TTS 保持原速。

### 各系统兼容性

| 系统 / 浏览器 | 预录制音频 | Web Speech | 推荐 |
|--------------|-----------|------------|------|
| Windows + Edge | ✅ | ✅ | 均可 |
| Windows + Chrome | ✅ | ✅ | 均可 |
| macOS + Safari/Chrome | ✅ | ✅ | 均可 |
| iOS / iPadOS | ✅ | ⚠️ 需用户交互解锁 | 预录制 |
| Android + Chrome | ✅ | ⚠️ 可能缺少中文语音 | 预录制 |
| 华为鸿蒙 (HarmonyOS) | ✅ | ❌ 不可用 | 预录制 |

### 背景音乐 (BGM)

| 类型 | 用途 | 文件 |
|------|------|------|
| `menu` | 主菜单 | menu-theme.mp3 |
| `story` | 剧情/关卡介绍 | story-theme.mp3 |
| `battle` | 答题/战斗 | battle-theme.mp3 |
| `victory` | 胜利/关卡完成 | victory-theme.mp3 |
| `collection` | 卡牌收集册 | collection-theme.mp3 |

- 语音播放时 BGM 自动压低（压低后音量 0.15）
- 场景切换时自动切换 BGM，通过 requestId 机制防止竞态条件

### 本地开发

```bash
# 安装依赖
npm install

# 安装 edge-tts（用于重新生成音频文件）
pip3 install edge-tts

# 生成剧情音频
python3 scripts/generate_story_audio.py

# 生成答题气泡音频
python3 scripts/generate_question_audio.py

# 启动开发服务器
npm run dev
```

## 许可证

MIT
