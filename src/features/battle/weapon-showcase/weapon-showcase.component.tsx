/**
 * 武器展示界面组件
 * 功能：武器放大展示 + 攻击效果动画 + "进入战斗"按钮
 * 动画流程：武器入场 → 放大 → 能量充能 → 攻击效果 → 按钮出现
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import type { DifficultyLevel } from '@/types';
import { useSound } from '@/shared/hooks';

// 🎨 Candy Kingdom 色彩方案
const CandyColors = {
  pink: '#FFB5BA',
  mint: '#7FCCB0',
  sky: '#89CFF0',
  yellow: '#FFE66D',
  lavender: '#E6E6FA',
  coral: '#FF7F7F',
  gold: '#FFD700',
  cream: '#FFF8E7',
};

// 🌟 能量充能动画
const energyCharge = keyframes`
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.2); opacity: 0.8; }
  100% { transform: scale(1.5); opacity: 0.5; }
`;

// 💫 光芒闪烁动画
const sparkleGlow = keyframes`
  0%, 100% { opacity: 1; filter: brightness(1); }
  50% { opacity: 0.7; filter: brightness(1.5); }
`;

// 🎬 展示容器
const ShowcaseContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: linear-gradient(135deg,
    rgba(255, 182, 193, 0.9) 0%,
    rgba(255, 230, 109, 0.85) 30%,
    rgba(127, 204, 176, 0.8) 50%,
    rgba(137, 207, 240, 0.85) 70%,
    rgba(230, 230, 250, 0.9) 100%
  );
  overflow: hidden;
`;

// 🌟 能量光环
const EnergyRing = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 4px solid ${CandyColors.gold};
  box-shadow:
    0 0 30px ${CandyColors.yellow},
    0 0 60px ${CandyColors.sky},
    inset 0 0 30px rgba(255, 255, 255, 0.3);
  animation: ${energyCharge} 2s ease-in-out infinite;
`;

// 💥 冲击波
const ShockwaveRing = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid ${CandyColors.coral};
  box-shadow: 0 0 20px ${CandyColors.coral};
`;

// ⚔️ 武器容器
const WeaponContainer = styled(motion.div)`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 🗡️ 武器图像
const WeaponImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  object-fit: contain;
  filter: drop-shadow(0 0 20px ${CandyColors.gold});
  animation: ${sparkleGlow} 1.5s ease-in-out infinite;
`;

// 📝 武器名称
const WeaponName = styled(motion.div)`
  margin-top: 24px;
  padding: 12px 32px;
  background: ${CandyColors.cream};
  border-radius: 20px;
  border: 3px solid ${CandyColors.pink};
  font-size: 20px;
  font-weight: 700;
  color: #5A5A5A;
  text-align: center;
  box-shadow: 0 4px 12px rgba(255, 182, 193, 0.3);
`;

// 🎯 战斗按钮
const BattleButton = styled(motion.button)`
  margin-top: 48px;
  padding: 16px 48px;
  background: linear-gradient(135deg, ${CandyColors.coral} 0%, ${CandyColors.gold} 100%);
  border: 4px solid ${CandyColors.yellow};
  border-radius: 24px;
  font-size: 18px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  box-shadow:
    0 6px 0 rgba(255, 182, 193, 0.4),
    0 12px 24px rgba(255, 182, 193, 0.3),
    inset 0 0 20px rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow:
      0 8px 0 rgba(255, 182, 193, 0.5),
      0 16px 32px rgba(255, 182, 193, 0.4);
  }
`;

// ✨ 粒子效果
const Particle = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => props.$color};
  box-shadow: 0 0 10px ${(props) => props.$color};
`;

// 🔊 提示文字
const HintText = styled(motion.div)`
  margin-top: 16px;
  font-size: 14px;
  color: #7A7A7A;
  font-weight: 600;
`;

interface WeaponShowcaseProps {
  weaponImage: string;
  weaponName: string;
  difficulty: DifficultyLevel;
  onComplete: () => void;
}

export const WeaponShowcase: React.FC<WeaponShowcaseProps> = ({
  weaponImage,
  weaponName,
  onComplete,
}) => {
  const [showButton, setShowButton] = useState(false);
  const [showShockwave, setShowShockwave] = useState(false);
  const { playCardReveal, playStarEarn } = useSound();

  // 动画时序控制
  useEffect(() => {
    // 1秒后播放能量充能音效
    const chargeTimer = setTimeout(() => {
      playCardReveal();
    }, 1000);

    // 2秒后触发冲击波
    const shockwaveTimer = setTimeout(() => {
      setShowShockwave(true);
      playStarEarn();
    }, 2000);

    // 3秒后显示按钮
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => {
      clearTimeout(chargeTimer);
      clearTimeout(shockwaveTimer);
      clearTimeout(buttonTimer);
    };
  }, [playCardReveal, playStarEarn]);

  // 生成随机粒子
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    color: [CandyColors.gold, CandyColors.yellow, CandyColors.sky, CandyColors.pink][i % 4],
    angle: (i * 18) % 360,
    delay: i * 0.1,
  }));

  return (
    <ShowcaseContainer>
      {/* 能量光环 */}
      <EnergyRing
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* 冲击波 */}
      <AnimatePresence>
        {showShockwave && (
          <ShockwaveRing
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>

      {/* 粒子效果 */}
      {particles.map((p) => (
        <Particle
          key={p.id}
          $color={p.color}
          initial={{
            x: Math.cos(p.angle * Math.PI / 180) * 100,
            y: Math.sin(p.angle * Math.PI / 180) * 100,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: Math.cos(p.angle * Math.PI / 180) * 250,
            y: Math.sin(p.angle * Math.PI / 180) * 250,
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2,
            delay: p.delay,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      ))}

      {/* 武器 */}
      <WeaponContainer>
        <WeaponImage
          src={weaponImage}
          alt={weaponName}
          initial={{ scale: 0.5, y: 100, opacity: 0 }}
          animate={{ scale: 1.8, y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: 'easeOut',
            type: 'spring',
            stiffness: 100,
          }}
        />

        <WeaponName
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          ⚔️ {weaponName} 完成！
        </WeaponName>

        {/* 战斗按钮 */}
        <AnimatePresence>
          {showButton && (
            <>
              <HintText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                武器能量已充满，准备战斗！
              </HintText>
              <BattleButton
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={onComplete}
              >
                ⚡ 进入战斗
              </BattleButton>
            </>
          )}
        </AnimatePresence>
      </WeaponContainer>
    </ShowcaseContainer>
  );
};

export default WeaponShowcase;