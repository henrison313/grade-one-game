import { getAssetPath } from '@/config/paths.config';
import type { Question, QuestionType, WeaponPart } from '@/types'
import { DifficultyLevel } from '@/types'

/**
 * 关卡 4-2 新手难度题目:烈焰轰击
 * 主题:四、100以内口算加减法 - 第2课时:两位数加减整十数
 * 场景:焰龙战神头部故障,小俊用两位数加减整十数考验帮助
 * 难度定位:基础概念理解(两位数加整十数、两位数减整十数、个位不变、十位计算)
 * 角色:焰龙战神(Gigant Rex)- 恐龙形态 - 红色 - 烈焰轰击、火焰弹、地狱火
 */
export const level42EasyQuestions: Question[] = [
  // 第1题:DRAG 拖拽题(两位数加整十数)
  {
    type: 'drag' as QuestionType.DRAG,
    question: '焰龙战神的探测核心需要能量晶体激活。第一块能量晶体有45个能量单位，第二块有30个能量单位。把两块能量晶体拖到探测核心，计算总能量。',
    instruction: '把两块能量晶体拖到探测核心，计算总能量。',
    items: [
      { id: 'crystal1', name: '第一块 45个能量' },
      { id: 'crystal2', name: '第二块 30个能量' },
    ],
    targets: [
      { id: 'total', name: '探测核心总能量', accepts: ['crystal1', 'crystal2'], position: { x: 0, y: 30 }, size: { width: 200, height: 120 } },
    ],
    calculation: {
      type: 'sum',
      values: [45, 30],
      result: 75,
      label: '总能量',
    },
    explanation: '总能量 = 45 + 30 = 75!4个十加3个十等于7个十,70加5等于75。焰龙战神的探测核心激活成功!',
    hint: '十位相加,个位不变',
  },

  // 第2题:FILL_BLANK 填空题(两位数减整十数)
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '焰龙战神的导航仪有68个能量单位,发射火神炮弹用了40个能量,还剩{{___}}个能量单位。',
    answer: ['28'],
    explanation: '68 - 40 = 28!6个十减4个十等于2个十,20加8等于28。焰龙战神的导航仪还剩28个能量!',
    hint: '十位相减,个位不变',
  },

  // 第3题:CHOICE 选择题(两位数加整十数,关注个位)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '焰龙战神的巨钳头需要56个能量,又补充了20个能量,一共需要多少个能量?注意个位上的数字!',
    options: [
      { id: 'a', text: '66' },
      { id: 'b', text: '76' },
      { id: 'c', text: '58' },
      { id: 'd', text: '86' },
    ],
    correctAnswer: 'b',
    explanation: '56 + 20 = 76!5个十加2个十等于7个十,70加6等于76。个位上的6不变!',
    hint: '十位相加,个位6直接落下来',
  },

  // 第4题:CHOICE 选择题(比较大小)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '焰龙战神的能量管需要34个能量,又加入了50个能量。34 + 50 ○ 84,○里应填什么?',
    options: [
      { id: 'a', text: '>' },
      { id: 'b', text: '<' },
      { id: 'c', text: '=' },
      { id: 'd', text: '无法确定' },
    ],
    correctAnswer: 'c',
    explanation: '34 + 50 = 84,所以填 "="!3个十加5个十等于8个十,80加4等于84。能量管能量正好!',
    hint: '先计算34 + 50等于多少',
  },

  // 第5题:CHOICE 选择题(应用题)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '柯星宇在焰龙战神石板旁找到了52个能量块,又发现了30个能量块。他一共找到了多少个能量块?',
    options: [
      { id: 'a', text: '72个' },
      { id: 'b', text: '82个' },
      { id: 'c', text: '92个' },
      { id: 'd', text: '62个' },
    ],
    correctAnswer: 'b',
    explanation: '52 + 30 = 82!5个十加3个十等于8个十,80加2等于82。能量块收集完毕,焰龙战神战炮可以完成了!',
    hint: '先找到的加又发现的',
  },
]

/**
 * 关卡 4-2 挑战难度题目:火焰弹
 * 主题:四、100以内口算加减法 - 第2课时:两位数加减整十数
 * 场景:焰龙战神训练场,小俊用两位数加减整十数帮助焰龙战神恢复
 * 难度定位:综合应用(两位数加减混合、逆向思维、比较关系、多算式验证、找不同)
 * 角色:焰龙战神(Gigant Rex)- 恐龙形态 - 红色 - 烈焰轰击、火焰弹、地狱火
 */
