import { getAssetPath } from '@/config/paths.config';
import type { Question, QuestionType, WeaponPart } from '@/types'
import { DifficultyLevel } from '@/types'

/**
 * 第七关（2-4 裂变骑士 - 解决问题综合应用）裂变主题武器零件配置
 */

/**
 * 新手模式武器零件：炫光裂变盾
 */
export const level2_4EasyWeaponParts: WeaponPart[] = [
  { id: 'fission-easy-core', name: '裂变核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/weapon-part-1.webp') },
  { id: 'fission-easy-shield', name: '炫光盾面', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/weapon-part-2.webp') },
  { id: 'fission-easy-edge', name: '裂变边缘', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/weapon-part-3.webp') },
  { id: 'fission-easy-gem', name: '能量宝石', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/weapon-part-4.webp') },
  { id: 'fission-easy-complete', name: '炫光裂变盾完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/easy-xuanlan-shandian-light.webp') },
]

/**
 * 挑战模式武器零件：裂变圣剑
 */
export const level2_4MediumWeaponParts: WeaponPart[] = [
  { id: 'fission-medium-blade', name: '裂变剑刃', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/weapon-part-3.webp') },
  { id: 'fission-medium-handle', name: '圣剑握柄', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/weapon-part-2.webp') },
  { id: 'fission-medium-guard', name: '剑格护手', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/weapon-part-1.webp') },
  { id: 'fission-medium-complete', name: '裂变圣剑完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/medium-xuanlan-shandian-bolt.webp') },
]

/**
 * 高手模式武器零件：雷霆裂变机
 */
export const level2_4HardWeaponParts: WeaponPart[] = [
  { id: 'fission-hard-engine', name: '雷霆引擎', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/weapon-part-1.webp') },
  { id: 'fission-hard-body', name: '裂变机体', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/weapon-part-4.webp') },
  { id: 'fission-hard-wing', name: '裂变双翼', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/weapon-part-3.webp') },
  { id: 'fission-hard-complete', name: '雷霆裂变机完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/hard-xuanlan-shandian-thunder.webp') },
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

  // 第 2 题：基础计算
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '14 - 8 = ?',
    options: [
      { id: 'a', text: '4' },
      { id: 'b', text: '5' },
      { id: 'c', text: '6' },
      { id: 'd', text: '7' },
    ],
    correctAnswer: 'c',
    explanation: '用破十法：14 分成 10 和 4，10 - 8 = 2，2 + 4 = 6！裂变骑士曾崇拜炫蓝闪电，但后来失望了。他与柯星宇建立了深厚友谊——柯星宇是第一个修复他的地球朋友！',
    hint: '把 14 分成 10 和 4，再用 10 减 8',
  },

  // 第 3 题：填空理解步骤
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '计算 13 - 7：先把 13 分成 10 和 {{___}}，10 - 7 = {{___}}，结果 = {{___}}',
    answer: ['3', '3', '6'],
    explanation: '破十法步骤：13 分成 10 和 3，10 - 7 = 3，3 + 3 = 6！裂变骑士严厉但公正。他对战斗有着极高的标准，就像数学需要精确计算一样！',
    hint: '13 的个位是几？10 - 7 等于几？',
  },

  // 第 4 题：简单拖拽配对（2种结果）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '把算式拖到正确的答案上！',
    instruction: '将算式拖到对应的答案位置',
    items: [
      { id: 'eq1', name: '12 - 5', group: 'g7' },
      { id: 'eq2', name: '11 - 4', group: 'g7' },
      { id: 'eq3', name: '15 - 9', group: 'g6' },
    ],
    targets: [
      { id: 'ans7a', name: '7', accepts: ['eq1', 'eq2'], group: 'g7', position: { x: 100, y: 100 }, size: { width: 100, height: 60 } },
      { id: 'ans7b', name: '7', accepts: ['eq1', 'eq2'], group: 'g7', position: { x: 250, y: 100 }, size: { width: 100, height: 60 } },
      { id: 'ans6', name: '6', accepts: ['eq3'], group: 'g6', position: { x: 400, y: 100 }, size: { width: 100, height: 60 } },
    ],
    explanation: '12 - 5 = 7，11 - 4 = 7，15 - 9 = 6！两个算式结果是 7，一个算式结果是 6！裂变骑士进行战术分析，他的武器是裂变圣盾和裂变圣剑！',
    hint: '用破十法计算每个算式',
  },

  // 第 5 题：综合检验
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
  // 第 1 题：两步填空（独立填写）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '计算 17 - 9：先用 {{___}} - 9 = {{___}}，再把 {{___}} + {{___}} = 8',
    answer: ['10', '1', '1', '7'],
    explanation: '破十法详细步骤：先 10 - 9 = 1，再把 1 + 7 = 8！最后挑战开始！裂变骑士对整个团队发起挑战，打败了除喷射加仑外的所有人！他的绝招裂变利劈正在酝酿！',
    hint: '破十法先把十几拆成 10 和几',
  },

  // 第 2 题：多选题（含干扰项）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '选出结果等于 8 的算式！',
    options: [
      { id: 'a', text: '17 - 9' },
      { id: 'b', text: '16 - 8' },
      { id: 'c', text: '15 - 6' },
      { id: 'd', text: '14 - 6' },
    ],
    correctAnswers: ['a', 'b', 'd'],
    explanation: '17 - 9 = 8，16 - 8 = 8，15 - 6 = 9（不是8），14 - 6 = 8！三个算式结果是 8！裂变波浪发动！裂变骑士展现出强大战斗力，除喷射加仑外无人能挡！',
    hint: '用破十法计算每个算式，注意 15 - 6 的结果',
  },

  // 第 3 题：连线题（3种结果）
  {
    type: 'link' as QuestionType.LINK,
    question: '把算式和正确答案连起来！',
    pairs: [
      { id: '1', left: '16 - 9', right: '7', group: 'g7' },
      { id: '2', left: '15 - 8', right: '7', group: 'g7' },
      { id: '3', left: '14 - 6', right: '8', group: 'g8' },
      { id: '4', left: '13 - 5', right: '8', group: 'g8' },
      { id: '5', left: '12 - 6', right: '6', group: 'g6' },
    ],
    explanation: '16 - 9 = 7，15 - 8 = 7，14 - 6 = 8，13 - 5 = 8，12 - 6 = 6！两种结果是 7，两种是 8，一种是 6！挑战航线建立！裂变圣剑发出光芒！炫蓝闪电介入战斗，与裂变骑士展开激烈对决！',
  },

  // 第 4 题：拖拽配对（有干扰项）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '把算式拖到正确的答案上！',
    instruction: '将算式拖到对应的答案位置',
    items: [
      { id: 'eq1', name: '15 - 7', group: 'g8' },
      { id: 'eq2', name: '14 - 5', group: 'g9' },
      { id: 'eq3', name: '13 - 6', group: 'g7' },
      { id: 'eq4', name: '12 - 4', group: 'g8' },
    ],
    targets: [
      { id: 'ans8a', name: '8', accepts: ['eq1', 'eq4'], group: 'g8', position: { x: 80, y: 100 }, size: { width: 100, height: 60 } },
      { id: 'ans8b', name: '8', accepts: ['eq1', 'eq4'], group: 'g8', position: { x: 220, y: 100 }, size: { width: 100, height: 60 } },
      { id: 'ans9', name: '9', accepts: ['eq2'], group: 'g9', position: { x: 360, y: 100 }, size: { width: 100, height: 60 } },
      { id: 'ans7', name: '7', accepts: ['eq3'], group: 'g7', position: { x: 500, y: 100 }, size: { width: 100, height: 60 } },
    ],
    explanation: '15 - 7 = 8，14 - 5 = 9，13 - 6 = 7，12 - 4 = 8！两个算式结果是 8，一个是 9，一个是 7！核心战术解锁！裂变骑士的核心战术——裂变惩戒正在准备！',
    hint: '用破十法计算每个算式，区分不同结果',
  },

  // 第 5 题：圈画题（比较判断）
  {
    type: 'circle' as QuestionType.CIRCLE,
    question: '圈出结果大于 7 的算式！',
    instruction: '点击圈出结果大于 7 的算式',
    answerAreas: [
      { id: 'eq1', x: 80, y: 100, radius: 40, label: '16 - 7' },
      { id: 'eq2', x: 160, y: 100, radius: 40, label: '15 - 8' },
      { id: 'eq3', x: 240, y: 100, radius: 40, label: '14 - 5' },
      { id: 'eq4', x: 320, y: 100, radius: 40, label: '13 - 6' },
    ],
    tolerance: 10,
    explanation: '16 - 7 = 9 > 7，15 - 8 = 7（不大于7），14 - 5 = 9 > 7，13 - 6 = 7（不大于7）！只有 16 - 7 和 14 - 5 的结果大于 7！裂变圣剑组装完成！裂变骑士展现真正实力！炫蓝闪电击败了他，柯星宇遵守协议允许封装！',
    hint: '用破十法计算每个算式，找出结果大于 7 的',
  },
]

