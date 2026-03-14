import { useCallback, useRef } from 'react';
import { soundService, type SoundType } from '@/services';

/**
 * 音效 Hook
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
   * 设置音效开关
   */
  const setEnabled = useCallback((enabled: boolean) => {
    soundService.setEnabled(enabled);
  }, []);

  /**
   * 设置音量
   */
  const setVolume = useCallback((volume: number) => {
    soundService.setVolume(volume);
  }, []);

  return {
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
    setEnabled,
    setVolume,
  };
}