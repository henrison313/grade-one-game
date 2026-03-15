import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeColors } from '@/config';
import { useSound } from '@/shared/hooks';
import type { MazeQuestionData } from '@/types';

interface MazeGameProps {
  question: MazeQuestionData;
  onAnswer: (score: number) => void;
  onProgress?: (progress: number) => void;
}

const GameContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const GameTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${ThemeColors.textPrimary};
  text-align: center;
  margin-bottom: 16px;
`;

const MazeGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 320px;
  margin: 0 auto 20px;
`;

const MazeRow = styled.div`
  display: flex;
  gap: 4px;
`;

const MazeCell = styled(motion.div)<{ $type: 'player' | 'obstacle' | 'path' | 'start' | 'end' | 'answered' | 'default' }>`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${(props) => {
    switch (props.$type) {
      case 'player':
        return ThemeColors.primary;
      case 'obstacle':
        return '#374151';
      case 'path':
        return 'rgba(79, 70, 229, 0.1)';
      case 'start':
        return 'rgba(16, 185, 129, 0.3)';
      case 'end':
        return 'rgba(245, 158, 11, 0.3)';
      case 'answered':
        return 'rgba(16, 185, 129, 0.5)';
      default:
        return 'rgba(255, 255, 255, 0.5)';
    }
  }};
  border: 2px solid
    ${(props) => {
      switch (props.$type) {
        case 'player':
          return ThemeColors.primary;
        case 'obstacle':
          return '#1F2937';
        case 'path':
          return ThemeColors.primaryLight;
        case 'start':
          return ThemeColors.success;
        case 'end':
          return ThemeColors.warning;
        case 'answered':
          return ThemeColors.success;
        default:
          return 'rgba(0, 0, 0, 0.1)';
      }
    }};
  font-size: 20px;
`;

const MazeInfo = styled.div`
  max-width: 320px;
  margin: 0 auto 16px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: ${ThemeColors.success};
  transition: width 0.3s ease;
`;

const ProgressText = styled.p`
  font-size: 14px;
  color: ${ThemeColors.textSecondary};
  text-align: center;
  margin-top: 8px;
`;

const QuestionDisplay = styled(motion.div)`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const QuestionText = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: ${ThemeColors.textPrimary};
  text-align: center;
  margin-bottom: 16px;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

const OptionButton = styled(motion.button)<{ $selected?: 'correct' | 'wrong' }>`
  padding: 16px;
  background: ${(props) => {
    if (props.$selected === 'correct') return 'rgba(16, 185, 129, 0.2)';
    if (props.$selected === 'wrong') return 'rgba(239, 68, 68, 0.2)';
    return 'white';
  }};
  border: 2px solid
    ${(props) => {
      if (props.$selected === 'correct') return ThemeColors.success;
      if (props.$selected === 'wrong') return ThemeColors.error;
      return ThemeColors.primaryLight;
    }};
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  color: ${ThemeColors.textPrimary};
  cursor: pointer;
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

