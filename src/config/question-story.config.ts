import { getAssetPath } from '@/config/paths.config';
import { DifficultyLevel, type DifficultyConfig, type QuestionStoryConfig, type SceneType } from '@/types';

/**
 * 场景背景配置
 */
export const SceneBackgrounds: Record<SceneType, { gradient: string; elements: string }> = {
  forest: {
    gradient: 'linear-gradient(180deg, #1a4d2e 0%, #2d5a3f 30%, #4a7c4f 70%, #87ceeb 100%)',
    elements: getAssetPath(getAssetPath('/assets/kenney/Side/tree_default.png')),
  },
  ocean: {
    gradient: 'linear-gradient(180deg, #0077be 0%, #00a8cc 30%, #40e0d0 70%, #f0f8ff 100%)',
    elements: getAssetPath(getAssetPath('/assets/kenney/PNG/Retina/Ships/ship (1).png')),
  },
  volcano: {
    gradient: 'linear-gradient(180deg, #8b0000 0%, #ff4500 30%, #ff6b35 70%, #ffd700 100%)',
    elements: getAssetPath(getAssetPath('/assets/kenney/PNG/Retina/Effects/fire1.png')),
  },
  desert: {
    gradient: 'linear-gradient(180deg, #c2956e 0%, #d4a76a 30%, #e6c89c 70%, #87ceeb 100%)',
    elements: getAssetPath(getAssetPath('/assets/kenney/Isometric/crops_dirtDoubleRowCorner_NE.png')),
  },
  space: {
    gradient: 'linear-gradient(180deg, #0a0a2e 0%, #1a1a4e 30%, #2a2a6e 70%, #4a4a9e 100%)',
    elements: getAssetPath(getAssetPath('/assets/kenney/PNG/Retina/Effects/explosion1.png')),
  },
} as const;

/**
 * 武器零件图标（使用实际武器零件图片）
 */
const shapeIcons = {
  circle: getAssetPath(getAssetPath('/assets/weapons/光能核心.png')),
  triangle: getAssetPath(getAssetPath('/assets/weapons/光能发射器.png')),
  square: getAssetPath(getAssetPath('/assets/weapons/光能护盾.png')),
  rectangle: getAssetPath(getAssetPath('/assets/weapons/光能外壳.png')),
  composite: getAssetPath(getAssetPath('/assets/weapons/easy-weapon.png')),
};

/**
 * 三档难度配置（通用零件配置）
 * 注意：武器图片现在通过 weapon-configs.data.ts 根据角色动态获取
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
    starRequirement: 0.6,  // 60% 星星过关
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-xuanlan-shandian-light.png')),
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
    starMultiplier: 1.5,
    starRequirement: 0.8,  // 80% 星星过关
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-xuanlan-shandian-bolt.png')),
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
    starMultiplier: 2.0,
    starRequirement: 1.0,  // 100% 星星过关
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-xuanlan-shandian-thunder.png')),
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
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-xuanlan-shandian-light.png')),
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
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-xuanlan-shandian-bolt.png')),
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
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-xuanlan-shandian-thunder.png')),
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
    name: '炫光火焰枪',
    parts: firefightingEasyWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-liehuo-xiuluo-fire.png')),
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
    name: '闪电烈焰锤',
    parts: firefightingMediumWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-liehuo-xiuluo-hammer.png')),
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
    name: '雷霆焚天炮',
    parts: firefightingHardWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-liehuo-xiuluo-inferno.png')),
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
    name: '炫光医疗枪',
    parts: medicalEasyWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-jiushi-weishi-medical.png')),
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
    name: '闪电医疗钻',
    parts: medicalMediumWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-jiushi-weishi-drill.png')),
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
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-jiushi-weishi-thunder.png')),
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
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-anying-tegong-blade.png')),
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
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-anying-tegong-assault.png')),
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
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-anying-tegong-thunder.png')),
  },
};

// ========== 铁臂爵士（2-2）专属配置 ==========
/**
 * 铁臂爵士武器零件配置 - 新手难度
 */
const ironArmEasyWeaponParts = [
  { id: 'ironarm-easy-core', name: '钻探核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'ironarm-easy-drill', name: '钢铁钻头', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'ironarm-easy-arm', name: '铁臂关节', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'ironarm-easy-shell', name: '重拳外壳', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'ironarm-easy-complete', name: '炫光重拳炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 铁臂爵士武器零件配置 - 挑战难度
 */
const ironArmMediumWeaponParts = [
  { id: 'ironarm-medium-core', name: '深层探测核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'ironarm-medium-sensor', name: '震动传感器', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'ironarm-medium-armor', name: '钢铁装甲', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'ironarm-medium-arm', name: '闪电钢铁臂', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'ironarm-medium-complete', name: '闪电钢铁臂完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 铁臂爵士武器零件配置 - 高手难度
 */
const ironArmHardWeaponParts = [
  { id: 'ironarm-hard-core', name: '岩层探测核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'ironarm-hard-prism', name: '深层聚焦棱', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'ironarm-hard-stabilizer', name: '粉碎稳定器', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'ironarm-hard-barrel', name: '雷霆粉碎炮身', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'ironarm-hard-complete', name: '雷霆粉碎炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 铁臂爵士故事配置 - 新手难度
 */
export const EasyIronArmStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '轰隆隆——铁臂爵士从地下隧道现身："小俊！虽然我失明了，但我的耳朵能听到岩石的心跳！破十法就是我的钻探密码！"',
      sceneBackground: 'forest',
      weaponPartReward: 'ironarm-easy-core',
    },
    1: {
      text: '铁臂爵士挥动钢铁手臂："12减8？把12分成10和2，10减8得2，2加2等于4！这就是破十法！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'ironarm-easy-drill',
    },
    2: {
      text: '铁臂爵士："每打通一条隧道，我就为小动物们找到一个新的家！继续用破十法帮我前进！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'ironarm-easy-arm',
    },
    3: {
      text: '铁臂爵士："我的手臂能感受岩石的温度！你的破十法越来越熟练了！"',
      sceneBackground: 'desert',
      weaponPartReward: 'ironarm-easy-shell',
    },
    4: {
      text: '铁臂爵士："炫光重拳炮组装完成！我们一起守护地下的和平！"',
      sceneBackground: 'space',
      weaponPartReward: 'ironarm-easy-complete',
    },
  },
  weapon: {
    name: '炫光重拳炮',
    parts: ironArmEasyWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-weapon.png')),
  },
};

/**
 * 铁臂爵士故事配置 - 挑战难度
 */
export const MediumIronArmStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '铁臂爵士："小俊！隧道网络需要扩展！更复杂的破十法题目等着我们！"',
      sceneBackground: 'forest',
      weaponPartReward: 'ironarm-medium-core',
    },
    1: {
      text: '铁臂爵士："15减7？把15分成10和5，10减7得3，3加5等于8！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'ironarm-medium-sensor',
    },
    2: {
      text: '铁臂爵士："我的钢铁手臂感受着每一次震动！破十法的秘密你已经掌握了！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'ironarm-medium-armor',
    },
    3: {
      text: '铁臂爵士："闪电钢铁臂充能完毕！继续前进！"',
      sceneBackground: 'desert',
      weaponPartReward: 'ironarm-medium-arm',
    },
    4: {
      text: '铁臂爵士："闪电钢铁臂组装完成！隧道网络又扩展了！你就是我的眼！"',
      sceneBackground: 'space',
      weaponPartReward: 'ironarm-medium-complete',
    },
  },
  weapon: {
    name: '闪电钢铁臂',
    parts: ironArmMediumWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-weapon.png')),
  },
};

/**
 * 铁臂爵士故事配置 - 高手难度
 */
export const HardIronArmStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '铁臂爵士："深层岩层出现了！只有最强的破十法才能突破！"',
      sceneBackground: 'forest',
      weaponPartReward: 'ironarm-hard-core',
    },
    1: {
      text: '铁臂爵士："17减9？10减9得1，1加7等于8！深层密码破解！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'ironarm-hard-prism',
    },
    2: {
      text: '铁臂爵士："我能听到地下暗河的声音！雷霆粉碎炮正在充能！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'ironarm-hard-stabilizer',
    },
    3: {
      text: '铁臂爵士："最后的岩层！破十法的终极力量！"',
      sceneBackground: 'desert',
      weaponPartReward: 'ironarm-hard-barrel',
    },
    4: {
      text: '铁臂爵士："雷霆粉碎炮组装完成！深层世界已经打开！谢谢你，我的眼！"',
      sceneBackground: 'space',
      weaponPartReward: 'ironarm-hard-complete',
    },
  },
  weapon: {
    name: '雷霆粉碎炮',
    parts: ironArmHardWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-weapon.png')),
  },
};

// ========== 喷射加仑（2-3）专属配置 ==========
/**
 * 喷射加仑武器零件配置 - 新手难度
 */
const gallonEasyWeaponParts = [
  { id: 'gallon-easy-core', name: '水炮核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'gallon-easy-nozzle', name: '喷射嘴', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'gallon-easy-tank', name: '水箱', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'gallon-easy-pipe', name: '高压水管', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'gallon-easy-complete', name: '炫光水炮枪完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 喷射加仑武器零件配置 - 挑战难度
 */
const gallonMediumWeaponParts = [
  { id: 'gallon-medium-core', name: '高压水核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'gallon-medium-pump', name: '增压泵', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'gallon-medium-armor', name: '水龙装甲', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'gallon-medium-cannon', name: '水龙炮身', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'gallon-medium-complete', name: '闪电水龙炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 喷射加仑武器零件配置 - 高手难度
 */
const gallonHardWeaponParts = [
  { id: 'gallon-hard-core', name: '海啸能量核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'gallon-hard-funnel', name: '海啸聚焦漏斗', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'gallon-hard-stabilizer', name: '海啸稳定器', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'gallon-hard-barrel', name: '雷霆海啸炮身', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'gallon-hard-complete', name: '雷霆海啸炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 喷射加仑故事配置 - 新手难度
 */
export const EasyGallonStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '嗖——喷射加仑从天而降："小俊！我是消防战士喷射加仑！破十法速度挑战开始！"',
      sceneBackground: 'forest',
      weaponPartReward: 'gallon-easy-core',
    },
    1: {
      text: '喷射加仑："11减9？10减9得1，1加1等于2！快速计算是消防员的基本功！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'gallon-easy-nozzle',
    },
    2: {
      text: '喷射加仑："我的高压水炮需要数学能量！破十法越快，水柱越强！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'gallon-easy-tank',
    },
    3: {
      text: '喷射加仑："消防员要在30秒内到达现场！你的破十法速度也在提升！"',
      sceneBackground: 'desert',
      weaponPartReward: 'gallon-easy-pipe',
    },
    4: {
      text: '喷射加仑："炫光水炮枪组装完成！准备执行灭火任务！"',
      sceneBackground: 'space',
      weaponPartReward: 'gallon-easy-complete',
    },
  },
  weapon: {
    name: '炫光水炮枪',
    parts: gallonEasyWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-weapon.png')),
  },
};

/**
 * 喷射加仑故事配置 - 挑战难度
 */
export const MediumGallonStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '喷射加仑："水炮升级挑战！更快的速度，更强的水柱！"',
      sceneBackground: 'forest',
      weaponPartReward: 'gallon-medium-core',
    },
    1: {
      text: '喷射加仑："14减6？10减6得4，4加4等于8！速度就是生命！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'gallon-medium-pump',
    },
    2: {
      text: '喷射加仑："闪电水龙炮正在充能！继续保持速度！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'gallon-medium-armor',
    },
    3: {
      text: '喷射加仑："你的计算速度已经接近我的喷射速度了！"',
      sceneBackground: 'desert',
      weaponPartReward: 'gallon-medium-cannon',
    },
    4: {
      text: '喷射加仑："闪电水龙炮组装完成！我们一起守护城市的平安！"',
      sceneBackground: 'space',
      weaponPartReward: 'gallon-medium-complete',
    },
  },
  weapon: {
    name: '闪电水龙炮',
    parts: gallonMediumWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-weapon.png')),
  },
};

/**
 * 喷射加仑故事配置 - 高手难度
 */
export const HardGallonStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '喷射加仑："极速救援任务！这是最严峻的考验！"',
      sceneBackground: 'forest',
      weaponPartReward: 'gallon-hard-core',
    },
    1: {
      text: '喷射加仑："16减8？10减8得2，2加6等于8！速度极限突破！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'gallon-hard-funnel',
    },
    2: {
      text: '喷射加仑："雷霆海啸炮能量聚集中！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'gallon-hard-stabilizer',
    },
    3: {
      text: '喷射加仑："最后考验！速度与准确率的完美结合！"',
      sceneBackground: 'desert',
      weaponPartReward: 'gallon-hard-barrel',
    },
    4: {
      text: '喷射加仑："雷霆海啸炮组装完成！你已经超越了我的速度极限！"',
      sceneBackground: 'space',
      weaponPartReward: 'gallon-hard-complete',
    },
  },
  weapon: {
    name: '雷霆海啸炮',
    parts: gallonHardWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-weapon.png')),
  },
};

// ========== 裂变骑士（2-4）专属配置 ==========
/**
 * 裂变骑士武器零件配置 - 新手难度
 */
