import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeColors } from '@/config';

interface StarDisplayProps {
  count: number;
  maxCount?: number;
  size?: 'small' | 'medium' | 'large';
  animate?: boolean;
  showCount?: boolean;
}

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StarsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const Star = styled(motion.div)<{ $size: 'small' | 'medium' | 'large'; $filled: boolean }>`
  width: ${(props) => {
    switch (props.$size) {
      case 'small': return '24px';
      case 'large': return '48px';
      default: return '36px';
    }
  }};
  height: ${(props) => {
    switch (props.$size) {
      case 'small': return '24px';
      case 'large': return '48px';
      default: return '36px';
    }
  }};
  filter: ${(props) => props.$filled ? 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.8))' : 'none'};
`;

const StarSvg = ({ filled }: { filled: boolean }) => (
  <svg viewBox="0 0 24 24" fill={filled ? ThemeColors.star : 'none'} stroke={filled ? ThemeColors.star : '#9CA3AF'} strokeWidth="2">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const CountLabel = styled.span<{ $size: 'small' | 'medium' | 'large' }>`
  font-weight: 700;
  color: ${ThemeColors.textLight};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  font-size: ${(props) => {
    switch (props.$size) {
      case 'small': return '16px';
      case 'large': return '28px';
      default: return '20px';
    }
  }};
`;

const StarDisplay: React.FC<StarDisplayProps> = ({
  count,
  maxCount = 5,
  size = 'medium',
  animate = true,
  showCount = true,
}) => {
  const stars = Array.from({ length: maxCount }, (_, i) => i);

  return (
    <StarContainer>
      <StarsWrapper>
        {stars.map((index) => (
          <Star
            key={index}
            $size={size}
            $filled={index < count}
            initial={animate ? { scale: 0, rotate: -180 } : false}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: animate ? index * 0.1 : 0,
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
          >
            <StarSvg filled={index < count} />
          </Star>
        ))}
      </StarsWrapper>
      {showCount && (
        <CountLabel $size={size}>{count}</CountLabel>
      )}
    </StarContainer>
  );
};

export default StarDisplay;