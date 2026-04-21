/**
 * 角色关卡 17：星际游侠的挑战
 * 主题：六、数量间的加减关系 - 第 1 课时：部分与整体
 * 难度：⭐⭐⭐⭐⭐（终极 BOSS）
 * 稀有度：炫彩边 + 星空动态背景
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 角色 17 题目数据：5 题递进式数量关系挑战
 */
export const level17Questions: Question[] = [
  // 题目 1：基础概念 - 加法意义
  {
    type: QuestionType.DRAG,
    question: '班级有男生 23 人，女生 18 人，全班共几人？',
    instruction: '把男生和女生拖到一起，计算全班总人数。',
    items: [
      { id: 'boy', name: '男生 23 人' },
      { id: 'girl', name: '女生 18 人' },
    ],
    targets: [
      { id: 'total', name: '全班人数', accepts: ['boy', 'girl'], position: { x: 200, y: 150 }, size: { width: 150, height: 100 } },
    ],
    explanation: '部分 + 部分 = 整体。23 + 18 = 41（人），全班共有 41 人。',
    hint: '把男生人数和女生人数加起来',
  },

  // 题目 2：逆向思维 - 减法意义
  {
    type: QuestionType.FILL_BLANK,
    question: '全班 41 人，男生 23 人，女生几人？',
    answer: '18',
    explanation: '整体 - 部分 = 另一部分。41 - 23 = 18（人），女生有 18 人。',
    hint: '用全班人数减去男生人数',
  },

  // 题目 3：变式训练 - 比较关系
  {
    type: QuestionType.CHOICE,
    question: '一班 41 人，二班比一班多 5 人，二班几人？',
    options: [
      { id: 'a', text: '36 人' },
      { id: 'b', text: '46 人' },
      { id: 'c', text: '45 人' },
      { id: 'd', text: '35 人' },
    ],
    correctAnswer: 'b',
    explanation: '小数 + 相差数 = 大数。一班 41 人（小数），二班比一班多 5 人（相差数），所以二班有 41 + 5 = 46 人。',
    hint: '二班比一班多，应该用加法',
  },

  // 题目 4：多步计算 - 加减混合
  {
    type: QuestionType.CHOICE,
    question: '图书角有 56 本书，借出 28 本，又还回 15 本，现在有几本？',
    options: [
      { id: 'a', text: '43 本' },
      { id: 'b', text: '48 本' },
      { id: 'c', text: '53 本' },
      { id: 'd', text: '33 本' },
    ],
    correctAnswer: 'a',
    explanation: '先算借出后剩余：56 - 28 = 28（本），再算还回后总数：28 + 15 = 43（本）。',
    hint: '先减后加，一步步计算',
  },

  // 题目 5：开放应用 - 综合应用
  {
    type: QuestionType.CHOICE,
    question: '你有 50 元零花钱，给妈妈买礼物，下面哪个方案最合理？',
    options: [
      { id: 'a', text: '买 45 元的巧克力，剩下 5 元' },
      { id: 'b', text: '买 30 元的护手霜 +15 元的贺卡，剩下 5 元' },
      { id: 'c', text: '买 50 元的化妆品，剩下 0 元' },
      { id: 'd', text: '不买，存起来' },
    ],
    correctAnswer: 'b',
    explanation: '好的礼物方案应该既表达心意，又合理消费。选项 b 买了实用的护手霜和有纪念意义的贺卡，还剩下 5 元，是最合理的选择！',
    hint: '好的方案要实用、有心意，还要合理消费',
  },
];
