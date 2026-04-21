import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeColors } from '@/config';
import { useSound } from '@/shared/hooks';
import type { ShapeComposeQuestionData, DragItem } from '@/types';

interface PlacedShape {
  id: string;
  shape: string;
  x: number;
  y: number;
}

interface ShapeComposeQuestionProps {
  question: ShapeComposeQuestionData;
  isAnswered: boolean;
  onAnswer: (placedShapes: PlacedShape[]) => void;
}

// 图形颜色配置
const SHAPE_COLORS: Record<string, string> = {
  circle: '#3B82F6',    // 蓝色
  triangle: '#EF4444',  // 红色
  square: '#10B981',    // 绿色
  rectangle: '#F59E0B', // 黄色
};

// 图形 SVG 渲染组件
const ShapeSVG: React.FC<{ shape: string; size: number }> = ({ shape, size }) => {
  const color = SHAPE_COLORS[shape] || '#4F46E5';

  switch (shape) {
    case 'circle':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill={color} stroke="#333" strokeWidth="2" />
        </svg>
      );
    case 'triangle':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <polygon points="50,15 85,85 15,85" fill={color} stroke="#333" strokeWidth="2" />
        </svg>
      );
    case 'square':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <rect x="15" y="15" width="70" height="70" fill={color} stroke="#333" strokeWidth="2" />
        </svg>
      );
    case 'rectangle':
      return (
        <svg width={size * 1.5} height={size} viewBox="0 0 150 100">
          <rect x="10" y="15" width="130" height="70" fill={color} stroke="#333" strokeWidth="2" />
        </svg>
      );
    default:
      return null;
  }
};

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

const ComposeArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
`;

const ToolbarItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: grab;
  padding: 8px;
  min-width: 60px;
  min-height: 60px;
  user-select: none;
  touch-action: none;

  &:active {
    cursor: grabbing;
  }
`;

const CanvasArea = styled.div<{ $width: number; $height: number }>`
  width: ${(props) => props.$width}px;
  max-width: 100%;
  height: ${(props) => props.$height}px;
  background: rgba(255, 255, 255, 0.8);
  border: 3px dashed ${ThemeColors.primaryLight};
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  @media (max-width: ${(props) => props.$width}px) {
    width: 100%;
    height: ${(props) => props.$height * 0.8}px;
  }
`;

const CanvasShape = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  padding: 4px;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
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

