/**
 * 战斗界面组件
 * 功能：守护者图像展示、星星进度条、答题区域、绝招动画触发
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import type { Level } from '@/types';
import { QuestionType } from '@/types';
import UltimateAnimation from '@/features/battle/ultimate-animation/ultimate-animation.component';
import ChoiceQuestion from '@/features/quiz/choice-question/choice-question.component';
import MultiSelectQuestion from '@/features/quiz/multi-select-question/multi-select-question.component';
import CircleQuestion from '@/features/quiz/circle-question/circle-question.component';
import DragQuestion from '@/features/quiz/drag-question/drag-question.component';
import FillBlankQuestion from '@/features/quiz/fill-blank-question/fill-blank-question.component';
import LinkQuestion from '@/features/quiz/link-question/link-question.component';
import MazeGame from '@/features/quiz/maze-question/maze-question.component';
import ShapeMatchingGame from '@/features/quiz/shape-matching-game/shape-matching-game.component';
import TangramGame from '@/features/quiz/tangram-game/tangram-game.component';
import ComboMode from '@/features/quiz/combo-mode/combo-mode.component';
import TimedQuestion from '@/features/quiz/timed-question/timed-question.component';

interface BattleScreenProps {
  level: Level;
  onComplete: (stars: number, victory: boolean) => void;
}

// 战斗容器
const BattleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 600px;
  max-width: 800px;
  margin: 0 auto;
`;

// 守护者区域
const GuardianArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  width: 100%;
`;

// 守护者图像
const GuardianImage = styled(motion.img)`
  width: 150px;
  height: 150px;
  object-fit: contain;
  filter: drop-shadow(0 0 20px rgba(255, 0, 0, 0.3));
`;

// 守护者名称
const GuardianName = styled.h2`
  font-size: 24px;
  color: white;
  margin: 10px 0;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

// 守护者头衔
const GuardianTitle = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
`;

// 星星进度条
const StarProgressContainer = styled.div`
  width: 100%;
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  margin-bottom: 20px;
`;

const StarProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: white;
  font-size: 14px;
`;

const StarProgressBar = styled.div`
  width: 100%;
  height: 24px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
`;

const StarProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #FFD700 0%, #FFA500 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
`;

const StarIcon = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

// 问题区域
const QuestionArea = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 20px;
  margin-top: 20px;
`;

// 胜利/失败提示
const ResultOverlay = styled(motion.div)<{ victory: boolean }>`
  position: fixed;
  inset: 0;
  background: ${({ victory }) =>
    victory
      ? 'rgba(16, 185, 129, 0.9)'
      : 'rgba(239, 68, 68, 0.9)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ResultTitle = styled.h1`
  font-size: 48px;
  color: white;
  margin: 0 0 20px;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
`;

const ResultMessage = styled.p`
  font-size: 24px;
  color: white;
  margin: 0 0 40px;
`;

// 题目进度
const QuestionProgress = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 10px 0;
`;

const QuestionDot = styled.div<{ active: boolean; completed: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ completed, active }) =>
    completed ? '#10b981' : active ? '#667eea' : '#d1d5db'};
`;

/**
 * 战斗界面组件
 */
