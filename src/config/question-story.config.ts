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
 * 消防主题武器零件 - 中难度
 */
const firefightingMediumWeaponParts = [
  { id: 'fire-medium-core', name: '灭火台核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'fire-medium-scope', name: '灭火瞄准镜', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'fire-medium-block', name: '灭火稳定块', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'fire-medium-body', name: '灭火锤外壳', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'fire-medium-complete', name: '灭火锤完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 消防主题武器零件 - 高难度
 */
const firefightingHardWeaponParts = [
  { id: 'fire-hard-ring', name: '消防能量环', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'fire-hard-prism', name: '消防聚焦棱', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'fire-hard-stabilizer', name: '消防稳定器', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'fire-hard-barrel', name: '消防炮身', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'fire-hard-complete', name: '消防炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 消防主题武器零件 - 低难度
 */
const firefightingEasyWeaponParts = [
  { id: 'easy-fire-core', name: '水炮核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'easy-fire-connector', name: '水管连接器', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'easy-fire-nozzle', name: '水枪喷头', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'easy-fire-stabilizer', name: '灭火器稳定器', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'easy-fire-complete', name: '水炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 低难度故事叙事配置 - 炫光水炮枪
 */
export const EasyFirefightingStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '烈火修罗正在消防站值班！接到报警说有著火，需要「水炮核心」启动消防系统！',
      sceneBackground: 'forest',
      weaponPartReward: 'easy-fire-core',
    },
    1: {
      text: '赶到现场发现是孩子在玩七巧板！但烈火修罗还是很紧张，需要「水管连接器」准备灭火！',
      sceneBackground: 'ocean',
      weaponPartReward: 'easy-fire-connector',
    },
    2: {
      text: '商场里也有"火情"！原来是七巧板拼的太阳！需要「水枪喷头」控制水流！',
      sceneBackground: 'volcano',
      weaponPartReward: 'easy-fire-nozzle',
    },
    3: {
      text: '工厂冒烟了！烈火修罗想起过去的创伤…需要「灭火器稳定器」破门救人！',
      sceneBackground: 'desert',
      weaponPartReward: 'easy-fire-stabilizer',
    },
    4: {
      text: '原来是烟花表演！烈火修罗克服恐惧，炫光水炮枪组装完成！发现七巧板的魅力！',
      sceneBackground: 'space',
      weaponPartReward: 'easy-fire-complete',
    },
  },
  weapon: {
    name: '炫光水炮枪',
    parts: firefightingEasyWeaponParts,
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
      text: '消防站警报响起！烈火修罗需要「灭火台核心」启动灭火系统！',
      sceneBackground: 'forest',
      weaponPartReward: 'fire-medium-core',
    },
    1: {
      text: '居民楼有"火情"！需要「灭火瞄准镜」锁定水源位置！',
      sceneBackground: 'ocean',
      weaponPartReward: 'fire-medium-scope',
    },
    2: {
      text: '商场里的七巧板展览着火了！需要「灭火稳定块」稳定水压！',
      sceneBackground: 'volcano',
      weaponPartReward: 'fire-medium-block',
    },
    3: {
      text: '工厂的火势很大！烈火修罗克服恐惧，「灭火锤外壳」保护核心！',
      sceneBackground: 'desert',
      weaponPartReward: 'fire-medium-body',
    },
    4: {
      text: '闪电灭火锤组装完成！烈火修罗勇敢面对火焰，成为真正的消防英雄！',
      sceneBackground: 'space',
      weaponPartReward: 'fire-medium-complete',
    },
  },
  weapon: {
    name: '闪电灭火锤',
    parts: firefightingMediumWeaponParts,
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
      text: '大型火灾警报！烈火修罗需要「消防能量环」启动消防总站！',
      sceneBackground: 'forest',
      weaponPartReward: 'fire-hard-ring',
    },
    1: {
      text: '多处火情同时发生！「消防聚焦棱」能精准定位所有火源！',
      sceneBackground: 'ocean',
      weaponPartReward: 'fire-hard-prism',
    },
    2: {
      text: '火势蔓延很快！「消防稳定器」能同时控制多个水枪！',
      sceneBackground: 'volcano',
      weaponPartReward: 'fire-hard-stabilizer',
    },
    3: {
      text: '最后的火场！「消防炮身」发射高压水柱！坚持住！',
      sceneBackground: 'desert',
      weaponPartReward: 'fire-hard-barrel',
    },
    4: {
      text: '雷霆消防炮组装完成！烈火修罗·终极形态变身，完全克服恐惧，出发灭火！',
      sceneBackground: 'space',
      weaponPartReward: 'fire-hard-complete',
    },
  },
  weapon: {
    name: '雷霆消防炮',
    parts: firefightingHardWeaponParts,
    completeImage: '/assets/weapons/hard-weapon.png',
  },
};

/**
 * 第二关（1-2 平面图形的拼图）医疗主题故事配置
 */

/**
 * 医疗主题武器零件 - 中难度
 */
const medicalMediumWeaponParts = [
  { id: 'medical-medium-core', name: '手术台核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'medical-medium-scope', name: '手术瞄准镜', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'medical-medium-block', name: '手术稳定块', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'medical-medium-body', name: '手术刀外壳', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'medical-medium-complete', name: '手术刀完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 医疗主题武器零件 - 高难度
 */
const medicalHardWeaponParts = [
  { id: 'medical-hard-ring', name: '急救能量环', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'medical-hard-prism', name: '急救聚焦棱', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'medical-hard-stabilizer', name: '急救稳定器', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'medical-hard-barrel', name: '急救炮身', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'medical-hard-complete', name: '急救炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 医疗主题武器零件 - 低难度
 */
const medicalEasyWeaponParts = [
  { id: 'easy-medical-core', name: '医疗箱核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'easy-medical-bandage', name: '绷带固定器', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'easy-medical-precision', name: '手术刀精准器', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'easy-medical-mixer', name: '药剂调配器', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'easy-medical-complete', name: '医疗箱完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 低难度故事叙事配置 - 炫光医疗箱
 */
export const EasyMedicalStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '急救卫士正在摩城医院值班！突然接到求救信号，需要「医疗箱核心」启动救护系统！',
      sceneBackground: 'forest',
      weaponPartReward: 'easy-medical-core',
    },
    1: {
      text: '救护车疾驰而出！需要「绷带固定器」为伤员包扎！但流言说他是「黑色救护车」…',
      sceneBackground: 'ocean',
      weaponPartReward: 'easy-medical-bandage',
    },
    2: {
      text: '建筑工地有人受伤！需要「手术刀精准器」进行紧急处理！「拼命跑步有损健康」但救人要紧！',
      sceneBackground: 'volcano',
      weaponPartReward: 'easy-medical-precision',
    },
    3: {
      text: '游乐场发生意外！需要「药剂调配器」制作急救药品！孩子们别怕，医生来了！',
      sceneBackground: 'desert',
      weaponPartReward: 'easy-medical-mixer',
    },
    4: {
      text: '炫光医疗箱组装完成！急救卫士变身战地医生，终极救援开始！',
      sceneBackground: 'space',
      weaponPartReward: 'easy-medical-complete',
    },
  },
  weapon: {
    name: '炫光医疗箱',
    parts: medicalEasyWeaponParts,
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
      text: '急救卫士接到紧急手术通知！需要「手术台核心」启动手术台！',
      sceneBackground: 'forest',
      weaponPartReward: 'medical-medium-core',
    },
    1: {
      text: '救护车被堵在路上！需要「手术瞄准镜」锁定最佳路线！时间就是生命！',
      sceneBackground: 'ocean',
      weaponPartReward: 'medical-medium-scope',
    },
    2: {
      text: '手术室里需要稳定能量！「手术稳定块」能确保手术刀精准切割！',
      sceneBackground: 'volcano',
      weaponPartReward: 'medical-medium-block',
    },
    3: {
      text: '伤员情况危急！「手术刀外壳」能保护手术设备！急救卫士加油！',
      sceneBackground: 'desert',
      weaponPartReward: 'medical-medium-body',
    },
    4: {
      text: '闪电手术刀组装完成！急救卫士展开精密手术，生命守护开始！',
      sceneBackground: 'space',
      weaponPartReward: 'medical-medium-complete',
    },
  },
  weapon: {
    name: '闪电手术刀',
    parts: medicalMediumWeaponParts,
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
      text: '大规模伤亡事件！急救卫士需要「急救能量环」启动急救站！',
      sceneBackground: 'forest',
      weaponPartReward: 'medical-hard-ring',
    },
    1: {
      text: '灾区情况复杂！「急救聚焦棱」能精准定位伤员位置！',
      sceneBackground: 'ocean',
      weaponPartReward: 'medical-hard-prism',
    },
    2: {
      text: '伤员太多需要稳定治疗！「急救稳定器」能同时治疗多个伤员！',
      sceneBackground: 'volcano',
      weaponPartReward: 'medical-hard-stabilizer',
    },
    3: {
      text: '最后的重伤员！「急救炮身」发射急救药剂！坚持住！',
      sceneBackground: 'desert',
      weaponPartReward: 'medical-hard-barrel',
    },
    4: {
      text: '雷霆急救炮组装完成！急救卫士·终极形态变身，全员救援开始！',
      sceneBackground: 'space',
      weaponPartReward: 'medical-hard-complete',
    },
  },
  weapon: {
    name: '雷霆急救炮',
    parts: medicalHardWeaponParts,
    completeImage: '/assets/weapons/hard-weapon.png',
  },
};

/**
 * 第四关（2-1 暗影特工 - 十几减 9）暗影主题故事配置
 */

/**
 * 暗影主题武器零件 - 新手模式
 */
const shadowEasyWeaponParts = [
  { id: 'shadow-easy-core', name: '暗影核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'shadow-easy-blade', name: '潜行刀刃', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'shadow-easy-handle', name: '隐形手柄', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'shadow-easy-guard', name: '暗影护手', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'shadow-easy-complete', name: '潜行刃完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 暗影主题武器零件 - 挑战模式
 */
const shadowMediumWeaponParts = [
  { id: 'shadow-medium-core', name: '突击核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'shadow-medium-scope', name: '暗影瞄准镜', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'shadow-medium-block', name: '隐形能量块', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'shadow-medium-complete', name: '突击枪完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 暗影主题武器零件 - 高手模式
 */
const shadowHardWeaponParts = [
  { id: 'shadow-hard-ring', name: '暗影能量环', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'shadow-hard-prism', name: '暗影聚焦棱', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'shadow-hard-barrel', name: '雷霆炮身', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'shadow-hard-complete', name: '暗影炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 新手难度故事叙事配置 - 炫影潜行刃
 */
export const EasyShadowStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '暗影特工带你来到城市直升机基地！第一道密码门：需要破解「暗影核心」密码！',
      sceneBackground: 'forest',
      weaponPartReward: 'shadow-easy-core',
    },
    1: {
      text: '第二道密码门出现！需要「潜行刀刃」才能切开密码锁！',
      sceneBackground: 'ocean',
      weaponPartReward: 'shadow-easy-blade',
    },
    2: {
      text: '第三道密码门更难！「隐形手柄」能帮你握住武器继续前进！',
      sceneBackground: 'volcano',
      weaponPartReward: 'shadow-easy-handle',
    },
    3: {
      text: '第四道密码门是最终考验！「暗影护手」保护你的手臂！',
      sceneBackground: 'desert',
      weaponPartReward: 'shadow-easy-guard',
    },
    4: {
      text: '第五道密码门打开！炫影潜行刃组装完成！暗影特工出击！',
      sceneBackground: 'space',
      weaponPartReward: 'shadow-easy-complete',
    },
  },
  weapon: {
    name: '炫影潜行刃',
    parts: shadowEasyWeaponParts,
    completeImage: '/assets/weapons/easy-weapon.png',
  },
};

/**
 * 挑战难度故事叙事配置 - 暗影突击枪
 */
export const MediumShadowStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '暗影特工带你潜入地下秘密基地！入口密码需要「突击核心」破解！',
      sceneBackground: 'forest',
      weaponPartReward: 'shadow-medium-core',
    },
    1: {
      text: '基地大厅有多重密码锁！「暗影瞄准镜」能精准锁定目标！',
      sceneBackground: 'ocean',
      weaponPartReward: 'shadow-medium-scope',
    },
    2: {
      text: '密室中有隐形陷阱！「隐形能量块」能探测隐形障碍！',
      sceneBackground: 'volcano',
      weaponPartReward: 'shadow-medium-block',
    },
    3: {
      text: '暗影实验室的终极密码门！全部零件组装完成！',
      sceneBackground: 'space',
      weaponPartReward: 'shadow-medium-complete',
    },
  },
  weapon: {
    name: '暗影突击枪',
    parts: shadowMediumWeaponParts,
    completeImage: '/assets/weapons/medium-weapon.png',
  },
};

/**
 * 高手难度故事叙事配置 - 雷霆暗影炮
 */
export const HardShadowStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '暗影特工带你穿越时空裂缝！入口密码需要「暗影能量环」启动！',
      sceneBackground: 'forest',
      weaponPartReward: 'shadow-hard-ring',
    },
    1: {
      text: '时空通道扭曲变形！「暗影聚焦棱」能聚焦时空能量！',
      sceneBackground: 'ocean',
      weaponPartReward: 'shadow-hard-prism',
    },
    2: {
      text: '时空核心需要最终武器！「雷霆炮身」发射时空能量！',
      sceneBackground: 'volcano',
      weaponPartReward: 'shadow-hard-barrel',
    },
    3: {
      text: '终极形态觉醒！雷霆暗影炮组装完成！暗影特工终极形态变身！',
      sceneBackground: 'space',
      weaponPartReward: 'shadow-hard-complete',
    },
  },
  weapon: {
    name: '雷霆暗影炮',
    parts: shadowHardWeaponParts,
    completeImage: '/assets/weapons/hard-weapon.png',
  },
};

/**
 * 按关卡ID映射的故事配置
 */
export const LevelStoryConfigs: Record<string, Record<DifficultyLevel, QuestionStoryConfig>> = {
  '1-1': {
    [DifficultyLevel.EASY]: EasyStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumStoryConfig,
    [DifficultyLevel.HARD]: HardStoryConfig,
  },
  '1-2': {
    [DifficultyLevel.EASY]: EasyMedicalStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumMedicalStoryConfig,
    [DifficultyLevel.HARD]: HardMedicalStoryConfig,
  },
  '1-3': {
    [DifficultyLevel.EASY]: EasyFirefightingStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumFirefightingStoryConfig,
    [DifficultyLevel.HARD]: HardFirefightingStoryConfig,
  },
  '2-1': {
    [DifficultyLevel.EASY]: EasyShadowStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumShadowStoryConfig,
    [DifficultyLevel.HARD]: HardShadowStoryConfig,
  },
} as const;