const fissionEasyWeaponParts = [
  { id: 'fission-easy-core', name: '分裂核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'fission-easy-crystal', name: '裂变水晶', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'fission-easy-panel', name: '分裂面板', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'fission-easy-body', name: '分裂枪身', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'fission-easy-complete', name: '炫光分裂枪完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 裂变骑士武器零件配置 - 挑战难度
 */
const fissionMediumWeaponParts = [
  { id: 'fission-medium-core', name: '量子分裂核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'fission-medium-lens', name: '裂变透镜', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'fission-medium-armor', name: '裂变装甲', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'fission-medium-blade', name: '裂变刃身', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'fission-medium-complete', name: '闪电裂变刃完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 裂变骑士武器零件配置 - 高手难度
 */
const fissionHardWeaponParts = [
  { id: 'fission-hard-core', name: '终极分裂核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'fission-hard-prism', name: '量子聚焦棱', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'fission-hard-stabilizer', name: '量子稳定器', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'fission-hard-barrel', name: '雷霆量子炮身', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'fission-hard-complete', name: '雷霆量子炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 裂变骑士故事配置 - 新手难度
 */
export const EasyFissionStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '轰隆——裂变骑士从闪电中现身："小俊！我是裂变骑士，第二单元最强守护者！破十法的终极考验等着你！"',
      sceneBackground: 'forest',
      weaponPartReward: 'fission-easy-core',
    },
    1: {
      text: '裂变骑士分裂成两个分身："13减5？10减5得5，5加3等于8！我的分身见证了你的实力！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'fission-easy-crystal',
    },
    2: {
      text: '裂变骑士分裂成三个分身："三个分身，三倍的考验！继续用破十法！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'fission-easy-panel',
    },
    3: {
      text: '裂变骑士："炫光分裂枪正在组装！你已经接近成功了！"',
      sceneBackground: 'desert',
      weaponPartReward: 'fission-easy-body',
    },
    4: {
      text: '裂变骑士："炫光分裂枪组装完成！你通过了基础考验！"',
      sceneBackground: 'space',
      weaponPartReward: 'fission-easy-complete',
    },
  },
  weapon: {
    name: '炫光分裂枪',
    parts: fissionEasyWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-weapon.png')),
  },
};

/**
 * 裂变骑士故事配置 - 挑战难度
 */
export const MediumFissionStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '裂变骑士："分身挑战开始！我的分身会提出更难的问题！"',
      sceneBackground: 'forest',
      weaponPartReward: 'fission-medium-core',
    },
    1: {
      text: '裂变骑士分身A："15减8？10减8得2，2加5等于7！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'fission-medium-lens',
    },
    2: {
      text: '裂变骑士分身B："闪电裂变刃需要数学能量充能！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'fission-medium-armor',
    },
    3: {
      text: '裂变骑士："所有分身都认可了你的实力！"',
      sceneBackground: 'desert',
      weaponPartReward: 'fission-medium-blade',
    },
    4: {
      text: '裂变骑士："闪电裂变刃组装完成！你的破十法已经炉火纯青！"',
      sceneBackground: 'space',
      weaponPartReward: 'fission-medium-complete',
    },
  },
  weapon: {
    name: '闪电裂变刃',
    parts: fissionMediumWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-weapon.png')),
  },
};

/**
 * 裂变骑士故事配置 - 高手难度
 */
export const HardFissionStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '裂变骑士分裂成五个分身："终极裂变战！五个分身，五倍考验！"',
      sceneBackground: 'forest',
      weaponPartReward: 'fission-hard-core',
    },
    1: {
      text: '裂变骑士五个分身齐声："18减9？10减9得1，1加8等于9！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'fission-hard-prism',
    },
    2: {
      text: '裂变骑士："雷霆量子炮能量汇聚中！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'fission-hard-stabilizer',
    },
    3: {
      text: '裂变骑士："你是我见过最强的挑战者！"',
      sceneBackground: 'desert',
      weaponPartReward: 'fission-hard-barrel',
    },
    4: {
      text: '裂变骑士合体："雷霆量子炮组装完成！你击败了我！第二单元的荣耀属于你！"',
      sceneBackground: 'space',
      weaponPartReward: 'fission-hard-complete',
    },
  },
  weapon: {
    name: '雷霆量子炮',
    parts: fissionHardWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-weapon.png')),
  },
};

// ========== 霹雳火影（4-3）专属配置 ==========
/**
 * 霹雳火影武器零件配置 - 新手难度
 */
const thunderEasyWeaponParts = [
  { id: 'thunder-easy-core', name: '闪电探测核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'thunder-easy-navigator', name: '闪电导航仪', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'thunder-easy-blade', name: '雷切剑刃', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'thunder-easy-shield', name: '闪电护盾管', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'thunder-easy-complete', name: '炫光雷切剑完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 霹雳火影武器零件配置 - 挑战难度
 */
const thunderMediumWeaponParts = [
  { id: 'thunder-medium-core', name: '闪电探测核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'thunder-medium-calculator', name: '闪电计算仪', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'thunder-medium-armor', name: '闪电装甲板', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'thunder-medium-meter', name: '闪电计量管', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'thunder-medium-complete', name: '霹雳火影战炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 霹雳火影武器零件配置 - 高手难度
 */
const thunderHardWeaponParts = [
  { id: 'thunder-hard-core', name: '伙伴闪电核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'thunder-hard-fairness', name: '闪电公平仪', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'thunder-hard-master', name: '闪电大师系统', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'thunder-hard-armor', name: '闪电装甲管', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'thunder-hard-complete', name: '霹雳火影终极炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 霹雳火影故事配置 - 新手难度
 */
export const EasyThunderStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '忍者村深处，紫色闪电划破夜空！霹雳火影从影中现身："小俊，我是来自忍者村的闪电忍者！我的雷切剑需要数学能量激活——个位相加减，十位不变！"',
      sceneBackground: 'forest',
      weaponPartReward: 'thunder-easy-core',
    },
    1: {
      text: '霹雳火影双手结印："第一关通过！影分身之术需要「闪电导航仪」来锁定目标！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'thunder-easy-navigator',
    },
    2: {
      text: '三个影分身同时出现："不错！基础考验通过...但真正的闪电挑战才刚开始！「雷切剑刃」能帮你切开障碍！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'thunder-easy-blade',
    },
    3: {
      text: '霹雳火影收起雷切剑："你的计算速度让我印象深刻！「闪电护盾管」保护你进入最终考验！"',
      sceneBackground: 'desert',
      weaponPartReward: 'thunder-easy-shield',
    },
    4: {
      text: '炫光雷切剑组装完成！霹雳火影："你通过了忍者入门考验！记住，忍者的力量来自精准的计算——个位变了，十位永远不变！"',
      sceneBackground: 'space',
      weaponPartReward: 'thunder-easy-complete',
    },
  },
  weapon: {
    name: '炫光雷切剑',
    parts: thunderEasyWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-weapon.png')),
  },
};

/**
 * 霹雳火影故事配置 - 挑战难度
 */
export const MediumThunderStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '霹雳火影站在训练场中央，紫色查克拉环绕周身："小俊！我的影分身需要精确的数学能量才能维持！个位相加减，十位不变——这是忍者的基本功！"',
      sceneBackground: 'forest',
      weaponPartReward: 'thunder-medium-core',
    },
    1: {
      text: '霹雳火影双手结印："影分身之术！" 三个分身同时出现："来吧，让我看看你的计算速度！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'thunder-medium-calculator',
    },
    2: {
      text: '影分身们开始快速移动！"你的速度不错...但能不能跟上我的「闪电装甲板」防御？"',
      sceneBackground: 'volcano',
      weaponPartReward: 'thunder-medium-armor',
    },
    3: {
      text: '影分身们同时消失，霹雳火影单膝跪地："厉害...你的计算速度竟然超过了我的影分身！霹雳火影战炮组装完成！"',
      sceneBackground: 'space',
      weaponPartReward: 'thunder-medium-complete',
    },
  },
  weapon: {
    name: '霹雳火影战炮',
    parts: thunderMediumWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-weapon.png')),
  },
};

/**
 * 霹雳火影故事配置 - 高手难度
 */
export const HardThunderStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '忍者训练场上空乌云密布，霹雳火影悬浮空中："小俊团队，我一直在寻找能继承万雷归宗的传人！不进位、不退位——这是闪电忍术的核心法则！"',
      sceneBackground: 'forest',
      weaponPartReward: 'thunder-hard-core',
    },
    1: {
      text: '天空降下无数闪电："万雷归宗需要最强的心智！让我看看你的「闪电公平仪」能否承受这股力量！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'thunder-hard-fairness',
    },
    2: {
      text: '闪电在周围形成电网："不错！你的计算能力已经接近我的水平！「闪电大师系统」即将激活！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'thunder-hard-master',
    },
    3: {
      text: '天空放晴，霹雳火影降落："万雷归宗...终于找到传人了！我的忍术只改变个位，十位永恒不变——这就是闪电的真理！霹雳火影终极炮装备完成！"',
      sceneBackground: 'space',
      weaponPartReward: 'thunder-hard-complete',
    },
  },
  weapon: {
    name: '霹雳火影终极炮',
    parts: thunderHardWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-weapon.png')),
  },
};

// ========== 暴烈重卡（3-1）专属配置 ==========
/**
 * 暴烈重卡武器零件配置 - 新手难度
 */
const truckEasyWeaponParts = [
  { id: 'truck-easy-core', name: '运输核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'truck-easy-engine', name: '重卡引擎', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'truck-easy-armor', name: '载重装甲', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'truck-easy-body', name: '运输车身', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'truck-easy-complete', name: '炫光冲撞炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 暴烈重卡武器零件配置 - 挑战难度
 */
const truckMediumWeaponParts = [
  { id: 'truck-medium-core', name: '重装核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'truck-medium-turbo', name: '涡轮增压', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'truck-medium-plate', name: '强化装甲板', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'truck-medium-frame', name: '突击车架', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'truck-medium-complete', name: '闪电重卡炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 暴烈重卡武器零件配置 - 高手难度
 */
const truckHardWeaponParts = [
  { id: 'truck-hard-core', name: '毁灭核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'truck-hard-reactor', name: '聚变反应堆', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'truck-hard-shield', name: '终极护盾', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'truck-hard-cannon', name: '毁灭炮身', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'truck-hard-complete', name: '雷霆毁灭炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 暴烈重卡故事配置 - 新手难度
 */
export const EasyTruckStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '轰隆隆——一辆巨型卡车驶入矿区！暴烈重卡说："小俊！我是运输战士暴烈重卡！矿区有大量货物需要清点，你能帮我吗？"',
      sceneBackground: 'forest',
      weaponPartReward: 'truck-easy-core',
    },
    1: {
      text: '暴烈重卡指着货物堆："这些货物堆成捆了！6个十和3个一等于多少？数清楚才能装车运输！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'truck-easy-engine',
    },
    2: {
      text: '货物越来越多！"不错！你的数数能力很强！继续帮我清点，运输任务才能按时完成！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'truck-easy-armor',
    },
    3: {
      text: '暴烈重卡发动引擎："最后一批货物了！数的组成掌握得很好！炫光冲撞炮即将完成！"',
      sceneBackground: 'desert',
      weaponPartReward: 'truck-easy-body',
    },
    4: {
      text: '炫光冲撞炮组装完成！暴烈重卡："谢谢你！货物清点完毕，运输任务完成！从今以后，我是你团队的重装运输战士！暴烈冲锋出击！"',
      sceneBackground: 'space',
      weaponPartReward: 'truck-easy-complete',
    },
  },
  weapon: {
    name: '炫光冲撞炮',
    parts: truckEasyWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-weapon.png')),
  },
};

/**
 * 暴烈重卡故事配置 - 挑战难度
 */
export const MediumTruckStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '暴烈重卡进入军事基地："小俊！重装突击训练开始了！货物数量更复杂，需要快速说出数的组成！"',
      sceneBackground: 'forest',
      weaponPartReward: 'truck-medium-core',
    },
    1: {
      text: '训练官下令："重装突击需要精确计算！这批货物有多少？限时回答！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'truck-medium-turbo',
    },
    2: {
      text: '暴烈重卡载着货物冲过障碍："你的计算速度很快！涡轮增压启动，继续前进！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'truck-medium-plate',
    },
    3: {
      text: '重装突击训练完成！暴烈重卡："厉害！你的数的组成能力已经达到专业水平！闪电重卡炮组装完成！"',
      sceneBackground: 'space',
      weaponPartReward: 'truck-medium-complete',
    },
  },
  weapon: {
    name: '闪电重卡炮',
    parts: truckMediumWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-weapon.png')),
  },
};

/**
 * 暴烈重卡故事配置 - 高手难度
 */
export const HardTruckStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '传说中"不可能完成的运输任务"开始！暴烈重卡："小俊团队，这是终极考验！需要精确计算才能通过复杂地形！"',
      sceneBackground: 'forest',
      weaponPartReward: 'truck-hard-core',
    },
    1: {
      text: '暴烈重卡穿越山路："这条路有陷阱！必须精确计算货物数量才能安全通过！数的组成不能出错！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'truck-hard-reactor',
    },
    2: {
      text: '终极护盾激活："你的计算能力太强了！聚变反应堆能量满格！继续前进！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'truck-hard-shield',
    },
    3: {
      text: '运输任务完成！暴烈重卡："不可能完成的任务...你做到了！雷霆毁灭炮装备完成！从今以后，我是团队的运输之王！暴烈冲锋，无坚不摧！"',
      sceneBackground: 'space',
      weaponPartReward: 'truck-hard-complete',
    },
  },
  weapon: {
    name: '雷霆毁灭炮',
    parts: truckHardWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-weapon.png')),
  },
};

