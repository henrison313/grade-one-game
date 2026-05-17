import { getAssetPath } from '@/config/paths.config';
import type { Question, QuestionType, WeaponPart } from '@/types'
import { DifficultyLevel } from '@/types'

/**
 * 关卡 9 新手难度题目:赤魂灭世
 * 主题:期末综合（综合复习）
 * 角色:重装赤魂王- 罗森鲍尔黑豹第三代8×8云梯消防车+组合 - 红+黑色 - 赤魂战甲、铲斗巨臂、云梯加农炮、火焰能量弹、毁灭能量弹、重装聚能炮
 */
export const level9EasyQuestions: Question[] = [
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '76里面有多少个十和多少个一？',
    options: [
      { id: 'a', text: '7个十和6个一' },
      { id: 'b', text: '6个十和7个一' },
      { id: 'c', text: '7个十和7个一' },
      { id: 'd', text: '6个十和6个一' },
    ],
    correctAnswer: 'a',
    explanation: '76里面有7个十和6个一！76 = 70 + 6。十位是7，个位是6。',
    hint: '76的十位是7，个位是6',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个数最接近100？',
    options: [
      { id: 'a', text: '89' },
      { id: 'b', text: '91' },
      { id: 'c', text: '98' },
      { id: 'd', text: '85' },
    ],
    correctAnswer: 'c',
    explanation: '98最接近100！100-98=2，差距最小。89差距11，91差距9，85差距15。',
    hint: '计算每个数与100的差',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '60 + 30 - 40 = ?',
    options: [
      { id: 'a', text: '40' },
      { id: 'b', text: '50' },
      { id: 'c', text: '60' },
      { id: 'd', text: '70' },
    ],
    correctAnswer: 'b',
    explanation: '60 + 30 - 40 = 50！6个十加3个十等于9个十，再减4个十等于5个十。',
    hint: '从左往右依次计算',
  },
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
    type: 'choice' as QuestionType.CHOICE,
    question: '85 - 63 = ?',
    options: [
      { id: 'a', text: '12' },
      { id: 'b', text: '22' },
      { id: 'c', text: '32' },
      { id: 'd', text: '28' },
    ],
    correctAnswer: 'b',
    explanation: '85 - 63 = 22！个位5-3=2，十位8-6=2，所以是22。',
    hint: '个位减个位，十位减十位',
  },
]

export const level9MediumQuestions: Question[] = [
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '按规律填数：25、30、35、{{___}}、{{___}}、50',
    answer: ['40', '45'],
    explanation: '规律是每次加5：25、30、35、40、45、50！每次加5个。',
    hint: '每个数比前一个数多5',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '商店里有56个苹果，上午卖出23个，下午又运来15个，现在有多少个苹果？',
    options: [
      { id: 'a', text: '38个' },
      { id: 'b', text: '48个' },
      { id: 'c', text: '58个' },
      { id: 'd', text: '42个' },
    ],
    correctAnswer: 'b',
    explanation: '56 - 23 + 15 = 48个！先算56-23=33，再算33+15=48。',
    hint: '原有的减去卖出的，再加运来的',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '一个两位数，十位上的数比个位上的数大3，这个数可能是？',
    options: [
      { id: 'a', text: '25' },
      { id: 'b', text: '41' },
      { id: 'c', text: '58' },
      { id: 'd', text: '73' },
    ],
    correctAnswer: 'b',
    explanation: '41符合条件！十位4比个位1大3（4-1=3）。25不符合（2-5=-3），58不符合（5-8=-3），73不符合（7-3=4）。',
    hint: '十位数字 - 个位数字 = 3',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '小明、小红和小丽三人比赛跳绳。小明跳了67下，小红比小明多跳12下，小丽比小红少跳5下。谁跳得最多？',
    options: [
      { id: 'a', text: '小明' },
      { id: 'b', text: '小红' },
      { id: 'c', text: '小丽' },
      { id: 'd', text: '一样多' },
    ],
    correctAnswer: 'b',
    explanation: '小红跳得最多！小明67下，小红67+12=79下，小丽79-5=74下。79>74>67，所以小红最多。',
    hint: '分别算出三人跳的数量再比较',
  },
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
]

