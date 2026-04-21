import { DifficultyLevel, type DifficultyConfig, type QuestionStoryConfig, type SceneType } from '@/types';

/**
 * 场景背景配置
 */
export const SceneBackgrounds: Record<SceneType, { gradient: string; elements: string }> = {
  forest: {
    gradient: 'linear-gradient(180deg, #1a4d2e 0%, #2d5a3f 30%, #4a7c4f 70%, #87ceeb 100%)',
    elements: '/assets/kenney/Side/tree_default.png',
  },
  ocean: {
    gradient: 'linear-gradient(180deg, #0077be 0%, #00a8cc 30%, #40e0d0 70%, #f0f8ff 100%)',
    elements: '/assets/kenney/PNG/Retina/Ships/ship (1).png',
  },
  volcano: {
    gradient: 'linear-gradient(180deg, #8b0000 0%, #ff4500 30%, #ff6b35 70%, #ffd700 100%)',
    elements: '/assets/kenney/PNG/Retina/Effects/fire1.png',
  },
  desert: {
    gradient: 'linear-gradient(180deg, #c2956e 0%, #d4a76a 30%, #e6c89c 70%, #87ceeb 100%)',
    elements: '/assets/kenney/Isometric/crops_dirtDoubleRowCorner_NE.png',
  },
  space: {
    gradient: 'linear-gradient(180deg, #0a0a2e 0%, #1a1a4e 30%, #2a2a6e 70%, #4a4a9e 100%)',
    elements: '/assets/kenney/PNG/Retina/Effects/explosion1.png',
  },
} as const;

/**
 * 武器零件图标（使用实际武器零件图片）
 */
const shapeIcons = {
  circle: '/assets/weapons/光能核心.png',
  triangle: '/assets/weapons/光能发射器.png',
  square: '/assets/weapons/光能护盾.png',
  rectangle: '/assets/weapons/光能外壳.png',
  composite: '/assets/weapons/easy-weapon.png',
};

/**
 * 三档难度配置
 */
export const DifficultyConfigs: Record<DifficultyLevel, DifficultyConfig> = {
  [DifficultyLevel.EASY]: {
    level: DifficultyLevel.EASY,
    name: '新手模式',
    description: '适合初次学习的小朋友',
    weaponName: '炫蓝光能枪',
    weaponParts: [
      { id: 'easy-core', name: '光能核心', shapeType: 'circle', iconImage: shapeIcons.circle },
      { id: 'easy-emitter', name: '光能发射器', shapeType: 'triangle', iconImage: shapeIcons.triangle },
      { id: 'easy-shield', name: '光能护盾', shapeType: 'square', iconImage: shapeIcons.square },
      { id: 'easy-shell', name: '光能外壳', shapeType: 'rectangle', iconImage: shapeIcons.rectangle },
      { id: 'easy-complete', name: '光能枪完成', shapeType: 'composite', iconImage: shapeIcons.composite },
    ],
    starMultiplier: 1.0,
    weaponImage: '/assets/weapons/easy-weapon.png',
  },
  [DifficultyLevel.MEDIUM]: {
    level: DifficultyLevel.MEDIUM,
    name: '挑战模式',
    description: '适合有一定基础的小朋友',
    weaponName: '炫蓝闪电枪',
    weaponParts: [
      { id: 'medium-core', name: '圆盘能量核心', shapeType: 'circle', iconImage: shapeIcons.circle },
      { id: 'medium-scope', name: '三角瞄准镜', shapeType: 'triangle', iconImage: shapeIcons.triangle },
      { id: 'medium-block', name: '方形能量块', shapeType: 'square', iconImage: shapeIcons.square },
      { id: 'medium-body', name: '长方枪身外壳', shapeType: 'rectangle', iconImage: shapeIcons.rectangle },
      { id: 'medium-complete', name: '闪电枪完成', shapeType: 'composite', iconImage: shapeIcons.composite },
    ],
    starMultiplier: 1.0,
    weaponImage: '/assets/weapons/medium-weapon.png',
  },
  [DifficultyLevel.HARD]: {
    level: DifficultyLevel.HARD,
    name: '高手模式',
    description: '适合熟练掌握的小朋友',
    weaponName: '炫蓝雷霆炮',
    weaponParts: [
      { id: 'hard-ring', name: '雷霆能量环', shapeType: 'circle', iconImage: shapeIcons.circle },
      { id: 'hard-prism', name: '雷霆聚焦棱', shapeType: 'triangle', iconImage: shapeIcons.triangle },
      { id: 'hard-stabilizer', name: '雷霆稳定器', shapeType: 'square', iconImage: shapeIcons.square },
      { id: 'hard-barrel', name: '雷霆炮身', shapeType: 'rectangle', iconImage: shapeIcons.rectangle },
      { id: 'hard-complete', name: '雷霆炮完成', shapeType: 'composite', iconImage: shapeIcons.composite },
    ],
    starMultiplier: 1.5,
    weaponImage: '/assets/weapons/hard-weapon.png',
  },
} as const;

