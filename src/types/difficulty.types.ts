/**
 * 难度等级枚举
 */
export enum DifficultyLevel {
  /** 低难度 - 新手模式 */
  EASY = 'easy',
  /** 中难度 - 挑战模式 */
  MEDIUM = 'medium',
  /** 高难度 - 高手模式 */
  HARD = 'hard',
}

/**
 * 场景类型
 */
export type SceneType = 'forest' | 'ocean' | 'volcano' | 'desert' | 'space';

/**
 * 武器零件
 */
export interface WeaponPart {
  /** 零件唯一标识 */
  id: string;
  /** 零件名称（用于显示） */
  name: string;
  /** 对应的图形类型 */
  shapeType: 'circle' | 'triangle' | 'square' | 'rectangle' | 'composite';
  /** 零件图标路径 */
  iconImage: string;
  /** 完整零件图片路径（组装完成后显示） */
  fullImage?: string;
}

/**
 * 难度配置
 */
export interface DifficultyConfig {
  /** 难度等级 */
  level: DifficultyLevel;
  /** 显示名称 */
  name: string;
  /** 描述文字 */
  description: string;
  /** 武器名称 */
  weaponName: string;
  /** 武器零件列表（5个） */
  weaponParts: WeaponPart[];
  /** 星星乘数 */
  starMultiplier: number;
  /** 完整武器图片 */
  weaponImage: string;
}

/**
 * 故事叙事
 */
export interface StoryNarrative {
  /** 故事文本 */
  text: string;
  /** 场景背景类型 */
  sceneBackground: SceneType;
  /** 奖励的武器零件 ID */
  weaponPartReward: string;
}

/**
 * 题目故事配置
 */
export interface QuestionStoryConfig {
  /** 难度等级 */
  difficulty: DifficultyLevel;
  /** 各题的故事叙事（key 为题目序号 0-4） */
  narratives: Record<number, StoryNarrative>;
  /** 武器配置 */
  weapon: {
    name: string;
    parts: WeaponPart[];
    completeImage: string;
  };
}