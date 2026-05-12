import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeColors } from '@/config';
import { useSound } from '@/shared/hooks';
import { Shape } from '@/shared/components';
import type { ShapeType, ShapeSortingGameConfig, ShapeMatchingGameConfig, FindShapeGameConfig } from '@/types';

// ============== 通用样式 ==============

const GameContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const GameTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${ThemeColors.textPrimary};
  text-align: center;
  margin-bottom: 16px;
`;

const Instructions = styled.p`
  font-size: 16px;
  color: ${ThemeColors.textSecondary};
  text-align: center;
  margin-bottom: 20px;
`;

const ProgressText = styled.div`
  font-size: 14px;
  color: ${ThemeColors.textSecondary};
  text-align: center;
  margin-top: 16px;
`;

// ============== 图形分类游戏 ==============

const SortingItemsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  margin-bottom: 20px;
`;

const SortingZonesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const SortingZone = styled(motion.div)<{ $active: boolean; $feedback?: 'correct' | 'wrong' }>`
  width: 120px;
  min-height: 120px;
  padding: 12px;
  background: ${(props) => {
    if (props.$feedback === 'correct') return 'rgba(16, 185, 129, 0.2)';
    if (props.$feedback === 'wrong') return 'rgba(239, 68, 68, 0.2)';
    return 'rgba(255, 255, 255, 0.8)';
  }};
  border: 3px dashed ${(props) => {
    if (props.$feedback === 'correct') return ThemeColors.success;
    if (props.$feedback === 'wrong') return ThemeColors.error;
    return props.$active ? ThemeColors.primary : ThemeColors.primaryLight;
  }};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s ease;
`;

const ZoneLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${ThemeColors.textPrimary};
  margin-bottom: 8px;
`;

const ZoneItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
`;

interface ShapeSortingGameProps {
  config: ShapeSortingGameConfig;
  onComplete: (score: number) => void;
  onProgress?: (correct: number, total: number) => void;
}

