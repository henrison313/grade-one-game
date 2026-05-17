import { getAssetPath } from '@/config/paths.config';
import type { Question, QuestionType, WeaponPart } from '@/types'
import { DifficultyLevel } from '@/types'

/**
 * 关卡 4-1 新手难度题目:炫蓝重拳S
 * 主题:四、100以内口算加减法 - 第1课时:整十数加减整十数
 * 场景:警车基地入口,炫蓝闪电S展开炫蓝轰击考验
 * 难度定位:基础概念理解(整十数加法、整十数减法、十位计算)
 * 角色:炫蓝闪电S(Blue Cop S)- 兰博基尼埃文塔多警车(升级版) - 蓝色 - 炫蓝轰击、流星重拳、星爆粉碎拳
 */
export const level41EasyQuestions: Question[] = [
  // 第1题:CHOICE 选择题(整十数加法)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '炫蓝闪电S的炫蓝轰击需要发射能量弹。30个十加20个十等于多少?',
    options: [
      { id: 'a', text: '40个十' },
      { id: 'b', text: '50个十' },
      { id: 'c', text: '60个十' },
      { id: 'd', text: '70个十' },
    ],
    correctAnswer: 'b',
    explanation: '30 + 20 = 50!3个十加2个十等于5个十,就是50个十。炫蓝轰击发射50个能量弹!',
    hint: '3个十加2个十等于几个十?',
  },

  // 第2题:CHOICE 选择题(整十数减法)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '炫蓝闪电S有70个能量弹,发射了40个炫蓝轰击,还剩多少个?',
    options: [
      { id: 'a', text: '20个' },
      { id: 'b', text: '30个' },
      { id: 'c', text: '40个' },
      { id: 'd', text: '50个' },
    ],
    correctAnswer: 'b',
    explanation: '70 - 40 = 30!7个十减4个十等于3个十,就是30个。炫蓝闪电S还剩30个能量弹!',
    hint: '7个十减4个十等于几个十?',
  },

  // 第3题:FILL_BLANK 填空题(整十数加减法)
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '炫蓝闪电S打出流星重拳需要收集40个十的能量，他已经有50个十，再收集40个十，一共是{{___}}个十。',
    answer: ['90'],
    explanation: '50 + 40 = 90，5个十加4个十等于9个十，就是90个十。炫蓝闪电S一共有90个十的能量！',
    hint: '5个十加4个十等于几个十？',
  },

  // 第4题:CHOICE 选择题(整十数连加)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '炫蓝闪电S的星爆粉碎拳需要三组能量:20个十 + 30个十 + 10个十 = ?',
    options: [
      { id: 'a', text: '50个十' },
      { id: 'b', text: '60个十' },
      { id: 'c', text: '70个十' },
      { id: 'd', text: '80个十' },
    ],
    correctAnswer: 'b',
    explanation: '20 + 30 + 10 = 60!2个十加3个十再加1个十等于6个十,就是60个十。星爆粉碎拳能量充足!',
    hint: '2 + 3 + 1 = 6,所以20 + 30 + 10 = 60',
  },

  // 第5题:CHOICE 选择题(整十数连减)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '炫蓝闪电S有80个十的能量,发射炫蓝轰击用了20个十,发射流星重拳用了30个十,还剩多少?',
    options: [
      { id: 'a', text: '20个十' },
      { id: 'b', text: '30个十' },
      { id: 'c', text: '40个十' },
      { id: 'd', text: '50个十' },
    ],
    correctAnswer: 'b',
    explanation: '80 - 20 - 30 = 30!8个十减2个十再减3个十等于3个十,就是30个十。炫蓝闪电S还剩30个十的能量!',
    hint: '8 - 2 - 3 = 3,所以80 - 20 - 30 = 30',
  },
]