const ShapeComposeQuestion: React.FC<ShapeComposeQuestionProps> = ({
  question,
  isAnswered,
  onAnswer,
}) => {
  const { playDrag, playDrop, playCorrect } = useSound();
  const [placedShapes, setPlacedShapes] = useState<PlacedShape[]>([]);
  const [draggingItemId, setDraggingItemId] = useState<string | null>(null);

  // 计算每种图形已放入的数量
  const shapeCounts = placedShapes.reduce((acc, shape) => {
    acc[shape.shape] = (acc[shape.shape] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // 检查是否满足数量要求
  const meetsRequired = question.requiredCounts
    ? Object.entries(question.requiredCounts).every(([shape, count]) => shapeCounts[shape] >= count)
    : placedShapes.length > 0;

  const handleDragStart = (item: DragItem) => {
    if (isAnswered) return;
    setDraggingItemId(item.id);
    playDrag();
  };

  const handleDragEnd = () => {
    setDraggingItemId(null);
  };

  // 从工具栏拖入画布
  const handleCanvasDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      if (!draggingItemId || isAnswered) return;

      const item = question.items.find((i) => i.id === draggingItemId);
      if (!item || !item.shape) return;

      // 检查是否已经放入画布（每个item只能放一次）
      if (placedShapes.some((p) => p.id === draggingItemId)) return;

      const canvasRect = e.currentTarget.getBoundingClientRect();
      const x = Math.max(30, Math.min(e.clientX - canvasRect.left - 25, canvasRect.width - 60));
      const y = Math.max(30, Math.min(e.clientY - canvasRect.top - 25, canvasRect.height - 60));

      const newPlacedShape: PlacedShape = {
        id: item.id,
        shape: item.shape!,
        x,
        y,
      };

      setPlacedShapes([...placedShapes, newPlacedShape]);
      playDrop();
      setDraggingItemId(null);
    },
    [draggingItemId, isAnswered, placedShapes, question.items, playDrop]
  );

  // 更新画布内图形位置
  const updateShapePosition = useCallback(
    (shapeId: string, newX: number, newY: number) => {
      if (isAnswered) return;

      setPlacedShapes(
        placedShapes.map((shape) => {
          if (shape.id === shapeId) {
            // 确保不超出画布边界
            const maxX = question.canvasSize.width - 50;
            const maxY = question.canvasSize.height - 50;
            return {
              ...shape,
              x: Math.max(0, Math.min(newX, maxX)),
              y: Math.max(0, Math.min(newY, maxY)),
            };
          }
          return shape;
        })
      );
    },
    [isAnswered, placedShapes, question.canvasSize]
  );

  const handleSubmit = () => {
    if (!meetsRequired || isAnswered) return;
    onAnswer(placedShapes);
    playCorrect();
  };

  // 渲染工具栏图形
  const renderToolbarItem = (item: DragItem) => {
    const isPlaced = placedShapes.some((p) => p.id === item.id);
    const shapeType = item.shape || 'circle';

    return (
      <ToolbarItem
        key={item.id}
        draggable={!isAnswered && !isPlaced}
        onDragStart={() => handleDragStart(item)}
        onDragEnd={handleDragEnd}
        onTouchStart={() => {
          if (isAnswered || isPlaced) return;
          setDraggingItemId(item.id);
          playDrag();
        }}
        onTouchEnd={(e) => {
          if (!draggingItemId) return;
          const touch = e.changedTouches[0];
          const canvasElement = document.querySelector('[data-canvas]');
          if (canvasElement) {
            const canvasRect = canvasElement.getBoundingClientRect();
            // 检查触摸点是否在画布内
            if (
              touch.clientX >= canvasRect.left &&
              touch.clientX <= canvasRect.right &&
              touch.clientY >= canvasRect.top &&
              touch.clientY <= canvasRect.bottom
            ) {
              const item = question.items.find((i) => i.id === draggingItemId);
              if (item && item.shape && !placedShapes.some((p) => p.id === draggingItemId)) {
                const x = Math.max(30, Math.min(touch.clientX - canvasRect.left - 25, canvasRect.width - 60));
                const y = Math.max(30, Math.min(touch.clientY - canvasRect.top - 25, canvasRect.height - 60));
                setPlacedShapes([...placedShapes, { id: item.id, shape: item.shape!, x, y }]);
                playDrop();
              }
            }
          }
          setDraggingItemId(null);
        }}
        whileHover={!isAnswered && !isPlaced ? { scale: 1.05 } : {}}
        whileTap={!isAnswered && !isPlaced ? { scale: 0.95 } : {}}
        style={{ opacity: isPlaced ? 0.4 : 1 }}
      >
        <ShapeSVG shape={shapeType} size={40} />
      </ToolbarItem>
    );
  };

  // 渲染画布内图形
  const renderCanvasShape = (placed: PlacedShape) => (
    <CanvasShape
      key={placed.id}
      initial={{ x: placed.x, y: placed.y, scale: 0 }}
      animate={{ x: placed.x, y: placed.y, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
      drag={!isAnswered}
      dragConstraints={{
        left: 0,
        right: question.canvasSize.width - 50,
        top: 0,
        bottom: question.canvasSize.height - 50,
      }}
      dragMomentum={false}
      onDragEnd={(_e, info) => {
        updateShapePosition(placed.id, info.point.x - info.offset.x, info.point.y - info.offset.y);
        playDrop();
      }}
    >
      <ShapeSVG shape={placed.shape} size={45} />
    </CanvasShape>
  );

  return (
    <QuestionContainer>
      <QuestionText>{question.question}</QuestionText>
      <Instruction>{question.instruction}</Instruction>

      <ComposeArea>
        <Toolbar>
          {question.items.map(renderToolbarItem)}
          {question.requiredCounts && (
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginLeft: '16px' }}>
              {Object.entries(question.requiredCounts).map(([shape, count]) => (
                <span key={shape} style={{ fontSize: '14px', color: ThemeColors.textSecondary }}>
                  {shape}: {shapeCounts[shape] || 0}/{count}
                </span>
              ))}
            </div>
          )}
        </Toolbar>

        <CanvasArea
          data-canvas
          $width={question.canvasSize.width}
          $height={question.canvasSize.height}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleCanvasDrop}
        >
          {placedShapes.map(renderCanvasShape)}
        </CanvasArea>

        {!isAnswered && meetsRequired && (
          <SubmitButton
            onClick={handleSubmit}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            确认答案
          </SubmitButton>
        )}
      </ComposeArea>
    </QuestionContainer>
  );
};

export default ShapeComposeQuestion;