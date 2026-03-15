/**
 * 游戏示例数据
 * 展示如何使用各种游戏组件
 */

import type {
  FillBlankQuestionData,
  LinkQuestionData,
  MazeQuestionData,
  ShapeSortingGameConfig,
  ShapeMatchingGameConfig,
  FindShapeGameConfig,
} from '@/types';
import { QuestionType } from '@/types';

// ============== 填空题示例 ==============

export const fillBlankExample: FillBlankQuestionData = {
  type: QuestionType.FILL_BLANK,
  question: '5 + 3 = ___',
  answer: '8',
  explanation: '5加3等于8',
  hint: '用手指数一数',
};

export const fillBlankMultiAnswerExample: FillBlankQuestionData = {
  type: QuestionType.FILL_BLANK,
  question: '___ + ___ = 10（填两个相同的数）',
  answer: ['5', '五'],
  explanation: '5加5等于10',
};

// ============== 连线题示例 ==============

export const linkGameExample: LinkQuestionData = {
  type: QuestionType.LINK,
  question: '把相同的图形连起来',
  pairs: [
    { id: '1', left: '圆形' },
    { id: '2', left: '圆形' },
    { id: '3', left: '三角形' },
    { id: '4', left: '三角形' },
    { id: '5', left: '正方形' },
    { id: '6', left: '正方形' },
    { id: '7', left: '长方形' },
    { id: '8', left: '长方形' },
  ],
  timeLimit: 60,
  explanation: '找出相同图形的一对',
};

// ============== 迷宫题示例 ==============

export const mazeGameExample: MazeQuestionData = {
  type: QuestionType.MAZE,
  question: '帮助小恐龙找到回家的路！',
  gridSize: 5,
  start: { x: 0, y: 0 },
  end: { x: 4, y: 4 },
  path: [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 2 },
    { x: 3, y: 3 },
    { x: 4, y: 3 },
    { x: 4, y: 4 },
  ],
  obstacles: [
    { x: 0, y: 1 },
    { x: 2, y: 0 },
    { x: 1, y: 2 },
    { x: 3, y: 1 },
    { x: 0, y: 3 },
    { x: 2, y: 3 },
    { x: 4, y: 2 },
  ],
  questions: [
    {
      x: 1,
      y: 0,
      question: '1 + 1 = ?',
      options: ['1', '2', '3', '4'],
      correctAnswer: 1,
    },
    {
      x: 1,
      y: 1,
      question: '2 + 2 = ?',
      options: ['2', '3', '4', '5'],
      correctAnswer: 2,
    },
    {
      x: 2,
      y: 1,
      question: '3 + 1 = ?',
      options: ['2', '3', '4', '5'],
      correctAnswer: 2,
    },
    {
      x: 2,
      y: 2,
      question: '5 - 2 = ?',
      options: ['2', '3', '4', '5'],
      correctAnswer: 1,
    },
    {
      x: 3,
      y: 2,
      question: '4 - 1 = ?',
      options: ['1', '2', '3', '4'],
      correctAnswer: 2,
    },
    {
      x: 3,
      y: 3,
      question: '2 + 3 = ?',
      options: ['3', '4', '5', '6'],
      correctAnswer: 2,
    },
    {
      x: 4,
      y: 3,
      question: '6 - 3 = ?',
      options: ['2', '3', '4', '5'],
      correctAnswer: 1,
    },
  ],
  explanation: '答对问题才能前进！',
};

// ============== 图形游戏示例 ==============

// 图形分类游戏
export const shapeSortingGameConfig: ShapeSortingGameConfig = {
  items: [
    { id: '1', type: 'circle', color: 'blue' },
    { id: '2', type: 'circle', color: 'red' },
    { id: '3', type: 'triangle', color: 'green' },
    { id: '4', type: 'triangle', color: 'yellow' },
    { id: '5', type: 'square', color: 'purple' },
    { id: '6', type: 'square', color: 'orange' },
    { id: '7', type: 'rectangle', color: 'blue' },
    { id: '8', type: 'rectangle', color: 'red' },
  ],
  dropZones: [
    { id: 'circle', label: '圆形', acceptedTypes: ['circle'] },
    { id: 'triangle', label: '三角形', acceptedTypes: ['triangle'] },
    { id: 'square', label: '正方形', acceptedTypes: ['square'] },
    { id: 'rectangle', label: '长方形', acceptedTypes: ['rectangle'] },
  ],
};

// 图形配对游戏
export const shapeMatchingGameConfig: ShapeMatchingGameConfig = {
  items: [
    { id: '1', type: 'circle', color: 'blue' },
    { id: '2', type: 'circle', color: 'blue' },
    { id: '3', type: 'triangle', color: 'red' },
    { id: '4', type: 'triangle', color: 'red' },
    { id: '5', type: 'square', color: 'green' },
    { id: '6', type: 'square', color: 'green' },
    { id: '7', type: 'rectangle', color: 'yellow' },
    { id: '8', type: 'rectangle', color: 'yellow' },
  ],
  pairsCount: 4,
};

// 找图形游戏
export const findShapeGameConfig: FindShapeGameConfig = {
  targetShape: 'circle',
  shapes: [
    { id: '1', type: 'circle', color: 'blue' },
    { id: '2', type: 'triangle', color: 'red' },
    { id: '3', type: 'circle', color: 'green' },
    { id: '4', type: 'square', color: 'yellow' },
    { id: '5', type: 'circle', color: 'purple' },
    { id: '6', type: 'rectangle', color: 'orange' },
    { id: '7', type: 'triangle', color: 'blue' },
    { id: '8', type: 'circle', color: 'red' },
    { id: '9', type: 'square', color: 'green' },
  ],
  targetCount: 4,
  instructions: '找出所有的圆形！',
};