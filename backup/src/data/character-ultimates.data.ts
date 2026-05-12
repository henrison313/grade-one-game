/**
 * 绝招动画参数配置
 * 包含 21 个角色的绝招名称、动画参数和文字特效
 */

import type { TextEffectType } from '@/config/game.config';

export interface UltimateAnimationParams {
  name: string;
  animationParams: {
    scale: { from: number; to: number };
    rotation: number;
    duration: number;
    particleCount: number;
    color: string;
  };
  textEffect: {
    color: string;
    glowColor: string;
    animation: TextEffectType;
  };
}

/**
 * 21 角色绝招动画参数配置
 */
export const characterUltimates: Record<string, UltimateAnimationParams> = {
  // 000: 炫蓝闪电
  'xuanlan-shandian': {
    name: '闪电风暴',
    animationParams: {
      scale: { from: 1, to: 1.2 },
      rotation: 0,
      duration: 4000,
      particleCount: 30,
      color: '#3B82F6',
    },
    textEffect: {
      color: '#1E90FF',
      glowColor: '#00BFFF',
      animation: 'flicker',
    },
  },

  // 001: 巨力风暴
  'juli-fengbao': {
    name: '超级能量冲击',
    animationParams: {
      scale: { from: 1, to: 1.3 },
      rotation: 5,
      duration: 3500,
      particleCount: 25,
      color: '#FF6B6B',
    },
    textEffect: {
      color: '#FF4500',
      glowColor: '#FF8C00',
      animation: 'shake',
    },
  },

  // 002: 急救卫士（新手形态）
  'baoche-jiushi': {
    name: '治疗射线',
    animationParams: {
      scale: { from: 1, to: 1.1 },
      rotation: 0,
      duration: 3500,
      particleCount: 20,
      color: '#10B981',
    },
    textEffect: {
      color: '#FFFFFF',
      glowColor: '#10B981',
      animation: 'pulse',
    },
  },

  // 002-2: 急救卫士·战地形态（挑战模式）
  'baoche-jiushi-battle': {
    name: '巨钳重压',
    animationParams: {
      scale: { from: 1, to: 1.2 },
      rotation: 5,
      duration: 4000,
      particleCount: 25,
      color: '#FFD700',
    },
    textEffect: {
      color: '#FFD700',
      glowColor: '#FFA500',
      animation: 'shake',
    },
  },

  // 002-3: 急救卫士·终极形态（高手模式）
  'baoche-jiushi-ultimate': {
    name: '巨钳休克',
    animationParams: {
      scale: { from: 1, to: 1.3 },
      rotation: 10,
      duration: 4500,
      particleCount: 30,
      color: '#FF6B6B',
    },
    textEffect: {
      color: '#FF0080',
      glowColor: '#00FF80',
      animation: 'flicker',
    },
  },

  // 003: 烈火修罗（新手形态）
  'liehuo-xiuluo': {
    name: '水流发射',
    animationParams: {
      scale: { from: 1, to: 1.2 },
      rotation: 0,
      duration: 3500,
      particleCount: 25,
      color: '#3B82F6',
    },
    textEffect: {
      color: '#1E90FF',
      glowColor: '#00BFFF',
      animation: 'wave',
    },
  },

  // 003-2: 烈火修罗·烈焰形态（挑战模式）
  'liehuo-xiuluo-flame': {
    name: '烈焰巨锤',
    animationParams: {
      scale: { from: 1, to: 1.3 },
      rotation: 15,
      duration: 4000,
      particleCount: 30,
      color: '#FF4500',
    },
    textEffect: {
      color: '#FF6B6B',
      glowColor: '#FF8C00',
      animation: 'flicker',
    },
  },

  // 003-3: 烈火修罗·终极形态（高手模式）
  'liehuo-xiuluo-ultimate': {
    name: '巨锤重击',
    animationParams: {
      scale: { from: 1, to: 1.4 },
      rotation: 20,
      duration: 4500,
      particleCount: 40,
      color: '#FFD700',
    },
    textEffect: {
      color: '#FFD700',
      glowColor: '#FFA500',
      animation: 'shake',
    },
  },

  // 004: 暗影特工
  'anying-tegong': {
    name: '暗影终结击',
    animationParams: {
      scale: { from: 1, to: 1.2 },
      rotation: -5,
      duration: 3500,
      particleCount: 25,
      color: '#4B0082',
    },
    textEffect: {
      color: '#4B0082',
      glowColor: '#9370DB',
      animation: 'swirl',
    },
  },

  // 005: 铁臂爵士
  'tiebi-jueshi': {
    name: '钢铁粉碎拳',
    animationParams: {
      scale: { from: 1, to: 1.3 },
      rotation: 8,
      duration: 4000,
      particleCount: 30,
      color: '#6B7280',
    },
    textEffect: {
      color: '#A0522D',
      glowColor: '#CD853F',
      animation: 'shake',
    },
  },

  // 006: 喷射加仑
  'penshi-jialun': {
    name: '高压水龙卷',
    animationParams: {
      scale: { from: 1, to: 1.2 },
      rotation: 15,
      duration: 3500,
      particleCount: 28,
      color: '#1E90FF',
    },
    textEffect: {
      color: '#1E90FF',
      glowColor: '#00BFFF',
      animation: 'swirl',
    },
  },

  // 007: 裂变骑士
  'liebian-qishi': {
    name: '量子裂变爆发',
    animationParams: {
      scale: { from: 1, to: 1.5 },
      rotation: 20,
      duration: 4500,
      particleCount: 40,
      color: '#8B5CF6',
    },
    textEffect: {
      color: '#8B5CF6',
      glowColor: '#A78BFA',
      animation: 'flicker',
    },
  },

  // 008: 暴烈重卡
  'baolie-zhongka': {
    name: '暴烈冲锋',
    animationParams: {
      scale: { from: 1, to: 1.3 },
      rotation: 5,
      duration: 3500,
      particleCount: 25,
      color: '#DC2626',
    },
    textEffect: {
      color: '#FF0000',
      glowColor: '#DC143C',
      animation: 'shake',
    },
  },

  // 009: 深海天锚
  'shenhai-tianmao': {
    name: '海啸锚击',
    animationParams: {
      scale: { from: 1, to: 1.2 },
      rotation: -10,
      duration: 4000,
      particleCount: 30,
      color: '#0EA5E9',
    },
    textEffect: {
      color: '#1E90FF',
      glowColor: '#00BFFF',
      animation: 'wave',
    },
  },

  // 010: 重力金刚
  'zhongli-jingang': {
    name: '重力崩溃',
    animationParams: {
      scale: { from: 1, to: 1.4 },
      rotation: 0,
      duration: 4000,
      particleCount: 30,
      color: '#7C3AED',
    },
    textEffect: {
      color: '#8B5CF6',
      glowColor: '#A78BFA',
      animation: 'pulse',
    },
  },

  // 011: 玄铁战神
  'xuantie-zhanshen': {
    name: '玄铁爆裂',
    animationParams: {
      scale: { from: 1, to: 1.3 },
      rotation: 5,
      duration: 4000,
      particleCount: 28,
      color: '#374151',
    },
    textEffect: {
      color: '#6B7280',
      glowColor: '#9CA3AF',
      animation: 'shake',
    },
  },

  // 012: 炫蓝闪电 S
  'xuanlan-shandian-s': {
    name: '超新星爆发',
    animationParams: {
      scale: { from: 1, to: 1.5 },
      rotation: 30,
      duration: 5000,
      particleCount: 50,
      color: '#FBBF24',
    },
    textEffect: {
      color: '#FFD700',
      glowColor: '#FFA500',
      animation: 'flicker',
    },
  },

  // 013: 焰龙战神
  'yanlong-zhanshen': {
    name: '焚天龙焰',
    animationParams: {
      scale: { from: 1, to: 1.4 },
      rotation: 15,
      duration: 4500,
      particleCount: 40,
      color: '#F97316',
    },
    textEffect: {
      color: '#FF4500',
      glowColor: '#FF8C00',
      animation: 'flicker',
    },
  },

  // 014: 霹雳火影
  'pili-huoying': {
    name: '万雷归宗',
    animationParams: {
      scale: { from: 1, to: 1.3 },
      rotation: 20,
      duration: 4000,
      particleCount: 35,
      color: '#FACC15',
    },
    textEffect: {
      color: '#FFD700',
      glowColor: '#FFA500',
      animation: 'flicker',
    },
  },

  // 015: 猎空悍将
  'liekong-hanjiang': {
    name: '天空坠落',
    animationParams: {
      scale: { from: 1, to: 1.2 },
      rotation: -15,
      duration: 4000,
      particleCount: 30,
      color: '#06B6D4',
    },
    textEffect: {
      color: '#32CD32',
      glowColor: '#90EE90',
      animation: 'swirl',
    },
  },

  // 016: 钢臂力士
  'gangbi-lishi': {
    name: '毁天灭地',
    animationParams: {
      scale: { from: 1, to: 1.5 },
      rotation: 10,
      duration: 5000,
      particleCount: 45,
      color: '#B91C1C',
    },
    textEffect: {
      color: '#FF0000',
      glowColor: '#DC143C',
      animation: 'shake',
    },
  },

  // 017: 星际游侠
  'xingji-youxia': {
    name: '超新星爆炸',
    animationParams: {
      scale: { from: 1, to: 1.6 },
      rotation: 360,
      duration: 6000,
      particleCount: 60,
      color: '#EC4899',
    },
    textEffect: {
      color: '#EC4899',
      glowColor: '#F472B6',
      animation: 'swirl',
    },
  },

  // 018: 爆旋洛克
  'baoxuan-luoke': {
    name: '终极旋风',
    animationParams: {
      scale: { from: 1, to: 1.3 },
      rotation: 360,
      duration: 4000,
      particleCount: 35,
      color: '#14B8A6',
    },
    textEffect: {
      color: '#32CD32',
      glowColor: '#90EE90',
      animation: 'swirl',
    },
  },

  // 019: 深海霸王
  'shenhai-bawang': {
    name: '怒海狂涛',
    animationParams: {
      scale: { from: 1, to: 1.5 },
      rotation: -10,
      duration: 5000,
      particleCount: 45,
      color: '#0284C7',
    },
    textEffect: {
      color: '#1E90FF',
      glowColor: '#00BFFF',
      animation: 'wave',
    },
  },

  // 020: 银翼骑士
  'yinyi-qishi': {
    name: '圣光审判',
    animationParams: {
      scale: { from: 1, to: 1.4 },
      rotation: 5,
      duration: 5000,
      particleCount: 40,
      color: '#E5E7EB',
    },
    textEffect: {
      color: '#FFD700',
      glowColor: '#FFFACD',
      animation: 'pulse',
    },
  },

  // 021: 重装赤魂王
  'zhongzhang-chihunwang': {
    name: '赤魂灭世',
    animationParams: {
      scale: { from: 1, to: 1.6 },
      rotation: 15,
      duration: 7000,
      particleCount: 70,
      color: '#991B1B',
    },
    textEffect: {
      color: '#4B0082',
      glowColor: '#9370DB',
      animation: 'flicker',
    },
  },

  // 022: 超炫电光王 - 隐藏关卡 H1 守护者
  'chaoxuan-dianguangwang': {
    name: '超炫电光爆裂',
    animationParams: {
      scale: { from: 1, to: 1.5 },
      rotation: 30,
      duration: 5500,
      particleCount: 55,
      color: '#FACC15',
    },
    textEffect: {
      color: '#FFD700',
      glowColor: '#FFA500',
      animation: 'flicker',
    },
  },

  // 023: 炫蓝雷霆王 - 隐藏关卡 H2 守护者
  'xuanlan-leitingwang': {
    name: '炫蓝雷霆灭世',
    animationParams: {
      scale: { from: 1, to: 1.6 },
      rotation: 45,
      duration: 7000,
      particleCount: 75,
      color: '#3B82F6',
    },
    textEffect: {
      color: '#1E90FF',
      glowColor: '#00BFFF',
      animation: 'wave',
    },
  },
};

/**
 * 根据角色 ID 获取绝招动画参数
 */
export function getUltimateAnimationParams(characterId: string): UltimateAnimationParams | null {
  return characterUltimates[characterId] || null;
}

/**
 * 根据角色 ID 获取绝招名称
 */
export function getUltimateSkillName(characterId: string): string {
  return characterUltimates[characterId]?.name || '终极绝招';
}
