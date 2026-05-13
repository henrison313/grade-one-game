/**
 * 隐藏关卡解锁服务
 * 负责检查隐藏关卡的解锁条件并管理解锁状态
 */

import { storageService } from './storage.service';
import { levels } from '@/data/levels.data';
import type { UnlockCondition } from '@/types';

/**
 * 解锁进度
 */
interface UnlockProgress {
  levelId: string;
  conditions: Array<{
    type: string;
    current: number | boolean;
    required: number | boolean;
    isMet: boolean;
  }>;
  allMet: boolean;
}

/**
 * 隐藏关卡解锁服务类
 */
class HiddenLevelUnlockService {
  /**
   * 隐藏关卡 H1 解锁条件
   * 需要完成到3-3才能解锁，为挑战3-4做准备
   */
  private h1Conditions: UnlockCondition[] = [
    {
      type: 'levels_completed',
      targetLevels: ['1-1', '1-2', '1-3', '2-1', '2-2', '2-3', '2-4', '3-1', '3-2', '3-3'],
      minStars: 3, // 每个关卡至少 3 星
    },
    {
      type: 'stars_collected',
      minStars: 100,
    },
  ];

  /**
   * 隐藏关卡 H2 解锁条件
   * 通过前面八个单元关卡，星星数达到满星的90%
   */
  private h2Conditions: UnlockCondition[] = [
    {
      type: 'levels_completed',
      targetLevels: ['1-1', '1-2', '1-3', '2-1', '2-2', '2-3', '2-4', '3-1', '3-2', '3-3', '3-4', '4-1', '4-2', '4-3', '5-1', '5-2', '6', '7-1', '7-2', '8'],
      minStars: 3, // 每个关卡至少 3 星
    },
    {
      type: 'stars_collected',
      minStars: 90, // 总星星达到满星的90%（假设满星100）
    },
  ];

  /**
   * 获取隐藏关卡的解锁条件
   */
  getUnlockConditions(levelId: string): UnlockCondition[] {
    if (levelId === 'H1') {
      return this.h1Conditions;
    }
    if (levelId === 'H2') {
      return this.h2Conditions;
    }
    return [];
  }

  /**
   * 检查隐藏关卡是否已解锁
   */
  checkUnlock(levelId: string): boolean {
    const userData = storageService.getUserData();

    // 检查是否已经在已解锁列表中
    if (userData.hiddenLevelsUnlocked.includes(levelId)) {
      return true;
    }

    const conditions = this.getUnlockConditions(levelId);
    if (conditions.length === 0) {
      return false;
    }

    // 检查所有条件是否满足（AND 逻辑）
    const allMet = conditions.every((condition) => this.checkCondition(condition));

    // 如果所有条件都满足，添加到已解锁列表
    if (allMet) {
      userData.hiddenLevelsUnlocked.push(levelId);
      storageService.saveUserData(userData);
    }

    return allMet;
  }

  /**
   * 检查单个解锁条件
   */
  private checkCondition(condition: UnlockCondition): boolean {
    const userData = storageService.getUserData();

    switch (condition.type) {
      case 'levels_completed':
        return this.checkLevelsCompleted(condition, userData);
      case 'stars_collected':
        return this.checkStarsCollected(condition, userData);
      case 'accuracy':
        return this.checkAccuracy(condition, userData);
      default:
        return false;
    }
  }

  /**
   * 检查关卡完成条件
   */
  private checkLevelsCompleted(
    condition: UnlockCondition,
    userData: ReturnType<typeof storageService.getUserData>
  ): boolean {
    if (!condition.targetLevels || !condition.minStars) {
      return false;
    }

    // 检查所有目标关卡是否都已完成且达到指定星星数
    return condition.targetLevels.every((levelId) => {
      const progress = userData.levelProgress[levelId];
      return progress && progress.status === 'completed' && progress.stars >= condition.minStars!;
    });
  }

