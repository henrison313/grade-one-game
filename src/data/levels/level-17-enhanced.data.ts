import type { Question, QuestionType } from '@/types';
import { DifficultyLevel } from '@/types';

/**
 * 关卡 17 新手难度题目：星际穿梭炮
 * 主题：部分与整体 - 星际游侠的故事
 * 场景：星际空间站，收到深海霸王求救信号准备救援
 * 难度定位：基础概念理解（简单加法、简单减法、直观比较）
 */
export const level17EasyQuestions: Question[] = [
  // 第1题：基础概念 - 加法意义（部分与整体）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '星际游侠收集了23个星际碎片，深海霸王送来了18个，他们一共有多少个？',
    instruction: '把星际碎片和深海碎片拖到一起，计算总数。',
    items: [
      { id: 'star', name: '星际游侠 23个' },
      { id: 'deep', name: '深海霸王 18个' },
    ],
    targets: [
      { id: 'total', name: '总数量', accepts: ['star', 'deep'], position: { x: 0, y: 30 }, size: { width: 200, height: 120 } },
    ],
    calculation: {
      type: 'sum',
      values: [23, 18],
      result: 41,
      label: '总数量',
    },
    explanation: '部分 + 部分 = 整体。23 + 18 = 41（个），一共有41个星际碎片。',
    hint: '把星际碎片和深海碎片加起来',
  },

  // 第2题：减法意义（独立数字，不复用第1题的数字）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '星际游侠有50个能量电池，用了28个发射星际光束，还剩几个？',
    answer: '22',
    explanation: '整体 - 部分 = 另一部分。50 - 28 = 22（个），还剩22个能量电池。',
    hint: '用总数减去用掉的数量',
  },

  // 第3题：比较关系 - 谁多谁少
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '星际游侠有41个星际碎片，深海霸王有55个星际碎片，谁的多？多几个？',
    options: [
      { id: 'a', text: '星际游侠多，多14个' },
      { id: 'b', text: '深海霸王多，多14个' },
      { id: 'c', text: '星际游侠多，多8个' },
      { id: 'd', text: '深海霸王多，多8个' },
    ],
    correctAnswer: 'b',
    explanation: '比较两个数的大小。55 > 41，所以深海霸王的多。55 - 41 = 14（个），多14个。',
    hint: '先比较大小，再用大数减小数',
  },

  // 第4题：找不同题（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的计算结果与其他三个不同？',
    options: [
      { id: 'a', text: '23 + 18' },
      { id: 'b', text: '30 + 11' },
      { id: 'c', text: '25 + 16' },
      { id: 'd', text: '20 + 18' },
    ],
    correctAnswer: 'd',
    explanation: 'A、B、C三个算式的结果都是41，只有D的结果是38，所以D不同。',
    hint: '分别计算每个算式的结果，找出不同的那个',
  },

  // 第5题：比较题（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '星际游侠有41个星际碎片，深海霸王有55个星际碎片，小俊团队有30个星际碎片，谁的最多？',
    options: [
      { id: 'a', text: '星际游侠' },
      { id: 'b', text: '深海霸王' },
      { id: 'c', text: '小俊团队' },
      { id: 'd', text: '一样多' },
    ],
    correctAnswer: 'b',
    explanation: '比较三个数的大小。55 > 41 > 30，所以深海霸王的最多。',
    hint: '比较三个数的大小，找出最大的那个',
  },
];

/**
 * 关卡 17 挑战难度题目：星际流星炮
 * 主题：部分与整体 - 星际游侠的故事
 * 场景：海底战场，星际游侠赶到救援
 * 难度定位：综合应用（两步计算、逆向思维、场景应用）
 */
export const level17MediumQuestions: Question[] = [
  // 第1题：基础概念 - 加法意义
  {
    type: 'drag' as QuestionType.DRAG,
    question: '星际游侠的巡逻范围内有35个信号点，深海霸王的区域有27个，他们一共有多少个信号点？',
    instruction: '把星际游侠的信号点和深海霸王的信号点拖到一起，计算总数。',
    items: [
      { id: 'star', name: '星际游侠 35个' },
      { id: 'deep', name: '深海霸王 27个' },
    ],
    targets: [
      { id: 'total', name: '总信号点', accepts: ['star', 'deep'], position: { x: 0, y: 30 }, size: { width: 200, height: 120 } },
    ],
    calculation: {
      type: 'sum',
      values: [35, 27],
      result: 62,
      label: '总信号点',
    },
    explanation: '部分 + 部分 = 整体。35 + 27 = 62（个），一共有62个信号点。',
    hint: '把两个区域的信号点加起来',
  },

  // 第2题：逆向思维 - 求消耗量
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '星际游侠有70个能量晶石，运输中损坏了一些后还剩46个，损坏了几个？',
    answer: '24',
    explanation: '整体 - 剩余 = 消耗。70 - 46 = 24（个），损坏了24个能量晶石。',
    hint: '用总数减去剩余的数量',
  },

  // 第3题：比较关系 - 谁多谁少
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '星际游侠有62个信号点，深海霸王有54个信号点，谁的多？多几个？',
    options: [
      { id: 'a', text: '星际游侠多，多8个' },
      { id: 'b', text: '深海霸王多，多8个' },
      { id: 'c', text: '星际游侠多，多12个' },
      { id: 'd', text: '深海霸王多，多12个' },
    ],
    correctAnswer: 'a',
    explanation: '比较两个数的大小。62 > 54，所以星际游侠的多。62 - 54 = 8（个），多8个。',
    hint: '先比较大小，再用大数减小数',
  },

  // 第4题：多选题（找规律 - 结果大于50）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '下面哪些算式的结果大于50？请选出所有正确的。',
    options: [
      { id: 'a', text: '35 + 27 = 62' },
      { id: 'b', text: '70 - 15 = 55' },
      { id: 'c', text: '60 - 23 = 37' },
      { id: 'd', text: '40 + 38 = 78' },
    ],
    correctAnswers: ['a', 'b', 'd'],
    explanation: 'A: 35+27=62>50 ✅，B: 70-15=55>50 ✅，C: 60-23=37<50 ❌，D: 40+38=78>50 ✅',
    hint: '分别计算每个算式的结果，找出大于50的',
  },

  // 第5题：找不同题（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的计算结果与其他三个不同？',
    options: [
      { id: 'a', text: '35 + 27' },
      { id: 'b', text: '40 + 22' },
      { id: 'c', text: '30 + 32' },
      { id: 'd', text: '35 + 25' },
    ],
    correctAnswer: 'd',
    explanation: 'A、B、C三个算式的结果都是62，只有D的结果是60，所以D不同。',
    hint: '分别计算每个算式的结果，找出不同的那个',
  },
];

