import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { GameConfig } from '@/config';
import { DifficultyConfigs } from '@/config/question-story.config';
import { StarDisplay } from '@/shared/components';
import { useSound } from '@/shared/hooks';
import { getLevelById } from '@/data/levels.data';
import { getHiddenLevelById } from '@/data/hidden-levels.data';
import { CardReveal } from '@/features/card';
import { DifficultyLevel } from '@/types';

// 🎨 Candy Kingdom 色彩方案
const CandyColors = {
  pink: '#FFB5BA',
  mint: '#7FCCB0',
  sky: '#89CFF0',
  yellow: '#FFE66D',
  coral: '#FF7F7F',
  cream: '#FFF8E7',
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg,
    rgba(255, 182, 193, 0.9) 0%,
    rgba(255, 230, 109, 0.85) 30%,
    rgba(127, 204, 176, 0.8) 50%,
    rgba(137, 207, 240, 0.85) 70%,
    rgba(230, 230, 250, 0.9) 100%
  );
  padding: 20px;
`;

const ResultSection = styled(motion.div)`
  background: ${CandyColors.cream};
  border-radius: 32px;
  padding: 36px;
  text-align: center;
  max-width: 400px;
  width: 100%;
  border: 4px solid ${CandyColors.pink};
  box-shadow:
    0 8px 0 rgba(255, 182, 193, 0.25),
    0 20px 40px rgba(255, 182, 193, 0.2);
`;

const ResultTitle = styled(motion.h1)`
  font-size: 36px;
  font-weight: 700;
  color: ${CandyColors.coral};
  margin-bottom: 16px;
`;

const ResultStars = styled(motion.div)`
  margin-bottom: 24px;
`;

const StarsCount = styled(motion.div)`
  font-size: 48px;
  font-weight: 700;
  color: ${CandyColors.yellow};
  margin-top: 8px;
`;

const ResultMessage = styled(motion.p)`
  font-size: 18px;
  color: #5A5A5A;
  margin-bottom: 16px;
`;

const AutoNextHint = styled(motion.div)`
  font-size: 14px;
  color: #7A7A7A;
  margin-top: 8px;
`;

const LevelCompletePage: React.FC = () => {
  const { levelId } = useParams<{ levelId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { playLevelComplete, playBGM, stopBGM } = useSound();

  const [showResult, setShowResult] = useState(true);
  const [countdown, setCountdown] = useState(2);

  const level = getLevelById(levelId || '1-1') || getHiddenLevelById(levelId || '');
  const starsEarned = parseInt(searchParams.get('stars') || '0', 10);
  const maxStarsParam = searchParams.get('maxStars');
  const difficultyParam = searchParams.get('difficulty') || 'easy';
  const difficulty = difficultyParam === 'medium' ? DifficultyLevel.MEDIUM
    : difficultyParam === 'hard' ? DifficultyLevel.HARD
    : DifficultyLevel.EASY;

  // 获取难度配置
  const difficultyConfig = DifficultyConfigs[difficulty];
  // 使用 URL 传入的 maxStars，如果没有则回退到计算值
  const maxStars = maxStarsParam ? parseInt(maxStarsParam, 10) : Math.floor((level?.questions.length || 5) * GameConfig.starsPerQuestion * difficultyConfig.starMultiplier);
  const victoryStars = Math.floor(maxStars * difficultyConfig.starRequirement);
  const percentage = Math.round((starsEarned / maxStars) * 100);

  // 根据难度和星星数判断胜利称号
  const getVictoryTitle = () => {
    if (starsEarned >= maxStars) {
      switch (difficulty) {
        case DifficultyLevel.HARD:
          return '🏆 完美通关！';
        case DifficultyLevel.MEDIUM:
          return '⭐ 挑战成功！';
        default:
          return '🎉 新手通关！';
      }
    } else if (starsEarned >= victoryStars) {
      switch (difficulty) {
        case DifficultyLevel.HARD:
          return '🎯 高手过关！';
        case DifficultyLevel.MEDIUM:
          return '✨ 挑战通过！';
        default:
          return '🌟 顺利过关！';
      }
    }
    return '💪 再接再厉！';
  };

  useEffect(() => {
    playLevelComplete();
    playBGM('victory');

    // 2秒后自动进入炫卡收集
    const countdownTimer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownTimer);
          setShowResult(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const autoNextTimer = setTimeout(() => {
      setShowResult(false);
    }, 2000);

    return () => {
      clearInterval(countdownTimer);
      clearTimeout(autoNextTimer);
      stopBGM();
    };
  }, [playLevelComplete, playBGM, stopBGM]);

  if (!level) {
    return (
      <Container>
        <ResultSection>关卡不存在</ResultSection>
      </Container>
    );
  }

  const handleCardRevealComplete = () => {
    // 自动跳转到卡牌收集册页面
    navigate('/collection');
  };

  return (
    <Container>
      {showResult && (
        <ResultSection
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          <ResultTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {getVictoryTitle()}
          </ResultTitle>

          <ResultStars
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <StarDisplay
              count={Math.min(5, Math.ceil(starsEarned / (maxStars / 5)))}
              maxCount={5}
              size="large"
              animate
            />
            <StarsCount
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              ⭐ {starsEarned} / {maxStars}
            </StarsCount>
          </ResultStars>

          <ResultMessage
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {difficultyConfig.name} - {percentage}% 星星！
          </ResultMessage>

          <AutoNextHint
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {countdown > 0 ? `${countdown}秒后自动收集炫卡...` : '正在进入炫卡收集...'}
          </AutoNextHint>
        </ResultSection>
      )}

      {!showResult && (
        <CardReveal
          character={level.guardian}
          starsEarned={starsEarned}
          difficulty={difficulty}
          onComplete={handleCardRevealComplete}
        />
      )}
    </Container>
  );
};

export default LevelCompletePage;