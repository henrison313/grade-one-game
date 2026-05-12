import React, { useState, useCallback, useEffect, useMemo } from 'react';
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
  'triangle-big': '#EF4444',  // 大三角形 - 红色
  'triangle-small': '#F87171', // 小三角形 - 浅红色
  square: '#10B981',    // 绿色
  rectangle: '#F59E0B', // 黄色
  parallelogram: '#F59E0B', // 平行四边形 - 黄色
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
    case 'parallelogram':
      return (
        <svg width={size} height={size * 0.6} viewBox="0 0 120 70">
          <polygon points="25,5 115,5 95,65 5,65" fill={color} stroke="#333" strokeWidth="2" />
        </svg>
      );
    case 'triangle-big':
      return (
        <svg width={size * 1.3} height={size * 1.3} viewBox="0 0 100 100">
          <polygon points="50,10 90,85 10,85" fill={color} stroke="#333" strokeWidth="2" />
        </svg>
      );
    case 'triangle-small':
      return (
        <svg width={size * 0.7} height={size * 0.7} viewBox="0 0 100 100">
          <polygon points="50,20 80,80 20,80" fill={color} stroke="#333" strokeWidth="2" />
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
  position: relative;
  width: 100%;
  min-height: 400px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
  gap: 20px;
`;

// 绝对定位布局容器
const AbsoluteLayoutContainer = styled.div<{ $size: { width: number; height: number } }>`
  position: relative;
  width: ${(props) => props.$size.width}px;
  height: ${(props) => props.$size.height}px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
`;

// 绝对定位的目标框
const AbsoluteDropTarget = styled(motion.div)<{
  $hasItem: boolean;
  $isCorrect: boolean;
  $isWrong: boolean;
  $size: { width: number; height: number };
  $position: { x: number; y: number };
}>`
  position: absolute;
  left: ${(props) => props.$position.x}px;
  top: ${(props) => props.$position.y}px;
  width: ${(props) => props.$size.width}px;
  height: ${(props) => props.$size.height}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px;
  background: ${(props) => {
    if (props.$isCorrect) return 'rgba(16, 185, 129, 0.2)';
    if (props.$isWrong) return 'rgba(239, 68, 68, 0.2)';
    return 'rgba(255, 255, 255, 0.8)';
  }};
  border: 2px dashed ${(props) => {
    if (props.$isCorrect) return ThemeColors.success;
    if (props.$isWrong) return ThemeColors.error;
    return ThemeColors.primaryLight;
  }};
  border-radius: 8px;
  transition: all 0.2s ease;
`;

// 连线 SVG 层
const ConnectionSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

// 连线样式
const ConnectionLine = styled.line`
  stroke: #4F46E5;
  stroke-width: 3;
  stroke-linecap: round;
  opacity: 0.6;
`;

const DropTarget = styled(motion.div)<{ $hasItem: boolean; $isCorrect: boolean; $isWrong: boolean; $size: { width: number; height: number } }>`
  width: ${(props) => props.$size.width}px;
  height: ${(props) => props.$size.height}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px;
  background: ${(props) => {
    if (props.$isCorrect) return 'rgba(16, 185, 129, 0.2)';
    if (props.$isWrong) return 'rgba(239, 68, 68, 0.2)';
    return 'rgba(255, 255, 255, 0.8)';
  }};
  border: 2px dashed ${(props) => {
    if (props.$isCorrect) return ThemeColors.success;
    if (props.$isWrong) return ThemeColors.error;
    return ThemeColors.primaryLight;
  }};
  border-radius: 8px;
  transition: all 0.2s ease;
`;

const TargetName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${ThemeColors.textPrimary};
`;

const PlacedItem = styled(motion.div)<{ $removable: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px 12px;
  min-width: 80px;
  cursor: ${(props) => (props.$removable ? 'pointer' : 'default')};
  position: relative;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
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

const RemoveIcon = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${ThemeColors.error};
  color: white;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 10;
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

const ResetButton = styled(motion.button)`
  margin-top: 12px;
  padding: 8px 24px;
  background: white;
  color: ${ThemeColors.textSecondary};
  border: 2px solid ${ThemeColors.textSecondary};
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${ThemeColors.textSecondary};
    color: white;
  }
`;

// 计算结果容器 - 垂直排列，目标框在上，结果卡片在下
const TargetWithResult = styled.div<{ $centered: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const CalculationResult = styled(motion.div)<{ $visible: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.95) 0%, rgba(5, 150, 105, 0.95) 100%);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.4);
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transform: translateX(${(props) => (props.$visible ? 0 : -20)}px);
  transition: all 0.3s ease;
`;

const ResultLabel = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

const ResultValue = styled(motion.span)`
  font-size: 28px;
  font-weight: 700;
  color: #FFD700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const ResultEquals = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 4px;
`;

const ResultUnit = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-left: 4px;
`;

// 数位摆数 - 多组目标容器
const DigitGroupsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  width: 100%;
  padding: 20px;
`;

// 单组目标区域
const DigitGroupCard = styled(motion.div)<{ $isComplete: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: ${(props) => props.$isComplete ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.5)'};
  border: 3px solid ${(props) => props.$isComplete ? ThemeColors.success : 'rgba(79, 70, 229, 0.3)'};
  border-radius: 16px;
  transition: all 0.3s ease;
`;

const DigitGroupTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${ThemeColors.textSecondary};
`;

const DigitGroupTargets = styled.div`
  display: flex;
  gap: 12px;
`;

const DigitTargetLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${ThemeColors.textSecondary};
`;

const DigitResultNumber = styled(motion.div)`
  font-size: 32px;
  font-weight: 700;
  color: ${ThemeColors.success};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// 圆片库容器
const CircleLibrary = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  padding: 16px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 64, 175, 0.1) 100%);
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 16px;
  margin-bottom: 20px;
`;

const LibraryTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: ${ThemeColors.textSecondary};
  margin-bottom: 8px;
`;

const LibraryCircle = styled(motion.div)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #3B82F6;
  border: 3px solid #1E40AF;
  cursor: grab;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);

  &:hover {
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.5);
  }
`;

// 数位目标框
const DigitDropBox = styled(motion.div)<{ $hasItems: boolean }>`
  width: 80px;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: ${(props) => props.$hasItems ? 'rgba(59, 130, 246, 0.1)' : 'rgba(255, 255, 255, 0.8)'};
  border: 2px dashed ${(props) => props.$hasItems ? '#3B82F6' : 'rgba(79, 70, 229, 0.3)'};
  border-radius: 8px;
  padding: 8px;
  transition: all 0.2s ease;
`;

// 小圆片（可点击移除）
const ClickableCircle = styled(motion.div)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #3B82F6;
  border: 2px solid #1E40AF;
  cursor: pointer;

  &:hover {
    background: #EF4444;
    border-color: #B91C1C;
  }
`;

// 动画数字组件
const AnimatedNumber: React.FC<{ value: number; visible: boolean; unit?: string }> = ({ value, visible, unit }) => {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!visible) {
      setDisplayValue(0)
      return
    }

    const duration = 800 // 0.8秒动画
    const steps = 30
    const stepDuration = duration / steps
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.round(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value, visible])

  return (
    <>
      <ResultValue
        initial={{ scale: 0.8 }}
        animate={{ scale: visible ? 1 : 0.8 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {displayValue}
      </ResultValue>
      {unit && <ResultUnit>{unit}</ResultUnit>}
    </>
  )
}

const DragQuestion: React.FC<DragQuestionProps> = ({
  question,
  placements: externalPlacements,
  isAnswered,
  onAnswer,
}) => {
  const { playDrag, playDrop, playCorrect, playWrong } = useSound();
  const [placements, setPlacements] = useState<Record<string, string[]>>(externalPlacements || {});
  const [draggingItemId, setDraggingItemId] = useState<string | null>(null);
  const [itemRotations, setItemRotations] = useState<Record<string, number>>({}); // 记录每个item的旋转角度
  const [longPressTimer, setLongPressTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [isLongPress, setIsLongPress] = useState(false); // 区分长按和单击

  // 检查是否是数位摆数题型（有tens和ones两个目标）
  const isDigitPlacement = question.targets.length === 2 &&
    question.targets.some(t => t.id === 'tens' || t.id === 'ones') &&
    question.items.every(item => item.shape === 'circle');

  // 数位摆数题 - 圆片库模式状态
  // 每组的状态：{ groupId: { tens: number, ones: number } }
  const [digitGroupStates, setDigitGroupStates] = useState<Record<string, { tens: number; ones: number }>>({});
  const totalCircles = question.items.length; // 圆片总数（如3个）

  // 计算所有可能的数字（按圆片数计算所有组合）
  const allPossibleNumbers = useMemo(() => {
    if (!isDigitPlacement) return [];
    const numbers: number[] = [];
    for (let tens = 0; tens <= totalCircles; tens++) {
      numbers.push(tens * 10 + (totalCircles - tens));
    }
    return numbers;
  }, [isDigitPlacement, totalCircles]);

  // 检查是否所有组合都正确
  const checkDigitPlacementComplete = () => {
    // 必须有4个完成的组
    const completedGroups = Object.values(digitGroupStates)
      .filter(state => state.tens + state.ones === totalCircles);

    if (completedGroups.length !== allPossibleNumbers.length) return false;

    // 检查每个完成的组，数字必须在可能的范围内
    const completedNumbers = completedGroups.map(state => state.tens * 10 + state.ones);
    const allValid = completedNumbers.every(num => allPossibleNumbers.includes(num));

    // 检查是否有重复
    const uniqueNumbers = new Set(completedNumbers);

    return allValid && uniqueNumbers.size === allPossibleNumbers.length;
  };

  // 添加圆片到目标框
  const handleDigitDrop = (groupId: string, position: 'tens' | 'ones') => {
    if (isAnswered) return;

    setDigitGroupStates(prev => {
      const current = prev[groupId] || { tens: 0, ones: 0 };
      const total = current.tens + current.ones;

      // 检查是否已达到圆片总数限制
      if (total >= totalCircles) return prev;

      return {
        ...prev,
        [groupId]: {
          ...current,
          [position]: current[position] + 1,
        },
      };
    });
    playDrop();
    // 清除拖拽状态，允许再次使用
    setDraggingItemId(null);
  };

  // 从目标框移除圆片
  const handleDigitCircleRemove = (groupId: string, position: 'tens' | 'ones') => {
    if (isAnswered) return;

    setDigitGroupStates(prev => {
      const current = prev[groupId] || { tens: 0, ones: 0 };
      if (current[position] <= 0) return prev;

      return {
        ...prev,
        [groupId]: {
          ...current,
          [position]: current[position] - 1,
        },
      };
    });
  };

  // 重置数位摆数
  const handleDigitReset = () => {
    if (isAnswered) return;
    setDigitGroupStates({});
  };

  // 提交数位摆数答案
  const handleDigitSubmit = () => {
    if (isAnswered) return;

    const isCorrect = checkDigitPlacementComplete();
    if (isCorrect) {
      playCorrect();
      // 传递特殊标识，让 quiz-game 知道这是数位摆数题的正确答案
      onAnswer({ __digitPlacementCorrect: true } as unknown as Record<string, string[]>);
    } else {
      playWrong();
      onAnswer({});
    }
  };

  // 获取图形的当前旋转角度
  const getItemRotation = (itemId: string, defaultRotation: number = 0) => {
    return itemRotations[itemId] ?? defaultRotation;
  };

  // 旋转图形
  const handleRotateItem = (itemId: string, currentRotation: number = 0) => {
    if (isAnswered) return;
    // 每次顺时针旋转90度
    const newRotation = (currentRotation + 90) % 360;
    setItemRotations(prev => ({ ...prev, [itemId]: newRotation }));
  };

  // 长按开始
  const handleMouseDown = (itemId: string) => {
    if (isAnswered) return;
    setIsLongPress(false);
    const timer = setTimeout(() => {
      setIsLongPress(true);
      handleRotateItem(itemId, getItemRotation(itemId, 0));
    }, 300);
    setLongPressTimer(timer);
  };

  // 长按结束 - 单击移除，双击/长按旋转
  const handleMouseUp = (itemId: string) => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
    if (!isLongPress && !isAnswered) {
      handleRemove(itemId);
    }
    setIsLongPress(false);
  };

  // 长按取消
  const handleLongPressEnd = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
    setIsLongPress(false);
  };

  // 检查是否所有物品都已放置
  const allItemsPlaced = question.items.every((item) =>
    Object.values(placements).some((ids) => ids.includes(item.id))
  );

  // 检查是否正确：所有放置的物品都必须在正确的目标中，且旋转角度正确
  const checkCorrectness = useCallback(() => {
    return question.items.every((item) => {
      // 找到该物品被放置在哪个目标
      const targetId = Object.keys(placements).find((tid) =>
        placements[tid].includes(item.id)
      );
      if (!targetId) return false; // 物品未放置

      // 检查该目标是否接受此物品
      const target = question.targets.find((t) => t.id === targetId);
      if (!target || !target.accepts.includes(item.id)) return false;

      // 检查旋转角度（如果目标有期望旋转角度）
      if (target.rotation !== undefined) {
        const itemRotation = getItemRotation(item.id, item.rotation || 0);
        const targetRotation = target.rotation;
        const tolerance = target.rotationTolerance || 15;
        // 规范化到 -180 到 180 范围比较
        const normalizeAngle = (angle: number) => ((angle % 360) + 360) % 360;
        const itemNorm = normalizeAngle(itemRotation);
        const targetNorm = normalizeAngle(targetRotation);
        const diff = Math.abs(itemNorm - targetNorm);
        const minDiff = Math.min(diff, 360 - diff); // 处理 350° 和 10° 这种接近的情况
        if (minDiff > tolerance) return false;
      }

      return true;
    });
  }, [placements, question.items, question.targets, itemRotations]);

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

  // 移除已放置的物品
  const handleRemove = (itemId: string) => {
    if (isAnswered) return;

    const newPlacements = { ...placements };
    Object.keys(newPlacements).forEach((key) => {
      newPlacements[key] = (newPlacements[key] || []).filter((id) => id !== itemId);
    });
    // 清理空数组
    Object.keys(newPlacements).forEach((key) => {
      if (newPlacements[key].length === 0) {
        delete newPlacements[key];
      }
    });
    setPlacements(newPlacements);
  };

  // 重置所有放置
  const handleReset = () => {
    if (isAnswered) return;
    setPlacements({});
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
  const renderItem = (item: DragItem, isPlaced: boolean) => {
    const rotation = getItemRotation(item.id, item.rotation || 0);
    return (
      <DraggableItem
        key={item.id}
        data-testid="drag-item"
        data-item-id={item.id}
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
        animate={{ rotate: rotation, scale: 1 }}
        whileHover={!isAnswered && !isPlaced ? { scale: 1.05 } : {}}
        whileTap={!isAnswered && !isPlaced ? { scale: 0.95 } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {item.shape ? (
          <ShapeSVG shape={item.shape} size={40} />
        ) : (
          <ItemText>{item.name}</ItemText>
        )}
      </DraggableItem>
    );
  };

  // 渲染放置目标
  const renderTarget = (target: DragTarget) => {
    const state = getTargetState(target);
    const placedItemIds = placements[target.id] || [];
    const placedItems = placedItemIds.map((id) => question.items.find((i) => i.id === id)).filter(Boolean) as DragItem[];

    // 检查是否所有物品都放入了该目标
    const allItemsInTarget = target.accepts.every((itemId) => placedItemIds.includes(itemId))
    // 检查是否有计算配置且所有物品已放入
    const showCalculation = question.calculation && allItemsInTarget && !isAnswered

    return (
      <TargetWithResult
        key={target.id}
        $centered={!!question.calculation}
      >
        <DropTarget
          data-testid="drop-target"
          data-target-id={target.id}
          $hasItem={state.hasItem}
          $isCorrect={state.isCorrect}
          $isWrong={state.isWrong}
          $size={target.size}
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
                $removable={!isAnswered}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onMouseDown={() => handleMouseDown(item.id)}
                onMouseUp={() => handleMouseUp(item.id)}
                onMouseLeave={handleLongPressEnd}
                whileHover={!isAnswered ? { scale: 1.05 } : {}}
                whileTap={!isAnswered ? { scale: 0.95 } : {}}
                title={!isAnswered ? "长按旋转，单击移除" : ""}
              >
                {!isAnswered && <RemoveIcon>×</RemoveIcon>}
                {item.shape ? (
                  <div
                    style={{
                      transform: `rotate(${getItemRotation(item.id, item.rotation || 0)}deg)`,
                      cursor: isAnswered ? 'default' : 'pointer',
                      padding: '4px'
                    }}
                  >
                    <ShapeSVG shape={item.shape} size={60} />
                  </div>
                ) : (
                  <PlacedText>{item.name}</PlacedText>
                )}
              </PlacedItem>
            ))}
          </PlacedItemsContainer>
        </DropTarget>
        {showCalculation && question.calculation && (
          <CalculationResult
            $visible={true}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
          >
            <ResultLabel>{question.calculation.label}</ResultLabel>
            <ResultEquals>=</ResultEquals>
            <AnimatedNumber value={question.calculation.result} visible={true} unit={question.calculation.unit} />
          </CalculationResult>
        )}
      </TargetWithResult>
    );
  };

  // 渲染绝对定位的目标
  const renderAbsoluteTarget = (target: DragTarget) => {
    const state = getTargetState(target);
    const placedItemIds = placements[target.id] || [];
    const placedItems = placedItemIds.map((id) => question.items.find((i) => i.id === id)).filter(Boolean) as DragItem[];

    return (
      <AbsoluteDropTarget
        key={target.id}
        data-testid="drop-target"
        data-target-id={target.id}
        $hasItem={state.hasItem}
        $isCorrect={state.isCorrect}
        $isWrong={state.isWrong}
        $size={target.size}
        $position={target.position}
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
              $removable={!isAnswered}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onMouseDown={() => handleMouseDown(item.id)}
              onMouseUp={() => handleMouseUp(item.id)}
              onMouseLeave={handleLongPressEnd}
              whileHover={!isAnswered ? { scale: 1.05 } : {}}
              whileTap={!isAnswered ? { scale: 0.95 } : {}}
              title={!isAnswered ? "长按旋转，单击移除" : ""}
            >
              {!isAnswered && <RemoveIcon>×</RemoveIcon>}
              {item.shape ? (
                <div
                  style={{
                    transform: `rotate(${getItemRotation(item.id, item.rotation || 0)}deg)`,
                    cursor: isAnswered ? 'default' : 'pointer',
                    padding: '4px'
                  }}
                >
                  <ShapeSVG shape={item.shape} size={50} />
                </div>
              ) : (
                <PlacedText>{item.name}</PlacedText>
              )}
            </PlacedItem>
          ))}
        </PlacedItemsContainer>
      </AbsoluteDropTarget>
    );
  };

  // 判断是否使用绝对定位布局
  const useAbsoluteLayout = question.useAbsoluteLayout;
  const layoutSize = question.layoutSize || { width: 700, height: 350 };

  return (
    <QuestionContainer>
      <QuestionText>{question.question}</QuestionText>
      <Instruction>{question.instruction}</Instruction>

      <DragArea>
        {/* 数位摆数题型 - 不显示拖拽项目区域，直接展示所有组合 */}
        {!isDigitPlacement && (
          <ItemsContainer>
            {question.items.map((item) => {
              const isPlaced = Object.values(placements).some((ids) => ids.includes(item.id));
              return renderItem(item, isPlaced);
            })}
          </ItemsContainer>
        )}

        {/* 数位摆数题型 - 圆片库模式 */}
        {isDigitPlacement ? (
          <>
            {/* 圆片库 */}
            <CircleLibrary>
              <LibraryTitle>圆片库 - 拖出圆片放到下面的目标框中</LibraryTitle>
              {Array.from({ length: 10 }).map((_, i) => (
                <LibraryCircle
                  key={`lib-${i}`}
                  draggable={!isAnswered}
                  onDragStart={() => handleDragStart(`lib-circle-${i}`)}
                  onDragEnd={handleDragEnd}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onTouchStart={() => {
                    if (isAnswered) return;
                    setDraggingItemId(`lib-circle-${i}`);
                    playDrag();
                  }}
                />
              ))}
            </CircleLibrary>

            {/* 4组目标区域 */}
            <DigitGroupsContainer>
              {allPossibleNumbers.map((num, groupIdx) => {
                const groupId = `group-${groupIdx}`;
                const state = digitGroupStates[groupId] || { tens: 0, ones: 0 };
                const currentNum = state.tens * 10 + state.ones;
                const isComplete = state.tens + state.ones === totalCircles;
                const isCorrect = isComplete && currentNum === num;

                return (
                  <DigitGroupCard
                    key={groupId}
                    $isComplete={isCorrect}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: groupIdx * 0.1 }}
                  >
                    <DigitGroupTitle>组合 {groupIdx + 1}</DigitGroupTitle>
                    <DigitGroupTargets>
                      {/* 十位框 */}
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                        <DigitTargetLabel>十位</DigitTargetLabel>
                        <DigitDropBox
                          $hasItems={state.tens > 0}
                          data-target-id={`${groupId}-tens`}
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={(e) => {
                            e.preventDefault();
                            handleDigitDrop(groupId, 'tens');
                          }}
                          onTouchEnd={(e) => {
                            if (!draggingItemId) return;
                            const touch = e.changedTouches[0];
                            const element = document.elementFromPoint(touch.clientX, touch.clientY);
                            if (element?.closest('[data-target-id]')?.getAttribute('data-target-id') === `${groupId}-tens`) {
                              handleDigitDrop(groupId, 'tens');
                            }
                            setDraggingItemId(null);
                          }}
                          whileHover={{ scale: 1.02 }}
                        >
                          {Array.from({ length: state.tens }).map((_, i) => (
                            <ClickableCircle
                              key={`t-${i}`}
                              onClick={() => handleDigitCircleRemove(groupId, 'tens')}
                              whileHover={{ scale: 1.2 }}
                              title="点击移除"
                            />
                          ))}
                        </DigitDropBox>
                      </div>
                      {/* 个位框 */}
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                        <DigitTargetLabel>个位</DigitTargetLabel>
                        <DigitDropBox
                          $hasItems={state.ones > 0}
                          data-target-id={`${groupId}-ones`}
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={(e) => {
                            e.preventDefault();
                            handleDigitDrop(groupId, 'ones');
                          }}
                          onTouchEnd={(e) => {
                            if (!draggingItemId) return;
                            const touch = e.changedTouches[0];
                            const element = document.elementFromPoint(touch.clientX, touch.clientY);
                            if (element?.closest('[data-target-id]')?.getAttribute('data-target-id') === `${groupId}-ones`) {
                              handleDigitDrop(groupId, 'ones');
                            }
                            setDraggingItemId(null);
                          }}
                          whileHover={{ scale: 1.02 }}
                        >
                          {Array.from({ length: state.ones }).map((_, i) => (
                            <ClickableCircle
                              key={`o-${i}`}
                              onClick={() => handleDigitCircleRemove(groupId, 'ones')}
                              whileHover={{ scale: 1.2 }}
                              title="点击移除"
                            />
                          ))}
                        </DigitDropBox>
                      </div>
                    </DigitGroupTargets>
                    {/* 显示当前数字 */}
                    {isComplete && (
                      <DigitResultNumber
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        style={{ color: isCorrect ? ThemeColors.success : ThemeColors.error }}
                      >
                        = {currentNum}
                      </DigitResultNumber>
                    )}
                    {!isComplete && state.tens + state.ones > 0 && (
                      <div style={{ fontSize: '12px', color: ThemeColors.textSecondary }}>
                        还需 {totalCircles - state.tens - state.ones} 个圆片
                      </div>
                    )}
                  </DigitGroupCard>
                );
              })}
            </DigitGroupsContainer>
          </>
        ) : useAbsoluteLayout ? (
          <AbsoluteLayoutContainer $size={layoutSize}>
            {question.targets.map(renderAbsoluteTarget)}
          </AbsoluteLayoutContainer>
        ) : (
          <TargetsContainer>
            {/* 连线层 */}
            {question.connections && question.connections.length > 0 && (
              <ConnectionSvg>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#4F46E5" />
                  </marker>
                </defs>
                {question.connections.map((conn, idx) => {
                  const fromTarget = question.targets.find(t => t.id === conn.from);
                  const toTarget = question.targets.find(t => t.id === conn.to);
                  if (!fromTarget || !toTarget) return null;

                  // 计算连线起点和终点（从目标框中心到目标框中心）
                  const fromX = fromTarget.position.x + fromTarget.size.width / 2;
                  const fromY = fromTarget.position.y + fromTarget.size.height / 2;
                  const toX = toTarget.position.x + toTarget.size.width / 2;
                  const toY = toTarget.position.y + toTarget.size.height / 2;

                  return (
                    <ConnectionLine
                      key={`conn-${idx}`}
                      x1={fromX}
                      y1={fromY}
                      x2={toX}
                      y2={toY}
                      markerEnd="url(#arrowhead)"
                    />
                  );
                })}
              </ConnectionSvg>
            )}
            {question.targets.map(renderTarget)}
          </TargetsContainer>
        )}

        {/* 数位摆数题型 - 显示确认和重置按钮 */}
        {isDigitPlacement && !isAnswered && (
          <>
            <SubmitButton
              onClick={handleDigitSubmit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ marginTop: '24px' }}
            >
              确认答案
            </SubmitButton>
            <ResetButton
              onClick={handleDigitReset}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              重置
            </ResetButton>
            <div style={{ fontSize: '14px', color: ThemeColors.textSecondary, marginTop: '8px' }}>
              提示：每组合计需要 {totalCircles} 个圆片，共 {allPossibleNumbers.length} 种组合
            </div>
          </>
        )}

        {/* 普通拖拽题 - 显示确认和重置按钮 */}
        {!isDigitPlacement && !isAnswered && allItemsPlaced && (
          <>
            <SubmitButton
              onClick={handleSubmit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              确认答案
            </SubmitButton>
            <ResetButton
              onClick={handleReset}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              重置
            </ResetButton>
          </>
        )}
      </DragArea>
    </QuestionContainer>
  );
};

export default DragQuestion;