const MazeGame: React.FC<MazeGameProps> = ({
  question,
  onAnswer,
  onProgress,
}) => {
  const { playCorrect, playWrong } = useSound();
  const [playerPosition, setPlayerPosition] = useState({ x: question.start.x, y: question.start.y });
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [isSolving, setIsSolving] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [answeredCells, setAnsweredCells] = useState<Set<string>>(new Set());
  const [hasCalledOnAnswer, setHasCalledOnAnswer] = useState(false);

  const totalQuestions = question.questions.length;

  useEffect(() => {
    if (currentPathIndex >= question.path.length - 1 && !hasCalledOnAnswer) {
      setIsFinished(true);
      setHasCalledOnAnswer(true);
      onAnswer(100);
    }
  }, [currentPathIndex, question.path.length, onAnswer, hasCalledOnAnswer]);

  useEffect(() => {
    const answeredCount = answeredCells.size;
    onProgress?.((answeredCount / totalQuestions) * 100);
  }, [answeredCells, totalQuestions, onProgress]);

  const handleOptionClick = (optionIndex: number) => {
    if (isSolving || isFinished) return;

    setSelectedOption(optionIndex);
    setIsSolving(true);

    const nextPathPoint = question.path[currentPathIndex + 1];
    const currentNode = question.questions.find(
      (q) => q.x === nextPathPoint.x && q.y === nextPathPoint.y
    );

    if (currentNode && optionIndex === currentNode.correctAnswer) {
      playCorrect();
      setFeedback('correct');
      setTimeout(() => {
        const nextPathIndex = currentPathIndex + 1;
        const nextPoint = question.path[nextPathIndex];
        setPlayerPosition({ x: nextPoint.x, y: nextPoint.y });
        setCurrentPathIndex(nextPathIndex);
        setAnsweredCells((prev) => new Set([...prev, `${nextPoint.x}-${nextPoint.y}`]));

        if (nextPathIndex >= question.path.length - 1 && !hasCalledOnAnswer) {
          setIsFinished(true);
          setHasCalledOnAnswer(true);
          onAnswer(100);
        }
        setSelectedOption(null);
        setFeedback(null);
        setIsSolving(false);
      }, 800);
    } else {
      playWrong();
      setFeedback('wrong');
      setTimeout(() => {
        setSelectedOption(null);
        setFeedback(null);
        setIsSolving(false);
      }, 800);
    }
  };

  const isObstacle = (x: number, y: number) => {
    return question.obstacles.some((o) => o.x === x && o.y === y);
  };

  const isOnPath = (x: number, y: number) => {
    return question.path.some((p) => p.x === x && p.y === y);
  };

  const hasQuestion = (x: number, y: number) => {
    return question.questions.some((q) => q.x === x && q.y === y);
  };

  const getCurrentQuestion = () => {
    if (currentPathIndex < question.path.length - 1) {
      const nextPathPoint = question.path[currentPathIndex + 1];
      return question.questions.find(
        (q) => q.x === nextPathPoint.x && q.y === nextPathPoint.y
      );
    }
    return undefined;
  };

  const currentQuestion = getCurrentQuestion();

  const getCellType = (x: number, y: number): 'player' | 'obstacle' | 'path' | 'start' | 'end' | 'answered' | 'default' => {
    if (playerPosition.x === x && playerPosition.y === y) return 'player';
    if (isObstacle(x, y)) return 'obstacle';
    if (question.start.x === x && question.start.y === y) return 'start';
    if (question.end.x === x && question.end.y === y) return 'end';
    if (answeredCells.has(`${x}-${y}`)) return 'answered';
    if (isOnPath(x, y)) return 'path';
    return 'default';
  };

  const getCellContent = (x: number, y: number) => {
    const type = getCellType(x, y);
    if (type === 'player') return '🦕';
    if (type === 'obstacle') return '⚠️';
    if (type === 'start') return '🦕';
    if (type === 'end') return '终点';
    if (type === 'answered') return '🦶';
    if (hasQuestion(x, y)) return '❓';
    if (type === 'path') return '•';
    return '';
  };

  return (
    <GameContainer>
      <GameTitle>找到通往终点的正确路径！</GameTitle>

      <MazeGrid>
        {Array.from({ length: question.gridSize }).map((_, y) => (
          <MazeRow key={y}>
            {Array.from({ length: question.gridSize }).map((_, x) => (
              <MazeCell
                key={`${x}-${y}`}
                $type={getCellType(x, y)}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: x * 0.05 + y * 0.05 }}
              >
                {getCellContent(x, y)}
              </MazeCell>
            ))}
          </MazeRow>
        ))}
      </MazeGrid>

      <MazeInfo>
        <ProgressBar>
          <ProgressFill
            style={{
              width: `${(answeredCells.size / totalQuestions) * 100}%`,
            }}
          />
        </ProgressBar>
        <ProgressText>
          进度: {answeredCells.size} / {totalQuestions}
        </ProgressText>
      </MazeInfo>

      {currentQuestion && !isFinished && (
        <AnimatePresence mode="wait">
          <QuestionDisplay
            key={currentPathIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <QuestionText>{currentQuestion.question}</QuestionText>
            <OptionsGrid>
              {currentQuestion.options.map((option, index) => (
                <OptionButton
                  key={index}
                  $selected={
                    selectedOption === index
                      ? selectedOption === currentQuestion.correctAnswer
                        ? 'correct'
                        : 'wrong'
                      : undefined
                  }
                  onClick={() => handleOptionClick(index)}
                  disabled={isSolving}
                  whileHover={!isSolving ? { scale: 1.02 } : {}}
                  whileTap={!isSolving ? { scale: 0.98 } : {}}
                >
                  {option}
                </OptionButton>
              ))}
            </OptionsGrid>
          </QuestionDisplay>
        </AnimatePresence>
      )}

      <AnimatePresence>
        {feedback === 'correct' && (
          <FeedbackOverlay
            $type="correct"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            ✓ 正确！
          </FeedbackOverlay>
        )}
        {feedback === 'wrong' && (
          <FeedbackOverlay
            $type="wrong"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            ✗ 错误！
          </FeedbackOverlay>
        )}
      </AnimatePresence>
    </GameContainer>
  );
};

export default MazeGame;