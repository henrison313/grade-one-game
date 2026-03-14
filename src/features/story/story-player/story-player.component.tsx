import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeColors, GameConfig } from '@/config';
import type { StorySegment } from '@/types';

interface StoryPlayerProps {
  segments: StorySegment[];
  onComplete?: () => void;
  autoPlay?: boolean;
  showSkip?: boolean;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 24px;
  overflow: hidden;
  padding: 24px;
`;

const SegmentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 250px;
`;

const SpeakerImage = styled(motion.img)`
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 50%;
  margin-bottom: 16px;
  border: 3px solid rgba(255, 255, 255, 0.3);
`;

const SpeakerName = styled(motion.div)`
  font-size: 16px;
  font-weight: 600;
  color: ${ThemeColors.secondary};
  margin-bottom: 12px;
`;

const StoryText = styled(motion.p)`
  font-size: 18px;
  color: white;
  text-align: center;
  line-height: 1.8;
  max-width: 80%;
`;

const ActionText = styled(motion.p)`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
  text-align: center;
`;

const NavigationBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) =>
    props.$active ? ThemeColors.secondary : 'rgba(255, 255, 255, 0.3)'};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${ThemeColors.secondaryLight};
  }
`;

const SkipButton = styled(motion.button)`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
`;

const ContinueButton = styled(motion.button)`
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

const segmentVariants = {
  enter: {
    opacity: 0,
    y: 20,
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

const StoryPlayer: React.FC<StoryPlayerProps> = ({
  segments,
  onComplete,
  autoPlay = true,
  showSkip = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  const currentSegment = segments[currentIndex];
  const isLastSegment = currentIndex === segments.length - 1;

  // 打字机效果
  useEffect(() => {
    if (!currentSegment || !autoPlay) return;

    setIsTyping(true);
    setDisplayedText('');

    const text = currentSegment.text;
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentSegment, autoPlay]);

  // 自动播放
  useEffect(() => {
    if (!autoPlay || isTyping || isLastSegment) return;

    const duration = currentSegment?.duration || GameConfig.storyAutoPlayInterval;
    const timer = setTimeout(() => {
      nextSegment();
    }, duration);

    return () => clearTimeout(timer);
  }, [autoPlay, isTyping, isLastSegment, currentSegment]);

  const nextSegment = useCallback(() => {
    if (isLastSegment) {
      onComplete?.();
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [isLastSegment, onComplete]);

  const goToSegment = (index: number) => {
    setCurrentIndex(index);
  };

  const handleSkip = () => {
    onComplete?.();
  };

  if (!currentSegment) return null;

  return (
    <Container>
      {showSkip && (
        <SkipButton
          onClick={handleSkip}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          跳过
        </SkipButton>
      )}

      <AnimatePresence mode="wait">
        <SegmentContainer
          key={currentIndex}
          variants={segmentVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          {currentSegment.speakerImage && (
            <SpeakerImage
              src={currentSegment.speakerImage}
              alt={currentSegment.speaker}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          )}

          {currentSegment.speaker && (
            <SpeakerName>{currentSegment.speaker}</SpeakerName>
          )}

          {currentSegment.type === 'action' ? (
            <ActionText>{displayedText || currentSegment.text}</ActionText>
          ) : (
            <StoryText>
              {autoPlay ? displayedText : currentSegment.text}
              {isTyping && <span>|</span>}
            </StoryText>
          )}

          {isLastSegment && !isTyping && (
            <ContinueButton
              onClick={() => onComplete?.()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              开始挑战
            </ContinueButton>
          )}
        </SegmentContainer>
      </AnimatePresence>

      {segments.length > 1 && (
        <NavigationBar>
          {segments.map((_, index) => (
            <Dot
              key={index}
              $active={index === currentIndex}
              onClick={() => goToSegment(index)}
            />
          ))}
        </NavigationBar>
      )}
    </Container>
  );
};

export default StoryPlayer;