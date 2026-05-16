/**
 * 场景背景组件 - 可爱卡通风格 + 炫蓝闪电引导者
 * 功能：根据题目场景类型渲染不同的背景效果，显示炫蓝闪电角色
 * 设计：卡通云朵、星星、彩虹装饰，炫蓝闪电引导者
 */

import { getAssetPath } from '@/config/paths.config';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import type { SceneType } from '@/types';

// 🎨 糖果色系场景渐变
const SceneGradients: Record<SceneType, string> = {
  forest: 'linear-gradient(180deg, #98D8AA 0%, #B8E6C8 40%, #D8F4E8 100%)',
  ocean: 'linear-gradient(180deg, #89CFF0 0%, #A8D8F0 40%, #C8E8F8 100%)',
  volcano: 'linear-gradient(180deg, #FFCBA4 0%, #FFD8B8 40%, #FFE8D0 100%)',
  desert: 'linear-gradient(180deg, #FFE66D 0%, #FFE88D 40%, #FFEAB0 100%)',
  space: 'linear-gradient(180deg, #E6E6FA 0%, #D0D0F8 40%, #B8B8F0 100%)',
};

// 🌈 星星闪烁
const starTwinkle = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.7); }
`;

// ☁️ 云朵飘动
const cloudFloat = keyframes`
  0%, 100% { transform: translateX(0px); }
  50% { transform: translateX(15px); }
`;

// 🎐 小元素漂浮
const gentleFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

// ⚡ 炫蓝闪电浮动动画
const heroFloat = keyframes`
  0%, 100% { transform: translateY(0px) rotate(-2deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
`;

// 💫 炫蓝闪电发光
const heroGlow = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 8px rgba(137, 207, 240, 0.6));
  }
  50% {
    filter: drop-shadow(0 0 16px rgba(137, 207, 240, 0.8))
           drop-shadow(0 0 24px rgba(255, 230, 109, 0.4));
  }
`;

// 🏞️ 背景容器
const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 420px;
  border-radius: 24px;
  overflow: hidden;

  border: 3px solid rgba(255, 182, 193, 0.3);
`;

// 🌈 渐变背景层
const GradientLayer = styled(motion.div)<{ $gradient: string }>`
  position: absolute;
  inset: 0;
  background: ${(props) => props.$gradient};
  opacity: 0.6;
  z-index: 0;
`;

// ☁️ 云朵装饰
const Cloud = styled(motion.div)<{ $size: 'big' | 'small'; $position: string }>`
  position: absolute;
  font-size: ${(props) => props.$size === 'big' ? '48px' : '32px'};
  opacity: 0.7;
  animation: ${cloudFloat} ${(props) => props.$size === 'big' ? '6s' : '4s'} ease-in-out infinite;
  ${(props) => props.$position};
`;

// ⭐ 星星装饰
const Star = styled(motion.div)<{ $size: 'big' | 'small' }>`
  position: absolute;
  font-size: ${(props) => props.$size === 'big' ? '20px' : '14px'};
  animation: ${starTwinkle} ${(props) => props.$size === 'big' ? '2s' : '3s'} ease-in-out infinite;
`;

// 🌟 场景装饰元素层
const DecorLayer = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`;

// 📝 内容层
const ContentLayer = styled.div`
  position: relative;
  z-index: 3;
  padding: 24px;
  padding-top: 80px;
`;

// 💫 光晕效果
const GlowSpot = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${(props) => props.$color} 0%,
    transparent 70%
  );
  opacity: 0.4;
  animation: ${gentleFloat} 5s ease-in-out infinite;
`;

// ⚡ 炫蓝闪电角色容器 - 固定在左上角角落
const HeroCharacter = styled(motion.div)`
  position: absolute;
  left: 8px;
  top: 8px;
  width: 60px;
  height: 60px;
  z-index: 2;
  animation: ${heroFloat} 3s ease-in-out infinite, ${heroGlow} 2s ease-in-out infinite;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

// 🎯 炫蓝闪电小提示语 - 在角色旁边
const HeroHint = styled(motion.div)`
  position: absolute;
  left: 72px;
  top: 12px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 6px 10px;
  font-size: 11px;
  color: #7A7A7A;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(137, 207, 240, 0.3);
  border: 2px solid rgba(137, 207, 240, 0.4);
  max-width: 70px;
  text-align: center;
  z-index: 2;
`;

// 🎬 动画变体
const layerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 0.6,
    transition: { duration: 0.4 },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const decorVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 200, damping: 20 },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.2 },
  },
};

