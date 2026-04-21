import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeColors } from '@/config';
import { useSound } from '@/shared/hooks';
import { Shape } from '@/shared/components';
import type { ChoiceQuestionData, ChoiceOption } from '@/types';

interface ChoiceQuestionProps {
  question: ChoiceQuestionData;
  selectedAnswer: string | null;
  isAnswered: boolean;
  onAnswer: (optionId: string) => void;
}

const QuestionContainer = styled.div`
  width: 100%;
`;

const QuestionText = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${ThemeColors.textPrimary};
  text-align: center;
  margin-bottom: 24px;
  line-height: 1.5;
`;

const QuestionImage = styled.img`
  max-width: 30%;
  max-height: 60px;
  margin: 0 auto 24px;
  border-radius: 12px;
`;

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const OptionButton = styled(motion.button)<{
  $isSelected: boolean;
  $isCorrect: boolean;
  $isWrong: boolean;
  $disabled: boolean;
}>`
  padding: 16px 20px;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 600;
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
  border: 3px solid transparent;
  transition: all 0.2s ease;
  background: white;
  color: ${ThemeColors.textPrimary};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 80px;

  ${(props) => {
    if (props.$isCorrect) {
      return `
        border-color: ${ThemeColors.success};
        background: rgba(16, 185, 129, 0.1);
      `;
    }
    if (props.$isWrong) {
      return `
        border-color: ${ThemeColors.error};
        background: rgba(239, 68, 68, 0.1);
      `;
    }
    if (props.$isSelected) {
      return `
        border-color: ${ThemeColors.primary};
        background: rgba(79, 70, 229, 0.1);
      `;
    }
    return `
      &:hover {
        border-color: ${ThemeColors.primaryLight};
        background: rgba(79, 70, 229, 0.05);
      }
    `;
  }}
`;

const OptionImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

const OptionLabel = styled.span`
  flex: 1;
  text-align: left;
`;

const ShapeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

const CorrectIcon = styled.span`
  color: ${ThemeColors.success};
  font-size: 24px;
`;

const WrongIcon = styled.span`
  color: ${ThemeColors.error};
  font-size: 24px;
`;

const ChoiceQuestion: React.FC<ChoiceQuestionProps> = ({
  question,
  selectedAnswer,
  isAnswered,
  onAnswer,
}) => {
  const { playClick, playCorrect, playWrong } = useSound();

  const handleOptionClick = (option: ChoiceOption) => {
    if (isAnswered) return;
    playClick();
    onAnswer(option.id);
  };

  const getOptionState = (option: ChoiceOption) => {
    if (!isAnswered) {
      return {
        isSelected: selectedAnswer === option.id,
        isCorrect: false,
        isWrong: false,
      };
    }

    const isCorrect = option.id === question.correctAnswer;
    const isWrong = selectedAnswer === option.id && !isCorrect;

    return {
      isSelected: selectedAnswer === option.id,
      isCorrect,
      isWrong,
    };
  };

  // 播放答题音效
  React.useEffect(() => {
    if (isAnswered && selectedAnswer) {
      if (selectedAnswer === question.correctAnswer) {
        playCorrect();
      } else {
        playWrong();
      }
    }
  }, [isAnswered, selectedAnswer, question.correctAnswer, playCorrect, playWrong]);

  return (
    <QuestionContainer>
      <QuestionText>{question.question}</QuestionText>
      {question.questionImage && (
        <QuestionImage src={question.questionImage} alt="题目图片" />
      )}
      <OptionsContainer>
        {question.options.map((option, index) => {
          const state = getOptionState(option);
          return (
            <OptionButton
              key={option.id}
              $isSelected={state.isSelected}
              $isCorrect={state.isCorrect}
              $isWrong={state.isWrong}
              $disabled={isAnswered}
              onClick={() => handleOptionClick(option)}
              whileHover={!isAnswered ? { scale: 1.02 } : {}}
              whileTap={!isAnswered ? { scale: 0.98 } : {}}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {option.shape && (
                <ShapeWrapper>
                  <Shape
                    type={option.shape}
                    color={option.shapeColor || 'blue'}
                    size="small"
                    showLabel={false}
                  />
                </ShapeWrapper>
              )}
              {option.image && <OptionImage src={option.image} alt={option.text} />}
              <OptionLabel>{option.text}</OptionLabel>
              {state.isCorrect && <CorrectIcon>✓</CorrectIcon>}
              {state.isWrong && <WrongIcon>✕</WrongIcon>}
            </OptionButton>
          );
        })}
      </OptionsContainer>
    </QuestionContainer>
  );
};

// 需要 React 用于 useEffect
import React from 'react';

export default ChoiceQuestion;