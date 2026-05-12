import React, { useState, useCallback, useEffect, useRef } from 'react';
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
  rotation?: number; // 旋转角度
}

interface ShapeComposeQuestionProps {
  question: ShapeComposeQuestionData;
  isAnswered: boolean;
  onAnswer: (placedShapes: PlacedShape[]) => void;
}

interface RotationState {
  shapeId: string;
  centerX: number;
  centerY: number;
  startAngle: number;
  initialRotation: number;
}

// 图形颜色配置
const SHAPE_COLORS: Record<string, string> = {
  circle: '#3B82F6',    // 蓝色
  triangle: '#EF4444',  // 红色 - 中三角形
  'triangle-big': '#DC2626',  // 大三角形 - 深红色
  'triangle-medium': '#EF4444', // 中三角形 - 红色
  'triangle-small': '#F87171', // 小三角形 - 浅红色
  square: '#10B981',    // 绿色
  'square-big': '#059669', // 大方块 - 深绿色
  rectangle: '#F59E0B', // 黄色
  parallelogram: '#A78BFA', // 平行四边形 - 紫色
};

// 七巧板尺寸计算（以小三角形直角边为基准单位 a = 60）
// 小三角形：直角边 = a，斜边 = a√2
// 中三角形：直角边 = a√2 ≈ 1.414a，斜边 = 2a
// 大三角形：直角边 = 2a，斜边 = 2a√2
// 正方形：边长 = a
// 平行四边形：短边 = a，长边 = a√2
const TANGRAM_BASE = 60; // 小三角形直角边长度

