import { getAssetPath } from '@/config/paths.config';
import type { Question, QuestionType, WeaponPart } from '@/types'
import { DifficultyLevel } from '@/types'

/**
 * 第八关（3-1 爆裂重卡 - 100 以内数的认识）战斧主题武器零件配置
 */

/**
 * 新手模式武器零件：炫光战斧
 */
export const level3_1EasyWeaponParts: WeaponPart[] = [
  { id: 'axe-easy-core', name: '战斧核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'axe-easy-blade', name: '炫光斧刃', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'axe-easy-handle', name: '战斧握柄', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'axe-easy-guard', name: '斧柄护手', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'axe-easy-complete', name: '炫光战斧完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/easy-weapon.png') },
]

/**
 * 挑战模式武器零件：战斧炮
 */
export const level3_1MediumWeaponParts: WeaponPart[] = [
  { id: 'axe-medium-core', name: '战斧炮核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'axe-medium-blade', name: '战斧炮刃', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'axe-medium-barrel', name: '炮管外壳', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'axe-medium-complete', name: '战斧炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/medium-weapon.png') },
]

/**
 * 高手模式武器零件：雷霆战斧
 */
export const level3_1HardWeaponParts: WeaponPart[] = [
  { id: 'axe-hard-ring', name: '雷霆能量环', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'axe-hard-blade', name: '雷霆斧刃', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'axe-hard-barrel', name: '雷霆炮身', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'axe-hard-complete', name: '雷霆战斧完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/hard-weapon.png') },
]

/**
 * 关卡 3-1 新手模式题目：炫光战斧
 * 主题：100 以内数的认识 - 数数和数的组成基础
 * 场景：第 19 集 → 公路初次登场 → 屁股扎钉子漏机油 → 饥饿暴躁
 * 故事背景：爆裂重卡屁股上扎了钉子，漏机油，饥饿导致暴躁，劫持轿车司机，吃掉油箱
 */
export const level3_1EasyQuestions: Question[] = [
  // 第 1 题：爆裂重卡饿得暴躁（第 19 集公路登场）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '35 里面有几个十和几个一？',
    options: [
      { id: 'a', text: '3 个十和 5 个一' },
      { id: 'b', text: '5 个十和 3 个一' },
      { id: 'c', text: '3 个十和 3 个一' },
      { id: 'd', text: '35 个十和 0 个一' },
    ],
    correctAnswer: 'a',
    explanation: '35 由 3 个十和 5 个一组成！35 的十位是 3，个位是 5。第 19 集，爆裂重卡在公路上初次登场！屁股上扎了钉子导致漏机油，饥饿让他变得暴躁！他的载具形态是大脚卡车！',
    hint: '看十位和个位分别是几',
  },

  // 第 2 题：于莉妈妈发现钉子（填空题）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '48 由{{___}}个十和{{___}}个一组成',
    answer: ['4', '8'],
    explanation: '48 由 4 个十和 8 个一组成！48 的十位是 4，个位是 8。小俊的母亲于莉发现爆裂重卡屁股上有钉子，正在漏机油！她准备帮忙拔掉钉子！爆烈重卡的武器是暴烈护甲、碎骨斩斧、核心陆斧！',
    hint: '48 的十位是几？个位是几？',
  },

  // 第 3 题：爆裂重卡开始冷静
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '5 个十是几？',
    options: [
      { id: 'a', text: '5' },
      { id: 'b', text: '50' },
      { id: 'c', text: '500' },
      { id: 'd', text: '15' },
    ],
    correctAnswer: 'b',
    explanation: '5 个十是 50！10、20、30、40、50，5 个十就是 50。爆裂重卡开始冷静下来！饥饿是他暴躁的根本原因，不是因为他本性凶恶！他的绝招是战斧重劈、蛮牛射线、蛮牛重压！',
    hint: '5 个十就是 50',
  },

  // 第 4 题：于莉妈妈帮忙拔钉子（数字配对拖拽）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '把数字拖到正确的组成上！',
    instruction: '将左侧的组成描述拖到右侧对应的数字上',
    items: [
      { id: 'item1', name: '6 个十和 3 个一' },
      { id: 'item2', name: '8 个十和 5 个一' },
      { id: 'item3', name: '9 个十和 2 个一' },
    ],
    targets: [
      { id: 'num63', name: '63', accepts: ['item1'], position: { x: 40, y: 80 }, size: { width: 100, height: 60 } },
      { id: 'num85', name: '85', accepts: ['item2'], position: { x: 170, y: 80 }, size: { width: 100, height: 60 } },
      { id: 'num92', name: '92', accepts: ['item3'], position: { x: 300, y: 80 }, size: { width: 100, height: 60 } },
    ],
    explanation: '6 个十和 3 个一是 63，8 个十和 5 个一是 85，9 个十和 2 个一是 92！于莉妈妈帮忙拔掉钉子，还贴上贴纸防止继续漏油！爆裂重卡感到温暖和感激！',
    hint: '几个十和几个一组成对应的两位数',
  },

  // 第 5 题：爆裂重卡认识到错误
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '100 里面有几个十？',
    options: [
      { id: 'a', text: '1 个' },
      { id: 'b', text: '10 个' },
      { id: 'c', text: '100 个' },
      { id: 'd', text: '50 个' },
    ],
    correctAnswer: 'b',
    explanation: '100 里面有 10 个十！10、20、30、40、50、60、70、80、90、100，一共 10 个十。爆裂重卡认识到自己的错误！于莉妈妈教育了一番，他明白了不应该因为饥饿就伤害别人！炫光战斧组装完成！',
    hint: '数一数从 10 到 100 有几个十',
  },
]

