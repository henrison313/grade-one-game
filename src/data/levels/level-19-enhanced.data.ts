import type { Question, QuestionType } from '@/types';
import { DifficultyLevel } from '@/types';

/**
 * 关卡 19 新手难度题目：深海三叉戟炮
 * 主题：求一个数比另一个数多（少）几 - 深海霸王的故事
 * 场景：海底基地，深海霸王准备救援装备发出求救信号
 * 难度定位：基础概念理解（简单加法、简单减法、直观比较）
 */
export const level19EasyQuestions: Question[] = [
  // 第1题：基础概念 - 加法意义（部分与整体）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '深海霸王准备了45个深海零件，小俊送来了38个，他们一共有多少个深海零件？',
    instruction: '把深海霸王的零件和小俊的零件拖到一起，计算总数。',
    items: [
      { id: 'deepsea', name: '深海霸王 45个' },
      { id: 'jun', name: '小俊 38个' },
    ],
    targets: [
      { id: 'total', name: '总数量', accepts: ['deepsea', 'jun'], position: { x: 0, y: 30 }, size: { width: 200, height: 120 } },
    ],
    calculation: {
      type: 'sum',
      values: [45, 38],
      result: 83,
      label: '总数量',
    },
    explanation: '部分 + 部分 = 整体。45 + 38 = 83（个），一共有83个深海零件。',
    hint: '把深海霸王的零件和小俊的零件加起来',
  },

  // 第2题：减法意义（独立数字，不复用第1题的数字）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '深海霸王有90个深海能量，用了35个发射高压水流，还剩几个？',
    answer: '55',
    explanation: '整体 - 部分 = 另一部分。90 - 35 = 55（个），还剩55个深海能量。',
    hint: '用总数减去用掉的数量',
  },

  // 第3题：比较关系 - 谁多谁少
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '深海霸王有83个深海能量，星际游侠有95个深海能量，谁的多？多几个？',
    options: [
      { id: 'a', text: '深海霸王多，多12个' },
      { id: 'b', text: '星际游侠多，多12个' },
      { id: 'c', text: '深海霸王多，多8个' },
      { id: 'd', text: '星际游侠多，多8个' },
    ],
    correctAnswer: 'b',
    explanation: '比较两个数的大小。95 > 83，所以星际游侠的多。95 - 83 = 12（个），多12个。',
    hint: '先比较大小，再用大数减小数',
  },

  // 第4题：找不同题（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的计算结果与其他三个不同？',
    options: [
      { id: 'a', text: '45 + 38' },
      { id: 'b', text: '50 + 33' },
      { id: 'c', text: '60 + 23' },
      { id: 'd', text: '40 + 38' },
    ],
    correctAnswer: 'd',
    explanation: 'A、B、C三个算式的结果都是83，只有D的结果是78，所以D不同。',
    hint: '分别计算每个算式的结果，找出不同的那个',
  },

  // 第5题：比较题（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '深海霸王有83个深海能量，星际游侠有95个深海能量，小俊团队有71个深海能量，谁的最多？',
    options: [
      { id: 'a', text: '深海霸王' },
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
 * 关卡 19 挑战难度题目：深海霸王战炮
 * 主题：求一个数比另一个数多（少）几 - 深海霸王的故事
 * 场景：鳄鱼精战场，深海霸王被鳄鱼王大军围困发出紧急求救
 * 难度定位：综合应用（两步计算、逆向思维、场景应用）
 */
export const level19MediumQuestions: Question[] = [
  // 第1题：基础概念 - 加法意义
  {
    type: 'drag' as QuestionType.DRAG,
    question: '深海霸王发现了52只鳄鱼精，小俊团队发现了35只，他们一共发现了多少只鳄鱼精？',
    instruction: '把深海霸王发现的鳄鱼精和小俊团队发现的鳄鱼精拖到一起，计算总数。',
    items: [
      { id: 'deepsea', name: '深海霸王 52只' },
      { id: 'team', name: '小俊团队 35只' },
    ],
    targets: [
      { id: 'total', name: '总鳄鱼精数', accepts: ['deepsea', 'team'], position: { x: 0, y: 30 }, size: { width: 200, height: 120 } },
    ],
    calculation: {
      type: 'sum',
      values: [52, 35],
      result: 87,
      label: '总鳄鱼精数',
    },
    explanation: '部分 + 部分 = 整体。52 + 35 = 87（只），一共发现了87只鳄鱼精。',
    hint: '把深海霸王和小俊团队发现的鳄鱼精加起来',
  },

  // 第2题：逆向思维 - 求消耗量
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '深海霸王有68个战斗能量，战斗消耗了一些后还剩36个，消耗了几个？',
    answer: '32',
    explanation: '整体 - 剩余 = 消耗。68 - 36 = 32（个），消耗了32个战斗能量。',
    hint: '用总数减去剩余的数量',
  },

  // 第3题：比较关系 - 谁多谁少
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '小俊团队有87个救援护盾，深海霸王有72个救援护盾，谁的多？多几个？',
    options: [
      { id: 'a', text: '小俊团队多，多15个' },
      { id: 'b', text: '深海霸王多，多15个' },
      { id: 'c', text: '小俊团队多，多12个' },
      { id: 'd', text: '深海霸王多，多12个' },
    ],
    correctAnswer: 'a',
    explanation: '比较两个数的大小。87 > 72，所以小俊团队的多。87 - 72 = 15（个），多15个。',
    hint: '先比较大小，再用大数减小数',
  },

  // 第4题：多选题（找规律 - 结果大于50）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '下面哪些算式的结果大于50？请选出所有正确的。',
    options: [
      { id: 'a', text: '45 + 38 = 83' },
      { id: 'b', text: '90 - 35 = 55' },
      { id: 'c', text: '60 - 23 = 37' },
      { id: 'd', text: '40 + 38 = 78' },
    ],
    correctAnswers: ['a', 'b', 'd'],
    explanation: 'A: 45+38=83>50 ✅，B: 90-35=55>50 ✅，C: 60-23=37<50 ❌，D: 40+38=78>50 ✅',
    hint: '分别计算每个算式的结果，找出大于50的',
  },

  // 第5题：找不同题（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的计算结果与其他三个不同？',
    options: [
      { id: 'a', text: '52 + 35' },
      { id: 'b', text: '60 + 27' },
      { id: 'c', text: '45 + 42' },
      { id: 'd', text: '50 + 35' },
    ],
    correctAnswer: 'd',
    explanation: 'A、B、C三个算式的结果都是87，只有D的结果是85，所以D不同。',
    hint: '分别计算每个算式的结果，找出不同的那个',
  },
];

