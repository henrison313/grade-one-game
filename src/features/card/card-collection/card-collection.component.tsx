import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeColors, RarityConfig } from '@/config';
import { storageService } from '@/services';
import { Button, Modal, CardSummoner } from '@/shared/components';
import { getAllCharacters, getCharacterById } from '@/data/characters.data';
import CardDetail from '../card-detail/card-detail.component';
import type { Character } from '@/types';

// 扩展稀有度配置以支持新类型
const ExtendedRarityConfig: Record<string, { name: string; color: string; glow: string }> = {
  ...RarityConfig,
  bronze: { name: '青铜', color: '#CD7F32', glow: 'rgba(205, 127, 50, 0.5)' },
  silver: { name: '白银', color: '#C0C0C0', glow: 'rgba(192, 192, 192, 0.5)' },
  gold: { name: '黄金', color: '#FFD700', glow: 'rgba(255, 215, 0, 0.5)' },
  rainbow: { name: '彩虹', color: '#FF0080', glow: 'rgba(255, 255, 255, 0.8)' },
  prismatic: { name: '炫彩', color: '#FF0080', glow: 'rgba(255, 0, 128, 0.8)' },
};

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

const SummonerSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
`;

const SummonerLabel = styled.div`
  margin-left: 16px;
  text-align: left;
`;

const SummonerTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${ThemeColors.textLight};
  margin-bottom: 4px;
`;

const SummonerCount = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
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

const StatsBar = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${ThemeColors.primary};
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: ${ThemeColors.textSecondary};
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
`;

const CardSlot = styled(motion.div)<{ $collected: boolean }>`
  aspect-ratio: 3/4;
  background: ${(props) =>
    props.$collected ? 'white' : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 16px;
  overflow: hidden;
  cursor: ${(props) => (props.$collected ? 'pointer' : 'default')};
  box-shadow: ${(props) =>
    props.$collected ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CardImage = styled.img`
  width: 80%;
  height: 60%;
  object-fit: contain;
`;

const CardName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${ThemeColors.textPrimary};
  margin-top: 8px;
`;

const CardRarity = styled.div<{ $rarity: string }>`
  font-size: 10px;
  color: ${(props) => ExtendedRarityConfig[props.$rarity]?.color || '#9CA3AF'};
  margin-top: 4px;
`;

const QuestionMark = styled.div`
  font-size: 48px;
  color: rgba(255, 255, 255, 0.5);
`;

const EmptyText = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 8px;
`;

const CardNumber = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  font-size: 10px;
  color: ${ThemeColors.textSecondary};
  background: rgba(0, 0, 0, 0.05);
  padding: 2px 6px;
  border-radius: 4px;
`;

const CardCollection: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const userData = storageService.getUserData();
  const allCharacters = getAllCharacters();

  // 计算收集统计
  const stats = useMemo(() => {
    const collected = userData.collectedCards.length;
    const total = allCharacters.length;
    const totalStars = userData.totalStars;

    // 按稀有度统计
    const byRarity: Record<string, number> = {
      common: 0,
      rare: 0,
      epic: 0,
      legendary: 0,
      bronze: 0,
      silver: 0,
      gold: 0,
      rainbow: 0,
      prismatic: 0,
    };

    userData.collectedCards.forEach((card) => {
      const char = getCharacterById(card.characterId);
      if (char) {
        byRarity[char.rarity] = (byRarity[char.rarity] || 0) + 1;
      }
    });

    return { collected, total, totalStars, byRarity };
  }, [userData, allCharacters]);

  // 获取最近收集的卡牌用于展示
  const recentCards = useMemo(() => {
    return userData.collectedCards
      .slice(-3) // 最近3张
      .map((card) => {
        const char = getCharacterById(card.characterId);
        return char
          ? {
              image: char.cardImage || char.robotImage,
              rarity: char.rarity,
            }
          : null;
      })
      .filter((card): card is NonNullable<typeof card> => card !== null);
  }, [userData.collectedCards]);

  // 检查角色是否已收集
  const isCollected = (characterId: string) => {
    return userData.collectedCards.some((card) => card.characterId === characterId);
  };

  // 获取收集信息
  const getCollectionInfo = (characterId: string) => {
    return userData.collectedCards.find((card) => card.characterId === characterId);
  };

  return (
    <Container>
      {/* 召唤器展示区域 */}
      {stats.collected > 0 && (
        <SummonerSection
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <CardSummoner mode="display" displayCards={recentCards} />
          <SummonerLabel>
            <SummonerTitle>炫卡召唤器</SummonerTitle>
            <SummonerCount>已收集 {stats.collected} 张炫卡</SummonerCount>
          </SummonerLabel>
        </SummonerSection>
      )}

      <Header>
        <Title>卡牌收集册</Title>
        <BackButton onClick={() => window.history.back()}>返回</BackButton>
      </Header>

      <StatsBar>
        <StatItem>
          <StatValue>{stats.collected} / {stats.total}</StatValue>
          <StatLabel>已收集</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>{stats.totalStars}</StatValue>
          <StatLabel>总星星</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>{stats.byRarity.legendary}</StatValue>
          <StatLabel>传说</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>{stats.byRarity.epic}</StatValue>
          <StatLabel>史诗</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>{stats.byRarity.rare}</StatValue>
          <StatLabel>稀有</StatLabel>
        </StatItem>
      </StatsBar>

      <CardsGrid>
        {allCharacters.map((character, index) => {
          const collected = isCollected(character.id);

          return (
            <CardSlot
              key={character.id}
              $collected={collected}
              onClick={() => collected && setSelectedCharacter(character)}
              whileHover={collected ? { scale: 1.05 } : {}}
              whileTap={collected ? { scale: 0.95 } : {}}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {collected ? (
                <>
                  <CardNumber>#{character.number}</CardNumber>
                  <CardImage
                    src={character.cardImage || character.robotImage}
                    alt={character.name}
                  />
                  <CardName>{character.name}</CardName>
                  <CardRarity $rarity={character.rarity}>
                    {ExtendedRarityConfig[character.rarity]?.name || '普通'}
                  </CardRarity>
                </>
              ) : (
                <>
                  <QuestionMark>?</QuestionMark>
                  <EmptyText>未收集</EmptyText>
                </>
              )}
            </CardSlot>
          );
        })}
      </CardsGrid>

      {/* 卡牌详情弹窗 */}
      <Modal
        isOpen={!!selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
        showCloseButton
      >
        {selectedCharacter && (
          <CardDetail
            character={selectedCharacter}
            collectedAt={getCollectionInfo(selectedCharacter.id)?.collectedAt}
            stars={getCollectionInfo(selectedCharacter.id)?.stars}
          />
        )}
      </Modal>
    </Container>
  );
};

export default CardCollection;