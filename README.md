# 炫卡闯关游戏 🎮

一款面向一年级儿童的数学学习卡牌收集游戏。

## 在线游玩

🔗 [点击这里开始游戏](https://henrison313.github.io/grade-one-game/)

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

## 语音朗读功能配置

游戏使用 Web Speech API 实现故事和题目的语音朗读。不同系统、浏览器的配置方法如下：

### Windows 系统

#### Microsoft Edge（推荐）

Edge 浏览器内置 Microsoft 在线自然语音，**无需额外配置**即可使用语音功能。

如果语音无法正常工作：
1. 确保系统已安装中文语言包：**设置 → 时间和语言 → 语言 → 中文(简体，中国) → 选项 → 下载语音**
2. 检查音量混合器中 Edge 未被静音

#### Google Chrome

Chrome 默认使用 Google 云端语音，可能存在稳定性问题。建议：
- 安装 Windows 中文语音包后使用 Edge 浏览器
- 或在 Chrome 地址栏访问 `chrome://settings/languages` 确保中文语言包已安装

### macOS 系统

#### Safari / Chrome（推荐）

macOS 自带中文语音（如 Ting-Ting），**无需额外配置**。

如果语音列表为空：
1. **系统设置 → 辅助功能 → 语音内容 → 系统语音**
2. 点击"自定义"添加中文语音

### iOS / iPadOS 系统

移动端浏览器需要用户首次交互后才能播放语音。游戏会在首次点击后自动解锁语音功能。

如需手动添加中文语音：
1. **设置 → 辅助功能 → 语音内容 → 语音**
2. 添加"中文"语音

### Android 系统

建议使用 Chrome 浏览器，系统会自动下载中文语音包。

### 语音优先级说明

游戏会按以下优先级选择语音：

1. **Microsoft 在线自然语音**（Xiaoxiao Online）— Edge 浏览器首选
2. **其他非 Google 中文语音** — 兼容各种系统
3. **本地中文语音**（Ting-Ting、Huihui 等）
4. **Google 云端语音** — 最后兜底

### 常见问题

**Q: 语音没有声音？**

A: 按以下步骤排查：
1. 检查系统音量和浏览器音量
2. 确保浏览器未被静音
3. 尝试刷新页面
4. 切换到 Edge 浏览器测试

**Q: Windows 提示"系统上未安装语音"？**

A: 需要安装 Windows 中文语音组件：
```powershell
# 检查语音文件是否存在
Test-Path "C:\Windows\Speech_OneCore\Engines\TTS\zh-CN"

# 安装中文语言包
# 设置 → 时间和语言 → 语言 → 添加语言 → 中文(简体，中国)
```

**Q: 不同角色语音听起来一样？**

A: 这是正常的。游戏通过调节音高(pitch)和语速(rate)来区分角色，但效果因语音引擎而异。Microsoft 在线自然语音对音高变化响应较明显。

## 许可证

MIT
