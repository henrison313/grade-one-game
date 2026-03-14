/**
 * 关卡状态
 */
export interface LevelProgress {
  levelId: string;
  status: 'locked' | 'available' | 'completed';
  stars: number;
  bestTime?: number;
  completedAt?: string;
}

/**
 * 收集的卡牌
 */
export interface CollectedCard {
  characterId: string;
  collectedAt: string;
  levelId: string;
  stars: number;
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
  createdAt: string;
  updatedAt: string;
}

/**
 * 用户设置
 */
export interface UserSettings {
  soundEnabled: boolean;
  musicEnabled: boolean;
  vibrationEnabled: boolean;
}

/**
 * 默认用户数据
 */
export const createDefaultUserData = (): UserData => ({
  id: crypto.randomUUID(),
  name: '小勇士',
  levelProgress: {
    '1-1': { levelId: '1-1', status: 'available', stars: 0 },
  },
  collectedCards: [],
  totalStars: 0,
  settings: {
    soundEnabled: true,
    musicEnabled: true,
    vibrationEnabled: true,
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});