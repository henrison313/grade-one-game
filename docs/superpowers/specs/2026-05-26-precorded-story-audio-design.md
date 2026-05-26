---
title: 预录制剧情音频系统设计
date: 2026-05-26
status: approved
---

# 预录制剧情音频系统设计

## 背景

炫卡斗士游戏在部分设备（如华为鸿蒙 6.0 平板）上 Web Speech API 无法正常工作。为解决语音播放兼容性问题，采用预录制音频文件作为降级方案。

## 目标

- 在 Web Speech API 不可用时，自动降级到预录制音频播放
- 支持三种音色：独白/旁白、小俊、其他守护者
- 对调用方透明，无需修改 StoryPlayer 组件逻辑

## 设计方案

### 1. 音频文件结构

```
public/audio/story/
├── level-1-1/
│   ├── 01-narration.mp3
│   ├── 02-xiaojun.mp3
│   └── 03-guardian.mp3
├── level-1-2/
│   ├── 01-narration.mp3
│   └── ...
├── level-h1/
│   └── ...
└── level-h2/
    └── ...
```

**命名规则**：`{序号}-{角色}.mp3`

| 角色标识 | 说明 |
|---------|------|
| `narration` | 独白/旁白 |
| `xiaojun` | 小俊 |
| `guardian` | 其他守护者（统一音色） |

**序号**：从 01 开始，与 `StorySegment` 在数组中的顺序对应。

### 2. TTS 模式优先级

```
检测顺序：
1. Web Speech API → 可用则播放
2. 预录制音频 → 存在则播放
3. 静音模式 → 以上都不可用
```

**TTSMode 枚举调整**：

```typescript
enum TTSMode {
  WEB_SPEECH = 'web_speech',    // 优先使用
  PRECORDED = 'precoreded',     // 降级方案
  SILENT = 'silent',            // 兜底静音
}
```

### 3. 核心服务改动

#### 3.1 移除百度 TTS

- 删除 `src/services/baidu-tts.service.ts`
- 清理 `speech.service.ts` 中百度 TTS 相关代码：
  - 移除 `baiduTTSService` 导入
  - 移除 `speakWithBaidu()` 方法
  - 移除 `configureBaiduTTS()` 方法
  - 移除 `BAIDU_TTS` 模式分支

#### 3.2 新增预录制音频支持

**speech.service.ts 新增**：

```typescript
class SpeechService {
  // 当前关卡 ID（用于定位音频目录）
  private currentLevelId: string | null = null;

  // 预录制音频缓存
  private precordedCache: Map<string, HTMLAudioElement> = new Map();

  // 当前播放的预录制音频
  private currentPrecordedAudio: HTMLAudioElement | null = null;

  /**
   * 预加载关卡剧情音频
   * @param levelId 关卡 ID（如 'level-1-1'）
   * @param segments 剧情片段数组
   */
  async preloadStoryAudio(levelId: string, segments: StorySegment[]): Promise<void>;

  /**
   * 播放预录制音频
   * @param segmentIndex 片段索引（从 0 开始）
   * @param onEnd 播放完成回调
   * @returns 是否成功播放
   */
  private async playPrecorded(segmentIndex: number, onEnd?: () => void): Promise<boolean>;

  /**
   * 获取音频文件路径
   */
  private getPrecordedAudioPath(levelId: string, index: number, speaker?: string): string;

  /**
   * 检查预录制音频是否存在
   */
  async hasPrecordedAudio(levelId: string): Promise<boolean>;
}
```

#### 3.3 speak() 方法调整

```typescript
speak(
  text: string,
  speaker?: string,
  onEnd?: () => void,
  segmentIndex?: number
): void {
  if (!this.enabled || !text.trim()) {
    onEnd?.();
    return;
  }

  switch (this.ttsMode) {
    case TTSMode.WEB_SPEECH:
      this.speakWithWebSpeech(text, speaker, onEnd);
      return;
    case TTSMode.PRECORDED:
      if (segmentIndex !== undefined && this.currentLevelId) {
        this.playPrecorded(segmentIndex, onEnd);
      } else {
        // 无索引信息，跳过播放
        onEnd?.();
      }
      return;
    case TTSMode.SILENT:
    default:
      onEnd?.();
      return;
  }
}
```

### 4. 模式切换逻辑

```typescript
private updateTTSMode(): void {
  // 优先使用 Web Speech
  if (this.webSpeechWorking) {
    this.ttsMode = TTSMode.WEB_SPEECH;
    return;
  }

  // 检查是否有预录制音频
  if (this.currentLevelId && this.precordedCache.size > 0) {
    this.ttsMode = TTSMode.PRECORDED;
    return;
  }

  // 兜底静音
  this.ttsMode = TTSMode.SILENT;
}
```

### 5. StoryPlayer 组件改动

**最小改动**：在进入关卡时调用预加载

```typescript
// StoryPlayer 组件中
useEffect(() => {
  if (levelId && segments.length > 0) {
    speechService.preloadStoryAudio(levelId, segments);
  }
}, [levelId]);
```

**调用 speak() 时传入索引**：

```typescript
speechService.speak(
  text,
  currentSegment.speaker,
  onEnd,
  currentIndex  // 新增：片段索引
);
```

### 6. 加载策略

进入关卡时按需加载当前关卡的音频文件：

```typescript
async preloadStoryAudio(levelId: string, segments: StorySegment[]): Promise<void> {
  this.currentLevelId = levelId;
  this.precordedCache.clear();

  const basePath = `/audio/story/${levelId}/`;

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    // 跳过 action 类型（无语音）
    if (segment.type === 'action') continue;

    const speaker = this.mapSpeaker(segment.speaker, segment.type);
    const fileName = `${String(i + 1).padStart(2, '0')}-${speaker}.mp3`;
    const path = basePath + fileName;

    try {
      const audio = new Audio(path);
      audio.preload = 'auto';
      // 等待音频加载完成
      await new Promise((resolve, reject) => {
        audio.addEventListener('canplaythrough', resolve, { once: true });
        audio.addEventListener('error', reject, { once: true });
        audio.load();
      });
      this.precordedCache.set(String(i), audio);
    } catch {
      // 音频文件不存在，跳过
      console.warn(`[SpeechService] Audio not found: ${path}`);
    }
  }

  // 更新模式
  this.updateTTSMode();
}
```

### 7. 角色映射

```typescript
private mapSpeaker(speaker?: string, type?: string): string {
  // 独白/旁白类型
  if (type === 'narration' || !speaker) {
    return 'narration';
  }

  // 小俊
  if (speaker === '小俊' || speaker === '炫蓝闪电') {
    return 'xiaojun';
  }

  // 其他守护者统一音色
  return 'guardian';
}
```

## 实现步骤

1. 删除百度 TTS 相关代码
2. 更新 `TTSMode` 枚举
3. 新增预录制音频加载和播放逻辑
4. 修改 `speak()` 方法支持片段索引
5. 更新 `StoryPlayer` 组件调用
6. 创建示例音频文件目录结构

## 测试要点

1. Web Speech API 可用时正常播放
2. Web Speech API 不可用时降级到预录制音频
3. 预录制音频不存在时静音跳过
4. 音频预加载不影响页面性能
5. 切换关卡时正确加载对应音频

## 文件清单

| 文件 | 操作 |
|-----|------|
| `src/services/baidu-tts.service.ts` | 删除 |
| `src/services/speech.service.ts` | 修改 |
| `src/services/index.ts` | 修改（移除百度 TTS 导出） |
| `src/features/story/story-player/story-player.component.tsx` | 修改 |
| `public/audio/story/` | 新建目录 |
