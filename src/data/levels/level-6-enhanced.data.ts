import type { Question, QuestionType, WeaponPart } from '@/types'
import { DifficultyLevel } from '@/types'

/**
 * 关卡 6 新手难度题目:星际穿梭
 * 主题:六、数量间的加减关系 - 全单元:部分与整体
 * 角色:星际游侠- 三菱帕杰罗三门越野SUV - 金色 - 百炼钢鞭、缠绕脉冲、破空鞭击、星际穿梭
 */
export const level6EasyQuestions: Question[] = [
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '班级有男生23人，女生18人，全班共几人？',
    options: [
      { id: 'a', text: '31人' },
      { id: 'b', text: '41人' },
      { id: 'c', text: '51人' },
      { id: 'd', text: '61人' },
    ],
    correctAnswer: 'b',
    explanation: '23 + 18 = 41人！男生人数 + 女生人数 = 全班人数。',
    hint: '部分 + 部分 = 整体',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '全班41人，男生23人，女生几人？',
    options: [
      { id: 'a', text: '18人' },
      { id: 'b', text: '28人' },
      { id: 'c', text: '38人' },
      { id: 'd', text: '11人' },
    ],
    correctAnswer: 'a',
    explanation: '41 - 23 = 18人！全班人数 - 男生人数 = 女生人数。',
    hint: '整体 - 部分 = 另一部分',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '一班41人，二班比一班多5人，二班几人？',
    options: [
      { id: 'a', text: '36人' },
      { id: 'b', text: '46人' },
      { id: 'c', text: '56人' },
      { id: 'd', text: '45人' },
    ],
    correctAnswer: 'b',
    explanation: '41 + 5 = 46人！一班人数 + 相差数 = 二班人数。',
    hint: '小数 + 相差数 = 大数',
  },
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '图书角有56本书，借出28本，又还回15本，现在有{{___}}本书。',
    answer: ['43'],
    explanation: '56 - 28 + 15 = 43本！先算56-28=28，再算28+15=43。',
    hint: '原有的减去借出的，再加还回的',
  },
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '你有50元零花钱，想给妈妈买礼物，可以怎么花？设计一个方案。下面哪些方案合理？',
    options: [
      { id: 'a', text: '买花20元 + 买卡片15元 + 买巧克力15元 = 50元' },
      { id: 'b', text: '买花30元 + 买卡片20元 = 50元' },
      { id: 'c', text: '买花35元 + 买卡片20元 = 55元' },
      { id: 'd', text: '买花28元 + 买卡片25元 = 53元' },
    ],
    correctAnswers: ['a', 'b'],
    explanation: 'A: 20+15+15=50元，刚好用完预算 ✅; B: 30+20=50元，刚好用完预算 ✅; C: 35+20=55元，超预算5元 ❌; D: 28+25=53元，超预算3元 ❌。所以A和B合理！',
    hint: '计算每个方案的总金额，不超过50元才合理',
  },
]

export const level6MediumQuestions: Question[] = [
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '星际游侠总能量是100，第一组用了42个能量，第二组用了33个能量，第三组用了{{___}}个能量。',
    answer: ['25'],
    explanation: '100 - 42 - 33 = 25！先用总能量减去第一组:100-42=58，再减去第二组:58-33=25。',
    hint: '用总能量减去前两组',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '星际游侠的能量等级是87，炫蓝闪电比星际游侠少25个能量，深海霸王比炫蓝闪电多12个能量。深海霸王的能量等级是多少？',
    options: [
      { id: 'a', text: '64' },
      { id: 'b', text: '74' },
      { id: 'c', text: '84' },
      { id: 'd', text: '77' },
    ],
    correctAnswer: 'b',
    explanation: '先算炫蓝闪电:87 - 25 = 62；再算深海霸王:62 + 12 = 74！深海霸王的能量等级是74。',
    hint: '先算炫蓝闪电的能量等级，再算深海霸王的能量等级',
  },
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '星际游侠有90个能量，发射星际穿梭用了35个能量，又补充了22个能量。下面哪些说法正确？',
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
    question: '班级有35人，今天请假5人，实际到校多少人？',
    options: [
      { id: 'a', text: '30人' },
      { id: 'b', text: '40人' },
      { id: 'c', text: '25人' },
      { id: 'd', text: '31人' },
    ],
    correctAnswer: 'a',
    explanation: '35 - 5 = 30人！全班人数 - 请假人数 = 到校人数。',
    hint: '整体 - 部分 = 另一部分',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '星际游侠的战斗时间是100分钟，破空鞭击用了35分钟，缠绕脉冲用了27分钟，星际穿梭用了_分钟，总共正好100分钟。',
    options: [
      { id: 'a', text: '38' },
      { id: 'b', text: '28' },
      { id: 'c', text: '48' },
      { id: 'd', text: '58' },
    ],
    correctAnswer: 'a',
    explanation: '100 - 35 - 27 = 38！先用总时间减去破空鞭击:100-35=65，再减去缠绕脉冲:65-27=38。',
    hint: '用总时间减去前两项',
  },
]

