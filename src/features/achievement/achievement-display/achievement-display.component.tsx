/**
 * 成就展示组件
 * 用于显示成就解锁弹窗
 */

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeColors } from '@/config';

interface AchievementDisplayProps {
  achievement: {
    id: string;
    name: string;
    description: string;
    icon: string;
  };
  onClose: () => void;
}

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Container = styled(motion.div)`
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF6B6B 100%);
  border-radius: 24px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  margin: 20px;
`;

const TrophyIcon = styled.div`
  font-size: 64px;
  margin-bottom: 16px;
  animation: bounce 1s ease-in-out;

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin-bottom: 8px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 32px;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const Button = styled(motion.button)`
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ShareButton = styled(Button)`
  background: rgba(255, 255, 255, 0.9);
  color: ${ThemeColors.textPrimary};
`;

const CloseButton = styled(Button)`
  background: rgba(255, 255, 255, 0.3);
  color: white;
`;

/**
 * 播放冠军音效
 */
const playChampionSound = () => {
  // 使用 Web Audio API 播放简单的胜利音效
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // 播放胜利和弦（C 大调）
    const frequencies = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    const now = audioContext.currentTime;

    frequencies.forEach((freq, index) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();

      osc.connect(gain);
      gain.connect(audioContext.destination);

      osc.frequency.value = freq;
      osc.type = 'sine';

      gain.gain.setValueAtTime(0.3, now + index * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, now + index * 0.1 + 0.5);

      osc.start(now + index * 0.1);
      osc.stop(now + index * 0.1 + 0.5);
    });
  } catch (error) {
    console.error('Failed to play champion sound:', error);
  }
};

export const AchievementDisplay: React.FC<AchievementDisplayProps> = ({
  achievement,
  onClose,
}) => {
  useEffect(() => {
    // 播放冠军音效
    playChampionSound();

    // 5 秒后自动关闭
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '成就解锁！',
        text: `我解锁了"${achievement.name}"成就！${achievement.description}`,
      });
    } else {
      // 降级处理：复制到剪贴板
      navigator.clipboard.writeText(
        `我解锁了"${achievement.name}"成就！${achievement.description}`
      );
      alert('已复制到剪贴板！');
    }
  };

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <Container
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
        >
          <TrophyIcon>🏆</TrophyIcon>
          <Title>成就解锁！</Title>
          <Subtitle>
            <span style={{ fontSize: 48 }}>{achievement.icon}</span>
          </Subtitle>
          <Subtitle>{achievement.name}</Subtitle>
          <Description>{achievement.description}</Description>
          <ButtonContainer>
            <ShareButton onClick={handleShare}>分享</ShareButton>
            <CloseButton onClick={onClose}>关闭</CloseButton>
          </ButtonContainer>
        </Container>
      </Overlay>
    </AnimatePresence>
  );
};
