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

  constructor() {
    this.initSynth();
    this.loadSettings();
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
        return;
      }
    }

    // 使用第一个可用的中文语音
    if (chineseVoices.length > 0) {
      this.chineseVoice = chineseVoices[0];
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

    // 停止当前播放
    this.stop();

    // 如果需要压低 BGM
    if (this.priorityMode && soundService.isBGMPlaying()) {
      this.bgmWasPlaying = true;
      soundService.duckBGM();
    }

    const utterance = new SpeechSynthesisUtterance(text);

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
    utterance.onend = () => {
      this.onSpeechEnd();
      onEnd?.();
    };

    utterance.onerror = (event) => {
      if (event.error !== 'canceled') {
        console.warn('Speech error:', event.error);
      }
      this.onSpeechEnd();
      onEnd?.();
    };

    this.synth.speak(utterance);
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
