import { GameConfig } from '@/config';
import type { UserData, RarityLevel, VariantType } from '@/types';
import { createDefaultUserData, DifficultyLevel } from '@/types';
import { levels } from '@/data/levels.data';

/**
 * 本地存储服务
 */
class StorageService {
  private storageKey: string;

  constructor() {
    this.storageKey = GameConfig.storageKey;
  }

  /**
   * 获取用户数据
   */
  getUserData(): UserData {
    try {
      const data = localStorage.getItem(this.storageKey);
      if (data) {
        const parsed = JSON.parse(data) as Partial<UserData>;

        // 向后兼容：为旧存档添加新增字段
        return this.migrateUserData(parsed);
      }
    } catch (error) {
      console.error('Failed to load user data:', error);
    }
    return createDefaultUserData();
  }

  /**
   * 迁移用户数据（向后兼容）
   */
  private migrateUserData(parsed: Partial<UserData>): UserData {
    const defaultData = createDefaultUserData();

    // 合并默认值，确保新字段存在
    const merged = {
      ...defaultData,
      ...parsed,
      // 确保新增字段存在（即使用户旧存档中没有）
      hiddenLevelsUnlocked: parsed.hiddenLevelsUnlocked || [],
      achievements: parsed.achievements || defaultData.achievements,
    } as UserData;

    // V0.3: 确保音效设置字段存在
    merged.settings = {
      ...defaultData.settings,
      ...(parsed.settings || {}),
      // V0.3 新增字段默认值
      sfxVolume: parsed.settings?.sfxVolume ?? defaultData.settings.sfxVolume,
      bgmVolume: parsed.settings?.bgmVolume ?? defaultData.settings.bgmVolume,
      speechVolume: parsed.settings?.speechVolume ?? defaultData.settings.speechVolume,
      speechEnabled: parsed.settings?.speechEnabled ?? defaultData.settings.speechEnabled,
    };

    // V0.4: 迁移collectedCards旧格式数据（缺少variant/rarity/difficulty）
    if (parsed.collectedCards && parsed.collectedCards.length > 0) {
      merged.collectedCards = parsed.collectedCards.map((card) => {
        // 如果旧数据缺少variant字段，添加默认值
        if (!card.variant) {
          return {
            ...card,
            variant: 'base' as const,
            rarity: 'rare' as RarityLevel,
            difficulty: DifficultyLevel.EASY,
          };
        }
        return card;
      });
    }

    return merged;
  }

  /**
   * 保存用户数据
   */
  saveUserData(data: UserData): void {
    try {
      data.updatedAt = new Date().toISOString();
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save user data:', error);
    }
  }

  /**
   * 更新用户数据部分字段
   */
  updateUserData(partial: Partial<UserData>): UserData {
    const current = this.getUserData();
    const updated = { ...current, ...partial };
    this.saveUserData(updated);
    return updated;
  }

  /**
   * 获取关卡进度
   */
  getLevelProgress(levelId: string) {
    const data = this.getUserData();
    return data.levelProgress[levelId] || null;
  }

  /**
   * 更新关卡进度
   */
  updateLevelProgress(
    levelId: string,
    progress: { stars?: number; status?: 'locked' | 'available' | 'completed' }
  ): void {
    const data = this.getUserData();
    const current = data.levelProgress[levelId] || {
      levelId,
      status: 'locked' as const,
      stars: 0,
    };

    data.levelProgress[levelId] = {
      ...current,
      ...progress,
      completedAt: progress.status === 'completed' ? new Date().toISOString() : current.completedAt,
    };

    // 更新总星星数
    data.totalStars = Object.values(data.levelProgress).reduce(
      (sum, level) => sum + level.stars,
      0
    );

    this.saveUserData(data);
  }

  /**
   * 解锁下一关
   */
  unlockNextLevel(currentLevelId: string): void {
    const data = this.getUserData();

    // 找到当前关卡在列表中的位置
    const currentIndex = levels.findIndex((l) => l.id === currentLevelId);
    if (currentIndex === -1 || currentIndex === levels.length - 1) {
      // 已经是最后一关，没有下一关需要解锁
      return;
    }

    // 获取下一关 ID
    const nextLevel = levels[currentIndex + 1];
    const nextLevelId = nextLevel.id;

    // 解锁下一关
    if (data.levelProgress[nextLevelId]) {
      data.levelProgress[nextLevelId].status = 'available';
    } else {
      data.levelProgress[nextLevelId] = {
        levelId: nextLevelId,
        status: 'available',
        stars: 0,
      };
    }

    this.saveUserData(data);
  }

  /**
   * 添加收集的卡牌（支持多形态）
   */
  addCollectedCard(
    characterId: string,
    levelId: string,
    stars: number,
    variant: VariantType = 'base',
    rarity: RarityLevel = 'rare',
    difficulty: DifficultyLevel = DifficultyLevel.EASY
  ): void {
    const data = this.getUserData();

    // 检查是否已收集该形态
    if (data.collectedCards.some(
      (card) => card.characterId === characterId && card.variant === variant
    )) {
      return;
    }

    data.collectedCards.push({
      characterId,
      variant,
      rarity,
      levelId,
      stars,
      difficulty,
      collectedAt: new Date().toISOString(),
    });

    this.saveUserData(data);
  }

  /**
   * 检查是否已收集某形态卡牌
   */
  hasCollectedCard(characterId: string, variant?: VariantType): boolean {
    const data = this.getUserData();
    if (variant) {
      return data.collectedCards.some(
        (card) => card.characterId === characterId && card.variant === variant
      );
    }
    return data.collectedCards.some((card) => card.characterId === characterId);
  }

  /**
   * 更新设置
   */
  updateSettings(settings: Partial<UserData['settings']>): void {
    const data = this.getUserData();
    data.settings = { ...data.settings, ...settings };
    this.saveUserData(data);
  }

  /**
   * 清除所有数据
   */
  clearAllData(): void {
    localStorage.removeItem(this.storageKey);
  }
}

export const storageService = new StorageService();