import { getAssetPath } from '@/config/paths.config';
import type { Question, QuestionType, WeaponPart } from '@/types'
import { DifficultyLevel } from '@/types'

/**
 * 关卡 8 新手难度题目:星辰光箭
 * 主题:七、找规律（全单元） - 图形和数字的规律
 * 场景:规律入口,银翼骑士设置找规律考验
 * 难度定位:基础概念理解（图形规律、数字规律、颜色规律）
 * 角色:银翼骑士（Silver Wing Knight）- 波音C-17运输机 - 白色（天空属性） - 天马装甲、圣刃神弓、星辰光箭
 */
export const level8EasyQuestions: Question[] = [
  // 第1题:CHOICE 选择题（图形规律）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '按规律接着画：○△□○△□___',
    options: [
      { id: 'a', text: '○' },
      { id: 'b', text: '△' },
      { id: 'c', text: '□' },
      { id: 'd', text: '◇' },
    ],
    correctAnswer: 'a',
    explanation: '规律是○△□重复，所以下一个是○！三个图形为一组重复。',
    hint: '三个图形为一组重复',
  },

  // 第2题:CHOICE 选择题（数字规律）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '按规律填数：2、4、6、8、___',
    options: [
      { id: 'a', text: '9' },
      { id: 'b', text: '10' },
      { id: 'c', text: '11' },
      { id: 'd', text: '12' },
    ],
    correctAnswer: 'b',
    explanation: '规律是每次加2，所以8+2=10！这是双数数列。',
    hint: '这是双数数列',
  },

  // 第3题:CHOICE 选择题（颜色规律）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '按规律涂色：红黄蓝红黄蓝___',
    options: [
      { id: 'a', text: '红' },
      { id: 'b', text: '黄' },
      { id: 'c', text: '蓝' },
      { id: 'd', text: '绿' },
    ],
    correctAnswer: 'a',
    explanation: '规律是红黄蓝重复，所以下一个是红！三个颜色为一组重复。',
    hint: '三个颜色为一组重复',
  },

  // 第4题:FILL_BLANK 填空题（数字规律）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '按规律填数：5、10、15、20、{{___}}、30',
    answer: ['25'],
    explanation: '规律是每次加5，所以20+5=25！这是5的倍数数列。',
    hint: '这是5的倍数数列',
  },

  // 第5题:CHOICE 选择题（图形数量规律）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '按规律接着画：△ △△ △△△ ___',
    options: [
      { id: 'a', text: '△△' },
      { id: 'b', text: '△△△' },
      { id: 'c', text: '△△△△' },
      { id: 'd', text: '△△△△△' },
    ],
    correctAnswer: 'c',
    explanation: '规律是每次多一个三角形，所以下一个是4个三角形！1个、2个、3个，接下来是4个。',
    hint: '1个、2个、3个，接下来是几个？',
  },
]

/**
 * 关卡 8 挑战难度题目:银翼骑士战炮
 * 主题:七、找规律（全单元） - 图形和数字的规律
 * 场景:规律战场,银翼骑士展开星辰光箭挑战
 * 难度定位:综合应用（复合规律、间隔规律、应用规律）
 * 角色:银翼骑士（Silver Wing Knight）- 波音C-17运输机 - 白色（天空属性） - 天马装甲、圣刃神弓、星辰光箭
 */
