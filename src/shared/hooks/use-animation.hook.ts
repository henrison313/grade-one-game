import { useRef, useCallback, useEffect } from 'react';
import { AnimationConfig } from '@/config';

/**
 * 动画配置类型
 */
interface AnimationOptions {
  duration?: number;
  delay?: number;
  repeat?: number;
  repeatDelay?: number;
  ease?: string;
}

/**
 * 动画 Hook
 */
export function useAnimation() {
  const animationRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /**
   * 清理动画
   */
  const cleanup = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  /**
   * 延迟执行
   */
  const delay = useCallback((ms: number): Promise<void> => {
    return new Promise((resolve) => {
      timeoutRef.current = setTimeout(resolve, ms);
    });
  }, []);

  /**
   * 数字动画（从 start 到 end）
   */
  const animateNumber = useCallback(
    (
      start: number,
      end: number,
      duration: number,
      onUpdate: (value: number) => void,
      onComplete?: () => void
    ) => {
      cleanup();

      const startTime = performance.now();
      const diff = end - start;

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // 使用 easeOutCubic 缓动函数
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = start + diff * easeProgress;

        onUpdate(Math.round(currentValue));

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          onComplete?.();
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    },
    [cleanup]
  );

  /**
   * 淡入动画
   */
  const fadeIn = useCallback(
    (element: HTMLElement, options?: AnimationOptions) => {
      const duration = options?.duration || AnimationConfig.fade.duration * 1000;

      element.style.opacity = '0';
      element.style.display = 'block';

      return new Promise<void>((resolve) => {
        const start = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - start;
          const progress = Math.min(elapsed / duration, 1);

          element.style.opacity = String(progress);

          if (progress < 1) {
            animationRef.current = requestAnimationFrame(animate);
          } else {
            resolve();
          }
        };

        animationRef.current = requestAnimationFrame(animate);
      });
    },
    []
  );

  /**
   * 淡出动画
   */
  const fadeOut = useCallback(
    (element: HTMLElement, options?: AnimationOptions) => {
      const duration = options?.duration || AnimationConfig.fade.duration * 1000;

      return new Promise<void>((resolve) => {
        const start = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - start;
          const progress = Math.min(elapsed / duration, 1);

          element.style.opacity = String(1 - progress);

          if (progress < 1) {
            animationRef.current = requestAnimationFrame(animate);
          } else {
            element.style.display = 'none';
            resolve();
          }
        };

        animationRef.current = requestAnimationFrame(animate);
      });
    },
    []
  );

  /**
   * 弹跳动画
   */
  const bounce = useCallback(
    (element: HTMLElement, options?: AnimationOptions) => {
      const duration = options?.duration || 500;

      return new Promise<void>((resolve) => {
        element.style.transform = 'scale(0)';

        const start = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - start;
          const progress = Math.min(elapsed / duration, 1);

          // 弹跳缓动
          const easeOutBounce = (x: number): number => {
            const n1 = 7.5625;
            const d1 = 2.75;
            if (x < 1 / d1) {
              return n1 * x * x;
            } else if (x < 2 / d1) {
              return n1 * (x -= 1.5 / d1) * x + 0.75;
            } else if (x < 2.5 / d1) {
              return n1 * (x -= 2.25 / d1) * x + 0.9375;
            } else {
              return n1 * (x -= 2.625 / d1) * x + 0.984375;
            }
          };

          const scale = easeOutBounce(progress);
          element.style.transform = `scale(${scale})`;

          if (progress < 1) {
            animationRef.current = requestAnimationFrame(animate);
          } else {
            element.style.transform = 'scale(1)';
            resolve();
          }
        };

        animationRef.current = requestAnimationFrame(animate);
      });
    },
    []
  );

  /**
   * 摇晃动画
   */
  const shake = useCallback(
    (element: HTMLElement, options?: AnimationOptions) => {
      const duration = options?.duration || 500;
      const intensity = 10;

      return new Promise<void>((resolve) => {
        const start = performance.now();
        const originalTransform = element.style.transform;

        const animate = (currentTime: number) => {
          const elapsed = currentTime - start;
          const progress = Math.min(elapsed / duration, 1);

          // 衰减的正弦波
          const decay = 1 - progress;
          const offset = Math.sin(progress * Math.PI * 6) * intensity * decay;

          element.style.transform = `${originalTransform} translateX(${offset}px)`;

          if (progress < 1) {
            animationRef.current = requestAnimationFrame(animate);
          } else {
            element.style.transform = originalTransform;
            resolve();
          }
        };

        animationRef.current = requestAnimationFrame(animate);
      });
    },
    []
  );

  /**
   * 脉冲动画
   */
  const pulse = useCallback(
    (element: HTMLElement, options?: AnimationOptions) => {
      const duration = options?.duration || 300;

      return new Promise<void>((resolve) => {
        const start = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - start;
          const progress = (elapsed / duration) % 1;

          const scale = 1 + Math.sin(progress * Math.PI * 2) * 0.1;
          element.style.transform = `scale(${scale})`;

          animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        // 如果有 repeat 参数，在指定次数后停止
        if (options?.repeat !== undefined) {
          setTimeout(() => {
            cleanup();
            element.style.transform = 'scale(1)';
            resolve();
          }, duration * options.repeat);
        }
      });
    },
    [cleanup]
  );

  // 清理
  useEffect(() => {
    return () => cleanup();
  }, [cleanup]);

  return {
    delay,
    animateNumber,
    fadeIn,
    fadeOut,
    bounce,
    shake,
    pulse,
    cleanup,
  };
}