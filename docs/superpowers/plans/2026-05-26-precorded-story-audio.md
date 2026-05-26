# 预录制剧情音频系统实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在 Web Speech API 不可用时，自动降级到预录制音频播放剧情语音

**Architecture:** 扩展 speech.service.ts，移除百度 TTS，新增 PRECORDED 模式。音频文件按关卡分文件夹存放，进入关卡时按需加载。

**Tech Stack:** TypeScript, HTML5 Audio API, React

---

## 文件结构

| 文件 | 操作 | 职责 |
|------|------|------|
| `src/services/baidu-tts.service.ts` | 删除 | 移除百度 TTS 服务 |
| `src/services/index.ts` | 修改 | 移除百度 TTS 导出 |
| `src/services/speech.service.ts` | 修改 | 核心服务：移除百度 TTS、新增预录制音频支持 |
| `src/features/story/story-player/story-player.component.tsx` | 修改 | 传入关卡 ID、预加载音频、传入片段索引 |
| `public/audio/story/` | 新建 | 预录制音频文件目录 |

---

### Task 1: 删除百度 TTS 服务文件

**Files:**
- Delete: `src/services/baidu-tts.service.ts`

- [ ] **Step 1: 删除 baidu-tts.service.ts 文件**

```bash
rm src/services/baidu-tts.service.ts
```

- [ ] **Step 2: 提交删除**

```bash
git add -A
git commit -m "refactor(speech): remove baidu tts service

Will be replaced with precorded audio fallback."
```

---

### Task 2: 更新服务导出

**Files:**
- Modify: `src/services/index.ts`

- [ ] **Step 1: 移除百度 TTS 导出**

修改 `src/services/index.ts`，移除百度 TTS 相关导出：

```typescript
export { storageService } from './storage.service';
export { soundService } from './sound.service';
export { speechService, speak, stopSpeaking, speakAsync, TTSMode } from './speech.service';
```

- [ ] **Step 2: 验证无编译错误**

```bash
npm run build
```

Expected: 编译通过，无错误

- [ ] **Step 3: 提交修改**

```bash
git add src/services/index.ts
git commit -m "refactor(services): remove baidu tts exports from index"
```

---

### Task 3: 更新 TTSMode 枚举并移除百度 TTS 相关代码

**Files:**
- Modify: `src/services/speech.service.ts`

- [ ] **Step 1: 移除百度 TTS 导入**

删除第 3 行：
```typescript
// 删除这一行
import { baiduTTSService } from './baidu-tts.service';
```

- [ ] **Step 2: 更新 TTSMode 枚举**

将枚举从：
```typescript
export enum TTSMode {
  WEB_SPEECH = 'web_speech',   // 浏览器 Web Speech API
  BAIDU_TTS = 'baidu_tts',     // 百度云端 TTS
  SILENT = 'silent',           // 静音模式（不可用）
}
```

修改为：
```typescript
export enum TTSMode {
  WEB_SPEECH = 'web_speech',   // 浏览器 Web Speech API
  PRECORDED = 'precoreded',    // 预录制音频
  SILENT = 'silent',           // 静音模式（不可用）
}
```

- [ ] **Step 3: 移除 performWebSpeechTest 中的百度 TTS 检查**

修改 `performWebSpeechTest` 方法中的超时检测逻辑（约第 157-171 行），删除百度 TTS 相关判断：

```typescript
// 超时检测
setTimeout(() => {
  if (!testCompleted) {
    testCompleted = true;
    this.synth?.cancel();
    // 超时认为 API 不可用
    this.webSpeechWorking = false;
    this.updateTTSMode();
  }
}, 2000);
```

- [ ] **Step 4: 更新 updateTTSMode 方法**

修改 `updateTTSMode` 方法（约第 184-195 行）：

```typescript
private updateTTSMode(): void {
  // 优先使用 Web Speech
  if (this.webSpeechWorking) {
    this.ttsMode = TTSMode.WEB_SPEECH;
    console.log('[SpeechService] Using WEB_SPEECH mode');
    return;
  }

  // 检查是否有预录制音频
  if (this.currentLevelId && this.precordedCache.size > 0) {
    this.ttsMode = TTSMode.PRECORDED;
    console.log('[SpeechService] Switched to PRECORDED mode');
    return;
  }

  // 兜底静音
  this.ttsMode = TTSMode.SILENT;
  console.log('[SpeechService] No TTS available, mode: SILENT');
}
```

