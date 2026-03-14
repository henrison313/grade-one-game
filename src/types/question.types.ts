/**
 * 题目类型枚举
 */
export enum QuestionType {
  /** 单选题 */
  CHOICE = 'choice',
  /** 拖拽题 */
  DRAG = 'drag',
  /** 圈画题 */
  CIRCLE = 'circle',
  /** 多选题 */
  MULTI_SELECT = 'multi_select',
}

/**
 * 选择题选项
 */
export interface ChoiceOption {
  id: string;
  text: string;
  image?: string;
  /** 图形类型，用于渲染彩色立体图形 */
  shape?: 'circle' | 'triangle' | 'square' | 'rectangle';
}

/**
 * 选择题
 */
export interface ChoiceQuestionData {
  type: QuestionType.CHOICE;
  question: string;
  questionImage?: string;
  options: ChoiceOption[];
  correctAnswer: string; // 选项 id
  explanation: string;
  hint?: string;
}

/**
 * 拖拽题目标区域
 */
export interface DragTarget {
  id: string;
  name: string;
  accepts: string[]; // 接受的拖拽项 id
  position: { x: number; y: number };
  size: { width: number; height: number };
}

/**
 * 拖拽项
 */
export interface DragItem {
  id: string;
  name: string;
  image?: string;
  shape?: 'circle' | 'triangle' | 'square' | 'rectangle';
}

/**
 * 拖拽题
 */
export interface DragQuestionData {
  type: QuestionType.DRAG;
  question: string;
  instruction: string;
  items: DragItem[];
  targets: DragTarget[];
  explanation: string;
  hint?: string;
}

/**
 * 圈画题标记点
 */
export interface CircleMark {
  x: number;
  y: number;
  radius: number;
}

/**
 * 圈画题答案区域
 */
export interface CircleAnswerArea {
  id: string;
  x: number;
  y: number;
  radius: number;
  label?: string;
}

/**
 * 圈画题
 */
export interface CircleQuestionData {
  type: QuestionType.CIRCLE;
  question: string;
  instruction: string;
  image: string;
  answerAreas: CircleAnswerArea[]; // 正确答案区域
  tolerance: number; // 容差范围
  explanation: string;
  hint?: string;
}

/**
 * 多选题
 */
export interface MultiSelectQuestionData {
  type: QuestionType.MULTI_SELECT;
  question: string;
  questionImage?: string;
  options: ChoiceOption[];
  correctAnswers: string[]; // 正确选项 id 数组
  explanation: string;
  hint?: string;
}

/**
 * 题目联合类型
 */
export type Question =
  | ChoiceQuestionData
  | DragQuestionData
  | CircleQuestionData
  | MultiSelectQuestionData;

/**
 * 用户答案
 */
export interface UserAnswer {
  questionId: string;
  isCorrect: boolean;
  timeSpent: number; // 秒
  answer: string | string[] | CircleMark[] | Record<string, string>;
}

/**
 * 题目显示状态
 */
export interface QuestionState {
  currentQuestionIndex: number;
  answers: UserAnswer[];
  isAnswered: boolean;
  selectedAnswer: string | string[] | null;
  circleMarks: CircleMark[];
  dragPlacements: Record<string, string>; // targetId -> itemId
}