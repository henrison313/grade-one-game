import type { Question } from './question.types';
import type { Character, Mentor } from './character.types';
import type { DifficultyLevel, QuestionStoryConfig } from './difficulty.types';

/**
 * 解锁条件类型
 */
export interface UnlockCondition {
  type: 'levels_completed' | 'stars_collected' | 'accuracy';
  targetLevels?: string[];
  minStars?: number;
  targetLevel?: string;
  minAccuracy?: number;
}

/**
 * 卡牌奖励
 */
export interface CardReward {
  characterId: string;
  rarity: 'bronze' | 'silver' | 'gold' | 'rainbow' | 'prismatic';
}

/**
 * 技能奖励
 */
export interface SkillReward {
  id: string;
  name: string;
  description: string;
  type: 'passive' | 'active';
  permanent?: boolean;
}

/**
 * 关卡奖励
 */
export interface LevelReward {
  card: CardReward;
  skill?: SkillReward;
}

/**
 * 关卡数据
 */
export interface Level {
  id: string;
  name: string;
  chapter: number;
  chapterName: string;
  description: string;
  thumbnail: string;
  status: 'locked' | 'available' | 'completed';
  guardian: Character; // 守护者
  mentor: Mentor; // 导师
  questions: Question[];
  totalStars: number; // 可获得的总星星数
  starReward: number; // 每题奖励星星
  prerequisite?: string; // 前置关卡
  story: StorySegment[];
  // 隐藏关卡相关字段（可选）
  unlockConditions?: UnlockCondition[];
  unlockLogic?: 'AND' | 'OR';
  reward?: LevelReward;
  // 难度故事配置（可选，用于趣味化改造）
  /** 按难度分组的题目（可选） */
  questionsByDifficulty?: Record<DifficultyLevel, Question[]>;
  /** 各难度的故事叙事配置（可选） */
  storyConfigs?: Record<DifficultyLevel, QuestionStoryConfig>;
}

/**
 * 剧情片段
 */
export interface StorySegment {
  id: string;
  type: 'narration' | 'dialogue' | 'action';
  speaker?: string;
  speakerImage?: string;
  text: string;
  duration?: number; // 毫秒
}

/**
 * 章节数据
 */
export interface Chapter {
  id: number;
  name: string;
  description: string;
  levels: string[]; // 关卡 id 列表
}

/**
 * 游戏状态
 */
export interface GameState {
  /** 当前关卡 */
  currentLevel: Level | null;
  /** 当前题目索引 */
  currentQuestionIndex: number;
  /** 答题记录 */
  answers: Array<{
    questionId: string;
    isCorrect: boolean;
    timeSpent: number;
  }>;
  /** 当前获得的星星 */
  currentStars: number;
  /** 游戏阶段 */
  phase: 'intro' | 'playing' | 'feedback' | 'complete';
  /** 是否显示答案反馈 */
  showingFeedback: boolean;
  /** 当前题目是否答对 */
  lastAnswerCorrect: boolean | null;
}

/**
 * 游戏动作类型
 */
export type GameAction =
  | { type: 'START_LEVEL'; level: Level }
  | { type: 'ANSWER_QUESTION'; isCorrect: boolean; timeSpent: number }
  | { type: 'NEXT_QUESTION' }
  | { type: 'COMPLETE_LEVEL' }
  | { type: 'RESET_GAME' };