/**
 * 关卡 19 高手难度题目：深海霸王终极炮
 * 主题：求一个数比另一个数多（少）几 - 深海霸王的故事
 * 场景：小俊救援队，炫卡斗士团队救援成功深海霸王成为伙伴
 * 难度定位：拓展挑战（多步计算、逻辑推理、开放性问题）
 */
export const level19HardQuestions: Question[] = [
  // 第1题：多步计算（三个数相加）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '深海霸王修复了58个炫卡装备，小俊团队修复了42个，星际游侠修复了35个，他们一共修复了多少个炫卡装备？',
    instruction: '把深海霸王、小俊团队、星际游侠的修复数量拖到一起，计算总数。',
    items: [
      { id: 'deepsea', name: '深海霸王 58个' },
      { id: 'team', name: '小俊团队 42个' },
      { id: 'star', name: '星际游侠 35个' },
    ],
    targets: [
      { id: 'total', name: '总装备数', accepts: ['deepsea', 'team', 'star'], position: { x: 0, y: 30 }, size: { width: 280, height: 200 } },
    ],
    calculation: {
      type: 'sum',
      values: [58, 42, 35],
      result: 135,
      label: '总装备数',
    },
    explanation: '部分 + 部分 + 部分 = 整体。58 + 42 + 35 = 135（个），一共修复了135个炫卡装备。',
    hint: '把三个团队的修复数量加起来',
  },

  // 第2题：逆向思维（三个数求剩余）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '他们一共修复了135个炫卡装备，其中58个是深海霸王修复的，42个是小俊团队修复的，星际游侠修复了几个？',
    answer: '35',
    explanation: '整体 - 部分 - 部分 = 另一部分。135 - 58 - 42 = 35（个），星际游侠修复了35个。',
    hint: '用总数减去深海霸王和小俊团队修复的数量',
  },

  // 第3题：逻辑推理（两步比较）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '小俊团队有100个战斗装备，深海霸王比小俊团队少22个，星际游侠比深海霸王多15个，星际游侠有几个？',
    options: [
      { id: 'a', text: '93个' },
      { id: 'b', text: '78个' },
      { id: 'c', text: '85个' },
      { id: 'd', text: '105个' },
    ],
    correctAnswer: 'a',
    explanation: '先算深海霸王：100-22=78（个），再算星际游侠：78+15=93（个）。',
    hint: '先算深海霸王的数量，再算星际游侠的数量',
  },

  // 第4题：多选题（多步计算验证）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '深海霸王有85个战斗能量，作战消耗了38个，又获得了补给20个，现在有几个？下面哪些说法正确？',
    options: [
      { id: 'a', text: '消耗后还剩47个' },
      { id: 'b', text: '现在有67个' },
      { id: 'c', text: '消耗后还剩57个' },
      { id: 'd', text: '现在有77个' },
    ],
    correctAnswers: ['a', 'b'],
    explanation: '先算消耗后剩余：85-38=47（个）✅，再算补给后总数：47+20=67（个）✅',
    hint: '先算消耗后剩余，再算补给后总数',
  },

  // 第5题：找规律题（三个数相加）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的结果和其他三个不同？',
    options: [
      { id: 'a', text: '58 + 42 + 35 = 135' },
      { id: 'b', text: '60 + 40 + 35 = 135' },
      { id: 'c', text: '55 + 45 + 35 = 135' },
      { id: 'd', text: '50 + 40 + 35 = 125' },
    ],
    correctAnswer: 'd',
    explanation: 'A、B、C三个算式的结果都是135，只有D的结果是125，所以D不同。',
    hint: '分别计算每个算式的结果，找出不同的那个',
  },
];

/**
 * 按难度分组的题目
 */
export const level19QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level19EasyQuestions,
  [DifficultyLevel.MEDIUM]: level19MediumQuestions,
  [DifficultyLevel.HARD]: level19HardQuestions,
};