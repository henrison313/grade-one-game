import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeColors } from '@/config';
import { useSound } from '@/shared/hooks';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose: () => void;
}

const ToastContainer = styled(motion.div)<{ $type: ToastType }>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  color: white;
  z-index: 2000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 8px;

  ${(props) => {
    switch (props.$type) {
      case 'success':
        return `background: linear-gradient(135deg, ${ThemeColors.success} 0%, ${ThemeColors.successLight} 100%);`;
      case 'error':
        return `background: linear-gradient(135deg, ${ThemeColors.error} 0%, ${ThemeColors.errorLight} 100%);`;
      case 'warning':
        return `background: linear-gradient(135deg, ${ThemeColors.warning} 0%, #FCD34D 100%);`;
      default:
        return `background: linear-gradient(135deg, ${ThemeColors.primary} 0%, ${ThemeColors.primaryLight} 100%);`;
    }
  }}
`;

const ToastIcon = styled.span`
  font-size: 20px;
`;

const toastVariants = {
  hidden: { opacity: 0, y: -50, x: '-50%' },
  visible: { opacity: 1, y: 0, x: '-50%' },
  exit: { opacity: 0, y: -50, x: '-50%' },
};

const icons: Record<ToastType, string> = {
  success: '✓',
  error: '✕',
  warning: '⚠',
  info: 'ℹ',
};

const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration = 3000,
  onClose,
}) => {
  const { playCorrect, playWrong } = useSound();

  // 播放音效
  if (type === 'success') {
    playCorrect();
  } else if (type === 'error') {
    playWrong();
  }

  // 自动关闭
  React.useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      <ToastContainer
        $type={type}
        variants={toastVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        <ToastIcon>{icons[type]}</ToastIcon>
        {message}
      </ToastContainer>
    </AnimatePresence>
  );
};

// 需要 React 用于 useEffect
import React from 'react';

/**
 * Toast 管理器
 */
let toastId = 0;
const listeners: Set<(toast: { id: number; message: string; type: ToastType }) => void> = new Set();

export const toast = {
  show: (message: string, type: ToastType = 'info') => {
    const id = ++toastId;
    listeners.forEach((listener) => listener({ id, message, type }));
    return id;
  },
  success: (message: string) => toast.show(message, 'success'),
  error: (message: string) => toast.show(message, 'error'),
  warning: (message: string) => toast.show(message, 'warning'),
  info: (message: string) => toast.show(message, 'info'),
};

/**
 * Toast 容器组件
 */
interface ToastState {
  id: number;
  message: string;
  type: ToastType;
}

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = React.useState<ToastState[]>([]);

  React.useEffect(() => {
    const listener = (toast: ToastState) => {
      setToasts((prev) => [...prev, toast]);
    };
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <>
      {children}
      {toasts.map((t) => (
        <Toast
          key={t.id}
          message={t.message}
          type={t.type}
          onClose={() => removeToast(t.id)}
        />
      ))}
    </>
  );
};

export default Toast;