/**
 * 关卡 3-1 挑战模式题目：战斧炮
 * 主题：100 以内数的认识 - 数的组成进阶
 * 场景：小俊家发电机房 → 于莉妈妈帮忙拔钉子贴贴纸 → 教育爆裂重卡
 */
export const level3_1MediumQuestions: Question[] = [
  // 第 1 题：发电机房
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '67 里面有几个十和几个一？',
    options: [
      { id: 'a', text: '6 个十和 7 个一' },
      { id: 'b', text: '7 个十和 6 个一' },
      { id: 'c', text: '60 个十和 7 个一' },
      { id: 'd', text: '67 个一' },
    ],
    correctAnswer: 'a',
    explanation: '67 由 6 个十和 7 个一组成！67 的十位是 6，个位是 7。爆裂重卡来到小俊家的发电机房，想吃掉燃油发电机！但于莉妈妈阻止了他！',
    hint: '67 的十位是 6，个位是 7',
  },

  // 第 2 题：于莉妈妈教育（多选题）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '选出由 5 个十和几个一组成的数！',
    options: [
      { id: 'a', text: '52' },
      { id: 'b', text: '58' },
      { id: 'c', text: '35' },
      { id: 'd', text: '59' },
    ],
    correctAnswers: ['a', 'b', 'd'],
    explanation: '52 = 5 个十 + 2 个一，58 = 5 个十 + 8 个一，59 = 5 个十 + 9 个一！35 是 3 个十 + 5 个一，不符合！于莉妈妈教育爆裂重卡："不能因为饿就伤害别人，要学会控制自己！"',
    hint: '十位是 5 的数才是由 5 个十组成的',
  },

  // 第 3 题：教育航线（连线配对）
  {
    type: 'link' as QuestionType.LINK,
    question: '把数和它的组成连起来！',
    pairs: [
      { id: '1', left: '36', right: '3 个十和 6 个一' },
      { id: '2', left: '72', right: '7 个十和 2 个一' },
      { id: '3', left: '89', right: '8 个十和 9 个一' },
      { id: '4', left: '55', right: '5 个十和 5 个一' },
      { id: '5', left: '100', right: '10 个十' },
    ],
    explanation: '36 = 3 个十 + 6 个一，72 = 7 个十 + 2 个一，89 = 8 个十 + 9 个一，55 = 5 个十 + 5 个一，100 = 10 个十！教育航线建立！于莉妈妈耐心地教导爆裂重卡，他开始理解自己的错误！',
  },

  // 第 4 题：核心教育（两步填空）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '73 由{{___}}个十和{{___}}个一组成',
    answer: ['7', '3'],
    explanation: '73 由 7 个十和 3 个一组成！73 的十位是 7，个位是 3。核心教育完成！于莉妈妈告诉爆烈重卡："你的武器暴烈护甲和碎骨斩斧应该用来保护别人，而不是伤害他们！"',
    hint: '73 的十位是 7，个位是 3',
  },

  // 第 5 题：认识到错误（圈画题）
  {
    type: 'circle' as QuestionType.CIRCLE,
    question: '圈出由 8 个十组成的数！',
    instruction: '点击圈出由 8 个十组成的数',
    image: getAssetPath('/assets/shapes/number-examples.svg'),
    answerAreas: [
      { id: 'num80', x: 80, y: 100, radius: 40, label: '80' },
      { id: 'num81', x: 160, y: 100, radius: 40, label: '81' },
      { id: 'num85', x: 240, y: 100, radius: 40, label: '85' },
      { id: 'num89', x: 320, y: 100, radius: 40, label: '89' },
    ],
    tolerance: 10,
    explanation: '80、81、85、89 都是由 8 个十组成的！80 = 8 个十 + 0 个一，81 = 8 个十 + 1 个一，85 = 8 个十 + 5 个一，89 = 8 个十 + 9 个一。战斧炮组装完成！爆裂重卡认识到错误，决定改变自己！',
    hint: '十位是 8 的数都是由 8 个十组成的',
  },
]

