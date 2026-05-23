import { getAssetPath } from '@/config/paths.config';
import type { Question, QuestionType, WeaponPart } from '@/types';
import { DifficultyLevel } from '@/types';

/**
 * 第三关（1-3 七巧板）消防主题武器零件配置
 */
export const level1_3EasyWeaponParts: WeaponPart[] = [
  { id: 'easy-fire-core', name: '水炮核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.webp') },
  { id: 'easy-fire-connector', name: '水管连接器', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.webp') },
  { id: 'easy-fire-nozzle', name: '水枪喷头', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.webp') },
  { id: 'easy-fire-stabilizer', name: '灭火器稳定器', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/光能外壳.webp') },
  { id: 'easy-fire-complete', name: '炫光水炮枪完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/easy-xuanlan-shandian-light.webp') },
];

export const level1_3MediumWeaponParts: WeaponPart[] = [
  { id: 'fire-medium-core', name: '灭火台核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.webp') },
  { id: 'fire-medium-scope', name: '灭火瞄准镜', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.webp') },
  { id: 'fire-medium-block', name: '灭火稳定块', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.webp') },
  { id: 'fire-medium-body', name: '灭火锤外壳', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/光能外壳.webp') },
  { id: 'fire-medium-complete', name: '闪电灭火锤完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/medium-xuanlan-shandian-bolt.webp') },
];

export const level1_3HardWeaponParts: WeaponPart[] = [
  { id: 'fire-hard-ring', name: '消防能量环', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.webp') },
  { id: 'fire-hard-prism', name: '消防聚焦棱', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.webp') },
  { id: 'fire-hard-stabilizer', name: '消防稳定器', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.webp') },
  { id: 'fire-hard-barrel', name: '消防炮身', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/光能外壳.webp') },
  { id: 'fire-hard-complete', name: '雷霆消防炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/hard-xuanlan-shandian-thunder.webp') },
];

/**
 * 关卡 1-3 低难度题目：炫光水炮枪
 * 主题：七巧板基础认知
 * 场景：消防站 → 居民楼 → 商场 → 工厂 → 烟花广场
 */
export const level1_3EasyQuestions: Question[] = [
  // 第 1 题：七巧板基础（消防站场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '七巧板一共有几块？',
    options: [
      { id: 'a', text: '5 块' },
      { id: 'b', text: '6 块' },
      { id: 'c', text: '7 块' },
      { id: 'd', text: '8 块' },
    ],
    correctAnswer: 'c',
    explanation: '七巧板一共有 7 块！这也是它名字的由来。就像消防车有 7 个储物格一样！',
    hint: '数一数"七"巧板有几个？',
  },

  // 第 2 题：七巧板图形（居民楼场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '七巧板里没有哪种图形？',
    options: [
      { id: 'a', text: '三角形' },
      { id: 'b', text: '正方形' },
      { id: 'c', text: '圆形' },
      { id: 'd', text: '平行四边形' },
    ],
    correctAnswer: 'c',
    explanation: '七巧板里没有圆形！七巧板由三角形、正方形和平行四边形组成，都是直边的图形。就像消防水管的喷头都是直边的设计一样！',
    hint: '七巧板都是直边的图形',
  },

  // 第 3 题：三角形数量（商场场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '七巧板中有几个三角形？',
    options: [
      { id: 'a', text: '3 个' },
      { id: 'b', text: '4 个' },
      { id: 'c', text: '5 个' },
      { id: 'd', text: '6 个' },
    ],
    correctAnswer: 'c',
    explanation: '七巧板中有 5 个三角形！分别是 2 个大三角形、1 个中三角形和 2 个小三角形。就像消防站有 5 个消防栓一样！',
    hint: '三角形在七巧板中最多',
  },

  // 第 4 题：图形拼组（工厂场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '用两个小三角形可以拼成什么图形？',
    options: [
      { id: 'a', text: '只能拼成三角形' },
      { id: 'b', text: '可以拼成正方形或平行四边形' },
      { id: 'c', text: '只能拼成圆形' },
      { id: 'd', text: '什么都拼不成' },
    ],
    correctAnswer: 'b',
    explanation: '两个小三角形可以拼成正方形（斜边对在一起）或平行四边形（直角边对在一起）！就像消防车的水管可以折叠成不同形状！',
    hint: '试试把两个三角形不同边对在一起',
  },

  // 第 5 题：七巧板拼图（烟花广场场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '用七巧板可以拼出什么？',
    options: [
      { id: 'a', text: '只能拼正方形' },
      { id: 'b', text: '只能拼动物' },
      { id: 'c', text: '可以拼出各种形状，如房子、船、动物等' },
      { id: 'd', text: '什么都拼不出来' },
    ],
    correctAnswer: 'c',
    explanation: '七巧板非常神奇，可以拼出成千上万种图案！比如房子、小船、小猫、小鱼等等。就像消防车可以去不同的地方灭火一样！',
    hint: '七巧板是中国传统的益智玩具',
  },

  // 第 6 题：图案识别（消防站场景）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '下面哪些是七巧板可以拼成的图案？',
    options: [
      { id: 'a', text: '小鱼 🐟' },
      { id: 'b', text: '小猫 🐱' },
      { id: 'c', text: '皮球 🏀' },
      { id: 'd', text: '小船 ⛵' },
      { id: 'e', text: '太阳 ☀️' },
      { id: 'f', text: '房子 🏠' },
    ],
    correctAnswers: ['a', 'b', 'd', 'f'],
    explanation: '七巧板可以拼出小鱼、小猫、小船和房子！但是皮球和太阳是圆形的，七巧板拼不出来。就像消防车不能爬树一样！',
    hint: '七巧板只能拼出直边的图形',
  },

  // 第 7 题：图形配对（烟花广场场景）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '把七巧板的图形拖到正确的名称上！',
    instruction: '将图形拖到对应的位置',
    items: [
      { id: 'triangle-big', name: '大三角形', shape: 'triangle-big' },
      { id: 'triangle-small', name: '小三角形', shape: 'triangle-small' },
      { id: 'square', name: '正方形', shape: 'square' },
      { id: 'parallelogram', name: '平行四边形', shape: 'parallelogram' },
    ],
    targets: [
      { id: 'triangle-big-pos', name: '大三角形', accepts: ['triangle-big'], position: { x: 80, y: 20 }, size: { width: 160, height: 120 } },
      { id: 'triangle-small-pos', name: '小三角形', accepts: ['triangle-small'], position: { x: 340, y: 20 }, size: { width: 100, height: 80 } },
      { id: 'square-pos', name: '正方形', accepts: ['square'], position: { x: 80, y: 170 }, size: { width: 120, height: 120 } },
      { id: 'parallelogram-pos', name: '平行四边形', accepts: ['parallelogram'], position: { x: 320, y: 170 }, size: { width: 180, height: 120 } },
    ],
    explanation: '太棒了！七巧板由 5 个三角形、1 个正方形和 1 个平行四边形组成！就像消防站配备了完整的灭火设备一样！炫光水炮枪组装完成，准备出发灭火！',
    hint: '仔细看看每个图形的样子！',
  },
];