// ========== 深海天锚（3-2）专属配置 ==========
/**
 * 深海天锚武器零件配置 - 新手难度
 */
const anchorEasyWeaponParts = [
  { id: 'anchor-easy-core', name: '深海核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'anchor-easy-chain', name: '锚链发射器', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'anchor-easy-shell', name: '深海外壳', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'anchor-easy-body', name: '潜水艇身', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'anchor-easy-complete', name: '炫光锚枪完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 深海天锚武器零件配置 - 挑战难度
 */
const anchorMediumWeaponParts = [
  { id: 'anchor-medium-core', name: '海洋之心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'anchor-medium-sonar', name: '深海声呐', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'anchor-medium-hull', name: '抗压船体', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'anchor-medium-torpedo', name: '锚击鱼雷', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'anchor-medium-complete', name: '闪电深海炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 深海天锚武器零件配置 - 高手难度
 */
const anchorHardWeaponParts = [
  { id: 'anchor-hard-core', name: '海神之核', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'anchor-hard-trident', name: '海神三叉戟', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'anchor-hard-armor', name: '海王铠甲', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'anchor-hard-cannon', name: '海啸炮身', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'anchor-hard-complete', name: '雷霆海王炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 深海天锚故事配置 - 新手难度
 */
export const EasyAnchorStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '咕噜咕噜——深海传来神秘的声音！深海天锚浮出水面："小俊！我在海底发现了古城遗迹！入口是百数表密码锁！"',
      sceneBackground: 'forest',
      weaponPartReward: 'anchor-easy-core',
    },
    1: {
      text: '深海天锚展开百数表："每一行多1，每一列多10...发现这些规律才能打开宝藏入口！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'anchor-easy-chain',
    },
    2: {
      text: '密码锁闪烁："不错！你已经发现了基本规律！百数表还藏着更多秘密，继续探索！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'anchor-easy-shell',
    },
    3: {
      text: '深海天锚："最后一步！百数表的对角线规律是什么？解开这个就能打开宝藏！"',
      sceneBackground: 'desert',
      weaponPartReward: 'anchor-easy-body',
    },
    4: {
      text: '宝藏入口打开！深海天锚："你发现了百数表的所有秘密！炫光锚枪组装完成！从今以后，我是你团队的深海守护者！海啸锚击出击！"',
      sceneBackground: 'space',
      weaponPartReward: 'anchor-easy-complete',
    },
  },
  weapon: {
    name: '炫光锚枪',
    parts: anchorEasyWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-weapon.png')),
  },
};

/**
 * 深海天锚故事配置 - 挑战难度
 */
export const MediumAnchorStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '深海天锚紧急浮出："小俊！海洋污染扩散，海洋生物受伤！需要利用百数表规律定位污染源！"',
      sceneBackground: 'forest',
      weaponPartReward: 'anchor-medium-core',
    },
    1: {
      text: '深海天锚展开坐标图："百数表可以定位位置！横行是十位，竖列是个位...污染源在第几行第几列？"',
      sceneBackground: 'ocean',
      weaponPartReward: 'anchor-medium-sonar',
    },
    2: {
      text: '污染源被锁定："你的定位能力很强！抗压船体准备下潜，阻止污染继续扩散！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'anchor-medium-hull',
    },
    3: {
      text: '污染被清除！深海天锚："海洋生物得救了！闪电深海炮组装完成！从今以后，我们一起守护蓝色领土！"',
      sceneBackground: 'space',
      weaponPartReward: 'anchor-medium-complete',
    },
  },
  weapon: {
    name: '闪电深海炮',
    parts: anchorMediumWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-weapon.png')),
  },
};

/**
 * 深海天锚故事配置 - 高手难度
 */
export const HardAnchorStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '海底深处传来古老的呼唤！深海天锚："小俊团队，传说中海神波塞冬留下试炼，只有掌握百数表最深层的规律才能继承海神之锚！"',
      sceneBackground: 'forest',
      weaponPartReward: 'anchor-hard-core',
    },
    1: {
      text: '海神神殿出现："百数表不仅是数字排列...它藏着宇宙的规律！相邻数的差、跳格的规律...你能发现吗？"',
      sceneBackground: 'ocean',
      weaponPartReward: 'anchor-hard-trident',
    },
    2: {
      text: '海神三叉戟亮起光芒："不可思议！你掌握了百数表的终极秘密！海王铠甲即将觉醒！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'anchor-hard-armor',
    },
    3: {
      text: '海神试炼通过！深海天锚："波塞冬的力量...传承给你了！雷霆海王炮装备完成！从今以后，我是炫卡斗士团队的海洋霸主！海啸锚击、海神之力——让我们一起守护地球！"',
      sceneBackground: 'space',
      weaponPartReward: 'anchor-hard-complete',
    },
  },
  weapon: {
    name: '雷霆海王炮',
    parts: anchorHardWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-weapon.png')),
  },
};

// ========== 重力金刚（3-3）专属配置 ==========
/**
 * 重力金刚武器零件配置 - 新手难度
 */
const gravityEasyWeaponParts = [
  { id: 'gravity-easy-core', name: '重力核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'gravity-easy-field', name: '力场发生器', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'gravity-easy-shield', name: '重力护盾', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'gravity-easy-body', name: '金刚躯体', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'gravity-easy-complete', name: '炫光重力炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 重力金刚武器零件配置 - 挑战难度
 */
const gravityMediumWeaponParts = [
  { id: 'gravity-medium-core', name: '时空核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'gravity-medium-rift', name: '裂缝探测仪', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'gravity-medium-plate', name: '时空装甲板', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'gravity-medium-hammer', name: '重力战锤', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'gravity-medium-complete', name: '闪电重力锤完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 重力金刚武器零件配置 - 高手难度
 */
const gravityHardWeaponParts = [
  { id: 'gravity-hard-core', name: '黑洞核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'gravity-hard-prism', name: '引力棱镜', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'gravity-hard-armor', name: '终极重力甲', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'gravity-hard-cannon', name: '引力炮身', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'gravity-hard-complete', name: '雷霆引力炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 重力金刚故事配置 - 新手难度
 */
export const EasyGravityStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '咚咚——地面传来重击的声音！重力金刚跌跌撞撞出现："小俊！我的重力场失控了！需要比较数字大小来调节！"',
      sceneBackground: 'forest',
      weaponPartReward: 'gravity-easy-core',
    },
    1: {
      text: '重力金刚指着控制台："45和54谁大？先比十位再比个位！调对了我才能稳定！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'gravity-easy-field',
    },
    2: {
      text: '重力场开始稳定："正确！比较大小的方法你掌握了！继续帮我调节其他参数！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'gravity-easy-shield',
    },
    3: {
      text: '重力金刚站起来："最后一个参数！比较这些数字的大小，从大到小排列！"',
      sceneBackground: 'desert',
      weaponPartReward: 'gravity-easy-body',
    },
    4: {
      text: '重力场完全修复！重力金刚："谢谢你！比较大小救了我的重力装置！炫光重力炮组装完成！从今以后，我是你团队的重力守护者！重力出击！"',
      sceneBackground: 'space',
      weaponPartReward: 'gravity-easy-complete',
    },
  },
  weapon: {
    name: '炫光重力炮',
    parts: gravityEasyWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-weapon.png')),
  },
};

/**
 * 重力金刚故事配置 - 挑战难度
 */
export const MediumGravityStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '空间站警报响起！重力金刚："小俊！空间站出现时空裂缝！需要按数字大小顺序关闭裂缝！"',
      sceneBackground: 'forest',
      weaponPartReward: 'gravity-medium-core',
    },
    1: {
      text: '重力金刚展开裂缝地图："这些裂缝有编号！必须按从小到大的顺序关闭，否则会引发爆炸！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'gravity-medium-rift',
    },
    2: {
      text: '裂缝开始关闭："你的顺序排列正确！时空装甲板激活，继续关闭剩余裂缝！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'gravity-medium-plate',
    },
    3: {
      text: '时空裂缝全部关闭！重力金刚："危机解除！闪电重力锤组装完成！从今以后，我们一起守护空间站！"',
      sceneBackground: 'space',
      weaponPartReward: 'gravity-medium-complete',
    },
  },
  weapon: {
    name: '闪电重力锤',
    parts: gravityMediumWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-weapon.png')),
  },
};

/**
 * 重力金刚故事配置 - 高手难度
 */
export const HardGravityStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '重力金刚悬浮在空中，身体发出金色光芒："小俊团队，我要挑战终极形态！需要完美掌握比较大小才能控制【重力崩溃】！"',
      sceneBackground: 'forest',
      weaponPartReward: 'gravity-hard-core',
    },
    1: {
      text: '重力金刚："重力崩溃需要精确的数字排序！这些数字要从小到大，不能有任何错误！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'gravity-hard-prism',
    },
    2: {
      text: '黑洞能量聚集："完美！你的比较能力达到了大师级别！终极重力甲即将觉醒！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'gravity-hard-armor',
    },
    3: {
      text: '终极形态觉醒！重力金刚："重力崩溃...完美控制！雷霆引力炮装备完成！从今以后，我是炫卡斗士团队的重力操控大师！重力场、反重力、重力崩溃——让我们一起守护地球！"',
      sceneBackground: 'space',
      weaponPartReward: 'gravity-hard-complete',
    },
  },
  weapon: {
    name: '雷霆引力炮',
    parts: gravityHardWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-weapon.png')),
  },
};

// ========== 玄铁战神（3-4）专属配置 ==========
/**
 * 玄铁战神武器零件配置 - 新手难度
 */
const ironEasyWeaponParts = [
  { id: 'iron-easy-core', name: '玄铁核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'iron-easy-detector', name: '矿脉探测器', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'iron-easy-shield', name: '玄铁护盾', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'iron-easy-body', name: '玄铁战甲', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'iron-easy-complete', name: '炫光玄铁炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 玄铁战神武器零件配置 - 挑战难度
 */
const ironMediumWeaponParts = [
  { id: 'iron-medium-core', name: '磁力核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'iron-medium-compass', name: '磁力指南针', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'iron-medium-plate', name: '磁力装甲板', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'iron-medium-blade', name: '玄铁战刃', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'iron-medium-complete', name: '闪电玄铁刃完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 玄铁战神武器零件配置 - 高手难度
 */
const ironHardWeaponParts = [
  { id: 'iron-hard-core', name: '远古核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'iron-hard-forge', name: '神锻造炉', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'iron-hard-armor', name: '神兵铠甲', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'iron-hard-cannon', name: '玄铁终极炮', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'iron-hard-complete', name: '雷霆玄铁炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 玄铁战神故事配置 - 新手难度
 */
export const EasyIronStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '轰——地面震动！玄铁战神感应到什么："小俊！我感应到地下有玄铁矿脉！需要数的组成知识确定矿脉位置！"',
      sceneBackground: 'forest',
      weaponPartReward: 'iron-easy-core',
    },
    1: {
      text: '玄铁战神启动探测器："矿脉深度是87米...8个十和7个一，你能说出它的组成吗？"',
      sceneBackground: 'ocean',
      weaponPartReward: 'iron-easy-detector',
    },
    2: {
      text: '探测器闪烁："正确！继续计算其他矿脉位置！数的组成、比较大小...综合运用！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'iron-easy-shield',
    },
    3: {
      text: '玄铁战神："最后一条矿脉！所有知识综合起来，确定最终位置！"',
      sceneBackground: 'desert',
      weaponPartReward: 'iron-easy-body',
    },
    4: {
      text: '矿脉被找到！玄铁战神："你掌握了100以内数的所有秘密！炫光玄铁炮组装完成！从今以后，我是你团队的玄铁守护者！玄铁爆裂出击！"',
      sceneBackground: 'space',
      weaponPartReward: 'iron-easy-complete',
    },
  },
  weapon: {
    name: '炫光玄铁炮',
    parts: ironEasyWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-weapon.png')),
  },
};

/**
 * 玄铁战神故事配置 - 挑战难度
 */
export const MediumIronStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '玄铁战神被困在迷宫中："小俊！我被困在磁力迷宫了！需要计算能量数值才能找到出口！"',
      sceneBackground: 'forest',
      weaponPartReward: 'iron-medium-core',
    },
    1: {
      text: '迷宫墙壁上有数字密码："这些能量数值...比较它们的大小，找出正确的路径！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'iron-medium-compass',
    },
    2: {
      text: '磁力装甲板激活："正确！你的计算能力让我找到了方向！继续前进！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'iron-medium-plate',
    },
    3: {
      text: '迷宫出口打开！玄铁战神："终于出来了！闪电玄铁刃组装完成！从今以后，我们一起用磁力力量守护地球！"',
      sceneBackground: 'space',
      weaponPartReward: 'iron-medium-complete',
    },
  },
  weapon: {
    name: '闪电玄铁刃',
    parts: ironMediumWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-weapon.png')),
  },
};

/**
 * 玄铁战神故事配置 - 高手难度
 */
