import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeColors, RarityConfig } from '@/config';
import type { Character } from '@/types';

interface CardSummonerProps {
  /** 模式：capturing（捕获模式）或 display（展示模式） */
  mode: 'capturing' | 'display';
  /** 角色数据（捕获模式必需） */
  character?: Character;
  /** 形态图片路径（优先使用） */
  variantImage?: string;
  /** 形态名称（优先使用） */
  variantName?: string;
  /** 形态稀有度（优先使用） */
  variantRarity?: Character['rarity'];
  /** 是否正在捕获 */
  isCapturing?: boolean;
  /** 捕获完成回调 */
  onCaptureComplete?: () => void;
  /** 展示的卡牌图片列表（展示模式） */
  displayCards?: Array<{
    image: string;
    rarity: Character['rarity'];
  }>;
}

// 动画关键帧
const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(79, 70, 229, 0.5), 0 0 40px rgba(79, 70, 229, 0.3); }
  50% { box-shadow: 0 0 40px rgba(79, 70, 229, 0.8), 0 0 80px rgba(79, 70, 229, 0.5); }
`;

const particleFloat = keyframes`
  0% { transform: translateY(0) scale(1); opacity: 1; }
  100% { transform: translateY(-30px) scale(0); opacity: 0; }
`;

const energyFlow = keyframes`
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -100; }
`;

// 容器
const SummonerContainer = styled(motion.div)<{ $size: 'large' | 'small' }>`
  position: relative;
  width: ${(props) => (props.$size === 'large' ? '300px' : '120px')};
  height: ${(props) => (props.$size === 'large' ? '300px' : '120px')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 六边形外框
const HexagonFrame = styled.svg<{ $size: 'large' | 'small' }>`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${rotate} 20s linear infinite;
`;

// 能量核心
const EnergyCore = styled(motion.div)<{ $size: 'large' | 'small' }>`
  width: ${(props) => (props.$size === 'large' ? '120px' : '50px')};
  height: ${(props) => (props.$size === 'large' ? '120px' : '50px')};
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(79, 70, 229, 1) 0%,
    rgba(129, 140, 248, 0.8) 30%,
    rgba(79, 70, 229, 0.6) 60%,
    transparent 100%
  );
  animation: ${pulse} 2s ease-in-out infinite, ${glow} 2s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

// 内部光芒
const InnerGlow = styled.div`
  width: 60%;
  height: 60%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(129, 140, 248, 0.5) 50%,
    transparent 100%
  );
`;

// 能量纹路（SVG 路径）
const EnergyPath = styled.path`
  fill: none;
  stroke: rgba(79, 70, 229, 0.6);
  stroke-width: 2;
  stroke-dasharray: 10 5;
  animation: ${energyFlow} 2s linear infinite;
`;

// 粒子
const Particle = styled(motion.div)<{ $delay: number }>`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${ThemeColors.star};
  box-shadow: 0 0 6px ${ThemeColors.star};
  animation: ${particleFloat} 2s ease-out infinite;
  animation-delay: ${(props) => props.$delay}s;
`;

// 卡牌容器（捕获模式）
const CardContainer = styled(motion.div)<{ $rarity: keyof typeof RarityConfig }>`
  position: absolute;
  width: 100px;
  height: 140px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${(props) => RarityConfig[props.$rarity].color};
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: contain;
  padding: 8px;
`;

const CardName = styled.div`
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  color: ${ThemeColors.textPrimary};
  padding: 4px;
`;

// 展示模式的小卡牌
const MiniCard = styled(motion.div)<{ $rarity: keyof typeof RarityConfig }>`
  position: absolute;
  width: 30px;
  height: 40px;
  border-radius: 4px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${(props) => RarityConfig[props.$rarity].color};
  }
`;

const MiniCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 2px;
`;

// 光环效果
const HaloRing = styled(motion.div)<{ $size: 'large' | 'small'; $index: number }>`
  position: absolute;
  width: ${(props) => (props.$size === 'large' ? 200 + props.$index * 30 : 80 + props.$index * 10)}px;
  height: ${(props) => (props.$size === 'large' ? 200 + props.$index * 30 : 80 + props.$index * 10)}px;
  border-radius: 50%;
  border: ${(props) => `2px solid rgba(79, 70, 229, ${0.3 - props.$index * 0.1})`};
  ${(props) => css`
    animation: ${pulse} ${2 + props.$index * 0.5}s ease-in-out infinite;
  `}
  animation-delay: ${(props) => props.$index * 0.3}s;
`;

/**
 * 炫卡召唤器组件
 */
