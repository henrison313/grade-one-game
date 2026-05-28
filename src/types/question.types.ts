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
  /** 图形自由组合 */
  SHAPE_COMPOSE = 'shape_compose',
}

/**
 * 图形类型
 */
export type ShapeType = 'circle' | 'triangle' | 'square' | 'square-big' | 'rectangle' | 'triangle-big' | 'triangle-medium' | 'triangle-small' | 'parallelogram';

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
  /** 图形颜色，默认 blue */
  shapeColor?: ShapeColor;
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
  rotation?: number; // 期望的旋转角度（度）
  rotationTolerance?: number; // 旋转容差（度），默认15
  group?: string; // 分组ID，用于匹配多个相同答案的情况
}

/**
 * 拖拽题连线
 */
export interface DragConnection {
  from: string; // 起始 target id
  to: string;   // 目标 target id
}

/**
 * 拖拽题计算结果配置
 */
export interface DragCalculation {
  type: 'sum' | 'product' | 'difference' | 'mixed'  // 计算类型，mixed 表示加减混合
  values: number[]                         // 参与计算的值（mixed 类型中负数表示减法）
  result: number                           // 计算结果
  label: string                            // 结果标签
  unit?: string                            // 结果单位（可选）
}

/**
 * 拖拽项
 */
export interface DragItem {
  id: string;
  name: string;
  image?: string;
  shape?: ShapeType;
  rotation?: number; // 旋转角度（度）
  displayText?: string; // 显示文本（可选）
  group?: string; // 分组ID，用于匹配多个相同答案的情况
  value?: number; // 图形代表的数值（用于组合计算题）
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
  connections?: DragConnection[]; // 可选：目标之间的连线
  targetLabels?: string[]; // 可选：目标区域的显示标签
  calculation?: DragCalculation; // 可选：计算结果配置
  /** 使用绝对定位布局（根据 target.position 定位） */
  useAbsoluteLayout?: boolean;
  /** 绝对定位容器的尺寸 */
  layoutSize?: { width: number; height: number };
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
 * 圈画题内联图形项
 */
export interface InlineShapeItem {
  id: string;
  type: 'triangle' | 'circle' | 'square' | 'rectangle';
  x: number;
  y: number;
  size?: number;
  width?: number;
  height?: number;
  color: string;
  label?: string;
  rotation?: number;
}

/**
 * 圈画题
 */
export interface CircleQuestionData {
  type: QuestionType.CIRCLE;
  question: string;
  instruction: string;
  image?: string; // 可选：图片路径或留空使用动态绘制
  inlineShapes?: InlineShapeItem[]; // 可选：动态渲染的图形列表
  answerAreas: CircleAnswerArea[]; // 正确答案区域
  correctAnswers?: string[]; // 可选：正确答案的 id 列表（多选圈画题）
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
  blankGroups?: number[][]; // 可选：每组内的空白索引顺序无关（如 [[0,1]] 表示前两个空可互换）
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
  group?: string; // 分组ID，用于匹配多个相同答案的情况
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
 * 图形自由组合配置（SHAPE_COMPOSE）
 */
export interface ShapeComposeQuestionData {
  type: QuestionType.SHAPE_COMPOSE;
  question: string;
  instruction: string;
  items: DragItem[]; // 要组合的图形
  canvasSize: { width: number; height: number }; // 画布尺寸
  requiredCounts?: Record<string, number>; // 可选：每种图形需要的数量
  allItemsRequired?: boolean; // 是否需要使用所有图形
  targetValue?: number; // 目标数值（用于组合计算题，如凑成100）
  shapeScale?: number; // 图形缩放比例，默认 1
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
  | MultiSelectQuestionData
  | FillBlankQuestionData
  | LinkQuestionData
  | MazeQuestionData
  | ShapeMatchQuestionData
  | TangramQuestionData
  | ComboQuestionData
  | TimedQuestionData
  | ShapeComposeQuestionData;