/**
 * 关卡 3-1 题目数据：100 以内数的认识（第 1 课时）
 * 主题：数数和数的组成
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 关卡 3-1 题目数据
 */
export const level3_1Questions: Question[] = [
  // 题目 1：选择题
  {
    type: QuestionType.CHOICE,
    question: '35 里面有_个十和_个一',
    options: [
      { id: 'a', text: '3 个十和 5 个一' },
      { id: 'b', text: '5 个十和 3 个一' },
      { id: 'c', text: '3 个十和 3 个一' },
      { id: 'd', text: '5 个十和 5 个一' },
    ],
    correctAnswer: 'a',
    explanation: '35 由 3 个十和 5 个一组成！',
    hint: '35 的十位是 3，个位是 5',
  },

  // 题目 2：选择题
  {
    type: QuestionType.CHOICE,
    question: '下面哪个数最大？',
    options: [
      { id: 'a', text: '67' },
      { id: 'b', text: '76' },
      { id: 'c', text: '69' },
      { id: 'd', text: '71' },
    ],
    correctAnswer: 'b',
    explanation: '76 最大！先看十位，7 比 6 大；再看 76 和 71，十位相同看个位，6 比 1 大。',
    hint: '先比较十位，再比较个位',
  },

  // 题目 3：拖拽题
  {
    type: QuestionType.DRAG,
    question: '把数字拖到正确的组成上',
    instruction: '将左侧的描述拖到右侧对应的数字上',
    items: [
      { id: '1', name: '4 个十和 8 个一' },
      { id: '2', name: '6 个十和 2 个一' },
      { id: '3', name: '9 个十' },
      { id: '4', name: '5 个十和 5 个一' },
    ],
    targets: [
      { id: '48', name: '48', accepts: ['1'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: '62', name: '62', accepts: ['2'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: '90', name: '90', accepts: ['3'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: '55', name: '55', accepts: ['4'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
    ],
    explanation: '4 个十和 8 个一是 48，6 个十和 2 个一是 62，9 个十是 90，5 个十和 5 个一是 55！',
    hint: '几十几就是由几个十和几个一组成的',
  },

  // 题目 4：选择题
  {
    type: QuestionType.CHOICE,
    question: '100 里面有_个十',
    options: [
      { id: 'a', text: '1 个' },
      { id: 'b', text: '10 个' },
      { id: 'c', text: '100 个' },
      { id: 'd', text: '50 个' },
    ],
    correctAnswer: 'b',
    explanation: '100 里面有 10 个十！10、20、30、40、50、60、70、80、90、100，一共 10 个十。',
    hint: '数一数十、二十、三十……到一百有几个十',
  },

  // 题目 5：选择题
  {
    type: QuestionType.CHOICE,
    question: '和 59 相邻的两个数是？',
    options: [
      { id: 'a', text: '58 和 60' },
      { id: 'b', text: '57 和 61' },
      { id: 'c', text: '59 和 60' },
      { id: 'd', text: '58 和 59' },
    ],
    correctAnswer: 'a',
    explanation: '和 59 相邻的两个数是 58 和 60！58 在 59 前面，60 在 59 后面。',
    hint: '相邻就是前一个数和后一个数',
  },
];
