import type { Question, QuestionType, WeaponPart } from '@/types';
import { DifficultyLevel } from '@/types';

/**
 * 第四关（2-1 暗影特工 - 十几减 9）暗影主题武器零件配置
 */

/**
 * 新手模式武器零件：炫影潜行刃
 */
export const level2_1EasyWeaponParts: WeaponPart[] = [
  { id: 'shadow-easy-core', name: '暗影核心', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'shadow-easy-blade', name: '潜行刀刃', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'shadow-easy-handle', name: '隐形手柄', shapeType: 'square', iconImage: '/assets/weapons/光能护盾.png' },
  { id: 'shadow-easy-guard', name: '暗影护手', shapeType: 'rectangle', iconImage: '/assets/weapons/光能外壳.png' },
  { id: 'shadow-easy-complete', name: '炫影潜行刃完成', shapeType: 'composite', iconImage: '/assets/weapons/easy-weapon.png' },
];

/**
 * 挑战模式武器零件：暗影突击枪
 */
export const level2_1MediumWeaponParts: WeaponPart[] = [
  { id: 'shadow-medium-core', name: '突击核心', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'shadow-medium-scope', name: '暗影瞄准镜', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'shadow-medium-block', name: '隐形能量块', shapeType: 'square', iconImage: '/assets/weapons/光能护盾.png' },
  { id: 'shadow-medium-complete', name: '暗影突击枪完成', shapeType: 'composite', iconImage: '/assets/weapons/medium-weapon.png' },
];

/**
 * 高手模式武器零件：雷霆暗影炮
 */
export const level2_1HardWeaponParts: WeaponPart[] = [
  { id: 'shadow-hard-ring', name: '暗影能量环', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'shadow-hard-prism', name: '暗影聚焦棱', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'shadow-hard-barrel', name: '雷霆炮身', shapeType: 'rectangle', iconImage: '/assets/weapons/光能外壳.png' },
  { id: 'shadow-hard-complete', name: '雷霆暗影炮完成', shapeType: 'composite', iconImage: '/assets/weapons/hard-weapon.png' },
];

/**
 * 关卡 2-1 新手模式题目：炫影潜行刃
 * 主题：十几减 9 破十法初步
 * 场景：城市直升机基地 → 第 1 道密码门 → 第 2 道密码门 → 第 3 道密码门 → 第 4 道密码门 → 第 5 道密码门
 */
export const level2_1EasyQuestions: Question[] = [
  // 第 1 题：基础破十法计算（第 1 道密码门）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '15 - 9 = ?',
    options: [
      { id: 'a', text: '5' },
      { id: 'b', text: '6' },
      { id: 'c', text: '7' },
      { id: 'd', text: '8' },
    ],
    correctAnswer: 'b',
    explanation: '用破十法：把 15 分成 10 和 5，10 - 9 = 1，1 + 5 = 6！就像打开第一道密码门一样，先拆开后组合！',
    hint: '把 15 分成 10 和 5，再用 10 减 9',
  },

  // 第 2 题：破十法步骤填空（第 2 道密码门）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '计算 14 - 9：先把 14 分成 10 和 {{___}}，10 - 9 = 1，1 + 4 = {{___}}',
    answer: ['4', '四', '5', '五'],
    explanation: '破十法步骤：14 分成 10 和 4，10 - 9 = 1，1 + 4 = 5！第二道密码门打开了！',
    hint: '14 的个位是几？最后的结果是几？',
  },

  // 第 3 题：基础计算（第 3 道密码门）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '13 - 9 = ?',
    options: [
      { id: 'a', text: '3' },
      { id: 'b', text: '4' },
      { id: 'c', text: '5' },
      { id: 'd', text: '6' },
    ],
    correctAnswer: 'b',
    explanation: '用破十法：13 分成 10 和 3，10 - 9 = 1，1 + 3 = 4！第三道密码门解锁成功！',
    hint: '把 13 分成 10 和 3',
  },

  // 第 4 题：拖拽配对（第 4 道密码门）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '把算式拖到正确的答案上！',
    instruction: '将算式拖到对应的答案位置',
    items: [
      { id: 'eq1', name: '12 - 9', shape: 'rectangle' },
      { id: 'eq2', name: '11 - 9', shape: 'rectangle' },
      { id: 'eq3', name: '10 - 9', shape: 'rectangle' },
    ],
    targets: [
      { id: 'ans1', name: '3', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: 'ans2', name: '2', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: 'ans3', name: '1', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
    ],
    explanation: '12 - 9 = 3（破十法：10 - 9 = 1，1 + 2 = 3），11 - 9 = 2，10 - 9 = 1！第四道密码门通过！',
    hint: '用破十法计算每个算式',
  },

  // 第 5 题：综合计算（第 5 道密码门 - 终极）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '17 - 9 = ?',
    options: [
      { id: 'a', text: '6' },
      { id: 'b', text: '7' },
      { id: 'c', text: '8' },
      { id: 'd', text: '9' },
    ],
    correctAnswer: 'c',
    explanation: '用破十法：17 分成 10 和 7，10 - 9 = 1，1 + 7 = 8！第五道密码门打开，炫影潜行刃组装完成！暗影特工准备出击！',
    hint: '把 17 分成 10 和 7',
  },
];

