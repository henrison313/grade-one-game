import { getAssetPath } from '@/config/paths.config';
import type { Question, QuestionType, WeaponPart } from '@/types'
import { DifficultyLevel } from '@/types'

/**
 * 关卡 5-2 新手难度题目:横扫千军
 * 主题:五、100以内笔算加减法 - 第2课时:两位数减两位数（不退位）
 * 角色:钢臂力士- 神钢KMG5220清障起重机 - 绿松石色 - 神力圣刃、神力钢臂、横扫千军
 */
export const level52EasyQuestions: Question[] = [
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '68 - 42 = ?',
    options: [
      { id: 'a', text: '16' },
      { id: 'b', text: '26' },
      { id: 'c', text: '36' },
      { id: 'd', text: '24' },
    ],
    correctAnswer: 'b',
    explanation: '68 - 42 = 26！个位8-2=6，十位6-4=2，所以是26。',
    hint: '个位减个位，十位减十位',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '79 - 56 = ?',
    options: [
      { id: 'a', text: '13' },
      { id: 'b', text: '23' },
      { id: 'c', text: '33' },
      { id: 'd', text: '24' },
    ],
    correctAnswer: 'b',
    explanation: '79 - 56 = 23！个位9-6=3，十位7-5=2，所以是23。',
    hint: '个位减个位，十位减十位',
  },
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '用竖式计算87 - 34，个位是{{___}}，十位是{{___}}',
    answer: ['3', '5'],
    explanation: '87 - 34 = 53！个位7-4=3，十位8-3=5。',
    hint: '从个位减起',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '96 - 72 = ?',
    options: [
      { id: 'a', text: '14' },
      { id: 'b', text: '24' },
      { id: 'c', text: '34' },
      { id: 'd', text: '26' },
    ],
    correctAnswer: 'b',
    explanation: '96 - 72 = 24！个位6-2=4，十位9-7=2，所以是24。',
    hint: '个位减个位，十位减十位',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '小明有89元零花钱，买书花了56元，还剩多少元？',
    options: [
      { id: 'a', text: '23元' },
      { id: 'b', text: '33元' },
      { id: 'c', text: '43元' },
      { id: 'd', text: '34元' },
    ],
    correctAnswer: 'b',
    explanation: '89 - 56 = 33元！个位9-6=3，十位8-5=3，所以是33。',
    hint: '原有的减去花掉的',
  },
]

export const level52MediumQuestions: Question[] = [
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '76 - 51 = ?',
    options: [
      { id: 'a', text: '15' },
      { id: 'b', text: '25' },
      { id: 'c', text: '35' },
      { id: 'd', text: '29' },
    ],
    correctAnswer: 'b',
    explanation: '76 - 51 = 25！个位6-1=5，十位7-5=2，所以是25。',
    hint: '个位减个位，十位减十位',
  },
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '钢臂力士原有87个能量，发射神力圣刃用了一些后还剩53个，用了{{___}}个能量。',
    answer: ['34'],
    explanation: '87 - 53 = 34！用了34个能量。个位7-3=4，十位8-5=3。',
    hint: '用原来的能量减去剩余的能量',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '钢臂力士的能量等级是96，猎空悍将的能量等级是72。钢臂力士比猎空悍将多多少能量？',
    options: [
      { id: 'a', text: '14' },
      { id: 'b', text: '24' },
      { id: 'c', text: '34' },
      { id: 'd', text: '26' },
    ],
    correctAnswer: 'b',
    explanation: '96 - 72 = 24！个位6-2=4，十位9-7=2，等于24。',
    hint: '用钢臂力士的能量减去猎空悍将的能量',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '钢臂力士的神力钢臂需要67个能量，发射横扫千军用了25个能量，还剩_个能量。',
    options: [
      { id: 'a', text: '32' },
      { id: 'b', text: '42' },
      { id: 'c', text: '52' },
      { id: 'd', text: '62' },
    ],
    correctAnswer: 'b',
    explanation: '67 - 25 = 42！个位7-5=2，十位6-2=4，所以是42。',
    hint: '用原有的能量减去使用的能量',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '钢臂力士总能量是95，发射神力圣刃用了31个能量，发射神力钢臂用了23个能量，还剩_个能量。',
    options: [
      { id: 'a', text: '31' },
      { id: 'b', text: '41' },
      { id: 'c', text: '51' },
      { id: 'd', text: '61' },
    ],
    correctAnswer: 'b',
    explanation: '95 - 31 - 23 = 41！先算95-31=64，再算64-23=41。',
    hint: '用总能量减去使用的能量',
  },
]

