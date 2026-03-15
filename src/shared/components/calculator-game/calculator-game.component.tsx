import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeColors } from '@/config';
import { useSound } from '@/shared/hooks';
import type { ChoiceQuestionData } from '@/types';

interface CalculatorGameProps {
  question: ChoiceQuestionData;
  onAnswer: (score: number) => void;
  onProgress?: (progress: number) => void;
  maxAttempts?: number;
}

const GameContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const GameHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const GameTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${ThemeColors.textPrimary};
  margin-bottom: 12px;
`;

const QuestionDisplay = styled.div`
  padding: 16px 24px;
  background: rgba(79, 70, 229, 0.1);
  border-radius: 12px;
  display: inline-block;
`;

const QuestionText = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: ${ThemeColors.primary};
`;

const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Calculator = styled.div`
  background: #1F2937;
  padding: 16px;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
`;

const CalculatorScreen = styled.div`
  background: #374151;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 12px;
`;

const ScreenInput = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: white;
  text-align: right;
  min-height: 44px;
  font-family: monospace;
`;

const ScreenInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
`;

const CalculatorKeys = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

const CalculatorKey = styled(motion.button)<{ $type: 'number' | 'clear' | 'back' | 'equals' | 'empty' }>`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 12px;
  font-size: 24px;
  font-weight: 600;
  cursor: ${(props) => (props.$type === 'empty' ? 'default' : 'pointer')};
  background: ${(props) => {
    switch (props.$type) {
      case 'number':
        return '#4B5563';
      case 'clear':
        return '#EF4444';
      case 'back':
        return '#F59E0B';
      case 'equals':
        return '#10B981';
      default:
        return 'transparent';
    }
  }};
  color: ${(props) => (props.$type === 'empty' ? 'transparent' : 'white')};
  transition: all 0.1s ease;

  &:active {
    transform: scale(0.95);
  }
`;

const CalculatorHints = styled.div`
  text-align: center;
  color: ${ThemeColors.textSecondary};
  font-size: 14px;
`;

const OptionsPreview = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  justify-content: center;
`;

const OptionTag = styled.span`
  padding: 4px 12px;
  background: rgba(79, 70, 229, 0.1);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  color: ${ThemeColors.primary};
`;

const FeedbackOverlay = styled(motion.div)<{ $type: 'correct' | 'wrong' }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 24px;
  font-weight: 700;
  color: white;
  background: ${(props) => (props.$type === 'correct' ? ThemeColors.success : ThemeColors.error)};
  z-index: 100;
`;

const GameResult = styled(motion.div)`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 200;
`;

const ResultContent = styled.div`
  background: white;
  padding: 32px;
  border-radius: 24px;
  text-align: center;
`;

const ResultTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${ThemeColors.textPrimary};
  margin-bottom: 16px;
`;

const Stars = styled.span`
  color: ${ThemeColors.star};
  font-size: 32px;
`;

const Score = styled.span`
  display: block;
  font-size: 24px;
  color: ${ThemeColors.success};
  margin-top: 8px;
`;

const ResultDetails = styled.div`
  margin: 16px 0;
  font-size: 16px;
  color: ${ThemeColors.textSecondary};
