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
  /** 剧情自动播放间隔（毫秒） */
  storyAutoPlayInterval: 3000,
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
} as const;