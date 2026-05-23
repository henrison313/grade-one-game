import { getAssetPath } from '@/config/paths.config';
import type { Question, QuestionType } from '@/types';
import { DifficultyLevel } from '@/types';

/**
 * 关卡 1-1 低难度题目：炫蓝光能枪
 * 题型：简单单选题为主
 */
export const level1_1EasyQuestions: Question[] = [
  // 第1题：识别圆形（森林场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个图形是圆形？',
    options: [
      { id: 'a', text: '', shape: 'circle', shapeColor: 'blue' },
      { id: 'b', text: '', shape: 'triangle', shapeColor: 'red' },
      { id: 'c', text: '', shape: 'square', shapeColor: 'green' },
      { id: 'd', text: '', shape: 'rectangle', shapeColor: 'yellow' },
    ],
    correctAnswer: 'a',
    explanation: '圆形是圆圆的，像一个球或者轮子，没有尖尖的角！',
    hint: '想想哪些东西是圆圆的？比如皮球、时钟...',
  },

  // 第2题：识别三角形（海边场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '找出图中的三角形物体！',
    questionImage: getAssetPath('/assets/shapes/triangle1.webp'),
    options: [
      { id: 'a', text: '太阳伞 ☀️（伞面）' },
      { id: 'b', text: '皮球 🏀' },
      { id: 'c', text: '书本 📚' },
      { id: 'd', text: '窗户 🪟' },
    ],
    correctAnswer: 'a',
    explanation: '太阳伞的伞面是三角形！三角形有三条边和三个角。',
    hint: '三角形像一个小帐篷，有尖尖的角！',
  },

  // 第3题：数正方形（火山场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '数一数，图中有几个正方形？\n\n□ □ □',
    options: [
      { id: 'a', text: '1个' },
      { id: 'b', text: '2个' },
      { id: 'c', text: '3个' },
      { id: 'd', text: '4个' },
    ],
    correctAnswer: 'c',
    explanation: '我们来数一数：第1个是正方形，第2个是正方形，第3个是正方形。一共3个正方形！',
    hint: '一个一个数，不要漏掉哦！',
  },

  // 第4题：区分长方形和正方形（沙漠场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个图形是长方形，不是正方形？',
    options: [
      { id: 'a', text: '', shape: 'square', shapeColor: 'blue' },
      { id: 'b', text: '', shape: 'rectangle', shapeColor: 'red' },
      { id: 'c', text: '', shape: 'circle', shapeColor: 'green' },
      { id: 'd', text: '', shape: 'square', shapeColor: 'yellow' },
    ],
    correctAnswer: 'b',
    explanation: '长方形有两条长边和两条短边，正方形的四条边都一样长！',
    hint: '长方形像一本书，长长的！',
  },

  // 第5题：图形配对（太空场景）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '把图形拖到正确的名称上！',
    instruction: '将图形拖到对应的位置',
    items: [
      { id: 'circle', name: '⬤', shape: 'circle' },
      { id: 'triangle', name: '▲', shape: 'triangle' },
      { id: 'square', name: '◼', shape: 'square' },
      { id: 'rectangle', name: '▬', shape: 'rectangle' },
    ],
    targets: [
      { id: '圆形', name: '圆形', accepts: ['circle'], position: { x: 50, y: 20 }, size: { width: 120, height: 100 } },
      { id: '三角形', name: '三角形', accepts: ['triangle'], position: { x: 200, y: 20 }, size: { width: 120, height: 100 } },
      { id: '正方形', name: '正方形', accepts: ['square'], position: { x: 50, y: 140 }, size: { width: 120, height: 100 } },
      { id: '长方形', name: '长方形', accepts: ['rectangle'], position: { x: 200, y: 140 }, size: { width: 120, height: 100 } },
    ],
    explanation: '圆形圆圆的，三角形有三个角，正方形四条边一样长，长方形两条长两条短！',
    hint: '仔细看看每个图形的样子！',
  },
];

/**
 * 关卡 1-1 中难度题目：炫蓝闪电枪
 * 题型：多选、连线为主
 */