export const HardIronStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '远古熔炉在地下深处点燃！玄铁战神："小俊团队，我要锻造终极武器！需要完美掌握100以内数的认识！"',
      sceneBackground: 'forest',
      weaponPartReward: 'iron-hard-core',
    },
    1: {
      text: '熔炉温度上升到数百度："神锻造炉需要精确的数字控制！数的组成、比较大小、数的顺序...全部综合！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'iron-hard-forge',
    },
    2: {
      text: '神兵铠甲开始成型："完美！你对100以内数的理解已经达到神级！终极武器即将诞生！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'iron-hard-armor',
    },
    3: {
      text: '终极武器锻造完成！玄铁战神："雷霆玄铁炮装备完成！从今以后，我是炫卡斗士团队的神兵锻造者！金属护盾、磁力吸附、玄铁爆裂——让我们一起守护地球！"',
      sceneBackground: 'space',
      weaponPartReward: 'iron-hard-complete',
    },
  },
  weapon: {
    name: '雷霆玄铁炮',
    parts: ironHardWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-weapon.png')),
  },
};

// ========== 猎空悍将（5-1）专属配置 ==========
/**
 * 猎空悍将武器零件配置 - 新手难度
 */
const falconEasyWeaponParts = [
  { id: 'falcon-easy-core', name: '飞行核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'falcon-easy-wing', name: '猎空之翼', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'falcon-easy-radar', name: '追踪雷达', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'falcon-easy-body', name: '战机机身', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'falcon-easy-complete', name: '炫光猎空枪完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 猎空悍将武器零件配置 - 挑战难度
 */
const falconMediumWeaponParts = [
  { id: 'falcon-medium-core', name: '猎空核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'falcon-medium-lock', name: '锁定瞄准器', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'falcon-medium-shield', name: '空中护盾', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'falcon-medium-cannon', name: '猎空炮管', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'falcon-medium-complete', name: '闪电猎空炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 猎空悍将武器零件配置 - 高手难度
 */
const falconHardWeaponParts = [
  { id: 'falcon-hard-core', name: '天空核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'falcon-hard-blade', name: '坠落之刃', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'falcon-hard-armor', name: '天空霸主甲', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'falcon-hard-destroyer', name: '毁灭炮身', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'falcon-hard-complete', name: '雷霆猎空炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 猎空悍将故事配置 - 新手难度
 */
export const EasyFalconStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '呼——一阵风从天空中吹过！猎空悍将降落在天空基地："小俊！我是空中猎手猎空悍将！想学飞行吗？用竖式加法计算飞行高度！"',
      sceneBackground: 'forest',
      weaponPartReward: 'falcon-easy-core',
    },
    1: {
      text: '猎空悍将展开翅膀："竖式加法法则：个位加个位，十位加十位，对齐很重要！对齐数位才能安全起飞！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'falcon-easy-wing',
    },
    2: {
      text: '飞行高度计算正确！猎空悍将："你的竖式加法很准确！继续计算，猎空之翼即将展开！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'falcon-easy-radar',
    },
    3: {
      text: '猎空悍将："最后一道计算！对齐数位是飞行的关键！追踪雷达即将激活！"',
      sceneBackground: 'desert',
      weaponPartReward: 'falcon-easy-body',
    },
    4: {
      text: '炫光猎空枪组装完成！猎空悍将："你学会了竖式加法！对齐数位，安全飞行！从今以后，我是你团队的空中猎手！空中打击出击！"',
      sceneBackground: 'space',
      weaponPartReward: 'falcon-easy-complete',
    },
  },
  weapon: {
    name: '炫光猎空枪',
    parts: falconEasyWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-weapon.png')),
  },
};

/**
 * 猎空悍将故事配置 - 挑战难度
 */
export const MediumFalconStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '猎空悍将在空中盘旋："小俊！锁定追踪训练开始！需要快速计算坐标数据才能命中目标！"',
      sceneBackground: 'forest',
      weaponPartReward: 'falcon-medium-core',
    },
    1: {
      text: '目标出现！猎空悍将："竖式加法要快且准确！坐标数据：23+45等于多少？快速对齐计算！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'falcon-medium-lock',
    },
    2: {
      text: '命中目标！猎空悍将："锁定成功！你的计算速度在提升！空中护盾激活，继续追踪！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'falcon-medium-shield',
    },
    3: {
      text: '猎空悍将："猎空炮管充能完毕！最后一道追踪目标！精准计算才能完成武器组装！"',
      sceneBackground: 'desert',
      weaponPartReward: 'falcon-medium-cannon',
    },
    4: {
      text: '追踪训练完成！猎空悍将："你的竖式加法已经达到专业水平！闪电猎空炮组装完成！从今以后，我们一起制霸天空！"',
      sceneBackground: 'space',
      weaponPartReward: 'falcon-medium-complete',
    },
  },
  weapon: {
    name: '闪电猎空炮',
    parts: falconMediumWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-weapon.png')),
  },
};

/**
 * 猎空悍将故事配置 - 高手难度
 */
export const HardFalconStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '猎空悍将身体发出金色光芒："小俊团队，我要挑战终极形态！释放【天空坠落】需要完美掌握竖式加法！"',
      sceneBackground: 'forest',
      weaponPartReward: 'falcon-hard-core',
    },
    1: {
      text: '天空乌云密布！猎空悍将："终极加法挑战！两位数加两位数，每一道都要精准计算！坠落之刃即将觉醒！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'falcon-hard-blade',
    },
    2: {
      text: '猎空悍将："完美！你的计算能力超越了普通飞行员的极限！天空霸主甲即将激活！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'falcon-hard-armor',
    },
    3: {
      text: '猎空悍将："毁灭炮身充能完毕！最后一道考验！精准计算才能完成终极武器！"',
      sceneBackground: 'desert',
      weaponPartReward: 'falcon-hard-destroyer',
    },
    4: {
      text: '天空放晴！猎空悍将："天空坠落...完美释放！雷霆猎空炮装备完成！从今以后，我是炫卡斗士团队的天空霸主！空中打击、锁定追踪、天空坠落——让我们一起守护地球！"',
      sceneBackground: 'space',
      weaponPartReward: 'falcon-hard-complete',
    },
  },
  weapon: {
    name: '雷霆猎空炮',
    parts: falconHardWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-weapon.png')),
  },
};

// ========== 钢臂力士（5-2）专属配置 ==========
/**
 * 钢臂力士武器零件配置 - 新手难度
 */
const titanEasyWeaponParts = [
  { id: 'titan-easy-core', name: '力量核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'titan-easy-arm', name: '钢铁之臂', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'titan-easy-shield', name: '力量护盾', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'titan-easy-body', name: '力士战甲', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'titan-easy-complete', name: '炫光钢臂炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 钢臂力士武器零件配置 - 挑战难度
 */
const titanMediumWeaponParts = [
  { id: 'titan-medium-core', name: '巨力核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'titan-medium-throw', name: '投掷瞄准器', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'titan-medium-plate', name: '重装装甲板', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'titan-medium-hammer', name: '力量战锤', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'titan-medium-complete', name: '闪电钢臂锤完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 钢臂力士武器零件配置 - 高手难度
 */
const titanHardWeaponParts = [
  { id: 'titan-hard-core', name: '毁灭核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'titan-hard-fist', name: '毁灭之拳', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'titan-hard-armor', name: '力量之王甲', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'titan-hard-cannon', name: '毁灭炮身', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'titan-hard-complete', name: '雷霆钢臂炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 钢臂力士故事配置 - 新手难度
 */
export const EasyTitanStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '咚——一声重响！钢臂力士从重装基地走出："小俊！我是力量之王钢臂力士！建造防御工事需要用竖式减法计算材料！"',
      sceneBackground: 'forest',
      weaponPartReward: 'titan-easy-core',
    },
    1: {
      text: '钢臂力士展示材料："竖式减法法则：个位减个位，十位减十位，从个位算起！材料用量要算准确！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'titan-easy-arm',
    },
    2: {
      text: '材料计算正确！钢臂力士："你的竖式减法很准确！防御工事正在建造！继续计算！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'titan-easy-shield',
    },
    3: {
      text: '钢臂力士："最后一道计算！从个位算起是减法的关键！力士战甲即将完成！"',
      sceneBackground: 'desert',
      weaponPartReward: 'titan-easy-body',
    },
    4: {
      text: '炫光钢臂炮组装完成！钢臂力士："你学会了竖式减法！从个位算起，精确建造！从今以后，我是你团队的力量守护者！巨力投掷出击！"',
      sceneBackground: 'space',
      weaponPartReward: 'titan-easy-complete',
    },
  },
  weapon: {
    name: '炫光钢臂炮',
    parts: titanEasyWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-weapon.png')),
  },
};

/**
 * 钢臂力士故事配置 - 挑战难度
 */
export const MediumTitanStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '钢臂力士站在训练场中央："小俊！巨力投掷训练开始！需要精确计算投掷距离才能命中目标！"',
      sceneBackground: 'forest',
      weaponPartReward: 'titan-medium-core',
    },
    1: {
      text: '目标距离87米，投掷距离已有52米！钢臂力士："竖式减法算出差距！87-52等于多少？对齐数位计算！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'titan-medium-throw',
    },
    2: {
      text: '投掷命中！钢臂力士："精准！你的减法计算很准确！重装装甲板激活，继续训练！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'titan-medium-plate',
    },
    3: {
      text: '钢臂力士："力量战锤充能完毕！最后一道投掷目标！精准计算才能完成武器组装！"',
      sceneBackground: 'desert',
      weaponPartReward: 'titan-medium-hammer',
    },
    4: {
      text: '投掷训练完成！钢臂力士："你的竖式减法已经达到专业水平！闪电钢臂锤组装完成！从今以后，我们一起成为最强力量！"',
      sceneBackground: 'space',
      weaponPartReward: 'titan-medium-complete',
    },
  },
  weapon: {
    name: '闪电钢臂锤',
    parts: titanMediumWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-weapon.png')),
  },
};

/**
 * 钢臂力士故事配置 - 高手难度
 */
export const HardTitanStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '钢臂力士全身发出金光："小俊团队，我要挑战终极形态！释放【毁天灭地】需要完美掌握竖式减法！"',
      sceneBackground: 'forest',
      weaponPartReward: 'titan-hard-core',
    },
    1: {
      text: '大地开始震动！钢臂力士："终极减法挑战！两位数减两位数，每一道都要精准计算！毁灭之拳即将觉醒！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'titan-hard-fist',
    },
    2: {
      text: '钢臂力士："完美！你的计算能力超越了普通战士的极限！力量之王甲即将激活！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'titan-hard-armor',
    },
    3: {
      text: '钢臂力士："毁灭炮身充能完毕！最后一道考验！精准计算才能完成终极武器！"',
      sceneBackground: 'desert',
      weaponPartReward: 'titan-hard-cannon',
    },
    4: {
      text: '终极力量觉醒！钢臂力士："毁天灭地...完美释放！雷霆钢臂炮装备完成！从今以后，我是炫卡斗士团队的力量之王！巨力投掷、地震波、毁天灭地——让我们一起守护地球！"',
      sceneBackground: 'space',
      weaponPartReward: 'titan-hard-complete',
    },
  },
  weapon: {
    name: '雷霆钢臂炮',
    parts: titanHardWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-weapon.png')),
  },
};

// ========== 星际游侠（关卡6）专属配置 ==========
/**
 * 星际游侠武器零件配置 - 新手难度
 */
const starRangerEasyWeaponParts = [
  { id: 'easy-star-core', name: '星际探测核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'easy-star-nav', name: '星际导航仪', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'easy-star-head', name: '星际穿梭头', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'easy-star-pipe', name: '星际穿梭管', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'easy-star-complete', name: '星际穿梭完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 星际游侠武器零件配置 - 挑战难度
 */
const starRangerMediumWeaponParts = [
  { id: 'med-star-core', name: '星际探测核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'med-star-loc', name: '星际定位器', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'med-star-armor', name: '星际装甲板', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'med-star-meter', name: '星际计量管', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'med-star-cannon', name: '星际游侠战炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 星际游侠武器零件配置 - 高手难度
 */
const starRangerHardWeaponParts = [
  { id: 'hard-star-partner', name: '伙伴星际核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'hard-star-fair', name: '星际公平仪', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'hard-star-sys', name: '星际穿梭系统', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'hard-star-armor', name: '星际装甲管', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'hard-star-ult', name: '星际游侠终极炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 星际游侠故事配置 - 新手难度
 * 主题：寻找失落的星际导航装置
 */
export const EasyStarRangerStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '金色光芒从天而降！星际游侠从飞船中走出："小俊，我是来自遥远星系的宇宙旅行者！我的星际导航装置在穿越虫洞时破碎了，散落在这颗星球上！需要用【部分与整体】的知识才能找到碎片！"',
      sceneBackground: 'forest',
      weaponPartReward: 'easy-star-core',
    },
    1: {
      text: '星际游侠展开全息地图："第一个碎片在森林深处！部分 + 部分 = 整体——这是寻找碎片的关键！「星际探测核心」已经感应到碎片的位置！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'easy-star-nav',
    },
    2: {
      text: '第二个碎片在海底！星际游侠："不错！你理解了整体与部分的关系！导航装置碎片正在重新组合！「星际穿梭头」指引我们继续前进！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'easy-star-head',
    },
    3: {
      text: '火山岩浆中有第三个碎片！星际游侠："你的计算能力很强！部分可以组成整体，整体也可以分成部分——这是宇宙的真理！「星际穿梭管」即将完成！"',
      sceneBackground: 'desert',
      weaponPartReward: 'easy-star-pipe',
    },
    4: {
      text: '最后一个碎片在沙漠遗迹中！星际游侠："星际穿梭装置修复完成！你掌握了部分与整体的奥秘！从今以后，我是你团队的星际伙伴！星际穿梭，出发！"',
      sceneBackground: 'space',
      weaponPartReward: 'easy-star-complete',
    },
  },
  weapon: {
    name: '星际穿梭',
    parts: starRangerEasyWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-weapon.png')),
  },
};

/**
 * 星际游侠故事配置 - 挑战难度
 * 主题：星际救援行动
 */
export const MediumStarRangerStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '星际游侠的通讯器响起："小俊！我收到了星际求救信号！深海霸王在执行任务时被困在未知星域！需要你的计算能力帮他找到回家的路！"',
      sceneBackground: 'forest',
      weaponPartReward: 'med-star-core',
    },
    1: {
      text: '星际游侠展开星图："深海霸王的位置需要计算坐标！已知整体和部分，求另一个部分——这是定位的关键！「星际定位器」正在锁定他的信号！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'med-star-loc',
    },
    2: {
      text: '信号越来越强！星际游侠："正确！你的计算缩小了搜索范围！「星际装甲板」将保护我们穿越危险的小行星带！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'med-star-armor',
    },
    3: {
      text: '发现了深海霸王的飞船！星际游侠："最后一道计算！确定救援路线！「星际计量管」将精确计算返回的燃料消耗！"',
      sceneBackground: 'desert',
      weaponPartReward: 'med-star-meter',
    },
    4: {
      text: '深海霸王获救！星际游侠："救援成功！星际游侠战炮组装完成！从今以后，我们团队又多了一位战友！部分与整体——这是团队协作的真谛！"',
      sceneBackground: 'space',
      weaponPartReward: 'med-star-cannon',
    },
  },
  weapon: {
    name: '星际游侠战炮',
    parts: starRangerMediumWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-weapon.png')),
  },
};

