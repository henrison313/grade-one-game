import { getAssetPath } from '@/config/paths.config';
import type { Question, QuestionType, WeaponPart } from '@/types'
import { DifficultyLevel } from '@/types'

/**
 * 关卡 7-2 新手难度题目:海王之怒
 * 主题:七、欢乐购物街 - 第2课时:买卖我做主
 * 角色:深海霸王- 潜水艇 - 深蓝色 - 海王神戟、深渊加农炮、海王激光、海王漩涡、海王之怒
 */
export const level72EasyQuestions: Question[] = [
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '买一个本子3元5角，一支笔2元，一共需要多少钱？',
    options: [
      { id: 'a', text: '5元' },
      { id: 'b', text: '5元5角' },
      { id: 'c', text: '6元' },
      { id: 'd', text: '6元5角' },
    ],
    correctAnswer: 'b',
    explanation: '一共需要5元5角！3元5角 + 2元 = 5元5角。元加元，角不变。',
    hint: '元加元，角不变',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '小明有10元钱，买了一个面包花去6元5角，还剩多少钱？',
    options: [
      { id: 'a', text: '3元' },
      { id: 'b', text: '3元5角' },
      { id: 'c', text: '4元' },
      { id: 'd', text: '4元5角' },
    ],
    correctAnswer: 'b',
    explanation: '还剩3元5角！10元 - 6元5角 = 3元5角。10元可以看成9元10角。',
    hint: '10元可以看成9元10角',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪种商品最贵？',
    options: [
      { id: 'a', text: '橡皮8角' },
      { id: 'b', text: '铅笔1元2角' },
      { id: 'c', text: '本子9角' },
      { id: 'd', text: '尺子1元' },
    ],
    correctAnswer: 'b',
    explanation: '铅笔最贵！1元2角 > 1元 > 9角 > 8角。先比较元，再比较角。',
    hint: '先比较元，再比较角',
  },
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '买一个文具盒需要15元，可以付{{___}}张10元和{{___}}张1元',
    answer: ['1', '5'],
    explanation: '可以付1张10元和5张1元！10元 + 5元 = 15元。',
    hint: '15可以分成10和5',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '小红买了一个书包花了48元，她付了50元，应该找回多少钱？',
    options: [
      { id: 'a', text: '1元' },
      { id: 'b', text: '2元' },
      { id: 'c', text: '3元' },
      { id: 'd', text: '4元' },
    ],
    correctAnswer: 'b',
    explanation: '应该找回2元！50元 - 48元 = 2元。',
    hint: '付的钱减去花的钱',
  },
]

export const level72MediumQuestions: Question[] = [
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '小亮想买一辆35元的玩具车，他已经存了20元，还需要存多少钱？',
    options: [
      { id: 'a', text: '10元' },
      { id: 'b', text: '15元' },
      { id: 'c', text: '20元' },
      { id: 'd', text: '25元' },
    ],
    correctAnswer: 'b',
    explanation: '还需要存15元！35元 - 20元 = 15元。',
    hint: '总价减去已存的',
  },
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '买9元8角的文具，付了20元，应该找回{{___}}元{{___}}角。',
    answer: ['10', '2'],
    explanation: '20元 - 9元8角 = 10元2角！20元=20元0角，20元0角 - 9元8角 = 10元2角。',
    hint: '把元和角分开计算',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '深海霸王去海洋商店购物，原有96元，买了一些海王纪念品后还剩52元，花了多少钱？',
    options: [
      { id: 'a', text: '34元' },
      { id: 'b', text: '44元' },
      { id: 'c', text: '54元' },
      { id: 'd', text: '64元' },
    ],
    correctAnswer: 'b',
    explanation: '深海霸王："96 - 52 = 44元！买了44元的海王纪念品！"',
    hint: '用原来的钱减去剩余的钱',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '商店有四种商品：橡皮5角、铅笔1元5角、本子2元、尺子1元8角。按价格从低到高排列正确的是？',
    options: [
      { id: 'a', text: '橡皮、铅笔、本子、尺子' },
      { id: 'b', text: '橡皮、铅笔、尺子、本子' },
      { id: 'c', text: '铅笔、橡皮、尺子、本子' },
      { id: 'd', text: '本子、尺子、铅笔、橡皮' },
    ],
    correctAnswer: 'b',
    explanation: '橡皮5角 < 铅笔1元5角 < 尺子1元8角 < 本子2元。先比较元，再比较角。',
    hint: '先比较元，再比较角，从低到高排列',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '深海霸王的两件海王收藏品分别值87元和65元，相差多少钱？',
    options: [
      { id: 'a', text: '22元' },
      { id: 'b', text: '21元' },
      { id: 'c', text: '23元' },
      { id: 'd', text: '24元' },
    ],
    correctAnswer: 'a',
    explanation: '深海霸王："87 - 65 = 22元！这两件收藏品相差22元！"',
    hint: '用大数减小数',
  },
]

