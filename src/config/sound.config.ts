import type { SoundConfig } from '@/types/sound.types'

/**
 * 音效配置
 */
export const soundConfig: SoundConfig = {
  // 音效文件映射
  sfxFiles: {
    // 答题音效
    correct: '/audio/sfx/correct.mp3',
    wrong: '/audio/sfx/wrong.mp3',
    click: '/audio/sfx/click.mp3',
    'combo-1': '/audio/sfx/combo-1.mp3',
    'combo-5': '/audio/sfx/combo-5.mp3',
    'combo-10': '/audio/sfx/combo-10.mp3',
    // 战斗音效
    'card-reveal': '/audio/sfx/card-reveal.mp3',
    'star-earn': '/audio/sfx/star-earn.mp3',
    'level-complete': '/audio/sfx/level-complete.mp3',
    victory: '/audio/sfx/victory.mp3',
    defeat: '/audio/sfx/defeat.mp3',
    // 交互音效
    drag: '/audio/sfx/drag.mp3',
    drop: '/audio/sfx/drop.mp3',
    summon: '/audio/sfx/summon.mp3',
    transform: '/audio/sfx/transform.mp3',
    // 绝招音效（按稀有度）
    'ultimate-bronze': '/audio/ultimate/bronze.mp3',
    'ultimate-silver': '/audio/ultimate/silver.mp3',
    'ultimate-gold': '/audio/ultimate/gold.mp3',
    'ultimate-rainbow': '/audio/ultimate/rainbow.mp3',
    'ultimate-prismatic': '/audio/ultimate/prismatic.mp3',
  },

  // BGM 文件映射
  bgmFiles: {
    menu: '/audio/bg/menu-theme.mp3',
    battle: '/audio/bg/battle-theme.mp3',
    victory: '/audio/bg/victory-theme.mp3',
    story: '/audio/bg/story-theme.mp3',
    collection: '/audio/bg/collection-theme.mp3',
  },

  // 默认音量配置
  defaultVolume: {
    sfx: 0.7,
    bgm: 0.4,
    speech: 0.8,
  },

  // 语音播放时 BGM 压低到的音量
  bgmDuckVolume: 0.15,
}

/**
 * BGM 场景配置
 */
export const bgmSceneConfig = {
  menu: {
    type: 'menu' as const,
    loop: true,
    volume: 0.4,
  },
  battle: {
    type: 'battle' as const,
    loop: true,
    volume: 0.5,
  },
  victory: {
    type: 'victory' as const,
    loop: false,
    volume: 0.6,
  },
  story: {
    type: 'story' as const,
    loop: true,
    volume: 0.35,
  },
  collection: {
    type: 'collection' as const,
    loop: true,
    volume: 0.4,
  },
}

/**
 * 连击音效阈值
 */
export const comboThresholds = {
  level1: { min: 1, max: 4, sound: 'combo-1' as const },
  level2: { min: 5, max: 9, sound: 'combo-5' as const },
  level3: { min: 10, sound: 'combo-10' as const },
}
