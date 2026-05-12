import type { Question, QuestionType, WeaponPart } from '@/types';
import { DifficultyLevel } from '@/types';

/**
 * 关卡 20 银翼骑士 改造方案
 * 主题：求一个数比另一个数多（少）几
 * 官方设定：银翼骑士（战斗机三形态切换），武器银翼长剑，绝招银翼风暴
 * 剧情：天空守护者 → 被围困求救 → 小俊救援 → 成为伙伴
 */

/**
 * 新手模式武器零件：银翼长剑炮（5个零件）
 */
export const level20EasyWeaponParts: WeaponPart[] = [
  { id: 'easy-silverwing-core', name: '银翼探测核心', shapeType: 'circle', iconImage: '/images/weapons/silverwing/core.png' },
  { id: 'easy-silverwing-navigator', name: '银翼导航仪', shapeType: 'triangle', iconImage: '/images/weapons/silverwing/navigator.png' },
  { id: 'easy-silverwing-sword-head', name: '银翼长剑头', shapeType: 'triangle', iconImage: '/images/weapons/silverwing/sword-head.png' },
  { id: 'easy-silverwing-storm-pipe', name: '银翼风暴管', shapeType: 'square', iconImage: '/images/weapons/silverwing/storm-pipe.png' },
  { id: 'easy-silverwing-sword-cannon-complete', name: '银翼长剑炮完成', shapeType: 'composite', iconImage: '/images/weapons/silverwing/sword-cannon.png' },
];

/**
 * 挑战模式武器零件：银翼骑士战炮（4个零件）
 */
export const level20MediumWeaponParts: WeaponPart[] = [
  { id: 'medium-enemy-core', name: '敌人探测核心', shapeType: 'circle', iconImage: '/images/weapons/silverwing/enemy-core.png' },
  { id: 'medium-battlefield-locator', name: '战场定位器', shapeType: 'triangle', iconImage: '/images/weapons/silverwing/locator.png' },
  { id: 'medium-silverwing-armor-plate', name: '银翼装甲板', shapeType: 'square', iconImage: '/images/weapons/silverwing/armor.png' },
  { id: 'medium-silverwing-knight-cannon-complete', name: '银翼骑士战炮完成', shapeType: 'composite', iconImage: '/images/weapons/silverwing/knight-cannon.png' },
];

/**
 * 高手模式武器零件：银翼骑士终极炮（4个零件）
 */
export const level20HardWeaponParts: WeaponPart[] = [
  { id: 'hard-partner-core', name: '伙伴指挥核心', shapeType: 'circle', iconImage: '/images/weapons/silverwing/partner-core.png' },
  { id: 'hard-courage-navigator', name: '勇气导航仪', shapeType: 'triangle', iconImage: '/images/weapons/silverwing/courage-nav.png' },
  { id: 'hard-silverwing-sword-system', name: '银翼长剑系统', shapeType: 'square', iconImage: '/images/weapons/silverwing/sword-system.png' },
  { id: 'hard-silverwing-knight-ultimate-cannon-complete', name: '银翼骑士终极炮完成', shapeType: 'composite', iconImage: '/images/weapons/silverwing/ultimate-cannon.png' },
];

/**
 * 关卡 20 新手难度题目：银翼长剑炮
 * 场景：天空基地，银翼骑士准备飞行装备发出求救信号
 * 故事气泡开场："银翼骑士在天空基地准备飞行装备！他展开纯白之翼：'拜托了！我需要飞行装备！敌人可能要突袭！' 用数学知识帮助他准备飞行装备！"
 * 故事气泡第3题后："银翼骑士：'拜托了！我已经准备好了飞行装备...但是敌人突然出现了！'"
 * 故事气泡完成："银翼骑士：'谢谢你们！飞行装备准备好了！纯白之翼出发救援！' 银翼长剑装备完成！"
 * 难度定位：基础概念理解（简单加法、简单减法、直观比较）
 */
