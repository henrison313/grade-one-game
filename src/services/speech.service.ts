import { soundService } from './sound.service';
import { storageService } from './storage.service';
import { baiduTTSService } from './baidu-tts.service';
import type { StorySegment } from '@/types';

/**
 * 角色音色配置
 */
interface VoiceConfig {
  pitch: number; // 音高 (0.5 - 2)
  rate: number; // 语速 (0.5 - 2)
}

/**
 * TTS 模式
 */
export enum TTSMode {
  PRECORDED = 'precorded',     // 优先：预录制音频
  WEB_SPEECH = 'web_speech',   // 降级：Web Speech API
  BAIDU_TTS = 'baidu_tts',     // 兜底：百度云端 TTS
  SILENT = 'silent',           // 最终兜底：静音
}

/**
 * 预设的角色音色
 * 通过 pitch 和 rate 调节来区分不同角色
 */
const VOICE_PRESETS: Record<string, VoiceConfig> = {
  // 炫蓝闪电 - 智慧导师，活泼友好
  炫蓝闪电: { pitch: 1.3, rate: 1.1 },
  // 巨力风暴 - 力量守护者，低沉有力
  巨力风暴: { pitch: 0.7, rate: 0.85 },
  // 急救卫士 - 医疗救援，温和
  急救卫士: { pitch: 1.2, rate: 1.0 },
  // 烈火修罗 - 火焰战士，热情
  烈火修罗: { pitch: 0.85, rate: 1.2 },
  // 暗影特工 - 潜行者，神秘
  暗影特工: { pitch: 0.75, rate: 0.9 },
  // 铁臂爵士 - 力量战士，沉稳
  铁臂爵士: { pitch: 0.65, rate: 0.8 },
  // 喷射加仑 - 消防战士，活泼
  喷射加仑: { pitch: 1.25, rate: 1.15 },
  // 裂变骑士 - 分裂战士，快速
  裂变骑士: { pitch: 1.0, rate: 1.25 },
  // 暴烈重卡 - 运输战士，厚重
  暴烈重卡: { pitch: 0.6, rate: 0.75 },
  // 深海天锚 - 海洋战士，深沉
  深海天锚: { pitch: 0.8, rate: 0.85 },
  // 默认旁白音色
  narration: { pitch: 1.0, rate: 1.0 },
  // 默认音色
  default: { pitch: 1.0, rate: 1.0 },
};

/**
 * 检测是否为移动设备
 */
const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

/**
 * 语音服务
 * 使用 Web Speech API 实现中文语音播放
 * 当 Web Speech API 不可用时，自动切换到百度云端 TTS
 */
