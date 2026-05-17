import { getAssetPath } from '@/config/paths.config';
import type { Question, QuestionType, WeaponPart } from '@/types';
import { DifficultyLevel } from '@/types';

/**
 * 第四关（2-1 暗影特工 - 十几减 9）暗影主题武器零件配置
 */

/**
 * 新手模式武器零件：炫影潜行刃
 */
export const level2_1EasyWeaponParts: WeaponPart[] = [
  { id: 'shadow-easy-core', name: '暗影核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'shadow-easy-blade', name: '潜行刀刃', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'shadow-easy-handle', name: '隐形手柄', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'shadow-easy-guard', name: '暗影护手', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'shadow-easy-complete', name: '炫影潜行刃完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/easy-xuanlan-shandian-light.png') },
];

/**
 * 挑战模式武器零件：暗影突击枪
 */
export const level2_1MediumWeaponParts: WeaponPart[] = [
  { id: 'shadow-medium-core', name: '突击核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'shadow-medium-scope', name: '暗影瞄准镜', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'shadow-medium-block', name: '隐形能量块', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'shadow-medium-complete', name: '暗影突击枪完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/medium-xuanlan-shandian-bolt.png') },
];

/**
 * 高手模式武器零件：雷霆暗影炮
 */
export const level2_1HardWeaponParts: WeaponPart[] = [
  { id: 'shadow-hard-ring', name: '暗影能量环', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'shadow-hard-prism', name: '暗影聚焦棱', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'shadow-hard-barrel', name: '雷霆炮身', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'shadow-hard-complete', name: '雷霆暗影炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/hard-xuanlan-shandian-thunder.png') },
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
    answer: ['4', '5'], // 第一个空填4，第二个空填5
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
    instruction: '将算式拖到对应的答案框中',
    items: [
      { id: 'eq1', name: '12 - 9', displayText: '12 - 9' },
      { id: 'eq2', name: '11 - 9', displayText: '11 - 9' },
      { id: 'eq3', name: '10 - 9', displayText: '10 - 9' },
    ],
    targets: [
      // 水平排列在一行，缩小尺寸
      { id: 'ans3', name: '答案 1', accepts: ['eq3'], position: { x: 80, y: 80 }, size: { width: 100, height: 60 } },
      { id: 'ans2', name: '答案 2', accepts: ['eq2'], position: { x: 210, y: 80 }, size: { width: 100, height: 60 } },
      { id: 'ans1', name: '答案 3', accepts: ['eq1'], position: { x: 340, y: 80 }, size: { width: 100, height: 60 } },
    ],
    targetLabels: ['= 1', '= 2', '= 3'], // 显示答案标签
    explanation: '12 - 9 = 3（破十法：10 - 9 = 1，1 + 2 = 3），11 - 9 = 2，10 - 9 = 1！第四道密码门通过！',
    hint: '用破十法计算每个算式，然后把算式拖到正确的答案上',
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
    correctAnswer: 'b', // 18-9=9
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
    answer: ['10', '1', '6'], // 三个空分别是：10, 1, 6
    explanation: '破十法详细步骤：先 10 - 9 = 1，再把 1 + 6 = 7！暗影实验室密码解锁！',
    hint: '破十法先把十几拆成 10 和几',
  },

  // 第 5 题：圈出正确算式（终极密码门）
  {
    type: 'circle' as QuestionType.CIRCLE,
    question: '圈出结果大于 5 的算式！',
    instruction: '点击圈出结果大于 5 的算式',
    // 不使用静态SVG，改用动态绘制
    answerAreas: [
      { id: 'eq1', x: 80, y: 100, radius: 40, label: '18 - 9' },
      { id: 'eq2', x: 200, y: 100, radius: 40, label: '17 - 9' },
      { id: 'eq3', x: 320, y: 100, radius: 40, label: '16 - 9' },
      { id: 'eq4', x: 440, y: 100, radius: 40, label: '15 - 9' },
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
    answer: ['10', '9', '10', '1', '10'],
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
      { id: 'eq1', name: '12 - 9' },
      { id: 'eq2', name: '14 - 9' },
      { id: 'eq3', name: '16 - 9' },
      { id: 'eq4', name: '18 - 9' },
    ],
    targets: [
      { id: 'pos1', name: '最小', accepts: ['eq1'], position: { x: 80, y: 30 }, size: { width: 170, height: 150 } },
      { id: 'pos2', name: '第二', accepts: ['eq2'], position: { x: 330, y: 30 }, size: { width: 170, height: 150 } },
      { id: 'pos3', name: '第三', accepts: ['eq3'], position: { x: 80, y: 210 }, size: { width: 170, height: 150 } },
      { id: 'pos4', name: '最大', accepts: ['eq4'], position: { x: 330, y: 210 }, size: { width: 170, height: 150 } },
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

  // 第 5 题：终极挑战（终极形态觉醒）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '用破十法计算 15 - 9：把 15 分成 10 和 5，把正确的数字拖到对应位置！',
    instruction: '把数字卡片拖到正确的位置',
    items: [
      { id: 'num15', name: '15' },
      { id: 'num10', name: '10' },
      { id: 'num5', name: '5' },
      { id: 'num1', name: '1' },
      { id: 'num6', name: '6' },
    ],
    targets: [
      { id: 'total', name: '被减数', accepts: ['num15'], position: { x: 50, y: 30 }, size: { width: 100, height: 60 } },
      { id: 'ten', name: '10', accepts: ['num10'], position: { x: 50, y: 120 }, size: { width: 100, height: 60 } },
      { id: 'one', name: '个位', accepts: ['num5'], position: { x: 180, y: 120 }, size: { width: 100, height: 60 } },
      { id: 'result1', name: '10-9=', accepts: ['num1'], position: { x: 50, y: 210 }, size: { width: 100, height: 60 } },
      { id: 'result2', name: '1+5=', accepts: ['num6'], position: { x: 180, y: 210 }, size: { width: 100, height: 60 } },
    ],
    connections: [
      { from: 'total', to: 'ten' },
      { from: 'total', to: 'one' },
    ],
    explanation: '破十法：15 分成 10 和 5，10 - 9 = 1，1 + 5 = 6！雷霆暗影炮组装完成，暗影特工终极形态觉醒！',
    hint: '先找到被减数 15，再找 10 和 5',
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