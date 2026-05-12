import type { Question, QuestionType, WeaponPart } from '@/types';
import { DifficultyLevel } from '@/types';

/**
 * 关卡 24 新手难度题目：赤魂火焰炮
 * 主题：期末综合 1 - 综合复习（四阶段 BOSS 战）
 * 场景：第一阶段：图形与几何（云梯消防车形态）
 * 难度定位：基础概念理解（图形拼组、图形数量、七巧板、图形识别、图形面积）
 * 角色：重装赤魂王（Flame Nova）- 罗森鲍尔黑豹第三代8×8云梯消防车+矿用自卸车+履带式挖掘机+消防直升机 - 红色+黑色 - 火焰能量弹、毁灭能量弹、重装聚能炮
 */
export const level24EasyQuestions: Question[] = [
  // 第1题：图形拼组（拖拽题）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '重装赤魂王的火焰能量弹由4个图形组成：2个三角形、1个正方形、1个圆形。把这些图形拖到一起，拼成火焰能量弹。',
    instruction: '把4个图形拖到目标区域，拼成火焰能量弹。',
    items: [
      { id: 'tri1', name: '三角形1' },
      { id: 'tri2', name: '三角形2' },
      { id: 'square', name: '正方形' },
      { id: 'circle', name: '圆形' },
    ],
    targets: [
      { id: 'flame-bomb', name: '火焰能量弹', accepts: ['tri1', 'tri2', 'square', 'circle'], position: { x: 200, y: 150 }, size: { width: 150, height: 100 } },
    ],
    explanation: '火焰能量弹由4个图形组成：2个三角形拼成火焰顶部，正方形拼成火焰核心，圆形拼成火焰底部。',
    hint: '把4个图形拖到一起拼成火焰能量弹',
  },

  // 第2题：图形拼组数量（填空题）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '至少用几个小正方形可以拼成一个大正方形？',
    answer: '4',
    explanation: '至少用4个小正方形可以拼成一个大正方形（2×2排列）。1个小正方形本身已经是正方形，但题目要求"拼成"，所以至少需要4个。',
    hint: '想想2行2列排列需要几个',
  },

  // 第3题：七巧板（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '用七巧板拼出一个正方形，至少需要几块？',
    options: [
      { id: 'a', text: '2块' },
      { id: 'b', text: '3块' },
      { id: 'c', text: '4块' },
      { id: 'd', text: '7块' },
    ],
    correctAnswer: 'a',
    explanation: '用七巧板中的2块大三角形可以拼成一个正方形。这是最少的方式。',
    hint: '想想两个大三角形能不能拼成正方形',
  },

  // 第4题：图形识别（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '重装赤魂王的云梯消防车形态由几种基本图形组成？',
    options: [
      { id: 'a', text: '2种' },
      { id: 'b', text: '3种' },
      { id: 'c', text: '4种' },
      { id: 'd', text: '5种' },
    ],
    correctAnswer: 'c',
    explanation: '云梯消防车形态由4种基本图形组成：矩形（车身）、三角形（云梯）、圆形（轮胎）、正方形（驾驶室）。',
    hint: '想想消防车有哪些基本图形组成',
  },

  // 第5题：图形面积（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '一个大正方形由4个小正方形组成，每个小正方形面积是1，大正方形面积是多少？',
    options: [
      { id: 'a', text: '1' },
      { id: 'b', text: '2' },
      { id: 'c', text: '4' },
      { id: 'd', text: '8' },
    ],
    correctAnswer: 'c',
    explanation: '大正方形面积 = 4个小正方形面积之和 = 4×1 = 4。',
    hint: '把4个小正方形的面积加起来',
  },
];

/**
 * 关卡 24 挑战难度题目：毁灭能量炮
 * 主题：期末综合 1 - 综合复习（四阶段 BOSS 战）
 * 场景：第二阶段：计算能力（矿用自卸车形态）
 * 难度定位：综合应用（退位减法、逆向思考、进位加法验证、笔算减法）
 * 角色：重装赤魂王（Flame Nova）- 罗森鲍尔黑豹第三代8×8云梯消防车+矿用自卸车+履带式挖掘机+消防直升机 - 红色+黑色 - 火焰能量弹、毁灭能量弹、重装聚能炮
 */
