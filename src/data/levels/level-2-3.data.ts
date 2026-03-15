/**
 * 关卡 2-3 题目数据：20 以内退位减法（第 3 课时）
 * 主题：连击挑战 - 速度练习
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 关卡 2-3 题目数据
 */
export const level2_3Questions: Question[] = [
  // 题目 1：选择题
  {
    type: QuestionType.CHOICE,
    question: '14 - 6 = ?',
    options: [
      { id: 'a', text: '7' },
      { id: 'b', text: '8' },
      { id: 'c', text: '9' },
      { id: 'd', text: '10' },
    ],
    correctAnswer: 'b',
    explanation: '14 - 6，用破十法：10 - 6 = 4，4 + 4 = 8！',
    hint: '把 14 分成 10 和 4',
  },

  // 题目 2：选择题
  {
    type: QuestionType.CHOICE,
    question: '15 - 7 = ?',
    options: [
      { id: 'a', text: '7' },
      { id: 'b', text: '8' },
      { id: 'c', text: '9' },
      { id: 'd', text: '10' },
    ],
    correctAnswer: 'b',
    explanation: '15 - 7，用破十法：10 - 7 = 3，3 + 5 = 8！',
    hint: '把 15 分成 10 和 5',
  },

  // 题目 3：多选题
  {
    type: QuestionType.MULTI_SELECT,
    question: '下面哪些算式的结果是 8？',
    options: [
      { id: 'a', text: '14 - 6' },
      { id: 'b', text: '13 - 5' },
      { id: 'c', text: '15 - 8' },
      { id: 'd', text: '12 - 4' },
      { id: 'e', text: '11 - 3' },
    ],
    correctAnswers: ['a', 'b', 'd', 'e'],
    explanation: '14-6=8，13-5=8，12-4=8，11-3=8！15-8=7 不是 8。',
    hint: '逐一计算每个算式',
  },

  // 题目 4：选择题
  {
    type: QuestionType.CHOICE,
    question: '17 - 8 = ?',
    options: [
      { id: 'a', text: '8' },
      { id: 'b', text: '9' },
      { id: 'c', text: '10' },
      { id: 'd', text: '11' },
    ],
    correctAnswer: 'b',
    explanation: '17 - 8，用破十法：10 - 8 = 2，2 + 7 = 9！',
    hint: '把 17 分成 10 和 7',
  },

  // 题目 5：连击模式 - 快速答题
  {
    type: QuestionType.COMBO,
    question: '连击挑战！在 30 秒内完成以下题目：',
    config: {
      questions: [
        {
          type: QuestionType.CHOICE,
          question: '13 - 9 = ?',
          options: [
            { id: 'a', text: '3' },
            { id: 'b', text: '4' },
            { id: 'c', text: '5' },
            { id: 'd', text: '6' },
          ],
          correctAnswer: 'b',
          explanation: '13 - 9 = 4',
        },
        {
          type: QuestionType.CHOICE,
          question: '16 - 9 = ?',
          options: [
            { id: 'a', text: '6' },
            { id: 'b', text: '7' },
            { id: 'c', text: '8' },
            { id: 'd', text: '9' },
          ],
          correctAnswer: 'b',
          explanation: '16 - 9 = 7',
        },
        {
          type: QuestionType.CHOICE,
          question: '18 - 9 = ?',
          options: [
            { id: 'a', text: '8' },
            { id: 'b', text: '9' },
            { id: 'c', text: '10' },
            { id: 'd', text: '11' },
          ],
          correctAnswer: 'b',
          explanation: '18 - 9 = 9',
        },
      ],
      timeLimit: 30,
      comboThreshold: 3,
      comboBonusStars: 5,
    },
    explanation: '连击挑战完成！',
  },
];