export const level1_1MediumQuestions: Question[] = [
  // 第1题：圆形特点（森林场景）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '圆形有什么特点？',
    options: [
      { id: 'a', text: '没有尖尖的角' },
      { id: 'b', text: '圆圆的' },
      { id: 'c', text: '有直直的边' },
      { id: 'd', text: '可以滚动' },
    ],
    correctAnswers: ['a', 'b', 'd'],
    explanation: '圆形圆圆的，没有角，可以滚动！但是圆形没有直直的边。',
    hint: '想想皮球能做什么？',
  },

  // 第2题：拼三角形（海边场景）
  {
    type: 'link' as QuestionType.LINK,
    question: '把图形和它的特点连起来！',
    pairs: [
      { id: '1', left: '圆形', right: '没有角' },
      { id: '2', left: '三角形', right: '三个角' },
      { id: '3', left: '正方形', right: '四条边一样长' },
      { id: '4', left: '长方形', right: '两条长两条短' },
    ],
    explanation: '圆形没有角，三角形有三个角，正方形四条边一样长，长方形两条长两条短！',
  },

  // 第3题：区分正方形和长方形（火山场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '正方形和长方形有什么不同？',
    options: [
      { id: 'a', text: '正方形有4条边，长方形有3条边' },
      { id: 'b', text: '正方形四条边一样长，长方形两条长两条短' },
      { id: 'c', text: '正方形有角，长方形没有角' },
      { id: 'd', text: '它们是一样的' },
    ],
    correctAnswer: 'b',
    explanation: '正方形的四条边都一样长，长方形有两条长边和两条短边！',
    hint: '想想书本和积木的区别！',
  },

  // 第4题：三角形拼图（沙漠场景）- 改为多选题
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '用两个三角形可以拼成什么图形？',
    options: [
      { id: 'a', text: '圆形' },
      { id: 'b', text: '正方形' },
      { id: 'c', text: '长方形' },
      { id: 'd', text: '大三角形' },
    ],
    correctAnswers: ['b', 'c', 'd'],  // 正方形、长方形、大三角形都可以
    explanation: '两个直角三角形可以拼成正方形或长方形！两个相同的三角形可以拼成一个大三角形！圆形不能用三角形拼成。',
    hint: '想想用积木拼一拼！',
  },

  // 第5题：圈画圆形和三角形（太空场景）- 组合图形
  {
    type: 'circle' as QuestionType.CIRCLE,
    question: '在图中圈出所有的圆形和三角形！',
    instruction: '点击圈出圆形和三角形',
    image: getAssetPath('/assets/shapes/mixed-shapes.svg'),
    answerAreas: [
      { id: 'c1', x: 50, y: 80, radius: 30, label: '冰淇淋球' },
      { id: 'c2', x: 135, y: 120, radius: 10, label: '窗户1' },
      { id: 'c3', x: 165, y: 120, radius: 10, label: '窗户2' },
      { id: 'c4', x: 215, y: 145, radius: 15, label: '轮子1' },
      { id: 'c5', x: 265, y: 145, radius: 15, label: '轮子2' },
      { id: 'c6', x: 205, y: 115, radius: 8, label: '车灯' },
      { id: 't1', x: 50, y: 135, radius: 25, label: '蛋筒' },
      { id: 't2', x: 150, y: 80, radius: 25, label: '屋顶' },
      { id: 't3', x: 285, y: 120, radius: 12, label: '车尾灯' },
    ],
    tolerance: 10,
    explanation: '你找到了所有的圆形和三角形！圆形包括冰淇淋球、窗户、轮子和车灯；三角形包括蛋筒、屋顶和车尾灯！太棒了！',
    hint: '仔细看看每个图形里藏着什么形状！',
  },
];

/**
 * 关卡 1-1 高难度题目：炫蓝雷霆炮
 * 题型：思维延伸题为主
 */
export const level1_1HardQuestions: Question[] = [
  // 第1题：分割圆形（森林场景）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '把一个大圆形分成4个相同的图形，可以怎么分？答：分成{{___}}个相同的扇形',
    answer: ['4'],
    explanation: '圆形可以分成4个相同的扇形，像披萨饼一样切成4块！',
    hint: '想想披萨是怎么切的？',
  },

  // 第2题：剪角问题（海边场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '一个三角形剪掉一个角，还剩几个角？',
    options: [
      { id: 'a', text: '2个' },
      { id: 'b', text: '3个' },
      { id: 'c', text: '4个' },
      { id: 'd', text: '5个' },
    ],
    correctAnswer: 'c',
    explanation: '三角形有3个角，剪掉一个角后，原来的那个角变成了两个角，所以一共4个角！',
    hint: '在纸上画一个三角形试试剪掉一个角！',
  },

  // 第3题：对折问题（火山场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '正方形对折两次后是什么图形？',
    options: [
      { id: 'a', text: '三角形' },
      { id: 'b', text: '小正方形' },
      { id: 'c', text: '长方形' },
      { id: 'd', text: '圆形' },
    ],
    correctAnswer: 'b',
    explanation: '正方形对折一次变成长方形，再对折一次变成小正方形！',
    hint: '拿一张正方形的纸折一折试试！',
  },

  // 第4题：七巧板问题（沙漠场景）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '用七巧板拼出一个长方形，至少需要{{___}}块',
    answer: ['2'],
    explanation: '用七巧板拼长方形，最少需要2块三角形，也可以用更多块！',
    hint: '七巧板里有几种三角形？',
  },

  // 第5题：图形组合设计（太空场景）
  {
    type: 'shape_compose' as QuestionType.SHAPE_COMPOSE,
    question: '设计一个图形组合！',
    instruction: '把图形拖到画布中，自由排列组合成有趣的图案',
    items: [
      { id: 'c1', name: '圆形', shape: 'circle' },
      { id: 'c2', name: '圆形', shape: 'circle' },
      { id: 't1', name: '三角形', shape: 'triangle' },
      { id: 't2', name: '三角形', shape: 'triangle' },
      { id: 't3', name: '三角形', shape: 'triangle' },
      { id: 's1', name: '正方形', shape: 'square' },
    ],
    canvasSize: { width: 300, height: 200 },
    requiredCounts: { circle: 2, triangle: 3, square: 1 },
    explanation: '你成功设计了包含2个圆形、3个三角形和1个正方形的图形组合！炫蓝雷霆炮组装完成！',
  },
];

/**
 * 按难度分组的题目
 */
export const level1_1QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level1_1EasyQuestions,
  [DifficultyLevel.MEDIUM]: level1_1MediumQuestions,
  [DifficultyLevel.HARD]: level1_1HardQuestions,
};