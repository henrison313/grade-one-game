import { getAssetPath } from '@/config/paths.config';
import type { Question, QuestionType, WeaponPart } from '@/types'
import { DifficultyLevel } from '@/types'

/**
 * 第六关（2-3 喷射加仑 - 十几减 5、4、3、2）喷射主题武器零件配置
 */

/**
 * 新手模式武器零件：炫光喷射弓
 */
export const level2_3EasyWeaponParts: WeaponPart[] = [
  { id: 'jet-easy-core', name: '喷射核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'jet-easy-arrow', name: '炫光箭矢', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'jet-easy-bow', name: '喷射弓架', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'jet-easy-wing', name: '雄鹰羽翼', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'jet-easy-complete', name: '炫光喷射弓完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/easy-weapon.png') },
]

/**
 * 挑战模式武器零件：飞鸟突击炮
 */
export const level2_3MediumWeaponParts: WeaponPart[] = [
  { id: 'jet-medium-core', name: '飞鸟核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'jet-medium-barrel', name: '突击炮管', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'jet-medium-wing', name: '展翅羽翼', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'jet-medium-complete', name: '飞鸟突击炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/medium-weapon.png') },
]

/**
 * 高手模式武器零件：雷霆喷射机
 */
export const level2_3HardWeaponParts: WeaponPart[] = [
  { id: 'jet-hard-ring', name: '雷霆能量环', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'jet-hard-prism', name: '高空聚焦棱', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'jet-hard-barrel', name: '雷霆喷射管', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'jet-hard-complete', name: '雷霆喷射机完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/hard-weapon.png') },
]

/**
 * 关卡 2-3 新手模式题目：炫光喷射弓
 * 主题：十几减 5、4、3、2 破十法初步
 * 场景：博迈岛热带小岛 → 初次 encounter → 5 次战斗 → 开始认可实力
 * 故事背景：喷射加仑是自由精神的孤独猎人，来自马奇纳星球，迫降博迈岛独自生活，最厌恶团队合作
 */
export const level2_3EasyQuestions: Question[] = [
  // 第 1 题：基础破十法计算（博迈岛初次 encounter）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '14 - 6 = ?',
    options: [
      { id: 'a', text: '7' },
      { id: 'b', text: '8' },
      { id: 'c', text: '9' },
      { id: 'd', text: '10' },
    ],
    correctAnswer: 'b',
    explanation: '用破十法：把 14 分成 10 和 4，10 - 6 = 4，4 + 4 = 8！喷射加仑独自在博迈岛生活，他最厌恶团队合作！作为自由精神的孤独猎人，他不需要任何伙伴！',
    hint: '把 14 分成 10 和 4，再用 10 减 6',
  },

  // 第 2 题：破十法步骤填空（喷射加仑开始关注实力）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '计算 13 - 5：先把 13 分成 10 和 {{___}}，10 - 5 = {{___}}，{{___}} + 3 = 8',
    answer: ['3', '5', '5'],
    explanation: '破十法步骤：13 分成 10 和 3，10 - 5 = 5，5 + 3 = 8！喷射加仑开始关注小俊的实力，来自马奇纳星球的他，能看出真正的战斗力！',
    hint: '13 的个位是几？10 - 5 等于几？',
  },

  // 第 3 题：基础计算（喷射加仑有点意思）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '12 - 4 = ?',
    options: [
      { id: 'a', text: '6' },
      { id: 'b', text: '7' },
      { id: 'c', text: '8' },
      { id: 'd', text: '9' },
    ],
    correctAnswer: 'c',
    explanation: '用破十法：12 分成 10 和 2，10 - 4 = 6，6 + 2 = 8！"有点意思..." 喷射加仑开始正视小俊的实力，载具形态安-124 运输机的他，战斗经验丰富！',
    hint: '把 12 分成 10 和 2',
  },

  // 第 4 题：拖拽配对（战术配对）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '把算式拖到正确的答案上！',
    instruction: '将算式拖到对应的答案位置',
    items: [
      { id: 'eq1', name: '15 - 7', group: 'g8' },
      { id: 'eq2', name: '14 - 6', group: 'g8' },
      { id: 'eq3', name: '13 - 5', group: 'g8' },
      { id: 'eq4', name: '12 - 5', group: 'g7' },
      { id: 'eq5', name: '11 - 4', group: 'g7' },
    ],
    targets: [
      { id: 'ans8a', name: '8', accepts: ['eq1', 'eq2', 'eq3'], group: 'g8', position: { x: 40, y: 100 }, size: { width: 80, height: 60 } },
      { id: 'ans8b', name: '8', accepts: ['eq1', 'eq2', 'eq3'], group: 'g8', position: { x: 140, y: 100 }, size: { width: 80, height: 60 } },
      { id: 'ans8c', name: '8', accepts: ['eq1', 'eq2', 'eq3'], group: 'g8', position: { x: 240, y: 100 }, size: { width: 80, height: 60 } },
      { id: 'ans7a', name: '7', accepts: ['eq4', 'eq5'], group: 'g7', position: { x: 340, y: 100 }, size: { width: 80, height: 60 } },
      { id: 'ans7b', name: '7', accepts: ['eq4', 'eq5'], group: 'g7', position: { x: 440, y: 100 }, size: { width: 80, height: 60 } },
    ],
    explanation: '15 - 7 = 8（破十法：10 - 7 = 3，3 + 5 = 8），14 - 6 = 8，13 - 5 = 8，12 - 5 = 7，11 - 4 = 7！三个算式结果是 8，两个算式结果是 7！喷射加仑开始战术分析，他手持喷射神弓，准备更激烈的战斗！',
    hint: '用破十法计算每个算式，注意区分结果',
  },

  // 第 5 题：综合计算（开始认可实力）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '11 - 3 = ?',
    options: [
      { id: 'a', text: '6' },
      { id: 'b', text: '7' },
      { id: 'c', text: '8' },
      { id: 'd', text: '9' },
    ],
    correctAnswer: 'c',
    explanation: '用破十法：11 分成 10 和 1，10 - 3 = 7，7 + 1 = 8！炫光喷射弓组装完成！喷射加仑开始认可小俊的实力，但依然保持孤独猎人的姿态："有实力不代表需要伙伴！"',
    hint: '把 11 分成 10 和 1',
  },
]