export const level42MediumQuestions: Question[] = [
  // 第1题:DRAG 拖拽题(两位数加整十数组合)
  {
    type: 'drag' as QuestionType.DRAG,
    question: '烈焰探测核心需要收集目标统计数据。第一组数据57个，第二组数据20个。把两组数据拖到目标区域，计算总统计值。',
    instruction: '把两组数据拖到目标区域，计算总统计值。',
    items: [
      { id: 'data1', name: '第一组 57个' },
      { id: 'data2', name: '第二组 20个' },
    ],
    targets: [
      { id: 'total', name: '总统计值', accepts: ['data1', 'data2'], position: { x: 0, y: 30 }, size: { width: 200, height: 120 } },
    ],
    calculation: {
      type: 'sum',
      values: [57, 20],
      result: 77,
      label: '总统计值',
    },
    explanation: '总统计值 = 57 + 20 = 77!5个十加2个十等于7个十,70加7等于77。烈焰探测核心数据收集完毕!',
    hint: '十位相加,个位不变',
  },

  // 第2题:FILL_BLANK 填空题(逆向思维)
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '焰龙战神的计算仪原有77个能量,发射火焰弹后还剩57个能量。火焰弹用了{{___}}个能量。',
    answer: ['20'],
    explanation: '77 - 57 = 20!火焰弹用了20个能量。逆向思维:用原来的能量减去剩余的能量,就是使用的能量。',
    hint: '原来的减去剩余的',
  },

  // 第3题:CHOICE 选择题(比较关系)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '焰龙战神的装甲板能量等级是77,普通恐龙装甲能量等级是55。焰龙战神比普通恐龙装甲多多少能量?',
    options: [
      { id: 'a', text: '12' },
      { id: 'b', text: '22' },
      { id: 'c', text: '32' },
      { id: 'd', text: '20' },
    ],
    correctAnswer: 'b',
    explanation: '77 - 55 = 22!7个十减5个十等于2个十,2个十减2等于22。焰龙战神的装甲板能量远超普通装甲!',
    hint: '用焰龙战神的能量减去普通装甲的能量',
  },

  // 第4题:MULTI_SELECT 多选题(多算式验证)
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '焰龙计量管需要验证哪些算式的结果等于77？选出所有结果等于77的算式。',
    options: [
      { id: 'a', text: '47 + 30' },
      { id: 'b', text: '57 + 20' },
      { id: 'c', text: '67 + 10' },
      { id: 'd', text: '97 - 20' },
    ],
    correctAnswers: ['a', 'b', 'c', 'd'],
    explanation: 'A: 47 + 30 = 77 ✅ (4个十加3个十等于7个十,70加7等于77);B: 57 + 20 = 77 ✅ (5个十加2个十等于7个十,70加7等于77);C: 67 + 10 = 77 ✅ (6个十加1个十等于7个十,70加7等于77);D: 97 - 20 = 77 ✅ (9个十减2个十等于7个十,70加7等于77)。四个算式结果都是77!',
    hint: '逐个计算每个算式的结果',
  },

  // 第5题:CHOICE 选择题(找不同)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '焰龙战神战炮需要四组能量数据结果相同。下面哪一组的计算结果与其他不同？',
    options: [
      { id: 'a', text: '47 + 30' },
      { id: 'b', text: '57 + 20' },
      { id: 'c', text: '77 - 10' },
      { id: 'd', text: '97 - 20' },
    ],
    correctAnswer: 'c',
    explanation: 'C: 77 - 10 = 67,结果不等于77,与其他三组不同!A、B、D的结果都是77,只有C是67。焰龙战神战炮发现问题数据!',
    hint: '逐个计算每个算式的结果,找出不同的那个',
  },
]

/**
 * 关卡 4-2 高手难度题目:地狱火
 * 主题:四、100以内口算加减法 - 第2课时:两位数加减整十数
 * 场景:焰龙战神恢复正常,小俊团队完成终极考验
 * 难度定位:拓展挑战(三数相加、逆向思维、逻辑推理、多步计算、找不同)
 * 角色:焰龙战神(Gigant Rex)- 恐龙形态 - 红色 - 烈焰轰击、火焰弹、地狱火
 */
