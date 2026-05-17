import { getAssetPath } from '@/config/paths.config';
import type { Question, QuestionType, WeaponPart } from '@/types'
import { DifficultyLevel } from '@/types'

/**
 * 关卡 5-1 新手难度题目:疾风猛击
 * 主题:五、100以内笔算加减法 - 第1课时:两位数加两位数（不进位）
 * 角色:猎空悍将- 雅克-130战斗机 - 湖蓝色 - 超音双枪、疾风猛击
 */
export const level51EasyQuestions: Question[] = [
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '23 + 45 = ?',
    options: [
      { id: 'a', text: '58' },
      { id: 'b', text: '68' },
      { id: 'c', text: '78' },
      { id: 'd', text: '88' },
    ],
    correctAnswer: 'b',
    explanation: '23 + 45 = 68！个位3+5=8，十位2+4=6，所以是68。',
    hint: '个位加个位，十位加十位',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '34 + 52 = ?',
    options: [
      { id: 'a', text: '76' },
      { id: 'b', text: '86' },
      { id: 'c', text: '96' },
      { id: 'd', text: '66' },
    ],
    correctAnswer: 'b',
    explanation: '34 + 52 = 86！个位4+2=6，十位3+5=8，所以是86。',
    hint: '个位加个位，十位加十位',
  },
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '用竖式计算41 + 25，个位是{{___}}，十位是{{___}}',
    answer: ['6', '6'],
    explanation: '41 + 25 = 66！个位1+5=6，十位4+2=6。',
    hint: '从个位加起',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '56 + 23 = ?',
    options: [
      { id: 'a', text: '69' },
      { id: 'b', text: '79' },
      { id: 'c', text: '89' },
      { id: 'd', text: '99' },
    ],
    correctAnswer: 'b',
    explanation: '56 + 23 = 79！个位6+3=9，十位5+2=7，所以是79。',
    hint: '个位加个位，十位加十位',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '一班有32人，二班有45人，两个班一共有多少人？',
    options: [
      { id: 'a', text: '67人' },
      { id: 'b', text: '77人' },
      { id: 'c', text: '87人' },
      { id: 'd', text: '97人' },
    ],
    correctAnswer: 'b',
    explanation: '32 + 45 = 77人！个位2+5=7，十位3+4=7，所以是77。',
    hint: '把两个班的人数加起来',
  },
]

export const level51MediumQuestions: Question[] = [
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '47 + 32 = ?',
    options: [
      { id: 'a', text: '69' },
      { id: 'b', text: '79' },
      { id: 'c', text: '89' },
      { id: 'd', text: '75' },
    ],
    correctAnswer: 'b',
    explanation: '47 + 32 = 79！个位7+2=9，十位4+3=7，所以是79。',
    hint: '个位加个位，十位加十位',
  },
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '63 + 24 = {{___}}',
    answer: ['87'],
    explanation: '63 + 24 = 87！个位3+4=7，十位6+2=8，所以是87。',
    hint: '个位加个位，十位加十位',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '51 + 38 = ?',
    options: [
      { id: 'a', text: '79' },
      { id: 'b', text: '89' },
      { id: 'c', text: '99' },
      { id: 'd', text: '81' },
    ],
    correctAnswer: 'b',
    explanation: '51 + 38 = 89！个位1+8=9，十位5+3=8，所以是89。',
    hint: '个位加个位，十位加十位',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '猎空悍将原有86个能量，发射疾风猛击用了一些后还剩52个，用了_个能量。',
    options: [
      { id: 'a', text: '34' },
      { id: 'b', text: '44' },
      { id: 'c', text: '54' },
      { id: 'd', text: '64' },
    ],
    correctAnswer: 'a',
    explanation: '86 - 52 = 34！个位6-2=4，十位8-5=3，等于34。用了34个能量。',
    hint: '用原来的能量减去剩余的能量',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '猎空悍将的能量等级是87，普通版的能量等级是65。猎空悍将比普通版多多少能量？',
    options: [
      { id: 'a', text: '22' },
      { id: 'b', text: '21' },
      { id: 'c', text: '23' },
      { id: 'd', text: '24' },
    ],
    correctAnswer: 'a',
    explanation: '87 - 65 = 22！个位7-5=2，十位8-6=2，等于22。',
    hint: '用猎空悍将的能量减去普通版的能量',
  },
]

