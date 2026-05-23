/**
 * 绝招动画主组件
 * 功能：图层结构（底板、背景光晕、角色图像、冲击波、粒子），按稀有度设置时长，支持跳过
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import type { Character } from '@/types';
import { UltimateAnimationConfig, RarityConfig } from '@/config/game.config';
import { UltimateText } from '@/shared/components/ultimate-text/ultimate-text.component';

interface UltimateAnimationProps {
  character: Character;
  rarity: string;
  onComplete: () => void;
  onSkip: () => void;
}

// 动画容器
const AnimationContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
`;

// 底板
const BasePlate = styled.div<{ rarity: string }>`
  position: absolute;
  inset: 0;
  background: ${({ rarity }) => {
    const config = RarityConfig[rarity as keyof typeof RarityConfig];
    if (config?.color.includes('gradient')) {
      return config.color;
    }
    return `linear-gradient(135deg, ${config?.color || '#667eea'} 0%, #1e1b4b 100%)`;
  }};
  opacity: 0.8;
`;

// 背景光晕
const GlowEffect = styled(motion.div)<{ color: string }>`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${({ color }) => color} 0%,
    transparent 70%
  );
  opacity: 0.5;
  will-change: transform, opacity;
`;

// 角色图像容器
const CharacterContainer = styled(motion.div)`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  will-change: transform, opacity;
`;

// 角色图像
const CharacterImage = styled(motion.img)`
  width: 300px;
  height: 300px;
  object-fit: contain;
  filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.5));
  will-change: transform;
`;

// 冲击波
const Shockwave = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  border: 4px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  opacity: 0;
  will-change: transform, opacity;
`;

// 粒子容器
const ParticlesContainer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 20;
`;

// 单个粒子
const Particle = styled(motion.div)<{ color: string }>`
  position: absolute;
  width: 12px;
  height: 12px;
  background: ${({ color }) => color};
  border-radius: 50%;
  box-shadow: 0 0 10px ${({ color }) => color};
  will-change: transform, opacity;
`;

// 跳过按钮
const SkipButton = styled(motion.button)`
  position: absolute;
  bottom: 40px;
  padding: 12px 32px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  z-index: 100;
  color: #333;

  &:hover {
    background: white;
    transform: scale(1.05);
  }
`;

// 角色名称
const CharacterName = styled(motion.h2)`
  font-size: 32px;
  color: white;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  margin: 20px 0 0;
`;

// 绝招名称
const UltimateSkillName = styled(motion.p)`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  margin: 8px 0 0;
`;

/**
 * 绝招动画主组件
 */
export const UltimateAnimation: React.FC<UltimateAnimationProps> = ({
  character,
  rarity,
  onComplete,
  onSkip,
}) => {
  const [showText, setShowText] = useState(false);

  // 获取稀有度配置
  const duration = UltimateAnimationConfig.duration[rarity as keyof typeof UltimateAnimationConfig.duration] || 4000;
  const rarityConfig = RarityConfig[rarity as keyof typeof RarityConfig];
  const color = rarityConfig?.color || '#667eea';

  // 生成粒子
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    angle: (i / 30) * 360,
    distance: 150 + Math.random() * 100,
    delay: i * 0.05,
  }));

  // 动画阶段控制
  useEffect(() => {
    // 进入动画后显示绝招文字
    const showTextTimer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    // 完成后回调
    const completeTimer = setTimeout(() => {
      setTimeout(onComplete, 500);
    }, duration);

    return () => {
      clearTimeout(showTextTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);

  // 处理跳过
  const handleSkip = () => {
    setTimeout(onSkip, 300);
  };

  // 处理文字动画完成
  const handleTextAnimationComplete = () => {
    // 文字动画完成后继续
  };

  return (
    <AnimationContainer>
      <BasePlate rarity={rarity} />

      {/* 背景光晕 */}
      <GlowEffect
        color={color}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* 冲击波 */}
      <Shockwave
        initial={{ scale: 0, opacity: 1 }}
        animate={{
          scale: 3,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
          delay: 0.5,
        }}
      />

      {/* 粒子效果 */}
      <ParticlesContainer>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            color={color}
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: Math.cos((particle.angle * Math.PI) / 180) * particle.distance,
              y: Math.sin((particle.angle * Math.PI) / 180) * particle.distance,
              opacity: [0, 1, 0],
              scale: [0, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              delay: particle.delay,
            }}
          />
        ))}
      </ParticlesContainer>

      {/* 角色图像 */}
      <CharacterContainer
        initial={{ scale: 0, opacity: 0, y: 100 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          delay: 0.2,
        }}
      >
        <CharacterImage
          src={character.robotImage}
          alt={character.name}
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        <CharacterName
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {character.name}
        </CharacterName>

        {character.ultimateSkill && (
          <UltimateSkillName
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            绝招：{character.ultimateSkill}
          </UltimateSkillName>
        )}
      </CharacterContainer>

      {/* 绝招文字特效 */}
      <AnimatePresence>
        {showText && character.ultimateSkill && character.attribute && (
          <UltimateText
            skillName={character.ultimateSkill}
            attribute={character.attribute}
            onAnimationComplete={handleTextAnimationComplete}
          />
        )}
      </AnimatePresence>

      {/* 跳过按钮 */}
      <SkipButton
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSkip}
      >
        跳过
      </SkipButton>
    </AnimationContainer>
  );
};

export default UltimateAnimation;
