import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/shared/components';
import { useSound } from '@/shared/hooks';
import { getLevelById } from '@/data/levels.data';
import { getHiddenLevelById } from '@/data/hidden-levels.data';
import { CharacterShow } from '@/features/character';
import { StoryPlayer } from '@/features/story';
import { DifficultyLevel } from '@/types';
import { DifficultyConfigs } from '@/config/question-story.config';
import { getWeaponPartsByLevel, getWeaponNameByLevel } from '@/data/weapon-configs.data';
import { soundService } from '@/services';

// 🎨 糖果色系
const CandyColors = {
  pink: '#FFB5BA',
  yellow: '#FFE66D',
  mint: '#7FCCB0',
  sky: '#89CFF0',
  lavender: '#E6E6FA',
  coral: '#FF7F7F',
  peach: '#FFCBA4',
  rainbowPink: '#FF6B9D',
};

// ✨ 星星闪烁
const sparkle = keyframes`
  0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
  50% { opacity: 0.6; transform: scale(0.9) rotate(10deg); }
`;

// 🌈 彩虹渐变动画
const rainbowShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// 🎐 温柔浮动
const gentleBob = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
`;

// 💫 脉冲发光
const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 12px rgba(255, 182, 193, 0.4); }
  50% { box-shadow: 0 0 24px rgba(255, 182, 193, 0.6), 0 0 36px rgba(255, 230, 109, 0.3); }
`;