// 图形 SVG 渲染组件
const ShapeSVG: React.FC<{ shape: string; size?: number; scale?: number }> = ({ shape, size, scale = 1 }) => {
  const color = SHAPE_COLORS[shape] || '#4F46E5';

  // 根据七巧板比例计算实际尺寸
  const getShapeDimensions = (shapeType: string, shapeScale: number): { width: number; height: number } => {
    const a = TANGRAM_BASE * shapeScale;
    const aRoot2 = a * Math.SQRT2; // a√2 ≈ 85

    switch (shapeType) {
      case 'triangle-small':
        // 小等腰直角三角形：直角边 = a
        return { width: a, height: a };
      case 'triangle-medium':
      case 'triangle':
        // 中等腰直角三角形：直角边 = a√2
        return { width: aRoot2, height: aRoot2 };
      case 'triangle-big':
        // 大等腰直角三角形：直角边 = 2a
        return { width: a * 2, height: a * 2 };
      case 'square':
        // 正方形：边长 = a
        return { width: a, height: a };
      case 'square-big':
        // 大正方形：边长 = 1.5a
        return { width: a * 1.5, height: a * 1.5 };
      case 'parallelogram':
        // 平行四边形：短边 = a，长边 = a√2（与小三角形斜边相等），高度 = a
        // 宽度 = 长边水平投影 + 短边 = a + a = 2a
        return { width: a * 2, height: a };
      case 'rectangle':
        // 长方形：宽度 = a * 2，高度 = a/2（用于表示 20）
        return { width: a * 2, height: a / 2 };
      default:
        return { width: size || a, height: size || a };
    }
  };

  const dimensions = getShapeDimensions(shape, scale);

  switch (shape) {
    case 'circle':
      return (
        <svg width={size || 60} height={size || 60} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill={color} />
        </svg>
      );
    case 'triangle-small':
      // 小三角形：等腰直角三角形
      return (
        <svg width={dimensions.width} height={dimensions.height} viewBox="0 0 100 100">
          <polygon points="0,100 100,100 0,0" fill={color} />
        </svg>
      );
    case 'triangle-medium':
    case 'triangle':
      // 中三角形：等腰直角三角形
      return (
        <svg width={dimensions.width} height={dimensions.height} viewBox="0 0 100 100">
          <polygon points="0,100 100,100 0,0" fill={color} />
        </svg>
      );
    case 'triangle-big':
      // 大三角形：等腰直角三角形
      return (
        <svg width={dimensions.width} height={dimensions.height} viewBox="0 0 100 100">
          <polygon points="0,100 100,100 0,0" fill={color} />
        </svg>
      );
    case 'square':
      // 正方形
      return (
        <svg width={dimensions.width} height={dimensions.height} viewBox="0 0 100 100">
          <rect x="0" y="0" width="100" height="100" fill={color} />
        </svg>
      );
    case 'square-big':
      // 大正方形（代表 50）
      return (
        <svg width={dimensions.width} height={dimensions.height} viewBox="0 0 100 100">
          <rect x="0" y="0" width="100" height="100" fill={color} rx="4" />
        </svg>
      );
    case 'parallelogram':
      // 平行四边形：短边 = a，长边 = a√2（与小三角形斜边相等），高度 = a
      // 倾斜方向：向左倾斜
      return (
        <svg width={dimensions.width} height={dimensions.height} viewBox="0 0 120 60">
          <polygon points="60,60 120,60 60,0 0,0" fill={color} />
        </svg>
      );
    case 'rectangle':
      // 长方形：用于烟囱、门，用于表示 20 等
      return (
        <svg width={dimensions.width} height={dimensions.height} viewBox="0 0 120 30">
          <rect x="0" y="0" width="120" height="30" fill={color} rx="4" />
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: grab;
  padding: 8px;
  min-width: 80px;
  min-height: 80px;
  user-select: none;
  touch-action: none;

  &:active {
    cursor: grabbing;
  }
`;

const ValueLabel = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${ThemeColors.textPrimary};
  margin-top: 4px;
`;

const CanvasArea = styled.div<{ $width: number; $height: number }>`
  width: 100%;
  max-width: ${(props) => props.$width}px;
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


// 悬停旋转按钮 - 放在图形内部左上角，按住拖动自由旋转
const HoverRotateButton = styled.button<{ $visible: boolean }>`
  position: absolute;
  left: -8px;
  top: -8px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: white;
  border: 2px solid ${ThemeColors.primary};
  cursor: grab;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.15s ease, transform 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 100;
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${ThemeColors.primaryLight};
    transform: scale(1.15);
  }

  &:active {
    cursor: grabbing;
    transform: scale(0.95);
  }
`;

// 画布图形包装器 - 图形和旋转按钮分开，避免拖拽事件冲突
const CanvasShapeWrapper = styled(motion.div)<{ $isHovered?: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  user-select: none;
  touch-action: none;

  &:active {
    cursor: grabbing;
  }
`;


// 获取图形的实际尺寸（基于七巧板比例）
const getShapeSize = (shape: string, scale: number = 1): { width: number; height: number } => {
  const a = TANGRAM_BASE * scale;
  const aRoot2 = a * Math.SQRT2; // a√2 ≈ 85

  switch (shape) {
    case 'triangle-small':
      // 小等腰直角三角形：直角边 = a
      return { width: a, height: a };
    case 'triangle-medium':
    case 'triangle':
      // 中等腰直角三角形：直角边 = a√2
      return { width: aRoot2, height: aRoot2 };
    case 'triangle-big':
      // 大等腰直角三角形：直角边 = 2a
      return { width: a * 2, height: a * 2 };
    case 'square':
      // 正方形：边长 = a
      return { width: a, height: a };
    case 'square-big':
      // 大正方形：边长 = 1.5a
      return { width: a * 1.5, height: a * 1.5 };
    case 'parallelogram':
      // 平行四边形：短边 = a，长边 = a√2（与小三角形斜边相等），高度 = a
      // 宽度 = 长边水平投影 + 短边 = a + a = 2a
      return { width: a * 2, height: a };
    case 'rectangle':
      // 长方形：宽度 = a * 2，高度 = a/2（用于表示 20）
      return { width: a * 2, height: a / 2 };
    default:
      return { width: a, height: a };
  }
};

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

// 进度显示条
const ProgressBar = styled.div`
  margin-top: 16px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  text-align: center;
`;

const ProgressText = styled.div<{ $isComplete: boolean }>`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.$isComplete ? ThemeColors.success : ThemeColors.textPrimary};
`;

const ProgressHint = styled.div`
  font-size: 14px;
  color: ${ThemeColors.textSecondary};
  margin-top: 4px;
`;

const ShapeComposeQuestion: React.FC<ShapeComposeQuestionProps> = ({
  question,
  isAnswered,
  onAnswer,
}) => {
  const { playDrag, playDrop, playCorrect } = useSound();
  const [placedShapes, setPlacedShapes] = useState<PlacedShape[]>([]);
  const [draggingItemId, setDraggingItemId] = useState<string | null>(null);
  const [hoveredShapeId, setHoveredShapeId] = useState<string | null>(null); // 悬停的画布图形ID
  const [actualCanvasSize, setActualCanvasSize] = useState<{ width: number; height: number } | null>(null); // 实际画布尺寸
  const [rotation, setRotation] = useState<RotationState | null>(null); // 旋转状态
  const shapeRefs = useRef<Record<string, HTMLDivElement | null>>({}); // 图形元素引用

  // 图形缩放比例（从题目配置获取，默认 1）
  const shapeScale = question.shapeScale || 1;

  // 获取画布实际渲染尺寸
  const updateCanvasRect = useCallback(() => {
    const canvasElement = document.querySelector('[data-canvas]');
    if (canvasElement) {
      const rect = canvasElement.getBoundingClientRect();
      setActualCanvasSize({ width: rect.width, height: rect.height });
    }
  }, []);

  // 初始化和窗口大小变化时更新画布尺寸
  React.useEffect(() => {
    updateCanvasRect();
    window.addEventListener('resize', updateCanvasRect);
    return () => window.removeEventListener('resize', updateCanvasRect);
  }, [updateCanvasRect]);

  // 计算鼠标相对于中心点的角度
  const calculateAngle = useCallback((clientX: number, clientY: number, centerX: number, centerY: number): number => {
    return Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
  }, []);

  // 开始旋转
  const handleRotateStart = useCallback((shapeId: string, e: React.MouseEvent | React.TouchEvent) => {
    if (isAnswered) return;
    e.preventDefault();
    e.stopPropagation();

    const shape = placedShapes.find(s => s.id === shapeId);
    if (!shape) return;

    const shapeSize = getShapeSize(shape.shape, shapeScale);
    const element = shapeRefs.current[shapeId];
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + shapeSize.width / 2;
    const centerY = rect.top + shapeSize.height / 2;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const currentAngle = calculateAngle(clientX, clientY, centerX, centerY);
    const initialRotation = shape.rotation || 0;

    setRotation({
      shapeId,
      centerX,
      centerY,
      startAngle: currentAngle,
      initialRotation,
    });

    playDrag();
  }, [isAnswered, placedShapes, calculateAngle, playDrag]);

  // 旋转移动
  const handleRotateMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!rotation) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const currentAngle = calculateAngle(clientX, clientY, rotation.centerX, rotation.centerY);
    const angleDiff = currentAngle - rotation.startAngle;
    const newRotation = (rotation.initialRotation + angleDiff + 360) % 360;

    setPlacedShapes(prev => prev.map(shape => {
      if (shape.id === rotation.shapeId) {
        return { ...shape, rotation: newRotation };
      }
      return shape;
    }));
  }, [rotation, calculateAngle]);

  // 结束旋转
  const handleRotateEnd = useCallback(() => {
    if (rotation) {
      playDrop();
    }
    setRotation(null);
  }, [rotation, playDrop]);

  // 全局旋转事件监听
  useEffect(() => {
    if (!rotation) return;

    const handleMouseMove = (e: MouseEvent) => handleRotateMove(e);
    const handleMouseUp = () => handleRotateEnd();
    const handleTouchMove = (e: TouchEvent) => handleRotateMove(e);
    const handleTouchEnd = () => handleRotateEnd();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [rotation, handleRotateMove, handleRotateEnd]);

  // 计算每种图形已放入的数量
  const shapeCounts = placedShapes.reduce((acc, shape) => {
    acc[shape.shape] = (acc[shape.shape] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // 计算已放入图形的总值（用于 targetValue 模式）
  const totalValue = placedShapes.reduce((sum, placed) => {
    const item = question.items.find((i) => i.id === placed.id);
    return sum + (item?.value || 0);
  }, 0);

  // 检查是否满足要求
  const meetsRequired = question.targetValue
    ? totalValue === question.targetValue  // 目标值模式：总值必须等于目标
    : question.allItemsRequired
      ? placedShapes.length === question.items.length  // 必须使用所有图形
      : question.requiredCounts
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
      // 使用图形实际尺寸计算边界
      const shapeSize = getShapeSize(item.shape!, shapeScale);
      const padding = 10;
      const minX = padding;
      const maxX = canvasRect.width - shapeSize.width - padding;
      const minY = padding;
      const maxY = canvasRect.height - shapeSize.height - padding;
      let x = Math.max(minX, Math.min(e.clientX - canvasRect.left - shapeSize.width / 2, maxX));
      let y = Math.max(minY, Math.min(e.clientY - canvasRect.top - shapeSize.height / 2, maxY));

      // 获取初始旋转角度
      const initialRotation = item.rotation || 0;

      const newPlacedShape: PlacedShape = {
        id: item.id,
        shape: item.shape!,
        x,
        y,
        rotation: initialRotation,
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
            return {
              ...shape,
              x: newX,
              y: newY,
            };
          }
          return shape;
        })
      );
    },
    [isAnswered, placedShapes]
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
    const initialRotation = item.rotation || 0;

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
                // 使用图形实际尺寸计算边界
                const shapeSize = getShapeSize(item.shape!, shapeScale);
                const padding = 10;
                const minX = padding;
                const maxX = canvasRect.width - shapeSize.width - padding;
                const minY = padding;
                const maxY = canvasRect.height - shapeSize.height - padding;
                let x = Math.max(minX, Math.min(touch.clientX - canvasRect.left - shapeSize.width / 2, maxX));
                let y = Math.max(minY, Math.min(touch.clientY - canvasRect.top - shapeSize.height / 2, maxY));
                // 放入画布时使用初始旋转角度
                const initialRotation = item.rotation || 0;

                setPlacedShapes([...placedShapes, { id: item.id, shape: item.shape!, x, y, rotation: initialRotation }]);
                playDrop();
              }
            }
          }
          setDraggingItemId(null);
        }}
        whileHover={!isAnswered && !isPlaced ? { scale: 1.05 } : {}}
        whileTap={!isAnswered && !isPlaced ? { scale: 0.95 } : {}}
        style={{ opacity: isPlaced ? 0.4 : 1, transform: initialRotation ? `rotate(${initialRotation}deg)` : undefined }}
      >
        <ShapeSVG shape={shapeType} scale={shapeScale} />
        {item.value && <ValueLabel>{item.value}</ValueLabel>}
      </ToolbarItem>
    );
  };

  // 渲染画布内图形
  const renderCanvasShape = (placed: PlacedShape) => {
    const isHovered = hoveredShapeId === placed.id;
    // 获取图形实际尺寸用于边界约束
    const shapeSize = getShapeSize(placed.shape, shapeScale);
    const padding = 10;
    // 获取图形的值
    const item = question.items.find((i) => i.id === placed.id);
    const value = item?.value;

    // 使用实际画布尺寸，如果没有则使用配置尺寸
    const actualWidth = actualCanvasSize?.width || question.canvasSize.width;
    const actualHeight = actualCanvasSize?.height || question.canvasSize.height;

    // 边界约束有效性检查：确保画布尺寸大于图形尺寸
    const isValidConstraint = actualWidth > shapeSize.width + padding * 2 &&
                              actualHeight > shapeSize.height + padding * 2;

    // 计算边界约束，确保值为正数
    const constraintRight = isValidConstraint
      ? Math.max(padding, actualWidth - shapeSize.width - padding)
      : padding;
    const constraintBottom = isValidConstraint
      ? Math.max(padding, actualHeight - shapeSize.height - padding)
      : padding;

    return (
      <CanvasShapeWrapper
        key={placed.id}
        ref={(el) => { shapeRefs.current[placed.id] = el; }}
        $isHovered={isHovered}
        drag={!isAnswered && !rotation}
        dragConstraints={{
          left: padding,
          right: constraintRight,
          top: padding,
          bottom: constraintBottom,
        }}
        dragMomentum={false}
        onDragStart={() => setHoveredShapeId(null)}
        onDragEnd={(_e, info) => {
          const newX = placed.x + info.offset.x;
          const newY = placed.y + info.offset.y;

          updateShapePosition(placed.id, newX, newY);
          playDrop();
        }}
        onMouseEnter={() => setHoveredShapeId(placed.id)}
        onMouseLeave={() => setHoveredShapeId(null)}
        animate={{
          x: placed.x,
          y: placed.y,
          rotate: placed.rotation || 0,
          scale: 1
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{ cursor: isAnswered ? 'default' : 'grab' }}
      >
        <ShapeSVG shape={placed.shape} scale={shapeScale} />
        {value && <ValueLabel>{value}</ValueLabel>}

        {/* 悬停旋转按钮 - 按住拖动自由旋转 */}
        <HoverRotateButton
          $visible={isHovered && !isAnswered}
          onMouseDown={(e) => handleRotateStart(placed.id, e)}
          onTouchStart={(e) => handleRotateStart(placed.id, e)}
          onMouseEnter={() => setHoveredShapeId(placed.id)}
          title="按住拖动旋转"
        >
          🔄
        </HoverRotateButton>
      </CanvasShapeWrapper>
    );
  };

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

        {/* 进度显示 */}
        {question.targetValue && (
          <ProgressBar>
            <ProgressText $isComplete={totalValue === question.targetValue}>
              当前总值：{totalValue} / 目标：{question.targetValue}
            </ProgressText>
            <ProgressHint>
              {totalValue === question.targetValue
                ? '✓ 完美！可以提交了'
                : totalValue > question.targetValue
                  ? `超出 ${totalValue - question.targetValue}，请移除一些图形`
                  : `还需要 ${question.targetValue - totalValue}`}
            </ProgressHint>
          </ProgressBar>
        )}

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