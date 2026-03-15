/**
 * 七巧板拼图游戏组件 (TANGRAM)
 * 功能：7 块七巧板，拖拽和旋转操作，目标图案轮廓显示，容差检测
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import type { TangramQuestionData } from '@/types';

interface TangramGameProps {
  question: TangramQuestionData;
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

// 游戏区域
const GameArea = styled.div`
  display: flex;
  gap: 40px;
  padding: 20px;
  width: 100%;
  max-width: 800px;
`;

// 拼图区域
const PuzzleArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 目标轮廓区域
const TargetArea = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border: 3px dashed rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  margin-bottom: 20px;
`;

// 七巧板块
const TangramPiece = styled(motion.div)<{
  color: string;
  $rotation: number;
  $x: number;
  $y: number;
}>`
  position: absolute;
  cursor: grab;
  transform: translate(${({ $x }) => $x}px, ${({ $y }) => $y}px) rotate(${({ $rotation }) => $rotation}deg);

  &:active {
    cursor: grabbing;
  }
`;

// 七巧板容器
const PiecesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  min-width: 250px;
`;

// 单块七巧板显示
const PieceDisplay = styled(motion.div)<{ color: string; shape: string }>`
  width: 60px;
  height: 60px;
  background: ${({ color }) => color};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: white;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
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

// 提示信息
const Hint = styled.div`
  text-align: center;
  color: white;
  font-size: 16px;
  margin: 10px 0;
`;

// 旋转按钮
const RotateButton = styled.button`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;

  &:hover {
    background: white;
  }
`;

/**
 * 七巧板拼图游戏组件
 */
export const TangramGame: React.FC<TangramGameProps> = ({
  question,
  onComplete,
}) => {
  const [pieces, setPieces] = useState(question.puzzle.pieces);
  const [selectedPiece, setSelectedPiece] = useState<string | null>(null);
  const [timeUsed, setTimeUsed] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // 七巧板块颜色
  const pieceColors: Record<string, string> = {
    triangle_large: '#FF6B6B',
    triangle_medium: '#4ECDC4',
    triangle_small: '#45B7D1',
    square: '#96CEB4',
    parallelogram: '#FFEAA7',
  };

  // 计时器
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeUsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 检查完成状态
  const checkCompletion = () => {
    // 简单实现：检查所有块是否都在目标区域内
    // 实际需要更复杂的位置检测
    const allPlaced = pieces.every((piece) => {
      const targetX = question.puzzle.targetOutline[0]?.x || 150;
      const targetY = question.puzzle.targetOutline[0]?.y || 150;
      const dx = piece.initialPosition.x - targetX;
      const dy = piece.initialPosition.y - targetY;
      return Math.sqrt(dx * dx + dy * dy) < question.puzzle.tolerance;
    });

    if (allPlaced && !isComplete) {
      setIsComplete(true);
      // 计算星星
      const baseStars = 50;
      const timeBonus = Math.max(0, 120 - timeUsed) / 2;
      const stars = Math.min(100, baseStars + timeBonus);
      setTimeout(() => onComplete(Math.floor(stars)), 1000);
    }
  };

  // 处理拖拽结束
  const handleDragEnd = (_: any, info: any) => {
    if (!selectedPiece) return;

    setPieces((prev) =>
      prev.map((piece) =>
        piece.id === selectedPiece
          ? {
              ...piece,
              initialPosition: {
                x: piece.initialPosition.x + info.offset.x,
                y: piece.initialPosition.y + info.offset.y,
              },
            }
          : piece
      )
    );
    setSelectedPiece(null);

    // 检查完成
    setTimeout(checkCompletion, 100);
  };

  // 旋转选中的块
  const rotateSelectedPiece = () => {
    if (!selectedPiece) return;

    setPieces((prev) =>
      prev.map((piece) =>
        piece.id === selectedPiece
          ? { ...piece, initialRotation: (piece.initialRotation + 45) % 360 }
          : piece
      )
    );
  };

  return (
    <GameContainer>
      <StatusBar>
        <StatItem>
          <StatLabel>目标</StatLabel>
          <StatValue>{question.puzzle.targetShape}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>时间</StatLabel>
          <StatValue>{timeUsed}秒</StatValue>
        </StatItem>
      </StatusBar>

      <Hint>拖拽七巧板块到目标区域，双击旋转</Hint>

      <GameArea>
        <PuzzleArea>
          <TargetArea>
            {/* 目标轮廓 - 简单显示 */}
            <svg width="300" height="300" style={{ position: 'absolute', top: 0, left: 0 }}>
              <path
                d={question.puzzle.targetOutline
                  .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
                  .join(' ') + ' Z'}
                fill="none"
                stroke="rgba(255, 255, 255, 0.5)"
                strokeWidth="3"
                strokeDasharray="5,5"
              />
            </svg>

            {/* 七巧板块 */}
            {pieces.map((piece) => (
              <TangramPiece
                key={piece.id}
                color={pieceColors[piece.type] || '#fff'}
                $rotation={piece.initialRotation}
                $x={piece.initialPosition.x}
                $y={piece.initialPosition.y}
                draggable
                onDragStart={() => setSelectedPiece(piece.id)}
                onDragEnd={handleDragEnd}
                onClick={() => setSelectedPiece(piece.id)}
                onDoubleClick={rotateSelectedPiece}
                whileHover={{ scale: 1.1 }}
              >
                <PieceDisplay
                  color={pieceColors[piece.type] || '#fff'}
                  shape={piece.type}
                >
                  {piece.type.replace('_', ' ').slice(0, 8)}
                </PieceDisplay>
              </TangramPiece>
            ))}
          </TargetArea>

          {selectedPiece && (
            <RotateButton onClick={rotateSelectedPiece}>
              旋转 45°
            </RotateButton>
          )}
        </PuzzleArea>

        <PiecesContainer>
          {/* 备用区域，显示未放置的块 */}
          {pieces.map((piece) => (
            <PieceDisplay
              key={piece.id}
              color={pieceColors[piece.type] || '#fff'}
              shape={piece.type}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedPiece(piece.id)}
            >
              {piece.type.replace('_', ' ').slice(0, 6)}
            </PieceDisplay>
          ))}
        </PiecesContainer>
      </GameArea>
    </GameContainer>
  );
};

export default TangramGame;
