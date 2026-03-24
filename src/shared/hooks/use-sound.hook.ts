import { useCallback, useRef } from 'react';
import { soundService } from '@/services/sound.service';
import { speechService, speakAsync } from '@/services/speech.service';
import type { SoundType, BGMType, RarityType, SoundSettings } from '@/types';

/**
 * 音效 Hook
 * 提供音效播放、背景音乐控制和语音播放功能
 */
export function useSound() {
  const lastPlayTimeRef = useRef<Record<string, number>>({});
  const debounceTime = 100; // 防抖时间（毫秒）

  /**
   * 播放音效（带防抖）
   */
  const play = useCallback((type: SoundType) => {
    const now = Date.now();
    const lastTime = lastPlayTimeRef.current[type] || 0;

    if (now - lastTime < debounceTime) {
      return; // 防抖
    }

    lastPlayTimeRef.current[type] = now;
    soundService.play(type);
  }, []);

  /**
   * 播放正确音效
   */
  const playCorrect = useCallback(() => play('correct'), [play]);

  /**
   * 播放错误音效
   */
  const playWrong = useCallback(() => play('wrong'), [play]);

  /**
   * 播放点击音效
   */
  const playClick = useCallback(() => play('click'), [play]);

  /**
   * 播放卡牌揭示音效
   */
  const playCardReveal = useCallback(() => play('card-reveal'), [play]);

  /**
   * 播放获得星星音效
   */
  const playStarEarn = useCallback(() => play('star-earn'), [play]);

  /**
   * 播放关卡完成音效
   */
  const playLevelComplete = useCallback(() => play('level-complete'), [play]);

  /**
   * 播放变形音效
   */
  const playTransform = useCallback(() => play('transform'), [play]);

  /**
   * 播放拖拽音效
   */
  const playDrag = useCallback(() => play('drag'), [play]);

  /**
   * 播放放置音效
   */
  const playDrop = useCallback(() => play('drop'), [play]);

  /**
   * 播放召唤音效
   */
  const playSummon = useCallback(() => play('summon'), [play]);

  /**
   * 播放胜利音效
   */
  const playVictory = useCallback(() => play('victory'), [play]);

  /**
   * 播放失败音效
   */
  const playDefeat = useCallback(() => play('defeat'), [play]);

  // ========== 连击音效 ==========

  /**
   * 播放连击音效
   */
  const playCombo = useCallback((count: number) => {
    soundService.playCombo(count);
  }, []);

  // ========== 背景音乐 ==========

  /**
   * 播放背景音乐
   */
  const playBGM = useCallback((type: BGMType) => {
    soundService.playBGM(type);
  }, []);

  /**
   * 停止背景音乐
   */
  const stopBGM = useCallback(() => {
    soundService.stopBGM();
  }, []);

  /**
   * 暂停背景音乐
   */
  const pauseBGM = useCallback(() => {
    soundService.pauseBGM();
  }, []);

  /**
   * 恢复背景音乐
   */
  const resumeBGM = useCallback(() => {
    soundService.resumeBGM();
  }, []);

  // ========== 绝招音效 ==========

  /**
   * 播放绝招音效
   */
  const playUltimate = useCallback((rarity: RarityType) => {
    soundService.playUltimate(rarity);
  }, []);

  // ========== 语音播放 ==========

  /**
   * 播放语音（带 Promise）
   */
  const speak = useCallback(
    async (text: string, speaker?: string): Promise<void> => {
      return speakAsync(text, speaker);
    },
    []
  );

  /**
   * 停止语音播放
   */
  const stopSpeaking = useCallback(() => {
    speechService.stop();
  }, []);

  // ========== 设置控制 ==========

  /**
   * 获取当前设置
   */
  const getSettings = useCallback((): SoundSettings => {
    return soundService.getSettings();
  }, []);

  /**
   * 更新设置
   */
  const updateSettings = useCallback((settings: Partial<SoundSettings>) => {
    soundService.updateSettings(settings);
  }, []);

  /**
   * 设置音效总开关
   */
  const setEnabled = useCallback((enabled: boolean) => {
    soundService.setEnabled(enabled);
  }, []);

  /**
   * 设置音量
   */
  const setVolume = useCallback(
    (type: 'sfx' | 'bgm' | 'speech', volume: number) => {
      soundService.setVolume(type, volume);
    },
    []
  );

  return {
    // 基础音效
    play,
    playCorrect,
    playWrong,
    playClick,
    playCardReveal,
    playStarEarn,
    playLevelComplete,
    playTransform,
    playDrag,
    playDrop,
    playSummon,
    playVictory,
    playDefeat,
    // 连击音效
    playCombo,
    // 背景音乐
    playBGM,
    stopBGM,
    pauseBGM,
    resumeBGM,
    // 绝招音效
    playUltimate,
    // 语音播放
    speak,
    stopSpeaking,
    // 设置控制
    getSettings,
    updateSettings,
    setEnabled,
    setVolume,
  };
}