/**
 * 关卡 1-3 中难度题目：闪电灭火锤
 * 主题：七巧板图形特点与组合
 */
export const level1_3MediumQuestions: Question[] = [
  // 第 1 题：七巧板特点多选（消防站场景）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '七巧板有什么特点？',
    options: [
      { id: 'a', text: '一共有 7 块' },
      { id: 'b', text: '可以拼出成千上万种图案' },
      { id: 'c', text: '包含圆形' },
      { id: 'd', text: '是中国传统的益智玩具' },
    ],
    correctAnswers: ['a', 'b', 'd'],
    explanation: '七巧板有 7 块，可以拼出成千上万种图案，是中国传统的益智玩具！但是七巧板不包含圆形。',
    hint: '想想七巧板的名字和来源',
  },

  // 第 2 题：图形连线（居民楼场景）
  {
    type: 'link' as QuestionType.LINK,
    question: '把七巧板的图形和数量连起来！',
    pairs: [
      { id: '1', left: '大三角形', right: '2 个', group: '2' },
      { id: '2', left: '小三角形', right: '2 个', group: '2' },
      { id: '3', left: '中三角形', right: '1 个', group: '1' },
      { id: '4', left: '正方形', right: '1 个', group: '1' },
      { id: '5', left: '平行四边形', right: '1 个', group: '1' },
    ],
    explanation: '七巧板由 2 个大三角形、2 个小三角形、1 个中三角形、1 个正方形和 1 个平行四边形组成！就像消防站有不同型号的水枪一样，每种图形都有自己的作用！',
  },

  // 第 3 题：圈画可拼出的图案（商场场景）
  {
    type: 'circle' as QuestionType.CIRCLE,
    question: '圈出七巧板可以拼出的图案！',
    instruction: '点击圈出可以用七巧板拼出的图案',
    image: getAssetPath('/assets/shapes/tangram-examples.svg'),
    answerAreas: [
      { id: 'fish', x: 80, y: 100, radius: 40, label: '小鱼' },
      { id: 'boat', x: 160, y: 100, radius: 40, label: '小船' },
      { id: 'house', x: 240, y: 100, radius: 40, label: '房子' },
    ],
    tolerance: 10,
    explanation: '你找对了！七巧板可以拼出小鱼、小船和房子！',
    hint: '七巧板都是直边的图形',
  },

  // 第 4 题：正方形和平行四边形数量（工厂场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '七巧板中正方形和平行四边形一共有几个？',
    options: [
      { id: 'a', text: '1 个' },
      { id: 'b', text: '2 个' },
      { id: 'c', text: '3 个' },
      { id: 'd', text: '4 个' },
    ],
    correctAnswer: 'b',
    explanation: '七巧板中有 1 个正方形和 1 个平行四边形，一共 2 个！就像消防车有 2 个水箱一样！',
    hint: '正方形和平行四边形在七巧板中各只有 1 个',
  },

  // 第 5 题：拼指定图案（烟花广场场景）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '用七巧板拼出一条小鱼！',
    instruction: '将图形拖到正确的位置拼出小鱼',
    items: [
      { id: 'head', name: '鱼头（大三角形）', shape: 'triangle-big', rotation: -90 },
      { id: 'body', name: '鱼身（正方形）', shape: 'square' },
      { id: 'fin', name: '鱼鳍（小三角形）', shape: 'triangle-small' },
      { id: 'tail', name: '鱼尾（小三角形）', shape: 'triangle-small', rotation: -90 },
    ],
    // 使用绝对定位布局
    useAbsoluteLayout: true,
    layoutSize: { width: 600, height: 280 },
    targets: [
      // 鱼头在左边（大三角形，朝左/向右的尖）
      { id: 'head-pos', name: '鱼头', accepts: ['head'], position: { x: 30, y: 80 }, size: { width: 130, height: 130 } },
      // 鱼身在中间（正方形）
      { id: 'body-pos', name: '鱼身', accepts: ['body'], position: { x: 180, y: 90 }, size: { width: 110, height: 110 } },
      // 鱼鳍在上方（小三角形）
      { id: 'fin-pos', name: '鱼鳍', accepts: ['fin'], position: { x: 180, y: 10 }, size: { width: 80, height: 80 } },
      // 鱼尾在右边（小三角形）
      { id: 'tail-pos', name: '鱼尾', accepts: ['tail'], position: { x: 310, y: 100 }, size: { width: 100, height: 100 } },
    ],
    explanation: '小鱼拼好了！鱼头是大三角形（朝左），鱼身是正方形，鱼鳍和鱼尾是小三角形！闪电灭火锤组装完成！',
    hint: '鱼头朝左，鱼尾也朝左',
  },

  // 第 6 题：七巧板组成填空（消防站场景）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '七巧板由{{___}}个三角形、{{___}}个正方形和{{___}}个平行四边形组成',
    answer: ['5', '1', '1'],
    explanation: '七巧板由 5 个三角形、1 个正方形和 1 个平行四边形组成！就像消防车配备 5 个消防栓、1 个水箱和 1 个灭火器一样！',
    hint: '想想七巧板一共有几块',
  },

  // 第 7 题：拼七巧板图案（居民楼场景）
  {
    type: 'shape_compose' as QuestionType.SHAPE_COMPOSE,
    question: '用所有的七巧板拼出一个大正方形！',
    instruction: '把7块七巧板全部拖到画布中，拼成一个大正方形（可以旋转图形）',
    items: [
      { id: 't1', name: '大三角形', shape: 'triangle-big', rotation: 0 },
      { id: 't2', name: '大三角形', shape: 'triangle-big', rotation: 0 },
      { id: 't3', name: '中三角形', shape: 'triangle-medium', rotation: 0 },
      { id: 't4', name: '小三角形', shape: 'triangle-small', rotation: 0 },
      { id: 't5', name: '小三角形', shape: 'triangle-small', rotation: 0 },
      { id: 's1', name: '正方形', shape: 'square', rotation: 0 },
      { id: 'p1', name: '平行四边形', shape: 'parallelogram', rotation: 0 },
    ],
    canvasSize: { width: 450, height: 450 },
    allItemsRequired: true,
    explanation: '七巧板可以拼成一个大正方形！这就是七巧板的奇妙之处！闪电灭火锤组装完成，烈火修罗准备灭火！',
  },
];

