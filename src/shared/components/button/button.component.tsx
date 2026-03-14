import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeColors } from '@/config';
import { useSound } from '@/shared/hooks';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled(motion.button)<{
  $variant: 'primary' | 'secondary' | 'success' | 'danger';
  $size: 'small' | 'medium' | 'large';
  $fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-radius: 12px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-family: inherit;
  cursor: pointer;
  border: none;
  outline: none;

  /* 尺寸 */
  ${(props) => {
    switch (props.$size) {
      case 'small':
        return `
          padding: 8px 16px;
          font-size: 14px;
        `;
      case 'large':
        return `
          padding: 16px 32px;
          font-size: 20px;
        `;
      default:
        return `
          padding: 12px 24px;
          font-size: 16px;
        `;
    }
  }}

  /* 宽度 */
  ${(props) => props.$fullWidth && 'width: 100%;'}

  /* 变体 */
  ${(props) => {
    switch (props.$variant) {
      case 'secondary':
        return `
          background: linear-gradient(135deg, ${ThemeColors.secondary} 0%, ${ThemeColors.secondaryLight} 100%);
          color: white;
        `;
      case 'success':
        return `
          background: linear-gradient(135deg, ${ThemeColors.success} 0%, ${ThemeColors.successLight} 100%);
          color: white;
        `;
      case 'danger':
        return `
          background: linear-gradient(135deg, ${ThemeColors.error} 0%, ${ThemeColors.errorLight} 100%);
          color: white;
        `;
      default:
        return `
          background: linear-gradient(135deg, ${ThemeColors.primary} 0%, ${ThemeColors.primaryLight} 100%);
          color: white;
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  children,
  onClick,
}) => {
  const { playClick } = useSound();

  const handleClick = () => {
    if (disabled) return;
    playClick();
    onClick?.();
  };

  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      disabled={disabled}
      onClick={handleClick}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;