/**
 * 角色数据
 */
export interface Character {
  id: string;
  name: string;
  title: string;
  description: string;
  /** 载具形态图片 */
  vehicleImage: string;
  /** 机器人形态图片 */
  robotImage: string;
  /** 卡牌图片 */
  cardImage?: string;
  /** 属性数据 */
  stats: {
    height: string;
    weight: string;
    speed: string;
    power: string;
  };
  /** 技能 */
  skills: {
    name: string;
    description: string;
  }[];
  /** 关联知识点 */
  knowledge: string[];
  /** 稀有度 */
  rarity: 'common' | 'rare' | 'epic' | 'legendary' | 'bronze' | 'silver' | 'gold' | 'rainbow' | 'prismatic';
  /** 编号 */
  number: string;
  /** 绝招名称 */
  ultimateSkill?: string;
  /** 属性/元素 */
  attribute?: string;
}

/**
 * 导师角色（用于关卡介绍）
 */
export interface Mentor {
  id: string;
  name: string;
  image: string;
  greeting: string;
  encouragement: string;
}

/**
 * 角色登场动画状态
 */
export type CharacterAnimationState =
  | 'hidden'
  | 'entering'
  | 'idle'
  | 'transforming'
  | 'transformed'
  | 'exiting';