/**
 * 关卡 2-4 高手模式题目：雷霆裂变机
 * 主题：解决问题综合应用 - 破十法高阶
 * 场景：封装完成 → 柯星宇托付 → 成为小俊伙伴 → 对抗维尔图姆人
 */
export const level2_4HardQuestions: Question[] = [
  // 第 1 题：完整三步填空
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '计算 18 - 9：把 18 分成 {{___}} 和 {{___}}，用 {{___}} - 9 = {{___}}，最后 {{___}} + {{___}} = 9',
    answer: ['10', '8', '10', '1', '1', '8'],
    explanation: '18 - 9 破十法完整步骤：把 18 分成 10 和 8，用 10 - 9 = 1，最后 1 + 8 = 9！封装完成！裂变骑士成为小俊的伙伴！柯星宇遵守协议，将裂变骑士托付给小俊！',
    hint: '18 分成 10 和 8，按步骤填写',
  },

  // 第 2 题：比较结果最大
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的结果最大？',
    options: [
      { id: 'a', text: '17 - 8 = 9' },
      { id: 'b', text: '16 - 7 = 9' },
      { id: 'c', text: '15 - 6 = 9' },
      { id: 'd', text: '18 - 5 = 13' },
    ],
    correctAnswer: 'd',
    explanation: '17 - 8 = 9，16 - 7 = 9，15 - 6 = 9，18 - 5 = 13！18 - 5 的结果 13 最大！裂变骑士作为战术大师，深刻理解战斗效率！',
    hint: '用破十法计算每个算式，比较结果',
  },

  // 第 3 题：算式排序拖拽
  {
    type: 'drag' as QuestionType.DRAG,
    question: '把算式按结果从小到大排列！',
    instruction: '将算式拖到正确顺序位置',
    items: [
      { id: 'eq1', name: '13 - 8' },
      { id: 'eq2', name: '15 - 7' },
      { id: 'eq3', name: '17 - 6' },
      { id: 'eq4', name: '18 - 3' },
    ],
    targets: [
      { id: 'pos1', name: '最小', accepts: ['eq1'], position: { x: 80, y: 30 }, size: { width: 170, height: 150 } },
      { id: 'pos2', name: '第二', accepts: ['eq2'], position: { x: 330, y: 30 }, size: { width: 170, height: 150 } },
      { id: 'pos3', name: '第三', accepts: ['eq3'], position: { x: 80, y: 210 }, size: { width: 170, height: 150 } },
      { id: 'pos4', name: '最大', accepts: ['eq4'], position: { x: 330, y: 210 }, size: { width: 170, height: 150 } },
    ],
    explanation: '13 - 8 = 5（最小），15 - 7 = 8（第二），17 - 6 = 11（第三），18 - 3 = 15（最大）！柯星宇将裂变骑士托付给小俊！他与柯星宇有深厚友谊，柯星宇是第一个修复他的地球朋友！',
    hint: '用破十法计算结果后排序',
  },

  // 第 4 题：多选破十法步骤（含错误选项）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '破十法计算 16 - 8 的正确步骤有哪些？',
    options: [
      { id: 'a', text: '把 16 分成 10 和 6' },
      { id: 'b', text: '用 10 - 8 = 2' },
      { id: 'c', text: '用 16 - 10 = 6' },
      { id: 'd', text: '把 2 + 6 = 8' },
    ],
    correctAnswers: ['a', 'b', 'd'],
    explanation: '破十法正确步骤：把 16 分成 10 和 6，用 10 - 8 = 2，把 2 + 6 = 8！选项 c 是错误的！裂变骑士成为伙伴！他参与对抗维尔图姆人的战斗，从竞争对手转变为可靠战友！',
    hint: '破十法是先把十几拆成 10 和几，选项c不是破十法步骤',
  },

  // 第 5 题：破十法数字卡片拖拽（有连线图示）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '用破十法计算 17 - 9：把 17 分成 10 和 7，把正确的数字拖到对应位置！',
    instruction: '把数字卡片拖到正确的位置',
    items: [
      { id: 'num17', name: '17' },
      { id: 'num10', name: '10' },
      { id: 'num7', name: '7' },
      { id: 'num1', name: '1' },
      { id: 'num8', name: '8' },
    ],
    targets: [
      { id: 'total', name: '被减数', accepts: ['num17'], position: { x: 50, y: 30 }, size: { width: 100, height: 60 } },
      { id: 'ten', name: '10', accepts: ['num10'], position: { x: 50, y: 120 }, size: { width: 100, height: 60 } },
      { id: 'one', name: '个位', accepts: ['num7'], position: { x: 180, y: 120 }, size: { width: 100, height: 60 } },
      { id: 'result1', name: '10-9=', accepts: ['num1'], position: { x: 50, y: 210 }, size: { width: 100, height: 60 } },
      { id: 'result2', name: '1+7=', accepts: ['num8'], position: { x: 180, y: 210 }, size: { width: 100, height: 60 } },
    ],
    connections: [
      { from: 'total', to: 'ten' },
      { from: 'total', to: 'one' },
    ],
    explanation: '破十法：17 分成 10 和 7，10 - 9 = 1，1 + 7 = 8！雷霆裂变机组装完成！裂变骑士绝招裂变惩戒觉醒！他参与对抗维尔图姆人的战斗，从严厉的竞争者变成可靠的伙伴！',
    hint: '先找到被减数 17，再找 10 和 7',
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