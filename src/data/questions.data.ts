import type { Question, QuestionType } from '@/types';

/**
 * 关卡 1-1 题目数据：认识平面图形
 */
export const level1_1Questions: Question[] = [
  // 题目1：选择题 - 识别圆形
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个图形是圆形？',
    options: [
      { id: 'a', text: '圆形', shape: 'circle' },
      { id: 'b', text: '三角形', shape: 'triangle' },
      { id: 'c', text: '正方形', shape: 'square' },
      { id: 'd', text: '长方形', shape: 'rectangle' },
    ],
    correctAnswer: 'a',
    explanation: '圆形是圆圆的，像一个球或者轮子，没有棱角。',
    hint: '想想哪些东西是圆圆的？',
  },

  // 题目2：选择题 - 识别三角形
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个图形是三角形？',
    options: [
      { id: 'a', text: '圆形', shape: 'circle' },
      { id: 'b', text: '三角形', shape: 'triangle' },
      { id: 'c', text: '正方形', shape: 'square' },
      { id: 'd', text: '长方形', shape: 'rectangle' },
    ],
    correctAnswer: 'b',
    explanation: '三角形有三条边和三个角，像一个小帐篷。',
    hint: '三条边围成的图形是什么？',
  },

  // 题目3：多选题 - 生活中的图形
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '下面哪些物品是圆形的？',
    options: [
      { id: 'a', text: '皮球 🏀' },
      { id: 'b', text: '书本 📚' },
      { id: 'c', text: '时钟 ⏰' },
      { id: 'd', text: '硬币 💰' },
    ],
    correctAnswers: ['a', 'c', 'd'],
    explanation: '皮球、时钟和硬币都是圆圆的，所以是圆形。书本是长方形的。',
    hint: '圆圆的东西就是圆形哦！',
  },

  // 题目4：选择题 - 数图形
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面这幅图中有几个三角形？\n\n△ △ □ △ △',
    options: [
      { id: 'a', text: '3个' },
      { id: 'b', text: '4个' },
      { id: 'c', text: '5个' },
      { id: 'd', text: '2个' },
    ],
    correctAnswer: 'b',
    explanation: '我们来数一数：第1个是三角形，第2个是三角形，第3个是正方形（不是三角形），第4个是三角形，第5个是三角形。所以一共有4个三角形！',
    hint: '一个一个数，不要漏掉哦！',
  },

  // 题目5：选择题 - 图形特征
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '正方形有什么特点？',
    options: [
      { id: 'a', text: '三条边都一样长' },
      { id: 'b', text: '四条边都一样长' },
      { id: 'c', text: '圆圆的，没有角' },
      { id: 'd', text: '两条长边，两条短边' },
    ],
    correctAnswer: 'b',
    explanation: '正方形有四条边，而且四条边都一样长！它还有四个直直的角。',
    hint: '正方形的"正"是什么意思呢？',
  },
];