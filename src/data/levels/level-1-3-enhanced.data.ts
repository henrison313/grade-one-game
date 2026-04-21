import type { Question, QuestionType } from '@/types';
import { DifficultyLevel } from '@/types';

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
    explanation: '七巧板里没有圆形！七巧板由三角形、正方形和平行四边形组成，都是直边的图形。',
    hint: '七巧板都是直边的图形',
  },

  // 第 3 题：三角形数量（商场场景）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '七巧板中有几个三角形？',
    options: [
      { id: 'a', text: '3 个' },
      { id: 'b', text: '4 个' },
      { id: 'c', text: '5 个' },
      { id: 'd', text: '6 个' },
    ],
    correctAnswers: ['c'],
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
      { id: 'triangle-big', name: '大三角形', shape: 'triangle' },
      { id: 'triangle-small', name: '小三角形', shape: 'triangle' },
      { id: 'square', name: '正方形', shape: 'square' },
      { id: 'parallelogram', name: '平行四边形', shape: 'rectangle' },
    ],
    targets: [
      { id: 'triangle-big-pos', name: '大三角形', accepts: ['triangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: 'triangle-small-pos', name: '小三角形', accepts: ['triangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: 'square-pos', name: '正方形', accepts: ['square'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: 'parallelogram-pos', name: '平行四边形', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
    ],
    explanation: '太棒了！七巧板由 5 个三角形、1 个正方形和 1 个平行四边形组成！炫光水炮枪组装完成！',
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
      { id: '1', left: '大三角形', right: '2 个' },
      { id: '2', left: '小三角形', right: '2 个' },
      { id: '3', left: '中三角形', right: '1 个' },
      { id: '4', left: '正方形', right: '1 个' },
      { id: '5', left: '平行四边形', right: '1 个' },
    ],
    explanation: '七巧板由 2 个大三角形、2 个小三角形、1 个中三角形、1 个正方形和 1 个平行四边形组成！',
  },

  // 第 3 题：圈画可拼出的图案（商场场景）
  {
    type: 'circle' as QuestionType.CIRCLE,
    question: '圈出七巧板可以拼出的图案！',
    instruction: '点击圈出可以用七巧板拼出的图案',
    image: '/assets/shapes/tangram-examples.svg',
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
      { id: 'body', name: '鱼身', shape: 'triangle' },
      { id: 'tail', name: '鱼尾', shape: 'triangle' },
      { id: 'fin', name: '鱼鳍', shape: 'triangle' },
      { id: 'head', name: '鱼头', shape: 'square' },
    ],
    targets: [
      { id: 'body-pos', name: '鱼身位置', accepts: ['triangle'], position: { x: 100, y: 100 }, size: { width: 60, height: 60 } },
      { id: 'tail-pos', name: '鱼尾位置', accepts: ['triangle'], position: { x: 180, y: 100 }, size: { width: 40, height: 40 } },
      { id: 'fin-pos', name: '鱼鳍位置', accepts: ['triangle'], position: { x: 120, y: 60 }, size: { width: 30, height: 30 } },
      { id: 'head-pos', name: '鱼头位置', accepts: ['square'], position: { x: 50, y: 100 }, size: { width: 40, height: 40 } },
    ],
    explanation: '小鱼拼好了！用三角形做鱼身、鱼尾和鱼鳍，正方形做鱼头！闪电灭火锤组装完成！',
    hint: '想想小鱼是什么形状',
  },

  // 第 6 题：七巧板组成填空（消防站场景）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '七巧板由{{___}}个三角形、{{___}}个正方形和{{___}}个平行四边形组成',
    answer: ['5', '五', '1', '一', '1', '一'],
    explanation: '七巧板由 5 个三角形、1 个正方形和 1 个平行四边形组成！',
    hint: '想想七巧板一共有几块',
  },

  // 第 7 题：拼七巧板图案（居民楼场景）
  {
    type: 'shape_compose' as QuestionType.SHAPE_COMPOSE,
    question: '用七巧板拼出一个正方形！',
    instruction: '把图形拖到画布中，拼出一个完整的正方形',
    items: [
      { id: 't1', name: '大三角形', shape: 'triangle' },
      { id: 't2', name: '大三角形', shape: 'triangle' },
      { id: 't3', name: '中三角形', shape: 'triangle' },
      { id: 't4', name: '小三角形', shape: 'triangle' },
      { id: 't5', name: '小三角形', shape: 'triangle' },
      { id: 's1', name: '正方形', shape: 'square' },
      { id: 'p1', name: '平行四边形', shape: 'rectangle' },
    ],
    canvasSize: { width: 300, height: 200 },
    requiredCounts: { triangle: 5, square: 1, rectangle: 1 },
    explanation: '七巧板本身就是可以拼成一个大正方形的！闪电灭火锤组装完成，烈火修罗准备灭火！',
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
    answer: ['2', '二', '4', '四'],
    explanation: '一个大三角形可以分成 2 个或 4 个小三角形！就像把消防水管分成多个分支一样！',
    hint: '想想怎么把三角形对折',
  },

  // 第 2 题：图形组合几何关系（居民楼场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '用七巧板拼成的正方形，面积是原来小三角形的几倍？',
    options: [
      { id: 'a', text: '2 倍' },
      { id: 'b', text: '4 倍' },
      { id: 'c', text: '8 倍' },
      { id: 'd', text: '16 倍' },
    ],
    correctAnswer: 'd',
    explanation: '七巧板拼成的正方形面积是小三角形的 16 倍！因为七巧板由 16 个相同大小的小三角形组成！',
    hint: '七巧板一共有 7 块，但可以分成 16 个小三角形',
  },

  // 第 3 题：图形组合计算（商场场景）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '用两个小三角形和一个正方形可以拼成{{___}}种不同的图形',
    answer: ['多', '很多', '无数', '3', '4', '5'],
    explanation: '用两个小三角形和一个正方形可以拼成很多种不同的图形！可以拼成长方形、平行四边形、梯形等等！',
    hint: '试试不同的拼法',
  },

  // 第 4 题：七巧板面积问题（工厂场景）
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
    explanation: '七巧板中大三角形的面积最大！两个大三角形各占七巧板总面积的 1/4！',
    hint: '想想哪个图形在七巧板中占的地方最大',
  },

  // 第 5 题：创意拼图 - 房子（烟花广场场景）
  {
    type: 'shape_compose' as QuestionType.SHAPE_COMPOSE,
    question: '用七巧板拼出一个房子！',
    instruction: '把图形拖到画布中，拼出房子的样子（三角形做屋顶，正方形做房体）',
    items: [
      { id: 'roof', name: '屋顶', shape: 'triangle' },
      { id: 'body', name: '房体', shape: 'square' },
      { id: 'chimney', name: '烟囱', shape: 'rectangle' },
      { id: 'window', name: '窗户', shape: 'square' },
      { id: 'door', name: '门', shape: 'rectangle' },
    ],
    canvasSize: { width: 300, height: 200 },
    requiredCounts: { triangle: 1, square: 2, rectangle: 2 },
    explanation: '房子拼好了！三角形做屋顶，正方形做房体和窗户，长方形做烟囱和门！雷霆消防炮组装完成！',
  },

  // 第 6 题：七巧板完整拼图（消防站场景）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '把七巧板的 7 块图形拖到正确位置，拼成完整的七巧板正方形！',
    instruction: '将 7 块图形拖到正确位置',
    items: [
      { id: 't-big1', name: '大三角形 1', shape: 'triangle' },
      { id: 't-big2', name: '大三角形 2', shape: 'triangle' },
      { id: 't-mid', name: '中三角形', shape: 'triangle' },
      { id: 't-small1', name: '小三角形 1', shape: 'triangle' },
      { id: 't-small2', name: '小三角形 2', shape: 'triangle' },
      { id: 'square', name: '正方形', shape: 'square' },
      { id: 'parallelogram', name: '平行四边形', shape: 'rectangle' },
    ],
    targets: [
      { id: 'pos1', name: '位置 1', accepts: ['triangle'], position: { x: 50, y: 50 }, size: { width: 80, height: 80 } },
      { id: 'pos2', name: '位置 2', accepts: ['triangle'], position: { x: 150, y: 50 }, size: { width: 80, height: 80 } },
      { id: 'pos3', name: '位置 3', accepts: ['triangle'], position: { x: 50, y: 150 }, size: { width: 60, height: 60 } },
      { id: 'pos4', name: '位置 4', accepts: ['triangle'], position: { x: 130, y: 150 }, size: { width: 40, height: 40 } },
      { id: 'pos5', name: '位置 5', accepts: ['triangle'], position: { x: 190, y: 150 }, size: { width: 40, height: 40 } },
      { id: 'pos6', name: '位置 6', accepts: ['square'], position: { x: 250, y: 50 }, size: { width: 50, height: 50 } },
      { id: 'pos7', name: '位置 7', accepts: ['rectangle'], position: { x: 250, y: 120 }, size: { width: 50, height: 50 } },
    ],
    explanation: '七巧板拼图完成！烈火修罗克服了对火的恐惧，发现七巧板的魅力！雷霆消防炮组装完成！',
    hint: '七巧板本身就是正方形',
  },

  // 第 7 题：开放创意拼图（烟花广场场景）
  {
    type: 'shape_compose' as QuestionType.SHAPE_COMPOSE,
    question: '自由设计一个七巧板图案！',
    instruction: '用七巧板的图形自由创作，可以拼动物、船、房子等任何你想到的图案',
    items: [
      { id: 't1', name: '大三角形', shape: 'triangle' },
      { id: 't2', name: '大三角形', shape: 'triangle' },
      { id: 't3', name: '中三角形', shape: 'triangle' },
      { id: 't4', name: '小三角形', shape: 'triangle' },
      { id: 't5', name: '小三角形', shape: 'triangle' },
      { id: 's1', name: '正方形', shape: 'square' },
      { id: 'p1', name: '平行四边形', shape: 'rectangle' },
    ],
    canvasSize: { width: 300, height: 200 },
    requiredCounts: { triangle: 5, square: 1, rectangle: 1 },
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
