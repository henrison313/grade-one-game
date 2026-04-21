/**
 * 关卡 4-2 题目数据：100 以内口算加减法（第 2 课时）
 * 主题：两位数加减整十数
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 关卡 4-2 题目数据
 */
export const level4_2Questions: Question[] = [
  // 题目 1：选择题 - 两位数加整十数
  {
    type: QuestionType.CHOICE,
    question: '45 + 30 = ?',
    options: [
      { id: 'a', text: '65' },
      { id: 'b', text: '75' },
      { id: 'c', text: '85' },
      { id: 'd', text: '55' },
    ],
    correctAnswer: 'b',
    explanation: '45 + 30 = 75！先算十位：40 + 30 = 70，再加个位 5，等于 75。',
    hint: '十位相加，个位不变',
  },

  // 题目 2：选择题 - 两位数减整十数
  {
    type: QuestionType.CHOICE,
    question: '68 - 40 = ?',
    options: [
      { id: 'a', text: '18' },
      { id: 'b', text: '28' },
      { id: 'c', text: '38' },
      { id: 'd', text: '48' },
    ],
    correctAnswer: 'b',
    explanation: '68 - 40 = 28！先算十位：60 - 40 = 20，再加个位 8，等于 28。',
    hint: '十位相减，个位不变',
  },

  // 题目 3：填空题 - 两位数加减法
  {
    type: QuestionType.FILL_BLANK,
    question: '计算 56 + 20：\n先算 50 + 20 = 70\n再算 70 + {{___}} = 76',
    answer: '6',
    explanation: '56 + 20，先算 50 + 20 = 70，再加个位 6，等于 76！',
    hint: '个位上的 6 直接落下来',
  },

  // 题目 4：选择题 - 比较大小
  {
    type: QuestionType.CHOICE,
    question: '34 + 50 ○ 84，○里应填？',
    options: [
      { id: 'a', text: '>' },
      { id: 'b', text: '<' },
      { id: 'c', text: '=' },
      { id: 'd', text: '无法确定' },
    ],
    correctAnswer: 'c',
    explanation: '34 + 50 = 84，所以填 "="！',
    hint: '先计算 34 + 50 等于多少',
  },

  // 题目 5：选择题 - 应用题
  {
    type: QuestionType.CHOICE,
    question: '小红有 52 本书，又买来 30 本，现在有多少本？',
    options: [
      { id: 'a', text: '72 本' },
      { id: 'b', text: '82 本' },
      { id: 'c', text: '92 本' },
      { id: 'd', text: '62 本' },
    ],
    correctAnswer: 'b',
    explanation: '52 + 30 = 82 本！50 + 30 = 80，80 + 2 = 82。',
    hint: '原来的加上新买的',
  },
];
