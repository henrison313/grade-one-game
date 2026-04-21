import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';

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
  rose: '#FF9EAA',
};

// 💫 星星弹跳动画
const starBounce = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-3px) rotate(15deg); }
`;

// 🌈 进度条流动动画
const progressFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// ✨ 闪烁动画
const sparkle = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.85); }
`;

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  starsEarned: number;
  levelName: string;
}

// 🎀 进度徽章容器 - 云朵形状
const ProgressBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: ${CandyColors.cream};
  border-radius: 50px;
  box-shadow:
    0 4px 0 rgba(255, 182, 193, 0.3),
    0 8px 20px rgba(255, 182, 193, 0.2),
    inset 0 -2px 10px rgba(255, 230, 109, 0.1);
  border: 3px solid ${CandyColors.pink};
  width: 100%;
  position: relative;

  /* 云朵装饰 */
  &::before {
    content: '☁️';
    position: absolute;
    left: -15px;
    top: -8px;
    font-size: 20px;
    opacity: 0.8;
    animation: ${sparkle} 2s ease-in-out infinite;
  }

  &::after {
    content: '☁️';
    position: absolute;
    right: -15px;
    bottom: -8px;
    font-size: 16px;
    opacity: 0.6;
    animation: ${sparkle} 2s ease-in-out infinite 0.5s;
  }
`;

// 📍 关卡名称 - 可爱字体
const LevelBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background: ${CandyColors.mint};
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  color: white;
  letter-spacing: 0.5px;
`;

// ⭐ 星星容器
const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StarEmoji = styled.span`
  font-size: 18px;
  animation: ${starBounce} 1s ease-in-out infinite;
`;

const StarsNumber = styled(motion.span)`
  font-size: 16px;
  font-weight: 800;
  color: ${CandyColors.coral};
  padding: 2px 8px;
  background: rgba(255, 230, 109, 0.3);
  border-radius: 12px;
`;

// 🎯 进度指示器
const ProgressIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const QuestionDot = styled(motion.div)<{ $status: 'done' | 'current' | 'pending' }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${(props) => {
    switch (props.$status) {
      case 'done': return CandyColors.mint;
      case 'current': return CandyColors.coral;
      case 'pending': return '#E8E8E8';
    }
  }};
  border: 2px solid ${(props) => {
    switch (props.$status) {
      case 'done': return '#5FB090';
      case 'current': return '#FF6B6B';
      case 'pending': return '#D0D0D0';
    }
  }};
  position: relative;

  ${(props) => props.$status === 'current' && css`
    animation: ${sparkle} 0.8s ease-in-out infinite;
    &::after {
      content: '✦';
      position: absolute;
      top: -10px;
      left: 2px;
      font-size: 10px;
      color: ${CandyColors.yellow};
      animation: ${sparkle} 0.6s ease-in-out infinite;
    }
  `}
`;

// 📊 进度条
const ProgressBarWrapper = styled.div`
  flex: 1;
  height: 8px;
  background: rgba(255, 230, 109, 0.2);
  border-radius: 4px;
  margin: 0 12px;
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg,
    ${CandyColors.pink},
    ${CandyColors.yellow},
    ${CandyColors.mint},
    ${CandyColors.sky}
  );
  background-size: 200% 100%;
  animation: ${progressFlow} 3s ease infinite;
  border-radius: 4px;
`;

const ProgressPercent = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${CandyColors.coral};
  min-width: 36px;
`;

const QuizProgress: React.FC<QuizProgressProps> = ({
  currentQuestion,
  totalQuestions,
  starsEarned,
  levelName,
}) => {
  const progressPercent = Math.round((currentQuestion / totalQuestions) * 100);

  return (
    <ProgressBadge>
      <LevelBadge>
        📍 {levelName}
      </LevelBadge>

      <StarsContainer>
        <StarEmoji>⭐</StarEmoji>
        <StarsNumber
          key={starsEarned}
          initial={{ scale: 1.5, rotate: 10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          {starsEarned}
        </StarsNumber>
      </StarsContainer>

      <ProgressIndicator>
        {Array.from({ length: totalQuestions }, (_, i) => {
          const status = i < currentQuestion ? 'done' : i === currentQuestion ? 'current' : 'pending';
          return (
            <QuestionDot
              key={i}
              $status={status}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.05, type: 'spring' }}
            />
          );
        })}
      </ProgressIndicator>

      <ProgressBarWrapper>
        <ProgressFill
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </ProgressBarWrapper>

      <ProgressPercent>{progressPercent}%</ProgressPercent>
    </ProgressBadge>
  );
};

export default QuizProgress;