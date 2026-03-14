import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeColors } from '@/config';

interface ProgressBarProps {
  current: number;
  total: number;
  showLabel?: boolean;
  color?: string;
  height?: number;
}

const ProgressContainer = styled.div`
  width: 100%;
`;

const ProgressTrack = styled.div<{ $height: number }>`
  width: 100%;
  height: ${(props) => props.$height}px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: ${(props) => props.$height / 2}px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProgressFill = styled(motion.div)<{ $height: number; $color: string }>`
  height: 100%;
  background: ${(props) => props.$color};
  border-radius: ${(props) => props.$height / 2}px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  font-size: 14px;
  color: ${ThemeColors.textLight};
  font-weight: 600;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  showLabel = true,
  color = ThemeColors.secondary,
  height = 12,
}) => {
  const percentage = Math.min(100, Math.max(0, (current / total) * 100));

  return (
    <ProgressContainer>
      <ProgressTrack $height={height}>
        <ProgressFill
          $height={height}
          $color={color}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </ProgressTrack>
      {showLabel && (
        <ProgressLabel>
          <span>{current} / {total}</span>
          <span>{Math.round(percentage)}%</span>
        </ProgressLabel>
      )}
    </ProgressContainer>
  );
};

export default ProgressBar;