import type { Question, QuestionType, WeaponPart } from '@/types'
import { DifficultyLevel } from '@/types'

/**
 * 第七关（2-4 裂变骑士 - 解决问题综合应用）裂变主题武器零件配置
 */

/**
 * 新手模式武器零件：炫光裂变盾
 */
export const level2_4EasyWeaponParts: WeaponPart[] = [
  { id: 'fission-easy-core', name: '裂变核心', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'fission-easy-shield', name: '炫光盾面', shapeType: 'rectangle', iconImage: '/assets/weapons/光能护盾.png' },
  { id: 'fission-easy-edge', name: '裂变边缘', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'fission-easy-gem', name: '能量宝石', shapeType: 'circle', iconImage: '/assets/weapons/光能外壳.png' },
  { id: 'fission-easy-complete', name: '炫光裂变盾完成', shapeType: 'composite', iconImage: '/assets/weapons/easy-weapon.png' },
]

/**
 * 挑战模式武器零件：裂变圣剑
 */
export const level2_4MediumWeaponParts: WeaponPart[] = [
  { id: 'fission-medium-blade', name: '裂变剑刃', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'fission-medium-handle', name: '圣剑握柄', shapeType: 'rectangle', iconImage: '/assets/weapons/光能护盾.png' },
  { id: 'fission-medium-guard', name: '剑格护手', shapeType: 'rectangle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'fission-medium-complete', name: '裂变圣剑完成', shapeType: 'composite', iconImage: '/assets/weapons/medium-weapon.png' },
]

/**
 * 高手模式武器零件：雷霆裂变机
 */
export const level2_4HardWeaponParts: WeaponPart[] = [
  { id: 'fission-hard-engine', name: '雷霆引擎', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'fission-hard-body', name: '裂变机体', shapeType: 'rectangle', iconImage: '/assets/weapons/光能外壳.png' },
  { id: 'fission-hard-wing', name: '裂变双翼', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'fission-hard-complete', name: '雷霆裂变机完成', shapeType: 'composite', iconImage: '/assets/weapons/hard-weapon.png' },
]

/**
 * 关卡 2-4 新手模式题目：炫光裂变盾
 * 主题：解决问题综合应用 - 破十法基础
 * 场景：第 10 集 → 初次 encounter → 裂变骑士出现 → 测试实力
 * 故事背景：裂变骑士曾是炫蓝闪电的竞争对手，严厉有野心，马奇纳星球灭亡后漂流到地球，被柯星宇修复
 */
export const level2_4EasyQuestions: Question[] = [
  // 第 1 题：裂变骑士出现（第 10 集）
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
    explanation: '用破十法：把 15 分成 10 和 5，10 - 9 = 1，1 + 5 = 6！裂变骑士出现！第 10 集，这位严厉有野心的炫卡斗士首次登场。他曾是炫蓝闪电的竞争对手，来自已灭亡的马奇纳星球！',
    hint: '把 15 分成 10 和 5，再用 10 减 9',
  },

  // 第 2 题：曾是炫蓝闪电后辈（破十法填空）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '计算 14 - 8：先把 14 分成 10 和 {{___}}，10 - 8 = {{___}}，{{___}} + 4 = 6',
    answer: ['4', '四', '2', '二', '2', '二'],
    explanation: '破十法步骤：14 分成 10 和 4，10 - 8 = 2，2 + 4 = 6！裂变骑士曾崇拜炫蓝闪电，但后来失望了。他与柯星宇建立了深厚友谊——柯星宇是第一个修复他的地球朋友！',
    hint: '14 的个位是几？10 - 8 等于几？',
  },

  // 第 3 题：严厉但公正
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '13 - 7 = ?',
    options: [
      { id: 'a', text: '5' },
      { id: 'b', text: '6' },
      { id: 'c', text: '7' },
      { id: 'd', text: '8' },
    ],
    correctAnswer: 'b',
    explanation: '用破十法：13 分成 10 和 3，10 - 7 = 3，3 + 3 = 6！裂变骑士严厉但公正。他对战斗有着极高的标准，就像数学需要精确计算一样！他的载具形态是福特野马双门跑车！',
    hint: '把 13 分成 10 和 3',
  },

  // 第 4 题：战术分析（拖拽配对）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '把算式拖到正确的答案上！',
    instruction: '将算式拖到对应的答案位置',
    items: [
      { id: 'eq1', name: '16 - 9', shape: 'rectangle' },
      { id: 'eq2', name: '15 - 8', shape: 'rectangle' },
      { id: 'eq3', name: '14 - 7', shape: 'rectangle' },
    ],
    targets: [
      { id: 'ans1', name: '7', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: 'ans2', name: '7', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: 'ans3', name: '7', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
    ],
    explanation: '16 - 9 = 7（破十法：10 - 9 = 1，1 + 6 = 7），15 - 8 = 7（10 - 8 = 2，2 + 5 = 7），14 - 7 = 7！三个算式结果都是 7！裂变骑士进行战术分析，他的武器是裂变圣盾和裂变圣剑！',
    hint: '用破十法计算每个算式',
  },

  // 第 5 题：认可实力
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '12 - 6 = ?',
    options: [
      { id: 'a', text: '5' },
      { id: 'b', text: '6' },
      { id: 'c', text: '7' },
      { id: 'd', text: '8' },
    ],
    correctAnswer: 'b',
    explanation: '用破十法：12 分成 10 和 2，10 - 6 = 4，4 + 2 = 6！炫光裂变盾组装完成！裂变骑士认可小俊的实力："你的计算能力...值得注意。"但他依然保持竞争者的姿态！',
    hint: '把 12 分成 10 和 2',
  },
]

