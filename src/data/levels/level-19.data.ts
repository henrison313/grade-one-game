/**
 * 角色关卡 19：深海霸王的兵力分配
 * 主题：六、数量间的加减关系 - 第 3 课时：求比一个数多（少）几的数是多少
 * 难度：⭐⭐⭐
 * 稀有度：彩虹边
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 角色 19 题目数据：5 题数量关系应用挑战
 */
export const level19Questions: Question[] = [
  // 题目 1：浅海区 - 小数 + 相差数=大数
  {
    type: QuestionType.FILL_BLANK,
    question: '浅海区有 25 名守卫，深水区比浅海区多 18 名，深水区有几名？',
    answer: '43',
    explanation: '小数 + 相差数 = 大数。浅海区 25 名（小数），深水区比浅海区多 18 名（相差数），所以深水区有 25 + 18 = 43（名）。',
    hint: '深水区更多，应该用加法',
  },

  // 题目 2：珊瑚区 - 大数 - 相差数=小数
  {
    type: QuestionType.FILL_BLANK,
    question: '珊瑚区有 43 名守卫，海草区比珊瑚区少 15 名，海草区有几名？',
    answer: '28',
    explanation: '大数 - 相差数 = 小数。珊瑚区 43 名（大数），海草区比珊瑚区少 15 名（相差数），所以海草区有 43 - 15 = 28（名）。',
    hint: '海草区更少，应该用减法',
  },

  // 题目 3：对比题 - 连续两步计算
  {
    type: QuestionType.FILL_BLANK,
    question: 'A 区 36 人，B 区比 A 区多 12 人，C 区比 B 区少 8 人，C 区几人？',
    answer: '40',
    explanation: '第一步：先求 B 区人数，B 区比 A 区多，36 + 12 = 48（人）；第二步：再求 C 区人数，C 区比 B 区少，48 - 8 = 40（人）。',
    hint: '先算出 B 区人数，再用 B 区人数算 C 区',
  },

  // 题目 4：选择策略 - 理解"多"用加法
  {
    type: QuestionType.CHOICE,
    question: '要计算"比 45 多 17 的数"，应该用哪个算式？',
    options: [
      { id: 'a', text: '45 - 17' },
      { id: 'b', text: '45 + 17' },
      { id: 'c', text: '17 - 45' },
      { id: 'd', text: '45 × 17' },
    ],
    correctAnswer: 'b',
    explanation: '"比 45 多 17"，就是求比 45 大的数，用加法。45 + 17 = 62。',
    hint: '"多"用加法，"少"用减法',
  },

  // 题目 5：综合应用 - 先求部分再求整体
  {
    type: QuestionType.FILL_BLANK,
    question: '海底学校有男生 48 人，女生比男生少 12 人，一共有多少人？',
    answer: '84',
    explanation: '第一步：先求女生人数，女生比男生少，48 - 12 = 36（人）；第二步：再求总人数，48 + 36 = 84（人）。',
    hint: '先算出女生人数，再把男生女生加起来',
  },
];
