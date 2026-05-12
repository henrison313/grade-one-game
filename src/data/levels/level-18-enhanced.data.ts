import type { Question, QuestionType } from '@/types';
import { DifficultyLevel } from '@/types';

/**
 * 关卡 18 新手难度题目：爆旋钻探炮
 * 主题：求一个数比另一个数多（少）几 - 爆旋洛克的故事
 * 场景：地球着陆点，爆旋洛克刚从逃生舱出来很害怕
 * 难度定位：基础概念理解（简单加法、简单减法、直观比较）
 */
export const level18EasyQuestions: Question[] = [
  // 第1题：基础概念 - 加法意义（部分与整体）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '爆旋洛克收集了35个钻探零件，小俊送来了27个，他们一共有多少个？',
    instruction: '把爆旋洛克的零件和小俊的零件拖到一起，计算总数。',
    items: [
      { id: 'rock', name: '爆旋洛克 35个' },
      { id: 'jun', name: '小俊 27个' },
    ],
    targets: [
      { id: 'total', name: '总数量', accepts: ['rock', 'jun'], position: { x: 0, y: 30 }, size: { width: 200, height: 120 } },
    ],
    calculation: {
      type: 'sum',
      values: [35, 27],
      result: 62,
      label: '总数量',
    },
    explanation: '部分 + 部分 = 整体。35 + 27 = 62（个），一共有62个钻探零件。',
    hint: '把爆旋洛克的零件和小俊的零件加起来',
  },

  // 第2题：减法意义（独立数字，不复用第1题的数字）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '爆旋洛克有70个钻探零件，用了35个修复钻探车，还剩几个？',
    answer: '35',
    explanation: '整体 - 部分 = 另一部分。70 - 35 = 35（个），还剩35个钻探零件。',
    hint: '用总数减去用掉的数量',
  },

  // 第3题：比较关系 - 谁多谁少
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '爆旋洛克有62个钻头，星际游侠有70个钻头，谁的多？多几个？',
    options: [
      { id: 'a', text: '爆旋洛克多，多8个' },
      { id: 'b', text: '星际游侠多，多8个' },
      { id: 'c', text: '爆旋洛克多，多12个' },
      { id: 'd', text: '星际游侠多，多12个' },
    ],
    correctAnswer: 'b',
    explanation: '比较两个数的大小。70 > 62，所以星际游侠的多。70 - 62 = 8（个），多8个。',
    hint: '先比较大小，再用大数减小数',
  },

  // 第4题：找不同题（选择题）
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

  // 第5题：比较题（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '爆旋洛克有62个钻头，星际游侠有70个钻头，小俊团队有55个钻头，谁的最多？',
    options: [
      { id: 'a', text: '爆旋洛克' },
      { id: 'b', text: '星际游侠' },
      { id: 'c', text: '小俊团队' },
      { id: 'd', text: '一样多' },
    ],
    correctAnswer: 'b',
    explanation: '比较三个数的大小。70 > 62 > 55，所以星际游侠的最多。',
    hint: '比较三个数的大小，找出最大的那个',
  },
];

/**
 * 关卡 18 挑战难度题目：爆旋轰钻炮
 * 主题：求一个数比另一个数多（少）几 - 爆旋洛克的故事
 * 场景：地下矿洞，爆旋洛克在钻探时受伤
 * 难度定位：综合应用（两步计算、逆向思维、场景应用）
 */
export const level18MediumQuestions: Question[] = [
  // 第1题：基础概念 - 加法意义
  {
    type: 'drag' as QuestionType.DRAG,
    question: '爆旋洛克钻探了48米深，小俊团队钻探了36米，他们一共钻探了多少米？',
    instruction: '把爆旋洛克的钻探深度和小俊团队的钻探深度拖到一起，计算总深度。',
    items: [
      { id: 'rock', name: '爆旋洛克 48米' },
      { id: 'team', name: '小俊团队 36米' },
    ],
    targets: [
      { id: 'total', name: '总深度', accepts: ['rock', 'team'], position: { x: 0, y: 30 }, size: { width: 200, height: 120 } },
    ],
    calculation: {
      type: 'sum',
      values: [48, 36],
      result: 84,
      label: '总深度',
    },
    explanation: '部分 + 部分 = 整体。48 + 36 = 84（米），一共钻探了84米。',
    hint: '把两个团队的钻探深度加起来',
  },

  // 第2题：逆向思维 - 求消耗量
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '爆旋洛克有80个钻探能量，钻探时消耗了一些后还剩51个，消耗了几个？',
    answer: '29',
    explanation: '整体 - 剩余 = 消耗。80 - 51 = 29（个），消耗了29个钻探能量。',
    hint: '用总数减去剩余的数量',
  },

  // 第3题：比较关系 - 谁多谁少
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '小俊团队有84个安全护具，爆旋洛克有72个安全护具，谁的多？多几个？',
    options: [
      { id: 'a', text: '小俊团队多，多12个' },
      { id: 'b', text: '爆旋洛克多，多12个' },
      { id: 'c', text: '小俊团队多，多16个' },
      { id: 'd', text: '爆旋洛克多，多16个' },
    ],
    correctAnswer: 'a',
    explanation: '比较两个数的大小。84 > 72，所以小俊团队的多。84 - 72 = 12（个），多12个。',
    hint: '先比较大小，再用大数减小数',
  },

  // 第4题：多选题（找规律 - 结果大于50）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '下面哪些算式的结果大于50？请选出所有正确的。',
    options: [
      { id: 'a', text: '48 + 36 = 84' },
      { id: 'b', text: '80 - 25 = 55' },
      { id: 'c', text: '60 - 23 = 37' },
      { id: 'd', text: '40 + 38 = 78' },
    ],
    correctAnswers: ['a', 'b', 'd'],
    explanation: 'A: 48+36=84>50 ✅，B: 80-25=55>50 ✅，C: 60-23=37<50 ❌，D: 40+38=78>50 ✅',
    hint: '分别计算每个算式的结果，找出大于50的',
  },

  // 第5题：找不同题（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的计算结果与其他三个不同？',
    options: [
      { id: 'a', text: '48 + 36' },
      { id: 'b', text: '50 + 34' },
      { id: 'c', text: '45 + 39' },
      { id: 'd', text: '48 + 34' },
    ],
    correctAnswer: 'd',
    explanation: 'A、B、C三个算式的结果都是84，只有D的结果是82，所以D不同。',
    hint: '分别计算每个算式的结果，找出不同的那个',
  },
];

