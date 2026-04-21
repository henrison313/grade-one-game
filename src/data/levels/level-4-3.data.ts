/**
 * 关卡 4-3 题目数据：100 以内口算加减法（第 3 课时）
 * 主题：两位数加减一位数（不进位、不退位）
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 关卡 4-3 题目数据
 */
export const level4_3Questions: Question[] = [
  // 题目 1：选择题 - 两位数加一位数
  {
    type: QuestionType.CHOICE,
    question: '35 + 4 = ?',
    options: [
      { id: 'a', text: '38' },
      { id: 'b', text: '39' },
      { id: 'c', text: '49' },
      { id: 'd', text: '29' },
    ],
    correctAnswer: 'b',
    explanation: '35 + 4 = 39！先算个位：5 + 4 = 9，十位不变，等于 39。',
    hint: '个位相加，十位不变',
  },

  // 题目 2：选择题 - 两位数减一位数
  {
    type: QuestionType.CHOICE,
    question: '78 - 5 = ?',
    options: [
      { id: 'a', text: '72' },
      { id: 'b', text: '73' },
      { id: 'c', text: '83' },
      { id: 'd', text: '63' },
    ],
    correctAnswer: 'b',
    explanation: '78 - 5 = 73！先算个位：8 - 5 = 3，十位不变，等于 73。',
    hint: '个位相减，十位不变',
  },

  // 题目 3：填空题 - 两位数加减法
  {
    type: QuestionType.FILL_BLANK,
    question: '计算 46 + 3：\n先算 6 + 3 = 9\n再算 40 + {{___}} = 49',
    answer: '9',
    explanation: '46 + 3，先算 6 + 3 = 9，再加 40，等于 49！',
    hint: '个位相加的结果加十位',
  },

  // 题目 4：选择题 - 比较大小
  {
    type: QuestionType.CHOICE,
    question: '67 + 2 ○ 69，○里应填？',
    options: [
      { id: 'a', text: '>' },
      { id: 'b', text: '<' },
      { id: 'c', text: '=' },
      { id: 'd', text: '无法确定' },
    ],
    correctAnswer: 'c',
    explanation: '67 + 2 = 69，所以填 "="！',
    hint: '先计算 67 + 2 等于多少',
  },

  // 题目 5：选择题 - 应用题
  {
    type: QuestionType.CHOICE,
    question: '树上有 48 只鸟，飞走了 6 只，还剩多少只？',
    options: [
      { id: 'a', text: '40 只' },
      { id: 'b', text: '42 只' },
      { id: 'c', text: '52 只' },
      { id: 'd', text: '54 只' },
    ],
    correctAnswer: 'b',
    explanation: '48 - 6 = 42 只！8 - 6 = 2，十位不变，等于 42。',
    hint: '原来的减去飞走的',
  },
];
