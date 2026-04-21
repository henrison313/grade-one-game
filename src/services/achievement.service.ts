/**
 * 成就服务
 * 负责成就解锁和状态管理
 */

import { storageService } from './storage.service';

/**
 * 成就数据结构
 */
export interface AchievementData {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

/**
 * 成就服务类
 */
class AchievementService {
  /**
   * 获取所有成就
   */
  getAllAchievements(): AchievementData[] {
    const userData = storageService.getUserData();
    return userData.achievements;
  }

  /**
   * 根据 ID 获取成就
   */
  getAchievementById(id: string): AchievementData | undefined {
    const userData = storageService.getUserData();
    return userData.achievements.find((a) => a.id === id);
  }

  /**
   * 检查成就是否已解锁
   */
  isUnlocked(achievementId: string): boolean {
    const achievement = this.getAchievementById(achievementId);
    return achievement?.unlocked || false;
  }

  /**
   * 解锁成就
   */
  unlockAchievement(achievementId: string): boolean {
    const userData = storageService.getUserData();
    const achievement = userData.achievements.find((a) => a.id === achievementId);

    if (achievement && !achievement.unlocked) {
      achievement.unlocked = true;
      achievement.unlockedAt = new Date().toISOString();
      storageService.saveUserData(userData);
      return true;
    }

    return false;
  }

  /**
   * 检查并解锁"数学王者"成就
   * 条件：击败重装赤魂王（完成关卡 24）
   */
  checkMathKingAchievement(): boolean {
    const userData = storageService.getUserData();
    const level24Progress = userData.levelProgress['24'];

    if (level24Progress && level24Progress.status === 'completed') {
      return this.unlockAchievement('math-king');
    }

    return false;
  }

  /**
   * 获取已解锁成就数量
   */
  getUnlockedCount(): number {
    const userData = storageService.getUserData();
    return userData.achievements.filter((a) => a.unlocked).length;
  }

  /**
   * 获取成就解锁进度
   */
  getProgress(): { total: number; unlocked: number; percentage: number } {
    const userData = storageService.getUserData();
    const total = userData.achievements.length;
    const unlocked = userData.achievements.filter((a) => a.unlocked).length;
    const percentage = total > 0 ? (unlocked / total) * 100 : 0;

    return { total, unlocked, percentage: Math.round(percentage) };
  }
}

export const achievementService = new AchievementService();
