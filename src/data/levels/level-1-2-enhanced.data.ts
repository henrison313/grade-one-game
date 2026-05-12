import type { Question, QuestionType } from '@/types';
import { DifficultyLevel } from '@/types';

/**
 * 关卡 1-2 低难度题目：炫光医疗箱
 * 主题：平面图形的拼图 - 基础拼组认知
 * 场景：摩城医院 → 救护车 → 建筑工地 → 游乐场 → 救援直升机
 */
export const level1_2EasyQuestions: Question[] = [
  // 第 1 题：图形拼组基础（摩城医院场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '用两个相同的三角形可以拼成什么图形？',
    options: [
      { id: 'a', text: '圆形' },
      { id: 'b', text: '正方形' },
      { id: 'c', text: '三角形' },
      { id: 'd', text: '长方形' },
    ],
    correctAnswer: 'b',
    explanation: '两个相同的三角形可以拼成一个正方形！把它们的斜边对在一起就可以了，就像急救卫士包扎伤口时用的方形绷带！',
    hint: '想象一下把两个三角形拼在一起的样子',
  },

  // 第 2 题：圆形识别（救护车场景）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '找出下面所有的圆形物品！',
    options: [
      { id: 'a', text: '皮球 🏀' },
      { id: 'b', text: '积木 📐' },
      { id: 'c', text: '硬币 🪙' },
      { id: 'd', text: '手帕 🧣' },
      { id: 'e', text: '钟表 ⏰' },
      { id: 'f', text: '橡皮 📝' },
    ],
    correctAnswers: ['a', 'c', 'e'],
    explanation: '你找出了所有的圆形！皮球、硬币和钟表都是圆圆的，就像救护车的轮子一样！',
    hint: '找找看哪些东西是圆圆的？',
  },

  // 第 3 题：正方形组合（建筑工地场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '用四个小正方形可以拼成什么？',
    options: [
      { id: 'a', text: '一个大正方形' },
      { id: 'b', text: '一个圆形' },
      { id: 'c', text: '一个三角形' },
      { id: 'd', text: '一个长方形' },
    ],
    correctAnswer: 'a',
    explanation: '四个小正方形可以拼成一个大正方形！把它们 2×2 排列就可以了，就像建筑工地的瓷砖一样整齐！',
    hint: '想象一下积木拼图',
  },

  // 第 4 题：图形特征识别（游乐场场景）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '下面哪些图形有四个角？',
    options: [
      { id: 'a', text: '圆形' },
      { id: 'b', text: '正方形' },
      { id: 'c', text: '三角形' },
      { id: 'd', text: '长方形' },
    ],
    correctAnswers: ['b', 'd'],
    explanation: '正方形和长方形都有四个角！圆形没有角，三角形有三个角。数一数急救箱的盒子，它有四个角哦！',
    hint: '数一数每个图形有几个角',
  },

  // 第 5 题：直升机图形拼组（救援直升机场景）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '把图形拖到直升机上，拼出完整的图案！',
    instruction: '将图形拖到正确的位置',
    items: [
      { id: 'wheel1', name: '轮子', shape: 'circle', group: 'wheel' },
      { id: 'wheel2', name: '轮子', shape: 'circle', group: 'wheel' },
      { id: 'window', name: '窗户', shape: 'square' },
      { id: 'roof', name: '螺旋桨', shape: 'rectangle' },
    ],
    // 使用绝对定位布局
    useAbsoluteLayout: true,
    layoutSize: { width: 700, height: 350 },
    targets: [
      // 螺旋桨在最上方（横条形）
      { id: 'roof-pos', name: '螺旋桨', accepts: ['roof'], position: { x: 150, y: 30 }, size: { width: 400, height: 50 } },
      // 驾驶舱窗户在中间
      { id: 'window-pos', name: '驾驶舱窗户', accepts: ['window'], position: { x: 280, y: 100 }, size: { width: 140, height: 100 } },
      // 轮子在下方两侧 - 直升机形态
      { id: 'wheel1-pos', name: '左侧滑橇', accepts: ['wheel1', 'wheel2'], group: 'wheel', position: { x: 180, y: 250 }, size: { width: 100, height: 80 } },
      { id: 'wheel2-pos', name: '右侧滑橇', accepts: ['wheel1', 'wheel2'], group: 'wheel', position: { x: 420, y: 250 }, size: { width: 100, height: 80 } },
    ],
    explanation: '救援直升机拼好了！螺旋桨在最上方，窗户在中间，滑橇在下方两侧！螺旋桨开始转动，准备执行救援任务！',
    hint: '想一想直升机的结构：螺旋桨在上，窗户在中，滑橇在下',
  },
];

/**
 * 关卡 1-2 中难度题目：闪电手术刀
 * 主题：平面图形的拼图 - 图形特点与组合
 */