export const level6HardQuestions: Question[] = [
  {
    type: 'drag' as QuestionType.DRAG,
    question: '小明有50元，买了一本书12元5角，又买了一支笔5元3角，又买了一个本子8元2角，还剩多少钱？把购买物品拖到计算区。',
    instruction: '把购买物品拖到计算区，计算剩余金额。',
    items: [
      { id: 'book', name: '书 12元5角' },
      { id: 'pen', name: '笔 5元3角' },
      { id: 'notebook', name: '本子 8元2角' },
    ],
    targets: [
      { id: 'calc', name: '计算区', accepts: ['book', 'pen', 'notebook'], position: { x: 200, y: 150 }, size: { width: 280, height: 180 } },
    ],
    calculation: {
      type: 'difference',
      values: [50, 12.5, 5.3, 8.2],
      result: 24,
      label: '剩余',
      unit: '元',
    },
    explanation: '50元 - 12元5角 - 5元3角 - 8元2角 = 24元！先算12元5角+5元3角+8元2角=26元，再算50元-26元=24元。',
    hint: '先算总共花了多少，再算剩余',
  },
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '星际游侠总能量是85，第一组用了38个能量，第二组用了22个能量，第三组用了{{___}}个能量。',
    answer: ['25'],
    explanation: '85 - 38 - 22 = 25！先用总能量减去第一组:85-38=47，再减去第二组:47-22=25。',
    hint: '用总能量减去前两组',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '商店促销：买2件商品打9折，买3件商品打8折。小明买了3件商品原价共30元，实际需要付多少钱？',
    options: [
      { id: 'a', text: '27元' },
      { id: 'b', text: '24元' },
      { id: 'c', text: '30元' },
      { id: 'd', text: '25元' },
    ],
    correctAnswer: 'b',
    explanation: '买3件商品打8折，30元 × 0.8 = 24元！实际需要付24元。',
    hint: '原价30元，打8折就是乘以0.8',
  },
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '班级组织春游，共有学生52人。分成4组，每组人数可能是多少？下面哪些分组合理？',
    options: [
      { id: 'a', text: '每组13人' },
      { id: 'b', text: '第一组12人，第二组13人，第三组14人，第四组13人' },
      { id: 'c', text: '每组15人' },
      { id: 'd', text: '第一组10人，第二组10人，第三组10人，第四组22人' },
    ],
    correctAnswers: ['a', 'b', 'd'],
    explanation: 'A: 13×4=52 ✅; B: 12+13+14+13=52 ✅; C: 15×4=60 ❌; D: 10+10+10+22=52 ✅',
    hint: '每组人数加起来等于全班人数',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '按规律填数:1、1、2、3、5、8、_（斐波那契数列）',
    options: [
      { id: 'a', text: '10' },
      { id: 'b', text: '11' },
      { id: 'c', text: '12' },
      { id: 'd', text: '13' },
    ],
    correctAnswer: 'd',
    explanation: '规律是前两个数相加等于后一个数：1+1=2，1+2=3，2+3=5，3+5=8，5+8=13！',
    hint: '这是斐波那契数列',
  },
]

export const level6QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level6EasyQuestions,
  [DifficultyLevel.MEDIUM]: level6MediumQuestions,
  [DifficultyLevel.HARD]: level6HardQuestions,
}

export const level6EasyWeaponParts: WeaponPart[] = [
  { id: 'easy-star-core', name: '星际探测核心', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'easy-star-nav', name: '星际导航仪', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'easy-star-head', name: '星际穿梭头', shapeType: 'triangle', iconImage: '/assets/weapons/光能护盾.png' },
  { id: 'easy-star-pipe', name: '星际穿梭管', shapeType: 'square', iconImage: '/assets/weapons/光能外壳.png' },
  { id: 'easy-star-complete', name: '星际穿梭完成', shapeType: 'composite', iconImage: '/assets/weapons/easy-weapon.png' },
]

export const level6MediumWeaponParts: WeaponPart[] = [
  { id: 'med-star-core', name: '星际探测核心', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'med-star-loc', name: '星际定位器', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'med-star-armor', name: '星际装甲板', shapeType: 'square', iconImage: '/assets/weapons/光能护盾.png' },
  { id: 'med-star-meter', name: '星际计量管', shapeType: 'square', iconImage: '/assets/weapons/光能外壳.png' },
  { id: 'med-star-cannon', name: '星际游侠战炮完成', shapeType: 'composite', iconImage: '/assets/weapons/medium-weapon.png' },
]

export const level6HardWeaponParts: WeaponPart[] = [
  { id: 'hard-star-partner', name: '伙伴星际核心', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'hard-star-fair', name: '星际公平仪', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'hard-star-sys', name: '星际穿梭系统', shapeType: 'square', iconImage: '/assets/weapons/光能护盾.png' },
  { id: 'hard-star-armor', name: '星际装甲管', shapeType: 'square', iconImage: '/assets/weapons/光能外壳.png' },
  { id: 'hard-star-ult', name: '星际游侠终极炮完成', shapeType: 'composite', iconImage: '/assets/weapons/hard-weapon.png' },
]

export const level6WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level6EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level6MediumWeaponParts,
  [DifficultyLevel.HARD]: level6HardWeaponParts,
}


export const level6EnhancedData = {
  levelId: 'level-6',
  characterName: '星际游侠',
  theme: '六、数量间的加减关系 - 全单元:部分与整体',
  vehicleForm: '三菱帕杰罗三门越野SUV',
  weapons: ['百炼钢鞭'],
  ultimateSkills: ['缠绕脉冲', '破空鞭击', '星际穿梭'],
  themeColor: '金色',
  difficulty: 5,
  rarity: '炫彩边',
  questionsByDifficulty: level6QuestionsByDifficulty,
  weaponPartsByDifficulty: level6WeaponPartsByDifficulty,
}