/**
 * 关卡 2-1 挑战模式题目：暗影突击枪
 * 主题：十几减 9 破十法进阶
 * 场景：地下秘密基地 → 暗影形态觉醒
 */
export const level2_1MediumQuestions: Question[] = [
  // 第 1 题：较大数计算（地下基地入口）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '18 - 9 = ?',
    options: [
      { id: 'a', text: '8' },
      { id: 'b', text: '9' },
      { id: 'c', text: '10' },
      { id: 'd', text: '11' },
    ],
    correctAnswer: 'a',
    explanation: '用破十法：18 分成 10 和 8，10 - 9 = 1，1 + 8 = 9！秘密基地入口密码破解！',
    hint: '把 18 分成 10 和 8',
  },

  // 第 2 题：多选算式结果（基地大厅）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '选出结果等于 7 的算式！',
    options: [
      { id: 'a', text: '16 - 9' },
      { id: 'b', text: '15 - 8' },
      { id: 'c', text: '14 - 7' },
      { id: 'd', text: '17 - 10' },
    ],
    correctAnswers: ['a', 'b', 'c', 'd'],
    explanation: '16 - 9 = 7（破十法：10 - 9 = 1，1 + 6 = 7），15 - 8 = 7，14 - 7 = 7，17 - 10 = 7！所有算式结果都是 7！暗影特工的眼力真厉害！',
    hint: '用破十法计算每个算式',
  },

  // 第 3 题：连线配对（基地密室）
  {
    type: 'link' as QuestionType.LINK,
    question: '把算式和正确答案连起来！',
    pairs: [
      { id: '1', left: '16 - 9', right: '7' },
      { id: '2', left: '15 - 9', right: '6' },
      { id: '3', left: '14 - 9', right: '5' },
      { id: '4', left: '13 - 9', right: '4' },
      { id: '5', left: '12 - 9', right: '3' },
    ],
    explanation: '16 - 9 = 7，15 - 9 = 6，14 - 9 = 5，13 - 9 = 4，12 - 9 = 3！密室密码破解成功！',
  },

  // 第 4 题：两步填空（暗影实验室）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '计算 16 - 9：先用 {{___}} - 9 = 1，再把 {{___}} + {{___}} = 7',
    answer: ['10', '十', '1', '一', '6', '六'],
    explanation: '破十法详细步骤：先 10 - 9 = 1，再把 1 + 6 = 7！暗影实验室密码解锁！',
    hint: '破十法先把十几拆成 10 和几',
  },

  // 第 5 题：圈出正确算式（终极密码门）
  {
    type: 'circle' as QuestionType.CIRCLE,
    question: '圈出结果大于 5 的算式！',
    instruction: '点击圈出结果大于 5 的算式',
    image: '/assets/shapes/subtraction-examples.svg',
    answerAreas: [
      { id: 'eq1', x: 80, y: 100, radius: 40, label: '18 - 9' },
      { id: 'eq2', x: 160, y: 100, radius: 40, label: '17 - 9' },
      { id: 'eq3', x: 240, y: 100, radius: 40, label: '16 - 9' },
      { id: 'eq4', x: 320, y: 100, radius: 40, label: '15 - 9' },
    ],
    tolerance: 10,
    explanation: '18 - 9 = 9 > 5，17 - 9 = 8 > 5，16 - 9 = 7 > 5，15 - 9 = 6 > 5！这些算式结果都大于 5！暗影突击枪组装完成，暗影特工觉醒！',
    hint: '用破十法计算每个算式，找出大于 5 的',
  },
];

