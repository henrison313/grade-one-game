/**
 * 百度语音合成服务
 * 用于在 Web Speech API 不可用时提供云端 TTS 能力
 *
 * 使用方式：
 * 1. 在百度智能云创建语音合成应用，获取 API Key 和 Secret Key
 * 2. 配置环境变量或直接填入配置
 * 3. 服务会自动检测 Web Speech API 可用性，不可用时切换到百度 TTS
 */

import { soundService } from './sound.service';

/**
 * 百度 TTS 配置
 * 注意：API Key 和 Secret Key 不应暴露在前端生产环境
 * 推荐使用后端代理或 Serverless 函数获取 Access Token
 */
interface BaiduTTSConfig {
  apiKey: string;
  secretKey: string;
  // 预获取的 Access Token（推荐方式）
  accessToken?: string;
  // 语音参数
  voice?: number;      // 发音人选择，0-普通女声，1-普通男声，3-情感合成-度逍遥，4-情感合成-度丫丫
  speed?: number;      // 语速，0-15，默认5
  pitch?: number;      // 音调，0-15，默认5
  volume?: number;     // 音量，0-15，默认5
}

// 默认配置
const DEFAULT_CONFIG: Partial<BaiduTTSConfig> = {
  voice: 0,      // 普通女声
  speed: 7,      // 语速 0-15，快 30%（默认 5）
  pitch: 5,
  volume: 9,
};

/**
 * 百度 TTS 服务类
 */
class BaiduTTSService {
  private config: BaiduTTSConfig | null = null;
  private accessToken: string | null = null;
  private tokenExpireTime: number = 0;
  private audioCache: Map<string, string> = new Map(); // 文本 -> 音频 URL 缓存
  private enabled: boolean = false;
  private currentAudio: HTMLAudioElement | null = null;

  /**
   * 初始化百度 TTS 服务
   * @param config 百度 TTS 配置
   */
  init(config: BaiduTTSConfig): void {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.enabled = true;
    console.log('[BaiduTTS] Service initialized');
  }

  /**
   * 检查服务是否已配置
   */
  isConfigured(): boolean {
    return this.config !== null && this.enabled;
  }

  /**
   * 获取 Access Token
   * 注意：此方法会暴露 Secret Key，仅用于测试
   * 生产环境应通过后端代理获取 Token
   */
  private async fetchAccessToken(): Promise<string> {
    if (!this.config) {
      throw new Error('[BaiduTTS] Service not configured');
    }

    // 如果已有未过期的 Token，直接返回
    if (this.accessToken && Date.now() < this.tokenExpireTime) {
      return this.accessToken;
    }

    // 如果配置了预获取的 Token，直接使用
    if (this.config.accessToken) {
      this.accessToken = this.config.accessToken;
      return this.accessToken;
    }

    // 通过 API 获取 Token（不推荐在前端使用）
    const url = `https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=${this.config.apiKey}&client_secret=${this.config.secretKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        throw new Error(`[BaiduTTS] Token fetch failed: ${data.error_description}`);
      }

      this.accessToken = data.access_token;
      // Token 有效期通常为 30 天，提前 1 小时过期
      this.tokenExpireTime = Date.now() + (data.expires_in - 3600) * 1000;

      console.log('[BaiduTTS] Access token obtained, expires in', data.expires_in, 'seconds');
      return this.accessToken!;
    } catch (error) {
      console.error('[BaiduTTS] Failed to fetch access token:', error);
      throw error;
    }
  }

  /**
   * 生成语音缓存键
   */
  private getCacheKey(text: string, speaker?: string): string {
    const voiceId = this.getVoiceId(speaker);
    return `${text}_${voiceId}_${this.config?.speed}_${this.config?.pitch}`;
  }

  /**
   * 根据说话人获取音色 ID
   */
  private getVoiceId(speaker?: string): number {
    if (!speaker || !this.config) return this.config?.voice ?? 0;

    // 角色音色映射
    const voiceMap: Record<string, number> = {
      '炫蓝闪电': 3,     // 度逍遥 - 活泼男声
      '巨力风暴': 1,     // 普通男声 - 沉稳
      '急救卫士': 0,     // 普通女声 - 温和
      '烈火修罗': 1,     // 普通男声 - 有力
      '暗影特工': 1,     // 普通男声 - 神秘
      '旁白': 0,         // 普通女声
    };

    return voiceMap[speaker] ?? this.config.voice ?? 0;
  }

  /**
   * 合成语音
   * @param text 要合成的文本
   * @param speaker 说话人（用于选择音色）
   * @returns 音频 URL
   */
  async synthesize(text: string, speaker?: string): Promise<string> {
    if (!this.config) {
      throw new Error('[BaiduTTS] Service not configured');
    }

    // 检查缓存
    const cacheKey = this.getCacheKey(text, speaker);
    if (this.audioCache.has(cacheKey)) {
      console.log('[BaiduTTS] Using cached audio');
      return this.audioCache.get(cacheKey)!;
    }

    // 获取 Access Token
    const token = await this.fetchAccessToken();

    // 构建请求参数
    const params = new URLSearchParams({
      tex: text,
      tok: token,
      cuid: 'grade-one-game',
      ctp: '1',
      lan: 'zh',
      per: String(this.getVoiceId(speaker)),
      spd: String(this.config.speed),
      pit: String(this.config.pitch),
      vol: String(this.config.volume),
      aue: '3', // MP3 格式
    });

    const url = `https://tsn.baidu.com/text2audio?${params.toString()}`;

    // 缓存 URL
    this.audioCache.set(cacheKey, url);

    return url;
  }

  /**
   * 播放语音
   * @param text 要朗读的文本
   * @param speaker 说话人
   * @param onEnd 播放完成回调
   */
  async speak(text: string, speaker?: string, onEnd?: () => void): Promise<void> {
    if (!this.enabled) {
      onEnd?.();
      return;
    }

    try {
      // 停止当前播放
      this.stop();

      // 如果需要压低 BGM
      if (soundService.isBGMPlaying()) {
        soundService.duckBGM();
      }

      // 获取音频 URL
      const audioUrl = await this.synthesize(text, speaker);

      // 创建并播放音频
      this.currentAudio = new Audio(audioUrl);

      this.currentAudio.onended = () => {
        this.currentAudio = null;
        soundService.unduckBGM();
        onEnd?.();
      };

      this.currentAudio.onerror = (error) => {
        console.error('[BaiduTTS] Audio playback error:', error);
        this.currentAudio = null;
        soundService.unduckBGM();
        onEnd?.();
      };

      await this.currentAudio.play();
      console.log('[BaiduTTS] Playing:', text.slice(0, 30) + '...');

    } catch (error) {
      console.error('[BaiduTTS] Speak error:', error);
      soundService.unduckBGM();
      onEnd?.();
    }
  }

  /**
   * 停止播放
   */
  stop(): void {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio = null;
    }
  }

  /**
   * 检查是否正在播放
   */
  isSpeaking(): boolean {
    return this.currentAudio !== null && !this.currentAudio.paused;
  }

  /**
   * 启用/禁用服务
   */
  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    if (!enabled) {
      this.stop();
    }
  }

  /**
   * 清除缓存
   */
  clearCache(): void {
    this.audioCache.clear();
    console.log('[BaiduTTS] Cache cleared');
  }
}

// 导出单例
export const baiduTTSService = new BaiduTTSService();

/**
 * 便捷函数：使用百度 TTS 播放语音
 */
export async function speakWithBaidu(text: string, speaker?: string, onEnd?: () => void): Promise<void> {
  await baiduTTSService.speak(text, speaker, onEnd);
}