export const level1_2MediumQuestions: Question[] = [
  // 第 1 题：圆形特点多选（摩城医院场景）
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
    explanation: '圆形圆圆的，没有角，可以滚动！但是圆形没有直直的边。就像救护车的轮子可以滚动！',
    hint: '想想皮球能做什么？',
  },

  // 第 2 题：图形特点连线（救护车场景）
  {
    type: 'link' as QuestionType.LINK,
    question: '把图形和它的特点连起来！',
    pairs: [
      { id: '1', left: '圆形', right: '没有角' },
      { id: '2', left: '三角形', right: '三个角' },
      { id: '3', left: '正方形', right: '四条边一样长' },
      { id: '4', left: '长方形', right: '两条长两条短' },
    ],
    explanation: '连对了！圆形没有角，三角形有三个角，正方形四条边一样长，长方形两条长两条短！',
  },

  // 第 3 题：圈画可拼成正方形的图形（建筑工地场景）
  // 使用 inlineShapes 动态渲染多个图形，而不是静态SVG
  {
    type: 'circle' as QuestionType.CIRCLE,
    question: '圈出能拼成正方形的图形！',
    instruction: '点击圈出可以拼成正方形的两个三角形',
    // 不使用静态SVG，改用 inlineShapes 动态渲染
    inlineShapes: [
      // 第一行（水平间距110px）
      { id: 't1', type: 'triangle', x: 70, y: 50, size: 50, color: '#FF6B6B', label: '三角形1', rotation: 0 },
      { id: 't2', type: 'triangle', x: 180, y: 50, size: 50, color: '#FF6B6B', label: '三角形2', rotation: 180 },
      { id: 'c1', type: 'circle', x: 290, y: 50, size: 50, color: '#4ECDC4', label: '圆形' },
      { id: 's1', type: 'square', x: 400, y: 50, size: 50, color: '#95E1D3', label: '正方形' },
      // 第二行（垂直间距110px）
      { id: 't3', type: 'triangle', x: 125, y: 160, size: 45, color: '#FFA07A', label: '三角形3', rotation: 90 },
      { id: 'r1', type: 'rectangle', x: 235, y: 160, width: 60, height: 40, color: '#F7DC6F', label: '长方形' },
      { id: 't4', type: 'triangle', x: 345, y: 160, size: 45, color: '#FFA07A', label: '三角形4', rotation: 270 },
      // 第三行（垂直间距110px）
      { id: 'c2', type: 'circle', x: 180, y: 270, size: 45, color: '#4ECDC4', label: '圆形2' },
      { id: 's2', type: 'square', x: 290, y: 270, size: 45, color: '#95E1D3', label: '正方形2' },
    ],
    answerAreas: [
      // 第一行：各种形状（水平间距100px）
      { id: 't1', x: 70, y: 50, radius: 35, label: '三角形1' },
      { id: 't2', x: 180, y: 50, radius: 35, label: '三角形2' },
      { id: 'c1', x: 290, y: 50, radius: 35, label: '圆形' },
      { id: 's1', x: 400, y: 50, radius: 35, label: '正方形' },
      // 第二行：更多形状（垂直间距110px）
      { id: 't3', x: 125, y: 160, radius: 35, label: '三角形3' },
      { id: 'r1', x: 235, y: 160, radius: 35, label: '长方形' },
      { id: 't4', x: 345, y: 160, radius: 35, label: '三角形4' },
      // 第三行：干扰项（垂直间距110px）
      { id: 'c2', x: 180, y: 270, radius: 35, label: '圆形2' },
      { id: 's2', x: 290, y: 270, radius: 35, label: '正方形2' },
    ],
    correctAnswers: ['t1', 't2'], // 正确的两个三角形
    tolerance: 10,
    explanation: '你找到了！两个相同的直角三角形可以拼成一个正方形，就像急救卫士的方形绷带！',
    hint: '找找看哪两个三角形形状相同、大小一样，可以拼在一起成正方形',
  },

  // 第 4 题：图形组合可能性（游乐场场景）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '用两个三角形可以拼成什么图形？',
    options: [
      { id: 'a', text: '圆形' },
      { id: 'b', text: '正方形' },
      { id: 'c', text: '长方形' },
      { id: 'd', text: '大三角形' },
    ],
    correctAnswers: ['b', 'c', 'd'],
    explanation: '两个直角三角形可以拼成正方形或长方形！两个相同的三角形可以拼成一个大三角形！圆形不能用三角形拼成。',
    hint: '想想用积木拼一拼！',
  },

  // 第 5 题：组合图形识别（救援直升机场景）- 救护车拼图
  {
    type: 'drag' as QuestionType.DRAG,
    question: '把图形拖到救护车上，拼出完整的图案！',
    instruction: '将图形拖到正确的位置，拼出一辆救护车',
    items: [
      { id: 'body', name: '车身', shape: 'rectangle' },
      { id: 'wheel1', name: '前轮', shape: 'circle' },
      { id: 'wheel2', name: '后轮', shape: 'circle' },
      { id: 'window', name: '窗户', shape: 'square' },
      { id: 'light', name: '警灯', shape: 'circle' },
    ],
    targets: [
      // 车顶警灯 - 最上方中央（接受任意圆形：警灯、前轮、后轮）
      { id: 'light-pos', name: '警灯', accepts: ['light', 'wheel1', 'wheel2'], position: { x: 320, y: 20 }, size: { width: 60, height: 40 } },
      // 车身 - 中间主体（只能放车身）
      { id: 'body-pos', name: '车身', accepts: ['body'], position: { x: 180, y: 70 }, size: { width: 340, height: 100 } },
      // 窗户 - 车身上方（只能放窗户）
      { id: 'window-pos', name: '窗户', accepts: ['window'], position: { x: 220, y: 90 }, size: { width: 80, height: 60 } },
      // 前轮 - 左下方（接受任意圆形）
      { id: 'wheel1-pos', name: '前轮', accepts: ['wheel1', 'wheel2', 'light'], position: { x: 220, y: 180 }, size: { width: 70, height: 70 } },
      // 后轮 - 右下方（接受任意圆形）
      { id: 'wheel2-pos', name: '后轮', accepts: ['wheel2', 'wheel1', 'light'], position: { x: 410, y: 180 }, size: { width: 70, height: 70 } },
    ],
    explanation: '救护车拼好了！长方形做车身，圆形做轮子和警灯，正方形做窗户！警灯在最上面，窗户在车身侧面，两个轮子分别在前后！闪电手术刀组装完成！',
    hint: '救护车的样子：上面是警灯，中间是车身和窗户，下面是两个轮子',
  },
];