- [ ] **Step 5: 移除 configureBaiduTTS 方法**

删除 `configureBaiduTTS` 方法（约第 201-204 行）。

- [ ] **Step 6: 更新 speak 方法中的模式分支**

修改 `speak` 方法（约第 513-533 行），移除 BAIDU_TTS 分支：

```typescript
speak(text: string, speaker?: string, onEnd?: () => void, segmentIndex?: number): void {
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
        console.log('[SpeechService] No segment index, skipping precorded playback');
        onEnd?.();
      }
      return;
    case TTSMode.SILENT:
    default:
      console.log('[SpeechService] TTS not available, skipping');
      onEnd?.();
      return;
  }
}
```

- [ ] **Step 7: 移除 speakWithBaidu 方法**

删除 `speakWithBaidu` 方法（约第 538-545 行）。

- [ ] **Step 8: 更新类注释**

修改类注释（约第 61-64 行）：

```typescript
/**
 * 语音服务
 * 使用 Web Speech API 实现中文语音播放
 * 当 Web Speech API 不可用时，自动切换到预录制音频
 */
```

- [ ] **Step 9: 验证无编译错误**

```bash
npm run build
```

Expected: 编译通过，无错误

- [ ] **Step 10: 提交修改**

```bash
git add src/services/speech.service.ts
git commit -m "refactor(speech): update tts mode enum and remove baidu tts logic"
```

---

### Task 4: 新增预录制音频属性和类型

**Files:**
- Modify: `src/services/speech.service.ts`

- [ ] **Step 1: 在类顶部添加新属性**

在 `SpeechService` 类的属性区域（约第 79 行后）添加：

```typescript
// TTS 模式管理
private ttsMode: TTSMode = TTSMode.WEB_SPEECH;
private webSpeechTested: boolean = false;
private webSpeechWorking: boolean = false;

// 预录制音频管理
private currentLevelId: string | null = null;
private precordedCache: Map<string, HTMLAudioElement> = new Map();
private currentPrecordedAudio: HTMLAudioElement | null = null;
```

- [ ] **Step 2: 添加 StorySegment 类型导入**

在文件顶部添加类型导入：

```typescript
import type { StorySegment } from '@/types';
```

- [ ] **Step 3: 验证无编译错误**

```bash
npm run build
```

- [ ] **Step 4: 提交修改**

```bash
git add src/services/speech.service.ts
git commit -m "feat(speech): add precorded audio properties and types"
```

---

### Task 5: 实现角色映射方法

**Files:**
- Modify: `src/services/speech.service.ts`

- [ ] **Step 1: 添加 mapSpeaker 方法**

在 `getVoiceConfig` 方法后添加：

```typescript
/**
 * 将说话人映射到预录制音频文件名中的角色标识
 * @param speaker 说话人名称
 * @param type 片段类型
 * @returns 音频文件中的角色标识
 */
private mapSpeaker(speaker?: string, type?: string): string {
  // 独白/旁白类型
  if (type === 'narration' || !speaker) {
    return 'narration';
  }

  // 小俊（主角）和炫蓝闪电（导师）使用 xiaojun 音色
  if (speaker === '小俊' || speaker === '炫蓝闪电') {
    return 'xiaojun';
  }

  // 其他守护者统一使用 guardian 音色
  return 'guardian';
}
```

- [ ] **Step 2: 验证无编译错误**

```bash
npm run build
```

- [ ] **Step 3: 提交修改**

```bash
git add src/services/speech.service.ts
git commit -m "feat(speech): add mapSpeaker method for audio file naming"
```

---

### Task 6: 实现音频路径和检查方法

**Files:**
- Modify: `src/services/speech.service.ts`

- [ ] **Step 1: 添加 getPrecordedAudioPath 方法**

在 `mapSpeaker` 方法后添加：

