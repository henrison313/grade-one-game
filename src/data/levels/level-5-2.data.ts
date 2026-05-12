/**
 * 关卡 5-2 题目数据：100 以内笔算加减法（第 2 课时）
 * 主题：两位数减两位数（不退位）
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 关卡 5-2 题目数据
 */
export const level5_2Questions: Question[] = [
  // 题目 1：选择题 - 不退位减法
  {
    type: QuestionType.CHOICE,
    question: '68 - 45 = ?',
    options: [
      { id: 'a', text: '13' },
      { id: 'b', text: '23' },
      { id: 'c', text: '33' },
      { id: 'd', text: '27' },
    ],
    correctAnswer: 'b',
    explanation: '68 - 45 = 23！个位 8-5=3，十位 6-4=2，所以是 23。',
    hint: '个位减个位，十位减十位',
  },

  // 题目 2：选择题 - 不退位减法
  {
    type: QuestionType.CHOICE,
    question: '79 - 56 = ?',
    options: [
      { id: 'a', text: '13' },
      { id: 'b', text: '23' },
      { id: 'c', text: '33' },
      { id: 'd', text: '24' },
    ],
    correctAnswer: 'b',
    explanation: '79 - 56 = 23！个位 9-6=3，十位 7-5=2，所以是 23。',
    hint: '个位减个位，十位减十位',
  },

  // 题目 3：填空题 - 竖式计算
  {
    type: QuestionType.FILL_BLANK,
    question: '用竖式计算 87 - 34：\n  8 7\n- 3 4\n-----\n  □ □\n个位是{{___}}，十位是{{___}}',
    answer: ['3', '5'],
    explanation: '87 - 34 = 53！个位 7-4=3，十位 8-3=5。',
    hint: '从个位减起',
  },

  // 题目 4：选择题 - 不退位减法
  {
    type: QuestionType.CHOICE,
    question: '96 - 72 = ?',
    options: [
      { id: 'a', text: '14' },
      { id: 'b', text: '24' },
      { id: 'c', text: '34' },
      { id: 'd', text: '26' },
    ],
    correctAnswer: 'b',
    explanation: '96 - 72 = 24！个位 6-2=4，十位 9-7=2，所以是 24。',
    hint: '个位减个位，十位减十位',
  },

  // 题目 5：选择题 - 应用题
  {
    type: QuestionType.CHOICE,
    question: '小明有 89 元零花钱，买书花了 56 元，还剩多少元？',
    options: [
      { id: 'a', text: '23 元' },
      { id: 'b', text: '33 元' },
      { id: 'c', text: '43 元' },
      { id: 'd', text: '34 元' },
    ],
    correctAnswer: 'b',
    explanation: '89 - 56 = 33 元！个位 9-6=3，十位 8-5=3，所以是 33。',
    hint: '原有的减去花掉的',
  },
];