/**
 * 低难度故事叙事配置
 */
export const EasyStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '炫蓝闪电带你来到魔法森林，寻找传说中的"光能核心"。找到圆形就能激活能量！',
      sceneBackground: 'forest',
      weaponPartReward: 'easy-core',
    },
    1: {
      text: '深海洞穴藏着"光能发射器"。三角形能让闪电精准发射！',
      sceneBackground: 'ocean',
      weaponPartReward: 'easy-emitter',
    },
    2: {
      text: '火焰山谷里有"光能护盾"。正方形能稳定闪电的能量！',
      sceneBackground: 'volcano',
      weaponPartReward: 'easy-shield',
    },
    3: {
      text: '沙漠遗迹中藏着"光能外壳"。长方形能保护闪电的核心！',
      sceneBackground: 'desert',
      weaponPartReward: 'easy-shell',
    },
    4: {
      text: '在太空堡垒完成最终组装，炫蓝光能枪终于诞生！打败巨力风暴！',
      sceneBackground: 'space',
      weaponPartReward: 'easy-complete',
    },
  },
  weapon: {
    name: '炫蓝光能枪',
    parts: DifficultyConfigs[DifficultyLevel.EASY].weaponParts,
    completeImage: '/assets/weapons/easy-weapon.png',
  },
};

/**
 * 中难度故事叙事配置
 */
export const MediumStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '巨力风暴沉睡在火山深处！炫蓝闪电带你穿越冰封森林，寻找「圆盘能量核心」唤醒力量！',
      sceneBackground: 'forest',
      weaponPartReward: 'medium-core',
    },
    1: {
      text: '火山开始喷发！巨力风暴正在觉醒，急需「三角瞄准镜」锁定目标！',
      sceneBackground: 'ocean',
      weaponPartReward: 'medium-scope',
    },
    2: {
      text: '巨力风暴吸收了火焰之力，变得更强大！需要「方形能量块」稳定能量！',
      sceneBackground: 'volcano',
      weaponPartReward: 'medium-block',
    },
    3: {
      text: '巨力风暴火焰形态即将完成！最后的「长方枪身外壳」能保护核心！',
      sceneBackground: 'desert',
      weaponPartReward: 'medium-body',
    },
    4: {
      text: '炫蓝闪电枪组装完成！巨力风暴火焰形态现身，决战开始！',
      sceneBackground: 'space',
      weaponPartReward: 'medium-complete',
    },
  },
  weapon: {
    name: '炫蓝闪电枪',
    parts: DifficultyConfigs[DifficultyLevel.MEDIUM].weaponParts,
    completeImage: '/assets/weapons/medium-weapon.png',
  },
};

/**
 * 高难度故事叙事配置
 */
export const HardStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '巨力风暴火焰形态逃脱后进入宇宙！穿越极光冰川，收集「雷霆能量环」启动终极武器！',
      sceneBackground: 'forest',
      weaponPartReward: 'hard-ring',
    },
    1: {
      text: '巨力风暴吸收宇宙能量，正在进化！「雷霆聚焦棱」能聚焦终极力量！',
      sceneBackground: 'ocean',
      weaponPartReward: 'hard-prism',
    },
    2: {
      text: '巨力风暴的力量达到巅峰！「雷霆稳定器」能稳定宇宙能量！',
      sceneBackground: 'volcano',
      weaponPartReward: 'hard-stabilizer',
    },
    3: {
      text: '巨力风暴终极形态即将诞生！「雷霆炮身」是最后的防线！',
      sceneBackground: 'desert',
      weaponPartReward: 'hard-barrel',
    },
    4: {
      text: '炫蓝雷霆炮组装完成！巨力风暴终极形态现身，终极决战！',
      sceneBackground: 'space',
      weaponPartReward: 'hard-complete',
    },
  },
  weapon: {
    name: '炫蓝雷霆炮',
    parts: DifficultyConfigs[DifficultyLevel.HARD].weaponParts,
    completeImage: '/assets/weapons/hard-weapon.png',
  },
};

