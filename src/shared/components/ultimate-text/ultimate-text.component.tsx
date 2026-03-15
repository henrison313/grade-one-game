/**
 * 绝招文字特效组件
 * 功能：根据属性显示不同颜色/效果，Framer Motion 动画
 */

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { AttributeTextEffects, type TextEffectType } from '@/config/game.config';

interface UltimateTextProps {
  skillName: string;
  attribute: string;
  onAnimationComplete: () => void;
}

// 文字容器
const TextContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

// 绝招文字
const UltimateTextStyled = styled(motion.h1)<{
  color: string;
  glowColor: string;
}>`
  font-size: 48px;
  font-weight: bold;
  color: ${({ color }) => color};
  text-shadow:
    0 0 10px ${({ glowColor }) => glowColor},
    0 0 20px ${({ glowColor }) => glowColor},
    0 0 30px ${({ glowColor }) => glowColor},
    0 0 40px ${({ glowColor }) => glowColor};
  margin: 0;
  white-space: nowrap;
`;

// 粒子效果容器
const ParticlesContainer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
`;

// 单个粒子
const Particle = styled(motion.div)<{ color: string }>`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${({ color }) => color};
  border-radius: 50%;
  box-shadow: 0 0 10px ${({ color }) => color};
`;

/**
 * 绝招文字特效组件
 */
export const UltimateText: React.FC<UltimateTextProps> = ({
  skillName,
  attribute,
  onAnimationComplete,
}) => {
  // 获取属性特效配置
  const effectConfig = AttributeTextEffects[attribute as keyof typeof AttributeTextEffects] || {
    color: '#FFD700',
    glow: '#FFA500',
    effect: 'pulse' as TextEffectType,
  };

  // 生成粒子
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    vx: (Math.random() - 0.5) * 10,
    vy: (Math.random() - 0.5) * 10,
  }));

  // 动画变体
  const textVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    flicker: {
      opacity: [1, 0.8, 1, 0.9, 1],
      scale: [1, 1.05, 1, 1.02, 1],
      transition: { duration: 2, repeat: Infinity },
    },
    wave: {
      y: [0, -10, 0],
      transition: { duration: 1.5, repeat: Infinity },
    },
    swirl: {
      rotate: [0, 5, -5, 0],
      scale: [1, 1.02, 1],
      transition: { duration: 2, repeat: Infinity },
    },
    shake: {
      x: [0, -5, 5, -5, 5, 0],
      transition: { duration: 0.5, repeat: Infinity },
    },
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.9, 1],
      transition: { duration: 1.5, repeat: Infinity },
    },
  };

  // 获取当前效果的变体
  const getCurrentVariant = () => {
    const variants: string[] = ['animate'];
    if (effectConfig.effect !== 'pulse') {
      variants.push(effectConfig.effect);
    }
    return variants;
  };

  // 完成动画后回调
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <TextContainer>
      <ParticlesContainer>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            color={effectConfig.glow}
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: particle.x,
              y: particle.y,
              opacity: [0, 1, 0],
              scale: [0, 1, 0.5],
            }}
            transition={{
              duration: 2,
              delay: particle.id * 0.1,
            }}
          />
        ))}
      </ParticlesContainer>

      <UltimateTextStyled
        color={effectConfig.color}
        glowColor={effectConfig.glow}
        initial="initial"
        animate={getCurrentVariant()}
        variants={textVariants}
      >
        {skillName}
      </UltimateTextStyled>
    </TextContainer>
  );
};

export default UltimateText;
