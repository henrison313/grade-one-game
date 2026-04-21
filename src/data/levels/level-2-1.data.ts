/**
 * 关卡 2-1 题目数据：20 以内退位减法（第 1 课时）
 * 主题：破十法初步认识
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 关卡 2-1 题目数据
 */
export const level2_1Questions: Question[] = [
  // 题目 1：选择题 - 破十法概念
  {
    type: QuestionType.CHOICE,
    question: '15 - 9 = ?',
    options: [
      { id: 'a', text: '5' },
      { id: 'b', text: '6' },
      { id: 'c', text: '7' },
      { id: 'd', text: '8' },
    ],
    correctAnswer: 'b',
    explanation: '15 - 9，先把 15 分成 10 和 5，10 - 9 = 1，1 + 5 = 6！',
    hint: '用破十法：把 15 分成 10 和 5',
  },

  // 题目 2：填空题 - 破十法步骤
  {
    type: QuestionType.FILL_BLANK,
    question: '计算 14 - 8：先把 14 分成 10 和 4，10 - 8 = 2，2 + {{___}} = 6',
    answer: '4',
    explanation: '14 分成 10 和 4，10 - 8 = 2，2 + 4 = 6！',
    hint: '14 可以分成 10 和几？',
  },

  // 题目 3：选择题
  {
    type: QuestionType.CHOICE,
    question: '13 - 7 = ?',
    options: [
      { id: 'a', text: '5' },
      { id: 'b', text: '6' },
      { id: 'c', text: '7' },
      { id: 'd', text: '8' },
    ],
    correctAnswer: 'b',
    explanation: '13 - 7，用破十法：10 - 7 = 3，3 + 3 = 6！',
    hint: '把 13 分成 10 和 3',
  },

  // 题目 4：选择题
  {
    type: QuestionType.CHOICE,
    question: '17 - 9 = ?',
    options: [
      { id: 'a', text: '7' },
      { id: 'b', text: '8' },
      { id: 'c', text: '9' },
      { id: 'd', text: '10' },
    ],
    correctAnswer: 'b',
    explanation: '17 - 9，用破十法：10 - 9 = 1，1 + 7 = 8！',
    hint: '把 17 分成 10 和 7',
  },

  // 题目 5：填空题
  {
    type: QuestionType.FILL_BLANK,
    question: '计算 16 - 8：10 - 8 = 2，2 + {{___}} = 8',
    answer: '6',
    explanation: '10 - 8 = 2，2 + 6 = 8！',
    hint: '10 减 8 等于几？',
  },
];