/**
 * 关卡 4-1 挑战难度题目:流星重拳炮
 * 主题:四、100以内口算加减法 - 第1课时:整十数加减整十数
 * 场景:炫蓝闪电训练场,炫蓝闪电S展开流星重拳挑战
 * 难度定位:综合应用(整十数加减混合、整十数比较、整十数规律、整十数应用)
 * 角色:炫蓝闪电S(Blue Cop S)- 兰博基尼埃文塔多警车(升级版) - 蓝色 - 炫蓝轰击、流星重拳、星爆粉碎拳
 */
export const level41MediumQuestions: Question[] = [
  // 第1题:DRAG 拖拽题(整十数加法组合)
  {
    type: 'drag' as QuestionType.DRAG,
    question: '炫蓝闪电S的流星重拳需要三组能量弹：第一组30个十，第二组40个十，第三组20个十。把三组能量弹拖到目标区域，计算总能量。',
    instruction: '把三组能量弹拖到目标区域，计算总能量。',
    items: [
      { id: 'group1', name: '第一组 30个十' },
      { id: 'group2', name: '第二组 40个十' },
      { id: 'group3', name: '第三组 20个十' },
    ],
    targets: [
      { id: 'total', name: '总能量', accepts: ['group1', 'group2', 'group3'], position: { x: 0, y: 30 }, size: { width: 280, height: 200 } },
    ],
    calculation: {
      type: 'sum',
      values: [30, 40, 20],
      result: 90,
      label: '总能量',
    },
    explanation: '总能量 = 30 + 40 + 20 = 90个十。流星重拳能量充足!',
    hint: '把三组能量弹加起来',
  },

  // 第2题:FILL_BLANK 填空题(整十数加减混合)
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '炫蓝闪电S有{{___}}个十的能量,发射流星重拳用了35个十,又补充了25个十,现在有80个十。',
    answer: ['90'],
    explanation: '设原有能量为x个十。x - 35 + 25 = 80,x = 80 + 35 - 25 = 90个十。炫蓝闪电S原有90个十的能量!',
    hint: '用现在的能量加发射的能量,再减补充的能量',
  },

  // 第3题:CHOICE 选择题(整十数比较)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '炫蓝闪电S的能量等级是60个十,炫蓝闪电(普通版)的能量等级是40个十。炫蓝闪电S比炫蓝闪电多多少个十?',
    options: [
      { id: 'a', text: '10个十' },
      { id: 'b', text: '20个十' },
      { id: 'c', text: '30个十' },
      { id: 'd', text: '40个十' },
    ],
    correctAnswer: 'b',
    explanation: '60 - 40 = 20个十。炫蓝闪电S比炫蓝闪电多20个十的能量!这就是升级进化的力量!',
    hint: '用炫蓝闪电S的能量减去炫蓝闪电的能量',
  },

  // 第4题:MULTI_SELECT 多选题(整十数规律)
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '炫蓝闪电S的能量序列:10, 20, 30, 40, ___。下面哪些是正确的规律判断?',
    options: [
      { id: 'a', text: '每次加10个十' },
      { id: 'b', text: '下一个能量是50个十' },
      { id: 'c', text: '每次加20个十' },
      { id: 'd', text: '下一个能量是60个十' },
    ],
    correctAnswers: ['a', 'b'],
    explanation: 'A: 规律是每次加10个十,10→20→30→40 ✅;B: 下一个能量是40+10=50个十 ✅;C: 每次加20个十,应该是10→30→50,不是这个序列 ❌;D: 下一个能量是60个十,应该是40+20=60,不符合规律 ❌',
    hint: '观察序列规律,每次增加几个十?',
  },

  // 第5题:CHOICE 选择题(整十数应用)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '炫蓝闪电S的警车基地需要设置防御能量。下面哪个整十数最适合基地防御?',
    options: [
      { id: 'a', text: '30个十(防御太弱)' },
      { id: 'b', text: '100个十(防御适中)' },
      { id: 'c', text: '150个十(防御过强浪费能量)' },
      { id: 'd', text: '20个十(防御极弱)' },
    ],
    correctAnswer: 'b',
    explanation: '100个十是最适合的防御能量等级,防御适中,不浪费能量。30太弱,150过强浪费,20极弱。',
    hint: '选择最适合的防御能量等级',
  },
]

