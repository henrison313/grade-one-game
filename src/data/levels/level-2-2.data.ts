import { getAssetPath } from '@/config/paths.config';
import type { Question, QuestionType, WeaponPart } from '@/types';
import { DifficultyLevel } from '@/types';

/**
 * 第五关（2-2 铁臂爵士 - 十几减 8、7、6）钻探主题武器零件配置
 */

/**
 * 新手模式武器零件：炫光钻探机
 */
export const level2_2EasyWeaponParts: WeaponPart[] = [
  { id: 'drill-easy-core', name: '钻探核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'drill-easy-bit', name: '炫光钻头', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'drill-easy-handle', name: '隧道手柄', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'drill-easy-guard', name: '岩石护甲', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'drill-easy-complete', name: '炫光钻探机完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/easy-weapon.png') },
];

/**
 * 挑战模式武器零件：螺旋钻头炮
 */
export const level2_2MediumWeaponParts: WeaponPart[] = [
  { id: 'drill-medium-core', name: '螺旋核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'drill-medium-bit', name: '深层钻头', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'drill-medium-barrel', name: '钻头炮管', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'drill-medium-complete', name: '螺旋钻头炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/medium-weapon.png') },
];

/**
 * 高手模式武器零件：雷霆钻探机
 */
export const level2_2HardWeaponParts: WeaponPart[] = [
  { id: 'drill-hard-ring', name: '雷霆能量环', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'drill-hard-prism', name: '地心聚焦棱', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'drill-hard-barrel', name: '雷霆钻探管', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'drill-hard-complete', name: '雷霆钻探机完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/hard-weapon.png') },
];

/**
 * 关卡 2-2 新手模式题目：炫光钻探机
 * 主题：十几减 8、7、6 破十法初步
 * 场景：地下隧道入口 → 第二层岩石 → 第三层岩石 → 岩石密码 → 隧道打通
 * 故事背景：铁臂爵士是马奇纳星球的机械生命体，环境守护者，因失明后靠听力在地下挖掘隧道保护小动物
 */
export const level2_2EasyQuestions: Question[] = [
  // 第 1 题：基础破十法计算（地下隧道入口）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '12 - 8 = ?',
    options: [
      { id: 'a', text: '3' },
      { id: 'b', text: '4' },
      { id: 'c', text: '5' },
      { id: 'd', text: '6' },
    ],
    correctAnswer: 'b',
    explanation: '用破十法：把 12 分成 10 和 2，10 - 8 = 2，2 + 2 = 4！隧道入口岩石破开！铁臂爵士虽然是环境守护者，但因失明只能靠听力在地下挖掘，他要保护那些躲藏的小动物！',
    hint: '把 12 分成 10 和 2，再用 10 减 8',
  },

  // 第 2 题：破十法步骤填空（第二层岩石）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '计算 11 - 7：先把 11 分成 10 和 {{___}}，10 - 7 = {{___}}，{{___}} + 1 = 4',
    answer: ['1', '3', '3'],
    explanation: '破十法步骤：11 分成 10 和 1，10 - 7 = 3，3 + 1 = 4！第二层岩石穿透！铁臂爵士虽然双目失明，但他能听到岩石的声音，精准定位！',
    hint: '11 的个位是几？10 - 7 等于几？',
  },

  // 第 3 题：基础计算（第三层岩石）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '13 - 6 = ?',
    options: [
      { id: 'a', text: '6' },
      { id: 'b', text: '7' },
      { id: 'c', text: '8' },
      { id: 'd', text: '9' },
    ],
    correctAnswer: 'b',
    explanation: '用破十法：13 分成 10 和 3，10 - 6 = 4，4 + 3 = 7！第三层岩石粉碎！铁臂爵士是环境守护者，即使失明也要保护地下的生命！',
    hint: '把 13 分成 10 和 3',
  },

  // 第 4 题：拖拽配对（岩石密码）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '把算式拖到正确的答案上！',
    instruction: '将算式拖到对应的答案位置',
    items: [
      { id: 'eq1', name: '15 - 8' },
      { id: 'eq2', name: '13 - 7' },
      { id: 'eq3', name: '11 - 6' },
    ],
    targets: [
      { id: 'ans1', name: '7', accepts: ['eq1'], position: { x: 40, y: 80 }, size: { width: 100, height: 60 } },
      { id: 'ans2', name: '6', accepts: ['eq2'], position: { x: 170, y: 80 }, size: { width: 100, height: 60 } },
      { id: 'ans3', name: '5', accepts: ['eq3'], position: { x: 300, y: 80 }, size: { width: 100, height: 60 } },
    ],
    explanation: '15 - 8 = 7（破十法：10 - 8 = 2，2 + 5 = 7），13 - 7 = 6（10 - 7 = 3，3 + 3 = 6），11 - 6 = 5（10 - 6 = 4，4 + 1 = 5）！岩石密码破解！铁臂爵士在黑暗中为小动物开辟道路！',
    hint: '用破十法计算每个算式',
  },

  // 第 5 题：综合计算（隧道打通）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '14 - 8 = ?',
    options: [
      { id: 'a', text: '5' },
      { id: 'b', text: '6' },
      { id: 'c', text: '7' },
      { id: 'd', text: '8' },
    ],
    correctAnswer: 'b',
    explanation: '用破十法：14 分成 10 和 4，10 - 8 = 2，2 + 4 = 6！隧道成功打通！炫光钻探机组装完成！铁臂爵士最终会被封装保护，但这只是暂时的，他将成为团队的伙伴！',
    hint: '把 14 分成 10 和 4',
  },
];