export const level8MediumQuestions: Question[] = [
  // 第1题:CHOICE 选择题（复合规律）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '按规律填数：1、1、2、3、5、8、___',
    options: [
      { id: 'a', text: '10' },
      { id: 'b', text: '11' },
      { id: 'c', text: '12' },
      { id: 'd', text: '13' },
    ],
    correctAnswer: 'd',
    explanation: '规律是前两个数相加等于后一个数：1+1=2，1+2=3，2+3=5，3+5=8，5+8=13！这是斐波那契数列。',
    hint: '这是斐波那契数列',
  },

  // 第2题:CHOICE 选择题（交替规律）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '按规律填数：1、10、2、20、3、30、___',
    options: [
      { id: 'a', text: '4' },
      { id: 'b', text: '40' },
      { id: 'c', text: '5' },
      { id: 'd', text: '31' },
    ],
    correctAnswer: 'a',
    explanation: '规律是两个数列交替：第1、3、5个数是1、2、3...；第2、4、6个数是10、20、30...。所以第7个数是4！',
    hint: '这是两个数列交替出现的规律',
  },

  // 第3题:CHOICE 选择题（应用规律）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '小明按"红红黄绿"的顺序串珠子，第17颗珠子是什么颜色？',
    options: [
      { id: 'a', text: '红' },
      { id: 'b', text: '黄' },
      { id: 'c', text: '绿' },
      { id: 'd', text: '蓝' },
    ],
    correctAnswer: 'a',
    explanation: '4颗珠子为一组循环，17÷4=4组余1颗，第17颗和第1颗颜色相同，是红色！',
    hint: '找出一组有几颗，用除法',
  },

  // 第4题:FILL_BLANK 填空题（数字规律）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '按规律填数：3、6、9、12、{{___}}、18',
    answer: ['15'],
    explanation: '规律是每次加3，所以12+3=15！这是3的倍数数列。',
    hint: '这是3的倍数数列',
  },

  // 第5题:CHOICE 选择题（复合规律）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '按规律填数：1、2、4、7、11、___',
    options: [
      { id: 'a', text: '15' },
      { id: 'b', text: '16' },
      { id: 'c', text: '17' },
      { id: 'd', text: '18' },
    ],
    correctAnswer: 'b',
    explanation: '规律是每次加的数递增1：1+1=2，2+2=4，4+3=7，7+4=11，11+5=16！',
    hint: '每次加的数递增1（加1、加2、加3、加4、加5）',
  },
]

/**
 * 关卡 8 高手难度题目:银翼骑士终极炮
 * 主题:七、找规律（全单元） - 图形和数字的规律
 * 场景:天空基地，小俊团队星辰光箭挑战成功
 * 难度定位:拓展挑战（复杂规律、多步规律、应用规律）
 * 角色:银翼骑士（Silver Wing Knight）- 波音C-17运输机 - 白色（天空属性） - 天马装甲、圣刃神弓、星辰光箭、银河穿刺、天马彗星踢
 */
export const level8HardQuestions: Question[] = [
  // 第1题:CHOICE 选择题（复杂规律）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '按规律填数：2、5、10、17、26、___（差递增3、5、7、9）',
    options: [
      { id: 'a', text: '35' },
      { id: 'b', text: '37' },
      { id: 'c', text: '39' },
      { id: 'd', text: '41' },
    ],
    correctAnswer: 'b',
    explanation: '规律是差递增：2+3=5，5+5=10，10+7=17，17+9=26，26+11=37。差的规律是3、5、7、9、11。',
    hint: '每次加的数递增2（3、5、7、9、11）',
  },

  // 第2题:FILL_BLANK 填空题（多步规律）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '按规律填数：1、4、9、16、{{___}}、36（平方数列）',
    answer: ['25'],
    explanation: '规律是平方数列：1²=1，2²=4，3²=9，4²=16，5²=25，6²=36！',
    hint: '这是平方数列（1×1=1，2×2=4，3×3=9...）',
  },

  // 第3题:CHOICE 选择题（应用规律）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '小明按"红黄蓝绿红黄蓝绿"的顺序串珠子，第25颗珠子是什么颜色？',
    options: [
      { id: 'a', text: '红' },
      { id: 'b', text: '黄' },
      { id: 'c', text: '蓝' },
      { id: 'd', text: '绿' },
    ],
    correctAnswer: 'a',
    explanation: '4颗珠子为一组循环，25÷4=6组余1颗，第25颗和第1颗颜色相同，是红色！',
    hint: '找出一组有几颗，用除法，余数对应位置',
  },

  // 第4题:MULTI_SELECT 多选题（规律识别）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '下面哪些数列的规律是"每次加5"？',
    options: [
      { id: 'a', text: '5、10、15、20、25' },
      { id: 'b', text: '10、15、20、25、30' },
      { id: 'c', text: '3、8、13、18、23' },
      { id: 'd', text: '2、4、6、8、10' },
    ],
    correctAnswers: ['a', 'b', 'c'],
    explanation: 'A: 5+5=10 ✅; B: 10+5=15 ✅; C: 3+5=8 ✅; D: 2+2=4 ❌（每次加2）',
    hint: '检查每个数列的差是否都是5',
  },

  // 第5题:CHOICE 选择题（复杂规律）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '按规律填数：1、3、6、10、15、___（每次加的数递增1）',
    options: [
      { id: 'a', text: '20' },
      { id: 'b', text: '21' },
      { id: 'c', text: '22' },
      { id: 'd', text: '23' },
    ],
    correctAnswer: 'b',
    explanation: '规律是每次加的数递增1：1+2=3，3+3=6，6+4=10，10+5=15，15+6=21！',
    hint: '每次加的数递增1（加2、加3、加4、加5、加6）',
  },
]