/**
 * 关卡 2-3 挑战模式题目：飞鸟突击炮
 * 主题：十几减 5、4、3、2 破十法进阶
 * 场景：博迈岛高空 → 第 2 次战斗 → 飞鸟暴击 → 开始理解团队
 */
export const level2_3MediumQuestions: Question[] = [
  // 第 1 题：高空第一战
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '15 - 7 = ?',
    options: [
      { id: 'a', text: '7' },
      { id: 'b', text: '8' },
      { id: 'c', text: '9' },
      { id: 'd', text: '10' },
    ],
    correctAnswer: 'b',
    explanation: '用破十法：15 分成 10 和 5，10 - 7 = 3，3 + 5 = 8！高空第一战打响！喷射加仑在安-124 运输机形态下高空作战，他的绝招飞鸟暴击正在酝酿！',
    hint: '把 15 分成 10 和 5',
  },

  // 第 2 题：多选结果为 8 的算式（飞鸟暴击）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '选出结果等于 8 的算式！',
    options: [
      { id: 'a', text: '14 - 6' },
      { id: 'b', text: '13 - 5' },
      { id: 'c', text: '12 - 4' },
      { id: 'd', text: '11 - 3' },
    ],
    correctAnswers: ['a', 'b', 'c', 'd'],
    explanation: '14 - 6 = 8（破十法：10 - 6 = 4，4 + 4 = 8），13 - 5 = 8，12 - 4 = 8，11 - 3 = 8！所有算式结果都是 8！飞鸟暴击发动！喷射加仑在高空中展现真正的战斗力！',
    hint: '用破十法计算每个算式',
  },

  // 第 3 题：连线配对（空中航线）
  {
    type: 'link' as QuestionType.LINK,
    question: '把算式和正确答案连起来！',
    pairs: [
      { id: '1', left: '14 - 5', right: '9', group: 'g9' },
      { id: '2', left: '13 - 4', right: '9', group: 'g9' },
      { id: '3', left: '12 - 3', right: '9', group: 'g9' },
      { id: '4', left: '11 - 2', right: '9', group: 'g9' },
      { id: '5', left: '15 - 8', right: '7', group: 'g7' },
    ],
    explanation: '14 - 5 = 9，13 - 4 = 9，12 - 3 = 9，11 - 2 = 9，15 - 8 = 7！空中航线建立！喷射加仑在高空建立战斗航线，开始注意小俊团队的配合能力！',
  },

  // 第 4 题：两步填空（核心战术）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '计算 16 - 8：先用 {{___}} - 8 = 2，再把 {{___}} + {{___}} = 8',
    answer: ['10', '2', '6'],
    explanation: '破十法详细步骤：先 10 - 8 = 2，再把 2 + 6 = 8！核心战术解锁！喷射加仑开始思考："一个人战斗虽然自由，但面对真正的对手，也许..."',
    hint: '破十法先把十几拆成 10 和几',
  },

  // 第 5 题：圈出结果大于 7 的算式（开始理解团队）
  {
    type: 'circle' as QuestionType.CIRCLE,
    question: '圈出结果大于 7 的算式！',
    instruction: '点击圈出结果大于 7 的算式',
    // image: getAssetPath('/assets/shapes/subtraction-examples.svg'), // SVG不存在，使用动态绘制
    answerAreas: [
      { id: 'eq1', x: 80, y: 100, radius: 40, label: '14 - 5' },
      { id: 'eq2', x: 160, y: 100, radius: 40, label: '13 - 4' },
      { id: 'eq3', x: 240, y: 100, radius: 40, label: '12 - 6' },
      { id: 'eq4', x: 320, y: 100, radius: 40, label: '11 - 3' },
    ],
    tolerance: 10,
    explanation: '14 - 5 = 9 > 7，13 - 4 = 9 > 7，12 - 6 = 6 ≤ 7，11 - 3 = 8 > 7！飞鸟突击炮组装完成！喷射加仑开始理解团队的力量："也许...团队也有它的价值..."',
    hint: '用破十法计算每个算式，找出大于 7 的',
  },
]