/**
 * 关卡 18 高手难度题目：爆旋洛克战炮
 * 主题：求一个数比另一个数多（少）几 - 爆旋洛克的故事
 * 场景：小俊基地，爆旋洛克克服恐惧成为伙伴
 * 难度定位：拓展挑战（多步计算、逻辑推理、开放性问题）
 */
export const level18HardQuestions: Question[] = [
  // 第1题：多步计算（三个数相加）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '爆旋洛克修复了52个装备，小俊团队修复了38个，星际游侠修复了25个，他们一共修复了多少个装备？',
    instruction: '把爆旋洛克、小俊团队、星际游侠的修复数量拖到一起，计算总数。',
    items: [
      { id: 'rock', name: '爆旋洛克 52个' },
      { id: 'team', name: '小俊团队 38个' },
      { id: 'star', name: '星际游侠 25个' },
    ],
    targets: [
      { id: 'total', name: '总装备数', accepts: ['rock', 'team', 'star'], position: { x: 0, y: 30 }, size: { width: 280, height: 200 } },
    ],
    calculation: {
      type: 'sum',
      values: [52, 38, 25],
      result: 115,
      label: '总装备数',
    },
    explanation: '部分 + 部分 + 部分 = 整体。52 + 38 + 25 = 115（个），一共修复了115个装备。',
    hint: '把三个团队的修复数量加起来',
  },

  // 第2题：逆向思维（三个数求剩余）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '他们一共修复了115个装备，其中52个是爆旋洛克修复的，38个是小俊团队修复的，星际游侠修复了几个？',
    answer: '25',
    explanation: '整体 - 部分 - 部分 = 另一部分。115 - 52 - 38 = 25（个），星际游侠修复了25个。',
    hint: '用总数减去爆旋洛克和小俊团队修复的数量',
  },

  // 第3题：逻辑推理（两步比较）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '小俊团队有100个战斗装备，爆旋洛克比小俊团队少22个，星际游侠比爆旋洛克多15个，星际游侠有几个？',
    options: [
      { id: 'a', text: '93个' },
      { id: 'b', text: '78个' },
      { id: 'c', text: '85个' },
      { id: 'd', text: '105个' },
    ],
    correctAnswer: 'a',
    explanation: '先算爆旋洛克：100-22=78（个），再算星际游侠：78+15=93（个）。',
    hint: '先算爆旋洛克的数量，再算星际游侠的数量',
  },

  // 第4题：多选题（多步计算验证）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '爆旋洛克有95个战斗能量，作战消耗了38个，又获得了补给25个，现在有几个？下面哪些说法正确？',
    options: [
      { id: 'a', text: '消耗后还剩57个' },
      { id: 'b', text: '现在有82个' },
      { id: 'c', text: '消耗后还剩67个' },
      { id: 'd', text: '现在有72个' },
    ],
    correctAnswers: ['a', 'b'],
    explanation: '先算消耗后剩余：95-38=57（个）✅，再算补给后总数：57+25=82（个）✅',
    hint: '先算消耗后剩余，再算补给后总数',
  },

  // 第5题：找规律题（三个数相加）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的结果和其他三个不同？',
    options: [
      { id: 'a', text: '52 + 38 + 25 = 115' },
      { id: 'b', text: '55 + 35 + 25 = 115' },
      { id: 'c', text: '50 + 40 + 25 = 115' },
      { id: 'd', text: '45 + 35 + 25 = 105' },
    ],
    correctAnswer: 'd',
    explanation: 'A、B、C三个算式的结果都是115，只有D的结果是105，所以D不同。',
    hint: '分别计算每个算式的结果，找出不同的那个',
  },
];

/**
 * 按难度分组的题目
 */
export const level18QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level18EasyQuestions,
  [DifficultyLevel.MEDIUM]: level18MediumQuestions,
  [DifficultyLevel.HARD]: level18HardQuestions,
};