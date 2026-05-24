/**
 * 炫卡收集册组件 - 支持多形态分组展示
 * 布局：方案 A（角色徽章墙）和 方案 C（形态独立卡片）
 */

import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ThemeColors, RarityConfig } from '@/config';
import { storageService } from '@/services';
import { useSound } from '@/shared/hooks';
import { Button, Modal, CardSummoner } from '@/shared/components';
import { getCharacterById } from '@/data/characters.data';
import { getVariantsByCharacterId, getCharacterGroupColor, allCharacterVariants, type VariantStats } from '@/data/character-variants.data';
import CardDetail from '../card-detail/card-detail.component';
import type { Character, CollectedCard, RarityLevel } from '@/types';
import { DifficultyLevel } from '@/types';

// 布局类型
type LayoutMode = 'A' | 'C';

// 所有可收集的角色 ID - 包含全部炫卡斗士（含隐藏关卡）
const allCollectibleCharacters = [
  // 第一单元：图形与几何
  'juli-fengbao',      // 001: 巨力风暴 - 1-1
  'baoche-jiushi',     // 002: 急救卫士 - 1-2
  'liehuo-xiuluo',     // 003: 烈火修罗 - 1-3
  // 第二单元：20以内退位减法
  'anying-tegong',     // 004: 暗影特工 - 2-1
  'tiebi-jueshi',      // 005: 铁臂爵士 - 2-2
  'penshi-jialun',     // 006: 喷射加仑 - 2-3
  'liebian-qishi',     // 007: 裂变骑士 - 2-4
  // 第三单元：100以内数的认识
  'baolie-zhongka',    // 008: 暴烈重卡 - 3-1
  'shenhai-tianmao',   // 009: 深海天锚 - 3-2
  'zhongli-jingang',   // 010: 重力金刚 - 3-3
  'xuantie-zhanshen',  // 011: 玄铁战神 - 3-4
  // 第四单元：100以内口算加减法
  'xuanlan-shandian-s', // 012: 炫蓝闪电S - 4-1
  'yanlong-zhanshen',  // 焰龙战神 - 4-2
  'pili-huoying',      // 霹雳火影 - 4-3
  // 第五单元：100以内笔算加减法
  'gangbi-lishi',      // 钢臂力士 - 5-1/5-2
  'liekong-hanjiang',  // 猎空悍将 - 5-3
  // 第六单元：BOSS关
  'xingji-youxia',     // 016: 星际游侠 - 6
  // 第七单元：欢乐购物街
  'baoxuan-luoke',     // 017: 爆旋洛克 - 7-1
  'shenhai-bawang',    // 018: 深海霸王 - 7-2
  // 第八单元：找规律
  'yinyi-qishi',       // 银翼骑士 - 8
  // 第九单元：期末综合
  'zhongzhang-chihunwang', // 重装赤魂王 - 9
  // 隐藏关卡
  'chaoxuan-dianguangwang', // H1: 超炫电光王
  'xuanlan-leitingwang',    // H2: 炫蓝雷霆王
];

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

// 布局切换按钮组
const LayoutSwitcher = styled.div`
  display: flex;
  gap: 8px;
  margin-left: auto;
`;

const LayoutButton = styled.button<{ $active: boolean }>`
  padding: 8px 16px;
  border: 2px solid ${(props) => props.$active ? ThemeColors.primary : 'rgba(255,255,255,0.5)'};
  background: ${(props) => props.$active ? ThemeColors.primary : 'rgba(255,255,255,0.2)'};
  color: ${(props) => props.$active ? 'white' : 'rgba(255,255,255,0.8)'};
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.$active ? ThemeColors.primary : 'rgba(255,255,255,0.3)'};
  }
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

// ========== 方案A: 徽章墙样式 ==========
const BadgeWall = styled(motion.div)`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const BadgeGroup = styled(motion.div)<{ $collected: boolean }>`
  width: 180px;
  height: 200px;
  background: ${(props) => props.$collected ? 'white' : 'rgba(255,255,255,0.3)'};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  box-shadow: ${(props) => props.$collected ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'};
  opacity: ${(props) => props.$collected ? 1 : 0.6};
`;