/**
 * 星际游侠故事配置 - 高手难度
 * 主题：宇宙危机与终极形态觉醒
 */
export const HardStarRangerStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '太空警报响起！星际游侠悬浮在空中，全身被金色宇宙能量包裹："小俊团队，宇宙中有神秘力量正在吞噬星系！只有终极形态才能对抗这股力量！需要完美掌握部分与整体的全部奥秘！"',
      sceneBackground: 'forest',
      weaponPartReward: 'hard-star-partner',
    },
    1: {
      text: '星际游侠："宇宙的平衡依赖部分与整体！星球是星系的一部分，星系是宇宙的一部分...你需要理解这些关系才能觉醒终极力量！「伙伴星际核心」正在与你连接！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'hard-star-fair',
    },
    2: {
      text: '金色能量越来越强！星际游侠："你的计算能力超越了普通星际战士的极限！「星际穿梭系统」即将完全激活！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'hard-star-sys',
    },
    3: {
      text: '宇宙深处传来低沉的震动！星际游侠："终极形态即将觉醒！最后一道计算将完成星际装甲管！"',
      sceneBackground: 'desert',
      weaponPartReward: 'hard-star-armor',
    },
    4: {
      text: '星际游侠终极形态觉醒！金光冲天："星际游侠终极炮装备完成！从今以后，我是炫卡斗士团队的宇宙守护者！星际穿梭、缠绕脉冲、破空鞭击——让我们一起守护整个宇宙！"',
      sceneBackground: 'space',
      weaponPartReward: 'hard-star-ult',
    },
  },
  weapon: {
    name: '星际游侠终极炮',
    parts: starRangerHardWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-weapon.png')),
  },
};

// ========== 爆旋洛克（7-1）专属配置 ==========
/**
 * 爆旋洛克武器零件配置 - 新手难度
 */
const drillEasyWeaponParts = [
  { id: 'easy-drill-core', name: '爆旋探测核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'easy-drill-nav', name: '爆旋导航仪', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'easy-drill-head', name: '爆旋轰钻头', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'easy-drill-pipe', name: '爆旋穿梭管', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'easy-drill-complete', name: '爆旋轰钻完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 爆旋洛克武器零件配置 - 挑战难度
 */
const drillMediumWeaponParts = [
  { id: 'med-drill-core', name: '爆旋探测核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'med-drill-loc', name: '爆旋定位器', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'med-drill-armor', name: '爆旋装甲板', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'med-drill-meter', name: '爆旋计量管', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'med-drill-cannon', name: '爆旋洛克战炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 爆旋洛克武器零件配置 - 高手难度
 */
const drillHardWeaponParts = [
  { id: 'hard-drill-partner', name: '伙伴爆旋核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'hard-drill-fair', name: '爆旋公平仪', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'hard-drill-sys', name: '爆旋轰钻系统', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'hard-drill-armor', name: '爆旋装甲管', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'hard-drill-ult', name: '爆旋洛克终极炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 爆旋洛克故事配置 - 新手难度
 * 主题：初识人民币，钻探矿场购物
 */
export const EasyDrillStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '地下矿场传来轰隆声！爆旋洛克从钻探机中现身："小俊！我是旋转大师爆旋洛克！我在地下发现了一座古代宝藏库，但是入口需要用【人民币】知识才能打开！" 全新的货币冒险开始了！',
      sceneBackground: 'forest',
      weaponPartReward: 'easy-drill-core',
    },
    1: {
      text: '爆旋洛克展开藏宝图："第一个密码是元、角、分的关系！1元=10角，1角=10分——这是打开宝藏的钥匙！「爆旋探测核心」已经感应到宝藏的位置！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'easy-drill-nav',
    },
    2: {
      text: '宝藏库入口出现！爆旋洛克："正确！人民币的换算是购物的基本功！继续解锁密码！「爆旋轰钻头」准备钻开障碍！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'easy-drill-head',
    },
    3: {
      text: '爆旋洛克高速旋转："你的货币知识让我印象深刻！元、角、分之间的关系你已经掌握了！「爆旋穿梭管」即将完成！"',
      sceneBackground: 'desert',
      weaponPartReward: 'easy-drill-pipe',
    },
    4: {
      text: '宝藏库大门打开！爆旋洛克："你掌握了人民币的基础知识！爆旋轰钻组装完成！从今以后，我是你团队的钻探专家！爆旋轰钻，出击！"',
      sceneBackground: 'space',
      weaponPartReward: 'easy-drill-complete',
    },
  },
  weapon: {
    name: '爆旋轰钻',
    parts: drillEasyWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-weapon.png')),
  },
};

/**
 * 爆旋洛克故事配置 - 挑战难度
 * 主题：欢乐购物街建设，货币换算实战
 */
export const MediumDrillStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '爆旋洛克收到新任务："小俊！欢乐购物街正在建设中，我负责钻探地基！但是需要精确计算材料费用——这是找零计算的考验！"',
      sceneBackground: 'forest',
      weaponPartReward: 'med-drill-core',
    },
    1: {
      text: '爆旋洛克展示购物清单："购买钻探零件需要找零计算！付的钱减去商品价格——这是找零的秘诀！「爆旋定位器」正在锁定最佳购物路线！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'med-drill-loc',
    },
    2: {
      text: '购物清单越来越长！爆旋洛克："你的找零计算很准确！购物街地基的钻探进度加快了！「爆旋装甲板」保护我们继续工作！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'med-drill-armor',
    },
    3: {
      text: '爆旋洛克："最后一笔材料采购！精确计算找零，购物街地基即将完成！「爆旋计量管」记录着所有费用！"',
      sceneBackground: 'desert',
      weaponPartReward: 'med-drill-meter',
    },
    4: {
      text: '欢乐购物街地基完成！爆旋洛克："购物街的建设离不开你的货币计算能力！爆旋洛克战炮组装完成！从今以后，我们一起建设更多奇迹！"',
      sceneBackground: 'space',
      weaponPartReward: 'med-drill-cannon',
    },
  },
  weapon: {
    name: '爆旋洛克战炮',
    parts: drillMediumWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-weapon.png')),
  },
};

/**
 * 爆旋洛克故事配置 - 高手难度
 * 主题：终极旋风觉醒，守护购物街
 */
export const HardDrillStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '爆旋洛克全身被旋风能量包裹："小俊团队！购物街即将开业，但是有神秘势力想要破坏！我需要觉醒终极形态——终极旋风！需要完美掌握人民币的全部知识！"',
      sceneBackground: 'forest',
      weaponPartReward: 'hard-drill-partner',
    },
    1: {
      text: '爆旋洛克高速旋转："人民币的换算、找零计算、购物方案——这些都是守护购物街的力量！「伙伴爆旋核心」正在与你连接！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'hard-drill-fair',
    },
    2: {
      text: '旋风越来越强！爆旋洛克："你的货币计算能力超越了普通建设者的极限！「爆旋轰钻系统」即将完全激活！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'hard-drill-sys',
    },
    3: {
      text: '神秘势力被旋风击退！爆旋洛克："终极形态即将觉醒！最后一道计算将完成爆旋装甲管！"',
      sceneBackground: 'desert',
      weaponPartReward: 'hard-drill-armor',
    },
    4: {
      text: '爆旋洛克终极形态觉醒！旋风冲天："爆旋洛克终极炮装备完成！从今以后，我是炫卡斗士团队的钻探大师！爆旋轰钻、冻结射线、终极旋风——让我们一起守护购物街！"',
      sceneBackground: 'space',
      weaponPartReward: 'hard-drill-ult',
    },
  },
  weapon: {
    name: '爆旋洛克终极炮',
    parts: drillHardWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-weapon.png')),
  },
};

// ========== 深海霸王（7-2）专属配置 ==========
/**
 * 深海霸王武器零件配置 - 新手难度
 */
const seaEasyWeaponParts = [
  { id: 'easy-sea-core', name: '海王探测核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'easy-sea-nav', name: '海王导航仪', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'easy-sea-head', name: '海王之怒头', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'easy-sea-pipe', name: '海王穿梭管', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'easy-sea-complete', name: '海王之怒完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 深海霸王武器零件配置 - 挑战难度
 */
const seaMediumWeaponParts = [
  { id: 'med-sea-core', name: '海王探测核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'med-sea-loc', name: '海王定位器', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'med-sea-armor', name: '海王装甲板', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'med-sea-meter', name: '海王计量管', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'med-sea-cannon', name: '深海霸王战炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 深海霸王武器零件配置 - 高手难度
 */
const seaHardWeaponParts = [
  { id: 'hard-sea-partner', name: '伙伴海王核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'hard-sea-fair', name: '海王公平仪', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'hard-sea-sys', name: '海王之怒系统', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'hard-sea-armor', name: '海王装甲管', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'hard-sea-ult', name: '深海霸王终极炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 深海霸王故事配置 - 新手难度
 * 主题：深海霸主初登陆地，学习购物
 */
export const EasySeaStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '海面掀起巨浪！深海霸王从潜水艇中现身："小俊！我是海洋霸主深海霸王！我从深海来到陆地，想学习陆地上的购物方式！听说要用【人民币】买东西？"',
      sceneBackground: 'forest',
      weaponPartReward: 'easy-sea-core',
    },
    1: {
      text: '深海霸王好奇地看着手中的钱："陆地上的钱有元、角、分三种单位？1元等于10角？让我试试！「海王探测核心」正在分析货币！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'easy-sea-nav',
    },
    2: {
      text: '深海霸王走进商店："原来买东西要比较价格大小！先比较元，再比较角...这个知识很有用！「海王之怒头」准备锁定目标商品！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'easy-sea-head',
    },
    3: {
      text: '深海霸王买到第一件商品："成功了！用人民币购物的感觉真棒！海洋里没有这么有趣的交易方式！「海王穿梭管」记录着我的购物经验！"',
      sceneBackground: 'desert',
      weaponPartReward: 'easy-sea-pipe',
    },
    4: {
      text: '深海霸王开心地举起购物袋："你教会了我陆地上的购物方式！海王之怒组装完成！从今以后，我是你团队的海洋守护者！海王之怒，出击！"',
      sceneBackground: 'space',
      weaponPartReward: 'easy-sea-complete',
    },
  },
  weapon: {
    name: '海王之怒',
    parts: seaEasyWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-weapon.png')),
  },
};

/**
 * 深海霸王故事配置 - 挑战难度
 * 主题：建设购物街海底分店，找零计算
 */
export const MediumSeaStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '深海霸王收到建设任务："小俊！欢乐购物街要开海底分店了！我负责海底购物街的建设，需要精确计算材料费用和找零！"',
      sceneBackground: 'forest',
      weaponPartReward: 'med-sea-core',
    },
    1: {
      text: '深海霸王展示海底购物街设计图："建设需要购买大量材料！买商品付钱后要计算找零——这是陆地和海洋通用的交易法则！「海王定位器」锁定最佳材料商店！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'med-sea-loc',
    },
    2: {
      text: '材料采购顺利进行！深海霸王："你的找零计算很准确！海底购物街的建设进度超出预期！「海王装甲板」保护着建筑材料！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'med-sea-armor',
    },
    3: {
      text: '深海霸王："最后一笔材料采购！精确计算找零，海底购物街即将开业！「海王计量管」记录着所有建设费用！"',
      sceneBackground: 'desert',
      weaponPartReward: 'med-sea-meter',
    },
    4: {
      text: '海底购物街开业！深海霸王："购物街的海底分店建成了！感谢你的货币计算能力！深海霸王战炮组装完成！从今以后，我们一起守护陆地和海洋的商业繁荣！"',
      sceneBackground: 'space',
      weaponPartReward: 'med-sea-cannon',
    },
  },
  weapon: {
    name: '深海霸王战炮',
    parts: seaMediumWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-weapon.png')),
  },
};

