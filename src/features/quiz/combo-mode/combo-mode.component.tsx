/**
 * 连击模式组件 (COMBO)
 * 功能：倒计时快速切换题目，连击计数显示，连击奖励计算
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import type { ComboQuestionData } from '@/types';
import ChoiceQuestion from '../choice-question/choice-question.component';

interface ComboModeProps {
  config: ComboQuestionData;
  onComplete: (stars: number, comboCount: number) => void;
}

// 游戏容器
const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 500px;
`;

// 状态栏
const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  margin-bottom: 16px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const StatLabel = styled.span`
  font-size: 12px;
  color: #666;
`;

const StatValue = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

// 连击计数器
const ComboCounter = styled(motion.div)`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  pointer-events: none;
  z-index: 100;
`;

const ComboNumber = styled(motion.span)`
  font-size: 72px;
  font-weight: bold;
  color: #f59e0b;
  text-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
`;

const ComboLabel = styled.span`
  font-size: 24px;
  color: #f59e0b;
  font-weight: bold;
`;

// 倒计时器
const TimerBar = styled.div`
  width: 100%;
  height: 12px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  overflow: hidden;
  margin: 10px 0;
`;

const TimerProgress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #34d399 100%);
  border-radius: 6px;
`;

// 题目区域
const QuestionArea = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  margin-top: 20px;
`;

// 进度指示
const ProgressIndicator = styled.div`
  display: flex;
  gap: 8px;
  margin: 10px 0;
`;

const ProgressDot = styled(motion.div)<{ active: boolean; completed: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ completed, active }) =>
    completed ? '#10b981' : active ? '#667eea' : '#d1d5db'};
`;

// 提示信息
const Hint = styled.div`
  text-align: center;
  color: #666;
  font-size: 14px;
  margin: 10px 0;
`;

/**
 * 连击模式组件
 */
export const ComboMode: React.FC<ComboModeProps> = ({
  config,
  onComplete,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [comboCount, setComboCount] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(config.config.timeLimit);
  const [showCombo, setShowCombo] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 总时间倒计时
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // 处理时间到
  const handleTimeUp = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    calculateResult();
  };

  // 处理回答
  const handleAnswer = (_answer: any) => {
    // 检查答案是否正确（简化处理，假设答对）
    const isCorrect = true; // 实际应由题目组件判断

    if (isCorrect) {
      const newCombo = comboCount + 1;
      setComboCount(newCombo);
      setMaxCombo(Math.max(newCombo, maxCombo));

      // 显示连击效果
      if (newCombo >= config.config.comboThreshold) {
        setShowCombo(true);
        setTimeout(() => setShowCombo(false), 1500);
      }
    } else {
      setComboCount(0);
    }

    // 下一题
    if (currentQuestionIndex < config.config.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 所有题目完成
      calculateResult();
    }
  };

  // 计算结果
  const calculateResult = () => {
    const basePerQuestion = 10;
    const comboBonus = config.config.comboBonusStars || 2;
    const perfectBonus = 30;

    const questions = config.config.questions;
    const baseStars = questions.length * basePerQuestion;
    const comboStars = Math.floor(comboCount / config.config.comboThreshold) * comboBonus;
    const perfectStars = comboCount === questions.length ? perfectBonus : 0;
    const timeBonus = Math.floor(timeRemaining / 5);

    const totalStars = baseStars + comboStars + perfectStars + timeBonus;
    setTimeout(() => onComplete(totalStars, comboCount), 1000);
  };

  const currentQuestion = config.config.questions[currentQuestionIndex];
  const progress = (timeRemaining / config.config.timeLimit) * 100;

  return (
    <GameContainer>
      <StatusBar>
        <StatItem>
          <StatLabel>题目</StatLabel>
          <StatValue>
            {currentQuestionIndex + 1}/{config.config.questions.length}
          </StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>连击</StatLabel>
          <StatValue>{comboCount}🔥</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>时间</StatLabel>
          <StatValue>{timeRemaining}秒</StatValue>
        </StatItem>
      </StatusBar>

      <Hint>快速答题，连续答对可触发连击奖励！</Hint>

      <TimerBar>
        <TimerProgress
          initial={{ width: '100%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: 'linear' }}
        />
      </TimerBar>

      <ProgressIndicator>
        {config.config.questions.map((_, index) => (
          <ProgressDot
            key={index}
            active={index === currentQuestionIndex}
            completed={index < currentQuestionIndex}
          />
        ))}
      </ProgressIndicator>

      <AnimatePresence>
        {showCombo && comboCount >= config.config.comboThreshold && (
          <ComboCounter
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
          >
            <ComboNumber>{comboCount}</ComboNumber>
            <ComboLabel>连击!</ComboLabel>
          </ComboCounter>
        )}
      </AnimatePresence>

      <QuestionArea>
        {currentQuestion && (
          <ChoiceQuestion
            question={currentQuestion as any}
            selectedAnswer={null}
            isAnswered={false}
            onAnswer={handleAnswer}
          />
        )}
      </QuestionArea>
    </GameContainer>
  );
};

export default ComboMode;
