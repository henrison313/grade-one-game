import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { ShapeType, ShapeColor } from '@/types';

// 图形颜色配置
const SHAPE_COLORS: Record<ShapeColor, { fill: string; stroke: string; highlight: string }> = {
  blue: { fill: '#60A5FA', stroke: '#2563EB', highlight: '#93C5FD' },
  red: { fill: '#F87171', stroke: '#DC2626', highlight: '#FCA5A5' },
  green: { fill: '#4ADE80', stroke: '#16A34A', highlight: '#86EFAC' },
  yellow: { fill: '#FACC15', stroke: '#CA8A04', highlight: '#FDE047' },
  purple: { fill: '#A78BFA', stroke: '#7C3AED', highlight: '#C4B5FD' },
  orange: { fill: '#FB923C', stroke: '#EA580C', highlight: '#FDBA74' },
};

// 图形尺寸配置
const SHAPE_SIZES: Record<'small' | 'medium' | 'large', { width: number; height: number }> = {
  small: { width: 48, height: 48 },
  medium: { width: 72, height: 72 },
  large: { width: 96, height: 96 },
};

// 图形名称映射
const SHAPE_NAMES: Record<ShapeType, string> = {
  circle: '圆形',
  triangle: '三角形',
  square: '正方形',
  'square-big': '大方块',
  rectangle: '长方形',
  'triangle-big': '大三角形',
  'triangle-medium': '中三角形',
  'triangle-small': '小三角形',
  parallelogram: '平行四边形',
};

interface BaseShapeProps {
  type: ShapeType;
  color?: ShapeColor;
  size?: 'small' | 'medium' | 'large';
  highlighted?: boolean;
  selected?: boolean;
  animated?: boolean;
  animation?: 'highlight' | 'bounce' | 'shake' | 'glow' | 'pulse' | 'celebrate' | 'idle';
  onClick?: () => void;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  draggable?: boolean;
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  showLabel?: boolean;
}

const ShapeContainer = styled(motion.div)<{
  $clickable: boolean;
  $draggable: boolean;
  $selected: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.$clickable ? 'pointer' : props.$draggable ? 'grab' : 'default')};
  position: relative;
  user-select: none;
`;

const ShapeLabel = styled.div`
  margin-top: 4px;
  font-size: 12px;
  font-weight: 600;
  color: #666;
`;

const SelectedIndicator = styled(motion.div)`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 20px;
  height: 20px;
  background: #10B981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

const HighlightOverlay = styled(motion.div)`
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
  pointer-events: none;
`;

// 长方形 SVG
const RectangleShape: React.FC<{
  colors: { fill: string; stroke: string; highlight: string };
  width: number;
  height: number;
}> = ({ colors, width, height }) => (
  <svg viewBox="0 0 100 70" width={width} height={height * 0.7}>
    <rect
      x="5"
      y="5"
      width="90"
      height="60"
      fill={colors.fill}
      stroke={colors.stroke}
      strokeWidth="3"
      rx="4"
    />
  </svg>
);

// 正方形 SVG
const SquareShape: React.FC<{
  colors: { fill: string; stroke: string; highlight: string };
  width: number;
  height: number;
}> = ({ colors, width, height }) => (
  <svg viewBox="0 0 100 100" width={width} height={height}>
    <rect
      x="5"
      y="5"
      width="90"
      height="90"
      fill={colors.fill}
      stroke={colors.stroke}
      strokeWidth="3"
      rx="4"
    />
  </svg>
);

// 三角形 SVG
const TriangleShape: React.FC<{
  colors: { fill: string; stroke: string; highlight: string };
  width: number;
  height: number;
}> = ({ colors, width, height }) => (
  <svg viewBox="0 0 100 87" width={width} height={height * 0.87}>
    <polygon
      points="50,5 95,82 5,82"
      fill={colors.fill}
      stroke={colors.stroke}
      strokeWidth="3"
      strokeLinejoin="round"
    />
  </svg>
);

