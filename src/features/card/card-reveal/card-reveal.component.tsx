import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeColors, RarityConfig } from '@/config';
import { useSound } from '@/shared/hooks';
import { CardSummoner } from '@/shared/components';
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
  box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4);
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
  onComplete,
}) => {
  const { playSummon } = useSound();
  const [isCapturing, setIsCapturing] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

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
    }, 3000);

    return () => {
      clearTimeout(captureTimer);
      clearTimeout(completeTimer);
    };
  }, [playSummon]);

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
              <SubText>{character.name} 已收入炫卡召唤器</SubText>
            </Congratulations>

            <CardName>{character.name}</CardName>
            <CardRarity $rarity={character.rarity}>
              {RarityConfig[character.rarity].name}
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

        {/* 继续按钮 */}
        {showComplete && (
          <ContinueButton
            onClick={onComplete}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            查看召唤器
          </ContinueButton>
        )}
      </SummonerWrapper>
    </Container>
  );
};

export default CardReveal;