export const level24MediumQuestions: Question[] = [
  // 第1题：计算连击（拖拽题）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '重装赤魂王的毁灭能量弹连击：第1弹15，第2弹27，第3弹38。把三弹能量拖到一起，计算总能量。',
    instruction: '把三弹能量拖到目标区域，计算总能量。',
    items: [
      { id: 'bomb1', name: '第1弹 15' },
      { id: 'bomb2', name: '第2弹 27' },
      { id: 'bomb3', name: '第3弹 38' },
    ],
    targets: [
      { id: 'total', name: '总能量', accepts: ['bomb1', 'bomb2', 'bomb3'], position: { x: 0, y: 30 }, size: { width: 280, height: 200 } },
    ],
    calculation: {
      type: 'sum',
      values: [15, 27, 38],
      result: 80,
      label: '总能量',
    },
    explanation: '总能量 = 15 + 27 + 38 = 80。',
    hint: '把三弹能量加起来',
  },

  // 第2题：退位减法（填空题）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '15 - 7 = ？（用破十法计算）',
    answer: '8',
    explanation: '15 - 7 = 8。可以用破十法：10 - 7 = 3，3 + 5 = 8。',
    hint: '从15里减去7，用破十法',
  },

  // 第3题：逆向思考（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '（ ） - 8 = 7，被减数是多少？',
    options: [
      { id: 'a', text: '13' },
      { id: 'b', text: '14' },
      { id: 'c', text: '15' },
      { id: 'd', text: '16' },
    ],
    correctAnswer: 'c',
    explanation: '被减数 - 减数 = 差，所以被减数 = 差 + 减数 = 7 + 8 = 15。',
    hint: '被减数等于差加减数',
  },

  // 第4题：进位加法验证（多选题）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '下面哪些算式的结果大于50？请选出所有正确的。',
    options: [
      { id: 'a', text: '38 + 45 = 83' },
      { id: 'b', text: '15 + 27 + 38 = 80' },
      { id: 'c', text: '25 + 20 = 45' },
      { id: 'd', text: '40 + 15 = 55' },
    ],
    correctAnswers: ['a', 'b', 'd'],
    explanation: 'A: 38+45=83>50 ✅，B: 15+27+38=80>50 ✅，C: 25+20=45<50 ❌，D: 40+15=55>50 ✅',
    hint: '分别计算每个算式的结果，找出大于50的',
  },

  // 第5题：笔算减法（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '73 - 48 = ？（用笔算方法计算）',
    options: [
      { id: 'a', text: '23' },
      { id: 'b', text: '24' },
      { id: 'c', text: '25' },
      { id: 'd', text: '35' },
    ],
    correctAnswer: 'c',
    explanation: '73 - 48 = 25。个位3-8不够减，从十位借1，变成13-8=5；十位7-1-4=2，所以是25。',
    hint: '个位不够减，从十位借1',
  },
];

/**
 * 关卡 24 高手难度题目：重装赤魂王终极炮
 * 主题：期末综合 1 - 综合复习（四阶段 BOSS 战）
 * 场景：第三阶段+第四阶段：综合计算+生活应用（挖掘机+直升机双形态）
 * 难度定位：拓展挑战（混合运算、人民币应用、找规律、购物方案设计）
 * 角色：重装赤魂王（Flame Nova）- 罗森鲍尔黑豹第三代8×8云梯消防车+矿用自卸车+履带式挖掘机+消防直升机 - 红色+黑色 - 火焰能量弹、毁灭能量弹、重装聚能炮
 */
export const level24HardQuestions: Question[] = [
  // 第1题：多形态综合（拖拽题）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '重装赤魂王的终极攻击：挖掘机形态攻击力35，直升机形态攻击力48，云梯消防车形态攻击力27。把三形态攻击力拖到一起，计算总攻击力。',
    instruction: '把三形态攻击力拖到目标区域，计算总攻击力。',
    items: [
      { id: 'excavator', name: '挖掘机 35' },
      { id: 'helicopter', name: '直升机 48' },
      { id: 'ladder', name: '云梯消防车 27' },
    ],
    targets: [
      { id: 'total', name: '总攻击力', accepts: ['excavator', 'helicopter', 'ladder'], position: { x: 0, y: 30 }, size: { width: 280, height: 200 } },
    ],
    calculation: {
      type: 'sum',
      values: [35, 48, 27],
      result: 110,
      label: '总攻击力',
    },
    explanation: '总攻击力 = 35 + 48 + 27 = 110。两代炫卡斗士齐心，总攻击力110破解重装聚能炮！',
    hint: '把三形态攻击力加起来',
  },

  // 第2题：混合运算（填空题）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '80 - 35 + 28 = ？（从左往右依次计算）',
    answer: '73',
    explanation: '从左往右依次计算：80 - 35 = 45，45 + 28 = 73。',
    hint: '从左往右依次计算',
  },

  // 第3题：人民币应用（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '买3元5角的文具，付10元，应找回多少角？',
    options: [
      { id: 'a', text: '55角' },
      { id: 'b', text: '60角' },
      { id: 'c', text: '65角' },
      { id: 'd', text: '70角' },
    ],
    correctAnswer: 'c',
    explanation: '10元=100角，3元5角=35角，100-35=65（角），应找回65角（即6元5角）。',
    hint: '把元都换算成角再计算',
  },

  // 第4题：找规律验证（多选题）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '重装赤魂王的攻击规律：第1回合2，第2回合5，第3回合10，第4回合17，第5回合？相邻两数的差分别是3, 5, 7, 9, 11。下面哪些说法正确？',
    options: [
      { id: 'a', text: '第5回合攻击力是26' },
      { id: 'b', text: '第6回合攻击力是37' },
      { id: 'c', text: '差的规律是每次加2' },
      { id: 'd', text: '第7回合攻击力是50' },
    ],
    correctAnswers: ['a', 'b', 'c', 'd'],
    explanation: 'A: 17+9=26 ✅，B: 26+11=37 ✅，C: 3→5→7→9→11，每次加2 ✅，D: 37+13=50 ✅',
    hint: '先算出相邻两数的差，看看差有什么规律',
  },

  // 第5题：最佳购物方案（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '用10元设计一个购物方案，买3件不同的商品，下面哪个方案最合理？',
    options: [
      { id: 'a', text: '买8元的玩具+1元的糖+1元的贴纸，共10元' },
      { id: 'b', text: '买3元5角的铅笔+4元的笔记本+2元5角的橡皮，共10元' },
      { id: 'c', text: '买10元的书，只买1件' },
      { id: 'd', text: '买5元的玩具+3元的糖+3元的饼干，共11元（超支）' },
    ],
    correctAnswer: 'b',
    explanation: '选项A：8+1+1=10元，但玩具和糖、贴纸不是学习用品；选项B：3元5角+4元+2元5角=10元，买了3件学习用品，最合理；选项C：只买1件，不符合"3件"要求；选项D：超支了。',
    hint: '要买3件不同的商品，总价不超过10元',
  },
];

