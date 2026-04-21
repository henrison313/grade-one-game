/**
 * 游戏配置
 */
export const GameConfig = {
  /** 每题奖励星星数 */
  starsPerQuestion: 10,
  /** 答题时间限制（秒），0 表示无限制 */
  questionTimeLimit: 0,
  /** 答题反馈显示时间（毫秒） */
  feedbackDuration: 2000,
  /** 角色登场动画时间（毫秒） */
  characterEnterDuration: 1500,
  /** 角色变形动画时间（毫秒） */
  transformDuration: 2000,
  /** 卡牌揭示动画时间（毫秒） */
  cardRevealDuration: 3000,
  /** 剧情自动播放间隔（毫秒），语音播放完成后的额外等待时间 */
  storyAutoPlayInterval: 800,
  /** localStorage 存储键 */
  storageKey: 'xuanka_game_data',
} as const;

/**
 * 动画配置
 */
export const AnimationConfig = {
  /** 弹簧动画配置 */
  spring: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 30,
  },
  /** 淡入淡出 */
  fade: {
    duration: 0.3,
  },
  /** 缩放动画 */
  scale: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 25,
  },
} as const;

/**
 * 颜色主题
 */
export const ThemeColors = {
  primary: '#4F46E5',
  primaryLight: '#818CF8',
  primaryDark: '#3730A3',
  secondary: '#F59E0B',
  secondaryLight: '#FBBF24',
  success: '#10B981',
  successLight: '#34D399',
  error: '#EF4444',
  errorLight: '#F87171',
  warning: '#F59E0B',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  cardBackground: '#FFFFFF',
  textPrimary: '#1F2937',
  textSecondary: '#6B7280',
  textLight: '#FFFFFF',
  star: '#FFD700',
  starGlow: '#FFA500',
} as const;

/**
 * 图形名称映射
 */
export const ShapeNames = {
  circle: '圆形',
  triangle: '三角形',
  square: '正方形',
  rectangle: '长方形',
} as const;

/**
 * 稀有度配置
 */
export const RarityConfig = {
  common: {
    name: '普通',
    color: '#9CA3AF',
    glow: 'rgba(156, 163, 175, 0.5)',
  },
  rare: {
    name: '稀有',
    color: '#3B82F6',
    glow: 'rgba(59, 130, 246, 0.5)',
  },
  epic: {
    name: '史诗',
    color: '#8B5CF6',
    glow: 'rgba(139, 92, 246, 0.5)',
  },
  legendary: {
    name: '传说',
    color: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.5)',
  },
  bronze: {
    name: '青铜',
    color: '#CD7F32',
    glow: 'rgba(205, 127, 50, 0.5)',
  },
  silver: {
    name: '白银',
    color: '#C0C0C0',
    glow: 'rgba(192, 192, 192, 0.5)',
  },
  gold: {
    name: '黄金',
    color: '#FFD700',
    glow: 'rgba(255, 215, 0, 0.5)',
  },
  rainbow: {
    name: '彩虹',
    color: 'linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3)',
    glow: 'rgba(255, 255, 255, 0.8)',
  },
  prismatic: {
    name: '炫彩',
    color: 'linear-gradient(45deg, #FF0080, #00FF80, #8000FF, #FF8000)',
    glow: 'rgba(255, 0, 128, 0.8)',
  },
} as const;

/**
 * 绝招动画配置
 */
export const UltimateAnimationConfig = {
  duration: {
    bronze: 3000,    // 青铜边 3-4 秒
    silver: 4000,    // 白银边 4-5 秒
    gold: 4500,      // 黄金边 4-5 秒
    rainbow: 5500,   // 彩虹边 5-6 秒
    prismatic: 7000, // 炫彩动态边 6-8 秒
  },
  effects: {
    particles: true,
    shockwave: true,
    glow: true,
    text: true,
  },
} as const;

/**
 * 属性文字特效配置
 */
export const AttributeTextEffects = {
  fire: { color: '#FF4500', glow: '#FF8C00', effect: 'flicker' as const },
  water: { color: '#1E90FF', glow: '#00BFFF', effect: 'wave' as const },
  wind: { color: '#32CD32', glow: '#90EE90', effect: 'swirl' as const },
  earth: { color: '#8B4513', glow: '#D2691E', effect: 'shake' as const },
  lightning: { color: '#FFD700', glow: '#FFA500', effect: 'flicker' as const },
  ice: { color: '#00FFFF', glow: '#E0FFFF', effect: 'pulse' as const },
  light: { color: '#FFD700', glow: '#FFFACD', effect: 'pulse' as const },
  dark: { color: '#4B0082', glow: '#9370DB', effect: 'swirl' as const },
  power: { color: '#FF0000', glow: '#DC143C', effect: 'shake' as const },
  wisdom: { color: '#0000FF', glow: '#4169E1', effect: 'wave' as const },
  speed: { color: '#00FFFF', glow: '#00CED1', effect: 'swirl' as const },
  defense: { color: '#A0522D', glow: '#CD853F', effect: 'pulse' as const },
} as const;

/**
 * 星星积分配置
 */
export const StarRewardConfig = {
  basePerQuestion: 10,        // 每题基础奖励
  comboBonus: 2,              // 每连击额外奖励
  speedBonusPerSecond: 1,     // 限时模式剩余时间转换
  perfectBonus: 30,           // 100% 正确率额外奖励（R23）
  bossBonus: 100,             // BOSS 关卡专属奖励
  victoryThreshold: 0.9,      // 胜利阈值（90% 星星）
  // V0.2.1 新增配置
  speedModeBonus: 20,         // 极速模式额外奖励（R22）
  attachmentBonus: 5,         // 附加题奖励（R24）
} as const;

/**
 * 文字特效类型
 */
export type TextEffectType = 'flicker' | 'wave' | 'swirl' | 'shake' | 'pulse';