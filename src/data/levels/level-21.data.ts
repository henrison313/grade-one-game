/**
 * 角色关卡 21：拳霸比特的人民币挑战
 * 主题：欢乐购物街 - 第 1 课时：认识人民币
 * 难度：⭐⭐
 * 稀有度：银边 + 拳击动画
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 角色 21 题目数据：5 题人民币基础挑战
 */
export const level21Questions: Question[] = [
  // 题目 1：认识面值 - 识别点击
  {
    type: QuestionType.CHOICE,
    question: '下面哪个是 1 元纸币的正确特征？',
    options: [
      { id: 'a', text: '绿色的，上面有"壹圆"字样' },
      { id: 'b', text: '红色的，上面有"拾圆"字样' },
      { id: 'c', text: '紫色的，上面有"伍圆"字样' },
      { id: 'd', text: '蓝色的，上面有"贰圆"字样' },
    ],
    correctAnswer: 'a',
    explanation: '1 元纸币是橄榄绿色的，正面印有"壹圆"字样和毛泽东头像。',
    hint: '1 元纸币是绿色的',
  },

  // 题目 2：单位进率 - 填空
  {
    type: QuestionType.FILL_BLANK,
    question: '1 元=（ ）角，1 角=（ ）分，1 元=（ ）分',
    answer: '10',
    explanation: '人民币的单位进率：1 元=10 角，1 角=10 分，所以 1 元=10 分。相邻单位间的进率都是 10。',
    hint: '相邻单位间的进率是 10',
  },

  // 题目 3：简单换算
  {
    type: QuestionType.CHOICE,
    question: '3 元等于多少角？',
    options: [
      { id: 'a', text: '3 角' },
      { id: 'b', text: '30 角' },
      { id: 'c', text: '300 角' },
      { id: 'd', text: '13 角' },
    ],
    correctAnswer: 'b',
    explanation: '1 元=10 角，3 元就是 3 个 10 角，3×10=30 角。',
    hint: '1 元是 10 角，3 元就是 30 角',
  },

  // 题目 4：组合付款
  {
    type: QuestionType.CHOICE,
    question: '买 5 元的拳套，下面哪种付款方式是正确的？',
    options: [
      { id: 'a', text: '1 张 1 元' },
      { id: 'b', text: '5 张 1 元' },
      { id: 'c', text: '1 张 10 元' },
      { id: 'd', text: '2 张 1 元' },
    ],
    correctAnswer: 'b',
    explanation: '5 元可以用 5 张 1 元支付，1+1+1+1+1=5 元。也可以用 1 张 5 元纸币。',
    hint: '5 个 1 元加起来是 5 元',
  },

  // 题目 5：大小比较
  {
    type: QuestionType.CHOICE,
    question: '2 元 5 角和 25 角，哪个更多？',
    options: [
      { id: 'a', text: '2 元 5 角多' },
      { id: 'b', text: '25 角多' },
      { id: 'c', text: '一样多' },
      { id: 'd', text: '无法比较' },
    ],
    correctAnswer: 'c',
    explanation: '2 元 5 角=20 角 +5 角=25 角，所以 2 元 5 角和 25 角一样多。',
    hint: '把 2 元换算成 20 角，再加 5 角',
  },
];
