import { GameConfig } from '@/config';
import type { UserData } from '@/types';
import { createDefaultUserData } from '@/types';

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
        return JSON.parse(data) as UserData;
      }
    } catch (error) {
      console.error('Failed to load user data:', error);
    }
    return createDefaultUserData();
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
    const [chapter, level] = currentLevelId.split('-').map(Number);

    // 计算下一关
    const nextLevelId = `${chapter}-${level + 1}`;
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
   * 添加收集的卡牌
   */
  addCollectedCard(characterId: string, levelId: string, stars: number): void {
    const data = this.getUserData();

    // 检查是否已收集
    if (data.collectedCards.some((card) => card.characterId === characterId)) {
      return;
    }

    data.collectedCards.push({
      characterId,
      levelId,
      stars,
      collectedAt: new Date().toISOString(),
    });

    this.saveUserData(data);
  }

  /**
   * 检查是否已收集卡牌
   */
  hasCollectedCard(characterId: string): boolean {
    const data = this.getUserData();
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