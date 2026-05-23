import { useState, useEffect, RefObject } from 'react';

/**
 * 计算容器缩放比例
 * 用于响应式布局，将固定像素值转换为自适应尺寸
 *
 * @param containerRef 容器 DOM 引用
 * @param designWidth 设计稿宽度（像素）
 * @returns 缩放比例 (0-1)，桌面端为 1，移动端按比例缩小
 *
 * @example
 * const containerRef = useRef<HTMLDivElement>(null);
 * const scale = useScale(containerRef, 700);
 * // 移动端实际宽度 350px 时，scale = 350/700 = 0.5
 */
export function useScale(containerRef: RefObject<HTMLElement | null>, designWidth: number): number {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const actualWidth = containerRef.current.offsetWidth;
        // 只在容器宽度小于设计宽度时缩放
        const newScale = Math.min(actualWidth / designWidth, 1);
        setScale(newScale);
      }
    };

    // 初始计算
    updateScale();

    // 监听容器尺寸变化
    const resizeObserver = new ResizeObserver(updateScale);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [containerRef, designWidth]);

  return scale;
}
