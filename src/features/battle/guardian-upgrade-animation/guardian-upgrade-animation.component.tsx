/**
 * 守护者升级形态动画组件
 * 功能：展示守护者机器人形态的升级动画
 * 流程：光芒闪烁 → 守护者入场 → 能量爆发 → 进入武器展示
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import type { Character, DifficultyLevel } from '@/types';
import { useSound } from '@/shared/hooks';
import { getVariantByDifficulty } from '@/data/character-variants.data';

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
  purple: '#9B59B6',
};

// 🌟 能量脉冲动画
const energyPulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 30px ${CandyColors.gold}, 0 0 60px ${CandyColors.sky};
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 50px ${CandyColors.gold}, 0 0 100px ${CandyColors.sky};
  }
`;

// 💫 光芒旋转动画
const lightRotation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// ✨ 粒子上升动画
const particleFloat = keyframes`
  0% { transform: translateY(0) scale(1); opacity: 1; }
  100% { transform: translateY(-100px) scale(0); opacity: 0; }
`;

// 🎬 动画容器
const AnimationContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: linear-gradient(180deg,
    rgba(26, 26, 46, 0.95) 0%,
    rgba(42, 42, 74, 0.9) 50%,
    rgba(74, 74, 127, 0.85) 100%
  );
  overflow: hidden;
`;

// 🌟 能量光环
const EnergyAura = styled(motion.div)`
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: radial-gradient(circle,
    rgba(255, 215, 0, 0.3) 0%,
    rgba(255, 215, 0, 0.1) 50%,
    transparent 70%
  );
  animation: ${energyPulse} 1.5s ease-in-out infinite;
`;

// 💫 旋转光芒
const RotatingLight = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    ${CandyColors.gold} 30deg,
    transparent 60deg,
    ${CandyColors.sky} 90deg,
    transparent 120deg,
    ${CandyColors.yellow} 150deg,
    transparent 180deg,
    ${CandyColors.gold} 210deg,
    transparent 240deg,
    ${CandyColors.sky} 270deg,
    transparent 300deg,
    ${CandyColors.yellow} 330deg,
    transparent 360deg
  );
  opacity: 0.4;
  animation: ${lightRotation} 4s linear infinite;
  filter: blur(10px);
`;

// 🤖 守护者容器
const GuardianContainer = styled(motion.div)`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 🎭 守护者图像
const GuardianImage = styled(motion.img)`
  width: 280px;
  height: 280px;
  object-fit: contain;
  filter: drop-shadow(0 0 30px ${CandyColors.gold});
`;

// 📝 守护者名称
const GuardianName = styled(motion.div)`
  margin-top: 24px;
  padding: 12px 36px;
  background: linear-gradient(135deg, ${CandyColors.purple} 0%, ${CandyColors.coral} 100%);
  border-radius: 24px;
  border: 3px solid ${CandyColors.gold};
  font-size: 24px;
  font-weight: 700;
  color: white;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  box-shadow: 0 6px 20px rgba(155, 89, 182, 0.4);
`;

// 🏷️ 升级标题
const UpgradeTitle = styled(motion.div)`
  margin-bottom: 20px;
  padding: 8px 24px;
  background: ${CandyColors.gold};
  border-radius: 16px;
  font-size: 16px;
  font-weight: 700;
  color: #333;
  text-align: center;
`;

// ⭐ 粒子效果
const Sparkle = styled(motion.div)<{ $delay: number }>`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${CandyColors.gold};
  box-shadow: 0 0 15px ${CandyColors.gold};
  animation: ${particleFloat} 2s ease-out infinite;
  animation-delay: ${(props) => props.$delay}s;
`;

// 💬 对话框
const DialogueBox = styled(motion.div)`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  border: 3px solid ${CandyColors.sky};
  font-size: 16px;
  font-weight: 600;
  color: #333;
  text-align: center;
  max-width: 80%;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
`;

interface GuardianUpgradeAnimationProps {
  guardian: Character;
  difficulty: DifficultyLevel;
  onComplete: () => void;
}

export const GuardianUpgradeAnimation: React.FC<GuardianUpgradeAnimationProps> = ({
  guardian,
  difficulty,
  onComplete,
}) => {
  const [showDialogue, setShowDialogue] = useState(false);
  const { playCardReveal, playStarEarn } = useSound();

  // 根据难度获取对应的形态配置
  const variant = getVariantByDifficulty(guardian.id, difficulty);
  const variantImage = variant?.image || guardian.robotImage;
  const variantName = variant?.displayName || guardian.name;

  // 获取难度对应的描述
  const difficultyText = {
    easy: '炫光形态觉醒！',
    medium: '闪电形态觉醒！',
    hard: '雷霆形态觉醒！',
  };

  // 获取对话内容
  const dialogueText = {
    easy: `"终于等到你了！让我展示真正的实力吧！"`,
    medium: `"想要击败我？那就来试试我的闪电形态吧！"`,
    hard: `"雷霆之力已经觉醒，准备好面对最强的我了吗？"`,
  };

  // 动画时序控制
  useEffect(() => {
    // 0.5秒后播放卡牌揭示音效
    const revealTimer = setTimeout(() => {
      playCardReveal();
    }, 500);

    // 1.5秒后显示对话
    const dialogueTimer = setTimeout(() => {
      setShowDialogue(true);
      playStarEarn();
    }, 1500);

    // 4秒后自动进入武器展示
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(dialogueTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, playCardReveal, playStarEarn]);

  // 生成粒子位置
  const sparkles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    angle: (i * 30) % 360,
    radius: 150 + Math.random() * 50,
    delay: Math.random() * 0.5,
  }));

  return (
    <AnimationContainer>
      {/* 旋转光芒 */}
      <RotatingLight />

      {/* 能量光环 */}
      <EnergyAura
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* 粒子效果 */}
      {sparkles.map((s) => (
        <Sparkle
          key={s.id}
          $delay={s.delay}
          style={{
            left: `calc(50% + ${Math.cos(s.angle * Math.PI / 180) * s.radius}px - 5px)`,
            bottom: `calc(50% + ${Math.sin(s.angle * Math.PI / 180) * s.radius}px - 5px)`,
          }}
        />
      ))}

      {/* 守护者 */}
      <GuardianContainer>
        <UpgradeTitle
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ⭐ {difficultyText[difficulty]} ⭐
        </UpgradeTitle>

        <GuardianImage
          src={variantImage}
          alt={variantName}
          initial={{ scale: 0.3, opacity: 0, rotateY: 180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            type: 'spring',
            stiffness: 80,
          }}
        />

        <GuardianName
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          🤖 {variantName}
        </GuardianName>
      </GuardianContainer>

      {/* 对话框 */}
      <AnimatePresence>
        {showDialogue && (
          <DialogueBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {dialogueText[difficulty]}
          </DialogueBox>
        )}
      </AnimatePresence>
    </AnimationContainer>
  );
};

export default GuardianUpgradeAnimation;
