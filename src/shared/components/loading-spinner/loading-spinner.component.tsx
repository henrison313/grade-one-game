/**
 * 星星旋转加载动画组件
 * 游戏主题风格的加载状态展示
 */

import styled, { keyframes } from 'styled-components';
import { ThemeColors } from '@/config';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

// 星星旋转动画
const starSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// 星星脉冲动画
const starPulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
`;

// 容器
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

// 星星组容器
const StarsWrapper = styled.div<{ $size: 'small' | 'medium' | 'large' }>`
  position: relative;
  width: ${(props) => {
    switch (props.$size) {
      case 'small': return '60px';
      case 'large': return '120px';
      default: return '80px';
    }
  }};
  height: ${(props) => {
    switch (props.$size) {
      case 'small': return '60px';
      case 'large': return '120px';
      default: return '80px';
    }
  }};
  animation: ${starSpin} 2s linear infinite;
`;

// 单颗星星
const Star = styled.div<{ $size: 'small' | 'medium' | 'large'; $index: number }>`
  position: absolute;
  width: ${(props) => {
    switch (props.$size) {
      case 'small': return '20px';
      case 'large': return '40px';
      default: return '28px';
    }
  }};
  height: ${(props) => {
    switch (props.$size) {
      case 'small': return '20px';
      case 'large': return '40px';
      default: return '28px';
    }
  }};

  /* 根据索引定位 3 颗星 */
  top: ${(props) => {
    const positions: Record<number, string> = {
      0: '0',
      1: '40%',
      2: '80%',
    };
    return positions[props.$index] || '0';
  }};
  left: ${(props) => {
    const positions: Record<number, string> = {
      0: '30%',
      1: '60%',
      2: '30%',
    };
    return positions[props.$index] || '30%';
  }};

  animation: ${starPulse} 1s ease-in-out infinite;
  animation-delay: ${(props) => props.$index * 0.2}s;

  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.8));
  }
`;

// 加载文字
const LoadingText = styled.p<{ $size: 'small' | 'medium' | 'large' }>`
  margin-top: 24px;
  font-size: ${(props) => {
    switch (props.$size) {
      case 'small': return '16px';
      case 'large': return '24px';
      default: return '20px';
    }
  }};
  font-weight: 600;
  color: ${ThemeColors.textLight};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
`;

// 星星 SVG
const StarSvg = () => (
  <svg viewBox="0 0 24 24" fill={ThemeColors.star} stroke={ThemeColors.star} strokeWidth="1">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

/**
 * 星星旋转加载动画
 * @param size - 尺寸：small | medium | large
 * @param text - 加载文字，默认"加载中..."
 */
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  text = '加载中...'
}) => {
  return (
    <LoadingContainer>
      <StarsWrapper $size={size}>
        <Star $size={size} $index={0}>
          <StarSvg />
        </Star>
        <Star $size={size} $index={1}>
          <StarSvg />
        </Star>
        <Star $size={size} $index={2}>
          <StarSvg />
        </Star>
      </StarsWrapper>
      {text && <LoadingText $size={size}>{text}</LoadingText>}
    </LoadingContainer>
  );
};

export default LoadingSpinner;