export const level52HardQuestions: Question[] = [
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '钢臂力士总能量是90，第一组用了35个能量，第二组用了25个能量，第三组用了{{___}}个能量。',
    answer: ['30'],
    explanation: '90 - 35 - 25 = 30！先用总能量减去第一组:90-35=55，再减去第二组:55-25=30。',
    hint: '用总能量减去前两组',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '钢臂力士的能量等级是90，炫蓝闪电比钢臂力士少25个能量，深海霸王比炫蓝闪电多12个能量。深海霸王的能量等级是多少？',
    options: [
      { id: 'a', text: '65' },
      { id: 'b', text: '77' },
      { id: 'c', text: '75' },
      { id: 'd', text: '85' },
    ],
    correctAnswer: 'b',
    explanation: '先算炫蓝闪电:90 - 25 = 65；再算深海霸王:65 + 12 = 77。',
    hint: '先算炫蓝闪电的能量等级，再算深海霸王的能量等级',
  },
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '钢臂力士有90个能量，发射横扫千军用了35个能量，又补充了22个能量。下面哪些说法正确？',
    options: [
      { id: 'a', text: '发射后还剩55个能量' },
      { id: 'b', text: '现在有77个能量' },
      { id: 'c', text: '发射后还剩65个能量' },
      { id: 'd', text: '现在有67个能量' },
    ],
    correctAnswers: ['a', 'b'],
    explanation: '先算发射后剩余:90 - 35 = 55 ✅；再算补充后总数:55 + 22 = 77 ✅。',
    hint: '先算发射后剩余，再算补充后总数',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '钢臂力士的战斗时间是90分钟，神力圣刃用了32分钟，神力钢臂用了28分钟，横扫千军用了_分钟，总共正好90分钟。',
    options: [
      { id: 'a', text: '30' },
      { id: 'b', text: '40' },
      { id: 'c', text: '20' },
      { id: 'd', text: '50' },
    ],
    correctAnswer: 'a',
    explanation: '90 - 32 - 28 = 30！先用总时间减去神力圣刃:90-32=58，再减去神力钢臂:58-28=30。',
    hint: '用总时间减去前两项',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '钢臂力士的能量等级是85，猎空悍将的能量等级是78。钢臂力士比猎空悍将多多少能量？',
    options: [
      { id: 'a', text: '7' },
      { id: 'b', text: '17' },
      { id: 'c', text: '27' },
      { id: 'd', text: '37' },
    ],
    correctAnswer: 'a',
    explanation: '85 - 78 = 7！个位5-8不够减，需要借位：15-8=7，十位7-7=0，所以是7。',
    hint: '用钢臂力士的能量减去猎空悍将的能量',
  },
]

export const level52QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level52EasyQuestions,
  [DifficultyLevel.MEDIUM]: level52MediumQuestions,
  [DifficultyLevel.HARD]: level52HardQuestions,
}

export const level52EasyWeaponParts: WeaponPart[] = [
  { id: 'easy-arm-core', name: '神力探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'easy-arm-nav', name: '神力导航仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'easy-arm-head', name: '横扫千军头', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'easy-arm-pipe', name: '神力穿梭管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'easy-arm-complete', name: '横扫千军完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/easy-weapon.png') },
]

export const level52MediumWeaponParts: WeaponPart[] = [
  { id: 'med-arm-core', name: '神力探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'med-arm-loc', name: '神力定位器', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'med-arm-armor', name: '神力装甲板', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'med-arm-meter', name: '神力计量管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'med-arm-cannon', name: '钢臂力士战炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/medium-weapon.png') },
]

export const level52HardWeaponParts: WeaponPart[] = [
  { id: 'hard-arm-partner', name: '伙伴神力核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'hard-arm-fair', name: '神力公平仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'hard-arm-sys', name: '横扫千军系统', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'hard-arm-armor', name: '神力装甲管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'hard-arm-ult', name: '钢臂力士终极炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/hard-weapon.png') },
]

export const level52WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level52EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level52MediumWeaponParts,
  [DifficultyLevel.HARD]: level52HardWeaponParts,
}


export const level52EnhancedData = {
  levelId: 'level-5-2',
  characterName: '钢臂力士',
  theme: '五、100以内笔算加减法 - 第2课时:两位数减两位数（不退位）',
  vehicleForm: '神钢KMG5220清障起重机',
  weapons: ['神力圣刃', '神力钢臂'],
  ultimateSkills: ['横扫千军', '强力暴击', '神力巨盾'],
  themeColor: '绿松石',
  difficulty: 4,
  rarity: '金边',
  questionsByDifficulty: level52QuestionsByDifficulty,
  weaponPartsByDifficulty: level52WeaponPartsByDifficulty,
}
