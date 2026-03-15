/**
 * 关卡 1-3 题目数据：七巧板
 * 主题：通过七巧板游戏进一步巩固对平面图形的认识
 * 七巧板由 7 块板组成：5 个三角形（2 个大、1 个中、1 个小）、1 个正方形、1 个平行四边形
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 关卡 1-3 题目数据
 */
export const level1_3Questions: Question[] = [
  // 题目 1：选择题 - 认识七巧板
  {
    type: QuestionType.CHOICE,
    question: '七巧板一共有几块？',
    options: [
      { id: 'a', text: '5 块' },
      { id: 'b', text: '6 块' },
      { id: 'c', text: '7 块' },
      { id: 'd', text: '8 块' },
    ],
    correctAnswer: 'c',
    explanation: '七巧板一共有 7 块！这也是它名字的由来。',
    hint: '数一数"七"巧板有几个？',
  },

  // 题目 2：选择题 - 七巧板的图形
  {
    type: QuestionType.CHOICE,
    question: '七巧板里没有哪种图形？',
    options: [
      { id: 'a', text: '三角形' },
      { id: 'b', text: '正方形' },
      { id: 'c', text: '圆形' },
      { id: 'd', text: '平行四边形' },
    ],
    correctAnswer: 'c',
    explanation: '七巧板里没有圆形！七巧板由三角形、正方形和平行四边形组成。',
    hint: '七巧板都是直边的图形',
  },

  // 题目 3：多选题 - 七巧板中的三角形
  {
    type: QuestionType.MULTI_SELECT,
    question: '七巧板中有几个三角形？',
    options: [
      { id: 'a', text: '3 个' },
      { id: 'b', text: '4 个' },
      { id: 'c', text: '5 个' },
      { id: 'd', text: '6 个' },
    ],
    correctAnswers: ['c'],
    explanation: '七巧板中有 5 个三角形！分别是 2 个大三角形、1 个中三角形和 2 个小三角形。',
    hint: '三角形在七巧板中最多',
  },

  // 题目 4：选择题 - 图形拼组
  {
    type: QuestionType.CHOICE,
    question: '用两个小三角形可以拼成什么图形？',
    options: [
      { id: 'a', text: '只能拼成三角形' },
      { id: 'b', text: '可以拼成正方形或平行四边形' },
      { id: 'c', text: '只能拼成圆形' },
      { id: 'd', text: '什么都拼不成' },
    ],
    correctAnswer: 'b',
    explanation: '两个小三角形可以拼成正方形（斜边对在一起）或平行四边形（直角边对在一起）！',
    hint: '试试把两个三角形不同边对在一起',
  },

  // 题目 5：选择题 - 七巧板拼图
  {
    type: QuestionType.CHOICE,
    question: '用七巧板可以拼出什么？',
    options: [
      { id: 'a', text: '只能拼正方形' },
      { id: 'b', text: '只能拼动物' },
      { id: 'c', text: '可以拼出各种形状，如房子、船、动物等' },
      { id: 'd', text: '什么都拼不出来' },
    ],
    correctAnswer: 'c',
    explanation: '七巧板非常神奇，可以拼出成千上万种图案！比如房子、小船、小猫、小鱼等等。',
    hint: '七巧板是中国传统的益智玩具',
  },

  // 题目 6：多选题 - 图形识别
  {
    type: QuestionType.MULTI_SELECT,
    question: '下面哪些是七巧板可以拼成的图案？',
    options: [
      { id: 'a', text: '小鱼 🐟' },
      { id: 'b', text: '小猫 🐱' },
      { id: 'c', text: '皮球 🏀' },
      { id: 'd', text: '小船 ⛵' },
      { id: 'e', text: '太阳 ☀️' },
      { id: 'f', text: '房子 🏠' },
    ],
    correctAnswers: ['a', 'b', 'd', 'f'],
    explanation: '七巧板可以拼出小鱼、小猫、小船和房子！但是皮球和太阳是圆形的，七巧板拼不出来。',
    hint: '七巧板只能拼出直边的图形',
  },

  // 题目 7：选择题 - 图形数量
  {
    type: QuestionType.CHOICE,
    question: '七巧板中有几个正方形？',
    options: [
      { id: 'a', text: '0 个' },
      { id: 'b', text: '1 个' },
      { id: 'c', text: '2 个' },
      { id: 'd', text: '3 个' },
    ],
    correctAnswer: 'b',
    explanation: '七巧板中只有 1 个正方形！',
    hint: '七巧板中正方形最少',
  },

  // 题目 8：选择题 - 图形特征
  {
    type: QuestionType.CHOICE,
    question: '七巧板中的平行四边形有几条边？',
    options: [
      { id: 'a', text: '3 条边' },
      { id: 'b', text: '4 条边' },
      { id: 'c', text: '5 条边' },
      { id: 'd', text: '6 条边' },
    ],
    correctAnswer: 'b',
    explanation: '平行四边形有 4 条边！而且对边平行且相等。',
    hint: '平行四边形和正方形、长方形一样都是四边形',
  },
];