export const level20EasyQuestions: Question[] = [
  // 第1题：DRAG 拖拽题（加法意义）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '银翼骑士准备了48个飞行零件，小俊送来了35个，他们一共有多少个飞行零件？',
    instruction: '把银翼骑士的零件和小俊的零件拖到一起，计算总数。',
    items: [
      { id: 'silverwing', name: '银翼骑士 48个' },
      { id: 'jun', name: '小俊 35个' },
    ],
    targets: [
      { id: 'total', name: '总数量', accepts: ['silverwing', 'jun'], position: { x: 0, y: 30 }, size: { width: 200, height: 120 } },
    ],
    calculation: {
      type: 'sum',
      values: [48, 35],
      result: 83,
      label: '总数量',
    },
    explanation: '部分 + 部分 = 整体。48 + 35 = 83（个），一共有83个飞行零件。',
    hint: '把银翼骑士的零件和小俊的零件加起来',
  },

  // 第2题：FILL_BLANK 填空题（减法意义）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '银翼骑士有95个飞行能量，用了42个发射银翼风暴，还剩几个？',
    answer: '53',
    explanation: '整体 - 部分 = 另一部分。95 - 42 = 53（个），还剩53个飞行能量。',
    hint: '用总数减去用掉的数量',
  },

  // 第3题：CHOICE 选择题（比较关系 - 谁多谁少）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '银翼骑士有83个飞行零件，星际游侠有95个飞行零件，谁的多？多几个？',
    options: [
      { id: 'a', text: '银翼骑士多，多12个' },
      { id: 'b', text: '星际游侠多，多12个' },
      { id: 'c', text: '银翼骑士多，多8个' },
      { id: 'd', text: '星际游侠多，多8个' },
    ],
    correctAnswer: 'b',
    explanation: '比较两个数的大小。95 > 83，所以星际游侠的多。95 - 83 = 12（个），多12个。',
    hint: '先比较大小，再用大数减小数',
  },

  // 第4题：CHOICE 选择题（找不同）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的计算结果与其他三个不同？',
    options: [
      { id: 'a', text: '48 + 35' },
      { id: 'b', text: '50 + 33' },
      { id: 'c', text: '60 + 23' },
      { id: 'd', text: '40 + 35' },
    ],
    correctAnswer: 'd',
    explanation: 'A、B、C三个算式的结果都是83，只有D的结果是75，所以D不同。',
    hint: '分别计算每个算式的结果，找出不同的那个',
  },

  // 第5题：CHOICE 选择题（比较题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '银翼骑士有83个飞行零件，星际游侠有95个飞行零件，小俊团队有71个飞行零件，谁的最多？',
    options: [
      { id: 'a', text: '银翼骑士' },
      { id: 'b', text: '星际游侠' },
      { id: 'c', text: '小俊团队' },
      { id: 'd', text: '一样多' },
    ],
    correctAnswer: 'b',
    explanation: '比较三个数的大小。95 > 83 > 71，所以星际游侠的最多。',
    hint: '比较三个数的大小，找出最大的那个',
  },
];

/**
 * 关卡 20 挑战难度题目：银翼骑士战炮
 * 场景：天空战场，银翼骑士被敌人大军围困发出紧急求救
 * 故事气泡开场："银翼骑士被敌人大军围困！他发出紧急求救：'拜托了！快计算飞行路线！敌人太多了！' 小俊团队紧急集结救援！"
 * 故事气泡完成："银翼骑士：'拜托了！你们来救援了！谢谢你们！我们快突围！' 突围成功！"
 * 难度定位：综合应用（两步计算、逆向思维、场景应用）
 */
export const level20MediumQuestions: Question[] = [
  // 第1题：DRAG 拖拽题（两步计算）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '银翼骑士发现了55只敌人，小俊团队发现了38只，他们一共发现了多少只敌人？',
    instruction: '把银翼骑士发现的敌人和小俊团队发现的敌人拖到一起，计算总数。',
    items: [
      { id: 'silverwing', name: '银翼骑士 55只' },
      { id: 'team', name: '小俊团队 38只' },
    ],
    targets: [
      { id: 'total', name: '总敌人数', accepts: ['silverwing', 'team'], position: { x: 0, y: 30 }, size: { width: 200, height: 120 } },
    ],
    calculation: {
      type: 'sum',
      values: [55, 38],
      result: 93,
      label: '总敌人数',
    },
    explanation: '部分 + 部分 = 整体。55 + 38 = 93（只），一共发现了93只敌人。',
    hint: '把银翼骑士和小俊团队发现的敌人加起来',
  },

  // 第2题：FILL_BLANK 填空题（逆向思维）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '银翼骑士有75个战斗能量，战斗消耗了一些后还剩43个，消耗了几个？',
    answer: '32',
    explanation: '整体 - 剩余 = 消耗。75 - 43 = 32（个），消耗了32个战斗能量。',
    hint: '用总数减去剩余的数量',
  },

  // 第3题：CHOICE 选择题（比较关系 - 谁多谁少）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '小俊团队有93个救援护盾，银翼骑士有78个救援护盾，谁的多？多几个？',
    options: [
      { id: 'a', text: '小俊团队多，多15个' },
      { id: 'b', text: '银翼骑士多，多15个' },
      { id: 'c', text: '小俊团队多，多12个' },
      { id: 'd', text: '银翼骑士多，多12个' },
    ],
    correctAnswer: 'a',
    explanation: '比较两个数的大小。93 > 78，所以小俊团队的多。93 - 78 = 15（个），多15个。',
    hint: '先比较大小，再用大数减小数',
  },

  // 第4题：MULTI_SELECT 多选题（找规律）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '下面哪些算式的结果大于50？请选出所有正确的。',
    options: [
      { id: 'a', text: '48 + 35 = 83' },
      { id: 'b', text: '95 - 42 = 53' },
      { id: 'c', text: '60 - 23 = 37' },
      { id: 'd', text: '40 + 38 = 78' },
    ],
    correctAnswers: ['a', 'b', 'd'],
    explanation: 'A: 48+35=83>50 ✅，B: 95-42=53>50 ✅，C: 60-23=37<50 ❌，D: 40+38=78>50 ✅',
    hint: '分别计算每个算式的结果，找出大于50的',
  },

  // 第5题：CHOICE 选择题（找不同）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的计算结果与其他三个不同？',
    options: [
      { id: 'a', text: '55 + 38' },
      { id: 'b', text: '60 + 33' },
      { id: 'c', text: '50 + 43' },
      { id: 'd', text: '55 + 35' },
    ],
    correctAnswer: 'd',
    explanation: 'A、B、C三个算式的结果都是93，只有D的结果是90，所以D不同。',
    hint: '分别计算每个算式的结果，找出不同的那个',
  },
];