export const BattleScreen: React.FC<BattleScreenProps> = ({
  level,
  onComplete,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentStars, setCurrentStars] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [victory, setVictory] = useState(false);
  const [showUltimate, setShowUltimate] = useState(false);

  const totalQuestions = level.questions.length;
  const targetStars = level.totalStars * 0.9; // 90% 阈值

  // 获取当前题目
  const currentQuestion = level.questions[currentQuestionIndex];

  // 处理回答
  const handleAnswer = (_answer: any, bonusStars: number = 0) => {
    // 简化处理：假设答对
    const starsEarned = 10 + bonusStars;
    setCurrentStars((prev) => prev + starsEarned);

    // 下一题或结束
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // 所有题目完成，判定胜利
      const isVictory = currentStars + starsEarned >= targetStars;
      setVictory(isVictory);
      setShowResult(true);

      if (isVictory) {
        // 显示绝招动画
        setTimeout(() => {
          setShowUltimate(true);
        }, 1000);
      }
    }
  };

  // 处理绝招动画完成
  const handleUltimateComplete = () => {
    setShowUltimate(false);
    onComplete(currentStars, victory);
  };

  // 处理跳过绝招
  const handleSkipUltimate = () => {
    setShowUltimate(false);
    onComplete(currentStars, victory);
  };

  // 根据题型渲染不同的组件
  const renderQuestion = () => {
    if (!currentQuestion) return null;

    switch (currentQuestion.type) {
      case QuestionType.CHOICE:
        return (
          <ChoiceQuestion
            question={currentQuestion}
            selectedAnswer={null}
            isAnswered={false}
            onAnswer={(answer) => handleAnswer(answer, 0)}
          />
        );
      case QuestionType.MULTI_SELECT:
        return (
          <MultiSelectQuestion
            question={currentQuestion}
            selectedAnswers={[]}
            isAnswered={false}
            onAnswer={(answer) => handleAnswer(answer, 0)}
          />
        );
      case QuestionType.CIRCLE:
        return (
          <CircleQuestion
            question={currentQuestion}
            marks={[]}
            isAnswered={false}
            onAnswer={(answer) => handleAnswer(answer, 0)}
          />
        );
      case QuestionType.DRAG:
        return (
          <DragQuestion
            question={currentQuestion}
            placements={{}}
            isAnswered={false}
            onAnswer={(answer) => handleAnswer(answer, 0)}
          />
        );
      case QuestionType.FILL_BLANK:
        return (
          <FillBlankQuestion
            question={currentQuestion}
            selectedAnswer=""
            isAnswered={false}
            onAnswer={(answer) => handleAnswer(answer, 0)}
          />
        );
      case QuestionType.LINK:
        return (
          <LinkQuestion
            question={currentQuestion}
            onAnswer={(pairs) => handleAnswer(pairs, 0)}
          />
        );
      case QuestionType.MAZE:
        return (
          <MazeGame
            question={currentQuestion}
            onComplete={(stars) => handleAnswer(null, stars)}
          />
        );
      case QuestionType.SHAPE_MATCH:
        return (
          <ShapeMatchingGame
            config={currentQuestion as any}
            onComplete={(stars, _timeUsed) => handleAnswer(null, stars)}
          />
        );
      case QuestionType.TANGRAM:
        return (
          <TangramGame
            question={currentQuestion}
            onComplete={(stars) => handleAnswer(null, stars)}
          />
        );
      case QuestionType.COMBO:
        return (
          <ComboMode
            config={currentQuestion}
            onComplete={(stars, _combo) => handleAnswer(null, stars)}
          />
        );
      case QuestionType.TIMED:
        return (
          <TimedQuestion
            question={currentQuestion}
            onAnswer={(answer, timeRemaining) => {
              const bonus = timeRemaining;
              handleAnswer(answer, bonus);
            }}
          />
        );
      default:
        return (
          <ChoiceQuestion
            question={currentQuestion as any}
            selectedAnswer={null}
            isAnswered={false}
            onAnswer={(answer) => handleAnswer(answer, 0)}
          />
        );
    }
  };

  return (
    <BattleContainer>
      {/* 守护者区域 */}
      <GuardianArea>
        <GuardianImage
          src={level.guardian.robotImage}
          alt={level.guardian.name}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        <GuardianName>{level.guardian.name}</GuardianName>
        <GuardianTitle>{level.guardian.title}</GuardianTitle>
      </GuardianArea>

      {/* 星星进度条 */}
      <StarProgressContainer>
        <StarProgressLabel>
          <span>星星进度</span>
          <span>
            {currentStars} / {Math.floor(targetStars)} (90%)
          </span>
        </StarProgressLabel>
        <StarProgressBar>
          <StarProgressFill
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(100, (currentStars / targetStars) * 100)}%` }}
          >
            <StarIcon>⭐</StarIcon>
          </StarProgressFill>
        </StarProgressBar>
      </StarProgressContainer>

      {/* 题目进度 */}
      <QuestionProgress>
        {level.questions.map((_, index) => (
          <QuestionDot
            key={index}
            active={index === currentQuestionIndex}
            completed={index < currentQuestionIndex}
          />
        ))}
      </QuestionProgress>

      {/* 问题区域 */}
      <QuestionArea>{renderQuestion()}</QuestionArea>

      {/* 结果覆盖层 */}
      <AnimatePresence>
        {showResult && !showUltimate && (
          <ResultOverlay
            victory={victory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ResultTitle>{victory ? '胜利!' : '失败!'}</ResultTitle>
            <ResultMessage>
              {victory
                ? `你获得了 ${currentStars} 颗星星，成功击败了 ${level.guardian.name}!`
                : `你获得了 ${currentStars} 颗星星，还需要 ${Math.floor(targetStars) - currentStars} 颗星星才能获胜。`}
            </ResultMessage>
          </ResultOverlay>
        )}
      </AnimatePresence>

      {/* 绝招动画 */}
      <AnimatePresence>
        {showUltimate && (
          <UltimateAnimation
            character={level.guardian}
            rarity={level.guardian.rarity}
            onComplete={handleUltimateComplete}
            onSkip={handleSkipUltimate}
          />
        )}
      </AnimatePresence>
    </BattleContainer>
  );
};

export default BattleScreen;