export const level72HardQuestions: Question[] = [
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '深海霸王在海洋商店购物，总预算是88元，第一件商品花了35元，第二件商品花了30元，第三件商品花了{{___}}元。',
    answer: ['23'],
    explanation: '深海霸王："88 - 35 - 30 = 23元！第三件商品花了23元！"',
    hint: '用总预算减去前两件商品',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '小明有30元，想买3件不同的商品，总花费不超过30元。买了书12元、笔8元，最多还能买_元的商品。',
    options: [
      { id: 'a', text: '8元' },
      { id: 'b', text: '10元' },
      { id: 'c', text: '12元' },
      { id: 'd', text: '15元' },
    ],
    correctAnswer: 'b',
    explanation: '30元 - 12元 - 8元 = 10元！最多还能买10元的商品。',
    hint: '用总金额减去已买商品的金额',
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
    question: '深海霸王去买海王装备，有三件商品：海王头盔28元、海王护腕22元、海王战靴35元。他带了100元，买完三件后还剩多少钱？',
    options: [
      { id: 'a', text: '10元' },
      { id: 'b', text: '15元' },
      { id: 'c', text: '20元' },
      { id: 'd', text: '25元' },
    ],
    correctAnswer: 'b',
    explanation: '深海霸王："三件总价：28+22+35=85元，100-85=15元！还剩15元！"',
    hint: '先算三件商品总价，再用100元减去',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '海洋商店有四种海王纪念品：海王钥匙扣5角、海王徽章1元5角、海王海报2元、海王书签1元8角。小明有5元，想买两件不同的商品，最多能花多少钱？',
    options: [
      { id: 'a', text: '3元5角' },
      { id: 'b', text: '3元8角' },
      { id: 'c', text: '4元' },
      { id: 'd', text: '3元3角' },
    ],
    correctAnswer: 'b',
    explanation: '深海霸王："买最贵的两件：海王海报2元 + 海王书签1元8角 = 3元8角！这是最多的花费！"',
    hint: '选价格最高的两件商品相加',
  },
]

export const level72QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level72EasyQuestions,
  [DifficultyLevel.MEDIUM]: level72MediumQuestions,
  [DifficultyLevel.HARD]: level72HardQuestions,
}

export const level72EasyWeaponParts: WeaponPart[] = [
  { id: 'easy-sea-core', name: '海王探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/weapon-part-1.webp') },
  { id: 'easy-sea-nav', name: '海王导航仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/weapon-part-2.webp') },
  { id: 'easy-sea-head', name: '海王之怒头', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/weapon-part-3.webp') },
  { id: 'easy-sea-pipe', name: '海王穿梭管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/weapon-part-4.webp') },
  { id: 'easy-sea-complete', name: '海王之怒完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/easy-xuanlan-shandian-light.webp') },
]

export const level72MediumWeaponParts: WeaponPart[] = [
  { id: 'med-sea-core', name: '海王探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/weapon-part-1.webp') },
  { id: 'med-sea-loc', name: '海王定位器', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/weapon-part-2.webp') },
  { id: 'med-sea-armor', name: '海王装甲板', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/weapon-part-3.webp') },
  { id: 'med-sea-meter', name: '海王计量管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/weapon-part-4.webp') },
  { id: 'med-sea-cannon', name: '深海霸王战炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/medium-xuanlan-shandian-bolt.webp') },
]

export const level72HardWeaponParts: WeaponPart[] = [
  { id: 'hard-sea-partner', name: '伙伴海王核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/weapon-part-1.webp') },
  { id: 'hard-sea-fair', name: '海王公平仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/weapon-part-2.webp') },
  { id: 'hard-sea-sys', name: '海王之怒系统', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/weapon-part-3.webp') },
  { id: 'hard-sea-armor', name: '海王装甲管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/weapon-part-4.webp') },
  { id: 'hard-sea-ult', name: '深海霸王终极炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/hard-xuanlan-shandian-thunder.webp') },
]

export const level72WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level72EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level72MediumWeaponParts,
  [DifficultyLevel.HARD]: level72HardWeaponParts,
}


export const level72EnhancedData = {
  levelId: 'level-7-2',
  characterName: '深海霸王',
  theme: '七、欢乐购物街 - 第2课时:买卖我做主',
  vehicleForm: '潜水艇',
  weapons: ['海王神戟', '深渊加农炮'],
  ultimateSkills: ['海王激光', '海王漩涡', '海王之怒'],
  themeColor: '深蓝色',
  difficulty: 4,
  rarity: '彩虹边',
  questionsByDifficulty: level72QuestionsByDifficulty,
  weaponPartsByDifficulty: level72WeaponPartsByDifficulty,
}
