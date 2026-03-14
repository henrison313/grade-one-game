import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeColors, GameConfig } from '@/config';
import { useSound } from '@/shared/hooks';
import type { Character } from '@/types';

interface CharacterTransformProps {
  character: Character;
  onComplete?: () => void;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const CharacterImage = styled(motion.img)`
  width: 220px;
  height: 220px;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.4));
`;

const CharacterName = styled(motion.h2)`
  font-size: 28px;
  font-weight: 700;
  color: ${ThemeColors.textLight};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-top: 16px;
`;

const EnergyRing = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border: 3px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border-top-color: transparent;
  border-bottom-color: transparent;
`;

const Particle = styled(motion.div)<{ $angle: number; $distance: number }>`
  position: absolute;
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
  transform-origin: center;
`;

const TransformationText = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  font-size: 20px;
  font-weight: 700;
  color: ${ThemeColors.secondary};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const CharacterTransform: React.FC<CharacterTransformProps> = ({
  character,
  onComplete,
}) => {
  const { playTransform } = useSound();
  const [phase, setPhase] = useState<'vehicle' | 'transforming' | 'robot'>('vehicle');

  useEffect(() => {
    // 播放变形音效
    playTransform();

    // 变形动画序列
    const timer1 = setTimeout(() => {
      setPhase('transforming');
    }, 500);

    const timer2 = setTimeout(() => {
      setPhase('robot');
    }, GameConfig.transformDuration);

    const timer3 = setTimeout(() => {
      onComplete?.();
    }, GameConfig.transformDuration + 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete, playTransform]);

  // 生成粒子
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    angle: (i * 360) / 20,
    distance: 120 + Math.random() * 40,
  }));

  return (
    <Container>
      {/* 能量环 */}
      <EnergyRing
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
      <EnergyRing
        animate={{ rotate: -360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        style={{ width: 350, height: 350 }}
      />

      {/* 粒子效果 */}
      {phase === 'transforming' && (
        <>
          {particles.map((particle) => (
            <Particle
              key={particle.id}
              $angle={particle.angle}
              $distance={particle.distance}
              initial={{
                opacity: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
                x: [
                  0,
                  Math.cos((particle.angle * Math.PI) / 180) * particle.distance,
                ],
                y: [
                  0,
                  Math.sin((particle.angle * Math.PI) / 180) * particle.distance,
                ],
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
              }}
            />
          ))}
        </>
      )}

      {/* 角色图片 */}
      <AnimatePresence mode="wait">
        {phase === 'vehicle' && (
          <CharacterImage
            key="vehicle"
            src={character.vehicleImage}
            alt={character.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 1.2,
              filter: 'blur(10px)',
            }}
            transition={{ duration: 0.5 }}
          />
        )}
        {phase === 'transforming' && (
          <motion.div
            key="transforming"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              width: 220,
              height: 220,
              background: 'radial-gradient(circle, white 0%, transparent 70%)',
              borderRadius: '50%',
            }}
          />
        )}
        {phase === 'robot' && (
          <CharacterImage
            key="robot"
            src={character.robotImage}
            alt={character.name}
            initial={{ opacity: 0, scale: 1.3, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
          />
        )}
      </AnimatePresence>

      {/* 角色名称 */}
      {phase === 'robot' && (
        <CharacterName
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {character.name}
        </CharacterName>
      )}

      {/* 变形文字 */}
      {phase === 'transforming' && (
        <TransformationText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          变形中...
        </TransformationText>
      )}
    </Container>
  );
};

export default CharacterTransform;