/**
 * 按难度分组的题目
 */
export const level8QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level8EasyQuestions,
  [DifficultyLevel.MEDIUM]: level8MediumQuestions,
  [DifficultyLevel.HARD]: level8HardQuestions,
}

/**
 * 关卡 8 新手模式武器零件:星辰光箭（5个零件）
 */
export const level8EasyWeaponParts: WeaponPart[] = [
  { id: 'easy-star-core', name: '星辰探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'easy-star-navigator', name: '星辰导航仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'easy-star-arrow-head', name: '星辰光箭头', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'easy-star-traverse-pipe', name: '星辰穿梭管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'easy-star-arrow-complete', name: '星辰光箭完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/easy-weapon.png') },
]

/**
 * 关卡 8 挑战模式武器零件:银翼骑士战炮（5个零件）
 */
export const level8MediumWeaponParts: WeaponPart[] = [
  { id: 'medium-star-core', name: '星辰探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'medium-star-locator', name: '星辰定位器', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'medium-star-armor-plate', name: '星辰装甲板', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'medium-star-meter-pipe', name: '星辰计量管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'medium-silver-knight-cannon-complete', name: '银翼骑士战炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/medium-weapon.png') },
]

/**
 * 关卡 8 高手模式武器零件:银翼骑士终极炮（5个零件）
 */
export const level8HardWeaponParts: WeaponPart[] = [
  { id: 'hard-partner-star-core', name: '伙伴星辰核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'hard-star-fairness', name: '星辰公平仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'hard-star-storm-system', name: '星辰风暴系统', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'hard-star-armor-pipe', name: '星辰装甲管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'hard-silver-knight-ultimate-cannon-complete', name: '银翼骑士终极炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/hard-weapon.png') },
]

/**
 * 按难度分组的武器零件
 */
export const level8WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level8EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level8MediumWeaponParts,
  [DifficultyLevel.HARD]: level8HardWeaponParts,
}

/**
 * 关卡 8 故事气泡配置
 */

/**
 * 关卡 8 完整配置
 */
export const level8EnhancedData = {
  levelId: 'level-8',
  characterName: '银翼骑士',
  characterEnglishName: 'Silver Wing Knight',
  theme: '七、找规律（全单元）',
  vehicleForm: '波音C-17涡轮机翼运输机',
  weapons: ['天马装甲', '圣刃神弓'],
  ultimateSkills: ['星辰光箭', '银河穿刺', '天马彗星踢'],
  themeColor: '白色（天空属性）',
  difficulty: 5,
  rarity: '彩虹边',
  questionsByDifficulty: level8QuestionsByDifficulty,
  weaponPartsByDifficulty: level8WeaponPartsByDifficulty,
}
