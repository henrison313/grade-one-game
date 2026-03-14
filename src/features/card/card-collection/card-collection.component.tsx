import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeColors, RarityConfig } from '@/config';
import { storageService } from '@/services';
import { Button, Modal } from '@/shared/components';
import { getAllCharacters, getCharacterById } from '@/data/characters.data';
import CardDetail from '../card-detail/card-detail.component';
import type { Character } from '@/types';

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

const CardRarity = styled.div<{ $rarity: keyof typeof RarityConfig }>`
  font-size: 10px;
  color: ${(props) => RarityConfig[props.$rarity].color};
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
    const byRarity = {
      common: 0,
      rare: 0,
      epic: 0,
      legendary: 0,
    };

    userData.collectedCards.forEach((card) => {
      const char = getCharacterById(card.characterId);
      if (char) {
        byRarity[char.rarity]++;
      }
    });

    return { collected, total, totalStars, byRarity };
  }, [userData, allCharacters]);

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
                    {RarityConfig[character.rarity].name}
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