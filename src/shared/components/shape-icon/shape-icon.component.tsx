import React from 'react';
import styled from 'styled-components';

export type ShapeType = 'circle' | 'triangle' | 'square' | 'rectangle';

interface ShapeIconProps {
  /** 图形类型 */
  shape: ShapeType;
  /** 尺寸（宽高相等，默认 60px） */
  size?: number;
  /** 可选的自定义类名 */
  className?: string;
}

// 图形颜色配置
const SHAPE_COLORS = {
  circle: {
    primary: '#3B82F6', // 蓝色
    secondary: '#60A5FA',
    shadow: 'rgba(59, 130, 246, 0.4)',
  },
  triangle: {
    primary: '#22C55E', // 绿色
    secondary: '#4ADE80',
    shadow: 'rgba(34, 197, 94, 0.4)',
  },
  square: {
    primary: '#EF4444', // 红色
    secondary: '#F87171',
    shadow: 'rgba(239, 68, 68, 0.4)',
  },
  rectangle: {
    primary: '#F97316', // 橙色
    secondary: '#FB923C',
    shadow: 'rgba(249, 115, 22, 0.4)',
  },
} as const;

const ShapeContainer = styled.div<{ $size: number }>`
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ShapeSvg = styled.svg`
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
`;

/**
 * 图形 SVG 组件
 * 用于显示彩色、立体的几何图形
 */
const ShapeIcon: React.FC<ShapeIconProps> = ({ shape, size = 60, className }) => {
  const colors = SHAPE_COLORS[shape];
  const svgSize = size * 0.8; // 图形实际大小为容器的 80%

  const renderShape = () => {
    switch (shape) {
      case 'circle':
        return (
          <circle
            cx={svgSize / 2}
            cy={svgSize / 2}
            r={svgSize / 2 - 2}
            fill={`url(#${shape}-gradient)`}
          />
        );
      case 'triangle':
        const trianglePoints = [
          `${svgSize / 2},4`, // 顶点
          `${svgSize - 4},${svgSize - 4}`, // 右下
          `4,${svgSize - 4}`, // 左下
        ].join(' ');
        return <polygon points={trianglePoints} fill={`url(#${shape}-gradient)`} />;
      case 'square':
        return (
          <rect
            x={4}
            y={4}
            width={svgSize - 8}
            height={svgSize - 8}
            rx={4}
            fill={`url(#${shape}-gradient)`}
          />
        );
      case 'rectangle':
        const rectWidth = svgSize - 8;
        const rectHeight = (svgSize - 8) * 0.6;
        const rectY = (svgSize - rectHeight) / 2;
        return (
          <rect
            x={4}
            y={rectY}
            width={rectWidth}
            height={rectHeight}
            rx={4}
            fill={`url(#${shape}-gradient)`}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ShapeContainer $size={size} className={className}>
      <ShapeSvg width={svgSize} height={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`}>
        {/* 渐变定义 */}
        <defs>
          <linearGradient id={`${shape}-gradient`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.secondary} />
            <stop offset="100%" stopColor={colors.primary} />
          </linearGradient>
        </defs>
        {renderShape()}
      </ShapeSvg>
    </ShapeContainer>
  );
};

export default ShapeIcon;