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

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  margin-bottom: 24px;
`;

const InputRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const StepLabel = styled.span`
  font-size: 18px;
  color: ${ThemeColors.textSecondary};
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
  const [userAnswers, setUserAnswers] = useState<string[]>(
    selectedAnswer ? selectedAnswer.split(',') : []
  );

  // 检测题目中有多少个需要填写的空白（使用 {{___}} 标记）
  const blankCount = (question.question.match(/\{\{___\}\}/g) || []).length;
  const isMultiBlank = blankCount > 1;

  const checkAnswer = (answers: string[]): boolean => {
    const correctAnswers = Array.isArray(question.answer) ? question.answer : [question.answer];

    if (isMultiBlank) {
      // 多空白：每个空白对应一个答案
      // correctAnswers 中每个元素可能是逗号分隔的多个正确值（如 ['a,b', 'c,d']）
      return answers.length === blankCount && answers.every((ans, i) => {
        const correctForPosition = correctAnswers[i] || correctAnswers[0];
        const validAnswersForPosition = correctForPosition.split(',').map(a => a.trim().toLowerCase());
        return validAnswersForPosition.includes(ans.trim().toLowerCase());
      });
    }

    // 单空白：correctAnswers 表示"答案可以是其中任意一个"
    return correctAnswers.some((ans) =>
      ans.trim().toLowerCase() === answers[0]?.trim().toLowerCase()
    );
  };

  const handleInputChange = (index: number, value: string) => {
    if (isAnswered) return;
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const handleConfirm = () => {
    if (userAnswers.some(a => !a.trim())) return;
    // 将多个答案用逗号连接（不加空格）
    onAnswer(userAnswers.map(a => a.trim()).join(','));
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter') {
      if (index < userAnswers.length - 1) {
        // 跳转到下一个输入框
        const nextInput = document.getElementById(`blank-input-${index + 1}`);
        nextInput?.focus();
      } else if (userAnswers.every(a => a.trim()) && !isAnswered) {
        handleConfirm();
      }
    }
  };

  // 渲染多个空白输入
  const renderMultiBlankInputs = () => {
    const parts = question.question.split('\{\{___\}\}');
    const allAnswers = userAnswers.length > 0 ? userAnswers : Array(blankCount).fill('');

    return (
      <InputGroup>
        {parts.map((part, partIndex) => (
          <InputRow key={partIndex}>
            <StepLabel>{part}</StepLabel>
            {partIndex < parts.length - 1 && (
              isAnswered ? (
                <BlankResult $isCorrect={checkAnswer(userAnswers)}>
                  {Array.isArray(question.answer)
                    ? (question.answer[0]?.split(',')[partIndex] || question.answer[0])
                    : (question.answer?.split(',')[partIndex] || '?')
                  }
                </BlankResult>
              ) : (
                <BlankInput
                  id={`blank-input-${partIndex}`}
                  type="text"
                  value={allAnswers[partIndex] || ''}
                  onChange={(e) => handleInputChange(partIndex, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, partIndex)}
                  placeholder="?"
                  autoFocus={partIndex === 0}
                  $isCorrect={false}
                  $isWrong={false}
                />
              )
            )}
          </InputRow>
        ))}
      </InputGroup>
    );
  };

  const correctAnswers = Array.isArray(question.answer) ? question.answer : [question.answer];
  const isCorrect = selectedAnswer ? checkAnswer(userAnswers) : false;

  // 单空白情况的渲染
  const renderSingleBlank = () => {
    const parts = question.question.split('\{\{___\}\}');
    return (
      <QuestionText>
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
                      value={userAnswers[0] || ''}
                      onChange={(e) => handleInputChange(0, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, 0)}
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
      </QuestionText>
    );
  };

  return (
    <QuestionContainer>
      {isMultiBlank ? renderMultiBlankInputs() : renderSingleBlank()}
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
          disabled={userAnswers.some(a => !a.trim())}
          $disabled={userAnswers.some(a => !a.trim())}
          whileHover={userAnswers.every(a => a.trim()) ? { scale: 1.05 } : {}}
          whileTap={userAnswers.every(a => a.trim()) ? { scale: 0.95 } : {}}
        >
          确认答案
        </ConfirmButton>
      )}
    </QuestionContainer>
  );
};

export default FillBlankQuestion;