/**
 * 关卡 2-1 高手模式题目：雷霆暗影炮
 * 主题：十几减 9 破十法高阶应用
 * 场景：时空裂缝 → 暗影特工终极形态
 */
export const level2_1HardQuestions: Question[] = [
  // 第 1 题：三步填空（时空裂缝入口）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '计算 19 - 9：把 19 分成 {{___}} 和 {{___}}，用 {{___}} - 9 = 1，最后 {{___}} + 9 = {{___}}',
    answer: ['10', '十', '9', '九', '10', '十', '1', '一', '10', '十'],
    explanation: '19 - 9 破十法完整步骤：把 19 分成 10 和 9，用 10 - 9 = 1，最后 1 + 9 = 10！时空裂缝入口通过！',
    hint: '19 分成 10 和 9，按步骤填写',
  },

  // 第 2 题：比较结果（时空通道）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的结果最大？',
    options: [
      { id: 'a', text: '18 - 9' },
      { id: 'b', text: '17 - 9' },
      { id: 'c', text: '16 - 9' },
      { id: 'd', text: '15 - 9' },
    ],
    correctAnswer: 'a',
    explanation: '18 - 9 = 9，17 - 9 = 8，16 - 9 = 7，15 - 9 = 6。最大的被减数减去相同的减数，结果最大！时空通道解锁！',
    hint: '被减数越大，结果越大',
  },

  // 第 3 题：算式排序拖拽（时空迷宫）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '把算式按结果从小到大排列！',
    instruction: '将算式拖到正确顺序位置',
    items: [
      { id: 'eq1', name: '12 - 9', shape: 'rectangle' },
      { id: 'eq2', name: '14 - 9', shape: 'rectangle' },
      { id: 'eq3', name: '16 - 9', shape: 'rectangle' },
      { id: 'eq4', name: '18 - 9', shape: 'rectangle' },
    ],
    targets: [
      { id: 'pos1', name: '最小', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: 'pos2', name: '第二', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: 'pos3', name: '第三', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: 'pos4', name: '最大', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
    ],
    explanation: '12 - 9 = 3（最小），14 - 9 = 5（第二），16 - 9 = 7（第三），18 - 9 = 9（最大）！时空迷宫通过！',
    hint: '用破十法计算结果后排序',
  },

  // 第 4 题：多选破十法步骤（时空核心）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '破十法计算 17 - 9 的正确步骤有哪些？',
    options: [
      { id: 'a', text: '把 17 分成 10 和 7' },
      { id: 'b', text: '用 10 - 9 = 1' },
      { id: 'c', text: '用 17 - 10 = 7' },
      { id: 'd', text: '把 1 + 7 = 8' },
    ],
    correctAnswers: ['a', 'b', 'd'],
    explanation: '破十法正确步骤：把 17 分成 10 和 7，用 10 - 9 = 1，把 1 + 7 = 8！选项 c 是错误的，不是破十法的步骤！时空核心密码破解！',
    hint: '破十法是先把十几拆成 10 和几',
  },

  // 第 5 题：拼出破十法示意图（终极形态觉醒）
  {
    type: 'shape_compose' as QuestionType.SHAPE_COMPOSE,
    question: '用图形拼出破十法计算 15 - 9 的示意图！',
    instruction: '把图形拖到画布中，拼出破十法的分解步骤：一个大方形代表 15，分成一个小方形（10）和一个圆形（5）',
    items: [
      { id: 'big-square', name: '15', shape: 'square' },
      { id: 'ten-square', name: '10', shape: 'square' },
      { id: 'five-circle', name: '5', shape: 'circle' },
      { id: 'one-triangle', name: '1', shape: 'triangle' },
      { id: 'result-circle', name: '6', shape: 'circle' },
    ],
    canvasSize: { width: 300, height: 200 },
    requiredCounts: { square: 2, circle: 2, triangle: 1 },
    explanation: '破十法示意图：15 分成 10 和 5，10 减 9 得 1，1 加 5 得 6！雷霆暗影炮组装完成，暗影特工终极形态觉醒！',
  },
];

/**
 * 按难度分组的题目
 */
export const level2_1QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level2_1EasyQuestions,
  [DifficultyLevel.MEDIUM]: level2_1MediumQuestions,
  [DifficultyLevel.HARD]: level2_1HardQuestions,
};

/**
 * 按难度分组的武器零件
 */
export const level2_1WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level2_1EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level2_1MediumWeaponParts,
  [DifficultyLevel.HARD]: level2_1HardWeaponParts,
};