/**
 * 关卡 2-4 挑战模式题目：裂变圣剑
 * 主题：解决问题综合应用 - 破十法进阶
 * 场景：最后挑战 → 打败除喷射加仑外所有人 → 炫蓝闪电介入 → 激烈对决
 */
export const level2_4MediumQuestions: Question[] = [
  // 第 1 题：最后挑战开始
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '16 - 8 = ?',
    options: [
      { id: 'a', text: '7' },
      { id: 'b', text: '8' },
      { id: 'c', text: '9' },
      { id: 'd', text: '10' },
    ],
    correctAnswer: 'b',
    explanation: '用破十法：16 分成 10 和 6，10 - 8 = 2，2 + 6 = 8！最后挑战开始！裂变骑士对整个团队发起挑战，打败了除喷射加仑外的所有人！他的绝招裂变利劈正在酝酿！',
    hint: '把 16 分成 10 和 6',
  },

  // 第 2 题：裂变波浪（多选结果为 7 的算式）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '选出结果等于 7 的算式！',
    options: [
      { id: 'a', text: '15 - 8' },
      { id: 'b', text: '14 - 7' },
      { id: 'c', text: '13 - 6' },
      { id: 'd', text: '12 - 5' },
    ],
    correctAnswers: ['a', 'b', 'c', 'd'],
    explanation: '15 - 8 = 7（破十法：10 - 8 = 2，2 + 5 = 7），14 - 7 = 7，13 - 6 = 7，12 - 5 = 7！所有算式结果都是 7！裂变波浪发动！裂变骑士展现出强大战斗力，除喷射加仑外无人能挡！',
    hint: '用破十法计算每个算式',
  },

  // 第 3 题：挑战航线（连线配对）
  {
    type: 'link' as QuestionType.LINK,
    question: '把算式和正确答案连起来！',
    pairs: [
      { id: '1', left: '17 - 9', right: '8' },
      { id: '2', left: '16 - 8', right: '8' },
      { id: '3', left: '15 - 7', right: '8' },
      { id: '4', left: '14 - 6', right: '8' },
      { id: '5', left: '13 - 5', right: '8' },
    ],
    explanation: '17 - 9 = 8，16 - 8 = 8，15 - 7 = 8，14 - 6 = 8，13 - 5 = 8！挑战航线建立！裂变圣剑发出光芒！炫蓝闪电介入战斗，与裂变骑士展开激烈对决！',
  },

  // 第 4 题：核心战术（两步填空）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '计算 17 - 9：先用 {{___}} - 9 = {{___}}，再把 {{___}} + {{___}} = 8',
    answer: ['10', '十', '1', '一', '1', '一', '7', '七'],
    explanation: '破十法详细步骤：先 10 - 9 = 1，再把 1 + 7 = 8！核心战术解锁！裂变骑士的核心战术——裂变惩戒正在准备！他曾崇拜炫蓝闪电但失望了，后和解但保持若即若离！',
    hint: '破十法先把十几拆成 10 和几',
  },

  // 第 5 题：展现真正实力（圈出结果大于 6 的算式）
  {
    type: 'circle' as QuestionType.CIRCLE,
    question: '圈出结果大于 6 的算式！',
    instruction: '点击圈出结果大于 6 的算式',
    image: '/assets/shapes/subtraction-examples.svg',
    answerAreas: [
      { id: 'eq1', x: 80, y: 100, radius: 40, label: '15 - 7' },
      { id: 'eq2', x: 160, y: 100, radius: 40, label: '14 - 5' },
      { id: 'eq3', x: 240, y: 100, radius: 40, label: '12 - 7' },
      { id: 'eq4', x: 320, y: 100, radius: 40, label: '11 - 4' },
    ],
    tolerance: 10,
    explanation: '15 - 7 = 8 > 6，14 - 5 = 9 > 6，12 - 7 = 5 ≤ 6，11 - 4 = 7 > 6！裂变圣剑组装完成！裂变骑士展现真正实力！炫蓝闪电击败了他，柯星宇遵守协议允许封装！',
    hint: '用破十法计算每个算式，找出大于 6 的',
  },
]

