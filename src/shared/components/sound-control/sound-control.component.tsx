import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';
import { ThemeColors } from '@/config';
import { useSound } from '@/shared/hooks';
import type { SoundSettings } from '@/types';

interface SoundControlProps {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Panel = styled(motion.div)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 24px;
  padding: 32px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  color: white;
`;

const Title = styled.h2`
  margin: 0 0 24px 0;
  font-size: 24px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const SettingItem = styled.div`
  margin-bottom: 20px;
`;

const SettingLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
`;

const SettingIcon = styled.span`
  font-size: 20px;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Slider = styled.input`
  flex: 1;
  height: 8px;
  -webkit-appearance: none;
  appearance: none;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const VolumeValue = styled.span`
  min-width: 40px;
  text-align: right;
  font-size: 14px;
  font-weight: 600;
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ToggleLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
`;

const Toggle = styled.button<{ $active: boolean }>`
  width: 56px;
  height: 32px;
  border-radius: 16px;
  background: ${(props) => (props.$active ? ThemeColors.success : 'rgba(255, 255, 255, 0.3)')};
  border: none;
  cursor: pointer;
  position: relative;
  transition: background 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    top: 4px;
    left: ${(props) => (props.$active ? '28px' : '4px')};
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    transition: left 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SaveButton = styled(motion.button)`
  width: 100%;
  padding: 14px;
  margin-top: 24px;
  background: linear-gradient(135deg, ${ThemeColors.success} 0%, ${ThemeColors.successLight} 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 0;
`;

export const SoundControl: React.FC<SoundControlProps> = ({ isOpen, onClose }) => {
  const { getSettings, setVolume, setEnabled, play } = useSound();
  const [localSettings, setLocalSettings] = useState<SoundSettings>(getSettings());

  // 只在组件首次打开时加载设置
  useEffect(() => {
    if (isOpen) {
      setLocalSettings(getSettings());
    }
  }, [isOpen]);

  const handleToggle = useCallback(
    (key: keyof SoundSettings) => {
      const newValue = !localSettings[key];
      setLocalSettings((prev) => ({ ...prev, [key]: newValue }));
      setEnabled(key === 'enabled' ? newValue : localSettings.enabled);
    },
    [localSettings, setEnabled]
  );

  const handleVolumeChange = useCallback(
    (key: 'sfxVolume' | 'bgmVolume' | 'speechVolume', value: number) => {
      setLocalSettings((prev) => ({ ...prev, [key]: value }));
      setVolume(key === 'sfxVolume' ? 'sfx' : key === 'bgmVolume' ? 'bgm' : 'speech', value);
      // 播放测试音效
      if (key === 'sfxVolume') {
        play('click');
      }
    },
    [play, setVolume]
  );

  const handleSave = useCallback(() => {
    // 保存时确保所有设置都已应用
    setEnabled(localSettings.enabled);
    setVolume('sfx', localSettings.sfxVolume);
    setVolume('bgm', localSettings.bgmVolume);
    setVolume('speech', localSettings.speechVolume);
    onClose();
  }, [localSettings, setEnabled, setVolume, onClose]);

  const formatPercent = (value: number) => `${Math.round(value * 100)}%`;

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <Panel
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </CloseButton>

            <Title>
              <span>🔊</span> 音效设置
            </Title>

            {/* 总开关 */}
            <SettingItem>
              <ToggleContainer>
                <ToggleLabel>
                  <SettingIcon>🔊</SettingIcon>
                  音效总开关
                </ToggleLabel>
                <Toggle
                  $active={localSettings.enabled}
                  onClick={() => handleToggle('enabled')}
                />
              </ToggleContainer>
            </SettingItem>

            <Divider />

            {/* BGM 音量 */}
            <SettingItem>
              <SettingLabel>
                <span>
                  <SettingIcon>🎵</SettingIcon> 背景音乐
                </span>
              </SettingLabel>
              <SliderContainer>
                <Slider
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={localSettings.bgmVolume}
                  onChange={(e) =>
                    handleVolumeChange('bgmVolume', parseFloat(e.target.value))
                  }
                  disabled={!localSettings.enabled}
                />
                <VolumeValue>{formatPercent(localSettings.bgmVolume)}</VolumeValue>
              </SliderContainer>
            </SettingItem>

            {/* 音效音量 */}
            <SettingItem>
              <SettingLabel>
                <span>
                  <SettingIcon>🔊</SettingIcon> 音效音量
                </span>
              </SettingLabel>
              <SliderContainer>
                <Slider
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={localSettings.sfxVolume}
                  onChange={(e) =>
                    handleVolumeChange('sfxVolume', parseFloat(e.target.value))
                  }
                  disabled={!localSettings.enabled}
                />
                <VolumeValue>{formatPercent(localSettings.sfxVolume)}</VolumeValue>
              </SliderContainer>
            </SettingItem>

            {/* 语音开关和音量 */}
            <SettingItem>
              <ToggleContainer>
                <ToggleLabel>
                  <SettingIcon>🗣️</SettingIcon>
                  语音朗读
                </ToggleLabel>
                <Toggle
                  $active={localSettings.speechEnabled}
                  onClick={() => handleToggle('speechEnabled')}
                />
              </ToggleContainer>
            </SettingItem>

            <SettingItem>
              <SliderContainer>
                <Slider
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={localSettings.speechVolume}
                  onChange={(e) =>
                    handleVolumeChange('speechVolume', parseFloat(e.target.value))
                  }
                  disabled={!localSettings.enabled || !localSettings.speechEnabled}
                />
                <VolumeValue>{formatPercent(localSettings.speechVolume)}</VolumeValue>
              </SliderContainer>
            </SettingItem>

            <Divider />

            {/* 振动开关 */}
            <SettingItem>
              <ToggleContainer>
                <ToggleLabel>
                  <SettingIcon>📳</SettingIcon>
                  振动反馈
                </ToggleLabel>
                <Toggle
                  $active={localSettings.vibrationEnabled}
                  onClick={() => handleToggle('vibrationEnabled')}
                />
              </ToggleContainer>
            </SettingItem>

            <SaveButton
              onClick={handleSave}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              保存设置
            </SaveButton>
          </Panel>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default SoundControl;
