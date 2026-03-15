/**
 * 关卡 3-2 题目数据：100 以内数的认识（第 2 课时）
 * 主题：百数表
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 关卡 3-2 题目数据
 */
export const level3_2Questions: Question[] = [
  // 题目 1：选择题 - 百数表认识
  {
    type: QuestionType.CHOICE,
    question: '百数表里一共有多少个数？',
    options: [
      { id: 'a', text: '90 个' },
      { id: 'b', text: '99 个' },
      { id: 'c', text: '100 个' },
      { id: 'd', text: '101 个' },
    ],
    correctAnswer: 'c',
    explanation: '百数表里一共有 100 个数！从 1 到 100。',
    hint: '百数表从 1 开始，到 100 结束',
  },

  // 题目 2：选择题 - 百数表规律
  {
    type: QuestionType.CHOICE,
    question: '在百数表中，56 下面的数是？',
    options: [
      { id: 'a', text: '55' },
      { id: 'b', text: '57' },
      { id: 'c', text: '66' },
      { id: 'd', text: '46' },
    ],
    correctAnswer: 'c',
    explanation: '56 下面的数是 66！百数表中，每一列下面的数比上面的数十位多 1。',
    hint: '下面的数比 56 多 10',
  },

  // 题目 3：多选题 - 百数表位置
  {
    type: QuestionType.MULTI_SELECT,
    question: '在百数表中，和 78 相邻的数有哪些？',
    options: [
      { id: 'a', text: '77' },
      { id: 'b', text: '79' },
      { id: 'c', text: '68' },
      { id: 'd', text: '88' },
    ],
    correctAnswers: ['a', 'b', 'c', 'd'],
    explanation: '和 78 相邻的数有 4 个：左边 77，右边 79，上面 68，下面 88！',
    hint: '相邻包括左右和上下',
  },

  // 题目 4：选择题 - 百数表规律
  {
    type: QuestionType.CHOICE,
    question: '在百数表中，同一行的数，越往右越？',
    options: [
      { id: 'a', text: '小' },
      { id: 'b', text: '大' },
      { id: 'c', text: '不变' },
      { id: 'd', text: '无法确定' },
    ],
    correctAnswer: 'b',
    explanation: '在百数表中，同一行的数越往右越大！每次增加 1。',
    hint: '从左往右数，数越来越大',
  },

  // 题目 5：选择题 - 百数表应用
  {
    type: QuestionType.CHOICE,
    question: '在百数表中，34 右边的第 3 个数是？',
    options: [
      { id: 'a', text: '36' },
      { id: 'b', text: '37' },
      { id: 'c', text: '64' },
      { id: 'd', text: '31' },
    ],
    correctAnswer: 'b',
    explanation: '34 右边的第 3 个数是 37！34→35→36→37',
    hint: '往右数 3 格',
  },
];
