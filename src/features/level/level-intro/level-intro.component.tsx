import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ThemeColors } from '@/config';
import { Button } from '@/shared/components';
import { getLevelById } from '@/data/levels.data';
import { CharacterShow } from '@/features/character';
import { StoryPlayer } from '@/features/story';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${ThemeColors.textLight};
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const LevelInfo = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 24px;
  width: 100%;
  max-width: 500px;
  text-align: center;
`;

const LevelName = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: ${ThemeColors.textPrimary};
  margin-bottom: 8px;
`;

const LevelDescription = styled.p`
  font-size: 14px;
  color: ${ThemeColors.textSecondary};
  margin-bottom: 16px;
`;

const GuardianSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 24px;
  width: 100%;
  max-width: 500px;
`;

const GuardianTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${ThemeColors.textPrimary};
  margin-bottom: 16px;
  text-align: center;
`;

const StartButton = styled(Button)`
  margin-top: 24px;
`;

const Phase = {
  STORY: 'story',
  GUARDIAN: 'guardian',
  READY: 'ready',
} as const;

type PhaseType = (typeof Phase)[keyof typeof Phase];

const LevelIntroPage: React.FC = () => {
  const { levelId } = useParams<{ levelId: string }>();
  const navigate = useNavigate();
  const [phase, setPhase] = useState<PhaseType>(Phase.STORY);

  const level = getLevelById(levelId || '1-1');

  useEffect(() => {
    // 如果没有剧情，直接显示守护者
    if (!level?.story || level.story.length === 0) {
      setPhase(Phase.GUARDIAN);
    }
  }, [level]);

  if (!level) {
    return (
      <Container>
        <Content>关卡不存在</Content>
      </Container>
    );
  }

  const handleStoryComplete = () => {
    setPhase(Phase.GUARDIAN);
  };

  const handleGuardianComplete = () => {
    setPhase(Phase.READY);
  };

  const handleStart = () => {
    navigate(`/level/${levelId}/play`);
  };

  const handleBack = () => {
    navigate('/levels');
  };

  return (
    <Container>
      <Header>
        <Title>{level.chapterName}</Title>
        <Button variant="secondary" size="small" onClick={handleBack}>
          返回
        </Button>
      </Header>

      <Content>
        {phase === Phase.STORY && level.story.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ width: '100%', maxWidth: 500 }}
          >
            <StoryPlayer
              segments={level.story}
              onComplete={handleStoryComplete}
              showSkip
            />
          </motion.div>
        )}

        {phase === Phase.GUARDIAN && (
          <GuardianSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GuardianTitle>关卡守护者</GuardianTitle>
            <CharacterShow
              character={level.guardian}
              onComplete={handleGuardianComplete}
            />
          </GuardianSection>
        )}

        {phase === Phase.READY && (
          <LevelInfo
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <LevelName>{level.name}</LevelName>
            <LevelDescription>{level.description}</LevelDescription>
            <p style={{ fontSize: 14, color: ThemeColors.textSecondary }}>
              共 {level.questions.length} 道题目
            </p>
            <p style={{ fontSize: 14, color: ThemeColors.textSecondary, marginTop: 8 }}>
              答对每题可获得 {level.starReward} 颗星星
            </p>
            <StartButton
              variant="primary"
              size="large"
              onClick={handleStart}
            >
              开始挑战
            </StartButton>
          </LevelInfo>
        )}
      </Content>
    </Container>
  );
};

export default LevelIntroPage;