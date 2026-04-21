/**
 * 关卡 8 题目数据：找规律
 * 主题：图形和数字的规律
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 关卡 8 题目数据
 */
export const level8Questions: Question[] = [
  // 题目 1：选择题 - 图形规律
  {
    type: QuestionType.CHOICE,
    question: '按规律接着画：○△□○△□___',
    options: [
      { id: 'a', text: '○' },
      { id: 'b', text: '△' },
      { id: 'c', text: '□' },
      { id: 'd', text: '◇' },
    ],
    correctAnswer: 'a',
    explanation: '规律是○△□重复，所以下一个是○！',
    hint: '三个图形为一组重复',
  },

  // 题目 2：选择题 - 数字规律
  {
    type: QuestionType.CHOICE,
    question: '按规律填数：2、4、6、8、___',
    options: [
      { id: 'a', text: '9' },
      { id: 'b', text: '10' },
      { id: 'c', text: '11' },
      { id: 'd', text: '12' },
    ],
    correctAnswer: 'b',
    explanation: '规律是每次加 2，所以 8+2=10！',
    hint: '这是双数数列',
  },

  // 题目 3：选择题 - 颜色规律
  {
    type: QuestionType.CHOICE,
    question: '按规律涂色：红黄蓝红黄蓝___',
    options: [
      { id: 'a', text: '红' },
      { id: 'b', text: '黄' },
      { id: 'c', text: '蓝' },
      { id: 'd', text: '绿' },
    ],
    correctAnswer: 'a',
    explanation: '规律是红黄蓝重复，所以下一个是红！',
    hint: '三个颜色为一组重复',
  },

  // 题目 4：填空题 - 数字规律
  {
    type: QuestionType.FILL_BLANK,
    question: '按规律填数：5、10、15、20、{{___}}、30',
    answer: '25',
    explanation: '规律是每次加 5，所以 20+5=25！',
    hint: '这是 5 的倍数数列',
  },

  // 题目 5：选择题 - 复合规律
  {
    type: QuestionType.CHOICE,
    question: '按规律填数：1、1、2、3、5、8、___',
    options: [
      { id: 'a', text: '10' },
      { id: 'b', text: '11' },
      { id: 'c', text: '12' },
      { id: 'd', text: '13' },
    ],
    correctAnswer: 'd',
    explanation: '规律是前两个数相加等于后一个数：1+1=2，1+2=3，2+3=5，3+5=8，5+8=13！',
    hint: '这是斐波那契数列',
  },

  // 题目 6：选择题 - 图形数量规律
  {
    type: QuestionType.CHOICE,
    question: '按规律接着画：△ △△ △△△ ___',
    options: [
      { id: 'a', text: '△△' },
      { id: 'b', text: '△△△' },
      { id: 'c', text: '△△△△' },
      { id: 'd', text: '△△△△△' },
    ],
    correctAnswer: 'c',
    explanation: '规律是每次多一个三角形，所以下一个是 4 个三角形！',
    hint: '1 个、2 个、3 个，接下来是几个？',
  },

  // 题目 7：选择题 - 间隔规律
  {
    type: QuestionType.CHOICE,
    question: '按规律填数：10、15、20、25、___',
    options: [
      { id: 'a', text: '28' },
      { id: 'b', text: '30' },
      { id: 'c', text: '35' },
      { id: 'd', text: '40' },
    ],
    correctAnswer: 'b',
    explanation: '规律是每次加 5，所以 25+5=30！',
    hint: '15-10=5，20-15=5，每次增加 5',
  },

  // 题目 8：选择题 - 应用规律
  {
    type: QuestionType.CHOICE,
    question: '小明按"红红黄绿"的顺序串珠子，第 17 颗珠子是什么颜色？',
    options: [
      { id: 'a', text: '红' },
      { id: 'b', text: '黄' },
      { id: 'c', text: '绿' },
      { id: 'd', text: '蓝' },
    ],
    correctAnswer: 'a',
    explanation: '4 颗珠子为一组循环，17÷4=4 组余 1 颗，第 17 颗和第 1 颗颜色相同，是红色！',
    hint: '找出一组有几颗，用除法',
  },
];
