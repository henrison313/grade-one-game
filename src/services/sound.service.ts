/**
 * 音效类型
 */
export type SoundType =
  | 'correct'
  | 'wrong'
  | 'click'
  | 'card-reveal'
  | 'star-earn'
  | 'level-complete'
  | 'transform'
  | 'drag'
  | 'drop'
  | 'summon';

/**
 * 音效服务
 */
class SoundService {
  private audioContext: AudioContext | null = null;
  private enabled: boolean = true;
  private volume: number = 0.5;

  constructor() {
    this.initAudioContext();
  }

  /**
   * 初始化音频上下文
   */
  private initAudioContext(): void {
    try {
      this.audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
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
   * 设置是否启用
   */
  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
  }

  /**
   * 设置音量
   */
  setVolume(volume: number): void {
    this.volume = Math.max(0, Math.min(1, volume));
  }

  /**
   * 生成简单音效
   */
  private playTone(frequency: number, duration: number, type: OscillatorType = 'sine'): void {
    if (!this.enabled || !this.audioContext) return;

    this.ensureContext();

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    gainNode.gain.setValueAtTime(this.volume * 0.3, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + duration
    );

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  /**
   * 播放正确答案音效
   */
  playCorrect(): void {
    if (!this.enabled) return;
    // 愉快的上升音调
    this.playTone(523.25, 0.1, 'sine'); // C5
    setTimeout(() => this.playTone(659.25, 0.1, 'sine'), 100); // E5
    setTimeout(() => this.playTone(783.99, 0.2, 'sine'), 200); // G5
  }

  /**
   * 播放错误答案音效
   */
  playWrong(): void {
    if (!this.enabled) return;
    // 下降的音调
    this.playTone(311.13, 0.15, 'square'); // Eb4
    setTimeout(() => this.playTone(261.63, 0.2, 'square'), 150); // C4
  }

  /**
   * 播放点击音效
   */
  playClick(): void {
    if (!this.enabled) return;
    this.playTone(800, 0.05, 'sine');
  }

  /**
   * 播放卡牌揭示音效
   */
  playCardReveal(): void {
    if (!this.enabled) return;
    // 神奇的上升音效
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99];
    notes.forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 0.15, 'sine'), i * 80);
    });
  }

  /**
   * 播放获得星星音效
   */
  playStarEarn(): void {
    if (!this.enabled) return;
    this.playTone(880, 0.1, 'sine');
    setTimeout(() => this.playTone(1108.73, 0.15, 'sine'), 100);
  }

  /**
   * 播放关卡完成音效
   */
  playLevelComplete(): void {
    if (!this.enabled) return;
    // 胜利的旋律
    const melody = [
      { freq: 523.25, delay: 0 },    // C5
      { freq: 659.25, delay: 150 },  // E5
      { freq: 783.99, delay: 300 },  // G5
      { freq: 1046.50, delay: 450 }, // C6
      { freq: 783.99, delay: 600 },  // G5
      { freq: 1046.50, delay: 750 }, // C6
    ];
    melody.forEach(({ freq, delay }) => {
      setTimeout(() => this.playTone(freq, 0.2, 'sine'), delay);
    });
  }

  /**
   * 播放变形音效
   */
  playTransform(): void {
    if (!this.enabled) return;
    // 机械变形音效
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        this.playTone(200 + i * 50, 0.08, 'sawtooth');
      }, i * 60);
    }
  }

  /**
   * 播放拖拽音效
   */
  playDrag(): void {
    if (!this.enabled) return;
    this.playTone(400, 0.05, 'sine');
  }

  /**
   * 播放放置音效
   */
  playDrop(): void {
    if (!this.enabled) return;
    this.playTone(500, 0.08, 'sine');
  }

  /**
   * 播放召唤音效
   */
  playSummon(): void {
    if (!this.enabled) return;
    // 魔法召唤风格的上升音调序列 + 和弦叠加
    const melody = [
      { freq: 261.63, delay: 0, duration: 0.15 },    // C4
      { freq: 329.63, delay: 100, duration: 0.15 },  // E4
      { freq: 392.00, delay: 200, duration: 0.15 },  // G4
      { freq: 523.25, delay: 300, duration: 0.2 },   // C5
      { freq: 659.25, delay: 400, duration: 0.2 },   // E5
      { freq: 783.99, delay: 500, duration: 0.25 },  // G5
      { freq: 1046.50, delay: 600, duration: 0.3 },  // C6 高潮
    ];

    melody.forEach(({ freq, delay, duration }) => {
      setTimeout(() => this.playTone(freq, duration, 'sine'), delay);
    });

    // 和弦叠加（在高潮部分）
    setTimeout(() => {
      this.playTone(523.25, 0.3, 'sine');  // C5
      this.playTone(659.25, 0.3, 'sine');  // E5
      this.playTone(783.99, 0.3, 'sine');  // G5
    }, 600);

    // 闪烁音效
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.playTone(1500 + i * 200, 0.05, 'sine');
      }, 800 + i * 50);
    }
  }

  /**
   * 播放指定音效
   */
  play(type: SoundType): void {
    switch (type) {
      case 'correct':
        this.playCorrect();
        break;
      case 'wrong':
        this.playWrong();
        break;
      case 'click':
        this.playClick();
        break;
      case 'card-reveal':
        this.playCardReveal();
        break;
      case 'star-earn':
        this.playStarEarn();
        break;
      case 'level-complete':
        this.playLevelComplete();
        break;
      case 'transform':
        this.playTransform();
        break;
      case 'drag':
        this.playDrag();
        break;
      case 'drop':
        this.playDrop();
        break;
      case 'summon':
        this.playSummon();
        break;
    }
  }
}

export const soundService = new SoundService();