/**
 * 深海霸王故事配置 - 高手难度
 * 主题：怒海狂涛觉醒，守护海洋商业
 */
export const HardSeaStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '深海霸王全身被深海能量包裹："小俊团队！海洋中有神秘势力想要破坏海底购物街！我需要觉醒终极形态——怒海狂涛！需要完美掌握购物的全部知识！"',
      sceneBackground: 'forest',
      weaponPartReward: 'hard-sea-partner',
    },
    1: {
      text: '深海霸王："货币换算、找零计算、购物方案、价格比较——这些都是守护商业的力量！「伙伴海王核心」正在与你连接！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'hard-sea-fair',
    },
    2: {
      text: '海浪越来越汹涌！深海霸王："你的购物计算能力超越了普通建设者的极限！「海王之怒系统」即将完全激活！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'hard-sea-sys',
    },
    3: {
      text: '神秘势力被海浪击退！深海霸王："终极形态即将觉醒！最后一道计算将完成海王装甲管！"',
      sceneBackground: 'desert',
      weaponPartReward: 'hard-sea-armor',
    },
    4: {
      text: '深海霸王终极形态觉醒！海浪冲天："深海霸王终极炮装备完成！从今以后，我是炫卡斗士团队的海洋霸主！海王激光、海王漩涡、怒海狂涛——让我们一起守护海洋商业！"',
      sceneBackground: 'space',
      weaponPartReward: 'hard-sea-ult',
    },
  },
  weapon: {
    name: '深海霸王终极炮',
    parts: seaHardWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-weapon.png')),
  },
};

// ========== 银翼骑士（第8关）专属配置 ==========
/**
 * 银翼骑士武器零件配置 - 新手难度
 */
const silverEasyWeaponParts = [
  { id: 'easy-silver-core', name: '星辰探测核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'easy-silver-nav', name: '星辰导航仪', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'easy-silver-arrow', name: '星辰光箭头', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'easy-silver-pipe', name: '星辰穿梭管', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'easy-silver-complete', name: '星辰光箭完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 银翼骑士武器零件配置 - 挑战难度
 */
const silverMediumWeaponParts = [
  { id: 'med-silver-core', name: '星辰探测核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'med-silver-loc', name: '星辰定位器', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'med-silver-armor', name: '星辰装甲板', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'med-silver-meter', name: '星辰计量管', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'med-silver-cannon', name: '银翼骑士战炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 银翼骑士武器零件配置 - 高手难度
 */
const silverHardWeaponParts = [
  { id: 'hard-silver-partner', name: '伙伴星辰核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'hard-silver-fair', name: '星辰公平仪', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'hard-silver-sys', name: '星辰风暴系统', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'hard-silver-armor', name: '星辰装甲管', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'hard-silver-ult', name: '银翼骑士终极炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 银翼骑士故事配置 - 新手难度
 * 主题：规律圣殿学习，图形和数字的规律
 */
export const EasySilverStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '一道银光划过天际！银翼骑士从波音C-17运输机中现身："小俊！我是白银守护者银翼骑士！规律圣殿的大门需要用【找规律】的知识才能打开！你准备好了吗？"',
      sceneBackground: 'forest',
      weaponPartReward: 'easy-silver-core',
    },
    1: {
      text: '银翼骑士指向规律石碑："第一个考验是图形规律！○△□○△□...找出重复的模式，就能预测下一个！「星辰探测核心」正在感应规律能量！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'easy-silver-nav',
    },
    2: {
      text: '规律石碑亮起！银翼骑士："正确！数字规律也很重要！2、4、6、8...每次加2，这是双数数列！「星辰光箭头」准备解锁下一个考验！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'easy-silver-arrow',
    },
    3: {
      text: '银翼骑士展翅高飞："你的规律识别能力很强！颜色规律、图形规律、数字规律...这些都是宇宙的秩序！「星辰穿梭管」即将完成！"',
      sceneBackground: 'desert',
      weaponPartReward: 'easy-silver-pipe',
    },
    4: {
      text: '规律圣殿大门打开！银翼骑士："你掌握了找规律的基础知识！星辰光箭组装完成！从今以后，我是你团队的白银守护者！星辰光箭，出击！"',
      sceneBackground: 'space',
      weaponPartReward: 'easy-silver-complete',
    },
  },
  weapon: {
    name: '星辰光箭',
    parts: silverEasyWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-weapon.png')),
  },
};

/**
 * 银翼骑士故事配置 - 挑战难度
 * 主题：规律迷宫挑战，解救炫卡伙伴
 */
export const MediumSilverStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '银翼骑士收到紧急信号："小俊！炫卡伙伴被困在规律迷宫中！迷宫的每扇门都需要找出规律才能打开！需要你的帮助！"',
      sceneBackground: 'forest',
      weaponPartReward: 'med-silver-core',
    },
    1: {
      text: '银翼骑士展开银翼："规律迷宫的第一关！复杂的数字规律，跳跃的图形规律...找出隐藏的模式！「星辰定位器」锁定被困伙伴的位置！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'med-silver-loc',
    },
    2: {
      text: '迷宫门一扇扇打开！银翼骑士："你的规律分析能力在提升！复杂的规律也被你破解了！「星辰装甲板」保护我们继续前进！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'med-silver-armor',
    },
    3: {
      text: '银翼骑士："最后一道规律迷宫！综合规律挑战！图形、数字、颜色的组合规律...破解它就能救出伙伴！「星辰计量管」记录着所有规律密码！"',
      sceneBackground: 'desert',
      weaponPartReward: 'med-silver-meter',
    },
    4: {
      text: '炫卡伙伴获救！银翼骑士："规律迷宫的考验通过！银翼骑士战炮组装完成！从今以后，我们一起用规律的力量守护炫卡世界！"',
      sceneBackground: 'space',
      weaponPartReward: 'med-silver-cannon',
    },
  },
  weapon: {
    name: '银翼骑士战炮',
    parts: silverMediumWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-weapon.png')),
  },
};

/**
 * 银翼骑士故事配置 - 高手难度
 * 主题：圣光审判觉醒，守护规律秩序
 */
export const HardSilverStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '银翼骑士全身被圣光能量包裹："小俊团队！规律圣殿遭到黑暗势力入侵！我需要觉醒终极形态——圣光审判！需要完美掌握找规律的全部知识！"',
      sceneBackground: 'forest',
      weaponPartReward: 'hard-silver-partner',
    },
    1: {
      text: '银翼骑士："宇宙万物都有规律！日月星辰的运转、四季的更替、数字的变化...理解规律就是理解宇宙的秩序！「伙伴星辰核心」正在与你连接！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'hard-silver-fair',
    },
    2: {
      text: '圣光越来越强！银翼骑士："你的规律分析能力超越了普通守护者的极限！「星辰风暴系统」即将完全激活！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'hard-silver-sys',
    },
    3: {
      text: '黑暗势力被圣光击退！银翼骑士："终极形态即将觉醒！最后一道规律挑战将完成星辰装甲管！"',
      sceneBackground: 'desert',
      weaponPartReward: 'hard-silver-armor',
    },
    4: {
      text: '银翼骑士终极形态觉醒！圣光冲天："银翼骑士终极炮装备完成！从今以后，我是炫卡斗士团队的白银守护者！银光斩、骑士冲锋、圣光审判——让我们一起守护宇宙的秩序！"',
      sceneBackground: 'space',
      weaponPartReward: 'hard-silver-ult',
    },
  },
  weapon: {
    name: '银翼骑士终极炮',
    parts: silverHardWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-weapon.png')),
  },
};

// ========== 重装赤魂王（第9关）专属配置 ==========
/**
 * 重装赤魂王武器零件配置 - 新手难度
 */
const flameEasyWeaponParts = [
  { id: 'easy-flame-core', name: '赤魂探测核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'easy-flame-nav', name: '赤魂导航仪', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'easy-flame-head', name: '赤魂灭世头', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'easy-flame-pipe', name: '赤魂穿梭管', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'easy-flame-complete', name: '赤魂灭世完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 重装赤魂王武器零件配置 - 挑战难度
 */
const flameMediumWeaponParts = [
  { id: 'med-flame-core', name: '赤魂探测核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'med-flame-loc', name: '赤魂定位器', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'med-flame-armor', name: '赤魂装甲板', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'med-flame-meter', name: '赤魂计量管', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'med-flame-cannon', name: '重装赤魂王战炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 重装赤魂王武器零件配置 - 高手难度
 */
const flameHardWeaponParts = [
  { id: 'hard-flame-partner', name: '伙伴赤魂核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'hard-flame-fair', name: '赤魂公平仪', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'hard-flame-sys', name: '赤魂灭世系统', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'hard-flame-armor', name: '赤魂装甲管', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'hard-flame-ult', name: '重装赤魂王终极炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 重装赤魂王故事配置 - 新手难度
 * 主题：赤色帝王苏醒，综合考验开始
 */
export const EasyFlameStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '大地剧烈震动！重装赤魂王从沉睡中苏醒："小俊...我是赤色帝王重装赤魂王...沉睡千年后苏醒，需要用【综合知识】证明你的实力！"',
      sceneBackground: 'forest',
      weaponPartReward: 'easy-flame-core',
    },
    1: {
      text: '重装赤魂王展示第一个考验："数的认识...76里面有几个十和几个一？100以内数的组成，这是数学的基础！「赤魂探测核心」正在检验你的知识！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'easy-flame-nav',
    },
    2: {
      text: '重装赤魂王点头："不错！加减法运算也要熟练！60+30-40等于多少？综合运用才能通过考验！「赤魂灭世头」准备下一关！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'easy-flame-head',
    },
    3: {
      text: '重装赤魂王："你的基础知识扎实！最后一个考验：比较大小！找出最接近100的数！「赤魂穿梭管」即将完成！"',
      sceneBackground: 'desert',
      weaponPartReward: 'easy-flame-pipe',
    },
    4: {
      text: '重装赤魂王站起来："你通过了我的基础考验！赤魂灭世组装完成！但我还有更强的力量...准备好迎接更大的挑战吧！"',
      sceneBackground: 'space',
      weaponPartReward: 'easy-flame-complete',
    },
  },
  weapon: {
    name: '赤魂灭世',
    parts: flameEasyWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-weapon.png')),
  },
};

/**
 * 重装赤魂王故事配置 - 挑战难度
 * 主题：力量试炼，综合运用所有知识
 */
export const MediumFlameStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '重装赤魂王的力量觉醒！他全身被赤色能量包裹："小俊！进阶试炼开始！你需要综合运用本学期所有知识——数的认识、加减法、找规律、人民币！"',
      sceneBackground: 'forest',
      weaponPartReward: 'med-flame-core',
    },
    1: {
      text: '重装赤魂王："两位数加减法！47+32等于多少？竖式计算要准确！「赤魂定位器」正在评估你的计算能力！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'med-flame-loc',
    },
    2: {
      text: '试炼继续！重装赤魂王："应用题挑战！商店里有56个苹果，上午卖出23个，下午又运来15个...现在有多少个？综合思维！「赤魂装甲板」认可你的进步！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'med-flame-armor',
    },
    3: {
      text: '重装赤魂王："最后一道推理题！一个两位数，十位比个位大3...这个数可能是？逻辑思维是数学的核心！「赤魂计量管」记录着你的表现！"',
      sceneBackground: 'desert',
      weaponPartReward: 'med-flame-meter',
    },
    4: {
      text: '试炼通过！重装赤魂王："你的综合能力让我刮目相看！重装赤魂王战炮组装完成！但是...终极形态还在沉睡中..."',
      sceneBackground: 'space',
      weaponPartReward: 'med-flame-cannon',
    },
  },
  weapon: {
    name: '重装赤魂王战炮',
    parts: flameMediumWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-weapon.png')),
  },
};

/**
 * 重装赤魂王故事配置 - 高手难度
 * 主题：终极形态觉醒，赤魂灭世
 */
export const HardFlameStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '重装赤魂王的力量达到顶峰！他悬浮在空中，全身被赤色火焰包裹："小俊团队！终极试炼开始！只有完美掌握一年级全部知识的战士，才能见证我的终极形态——赤魂灭世！"',
      sceneBackground: 'forest',
      weaponPartReward: 'hard-flame-partner',
    },
    1: {
      text: '重装赤魂王："数与运算、图形与规律、货币与应用...所有知识融为一体！这是对本学期学习的最终检验！「伙伴赤魂核心」正在与你连接！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'hard-flame-fair',
    },
    2: {
      text: '赤色能量越来越强！重装赤魂王："你的数学能力超越了普通一年级学生的极限！「赤魂灭世系统」即将完全激活！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'hard-flame-sys',
    },
    3: {
      text: '天空被染成赤色！重装赤魂王："终极形态即将觉醒！最后一道综合挑战将完成赤魂装甲管！证明你是本学期的数学大师！"',
      sceneBackground: 'desert',
      weaponPartReward: 'hard-flame-armor',
    },
    4: {
      text: '重装赤魂王终极形态觉醒！赤色火焰冲天："重装赤魂王终极炮装备完成！从今以后，我是炫卡斗士团队的赤色帝王！火焰能量弹、毁灭能量弹、赤魂灭世——让我们一起守护炫卡世界！恭喜你完成一年级全部学习！"',
      sceneBackground: 'space',
      weaponPartReward: 'hard-flame-ult',
    },
  },
  weapon: {
    name: '重装赤魂王终极炮',
    parts: flameHardWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-weapon.png')),
  },
};