export const level42HardQuestions: Question[] = [
  // 第1题:DRAG 拖拽题(三数相加)
  {
    type: 'drag' as QuestionType.DRAG,
    question: '伙伴焰龙核心需要三组能量激活。第一组62个能量，第二组25个能量，第三组10个能量。把三组能量拖到目标区域，计算总能量。',
    instruction: '把三组能量拖到目标区域，计算总能量。',
    items: [
      { id: 'energy1', name: '第一组 62个能量' },
      { id: 'energy2', name: '第二组 25个能量' },
      { id: 'energy3', name: '第三组 10个能量' },
    ],
    targets: [
      { id: 'total', name: '伙伴焰龙核心总能量', accepts: ['energy1', 'energy2', 'energy3'], position: { x: 0, y: 30 }, size: { width: 280, height: 200 } },
    ],
    calculation: {
      type: 'sum',
      values: [62, 25, 10],
      result: 97,
      label: '总能量',
    },
    explanation: '总能量 = 62 + 25 + 10 = 97!先算62 + 25 = 87,再算87 + 10 = 97。伙伴焰龙核心激活成功!',
    hint: '先把前两个数相加,再加第三个数',
  },

  // 第2题:FILL_BLANK 填空题(逆向思维)
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '焰龙公平仪总能量是97,第一组用了62个能量,第二组用了25个能量,第三组用了{{___}}个能量。',
    answer: ['10'],
    explanation: '97 - 62 - 25 = 10!先用总能量减去第一组,再减去第二组,得到第三组是10个能量。逆向思维完成!',
    hint: '用总能量减去前两组',
  },

  // 第3题:CHOICE 选择题(逻辑推理)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '焰龙地狱火系统的能量计算:先有100个能量,用掉了35个,又补充了20个。现在有多少个能量?',
    options: [
      { id: 'a', text: '75' },
      { id: 'b', text: '85' },
      { id: 'c', text: '65' },
      { id: 'd', text: '95' },
    ],
    correctAnswer: 'b',
    explanation: '100 - 35 = 65,65 + 20 = 85!先算用掉后的剩余:100 - 35 = 65,再算补充后的总数:65 + 20 = 85。焰龙地狱火系统能量充足!',
    hint: '先算用掉后剩多少,再算补充后有多少',
  },

  // 第4题:MULTI_SELECT 多选题(多步计算)
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '焰龙装甲管需要验证多步计算。92减30等于多少?结果再加15等于多少?下面哪些说法正确?',
    options: [
      { id: 'a', text: '92 - 30 = 62' },
      { id: 'b', text: '62 + 15 = 77' },
      { id: 'c', text: '92 - 30 = 72' },
      { id: 'd', text: '62 + 15 = 87' },
    ],
    correctAnswers: ['a', 'b'],
    explanation: 'A: 92 - 30 = 62 ✅ (9个十减3个十等于6个十,60加2等于62);B: 62 + 15 = 77 ✅ (6个十加1个十等于7个十,70加7等于77);C: 92 - 30 = 72 ❌;D: 62 + 15 = 87 ❌',
    hint: '先算减法,再用结果加15',
  },

  // 第5题:CHOICE 选择题(找不同)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '焰龙战神终极炮需要四组能量数据结果相同。下面哪一组的计算结果与其他不同？',
    options: [
      { id: 'a', text: '62 + 25 + 10' },
      { id: 'b', text: '52 + 35 + 10' },
      { id: 'c', text: '72 + 15 + 10' },
      { id: 'd', text: '60 + 20 + 10' },
    ],
    correctAnswer: 'd',
    explanation: 'D: 60 + 20 + 10 = 90,结果不等于97,与其他三组不同!A: 62+25+10=97 ✅;B: 52+35+10=97 ✅;C: 72+15+10=97 ✅。焰龙战神终极炮发现问题数据!',
    hint: '逐个计算三数相加的结果,找出不同的那个',
  },
]

/**
 * 按难度分组的题目
 */
export const level42QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level42EasyQuestions,
  [DifficultyLevel.MEDIUM]: level42MediumQuestions,
  [DifficultyLevel.HARD]: level42HardQuestions,
}

/**
 * 关卡 4-2 新手模式武器零件:烈焰轰击(5个零件)
 */
export const level42EasyWeaponParts: WeaponPart[] = [
  { id: 'easy-flame-core', name: '焰龙探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'easy-flame-navigator', name: '焰龙导航仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'easy-flame-pincer-head', name: '焰龙巨钳头', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'easy-flame-energy-pipe', name: '焰龙能量管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'easy-flame-cannon-complete', name: '焰龙战神战炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/easy-weapon.png') },
]

/**
 * 关卡 4-2 挑战模式武器零件:火焰弹(5个零件)
 */
export const level42MediumWeaponParts: WeaponPart[] = [
  { id: 'medium-blaze-core', name: '烈焰探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'medium-flame-calculator', name: '焰龙计算仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'medium-flame-armor-plate', name: '焰龙装甲板', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'medium-flame-meter-pipe', name: '焰龙计量管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'medium-flame-cannon-complete', name: '焰龙战神战炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/medium-weapon.png') },
]

/**
 * 关卡 4-2 高手模式武器零件:地狱火(5个零件)
 */
export const level42HardWeaponParts: WeaponPart[] = [
  { id: 'hard-partner-core', name: '伙伴焰龙核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'hard-flame-fairness', name: '焰龙公平仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'hard-hellfire-system', name: '焰龙地狱火系统', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'hard-flame-armor-pipe', name: '焰龙装甲管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'hard-flame-ultimate-cannon-complete', name: '焰龙战神终极炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/hard-weapon.png') },
]

/**
 * 按难度分组的武器零件
 */
export const level42WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level42EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level42MediumWeaponParts,
  [DifficultyLevel.HARD]: level42HardWeaponParts,
}

/**
 * 关卡 4-2 故事气泡配置
 */

/**
 * 关卡 4-2 完整配置
 */
export const level42EnhancedData = {
  levelId: 'level-4-2',
  characterName: '焰龙战神',
  characterEnglishName: 'Gigant Rex',
  theme: '四、100以内口算加减法 - 第2课时:两位数加减整十数',
  vehicleForm: '恐龙形态',
  weapons: ['烈焰轰击', '火焰弹', '地狱火'],
  ultimateSkills: ['烈焰轰击', '火焰弹', '地狱火'],
  themeColor: '红色',
  difficulty: 4,
  rarity: '金边 + 火焰特效',
  questionsByDifficulty: level42QuestionsByDifficulty,
  weaponPartsByDifficulty: level42WeaponPartsByDifficulty,
}
