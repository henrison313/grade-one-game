import { getAssetPath } from '@/config/paths.config';
import type { Question, QuestionType, WeaponPart } from '@/types'
import { DifficultyLevel } from '@/types'

/**
 * 关卡 7-1 新手难度题目:爆旋轰钻
 * 主题:七、欢乐购物街 - 第1课时:认识人民币
 * 角色:爆旋洛克- 钻探机 - 红+深蓝色 - 重装战铠、百万巨钻、爆旋轰钻、冻结射线、爆旋防护
 */
export const level71EasyQuestions: Question[] = [
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '人民币的单位有哪些？',
    options: [
      { id: 'a', text: '元、角、分' },
      { id: 'b', text: '米、分米、厘米' },
      { id: 'c', text: '千克、克' },
      { id: 'd', text: '时、分、秒' },
    ],
    correctAnswer: 'a',
    explanation: '人民币的单位有元、角、分！元是最大的单位，分是最小的单位。',
    hint: '元是最大的单位，分是最小的单位',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '1元等于多少角？',
    options: [
      { id: 'a', text: '5角' },
      { id: 'b', text: '8角' },
      { id: 'c', text: '10角' },
      { id: 'd', text: '100角' },
    ],
    correctAnswer: 'c',
    explanation: '1元 = 10角！',
    hint: '1元等于10角',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '1角等于多少分？',
    options: [
      { id: 'a', text: '5分' },
      { id: 'b', text: '10分' },
      { id: 'c', text: '50分' },
      { id: 'd', text: '100分' },
    ],
    correctAnswer: 'b',
    explanation: '1角 = 10分！',
    hint: '1角等于10分',
  },
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '3元 = {{___}}角',
    answer: ['30'],
    explanation: '3元 = 30角！1元=10角，3元就是3个10角，等于30角。',
    hint: '1元是10角，3元是几个10角？',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '2元5角等于多少角？',
    options: [
      { id: 'a', text: '20角' },
      { id: 'b', text: '25角' },
      { id: 'c', text: '30角' },
      { id: 'd', text: '35角' },
    ],
    correctAnswer: 'b',
    explanation: '2元5角 = 25角！2元=20角，20角+5角=25角。',
    hint: '先把元换算成角，再加角',
  },
]

export const level71MediumQuestions: Question[] = [
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '一支铅笔8角钱，小明拿了1元钱去买，应该找回多少钱？',
    options: [
      { id: 'a', text: '1角' },
      { id: 'b', text: '2角' },
      { id: 'c', text: '3角' },
      { id: 'd', text: '4角' },
    ],
    correctAnswer: 'b',
    explanation: '应该找回2角！1元=10角，10角-8角=2角。',
    hint: '1元等于10角，减去8角',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '5元2角等于多少角？',
    options: [
      { id: 'a', text: '52角' },
      { id: 'b', text: '50角' },
      { id: 'c', text: '55角' },
      { id: 'd', text: '52分' },
    ],
    correctAnswer: 'a',
    explanation: '5元2角 = 52角！5元=50角，50角+2角=52角。',
    hint: '先把元换算成角，再加角',
  },
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '买4元5角的文具，付了5元，应该找回{{___}}角。',
    answer: ['5'],
    explanation: '5元 - 4元5角 = 5角！5元=50角，4元5角=45角，50角-45角=5角。',
    hint: '把元换算成角再计算',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '小明有10元，买了一本书6元5角，又买了一支笔2元3角，一共花了多少钱？',
    options: [
      { id: 'a', text: '8元8角' },
      { id: 'b', text: '8元5角' },
      { id: 'c', text: '9元8角' },
      { id: 'd', text: '7元8角' },
    ],
    correctAnswer: 'a',
    explanation: '6元5角 + 2元3角 = 8元8角！6元+2元=8元，5角+3角=8角。',
    hint: '分别计算元和角，再相加',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '爆旋洛克的钻探时间是78分钟，冻结射线用了56分钟，还剩_分钟的钻探时间。',
    options: [
      { id: 'a', text: '22分钟' },
      { id: 'b', text: '23分钟' },
      { id: 'c', text: '24分钟' },
      { id: 'd', text: '25分钟' },
    ],
    correctAnswer: 'a',
    explanation: '78 - 56 = 22！个位8-6=2，十位7-5=2，等于22。',
    hint: '用原来的时间减去使用的时间',
  },
]

