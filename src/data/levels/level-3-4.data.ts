/**
 * 关卡 3-4 题目数据：100 以内数的认识（第 4 课时）
 * 主题：数的组成综合练习
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 关卡 3-4 题目数据
 */
export const level3_4Questions: Question[] = [
  // 题目 1：填空题 - 数的组成
  {
    type: QuestionType.FILL_BLANK,
    question: '78 里面有{{___}}个十和{{___}}个一',
    answer: ['7', '8'],
    explanation: '78 里面有 7 个十和 8 个一！78 = 70 + 8',
    hint: '78 的十位是 7，个位是 8',
  },

  // 题目 2：选择题 - 数的组成
  {
    type: QuestionType.CHOICE,
    question: '6 个十和 3 个一组成的数是？',
    options: [
      { id: 'a', text: '36' },
      { id: 'b', text: '63' },
      { id: 'c', text: '60' },
      { id: 'd', text: '30' },
    ],
    correctAnswer: 'b',
    explanation: '6 个十和 3 个一组成的数是 63！6 个十是 60，3 个一是 3，60+3=63',
    hint: '6 个十是 60，加上 3 个一',
  },

  // 题目 3：选择题 - 数的分解
  {
    type: QuestionType.CHOICE,
    question: '95 可以分成？',
    options: [
      { id: 'a', text: '9 个十和 5 个一' },
      { id: 'b', text: '5 个十和 9 个一' },
      { id: 'c', text: '9 个十和 9 个一' },
      { id: 'd', text: '5 个十和 5 个一' },
    ],
    correctAnswer: 'a',
    explanation: '95 可以分成 9 个十和 5 个一！95 = 90 + 5',
    hint: '95 的十位是 9，个位是 5',
  },

  // 题目 4：填空题 - 数的组成
  {
    type: QuestionType.FILL_BLANK,
    question: '4 个十是{{___}}，10 个十是{{___}}',
    answer: ['40', '100'],
    explanation: '4 个十是 40，10 个十是 100！',
    hint: '1 个十是 10，数一数几个十',
  },

  // 题目 5：选择题 - 综合应用
  {
    type: QuestionType.CHOICE,
    question: '小明有 8 张十元纸币和 6 枚一元硬币，他一共有多少钱？',
    options: [
      { id: 'a', text: '14 元' },
      { id: 'b', text: '86 元' },
      { id: 'c', text: '68 元' },
      { id: 'd', text: '80 元' },
    ],
    correctAnswer: 'b',
    explanation: '8 张十元是 80 元，6 枚一元是 6 元，一共是 86 元！',
    hint: '8 个十和 6 个一组成什么数？',
  },
];
