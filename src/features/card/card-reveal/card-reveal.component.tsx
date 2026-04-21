import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeColors, RarityConfig } from '@/config';
import { useSound } from '@/shared/hooks';
import { CardSummoner } from '@/shared/components';
import type { Character } from '@/types';
import { DifficultyLevel } from '@/types';
import { getVariantByDifficulty } from '@/data/character-variants.data';

interface CardRevealProps {
  character: Character;
  starsEarned: number;
  difficulty?: DifficultyLevel;  // 使用枚举类型
  onComplete?: () => void;
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 20px;
  z-index: 1000;
`;

const SummonerWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Congratulations = styled(motion.div)`
  margin-bottom: 24px;
  text-align: center;
`;

const CongratsText = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${ThemeColors.secondary};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 8px;
`;

const SubText = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
`;

const CardInfo = styled(motion.div)`
  margin-top: 24px;
  text-align: center;
`;

const CardName = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${ThemeColors.textLight};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 8px;
`;

const CardRarity = styled.span<{ $rarity: keyof typeof RarityConfig }>`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => RarityConfig[props.$rarity].color};
`;

const StarsDisplay = styled(motion.div)`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StarIcon = styled.span`
  font-size: 24px;
`;

const StarsText = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: ${ThemeColors.star};
`;

const Sparkle = styled(motion.div)<{ $delay: number }>`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${ThemeColors.star};
  border-radius: 50%;
  filter: blur(1px);
  pointer-events: none;
`;

const CardReveal: React.FC<CardRevealProps> = ({
  character,
  starsEarned,
  difficulty = DifficultyLevel.EASY,
  onComplete,
}) => {
  const { playSummon } = useSound();
  const [isCapturing, setIsCapturing] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

  // 根据难度获取形态配置
  const variant = getVariantByDifficulty(character.id, difficulty);
  const variantRarity = variant?.rarity || character.rarity;
  const variantName = variant?.displayName || character.name;

  useEffect(() => {
    // 播放召唤音效
    playSummon();

    // 召唤器出现后开始捕获
    const captureTimer = setTimeout(() => {
      setIsCapturing(true);
    }, 800);

    // 捕获完成后显示内容
    const completeTimer = setTimeout(() => {
      setIsCapturing(false);
      setShowComplete(true);

      // 1.5秒后自动跳转
      if (onComplete) {
        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    }, 3000);

    return () => {
      clearTimeout(captureTimer);
      clearTimeout(completeTimer);
    };
  }, [playSummon, onComplete]);

  // 生成背景闪光
  const sparkles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <Container>
      {/* 背景闪光 */}
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          $delay={sparkle.delay}
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />
      ))}

      <SummonerWrapper
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* 召唤器 */}
        <CardSummoner
          mode="capturing"
          character={character}
          variantImage={variant?.image}
          variantName={variant?.displayName}
          variantRarity={variant?.rarity}
          isCapturing={isCapturing}
        />

        {/* 完成后显示的内容 */}
        {showComplete && (
          <CardInfo
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Congratulations>
              <CongratsText>恭喜获得新卡牌！</CongratsText>
              <SubText>{variantName} 已收入炫卡召唤器</SubText>
            </Congratulations>

            <CardName>{variantName}</CardName>
            <CardRarity $rarity={variantRarity}>
              {RarityConfig[variantRarity]?.name || '普通'}
            </CardRarity>

            <StarsDisplay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <StarIcon>⭐</StarIcon>
              <StarsText>{starsEarned} 星星</StarsText>
            </StarsDisplay>
          </CardInfo>
        )}
      </SummonerWrapper>
    </Container>
  );
};

export default CardReveal;