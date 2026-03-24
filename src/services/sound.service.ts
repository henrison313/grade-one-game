import { soundConfig, bgmSceneConfig } from '@/config';
import { storageService } from './storage.service';
import type { SoundType, BGMType, RarityType, SoundSettings } from '@/types';

/**
 * 音效服务
 * 管理音效播放、背景音乐和音量控制
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

  constructor() {
    this.initAudioContext();
    this.loadSettings();
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
   * 获取或创建音频元素
   */
  private getAudioElement(type: SoundType): HTMLAudioElement | null {
    const path = this.getSfxPath(type);

    if (this.sfxCache.has(path)) {
      return this.sfxCache.get(path)!;
    }

    const audio = new Audio(path);
    audio.preload = 'auto';
    this.sfxCache.set(path, audio);
    return audio;
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
   * 设置音量
   */
  setVolume(type: 'sfx' | 'bgm' | 'speech', volume: number): void {
    const clampedVolume = Math.max(0, Math.min(1, volume));

    switch (type) {
      case 'sfx':
        this.settings.sfxVolume = clampedVolume;
        break;
      case 'bgm':
        this.settings.bgmVolume = clampedVolume;
        // 实时更新当前 BGM 音量
        if (this.currentBGM && !this.bgmDucked) {
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
   * 更新所有设置
   */
  updateSettings(settings: Partial<SoundSettings>): void {
    this.settings = { ...this.settings, ...settings };
    this.saveSettings();

    // 实时应用 BGM 音量
    if (this.currentBGM && !this.bgmDucked) {
      this.currentBGM.volume = this.settings.bgmVolume;
    }

    // 如果禁用音效，停止 BGM
    if (!this.settings.enabled) {
      this.stopBGM();
    }
  }

  // ========== 音效播放 ==========

  /**
   * 播放指定音效
   */
  play(type: SoundType): void {
    if (!this.settings.enabled) return;

    this.ensureContext();

    const audio = this.getAudioElement(type);
    if (!audio) return;

    // 克隆音频元素以支持同时播放
    const clone = audio.cloneNode() as HTMLAudioElement;
    clone.volume = this.settings.sfxVolume;
    clone.play().catch(() => {
      // 忽略自动播放限制错误
    });

    // 播放结束后清理
    clone.addEventListener('ended', () => {
      clone.remove();
    });
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
   * 播放背景音乐
   */
  playBGM(type: BGMType): void {
    if (!this.settings.enabled) return;
    if (this.currentBGMType === type && this.currentBGM && !this.currentBGM.paused) {
      return; // 已经在播放相同 BGM
    }

    // 停止当前 BGM
    this.stopBGM();

    const src = soundConfig.bgmFiles[type];
    const config = bgmSceneConfig[type];

    const audio = new Audio(src);
    audio.loop = config.loop;
    audio.volume = this.settings.bgmVolume;

    this.currentBGM = audio;
    this.currentBGMType = type;

    audio.play().catch((error) => {
      console.warn('BGM play failed:', error);
    });
  }

  /**
   * 停止背景音乐
   */
  stopBGM(): void {
    if (this.currentBGM) {
      this.currentBGM.pause();
      this.currentBGM.currentTime = 0;
      this.currentBGM = null;
      this.currentBGMType = null;
      this.bgmDucked = false;
    }
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

  /**
   * 播放正确答案音效
   */
  playCorrect(): void {
    this.play('correct');
  }

  /**
   * 播放错误答案音效
   */
  playWrong(): void {
    this.play('wrong');
  }

  /**
   * 播放点击音效
   */
  playClick(): void {
    this.play('click');
  }

  /**
   * 播放卡牌揭示音效
   */
  playCardReveal(): void {
    this.play('card-reveal');
  }

  /**
   * 播放获得星星音效
   */
  playStarEarn(): void {
    this.play('star-earn');
  }

  /**
   * 播放关卡完成音效
   */
  playLevelComplete(): void {
    this.play('level-complete');
  }

  /**
   * 播放变形音效
   */
  playTransform(): void {
    this.play('transform');
  }

  /**
   * 播放拖拽音效
   */
  playDrag(): void {
    this.play('drag');
  }

  /**
   * 播放放置音效
   */
  playDrop(): void {
    this.play('drop');
  }

  /**
   * 播放召唤音效
   */
  playSummon(): void {
    this.play('summon');
  }
}

export const soundService = new SoundService();