/**
 * 关卡 17 高手难度题目：银河守护炮
 * 主题：部分与整体 - 星际游侠的故事
 * 场景：深海决战，击败鳄鱼精
 * 难度定位：拓展挑战（多步计算、逻辑推理、开放性问题）
 */
export const level17HardQuestions: Question[] = [
  // 第1题：多步计算（三个数相加）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '星际游侠的舰队有48艘战舰，深海霸王的部队有34艘战舰，小俊团队的舰队有25艘战舰，三支部队一共有多少艘？',
    instruction: '把星际游侠、深海霸王、小俊团队的战舰拖到一起，计算总数。',
    items: [
      { id: 'star', name: '星际游侠 48艘' },
      { id: 'deep', name: '深海霸王 34艘' },
      { id: 'jun', name: '小俊团队 25艘' },
    ],
    targets: [
      { id: 'total', name: '总战舰数', accepts: ['star', 'deep', 'jun'], position: { x: 0, y: 30 }, size: { width: 280, height: 200 } },
    ],
    calculation: {
      type: 'sum',
      values: [48, 34, 25],
      result: 107,
      label: '总战舰数',
    },
    explanation: '部分 + 部分 + 部分 = 整体。48 + 34 + 25 = 107（艘），三支部队一共有107艘战舰。',
    hint: '把三支舰队的战舰加起来',
  },

  // 第2题：逆向思维（三个数求剩余）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '三支部队一共有107艘战舰，其中48艘是星际游侠的，34艘是深海霸王的，小俊团队有几艘？',
    answer: '25',
    explanation: '整体 - 部分 - 部分 = 另一部分。107 - 48 - 34 = 25（艘），小俊团队有25艘战舰。',
    hint: '用总数减去星际游侠和深海霸王的战舰数量',
  },

  // 第3题：逻辑推理（两步比较）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '星际游侠有100个能量晶石，深海霸王比星际游侠少18个，小俊团队比深海霸王多12个，小俊团队有几个？',
    options: [
      { id: 'a', text: '94个' },
      { id: 'b', text: '82个' },
      { id: 'c', text: '88个' },
      { id: 'd', text: '106个' },
    ],
    correctAnswer: 'a',
    explanation: '先算深海霸王：100-18=82（个），再算小俊团队：82+12=94（个）。',
    hint: '先算深海霸王的数量，再算小俊团队的数量',
  },

  // 第4题：多选题（多步计算验证）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '星际游侠有95艘舰船，前期作战损失了36艘，又获得了22艘补给，现在还有几艘？下面哪些说法正确？',
    options: [
      { id: 'a', text: '损失后还剩59艘' },
      { id: 'b', text: '现在有81艘' },
      { id: 'c', text: '损失后还剩69艘' },
      { id: 'd', text: '现在有71艘' },
    ],
    correctAnswers: ['a', 'b'],
    explanation: '先算损失后剩余：95-36=59（艘）✅，再算补给后总数：59+22=81（艘）✅',
    hint: '先算损失后剩余，再算补给后总数',
  },

  // 第5题：找规律题（三个数相加）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的结果和其他三个不同？',
    options: [
      { id: 'a', text: '48 + 34 + 25 = 107' },
      { id: 'b', text: '50 + 32 + 25 = 107' },
      { id: 'c', text: '45 + 37 + 25 = 107' },
      { id: 'd', text: '40 + 30 + 25 = 95' },
    ],
    correctAnswer: 'd',
    explanation: 'A、B、C三个算式的结果都是107，只有D的结果是95，所以D不同。',
    hint: '分别计算每个算式的结果，找出不同的那个',
  },
];

/**
 * 按难度分组的题目
 */
export const level17QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level17EasyQuestions,
  [DifficultyLevel.MEDIUM]: level17MediumQuestions,
  [DifficultyLevel.HARD]: level17HardQuestions,
};