/**
 * 关卡 2-2 挑战模式题目：螺旋钻头炮
 * 主题：十几减 8、7、6 破十法进阶
 * 场景：深层隧道 → 工程形态觉醒
 */
export const level2_2MediumQuestions: Question[] = [
  // 第 1 题：较大数计算（深层隧道入口）
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
    explanation: '用破十法：15 分成 10 和 5，10 - 7 = 3，3 + 5 = 8！深层隧道入口打开！铁臂爵士的耳朵能听到地下最细微的声音，这是他失明后练就的能力！',
    hint: '把 15 分成 10 和 5',
  },

  // 第 2 题：多选算式结果（隧道深处）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '选出结果等于 6 的算式！',
    options: [
      { id: 'a', text: '14 - 8' },
      { id: 'b', text: '13 - 7' },
      { id: 'c', text: '12 - 6' },
      { id: 'd', text: '11 - 5' },
    ],
    correctAnswers: ['a', 'b', 'c', 'd'],
    explanation: '14 - 8 = 6（破十法：10 - 8 = 2，2 + 4 = 6），13 - 7 = 6，12 - 6 = 6，11 - 5 = 6！所有算式结果都是 6！铁臂爵士在隧道中为小动物创造安全的栖息地！',
    hint: '用破十法计算每个算式',
  },

  // 第 3 题：连线配对（地下密室）
  {
    type: 'link' as QuestionType.LINK,
    question: '把算式和正确答案连起来！',
    pairs: [
      { id: '1', left: '15 - 8', right: '7', group: 'g7' },
      { id: '2', left: '14 - 7', right: '7', group: 'g7' },
      { id: '3', left: '13 - 6', right: '7', group: 'g7' },
      { id: '4', left: '12 - 8', right: '4', group: 'g4' },
      { id: '5', left: '11 - 6', right: '5', group: 'g5' },
    ],
    explanation: '15 - 8 = 7，14 - 7 = 7，13 - 6 = 7，12 - 8 = 4，11 - 6 = 5！地下密室密码破解！铁臂爵士是环境守护者，不是反派，他只是在保护自然！',
  },

  // 第 4 题：两步填空（工程实验室）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '计算 16 - 8：先用 {{___}} - 8 = 2，再把 {{___}} + {{___}} = 8',
    answer: ['10', '2', '6'],
    explanation: '破十法详细步骤：先 10 - 8 = 2，再把 2 + 6 = 8！工程实验室解锁！铁臂爵士的机械身躯虽然受损，但他的意志坚定！',
    hint: '破十法先把十几拆成 10 和几',
  },

  // 第 5 题：圈出正确算式（终极隧道）
  {
    type: 'circle' as QuestionType.CIRCLE,
    question: '圈出结果大于 6 的算式！',
    instruction: '点击圈出结果大于 6 的算式',
    // image: getAssetPath('/assets/shapes/subtraction-examples.svg'), // SVG不存在，使用动态绘制
    answerAreas: [
      { id: 'eq1', x: 80, y: 100, radius: 40, label: '15 - 7' },
      { id: 'eq2', x: 160, y: 100, radius: 40, label: '14 - 6' },
      { id: 'eq3', x: 240, y: 100, radius: 40, label: '13 - 8' },
      { id: 'eq4', x: 320, y: 100, radius: 40, label: '12 - 7' },
    ],
    tolerance: 10,
    explanation: '15 - 7 = 8 > 6，14 - 6 = 8 > 6，13 - 8 = 5 ≤ 6，12 - 7 = 5 ≤ 6！只有前两个算式结果大于 6！螺旋钻头炮组装完成，铁臂爵士工程形态觉醒！',
    hint: '用破十法计算每个算式，找出大于 6 的',
  },
];

/**
 * 关卡 2-2 高手模式题目：雷霆钻探机
 * 主题：十几减 8、7、6 破十法高阶应用
 * 场景：地心裂缝 → 螺旋射线觉醒
 */