export const ShapeSortingGame: React.FC<ShapeSortingGameProps> = ({
  config,
  onComplete,
  onProgress,
}) => {
  const { playCorrect, playWrong } = useSound();
  const [sortedItems, setSortedItems] = useState<Record<string, string[]>>({});
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState<{ zoneId: string; correct: boolean } | null>(null);
  const [remainingItems, setRemainingItems] = useState(config.items);

  // 初始化分类区域
  useEffect(() => {
    const initial: Record<string, string[]> = {};
    config.dropZones.forEach((zone) => {
      initial[zone.id] = [];
    });
    setSortedItems(initial);
  }, [config.dropZones]);

  // 点击选择图形
  const handleItemClick = (itemId: string) => {
    if (selectedItemId === itemId) {
      setSelectedItemId(null);
    } else {
      setSelectedItemId(itemId);
    }
  };

  // 点击放置到分类框
  const handleZoneClick = useCallback(
    (zoneId: string) => {
      if (!selectedItemId) return;

      const item = remainingItems.find((i) => i.id === selectedItemId);
      if (!item) return;

      const zone = config.dropZones.find((z) => z.id === zoneId);
      if (!zone) return;

      const isCorrect = zone.acceptedTypes.includes(item.type);

      setAttempts((prev) => prev + 1);

      if (isCorrect) {
        playCorrect();
        setSortedItems((prev) => ({
          ...prev,
          [zoneId]: [...prev[zoneId], selectedItemId],
        }));
        setRemainingItems((prev) => prev.filter((i) => i.id !== selectedItemId));
        setCorrectCount((prev) => prev + 1);
        setFeedback({ zoneId, correct: true });
        onProgress?.(correctCount + 1, config.items.length);
      } else {
        playWrong();
        setFeedback({ zoneId, correct: false });
      }

      setSelectedItemId(null);
      setTimeout(() => setFeedback(null), 1000);
    },
    [selectedItemId, config.dropZones, remainingItems, playCorrect, playWrong, correctCount, config.items.length, onProgress]
  );

  // 完成检测
  useEffect(() => {
    if (remainingItems.length === 0 && config.items.length > 0) {
      const score = attempts > 0 ? Math.round((correctCount / attempts) * 100) : 100;
      setTimeout(() => onComplete(score), 500);
    }
  }, [remainingItems.length, config.items.length, correctCount, attempts, onComplete]);

  const getItemById = (itemId: string) => {
    return config.items.find((i) => i.id === itemId);
  };

  return (
    <GameContainer>
      <GameTitle>图形分类</GameTitle>
      <Instructions>点击选择图形，再点击分类框放置</Instructions>

      {/* 待分类的图形 */}
      <SortingItemsArea>
        <AnimatePresence>
          {remainingItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: selectedItemId === item.id ? 1.2 : 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              layout
            >
              <Shape
                type={item.type}
                color={item.color}
                size="small"
                selected={selectedItemId === item.id}
                onClick={() => handleItemClick(item.id)}
                showLabel={false}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </SortingItemsArea>

      {/* 分类区域 */}
      <SortingZonesContainer>
        {config.dropZones.map((zone) => (
          <SortingZone
            key={zone.id}
            $active={!!selectedItemId}
            $feedback={feedback?.zoneId === zone.id ? (feedback.correct ? 'correct' : 'wrong') : undefined}
            onClick={() => handleZoneClick(zone.id)}
            animate={
              feedback?.zoneId === zone.id
                ? feedback.correct
                  ? { scale: [1, 1.1, 1] }
                  : { x: [0, -10, 10, -10, 10, 0] }
                : {}
            }
          >
            <ZoneLabel>{zone.label}</ZoneLabel>
            <ZoneItems>
              {sortedItems[zone.id]?.map((itemId) => {
                const item = getItemById(itemId);
                if (!item) return null;
                return (
                  <Shape
                    key={itemId}
                    type={item.type}
                    color={item.color}
                    size="small"
                    showLabel={false}
                  />
                );
              })}
            </ZoneItems>
          </SortingZone>
        ))}
      </SortingZonesContainer>

      <ProgressText>
        已分类: {correctCount} / {config.items.length}
      </ProgressText>
    </GameContainer>
  );
};

// ============== 图形匹配游戏 ==============

const MatchingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  max-width: 400px;
  margin: 0 auto;
`;

const MatchingItem = styled(motion.div)<{ $matched: boolean }>`
  aspect-ratio: 1;
  perspective: 1000px;
  cursor: pointer;
`;

const MatchingItemInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
`;

const MatchingItemSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: white;
  border: 2px solid ${ThemeColors.primaryLight};
`;

const MatchingItemFront = styled(MatchingItemSide)`
  font-size: 32px;
  font-weight: 700;
  color: ${ThemeColors.primary};
`;

const MatchingItemBack = styled(MatchingItemSide)`
  transform: rotateY(180deg);
  background: white;
`;

const MatchingItemWrapper = styled.div<{ $matched: boolean }>`
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.$matched ? 0.3 : 1)};
`;

interface ShapeMatchingGameProps {
  config: ShapeMatchingGameConfig;
  onComplete: (score: number) => void;
  onProgress?: (matches: number, total: number) => void;
}

export const ShapeMatchingGame: React.FC<ShapeMatchingGameProps> = ({
  config,
  onComplete,
  onProgress,
}) => {
  const { playCorrect, playWrong } = useSound();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [matchedTypes, setMatchedTypes] = useState<Set<string>>(new Set());
  const [flippedIds, setFlippedIds] = useState<Set<string>>(new Set());
  const [attempts, setAttempts] = useState(0);
  const [canClick, setCanClick] = useState(true);

  const handleItemClick = (itemId: string, itemType: ShapeType) => {
    if (!canClick) return;
    if (matchedTypes.has(itemType)) return;
    if (selectedItems.includes(itemId)) return;

    const newSelected = [...selectedItems, itemId];
    setSelectedItems(newSelected);
    setFlippedIds((prev) => new Set([...prev, itemId]));

    if (newSelected.length === 2) {
      setCanClick(false);
      setAttempts((prev) => prev + 1);

      const [first, second] = newSelected;
      const firstItem = config.items.find((i) => i.id === first);
      const secondItem = config.items.find((i) => i.id === second);

      if (firstItem && secondItem && firstItem.type === secondItem.type && first !== second) {
        // 匹配成功
        playCorrect();
        setTimeout(() => {
          setMatchedTypes((prev) => new Set([...prev, firstItem.type]));
          setSelectedItems([]);
          setCanClick(true);
          onProgress?.(matchedTypes.size + 1, config.pairsCount);
        }, 500);
      } else {
        // 匹配失败
        playWrong();
        setTimeout(() => {
          setFlippedIds((prev) => {
            const newSet = new Set(prev);
            newSet.delete(first);
            newSet.delete(second);
            return newSet;
          });
          setSelectedItems([]);
          setCanClick(true);
        }, 1000);
      }
    }
  };

  // 完成检测
  useEffect(() => {
    if (matchedTypes.size === config.pairsCount && config.pairsCount > 0) {
      const score = attempts > 0 ? Math.round((config.pairsCount / attempts) * 100) : 100;
      setTimeout(() => onComplete(Math.min(score, 100)), 500);
    }
  }, [matchedTypes.size, config.pairsCount, attempts, onComplete]);

  return (
    <GameContainer>
      <GameTitle>图形配对</GameTitle>
      <Instructions>找出相同图形的一对</Instructions>

      <MatchingGrid>
        {config.items.map((item) => {
          const isFlipped = flippedIds.has(item.id);
          const isMatched = matchedTypes.has(item.type);

          return (
            <MatchingItem
              key={item.id}
              $matched={isMatched}
              onClick={() => handleItemClick(item.id, item.type)}
              animate={{
                rotateY: isFlipped ? 180 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <MatchingItemInner>
                <MatchingItemFront>
                  <MatchingItemWrapper $matched={isMatched}>?</MatchingItemWrapper>
                </MatchingItemFront>
                <MatchingItemBack>
                  <MatchingItemWrapper $matched={isMatched}>
                    <Shape
                      type={item.type}
                      color={item.color}
                      size="small"
                      showLabel={false}
                    />
                  </MatchingItemWrapper>
                </MatchingItemBack>
              </MatchingItemInner>
            </MatchingItem>
          );
        })}
      </MatchingGrid>

      <ProgressText>
        已匹配: {matchedTypes.size} / {config.pairsCount}
      </ProgressText>
    </GameContainer>
  );
};

// ============== 找图形游戏 ==============

const FindShapeTarget = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
`;

