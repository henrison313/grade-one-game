/**
 * 连线题组件 (LINK)
 * 功能：左右两列内容，拖拽连线（SVG 绘制），正确连线变绿色
 */

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import type { LinkQuestionData } from '@/types';

interface LinkQuestionProps {
  question: LinkQuestionData;
  onAnswer: (pairs: Array<{ leftId: string; rightId: string }>) => void;
}

// 题目文字
const QuestionText = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 12px;
  line-height: 1.5;

  @media (min-width: 600px) {
    font-size: 24px;
  }
`;

// 提示信息
const Hint = styled.div`
  text-align: center;
  color: #666;
  font-size: 14px;
  margin: 10px 0;
`;

// 游戏容器
const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 400px;
`;

// 连线区域
const LinkArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  padding: 20px 10px;
  position: relative;
  gap: 40px;

  @media (min-width: 600px) {
    padding: 20px;
    gap: 200px;
  }
`;

// 左右列
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1;

  @media (min-width: 600px) {
    gap: 16px;
  }
`;

// 选项项
const OptionItem = styled(motion.div)<{ selected?: boolean; matched?: boolean }>`
  padding: 12px 16px;
  background: ${({ selected, matched }) =>
    matched ? '#10b981' : selected ? '#667eea' : 'white'};
  color: ${({ matched }) => (matched ? 'white' : '#333')};
  border-radius: 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 80px;
  text-align: center;
  border: 2px solid ${({ selected }) => (selected ? '#667eea' : 'transparent')};

  @media (min-width: 600px) {
    padding: 16px 24px;
    font-size: 16px;
    min-width: 150px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

// 不同的连线颜色（鲜艳、易区分）
const LINE_COLORS = [
  '#FF5252', // 红色
  '#FF9800', // 橙色
  '#FFEB3B', // 黄色
  '#4CAF50', // 绿色
  '#00BCD4', // 青色
  '#3F51B5', // 靛蓝色
  '#9C27B0', // 紫色
  '#E91E63', // 粉红色
];

// SVG 连线层 - 置顶但不阻挡点击
const SvgLayer = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;
`;

// 连线
const LinkLine = styled.line<{ color?: string }>`
  stroke: ${({ color }) => color || '#667eea'};
  stroke-width: 5;
  stroke-linecap: round;
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3));
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

// 提交按钮
const SubmitButton = styled(motion.button)`
  padding: 12px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(102, 126, 234, 0.5);
  }
`;

/**
 * 连线题组件
 */
export const LinkQuestion: React.FC<LinkQuestionProps> = ({
  question,
  onAnswer,
}) => {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [connections, setConnections] = useState<Array<{ leftId: string; rightId: string }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineCoords, setLineCoords] = useState<Array<{ x1: number; y1: number; x2: number; y2: number }>>([]);

  // 打乱右侧列的显示顺序（只在组件挂载时执行一次）
  const [rightOptions] = useState(() => {
    const rightItems = question.pairs.map(p => ({
      id: p.id,
      right: p.right,
    }));
    // Fisher-Yates 洗牌
    const shuffled = [...rightItems];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  });

  // 处理左侧选项点击
  const handleLeftClick = (leftId: string) => {
    // 如果已经连接，取消连接
    const existingConnection = connections.find((c) => c.leftId === leftId);
    if (existingConnection) {
      setConnections(connections.filter((c) => c.leftId !== leftId));
      setSelectedLeft(null);
      return;
    }

    setSelectedLeft(leftId);
  };

  // 处理右侧选项点击
  const handleRightClick = (rightId: string) => {
    if (!selectedLeft) return;

    // 检查右侧是否已被连接
    const existingConnection = connections.find((c) => c.rightId === rightId);
    if (existingConnection) {
      setConnections(connections.filter((c) => c.rightId !== rightId));
    }

    // 添加新连接
    const newConnection = { leftId: selectedLeft, rightId };
    const newConnections = connections.filter((c) => c.leftId !== selectedLeft);
    setConnections([...newConnections, newConnection]);
    setSelectedLeft(null);
  };

  // 更新连线坐标
  React.useEffect(() => {
    if (!containerRef.current) return;

    const updateLineCoords = () => {
      const newCoords = connections.map((conn) => {
        const leftElement = document.getElementById(`left-${conn.leftId}`);
        const rightElement = document.getElementById(`right-${conn.rightId}`);
        const container = containerRef.current;

        if (!leftElement || !rightElement || !container) {
          return { x1: 0, y1: 0, x2: 0, y2: 0 };
        }

        const leftRect = leftElement.getBoundingClientRect();
        const rightRect = rightElement.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        return {
          x1: leftRect.right - containerRect.left,
          y1: leftRect.top + leftRect.height / 2 - containerRect.top,
          x2: rightRect.left - containerRect.left,
          y2: rightRect.top + rightRect.height / 2 - containerRect.top,
        };
      });
      setLineCoords(newCoords);
    };

    updateLineCoords();
    window.addEventListener('resize', updateLineCoords);
    return () => window.removeEventListener('resize', updateLineCoords);
  }, [connections]);

  // 提交答案
  const handleSubmit = () => {
    onAnswer(connections);
  };

  return (
    <GameContainer>
      {question.question && <QuestionText>{question.question}</QuestionText>}
      <StatusBar>
        <StatItem>
          <StatLabel>已连接</StatLabel>
          <StatValue>
            {connections.length}/{question.pairs.length}
          </StatValue>
        </StatItem>
      </StatusBar>

      <Hint>点击左侧选项，然后点击右侧选项进行连线</Hint>

      <LinkArea ref={containerRef}>
        <Column>
          {question.pairs.map((pair) => (
            <OptionItem
              key={pair.id}
              id={`left-${pair.id}`}
              selected={selectedLeft === pair.id}
              matched={connections.some((c) => c.leftId === pair.id)}
              onClick={() => handleLeftClick(pair.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {pair.left}
            </OptionItem>
          ))}
        </Column>

        <Column>
          {rightOptions.map((item) => (
            <OptionItem
              key={item.id}
              id={`right-${item.id}`}
              matched={connections.some((c) => c.rightId === item.id)}
              onClick={() => handleRightClick(item.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.right}
            </OptionItem>
          ))}
        </Column>

        {/* SVG 连线层 - 放在最后确保在最上层 */}
        <SvgLayer>
          {lineCoords.map((coord, index) => (
            <LinkLine
              key={index}
              x1={coord.x1}
              y1={coord.y1}
              x2={coord.x2}
              y2={coord.y2}
              color={LINE_COLORS[index % LINE_COLORS.length]}
            />
          ))}
        </SvgLayer>
      </LinkArea>

      <SubmitButton
        onClick={handleSubmit}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        提交答案
      </SubmitButton>
    </GameContainer>
  );
};

export default LinkQuestion;