class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private enabled: boolean = true;
  private volume: number = 0.8;
  private chineseVoice: SpeechSynthesisVoice | null = null;
  private priorityMode: boolean = true; // 播放时压低 BGM
  private bgmWasPlaying: boolean = false;
  private speechUnlocked: boolean = false;
  private voicesLoaded: boolean = false;
  private speechTimeout: ReturnType<typeof setTimeout> | null = null;
  private resumeInterval: ReturnType<typeof setInterval> | null = null; // Chrome 冻结保护
  private useDefaultVoice: boolean = false; // 仅设 lang 不设 voice，让 Chrome 用 OS TTS

  // TTS 模式管理
  private ttsMode: TTSMode = TTSMode.WEB_SPEECH;
  private webSpeechTested: boolean = false;
  private webSpeechWorking: boolean = false;

  // 预录制音频管理
  private _currentLevelId: string | null = null;
  private _precordedCache: Map<string, HTMLAudioElement> = new Map();
  private _currentPrecordedAudio: HTMLAudioElement | null = null;

  // Getters for future preload method access
  get currentLevelId() { return this._currentLevelId; }
  get precordedCache() { return this._precordedCache; }
  get currentPrecordedAudio() { return this._currentPrecordedAudio; }

  constructor() {
    this.initSynth();
    this.loadSettings();
    this.setupSpeechUnlock();
    this.testWebSpeechAvailability();
    // 预留给未来预录制音频系统使用
    void this.getPrecordedAudioPath;
    void this.hasPrecordedAudio;
    void this.playPrecorded;
  }

  /**
   * 测试 Web Speech API 是否真正可用
   * 某些浏览器（如鸿蒙浏览器）虽然有 API 但无法正常工作
   */
  private testWebSpeechAvailability(): void {
    if (!this.synth) {
      this.ttsMode = TTSMode.SILENT;
      console.log('[SpeechService] Web Speech API not available, mode: SILENT');
      return;
    }

    // 延迟测试，等待语音列表加载
    setTimeout(() => {
      this.performWebSpeechTest();
    }, 3000);
  }

  /**
   * 执行 Web Speech API 可用性测试
   */
  private performWebSpeechTest(): void {
    if (this.webSpeechTested) return;
    this.webSpeechTested = true;

    const voices = this.synth?.getVoices() || [];
    const chineseVoices = voices.filter(v =>
      v.lang.startsWith('zh-CN') ||
      v.lang.startsWith('zh_CN') ||
      v.lang === 'zh'
    );

    // 如果没有中文语音，标记为不可用
    if (chineseVoices.length === 0) {
      console.log('[SpeechService] No Chinese voices available');
      this.webSpeechWorking = false;
      this.updateTTSMode();
      return;
    }

    // 尝试一次静音测试
    try {
      const testUtterance = new SpeechSynthesisUtterance('测试');
      testUtterance.volume = 0;
      testUtterance.lang = 'zh-CN';

      let testCompleted = false;

      testUtterance.onstart = () => {
        testCompleted = true;
        this.webSpeechWorking = true;
        this.ttsMode = TTSMode.WEB_SPEECH;
        console.log('[SpeechService] Web Speech API working, mode: WEB_SPEECH');
        this.synth?.cancel();
      };

      testUtterance.onerror = (event) => {
        if (!testCompleted) {
          testCompleted = true;
          this.webSpeechWorking = false;
          console.log('[SpeechService] Web Speech API error:', event.error);
          this.updateTTSMode();
        }
      };

      this.synth?.speak(testUtterance);

      // 超时检测
      setTimeout(() => {
        if (!testCompleted) {
          testCompleted = true;
          this.synth?.cancel();
          // 超时认为 API 不可用，更新模式
          this.webSpeechWorking = false;
          this.updateTTSMode();
        }
      }, 2000);

    } catch (error) {
      console.warn('[SpeechService] Web Speech test failed:', error);
      this.webSpeechWorking = false;
      this.updateTTSMode();
    }
  }

  /**
   * 更新 TTS 模式
   */
  private updateTTSMode(): void {
    // 优先检查预录制音频
    if (this._currentLevelId && this._precordedCache.size > 0) {
      this.ttsMode = TTSMode.PRECORDED;
      console.log('[SpeechService] Using PRECORDED mode');
      return;
    }

    // 其次检查 Web Speech
    if (this.webSpeechWorking) {
      this.ttsMode = TTSMode.WEB_SPEECH;
      console.log('[SpeechService] Using WEB_SPEECH mode');
      return;
    }

    // 再次检查百度 TTS
    if (baiduTTSService.isConfigured()) {
      this.ttsMode = TTSMode.BAIDU_TTS;
      console.log('[SpeechService] Using BAIDU_TTS mode');
      return;
    }

    // 兜底静音
    this.ttsMode = TTSMode.SILENT;
    console.log('[SpeechService] No TTS available, mode: SILENT');
  }

  /**
   * 配置百度 TTS
   * 当 Web Speech API 不可用时自动使用百度 TTS
   */
  configureBaiduTTS(apiKey: string, secretKey: string, accessToken?: string): void {
    baiduTTSService.init({ apiKey, secretKey, accessToken });
    this.updateTTSMode();
  }

  /**
   * 获取当前 TTS 模式
   */
  getTTSMode(): TTSMode {
    return this.ttsMode;
  }

  /**
   * 检查语音服务是否可用
   */
  isAvailable(): boolean {
    return this.ttsMode !== TTSMode.SILENT;
  }

  /**
   * 设置语音解锁（处理移动端自动播放限制）
   * 移动端浏览器需要用户交互才能播放语音
   */
  private setupSpeechUnlock(): void {
    if (typeof window === 'undefined') return;

    // 桌面端通常不需要解锁
    if (!isMobileDevice()) {
      this.speechUnlocked = true;
      return;
    }

    const unlockEvents = ['click', 'touchstart', 'keydown'];

    const unlockSpeech = () => {
      if (this.speechUnlocked) return;

      // 尝试播放并立即停止一个空的语音来解锁
      if (this.synth) {
        const utterance = new SpeechSynthesisUtterance('');
        utterance.volume = 0;
        utterance.rate = 10; // 快速播放

        utterance.onend = () => {
          this.speechUnlocked = true;
          console.log('[SpeechService] Speech unlocked on mobile');
        };

        utterance.onerror = () => {
          // 即使失败也标记为尝试过
          this.speechUnlocked = true;
        };

        try {
          this.synth.speak(utterance);
          // 立即取消，只是为了解锁
          setTimeout(() => {
            if (this.synth && !this.speechUnlocked) {
              this.synth.cancel();
              this.speechUnlocked = true;
            }
          }, 100);
        } catch (e) {
          console.warn('[SpeechService] Unlock attempt failed:', e);
        }
      }

      // 移除事件监听
      if (this.speechUnlocked) {
        unlockEvents.forEach(event => {
          document.removeEventListener(event, unlockSpeech);
        });
      }
    };

    unlockEvents.forEach(event => {
      document.addEventListener(event, unlockSpeech, { passive: true });
    });
  }

  /**
   * 初始化语音合成
   */
  private initSynth(): void {
    if (typeof window === 'undefined') return;

    if ('speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      // 加载语音列表
      this.loadVoices();

      // 使用 addEventListener 监听语音加载（比 onvoiceschanged 属性赋值更可靠）
      this.synth.addEventListener('voiceschanged', () => this.loadVoices());

      // Chrome 桌面端 getVoices() 首次返回空数组，需要延迟重试
      // 即使 voiceschanged 事件在某些版本不可靠也能加载
      setTimeout(() => this.loadVoices(), 500);
      setTimeout(() => this.loadVoices(), 2000);
    } else {
      console.warn('[SpeechService] Web Speech API not supported');
    }
  }

  /**
   * 从用户数据加载设置
   */
  private loadSettings(): void {
    try {
      const userData = storageService.getUserData();
      if (userData.settings) {
        this.enabled = userData.settings.speechEnabled ?? this.enabled;
        this.volume = userData.settings.speechVolume ?? this.volume;
      }
    } catch (error) {
      console.warn('Failed to load speech settings:', error);
    }
  }

  /**
   * 加载可用的中文语音
   * 每次 voiceschanged 触发都会重新选择，确保本地语音加载后能覆盖 Google 云端语音
   * 使用 voice.localService 属性判断是否为本地语音，比字符串匹配更可靠
   */
  private loadVoices(): void {
    if (!this.synth) return;

    const voices = this.synth.getVoices();

    if (voices.length === 0) {
      console.log('[SpeechService] No voices available yet, will retry');
      return;
    }

    console.log('[SpeechService] Available voices:', voices.map(v => `${v.name} (${v.lang}) local=${v.localService}`));

    // 优先选择普通话语音
    const chineseVoices = voices.filter(
      (voice) =>
        voice.lang.startsWith('zh-CN') ||
        voice.lang.startsWith('zh_CN') ||
        voice.lang === 'zh'
    );

    // 第一优先：Microsoft 在线自然语音（Edge 大声朗读使用的语音，稳定可靠）
    const onlineNaturalVoice = chineseVoices.find(v =>
      (v.name.includes('Online') && v.name.includes('Natural')) ||
      (v.name.includes('Microsoft') && v.name.includes('Xiaoxiao'))
    );
    if (onlineNaturalVoice) {
      if (this.chineseVoice?.name === onlineNaturalVoice.name && !this.useDefaultVoice) return;
      this.chineseVoice = onlineNaturalVoice;
      this.useDefaultVoice = false;
      this.voicesLoaded = true;
      console.log('[SpeechService] Using Microsoft online voice:', onlineNaturalVoice.name);
      return;
    }

    // 第二优先：非 Google 的中文语音（可能是其他系统语音）
    const nonGoogleVoices = chineseVoices.filter(v => !v.name.includes('Google'));
    if (nonGoogleVoices.length > 0) {
      if (this.chineseVoice?.name === nonGoogleVoices[0].name && !this.useDefaultVoice) return;
      this.chineseVoice = nonGoogleVoices[0];
      this.useDefaultVoice = false;
      this.voicesLoaded = true;
      console.log('[SpeechService] Using non-Google voice:', nonGoogleVoices[0].name);
      return;
    }

    // 第三优先：本地中文语音（localService=true）
    // 注意：Windows 上可能缺少语音文件导致 synthesis-failed
    const localVoice = chineseVoices.find(v => v.localService);
    if (localVoice) {
      if (this.chineseVoice?.name === localVoice.name && !this.useDefaultVoice) return;
      this.chineseVoice = localVoice;
      this.useDefaultVoice = false;
      this.voicesLoaded = true;
      console.log('[SpeechService] Using local voice:', localVoice.name);
      return;
    }

    // 兜底：Google 云端语音
    // 不设 utterance.voice，只设 utterance.lang，让 Chrome 用 OS TTS 引擎
    const googleVoice = chineseVoices.find(v => v.name.includes('Google'));
    if (googleVoice) {
      if (this.chineseVoice?.name === googleVoice.name && this.useDefaultVoice) return;
      this.chineseVoice = googleVoice;
      this.useDefaultVoice = true;
      this.voicesLoaded = true;
      console.log('[SpeechService] Only Google cloud voice available, will use OS TTS via lang only:', googleVoice.name);
      return;
    }

    // 完全没有中文语音，使用任何可用语音
    if (chineseVoices.length > 0) {
      this.chineseVoice = chineseVoices[0];
      this.useDefaultVoice = !chineseVoices[0].localService;
      this.voicesLoaded = true;
      console.log('[SpeechService] Using first Chinese voice:', chineseVoices[0].name);
    } else {
      console.warn('[SpeechService] No Chinese voice found, using default');
      if (voices.length > 0) {
        this.chineseVoice = voices[0];
        this.useDefaultVoice = true;
        this.voicesLoaded = true;
      }
    }
  }

  /**
   * 设置是否启用语音
   */
  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    if (!enabled) {
      this.stop();
    }
  }

  /**
   * 设置音量
   */
  setVolume(volume: number): void {
    this.volume = Math.max(0, Math.min(1, volume));
  }

  /**
   * 设置优先级模式（播放时压低 BGM）
   */
  setPriorityMode(enabled: boolean): void {
    this.priorityMode = enabled;
  }

  /**
   * 获取角色音色配置
   */
  private getVoiceConfig(speaker?: string): VoiceConfig {
    if (!speaker) {
      return VOICE_PRESETS['narration'];
    }
    return VOICE_PRESETS[speaker] || VOICE_PRESETS['default'];
  }

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

  /**
   * 预加载关卡剧情音频
   * @param levelId 关卡 ID（如 'level-1-1'）
   * @param segments 剧情片段数组
   */
  async preloadStoryAudio(levelId: string, segments: StorySegment[]): Promise<void> {
    this._currentLevelId = levelId;
    this._precordedCache.clear();
    this._currentPrecordedAudio?.pause();
    this._currentPrecordedAudio = null;

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

        this._precordedCache.set(String(i), audio);
        console.log(`[SpeechService] Preloaded: ${path}`);
      } catch {
        // 音频文件不存在，跳过
        console.warn(`[SpeechService] Audio not found: ${path}`);
      }
    }

    // 更新模式
    this.updateTTSMode();
  }

  /**
   * 播放预录制音频
   * @param segmentIndex 片段索引（从 0 开始）
   * @param onEnd 播放完成回调
   * @returns 是否成功播放
   */
  private playPrecorded(segmentIndex: number, onEnd?: () => void): Promise<boolean> {
    return new Promise((resolve) => {
      const audio = this._precordedCache.get(String(segmentIndex));

      if (!audio) {
        console.log(`[SpeechService] No precorded audio for index ${segmentIndex}`);
        onEnd?.();
        resolve(false);
        return;
      }

      // 停止之前的播放
      this._currentPrecordedAudio?.pause();

      // 克隆音频以支持重复播放
      const audioClone = audio.cloneNode() as HTMLAudioElement;
      audioClone.volume = this.volume;
      this._currentPrecordedAudio = audioClone;

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

  /**
   * 清理文本用于语音朗读
   * 移除不需要朗读的符号，保留基本断句标点
   */
  private cleanTextForSpeech(text: string): string {
    return text
      // 移除双引号（中文和英文）
      .replace(/["""]/g, '')
      // 移除书名号
      .replace(/[《》]/g, '')
      // 移除方括号
      .replace(/[【】\[\]]/g, '')
      // 移除波浪号
      .replace(/[~~]/g, '')
      // 将省略号替换为逗号（帮助断句）
      .replace(/[……]{2,}/g, '，')
      // 将破折号替换为逗号（Microsoft SAPI 可能不支持）
      .replace(/[—–－]+/g, '，')
      // 移除多余空格
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * 将长文本拆分为短片段
   * Chrome 的 speechSynthesis 朗读超过约 15 秒会冻结
   * 按中文标点拆分，每段不超过 maxLen 字符
   * Windows Chrome 使用更短的分块（50 字符）降低冻结概率
   */
  private splitText(text: string, maxLen: number = 50): string[] {
    if (text.length <= maxLen) return [text];

    const chunks: string[] = [];
    let remaining = text;

    while (remaining.length > 0) {
      if (remaining.length <= maxLen) {
        chunks.push(remaining);
        break;
      }

      // 在 maxLen 范围内找最后一个中文标点作为分割点
      const puncts = ['，', '。', '！', '？', '；', '：', '、', '…'];
      let splitIdx = -1;

      for (let i = maxLen; i > maxLen * 0.4; i--) {
        if (puncts.includes(remaining[i])) {
          splitIdx = i + 1;
          break;
        }
      }

      // 找不到标点就强制分割
      if (splitIdx === -1) {
        splitIdx = maxLen;
      }

      chunks.push(remaining.slice(0, splitIdx));
      remaining = remaining.slice(splitIdx);
    }

    return chunks;
  }

  /**
   * 播放语音
   * @param text 要朗读的文本
   * @param speaker 说话人（用于匹配音色）
   * @param onEnd 播放完成回调
   */
  speak(text: string, speaker?: string, onEnd?: () => void): void {
    if (!this.enabled || !text.trim()) {
      onEnd?.();
      return;
    }

    // 根据当前模式选择 TTS 引擎
    switch (this.ttsMode) {
      case TTSMode.BAIDU_TTS:
        this.speakWithBaidu(text, speaker, onEnd);
        return;
      case TTSMode.SILENT:
        console.log('[SpeechService] TTS not available, skipping');
        onEnd?.();
        return;
      case TTSMode.WEB_SPEECH:
      default:
        this.speakWithWebSpeech(text, speaker, onEnd);
        return;
    }
  }

  /**
   * 使用百度 TTS 播放语音
   */
  private async speakWithBaidu(text: string, speaker?: string, onEnd?: () => void): Promise<void> {
    try {
      await baiduTTSService.speak(text, speaker, onEnd);
    } catch (error) {
      console.error('[SpeechService] Baidu TTS error:', error);
      onEnd?.();
    }
  }

  /**
   * 使用 Web Speech API 播放语音
   */
  private speakWithWebSpeech(text: string, speaker?: string, onEnd?: () => void): void {
    if (!this.synth) {
      onEnd?.();
      return;
    }

    // 移动端检查是否已解锁
    if (isMobileDevice() && !this.speechUnlocked) {
      console.log('[SpeechService] Speech not unlocked yet on mobile, skipping');
      onEnd?.();
      return;
    }

    // 清除之前的计时器
    this.clearTimers();

    // 停止当前播放
    this.stopInternal();

    // 如果需要压低 BGM
    if (this.priorityMode && soundService.isBGMPlaying()) {
      this.bgmWasPlaying = true;
      soundService.duckBGM();
    }

    // 预处理文本：移除不需要朗读的符号
    const cleanedText = this.cleanTextForSpeech(text);

    // 拆分长文本避免 Chrome 冻结 bug
    const chunks = this.splitText(cleanedText);
    console.log('[SpeechService] Speaking:', cleanedText.slice(0, 50) + '...', 'voice:', this.chineseVoice?.name ?? 'default', 'chunks:', chunks.length);

    // 启动周期性 resume() 定时器（Chrome ~15 秒后自动暂停的 workaround）
    this.resumeInterval = setInterval(() => {
      if (this.synth && this.synth.speaking) {
        this.synth.resume();
      }
    }, 5000);

    // 逐段播放
    let chunkIndex = 0;
    let chunkTimeout: ReturnType<typeof setTimeout> | null = null;
    let completed = false;

    const finish = () => {
      if (completed) return;
      completed = true;
      this.clearTimers();
      if (chunkTimeout) {
        clearTimeout(chunkTimeout);
        chunkTimeout = null;
      }
      this.onSpeechEnd();
      onEnd?.();
    };

    const playNextChunk = (fallbackMode: boolean = false) => {
      if (chunkTimeout) {
        clearTimeout(chunkTimeout);
        chunkTimeout = null;
      }

      if (chunkIndex >= chunks.length) {
        finish();
        return;
      }

      const chunk = chunks[chunkIndex];
      chunkIndex++;

      const utterance = new SpeechSynthesisUtterance(chunk);

      if (fallbackMode) {
        // fallback 模式：不设 voice/pitch/rate，尝试多种 lang 值
        // Microsoft SAPI 可能对 zh-CN / zh-Hans 有不同处理
        utterance.lang = 'zh-Hans';
        utterance.volume = this.volume;
      } else {
        // 正常模式：设 voice + lang + 音色配置
        utterance.lang = 'zh-CN';
        if (!this.useDefaultVoice && this.chineseVoice) {
          utterance.voice = this.chineseVoice;
        }
        const config = this.getVoiceConfig(speaker);
        utterance.pitch = config.pitch;
        utterance.rate = config.rate;
        utterance.volume = this.volume;
      }

      utterance.onstart = () => {
        console.log('[SpeechService] Speech started', fallbackMode ? '(fallback)' : '', 'voice:', this.chineseVoice?.name ?? 'default');
      };

      utterance.onend = () => {
        console.log('[SpeechService] Speech chunk ended');
        if (fallbackMode) {
          this.useDefaultVoice = true;
        }
        playNextChunk(fallbackMode);
      };

      utterance.onerror = (event) => {
        if (event.error === 'canceled') {
          return;
        }
        // synthesis-failed：Microsoft 语音 bug，cancel 后延迟重试用 fallback 模式
        if (event.error === 'synthesis-failed' && !fallbackMode) {
          console.warn('[SpeechService] synthesis-failed, retrying in fallback mode');
          chunkIndex--; // 回退当前 chunk
          this.synth!.cancel();
          setTimeout(() => playNextChunk(true), 100);
          return;
        }
        console.warn('[SpeechService] Speech error:', event.error);
        finish();
      };

      this.synth!.speak(utterance);
      this.synth!.resume();

      // 每个 chunk 超时保护
      chunkTimeout = setTimeout(() => {
        if (!completed && this.synth?.speaking) {
          console.warn('[SpeechService] Chunk timeout, skipping to next');
          this.synth.cancel();
          setTimeout(() => playNextChunk(fallbackMode), 100);
        }
      }, 10000);
    };

    playNextChunk();

    // 全局超时保护
    const totalTimeout = chunks.length * 12000;
    this.speechTimeout = setTimeout(() => {
      console.warn('[SpeechService] Speech total timeout, forcing cancel');
      finish();
    }, totalTimeout);
  }

  /**
   * 清除所有计时器
   */
  private clearTimers(): void {
    if (this.speechTimeout) {
      clearTimeout(this.speechTimeout);
      this.speechTimeout = null;
    }
    if (this.resumeInterval) {
      clearInterval(this.resumeInterval);
      this.resumeInterval = null;
    }
  }

  /**
   * 语音播放结束处理
   */
  private onSpeechEnd(): void {
    if (this.bgmWasPlaying) {
      soundService.unduckBGM();
      this.bgmWasPlaying = false;
    }
  }

  /**
   * 内部停止（不清理计时器，由调用方负责）
   */
  private stopInternal(): void {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  /**
   * 停止当前播放
   */
  stop(): void {
    this.clearTimers();
    this.stopInternal();
    // 停止预录制音频
    this._currentPrecordedAudio?.pause();
    this._currentPrecordedAudio = null;
    this.onSpeechEnd();
  }

  /**
   * 检查是否正在播放
   */
  isSpeaking(): boolean {
    return this.synth?.speaking ?? false;
  }

  /**
   * 暂停播放
   */
  pause(): void {
    this.synth?.pause();
  }

  /**
   * 恢复播放
   */
  resume(): void {
    this.synth?.resume();
  }

  /**
   * 检查语音是否已解锁（移动端）
   */
  isUnlocked(): boolean {
    return this.speechUnlocked;
  }

  /**
   * 检查语音是否已加载
   */
  isVoicesLoaded(): boolean {
    return this.voicesLoaded;
  }

  /**
   * 检查是否缺少本地中文语音（仅有 Google 云端语音）
   * 用于 UI 层提示用户安装中文语音或使用 Edge 浏览器
   */
  needsLocalVoice(): boolean {
    return this.useDefaultVoice;
  }
}

// 导出单例
export const speechService = new SpeechService();

/**
 * 便捷函数：播放语音
 */
export function speak(text: string, speaker?: string, onEnd?: () => void): void {
  speechService.speak(text, speaker, onEnd);
}

/**
 * 便捷函数：停止播放
 */
export function stopSpeaking(): void {
  speechService.stop();
}

/**
 * 便捷函数：带 Promise 的语音播放
 */
export function speakAsync(text: string, speaker?: string): Promise<void> {
  return new Promise((resolve) => {
    speechService.speak(text, speaker, () => resolve());
  });
}
