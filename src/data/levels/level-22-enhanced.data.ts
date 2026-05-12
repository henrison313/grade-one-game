import type { Question, QuestionType, WeaponPart } from '@/types';
import { DifficultyLevel } from '@/types';

/**
 * 关卡 22 新手难度题目：幻影轮滑
 * 主题：欢乐购物街 - 第 2 课时：买卖我做主
 * 场景：极速便利店入口，疾速幻影设置限时购物计算考验
 * 难度定位：基础概念理解（找零计算、多件商品连加连减、组合付款、比较大小）
 * 角色：疾速幻影（Flash Vector）- F1方程式赛车 - 深蓝 - 疾速狂飙、隐身模式、闪现突袭
 */
export const level22EasyQuestions: Question[] = [
  // 第1题：找零计算（拖拽题）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '疾速幻影要求买饮料3元5角，付5元，应找回多少角？',
    instruction: '把5元换算成角，再减去饮料价格，计算找零。',
    items: [
      { id: 'five-yuan', name: '5元' },
      { id: 'drink-price', name: '3元5角' },
    ],
    targets: [
      { id: 'change', name: '找零', accepts: ['five-yuan', 'drink-price'], position: { x: 200, y: 150 }, size: { width: 150, height: 100 } },
    ],
    explanation: '找零 = 付的钱 - 商品价格。5元=50角，3元5角=35角，50-35=15（角），应找回15角（即1元5角）。',
    hint: '把元都换算成角，再相减',
  },

  // 第2题：多件商品连加连减（填空题）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '买铅笔1元2角和橡皮8角，付5元，应找回多少角？',
    answer: '30',
    explanation: '第一步：算出总价，1元2角+8角=1元10角=2元；第二步：算找零，5元-2元=3元=30角。',
    hint: '先算出两件商品一共多少钱，再算找零',
  },

  // 第3题：组合付款（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '买7元的笔记本，如何付钱不用找零？',
    options: [
      { id: 'a', text: '1张5元和2张1元' },
      { id: 'b', text: '7张1元' },
      { id: 'c', text: '1张5元和1张2元' },
      { id: 'd', text: '以上都可以' },
    ],
    correctAnswer: 'd',
    explanation: '选项A：5+1+1=7元；选项B：1×7=7元；选项C：5+2=7元。三种方式都能刚好付清7元，不用找零。',
    hint: '想想哪些组合加起来是7元',
  },

  // 第4题：比较大小 - 钱够不够（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '有10元，想买4元5角的尺子和6元的笔盒，钱够吗？',
    options: [
      { id: 'a', text: '够，还剩5角' },
      { id: 'b', text: '不够，还差5角' },
      { id: 'c', text: '够，刚好付清' },
      { id: 'd', text: '不够，还差1元' },
    ],
    correctAnswer: 'b',
    explanation: '总价：4元5角+6元=10元5角。有10元，10元-10元5角=-5角，所以不够，还差5角。',
    hint: '先算出两件商品的总价，再和10元比较',
  },

  // 第5题：找不同（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的找零结果与其他三个不同？',
    options: [
      { id: 'a', text: '5元-3元5角' },
      { id: 'b', text: '5元-2元' },
      { id: 'c', text: '10元-8元5角' },
      { id: 'd', text: '5元-1元5角' },
    ],
    correctAnswer: 'd',
    explanation: 'A: 50角-35角=15角，B: 5元-2元=3元=30角，C: 100角-85角=15角。A和C的找零都是15角，B是30角，D是35角，所以D的结果(35角)和其他三个不同。',
    hint: '分别计算每个算式的找零，找出不同的那个',
  },
];

/**
 * 关卡 22 挑战难度题目：疾速幻影战炮
 * 主题：欢乐购物街 - 第 2 课时：买卖我做主
 * 场景：极速便利店货架区，疾速幻影和鳄鱼精展开极速计算竞赛
 * 难度定位：综合应用（找零计算、逆向思维、比较关系、多选验证、找不同）
 * 角色：疾速幻影（Flash Vector）- F1方程式赛车 - 深蓝 - 疾速狂飙、隐身模式、闪现突袭
 */
