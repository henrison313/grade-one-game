import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeColors, ShapeNames } from '@/config';
import { useSound } from '@/shared/hooks';
import type { DragQuestionData, DragItem, DragTarget } from '@/types';

interface DragQuestionProps {
  question: DragQuestionData;
  placements: Record<string, string>; // targetId -> itemId
  isAnswered: boolean;
  onAnswer: (placements: Record<string, string>) => void;
}

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

const DraggableItem = styled(motion.div)<{ $isPlaced: boolean }>`
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: ${(props) => (props.$isPlaced ? 'default' : 'grab')};
  opacity: ${(props) => (props.$isPlaced ? 0.5 : 1)};
  user-select: none;
  touch-action: none;
`;

const ShapeIcon = styled.div<{ $shape: 'circle' | 'triangle' | 'square' | 'rectangle' }>`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const ItemName = styled.span`
  font-size: 12px;
  color: ${ThemeColors.textSecondary};
  margin-top: 4px;
`;

const TargetsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const DropTarget = styled(motion.div)<{ $hasItem: boolean; $isCorrect: boolean; $isWrong: boolean }>`
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  font-size: 14px;
  font-weight: 600;
  color: ${ThemeColors.textPrimary};
  margin-bottom: 8px;
`;

const PlacedItem = styled(motion.div)`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

// 图形 SVG 组件
const ShapeSvg: React.FC<{ shape: 'circle' | 'triangle' | 'square' | 'rectangle'; color?: string }> = ({
  shape,
  color = ThemeColors.primary,
}) => {
  switch (shape) {
    case 'circle':
      return (
        <svg viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" fill={color} />
        </svg>
      );
    case 'triangle':
      return (
        <svg viewBox="0 0 50 50">
          <polygon points="25,5 45,45 5,45" fill={color} />
        </svg>
      );
    case 'square':
      return (
        <svg viewBox="0 0 50 50">
          <rect x="10" y="10" width="30" height="30" fill={color} />
        </svg>
      );
    case 'rectangle':
      return (
        <svg viewBox="0 0 50 50">
          <rect x="5" y="15" width="40" height="20" fill={color} />
        </svg>
      );
    default:
      return null;
  }
};

const DragQuestion: React.FC<DragQuestionProps> = ({
  question,
  placements: externalPlacements,
  isAnswered,
  onAnswer,
}) => {
  const { playDrag, playDrop, playCorrect, playWrong } = useSound();
  const [placements, setPlacements] = useState<Record<string, string>>(externalPlacements || {});
  const [draggingItemId, setDraggingItemId] = useState<string | null>(null);

  // 检查是否所有目标都已放置
  const allTargetsFilled = question.targets.every((t) => placements[t.id]);

  // 检查是否正确
  const checkCorrectness = useCallback(() => {
    return question.targets.every((target) => {
      const placedItemId = placements[target.id];
      return target.accepts.includes(placedItemId || '');
    });
  }, [placements, question.targets]);

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

    // 检查该目标是否已有物品
    const existingItemId = placements[targetId];
    const newPlacements = { ...placements };

    // 如果目标已有物品，先移除
    if (existingItemId) {
      delete newPlacements[targetId];
    }

    // 移除该物品之前的位置
    Object.keys(newPlacements).forEach((key) => {
      if (newPlacements[key] === draggingItemId) {
        delete newPlacements[key];
      }
    });

    // 放置到新位置
    newPlacements[targetId] = draggingItemId;
    setPlacements(newPlacements);
    playDrop();
    setDraggingItemId(null);
  };

  const handleSubmit = () => {
    if (!allTargetsFilled || isAnswered) return;
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
      return { hasItem: !!placements[target.id], isCorrect: false, isWrong: false };
    }

    const placedItemId = placements[target.id];
    const isCorrect = target.accepts.includes(placedItemId || '');
    return { hasItem: !!placedItemId, isCorrect, isWrong: !isCorrect && !!placedItemId };
  };

  // 渲染拖拽项
  const renderItem = (item: DragItem, isPlaced: boolean) => (
    <DraggableItem
      key={item.id}
      $isPlaced={isPlaced}
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
      <ShapeIcon $shape={item.shape || 'circle'}>
        <ShapeSvg shape={item.shape || 'circle'} />
      </ShapeIcon>
      <ItemName>{ShapeNames[item.shape || 'circle']}</ItemName>
    </DraggableItem>
  );

  // 渲染放置目标
  const renderTarget = (target: DragTarget) => {
    const state = getTargetState(target);
    const placedItem = state.hasItem
      ? question.items.find((i) => i.id === placements[target.id])
      : null;

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
        {placedItem && (
          <PlacedItem
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <ShapeSvg shape={placedItem.shape || 'circle'} />
          </PlacedItem>
        )}
      </DropTarget>
    );
  };

  return (
    <QuestionContainer>
      <QuestionText>{question.question}</QuestionText>
      <Instruction>{question.instruction}</Instruction>

      <DragArea>
        <ItemsContainer>
          {question.items.map((item) =>
            renderItem(item, !!Object.values(placements).includes(item.id))
          )}
        </ItemsContainer>

        <TargetsContainer>
          {question.targets.map(renderTarget)}
        </TargetsContainer>

        {!isAnswered && allTargetsFilled && (
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