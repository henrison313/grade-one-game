import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ThemeColors } from '@/config';
import { Button, StarDisplay } from '@/shared/components';
import { storageService } from '@/services';
import { getAllLevels } from '@/data/levels.data';

const Container = styled.div`
  min-height: 100vh;
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
  font-size: 28px;
  font-weight: 700;
  color: ${ThemeColors.textLight};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const BackButton = styled(Button)`
  background: rgba(255, 255, 255, 0.9);
  color: ${ThemeColors.textPrimary};
`;

const ChaptersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ChapterSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 24px;
`;

const ChapterTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${ThemeColors.textPrimary};
  margin-bottom: 16px;
`;

const LevelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
`;

const LevelCard = styled(motion.button)<{ $locked: boolean; $completed: boolean }>`
  position: relative;
  padding: 20px 16px;
  background: ${(props) =>
    props.$completed
      ? `linear-gradient(135deg, ${ThemeColors.success} 0%, ${ThemeColors.successLight} 100%)`
      : props.$locked
      ? '#e5e7eb'
      : 'white'};
  border: none;
  border-radius: 16px;
  cursor: ${(props) => (props.$locked ? 'not-allowed' : 'pointer')};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  opacity: ${(props) => (props.$locked ? 0.7 : 1)};
`;

const LevelName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${ThemeColors.textPrimary};
  margin-bottom: 8px;
`;

const LevelDescription = styled.div`
  font-size: 12px;
  color: ${ThemeColors.textSecondary};
  margin-bottom: 12px;
`;

const LevelStars = styled.div`
  display: flex;
  justify-content: center;
`;

const LockIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 16px;
`;

const GuardianImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 8px;
`;

const LevelSelectPage: React.FC = () => {
  const navigate = useNavigate();
  const userData = storageService.getUserData();
  const levels = getAllLevels();

  // 按章节分组
  const chapters = React.useMemo(() => {
    const grouped = new Map<number, typeof levels>();
    levels.forEach((level) => {
      if (!grouped.has(level.chapter)) {
        grouped.set(level.chapter, []);
      }
      grouped.get(level.chapter)!.push(level);
    });
    return grouped;
  }, [levels]);

  const handleLevelClick = (levelId: string, isLocked: boolean) => {
    if (isLocked) return;
    navigate(`/level/${levelId}/intro`);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <Container>
      <Header>
        <Title>选择关卡</Title>
        <BackButton size="small" onClick={handleBack}>
          返回
        </BackButton>
      </Header>

      <ChaptersContainer>
        {Array.from(chapters.entries()).map(([chapterNum, chapterLevels], chapterIndex) => (
          <ChapterSection
            key={chapterNum}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: chapterIndex * 0.1 }}
          >
            <ChapterTitle>第{chapterNum}章：{chapterLevels[0]?.chapterName || '待定'}</ChapterTitle>
            <LevelsGrid>
              {chapterLevels.map((level, levelIndex) => {
                const progress = userData.levelProgress[level.id];
                const isLocked = !progress || progress.status === 'locked';
                const isCompleted = progress?.status === 'completed';
                const stars = progress?.stars || 0;

                return (
                  <LevelCard
                    key={level.id}
                    $locked={isLocked}
                    $completed={isCompleted}
                    onClick={() => handleLevelClick(level.id, isLocked)}
                    whileHover={!isLocked ? { scale: 1.05 } : {}}
                    whileTap={!isLocked ? { scale: 0.95 } : {}}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: chapterIndex * 0.1 + levelIndex * 0.05 }}
                  >
                    {isLocked && <LockIcon>🔒</LockIcon>}

                    <GuardianImage
                      src={level.guardian.vehicleImage}
                      alt={level.guardian.name}
                      style={{ opacity: isLocked ? 0.5 : 1 }}
                    />

                    <LevelName>{level.name}</LevelName>
                    <LevelDescription>{level.description}</LevelDescription>

                    <LevelStars>
                      <StarDisplay
                        count={Math.floor(stars / 10)}
                        maxCount={5}
                        size="small"
                        animate={false}
                        showCount={false}
                      />
                    </LevelStars>
                  </LevelCard>
                );
              })}
            </LevelsGrid>
          </ChapterSection>
        ))}
      </ChaptersContainer>
    </Container>
  );
};

export default LevelSelectPage;