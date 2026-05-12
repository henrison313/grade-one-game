import { soundService } from './sound.service';
import { storageService } from './storage.service';

/**
 * 角色音色配置
 */
interface VoiceConfig {
  pitch: number; // 音高 (0.5 - 2)
  rate: number; // 语速 (0.5 - 2)
}

/**
 * 预设的角色音色
 * 通过 pitch 和 rate 调节来区分不同角色
 */
const VOICE_PRESETS: Record<string, VoiceConfig> = {
  // 炫蓝闪电 - 智慧导师，活泼友好
  炫蓝闪电: { pitch: 1.2, rate: 1.0 },
  // 巨力风暴 - 力量守护者，低沉有力
  巨力风暴: { pitch: 0.8, rate: 0.9 },
  // 急救卫士 - 医疗救援，温和
  急救卫士: { pitch: 1.1, rate: 1.0 },
  // 烈火修罗 - 火焰战士，热情
  烈火修罗: { pitch: 0.9, rate: 1.1 },
  // 暗影特工 - 潜行者，神秘
  暗影特工: { pitch: 0.85, rate: 0.95 },
  // 铁臂爵士 - 力量战士，沉稳
  铁臂爵士: { pitch: 0.75, rate: 0.85 },
  // 喷射加仑 - 消防战士，活泼
  喷射加仑: { pitch: 1.15, rate: 1.05 },
  // 裂变骑士 - 分裂战士，快速
  裂变骑士: { pitch: 1.0, rate: 1.15 },
  // 暴烈重卡 - 运输战士，厚重
  暴烈重卡: { pitch: 0.7, rate: 0.8 },
  // 深海天锚 - 海洋战士，深沉
  深海天锚: { pitch: 0.85, rate: 0.9 },
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

  constructor() {
    this.initSynth();
    this.loadSettings();
    this.setupSpeechUnlock();
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
      // 某些浏览器需要等待 voiceschanged 事件
      // 使用 onvoiceschanged 属性以兼容更多浏览器
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }

      // 移动端：页面加载后延迟再次加载语音
      if (isMobileDevice()) {
        setTimeout(() => this.loadVoices(), 1000);
      }
    } else {
      console.warn('Web Speech API not supported');
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
   */
  private loadVoices(): void {
    if (!this.synth) return;

    const voices = this.synth.getVoices();

    if (voices.length === 0) {
      // 移动端可能需要等待
      if (isMobileDevice()) {
        console.log('[SpeechService] No voices available yet, will retry');
      }
      return;
    }

    // 优先选择普通话语音，按优先级排序
    const chineseVoices = voices.filter(
      (voice) =>
        voice.lang.startsWith('zh-CN') ||
        voice.lang.startsWith('zh_CN') ||
        voice.lang === 'zh'
    );

    // 优先级：Google > Microsoft > 系统内置
    const preferredProviders = ['Google', 'Microsoft', 'Safari', 'Apple'];
    for (const provider of preferredProviders) {
      const voice = chineseVoices.find((v) => v.name.includes(provider));
      if (voice) {
        this.chineseVoice = voice;
        this.voicesLoaded = true;
        console.log('[SpeechService] Using voice:', voice.name);
        return;
      }
    }

    // 使用第一个可用的中文语音
    if (chineseVoices.length > 0) {
      this.chineseVoice = chineseVoices[0];
      this.voicesLoaded = true;
      console.log('[SpeechService] Using first Chinese voice:', chineseVoices[0].name);
    } else {
      // 移动端可能没有中文语音，使用默认语音
      console.warn('[SpeechService] No Chinese voice found, using default');
      // 尝试使用任何可用的语音
      if (voices.length > 0) {
        this.chineseVoice = voices[0];
        this.voicesLoaded = true;
      }
    }
  }

  /**
   * 检查语音服务是否可用
   */
  isAvailable(): boolean {
    return this.synth !== null;
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
      // 移除多余空格
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * 播放语音
   * @param text 要朗读的文本
   * @param speaker 说话人（用于匹配音色）
   * @param onEnd 播放完成回调
   */
  speak(text: string, speaker?: string, onEnd?: () => void): void {
    if (!this.synth || !this.enabled || !text.trim()) {
      onEnd?.();
      return;
    }

    // 移动端检查是否已解锁
    if (isMobileDevice() && !this.speechUnlocked) {
      console.log('[SpeechService] Speech not unlocked yet on mobile, skipping');
      onEnd?.();
      return;
    }

    // 停止当前播放
    this.stop();

    // 移动端：确保 resume 被调用（Android bug workaround）
    if (isMobileDevice()) {
      this.synth.resume();
    }

    // 如果需要压低 BGM
    if (this.priorityMode && soundService.isBGMPlaying()) {
      this.bgmWasPlaying = true;
      soundService.duckBGM();
    }

    // 预处理文本：移除不需要朗读的符号
    const cleanedText = this.cleanTextForSpeech(text);

    const utterance = new SpeechSynthesisUtterance(cleanedText);

    // 设置语音
    if (this.chineseVoice) {
      utterance.voice = this.chineseVoice;
    }
    utterance.lang = 'zh-CN';

    // 应用角色音色配置
    const config = this.getVoiceConfig(speaker);
    utterance.pitch = config.pitch;
    utterance.rate = config.rate;
    utterance.volume = this.volume;

    // 设置回调
    utterance.onstart = () => {
      console.log('[SpeechService] Speech started');
    };

    utterance.onend = () => {
      console.log('[SpeechService] Speech ended');
      this.onSpeechEnd();
      onEnd?.();
    };

    utterance.onerror = (event) => {
      if (event.error !== 'canceled') {
        console.warn('[SpeechService] Speech error:', event.error);
      }
      this.onSpeechEnd();
      onEnd?.();
    };

    console.log('[SpeechService] Speaking:', cleanedText.slice(0, 50) + '...');
    this.synth.speak(utterance);

    // 移动端：Android 有时需要这个 workaround
    if (isMobileDevice()) {
      // 强制触发播放
      setTimeout(() => {
        if (this.synth && !this.synth.speaking && this.synth.pending) {
          this.synth.resume();
        }
      }, 100);
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
   * 停止当前播放
   */
  stop(): void {
    if (this.synth) {
      this.synth.cancel();
      this.onSpeechEnd();
    }
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
