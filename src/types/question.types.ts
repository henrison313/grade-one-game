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
  /** 填空题 */
  FILL_BLANK = 'fill_blank',
  /** 连线题 */
  LINK = 'link',
  /** 迷宫题 */
  MAZE = 'maze',
  /** 图形配对游戏 */
  SHAPE_MATCH = 'shape_match',
  /** 七巧板拼图 */
  TANGRAM = 'tangram',
  /** 连击模式 */
  COMBO = 'combo',
  /** 限时模式 */
  TIMED = 'timed',
}

/**
 * 图形类型
 */
export type ShapeType = 'circle' | 'triangle' | 'square' | 'rectangle';

/**
 * 图形颜色
 */
export type ShapeColor = 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'orange';

/**
 * 选择题选项
 */
export interface ChoiceOption {
  id: string;
  text: string;
  image?: string;
  /** 图形类型，用于渲染彩色立体图形 */
  shape?: ShapeType;
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
  shape?: ShapeType;
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
 * 填空题
 */
export interface FillBlankQuestionData {
  type: QuestionType.FILL_BLANK;
  question: string; // 使用 ___ 表示填空位置
  questionImage?: string;
  answer: string | string[]; // 正确答案，支持多个可接受答案
  explanation: string;
  hint?: string;
}

/**
 * 连线题配对项
 */
export interface LinkPair {
  id: string;
  left: string; // 左侧内容
  right?: string; // 右侧内容（可选，用于显示）
}

/**
 * 连线题
 */
export interface LinkQuestionData {
  type: QuestionType.LINK;
  question: string;
  pairs: LinkPair[];
  timeLimit?: number; // 时间限制（秒）
  explanation: string;
}

/**
 * 迷宫问题节点
 */
export interface MazeQuestionNode {
  x: number;
  y: number;
  question: string;
  options: string[];
  correctAnswer: number; // 选项索引
}

/**
 * 迷宫题
 */
export interface MazeQuestionData {
  type: QuestionType.MAZE;
  question: string;
  gridSize: number;
  start: { x: number; y: number };
  end: { x: number; y: number };
  path: Array<{ x: number; y: number }>; // 正确路径
  obstacles: Array<{ x: number; y: number }>; // 障碍物位置
  questions: MazeQuestionNode[]; // 路径上的问题
  explanation: string;
}

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

// ============== 图形游戏类型 ==============

/**
 * 图形游戏项
 */
export interface ShapeGameItem {
  id: string;
  type: ShapeType;
  color: ShapeColor;
}

/**
 * 图形分类游戏配置
 */
export interface ShapeSortingGameConfig {
  items: ShapeGameItem[];
  dropZones: Array<{
    id: string;
    label: string;
    acceptedTypes: ShapeType[];
  }>;
}

/**
 * 图形匹配游戏配置
 */
export interface ShapeMatchingGameConfig {
  items: ShapeGameItem[];
  pairsCount: number;
}

/**
 * 找图形游戏配置
 */
export interface FindShapeGameConfig {
  targetShape: ShapeType;
  shapes: ShapeGameItem[];
  targetCount: number;
  instructions?: string;
}

// ============== 新题型类型定义 ==============

/**
 * 图形配对游戏配置（SHAPE_MATCH）
 */
export interface ShapeMatchQuestionData {
  type: QuestionType.SHAPE_MATCH;
  question: string;
  instruction: string;
  gridSize: { rows: number; cols: number }; // 网格大小
  pairsCount: number; // 配对数量
  timeLimit?: number; // 时间限制（秒）
  shapes: ShapeGameItem[]; // 使用的图形列表
  explanation: string;
}

/**
 * 七巧板拼图配置（TANGRAM）
 */
export interface TangramPiece {
  id: string;
  type: 'triangle_large' | 'triangle_medium' | 'triangle_small' | 'square' | 'parallelogram';
  color: string;
  initialPosition: { x: number; y: number };
  initialRotation: number;
}

export interface TangramPuzzle {
  id: string;
  name: string;
  targetShape: string; // 目标图案名称
  targetOutline: { x: number; y: number }[]; // 目标轮廓坐标
  pieces: TangramPiece[]; // 七巧板块
  tolerance: number; // 吸附容差
}

export interface TangramQuestionData {
  type: QuestionType.TANGRAM;
  question: string;
  puzzle: TangramPuzzle;
  timeLimit?: number;
  explanation: string;
}

/**
 * 连击模式配置（COMBO）
 */
export interface ComboModeConfig {
  questions: Question[]; // 快速切换的题目列表
  timeLimit: number; // 总时间限制（秒）
  comboThreshold: number; // 连击阈值（连续答对几题触发奖励）
  comboBonusStars: number; // 连击奖励星星
}

export interface ComboQuestionData {
  type: QuestionType.COMBO;
  question: string;
  config: ComboModeConfig;
  explanation: string;
}

/**
 * 限时模式配置（TIMED）
 */
export interface TimedQuestionData {
  type: QuestionType.TIMED;
  question: string;
  baseQuestion: Question; // 包装的基础题目
  timeLimit: number; // 单题时间限制（秒）
  bonusPerSecond: number; // 每秒奖励星星
  explanation: string;
}

// ============== 更新 Question 联合类型 ==============

/**
 * 题目联合类型
 */
export type Question =
  | ChoiceQuestionData
  | DragQuestionData
  | CircleQuestionData
  | MultiSelectQuestionData
  | FillBlankQuestionData
  | LinkQuestionData
  | MazeQuestionData
  | ShapeMatchQuestionData
  | TangramQuestionData
  | ComboQuestionData
  | TimedQuestionData;