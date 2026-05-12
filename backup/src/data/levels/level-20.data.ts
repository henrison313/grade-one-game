/**
 * 角色关卡 20：银翼骑士的连续航线
 * 主题：六、数量间的加减关系 - 第 4 课时：连续两问的问题
 * 难度：⭐⭐⭐⭐
 * 稀有度：炫彩边 + 飞行轨迹动画
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 角色 20 题目数据：5 题连续两问专项训练
 */
export const level20Questions: Question[] = [
  // 题目 1：连续变化 - 车上人数
  {
    type: QuestionType.FILL_BLANK,
    question: '车上原有 35 人，到站后上来 18 人，现在车上有几人？（第一问）',
    answer: '53',
    explanation: '原有 35 人，上来 18 人，用加法：35 + 18 = 53（人）。第一问答案是 53 人，这个答案是第二问的已知条件。',
    hint: '上来的人要加上去',
  },

  // 题目 2：先求中间量 - 鸡鸭总数
  {
    type: QuestionType.FILL_BLANK,
    question: '农场有鸡 46 只，鸭比鸡多 15 只，鸭有几只？（第一问）',
    answer: '61',
    explanation: '鸭比鸡多，用加法：46 + 15 = 61（只）。鸭有 61 只。',
    hint: '鸭比鸡多，用加法算出鸭的只数',
  },

  // 题目 3：增减混合 - 苹果库存
  {
    type: QuestionType.FILL_BLANK,
    question: '商店运来 80 箱苹果，上午卖出 35 箱，还剩几箱？（第一问）',
    answer: '45',
    explanation: '运来 80 箱，卖出 35 箱，用减法：80 - 35 = 45（箱）。还剩 45 箱。',
    hint: '卖出的要减去',
  },

  // 题目 4：典型两问 - 植树问题
  {
    type: QuestionType.FILL_BLANK,
    question: '一班植树 28 棵，二班比一班多植 14 棵，二班植几棵？（第一问）',
    answer: '42',
    explanation: '二班比一班多植 14 棵，用加法：28 + 14 = 42（棵）。二班植树 42 棵。',
    hint: '二班植得更多，用加法',
  },

  // 题目 5：开放题 - 逆向思维
  {
    type: QuestionType.CHOICE,
    question: '根据"图书馆有 60 本书，借出 25 本"，下面哪个问题设计得最好？',
    options: [
      { id: 'a', text: '还剩几本？（只有一问）' },
      { id: 'b', text: '还剩几本？又运来 15 本，现在有几本？（连续两问）' },
      { id: 'c', text: '原来有几本？（问题不合理）' },
      { id: 'd', text: '借出的多还是剩下的多？（比较问题）' },
    ],
    correctAnswer: 'b',
    explanation: '好的连续两问问题应该是：第一问的答案是第二问的已知条件。选项 b 中，先算还剩 60-25=35 本，再算现在有 35+15=50 本，是最好的设计！',
    hint: '好的连续两问，第一问的答案要用在第二问里',
  },
];