export const level2_2HardQuestions: Question[] = [
  // 第 1 题：三步填空（地心裂缝入口）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '计算 17 - 8：把 17 分成 {{___}} 和 {{___}}，用 {{___}} - 8 = {{___}}，最后 {{___}} + 7 = {{___}}',
    answer: ['10', '7', '10', '2', '2', '9'],
    explanation: '17 - 8 破十法完整步骤：把 17 分成 10 和 7，用 10 - 8 = 2，最后 2 + 7 = 9！地心裂缝入口通过！铁臂爵士听到了地心的呼唤！',
    hint: '17 分成 10 和 7，按步骤填写',
  },

  // 第 2 题：比较结果（地心通道）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的结果最小？',
    options: [
      { id: 'a', text: '15 - 8' },
      { id: 'b', text: '14 - 7' },
      { id: 'c', text: '13 - 6' },
      { id: 'd', text: '12 - 8' },
    ],
    correctAnswer: 'd',
    explanation: '15 - 8 = 7，14 - 7 = 7，13 - 6 = 7，12 - 8 = 4。最小的被减数减去较大的减数，结果最小！地心通道解锁！铁臂爵士的听力能分辨最细微的振动！',
    hint: '用破十法计算每个算式，找出最小的',
  },

  // 第 3 题：算式排序拖拽（地心迷宫）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '把算式按结果从小到大排列！',
    instruction: '将算式拖到正确顺序位置',
    items: [
      { id: 'eq1', name: '11 - 7' },
      { id: 'eq2', name: '13 - 8' },
      { id: 'eq3', name: '15 - 6' },
      { id: 'eq4', name: '17 - 7' },
    ],
    targets: [
      { id: 'pos1', name: '最小', accepts: ['eq1'], position: { x: 80, y: 30 }, size: { width: 170, height: 150 } },
      { id: 'pos2', name: '第二', accepts: ['eq2'], position: { x: 330, y: 30 }, size: { width: 170, height: 150 } },
      { id: 'pos3', name: '第三', accepts: ['eq3'], position: { x: 80, y: 210 }, size: { width: 170, height: 150 } },
      { id: 'pos4', name: '最大', accepts: ['eq4'], position: { x: 330, y: 210 }, size: { width: 170, height: 150 } },
    ],
    explanation: '11 - 7 = 4（最小），13 - 8 = 5（第二），15 - 6 = 9（第三），17 - 7 = 10（最大）！地心迷宫通过！铁臂爵士在黑暗中守护着地下的每一处生命！',
    hint: '用破十法计算结果后排序',
  },

  // 第 4 题：多选破十法步骤（地心核心）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '破十法计算 16 - 7 的正确步骤有哪些？',
    options: [
      { id: 'a', text: '把 16 分成 10 和 6' },
      { id: 'b', text: '用 10 - 7 = 3' },
      { id: 'c', text: '用 16 - 10 = 6' },
      { id: 'd', text: '把 3 + 6 = 9' },
    ],
    correctAnswers: ['a', 'b', 'd'],
    explanation: '破十法正确步骤：把 16 分成 10 和 6，用 10 - 7 = 3，把 3 + 6 = 9！选项 c 是错误的，不是破十法的步骤！地心核心密码破解！铁臂爵士的信念坚定不移！',
    hint: '破十法是先把十几拆成 10 和几',
  },

  // 第 5 题：终极挑战（螺旋射线觉醒）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '用破十法计算 15 - 7：把 15 分成 10 和 5，把正确的数字拖到对应位置！',
    instruction: '把数字卡片拖到正确的位置',
    items: [
      { id: 'num15', name: '15' },
      { id: 'num10', name: '10' },
      { id: 'num5', name: '5' },
      { id: 'num3', name: '3' },
      { id: 'num8', name: '8' },
    ],
    targets: [
      { id: 'total', name: '被减数', accepts: ['num15'], position: { x: 50, y: 30 }, size: { width: 100, height: 60 } },
      { id: 'ten', name: '10', accepts: ['num10'], position: { x: 50, y: 120 }, size: { width: 100, height: 60 } },
      { id: 'one', name: '个位', accepts: ['num5'], position: { x: 180, y: 120 }, size: { width: 100, height: 60 } },
      { id: 'result1', name: '10-7=', accepts: ['num3'], position: { x: 50, y: 210 }, size: { width: 100, height: 60 } },
      { id: 'result2', name: '3+5=', accepts: ['num8'], position: { x: 180, y: 210 }, size: { width: 100, height: 60 } },
    ],
    connections: [
      { from: 'total', to: 'ten' },
      { from: 'total', to: 'one' },
    ],
    explanation: '破十法：15 分成 10 和 5，10 - 7 = 3，3 + 5 = 8！雷霆钻探机组装完成！铁臂爵士螺旋射线觉醒！他虽然失明，但将成为团队最可靠的伙伴！',
    hint: '先找到被减数 15，再找 10 和 5',
  },
];

/**
 * 按难度分组的题目
 */
export const level2_2QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level2_2EasyQuestions,
  [DifficultyLevel.MEDIUM]: level2_2MediumQuestions,
  [DifficultyLevel.HARD]: level2_2HardQuestions,
};

/**
 * 按难度分组的武器零件
 */
export const level2_2WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level2_2EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level2_2MediumWeaponParts,
  [DifficultyLevel.HARD]: level2_2HardWeaponParts,
};