export const level22MediumQuestions: Question[] = [
  // 第1题：找零计算（拖拽题）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '疾速幻影买零食5元2角，付10元，应找回多少元多少角？',
    instruction: '把10元减去零食价格，计算找零。',
    items: [
      { id: 'ten-yuan', name: '10元' },
      { id: 'snack-price', name: '5元2角' },
    ],
    targets: [
      { id: 'change', name: '找零', accepts: ['ten-yuan', 'snack-price'], position: { x: 200, y: 150 }, size: { width: 150, height: 100 } },
    ],
    explanation: '找零 = 付的钱 - 商品价格。10元-5元2角=4元8角。先算10元-5元=5元，再算5元-2角=4元8角。',
    hint: '先减元，再减角',
  },

  // 第2题：逆向思维（填空题）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '疾速幻影有20元，买了文具后还剩8元5角，文具花了{{___}}元{{___}}角。',
    answer: ['11', '5'],
    explanation: '花的钱 = 原有的钱 - 剩余的钱。20元-8元5角=11元5角。',
    hint: '用原有的钱减去剩余的钱',
  },

  // 第3题：比较关系（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '疾速幻影找零4元8角，鳄鱼精找零3元5角，谁的找零多？多多少？',
    options: [
      { id: 'a', text: '疾速幻影多，多1元3角' },
      { id: 'b', text: '鳄鱼精多，多1元3角' },
      { id: 'c', text: '疾速幻影多，多2元3角' },
      { id: 'd', text: '鳄鱼精多，多2元3角' },
    ],
    correctAnswer: 'a',
    explanation: '比较两个数的大小。4元8角 > 3元5角，所以疾速幻影的找零多。4元8角-3元5角=1元3角。',
    hint: '先比较大小，再用大数减小数',
  },

  // 第4题：购物计算验证（多选题）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '下面哪些说法是正确的？请选出所有正确的。',
    options: [
      { id: 'a', text: '买3元5角的饮料，付5元，找回15角' },
      { id: 'b', text: '买铅笔1元2角和橡皮8角，总价是2元' },
      { id: 'c', text: '有10元，买4元5角尺子和6元笔盒，钱够' },
      { id: 'd', text: '用1张5元和2张1元买7元笔记本，不用找零' },
    ],
    correctAnswers: ['a', 'b', 'd'],
    explanation: 'A: 50角-35角=15角 ✅ 正确；B: 1元2角+8角=2元 ✅ 正确；C: 4元5角+6元=10元5角，10元不够还差5角 ❌ 错误；D: 5元+1元+1元=7元 ✅ 正确。所以正确答案是A、B、D（C是错误的）。',
    hint: '分别验证每个说法',
  },

  // 第5题：找不同（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个算式的找零结果与其他三个不同？',
    options: [
      { id: 'a', text: '10元-5元2角' },
      { id: 'b', text: '20元-15元2角' },
      { id: 'c', text: '15元-10元2角' },
      { id: 'd', text: '10元-4元2角' },
    ],
    correctAnswer: 'd',
    explanation: 'A、B、C三个算式的结果都是4元8角，只有D的结果是5元8角，所以D不同。',
    hint: '分别计算每个算式的结果，找出不同的那个',
  },
];

/**
 * 关卡 22 高手难度题目：疾速幻影终极炮
 * 主题：欢乐购物街 - 第 2 课时：买卖我做主
 * 场景：极速便利店收银台，炫卡斗士团队极速计算竞赛获胜
 * 难度定位：拓展挑战（三人购物、逆向思维、逻辑推理、多步计算、最优方案）
 * 角色：疾速幻影（Flash Vector）- F1方程式赛车 - 深蓝 - 疾速狂飙、隐身模式、闪现突袭
 */
export const level22HardQuestions: Question[] = [
  // 第1题：三人购物（拖拽题）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '疾速幻影买零食5元2角，深海霸王买文具8元，小俊买饮料3元5角，他们一共花了多少元多少角？',
    instruction: '把三个人的购物花费拖到一起，计算总数。',
    items: [
      { id: 'flash', name: '疾速幻影 5元2角' },
      { id: 'deep', name: '深海霸王 8元' },
      { id: 'jun', name: '小俊 3元5角' },
    ],
    targets: [
      { id: 'total', name: '总花费', accepts: ['flash', 'deep', 'jun'], position: { x: 200, y: 150 }, size: { width: 150, height: 100 } },
    ],
    explanation: '部分 + 部分 + 部分 = 整体。5元2角 + 8元 + 3元5角 = 16元7角。',
    hint: '把三个人的购物花费加起来',
  },

  // 第2题：逆向思维（填空题）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '他们一共花了16元7角，其中疾速幻影花了5元2角，深海霸王花了8元，小俊花了{{___}}元{{___}}角。',
    answer: ['3', '5'],
    explanation: '整体 - 部分 - 部分 = 另一部分。16元7角 - 5元2角 - 8元 = 3元5角。',
    hint: '用总数减去疾速幻影和深海霸王的花费',
  },

  // 第3题：逻辑推理（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '小俊有20元购物预算，疾速幻影比小俊少8元，深海霸王比疾速幻影多5元，深海霸王有多少元？',
    options: [
      { id: 'a', text: '17元' },
      { id: 'b', text: '13元' },
      { id: 'c', text: '15元' },
      { id: 'd', text: '25元' },
    ],
    correctAnswer: 'a',
    explanation: '先算疾速幻影：20元 - 8元 = 12元；再算深海霸王：12元 + 5元 = 17元。',
    hint: '先算疾速幻影的预算，再算深海霸王的预算',
  },

  // 第4题：多步计算（多选题）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '疾速幻影有20元，买了零食5元2角，又买了文具8元，现在还剩多少元多少角？下面哪些说法正确？',
    options: [
      { id: 'a', text: '买完零食后还剩14元8角' },
      { id: 'b', text: '现在有6元8角' },
      { id: 'c', text: '买完零食后还剩15元8角' },
      { id: 'd', text: '现在有7元8角' },
    ],
    correctAnswers: ['a', 'b'],
    explanation: '先算买完零食后剩余：20元 - 5元2角 = 14元8角 ✅；再算买完文具后剩余：14元8角 - 8元 = 6元8角 ✅。',
    hint: '先算买完零食后剩多少，再算买完文具后剩多少',
  },

  // 第5题：最优方案（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '有1元、5元、10元各一张，买12元的商品，怎么付钱最合理？',
    options: [
      { id: 'a', text: '付10元+1元+1元（但只有1张1元，无法支付）' },
      { id: 'b', text: '付10元+5元，找回3元' },
      { id: 'c', text: '付5元+1元+1元+5元（重复使用5元，不合理）' },
      { id: 'd', text: '付10元+1元+5元，找回4元' },
    ],
    correctAnswer: 'b',
    explanation: '12元需要付10元+5元=15元，找回15-12=3元。这是唯一可行的支付方式，因为手里只有1张1元，无法凑出12元刚好付清。',
    hint: '手里的钱无法刚好凑出12元，只能多付让卖家找零',
  },
];