export const level71HardQuestions: Question[] = [
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '爆旋洛克总能量是92，第一组用了40个能量，第二组用了27个能量，第三组用了{{___}}个能量。',
    answer: ['25'],
    explanation: '92 - 40 - 27 = 25！先用总能量减去第一组:92-40=52，再减去第二组:52-27=25。',
    hint: '用总能量减去前两组',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '买9元8角的文具，付了20元，应该找回多少钱？',
    options: [
      { id: 'a', text: '10元2角' },
      { id: 'b', text: '10元' },
      { id: 'c', text: '11元2角' },
      { id: 'd', text: '9元2角' },
    ],
    correctAnswer: 'a',
    explanation: '20元 - 9元8角 = 10元2角！20元=20元0角，20元0角-9元8角=10元2角。',
    hint: '把元和角分开计算',
  },
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '小明有25元，想买3件不同的文具，下面哪些方案可行？',
    options: [
      { id: 'a', text: '书10元 + 笔8元 + 本子7元 = 25元' },
      { id: 'b', text: '书12元 + 笔10元 + 本子5元 = 27元' },
      { id: 'c', text: '书8元 + 笔6元5角 + 本子10元5角 = 25元' },
      { id: 'd', text: '书15元 + 笔5元 + 本子6元 = 26元' },
    ],
    correctAnswers: ['a', 'c'],
    explanation: 'A: 10+8+7=25元 ✅; B: 12+10+5=27元 ❌(超过25元); C: 8+6.5+10.5=25元 ✅; D: 15+5+6=26元 ❌(超过25元)',
    hint: '计算每个方案的总金额，不超过25元',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '爆旋洛克去超市购物，买了3件商品：牛奶12元、面包8元5角、饼干9元3角。他付了50元，应该找回多少钱？',
    options: [
      { id: 'a', text: '20元2角' },
      { id: 'b', text: '19元2角' },
      { id: 'c', text: '21元2角' },
      { id: 'd', text: '20元' },
    ],
    correctAnswer: 'a',
    explanation: '爆旋洛克："先算总价：12元+8元5角+9元3角=29元8角；再算找零：50元-29元8角=20元2角！购物计算成功！"',
    hint: '先算出三件商品的总价，再用50元减去',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '1元等于多少分？',
    options: [
      { id: 'a', text: '10分' },
      { id: 'b', text: '50分' },
      { id: 'c', text: '100分' },
      { id: 'd', text: '1000分' },
    ],
    correctAnswer: 'c',
    explanation: '1元 = 100分！1元=10角，1角=10分，所以1元=10×10=100分。',
    hint: '1元=10角，1角=10分，所以1元=100分',
  },
]

export const level71QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level71EasyQuestions,
  [DifficultyLevel.MEDIUM]: level71MediumQuestions,
  [DifficultyLevel.HARD]: level71HardQuestions,
}

export const level71EasyWeaponParts: WeaponPart[] = [
  { id: 'easy-drill-core', name: '爆旋探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'easy-drill-nav', name: '爆旋导航仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'easy-drill-head', name: '爆旋轰钻头', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'easy-drill-pipe', name: '爆旋穿梭管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'easy-drill-complete', name: '爆旋轰钻完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/easy-weapon.png') },
]

export const level71MediumWeaponParts: WeaponPart[] = [
  { id: 'med-drill-core', name: '爆旋探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'med-drill-loc', name: '爆旋定位器', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'med-drill-armor', name: '爆旋装甲板', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'med-drill-meter', name: '爆旋计量管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'med-drill-cannon', name: '爆旋洛克战炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/medium-weapon.png') },
]

export const level71HardWeaponParts: WeaponPart[] = [
  { id: 'hard-drill-partner', name: '伙伴爆旋核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'hard-drill-fair', name: '爆旋公平仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'hard-drill-sys', name: '爆旋轰钻系统', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'hard-drill-armor', name: '爆旋装甲管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'hard-drill-ult', name: '爆旋洛克终极炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/hard-weapon.png') },
]

export const level71WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level71EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level71MediumWeaponParts,
  [DifficultyLevel.HARD]: level71HardWeaponParts,
}


export const level71EnhancedData = {
  levelId: 'level-7-1',
  characterName: '爆旋洛克',
  theme: '七、欢乐购物街 - 第1课时:认识人民币',
  vehicleForm: '钻探机',
  weapons: ['重装战铠', '百万巨钻'],
  ultimateSkills: ['爆旋轰钻', '冻结射线', '爆旋防护'],
  themeColor: '红+深蓝色',
  difficulty: 3,
  rarity: '金边',
  questionsByDifficulty: level71QuestionsByDifficulty,
  weaponPartsByDifficulty: level71WeaponPartsByDifficulty,
}
