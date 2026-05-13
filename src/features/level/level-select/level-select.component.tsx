import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ThemeColors } from '@/config';
import { Button, StarDisplay } from '@/shared/components';
import { storageService } from '@/services';
import { getAllLevels } from '@/data/levels.data';
import { hiddenLevelUnlockService } from '@/services/hidden-level-unlock.service';
import { useSound } from '@/shared/hooks';

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

/** 隐藏关卡卡片样式 */
const HiddenLevelCard = styled(motion.button)<{ $unlocked: boolean }>`
  position: relative;
  width: 100%;
  padding: 24px 20px;
  background: ${(props) =>
    props.$unlocked
      ? 'linear-gradient(135deg, #FDB931 0%, #FF6B6B 50%, #8B5CF6 100%)'
      : '#e5e7eb'};
  border: none;
  border-radius: 20px;
  cursor: ${(props) => (props.$unlocked ? 'pointer' : 'not-allowed')};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  opacity: ${(props) => (props.$unlocked ? 1 : 0.7)};
  overflow: hidden;

  ${(props) =>
    props.$unlocked &&
    `
    &::before {
      content: '✨';
      position: absolute;
      top: 8px;
      right: 12px;
      font-size: 24px;
      animation: sparkle 1.5s ease-in-out infinite;
    }

    @keyframes sparkle {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.2); }
    }
  `}
`;

const HiddenLevelTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: white;
  margin-bottom: 8px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const HiddenLevelDescription = styled.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 12px;
`;

const HiddenLevelStatus = styled.div`
  font-size: 12px;
  color: white;
  font-weight: 600;
`;

const NewBadge = styled.span`
  position: absolute;
  top: 8px;
  left: 12px;
  background: #FF4444;
  color: white;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 8px;
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

const LevelSelectPage: React.FC = () => {
  const navigate = useNavigate();
  const userData = storageService.getUserData();
  const levels = getAllLevels();
  const { playBGM, stopBGM } = useSound();

  // 播放主菜单 BGM
  useEffect(() => {
    playBGM('menu');
    return () => {
      stopBGM();
    };
  }, [playBGM, stopBGM]);

  // 检查隐藏关卡是否已解锁
  const isH1Unlocked = hiddenLevelUnlockService.checkUnlock('H1');
  const isH2Unlocked = hiddenLevelUnlockService.checkUnlock('H2');

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

  const handleHiddenLevelClick = (levelId: string, isUnlocked: boolean) => {
    if (!isUnlocked) return;
    navigate(`/level/${levelId}/intro`);
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
                let isLocked = !progress || progress.status === 'locked';

                // 检查是否需要先完成隐藏关卡
                if (level.requiredHiddenLevel && !isLocked) {
                  const hiddenProgress = userData.levelProgress[level.requiredHiddenLevel];
                  isLocked = !hiddenProgress || hiddenProgress.status !== 'completed';
                }

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

        {/* 隐藏关卡专区 */}
        {(isH1Unlocked || isH2Unlocked) && (
          <ChapterSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ChapterTitle>⭐ 隐藏关卡</ChapterTitle>
            <LevelsGrid>
              {/* 隐藏关卡 H1：超炫电光王的秘密基地 */}
              {isH1Unlocked && (
                <HiddenLevelCard
                  $unlocked={true}
                  onClick={() => handleHiddenLevelClick('H1', true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <NewBadge>NEW!</NewBadge>
                  <HiddenLevelTitle>✨ 超炫电光王的秘密基地 ✨</HiddenLevelTitle>
                  <HiddenLevelDescription>数位大师的终极挑战</HiddenLevelDescription>
                  <HiddenLevelStatus>
                    {userData.levelProgress['H1']?.status === 'completed' ? '⭐ 已通关' : '🎮 进入挑战'}
                  </HiddenLevelStatus>
                </HiddenLevelCard>
              )}

              {/* 隐藏关卡 H2：炫蓝雷霆王的时空裂缝 */}
              {isH2Unlocked && (
                <HiddenLevelCard
                  $unlocked={true}
                  onClick={() => handleHiddenLevelClick('H2', true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <NewBadge>NEW!</NewBadge>
                  <HiddenLevelTitle>⚡ 炫蓝雷霆王的时空裂缝 ⚡</HiddenLevelTitle>
                  <HiddenLevelDescription>跨单元综合挑战</HiddenLevelDescription>
                  <HiddenLevelStatus>
                    {userData.levelProgress['H2']?.status === 'completed' ? '⭐ 已通关' : '🎮 进入挑战'}
                  </HiddenLevelStatus>
                </HiddenLevelCard>
              )}
            </LevelsGrid>
          </ChapterSection>
        )}
      </ChaptersContainer>
    </Container>
  );
};

export default LevelSelectPage;