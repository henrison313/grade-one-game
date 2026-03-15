/**
 * 关卡 5-1 题目数据：100 以内笔算加减法（第 1 课时）
 * 主题：两位数加两位数（不进位）
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 关卡 5-1 题目数据
 */
export const level5_1Questions: Question[] = [
  // 题目 1：选择题 - 不进位加法
  {
    type: QuestionType.CHOICE,
    question: '23 + 45 = ?',
    options: [
      { id: 'a', text: '58' },
      { id: 'b', text: '68' },
      { id: 'c', text: '78' },
      { id: 'd', text: '88' },
    ],
    correctAnswer: 'b',
    explanation: '23 + 45 = 68！个位 3+5=8，十位 2+4=6，所以是 68。',
    hint: '个位加个位，十位加十位',
  },

  // 题目 2：选择题 - 不进位加法
  {
    type: QuestionType.CHOICE,
    question: '34 + 52 = ?',
    options: [
      { id: 'a', text: '76' },
      { id: 'b', text: '86' },
      { id: 'c', text: '96' },
      { id: 'd', text: '66' },
    ],
    correctAnswer: 'b',
    explanation: '34 + 52 = 86！个位 4+2=6，十位 3+5=8，所以是 86。',
    hint: '个位加个位，十位加十位',
  },

  // 题目 3：填空题 - 竖式计算
  {
    type: QuestionType.FILL_BLANK,
    question: '用竖式计算 41 + 25：\n  4 1\n+ 2 5\n-----\n  □ □\n个位是_，十位是_',
    answer: '6,6',
    explanation: '41 + 25 = 66！个位 1+5=6，十位 4+2=6。',
    hint: '从个位加起',
  },

  // 题目 4：选择题 - 不进位加法
  {
    type: QuestionType.CHOICE,
    question: '56 + 23 = ?',
    options: [
      { id: 'a', text: '69' },
      { id: 'b', text: '79' },
      { id: 'c', text: '89' },
      { id: 'd', text: '99' },
    ],
    correctAnswer: 'b',
    explanation: '56 + 23 = 79！个位 6+3=9，十位 5+2=7，所以是 79。',
    hint: '个位加个位，十位加十位',
  },

  // 题目 5：选择题 - 应用题
  {
    type: QuestionType.CHOICE,
    question: '一班有 32 人，二班有 45 人，两个班一共有多少人？',
    options: [
      { id: 'a', text: '67 人' },
      { id: 'b', text: '77 人' },
      { id: 'c', text: '87 人' },
      { id: 'd', text: '97 人' },
    ],
    correctAnswer: 'b',
    explanation: '32 + 45 = 77 人！个位 2+5=7，十位 3+4=7，所以是 77。',
    hint: '把两个班的人数加起来',
  },
];
