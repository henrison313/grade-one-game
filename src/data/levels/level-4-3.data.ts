import { getAssetPath } from '@/config/paths.config';
import type { Question, QuestionType, WeaponPart } from '@/types'
import { DifficultyLevel } from '@/types'

/**
 * 关卡 4-3 新手难度题目:炫光雷切剑
 * 主题:四、100以内口算加减法 - 第3课时:两位数加减一位数（不进位、不退位）
 * 场景:忍者训练场,霹雳火影设置个位相加减考验
 * 难度定位:基础概念理解(个位相加十位不变、个位相减十位不变、不进位不退位)
 * 角色:霹雳火影(Thunder Fire Shadow)- 闪电忍者 - 紫色+黄色 - 影分身、雷切、万雷归宗
 */
export const level43EasyQuestions: Question[] = [
  // 第1题:DRAG 拖拽题(个位相加)
  {
    type: 'drag' as QuestionType.DRAG,
    question: '霹雳火影的雷切剑需要能量激活。第一块雷石有35个能量，第二块雷石有4个能量。把两块雷石拖到雷切剑，计算总能量。',
    instruction: '把两块雷石拖到雷切剑，计算总能量。',
    items: [
      { id: 'crystal1', name: '第一块 35个能量' },
      { id: 'crystal2', name: '第二块 4个能量' },
    ],
    targets: [
      { id: 'total', name: '雷切剑总能量', accepts: ['crystal1', 'crystal2'], position: { x: 0, y: 30 }, size: { width: 200, height: 120 } },
    ],
    calculation: {
      type: 'sum',
      values: [35, 4],
      result: 39,
      label: '总能量',
    },
    explanation: '总能量 = 35 + 4 = 39!先算个位:5 + 4 = 9,十位不变还是3,等于39。雷切剑激活成功!',
    hint: '个位相加,十位不变',
  },

  // 第2题:FILL_BLANK 填空题(个位相减)
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '霹雳火影有78个闪电能量,使用雷切用了5个能量,还剩{{___}}个能量。',
    answer: ['73'],
    explanation: '78 - 5 = 73!先算个位:8 - 5 = 3,十位不变还是7,等于73。霹雳火影还剩73个闪电能量!',
    hint: '个位相减,十位不变',
  },

  // 第3题:CHOICE 选择题(不进位加法)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '霹雳火影的忍者战甲需要46个能量,又补充了3个能量,一共需要多少个能量?',
    options: [
      { id: 'a', text: '49' },
      { id: 'b', text: '76' },
      { id: 'c', text: '43' },
      { id: 'd', text: '59' },
    ],
    correctAnswer: 'a',
    explanation: '46 + 3 = 49!先算个位:6 + 3 = 9,十位不变还是4,等于49。不进位!',
    hint: '个位6+3=9,十位4不变',
  },

  // 第4题:CHOICE 选择题(不退位减法)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '霹雳火影有67个闪电能量,用了2个能量施展影分身,还剩多少个能量?',
    options: [
      { id: 'a', text: '47' },
      { id: 'b', text: '65' },
      { id: 'c', text: '87' },
      { id: 'd', text: '45' },
    ],
    correctAnswer: 'b',
    explanation: '67 - 2 = 65!先算个位:7 - 2 = 5,十位不变还是6,等于65。不退位!',
    hint: '个位7-2=5,十位6不变',
  },

  // 第5题:CHOICE 选择题(比较大小)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '67 + 2 ○ 69,○里应填什么?',
    options: [
      { id: 'a', text: '>' },
      { id: 'b', text: '<' },
      { id: 'c', text: '=' },
      { id: 'd', text: '无法确定' },
    ],
    correctAnswer: 'c',
    explanation: '67 + 2 = 69,所以填 "="!先算个位:7 + 2 = 9,十位不变还是6,等于69。',
    hint: '先计算67 + 2等于多少',
  },
]

/**
 * 关卡 4-3 挑战难度题目:霹雳火影战炮
 * 主题:四、100以内口算加减法 - 第3课时:两位数加减一位数（不进位、不退位）
 * 场景:忍者训练场,霹雳火影展开闪电挑战
 * 难度定位:综合应用(个位加减混合、逆向思维、比较关系、多算式验证、找不同)
 * 角色:霹雳火影(Thunder Fire Shadow)- 闪电忍者 - 紫色+黄色 - 影分身、雷切、万雷归宗
 */