// ========== 焰龙战神（4-2）专属配置 ==========
/**
 * 焰龙战神武器零件配置 - 新手难度
 */
const dragonEasyWeaponParts = [
  { id: 'dragon-easy-core', name: '龙炎核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'dragon-easy-emitter', name: '龙息发射器', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'dragon-easy-scale', name: '龙鳞护甲片', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'dragon-easy-shell', name: '龙骨外壳', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'dragon-easy-complete', name: '炫光焰龙枪完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 焰龙战神武器零件配置 - 挑战难度
 */
const dragonMediumWeaponParts = [
  { id: 'dragon-medium-core', name: '炎龙之心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'dragon-medium-scope', name: '龙眼瞄准器', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'dragon-medium-plate', name: '龙鳞装甲板', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'dragon-medium-barrel', name: '龙息炮管', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'dragon-medium-complete', name: '闪电焰龙炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 焰龙战神武器零件配置 - 高手难度
 */
const dragonHardWeaponParts = [
  { id: 'dragon-hard-core', name: '远古龙魂', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'dragon-hard-prism', name: '龙神棱镜', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'dragon-hard-armor', name: '神龙铠甲', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'dragon-hard-cannon', name: '焚天炮身', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'dragon-hard-complete', name: '雷霆龙神炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 焰龙战神故事配置 - 新手难度
 */
export const EasyDragonStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '柯星宇在考古现场发现了一块发光的石板，带回家后石板突然苏醒——是4000年前降临地球的焰龙战神！可是焰龙战神头部发生故障，开始无意识地喷吐龙炎！',
      sceneBackground: 'forest',
      weaponPartReward: 'dragon-easy-core',
    },
    1: {
      text: '焰龙战神痛苦地咆哮："头...好痛...需要数学能量修复...两位数加减整十数...快！" 小俊紧急用数学知识帮助焰龙战神！',
      sceneBackground: 'ocean',
      weaponPartReward: 'dragon-easy-emitter',
    },
    2: {
      text: '焰龙战神的龙鳞开始脱落："这些数学题...让我清醒了一些...继续！" 龙炎渐渐平息，火焰变得可控！',
      sceneBackground: 'volcano',
      weaponPartReward: 'dragon-easy-scale',
    },
    3: {
      text: '焰龙战神单膝跪地："谢谢你...我的头部故障快修复了...最后一步！" 炫光焰龙枪的零件正在组装！',
      sceneBackground: 'desert',
      weaponPartReward: 'dragon-easy-shell',
    },
    4: {
      text: '焰龙战神恢复正常："谢谢！我是焰龙战神，4000年前的龙族守护者！从石板封印到苏醒，从故障到恢复，感谢你用数学知识帮助我！炫光焰龙枪装备完成！"',
      sceneBackground: 'space',
      weaponPartReward: 'dragon-easy-complete',
    },
  },
  weapon: {
    name: '炫光焰龙枪',
    parts: dragonEasyWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-weapon.png')),
  },
};

/**
 * 焰龙战神故事配置 - 挑战难度
 */
export const MediumDragonStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '焰龙战神的进阶形态从石板中完全苏醒！他的身体被远古火焰包裹："小俊！我需要更强的数学能量来控制这股力量！两位数加减整十数——来吧！"',
      sceneBackground: 'forest',
      weaponPartReward: 'dragon-medium-core',
    },
    1: {
      text: '焰龙战神张开龙翼："龙炎吐息需要精确的计算！让我看看你的能力！" 高温龙炎喷涌而出！',
      sceneBackground: 'ocean',
      weaponPartReward: 'dragon-medium-scope',
    },
    2: {
      text: '龙鳞护甲在火焰中闪烁："不错...你的计算能力让我刮目相看！但是真正的龙族力量才刚刚觉醒！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'dragon-medium-plate',
    },
    3: {
      text: '焰龙战神收回龙翼："你通过了我的考验！闪电焰龙炮组装完成！从今以后，让我们一起用龙炎守护地球！"',
      sceneBackground: 'space',
      weaponPartReward: 'dragon-medium-complete',
    },
  },
  weapon: {
    name: '闪电焰龙炮',
    parts: dragonMediumWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-weapon.png')),
  },
};

/**
 * 焰龙战神故事配置 - 高手难度
 */
export const HardDragonStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '远古龙魂完全觉醒！焰龙战神悬浮在火山口上方，全身被金色的神龙之火包裹："小俊团队，我等待了4000年，终于找到能继承焚天龙焰的人！"',
      sceneBackground: 'forest',
      weaponPartReward: 'dragon-hard-core',
    },
    1: {
      text: '天空被龙炎染红："焚天龙焰需要最高级别的数学能力！两位数加减整十数的终极考验——开始！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'dragon-hard-prism',
    },
    2: {
      text: '神龙铠甲在烈焰中成型："不可思议...你的计算速度竟然跟上了龙族的节奏！终极武器即将完成！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'dragon-hard-armor',
    },
    3: {
      text: '焰龙战神降落，收回龙炎："焚天龙焰...终于找到传人了！雷霆龙神炮装备完成！从今以后，我是炫卡斗士团队的龙族守护者！龙炎吐息、龙鳞护甲、焚天龙焰——让我们一起守护地球！"',
      sceneBackground: 'space',
      weaponPartReward: 'dragon-hard-complete',
    },
  },
  weapon: {
    name: '雷霆龙神炮',
    parts: dragonHardWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-weapon.png')),
  },
};

/**
 * 创建关卡故事配置的工厂函数
 * 根据守护者名称和武器图片生成配置
 */
function createLevelStoryConfig(
  _levelId: string,
  guardianName: string,
  weaponNameEasy: string,
  weaponNameMedium: string,
  weaponNameHard: string,
  _themeStory: string
): Record<DifficultyLevel, QuestionStoryConfig> {
  return {
    [DifficultyLevel.EASY]: {
      difficulty: DifficultyLevel.EASY,
      narratives: {
        0: { text: `${guardianName}正在等待挑战！第一关：收集武器零件！`, sceneBackground: 'forest', weaponPartReward: 'easy-core' },
        1: { text: `第二关：继续前进，收集更多零件！`, sceneBackground: 'ocean', weaponPartReward: 'easy-emitter' },
        2: { text: `第三关：接近目标了！`, sceneBackground: 'volcano', weaponPartReward: 'easy-shield' },
        3: { text: `第四关：最后的零件！`, sceneBackground: 'desert', weaponPartReward: 'easy-shell' },
        4: { text: `${weaponNameEasy}组装完成！准备战斗！`, sceneBackground: 'space', weaponPartReward: 'easy-complete' },
      },
      weapon: {
        name: weaponNameEasy,
        parts: DifficultyConfigs[DifficultyLevel.EASY].weaponParts,
        completeImage: `/assets/weapons/easy-${guardianName}-${weaponNameEasy}.png`,
      },
    },
    [DifficultyLevel.MEDIUM]: {
      difficulty: DifficultyLevel.MEDIUM,
      narratives: {
        0: { text: `${guardianName}进阶形态出现！挑战开始！`, sceneBackground: 'forest', weaponPartReward: 'medium-core' },
        1: { text: `收集更强的零件！`, sceneBackground: 'ocean', weaponPartReward: 'medium-scope' },
        2: { text: `武器能量增强中！`, sceneBackground: 'volcano', weaponPartReward: 'medium-block' },
        3: { text: `最终组装！${weaponNameMedium}完成！`, sceneBackground: 'space', weaponPartReward: 'medium-complete' },
      },
      weapon: {
        name: weaponNameMedium,
        parts: DifficultyConfigs[DifficultyLevel.MEDIUM].weaponParts,
        completeImage: `/assets/weapons/medium-${guardianName}-${weaponNameMedium}.png`,
      },
    },
    [DifficultyLevel.HARD]: {
      difficulty: DifficultyLevel.HARD,
      narratives: {
        0: { text: `${guardianName}终极形态降临！终极挑战！`, sceneBackground: 'forest', weaponPartReward: 'hard-ring' },
        1: { text: `收集终极能量！`, sceneBackground: 'ocean', weaponPartReward: 'hard-prism' },
        2: { text: `终极武器即将完成！`, sceneBackground: 'volcano', weaponPartReward: 'hard-stabilizer' },
        3: { text: `${weaponNameHard}组装完成！终极决战！`, sceneBackground: 'space', weaponPartReward: 'hard-complete' },
      },
      weapon: {
        name: weaponNameHard,
        parts: DifficultyConfigs[DifficultyLevel.HARD].weaponParts,
        completeImage: `/assets/weapons/hard-${guardianName}-${weaponNameHard}.png`,
      },
    },
  };
}

/**
 * 按关卡ID映射的故事配置
 */
// ========== 隐藏关卡 H1：超炫电光王专属配置 ==========
/**
 * 超炫电光王武器零件配置 - 新手难度
 */
const ultimateEasyWeaponParts = [
  { id: 'easy-blue-core', name: '炫蓝探测核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'easy-blue-nav', name: '炫蓝导航仪', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'easy-blue-head', name: '炫蓝电光头', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'easy-blue-pipe', name: '炫蓝穿梭管', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'easy-blue-complete', name: '炫蓝电光炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 超炫电光王武器零件配置 - 挑战难度
 */
const ultimateMediumWeaponParts = [
  { id: 'med-blue-core', name: '炫蓝探测核心（升级）', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'med-blue-loc', name: '炫蓝定位器', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'med-blue-armor', name: '炫蓝装甲板', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'med-blue-meter', name: '炫蓝计量管', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'med-blue-cannon', name: '炫蓝电光王战炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 超炫电光王武器零件配置 - 高手难度
 */
const ultimateHardWeaponParts = [
  { id: 'hard-ult-partner', name: '伙伴终极核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'hard-ult-fair', name: '炫蓝公平仪', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'hard-ult-sys', name: '终极爆裂系统', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'hard-ult-armor', name: '炫蓝装甲管', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'hard-ult-ult', name: '超炫电光王终极炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 隐藏关卡 H1 故事配置 - 新手难度
 * 主题：第一季大结局 - 十一位炫卡斗士合体
 */
export const EasyUltimateStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '【合体开始】炫蓝闪电S："伙伴们！巨力风暴、急救卫士、烈火修罗的力量首先汇聚！我用圆片代表伙伴力量，用数位表代表合体阵型！3个圆片=3位先锋伙伴！能摆出几种合体阵型？"',
      sceneBackground: 'forest',
      weaponPartReward: 'easy-blue-core',
    },
    1: {
      text: '炫蓝闪电S："4种阵型！30、21、12、3！暗影特工的力量也加入了！4位伙伴力量汇聚！摆出最大合体阵型！「炫蓝导航仪」正在协调伙伴能量！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'easy-blue-nav',
    },
    2: {
      text: '炫蓝闪电S："铁臂爵士力量融入！5位伙伴了！发现合体规律：圆片数+1=阵型数！「炫蓝电光头」接收更多伙伴信号！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'easy-blue-head',
    },
    3: {
      text: '炫蓝闪电S："喷射加仑、裂变骑士的力量到达！7位伙伴力量汇聚！合体能量持续增强！「炫蓝穿梭管」记录着合体规律！"',
      sceneBackground: 'desert',
      weaponPartReward: 'easy-blue-pipe',
    },
    4: {
      text: '炫蓝闪电S："合体规律完全掌握！圆片数+1=阵型数！第一阶段合体完成！还有更多伙伴力量等待汇聚！"',
      sceneBackground: 'space',
      weaponPartReward: 'easy-blue-complete',
    },
  },
  weapon: {
    name: '炫光电光炮',
    parts: ultimateEasyWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-chaoxuan-dianguangwang-blast.png')),
  },
};

/**
 * 隐藏关卡 H1 故事配置 - 挑战难度
 * 主题：合体进行中 - 更多伙伴力量汇聚
 */
export const MediumUltimateStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '【合体深入】炫蓝闪电S："暴烈重卡、重力金刚的力量加入！数位规律验证——神秘数字的十位和个位之和是7！用7个圆片能摆出这个数吗？"',
      sceneBackground: 'forest',
      weaponPartReward: 'med-blue-core',
    },
    1: {
      text: '炫蓝闪电S："深海天锚的力量也到了！要摆出81这个终极阵型，需要几位伙伴的力量？十位+个位=总伙伴数！「炫蓝定位器」锁定合体坐标！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'med-blue-loc',
    },
    2: {
      text: '炫蓝闪电S："九位伙伴力量汇聚！可以摆出10种阵型！90、81、72、63...每种阵型都有独特的能量分布！「炫蓝装甲板」稳定合体能量！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'med-blue-armor',
    },
    3: {
      text: '炫蓝闪电S："数位对比考验！5位伙伴和7位伙伴的力量，能摆出的阵型数量相差多少？合体规律计算是关键！「炫蓝计量管」监测能量波动！"',
      sceneBackground: 'desert',
      weaponPartReward: 'med-blue-meter',
    },
    4: {
      text: '炫蓝闪电S："合体进行中！十位比个位多3个伙伴力量，总共9位伙伴！这个终极阵型是63！第二阶段合体完成！禁断之力即将觉醒！"',
      sceneBackground: 'space',
      weaponPartReward: 'med-blue-cannon',
    },
  },
  weapon: {
    name: '闪电数位炮',
    parts: ultimateMediumWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-chaoxuan-dianguangwang-digit.png')),
  },
};