  /**
   * 检查星星收集条件
   */
  private checkStarsCollected(
    condition: UnlockCondition,
    userData: ReturnType<typeof storageService.getUserData>
  ): boolean {
    if (!condition.minStars) {
      return false;
    }
    return userData.totalStars >= condition.minStars;
  }

  /**
   * 检查正确率条件
   */
  private checkAccuracy(
    condition: UnlockCondition,
    userData: ReturnType<typeof storageService.getUserData>
  ): boolean {
    if (!condition.targetLevel || !condition.minAccuracy) {
      return false;
    }

    // 获取目标关卡的进度
    const progress = userData.levelProgress[condition.targetLevel];
    if (!progress || progress.status !== 'completed') {
      return false;
    }

    // 计算正确率（需要关卡记录答题数据）
    // 简化实现：如果关卡星星数达到满星的 90%，认为正确率达标
    // 实际应该在 levelProgress 中记录 correctCount 和 totalCount
    const level = levels.find((l) => l.id === condition.targetLevel);
    if (!level) {
      return false;
    }

    // 假设满星是每题 10 星，总星星 = 题目数 × 10
    const maxStars = level.questions.length * 10;
    const accuracy = progress.stars / maxStars;

    return accuracy >= condition.minAccuracy;
  }

  /**
   * 获取解锁进度（用于显示提示）
   */
  getUnlockProgress(levelId: string): UnlockProgress {
    const conditions = this.getUnlockConditions(levelId);
    const userData = storageService.getUserData();

    const conditionDetails = conditions.map((condition) => {
      const { type } = condition;

      switch (type) {
        case 'levels_completed': {
          const targetLevels = condition.targetLevels || [];
          const completedCount = targetLevels.filter(
            (id) =>
              userData.levelProgress[id]?.status === 'completed' &&
              userData.levelProgress[id].stars >= (condition.minStars || 0)
          ).length;
          return {
            type,
            current: completedCount,
            required: targetLevels.length,
            description: `完成 ${targetLevels.join('、')} 且每关获得至少 ${condition.minStars} 星`,
            isMet: completedCount === targetLevels.length,
          };
        }
        case 'stars_collected': {
          const current = userData.totalStars;
          const required = condition.minStars || 0;
          return {
            type,
            current,
            required,
            description: `收集 ${required} 颗星星`,
            isMet: current >= required,
          };
        }
        case 'accuracy': {
          const progress = userData.levelProgress[condition.targetLevel || ''];
          const level = levels.find((l) => l.id === condition.targetLevel);
          if (!progress || !level) {
            return {
              type,
              current: 0,
              required: condition.minAccuracy || 0,
              description: `${condition.targetLevel} 正确率达到 ${(condition.minAccuracy || 0) * 100}%`,
              isMet: false,
            };
          }
          const maxStars = level.questions.length * 10;
          const accuracy = progress.stars / maxStars;
          return {
            type,
            current: accuracy,
            required: condition.minAccuracy || 0,
            description: `${condition.targetLevel} 正确率达到 ${(condition.minAccuracy || 0) * 100}%`,
            isMet: accuracy >= (condition.minAccuracy || 0),
          };
        }
        default:
          return {
            type,
            current: 0,
            required: 0,
            description: '未知条件',
            isMet: false,
          };
      }
    });

    const allMet = conditionDetails.every((c) => c.isMet);

    return {
      levelId,
      conditions: conditionDetails,
      allMet,
    };
  }

  /**
   * 解锁成就
   */
  unlockAchievement(achievementId: string): void {
    const userData = storageService.getUserData();
    const achievement = userData.achievements.find((a) => a.id === achievementId);

    if (achievement && !achievement.unlocked) {
      achievement.unlocked = true;
      achievement.unlockedAt = new Date().toISOString();
      storageService.saveUserData(userData);
    }
  }

  /**
   * 检查成就是否已解锁
   */
  isAchievementUnlocked(achievementId: string): boolean {
    const userData = storageService.getUserData();
    const achievement = userData.achievements.find((a) => a.id === achievementId);
    return achievement?.unlocked || false;
  }
}

export const hiddenLevelUnlockService = new HiddenLevelUnlockService();