/**
 * 关卡 3-1 高手模式题目：雷霆战斧
 * 主题：100 以内数的认识 - 数的组成高阶
 * 场景：第 22 集封装完成 → 成为小俊伙伴 → 与重力金刚、深海天锚和好
 */
export const level3_1HardQuestions: Question[] = [
  // 第 1 题：完整数的组成（三步填空）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '90 由{{___}}个十和{{___}}个一组成',
    answer: ['9', '0'],
    explanation: '90 由 9 个十和 0 个一组成！90 是一个整十数，个位是 0。第 22 集，爆裂重卡认识到错误后，自愿接受封装！小俊用炫卡召唤器将他封装，成为伙伴！他的载具形态是大脚卡车！',
    hint: '90 的十位是 9，个位是 0',
  },

  // 第 2 题：伙伴比较（比较哪个数最大）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个数最大？',
    options: [
      { id: 'a', text: '67' },
      { id: 'b', text: '76' },
      { id: 'c', text: '69' },
      { id: 'd', text: '71' },
    ],
    correctAnswer: 'b',
    explanation: '76 最大！先看十位，7 比 6 大；再看 76 和 71，十位相同看个位，6 比 1 大。爆裂重卡成为伙伴后，与重力金刚、深海天锚重归于好！他们曾经决裂，但现在是并肩作战的战友！',
    hint: '先比较十位，十位相同再比较个位',
  },

  // 第 3 题：伙伴排序（数字按从小到大排序）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '把数字按从小到大排列！',
    instruction: '将数字拖到正确顺序位置',
    items: [
      { id: 'num45', name: '45' },
      { id: 'num52', name: '52' },
      { id: 'num78', name: '78' },
      { id: 'num89', name: '89' },
    ],
    targets: [
      { id: 'pos1', name: '最小', accepts: ['num45'], position: { x: 20, y: 80 }, size: { width: 90, height: 60 } },
      { id: 'pos2', name: '第二', accepts: ['num52'], position: { x: 130, y: 80 }, size: { width: 90, height: 60 } },
      { id: 'pos3', name: '第三', accepts: ['num78'], position: { x: 240, y: 80 }, size: { width: 90, height: 60 } },
      { id: 'pos4', name: '最大', accepts: ['num89'], position: { x: 350, y: 80 }, size: { width: 90, height: 60 } },
    ],
    explanation: '45 < 52 < 78 < 89！从小到大排列正确！爆裂重卡、重力金刚、深海天锚三人的友谊排序也在恢复！他们一起对抗敌人，成为可靠的伙伴！',
    hint: '先比较十位，十位相同再比较个位',
  },

  // 第 4 题：与重力金刚、深海天锚和好（多选题）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '选出数的组成的正确步骤！',
    options: [
      { id: 'a', text: '看十位是几，就是几个十' },
      { id: 'b', text: '看个位是几，就是几个一' },
      { id: 'c', text: '几个十加几个一就是这个数' },
      { id: 'd', text: '只看十位就够了' },
    ],
    correctAnswers: ['a', 'b', 'c'],
    explanation: '数的组成正确步骤：先看十位是几就是几个十，再看个位是几就是几个一，几个十加几个一就是这个数！选项 d 错误，必须同时看十位和个位！爆裂重卡与重力金刚、深海天锚和好！三人友谊重建！',
    hint: '数的组成需要看十位和个位',
  },

  // 第 5 题：加入团队（图形组合出 100）
  {
    type: 'shape_compose' as QuestionType.SHAPE_COMPOSE,
    question: '用图形拼出 100！不同图形代表不同的数。',
    instruction: '正方形=10，中三角形=20，大三角形=50。把图形拖到画布中，使总数等于 100！',
    items: [
      // 10 个正方形（每个值 10）
      { id: 'ten-1', name: '10', shape: 'square', value: 10 },
      { id: 'ten-2', name: '10', shape: 'square', value: 10 },
      { id: 'ten-3', name: '10', shape: 'square', value: 10 },
      { id: 'ten-4', name: '10', shape: 'square', value: 10 },
      { id: 'ten-5', name: '10', shape: 'square', value: 10 },
      { id: 'ten-6', name: '10', shape: 'square', value: 10 },
      { id: 'ten-7', name: '10', shape: 'square', value: 10 },
      { id: 'ten-8', name: '10', shape: 'square', value: 10 },
      { id: 'ten-9', name: '10', shape: 'square', value: 10 },
      { id: 'ten-10', name: '10', shape: 'square', value: 10 },
      // 5 个中三角形（每个值 20）
      { id: 'twenty-1', name: '20', shape: 'triangle-medium', value: 20 },
      { id: 'twenty-2', name: '20', shape: 'triangle-medium', value: 20 },
      { id: 'twenty-3', name: '20', shape: 'triangle-medium', value: 20 },
      { id: 'twenty-4', name: '20', shape: 'triangle-medium', value: 20 },
      { id: 'twenty-5', name: '20', shape: 'triangle-medium', value: 20 },
      // 2 个大三角形（每个值 50）
      { id: 'fifty-1', name: '50', shape: 'triangle-big', value: 50 },
      { id: 'fifty-2', name: '50', shape: 'triangle-big', value: 50 },
    ],
    canvasSize: { width: 600, height: 300 },
    targetValue: 100,
    shapeScale: 0.5,
    explanation: '100 有很多种组成方式：10 个 10 相加、5 个 20 相加、2 个 50 相加，或者 50+20+20+10=100！雷霆战斧组装完成！爆裂重卡加入炫卡斗士团队！',
    hint: '试试不同的组合：10 个正方形、或 5 个中三角形、或 2 个大三角形',
  },
]

/**
 * 按难度分组的题目
 */
export const level3_1QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level3_1EasyQuestions,
  [DifficultyLevel.MEDIUM]: level3_1MediumQuestions,
  [DifficultyLevel.HARD]: level3_1HardQuestions,
}

/**
 * 按难度分组的武器零件
 */
export const level3_1WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level3_1EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level3_1MediumWeaponParts,
  [DifficultyLevel.HARD]: level3_1HardWeaponParts,
}