// 圆形 SVG
const CircleShape: React.FC<{
  colors: { fill: string; stroke: string; highlight: string };
  width: number;
  height: number;
}> = ({ colors, width, height }) => (
  <svg viewBox="0 0 100 100" width={width} height={height}>
    <circle
      cx="50"
      cy="50"
      r="45"
      fill={colors.fill}
      stroke={colors.stroke}
      strokeWidth="3"
    />
  </svg>
);

export const Shape: React.FC<BaseShapeProps> = ({
  type,
  color = 'blue',
  size = 'medium',
  highlighted = false,
  selected = false,
  animated = false,
  animation = 'idle',
  onClick,
  onDragStart,
  onDragEnd,
  draggable = false,
  className = '',
  style = {},
  label,
  showLabel = true,
}) => {
  const colors = SHAPE_COLORS[color] || SHAPE_COLORS.blue;
  const { width, height } = SHAPE_SIZES[size];

  const renderShape = () => {
    switch (type) {
      case 'rectangle':
        return <RectangleShape colors={colors} width={width} height={height} />;
      case 'square':
        return <SquareShape colors={colors} width={width} height={height} />;
      case 'triangle':
        return <TriangleShape colors={colors} width={width} height={height} />;
      case 'circle':
        return <CircleShape colors={colors} width={width} height={height} />;
      default:
        return <CircleShape colors={colors} width={width} height={height} />;
    }
  };

  const shapeName = label || SHAPE_NAMES[type];

  // 动画配置
  const getAnimationVariants = () => {
    if (!animated) return {};

    switch (animation) {
      case 'idle':
        return { scale: [1, 1.02, 1] };
      case 'highlight':
        return { scale: [1, 1.1, 1] };
      case 'bounce':
        return { y: [0, -15, 0] };
      case 'shake':
        return { x: [0, -8, 8, -8, 8, 0] };
      case 'pulse':
        return { scale: [1, 1.05, 1] };
      case 'celebrate':
        return { scale: [1, 1.15, 1, 1.1, 1], rotate: [0, 5, -5, 0] };
      case 'glow':
        return {};
      default:
        return {};
    }
  };

  const getTransitionConfig = () => {
    if (!animated) return {};

    switch (animation) {
      case 'idle':
        return { duration: 2, repeat: Infinity, ease: 'easeInOut' as const };
      case 'highlight':
        return { duration: 1, repeat: Infinity };
      case 'bounce':
        return { duration: 0.5 };
      case 'shake':
        return { duration: 0.3 };
      case 'pulse':
        return { duration: 0.8, repeat: Infinity };
      case 'celebrate':
        return { duration: 0.6 };
      default:
        return {};
    }
  };

  return (
    <ShapeContainer
      className={className}
      style={{
        width,
        height: height + (showLabel ? 20 : 0),
        ...style,
      }}
      $clickable={!!onClick}
      $draggable={draggable}
      $selected={selected}
      animate={getAnimationVariants()}
      transition={getTransitionConfig()}
      whileHover={onClick ? { scale: 1.05 } : undefined}
      whileTap={onClick ? { scale: 0.95 } : undefined}
      onClick={onClick}
      drag={draggable}
      dragSnapToOrigin={draggable}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      {renderShape()}

      {showLabel && <ShapeLabel>{shapeName}</ShapeLabel>}

      {selected && (
        <SelectedIndicator
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          ✓
        </SelectedIndicator>
      )}

      {highlighted && (
        <HighlightOverlay
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      )}
    </ShapeContainer>
  );
};

// 可拖拽图形
export const DraggableShape: React.FC<BaseShapeProps> = (props) => {
  return (
    <Shape
      {...props}
      draggable={true}
      onDragStart={props.onDragStart}
      onDragEnd={props.onDragEnd}
    />
  );
};

// 可点击图形
export const ClickableShape: React.FC<BaseShapeProps> = (props) => {
  return (
    <Shape
      {...props}
      onClick={props.onClick}
    />
  );
};

export default Shape;