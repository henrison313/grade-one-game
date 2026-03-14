import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeColors } from '@/config';
import type { Character, CharacterAnimationState } from '@/types';

interface CharacterShowProps {
  character: Character;
  onComplete?: () => void;
  autoPlay?: boolean;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CharacterImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
`;

const CharacterName = styled(motion.h2)`
  font-size: 24px;
  font-weight: 700;
  color: ${ThemeColors.textLight};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-top: 16px;
`;

const CharacterTitle = styled(motion.p)`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 8px;
`;

const Sparkle = styled(motion.div)<{ $x: number; $y: number }>`
  position: absolute;
  left: ${(props) => props.$x}%;
  top: ${(props) => props.$y}%;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  filter: blur(1px);
`;

const GlowEffect = styled(motion.div)`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  filter: blur(20px);
`;

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: -15,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 20,
      delay: 0.3,
    },
  },
};

const nameVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.8 },
  },
};

const CharacterShow: React.FC<CharacterShowProps> = ({
  character,
  onComplete,
  autoPlay = true,
}) => {
  const [animationState, setAnimationState] = useState<CharacterAnimationState>('hidden');

  useEffect(() => {
    if (autoPlay) {
      setAnimationState('entering');
      const timer = setTimeout(() => {
        setAnimationState('idle');
        onComplete?.();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [autoPlay, onComplete]);

  // 生成闪光点
  const sparkles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 1.5,
  }));

  return (
    <Container>
      {/* 背景光效 */}
      <GlowEffect
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* 闪光点 */}
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          $x={sparkle.x}
          $y={sparkle.y}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 1,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      ))}

      {/* 角色图片 */}
      <AnimatePresence>
        {animationState !== 'hidden' && (
          <CharacterImage
            src={character.vehicleImage}
            alt={character.name}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          />
        )}
      </AnimatePresence>

      {/* 角色名称 */}
      <CharacterName variants={nameVariants} initial="hidden" animate="visible">
        {character.name}
      </CharacterName>
      <CharacterTitle
        variants={nameVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
      >
        {character.title}
      </CharacterTitle>
    </Container>
  );
};

export default CharacterShow;