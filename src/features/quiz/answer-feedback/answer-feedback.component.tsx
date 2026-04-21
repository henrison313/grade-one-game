import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeColors, GameConfig } from '@/config';

interface AnswerFeedbackProps {
  isCorrect: boolean;
  explanation: string;
  onNext: () => void;
  isLastQuestion: boolean;
  autoNext?: boolean;  // 答对时自动下一题
}

const FeedbackContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 20px;
`;

const FeedbackContent = styled(motion.div)<{ $isCorrect: boolean }>`
  position: relative;
  z-index: 1;
  background: white;
  border-radius: 24px;
  padding: 32px;
  text-align: center;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  border: 4px solid ${(props) =>
    props.$isCorrect ? ThemeColors.success : ThemeColors.error};
`;

const ResultIcon = styled(motion.div)<{ $isCorrect: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${(props) =>
    props.$isCorrect
      ? `linear-gradient(135deg, ${ThemeColors.success} 0%, ${ThemeColors.successLight} 100%)`
      : `linear-gradient(135deg, ${ThemeColors.error} 0%, ${ThemeColors.errorLight} 100%)`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 40px;
  color: white;
`;

const ResultText = styled.h2<{ $isCorrect: boolean }>`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${(props) =>
    props.$isCorrect ? ThemeColors.success : ThemeColors.error};
`;

const Explanation = styled.p`
  font-size: 16px;
  color: ${ThemeColors.textSecondary};
  line-height: 1.6;
  margin-bottom: 24px;
`;

const StarsEarned = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
`;

const StarIcon = styled.span`
  font-size: 32px;
`;

const StarsText = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: ${ThemeColors.star};
`;

const NextButton = styled(motion.button)`
  padding: 14px 40px;
  background: linear-gradient(135deg, ${ThemeColors.primary} 0%, ${ThemeColors.primaryLight} 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

// 自动跳转倒计时提示
const AutoNextHint = styled(motion.div)`
  font-size: 14px;
  color: ${ThemeColors.textSecondary};
  margin-bottom: 16px;
`;

const AnswerFeedback: React.FC<AnswerFeedbackProps> = ({
  isCorrect,
  explanation,
  onNext,
  isLastQuestion,
  autoNext = false,
}) => {
  const [countdown, setCountdown] = useState(2);

  // 答对时自动跳转（2秒后）
  useEffect(() => {
    if (isCorrect && autoNext) {
      const countdownTimer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownTimer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      const autoNextTimer = setTimeout(() => {
        onNext();
      }, 2000);

      return () => {
        clearInterval(countdownTimer);
        clearTimeout(autoNextTimer);
      };
    }
  }, [isCorrect, autoNext, onNext]);

  return (
    <AnimatePresence>
      <FeedbackContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Overlay />
        <FeedbackContent
          $isCorrect={isCorrect}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: 'spring' as const, stiffness: 300, damping: 25 }}
        >
          <ResultIcon
            $isCorrect={isCorrect}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring' as const, stiffness: 300, damping: 20, delay: 0.2 }}
          >
            {isCorrect ? '✓' : '✕'}
          </ResultIcon>

          <ResultText $isCorrect={isCorrect}>
            {isCorrect ? '答对了！' : '答错了'}
          </ResultText>

          {isCorrect && (
            <StarsEarned
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <StarIcon>⭐</StarIcon>
              <StarsText>+{GameConfig.starsPerQuestion}</StarsText>
            </StarsEarned>
          )}

          <Explanation>{explanation}</Explanation>

          {/* 答对自动跳转时显示倒计时提示 */}
          {isCorrect && autoNext && (
            <AutoNextHint
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {countdown > 0 ? `${countdown}秒后自动进入下一题...` : '正在跳转...'}
            </AutoNextHint>
          )}

          {/* 答错或非自动跳转时显示按钮 */}
          {(!isCorrect || !autoNext) && (
            <NextButton
              onClick={onNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLastQuestion ? '查看结果' : '下一题'}
            </NextButton>
          )}
        </FeedbackContent>
      </FeedbackContainer>
    </AnimatePresence>
  );
};

export default AnswerFeedback;