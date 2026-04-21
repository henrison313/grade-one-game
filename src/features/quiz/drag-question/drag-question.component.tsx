import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeColors } from '@/config';
import { useSound } from '@/shared/hooks';
import type { DragQuestionData, DragItem, DragTarget } from '@/types';

interface DragQuestionProps {
  question: DragQuestionData;
  placements: Record<string, string[]>; // targetId -> itemId[]
  isAnswered: boolean;
  onAnswer: (placements: Record<string, string[]>) => void;
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
        <svg width={size} height={size * 0.7} viewBox="0 0 100 70">
          <rect x="5" y="5" width="90" height="60" fill={color} stroke="#333" strokeWidth="2" />
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

const DragArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
`;

const DraggableItem = styled(motion.div)<{ $isPlaced: boolean; $hasShape: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: ${(props) => (props.$isPlaced ? 'default' : 'grab')};
  opacity: ${(props) => (props.$isPlaced ? 0.5 : 1)};
  user-select: none;
  touch-action: none;
  padding: ${(props) => props.$hasShape ? '8px' : '12px 20px'};
  min-width: ${(props) => props.$hasShape ? '60px' : '100px'};
  min-height: ${(props) => props.$hasShape ? '60px' : 'auto'};
`;

const ItemText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${ThemeColors.textPrimary};
`;

const TargetsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const DropTarget = styled(motion.div)<{ $hasItem: boolean; $isCorrect: boolean; $isWrong: boolean }>`
  min-width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px;
  background: ${(props) => {
    if (props.$isCorrect) return 'rgba(16, 185, 129, 0.2)';
    if (props.$isWrong) return 'rgba(239, 68, 68, 0.2)';
    return 'rgba(255, 255, 255, 0.8)';
  }};
  border: 3px dashed ${(props) => {
    if (props.$isCorrect) return ThemeColors.success;
    if (props.$isWrong) return ThemeColors.error;
    return ThemeColors.primaryLight;
  }};
  border-radius: 16px;
  transition: all 0.2s ease;
`;

const TargetName = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${ThemeColors.textPrimary};
`;

const PlacedItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px 12px;
  min-width: 80px;
`;

const PlacedText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${ThemeColors.textPrimary};
`;

const PlacedItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  width: 100%;
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

const DragQuestion: React.FC<DragQuestionProps> = ({
  question,
  placements: externalPlacements,
  isAnswered,
  onAnswer,
}) => {
  const { playDrag, playDrop, playCorrect, playWrong } = useSound();
  const [placements, setPlacements] = useState<Record<string, string[]>>(externalPlacements || {});
  const [draggingItemId, setDraggingItemId] = useState<string | null>(null);

  // 检查是否所有物品都已放置
  const allItemsPlaced = question.items.every((item) =>
    Object.values(placements).some((ids) => ids.includes(item.id))
  );

  // 检查是否正确：所有放置的物品都必须在正确的目标中
  const checkCorrectness = useCallback(() => {
    return question.items.every((item) => {
      // 找到该物品被放置在哪个目标
      const targetId = Object.keys(placements).find((tid) =>
        placements[tid].includes(item.id)
      );
      if (!targetId) return false; // 物品未放置

      // 检查该目标是否接受此物品
      const target = question.targets.find((t) => t.id === targetId);
      return target?.accepts.includes(item.id) || false;
    });
  }, [placements, question.items, question.targets]);

  const handleDragStart = (itemId: string) => {
    if (isAnswered) return;
    setDraggingItemId(itemId);
    playDrag();
  };

  const handleDragEnd = () => {
    setDraggingItemId(null);
  };

  const handleDrop = (targetId: string) => {
    if (!draggingItemId || isAnswered) return;

    const newPlacements = { ...placements };

    // 移除该物品之前的位置
    Object.keys(newPlacements).forEach((key) => {
      newPlacements[key] = (newPlacements[key] || []).filter((id) => id !== draggingItemId);
    });

    // 放置到新位置（添加到数组）
    if (!newPlacements[targetId]) {
      newPlacements[targetId] = [];
    }
    if (!newPlacements[targetId].includes(draggingItemId)) {
      newPlacements[targetId].push(draggingItemId);
    }
    setPlacements(newPlacements);
    playDrop();
    setDraggingItemId(null);
  };

  const handleSubmit = () => {
    if (!allItemsPlaced || isAnswered) return;
    onAnswer(placements);

    // 播放音效
    if (checkCorrectness()) {
      playCorrect();
    } else {
      playWrong();
    }
  };

  // 获取目标状态
  const getTargetState = (target: DragTarget) => {
    if (!isAnswered) {
      return { hasItem: !!(placements[target.id] && placements[target.id].length > 0), isCorrect: false, isWrong: false };
    }

    const placedItemIds = placements[target.id] || [];
    // 所有放置的物品都正确才算正确
    const isCorrect = placedItemIds.length > 0 && placedItemIds.every((id) => target.accepts.includes(id));
    return { hasItem: placedItemIds.length > 0, isCorrect, isWrong: !isCorrect && placedItemIds.length > 0 };
  };

  // 渲染拖拽项
  const renderItem = (item: DragItem, isPlaced: boolean) => (
    <DraggableItem
      key={item.id}
      $isPlaced={isPlaced}
      $hasShape={!!item.shape}
      draggable={!isAnswered && !isPlaced}
      onDragStart={() => handleDragStart(item.id)}
      onDragEnd={handleDragEnd}
      onTouchStart={() => {
        if (isAnswered || isPlaced) return;
        setDraggingItemId(item.id);
        playDrag();
      }}
      onTouchEnd={(e) => {
        if (!draggingItemId) return;
        const touch = e.changedTouches[0];
        const element = document.elementFromPoint(touch.clientX, touch.clientY);
        const targetElement = element?.closest('[data-target-id]');
        if (targetElement) {
          const targetId = targetElement.getAttribute('data-target-id');
          if (targetId) {
            handleDrop(targetId);
          }
        }
        setDraggingItemId(null);
      }}
      whileHover={!isAnswered && !isPlaced ? { scale: 1.05 } : {}}
      whileTap={!isAnswered && !isPlaced ? { scale: 0.95 } : {}}
    >
      {item.shape ? (
        <ShapeSVG shape={item.shape} size={40} />
      ) : (
        <ItemText>{item.name}</ItemText>
      )}
    </DraggableItem>
  );

  // 渲染放置目标
  const renderTarget = (target: DragTarget) => {
    const state = getTargetState(target);
    const placedItemIds = placements[target.id] || [];
    const placedItems = placedItemIds.map((id) => question.items.find((i) => i.id === id)).filter(Boolean) as DragItem[];

    return (
      <DropTarget
        key={target.id}
        data-target-id={target.id}
        $hasItem={state.hasItem}
        $isCorrect={state.isCorrect}
        $isWrong={state.isWrong}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleDrop(target.id);
        }}
        whileHover={{ scale: 1.02 }}
      >
        <TargetName>{target.name}</TargetName>
        <PlacedItemsContainer>
          {placedItems.map((item) => (
            <PlacedItem
              key={item.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {item.shape ? (
                <ShapeSVG shape={item.shape} size={30} />
              ) : (
                <PlacedText>{item.name}</PlacedText>
              )}
            </PlacedItem>
          ))}
        </PlacedItemsContainer>
      </DropTarget>
    );
  };

  return (
    <QuestionContainer>
      <QuestionText>{question.question}</QuestionText>
      <Instruction>{question.instruction}</Instruction>

      <DragArea>
        <ItemsContainer>
          {question.items.map((item) => {
            const isPlaced = Object.values(placements).some((ids) => ids.includes(item.id));
            return renderItem(item, isPlaced);
          })}
        </ItemsContainer>

        <TargetsContainer>
          {question.targets.map(renderTarget)}
        </TargetsContainer>

        {!isAnswered && allItemsPlaced && (
          <SubmitButton
            onClick={handleSubmit}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            确认答案
          </SubmitButton>
        )}
      </DragArea>
    </QuestionContainer>
  );
};

export default DragQuestion;