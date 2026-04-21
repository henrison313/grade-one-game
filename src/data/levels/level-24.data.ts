/**
 * 角色关卡 24：重装赤魂王的最终决战
 * 主题：期末综合 1 - 综合复习（四阶段 BOSS 战）
 * 难度：⭐⭐⭐（最终 BOSS）
 * 稀有度：炫彩动态边 + 四形态切换动画
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 角色 24 题目数据：10 题四阶段 BOSS 战 + 4 道附加题
 */
export const level24Questions: Question[] = [
  // === 第一阶段：图形与几何（云梯消防车形态）===

  // 题目 1：图形识别 - 七巧板
  {
    type: QuestionType.CHOICE,
    question: '用七巧板拼出一个正方形，至少需要几块？',
    options: [
      { id: 'a', text: '2 块' },
      { id: 'b', text: '3 块' },
      { id: 'c', text: '4 块' },
      { id: 'd', text: '7 块' },
    ],
    correctAnswer: 'a',
    explanation: '用七巧板中的 2 块大三角形可以拼成一个正方形。这是最少的方式。',
    hint: '想想两个大三角形能不能拼成正方形',
  },

  // 题目 2：图形拼组
  {
    type: QuestionType.FILL_BLANK,
    question: '至少用几个小正方形可以拼成一个大正方形？',
    answer: '4',
    explanation: '至少用 4 个小正方形可以拼成一个大正方形（2×2 排列）。1 个小正方形本身已经是正方形，但题目要求"拼成"，所以至少需要 4 个。',
    hint: '想想 2 行 2 列排列需要几个',
  },

  // === 第二阶段：计算能力（矿用车形态）===

  // 题目 3：退位减法 - 连击模式
  {
    type: QuestionType.CHOICE,
    question: '15 - 7 = ？',
    options: [
      { id: 'a', text: '7' },
      { id: 'b', text: '8' },
      { id: 'c', text: '9' },
      { id: 'd', text: '6' },
    ],
    correctAnswer: 'b',
    explanation: '15 - 7 = 8。可以用破十法：10 - 7 = 3，3 + 5 = 8。',
    hint: '从 15 里减去 7，用破十法',
  },

  // 题目 4：逆向思考
  {
    type: QuestionType.FILL_BLANK,
    question: '（ ） - 8 = 7，被减数是多少？',
    answer: '15',
    explanation: '被减数 - 减数 = 差，所以被减数 = 差 + 减数 = 7 + 8 = 15。',
    hint: '被减数等于差加减数',
  },

  // === 第三阶段：综合计算（挖掘机形态）===

  // 题目 5：进位加法
  {
    type: QuestionType.FILL_BLANK,
    question: '38 + 45 = ？（口算）',
    answer: '83',
    explanation: '38 + 45 = 83。可以拆分计算：30 + 40 = 70，8 + 5 = 13，70 + 13 = 83。',
    hint: '先算整十数相加，再算个位数相加',
  },

  // 题目 6：笔算减法
  {
    type: QuestionType.FILL_BLANK,
    question: '73 - 48 = ？',
    answer: '25',
    explanation: '73 - 48 = 25。个位 3 - 8 不够减，从十位借 1，变成 13 - 8 = 5；十位 7 - 1 - 4 = 2，所以是 25。',
    hint: '个位不够减，从十位借 1',
  },

  // 题目 7：混合运算
  {
    type: QuestionType.FILL_BLANK,
    question: '80 - 35 + 28 = ？',
    answer: '73',
    explanation: '从左往右依次计算：80 - 35 = 45，45 + 28 = 73。',
    hint: '从左往右依次计算',
  },

  // === 第四阶段：生活应用（直升机形态）===

  // 题目 8：人民币应用
  {
    type: QuestionType.FILL_BLANK,
    question: '买 3 元 5 角的文具，付 10 元，应找回多少角？',
    answer: '65',
    explanation: '10 元 = 100 角，3 元 5 角 = 35 角，100 - 35 = 65（角），应找回 65 角（即 6 元 5 角）。',
    hint: '把元都换算成角再计算',
  },

  // 题目 9：找规律
  {
    type: QuestionType.FILL_BLANK,
    question: '找规律填数：2, 5, 10, 17, 26, __（差分别是 3, 5, 7, 9, 11）',
    answer: '37',
    explanation: '规律是相邻两数的差依次加 2：5-2=3, 10-5=5, 17-10=7, 26-17=9，所以下一个差是 11，26 + 11 = 37。',
    hint: '相邻两数的差是 3, 5, 7, 9, 11...',
  },

  // 题目 10：开放题 - 购物方案设计
  {
    type: QuestionType.CHOICE,
    question: '用 10 元设计一个购物方案，买 3 件不同的商品，下面哪个方案最合理？',
    options: [
      { id: 'a', text: '买 8 元的玩具 +1 元的糖 +1 元的贴纸，共 10 元' },
      { id: 'b', text: '买 3 元 5 角的铅笔 +4 元的笔记本 +2 元 5 角的橡皮，共 10 元' },
      { id: 'c', text: '买 10 元的书，只买 1 件' },
      { id: 'd', text: '买 5 元的玩具 +3 元的糖 +3 元的饼干，共 11 元（超支）' },
    ],
    correctAnswer: 'b',
    explanation: '选项 a：8+1+1=10 元，但玩具和糖、贴纸不是学习用品；选项 b：3 元 5 角 +4 元 +2 元 5 角=10 元，买了 3 件学习用品，最合理；选项 c：只买 1 件，不符合"3 件"要求；选项 d：超支了。',
    hint: '要买 3 件不同的商品，总价不超过 10 元',
  },
];