/**
 * 所有难度故事配置映射
 */
export const QuestionStoryConfigs: Record<DifficultyLevel, QuestionStoryConfig> = {
  [DifficultyLevel.EASY]: EasyStoryConfig,
  [DifficultyLevel.MEDIUM]: MediumStoryConfig,
  [DifficultyLevel.HARD]: HardStoryConfig,
} as const;

/**
 * 第三关（1-3 七巧板）消防主题故事配置
 */

/**
 * 低难度故事叙事配置 - 炫光水炮枪
 */
export const EasyFirefightingStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '烈火修罗正在消防站值班！接到报警说有著火，需要「水炮核心」启动消防系统！',
      sceneBackground: 'forest',
      weaponPartReward: 'easy-core',
    },
    1: {
      text: '赶到现场发现是孩子在玩七巧板！但烈火修罗还是很紧张，需要「水管连接器」准备灭火！',
      sceneBackground: 'ocean',
      weaponPartReward: 'easy-emitter',
    },
    2: {
      text: '商场里也有"火情"！原来是七巧板拼的太阳！需要「水枪喷头」控制水流！',
      sceneBackground: 'volcano',
      weaponPartReward: 'easy-shield',
    },
    3: {
      text: '工厂冒烟了！烈火修罗想起过去的创伤…需要「消防锤破拆器」破门救人！',
      sceneBackground: 'desert',
      weaponPartReward: 'easy-shell',
    },
    4: {
      text: '原来是烟花表演！烈火修罗克服恐惧，炫光水炮枪组装完成！发现七巧板的魅力！',
      sceneBackground: 'space',
      weaponPartReward: 'easy-complete',
    },
  },
  weapon: {
    name: '炫光水炮枪',
    parts: DifficultyConfigs[DifficultyLevel.EASY].weaponParts,
    completeImage: '/assets/weapons/easy-weapon.png',
  },
};

/**
 * 中难度故事叙事配置 - 闪电灭火锤
 */
export const MediumFirefightingStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '消防站警报响起！烈火修罗需要「圆盘能量核心」启动灭火系统！',
      sceneBackground: 'forest',
      weaponPartReward: 'medium-core',
    },
    1: {
      text: '居民楼有"火情"！需要「三角瞄准镜」锁定水源位置！',
      sceneBackground: 'ocean',
      weaponPartReward: 'medium-scope',
    },
    2: {
      text: '商场里的七巧板展览着火了！需要「方形能量块」稳定水压！',
      sceneBackground: 'volcano',
      weaponPartReward: 'medium-block',
    },
    3: {
      text: '工厂的火势很大！烈火修罗克服恐惧，「长方枪身外壳」保护核心！',
      sceneBackground: 'desert',
      weaponPartReward: 'medium-body',
    },
    4: {
      text: '闪电灭火锤组装完成！烈火修罗勇敢面对火焰，成为真正的消防英雄！',
      sceneBackground: 'space',
      weaponPartReward: 'medium-complete',
    },
  },
  weapon: {
    name: '闪电灭火锤',
    parts: DifficultyConfigs[DifficultyLevel.MEDIUM].weaponParts,
    completeImage: '/assets/weapons/medium-weapon.png',
  },
};

/**
 * 高难度故事叙事配置 - 雷霆消防炮
 */
export const HardFirefightingStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '大型火灾警报！烈火修罗需要「雷霆能量环」启动消防总站！',
      sceneBackground: 'forest',
      weaponPartReward: 'hard-ring',
    },
    1: {
      text: '多处火情同时发生！「雷霆聚焦棱」能精准定位所有火源！',
      sceneBackground: 'ocean',
      weaponPartReward: 'hard-prism',
    },
    2: {
      text: '火势蔓延很快！「雷霆稳定器」能同时控制多个水枪！',
      sceneBackground: 'volcano',
      weaponPartReward: 'hard-stabilizer',
    },
    3: {
      text: '最后的火场！「雷霆炮身」发射高压水柱！坚持住！',
      sceneBackground: 'desert',
      weaponPartReward: 'hard-barrel',
    },
    4: {
      text: '雷霆消防炮组装完成！烈火修罗·终极形态变身，完全克服恐惧，出发灭火！',
      sceneBackground: 'space',
      weaponPartReward: 'hard-complete',
    },
  },
  weapon: {
    name: '雷霆消防炮',
    parts: DifficultyConfigs[DifficultyLevel.HARD].weaponParts,
    completeImage: '/assets/weapons/hard-weapon.png',
  },
};

