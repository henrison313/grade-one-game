import type { Question, QuestionType, WeaponPart } from '@/types';
import { DifficultyLevel } from '@/types';

/**
 * 关卡 21 新手难度题目：雷霆拳套
 * 主题：认识人民币 - 拳霸比特的故事
 * 场景：欢乐购物街入口，拳霸比特设置人民币考验
 * 难度定位：基础概念理解（认识人民币面值、简单换算、直观比较）
 */
export const level21EasyQuestions: Question[] = [
  // 第1题：人民币组合（部分与整体）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '拳霸比特准备了3张1元纸币和5个1角硬币，小俊送来了2张1元纸币和8个1角硬币，他们一共有多少元多少角？',
    instruction: '把拳霸比特的人民币和小俊的人民币拖到一起，计算总数。',
    items: [
      { id: 'bit', name: '拳霸比特 3元5角' },
      { id: 'jun', name: '小俊 2元8角' },
    ],
    targets: [
      { id: 'total', name: '总数量', accepts: ['bit', 'jun'], position: { x: 200, y: 150 }, size: { width: 150, height: 100 } },
    ],
    explanation: '部分 + 部分 = 整体。3元5角 + 2元8角 = 5元13角 = 6元3角（63角），一共有6元3角。',
    hint: '先把元和元加起来，角和角加起来，满10角进1元',
  },

  // 第2题：人民币换算
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '拳霸比特有5元，买了一副拳击手套用了3元5角，还剩多少角？',
    answer: '15',
    explanation: '5元 = 50角，3元5角 = 35角。50角 - 35角 = 15角，还剩15角。',
    hint: '先把元换算成角再计算',
  },

  // 第3题：比较关系 - 谁多谁少
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '拳霸比特有6元3角，小俊有5元8角，谁的钱多？多几角？',
    options: [
      { id: 'a', text: '拳霸比特多，多5角' },
      { id: 'b', text: '小俊多，多5角' },
      { id: 'c', text: '拳霸比特多，多8角' },
      { id: 'd', text: '小俊多，多8角' },
    ],
    correctAnswer: 'a',
    explanation: '6元3角 = 63角，5元8角 = 58角。63 > 58，所以拳霸比特的多。63 - 58 = 5（角），多5角。',
    hint: '先把两个数都换算成角再比较',
  },

  // 第4题：找不同题
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个金额和其他三个不同？',
    options: [
      { id: 'a', text: '6元3角' },
      { id: 'b', text: '63角' },
      { id: 'c', text: '3元5角 + 2元8角' },
      { id: 'd', text: '7元3角' },
    ],
    correctAnswer: 'd',
    explanation: 'A: 6元3角 = 63角，B: 63角 = 63角，C: 3元5角 + 2元8角 = 6元3角 = 63角，D: 7元3角 = 73角，与其他不同。',
    hint: '把所有金额都换算成角，找出不同的那个',
  },

  // 第5题：比较题
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '拳霸比特有6元3角，小俊有5元8角，深海霸王有7元1角，谁的钱最多？',
    options: [
      { id: 'a', text: '拳霸比特' },
      { id: 'b', text: '小俊' },
      { id: 'c', text: '深海霸王' },
      { id: 'd', text: '一样多' },
    ],
    correctAnswer: 'c',
    explanation: '6元3角 = 63角，5元8角 = 58角，7元1角 = 71角。71 > 63 > 58，所以深海霸王的最多。',
    hint: '把所有金额都换算成角再比较大小',
  },
];

/**
 * 关卡 21 挑战难度题目：拳霸比特战炮
 * 主题：认识人民币 - 拳霸比特的故事
 * 场景：购物街商店街，拳霸比特和鳄鱼精展开购物竞赛
 * 难度定位：综合应用（两步计算、逆向思维、场景应用）
 */