/**
 * 关卡 1-3 高难度题目：雷霆消防炮
 * 主题：七巧板思维延伸与创造
 */
export const level1_3HardQuestions: Question[] = [
  // 第 1 题：七巧板分割（消防站场景）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '一个大三角形可以分成{{___}}个小三角形',
    answer: ['2', '4'],
    explanation: '一个大三角形可以分成 2 个或 4 个小三角形！就像把消防水管分成多个分支一样！',
    hint: '想想怎么把三角形对折',
  },

  // 第 2 题：面积比较（居民楼场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '七巧板中哪个图形的面积最大？',
    options: [
      { id: 'a', text: '大三角形' },
      { id: 'b', text: '正方形' },
      { id: 'c', text: '平行四边形' },
      { id: 'd', text: '小三角形' },
    ],
    correctAnswer: 'a',
    explanation: '七巧板中大三角形的面积最大！就像消防车最大的水箱储存最多的灭火用水一样！',
    hint: '看看哪个图形占的地方最大',
  },

  // 第 3 题：图形组合计算（商场场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '用两个小三角形和一个正方形可以拼成几种不同的图形？',
    options: [
      { id: 'a', text: '1 种' },
      { id: 'b', text: '2 种' },
      { id: 'c', text: '3 种以上' },
      { id: 'd', text: '不能拼成图形' },
    ],
    correctAnswer: 'c',
    explanation: '用两个小三角形和一个正方形可以拼成很多种不同的图形！可以拼成长方形、大三角形、梯形、房子等等！就像消防车的水管可以组合成不同的灭火路线一样！',
    hint: '试试不同的拼法',
  },

  // 第 4 题：图形数量问题（工厂场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '七巧板中哪种图形的数量最多？',
    options: [
      { id: 'a', text: '三角形' },
      { id: 'b', text: '正方形' },
      { id: 'c', text: '平行四边形' },
      { id: 'd', text: '圆形' },
    ],
    correctAnswer: 'a',
    explanation: '七巧板中三角形最多，有 5 个！就像消防站里消防栓最多一样，三角形是七巧板的主力图形！',
    hint: '数一数每种图形有几个',
  },

  // 第 5 题：创意拼图 - 房子（烟花广场场景）
  {
    type: 'shape_compose' as QuestionType.SHAPE_COMPOSE,
    question: '用七巧板拼出一个房子！',
    instruction: '把图形拖到画布中，拼出房子的样子（可以旋转图形）',
    items: [
      { id: 'roof', name: '屋顶（大三角形）', shape: 'triangle-big', rotation: 0 },
      { id: 'body', name: '房体（正方形）', shape: 'square', rotation: 0 },
      { id: 'door', name: '门（小三角形）', shape: 'triangle-small', rotation: 0 },
      { id: 'chimney', name: '烟囱（平行四边形）', shape: 'parallelogram', rotation: 0 },
    ],
    canvasSize: { width: 450, height: 400 },
    allItemsRequired: true,
    explanation: '房子拼好了！大三角形做屋顶，正方形做房体，小三角形做门，平行四边形做烟囱！雷霆消防炮组装完成！',
  },

  // 第 6 题：七巧板拼小船（消防站场景）
  {
    type: 'shape_compose' as QuestionType.SHAPE_COMPOSE,
    question: '用七巧板拼出一艘小船！',
    instruction: '把图形拖到画布中，拼出小船的样子（可以旋转图形）',
    items: [
      { id: 'sail1', name: '大三角帆', shape: 'triangle-big', rotation: 0 },
      { id: 'sail2', name: '小三角帆', shape: 'triangle-small', rotation: 0 },
      { id: 'hull', name: '船身', shape: 'parallelogram', rotation: 0 },
      { id: 'cabin', name: '船舱', shape: 'square', rotation: 0 },
    ],
    canvasSize: { width: 450, height: 350 },
    allItemsRequired: true,
    explanation: '小船拼好了！大三角形做主帆，小三角形做副帆，平行四边形做船身，正方形做船舱！烈火修罗克服了对火的恐惧！',
  },

  // 第 7 题：开放创意拼图（烟花广场场景）
  {
    type: 'shape_compose' as QuestionType.SHAPE_COMPOSE,
    question: '自由设计一个七巧板图案！',
    instruction: '用七巧板的图形自由创作，可以拼动物、船、房子等任何你想到的图案',
    items: [
      { id: 't1', name: '大三角形', shape: 'triangle-big', rotation: 0 },
      { id: 't2', name: '大三角形', shape: 'triangle-big', rotation: 0 },
      { id: 't3', name: '中三角形', shape: 'triangle-medium', rotation: 0 },
      { id: 't4', name: '小三角形', shape: 'triangle-small', rotation: 0 },
      { id: 't5', name: '小三角形', shape: 'triangle-small', rotation: 0 },
      { id: 's1', name: '正方形', shape: 'square', rotation: 0 },
      { id: 'p1', name: '平行四边形', shape: 'parallelogram', rotation: 0 },
    ],
    canvasSize: { width: 450, height: 450 },
    allItemsRequired: true,
    explanation: '你设计了独特的七巧板图案！烈火修罗已经完全克服恐惧，成为勇敢的消防英雄！雷霆消防炮组装完成，出发！',
  },
];

/**
 * 按难度分组的题目
 */
export const level1_3QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level1_3EasyQuestions,
  [DifficultyLevel.MEDIUM]: level1_3MediumQuestions,
  [DifficultyLevel.HARD]: level1_3HardQuestions,
};