```typescript
/**
 * 获取预录制音频文件路径
 * @param levelId 关卡 ID
 * @param index 片段索引（从 0 开始）
 * @param speaker 说话人
 * @param type 片段类型
 * @returns 音频文件路径
 */
private getPrecordedAudioPath(
  levelId: string,
  index: number,
  speaker?: string,
  type?: string
): string {
  const speakerId = this.mapSpeaker(speaker, type);
  const fileName = `${String(index + 1).padStart(2, '0')}-${speakerId}.mp3`;
  return `/audio/story/${levelId}/${fileName}`;
}
```

- [ ] **Step 2: 添加 hasPrecordedAudio 方法**

在 `getPrecordedAudioPath` 方法后添加：

```typescript
/**
 * 检查关卡是否有预录制音频
 * @param levelId 关卡 ID
 * @returns 是否存在预录制音频
 */
async hasPrecordedAudio(levelId: string): Promise<boolean> {
  const testPath = `/audio/story/${levelId}/01-narration.mp3`;

  return new Promise((resolve) => {
    const audio = new Audio();
    audio.addEventListener('canplaythrough', () => resolve(true), { once: true });
    audio.addEventListener('error', () => resolve(false), { once: true });
    audio.src = testPath;
    audio.load();
  });
}
```

- [ ] **Step 3: 验证无编译错误**

```bash
npm run build
```

- [ ] **Step 4: 提交修改**

```bash
git add src/services/speech.service.ts
git commit -m "feat(speech): add getPrecordedAudioPath and hasPrecordedAudio methods"
```

---

### Task 7: 实现预加载方法

**Files:**
- Modify: `src/services/speech.service.ts`

- [ ] **Step 1: 添加 preloadStoryAudio 方法**

在 `hasPrecordedAudio` 方法后添加：

```typescript
/**
 * 预加载关卡剧情音频
 * @param levelId 关卡 ID（如 'level-1-1'）
 * @param segments 剧情片段数组
 */
async preloadStoryAudio(levelId: string, segments: StorySegment[]): Promise<void> {
  this.currentLevelId = levelId;
  this.precordedCache.clear();
  this.currentPrecordedAudio?.pause();
  this.currentPrecordedAudio = null;

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
      await new Promise<void>((resolve, reject) => {
        audio.addEventListener('canplaythrough', () => resolve(), { once: true });
        audio.addEventListener('error', () => reject(new Error(`Failed to load: ${path}`)), { once: true });
        audio.load();
      });

      this.precordedCache.set(String(i), audio);
      console.log(`[SpeechService] Preloaded: ${path}`);
    } catch {
      // 音频文件不存在，跳过
      console.warn(`[SpeechService] Audio not found: ${path}`);
    }
  }

  // 更新模式
  this.updateTTSMode();
}
```

- [ ] **Step 2: 验证无编译错误**

```bash
npm run build
```

- [ ] **Step 3: 提交修改**

```bash
git add src/services/speech.service.ts
git commit -m "feat(speech): add preloadStoryAudio method for level audio loading"
```

---

### Task 8: 实现预录制音频播放方法

**Files:**
- Modify: `src/services/speech.service.ts`

- [ ] **Step 1: 添加 playPrecorded 方法**

在 `preloadStoryAudio` 方法后添加：

```typescript
/**
 * 播放预录制音频
 * @param segmentIndex 片段索引（从 0 开始）
 * @param onEnd 播放完成回调
 * @returns 是否成功播放
 */
private playPrecorded(segmentIndex: number, onEnd?: () => void): Promise<boolean> {
  return new Promise((resolve) => {
    const audio = this.precordedCache.get(String(segmentIndex));

    if (!audio) {
      console.log(`[SpeechService] No precorded audio for index ${segmentIndex}`);
      onEnd?.();
      resolve(false);
      return;
    }

    // 停止之前的播放
    this.currentPrecordedAudio?.pause();

    // 克隆音频以支持重复播放
    const audioClone = audio.cloneNode() as HTMLAudioElement;
    audioClone.volume = this.volume;
    this.currentPrecordedAudio = audioClone;

    // 如果需要压低 BGM
    if (this.priorityMode && soundService.isBGMPlaying()) {
      this.bgmWasPlaying = true;
      soundService.duckBGM();
    }

    audioClone.addEventListener('ended', () => {
      this.onSpeechEnd();
      onEnd?.();
      resolve(true);
    });

    audioClone.addEventListener('error', (e) => {
      console.warn('[SpeechService] Audio playback error:', e);
      this.onSpeechEnd();
      onEnd?.();
      resolve(false);
    });

    audioClone.play().catch((error) => {
      console.warn('[SpeechService] Audio play failed:', error);
      this.onSpeechEnd();
      onEnd?.();
      resolve(false);
    });
  });
}
```

