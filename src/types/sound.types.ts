/**
 * 音效类型
 */
export type SoundType =
  // 答题音效
  | 'correct' // 答对
  | 'wrong' // 答错
  | 'click' // 点击按钮
  | 'combo-1' // 连击 x1
  | 'combo-5' // 连击 x5
  | 'combo-10' // 连击 x10
  // 战斗音效
  | 'card-reveal' // 卡牌揭示
  | 'star-earn' // 获得星星
  | 'level-complete' // 关卡完成
  | 'victory' // 胜利
  | 'defeat' // 失败
  // 交互音效
  | 'drag' // 拖拽开始
  | 'drop' // 放置
  | 'summon' // 召唤
  | 'transform' // 变形
  // 绝招音效（按稀有度）
  | 'ultimate-bronze' // 青铜
  | 'ultimate-silver' // 白银
  | 'ultimate-gold' // 黄金
  | 'ultimate-rainbow' // 彩虹
  | 'ultimate-prismatic' // 炫彩

/**
 * 背景音乐类型
 */
export type BGMType = 'menu' | 'battle' | 'victory' | 'story' | 'collection'

/**
 * 稀有度类型
 */
export type RarityType = 'bronze' | 'silver' | 'gold' | 'rainbow' | 'prismatic'

/**
 * 音效设置
 */
export interface SoundSettings {
  enabled: boolean
  sfxVolume: number // 音效音量 0-1
  bgmVolume: number // BGM 音量 0-1
  speechVolume: number // 语音音量 0-1
  speechEnabled: boolean // 语音开关
  vibrationEnabled: boolean // 振动开关
}

/**
 * 音效配置
 */
export interface SoundConfig {
  sfxFiles: Record<SoundType, string>
  bgmFiles: Record<BGMType, string>
  defaultVolume: {
    sfx: number
    bgm: number
    speech: number
  }
  bgmDuckVolume: number // 语音播放时 BGM 压低到的音量
}

/**
 * BGM 配置项
 */
export interface BGMConfig {
  type: BGMType
  src: string
  loop: boolean
  volume: number
}

/**
 * 语音配置
 */
export interface SpeechConfig {
  text: string
  speaker?: string // 说话人（匹配角色音色）
  priority?: boolean // 是否优先播放（压低 BGM）
  onEnd?: () => void // 播放完成回调
}

/**
 * 角色音色配置
 */
export interface VoiceConfig {
  pitch: number // 音高 (0.5 - 2)
  rate: number // 语速 (0.5 - 2)
}
