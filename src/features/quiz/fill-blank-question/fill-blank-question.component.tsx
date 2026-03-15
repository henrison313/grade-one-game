import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeColors } from '@/config';
import type { FillBlankQuestionData } from '@/types';

interface FillBlankQuestionProps {
  question: FillBlankQuestionData;
  selectedAnswer: string | null;
  isAnswered: boolean;
  onAnswer: (answer: string) => void;
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
  line-height: 1.8;
`;

const QuestionImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  margin: 0 auto 24px;
  border-radius: 12px;
`;

const BlankInput = styled.input<{ $isCorrect: boolean; $isWrong: boolean }>`
  display: inline-block;
  width: 80px;
  padding: 8px 12px;
  margin: 0 4px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  border: 3px solid
    ${(props) =>
      props.$isCorrect ? ThemeColors.success : props.$isWrong ? ThemeColors.error : ThemeColors.primary};
  border-radius: 8px;
  outline: none;
  background: white;
  color: ${ThemeColors.textPrimary};
  transition: all 0.2s ease;

  &:focus {
    border-color: ${ThemeColors.primary};
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
  }

  &:disabled {
    background: #f5f5f5;
  }
`;

const BlankResult = styled.span<{ $isCorrect: boolean }>`
  display: inline-block;
  padding: 8px 16px;
  margin: 0 4px;
  font-size: 20px;
  font-weight: 600;
  background: ${(props) => (props.$isCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)')};
  color: ${(props) => (props.$isCorrect ? ThemeColors.success : ThemeColors.error)};
  border-radius: 8px;
  border: 2px solid ${(props) => (props.$isCorrect ? ThemeColors.success : ThemeColors.error)};
`;

const HintBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  margin-bottom: 24px;
  background: rgba(245, 158, 11, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(245, 158, 11, 0.3);
`;

const HintIcon = styled.span`
  font-size: 20px;
`;

const HintText = styled.span`
  font-size: 16px;
  color: ${ThemeColors.textSecondary};
`;

const CorrectAnswerBox = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  padding: 12px 16px;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 12px;
`;

const CorrectLabel = styled.span`
  font-size: 16px;
  color: ${ThemeColors.textSecondary};
`;

const CorrectValue = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${ThemeColors.success};
`;

const ConfirmButton = styled(motion.button)<{ $disabled: boolean }>`
  margin-top: 24px;
  padding: 12px 32px;
  background: ${(props) =>
    props.$disabled ? '#ccc' : `linear-gradient(135deg, ${ThemeColors.primary} 0%, ${ThemeColors.primaryLight} 100%)`};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
`;

const FillBlankQuestion: React.FC<FillBlankQuestionProps> = ({
  question,
  selectedAnswer,
  isAnswered,
  onAnswer,
}) => {
  const [userAnswer, setUserAnswer] = useState(selectedAnswer || '');

  const checkAnswer = (input: string): boolean => {
    const normalizedInput = input.trim();
    const correctAnswers = Array.isArray(question.answer) ? question.answer : [question.answer];

    return correctAnswers.some((ans) => ans.trim().toLowerCase() === normalizedInput.toLowerCase());
  };

  const handleConfirm = () => {
    if (!userAnswer.trim()) return;
    onAnswer(userAnswer.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && userAnswer.trim() && !isAnswered) {
      handleConfirm();
    }
  };

  // 渲染题目，将 ___ 替换为输入框或结果
  const renderQuestion = () => {
    const parts = question.question.split('___');
    const isCorrect = selectedAnswer ? checkAnswer(selectedAnswer) : false;

    return (
      <span>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <>
                {isAnswered ? (
                  <BlankResult $isCorrect={isCorrect}>
                    {Array.isArray(question.answer) ? question.answer[0] : question.answer}
                  </BlankResult>
                ) : (
                  <BlankInput
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="?"
                    autoFocus
                    $isCorrect={false}
                    $isWrong={false}
                  />
                )}
              </>
            )}
          </React.Fragment>
        ))}
      </span>
    );
  };

  const correctAnswers = Array.isArray(question.answer) ? question.answer : [question.answer];
  const isCorrect = selectedAnswer ? checkAnswer(selectedAnswer) : false;

  return (
    <QuestionContainer>
      <QuestionText>{renderQuestion()}</QuestionText>
      {question.questionImage && (
        <QuestionImage src={question.questionImage} alt="题目图片" />
      )}

      {question.hint && !isAnswered && (
        <HintBox>
          <HintIcon>💭</HintIcon>
          <HintText>提示：{question.hint}</HintText>
        </HintBox>
      )}

      {isAnswered && !isCorrect && (
        <CorrectAnswerBox
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <CorrectLabel>正确答案：</CorrectLabel>
          <CorrectValue>{correctAnswers.join(' 或 ')}</CorrectValue>
        </CorrectAnswerBox>
      )}

      {!isAnswered && (
        <ConfirmButton
          onClick={handleConfirm}
          disabled={!userAnswer.trim()}
          $disabled={!userAnswer.trim()}
          whileHover={userAnswer.trim() ? { scale: 1.05 } : {}}
          whileTap={userAnswer.trim() ? { scale: 0.95 } : {}}
        >
          确认答案
        </ConfirmButton>
      )}
    </QuestionContainer>
  );
};

export default FillBlankQuestion;