/**
 * 关卡 1-2 高难度题目：雷霆急救炮
 * 主题：平面图形的拼图 - 思维延伸与创造
 */
export const level1_2HardQuestions: Question[] = [
  // 第 1 题：正方形分割（摩城医院场景）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '把一个正方形分成 4 个相同的图形，可以分成{{___}}个相同的小正方形',
    answer: ['4'],
    explanation: '正方形可以分成 4 个相同的小正方形！就像把急救箱分成 4 个小格子一样！',
    hint: '想想怎么把正方形对折两次',
  },

  // 第 2 题：图形剪角问题（救护车场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '一个正方形剪掉一个角，还剩几个角？',
    options: [
      { id: 'a', text: '3 个' },
      { id: 'b', text: '4 个' },
      { id: 'c', text: '5 个' },
      { id: 'd', text: '6 个' },
    ],
    correctAnswer: 'c',
    explanation: '正方形有 4 个角，剪掉一个角后，原来的那个角变成了两个角，所以一共 5 个角！',
    hint: '在纸上画一个正方形试试剪掉一个角',
  },

  // 第 3 题：图形对折问题（建筑工地场景）- 改为选择题
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '长方形对折一次后变成什么形状？',
    options: [
      { id: 'a', text: '圆形' },
      { id: 'b', text: '正方形' },
      { id: 'c', text: '长方形' },
      { id: 'd', text: '三角形' },
    ],
    correctAnswer: 'c',
    explanation: '长方形对折一次后还是长方形，只是变小了！就像把绷带对折一样！',
    hint: '拿一张长方形的纸折一折试试',
  },

  // 第 4 题：拼图块数问题（游乐场场景）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '用相同的小正方形拼成一个大长方形，至少需要几块？',
    options: [
      { id: 'a', text: '1 块' },
      { id: 'b', text: '2 块' },
      { id: 'c', text: '3 块' },
      { id: 'd', text: '4 块' },
    ],
    correctAnswer: 'b',
    explanation: '至少需要 2 块小正方形！把它们并排排列就可以拼成一个长方形了！',
    hint: '想想两块积木怎么拼',
  },

  // 第 5 题：医疗主题图形组合设计（救援直升机场景）
  {
    type: 'shape_compose' as QuestionType.SHAPE_COMPOSE,
    question: '设计一个救护车图案！',
    instruction: '把图形拖到画布中，拼出救护车的样子',
    items: [
      { id: 'body', name: '车身', shape: 'rectangle' },
      { id: 'wheel1', name: '轮子', shape: 'circle' },
      { id: 'wheel2', name: '轮子', shape: 'circle' },
      { id: 'window', name: '窗户', shape: 'square' },
      { id: 'light', name: '警灯', shape: 'circle' },
    ],
    canvasSize: { width: 300, height: 200 },
    requiredCounts: { rectangle: 1, circle: 3, square: 1 },
    explanation: '你成功设计了救护车图案！长方形做车身，圆形做轮子和警灯，正方形做窗户！雷霆急救炮组装完成！急救卫士变身战地医生，出发救援！',
  },
];

/**
 * 按难度分组的题目
 */
export const level1_2QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level1_2EasyQuestions,
  [DifficultyLevel.MEDIUM]: level1_2MediumQuestions,
  [DifficultyLevel.HARD]: level1_2HardQuestions,
};