export const level21MediumQuestions: Question[] = [
  // 第1题：购物付款
  {
    type: 'drag' as QuestionType.DRAG,
    question: '拳霸比特买了45元的拳击手套和38元的拳击鞋，他一共花了多少钱？',
    instruction: '把拳击手套和拳击鞋的价格拖到一起，计算总价。',
    items: [
      { id: 'gloves', name: '拳击手套 45元' },
      { id: 'shoes', name: '拳击鞋 38元' },
    ],
    targets: [
      { id: 'total', name: '总价', accepts: ['gloves', 'shoes'], position: { x: 0, y: 30 }, size: { width: 200, height: 120 } },
    ],
    calculation: {
      type: 'sum',
      values: [45, 38],
      result: 83,
      label: '总价',
    },
    explanation: '部分 + 部分 = 整体。45 + 38 = 83（元），一共花了83元。',
    hint: '把两样商品的价格加起来',
  },

  // 第2题：逆向思维 - 求找零
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '拳霸比特付了100元买了67元的拳击装备，应该找回多少钱？',
    answer: '33',
    explanation: '付出的钱 - 商品价格 = 找零。100 - 67 = 33（元），应该找回33元。',
    hint: '用付出的钱减去商品价格',
  },

  // 第3题：比较关系 - 谁多谁少
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '拳霸比特花了83元购物，鳄鱼精花了72元购物，谁花得多？多几元？',
    options: [
      { id: 'a', text: '拳霸比特多，多11元' },
      { id: 'b', text: '鳄鱼精多，多11元' },
      { id: 'c', text: '拳霸比特多，多15元' },
      { id: 'd', text: '鳄鱼精多，多15元' },
    ],
    correctAnswer: 'a',
    explanation: '83 > 72，所以拳霸比特花得多。83 - 72 = 11（元），多11元。',
    hint: '先比较大小，再用大数减小数',
  },

  // 第4题：多选题
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '拳霸比特有90元，买了35元的拳击手套和28元的拳击鞋，下面哪些说法正确？',
    options: [
      { id: 'a', text: '一共花了63元' },
      { id: 'b', text: '还剩27元' },
      { id: 'c', text: '一共花了73元' },
      { id: 'd', text: '还剩55元' },
    ],
    correctAnswers: ['a', 'b'],
    explanation: '先算总价：35 + 28 = 63（元），再算剩余：90 - 63 = 27（元）',
    hint: '先算花了多少钱，再算还剩多少钱',
  },

  // 第5题：找不同题
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的计算结果与其他三个不同？',
    options: [
      { id: 'a', text: '45 + 38' },
      { id: 'b', text: '50 + 33' },
      { id: 'c', text: '60 + 23' },
      { id: 'd', text: '40 + 38' },
    ],
    correctAnswer: 'd',
    explanation: 'A、B、C三个算式的结果都是83，只有D的结果是78，所以D不同。',
    hint: '分别计算每个算式的结果，找出不同的那个',
  },
];

/**
 * 关卡 21 高手难度题目：拳霸比特终极炮
 * 主题：认识人民币 - 拳霸比特的故事
 * 场景：购物街擂台，炫卡斗士团队购物竞赛获胜
 * 难度定位：拓展挑战（多步计算、逻辑推理、开放性问题）
 */
