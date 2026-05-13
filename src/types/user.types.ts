import { DifficultyLevel } from './difficulty.types';

/**
 * 生成 UUID（兼容旧浏览器）
 */
const generateUUID = (): string => {
  // 优先使用 crypto.randomUUID（现代浏览器）
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // 回退到手动生成 UUID v4
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * 稀有度类型
 */
export type RarityLevel = 'common' | 'rare' | 'epic' | 'legendary' | 'bronze' | 'silver' | 'gold' | 'rainbow' | 'prismatic';

/**
 * 形态类型
 */
export type VariantType = 'base' | 'flame' | 'ultimate' | 'battle';

/**
 * 单难度进度
 */
export interface DifficultyProgress {
  stars: number;
  completedAt?: string;
}

/**
 * 关卡状态
 */
export interface LevelProgress {
  levelId: string;
  status: 'locked' | 'available' | 'completed';
  // 分难度记录星星
  easy?: DifficultyProgress;
  medium?: DifficultyProgress;
  hard?: DifficultyProgress;
  // 兼容旧数据：最高星星数
  stars: number;
  bestTime?: number;
  completedAt?: string;
}

/**
 * 收集的卡牌（支持多形态）
 */
export interface CollectedCard {
  characterId: string;      // 基础角色 ID
  variant: VariantType;  // 形态类型
  rarity: RarityLevel;      // 该形态的稀有度
  collectedAt: string;
  levelId: string;
  stars: number;
  difficulty: DifficultyLevel;  // 难度来源
}

/**
 * 成就数据
 */
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

/**
 * 用户数据
 */
export interface UserData {
  id: string;
  name: string;
  avatar?: string;
  levelProgress: Record<string, LevelProgress>;
  collectedCards: CollectedCard[];
  totalStars: number;
  settings: UserSettings;
  // V0.2.1 新增字段
  hiddenLevelsUnlocked: string[]; // 已解锁的隐藏关卡 ID 列表
  achievements: Achievement[]; // 成就列表
  createdAt: string;
  updatedAt: string;
}

/**
 * 用户设置
 */
export interface UserSettings {
  // V0.2 基础设置
  soundEnabled: boolean;
  musicEnabled: boolean;
  vibrationEnabled: boolean;
  // V0.3 音效系统新增
  sfxVolume: number; // 音效音量 0-1
  bgmVolume: number; // BGM 音量 0-1
  speechVolume: number; // 语音音量 0-1
  speechEnabled: boolean; // 语音开关
}

/**
 * 默认用户数据
 */
export const createDefaultUserData = (): UserData => ({
  id: generateUUID(),
  name: '小勇士',
  levelProgress: {
    '1-1': { levelId: '1-1', status: 'available', stars: 0 },
  },
  collectedCards: [],
  totalStars: 0,
  settings: {
    // V0.2 基础设置
    soundEnabled: true,
    musicEnabled: true,
    vibrationEnabled: true,
    // V0.3 音效系统新增
    sfxVolume: 0.7,
    bgmVolume: 0.4,
    speechVolume: 0.8,
    speechEnabled: true,
  },
  // V0.2.1 新增字段
  hiddenLevelsUnlocked: [],
  achievements: [
    {
      id: 'math-king',
      name: '数学王者',
      description: '击败重装赤魂王，成为数学王者',
      icon: '👑',
      unlocked: false,
    },
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});