/**
 * 武器进度组件 - Candy Kingdom 宝藏收集风格
 * 功能：显示武器组装进度，答对每题点亮一个宝石
 * 设计：可爱宝石图标 + 彩虹路径 + 收集动画
 */

import { getAssetPath } from '@/config/paths.config';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes, css } from 'styled-components';
import type { DifficultyLevel, WeaponPart } from '@/types';

// 🎨 Candy Kingdom 色彩方案
const CandyColors = {
  pink: '#FFB5BA',
  mint: '#7FCCB0',
  sky: '#89CFF0',
  yellow: '#FFE66D',
  lavender: '#E6E6FA',
  coral: '#FF7F7F',
  peach: '#FFCBA4',
  cream: '#FFF8E7',
  rose: '#FF9EAA',
  gold: '#FFD700',
  silver: '#C0C0C0',
};

// 💎 宝石发光动画
const gemGlow = keyframes`
  0%, 100% {
    box-shadow:
      0 0 10px rgba(255, 230, 109, 0.6),
      0 0 20px rgba(255, 182, 193, 0.4),
      inset 0 0 10px rgba(255, 255, 255, 0.3);
  }
  50% {
    box-shadow:
      0 0 15px rgba(255, 230, 109, 0.8),
      0 0 30px rgba(255, 182, 193, 0.6),
      0 0 45px rgba(137, 207, 240, 0.4),
      inset 0 0 15px rgba(255, 255, 255, 0.5);
  }
`;

// ✨ 闪烁动画
const sparkle = keyframes`
  0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
  50% { opacity: 0.7; transform: scale(0.9) rotate(10deg); }
`;

// 🌈 彩虹路径动画
const rainbowPath = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// 🎀 宝藏收集路径容器
const TreasureTrail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px 16px;
  background: ${CandyColors.cream};
  border-radius: 24px;
  width: 100%;
  border: 3px solid rgba(255, 182, 193, 0.5);
  box-shadow:
    0 6px 0 rgba(255, 182, 193, 0.2),
    0 12px 24px rgba(255, 182, 193, 0.15);
`;

// 💎 宝石图标 - 可爱圆润风格
const GemIcon = styled(motion.div)<{
  $collected: boolean;
  $isCurrent: boolean;
  $gemColor: string;
}>`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  background: ${(props) =>
    props.$collected
      ? `radial-gradient(circle at 35% 35%,
          rgba(255, 255, 255, 1) 0%,
          ${props.$gemColor} 50%,
          rgba(255, 182, 193, 0.7) 100%)`
      : `radial-gradient(circle at 35% 35%,
          #F8F8F8 0%,
          #E8E8E8 50%,
          #D8D8D8 100%)`};

  ${(props) => props.$collected && css`animation: ${gemGlow} 2s ease-in-out infinite;`}
  ${(props) => props.$isCurrent && !props.$collected && css`
    animation: ${sparkle} 0.8s ease-in-out infinite;
    box-shadow: 0 0 15px rgba(255, 127, 127, 0.5);
  `}

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
    filter: ${(props) =>
      props.$collected
        ? 'drop-shadow(0 2px 4px rgba(255, 255, 255, 0.6))'
        : 'grayscale(100%) opacity(0.5)'};
  }

  /* 宝石顶部闪光 */
  ${(props) => props.$collected && css`
    &::before {
      content: '✦';
      position: absolute;
      top: -6px;
      right: 4px;
      font-size: 10px;
      color: ${CandyColors.gold};
      animation: ${sparkle} 0.6s ease-in-out infinite;
    }
  `}
`;

// 🌈 彩虹连接路径
const RainbowPath = styled.div<{ $active: boolean }>`
  width: 16px;
  height: 6px;
  border-radius: 3px;
  background: ${(props) =>
    props.$active
      ? `linear-gradient(90deg,
          ${CandyColors.pink},
          ${CandyColors.yellow},
          ${CandyColors.mint},
          ${CandyColors.sky})`
      : '#E0E0E0'};

  ${(props) => props.$active && css`
    background-size: 200% 100%;
    animation: ${rainbowPath} 2s ease infinite;
    box-shadow: 0 0 6px rgba(255, 182, 193, 0.4);
  `}
`;

// 🏷️ 零件名称标签
const GemLabel = styled.span<{ $collected: boolean }>`
  font-size: 10px;
  font-weight: 600;
  color: ${(props) => props.$collected ? CandyColors.coral : '#A0A0A0'};
  text-align: center;
  margin-top: 4px;
  padding: 2px 6px;
  border-radius: 8px;
  background: ${(props) => props.$collected ? 'rgba(255, 230, 109, 0.3)' : 'transparent'};