const CardSummoner: React.FC<CardSummonerProps> = ({
  mode,
  character,
  variantImage,
  variantName,
  variantRarity,
  isCapturing = false,
  onCaptureComplete,
  displayCards = [],
}) => {
  const [capturePhase, setCapturePhase] = useState<'initial' | 'shrinking' | 'absorbed'>('initial');
  const size = mode === 'capturing' ? 'large' : 'small';

  // 优先使用形态参数，回退到角色基础属性
  const displayImage = variantImage || character?.cardImage || character?.robotImage;
  const displayName = variantName || character?.name;
  const displayRarity = variantRarity || character?.rarity || 'rare';

  // 捕获动画流程
  useEffect(() => {
    if (mode === 'capturing' && isCapturing && character) {
      // 开始缩小
      const shrinkTimer = setTimeout(() => {
        setCapturePhase('shrinking');
      }, 300);

      // 完成吸收
      const absorbTimer = setTimeout(() => {
        setCapturePhase('absorbed');
        onCaptureComplete?.();
      }, 1800);

      return () => {
        clearTimeout(shrinkTimer);
        clearTimeout(absorbTimer);
      };
    }
  }, [mode, isCapturing, character, onCaptureComplete]);

  // 生成粒子位置
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    angle: (i * 30 * Math.PI) / 180,
    delay: i * 0.15,
  }));

  // 生成六边形路径点
  const hexPoints = (size: number) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i * 60 - 90) * (Math.PI / 180);
      const x = 150 + size * Math.cos(angle);
      const y = 150 + size * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  };

  return (
    <SummonerContainer
      $size={size}
      initial={mode === 'capturing' ? { scale: 0, opacity: 0 } : false}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {/* 光环 */}
      <HaloRing $size={size} $index={0} />
      <HaloRing $size={size} $index={1} />
      <HaloRing $size={size} $index={2} />

      {/* 六边形外框 */}
      <HexagonFrame $size={size} viewBox="0 0 300 300">
        {/* 外层六边形 */}
        <polygon
          points={hexPoints(140)}
          fill="none"
          stroke="rgba(79, 70, 229, 0.4)"
          strokeWidth="3"
        />
        {/* 内层六边形 */}
        <polygon
          points={hexPoints(100)}
          fill="none"
          stroke="rgba(129, 140, 248, 0.5)"
          strokeWidth="2"
        />
        {/* 能量纹路 */}
        <EnergyPath d="M150,10 L150,50 M150,250 L150,290 M10,150 L50,150 M250,150 L290,150" />
        <EnergyPath d="M50,50 L80,80 M220,220 L250,250 M250,50 L220,80 M80,220 L50,250" />
      </HexagonFrame>

      {/* 粒子效果 */}
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          $delay={particle.delay}
          style={{
            left: `calc(50% + ${Math.cos(particle.angle) * (size === 'large' ? 120 : 50)}px)`,
            top: `calc(50% + ${Math.sin(particle.angle) * (size === 'large' ? 120 : 50)}px)`,
          }}
        />
      ))}

      {/* 能量核心 */}
      <EnergyCore $size={size}>
        <InnerGlow />
      </EnergyCore>

      {/* 捕获模式：卡牌动画 - 只在捕获时显示 */}
      <AnimatePresence>
        {mode === 'capturing' && character && isCapturing && capturePhase !== 'absorbed' && (
          <CardContainer
            $rarity={displayRarity}
            initial={{ scale: 2.5, opacity: 0, y: -100 }}
            animate={
              capturePhase === 'shrinking'
                ? { scale: 0.4, opacity: 1, y: 0 }
                : { scale: 2.5, opacity: 1, y: -100 }
            }
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 20,
            }}
          >
            <CardImage src={displayImage} alt={displayName} />
            <CardName>{displayName}</CardName>
          </CardContainer>
        )}
      </AnimatePresence>

      {/* 展示模式：小卡牌环绕 */}
      {mode === 'display' && displayCards.length > 0 && (
        <>
          {displayCards.slice(0, 3).map((card, index) => {
            const angle = (index * 120 - 90) * (Math.PI / 180);
            const radius = 35;
            return (
              <MiniCard
                key={index}
                $rarity={card.rarity}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                style={{
                  left: `calc(50% + ${Math.cos(angle) * radius}px - 15px)`,
                  top: `calc(50% + ${Math.sin(angle) * radius}px - 20px)`,
                  transform: `rotate(${index * 30 - 30}deg)`,
                }}
              >
                <MiniCardImage src={card.image} alt="card" />
              </MiniCard>
            );
          })}
        </>
      )}

      {/* 吸收完成后的光芒爆发 */}
      <AnimatePresence>
        {mode === 'capturing' && capturePhase === 'absorbed' && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 2, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, transparent 70%)',
            }}
          />
        )}
      </AnimatePresence>
    </SummonerContainer>
  );
};

export default CardSummoner;