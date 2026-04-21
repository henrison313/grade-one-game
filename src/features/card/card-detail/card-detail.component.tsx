import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeColors, RarityConfig } from '@/config';
import type { Character, RarityLevel } from '@/types';

interface CardDetailProps {
  character: Character;
  /** 形态图片路径（优先使用） */
  variantImage?: string;
  /** 形态名称（优先使用） */
  variantName?: string;
  /** 形态稀有度（优先使用） */
  variantRarity?: RarityLevel;
  collectedAt?: string;
  stars?: number;
  onClose?: () => void;
}

const CardContainer = styled(motion.div)`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const CardHeader = styled.div<{ $rarity: keyof typeof RarityConfig }>`
  background: linear-gradient(145deg, ${(props) => RarityConfig[props.$rarity].color} 0%, ${(props) => RarityConfig[props.$rarity].glow} 100%);
  padding: 20px;
  text-align: center;
  position: relative;
`;

const CardNumber = styled.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`;

const CardRarity = styled.span`
  display: block;
  font-size: 12px;
  color: white;
  margin-top: 4px;
  font-weight: 600;
`;

const CardImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -40px;
  position: relative;
  z-index: 1;
`;

const CardImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
`;

const CardBody = styled.div`
  padding: 24px;
`;

const CardName = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${ThemeColors.textPrimary};
  text-align: center;
  margin-bottom: 8px;
`;

const CardTitle = styled.p`
  font-size: 16px;
  color: ${ThemeColors.textSecondary};
  text-align: center;
  margin-bottom: 20px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: ${ThemeColors.textSecondary};
  line-height: 1.6;
  margin-bottom: 20px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 20px;
`;

const StatCard = styled.div`
  background: #f9fafb;
  padding: 12px;
  border-radius: 12px;
  text-align: center;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: ${ThemeColors.textSecondary};
  margin-bottom: 4px;
`;

const StatValue = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${ThemeColors.textPrimary};
`;

const SkillsSection = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${ThemeColors.textPrimary};
  margin-bottom: 12px;
`;

const SkillItem = styled.div`
  background: #f9fafb;
  padding: 12px;
  border-radius: 12px;
  margin-bottom: 8px;
`;

const SkillName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${ThemeColors.primary};
  margin-bottom: 4px;
`;

const SkillDescription = styled.div`
  font-size: 12px;
  color: ${ThemeColors.textSecondary};
`;

const KnowledgeSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const KnowledgeTag = styled.span`
  padding: 6px 12px;
  background: rgba(79, 70, 229, 0.1);
  color: ${ThemeColors.primary};
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
`;

const CardFooter = styled.div`
  padding: 16px 24px;
  background: #f9fafb;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CollectedInfo = styled.div`
  font-size: 12px;
  color: ${ThemeColors.textSecondary};
`;

const StarsInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${ThemeColors.star};
`;

const CardDetail: React.FC<CardDetailProps> = ({
  character,
  variantImage,
  variantName,
  variantRarity,
  collectedAt,
  stars,
  onClose: _onClose,
}) => {
  // 优先使用形态参数，回退到角色基础属性
  const displayImage = variantImage || character.cardImage || character.robotImage;
  const displayName = variantName || character.name;
  const displayRarity = variantRarity || character.rarity;

  return (
    <CardContainer
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <CardHeader $rarity={displayRarity}>
        <CardNumber>#{character.number}</CardNumber>
        <CardRarity>{RarityConfig[displayRarity]?.name || '普通'}</CardRarity>
      </CardHeader>

      <CardImageWrapper>
        <CardImage
          src={displayImage}
          alt={displayName}
        />
      </CardImageWrapper>

      <CardBody>
        <CardName>{displayName}</CardName>
        <CardTitle>{character.title}</CardTitle>
        <CardDescription>{character.description}</CardDescription>

        <StatsGrid>
          <StatCard>
            <StatLabel>身高</StatLabel>
            <StatValue>{character.stats.height}</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>体重</StatLabel>
            <StatValue>{character.stats.weight}</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>速度</StatLabel>
            <StatValue>{character.stats.speed}</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>力量</StatLabel>
            <StatValue>{character.stats.power}</StatValue>
          </StatCard>
        </StatsGrid>

        {character.skills.length > 0 && (
          <SkillsSection>
            <SectionTitle>技能</SectionTitle>
            {character.skills.map((skill, index) => (
              <SkillItem key={index}>
                <SkillName>{skill.name}</SkillName>
                <SkillDescription>{skill.description}</SkillDescription>
              </SkillItem>
            ))}
          </SkillsSection>
        )}

        {character.knowledge.length > 0 && (
          <>
            <SectionTitle>关联知识</SectionTitle>
            <KnowledgeSection>
              {character.knowledge.map((k, index) => (
                <KnowledgeTag key={index}>{k}</KnowledgeTag>
              ))}
            </KnowledgeSection>
          </>
        )}
      </CardBody>

      {(collectedAt || stars) && (
        <CardFooter>
          {collectedAt && (
            <CollectedInfo>
              收集于 {new Date(collectedAt).toLocaleDateString()}
            </CollectedInfo>
          )}
          {stars && (
            <StarsInfo>
              ⭐ {stars}
            </StarsInfo>
          )}
        </CardFooter>
      )}
    </CardContainer>
  );
};

export default CardDetail;