/**
 * 关卡 6 题目数据：BOSS 关 - 综合练习
 * 主题：100 以内数的认识与加减法综合应用
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 关卡 6 题目数据
 */
export const level6Questions: Question[] = [
  // 题目 1：选择题 - 数的组成
  {
    type: QuestionType.CHOICE,
    question: '76 里面有_个十和_个一',
    options: [
      { id: 'a', text: '7 个十和 6 个一' },
      { id: 'b', text: '6 个十和 7 个一' },
      { id: 'c', text: '7 个十和 7 个一' },
      { id: 'd', text: '6 个十和 6 个一' },
    ],
    correctAnswer: 'a',
    explanation: '76 里面有 7 个十和 6 个一！76 = 70 + 6',
    hint: '76 的十位是 7，个位是 6',
  },

  // 题目 2：选择题 - 比较大小
  {
    type: QuestionType.CHOICE,
    question: '下面哪个数最接近 100？',
    options: [
      { id: 'a', text: '89' },
      { id: 'b', text: '91' },
      { id: 'c', text: '98' },
      { id: 'd', text: '85' },
    ],
    correctAnswer: 'c',
    explanation: '98 最接近 100！100-98=2，差距最小。',
    hint: '计算每个数与 100 的差',
  },

  // 题目 3：选择题 - 整十数加减
  {
    type: QuestionType.CHOICE,
    question: '60 + 30 - 40 = ?',
    options: [
      { id: 'a', text: '40' },
      { id: 'b', text: '50' },
      { id: 'c', text: '60' },
      { id: 'd', text: '70' },
    ],
    correctAnswer: 'b',
    explanation: '60 + 30 - 40 = 50！6 个十加 3 个十等于 9 个十，再减 4 个十等于 5 个十。',
    hint: '从左往右依次计算',
  },

  // 题目 4：选择题 - 两位数加减法
  {
    type: QuestionType.CHOICE,
    question: '47 + 32 = ?',
    options: [
      { id: 'a', text: '69' },
      { id: 'b', text: '79' },
      { id: 'c', text: '89' },
      { id: 'd', text: '75' },
    ],
    correctAnswer: 'b',
    explanation: '47 + 32 = 79！个位 7+2=9，十位 4+3=7，所以是 79。',
    hint: '个位加个位，十位加十位',
  },

  // 题目 5：选择题 - 两位数减法
  {
    type: QuestionType.CHOICE,
    question: '85 - 63 = ?',
    options: [
      { id: 'a', text: '12' },
      { id: 'b', text: '22' },
      { id: 'c', text: '32' },
      { id: 'd', text: '28' },
    ],
    correctAnswer: 'b',
    explanation: '85 - 63 = 22！个位 5-3=2，十位 8-6=2，所以是 22。',
    hint: '个位减个位，十位减十位',
  },

  // 题目 6：填空题 - 数的顺序
  {
    type: QuestionType.FILL_BLANK,
    question: '按规律填数：25、30、35、_、_、50',
    answer: '40,45',
    explanation: '规律是每次加 5：25、30、35、40、45、50！',
    hint: '每个数比前一个数多 5',
  },

  // 题目 7：选择题 - 应用题
  {
    type: QuestionType.CHOICE,
    question: '商店里有 56 个苹果，上午卖出 23 个，下午又运来 15 个，现在有多少个苹果？',
    options: [
      { id: 'a', text: '38 个' },
      { id: 'b', text: '48 个' },
      { id: 'c', text: '58 个' },
      { id: 'd', text: '42 个' },
    ],
    correctAnswer: 'b',
    explanation: '56 - 23 + 15 = 48 个！先算 56-23=33，再算 33+15=48。',
    hint: '原有的减去卖出的，再加运来的',
  },

  // 题目 8：选择题 - 推理题
  {
    type: QuestionType.CHOICE,
    question: '一个两位数，十位上的数比个位上的数大 3，这个数可能是？',
    options: [
      { id: 'a', text: '25' },
      { id: 'b', text: '41' },
      { id: 'c', text: '58' },
      { id: 'd', text: '73' },
    ],
    correctAnswer: 'b',
    explanation: '41 符合条件！十位 4 比个位 1 大 3（4-1=3）。',
    hint: '十位数字 - 个位数字 = 3',
  },

  // 题目 9：BOSS 挑战题 - 综合应用
  {
    type: QuestionType.CHOICE,
    question: '小明、小红和小丽三人比赛跳绳。小明跳了 67 下，小红比小明多跳 12 下，小丽比小红少跳 5 下。谁跳得最多？',
    options: [
      { id: 'a', text: '小明' },
      { id: 'b', text: '小红' },
      { id: 'c', text: '小丽' },
      { id: 'd', text: '一样多' },
    ],
    correctAnswer: 'b',
    explanation: '小红跳得最多！小明 67 下，小红 67+12=79 下，小丽 79-5=74 下。79>74>67，所以小红最多。',
    hint: '分别算出三人跳的数量再比较',
  },
];