export const level9HardQuestions: Question[] = [
  {
    type: 'drag' as QuestionType.DRAG,
    question: '重装赤魂王总能量是130，第一组用了50个能量，第二组用了38个能量，第三组用了42个能量。把三组能量拖到计算区，验证总能量。',
    instruction: '把三组能量拖到计算区，验证总能量。',
    items: [
      { id: 'e1', name: '第一组 50个能量' },
      { id: 'e2', name: '第二组 38个能量' },
      { id: 'e3', name: '第三组 42个能量' },
    ],
    targets: [
      { id: 'total', name: '重装赤魂王总能量', accepts: ['e1', 'e2', 'e3'], position: { x: 0, y: 30 }, size: { width: 280, height: 200 } },
    ],
    calculation: {
      type: 'sum',
      values: [50, 38, 42],
      result: 130,
      label: '总能量',
    },
    explanation: '50 + 38 + 42 = 130！验证成功！',
    hint: '把三组能量加起来',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '按规律填数:2、5、10、17、26、_（差递增3、5、7、9）',
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
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '按规律填数:1、4、9、16、{{___}}、36（平方数列）',
    answer: ['25'],
    explanation: '规律是平方数列：1²=1，2²=4，3²=9，4²=16，5²=25，6²=36！',
    hint: '这是平方数列（1×1=1，2×2=4，3×3=9...）',
  },
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
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '按规律填数:1、3、6、10、15、_（每次加的数递增1）',
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

export const level9QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level9EasyQuestions,
  [DifficultyLevel.MEDIUM]: level9MediumQuestions,
  [DifficultyLevel.HARD]: level9HardQuestions,
}

export const level9EasyWeaponParts: WeaponPart[] = [
  { id: 'easy-flame-core', name: '赤魂探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'easy-flame-nav', name: '赤魂导航仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'easy-flame-head', name: '赤魂灭世头', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'easy-flame-pipe', name: '赤魂穿梭管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'easy-flame-complete', name: '赤魂灭世完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/easy-xuanlan-shandian-light.png') },
]

export const level9MediumWeaponParts: WeaponPart[] = [
  { id: 'med-flame-core', name: '赤魂探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'med-flame-loc', name: '赤魂定位器', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'med-flame-armor', name: '赤魂装甲板', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'med-flame-meter', name: '赤魂计量管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'med-flame-cannon', name: '重装赤魂王战炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/medium-xuanlan-shandian-bolt.png') },
]

export const level9HardWeaponParts: WeaponPart[] = [
  { id: 'hard-flame-partner', name: '伙伴赤魂核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'hard-flame-fair', name: '赤魂公平仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'hard-flame-sys', name: '赤魂灭世系统', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'hard-flame-armor', name: '赤魂装甲管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'hard-flame-ult', name: '重装赤魂王终极炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/hard-xuanlan-shandian-thunder.png') },
]

export const level9WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level9EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level9MediumWeaponParts,
  [DifficultyLevel.HARD]: level9HardWeaponParts,
}


export const level9EnhancedData = {
  levelId: 'level-9',
  characterName: '重装赤魂王',
  theme: '期末综合（综合复习）',
  vehicleForm: '罗森鲍尔黑豹第三代8×8云梯消防车+组合',
  weapons: ['赤魂战甲', '铲斗巨臂', '云梯加农炮'],
  ultimateSkills: ['火焰能量弹', '毁灭能量弹', '重装聚能炮', '赤魂灭世'],
  themeColor: '红+黑色',
  difficulty: 5,
  rarity: '炫彩动态边',
  questionsByDifficulty: level9QuestionsByDifficulty,
  weaponPartsByDifficulty: level9WeaponPartsByDifficulty,
}