/**
 * 关卡 20 高手难度题目：银翼骑士终极炮
 * 场景：小俊救援队，炫卡斗士团队救援成功银翼骑士成为伙伴
 * 故事气泡开场："炫卡斗士团队救援成功！银翼骑士说：'谢谢你们！从今以后我守护天空！银翼长剑装备完成！'"
 * 故事气泡完成："银翼骑士：'从今以后，我是炫卡斗士团队的天空专家！让我们一起守护天空和地球！银翼长剑银翼风暴！'"
 * 难度定位：拓展挑战（多步计算、逻辑推理、开放性问题）
 */
export const level20HardQuestions: Question[] = [
  // 第1题：DRAG 拖拽题（多步计算）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '银翼骑士修复了62个炫卡装备，小俊团队修复了45个，星际游侠修复了38个，他们一共修复了多少个炫卡装备？',
    instruction: '把银翼骑士、小俊团队、星际游侠的修复数量拖到一起，计算总数。',
    items: [
      { id: 'silverwing', name: '银翼骑士 62个' },
      { id: 'team', name: '小俊团队 45个' },
      { id: 'star', name: '星际游侠 38个' },
    ],
    targets: [
      { id: 'total', name: '总装备数', accepts: ['silverwing', 'team', 'star'], position: { x: 0, y: 30 }, size: { width: 280, height: 200 } },
    ],
    calculation: {
      type: 'sum',
      values: [62, 45, 38],
      result: 145,
      label: '总装备数',
    },
    explanation: '部分 + 部分 + 部分 = 整体。62 + 45 + 38 = 145（个），一共修复了145个炫卡装备。',
    hint: '把三个团队的修复数量加起来',
  },

  // 第2题：FILL_BLANK 填空题（逆向思维）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '他们一共修复了145个炫卡装备，其中62个是银翼骑士修复的，45个是小俊团队修复的，星际游侠修复了几个？',
    answer: '38',
    explanation: '整体 - 部分 - 部分 = 另一部分。145 - 62 - 45 = 38（个），星际游侠修复了38个。',
    hint: '用总数减去银翼骑士和小俊团队修复的数量',
  },

  // 第3题：CHOICE 选择题（逻辑推理）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '小俊团队有100个战斗装备，银翼骑士比小俊团队少25个，星际游侠比银翼骑士多18个，星际游侠有几个？',
    options: [
      { id: 'a', text: '93个' },
      { id: 'b', text: '75个' },
      { id: 'c', text: '85个' },
      { id: 'd', text: '105个' },
    ],
    correctAnswer: 'a',
    explanation: '先算银翼骑士：100 - 25 = 75（个），再算星际游侠：75 + 18 = 93（个）。',
    hint: '先算银翼骑士的数量，再算星际游侠的数量',
  },

  // 第4题：MULTI_SELECT 多选题（多步计算）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '银翼骑士有90个战斗能量，作战消耗了42个，又获得了补给25个，现在有几个？下面哪些说法正确？',
    options: [
      { id: 'a', text: '消耗后还剩48个' },
      { id: 'b', text: '现在有73个' },
      { id: 'c', text: '消耗后还剩58个' },
      { id: 'd', text: '现在有83个' },
    ],
    correctAnswers: ['a', 'b'],
    explanation: '先算消耗后剩余：90 - 42 = 48（个）✅，再算补给后总数：48 + 25 = 73（个）✅',
    hint: '先算消耗后剩余，再算补给后总数',
  },

  // 第5题：CHOICE 选择题（找规律）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的结果和其他三个不同？',
    options: [
      { id: 'a', text: '62 + 45 + 38 = 145' },
      { id: 'b', text: '65 + 42 + 38 = 145' },
      { id: 'c', text: '60 + 47 + 38 = 145' },
      { id: 'd', text: '55 + 40 + 38 = 133' },
    ],
    correctAnswer: 'd',
    explanation: 'A、B、C三个算式的结果都是145，只有D的结果是133，所以D不同。',
    hint: '分别计算每个算式的结果，找出不同的那个',
  },
];

/**
 * 按难度分组的题目
 */
export const level20QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level20EasyQuestions,
  [DifficultyLevel.MEDIUM]: level20MediumQuestions,
  [DifficultyLevel.HARD]: level20HardQuestions,
};

/**
 * 按难度分组的武器零件
 */
export const level20WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level20EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level20MediumWeaponParts,
  [DifficultyLevel.HARD]: level20HardWeaponParts,
};