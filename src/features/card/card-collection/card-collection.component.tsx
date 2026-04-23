/**
 * 炫卡收集册组件 - 支持多形态分组展示
 * 布局：方案 C - 形态独立卡片 + 分组标记
 */

import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ThemeColors, RarityConfig } from '@/config';
import { storageService } from '@/services';
import { useSound } from '@/shared/hooks';
import { Button, Modal, CardSummoner } from '@/shared/components';
import { getCharacterById } from '@/data/characters.data';
import { getVariantsByCharacterId, getCharacterGroupColor, juliFengbaoVariants, baocheJiushiVariants, lieHuoXiuLuoVariants } from '@/data/character-variants.data';
import CardDetail from '../card-detail/card-detail.component';
import type { Character, CollectedCard, RarityLevel } from '@/types';

// 所有可收集的角色 ID
const allCollectibleCharacters = ['juli-fengbao', 'baoche-jiushi', 'liehuo-xiuluo'];

// 扩展稀有度配置
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

// 角色分组标题
const GroupHeader = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0 12px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  border-left: 4px solid ${(props) => props.$color};
`;

const GroupAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const GroupName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

const GroupCount = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-left: auto;
`;

// 形态卡片网格（同一组内）
const VariantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
`;

// 形态卡片
const VariantCard = styled(motion.div)<{ $collected: boolean; $groupColor: string }>`
  aspect-ratio: 3/4;
  background: ${(props) => props.$collected ? 'white' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 16px;
  border-left: 4px solid ${(props) => props.$groupColor};
  overflow: hidden;
  cursor: ${(props) => props.$collected ? 'pointer' : 'default'};
  box-shadow: ${(props) => props.$collected ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  opacity: ${(props) => props.$collected ? 1 : 0.5};
`;

const VariantImage = styled.img`
  width: 70%;
  height: 55%;
  object-fit: contain;
`;

const VariantName = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${ThemeColors.textPrimary};
  margin-top: 8px;
  text-align: center;
`;

const VariantLabel = styled.div`
  font-size: 11px;
  color: ${ThemeColors.textSecondary};
`;

const VariantRarity = styled.div<{ $rarity: RarityLevel }>`
  font-size: 10px;
  color: ${(props) => ExtendedRarityConfig[props.$rarity]?.color || '#9CA3AF'};
  margin-top: 4px;
  padding: 2px 8px;
  border-radius: 8px;
  background: ${(props) => ExtendedRarityConfig[props.$rarity]?.glow || 'transparent'};
`;

const EmptyPlaceholder = styled.div`
  width: 70%;
  height: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: rgba(255, 255, 255, 0.3);
`;

const EmptyText = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const CardCollection: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<CollectedCard | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<{
    image: string;
    displayName: string;
    rarity: RarityLevel;
  } | null>(null);
  const navigate = useNavigate();
  const userData = storageService.getUserData();
  const { playBGM, stopBGM } = useSound();

  useEffect(() => {
    playBGM('collection');
    return () => stopBGM();
  }, []);

  // 收集统计
  const stats = useMemo(() => {
    const collected = userData.collectedCards.length;
    const totalVariants = juliFengbaoVariants.length + baocheJiushiVariants.length + lieHuoXiuLuoVariants.length;
    const totalStars = userData.totalStars;

    const byRarity: Record<string, number> = {};
    userData.collectedCards.forEach((card) => {
      byRarity[card.rarity] = (byRarity[card.rarity] || 0) + 1;
    });

    return { collected, totalVariants, totalStars, byRarity };
  }, [userData]);

  // 按角色分组已收集的卡片
  const groupedCards = useMemo(() => {
    const groups: Record<string, CollectedCard[]> = {};

    userData.collectedCards.forEach((card) => {
      if (!groups[card.characterId]) {
        groups[card.characterId] = [];
      }
      groups[card.characterId].push(card);
    });

    return groups;
  }, [userData.collectedCards]);

  // 获取角色所有可能的形态
  const getCharacterVariants = (characterId: string) => {
    return getVariantsByCharacterId(characterId);
  };

  // 最近收集的卡片用于召唤器展示
  const recentCards = useMemo(() => {
    return userData.collectedCards
      .slice(-3)
      .map((card) => {
        const char = getCharacterById(card.characterId);
        const variant = getVariantsByCharacterId(card.characterId).find(
          (v) => v.variant === card.variant
        );
        const image = variant?.image || char?.robotImage || '';
        return {
          image,
          rarity: card.rarity,
        };
      })
      .filter((card) => card.image);
  }, [userData.collectedCards]);

  // 处理卡片点击
  const handleCardClick = (card: CollectedCard) => {
    const character = getCharacterById(card.characterId);
    if (character) {
      // 获取形态信息
      const variants = getVariantsByCharacterId(card.characterId);
      const variant = variants.find((v) => v.variant === card.variant);

      setSelectedCard(card);
      setSelectedCharacter(character);
      setSelectedVariant({
        image: variant?.image || character.robotImage,
        displayName: variant?.displayName || character.name,
        rarity: card.rarity,
      });
    }
  };

  return (
    <Container>
      {/* 召唤器展示 */}
      {stats.collected > 0 && (
        <SummonerSection
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
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
        <BackButton onClick={() => navigate('/levels')}>返回</BackButton>
      </Header>

      <StatsBar>
        <StatItem>
          <StatValue>{stats.collected}</StatValue>
          <StatLabel>已收集</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>{stats.totalStars}</StatValue>
          <StatLabel>总星星</StatLabel>
        </StatItem>
        {/* 动态显示所有有数据的稀有度 */}
        {Object.entries(ExtendedRarityConfig)
          .filter(([key]) => (stats.byRarity[key] || 0) > 0)
          .map(([key, config]) => (
            <StatItem key={key}>
              <StatValue style={{ color: config.color }}>
                {stats.byRarity[key] || 0}
              </StatValue>
              <StatLabel>{config.name}</StatLabel>
            </StatItem>
          ))}
      </StatsBar>

      {/* 按角色分组展示（显示所有可收集角色，包括未收集的） */}
      {allCollectibleCharacters.map((characterId) => {
        const character = getCharacterById(characterId);
        if (!character) return null;

        const groupColor = getCharacterGroupColor(characterId);
        const variants = getCharacterVariants(characterId);
        const collectedCards = groupedCards[characterId] || [];
        const collectedCount = collectedCards.length;

        return (
          <div key={characterId}>
            {/* 角色分组标题 */}
            <GroupHeader $color={groupColor}>
              <GroupAvatar>
                <img src={character.robotImage} alt={character.name} />
              </GroupAvatar>
              <GroupName>{character.name}</GroupName>
              <GroupCount>{collectedCount}/{variants.length} 形态</GroupCount>
            </GroupHeader>

            {/* 形态卡片 */}
            <VariantGrid>
              {/* 显示所有形态：已收集的显示图片，未收集的显示占位符 */}
              {variants.map((variant) => {
                const collectedCard = collectedCards.find((c) => c.variant === variant.variant);
                const isCollected = !!collectedCard;
                const variantImage = variant.image;
                const variantName = variant.displayName;

                if (isCollected && collectedCard) {
                  // 已收集：显示正常卡片
                  return (
                    <VariantCard
                      key={`${characterId}-${variant.variant}`}
                      $collected={true}
                      $groupColor={groupColor}
                      onClick={() => handleCardClick(collectedCard)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <VariantImage src={variantImage} alt={variantName} />
                      <VariantName>{variantName}</VariantName>
                      <VariantLabel>
                        {variant.variant === 'base' ? '基础' : variant.variant === 'flame' ? '火焰' : variant.variant === 'battle' ? '战地' : '终极'}
                      </VariantLabel>
                      <VariantRarity $rarity={variant.rarity}>
                        {ExtendedRarityConfig[variant.rarity]?.name || '普通'}
                      </VariantRarity>
                    </VariantCard>
                  );
                } else {
                  // 未收集：显示占位符
                  return (
                    <VariantCard
                      key={`${characterId}-${variant.variant}-empty`}
                      $collected={false}
                      $groupColor={groupColor}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                    >
                      <EmptyPlaceholder>?</EmptyPlaceholder>
                      <EmptyText>{variantName}</EmptyText>
                      <VariantLabel>
                        {variant.variant === 'base' ? '基础' : variant.variant === 'flame' ? '火焰' : variant.variant === 'battle' ? '战地' : '终极'}
                      </VariantLabel>
                      <VariantRarity $rarity={variant.rarity}>
                        未获得
                      </VariantRarity>
                    </VariantCard>
                  );
                }
              })}
            </VariantGrid>
          </div>
        );
      })}

      {/* 无卡片提示 */}
      {userData.collectedCards.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: 'white' }}>
          <p style={{ fontSize: 18 }}>还没有收集任何炫卡</p>
          <p style={{ fontSize: 14, marginTop: 8 }}>完成关卡即可获得炫卡！</p>
        </div>
      )}

      {/* 卡牌详情弹窗 */}
      <Modal
        isOpen={!!selectedCharacter && !!selectedCard}
        onClose={() => {
          setSelectedCharacter(null);
          setSelectedCard(null);
          setSelectedVariant(null);
        }}
        showCloseButton
      >
        {selectedCharacter && selectedCard && selectedVariant && (
          <CardDetail
            character={selectedCharacter}
            variantImage={selectedVariant.image}
            variantName={selectedVariant.displayName}
            variantRarity={selectedVariant.rarity}
            collectedAt={selectedCard.collectedAt}
            stars={selectedCard.stars}
          />
        )}
      </Modal>
    </Container>
  );
};

export default CardCollection;