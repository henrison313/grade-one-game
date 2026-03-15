import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeColors } from '@/config';
import { useSound } from '@/shared/hooks';
import type { LinkQuestionData } from '@/types';

interface LinkGameProps {
  question: LinkQuestionData;
  onAnswer: (score: number) => void;
  onProgress?: (correct: number, total: number) => void;
}

const GameContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const GameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const GameTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${ThemeColors.textPrimary};
`;

const TimerBadge = styled.div<{ $critical: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  background: ${(props) => (props.$critical ? 'rgba(239, 68, 68, 0.1)' : 'rgba(79, 70, 229, 0.1)')};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.$critical ? ThemeColors.error : ThemeColors.primary)};
`;

const ProgressBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 8px;
  font-size: 14px;
  color: ${ThemeColors.success};
`;

const PairsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  max-width: 500px;
  margin: 0 auto;
`;

const LinkCard = styled(motion.div)<{ $matched: boolean; $selected: boolean }>`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => {
    if (props.$matched) return 'rgba(16, 185, 129, 0.2)';
    if (props.$selected) return 'rgba(79, 70, 229, 0.1)';
    return 'white';
  }};
  border: 3px solid
    ${(props) => {
      if (props.$matched) return ThemeColors.success;
      if (props.$selected) return ThemeColors.primary;
      return ThemeColors.primaryLight;
    }};
  border-radius: 16px;
  cursor: ${(props) => (props.$matched ? 'default' : 'pointer')};
  font-size: 18px;
  font-weight: 600;
  color: ${ThemeColors.textPrimary};
`;

const MatchIcon = styled.span`
  font-size: 24px;
  color: ${ThemeColors.success};
`;

const CardText = styled.span`
  text-align: center;
  padding: 4px;
`;

const FeedbackOverlay = styled(motion.div)<{ $type: 'correct' | 'wrong' }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 24px;
  font-weight: 700;
  color: white;
  background: ${(props) => (props.$type === 'correct' ? ThemeColors.success : ThemeColors.error)};
  z-index: 100;
`;

const GameResult = styled(motion.div)`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 200;
`;

const ResultContent = styled.div`
  background: white;
  padding: 32px;
  border-radius: 24px;
  text-align: center;
`;

const ResultTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${ThemeColors.textPrimary};
  margin-bottom: 16px;
`;

const Stars = styled.span`
  color: ${ThemeColors.star};
  font-size: 32px;
`;

const Score = styled.span`
  display: block;
  font-size: 24px;
  color: ${ThemeColors.success};
  margin-top: 8px;
`;

const RetryButton = styled(motion.button)`
  margin-top: 24px;
  padding: 12px 32px;
  background: linear-gradient(135deg, ${ThemeColors.primary} 0%, ${ThemeColors.primaryLight} 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const LinkGame: React.FC<LinkGameProps> = ({
  question,
  onAnswer,
  onProgress,
}) => {
  const { playCorrect, playWrong } = useSound();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<Set<string>>(new Set());
  const [pairs, setPairs] = useState(question.pairs);
  const [timeLeft, setTimeLeft] = useState(question.timeLimit || 60);
  const [timerRunning, setTimerRunning] = useState(true);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  // 打乱配对顺序
  useEffect(() => {
    const shuffled = [...question.pairs].sort(() => Math.random() - 0.5);
    setPairs(shuffled);
  }, [question.pairs]);

  // 计时器
  useEffect(() => {
    if (timerRunning && timeLeft > 0 && !isFinished) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !isFinished) {
      setTimerRunning(false);
      finishGame(0);
    }
  }, [timerRunning, timeLeft, isFinished]);

  // 完成检测
  useEffect(() => {
    if (matchedIds.size === pairs.length && pairs.length > 0 && !isFinished) {
      setTimerRunning(false);
      const score = Math.round((matchedIds.size / pairs.length) * 100);
      finishGame(score);
    }
  }, [matchedIds.size, pairs.length, isFinished]);

  const handleCardClick = (pairId: string) => {
    if (matchedIds.has(pairId) || isFinished) return;

    if (selectedId === pairId) {
      setSelectedId(null);
    } else if (!selectedId) {
      setSelectedId(pairId);
    } else {
      // 检查配对
      const selectedPair = pairs.find((p) => p.id === selectedId);
      const currentPair = pairs.find((p) => p.id === pairId);

      if (selectedPair && currentPair && selectedPair.left === currentPair.left) {
        // 匹配成功
        playCorrect();
        setFeedback('correct');
        setTimeout(() => {
          setMatchedIds((prev) => new Set([...prev, selectedId, pairId]));
          setSelectedId(null);
          setFeedback(null);
          onProgress?.((matchedIds.size + 2) / 2, pairs.length / 2);
        }, 500);
      } else {
        // 匹配失败
        playWrong();
        setFeedback('wrong');
        setTimeout(() => {
          setSelectedId(null);
          setFeedback(null);
        }, 800);
      }
    }
  };

  const finishGame = (score: number) => {
    setIsFinished(true);
    onAnswer(score);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const resetGame = () => {
    const shuffled = [...question.pairs].sort(() => Math.random() - 0.5);
    setPairs(shuffled);
    setMatchedIds(new Set());
    setSelectedId(null);
    setTimeLeft(question.timeLimit || 60);
    setTimerRunning(true);
    setIsFinished(false);
  };

  return (
    <GameContainer>
      <GameHeader>
        <TimerBadge $critical={timeLeft <= 10}>
          <span>⏱️</span>
          <span>{formatTime(timeLeft)}</span>
        </TimerBadge>
        <ProgressBadge>
          已匹配: {matchedIds.size / 2} / {pairs.length / 2}
        </ProgressBadge>
      </GameHeader>

      <GameTitle>{question.question}</GameTitle>

      <PairsGrid>
        {pairs.map((pair, index) => (
          <LinkCard
            key={pair.id}
            $matched={matchedIds.has(pair.id)}
            $selected={selectedId === pair.id}
            onClick={() => handleCardClick(pair.id)}
            whileHover={!matchedIds.has(pair.id) ? { scale: 1.02 } : {}}
            whileTap={!matchedIds.has(pair.id) ? { scale: 0.95 } : {}}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            {matchedIds.has(pair.id) ? (
              <MatchIcon>✓</MatchIcon>
            ) : (
              <CardText>{pair.left}</CardText>
            )}
          </LinkCard>
        ))}
      </PairsGrid>

      <AnimatePresence>
        {feedback === 'correct' && (
          <FeedbackOverlay
            $type="correct"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            正确！
          </FeedbackOverlay>
        )}
        {feedback === 'wrong' && (
          <FeedbackOverlay
            $type="wrong"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            错误！
          </FeedbackOverlay>
        )}
      </AnimatePresence>

      {isFinished && (
        <GameResult
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ResultContent>
            <ResultTitle>
              {timeLeft > 0 ? (
                <>
                  <Stars>{'★'.repeat(3)}</Stars>
                  <Score>{Math.round((matchedIds.size / pairs.length) * 100)}分</Score>
                </>
              ) : (
                <>
                  <Stars>⏳</Stars>
                  <Score>时间到!</Score>
                </>
              )}
            </ResultTitle>
            <RetryButton
              onClick={resetGame}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              再玩一次
            </RetryButton>
          </ResultContent>
        </GameResult>
      )}
    </GameContainer>
  );
};

export default LinkGame;