`;

// 🎁 零件包装
const GemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// ⚔️ 武器完成图标 - 炫酷发光
const WeaponComplete = styled(motion.div)<{ $collected: boolean }>`
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.$collected
      ? `radial-gradient(circle at 35% 35%,
          rgba(255, 255, 255, 1) 0%,
          ${CandyColors.gold} 50%,
          ${CandyColors.peach} 100%)`
      : '#E8E8E8'};
  position: relative;

  ${(props) => props.$collected && css`
    animation: ${gemGlow} 1.5s ease-in-out infinite;
  `}

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    filter: ${(props) =>
      props.$collected
        ? 'drop-shadow(0 3px 6px rgba(255, 230, 109, 0.8))'
        : 'grayscale(100%) opacity(0.5)'};
  }

  /* 完成星星装饰 */
  ${(props) => props.$collected && css`
    &::after {
      content: '⭐';
      position: absolute;
      top: -10px;
      right: -8px;
      font-size: 14px;
      animation: ${sparkle} 0.5s ease-in-out infinite;
    }
  `}
`;

// 💫 收集动画光环
const CollectRing = styled(motion.div)`
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  border: 3px solid ${CandyColors.gold};
  pointer-events: none;
`;

// 宝石颜色映射（根据难度）
const getGemColorByIndex = (index: number, difficulty: DifficultyLevel): string => {
  const colorsByDifficulty = {
    easy: [CandyColors.pink, CandyColors.yellow, CandyColors.mint, CandyColors.sky, CandyColors.gold],
    medium: [CandyColors.sky, CandyColors.lavender, CandyColors.mint, CandyColors.pink, CandyColors.gold],
    hard: [CandyColors.lavender, CandyColors.coral, CandyColors.mint, CandyColors.sky, CandyColors.gold],
  };
  return colorsByDifficulty[difficulty][index] || CandyColors.pink;
};

interface WeaponProgressProps {
  parts: WeaponPart[];
  currentIndex: number;
  collectedParts: string[];
  difficulty: DifficultyLevel;
  weaponImage?: string;
}

export const WeaponProgress: React.FC<WeaponProgressProps> = ({
  parts,
  currentIndex,
  collectedParts,
  difficulty,
  weaponImage,
}) => {
  const getWeaponImage = (): string => {
    if (weaponImage) return weaponImage;
    switch (difficulty) {
      case 'easy': return getAssetPath('/assets/weapons/easy-weapon.png');
      case 'medium': return getAssetPath('/assets/weapons/medium-weapon.png');
      case 'hard': return getAssetPath('/assets/weapons/hard-weapon.png');
      default: return getAssetPath('/assets/weapons/easy-weapon.png');
    }
  };

  return (
    <TreasureTrail>
      {parts.map((part, index) => {
        const isCollected = collectedParts.includes(part.id);
        const isCurrent = index === currentIndex;
        const isCompleted = index < currentIndex;
        const gemColor = getGemColorByIndex(index, difficulty);
        const isCompleteIcon = part.shapeType === 'composite';

        return (
          <React.Fragment key={part.id}>
            <GemWrapper>
              {isCompleteIcon ? (
                <WeaponComplete $collected={isCollected}>
                  <img src={getWeaponImage()} alt="武器完成" />
                </WeaponComplete>
              ) : (
                <GemIcon
                  $collected={isCollected}
                  $isCurrent={isCurrent}
                  $gemColor={gemColor}
                  whileHover={{ scale: 1.1, y: -3 }}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{
                    scale: isCollected ? 1 : isCurrent ? [1, 1.08, 1] : 0.8,
                    opacity: isCollected ? 1 : isCurrent ? 1 : 0.5,
                  }}
                  transition={{
                    duration: isCurrent ? 1 : 0.3,
                    repeat: isCurrent && !isCollected ? Infinity : 0,
                  }}
                >
                  {part.iconImage && (
                    <img src={part.iconImage} alt={part.name} />
                  )}

                  <AnimatePresence>
                    {isCollected && (
                      <CollectRing
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: 2, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                  </AnimatePresence>
                </GemIcon>
              )}

              {!isCompleteIcon && (
                <GemLabel $collected={isCollected}>
                  {isCollected ? `✓ ${part.name}` : part.name}
                </GemLabel>
              )}
            </GemWrapper>

            {index < parts.length - 1 && (
              <RainbowPath $active={isCompleted || isCollected} />
            )}
          </React.Fragment>
        );
      })}
    </TreasureTrail>
  );
};

export default WeaponProgress;