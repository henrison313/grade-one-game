import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ThemeColors } from '@/config';
import { Button, SoundControl } from '@/shared/components';
import { storageService } from '@/services';
import { useSound } from '@/shared/hooks';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

const Logo = styled(motion.div)`
  font-size: 48px;
  font-weight: 800;
  color: white;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 16px;
`;

const Subtitle = styled(motion.p)`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 48px;
  text-align: center;
`;

const ButtonsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 280px;
`;

const MenuButton = styled(Button)`
  width: 100%;
  padding: 16px 24px;
  font-size: 18px;
`;

const CharacterImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-bottom: 32px;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
`;

const StatsBar = styled(motion.div)`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 16px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StatIcon = styled.span`
  font-size: 18px;
`;

const StatValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${ThemeColors.textPrimary};
`;

const SettingsButton = styled(motion.button)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const userData = storageService.getUserData();
  const { playBGM } = useSound();
  const [showSettings, setShowSettings] = React.useState(false);

  // 播放主菜单 BGM
  useEffect(() => {
    playBGM('menu');
  }, [playBGM]);

  const handleStart = () => {
    navigate('/levels');
  };

  const handleCollection = () => {
    navigate('/collection');
  };

  return (
    <Container>
      <SettingsButton
        onClick={() => setShowSettings(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        🔊
      </SettingsButton>

      <StatsBar
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <StatItem>
          <StatIcon>⭐</StatIcon>
          <StatValue>{userData.totalStars}</StatValue>
        </StatItem>
        <StatItem>
          <StatIcon>🃏</StatIcon>
          <StatValue>{userData.collectedCards.length}</StatValue>
        </StatItem>
      </StatsBar>

      <CharacterImage
        src="/图片素材/小俊.png"
        alt="主角"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      />

      <Logo
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        炫卡收集游戏
      </Logo>

      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        学习数学，收集炫卡，成为炫卡斗士！
      </Subtitle>

      <ButtonsContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <MenuButton variant="primary" size="large" onClick={handleStart}>
          开始冒险
        </MenuButton>
        <MenuButton variant="secondary" size="large" onClick={handleCollection}>
          卡牌收集册
        </MenuButton>
      </ButtonsContainer>

      <SoundControl isOpen={showSettings} onClose={() => setShowSettings(false)} />
    </Container>
  );
};

export default HomePage;