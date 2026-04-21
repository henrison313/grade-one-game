import { soundConfig } from '@/config';
import { storageService } from './storage.service';
import type { SoundType, BGMType, RarityType, SoundSettings } from '@/types';

/**
 * 音效服务
 * 管理音效播放、背景音乐和音量控制
 * 支持音频文件播放，文件不存在时使用 Web Audio API 生成音效
 */
class SoundService {
  private audioContext: AudioContext | null = null;
  private settings: SoundSettings = {
    enabled: true,
    sfxVolume: soundConfig.defaultVolume.sfx,
    bgmVolume: soundConfig.defaultVolume.bgm,
    speechVolume: soundConfig.defaultVolume.speech,
    speechEnabled: true,
    vibrationEnabled: true,
  };

  // 音频缓存
  private sfxCache: Map<string, HTMLAudioElement> = new Map();
  private currentBGM: HTMLAudioElement | null = null;
  private currentBGMType: BGMType | null = null;
  private bgmDucked: boolean = false;
  private preDuckVolume: number = 0;
  private audioFilesExist: Map<string, boolean> = new Map();
  private audioUnlocked: boolean = false;
  private pendingBGM: BGMType | null = null;

  // BGM 请求 ID - 用于取消过期的请求
  private currentBGMRequest: number = 0;

  constructor() {
    this.initAudioContext();
    this.loadSettings();
    this.setupAudioUnlock();
  }

  /**
   * 设置音频解锁（处理自动播放限制）
   */
  private setupAudioUnlock(): void {
    const unlockEvents = ['click', 'touchstart', 'keydown'];
    const unlockAudio = async () => {
      if (this.audioUnlocked) return;

      // 尝试恢复 AudioContext
      if (this.audioContext?.state === 'suspended') {
        try {
          await this.audioContext.resume();
        } catch (e) {
          // ignore
        }
      }

      // 播放一个无声音频来解锁
      try {
        const silentAudio = new Audio();
        silentAudio.volume = 0.001;
        await silentAudio.play();
        silentAudio.pause();
        this.audioUnlocked = true;
        console.log('[SoundService] Audio unlocked');

        // 如果有 pending BGM，播放它
        if (this.pendingBGM) {
          console.log(`[SoundService] Playing pending BGM: ${this.pendingBGM}`);
          const type = this.pendingBGM;
          this.pendingBGM = null;
          this.playBGM(type);
        }
      } catch (e) {
        // 忽略错误，下次交互再试
      }

      // 移除事件监听
      if (this.audioUnlocked) {
        unlockEvents.forEach(event => {
          document.removeEventListener(event, unlockAudio);
        });
      }
    };

    unlockEvents.forEach(event => {
      document.addEventListener(event, unlockAudio, { passive: true });
    });
  }

  /**
   * 初始化音频上下文
   */
  private initAudioContext(): void {
    try {
      this.audioContext = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    } catch (error) {
      console.warn('Web Audio API not supported:', error);
    }
  }

  /**
   * 确保音频上下文已激活
   */
  private ensureContext(): void {
    if (this.audioContext?.state === 'suspended') {
      this.audioContext.resume();
    }
  }

  /**
   * 从用户数据加载设置
   */
  private loadSettings(): void {
    try {
      const userData = storageService.getUserData();
      if (userData.settings) {
        this.settings = {
          ...this.settings,
          enabled: userData.settings.soundEnabled,
          vibrationEnabled: userData.settings.vibrationEnabled,
          sfxVolume: userData.settings.sfxVolume ?? this.settings.sfxVolume,
          bgmVolume: userData.settings.bgmVolume ?? this.settings.bgmVolume,
          speechVolume: userData.settings.speechVolume ?? this.settings.speechVolume,
          speechEnabled: userData.settings.speechEnabled ?? this.settings.speechEnabled,
        };
      }
    } catch (error) {
      console.warn('Failed to load sound settings:', error);
    }
  }

  /**
   * 保存设置到用户数据
   */
  private saveSettings(): void {
    try {
      storageService.updateSettings({
        soundEnabled: this.settings.enabled,
        musicEnabled: this.settings.bgmVolume > 0,
        vibrationEnabled: this.settings.vibrationEnabled,
        sfxVolume: this.settings.sfxVolume,
        bgmVolume: this.settings.bgmVolume,
        speechVolume: this.settings.speechVolume,
        speechEnabled: this.settings.speechEnabled,
      });
    } catch (error) {
      console.warn('Failed to save sound settings:', error);
    }
  }