export const level43MediumQuestions: Question[] = [
  // 第1题:DRAG 拖拽题(个位加减混合)
  {
    type: 'drag' as QuestionType.DRAG,
    question: '闪电挑战需要三组能量：第一组52个能量，第二组6个能量，第三组减去3个能量。把三组能量拖到目标区域，计算总能量。',
    instruction: '把三组能量拖到目标区域，计算总能量。',
    items: [
      { id: 'energy1', name: '第一组 52个能量' },
      { id: 'energy2', name: '第二组 6个能量' },
      { id: 'energy3', name: '第三组 -3个能量' },
    ],
    targets: [
      { id: 'total', name: '闪电挑战总能量', accepts: ['energy1', 'energy2', 'energy3'], position: { x: 0, y: 30 }, size: { width: 280, height: 200 } },
    ],
    calculation: {
      type: 'mixed',
      values: [52, 6, -3],
      result: 55,
      label: '总能量',
    },
    explanation: '总能量 = 52 + 6 - 3 = 55!先算个位:2 + 6 = 8,8 - 3 = 5,十位不变还是5,等于55。闪电挑战能量充足!',
    hint: '个位相加减,十位不变',
  },

  // 第2题:FILL_BLANK 填空题(逆向思维)
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '霹雳火影原有85个闪电能量,施展影分身用了一些后还剩82个,用了{{___}}个能量。',
    answer: ['3'],
    explanation: '85 - 82 = 3!用了3个能量。逆向思维:用原来的能量减去剩余的能量,就是使用的能量。个位5-2=3,十位不变。',
    hint: '用原来的能量减去剩余的能量',
  },

  // 第3题:CHOICE 选择题(比较关系)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '霹雳火影的能量等级是67,闪电忍者的能量等级是62。霹雳火影比闪电忍者多多少能量?',
    options: [
      { id: 'a', text: '3' },
      { id: 'b', text: '5' },
      { id: 'c', text: '7' },
      { id: 'd', text: '9' },
    ],
    correctAnswer: 'b',
    explanation: '67 - 62 = 5!个位7-2=5,十位不变6-6=0,等于5。霹雳火影的能量等级更高!',
    hint: '用霹雳火影的能量减去闪电忍者的能量',
  },

  // 第4题:MULTI_SELECT 多选题(多算式验证)
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '霹雳火影的忍术只改变个位,十位不变。下面哪些算式符合这个规则?',
    options: [
      { id: 'a', text: '35 + 4 = 39' },
      { id: 'b', text: '78 - 5 = 73' },
      { id: 'c', text: '46 + 8 = 54' },
      { id: 'd', text: '67 - 2 = 65' },
    ],
    correctAnswers: ['a', 'b', 'd'],
    explanation: 'A: 35+4=39,个位5+4=9,十位3不变 ✅;B: 78-5=73,个位8-5=3,十位7不变 ✅;C: 46+8=54,个位6+8=14,进位了 ❌;D: 67-2=65,个位7-2=5,十位6不变 ✅',
    hint: '检查每个算式是否进位或退位',
  },

  // 第5题:CHOICE 选择题(找不同)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的计算结果与其他三个不同？',
    options: [
      { id: 'a', text: '55 + 4' },
      { id: 'b', text: '52 + 7' },
      { id: 'c', text: '50 + 9' },
      { id: 'd', text: '55 + 6' },
    ],
    correctAnswer: 'd',
    explanation: 'A: 55+4=59,个位5+4=9,不进位;B: 52+7=59,个位2+7=9,不进位;C: 50+9=59,个位0+9=9,不进位。这三个都是59!D: 55+6=61,个位5+6=11,进位了,结果是61,与其他三个不同!',
    hint: '逐个计算,找出不同的那个',
  },
]

/**
 * 关卡 4-3 高手难度题目:霹雳火影终极炮
 * 主题:四、100以内口算加减法 - 第3课时:两位数加减一位数（不进位、不退位）
 * 场景:忍者大师基地,小俊团队闪电挑战成功,霹雳火影展现实力
 * 难度定位:拓展挑战(三数运算、逆向思维、逻辑推理、多步计算、找不同)
 * 角色:霹雳火影(Thunder Fire Shadow)- 闪电忍者 - 紫色+黄色 - 影分身、雷切、万雷归宗
 */