// 🎨 场景装饰配置
const SceneDecorations: Record<SceneType, { emoji: string; color: string; hint: string }> = {
  forest: { emoji: '🌳🌲🌸', color: '#98D8AA', hint: '森林探险！' },
  ocean: { emoji: '🌊🐚🐬', color: '#89CFF0', hint: '深海寻宝！' },
  volcano: { emoji: '🔥🌋🔴', color: '#FFCBA4', hint: '火山勇士！' },
  desert: { emoji: '☀️🏜️🌵', color: '#FFE66D', hint: '沙漠探险！' },
  space: { emoji: '🚀🌙⭐', color: '#E6E6FA', hint: '太空英雄！' },
};

// 炫蓝闪电图片路径
const HERO_IMAGE = getAssetPath('/assets/character/xuanlan-shandian.png');

interface SceneBackgroundProps {
  scene: SceneType;
  children: React.ReactNode;
  /** 是否显示炫蓝闪电引导者 */
  showHero?: boolean;
}

export const SceneBackground: React.FC<SceneBackgroundProps> = ({
  scene,
  children,
  showHero = true,
}) => {
  const gradient = SceneGradients[scene];
  const decor = SceneDecorations[scene];

  return (
    <BackgroundContainer>
      <AnimatePresence mode="wait">
        {/* 渐变背景 */}
        <GradientLayer
          key={`gradient-${scene}`}
          $gradient={gradient}
          variants={layerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />

        {/* 光晕装饰 */}
        <GlowSpot
          key={`glow-${scene}`}
          $color={decor.color}
          initial={{ x: -30, y: -30 }}
          animate={{ x: -30, y: -30 }}
        />

        {/* 炫蓝闪电引导者 */}
        {showHero && (
          <HeroCharacter
            key={`hero-${scene}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <img src={HERO_IMAGE} alt="炫蓝闪电" />
          </HeroCharacter>
        )}

        {/* 炫蓝闪电提示语 */}
        {showHero && (
          <HeroHint
            key={`hint-${scene}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {decor.hint}
          </HeroHint>
        )}

        {/* 装饰元素 */}
        <DecorLayer
          key={`decor-${scene}`}
          variants={decorVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* 场景专属大装饰 */}
          <motion.div
            style={{
              position: 'absolute',
              top: '12px',
              right: '16px',
              fontSize: '36px',
              opacity: 0.8,
            }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            {decor.emoji.split('')[0]}
          </motion.div>

          {/* 云朵装饰（部分场景） */}
          {(scene === 'forest' || scene === 'ocean') && (
            <>
              <Cloud $size="big" $position="top: 20px; left: 150px;">☁️</Cloud>
              <Cloud $size="small" $position="top: 60px; right: 80px;">☁️</Cloud>
            </>
          )}

          {/* 星星装饰 */}
          <Star $size="big" style={{ top: '24px', left: '45%' }}>⭐</Star>
          <Star $size="small" style={{ top: '48px', left: '75%' }}>✨</Star>
          <Star $size="small" style={{ bottom: '32px', left: '25%' }}>🌟</Star>

          {/* 场景特色小元素 */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '24px',
              fontSize: '24px',
              opacity: 0.6,
            }}
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            {decor.emoji.split('')[1]}
          </motion.div>
        </DecorLayer>
      </AnimatePresence>

      {/* 内容 */}
      <ContentLayer>{children}</ContentLayer>
    </BackgroundContainer>
  );
};

export default SceneBackground;