import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { GameConfig } from '@/config';
import { Button } from '@/shared/components';
import { storageService } from '@/services';
import { getLevelById } from '@/data/levels.data';
import { ChoiceQuestion, DragQuestion, CircleQuestion, MultiSelectQuestion, FillBlankQuestion } from '@/features/quiz';
import QuizProgress from '../quiz-progress/quiz-progress.component';
import AnswerFeedback from '../answer-feedback/answer-feedback.component';
import type { UserAnswer } from '@/types';

const GameContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 16px;
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
`;

const QuestionArea = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: white;
  border-radius: 24px;
  margin-top: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
`;

const QuitButton = styled(Button)`
  position: absolute;
  top: 16px;
  right: 16px;
`;

interface AnswerState {
  selectedAnswer: string | string[] | null;
  placements: Record<string, string>;
  marks: Array<{ x: number; y: number; radius: number }>;
}

const QuizGame: React.FC = () => {
  const { levelId } = useParams<{ levelId: string }>();
  const navigate = useNavigate();

  // 获取关卡数据
  const level = getLevelById(levelId || '1-1');

  // 游戏状态
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [starsEarned, setStarsEarned] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answerState, setAnswerState] = useState<AnswerState>({
    selectedAnswer: null,
    placements: {},
    marks: [],
  });

  const currentQuestion = level?.questions[currentQuestionIndex];
  const totalQuestions = level?.questions.length || 0;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  // 处理答案
  const handleAnswer = useCallback(
    (answer: string | string[] | Record<string, string> | Array<{ x: number; y: number; radius: number }>) => {
      if (!currentQuestion) return;

      setIsAnswered(true);

      let isCorrect = false;

      switch (currentQuestion.type) {
        case 'choice':
          isCorrect = answer === (currentQuestion as { correctAnswer: string }).correctAnswer;
          setAnswerState((prev) => ({ ...prev, selectedAnswer: answer as string }));
          break;
        case 'multi_select': {
          const multiSelectQ = currentQuestion as { correctAnswers: string[] };
          const answerArray = answer as string[];
          isCorrect =
            Array.isArray(answerArray) &&
            answerArray.length === multiSelectQ.correctAnswers.length &&
            answerArray.every((id) => multiSelectQ.correctAnswers.includes(id));
          setAnswerState((prev) => ({ ...prev, selectedAnswer: answerArray }));
          break;
        }
        case 'drag': {
          const dragQ = currentQuestion as { targets: Array<{ id: string; accepts: string[] }> };
          const placements = answer as Record<string, string>;
          isCorrect = dragQ.targets.every((target) =>
            target.accepts.includes(placements[target.id] || '')
          );
          setAnswerState((prev) => ({ ...prev, placements }));
          break;
        }
        case 'circle':
          // 圈画题的答案检查在组件内部完成
          setAnswerState((prev) => ({ ...prev, marks: answer as Array<{ x: number; y: number; radius: number }> }));
          return; // 圈画题不自动显示反馈
        case 'fill_blank': {
          const fillBlankQ = currentQuestion as { answer: string | string[] };
          const userAnswerStr = answer as string;
          const correctAnswers = Array.isArray(fillBlankQ.answer) ? fillBlankQ.answer : [fillBlankQ.answer];
          isCorrect = correctAnswers.some(
            (ans) => ans.trim().toLowerCase() === userAnswerStr.trim().toLowerCase()
          );
          setAnswerState((prev) => ({ ...prev, selectedAnswer: userAnswerStr }));
          break;
        }
      }

      // 添加答题记录
      const userAnswer: UserAnswer = {
        questionId: `q${currentQuestionIndex + 1}`,
        isCorrect,
        timeSpent: 0,
        answer,
      };
      setAnswers((prev) => [...prev, userAnswer]);

      if (isCorrect) {
        setStarsEarned((prev) => prev + GameConfig.starsPerQuestion);
      }

      // 显示反馈
      setTimeout(() => setShowFeedback(true), 500);
    },
    [currentQuestion, currentQuestionIndex]
  );

  // 处理圈画题答案
  const handleCircleAnswer = useCallback(
    (marks: Array<{ x: number; y: number; radius: number }>) => {
      if (!currentQuestion) return;

      // 简单判断：如果有圈就认为有尝试
      setIsAnswered(true);
      setAnswerState((prev) => ({ ...prev, marks }));

      // 圈画题的正确性判断在组件内完成
      // 这里简化处理，认为圈到就算对
      const isCorrect = marks.length > 0;

      const userAnswer: UserAnswer = {
        questionId: `q${currentQuestionIndex + 1}`,
        isCorrect,
        timeSpent: 0,
        answer: marks,
      };
      setAnswers((prev) => [...prev, userAnswer]);

      if (isCorrect) {
        setStarsEarned((prev) => prev + GameConfig.starsPerQuestion);
      }

      setTimeout(() => setShowFeedback(true), 500);
    },
    [currentQuestion, currentQuestionIndex]
  );

  // 下一题
  const handleNext = useCallback(() => {
    setShowFeedback(false);
    setIsAnswered(false);
    setAnswerState({
      selectedAnswer: null,
      placements: {},
      marks: [],
    });

    if (isLastQuestion) {
      // 保存进度并跳转到完成页面
      if (level) {
        storageService.updateLevelProgress(level.id, {
          status: 'completed',
          stars: starsEarned,
        });
        storageService.unlockNextLevel(level.id);

        // 检查是否已收集该角色的卡牌
        if (!storageService.hasCollectedCard(level.guardian.id)) {
          storageService.addCollectedCard(level.guardian.id, level.id, starsEarned);
        }
      }
      navigate(`/level/${levelId}/complete?stars=${starsEarned}`);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  }, [isLastQuestion, level, levelId, navigate, starsEarned]);

  // 退出游戏
  const handleQuit = () => {
    navigate('/levels');
  };

  // 渲染题目组件
  const renderQuestion = () => {
    if (!currentQuestion) return null;

    switch (currentQuestion.type) {
      case 'choice':
        return (
          <ChoiceQuestion
            question={currentQuestion as Parameters<typeof ChoiceQuestion>[0]['question']}
            selectedAnswer={answerState.selectedAnswer as string}
            isAnswered={isAnswered}
            onAnswer={(id) => handleAnswer(id)}
          />
        );
      case 'drag':
        return (
          <DragQuestion
            question={currentQuestion as Parameters<typeof DragQuestion>[0]['question']}
            placements={answerState.placements}
            isAnswered={isAnswered}
            onAnswer={(p) => handleAnswer(p)}
          />
        );
      case 'circle':
        return (
          <CircleQuestion
            question={currentQuestion as Parameters<typeof CircleQuestion>[0]['question']}
            marks={answerState.marks}
            isAnswered={isAnswered}
            onAnswer={(m) => handleCircleAnswer(m)}
          />
        );
      case 'multi_select':
        return (
          <MultiSelectQuestion
            question={currentQuestion as Parameters<typeof MultiSelectQuestion>[0]['question']}
            selectedAnswers={answerState.selectedAnswer as string[]}
            isAnswered={isAnswered}
            onAnswer={(ids) => handleAnswer(ids)}
          />
        );
      case 'fill_blank':
        return (
          <FillBlankQuestion
            question={currentQuestion as Parameters<typeof FillBlankQuestion>[0]['question']}
            selectedAnswer={answerState.selectedAnswer as string}
            isAnswered={isAnswered}
            onAnswer={(ans) => handleAnswer(ans)}
          />
        );
      default:
        return <div>未知题目类型</div>;
    }
  };

  // 获取解释
  const getExplanation = () => {
    if (!currentQuestion) return '';
    return (currentQuestion as { explanation?: string }).explanation || '';
  };

  if (!level) {
    return (
      <GameContainer>
        <QuestionArea>关卡不存在</QuestionArea>
      </GameContainer>
    );
  }

  return (
    <GameContainer>
      <Header>
        <QuizProgress
          currentQuestion={currentQuestionIndex}
          totalQuestions={totalQuestions}
          starsEarned={starsEarned}
          levelName={level.name}
        />
      </Header>

      <QuestionArea
        key={currentQuestionIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
      >
        {renderQuestion()}
      </QuestionArea>

      <QuitButton variant="secondary" size="small" onClick={handleQuit}>
        退出
      </QuitButton>

      <AnimatePresence>
        {showFeedback && (
          <AnswerFeedback
            isCorrect={answers[answers.length - 1]?.isCorrect || false}
            explanation={getExplanation()}
            onNext={handleNext}
            isLastQuestion={isLastQuestion}
          />
        )}
      </AnimatePresence>
    </GameContainer>
  );
};

export default QuizGame;