  /**
   * 获取音效文件路径
   */
  private getSfxPath(type: SoundType): string {
    return soundConfig.sfxFiles[type];
  }

  /**
   * 检查音频文件是否存在
   * 使用 Audio 对象预加载来检测，比 fetch HEAD 更可靠
   */
  private async checkAudioFileExists(path: string): Promise<boolean> {
    // 如果缓存显示文件存在，直接返回
    if (this.audioFilesExist.get(path) === true) {
      console.log(`[SoundService] File ${path} cached as existing`);
      return true;
    }

    // 使用 Audio 对象检测文件是否存在
    return new Promise((resolve) => {
      const audio = new Audio();

      audio.addEventListener('canplaythrough', () => {
        console.log(`[SoundService] File ${path} exists and can play`);
        this.audioFilesExist.set(path, true);
        resolve(true);
      }, { once: true });

      audio.addEventListener('error', () => {
        console.log(`[SoundService] File ${path} not found or error`);
        resolve(false);
      }, { once: true });

      // 设置超时，避免长时间等待
      setTimeout(() => {
        console.log(`[SoundService] File ${path} check timeout`);
        resolve(false);
      }, 3000);

      audio.src = path;
      audio.load();
    });
  }

  // ========== Web Audio API 生成音效 ==========

  /**
   * 使用 Web Audio API 生成简单音效
   */
  private playGeneratedTone(frequency: number, duration: number, type: OscillatorType = 'sine'): void {
    if (!this.settings.enabled || !this.audioContext) return;

    this.ensureContext();

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    gainNode.gain.setValueAtTime(this.settings.sfxVolume * 0.3, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + duration
    );

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  /**
   * 生成和弦
   */
  private playGeneratedChord(frequencies: number[], duration: number): void {
    if (!this.settings.enabled || !this.audioContext) return;

    frequencies.forEach((freq, index) => {
      setTimeout(() => {
        this.playGeneratedTone(freq, duration, 'sine');
      }, index * 50);
    });
  }

  /**
   * 根据音效类型生成对应声音
   */
  private playGeneratedSound(type: SoundType): void {
    switch (type) {
      case 'correct':
        // 愉快的上升音调
        this.playGeneratedTone(523.25, 0.1, 'sine'); // C5
        setTimeout(() => this.playGeneratedTone(659.25, 0.1, 'sine'), 100); // E5
        setTimeout(() => this.playGeneratedTone(783.99, 0.2, 'sine'), 200); // G5
        break;

      case 'wrong':
        // 下降的音调
        this.playGeneratedTone(311.13, 0.15, 'square'); // Eb4
        setTimeout(() => this.playGeneratedTone(261.63, 0.2, 'square'), 150); // C4
        break;

      case 'click':
        this.playGeneratedTone(800, 0.05, 'sine');
        break;

      case 'card-reveal':
        // 神奇的上升音效
        const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99];
        notes.forEach((freq, i) => {
          setTimeout(() => this.playGeneratedTone(freq, 0.15, 'sine'), i * 80);
        });
        break;

      case 'star-earn':
        this.playGeneratedTone(880, 0.1, 'sine');
        setTimeout(() => this.playGeneratedTone(1108.73, 0.15, 'sine'), 100);
        break;

      case 'level-complete':
      case 'victory':
        // 胜利的旋律
        const melody = [
          { freq: 523.25, delay: 0 },
          { freq: 659.25, delay: 150 },
          { freq: 783.99, delay: 300 },
          { freq: 1046.50, delay: 450 },
          { freq: 783.99, delay: 600 },
          { freq: 1046.50, delay: 750 },
        ];
        melody.forEach(({ freq, delay }) => {
          setTimeout(() => this.playGeneratedTone(freq, 0.2, 'sine'), delay);
        });
        break;

      case 'defeat':
        // 失败的下降音
        this.playGeneratedTone(400, 0.3, 'sawtooth');
        setTimeout(() => this.playGeneratedTone(300, 0.4, 'sawtooth'), 300);
        break;

      case 'transform':
        // 机械变形音效
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            this.playGeneratedTone(200 + i * 50, 0.08, 'sawtooth');
          }, i * 60);
        }
        break;

      case 'drag':
        this.playGeneratedTone(400, 0.05, 'sine');
        break;

      case 'drop':
        this.playGeneratedTone(500, 0.08, 'sine');
        break;

      case 'summon':
        // 魔法召唤风格的上升音调序列
        const summonNotes = [
          { freq: 261.63, delay: 0 },
          { freq: 329.63, delay: 100 },
          { freq: 392.00, delay: 200 },
          { freq: 523.25, delay: 300 },
          { freq: 659.25, delay: 400 },
          { freq: 783.99, delay: 500 },
          { freq: 1046.50, delay: 600 },
        ];
        summonNotes.forEach(({ freq, delay }) => {
          setTimeout(() => this.playGeneratedTone(freq, 0.2, 'sine'), delay);
        });
        // 和弦叠加
        setTimeout(() => {
          this.playGeneratedChord([523.25, 659.25, 783.99], 0.3);
        }, 600);
        break;

      case 'combo-1':
        this.playGeneratedTone(600, 0.1, 'sine');
        break;

      case 'combo-5':
        this.playGeneratedTone(800, 0.15, 'sine');
        setTimeout(() => this.playGeneratedTone(1000, 0.15, 'sine'), 100);
        break;

      case 'combo-10':
        this.playGeneratedTone(1000, 0.2, 'sine');
        setTimeout(() => this.playGeneratedTone(1200, 0.2, 'sine'), 100);
        setTimeout(() => this.playGeneratedTone(1500, 0.3, 'sine'), 200);
        break;

      case 'ultimate-bronze':
        this.playGeneratedTone(300, 0.5, 'sawtooth');
        break;

      case 'ultimate-silver':
        this.playGeneratedTone(500, 0.5, 'square');
        setTimeout(() => this.playGeneratedTone(700, 0.5, 'square'), 200);
        break;

      case 'ultimate-gold':
        this.playGeneratedChord([400, 600, 800], 0.6);
        break;

      case 'ultimate-rainbow':
        for (let i = 0; i < 7; i++) {
          setTimeout(() => {
            this.playGeneratedTone(400 + i * 100, 0.2, 'sine');
          }, i * 100);
        }
        break;

      case 'ultimate-prismatic':
        this.playGeneratedChord([300, 500, 700, 900, 1100], 1.0);
        break;

      default:
        this.playGeneratedTone(440, 0.1, 'sine');
    }
  }

  // ========== 全局控制 ==========

  /**
   * 设置音效总开关
   */
  setEnabled(enabled: boolean): void {
    this.settings.enabled = enabled;
    if (!enabled) {
      this.stopBGM();
    }
    this.saveSettings();
  }

  /**
   * 设置音量（立即应用到正在播放的 BGM）
   */
  setVolume(type: 'sfx' | 'bgm' | 'speech', volume: number): void {
    const clampedVolume = Math.max(0, Math.min(1, volume));

    switch (type) {
      case 'sfx':
        this.settings.sfxVolume = clampedVolume;
        break;
      case 'bgm':
        this.settings.bgmVolume = clampedVolume;
        // 立即应用到正在播放的 BGM
        if (this.currentBGM) {
          this.currentBGM.volume = clampedVolume;
        }
        break;
      case 'speech':
        this.settings.speechVolume = clampedVolume;
        break;
    }

    this.saveSettings();
  }

  /**
   * 获取当前设置
   */
  getSettings(): SoundSettings {
    return { ...this.settings };
  }

  /**
   * 更新所有设置（立即应用）
   */
  updateSettings(settings: Partial<SoundSettings>): void {
    const oldSettings = { ...this.settings };
    this.settings = { ...this.settings, ...settings };
    this.saveSettings();

    // 如果 BGM 音量变化，立即应用
    if (settings.bgmVolume !== undefined && this.currentBGM && !this.bgmDucked) {
      this.currentBGM.volume = settings.bgmVolume;
    }

    // 如果总开关关闭，停止 BGM
    if (settings.enabled === false && oldSettings.enabled !== false) {
      this.stopBGM();
    }
  }

  // ========== 音效播放 ==========

  /**
   * 播放指定音效（优先使用音频文件，不存在时使用生成音效）
   */
  async play(type: SoundType): Promise<void> {
    if (!this.settings.enabled) return;

    const path = this.getSfxPath(type);
    const fileExists = await this.checkAudioFileExists(path);

    if (fileExists) {
      // 使用音频文件
      this.ensureContext();

      let audio = this.sfxCache.get(path);
      if (!audio) {
        audio = new Audio(path);
        audio.preload = 'auto';
        this.sfxCache.set(path, audio);
      }

      const clone = audio.cloneNode() as HTMLAudioElement;
      clone.volume = this.settings.sfxVolume;
      clone.play().catch(() => {
        // 播放失败时回退到生成音效
        this.playGeneratedSound(type);
      });

      clone.addEventListener('ended', () => {
        clone.remove();
      });
    } else {
      // 使用 Web Audio API 生成音效
      this.playGeneratedSound(type);
    }
  }

  /**
   * 播放连击音效
   */
  playCombo(count: number): void {
    if (!this.settings.enabled) return;

    if (count >= 10) {
      this.play('combo-10');
    } else if (count >= 5) {
      this.play('combo-5');
    } else if (count >= 1) {
      this.play('combo-1');
    }
  }

  /**
   * 播放绝招音效
   */
  playUltimate(rarity: RarityType): void {
    if (!this.settings.enabled) return;

    const soundType: SoundType = `ultimate-${rarity}`;
    this.play(soundType);
  }

  // ========== 背景音乐 ==========

  /**
   * 使用 Web Audio API 生成简单 BGM（循环）
   */
  private playGeneratedBGM(type: BGMType): void {
    if (!this.settings.enabled || !this.audioContext) return;

    // 设置当前 BGM 类型（stopBGMInternal 已经在外部调用）
    this.currentBGMType = type;

    // 简单的节拍生成器
    const baseFreq = type === 'menu' ? 440 : type === 'battle' ? 330 : type === 'victory' ? 523 : 392;

    // 创建循环节奏
    const playBeat = () => {
      if (!this.settings.enabled) return;

      const osc = this.audioContext!.createOscillator();
      const gain = this.audioContext!.createGain();

      osc.connect(gain);
      gain.connect(this.audioContext!.destination);

      osc.frequency.value = baseFreq;
      osc.type = 'sine';

      gain.gain.setValueAtTime(this.settings.bgmVolume * 0.1, this.audioContext!.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext!.currentTime + 0.5);

      osc.start(this.audioContext!.currentTime);
      osc.stop(this.audioContext!.currentTime + 0.5);
    };

    // 每秒播放一次节拍作为占位
    const intervalId = window.setInterval(playBeat, 1000);

    // 存储 interval ID 以便停止
    (this as any)._bgmIntervalId = intervalId;

    console.log(`[SoundService] Playing generated ${type} BGM`);
  }

  /**
   * 播放背景音乐（简化版本，无队列）
   */
  async playBGM(type: BGMType): Promise<void> {
    console.log(`[SoundService] playBGM requested: ${type}, current: ${this.currentBGMType}`);

    if (!this.settings.enabled) {
      console.log('[SoundService] Sound disabled, not playing BGM');
      return;
    }

    // 生成新的请求 ID
    const requestId = ++this.currentBGMRequest;

    // 如果已经是当前播放的 BGM，直接返回
    if (this.currentBGMType === type && this.currentBGM && !this.currentBGM.paused) {
      console.log(`[SoundService] BGM ${type} already playing`);
      return;
    }

    // 如果已暂停的同类型，恢复播放
    if (this.currentBGMType === type && this.currentBGM && this.currentBGM.paused) {
      console.log(`[SoundService] Resuming paused BGM ${type}`);
      this.currentBGM.play().catch(() => {});
      return;
    }

    // 切换到新类型：立即停止当前 BGM
    if (this.currentBGMType && this.currentBGMType !== type) {
      console.log(`[SoundService] Stopping BGM ${this.currentBGMType} to switch to ${type}`);
      this.stopBGMInternal();
    }

    // 执行播放
    await this._doPlayBGM(type, requestId);
  }

  /**
   * 实际执行 BGM 播放（内部方法）
   */
  private async _doPlayBGM(type: BGMType, requestId: number): Promise<void> {
    console.log(`[SoundService] _doPlayBGM: ${type}, path: ${soundConfig.bgmFiles[type]}, requestId: ${requestId}`);

    // 立即检查是否是过期请求
    if (requestId !== this.currentBGMRequest) {
      console.log(`[SoundService] Request ${requestId} is stale (current: ${this.currentBGMRequest}), skipping`);
      return;
    }

    // 动态导入配置（避免循环依赖）
    const { bgmSceneConfig } = await import('@/config');
    const path = soundConfig.bgmFiles[type];

    // 检查文件是否存在
    const fileExists = await this.checkAudioFileExists(path);
    console.log(`[SoundService] File exists: ${fileExists}`);

    if (fileExists) {
      // 再次检查请求是否过期（文件检查是异步的）
      if (requestId !== this.currentBGMRequest) {
        console.log(`[SoundService] Request ${requestId} became stale during file check, skipping`);
        return;
      }

      // 设置当前 BGM 类型（在创建 audio 之前）
      this.currentBGMType = type;

      const audio = new Audio(path);
      const config = bgmSceneConfig[type];
      audio.loop = config.loop;
      audio.volume = this.settings.bgmVolume;

      // 设置状态
      this.currentBGM = audio;

      await new Promise<void>((resolve) => {
        const onCanPlay = () => {
          console.log(`[SoundService] Audio ready, playing: ${path}`);
          audio.play().then(() => {
            console.log(`[SoundService] BGM ${type} started playing successfully`);
            this.pendingBGM = null;
          }).catch((error) => {
            console.warn('[SoundService] BGM play failed:', error.name);
            if (error.name === 'NotAllowedError') {
              console.log(`[SoundService] Setting pending BGM: ${type}`);
              this.pendingBGM = type;
            } else {
              this.stopBGMInternal();
              this.playGeneratedBGM(type);
            }
          });
          resolve();
        };

        const onError = () => {
          console.warn(`[SoundService] Audio failed to load: ${path}`);
          this.stopBGMInternal();
          this.playGeneratedBGM(type);
          resolve();
        };

        audio.addEventListener('canplaythrough', onCanPlay, { once: true });
        audio.addEventListener('error', onError, { once: true });
        audio.load();
      });

      // 播放完成后再次检查请求是否过期
      if (requestId !== this.currentBGMRequest) {
        console.log(`[SoundService] Request ${requestId} completed but is stale, stopping BGM`);
        this.stopBGMInternal();
      }
    } else {
      console.log(`[SoundService] Falling back to generated BGM: ${type}`);
      this.currentBGMType = type;
      this.playGeneratedBGM(type);
    }
  }

  /**
   * 内部停止方法（不重置 Promise）
   */
  private stopBGMInternal(): void {
    console.log('[SoundService] stopBGMInternal called');

    // 停止音频文件 BGM
    if (this.currentBGM) {
      this.currentBGM.pause();
      this.currentBGM.currentTime = 0;
      this.currentBGM = null;
    }

    // 停止生成 BGM
    if ((this as any)._bgmIntervalId) {
      clearInterval((this as any)._bgmIntervalId);
      (this as any)._bgmIntervalId = null;
    }

    this.currentBGMType = null;
    this.bgmDucked = false;
  }

  /**
   * 停止背景音乐
   */
  stopBGM(): void {
    console.log('[SoundService] stopBGM called');
    this.currentBGMRequest++; // 使之前的请求失效
    this.stopBGMInternal();
  }

  /**
   * 暂停背景音乐
   */
  pauseBGM(): void {
    this.currentBGM?.pause();
  }

  /**
   * 恢复背景音乐
   */
  resumeBGM(): void {
    if (this.settings.enabled && this.currentBGM) {
      this.currentBGM.play().catch(() => {});
    }
  }

  /**
   * 检查 BGM 是否正在播放
   */
  isBGMPlaying(): boolean {
    return this.currentBGM !== null && !this.currentBGM.paused;
  }

  /**
   * 压低 BGM 音量（用于语音播放时）
   */
  duckBGM(): void {
    if (!this.currentBGM || this.bgmDucked) return;

    this.preDuckVolume = this.currentBGM.volume;
    this.currentBGM.volume = soundConfig.bgmDuckVolume;
    this.bgmDucked = true;
  }

  /**
   * 恢复 BGM 音量
   */
  unduckBGM(): void {
    if (!this.currentBGM || !this.bgmDucked) return;

    this.currentBGM.volume = this.preDuckVolume || this.settings.bgmVolume;
    this.bgmDucked = false;
  }

  // ========== 便捷方法 ==========

  playCorrect(): void { this.play('correct'); }
  playWrong(): void { this.play('wrong'); }
  playClick(): void { this.play('click'); }
  playCardReveal(): void { this.play('card-reveal'); }
  playStarEarn(): void { this.play('star-earn'); }
  playLevelComplete(): void { this.play('level-complete'); }
  playTransform(): void { this.play('transform'); }
  playDrag(): void { this.play('drag'); }
  playDrop(): void { this.play('drop'); }
  playSummon(): void { this.play('summon'); }
}

export const soundService = new SoundService();
