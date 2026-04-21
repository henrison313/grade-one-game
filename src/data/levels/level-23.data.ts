/**
 * 角色关卡 23：重轨巨神的铁路铺设
 * 主题：七、找规律（全单元）
 * 难度：⭐⭐⭐
 * 稀有度：炫彩边 + 铁轨延伸动画
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 角色 23 题目数据：8 题规律专项挑战
 */
export const level23Questions: Question[] = [
  // 题目 1：图形重复 - 放置正确图形
  {
    type: QuestionType.CHOICE,
    question: '找规律：△○□△○□，下一个是什么图形？',
    options: [
      { id: 'a', text: '△' },
      { id: 'b', text: '○' },
      { id: 'c', text: '□' },
      { id: 'd', text: '◇' },
    ],
    correctAnswer: 'a',
    explanation: '规律是"△○□"三个图形为一组重复出现。第 1、4 个是△，第 2、5 个是○，第 3、6 个是□，所以第 7 个应该是△。',
    hint: '三个图形为一组重复，想想下一组第一个是什么',
  },

  // 题目 2：颜色周期 - 选择颜色
  {
    type: QuestionType.FILL_BLANK,
    question: '找规律：红、黄、蓝、绿、红、黄、蓝、绿、{{___}}',
    answer: '红',
    explanation: '规律是"红黄蓝绿"四个颜色为一组重复出现。第 1、5 个是红，第 2、6 个是黄，第 3、7 个是蓝，第 4、8 个是绿，所以第 9 个应该是红。',
    hint: '四个颜色为一组，第 9 个是新一组的第一个',
  },

  // 题目 3：数字等差 - 填写数字
  {
    type: QuestionType.FILL_BLANK,
    question: '找规律填数：3, 6, 9, 12, {{___}}, 18（每次 +3）',
    answer: '15',
    explanation: '规律是每次加 3：3+3=6, 6+3=9, 9+3=12, 12+3=15, 15+3=18。所以填 15。',
    hint: '每个数比前一个数多 3',
  },

  // 题目 4：递减规律 - 填写数字
  {
    type: QuestionType.FILL_BLANK,
    question: '找规律填数：50, 45, 40, 35, {{___}}（每次 -5）',
    answer: '30',
    explanation: '规律是每次减 5：50-5=45, 45-5=40, 40-5=35, 35-5=30。所以填 30。',
    hint: '每个数比前一个数少 5',
  },

  // 题目 5：百数表规律 - 发现规律
  {
    type: QuestionType.CHOICE,
    question: '在百数表中，同一行的相邻两个数有什么关系？',
    options: [
      { id: 'a', text: '相差 1' },
      { id: 'b', text: '相差 5' },
      { id: 'c', text: '相差 10' },
      { id: 'd', text: '相差 100' },
    ],
    correctAnswer: 'a',
    explanation: '在百数表中，同一行从左到右，每个数比前一个数大 1。同一列从上到下，每个数比上面那个数大 10。',
    hint: '想想百数表，1、2、3、4... 相邻的数相差几',
  },

  // 题目 6：数量递增 - 平方规律
  {
    type: QuestionType.CHOICE,
    question: '找规律：1 个正方形，4 个正方形，9 个正方形，16 个正方形，___',
    options: [
      { id: 'a', text: '20 个' },
      { id: 'b', text: '25 个' },
      { id: 'c', text: '24 个' },
      { id: 'd', text: '30 个' },
    ],
    correctAnswer: 'b',
    explanation: '规律是平方数：1×1=1, 2×2=4, 3×3=9, 4×4=16, 5×5=25。所以填 25 个。',
    hint: '1、2、3、4、5 的平方分别是多少',
  },

  // 题目 7：复合规律 - 二级规律
  {
    type: QuestionType.FILL_BLANK,
    question: '找规律填数：1, 2, 4, 7, 11, {{___}}（差分别是 1, 2, 3, 4, 5）',
    answer: '16',
    explanation: '规律是相邻两数的差依次加 1：2-1=1, 4-2=2, 7-4=3, 11-7=4，所以下一个差是 5，11+5=16。',
    hint: '先算出相邻两数的差，看看差有什么规律',
  },

  // 题目 8：创造规律 - 自由创作
  {
    type: QuestionType.CHOICE,
    question: '下面哪个是最好的规律设计？',
    options: [
      { id: 'a', text: '1, 3, 5, 7, 9（每次 +2 的等差数列）' },
      { id: 'b', text: '1, 2, 3, 4, 5（最简单的数列）' },
      { id: 'c', text: '1, 1, 1, 1, 1（全部相同）' },
      { id: 'd', text: '1, 3, 2, 4, 3（没有明显规律）' },
    ],
    correctAnswer: 'a',
    explanation: '好的规律应该清晰、有特点、容易发现。选项 a 是每次 +2 的等差数列，规律清晰，是很好的设计！',
    hint: '好的规律要清晰、有特点，让人能发现',
  },
];