/**
 * 按难度分组的题目
 */
export const level22QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level22EasyQuestions,
  [DifficultyLevel.MEDIUM]: level22MediumQuestions,
  [DifficultyLevel.HARD]: level22HardQuestions,
};

/**
 * 关卡 22 新手模式武器零件：幻影轮滑（5个零件）
 */
export const level22EasyWeaponParts: WeaponPart[] = [
  { id: 'easy-flash-core', name: '幻影探测核心', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'easy-flash-navigator', name: '幻影导航仪', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'easy-flash-blade-head', name: '幻影短刃头', shapeType: 'triangle', iconImage: '/assets/weapons/光能护盾.png' },
  { id: 'easy-flash-traverse-pipe', name: '幻影穿梭管', shapeType: 'square', iconImage: '/assets/weapons/光能外壳.png' },
  { id: 'easy-flash-skates-complete', name: '幻影轮滑完成', shapeType: 'composite', iconImage: '/assets/weapons/easy-weapon.png' },
];

/**
 * 关卡 22 挑战模式武器零件：疾速幻影战炮（4个零件）
 */
export const level22MediumWeaponParts: WeaponPart[] = [
  { id: 'medium-flash-calc-core', name: '幻影计算核心', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'medium-flash-change-meter', name: '幻影找零仪', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'medium-flash-armor-plate', name: '幻影装甲板', shapeType: 'square', iconImage: '/assets/weapons/光能护盾.png' },
  { id: 'medium-flash-vector-cannon-complete', name: '疾速幻影战炮完成', shapeType: 'composite', iconImage: '/assets/weapons/medium-weapon.png' },
];

/**
 * 关卡 22 高手模式武器零件：疾速幻影终极炮（4个零件）
 */
export const level22HardWeaponParts: WeaponPart[] = [
  { id: 'hard-partner-flash-core', name: '伙伴幻影核心', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'hard-flash-fairness-meter', name: '幻影公平仪', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'hard-flash-system', name: '幻影系统', shapeType: 'square', iconImage: '/assets/weapons/光能外壳.png' },
  { id: 'hard-flash-vector-ultimate-cannon-complete', name: '疾速幻影终极炮完成', shapeType: 'composite', iconImage: '/assets/weapons/hard-weapon.png' },
];

/**
 * 按难度分组的武器零件
 */
export const level22WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level22EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level22MediumWeaponParts,
  [DifficultyLevel.HARD]: level22HardWeaponParts,
};

/**
 * 关卡 22 故事气泡配置
 */

/**
 * 关卡 22 完整配置
 */
export const level22EnhancedData = {
  levelId: 'level-22',
  characterName: '疾速幻影',
  characterEnglishName: 'Flash Vector',
  theme: '欢乐购物街 - 第 2 课时：买卖我做主',
  vehicleForm: 'F1方程式赛车',
  weapons: ['幻影轮滑', '无声短刃'],
  ultimateSkills: ['疾速狂飙', '隐身模式', '闪现突袭'],
  themeColor: '深蓝',
  difficulty: 4,
  rarity: '金边 + 速度残影特效',
  questionsByDifficulty: level22QuestionsByDifficulty,
  weaponPartsByDifficulty: level22WeaponPartsByDifficulty,
};
