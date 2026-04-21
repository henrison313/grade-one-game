/**
 * 关卡 4-1 题目数据：100 以内口算加减法（第 1 课时）
 * 主题：整十数加减整十数
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 关卡 4-1 题目数据
 */
export const level4_1Questions: Question[] = [
  // 题目 1：选择题 - 整十数加法
  {
    type: QuestionType.CHOICE,
    question: '30 + 20 = ?',
    options: [
      { id: 'a', text: '40' },
      { id: 'b', text: '50' },
      { id: 'c', text: '60' },
      { id: 'd', text: '70' },
    ],
    correctAnswer: 'b',
    explanation: '30 + 20 = 50！3 个十加 2 个十等于 5 个十，就是 50。',
    hint: '3 个十加 2 个十等于几个十？',
  },

  // 题目 2：选择题 - 整十数减法
  {
    type: QuestionType.CHOICE,
    question: '70 - 40 = ?',
    options: [
      { id: 'a', text: '20' },
      { id: 'b', text: '30' },
      { id: 'c', text: '40' },
      { id: 'd', text: '50' },
    ],
    correctAnswer: 'b',
    explanation: '70 - 40 = 30！7 个十减 4 个十等于 3 个十，就是 30。',
    hint: '7 个十减 4 个十等于几个十？',
  },

  // 题目 3：填空题 - 整十数加减法
  {
    type: QuestionType.FILL_BLANK,
    question: '50 + {{___}} = 90',
    answer: '40',
    explanation: '50 + 40 = 90！5 个十加 4 个十等于 9 个十。',
    hint: '5 个十加几个十等于 9 个十？',
  },

  // 题目 4：选择题 - 整十数连加
  {
    type: QuestionType.CHOICE,
    question: '20 + 30 + 10 = ?',
    options: [
      { id: 'a', text: '50' },
      { id: 'b', text: '60' },
      { id: 'c', text: '70' },
      { id: 'd', text: '80' },
    ],
    correctAnswer: 'b',
    explanation: '20 + 30 + 10 = 60！2 个十加 3 个十再加 1 个十等于 6 个十。',
    hint: '2 + 3 + 1 = 6，所以 20 + 30 + 10 = 60',
  },

  // 题目 5：选择题 - 整十数连减
  {
    type: QuestionType.CHOICE,
    question: '80 - 20 - 30 = ?',
    options: [
      { id: 'a', text: '20' },
      { id: 'b', text: '30' },
      { id: 'c', text: '40' },
      { id: 'd', text: '50' },
    ],
    correctAnswer: 'b',
    explanation: '80 - 20 - 30 = 30！8 个十减 2 个十再减 3 个十等于 3 个十。',
    hint: '8 - 2 - 3 = 3，所以 80 - 20 - 30 = 30',
  },
];
