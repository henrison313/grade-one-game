/**
 * 图形配对游戏组件 (SHAPE_MATCH)
 * 功能：N×M 网格，点击翻开卡片，相同配对保持翻开，不同翻回
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import type { ShapeMatchingGameConfig, ShapeGameItem } from '@/types';
import { Shape } from '@/shared/components/shape/shape.component';

interface ShapeMatchingGameProps {
  config: ShapeMatchingGameConfig;
  onComplete: (stars: number, timeUsed: number) => void;
}

// 游戏容器
const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 400px;
`;

// 游戏网格
const GameGrid = styled.div<{ rows: number; cols: number }>`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
  grid-template-rows: repeat(${({ rows }) => rows}, 1fr);
  gap: 12px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  margin: 20px 0;
`;

// 卡片
const Card = styled(motion.div)`
  width: 80px;
  height: 80px;
  cursor: pointer;
  perspective: 1000px;
`;

// 卡片内容容器
const CardInner = styled(motion.div)<{ isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
  transition: transform 0.6s;
`;

// 卡片正面（背面）
const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  font-size: 32px;
`;

// 卡片背面（正面 - 显示图形）
const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

// 状态栏
const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  margin-bottom: 16px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const StatLabel = styled.span`
  font-size: 12px;
  color: #666;
`;

const StatValue = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

// 进度条
const ProgressContainer = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 12px;
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #34d399 100%);
`;

/**
 * 图形配对游戏组件
 */
export const ShapeMatchingGame: React.FC<ShapeMatchingGameProps> = ({
  config,
  onComplete,
}) => {
  const [cards, setCards] = useState<Array<{ id: string; item: ShapeGameItem; isFlipped: boolean; isMatched: boolean }>>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [timeUsed, setTimeUsed] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // 初始化卡片
  useEffect(() => {
    // 创建配对卡片（每对 2 张）
    const shuffledItems = [...config.items, ...config.items]
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({
        id: `card-${index}`,
        item,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffledItems);

    // 计时器
    const timer = setInterval(() => {
      setTimeUsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [config.items]);

  // 检查配对完成
  useEffect(() => {
    if (matchedPairs >= config.pairsCount && matchedPairs > 0) {
      setIsPlaying(false);
      // 计算星星：基础 50 星 - 用时 penalty - 额外移动 penalty
      const baseStars = 50;
      const timePenalty = Math.max(0, timeUsed - 60);
      const movePenalty = Math.max(0, moves - config.pairsCount * 2);
      const stars = Math.max(10, baseStars - timePenalty - movePenalty);
      setTimeout(() => onComplete(stars, timeUsed), 1000);
    }
  }, [matchedPairs, config.pairsCount, timeUsed, moves, onComplete]);

  // 处理卡片点击
  const handleCardClick = (index: number) => {
    if (!isPlaying) return;
    if (cards[index].isFlipped || cards[index].isMatched) return;
    if (flippedCards.length >= 2) return;

    // 翻开卡片
    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);
    setFlippedCards([...flippedCards, index]);

    // 检查配对
    if (flippedCards.length === 1) {
      setMoves((prev) => prev + 1);
      const firstIndex = flippedCards[0];
      const secondIndex = index;

      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      // 检查是否匹配（相同类型和颜色）
      if (
        firstCard.item.type === secondCard.item.type &&
        firstCard.item.color === secondCard.item.color
      ) {
        // 匹配成功
        setTimeout(() => {
          const matchedCards = [...cards];
          matchedCards[firstIndex].isMatched = true;
          matchedCards[secondIndex].isMatched = true;
          setCards(matchedCards);
          setMatchedPairs((prev) => prev + 1);
          setFlippedCards([]);
        }, 500);
      } else {
        // 匹配失败，翻回去
        setTimeout(() => {
          const resetCards = [...cards];
          resetCards[firstIndex].isFlipped = false;
          resetCards[secondIndex].isFlipped = false;
          setCards(resetCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const cols = config.items.length <= 6 ? 3 : 4;
  const progress = (matchedPairs / config.pairsCount) * 100;

  return (
    <GameContainer>
      <StatusBar>
        <StatItem>
          <StatLabel>配对</StatLabel>
          <StatValue>
            {matchedPairs}/{config.pairsCount}
          </StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>移动</StatLabel>
          <StatValue>{moves}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>时间</StatLabel>
          <StatValue>{timeUsed}秒</StatValue>
        </StatItem>
      </StatusBar>

      <ProgressContainer>
        <ProgressBar
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </ProgressContainer>

      <GameGrid rows={Math.ceil(config.items.length / cols)} cols={cols}>
        <AnimatePresence>
          {cards.map((card, index) => (
            <Card
              key={card.id}
              onClick={() => handleCardClick(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CardInner isFlipped={card.isFlipped}>
                <CardFront>?</CardFront>
                <CardBack>
                  <Shape
                    type={card.item.type}
                    color={card.item.color}
                    size="medium"
                  />
                </CardBack>
              </CardInner>
            </Card>
          ))}
        </AnimatePresence>
      </GameGrid>
    </GameContainer>
  );
};

export default ShapeMatchingGame;