export const level51HardQuestions: Question[] = [
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '猎空悍将总能量是95，第一组用了32个能量，第二组用了28个能量，第三组用了{{___}}个能量。',
    answer: ['35'],
    explanation: '95 - 32 - 28 = 35！先用总能量减去第一组:95-32=63，再减去第二组:63-28=35。',
    hint: '用总能量减去前两组',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '猎空悍将的能量等级是90，炫蓝闪电比猎空悍将少25个能量，深海霸王比炫蓝闪电多12个能量。深海霸王的能量等级是多少？',
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
    question: '猎空悍将有90个能量，发射疾风猛击用了35个能量，又补充了22个能量。下面哪些说法正确？',
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
    question: '按规律填数:23、45、67、89、_',
    options: [
      { id: 'a', text: '101' },
      { id: 'b', text: '111' },
      { id: 'c', text: '99' },
      { id: 'd', text: '109' },
    ],
    correctAnswer: 'b',
    explanation: '89 + 22 = 111！规律每次加22：23+22=45，45+22=67，67+22=89，89+22=111。',
    hint: '找出相邻两数的差',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '猎空悍将的战斗时间是80分钟，疾风猛击用了25分钟，追踪爆弹用了18分钟，狂暴扫射用了_分钟，总共正好80分钟。',
    options: [
      { id: 'a', text: '37' },
      { id: 'b', text: '27' },
      { id: 'c', text: '47' },
      { id: 'd', text: '57' },
    ],
    correctAnswer: 'a',
    explanation: '80 - 25 - 18 = 37！先用总时间减去疾风猛击:80-25=55，再减去追踪爆弹:55-18=37。',
    hint: '用总时间减去前两项',
  },
]

export const level51QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level51EasyQuestions,
  [DifficultyLevel.MEDIUM]: level51MediumQuestions,
  [DifficultyLevel.HARD]: level51HardQuestions,
}

export const level51EasyWeaponParts: WeaponPart[] = [
  { id: 'easy-sky-core', name: '疾风探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'easy-sky-nav', name: '疾风导航仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'easy-sky-head', name: '疾风猛击头', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'easy-sky-pipe', name: '疾风穿梭管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'easy-sky-complete', name: '疾风猛击完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/easy-xuanlan-shandian-light.png') },
]

export const level51MediumWeaponParts: WeaponPart[] = [
  { id: 'med-sky-core', name: '疾风探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'med-sky-loc', name: '疾风定位器', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'med-sky-armor', name: '疾风装甲板', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'med-sky-meter', name: '疾风计量管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'med-sky-cannon', name: '猎空悍将战炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/medium-xuanlan-shandian-bolt.png') },
]

export const level51HardWeaponParts: WeaponPart[] = [
  { id: 'hard-sky-partner', name: '伙伴疾风核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'hard-sky-fair', name: '疾风公平仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'hard-sky-sys', name: '疾风猛击系统', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'hard-sky-armor', name: '疾风装甲管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'hard-sky-ult', name: '猎空悍将终极炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/hard-xuanlan-shandian-thunder.png') },
]

export const level51WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level51EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level51MediumWeaponParts,
  [DifficultyLevel.HARD]: level51HardWeaponParts,
}


export const level51EnhancedData = {
  levelId: 'level-5-1',
  characterName: '猎空悍将',
  theme: '五、100以内笔算加减法 - 第1课时:两位数加两位数（不进位）',
  vehicleForm: '雅克-130战斗机',
  weapons: ['超音双枪'],
  ultimateSkills: ['疾风猛击', '追踪爆弹', '狂暴扫射'],
  themeColor: '湖蓝色',
  difficulty: 4,
  rarity: '金边',
  questionsByDifficulty: level51QuestionsByDifficulty,
  weaponPartsByDifficulty: level51WeaponPartsByDifficulty,
}