- [ ] **Step 2: 更新 stop 方法以停止预录制音频**

修改 `stop` 方法，添加预录制音频停止逻辑：

```typescript
stop(): void {
  this.clearTimers();
  this.stopInternal();
  // 停止预录制音频
  this.currentPrecordedAudio?.pause();
  this.currentPrecordedAudio = null;
  this.onSpeechEnd();
}
```

- [ ] **Step 3: 验证无编译错误**

```bash
npm run build
```

- [ ] **Step 4: 提交修改**

```bash
git add src/services/speech.service.ts
git commit -m "feat(speech): add playPrecorded method and update stop method"
```

---

### Task 9: 更新 speakAsync 便捷函数

**Files:**
- Modify: `src/services/speech.service.ts`

- [ ] **Step 1: 更新 speakAsync 函数签名**

修改文件末尾的 `speakAsync` 函数（约第 796-800 行）：

```typescript
/**
 * 便捷函数：带 Promise 的语音播放
 */
export function speakAsync(text: string, speaker?: string, segmentIndex?: number): Promise<void> {
  return new Promise((resolve) => {
    speechService.speak(text, speaker, () => resolve(), segmentIndex);
  });
}
```

- [ ] **Step 2: 更新 speak 便捷函数签名**

修改 `speak` 便捷函数：

```typescript
/**
 * 便捷函数：播放语音
 */
export function speak(text: string, speaker?: string, onEnd?: () => void, segmentIndex?: number): void {
  speechService.speak(text, speaker, onEnd, segmentIndex);
}
```

- [ ] **Step 3: 验证无编译错误**

```bash
npm run build
```

- [ ] **Step 4: 提交修改**

```bash
git add src/services/speech.service.ts
git commit -m "feat(speech): update speak and speakAsync to support segment index"
```

---

### Task 10: 更新 StoryPlayer 组件

**Files:**
- Modify: `src/features/story/story-player/story-player.component.tsx`

- [ ] **Step 1: 添加 levelId 属性**

修改 `StoryPlayerProps` 接口（约第 8-13 行）：

```typescript
interface StoryPlayerProps {
  levelId: string;           // 新增：关卡 ID
  segments: StorySegment[];
  onComplete?: () => void;
  autoPlay?: boolean;
  showSkip?: boolean;
}
```

- [ ] **Step 2: 解构 levelId**

修改组件参数解构（约第 147-152 行）：

```typescript
const StoryPlayer: React.FC<StoryPlayerProps> = ({
  levelId,
  segments,
  onComplete,
  autoPlay = true,
  showSkip = true,
}) => {
```

- [ ] **Step 3: 添加音频预加载 useEffect**

在组件内部添加新的 useEffect（在现有 useEffect 之前）：

```typescript
// 预加载关卡剧情音频
useEffect(() => {
  if (levelId && segments.length > 0) {
    speechService.preloadStoryAudio(levelId, segments);
  }
}, [levelId, segments]);
```

- [ ] **Step 4: 更新 speak 调用传入片段索引**

修改语音播放 useEffect 中的 `speechService.speak` 调用（约第 219-227 行）：

```typescript
speechService.speak(
  text,
  currentSegment.speaker,
  () => {
    console.log('[StoryPlayer] 语音播放完成:', text.substring(0, 20));
    setSpeechComplete(true);
  },
  currentIndex  // 新增：传入片段索引
);
```

- [ ] **Step 5: 验证无编译错误**

```bash
npm run build
```

- [ ] **Step 6: 提交修改**

```bash
git add src/features/story/story-player/story-player.component.tsx
git commit -m "feat(story): update StoryPlayer to support precorded audio

- Add levelId prop for audio path resolution
- Preload audio when entering level
- Pass segment index to speechService.speak"
```

