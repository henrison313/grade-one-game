/**
 * 隐藏关卡 H1：超炫电光王的秘密基地
 * 主题：三、100 以内数的认识 - 摆一摆，想一想（数位理解）
 * 解锁条件：单元 1-3 全部三星通关 + 收集 100 星星
 */

import type { Question } from '@/types';
import { QuestionType } from '@/types';

/**
 * 隐藏关卡 H1 题目数据：5 题递进式数位理解挑战
 */
export const levelH1Questions: Question[] = [
  // 题目 1：数位理解 - 用圆片摆数
  {
    type: QuestionType.DRAG,
    question: '我们来学习数位表！十位上的圆片代表几十，个位上的圆片代表几个。你有3个圆片，试着把它们拖到十位和个位，看看能摆出什么数？',
    instruction: '把3个圆片拖到【十位】或【个位】，每种摆法表示一个数。例如：3个圆片都放在十位，表示30。',
    items: [
      { id: 'piece-1', name: '圆片1', shape: 'circle' as const },
      { id: 'piece-2', name: '圆片2', shape: 'circle' as const },
      { id: 'piece-3', name: '圆片3', shape: 'circle' as const },
    ],
    targets: [
      { id: 'tens', name: '十位（代表几十）', accepts: ['piece-1', 'piece-2', 'piece-3'], position: { x: 100, y: 150 }, size: { width: 180, height: 140 } },
      { id: 'ones', name: '个位（代表几个）', accepts: ['piece-1', 'piece-2', 'piece-3'], position: { x: 320, y: 150 }, size: { width: 180, height: 140 } },
    ],
    explanation: '3个圆片可以摆出4个数：30（3个在十位）、21（2个在十位+1个在个位）、12（1个在十位+2个在个位）、3（3个在个位）！规律：圆片数+1=能摆出的数的个数！',
    hint: '试试把圆片都放在十位，表示几？都放在个位，表示几？',
  },

  // 题目 2：最大最小 - 滑动调整数位
  {
    type: QuestionType.CHOICE,
    question: '用 5 个圆片摆出的最大数是几？',
    options: [
      { id: 'a', text: '50' },
      { id: 'b', text: '41' },
      { id: 'c', text: '32' },
      { id: 'd', text: '23' },
    ],
    correctAnswer: 'a',
    explanation: '把 5 个圆片都放在十位，就是 50，这是最大的数！',
    hint: '想让数最大，应该把圆片都放在哪一位？',
  },

  // 题目 3：规律发现 - 填写发现
  {
    type: QuestionType.FILL_BLANK,
    question: '用 4 个圆片能摆出{{___}}个不同的数。',
    answer: ['5'],
    explanation: '用 4 个圆片可以摆出 5 个不同的数：40、31、22、13、4。圆片数 +1=能摆出的数的个数！',
    hint: '数一数能摆出几个不同的数',
  },

  // 题目 4：逆向思维 - 选择答案
  {
    type: QuestionType.CHOICE,
    question: '能摆出 12、21、30 这三个数，至少需要几个圆片？',
    options: [
      { id: 'a', text: '2 个' },
      { id: 'b', text: '3 个' },
      { id: 'c', text: '4 个' },
      { id: 'd', text: '5 个' },
    ],
    correctAnswer: 'b',
    explanation: '12 需要 1+2=3 个圆片，21 需要 2+1=3 个圆片，30 需要 3+0=3 个圆片。所以至少需要 3 个圆片！',
    hint: '12 的十位是 1，个位是 2，一共需要几个圆片？',
  },

  // 题目 5：挑战极限 - 限时填写（30 秒）
  {
    type: QuestionType.FILL_BLANK,
    question: '用 9 个圆片能摆出{{___}}个不同的数。（请在 30 秒内填写答案）',
    answer: ['10'],
    explanation: '用 9 个圆片可以摆出 10 个不同的数：90、81、72、63、54、45、36、27、18、9。规律是：圆片数 +1=能摆出的数的个数！',
    hint: '9 个圆片，最大的数是 90，最小的是 9，中间还有几个数？',
  },
];
