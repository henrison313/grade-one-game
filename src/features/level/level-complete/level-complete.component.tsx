import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ThemeColors, GameConfig } from '@/config';
import { Button, StarDisplay } from '@/shared/components';
import { useSound } from '@/shared/hooks';
import { getLevelById } from '@/data/levels.data';
import { CharacterTransform } from '@/features/character';
import { CardReveal } from '@/features/card';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

const ResultSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 24px;
  padding: 32px;
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const ResultTitle = styled(motion.h1)`
  font-size: 32px;
  font-weight: 700;
  color: ${ThemeColors.success};
  margin-bottom: 16px;
`;

const ResultStars = styled(motion.div)`
  margin-bottom: 24px;
`;

const StarsCount = styled(motion.div)`
  font-size: 48px;
  font-weight: 700;
  color: ${ThemeColors.star};
  margin-top: 8px;
`;

const ResultMessage = styled(motion.p)`
  font-size: 18px;
  color: ${ThemeColors.textSecondary};
  margin-bottom: 24px;
`;

const Phase = {
  RESULT: 'result',
  TRANSFORM: 'transform',
  CARD_REVEAL: 'card_reveal',
} as const;

type PhaseType = (typeof Phase)[keyof typeof Phase];

const LevelCompletePage: React.FC = () => {
  const { levelId } = useParams<{ levelId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { playLevelComplete } = useSound();

  const [phase, setPhase] = useState<PhaseType>(Phase.RESULT);

  const level = getLevelById(levelId || '1-1');
  const starsEarned = parseInt(searchParams.get('stars') || '0', 10);

  useEffect(() => {
    playLevelComplete();
  }, [playLevelComplete]);

  if (!level) {
    return (
      <Container>
        <ResultSection>关卡不存在</ResultSection>
      </Container>
    );
  }

  const handleNext = () => {
    setPhase(Phase.TRANSFORM);
  };

  const handleTransformComplete = () => {
    setPhase(Phase.CARD_REVEAL);
  };

  const handleCardRevealComplete = () => {
    navigate('/collection');
  };

  const handleReturn = () => {
    navigate('/levels');
  };

  const maxStars = level.questions.length * GameConfig.starsPerQuestion;
  const percentage = Math.round((starsEarned / maxStars) * 100);

  return (
    <Container>
      {phase === Phase.RESULT && (
        <ResultSection
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <ResultTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            恭喜过关！
          </ResultTitle>

          <ResultStars
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <StarDisplay
              count={Math.floor(starsEarned / 10)}
              maxCount={5}
              size="large"
              animate
            />
            <StarsCount
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              ⭐ {starsEarned}
            </StarsCount>
          </ResultStars>

          <ResultMessage
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            你获得了 {percentage}% 的星星！
          </ResultMessage>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ display: 'flex', gap: 12, justifyContent: 'center' }}
          >
            <Button variant="secondary" onClick={handleReturn}>
              返回
            </Button>
            <Button variant="primary" onClick={handleNext}>
              继续领奖
            </Button>
          </motion.div>
        </ResultSection>
      )}

      {phase === Phase.TRANSFORM && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <CharacterTransform
            character={level.guardian}
            onComplete={handleTransformComplete}
          />
        </motion.div>
      )}

      {phase === Phase.CARD_REVEAL && (
        <CardReveal
          character={level.guardian}
          starsEarned={starsEarned}
          onComplete={handleCardRevealComplete}
        />
      )}
    </Container>
  );
};

export default LevelCompletePage;