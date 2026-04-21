/**
 * 关卡 9 题目数据：期末综合练习
 * 主题：一年级下学期数学综合复习
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 关卡 9 题目数据
 */
export const level9Questions: Question[] = [
  // 题目 1：选择题 - 数的认识
  {
    type: QuestionType.CHOICE,
    question: '100 里面有_个十',
    options: [
      { id: 'a', text: '1 个' },
      { id: 'b', text: '10 个' },
      { id: 'c', text: '100 个' },
      { id: 'd', text: '50 个' },
    ],
    correctAnswer: 'b',
    explanation: '100 里面有 10 个十！10、20、30...90、100，一共 10 个十。',
    hint: '数一数有几个十',
  },

  // 题目 2：选择题 - 比较大小
  {
    type: QuestionType.CHOICE,
    question: '下面哪个数最接近 50？',
    options: [
      { id: 'a', text: '45' },
      { id: 'b', text: '55' },
      { id: 'c', text: '49' },
      { id: 'd', text: '52' },
    ],
    correctAnswer: 'c',
    explanation: '49 最接近 50！50-49=1，差距最小。',
    hint: '计算每个数与 50 的差',
  },

  // 题目 3：选择题 - 20 以内退位减法
  {
    type: QuestionType.CHOICE,
    question: '15 - 7 = ?',
    options: [
      { id: 'a', text: '6' },
      { id: 'b', text: '7' },
      { id: 'c', text: '8' },
      { id: 'd', text: '9' },
    ],
    correctAnswer: 'c',
    explanation: '15 - 7 = 8！用破十法：10-7=3，3+5=8。',
    hint: '把 15 分成 10 和 5',
  },

  // 题目 4：选择题 - 100 以内加法
  {
    type: QuestionType.CHOICE,
    question: '36 + 47 = ?',
    options: [
      { id: 'a', text: '73' },
      { id: 'b', text: '83' },
      { id: 'c', text: '79' },
      { id: 'd', text: '87' },
    ],
    correctAnswer: 'b',
    explanation: '36 + 47 = 83！个位 6+7=13 进 1，十位 3+4+1=8。',
    hint: '个位相加满十进一',
  },

  // 题目 5：选择题 - 100 以内减法
  {
    type: QuestionType.CHOICE,
    question: '82 - 35 = ?',
    options: [
      { id: 'a', text: '37' },
      { id: 'b', text: '47' },
      { id: 'c', text: '53' },
      { id: 'd', text: '57' },
    ],
    correctAnswer: 'b',
    explanation: '82 - 35 = 47！个位 2 减 5 不够，从十位借 1，12-5=7，十位 7-3=4。',
    hint: '个位不够减从十位借一',
  },

  // 题目 6：填空题 - 人民币换算
  {
    type: QuestionType.FILL_BLANK,
    question: '5 元 6 角 = {{___}}角',
    answer: '56',
    explanation: '5 元 6 角 = 56 角！5 元=50 角，50 角 +6 角=56 角。',
    hint: '1 元=10 角',
  },

  // 题目 7：选择题 - 找规律
  {
    type: QuestionType.CHOICE,
    question: '按规律填数：3、6、9、12、___',
    options: [
      { id: 'a', text: '14' },
      { id: 'b', text: '15' },
      { id: 'c', text: '16' },
      { id: 'd', text: '18' },
    ],
    correctAnswer: 'b',
    explanation: '规律是每次加 3（3 的倍数），所以 12+3=15！',
    hint: '这是 3 的乘法口诀',
  },

  // 题目 8：选择题 - 应用题
  {
    type: QuestionType.CHOICE,
    question: '学校有 75 本图书，借出 28 本，又买来 15 本，现在有多少本？',
    options: [
      { id: 'a', text: '52 本' },
      { id: 'b', text: '62 本' },
      { id: 'c', text: '72 本' },
      { id: 'd', text: '82 本' },
    ],
    correctAnswer: 'b',
    explanation: '75 - 28 + 15 = 62 本！先算 75-28=47，再算 47+15=62。',
    hint: '原有的减去借出的，再加买来的',
  },

  // 题目 9：选择题 - 综合推理
  {
    type: QuestionType.CHOICE,
    question: '小明今年 7 岁，妈妈的年龄是小明的 5 倍少 3 岁，妈妈今年多少岁？',
    options: [
      { id: 'a', text: '30 岁' },
      { id: 'b', text: '32 岁' },
      { id: 'c', text: '35 岁' },
      { id: 'd', text: '38 岁' },
    ],
    correctAnswer: 'b',
    explanation: '妈妈今年 32 岁！7×5=35，35-3=32 岁。',
    hint: '先算 7 的 5 倍，再减 3',
  },

  // 题目 10：期末考试题 - 综合应用
  {
    type: QuestionType.CHOICE,
    question: '六一儿童节，老师准备了 100 个气球装饰教室。红气球有 35 个，蓝气球比红气球多 15 个，剩下的是黄气球。黄气球有多少个？',
    options: [
      { id: 'a', text: '15 个' },
      { id: 'b', text: '20 个' },
      { id: 'c', text: '25 个' },
      { id: 'd', text: '30 个' },
    ],
    correctAnswer: 'a',
    explanation: '黄气球有 15 个！蓝气球：35+15=50 个，红气球 + 蓝气球=35+50=85 个，黄气球=100-85=15 个。',
    hint: '先算蓝气球，再算红蓝总和，最后用总数减',
  },
];