/**
 * 关卡 4-1 高手难度题目:星爆粉碎拳
 * 主题:四、100以内口算加减法 - 第1课时:整十数加减整十数
 * 场景:炫蓝闪电S基地,小俊团队流星重拳挑战成功
 * 难度定位:拓展挑战(多步计算、逆向思维、逻辑推理、最佳方案、综合应用)
 * 角色:炫蓝闪电S(Blue Cop S)- 兰博基尼埃文塔多警车(升级版) - 蓝色 - 炫蓝轰击、流星重拳、星爆粉碎拳
 */
export const level41HardQuestions: Question[] = [
  // 第1题:DRAG 拖拽题(多组整十数计算)
  {
    type: 'drag' as QuestionType.DRAG,
    question: '炫蓝闪电S的基地防御系统需要四组能量：第一组120个十，第二组80个十，第三组150个十，第四组50个十。把四组能量拖到目标区域，计算总防御能量。',
    instruction: '把四组能量拖到目标区域，计算总防御能量。',
    items: [
      { id: 'group1', name: '第一组 120个十' },
      { id: 'group2', name: '第二组 80个十' },
      { id: 'group3', name: '第三组 150个十' },
      { id: 'group4', name: '第四组 50个十' },
    ],
    targets: [
      { id: 'total', name: '总防御能量', accepts: ['group1', 'group2', 'group3', 'group4'], position: { x: 0, y: 30 }, size: { width: 280, height: 240 } },
    ],
    calculation: {
      type: 'sum',
      values: [120, 80, 150, 50],
      result: 400,
      label: '总防御能量',
    },
    explanation: '总防御能量 = 120 + 80 + 150 + 50 = 400个十。炫蓝闪电S基地防御能量充足!',
    hint: '把四组能量加起来',
  },

  // 第2题:FILL_BLANK 填空题(逆向思维)
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '炫蓝闪电S的基地总防御能量是400个十,第一组是120个十,第二组是80个十,第三组是150个十,第四组是多少?{{___}}个十',
    answer: ['50'],
    explanation: '整体 - 部分 - 部分 - 部分 = 另一部分。400 - 120 - 80 - 150 = 50个十。',
    hint: '用总防御能量减去前三组',
  },

  // 第3题:CHOICE 选择题(逻辑推理)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '炫蓝闪电S的能量等级是100个十,炫蓝闪电(普通版)比炫蓝闪电S少20个十,焰龙战神比炫蓝闪电(普通版)多30个十。焰龙战神的能量等级是多少?',
    options: [
      { id: 'a', text: '80个十' },
      { id: 'b', text: '90个十' },
      { id: 'c', text: '110个十' },
      { id: 'd', text: '130个十' },
    ],
    correctAnswer: 'c',
    explanation: '先算炫蓝闪电(普通版):100 - 20 = 80个十;再算焰龙战神:80 + 30 = 110个十',
    hint: '先算炫蓝闪电的能量等级,再算焰龙战神的能量等级',
  },

  // 第4题:MULTI_SELECT 多选题(多步计算)
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '炫蓝闪电S有200个十的能量,发射炫蓝轰击用了35个十,发射流星重拳用了25个十,又补充了60个十。下面哪些说法正确?',
    options: [
      { id: 'a', text: '发射后还剩140个十' },
      { id: 'b', text: '现在有200个十' },
      { id: 'c', text: '发射后还剩160个十' },
      { id: 'd', text: '现在有140个十' },
    ],
    correctAnswers: ['a', 'b'],
    explanation: '先算发射后剩余:200 - 35 - 25 = 140个十 ✅;再算补充后总数:140 + 60 = 200个十 ✅',
    hint: '先算发射后剩余,再算补充后总数',
  },

  // 第5题:CHOICE 选择题(最佳方案)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '炫蓝闪电S的星爆粉碎拳需要准备能量。下面哪个能量方案最适合星爆粉碎拳?',
    options: [
      { id: 'a', text: '50个十(能量太少,无法发射星爆粉碎拳)' },
      { id: 'b', text: '100个十(能量适中,可以发射星爆粉碎拳)' },
      { id: 'c', text: '200个十(能量过多,浪费炫蓝闪电S的能量)' },
      { id: 'd', text: '30个十(能量极少,完全无法发射)' },
    ],
    correctAnswer: 'b',
    explanation: '100个十是最适合星爆粉碎拳的能量等级,能量适中,不浪费能量。50太少,200过多浪费,30极少无法发射。',
    hint: '选择最适合星爆粉碎拳的能量方案',
  },
]

