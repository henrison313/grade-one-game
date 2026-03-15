/**
 * 限时模式组件 (TIMED)
 * 功能：单题倒计时，时间结束自动提交，剩余时间转换星星奖励
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import type { TimedQuestionData } from '@/types';
import ChoiceQuestion from '../choice-question/choice-question.component';

interface TimedQuestionProps {
  question: TimedQuestionData;
  onAnswer: (answer: any, timeRemaining: number) => void;
}

// 游戏容器
const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 400px;
`;

// 倒计时器
const TimerContainer = styled.div<{ urgency: 'low' | 'medium' | 'high' }>`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 20px auto;
`;

const TimerSvg = styled.svg`
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
`;

const TimerCircle = styled.circle<{ urgency: 'low' | 'medium' | 'high' }>`
  fill: none;
  stroke: #e5e7eb;
  stroke-width: 8;
`;

const TimerProgress = styled(motion.circle)<{ urgency: 'low' | 'medium' | 'high' }>`
  fill: none;
  stroke: ${({ urgency }) => {
    switch (urgency) {
      case 'high':
        return '#ef4444';
      case 'medium':
        return '#f59e0b';
      default:
        return '#10b981';
    }
  }};
  stroke-width: 8;
  stroke-linecap: round;
`;

const TimerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  font-weight: bold;
  color: #333;
`;

// 状态栏
const StatusBar = styled.div`
  display: flex;
  gap: 24px;
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

// 提示信息
const Hint = styled.div`
  text-align: center;
  color: #666;
  font-size: 14px;
  margin: 10px 0;
`;

// 奖励提示
const BonusHint = styled(motion.div)`
  padding: 8px 16px;
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: 8px;
  color: #f59e0b;
  font-size: 14px;
  margin: 10px 0;
`;

/**
 * 限时模式组件
 */
export const TimedQuestion: React.FC<TimedQuestionProps> = ({
  question,
  onAnswer,
}) => {
  const [timeRemaining, setTimeRemaining] = useState(question.timeLimit);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 倒计时
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          // 时间到，自动提交
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
    onAnswer(null, 0);
  };

  // 处理回答
  const handleAnswer = (userAnswer: any) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    onAnswer(userAnswer, timeRemaining);
  };

  // 计算紧迫程度
  const getUrgency = (): 'low' | 'medium' | 'high' => {
    const ratio = timeRemaining / question.timeLimit;
    if (ratio > 0.5) return 'low';
    if (ratio > 0.2) return 'medium';
    return 'high';
  };

  // 计算圆周长
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeRemaining / question.timeLimit) * circumference;

  // 计算可能获得的奖励
  const potentialBonus = Math.floor(timeRemaining * question.bonusPerSecond);

  return (
    <GameContainer>
      <StatusBar>
        <StatItem>
          <StatLabel>限时</StatLabel>
          <StatValue>{question.timeLimit}秒</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>奖励/秒</StatLabel>
          <StatValue>+{question.bonusPerSecond}⭐</StatValue>
        </StatItem>
      </StatusBar>

      <Hint>在规定时间内完成答题，剩余时间可兑换额外星星！</Hint>

      <BonusHint
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        key={timeRemaining}
      >
        当前可获额外奖励：+{potentialBonus}⭐
      </BonusHint>

      <TimerContainer urgency={getUrgency()}>
        <TimerSvg>
          <TimerCircle urgency={getUrgency()} cx="60" cy="60" r={radius} />
          <TimerProgress
            urgency={getUrgency()}
            cx="60"
            cy="60"
            r={radius}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: circumference - progress }}
            transition={{ duration: 1, ease: 'linear' }}
          />
        </TimerSvg>
        <TimerText>{timeRemaining}</TimerText>
      </TimerContainer>

      <div style={{ width: '100%', maxWidth: '500px' }}>
        <ChoiceQuestion
          question={question.baseQuestion as any}
          selectedAnswer={null}
          isAnswered={false}
          onAnswer={(answer) => handleAnswer(answer)}
        />
      </div>
    </GameContainer>
  );
};

export default TimedQuestion;