/**
 * 关卡 2-3 高手模式题目：雷霆喷射机
 * 主题：十几减 5、4、3、2 破十法高阶应用
 * 场景：封装完成 → 成为保护者 → 雄鹰展翅 → 承担保护小俊的职责
 */
export const level2_3HardQuestions: Question[] = [
  // 第 1 题：三步填空（完整破十法）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '计算 17 - 9：把 17 分成 {{___}} 和 {{___}}，用 {{___}} - 9 = {{___}}，最后 {{___}} + 7 = {{___}}',
    answer: ['10', '7', '10', '1', '1', '8'],
    explanation: '17 - 9 破十法完整步骤：把 17 分成 10 和 7，用 10 - 9 = 1，最后 1 + 7 = 8！封装完成，喷射加仑成为保护者！他曾厌恶团队合作，但友情的力量改变了他的想法！',
    hint: '17 分成 10 和 7，按步骤填写',
  },

  // 第 2 题：比较结果最小（战术分析）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的结果最小？',
    options: [
      { id: 'a', text: '14 - 6' },
      { id: 'b', text: '13 - 5' },
      { id: 'c', text: '12 - 4' },
      { id: 'd', text: '11 - 5' },
    ],
    correctAnswer: 'd',
    explanation: '14 - 6 = 8，13 - 5 = 8，12 - 4 = 8，11 - 5 = 6。11 - 5 的结果最小！喷射加仑作为战术分析大师，深刻理解效率的重要性！他开始认识到：团队配合也是一种效率！',
    hint: '用破十法计算每个算式',
  },

  // 第 3 题：算式排序拖拽（团队排序）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '把算式按结果从小到大排列！',
    instruction: '将算式拖到正确顺序位置',
    items: [
      { id: 'eq1', name: '11 - 5' },
      { id: 'eq2', name: '12 - 4' },
      { id: 'eq3', name: '14 - 3' },
      { id: 'eq4', name: '15 - 2' },
    ],
    targets: [
      { id: 'pos1', name: '最小', accepts: ['eq1'], position: { x: 80, y: 30 }, size: { width: 170, height: 150 } },
      { id: 'pos2', name: '第二', accepts: ['eq2'], position: { x: 330, y: 30 }, size: { width: 170, height: 150 } },
      { id: 'pos3', name: '第三', accepts: ['eq3'], position: { x: 80, y: 210 }, size: { width: 170, height: 150 } },
      { id: 'pos4', name: '最大', accepts: ['eq4'], position: { x: 330, y: 210 }, size: { width: 170, height: 150 } },
    ],
    explanation: '11 - 5 = 6（最小），12 - 4 = 8（第二），14 - 3 = 11（第三），15 - 2 = 13（最大）！团队排序完成！喷射加仑开始理解：每个人都有自己的位置，团队中每个成员都有独特价值！',
    hint: '用破十法计算结果后排序',
  },

  // 第 4 题：多选破十法步骤（友情密码）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '破十法计算 14 - 6 的正确步骤有哪些？',
    options: [
      { id: 'a', text: '把 14 分成 10 和 4' },
      { id: 'b', text: '用 10 - 6 = 4' },
      { id: 'c', text: '用 14 - 10 = 4' },
      { id: 'd', text: '把 4 + 4 = 8' },
    ],
    correctAnswers: ['a', 'b', 'd'],
    explanation: '破十法正确步骤：把 14 分成 10 和 4，用 10 - 6 = 4，把 4 + 4 = 8！选项 c 是错误的！友情密码破解！喷射加仑见识到友情的力量后，自愿选择被封装！他不再是孤独的猎人，而是团队的伙伴！',
    hint: '破十法是先把十几拆成 10 和几',
  },

  // 第 5 题：终极挑战（雄鹰展翅）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '用破十法计算 14 - 6：把 14 分成 10 和 4，把正确的数字拖到对应位置！',
    instruction: '把数字卡片拖到正确的位置',
    items: [
      { id: 'num14', name: '14' },
      { id: 'num10', name: '10' },
      { id: 'num4', name: '4' },
      { id: 'num4b', name: '4' },
      { id: 'num8', name: '8' },
    ],
    targets: [
      { id: 'total', name: '被减数', accepts: ['num14'], position: { x: 50, y: 30 }, size: { width: 100, height: 60 } },
      { id: 'ten', name: '10', accepts: ['num10'], position: { x: 50, y: 120 }, size: { width: 100, height: 60 } },
      { id: 'one', name: '个位', accepts: ['num4'], position: { x: 180, y: 120 }, size: { width: 100, height: 60 } },
      { id: 'result1', name: '10-6=', accepts: ['num4b'], position: { x: 50, y: 210 }, size: { width: 100, height: 60 } },
      { id: 'result2', name: '4+4=', accepts: ['num8'], position: { x: 180, y: 210 }, size: { width: 100, height: 60 } },
    ],
    connections: [
      { from: 'total', to: 'ten' },
      { from: 'total', to: 'one' },
    ],
    explanation: '破十法：14 分成 10 和 4，10 - 6 = 4，4 + 4 = 8！雷霆喷射机组装完成！雄鹰展翅！喷射加仑绝招能量之箭觉醒！他从敌人转变为朋友，承担保护小俊的职责！',
    hint: '先找到被减数 14，再找 10 和 4',
  },
]

/**
 * 按难度分组的题目
 */
export const level2_3QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level2_3EasyQuestions,
  [DifficultyLevel.MEDIUM]: level2_3MediumQuestions,
  [DifficultyLevel.HARD]: level2_3HardQuestions,
}

/**
 * 按难度分组的武器零件
 */
export const level2_3WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level2_3EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level2_3MediumWeaponParts,
  [DifficultyLevel.HARD]: level2_3HardWeaponParts,
}