---

### Task 11: 创建音频目录结构

**Files:**
- Create: `public/audio/story/`

- [ ] **Step 1: 创建关卡音频目录**

```bash
mkdir -p public/audio/story/level-1-1
mkdir -p public/audio/story/level-1-2
mkdir -p public/audio/story/level-1-3
mkdir -p public/audio/story/level-2-1
mkdir -p public/audio/story/level-2-2
mkdir -p public/audio/story/level-2-3
mkdir -p public/audio/story/level-2-4
mkdir -p public/audio/story/level-3-1
mkdir -p public/audio/story/level-3-2
mkdir -p public/audio/story/level-3-3
mkdir -p public/audio/story/level-3-4
mkdir -p public/audio/story/level-4-1
mkdir -p public/audio/story/level-4-2
mkdir -p public/audio/story/level-4-3
mkdir -p public/audio/story/level-5-1
mkdir -p public/audio/story/level-5-2
mkdir -p public/audio/story/level-6
mkdir -p public/audio/story/level-7-1
mkdir -p public/audio/story/level-7-2
mkdir -p public/audio/story/level-8
mkdir -p public/audio/story/level-9
mkdir -p public/audio/story/level-h1
mkdir -p public/audio/story/level-h2
```

- [ ] **Step 2: 创建示例占位文件**

在 `level-1-1` 目录创建 `.gitkeep` 文件说明音频文件命名规则：

```bash
cat > public/audio/story/README.md << 'EOF'
# 剧情音频文件目录

## 命名规则

文件名格式：`{序号}-{角色}.mp3`

- **序号**：从 01 开始，与 StorySegment 在数组中的顺序对应
- **角色**：
  - `narration` - 独白/旁白
  - `xiaojun` - 小俊（主角）/ 炫蓝闪电（导师）
  - `guardian` - 其他守护者（统一音色）

## 示例

```
level-1-1/
├── 01-narration.mp3    # 第 1 个片段，旁白
├── 02-xiaojun.mp3      # 第 2 个片段，小俊说话
├── 03-guardian.mp3     # 第 3 个片段，守护者说话
└── 04-narration.mp3    # 第 4 个片段，旁白
```

## 音频要求

- 格式：MP3
- 采样率：44100 Hz
- 比特率：128 kbps 或更高
- 单声道或立体声均可
EOF
```

- [ ] **Step 3: 创建 .gitkeep 文件**

```bash
touch public/audio/story/level-1-1/.gitkeep
```

- [ ] **Step 4: 提交目录结构**

```bash
git add public/audio/story/
git commit -m "feat(audio): add precorded story audio directory structure

Create directories for all levels with naming convention documentation"
```

---

### Task 12: 最终验证

**Files:**
- All modified files

- [ ] **Step 1: 运行完整构建**

```bash
npm run build
```

Expected: 编译通过，无错误

- [ ] **Step 2: 运行 lint 检查**

```bash
npm run lint
```

Expected: 无错误或警告

- [ ] **Step 3: 启动开发服务器测试**

```bash
npm run dev
```

手动验证：
1. 进入任意关卡剧情页面
2. 检查控制台是否显示音频预加载日志
3. 验证剧情播放正常

- [ ] **Step 4: 创建汇总提交**

```bash
git add -A
git commit -m "feat(speech): implement precorded story audio system

- Remove Baidu TTS service
- Add PRECORDED mode with Web Speech fallback
- Support three voice types: narration, xiaojun, guardian
- Load audio on-demand when entering level
- Update StoryPlayer to pass levelId and segment index

Closes: precorded story audio implementation"
```

---

## 测试清单

完成实现后验证：

1. [ ] Web Speech API 可用时正常播放（Chrome/Edge 桌面端）
2. [ ] Web Speech API 不可用时降级到预录制音频（模拟：禁用 Web Speech 或使用无中文语音的浏览器）
3. [ ] 预录制音频不存在时静音跳过，不阻塞剧情流程
4. [ ] 切换关卡时正确加载对应音频
5. [ ] 点击跳过按钮时停止音频播放
6. [ ] `npm run build` 无错误
7. [ ] `npm run lint` 无错误