/**
 * 隐藏关卡 H1 故事配置 - 高手难度
 * 主题：第一季大结局 - 禁断之力觉醒，十一位炫卡斗士合体
 */
export const HardUltimateStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '【第一季大结局·禁断之力觉醒！】炫蓝闪电S："十位伙伴全部就位！禁断之力！十一炫卡合体！用10个圆片——代表我们全部伙伴的力量——验证数位终极规律！能摆出几种阵型？"',
      sceneBackground: 'forest',
      weaponPartReward: 'hard-ult-partner',
    },
    1: {
      text: '超炫电光王（合体中）："11种阵型！禁断之力正在觉醒！哪些阵型需要9个伙伴？哪些需要10个伙伴？「伙伴终极核心」正在连接所有炫卡斗士！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'hard-ult-fair',
    },
    2: {
      text: '超炫电光王（合体中）："终极能量考验！十位和个位相加等于12，十位比个位大4！猜出这个能量数！「终极爆裂系统」激活合体程序！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'hard-ult-sys',
    },
    3: {
      text: '超炫电光王（合体中）："阵型分类完成！35阵型、44阵型、27阵型、18阵型已分配！「炫蓝装甲管」稳定最终合体能量！"',
      sceneBackground: 'desert',
      weaponPartReward: 'hard-ult-armor',
    },
    4: {
      text: '超炫电光王："合体成功！终极爆裂能量74！十一位炫卡斗士完美合体！我是超炫电光王！从今以后，我将守护地球和马奇纳的和平！终极爆裂出击！"',
      sceneBackground: 'space',
      weaponPartReward: 'hard-ult-ult',
    },
  },
  weapon: {
    name: '雷霆电光爆裂炮',
    parts: ultimateHardWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-chaoxuan-dianguangwang-burst.png')),
  },
};

// ========== 隐藏关卡 H2：炫蓝雷霆王专属配置 ==========
/**
 * 炫蓝雷霆王武器零件配置 - 新手难度
 */
const thunderKingEasyWeaponParts = [
  { id: 'h2-easy-core', name: '雷霆核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'h2-easy-pulse', name: '雷霆脉冲器', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'h2-easy-stabilizer', name: '雷霆稳定器', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'h2-easy-shell', name: '雷霆外壳', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'h2-easy-complete', name: '炫蓝雷霆炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 炫蓝雷霆王武器零件配置 - 挑战难度
 */
const thunderKingMediumWeaponParts = [
  { id: 'h2-medium-core', name: '雷霆超核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'h2-medium-scope', name: '雷霆瞄准镜', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'h2-medium-armor', name: '雷霆装甲', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'h2-medium-body', name: '雷霆战炮身', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'h2-medium-complete', name: '炫蓝雷霆王战炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 炫蓝雷霆王武器零件配置 - 高手难度
 */
const thunderKingHardWeaponParts = [
  { id: 'h2-hard-hypercore', name: '雷霆超核心', shapeType: 'circle' as const, iconImage: shapeIcons.circle },
  { id: 'h2-hard-future', name: '未来预知仪', shapeType: 'triangle' as const, iconImage: shapeIcons.triangle },
  { id: 'h2-hard-vision', name: '时空视野器', shapeType: 'square' as const, iconImage: shapeIcons.square },
  { id: 'h2-hard-barrel', name: '雷霆终极炮身', shapeType: 'rectangle' as const, iconImage: shapeIcons.rectangle },
  { id: 'h2-hard-ultimate', name: '炫蓝雷霆灭世炮完成', shapeType: 'composite' as const, iconImage: shapeIcons.composite },
];

/**
 * 隐藏关卡 H2 故事配置 - 新手难度
 * 主题：时空裂缝初现
 */
export const EasyThunderKingStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.EASY,
  narratives: {
    0: {
      text: '时空裂缝在天空撕裂！炫蓝雷霆王从中走出："小俊！我从未来穿越而来！重装赤魂王会在未来毁灭炫卡世界，只有我能阻止他！但要驾驭我的力量，你需要通过考验！"',
      sceneBackground: 'forest',
      weaponPartReward: 'h2-easy-core',
    },
    1: {
      text: '炫蓝雷霆王："第一关通过！「雷霆核心」正在充能！我的时空穿梭能力需要数学能量维持！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'h2-easy-pulse',
    },
    2: {
      text: '炫蓝雷霆王："不错！你已经开始适应未来的节奏！「雷霆脉冲器」记录着你的进步！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'h2-easy-stabilizer',
    },
    3: {
      text: '炫蓝雷霆王："我的时空感知告诉我——你很有潜力！「雷霆稳定器」确保时空通道稳定！"',
      sceneBackground: 'desert',
      weaponPartReward: 'h2-easy-shell',
    },
    4: {
      text: '炫蓝雷霆王："炫蓝雷霆炮组装完成！但这只是开始，更强的考验还在后面！"',
      sceneBackground: 'space',
      weaponPartReward: 'h2-easy-complete',
    },
  },
  weapon: {
    name: '炫蓝雷霆炮',
    parts: thunderKingEasyWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/easy-weapon.png')),
  },
};

/**
 * 隐藏关卡 H2 故事配置 - 挑战难度
 * 主题：未来预知
 */
export const MediumThunderKingStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.MEDIUM,
  narratives: {
    0: {
      text: '炫蓝雷霆王："在我的时代，数学是所有力量的基础！用综合知识激活我的战炮！"',
      sceneBackground: 'forest',
      weaponPartReward: 'h2-medium-core',
    },
    1: {
      text: '炫蓝雷霆王："时空预知告诉我——这一关你会顺利通过！「雷霆瞄准镜」锁定目标！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'h2-medium-scope',
    },
    2: {
      text: '炫蓝雷霆王："未来的重装赤魂王比现在强十倍！你需要更快更强！「雷霆装甲」保护你！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'h2-medium-armor',
    },
    3: {
      text: '炫蓝雷霆王："时空能量持续汇聚！继续前进！"',
      sceneBackground: 'desert',
      weaponPartReward: 'h2-medium-body',
    },
    4: {
      text: '炫蓝雷霆王："炫蓝雷霆王战炮组装完成！你正在接近掌控时空之力的境界！"',
      sceneBackground: 'space',
      weaponPartReward: 'h2-medium-complete',
    },
  },
  weapon: {
    name: '炫蓝雷霆王战炮',
    parts: thunderKingMediumWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/medium-weapon.png')),
  },
};

/**
 * 隐藏关卡 H2 故事配置 - 高手难度
 * 主题：终极雷霆觉醒
 */
export const HardThunderKingStoryConfig: QuestionStoryConfig = {
  difficulty: DifficultyLevel.HARD,
  narratives: {
    0: {
      text: '炫蓝雷霆王："终极考验！在未来的战斗中，每一个计算都决定胜负！证明你有资格驾驭我的终极形态！"',
      sceneBackground: 'forest',
      weaponPartReward: 'h2-hard-hypercore',
    },
    1: {
      text: '炫蓝雷霆王："时空裂缝的能量正在涌入！「雷霆超核心」记录着你的每一道答案！"',
      sceneBackground: 'ocean',
      weaponPartReward: 'h2-hard-future',
    },
    2: {
      text: '炫蓝雷霆王："未来的我看到你战胜了重装赤魂王！但那是只有在通过这个考验后才发生的未来！"',
      sceneBackground: 'volcano',
      weaponPartReward: 'h2-hard-vision',
    },
    3: {
      text: '炫蓝雷霆王："时空通道即将关闭！最后的考验！「雷霆终极炮身」就位！"',
      sceneBackground: 'desert',
      weaponPartReward: 'h2-hard-barrel',
    },
    4: {
      text: '炫蓝雷霆王："炫蓝雷霆灭世炮组装完成！你已经获得了穿越时空的力量！走吧，去击败重装赤魂王，改变未来！"',
      sceneBackground: 'space',
      weaponPartReward: 'h2-hard-ultimate',
    },
  },
  weapon: {
    name: '炫蓝雷霆灭世炮',
    parts: thunderKingHardWeaponParts,
    completeImage: getAssetPath(getAssetPath('/assets/weapons/hard-weapon.png')),
  },
};


export const LevelStoryConfigs: Record<string, Record<DifficultyLevel, QuestionStoryConfig>> = {
  // ========== 第一单元：图形与几何 ==========
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
  // ========== 第二单元：20以内退位减法 ==========
  '2-1': {
    [DifficultyLevel.EASY]: EasyShadowStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumShadowStoryConfig,
    [DifficultyLevel.HARD]: HardShadowStoryConfig,
  },
  '2-2': {
    [DifficultyLevel.EASY]: EasyIronArmStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumIronArmStoryConfig,
    [DifficultyLevel.HARD]: HardIronArmStoryConfig,
  },
  '2-3': {
    [DifficultyLevel.EASY]: EasyGallonStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumGallonStoryConfig,
    [DifficultyLevel.HARD]: HardGallonStoryConfig,
  },
  '2-4': {
    [DifficultyLevel.EASY]: EasyFissionStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumFissionStoryConfig,
    [DifficultyLevel.HARD]: HardFissionStoryConfig,
  },
  // ========== 第三单元：100以内数的认识 ==========
  '3-1': {
    [DifficultyLevel.EASY]: EasyTruckStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumTruckStoryConfig,
    [DifficultyLevel.HARD]: HardTruckStoryConfig,
  },
  '3-2': {
    [DifficultyLevel.EASY]: EasyAnchorStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumAnchorStoryConfig,
    [DifficultyLevel.HARD]: HardAnchorStoryConfig,
  },
  '3-3': {
    [DifficultyLevel.EASY]: EasyGravityStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumGravityStoryConfig,
    [DifficultyLevel.HARD]: HardGravityStoryConfig,
  },
  '3-4': {
    [DifficultyLevel.EASY]: EasyIronStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumIronStoryConfig,
    [DifficultyLevel.HARD]: HardIronStoryConfig,
  },
  // ========== 第四单元：100以内口算加减法 ==========
  '4-1': createLevelStoryConfig('4-1', '炫蓝闪电S', '炫蓝光能枪S', '炫蓝闪电枪S', '炫蓝雷霆炮S', '光能'),
  '4-2': {
    [DifficultyLevel.EASY]: EasyDragonStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumDragonStoryConfig,
    [DifficultyLevel.HARD]: HardDragonStoryConfig,
  },
  '4-3': {
    [DifficultyLevel.EASY]: EasyThunderStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumThunderStoryConfig,
    [DifficultyLevel.HARD]: HardThunderStoryConfig,
  },
  // ========== 第五单元：100以内笔算加减法 ==========
  '5-1': {
    [DifficultyLevel.EASY]: EasyFalconStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumFalconStoryConfig,
    [DifficultyLevel.HARD]: HardFalconStoryConfig,
  },
  '5-2': {
    [DifficultyLevel.EASY]: EasyTitanStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumTitanStoryConfig,
    [DifficultyLevel.HARD]: HardTitanStoryConfig,
  },
  // ========== 第六单元：BOSS关 ==========
  '6': {
    [DifficultyLevel.EASY]: EasyStarRangerStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumStarRangerStoryConfig,
    [DifficultyLevel.HARD]: HardStarRangerStoryConfig,
  },
  // ========== 第七单元：欢乐购物街 ==========
  '7-1': {
    [DifficultyLevel.EASY]: EasyDrillStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumDrillStoryConfig,
    [DifficultyLevel.HARD]: HardDrillStoryConfig,
  },
  '7-2': {
    [DifficultyLevel.EASY]: EasySeaStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumSeaStoryConfig,
    [DifficultyLevel.HARD]: HardSeaStoryConfig,
  },
  // ========== 第八单元：找规律 ==========
  '8': {
    [DifficultyLevel.EASY]: EasySilverStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumSilverStoryConfig,
    [DifficultyLevel.HARD]: HardSilverStoryConfig,
  },
  // ========== 第九单元：期末综合 ==========
  '9': {
    [DifficultyLevel.EASY]: EasyFlameStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumFlameStoryConfig,
    [DifficultyLevel.HARD]: HardFlameStoryConfig,
  },

  // ========== 隐藏关卡 H1：超炫电光王 ==========
  'h1': {
    [DifficultyLevel.EASY]: EasyUltimateStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumUltimateStoryConfig,
    [DifficultyLevel.HARD]: HardUltimateStoryConfig,
  },
  'H1': {
    [DifficultyLevel.EASY]: EasyUltimateStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumUltimateStoryConfig,
    [DifficultyLevel.HARD]: HardUltimateStoryConfig,
  },
  // ========== 隐藏关卡 H2：炫蓝雷霆王 ==========
  'h2': {
    [DifficultyLevel.EASY]: EasyThunderKingStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumThunderKingStoryConfig,
    [DifficultyLevel.HARD]: HardThunderKingStoryConfig,
  },
  'H2': {
    [DifficultyLevel.EASY]: EasyThunderKingStoryConfig,
    [DifficultyLevel.MEDIUM]: MediumThunderKingStoryConfig,
    [DifficultyLevel.HARD]: HardThunderKingStoryConfig,
  },
} as const;