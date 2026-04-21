/**
 * 角色关卡 22：疾速幻影的极速便利店
 * 主题：欢乐购物街 - 第 2 课时：买卖我做主
 * 难度：⭐⭐⭐⭐
 * 稀有度：金边 + 速度残影特效
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 角色 22 题目数据：5 题限时购物挑战
 */
export const level22Questions: Question[] = [
  // 题目 1：简单购买 - 找零计算
  {
    type: QuestionType.FILL_BLANK,
    question: '买 3 元 5 角的饮料，付 5 元，应找回多少角？',
    answer: '15',
    explanation: '5 元=50 角，3 元 5 角=35 角，50-35=15（角），应找回 15 角（即 1 元 5 角）。',
    hint: '把元都换算成角，再相减',
  },

  // 题目 2：多件商品 - 连加连减
  {
    type: QuestionType.FILL_BLANK,
    question: '买铅笔 1 元 2 角和橡皮 8 角，付 5 元，应找回多少角？',
    answer: '30',
    explanation: '第一步：算出总价，1 元 2 角 +8 角=1 元 10 角=2 元；第二步：算找零，5 元 -2 元=3 元=30 角。',
    hint: '先算出两件商品一共多少钱，再算找零',
  },

  // 题目 3：刚好付清 - 组合付款
  {
    type: QuestionType.CHOICE,
    question: '买 7 元的笔记本，如何付钱不用找零？',
    options: [
      { id: 'a', text: '1 张 5 元和 2 张 1 元' },
      { id: 'b', text: '7 张 1 元' },
      { id: 'c', text: '1 张 5 元和 1 张 2 元' },
      { id: 'd', text: '以上都可以' },
    ],
    correctAnswer: 'd',
    explanation: '选项 a：5+1+1=7 元；选项 b：1×7=7 元；选项 c：5+2=7 元。三种方式都能刚好付清 7 元，不用找零。',
    hint: '想想哪些组合加起来是 7 元',
  },

  // 题目 4：钱够不够 - 比较大小
  {
    type: QuestionType.CHOICE,
    question: '有 10 元，想买 4 元 5 角的尺子和 6 元的笔盒，钱够吗？',
    options: [
      { id: 'a', text: '够，还剩 5 角' },
      { id: 'b', text: '不够，还差 5 角' },
      { id: 'c', text: '够，刚好付清' },
      { id: 'd', text: '不够，还差 1 元' },
    ],
    correctAnswer: 'b',
    explanation: '总价：4 元 5 角 +6 元=10 元 5 角。有 10 元，10 元 -10 元 5 角=-5 角，所以不够，还差 5 角。',
    hint: '先算出两件商品的总价，再和 10 元比较',
  },

  // 题目 5：最优方案 - 合理消费
  {
    type: QuestionType.CHOICE,
    question: '有 1 元、5 元、10 元各一张，买 12 元的商品，怎么付钱最合理？',
    options: [
      { id: 'a', text: '付 10 元 +1 元 +1 元（但只有 1 张 1 元，无法支付）' },
      { id: 'b', text: '付 10 元 +5 元，找回 3 元' },
      { id: 'c', text: '付 5 元 +1 元 +1 元 +5 元（重复使用 5 元，不合理）' },
      { id: 'd', text: '付 10 元 +1 元 +5 元，找回 4 元' },
    ],
    correctAnswer: 'b',
    explanation: '12 元需要付 10 元 +5 元=15 元，找回 15-12=3 元。这是唯一可行的支付方式，因为手里只有 1 张 1 元，无法凑出 12 元刚好付清。',
    hint: '手里的钱无法刚好凑出 12 元，只能多付让卖家找零',
  },
];
