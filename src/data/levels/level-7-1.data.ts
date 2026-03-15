/**
 * 关卡 7-1 题目数据：欢乐购物街（第 1 课时）
 * 主题：认识人民币
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 关卡 7-1 题目数据
 */
export const level7_1Questions: Question[] = [
  // 题目 1：选择题 - 认识人民币单位
  {
    type: QuestionType.CHOICE,
    question: '人民币的单位有哪些？',
    options: [
      { id: 'a', text: '元、角、分' },
      { id: 'b', text: '米、分米、厘米' },
      { id: 'c', text: '千克、克' },
      { id: 'd', text: '时、分、秒' },
    ],
    correctAnswer: 'a',
    explanation: '人民币的单位有元、角、分！',
    hint: '元是最大的单位，分是最小的单位',
  },

  // 题目 2：选择题 - 元角换算
  {
    type: QuestionType.CHOICE,
    question: '1 元等于多少角？',
    options: [
      { id: 'a', text: '5 角' },
      { id: 'b', text: '8 角' },
      { id: 'c', text: '10 角' },
      { id: 'd', text: '100 角' },
    ],
    correctAnswer: 'c',
    explanation: '1 元 = 10 角！',
    hint: '1 元等于 10 角',
  },

  // 题目 3：选择题 - 角分换算
  {
    type: QuestionType.CHOICE,
    question: '1 角等于多少分？',
    options: [
      { id: 'a', text: '5 分' },
      { id: 'b', text: '10 分' },
      { id: 'c', text: '50 分' },
      { id: 'd', text: '100 分' },
    ],
    correctAnswer: 'b',
    explanation: '1 角 = 10 分！',
    hint: '1 角等于 10 分',
  },

  // 题目 4：填空题 - 换算练习
  {
    type: QuestionType.FILL_BLANK,
    question: '3 元 = _角',
    answer: '30',
    explanation: '3 元 = 30 角！1 元=10 角，3 元就是 3 个 10 角，等于 30 角。',
    hint: '1 元是 10 角，3 元是几个 10 角？',
  },

  // 题目 5：选择题 - 简单计算
  {
    type: QuestionType.CHOICE,
    question: '2 元 5 角等于多少角？',
    options: [
      { id: 'a', text: '20 角' },
      { id: 'b', text: '25 角' },
      { id: 'c', text: '30 角' },
      { id: 'd', text: '35 角' },
    ],
    correctAnswer: 'b',
    explanation: '2 元 5 角 = 25 角！2 元=20 角，20 角 +5 角=25 角。',
    hint: '先把元换算成角，再加角',
  },

  // 题目 6：选择题 - 购物应用
  {
    type: QuestionType.CHOICE,
    question: '一支铅笔 8 角钱，小明拿了 1 元钱去买，应该找回多少钱？',
    options: [
      { id: 'a', text: '1 角' },
      { id: 'b', text: '2 角' },
      { id: 'c', text: '3 角' },
      { id: 'd', text: '4 角' },
    ],
    correctAnswer: 'b',
    explanation: '应该找回 2 角！1 元=10 角，10 角 -8 角=2 角。',
    hint: '1 元等于 10 角，减去 8 角',
  },
];