export const level43HardQuestions: Question[] = [
  // 第1题:DRAG 拖拽题(三数运算)
  {
    type: 'drag' as QuestionType.DRAG,
    question: '忍者大师基地需要三组能量激活：第一组32个能量，第二组加5个能量，第三组减3个能量。把三组能量拖到目标区域，计算总能量。',
    instruction: '把三组能量拖到目标区域，计算总能量。',
    items: [
      { id: 'energy1', name: '第一组 32个能量' },
      { id: 'energy2', name: '第二组 +5个能量' },
      { id: 'energy3', name: '第三组 -3个能量' },
    ],
    targets: [
      { id: 'total', name: '忍者大师基地总能量', accepts: ['energy1', 'energy2', 'energy3'], position: { x: 0, y: 30 }, size: { width: 280, height: 200 } },
    ],
    calculation: {
      type: 'mixed',
      values: [32, 5, -3],
      result: 34,
      label: '总能量',
    },
    explanation: '总能量 = 32 + 5 - 3 = 34!先算个位:2 + 5 = 7,7 - 3 = 4,十位不变还是3,等于34。忍者大师基地激活成功!',
    hint: '个位相加减,十位不变',
  },

  // 第2题:FILL_BLANK 填空题(逆向思维)
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '霹雳火影的基地总能量是95,第一组用了32个能量,第二组用了60个能量,第三组用了{{___}}个能量。',
    answer: ['3'],
    explanation: '95 - 32 - 60 = 3!先用总能量减去第一组:95-32=63,再减去第二组:63-60=3。第三组是3个能量。',
    hint: '用总能量减去前两组',
  },

  // 第3题:CHOICE 选择题(逻辑推理)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '霹雳火影的能量等级是56,影分身比霹雳火影少4个能量,雷切忍术比影分身多2个能量。雷切忍术的能量等级是多少?',
    options: [
      { id: 'a', text: '52' },
      { id: 'b', text: '54' },
      { id: 'c', text: '56' },
      { id: 'd', text: '58' },
    ],
    correctAnswer: 'b',
    explanation: '先算影分身:56 - 4 = 52;再算雷切忍术:52 + 2 = 54。个位6-4=2,2+2=4,十位不变。',
    hint: '先算影分身的能量等级,再算雷切忍术的能量等级',
  },

  // 第4题:MULTI_SELECT 多选题(多步计算)
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '霹雳火影有78个闪电能量,施展影分身用了5个能量,又补充了2个能量。下面哪些说法正确?',
    options: [
      { id: 'a', text: '施展后还剩73个能量' },
      { id: 'b', text: '现在有75个能量' },
      { id: 'c', text: '施展后还剩75个能量' },
      { id: 'd', text: '现在有73个能量' },
    ],
    correctAnswers: ['a', 'b'],
    explanation: '先算施展后剩余:78 - 5 = 73 ✅;再算补充后总数:73 + 2 = 75 ✅。个位8-5=3,3+2=5,十位不变。',
    hint: '先算施展后剩余,再算补充后总数',
  },

  // 第5题:CHOICE 选择题(找不同)
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式不符合"不进位不退位"的规则？',
    options: [
      { id: 'a', text: '35 + 4' },
      { id: 'b', text: '78 - 5' },
      { id: 'c', text: '46 + 3' },
      { id: 'd', text: '58 + 5' },
    ],
    correctAnswer: 'd',
    explanation: 'A: 35+4=39,个位5+4=9,不进位 ✅;B: 78-5=73,个位8-5=3,不退位 ✅;C: 46+3=49,个位6+3=9,不进位 ✅;D: 58+5=63,个位8+5=13,进位了 ❌',
    hint: '检查每个算式是否进位或退位',
  },
]

/**
 * 按难度分组的题目
 */
export const level43QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level43EasyQuestions,
  [DifficultyLevel.MEDIUM]: level43MediumQuestions,
  [DifficultyLevel.HARD]: level43HardQuestions,
}

/**
 * 关卡 4-3 新手模式武器零件:炫光雷切剑(5个零件)
 */
export const level43EasyWeaponParts: WeaponPart[] = [
  { id: 'easy-thunder-core', name: '闪电探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'easy-thunder-navigator', name: '闪电导航仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'easy-thunder-blade-head', name: '雷切剑刃', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'easy-thunder-shield-pipe', name: '闪电护盾管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'easy-thunder-sword-complete', name: '炫光雷切剑完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/easy-xuanlan-shandian-light.png') },
]

/**
 * 关卡 4-3 挑战模式武器零件:霹雳火影战炮(5个零件)
 */
export const level43MediumWeaponParts: WeaponPart[] = [
  { id: 'medium-lightning-core', name: '闪电探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'medium-lightning-calculator', name: '闪电计算仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'medium-lightning-armor-plate', name: '闪电装甲板', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'medium-lightning-meter-pipe', name: '闪电计量管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'medium-thunder-cannon-complete', name: '霹雳火影战炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/medium-xuanlan-shandian-bolt.png') },
]

/**
 * 关卡 4-3 高手模式武器零件:霹雳火影终极炮(5个零件)
 */
export const level43HardWeaponParts: WeaponPart[] = [
  { id: 'hard-partner-thunder-core', name: '伙伴闪电核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'hard-thunder-fairness', name: '闪电公平仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'hard-thunder-master-system', name: '闪电大师系统', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'hard-thunder-armor-pipe', name: '闪电装甲管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'hard-thunder-ultimate-cannon-complete', name: '霹雳火影终极炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/hard-xuanlan-shandian-thunder.png') },
]

/**
 * 按难度分组的武器零件
 */
export const level43WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level43EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level43MediumWeaponParts,
  [DifficultyLevel.HARD]: level43HardWeaponParts,
}

/**
 * 关卡 4-3 完整配置
 */
export const level43EnhancedData = {
  levelId: 'level-4-3',
  characterName: '霹雳火影',
  characterEnglishName: 'Thunder Fire Shadow',
  theme: '四、100以内口算加减法 - 第3课时:两位数加减一位数（不进位、不退位）',
  vehicleForm: '闪电忍者',
  weapons: ['忍者战甲', '雷切剑'],
  ultimateSkills: ['影分身', '雷切', '万雷归宗'],
  themeColor: '紫色+黄色',
  difficulty: 3,
  rarity: '金边 + 闪电特效',
  questionsByDifficulty: level43QuestionsByDifficulty,
  weaponPartsByDifficulty: level43WeaponPartsByDifficulty,
}