/**
 * 第二关（1-2 平面图形的拼图）医疗主题故事配置
 */

/**
 * 低难度故事叙事配置 - 炫光医疗箱
 */
export const EasyMedicalStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '急救卫士正在摩城医院值班！突然接到求救信号，需要「医疗箱核心」启动救护系统！',
      sceneBackground: 'forest',
      weaponPartReward: 'easy-core',
    },
    1: {
      text: '救护车疾驰而出！需要「绷带固定器」为伤员包扎！但流言说他是「黑色救护车」…',
      sceneBackground: 'ocean',
      weaponPartReward: 'easy-emitter',
    },
    2: {
      text: '建筑工地有人受伤！需要「手术刀精准器」进行紧急处理！「拼命跑步有损健康」但救人要紧！',
      sceneBackground: 'volcano',
      weaponPartReward: 'easy-shield',
    },
    3: {
      text: '游乐场发生意外！需要「药剂调配器」制作急救药品！孩子们别怕，医生来了！',
      sceneBackground: 'desert',
      weaponPartReward: 'easy-shell',
    },
    4: {
      text: '炫光医疗箱组装完成！急救卫士变身战地医生，终极救援开始！',
      sceneBackground: 'space',
      weaponPartReward: 'easy-complete',
    },
  },
  weapon: {
    name: '炫光医疗箱',
    parts: DifficultyConfigs[DifficultyLevel.EASY].weaponParts,
    completeImage: '/assets/weapons/easy-weapon.png',
  },
};

/**
 * 中难度故事叙事配置 - 闪电手术刀
 */
export const MediumMedicalStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '急救卫士接到紧急手术通知！需要「圆盘能量核心」启动手术台！',
      sceneBackground: 'forest',
      weaponPartReward: 'medium-core',
    },
    1: {
      text: '救护车被堵在路上！需要「三角瞄准镜」锁定最佳路线！时间就是生命！',
      sceneBackground: 'ocean',
      weaponPartReward: 'medium-scope',
    },
    2: {
      text: '手术室里需要稳定能量！「方形能量块」能确保手术刀精准切割！',
      sceneBackground: 'volcano',
      weaponPartReward: 'medium-block',
    },
    3: {
      text: '伤员情况危急！「长方枪身外壳」能保护手术设备！急救卫士加油！',
      sceneBackground: 'desert',
      weaponPartReward: 'medium-body',
    },
    4: {
      text: '闪电手术刀组装完成！急救卫士展开精密手术，生命守护开始！',
      sceneBackground: 'space',
      weaponPartReward: 'medium-complete',
    },
  },
  weapon: {
    name: '闪电手术刀',
    parts: DifficultyConfigs[DifficultyLevel.MEDIUM].weaponParts,
    completeImage: '/assets/weapons/medium-weapon.png',
  },
};

/**
 * 高难度故事叙事配置 - 雷霆急救炮
 */
export const HardMedicalStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '大规模伤亡事件！急救卫士需要「雷霆能量环」启动急救站！',
      sceneBackground: 'forest',
      weaponPartReward: 'hard-ring',
    },
    1: {
      text: '灾区情况复杂！「雷霆聚焦棱」能精准定位伤员位置！',
      sceneBackground: 'ocean',
      weaponPartReward: 'hard-prism',
    },
    2: {
      text: '伤员太多需要稳定治疗！「雷霆稳定器」能同时治疗多个伤员！',
      sceneBackground: 'volcano',
      weaponPartReward: 'hard-stabilizer',
    },
    3: {
      text: '最后的重伤员！「雷霆炮身」发射急救药剂！坚持住！',
      sceneBackground: 'desert',
      weaponPartReward: 'hard-barrel',
    },
    4: {
      text: '雷霆急救炮组装完成！急救卫士·终极形态变身，全员救援开始！',
      sceneBackground: 'space',
      weaponPartReward: 'hard-complete',
    },
  },
  weapon: {
    name: '雷霆急救炮',
    parts: DifficultyConfigs[DifficultyLevel.HARD].weaponParts,
    completeImage: '/assets/weapons/hard-weapon.png',
  },
};