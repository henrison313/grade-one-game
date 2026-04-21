/**
 * 关卡 1-2 题目数据：平面图形的拼图
 * 主题：通过图形组合/拼图来巩固对平面图形的认识
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 关卡 1-2 题目数据
 */
export const level1_2Questions: Question[] = [
  // 题目 1：选择题 - 图形拼组
  {
    type: QuestionType.CHOICE,
    question: '用两个相同的三角形可以拼成什么图形？',
    options: [
      { id: 'a', text: '圆形' },
      { id: 'b', text: '正方形' },
      { id: 'c', text: '三角形' },
      { id: 'd', text: '长方形' },
    ],
    correctAnswer: 'b',
    explanation: '两个相同的三角形可以拼成一个正方形！把它们的斜边对在一起就可以了。',
    hint: '想象一下把两个三角形拼在一起的样子',
  },

  // 题目 2：图形配对游戏 - 找出相同的图形
  {
    type: QuestionType.MULTI_SELECT,
    question: '找出下面所有的圆形！',
    options: [
      { id: 'a', text: '皮球 🏀' },
      { id: 'b', text: '积木 📐' },
      { id: 'c', text: '硬币 🪙' },
      { id: 'd', text: '手帕 🧣' },
      { id: 'e', text: '钟表 ⏰' },
      { id: 'f', text: '橡皮 📝' },
    ],
    correctAnswers: ['a', 'c', 'e'],
    explanation: '你找出了所有的圆形！皮球、硬币和钟表都是圆圆的。',
    hint: '找找看哪些东西是圆圆的？',
  },

  // 题目 3：选择题 - 图形组合
  {
    type: QuestionType.CHOICE,
    question: '用四个小正方形可以拼成什么？',
    options: [
      { id: 'a', text: '一个大正方形' },
      { id: 'b', text: '一个圆形' },
      { id: 'c', text: '一个三角形' },
      { id: 'd', text: '一个长方形' },
    ],
    correctAnswer: 'a',
    explanation: '四个小正方形可以拼成一个大正方形！把它们 2×2 排列就可以了。',
    hint: '想象一下积木拼图',
  },

  // 题目 4：多选题 - 图形识别
  {
    type: QuestionType.MULTI_SELECT,
    question: '下面哪些图形有四个角？',
    options: [
      { id: 'a', text: '圆形' },
      { id: 'b', text: '正方形' },
      { id: 'c', text: '三角形' },
      { id: 'd', text: '长方形' },
    ],
    correctAnswers: ['b', 'd'],
    explanation: '正方形和长方形都有四个角！圆形没有角，三角形有三个角。',
    hint: '数一数每个图形有几个角',
  },

  // 题目 5：选择题 - 图形特征
  {
    type: QuestionType.CHOICE,
    question: '长方形和正方形有什么不同？',
    options: [
      { id: 'a', text: '长方形没有角' },
      { id: 'b', text: '长方形四条边不一样长' },
      { id: 'c', text: '长方形两条长边、两条短边' },
      { id: 'd', text: '长方形是圆圆的' },
    ],
    correctAnswer: 'c',
    explanation: '长方形有两条长边和两条短边，而正方形四条边都一样长！',
    hint: '比较一下长方形和正方形的边',
  },
];
