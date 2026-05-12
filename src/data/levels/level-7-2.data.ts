/**
 * 关卡 7-2 题目数据：欢乐购物街（第 2 课时）
 * 主题：简单购物计算
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 关卡 7-2 题目数据
 */
export const level7_2Questions: Question[] = [
  // 题目 1：选择题 - 简单加法
  {
    type: QuestionType.CHOICE,
    question: '买一个本子 3 元 5 角，一支笔 2 元，一共需要多少钱？',
    options: [
      { id: 'a', text: '5 元' },
      { id: 'b', text: '5 元 5 角' },
      { id: 'c', text: '6 元' },
      { id: 'd', text: '6 元 5 角' },
    ],
    correctAnswer: 'b',
    explanation: '一共需要 5 元 5 角！3 元 5 角 +2 元=5 元 5 角。',
    hint: '元加元，角不变',
  },

  // 题目 2：选择题 - 简单减法
  {
    type: QuestionType.CHOICE,
    question: '小明有 10 元钱，买了一个面包花去 6 元 5 角，还剩多少钱？',
    options: [
      { id: 'a', text: '3 元' },
      { id: 'b', text: '3 元 5 角' },
      { id: 'c', text: '4 元' },
      { id: 'd', text: '4 元 5 角' },
    ],
    correctAnswer: 'b',
    explanation: '还剩 3 元 5 角！10 元 -6 元 5 角=3 元 5 角。',
    hint: '10 元可以看成 9 元 10 角',
  },

  // 题目 3：选择题 - 比较价格
  {
    type: QuestionType.CHOICE,
    question: '下面哪种商品最贵？',
    options: [
      { id: 'a', text: '橡皮 8 角' },
      { id: 'b', text: '铅笔 1 元 2 角' },
      { id: 'c', text: '本子 9 角' },
      { id: 'd', text: '尺子 1 元' },
    ],
    correctAnswer: 'b',
    explanation: '铅笔最贵！1 元 2 角>1 元>9 角>8 角。',
    hint: '先比较元，再比较角',
  },

  // 题目 4：填空题 - 付钱方法
  {
    type: QuestionType.FILL_BLANK,
    question: '买一个文具盒需要 15 元，可以付{{___}}张 10 元和{{___}}张 1 元',
    answer: ['1', '5'],
    explanation: '可以付 1 张 10 元和 5 张 1 元！10 元 +5 元=15 元。',
    hint: '15 可以分成 10 和 5',
  },

  // 题目 5：选择题 - 找零计算
  {
    type: QuestionType.CHOICE,
    question: '小红买了一个书包花了 48 元，她付了 50 元，应该找回多少钱？',
    options: [
      { id: 'a', text: '1 元' },
      { id: 'b', text: '2 元' },
      { id: 'c', text: '3 元' },
      { id: 'd', text: '4 元' },
    ],
    correctAnswer: 'b',
    explanation: '应该找回 2 元！50 元 -48 元=2 元。',
    hint: '付的钱减去花的钱',
  },

  // 题目 6：选择题 - 综合应用
  {
    type: QuestionType.CHOICE,
    question: '小亮想买一辆 35 元的玩具车，他已经存了 20 元，还需要存多少钱？',
    options: [
      { id: 'a', text: '10 元' },
      { id: 'b', text: '15 元' },
      { id: 'c', text: '20 元' },
      { id: 'd', text: '25 元' },
    ],
    correctAnswer: 'b',
    explanation: '还需要存 15 元！35 元 -20 元=15 元。',
    hint: '总价减去已存的',
  },
];
