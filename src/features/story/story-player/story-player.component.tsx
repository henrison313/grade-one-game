import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeColors, GameConfig } from '@/config';
import type { StorySegment } from '@/types';
import { speechService, storageService } from '@/services';

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

const VoiceTip = styled(motion.div)`
  position: absolute;
  top: 12px;
  left: 12px;
  right: 60px;
  padding: 10px 14px;
  background: rgba(255, 193, 7, 0.9);
  color: #333;
  border-radius: 10px;
  font-size: 13px;
  line-height: 1.5;
  z-index: 10;
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
  const [speechComplete, setSpeechComplete] = useState(false);
  const [showVoiceTip, setShowVoiceTip] = useState(false);
  const voiceTipDismissed = useRef(false);

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

  // 语音播放：对话和旁白自动朗读，等待播放完成
  useEffect(() => {
    if (!currentSegment || !autoPlay) return;

    // 只对 dialogue 和 narration 类型播放语音
    if (currentSegment.type !== 'dialogue' && currentSegment.type !== 'narration') {
      return;
    }

    // 停止之前的语音
    speechService.stop();

    // 重置语音完成状态
    setSpeechComplete(false);

    // 稍后开始播放，让打字机效果先开始
    const speechTimer = setTimeout(() => {
      // 检测是否缺少本地中文语音，显示一次性提示
      if (!voiceTipDismissed.current && speechService.needsLocalVoice()) {
        const userData = storageService.getUserData();
        if (!userData.settings?.voiceTipDismissed) {
          setShowVoiceTip(true);
        }
      }

      const text = currentSegment.text;

      // 如果文本为空，直接标记完成
      if (!text || !text.trim()) {
        setSpeechComplete(true);
        return;
      }

      speechService.speak(
        text,
        currentSegment.speaker,
        () => {
          console.log('[StoryPlayer] 语音播放完成:', text.substring(0, 20));
          // 语音播放完成，标记可以切换
          setSpeechComplete(true);
        }
      );
    }, 200);

    return () => {
      clearTimeout(speechTimer);
      speechService.stop();
    };
  }, [currentSegment, autoPlay]);

  // 组件卸载时停止语音
  useEffect(() => {
    return () => {
      speechService.stop();
    };
  }, []);

  // 自动播放：等待打字机效果和语音完成
  useEffect(() => {
    if (!autoPlay || isTyping || isLastSegment) return;

    // 等待语音完成后再切换
    if (!speechComplete) return;

    // 语音完成后使用较短的等待时间
    const timer = setTimeout(() => {
      nextSegment();
    }, GameConfig.storyAutoPlayInterval);

    return () => clearTimeout(timer);
  }, [autoPlay, isTyping, isLastSegment, currentSegment, speechComplete]);

  const nextSegment = useCallback(() => {
    speechService.stop();
    if (isLastSegment) {
      onComplete?.();
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [isLastSegment, onComplete]);

  const goToSegment = (index: number) => {
    speechService.stop();
    setCurrentIndex(index);
  };

  const handleSkip = () => {
    speechService.stop();
    onComplete?.();
  };

  const dismissVoiceTip = () => {
    setShowVoiceTip(false);
    voiceTipDismissed.current = true;
    const userData = storageService.getUserData();
    storageService.saveUserData({
      ...userData,
      settings: { ...userData.settings, voiceTipDismissed: true },
    });
  };

  if (!currentSegment) return null;

  return (
    <Container>
      <AnimatePresence>
        {showVoiceTip && (
          <VoiceTip
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onClick={dismissVoiceTip}
          >
            语音提示：当前浏览器缺少本地中文语音，故事朗读可能无法正常播放。建议安装 Windows 中文语音（设置→时间和语言→语音→添加"中文(简体，中国)"），或使用 Edge 浏览器。点击关闭
          </VoiceTip>
        )}
      </AnimatePresence>
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