export const level21HardQuestions: Question[] = [
  // 第1题：多步计算（三个数相加）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '拳霸比特买了58元的拳击装备，深海霸王买了42元的潜水装备，小俊买了35元的炫卡装备，他们一共花了多少钱？',
    instruction: '把三个人的购物金额拖到一起，计算总数。',
    items: [
      { id: 'bit', name: '拳霸比特 58元' },
      { id: 'deep', name: '深海霸王 42元' },
      { id: 'jun', name: '小俊 35元' },
    ],
    targets: [
      { id: 'total', name: '总花费', accepts: ['bit', 'deep', 'jun'], position: { x: 0, y: 30 }, size: { width: 280, height: 200 } },
    ],
    calculation: {
      type: 'sum',
      values: [58, 42, 35],
      result: 135,
      label: '总花费',
    },
    explanation: '部分 + 部分 + 部分 = 整体。58 + 42 + 35 = 135（元），一共花了135元。',
    hint: '把三个人的购物金额加起来',
  },

  // 第2题：逆向思维（三个数求剩余）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '他们一共花了135元购物，其中拳霸比特花了58元，深海霸王花了42元，小俊花了多少元？',
    answer: '35',
    explanation: '整体 - 部分 - 部分 = 另一部分。135 - 58 - 42 = 35（元），小俊花了35元。',
    hint: '用总数减去拳霸比特和深海霸王的花费',
  },

  // 第3题：逻辑推理（两步比较）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '小俊有100元购物预算，拳霸比特比小俊少22元，深海霸王比拳霸比特多15元，深海霸王有多少元？',
    options: [
      { id: 'a', text: '93元' },
      { id: 'b', text: '78元' },
      { id: 'c', text: '85元' },
      { id: 'd', text: '105元' },
    ],
    correctAnswer: 'a',
    explanation: '先算拳霸比特：100 - 22 = 78（元），再算深海霸王：78 + 15 = 93（元）。',
    hint: '先算拳霸比特的预算，再算深海霸王的预算',
  },

  // 第4题：多选题（多步计算验证）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '拳霸比特有85元，买了38元的拳击手套，又买了20元的拳击鞋，下面哪些说法正确？',
    options: [
      { id: 'a', text: '买完手套后还剩47元' },
      { id: 'b', text: '买完鞋后还剩27元' },
      { id: 'c', text: '买完手套后还剩57元' },
      { id: 'd', text: '买完鞋后还剩37元' },
    ],
    correctAnswers: ['a', 'b'],
    explanation: '先算买完手套后剩余：85 - 38 = 47（元），再算买完鞋后剩余：47 - 20 = 27（元）',
    hint: '先算买完手套后剩多少，再算买完鞋后剩多少',
  },

  // 第5题：找规律题（三个数相加）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的结果和其他三个不同？',
    options: [
      { id: 'a', text: '58 + 42 + 35 = 135' },
      { id: 'b', text: '60 + 40 + 35 = 135' },
      { id: 'c', text: '55 + 45 + 35 = 135' },
      { id: 'd', text: '50 + 40 + 35 = 125' },
    ],
    correctAnswer: 'd',
    explanation: 'A、B、C三个算式的结果都是135，只有D的结果是125，所以D不同。',
    hint: '分别计算每个算式的结果，找出不同的那个',
  },
];

/**
 * 按难度分组的题目
 */
export const level21QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level21EasyQuestions,
  [DifficultyLevel.MEDIUM]: level21MediumQuestions,
  [DifficultyLevel.HARD]: level21HardQuestions,
};

/**
 * 关卡 21 新手模式武器零件：雷霆拳套（5个零件）
 */
export const level21EasyWeaponParts: WeaponPart[] = [
  { id: 'easy-boxing-core', name: '拳击计量核心', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'easy-boxing-meter', name: '拳击计量仪', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'easy-thunder-fist-head', name: '雷霆拳套头', shapeType: 'triangle', iconImage: '/assets/weapons/光能护盾.png' },
  { id: 'easy-boxing-meter-pipe', name: '拳击计量管', shapeType: 'square', iconImage: '/assets/weapons/光能外壳.png' },
  { id: 'easy-thunder-fist-complete', name: '雷霆拳套完成', shapeType: 'composite', iconImage: '/assets/weapons/easy-weapon.png' },
];

/**
 * 关卡 21 挑战模式武器零件：拳霸比特战炮（4个零件）
 */
export const level21MediumWeaponParts: WeaponPart[] = [
  { id: 'medium-shopping-core', name: '购物计算核心', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'medium-change-calculator', name: '找零计算器', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'medium-boxing-armor-plate', name: '拳击装甲板', shapeType: 'square', iconImage: '/assets/weapons/光能护盾.png' },
  { id: 'medium-boxer-bit-cannon-complete', name: '拳霸比特战炮完成', shapeType: 'composite', iconImage: '/assets/weapons/medium-weapon.png' },
];

/**
 * 关卡 21 高手模式武器零件：拳霸比特终极炮（4个零件）
 */
export const level21HardWeaponParts: WeaponPart[] = [
  { id: 'hard-partner-shopping-core', name: '伙伴购物核心', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'hard-fairness-meter', name: '公平计量仪', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'hard-thunder-fist-system', name: '雷霆拳套系统', shapeType: 'square', iconImage: '/assets/weapons/光能外壳.png' },
  { id: 'hard-boxer-bit-ultimate-cannon-complete', name: '拳霸比特终极炮完成', shapeType: 'composite', iconImage: '/assets/weapons/hard-weapon.png' },
];

/**
 * 按难度分组的武器零件
 */
export const level21WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level21EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level21MediumWeaponParts,
  [DifficultyLevel.HARD]: level21HardWeaponParts,
};
