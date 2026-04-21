/**
 * 题目故事组件 - Candy Kingdom 云朵气泡风格
 * 功能：显示当前题的故事叙事文字，高亮零件名称
 * 设计：可爱云朵气泡 + 漂浮动画 + 语音朗读
 */

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { speechService } from '@/services/speech.service';

// 🎨 Candy Kingdom 色彩方案
const CandyColors = {
  pink: '#FFB5BA',
  mint: '#7FCCB0',
  sky: '#89CFF0',
  yellow: '#FFE66D',
  lavender: '#E6E6FA',
  coral: '#FF7F7F',
  peach: '#FFCBA4',
  cream: '#FFF8E7',
};

// ☁️ 云朵漂浮动画
const cloudFloat = keyframes`
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(-4px) translateX(2px);
  }
  50% {
    transform: translateY(-6px) translateX(0px);
  }
  75% {
    transform: translateY(-3px) translateX(-2px);
  }
`;

// ✨ 星星闪烁动画
const sparkle = keyframes`
  0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
  50% { opacity: 0.7; transform: scale(0.9) rotate(10deg); }
`;

// 💫 气泡脉冲动画
const bubblePulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
`;

// ☁️ 云朵气泡容器
const CloudBubble = styled(motion.div)`
  max-width: 80%;
  margin: 12px auto;
  padding: 16px 24px;
  position: relative;
  animation: ${cloudFloat} 4s ease-in-out infinite, ${bubblePulse} 3s ease-in-out infinite;

  /* 云朵形状背景 */
  background: ${CandyColors.cream};
  border-radius: 20px;
  border: 3px solid ${CandyColors.sky};
  box-shadow:
    0 8px 0 rgba(137, 207, 240, 0.2),
    0 16px 32px rgba(137, 207, 240, 0.15),
    inset 0 -4px 12px rgba(255, 230, 109, 0.1);

  /* 云朵尾巴 */
  &::before {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 20px;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-top-color: ${CandyColors.sky};
    border-bottom: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 23px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: ${CandyColors.cream};
    border-bottom: 0;
  }

  /* 云朵装饰 */
  .cloud-decor {
    position: absolute;
    font-size: 16px;
    animation: ${sparkle} 2s ease-in-out infinite;
  }
`;

const CloudDecorTop = styled.span`
  position: absolute;
  top: -10px;
  right: 16px;
  font-size: 14px;
  animation: ${sparkle} 1.5s ease-in-out infinite;
`;

const CloudDecorSide = styled.span`
  position: absolute;
  top: 8px;
  left: -12px;
  font-size: 12px;
  animation: ${sparkle} 2s ease-in-out infinite 0.3s;
`;

// 📝 故事文字 - 可爱圆润字体
const StoryText = styled(motion.p)`
  font-size: 16px;
  font-weight: 600;
  color: #5A5A5A;
  line-height: 1.6;
  margin: 0;
  text-align: center;
`;

// 🌈 零件名称高亮 - 糖果色标记
const PartHighlight = styled.span`
  color: ${CandyColors.coral};
  font-weight: 700;
  padding: 2px 8px;
  background: rgba(255, 230, 109, 0.3);
  border-radius: 10px;
  display: inline-block;
`;

// 🔊 语音朗读指示器 - 小音符动画
const SpeakingIndicator = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 8px;
  font-size: 12px;
  color: ${CandyColors.mint};
  font-weight: 600;
`;

const NoteIcon = styled.span`
  font-size: 14px;
  animation: ${sparkle} 0.8s ease-in-out infinite;
`;

// 🎯 动画变体
const bubbleVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: -10,
    transition: { duration: 0.3 },
  },
};

interface QuestionStoryProps {
  narrative: string;
  partName?: string;
  enableSpeech?: boolean;
  speaker?: string;
}

export const QuestionStory: React.FC<QuestionStoryProps> = ({
  narrative,
  partName,
  enableSpeech = true,
  speaker = '炫蓝闪电',
}) => {
  const isSpeakingRef = useRef(false);

  // 🎙️ 语音朗读
  useEffect(() => {
    if (!enableSpeech || !narrative) return;

    speechService.stop();

    const timer = setTimeout(() => {
      isSpeakingRef.current = true;
      speechService.speak(narrative, speaker, () => {
        isSpeakingRef.current = false;
      });
    }, 300);

    return () => {
      clearTimeout(timer);
      speechService.stop();
      isSpeakingRef.current = false;
    };
  }, [narrative, enableSpeech, speaker]);

  // 高亮零件名称
  const renderHighlightedText = () => {
    if (!partName) return narrative;

    const regex = new RegExp(`"(${partName})"`, 'g');
    const parts = narrative.split(regex);

    return parts.map((part, index) => {
      if (part === partName) {
        return <PartHighlight key={index}>"{part}"</PartHighlight>;
      }
      return part;
    });
  };

  return (
    <AnimatePresence mode="wait">
      <CloudBubble
        key={narrative}
        variants={bubbleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <CloudDecorTop>✨</CloudDecorTop>
        <CloudDecorSide>☁️</CloudDecorSide>

        <StoryText>{renderHighlightedText()}</StoryText>

        {enableSpeech && (
          <SpeakingIndicator
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <NoteIcon>🎵</NoteIcon>
            正在朗读...
          </SpeakingIndicator>
        )}
      </CloudBubble>
    </AnimatePresence>
  );
};

export default QuestionStory;