/**
 * 按难度分组的题目
 */
export const level24QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level24EasyQuestions,
  [DifficultyLevel.MEDIUM]: level24MediumQuestions,
  [DifficultyLevel.HARD]: level24HardQuestions,
};

/**
 * 关卡 24 新手模式武器零件：赤魂火焰炮（5个零件）
 */
export const level24EasyWeaponParts: WeaponPart[] = [
  { id: 'easy-flame-core', name: '赤魂探测核心', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'easy-flame-navigator', name: '赤魂导航仪', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'easy-flame-armor-head', name: '赤魂战甲头', shapeType: 'triangle', iconImage: '/assets/weapons/光能护盾.png' },
  { id: 'easy-flame-ladder-pipe', name: '赤魂云梯管', shapeType: 'square', iconImage: '/assets/weapons/光能外壳.png' },
  { id: 'easy-flame-cannon-complete', name: '赤魂火焰炮完成', shapeType: 'composite', iconImage: '/assets/weapons/easy-weapon.png' },
];

/**
 * 关卡 24 挑战模式武器零件：毁灭能量炮（4个零件）
 */
export const level24MediumWeaponParts: WeaponPart[] = [
  { id: 'medium-destroy-core', name: '毁灭探测核心', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'medium-destroy-locator', name: '毁灭定位器', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'medium-destroy-armor-plate', name: '毁灭装甲板', shapeType: 'square', iconImage: '/assets/weapons/光能护盾.png' },
  { id: 'medium-destroy-cannon-complete', name: '毁灭能量炮完成', shapeType: 'composite', iconImage: '/assets/weapons/medium-weapon.png' },
];

/**
 * 关卡 24 高手模式武器零件：重装赤魂王终极炮（4个零件）
 */
export const level24HardWeaponParts: WeaponPart[] = [
  { id: 'hard-partner-command-core', name: '伙伴指挥核心', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'hard-courage-navigator', name: '勇气导航仪', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'hard-heavy-nova-system', name: '重装聚能系统', shapeType: 'square', iconImage: '/assets/weapons/光能外壳.png' },
  { id: 'hard-heavy-nova-ultimate-cannon-complete', name: '重装赤魂王终极炮完成', shapeType: 'composite', iconImage: '/assets/weapons/hard-weapon.png' },
];

/**
 * 按难度分组的武器零件
 */
export const level24WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level24EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level24MediumWeaponParts,
  [DifficultyLevel.HARD]: level24HardWeaponParts,
};

/**
 * 关卡 24 故事气泡配置
 */

/**
 * 关卡 24 完整配置
 */
export const level24EnhancedData = {
  levelId: 'level-24',
  characterName: '重装赤魂王',
  characterEnglishName: 'Flame Nova',
  theme: '期末综合 1 - 综合复习（四阶段 BOSS 战）',
  vehicleForm: '罗森鲍尔黑豹第三代8×8云梯消防车+矿用自卸车+履带式挖掘机+消防直升机',
  weapons: ['赤魂战甲', '铲斗巨臂', '云梯加农炮'],
  ultimateSkills: ['火焰能量弹', '毁灭能量弹', '重装聚能炮'],
  themeColor: '红色+黑色',
  difficulty: 3,
  rarity: '炫彩动态边 + 四形态切换动画',
  questionsByDifficulty: level24QuestionsByDifficulty,
  weaponPartsByDifficulty: level24WeaponPartsByDifficulty,
};