// 🎀 主容器 - 糖果彩虹背景
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background:
    linear-gradient(135deg,
      rgba(255, 182, 193, 0.9) 0%,
      rgba(255, 230, 109, 0.8) 25%,
      rgba(127, 204, 176, 0.8) 50%,
      rgba(137, 207, 240, 0.8) 75%,
      rgba(230, 230, 250, 0.8) 100%);
  background-size: 400% 400%;
  animation: ${rainbowShift} 12s ease infinite;
  padding: 20px;
  position: relative;

  &::before {
    content: '⭐';
    position: absolute;
    top: 20px;
    left: 30px;
    font-size: 28px;
    animation: ${sparkle} 2s ease-in-out infinite;
    opacity: 0.7;
  }

  &::after {
    content: '✨';
    position: absolute;
    bottom: 40px;
    right: 40px;
    font-size: 32px;
    animation: ${sparkle} 3s ease-in-out infinite 0.5s;
    opacity: 0.6;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled(motion.h1)`
  font-size: 26px;
  font-weight: 700;
  color: #FFF;
  text-shadow:
    2px 2px 0px ${CandyColors.rainbowPink},
    4px 4px 0px rgba(255, 182, 193, 0.3);
  letter-spacing: 2px;
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
  background:
    radial-gradient(ellipse at top, rgba(255, 255, 255, 0.98) 0%, rgba(255, 250, 245, 0.95) 100%);
  border-radius: 32px;
  padding: 28px 32px;
  width: 100%;
  max-width: 500px;
  text-align: center;
  border: 4px solid ${CandyColors.pink};
  box-shadow:
    0 12px 32px rgba(255, 182, 193, 0.35),
    0 4px 12px rgba(137, 207, 240, 0.2);
  position: relative;

  &::before {
    content: '🌟';
    position: absolute;
    top: -16px;
    right: 24px;
    font-size: 24px;
    animation: ${sparkle} 2s ease-in-out infinite;
  }
`;

const LevelName = styled(motion.h2)`
  font-size: 24px;
  font-weight: 700;
  color: ${CandyColors.coral};
  margin-bottom: 12px;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5);
`;

const LevelDescription = styled.p`
  font-size: 15px;
  color: #7A7A7A;
  margin-bottom: 20px;
  line-height: 1.5;
`;

const GuardianSection = styled(motion.div)`
  background:
    radial-gradient(ellipse at top, rgba(255, 255, 255, 0.98) 0%, rgba(255, 250, 245, 0.95) 100%);
  border-radius: 32px;
  padding: 28px;
  width: 100%;
  max-width: 500px;
  border: 4px solid ${CandyColors.mint};
  box-shadow:
    0 12px 32px rgba(127, 204, 176, 0.35),
    0 4px 12px rgba(137, 207, 240, 0.2);
  position: relative;

  &::before {
    content: '✦';
    position: absolute;
    top: -14px;
    left: 20px;
    font-size: 22px;
    color: ${CandyColors.mint};
    animation: ${sparkle} 2.5s ease-in-out infinite;
  }
`;

const GuardianTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${CandyColors.mint};
  margin-bottom: 18px;
  text-align: center;
`;

const StartButton = styled(Button)`
  margin-top: 24px;
  background: linear-gradient(135deg, ${CandyColors.rainbowPink} 0%, ${CandyColors.coral} 100%) !important;
  border-radius: 20px !important;
  font-weight: 700;
  letter-spacing: 1px;
  box-shadow: 0 6px 20px rgba(255, 182, 193, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 28px rgba(255, 182, 193, 0.5);
  }
`;

const DifficultySection = styled.div`
  margin-top: 24px;
  text-align: center;
`;

const DifficultyTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${CandyColors.coral};
  margin-bottom: 18px;
`;

const DifficultyOptions = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;

const DifficultyButton = styled(motion.button)<{
  $selected: boolean;
  $difficulty: DifficultyLevel;
}>`
  padding: 16px 24px;
  border-radius: 24px;
  border: 4px solid ${(props) =>
    props.$selected ? CandyColors.yellow : 'rgba(255, 182, 193, 0.4)'};

  background: ${(props) =>
    props.$selected
      ? `linear-gradient(135deg,
          ${CandyColors.rainbowPink} 0%,
          ${CandyColors.yellow} 50%,
          ${CandyColors.mint} 100%)`
      : 'rgba(255, 255, 255, 0.8)'};

  color: ${(props) =>
    props.$selected ? '#FFF' : '#7A7A7A'};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  min-width: 130px;
  transition: all 0.3s ease;
  position: relative;

  ${(props) => props.$selected && css`animation: ${pulseGlow} 2s ease-in-out infinite;`}

  &:hover {
    border-color: ${CandyColors.yellow};
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 8px 24px rgba(255, 230, 109, 0.35);
  }

  &::after {
    content: ${(props) => props.$selected ? '✨' : ''};
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 16px;
    animation: ${sparkle} 1.5s ease-in-out infinite;
  }
`;

const DifficultyInfo = styled(motion.div)`
  margin-top: 16px;
  padding: 12px 20px;
  background:
    radial-gradient(ellipse at top, rgba(255, 230, 109, 0.2) 0%, rgba(255, 182, 193, 0.15) 100%);
  border-radius: 16px;
  border: 2px solid rgba(255, 230, 109, 0.4);
  font-size: 14px;
  color: #7A7A7A;
`;

const WeaponPreview = styled(motion.div)`
  margin-top: 20px;
  padding: 20px;
  background:
    radial-gradient(ellipse at top, rgba(255, 230, 109, 0.3) 0%, rgba(255, 182, 193, 0.2) 100%);
  border-radius: 20px;
  border: 3px solid ${CandyColors.yellow};
  position: relative;

  &::before {
    content: '🎁';
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    animation: ${gentleBob} 2s ease-in-out infinite;
  }
`;

const WeaponName = styled(motion.p)`
  font-size: 18px;
  font-weight: 700;
  color: ${CandyColors.coral};
  margin-bottom: 12px;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5);
`;

const WeaponPartsPreview = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

const PartChip = styled.span<{ $index: number }>`
  padding: 8px 14px;
  background: ${(props) =>
    props.$index % 4 === 0
      ? `linear-gradient(135deg, ${CandyColors.pink} 0%, ${CandyColors.coral} 100%)`
      : props.$index % 4 === 1
        ? `linear-gradient(135deg, ${CandyColors.yellow} 0%, ${CandyColors.peach} 100%)`
        : props.$index % 4 === 2
          ? `linear-gradient(135deg, ${CandyColors.mint} 0%, ${CandyColors.sky} 100%)`
          : `linear-gradient(135deg, ${CandyColors.lavender} 0%, ${CandyColors.pink} 100%)`};
  border-radius: 14px;
  font-size: 12px;
  font-weight: 600;
  color: #FFF;
  box-shadow: 0 3px 10px rgba(255, 182, 193, 0.25);
`;

const StarReward = styled(motion.p)`
  font-size: 14px;
  color: ${CandyColors.yellow};
  font-weight: 700;
  margin-top: 14px;
`;

const Phase = {
  STORY: 'story',
  GUARDIAN: 'guardian',
  DIFFICULTY: 'difficulty',
  READY: 'ready',
} as const;

type PhaseType = (typeof Phase)[keyof typeof Phase];

const LevelIntroPage: React.FC = () => {
  const { levelId } = useParams<{ levelId: string }>();
  const navigate = useNavigate();
  const { playBGM, stopBGM } = useSound();
  const [phase, setPhase] = useState<PhaseType>(Phase.STORY);
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel>(DifficultyLevel.EASY);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    playBGM('story');
    return () => {
      stopBGM();
    };
  }, [playBGM, stopBGM]);

  const level = getLevelById(levelId || '1-1') || getHiddenLevelById(levelId || '');

  // 预加载战斗资源
  useEffect(() => {
    const preloadBattleResources = async () => {
      // 预加载战斗 BGM
      await soundService.preloadBGM('battle');

      // 预加载常用答题音效
      await soundService.preloadSFX([
        'correct', 'wrong', 'click',
        'drag', 'drop', 'star-earn',
        'combo-1', 'combo-5', 'combo-10',
      ]);

      // 预加载武器零件图片
      const weaponParts = getWeaponPartsByLevel(levelId || '1-1', DifficultyLevel.EASY);
      weaponParts.forEach((part) => {
        if (part.iconImage) {
          const img = new Image();
          img.src = part.iconImage;
        }
      });
    };

    preloadBattleResources().catch(() => {});
  }, [levelId]);

  useEffect(() => {
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
    setPhase(Phase.DIFFICULTY);
  };

  const handleDifficultySelect = (difficulty: DifficultyLevel) => {
    setSelectedDifficulty(difficulty);
  };

  const handleDifficultyConfirm = () => {
    setPhase(Phase.READY);
  };

  // Phase.READY 阶段 3 秒后自动跳转答题界面
  useEffect(() => {
    if (phase === Phase.READY) {
      setCountdown(3);
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      const timer = setTimeout(() => {
        navigate(`/level/${levelId}/play?difficulty=${selectedDifficulty}`);
      }, 3000);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [phase, navigate, levelId, selectedDifficulty]);

  const handleBack = () => {
    navigate('/levels');
  };

  // 根据难度获取配置
  const currentConfig = DifficultyConfigs[selectedDifficulty];
  // 从 weapon-configs.data.ts 获取正确的武器零件和名称
  const weaponPartsForLevel = getWeaponPartsByLevel(levelId || '1-1', selectedDifficulty);
  const weaponNameForLevel = getWeaponNameByLevel(levelId || '1-1', selectedDifficulty);

  return (
    <Container>
      <Header>
        <Title
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {level.chapterName}
        </Title>
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
              levelId={levelId || '1-1'}
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

        {phase === Phase.DIFFICULTY && (
          <LevelInfo
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <LevelName>{level.name}</LevelName>
            <LevelDescription>{level.description}</LevelDescription>

            <DifficultySection>
              <DifficultyTitle>✦ 选择挑战难度 ✦</DifficultyTitle>
              <DifficultyOptions>
                {Object.values(DifficultyLevel).map((diff) => (
                  <DifficultyButton
                    key={diff}
                    $selected={selectedDifficulty === diff}
                    $difficulty={diff}
                    onClick={() => handleDifficultySelect(diff)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {DifficultyConfigs[diff].name}
                  </DifficultyButton>
                ))}
              </DifficultyOptions>

              <DifficultyInfo
                key={selectedDifficulty}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {currentConfig.description}
              </DifficultyInfo>

              <WeaponPreview
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <WeaponName
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                >
                  ⚔️ {weaponNameForLevel} ⚔️
                </WeaponName>
                <WeaponPartsPreview>
                  {weaponPartsForLevel.slice(0, 4).map((part, idx) => (
                    <PartChip key={part.id} $index={idx}>
                      {idx + 1}. {part.name}
                    </PartChip>
                  ))}
                </WeaponPartsPreview>
              </WeaponPreview>

              <StarReward
                animate={{
                  scale: [1, 1.05, 1],
                  transition: { repeat: Infinity, duration: 2 },
                }}
              >
                ⭐ 星星奖励 ×{currentConfig.starMultiplier} ⭐
              </StarReward>
            </DifficultySection>

            <StartButton
              variant="primary"
              size="large"
              onClick={handleDifficultyConfirm}
            >
              开始挑战 🚀
            </StartButton>
          </LevelInfo>
        )}

        {phase === Phase.READY && (
          <LevelInfo
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <LevelName>{level.name}</LevelName>
            <LevelDescription>{level.description}</LevelDescription>

            <motion.p
              style={{
                fontSize: 16,
                color: CandyColors.coral,
                fontWeight: 700,
                marginTop: 12,
              }}
              animate={{
                scale: [1, 1.02, 1],
                transition: { repeat: Infinity, duration: 1.5 },
              }}
            >
              🎯 挑战难度：{currentConfig.name}
            </motion.p>

            <motion.p
              style={{
                fontSize: 16,
                color: CandyColors.yellow,
                fontWeight: 700,
                marginTop: 8,
              }}
            >
              ⚔️ 目标武器：{weaponNameForLevel}
            </motion.p>

            <p style={{ fontSize: 14, color: '#7A7A7A', marginTop: 12 }}>
              📝 共 {level.questions.length} 道题目
            </p>

            <StarReward>
              ⭐ 答对每题可获得 {Math.floor(level.starReward * currentConfig.starMultiplier)} 颗星星
            </StarReward>

            <motion.p
              style={{
                fontSize: 28,
                color: CandyColors.rainbowPink,
                fontWeight: 700,
                marginTop: 24,
              }}
              animate={{
                scale: [1, 1.2, 1],
                transition: { repeat: Infinity, duration: 1 },
              }}
            >
              ⏱️ {countdown} 秒后开始...
            </motion.p>
          </LevelInfo>
        )}
      </Content>
    </Container>
  );
};

export default LevelIntroPage;