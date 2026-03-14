import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeColors } from '@/config';
import { ProgressBar } from '@/shared/components';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  starsEarned: number;
  levelName: string;
}

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 24px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LevelName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${ThemeColors.primary};
`;

const QuestionIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const QuestionDot = styled(motion.div)<{ $isActive: boolean; $isCompleted: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => {
    if (props.$isCompleted) return ThemeColors.success;
    if (props.$isActive) return ThemeColors.primary;
    return '#E5E7EB';
  }};
`;

const StarsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StarIcon = styled.span`
  font-size: 20px;
`;

const StarsCount = styled(motion.span)`
  font-size: 18px;
  font-weight: 700;
  color: ${ThemeColors.star};
`;

const QuizProgress: React.FC<QuizProgressProps> = ({
  currentQuestion,
  totalQuestions,
  starsEarned,
  levelName,
}) => {
  return (
    <ProgressContainer>
      <HeaderRow>
        <LevelName>{levelName}</LevelName>
        <QuestionIndicator>
          {Array.from({ length: totalQuestions }, (_, i) => (
            <QuestionDot
              key={i}
              $isActive={i === currentQuestion}
              $isCompleted={i < currentQuestion}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.05 }}
            />
          ))}
        </QuestionIndicator>
      </HeaderRow>

      <ProgressBar
        current={currentQuestion}
        total={totalQuestions}
        showLabel={false}
        height={8}
      />

      <StarsRow>
        <StarIcon>⭐</StarIcon>
        <StarsCount
          key={starsEarned}
          initial={{ scale: 1.5 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {starsEarned}
        </StarsCount>
      </StarsRow>
    </ProgressContainer>
  );
};

export default QuizProgress;