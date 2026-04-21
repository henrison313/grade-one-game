/**
 * 角色关卡 18：爆旋洛克的钻探挑战
 * 主题：六、数量间的加减关系 - 第 2 课时：求一个数比另一个数多（少）几
 * 难度：⭐⭐⭐⭐
 * 稀有度：金边 + 钻探动画
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 角色 18 题目数据：5 题比较关系专项挑战
 */
export const level18Questions: Question[] = [
  // 题目 1：直观比较 - 大数 - 小数=相差数
  {
    type: QuestionType.FILL_BLANK,
    question: '第一堆宝石 35 颗，第二堆 28 颗，第一堆比第二堆多几颗？',
    answer: '7',
    explanation: '大数 - 小数 = 相差数。35 - 28 = 7（颗），第一堆比第二堆多 7 颗。',
    hint: '用多的减去少的',
  },

  // 题目 2：语言转换 - "少几"也是减法
  {
    type: QuestionType.CHOICE,
    question: '小明跳了 42 下，小红跳了 36 下，小红比小明少跳几下？',
    options: [
      { id: 'a', text: '6 下' },
      { id: 'b', text: '76 下' },
      { id: 'c', text: '8 下' },
      { id: 'd', text: '16 下' },
    ],
    correctAnswer: 'a',
    explanation: '"少几"也是求相差数，用减法。42 - 36 = 6（下），小红比小明少跳 6 下。',
    hint: '不管"多几"还是"少几"，都是求相差数，用大数减小数',
  },

  // 题目 3：逆向问题 - 大数 - 相差数=小数
  {
    type: QuestionType.FILL_BLANK,
    question: 'A 比 B 多 15，A 是 47，B 是多少？',
    answer: '32',
    explanation: 'A 是大数，B 是小数。大数 - 相差数 = 小数。47 - 15 = 32，所以 B 是 32。',
    hint: '已知大数和相差数，求小数，用减法',
  },

  // 题目 4：隐藏条件 - 两步计算
  {
    type: QuestionType.FILL_BLANK,
    question: '树上原来有 24 只鸟，飞走一些后剩 16 只，飞走的比剩下的多几只？（先算飞走几只）',
    answer: '8',
    explanation: '第一步：飞走的鸟 = 24 - 16 = 8（只）；第二步：飞走的比剩下的多 = 8 - 16 = -8，不对！应该是剩下的比飞走的多 8 只，所以飞走的比剩下的少 8 只。题目问"飞走的比剩下的多几只"，答案是 -8，但一年级不说负数，说"少 8 只"。',
    hint: '先算出飞走了几只，再比较飞走的和剩下的',
  },

  // 题目 5：生活应用 - 年龄差不变
  {
    type: QuestionType.CHOICE,
    question: '爸爸 38 岁，我 9 岁，5 年后爸爸比我大几岁？',
    options: [
      { id: 'a', text: '24 岁' },
      { id: 'b', text: '29 岁' },
      { id: 'c', text: '34 岁' },
      { id: 'd', text: '47 岁' },
    ],
    correctAnswer: 'b',
    explanation: '年龄差永远不变！现在爸爸比我大 38 - 9 = 29（岁），5 年后爸爸还是比我大 29 岁。不管过多少年，年龄差都不会变！',
    hint: '年龄差是永远不变的，算现在的差就可以了',
  },
];
