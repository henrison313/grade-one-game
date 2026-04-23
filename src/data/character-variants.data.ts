import type { RarityLevel, VariantType } from '@/types';
import { DifficultyLevel } from '@/types';

/**
 * 角色形态配置
 */
export interface CharacterVariant {
  characterId: string;
  variant: VariantType;
  rarity: RarityLevel;
  image: string;
  difficulty: DifficultyLevel;
  displayName: string;
}

/**
 * 巨力风暴的多形态配置
 */
export const juliFengbaoVariants: CharacterVariant[] = [
  {
    characterId: 'juli-fengbao',
    variant: 'base',
    rarity: 'rare',
    image: '/图片素材/巨力风暴-机器人.jpeg',
    difficulty: DifficultyLevel.EASY,
    displayName: '巨力风暴',
  },
  {
    characterId: 'juli-fengbao',
    variant: 'flame',
    rarity: 'gold',
    image: '/图片素材/巨力风暴-机器人-火.jpeg',
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '巨力风暴·火焰形态',
  },
  {
    characterId: 'juli-fengbao',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: '/图片素材/巨力风暴-机器人-终极.jpeg',
    difficulty: DifficultyLevel.HARD,
    displayName: '巨力风暴·终极形态',
  },
];

/**
 * 急救卫士的多形态配置
 */
export const baocheJiushiVariants: CharacterVariant[] = [
  {
    characterId: 'baoche-jiushi',
    variant: 'base',
    rarity: 'rare',
    image: '/图片素材/急救卫士-机器人.png',
    difficulty: DifficultyLevel.EASY,
    displayName: '急救卫士',
  },
  {
    characterId: 'baoche-jiushi',
    variant: 'battle',
    rarity: 'gold',
    image: '/图片素材/急救卫士 - 战地形态.png',
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '急救卫士·战地形态',
  },
  {
    characterId: 'baoche-jiushi',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: '/图片素材/急救卫士 - 终极形态.png',
    difficulty: DifficultyLevel.HARD,
    displayName: '急救卫士·终极形态',
  },
];

/**
 * 烈火修罗的多形态配置
 */
export const lieHuoXiuLuoVariants: CharacterVariant[] = [
  {
    characterId: 'liehuo-xiuluo',
    variant: 'base',
    rarity: 'rare',
    image: '/图片素材/烈火修罗-机器人.png',
    difficulty: DifficultyLevel.EASY,
    displayName: '烈火修罗',
  },
  {
    characterId: 'liehuo-xiuluo',
    variant: 'flame',
    rarity: 'gold',
    image: '/图片素材/烈火修罗 - 烈焰形态.png',
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '烈火修罗·烈焰形态',
  },
  {
    characterId: 'liehuo-xiuluo',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: '/图片素材/烈火修罗 - 终极形态.png',
    difficulty: DifficultyLevel.HARD,
    displayName: '烈火修罗·终极形态',
  },
];

/**
 * 所有角色形态配置（按角色 ID 分组）
 */
export const allCharacterVariants: CharacterVariant[] = [
  ...juliFengbaoVariants,
  ...baocheJiushiVariants,
  ...lieHuoXiuLuoVariants,
];

/**
 * 根据角色 ID 和形态获取配置
 */
export function getCharacterVariant(
  characterId: string,
  variant: VariantType
): CharacterVariant | undefined {
  return allCharacterVariants.find(
    (v) => v.characterId === characterId && v.variant === variant
  );
}

/**
 * 根据角色 ID 和难度获取形态配置
 */
export function getVariantByDifficulty(
  characterId: string,
  difficulty: DifficultyLevel
): CharacterVariant | undefined {
  return allCharacterVariants.find(
    (v) => v.characterId === characterId && v.difficulty === difficulty
  );
}

/**
 * 根据角色 ID 获取所有形态
 */
export function getVariantsByCharacterId(characterId: string): CharacterVariant[] {
  return allCharacterVariants.filter((v) => v.characterId === characterId);
}

/**
 * 角色分组颜色配置
 */
export const characterGroupColors: Record<string, string> = {
  'juli-fengbao': '#3B82F6',    // 蓝色
  'baoche-jiushi': '#FFFFFF',  // 白色（急救卫士主色调）
  'liehuo-xiuluo': '#EF4444',   // 红色（烈火修罗主色调）
  'xuanlan-shandian': '#FFD700', // 金色
  'anying-tegong': '#4B0082',    // 紫色
  // 其他角色...
};

/**
 * 获取角色分组颜色
 */
export function getCharacterGroupColor(characterId: string): string {
  return characterGroupColors[characterId] || '#6B7280';
}