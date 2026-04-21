import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeColors } from '@/config';
import { useSound } from '@/shared/hooks';
import { Shape } from '@/shared/components';
import type { MultiSelectQuestionData, ChoiceOption } from '@/types';

interface MultiSelectQuestionProps {
  question: MultiSelectQuestionData;
  selectedAnswers: string[];
  isAnswered: boolean;
  onAnswer: (optionIds: string[]) => void;
}

const QuestionContainer = styled.div`
  width: 100%;
`;

const QuestionText = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${ThemeColors.textPrimary};
  text-align: center;
  margin-bottom: 12px;
`;

const Instruction = styled.p`
  font-size: 16px;
  color: ${ThemeColors.textSecondary};
  text-align: center;
  margin-bottom: 24px;
`;

const QuestionImage = styled.img`
  max-width: 100%;
  max-height: 200px;
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
`;

const ShapeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

const CheckIcon = styled.span<{ $isCorrect: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${(props) => (props.$isCorrect ? ThemeColors.success : ThemeColors.error)};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-shrink: 0;
`;

const SubmitButton = styled(motion.button)`
  margin-top: 24px;
  padding: 12px 32px;
  background: linear-gradient(135deg, ${ThemeColors.primary} 0%, ${ThemeColors.primaryLight} 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
`;

const MultiSelectQuestion: React.FC<MultiSelectQuestionProps> = ({
  question,
  selectedAnswers: externalSelected,
  isAnswered,
  onAnswer,
}) => {
  const { playClick, playCorrect, playWrong } = useSound();
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(externalSelected || []);

  // 切换选项
  const toggleOption = (optionId: string) => {
    if (isAnswered) return;
    playClick();

    setSelectedAnswers((prev) => {
      if (prev.includes(optionId)) {
        return prev.filter((id) => id !== optionId);
      }
      return [...prev, optionId];
    });
  };

  // 提交答案
  const handleSubmit = () => {
    if (selectedAnswers.length === 0 || isAnswered) return;
    onAnswer(selectedAnswers);

    // 检查是否正确
    const isCorrect =
      selectedAnswers.length === question.correctAnswers.length &&
      selectedAnswers.every((id) => question.correctAnswers.includes(id));

    if (isCorrect) {
      playCorrect();
    } else {
      playWrong();
    }
  };

  // 获取选项状态
  const getOptionState = (option: ChoiceOption) => {
    const isSelected = selectedAnswers.includes(option.id);
    const isCorrectOption = question.correctAnswers.includes(option.id);

    if (!isAnswered) {
      return { isSelected, isCorrect: false, isWrong: false };
    }

    // 已答题
    return {
      isSelected,
      isCorrect: isCorrectOption,
      isWrong: isSelected && !isCorrectOption,
    };
  };

  return (
    <QuestionContainer>
      <QuestionText>{question.question}</QuestionText>
      <Instruction>（请选择所有正确答案）</Instruction>
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
              onClick={() => toggleOption(option.id)}
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
              {isAnswered && (state.isCorrect || state.isWrong) && (
                <CheckIcon $isCorrect={state.isCorrect}>
                  {state.isCorrect ? '✓' : '✕'}
                </CheckIcon>
              )}
            </OptionButton>
          );
        })}
      </OptionsContainer>

      {!isAnswered && selectedAnswers.length > 0 && (
        <SubmitButton
          onClick={handleSubmit}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          确认答案
        </SubmitButton>
      )}
    </QuestionContainer>
  );
};

export default MultiSelectQuestion;