const BadgeCenter = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  margin-bottom: 12px;
`;

const BadgeAvatar = styled.div<{ $collected: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) => props.$collected
    ? 'linear-gradient(135deg, #FFD700, #FFA500)'
    : 'rgba(255,255,255,0.3)'};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const VariantMiniCard = styled(motion.div)<{ $collected: boolean; $angle: number }>`
  position: absolute;
  width: 40px;
  height: 50px;
  background: ${(props) => props.$collected ? 'white' : 'rgba(255,255,255,0.5)'};
  border-radius: 8px;
  border: 2px solid ${(props) => props.$collected ? '#E5E7EB' : 'rgba(255,255,255,0.3)'};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: ${(props) => props.$collected ? 'pointer' : 'default'};
  box-shadow: ${(props) => props.$collected ? '0 2px 6px rgba(0,0,0,0.1)' : 'none'};
  opacity: ${(props) => props.$collected ? 1 : 0.5};
  z-index: 3;
  transition: box-shadow 0.2s, transform 0.2s;
  /* 环绕布局：基于角度定位 */
  top: 50%;
  left: 50%;
  transform: ${(props) => {
    const radius = 55; // 环绕半径
    const angleRad = (props.$angle - 90) * Math.PI / 180; // -90 让0度在顶部
    const x = Math.cos(angleRad) * radius;
    const y = Math.sin(angleRad) * radius;
    return `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  }};

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transform: ${(props) => {
      const radius = 55;
      const angleRad = (props.$angle - 90) * Math.PI / 180;
      const x = Math.cos(angleRad) * radius;
      const y = Math.sin(angleRad) * radius;
      return `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.1)`;
    }};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const EmptyMiniCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #9CA3AF;
`;

const BadgeName = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${ThemeColors.textPrimary};
  text-align: center;
`;

const BadgeCount = styled.div`
  font-size: 11px;
  color: ${ThemeColors.textSecondary};
  margin-top: 2px;
`;

const CardCollection: React.FC = () => {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('C');
  const [selectedCard, setSelectedCard] = useState<CollectedCard | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<{
    image: string;
    displayName: string;
    rarity: RarityLevel;
    stats?: VariantStats;
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
    const totalVariants = allCharacterVariants.length;
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

  // 获取角色所有可能的形态（如果没有形态配置，则根据难度创建默认形态）
  const getCharacterVariants = (characterId: string) => {
    const variants = getVariantsByCharacterId(characterId);
    
    // 如果没有形态配置，使用角色的 robotImage 创建三个难度的默认形态
    if (variants.length === 0) {
      const character = getCharacterById(characterId);
      if (character) {
        return [
          {
            characterId,
            variant: 'base' as const,
            rarity: 'rare' as const,
            image: character.robotImage,
            difficulty: DifficultyLevel.EASY,
            displayName: character.name,
          },
          {
            characterId,
            variant: 'flame' as const,
            rarity: 'gold' as const,
            image: character.robotImage,  // 使用同一张图片，后续可替换
            difficulty: DifficultyLevel.MEDIUM,
            displayName: `${character.name}·进阶`,
          },
          {
            characterId,
            variant: 'ultimate' as const,
            rarity: 'rainbow' as const,
            image: character.robotImage,  // 使用同一张图片，后续可替换
            difficulty: DifficultyLevel.HARD,
            displayName: `${character.name}·终极`,
          },
        ];
      }
    }
    
    return variants;
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
        stats: variant?.stats,
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
        <LayoutSwitcher>
          <LayoutButton $active={layoutMode === 'A'} onClick={() => setLayoutMode('A')}>
            徽章墙
          </LayoutButton>
          <LayoutButton $active={layoutMode === 'C'} onClick={() => setLayoutMode('C')}>
            卡片
          </LayoutButton>
        </LayoutSwitcher>
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

      {/* 方案A: 徽章墙布局 */}
      <AnimatePresence mode="wait">
        {layoutMode === 'A' && (
          <BadgeWall
            key="badge-wall"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {allCollectibleCharacters.map((characterId) => {
              const character = getCharacterById(characterId);
              if (!character) return null;

              const variants = getCharacterVariants(characterId);
              const collectedCards = groupedCards[characterId] || [];
              const collectedCount = collectedCards.length;
              const hasCollected = collectedCount > 0;

              return (
                <BadgeGroup
                  key={characterId}
                  $collected={hasCollected}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <BadgeCenter>
                    {/* 中心角色头像 */}
                    <BadgeAvatar $collected={hasCollected}>
                      <img src={character.robotImage} alt={character.name} />
                    </BadgeAvatar>
                    {/* 形态小卡片环绕 */}
                    {variants.map((variant, index) => {
                      const collectedCard = collectedCards.find((c) => c.variant === variant.variant);
                      const isCollected = !!collectedCard;
                      // 三个形态均匀环绕：顶部、右下、左下
                      const angle = 90 + index * 120;

                      return (
                        <VariantMiniCard
                          key={variant.variant}
                          $collected={isCollected}
                          $angle={angle}
                          onClick={(e) => {
                            if (!isCollected || !collectedCard) return;
                            e.stopPropagation();
                            handleCardClick(collectedCard);
                          }}
                        >
                          {isCollected ? (
                            <img src={variant.image} alt={variant.displayName} />
                          ) : (
                            <EmptyMiniCard>?</EmptyMiniCard>
                          )}
                        </VariantMiniCard>
                      );
                    })}
                  </BadgeCenter>
                  <BadgeName>{character.name}</BadgeName>
                  <BadgeCount>{collectedCount}/{variants.length} 形态</BadgeCount>
                </BadgeGroup>
              );
            })}
          </BadgeWall>
        )}

        {/* 方案C: 形态独立卡片布局 */}
        {layoutMode === 'C' && allCollectibleCharacters.map((characterId) => {
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
      </AnimatePresence>

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
            variantStats={selectedVariant.stats}
            collectedAt={selectedCard.collectedAt}
            stars={selectedCard.stars}
          />
        )}
      </Modal>
    </Container>
  );
};

export default CardCollection;