const TargetCount = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${ThemeColors.textPrimary};
`;

const FindShapeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  max-width: 400px;
  margin: 0 auto;
`;

const FindShapeItem = styled(motion.div)<{ $found: boolean; $wrong: boolean }>`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => {
    if (props.$found) return 'rgba(16, 185, 129, 0.2)';
    if (props.$wrong) return 'rgba(239, 68, 68, 0.2)';
    return 'white';
  }};
  border-radius: 12px;
  border: 2px solid
    ${(props) => {
      if (props.$found) return ThemeColors.success;
      if (props.$wrong) return ThemeColors.error;
      return ThemeColors.primaryLight;
    }};
  cursor: ${(props) => (props.$found ? 'default' : 'pointer')};
`;

const SHAPE_NAMES: Record<ShapeType, string> = {
  circle: '圆形',
  triangle: '三角形',
  square: '正方形',
  'square-big': '大方块',
  rectangle: '长方形',
  'triangle-big': '大三角形',
  'triangle-medium': '中三角形',
  'triangle-small': '小三角形',
  parallelogram: '平行四边形',
};

interface FindShapeGameProps {
  config: FindShapeGameConfig;
  onComplete: (score: number) => void;
  onProgress?: (found: number, total: number) => void;
}

export const FindShapeGame: React.FC<FindShapeGameProps> = ({
  config,
  onComplete,
  onProgress,
}) => {
  const { playCorrect, playWrong } = useSound();
  const [foundIds, setFoundIds] = useState<Set<string>>(new Set());
  const [wrongIds, setWrongIds] = useState<Set<string>>(new Set());

  const handleShapeClick = (shapeId: string, type: ShapeType) => {
    if (foundIds.has(shapeId)) return;

    if (type === config.targetShape) {
      playCorrect();
      setFoundIds((prev) => new Set([...prev, shapeId]));
      onProgress?.(foundIds.size + 1, config.targetCount);
    } else {
      playWrong();
      setWrongIds((prev) => new Set([...prev, shapeId]));
      setTimeout(() => {
        setWrongIds((prev) => {
          const newSet = new Set(prev);
          newSet.delete(shapeId);
          return newSet;
        });
      }, 500);
    }
  };

  // 完成检测
  useEffect(() => {
    if (foundIds.size === config.targetCount && config.targetCount > 0) {
      setTimeout(() => onComplete(100), 500);
    }
  }, [foundIds.size, config.targetCount, onComplete]);

  return (
    <GameContainer>
      <GameTitle>找图形</GameTitle>
      <Instructions>{config.instructions || `找出所有的${SHAPE_NAMES[config.targetShape]}！`}</Instructions>

      <FindShapeTarget>
        <Shape type={config.targetShape} color="blue" size="medium" showLabel={false} />
        <TargetCount>找到: {foundIds.size} / {config.targetCount}</TargetCount>
      </FindShapeTarget>

      <FindShapeGrid>
        {config.shapes.map((shape) => (
          <FindShapeItem
            key={shape.id}
            $found={foundIds.has(shape.id)}
            $wrong={wrongIds.has(shape.id)}
            onClick={() => handleShapeClick(shape.id, shape.type)}
            animate={
              foundIds.has(shape.id)
                ? { scale: [1, 1.2, 1] }
                : wrongIds.has(shape.id)
                ? { x: [0, -10, 10, -10, 10, 0] }
                : {}
            }
          >
            <Shape type={shape.type} color={shape.color} size="small" showLabel={false} />
          </FindShapeItem>
        ))}
      </FindShapeGrid>
    </GameContainer>
  );
};

// 导出默认组件
export default ShapeSortingGame;