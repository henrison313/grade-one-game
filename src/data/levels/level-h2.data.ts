/**
 * 隐藏关卡 H2：炫蓝雷霆王的时空裂缝
 * 主题：期末综合 2 - 应用提升（跨单元综合）
 * 解锁条件：完成期末综合 1 且正确率≥90%
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 隐藏关卡 H2 题目数据：4 题跨单元综合挑战
 */
export const levelH2Questions: Question[] = [
  // 题目 1：图形 + 计算 - 七巧板拼数字"8"，然后计算
  {
    type: QuestionType.CHOICE,
    question: '用七巧板拼出数字"8"的形状后，计算 88-59=？',
    options: [
      { id: 'a', text: '29' },
      { id: 'b', text: '39' },
      { id: 'c', text: '19' },
      { id: 'd', text: '49' },
    ],
    correctAnswer: 'a',
    explanation: '88-59=29。先算 8-9 不够减，从十位借 1，变成 18-9=9，十位 8-1-5=2，所以是 29。',
    hint: '七巧板拼出 8 后，用退位减法计算 88-59',
  },

  // 题目 2：人民币 + 退位减 - 购物最优方案
  {
    type: QuestionType.CHOICE,
    question: '你有 100 元，想买 3 件商品：文具盒 35 元、铅笔 12 元、橡皮 8 元。买完后还剩多少钱？',
    options: [
      { id: 'a', text: '45 元' },
      { id: 'b', text: '55 元' },
      { id: 'c', text: '35 元' },
      { id: 'd', text: '65 元' },
    ],
    correctAnswer: 'a',
    explanation: '35+12+8=55 元，100-55=45 元。所以买完 3 件商品后还剩 45 元。',
    hint: '先算出 3 件商品一共多少钱，再用 100 减去',
  },

  // 题目 3：规律 + 应用 - 找规律填数后编应用题
  {
    type: QuestionType.FILL_BLANK,
    question: '找规律填数：2、5、10、17、26、{{___}}。这个数表示小明有{{___}}元零花钱。',
    answer: '37,37',
    explanation: '规律是：相邻两数的差分别是 3、5、7、9、11（每次 +2）。所以 26+11=37。小明有 37 元零花钱。',
    hint: '相邻两数的差有什么规律？3、5、7、9、...',
  },

  // 题目 4：开放创作 - 设计题目
  {
    type: QuestionType.CHOICE,
    question: '用本学期知识设计一道题考考炫蓝雷霆王，下面哪个题目设计得最好？',
    options: [
      { id: 'a', text: '只考加法：5+3=？' },
      { id: 'b', text: '只考减法：10-5=？' },
      { id: 'c', text: '综合应用：小明有 50 元，买 25 元的书和 12 元的笔，还剩多少元？' },
      { id: 'd', text: '只考图形：正方形有几条边？' },
    ],
    correctAnswer: 'c',
    explanation: '好的题目应该综合多个知识点，贴近生活实际。选项 c 既考了加法又考了减法，还联系了购物情境，是最好的设计！',
    hint: '好的题目应该综合多个知识点，还要贴近生活',
  },
];
