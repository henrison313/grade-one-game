/**
 * 关卡 2-4 题目数据：20 以内退位减法（第 4 课时）
 * 主题：综合练习
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 关卡 2-4 题目数据
 */
export const level2_4Questions: Question[] = [
  // 题目 1：选择题
  {
    type: QuestionType.CHOICE,
    question: '19 - 9 = ?',
    options: [
      { id: 'a', text: '9' },
      { id: 'b', text: '10' },
      { id: 'c', text: '11' },
      { id: 'd', text: '12' },
    ],
    correctAnswer: 'b',
    explanation: '19 - 9，用破十法：10 - 9 = 1，1 + 9 = 10！',
    hint: '把 19 分成 10 和 9',
  },

  // 题目 2：填空题
  {
    type: QuestionType.FILL_BLANK,
    question: '计算 15 - 6：\n10 - 6 = 4\n4 + {{___}} = 9',
    answer: '5',
    explanation: '10 - 6 = 4，4 + 5 = 9！',
    hint: '10 减 6 等于几？',
  },

  // 题目 3：选择题
  {
    type: QuestionType.CHOICE,
    question: '11 - 2 = ?',
    options: [
      { id: 'a', text: '8' },
      { id: 'b', text: '9' },
      { id: 'c', text: '10' },
      { id: 'd', text: '11' },
    ],
    correctAnswer: 'b',
    explanation: '11 - 2，用破十法：10 - 2 = 8，8 + 1 = 9！',
    hint: '把 11 分成 10 和 1',
  },

  // 题目 4：选择题
  {
    type: QuestionType.CHOICE,
    question: '14 - 5 = ?',
    options: [
      { id: 'a', text: '8' },
      { id: 'b', text: '9' },
      { id: 'c', text: '10' },
      { id: 'd', text: '11' },
    ],
    correctAnswer: 'b',
    explanation: '14 - 5，用破十法：10 - 5 = 5，5 + 4 = 9！',
    hint: '把 14 分成 10 和 4',
  },

  // 题目 5：填空题
  {
    type: QuestionType.FILL_BLANK,
    question: '在方框里填上合适的数：\n13 - {{___}} = 7',
    answer: '6',
    explanation: '13 - 6 = 7！',
    hint: '想一想，13 减几等于 7？',
  },
];