/**
 * 关卡 2-4 高手模式题目：雷霆裂变机
 * 主题：解决问题综合应用 - 破十法高阶
 * 场景：封装完成 → 柯星宇托付 → 成为小俊伙伴 → 对抗维尔图姆人
 */
export const level2_4HardQuestions: Question[] = [
  // 第 1 题：完整破十法（三步填空）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '计算 18 - 9：把 18 分成 {{___}} 和 {{___}}，用 {{___}} - 9 = {{___}}，最后 {{___}} + 9 = {{___}}',
    answer: ['10', '十', '8', '八', '10', '十', '1', '一', '1', '一', '9', '九'],
    explanation: '18 - 9 破十法完整步骤：把 18 分成 10 和 8，用 10 - 9 = 1，最后 1 + 8 = 9！封装完成！裂变骑士成为小俊的伙伴！柯星宇遵守协议，将裂变骑士托付给小俊！',
    hint: '18 分成 10 和 8，按步骤填写',
  },

  // 第 2 题：战术分析（比较结果最大）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的结果最大？',
    options: [
      { id: 'a', text: '16 - 7' },
      { id: 'b', text: '15 - 6' },
      { id: 'c', text: '14 - 5' },
      { id: 'd', text: '13 - 4' },
    ],
    correctAnswer: 'a',
    explanation: '16 - 7 = 9（最大），15 - 6 = 9，14 - 5 = 9，13 - 4 = 9。虽然结果相同，但 16 - 7 用最大的被减数，体现战术分析原则！裂变骑士作为战术大师，深刻理解战斗效率！',
    hint: '用破十法计算每个算式',
  },

  // 第 3 题：柯星宇托付（算式排序拖拽）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '把算式按结果从小到大排列！',
    instruction: '将算式拖到正确顺序位置',
    items: [
      { id: 'eq1', name: '12 - 8', shape: 'rectangle' },
      { id: 'eq2', name: '14 - 6', shape: 'rectangle' },
      { id: 'eq3', name: '16 - 5', shape: 'rectangle' },
      { id: 'eq4', name: '18 - 3', shape: 'rectangle' },
    ],
    targets: [
      { id: 'pos1', name: '最小', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: 'pos2', name: '第二', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: 'pos3', name: '第三', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: 'pos4', name: '最大', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
    ],
    explanation: '12 - 8 = 4（最小），14 - 6 = 8（第二），16 - 5 = 11（第三），18 - 3 = 15（最大）！柯星宇将裂变骑士托付给小俊！他与柯星宇有深厚友谊，柯星宇是第一个修复他的地球朋友！',
    hint: '用破十法计算结果后排序',
  },

  // 第 4 题：成为伙伴（多选破十法步骤）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '破十法计算 15 - 9 的正确步骤有哪些？',
    options: [
      { id: 'a', text: '把 15 分成 10 和 5' },
      { id: 'b', text: '用 10 - 9 = 1' },
      { id: 'c', text: '用 15 - 10 = 5' },
      { id: 'd', text: '把 1 + 5 = 6' },
    ],
    correctAnswers: ['a', 'b', 'd'],
    explanation: '破十法正确步骤：把 15 分成 10 和 5，用 10 - 9 = 1，把 1 + 5 = 6！选项 c 是错误的！裂变骑士成为伙伴！他参与对抗维尔图姆人的战斗，从竞争对手转变为可靠战友！',
    hint: '破十法是先把十几拆成 10 和几',
  },

  // 第 5 题：对抗维尔图姆人（拼出破十法示意图）
  {
    type: 'shape_compose' as QuestionType.SHAPE_COMPOSE,
    question: '用图形拼出破十法计算 15 - 9 的示意图！',
    instruction: '把图形拖到画布中，拼出破十法的分解步骤：一个大方形代表 15，分成一个小方形（10）和一个圆形（5）',
    items: [
      { id: 'big-square', name: '15', shape: 'square' },
      { id: 'ten-square', name: '10', shape: 'square' },
      { id: 'five-circle', name: '5', shape: 'circle' },
      { id: 'result-triangle', name: '1', shape: 'triangle' },
      { id: 'final-circle', name: '6', shape: 'circle' },
    ],
    canvasSize: { width: 300, height: 200 },
    requiredCounts: { square: 2, circle: 2, triangle: 1 },
    explanation: '破十法示意图：15 分成 10 和 5，10 减 9 得 1，1 加 5 得 6！雷霆裂变机组装完成！裂变骑士绝招裂变惩戒觉醒！他参与对抗维尔图姆人的战斗，从严厉的竞争者变成可靠的伙伴！"',
  },
]

/**
 * 按难度分组的题目
 */
export const level2_4QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level2_4EasyQuestions,
  [DifficultyLevel.MEDIUM]: level2_4MediumQuestions,
  [DifficultyLevel.HARD]: level2_4HardQuestions,
}

/**
 * 按难度分组的武器零件
 */
export const level2_4WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level2_4EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level2_4MediumWeaponParts,
  [DifficultyLevel.HARD]: level2_4HardWeaponParts,
}