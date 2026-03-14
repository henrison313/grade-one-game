import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeColors, RarityConfig } from '@/config';
import { useSound } from '@/shared/hooks';
import type { Character } from '@/types';

interface CardRevealProps {
  character: Character;
  starsEarned: number;
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

const CardWrapper = styled(motion.div)`
  perspective: 1000px;
`;

const Card = styled(motion.div)<{ $rarity: keyof typeof RarityConfig }>`
  width: 280px;
  height: 400px;
  position: relative;
  transform-style: preserve-3d;
  border-radius: 20px;
  background: linear-gradient(145deg, #ffffff 0%, #f0f0f0 100%);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: ${(props) => RarityConfig[props.$rarity].color};
  }
`;

const CardInner = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const CardHeader = styled.div`
  text-align: center;
  margin-bottom: 16px;
`;

const CardNumber = styled.span`
  font-size: 12px;
  color: ${ThemeColors.textSecondary};
`;

const CardRarity = styled.span<{ $rarity: keyof typeof RarityConfig }>`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-top: 4px;
  color: ${(props) => RarityConfig[props.$rarity].color};
`;

const CardImage = styled(motion.img)`
  width: 180px;
  height: 180px;
  object-fit: contain;
  margin-bottom: 16px;
`;

const CardName = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${ThemeColors.textPrimary};
  margin-bottom: 8px;
`;

const CardTitle = styled.p`
  font-size: 14px;
  color: ${ThemeColors.textSecondary};
  margin-bottom: 16px;
  text-align: center;
`;

const CardStats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  width: 100%;
  font-size: 12px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

const StatLabel = styled.span`
  color: ${ThemeColors.textSecondary};
  margin-bottom: 4px;
`;

const StatValue = styled.span`
  font-weight: 600;
  color: ${ThemeColors.textPrimary};
`;

const StarsDisplay = styled(motion.div)`
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StarIcon = styled.span`
  font-size: 28px;
`;

const StarsText = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: ${ThemeColors.star};
`;

const ContinueButton = styled(motion.button)`
  margin-top: 32px;
  padding: 14px 40px;
  background: linear-gradient(135deg, ${ThemeColors.primary} 0%, ${ThemeColors.primaryLight} 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
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

const Sparkle = styled(motion.div)<{ $delay: number }>`
  position: absolute;
  width: 10px;
  height: 10px;
  background: ${ThemeColors.star};
  border-radius: 50%;
  filter: blur(1px);
`;

const CardReveal: React.FC<CardRevealProps> = ({
  character,
  starsEarned,
  onComplete,
}) => {
  const { playCardReveal } = useSound();
  const [showCard, setShowCard] = useState(false);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    // 播放卡牌揭示音效
    playCardReveal();

    // 延迟显示卡牌
    const timer1 = setTimeout(() => {
      setShowCard(true);
    }, 500);

    const timer2 = setTimeout(() => {
      setShowStats(true);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [playCardReveal]);

  // 生成闪光效果
  const sparkles = Array.from({ length: 20 }, (_, i) => ({
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

      <AnimatePresence>
        {showCard && (
          <>
            <Congratulations
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <CongratsText>恭喜获得新卡牌！</CongratsText>
              <SubText>{character.name} 已加入收集册</SubText>
            </Congratulations>

            <CardWrapper
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                type: 'spring' as const,
                stiffness: 200,
                damping: 20,
              }}
            >
              <Card $rarity={character.rarity}>
                <CardInner>
                  <CardHeader>
                    <CardNumber>#{character.number}</CardNumber>
                    <CardRarity $rarity={character.rarity}>
                      {RarityConfig[character.rarity].name}
                    </CardRarity>
                  </CardHeader>

                  <CardImage
                    src={character.cardImage || character.robotImage}
                    alt={character.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  />

                  <CardName>{character.name}</CardName>
                  <CardTitle>{character.title}</CardTitle>

                  {showStats && (
                    <CardStats
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <StatItem>
                        <StatLabel>身高</StatLabel>
                        <StatValue>{character.stats.height}</StatValue>
                      </StatItem>
                      <StatItem>
                        <StatLabel>体重</StatLabel>
                        <StatValue>{character.stats.weight}</StatValue>
                      </StatItem>
                      <StatItem>
                        <StatLabel>速度</StatLabel>
                        <StatValue>{character.stats.speed}</StatValue>
                      </StatItem>
                      <StatItem>
                        <StatLabel>力量</StatLabel>
                        <StatValue>{character.stats.power}</StatValue>
                      </StatItem>
                    </CardStats>
                  )}
                </CardInner>
              </Card>
            </CardWrapper>

            <StarsDisplay
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <StarIcon>⭐</StarIcon>
              <StarsText>{starsEarned} 星星</StarsText>
            </StarsDisplay>

            <ContinueButton
              onClick={onComplete}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              查看收集册
            </ContinueButton>
          </>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default CardReveal;