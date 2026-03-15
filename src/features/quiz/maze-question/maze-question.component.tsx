/**
 * 迷宫题组件 (MAZE)
 * 功能：网格迷宫显示，路径节点有问题，答对才能移动到下一节点
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import type { MazeQuestionData } from '@/types';
import { QuestionType } from '@/types';
import ChoiceQuestion from '../choice-question/choice-question.component';

interface MazeQuestionProps {
  question: MazeQuestionData;
  onComplete: (stars: number) => void;
}

// 游戏容器
const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 500px;
`;

// 迷宫网格
const MazeGrid = styled.div<{ gridSize: number }>`
  display: grid;
  grid-template-columns: repeat(${({ gridSize }) => gridSize}, 60px);
  grid-template-rows: repeat(${({ gridSize }) => gridSize}, 60px);
  gap: 4px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  margin: 20px 0;
`;

// 网格单元格
const GridCell = styled(motion.div)<{
  isPath: boolean;
  isStart: boolean;
  isEnd: boolean;
  isCurrent: boolean;
  isVisited: boolean;
  isObstacle: boolean;
}>`
  width: 60px;
  height: 60px;
  background: ${({ isPath, isStart, isEnd, isCurrent, isVisited, isObstacle }) => {
    if (isObstacle) return '#4b5563';
    if (isStart) return '#10b981';
    if (isEnd) return '#f59e0b';
    if (isCurrent) return '#667eea';
    if (isVisited) return '#34d399';
    if (isPath) return 'rgba(255, 255, 255, 0.3)';
    return 'rgba(255, 255, 255, 0.05)';
  }};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: ${({ isPath, isCurrent }) => (isPath || isCurrent ? 'pointer' : 'default')};
  box-shadow: ${({ isCurrent }) =>
    isCurrent ? '0 0 20px rgba(102, 126, 234, 0.6)' : 'none'};
  transition: all 0.3s ease;
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

// 问题区域
const QuestionArea = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  margin-top: 20px;
`;

// 提示信息
const Hint = styled.div`
  text-align: center;
  color: #666;
  font-size: 14px;
  margin: 10px 0;
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

/**
 * 迷宫题组件
 */
export const MazeGame: React.FC<MazeQuestionProps> = ({
  question,
  onComplete,
}) => {
  const [currentPosition, setCurrentPosition] = useState(question.start);
  const [visitedPath, setVisitedPath] = useState<Array<{ x: number; y: number }>>([question.start]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showingQuestion, setShowingQuestion] = useState(false);
  const [currentQuestionNode, setCurrentQuestionNode] = useState(question.questions[0]);

  // 检查是否是路径上的节点
  const getPathNode = (x: number, y: number) => {
    return question.questions.find((node) => node.x === x && node.y === y);
  };

  // 检查是否可以移动到该位置
  const canMoveTo = (x: number, y: number) => {
    // 检查是否是障碍物
    const isObstacle = question.obstacles.some((obs) => obs.x === x && obs.y === y);
    if (isObstacle) return false;

    // 检查是否在路径上或是起点/终点
    const isOnPath = question.path.some((p) => p.x === x && p.y === y);
    const isStart = question.start.x === x && question.start.y === y;
    const isEnd = question.end.x === x && question.end.y === y;

    return isOnPath || isStart || isEnd;
  };

  // 处理格子点击
  const handleCellClick = (x: number, y: number) => {
    // 检查是否相邻（上下左右）
    const dx = Math.abs(x - currentPosition.x);
    const dy = Math.abs(y - currentPosition.y);
    if (dx + dy !== 1) return;

    // 检查是否可以移动
    if (!canMoveTo(x, y)) return;

    // 检查是否有问题
    const node = getPathNode(x, y);
    if (node) {
      setCurrentQuestionNode(node);
      setShowingQuestion(true);
      return;
    }

    // 直接移动
    moveToEnd(x, y);
  };

  const moveToEnd = (x: number, y: number) => {
    setCurrentPosition({ x, y });
    setVisitedPath([...visitedPath, { x, y }]);

    // 检查是否到达终点
    if (x === question.end.x && y === question.end.y) {
      // 计算星星
      const baseStars = 50;
      const questionBonus = question.questions.length * 5;
      const stars = baseStars + questionBonus;
      setTimeout(() => onComplete(stars), 1000);
    }
  };

  // 处理问题回答
  const handleAnswer = (answer: string) => {
    const node = currentQuestionNode;
    const correctIndex = node.correctAnswer;

    // 检查答案是否正确（简化处理）
    const isCorrect = parseInt(answer) === correctIndex;

    if (isCorrect) {
      // 移动到问题节点位置
      moveToEnd(node.x, node.y);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

    setShowingQuestion(false);
  };

  // 渲染网格
  const renderGrid = () => {
    const cells = [];
    for (let y = 0; y < question.gridSize; y++) {
      for (let x = 0; x < question.gridSize; x++) {
        const isPath = question.path.some((p) => p.x === x && p.y === y);
        const isStart = question.start.x === x && question.start.y === y;
        const isEnd = question.end.x === x && question.end.y === y;
        const isCurrent = currentPosition.x === x && currentPosition.y === y;
        const isVisited = visitedPath.some((p) => p.x === x && p.y === y);
        const isObstacle = question.obstacles.some((obs) => obs.x === x && obs.y === y);

        const node = getPathNode(x, y);
        const content = node ? '❓' : isStart ? '🚩' : isEnd ? '🏆' : '';

        cells.push (
          <GridCell
            key={`${x}-${y}`}
            isPath={isPath}
            isStart={isStart}
            isEnd={isEnd}
            isCurrent={isCurrent}
            isVisited={isVisited}
            isObstacle={isObstacle}
            onClick={() => handleCellClick(x, y)}
            whileHover={{ scale: canMoveTo(x, y) ? 1.1 : 1 }}
          >
            {content}
          </GridCell>
        );
      }
    }
    return cells;
  };

  return (
    <GameContainer>
      <StatusBar>
        <StatItem>
          <StatLabel>位置</StatLabel>
          <StatValue>
            ({currentPosition.x}, {currentPosition.y})
          </StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>进度</StatLabel>
          <StatValue>
            {visitedPath.length - 1}/{question.path.length}
          </StatValue>
        </StatItem>
      </StatusBar>

      <Hint>从起点🚩走到终点🏆，回答路径上的问题❓</Hint>

      <ProgressIndicator>
        {question.questions.map((_, index) => (
          <ProgressDot
            key={index}
            active={index === currentQuestionIndex}
            completed={index < currentQuestionIndex}
          />
        ))}
      </ProgressIndicator>

      <MazeGrid gridSize={question.gridSize}>
        {renderGrid()}
      </MazeGrid>

      {showingQuestion && currentQuestionNode && (
        <QuestionArea>
          <ChoiceQuestion
            question={{
              type: QuestionType.CHOICE,
              question: currentQuestionNode.question,
              options: currentQuestionNode.options.map((text, index) => ({
                id: index.toString(),
                text,
              })),
              correctAnswer: currentQuestionNode.correctAnswer.toString(),
              explanation: question.explanation,
            }}
            selectedAnswer={null}
            isAnswered={false}
            onAnswer={(answer) => handleAnswer(answer)}
          />
        </QuestionArea>
      )}
    </GameContainer>
  );
};

export default MazeGame;