/**
 * 按难度分组的题目
 */
export const level41QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level41EasyQuestions,
  [DifficultyLevel.MEDIUM]: level41MediumQuestions,
  [DifficultyLevel.HARD]: level41HardQuestions,
}

/**
 * 关卡 4-1 新手模式武器零件:炫蓝重拳S(5个零件)
 */
export const level41EasyWeaponParts: WeaponPart[] = [
  { id: 'easy-blue-s-core', name: '炫蓝探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.webp') },
  { id: 'easy-blue-s-navigator', name: '炫蓝导航仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.webp') },
  { id: 'easy-blue-s-punch-head', name: '炫蓝重拳头', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能护盾.webp') },
  { id: 'easy-blue-s-armor-pipe', name: '炫蓝战甲管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.webp') },
  { id: 'easy-blue-s-punch-complete', name: '炫蓝重拳S完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/easy-xuanlan-shandian-light.webp') },
]

/**
 * 关卡 4-1 挑战模式武器零件:流星重拳炮(4个零件)
 */
export const level41MediumWeaponParts: WeaponPart[] = [
  { id: 'medium-meteor-core', name: '流星探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.webp') },
  { id: 'medium-meteor-locator', name: '流星定位器', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.webp') },
  { id: 'medium-meteor-armor-plate', name: '流星装甲板', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.webp') },
  { id: 'medium-meteor-punch-cannon-complete', name: '流星重拳炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/medium-xuanlan-shandian-bolt.webp') },
]

/**
 * 关卡 4-1 高手模式武器零件:星爆粉碎拳(4个零件)
 */
export const level41HardWeaponParts: WeaponPart[] = [
  { id: 'hard-starburst-command-core', name: '星爆指挥核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.webp') },
  { id: 'hard-courage-navigator', name: '勇气导航仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.webp') },
  { id: 'hard-starburst-punch-system', name: '星爆重拳系统', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.webp') },
  { id: 'hard-starburst-smash-punch-complete', name: '星爆粉碎拳完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/hard-xuanlan-shandian-thunder.webp') },
]

/**
 * 按难度分组的武器零件
 */
export const level41WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level41EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level41MediumWeaponParts,
  [DifficultyLevel.HARD]: level41HardWeaponParts,
}

/**
 * 关卡 4-1 故事气泡配置
 */

/**
 * 关卡 4-1 完整配置
 */
export const level41EnhancedData = {
  levelId: 'level-4-1',
  characterName: '炫蓝闪电S',
  characterEnglishName: 'Blue Cop S',
  theme: '四、100以内口算加减法 - 第1课时:整十数加减整十数',
  vehicleForm: '兰博基尼埃文塔多警车(升级版)',
  weapons: ['炫蓝重拳S', '炫蓝战甲', '小型手枪'],
  ultimateSkills: ['炫蓝轰击', '流星重拳', '星爆粉碎拳'],
  themeColor: '蓝色',
  difficulty: 3,
  rarity: '金边 + 闪电特效',
  questionsByDifficulty: level41QuestionsByDifficulty,
  weaponPartsByDifficulty: level41WeaponPartsByDifficulty,
}
