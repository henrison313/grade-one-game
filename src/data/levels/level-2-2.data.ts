/**
 * 关卡 2-2 题目数据：20 以内退位减法（第 2 课时）
 * 主题：进一步练习破十法
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 关卡 2-2 题目数据
 */
export const level2_2Questions: Question[] = [
  // 题目 1：选择题
  {
    type: QuestionType.CHOICE,
    question: '12 - 5 = ?',
    options: [
      { id: 'a', text: '6' },
      { id: 'b', text: '7' },
      { id: 'c', text: '8' },
      { id: 'd', text: '9' },
    ],
    correctAnswer: 'b',
    explanation: '12 - 5，用破十法：10 - 5 = 5，5 + 2 = 7！',
    hint: '把 12 分成 10 和 2',
  },

  // 题目 2：选择题
  {
    type: QuestionType.CHOICE,
    question: '11 - 4 = ?',
    options: [
      { id: 'a', text: '6' },
      { id: 'b', text: '7' },
      { id: 'c', text: '8' },
      { id: 'd', text: '9' },
    ],
    correctAnswer: 'b',
    explanation: '11 - 4，用破十法：10 - 4 = 6，6 + 1 = 7！',
    hint: '把 11 分成 10 和 1',
  },

  // 题目 3：拖拽题 - 配对算式和答案
  {
    type: QuestionType.DRAG,
    question: '把算式拖到正确的答案上',
    instruction: '将算式拖到下面对应的方框内',
    items: [
      { id: '1', name: '15 - 8' },
      { id: '2', name: '13 - 6' },
      { id: '3', name: '14 - 7' },
      { id: '4', name: '12 - 5' },
    ],
    targets: [
      { id: '7', name: '7', accepts: ['1', '2', '3', '4'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: '6', name: '6', accepts: [], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: '8', name: '8', accepts: [], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: '5', name: '5', accepts: [], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
    ],
    explanation: '这些算式的答案都是 7！',
    hint: '用破十法计算每个算式',
  },

  // 题目 4：选择题
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
    explanation: '18 - 9，用破十法：10 - 9 = 1，1 + 8 = 9！',
    hint: '把 18 分成 10 和 8',
  },

  // 题目 5：选择题
  {
    type: QuestionType.CHOICE,
    question: '16 - 7 = ?',
    options: [
      { id: 'a', text: '8' },
      { id: 'b', text: '9' },
      { id: 'c', text: '10' },
      { id: 'd', text: '11' },
    ],
    correctAnswer: 'b',
    explanation: '16 - 7，用破十法：10 - 7 = 3，3 + 6 = 9！',
    hint: '把 16 分成 10 和 6',
  },
];
