/**
 * 关卡 3-3 题目数据：100 以内数的认识（第 3 课时）
 * 主题：数的顺序和比较大小
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 关卡 3-3 题目数据
 */
export const level3_3Questions: Question[] = [
  // 题目 1：选择题 - 数的大小比较
  {
    type: QuestionType.CHOICE,
    question: '下面哪个数最大？',
    options: [
      { id: 'a', text: '89' },
      { id: 'b', text: '98' },
      { id: 'c', text: '90' },
      { id: 'd', text: '88' },
    ],
    correctAnswer: 'b',
    explanation: '98 最大！先比较十位，9 比 8 大；98 和 90 十位相同，比较个位，8 比 0 大。',
    hint: '先比十位，再比个位',
  },

  // 题目 2：选择题 - 数的大小比较
  {
    type: QuestionType.CHOICE,
    question: '45 和 54，哪个数大？',
    options: [
      { id: 'a', text: '45' },
      { id: 'b', text: '54' },
      { id: 'c', text: '一样大' },
      { id: 'd', text: '无法比较' },
    ],
    correctAnswer: 'b',
    explanation: '54 大！十位上 5 比 4 大，所以 54 比 45 大。',
    hint: '比较十位上的数字',
  },

  // 题目 3：连线题 - 配对大小关系
  {
    type: QuestionType.LINK,
    question: '把数对和较大的数连起来',
    pairs: [
      { id: '1', left: '67 和 65', right: '67' },
      { id: '2', left: '89 和 79', right: '89' },
      { id: '3', left: '100 和 99', right: '100' },
      { id: '4', left: '50 和 49', right: '50' },
    ],
    explanation: '67 比 65 大，89 比 79 大，100 比 99 大，50 比 49 大！',
  },

  // 题目 4：选择题 - 数的顺序
  {
    type: QuestionType.CHOICE,
    question: '按从小到大的顺序，排在 79 后面的数是？',
    options: [
      { id: 'a', text: '78' },
      { id: 'b', text: '80' },
      { id: 'c', text: '70' },
      { id: 'd', text: '90' },
    ],
    correctAnswer: 'b',
    explanation: '排在 79 后面的数是 80！79 后面是 80。',
    hint: '79 后面是哪个数？',
  },

  // 题目 5：选择题 - 数的比较
  {
    type: QuestionType.CHOICE,
    question: '比 60 大但比 70 小的数有几个？',
    options: [
      { id: 'a', text: '8 个' },
      { id: 'b', text: '9 个' },
      { id: 'c', text: '10 个' },
      { id: 'd', text: '11 个' },
    ],
    correctAnswer: 'b',
    explanation: '比 60 大但比 70 小的数有 9 个：61、62、63、64、65、66、67、68、69！',
    hint: '从 61 数到 69',
  },
];