`;

const RetryButton = styled(motion.button)`
  margin-top: 24px;
  padding: 12px 32px;
  background: linear-gradient(135deg, ${ThemeColors.primary} 0%, ${ThemeColors.primaryLight} 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

interface CalculatorButton {
  value: string;
  type: 'number' | 'clear' | 'equals' | 'back' | 'empty';
}

const CalculatorGame: React.FC<CalculatorGameProps> = ({
  question,
  onAnswer,
  onProgress,
  maxAttempts = 3,
}) => {
  const { playCorrect, playWrong } = useSound();
  const [input, setInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const calculatorButtons: CalculatorButton[] = [
    { value: '7', type: 'number' },
    { value: '8', type: 'number' },
    { value: '9', type: 'number' },
    { value: 'C', type: 'clear' },
    { value: '4', type: 'number' },
    { value: '5', type: 'number' },
    { value: '6', type: 'number' },
    { value: '←', type: 'back' },
    { value: '1', type: 'number' },
    { value: '2', type: 'number' },
    { value: '3', type: 'number' },
    { value: '=', type: 'equals' },
    { value: '0', type: 'number' },
    { value: '', type: 'empty' },
    { value: '', type: 'empty' },
    { value: '', type: 'empty' },
  ];

  const handleButtonClick = useCallback(
    (button: CalculatorButton) => {
      if (isFinished) return;

      switch (button.type) {
        case 'number':
          if (input.length < 4) {
            setInput((prev) => prev + button.value);
          }
          break;
        case 'clear':
          setInput('');
          break;
        case 'back':
          setInput((prev) => prev.slice(0, -1));
          break;
        case 'equals':
          checkAnswer();
          break;
      }
    },
    [input, isFinished]
  );

  const checkAnswer = () => {
    if (!input) return;

    const userAnswer = parseInt(input);
    const correctAnswer = parseInt(question.correctAnswer);

    if (userAnswer === correctAnswer) {
      playCorrect();
      setFeedback('correct');
      setIsFinished(true);
      onAnswer(100);
    } else {
      playWrong();
      setFeedback('wrong');
      setAttempts((prev) => {
        const newAttempts = prev + 1;
        if (newAttempts >= maxAttempts) {
          setIsFinished(true);
          onAnswer(Math.max(0, 100 - (newAttempts - 1) * 30));
        }
        return newAttempts;
      });
    }

    setTimeout(() => {
      setFeedback(null);
      if (attempts < maxAttempts - 1) {
        setInput('');
      }
    }, 1000);
  };

  useEffect(() => {
    if (!isFinished && input.length > 0) {
      onProgress?.(25);
    }
    if (isFinished) {
      onProgress?.(100);
    }
  }, [input, isFinished, onProgress]);

  const resetGame = () => {
    setInput('');
    setAttempts(0);
    setFeedback(null);
    setIsFinished(false);
  };

  return (
    <GameContainer>
      <GameHeader>
        <GameTitle>超级计算器</GameTitle>
        <QuestionDisplay>
          <QuestionText>{question.question}</QuestionText>
        </QuestionDisplay>
      </GameHeader>

      <CalculatorWrapper>
        <Calculator>
          <CalculatorScreen>
            <ScreenInput>{input || '0'}</ScreenInput>
            <ScreenInfo>
              <span>尝试: {attempts} / {maxAttempts}</span>
              <span>进度: {Math.min(100, (attempts / maxAttempts) * 100)}%</span>
            </ScreenInfo>
          </CalculatorScreen>

          <CalculatorKeys>
            {calculatorButtons.map((btn, index) => (
              <CalculatorKey
                key={index}
                $type={btn.type}
                onClick={() => handleButtonClick(btn)}
                disabled={isFinished || btn.type === 'empty'}
                whileHover={btn.type !== 'empty' && !isFinished ? { scale: 1.05 } : {}}
                whileTap={btn.type !== 'empty' && !isFinished ? { scale: 0.95 } : {}}
              >
                {btn.value || ' '}
              </CalculatorKey>
            ))}
          </CalculatorKeys>
        </Calculator>

        <CalculatorHints>
          <p>提示：点击按钮输入计算结果</p>
          <OptionsPreview>
            <span>选项：</span>
            {question.options.map((opt, idx) => (
              <OptionTag key={idx}>{opt.text}</OptionTag>
            ))}
          </OptionsPreview>
        </CalculatorHints>
      </CalculatorWrapper>

      <AnimatePresence>
        {feedback === 'correct' && (
          <FeedbackOverlay
            $type="correct"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            ✓ 计算正确！
          </FeedbackOverlay>
        )}
        {feedback === 'wrong' && (
          <FeedbackOverlay
            $type="wrong"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            ✗ 再试一次
          </FeedbackOverlay>
        )}
      </AnimatePresence>

      {isFinished && (
        <GameResult
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ResultContent>
            <ResultTitle>
              <Stars>{'★'.repeat(Math.max(0, 3 - Math.floor(attempts)))}</Stars>
              <Score>{feedback === 'correct' ? '完成！' : '挑战结束'}</Score>
            </ResultTitle>
            <ResultDetails>
              <p>正确答案: {question.options.find(o => o.id === question.correctAnswer)?.text}</p>
              <p>你输入: {input || '-'}</p>
            </ResultDetails>
            <RetryButton
              onClick={resetGame}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              再玩一次
            </RetryButton>
          </ResultContent>
        </GameResult>
      )}
    </GameContainer>
  );
};

export default CalculatorGame;