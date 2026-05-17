import { getAssetPath } from '@/config/paths.config';
import type { Question, QuestionType, WeaponPart } from '@/types';
import { DifficultyLevel } from '@/types';

/**
 * 关卡 3-4 新手难度题目：玄铁重剑
 * 主题：三、100以内数的认识 - 第4课时：数的组成综合练习
 * 场景：重型能量炮基地入口，玄铁战神设置数的组成考验
 * 难度定位：基础概念理解（数的组成、数的分解、十位和个位）
 * 角色：玄铁战神（Heavy Iron）- 20世纪70至80年代美国机车牵引卡车 - 深红+靛蓝 - 重型能量炮、钢铁能量、铁剑斩击
 */
export const level34EasyQuestions: Question[] = [
  // 第1题：数的组成（拖拽题）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '玄铁战神的重型能量炮需要78个能量块。78里面有7个十和8个一。把7个十和8个一拖到目标区域，组成78。',
    instruction: '把7个十和8个一拖到目标区域，组成78。',
    items: [
      { id: 'seven-tens', name: '7个十（70）' },
      { id: 'eight-ones', name: '8个一（8）' },
    ],
    targets: [
      { id: 'seventy-eight', name: '78', accepts: ['seven-tens', 'eight-ones'], position: { x: 200, y: 150 }, size: { width: 150, height: 100 } },
    ],
    explanation: '78里面有7个十和8个一。7个十是70，8个一是8，70+8=78。',
    hint: '78的十位是7，个位是8',
  },

  // 第2题：数的组成（填空题）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '95里面有{{___}}个十和{{___}}个一。',
    answer: ['9', '5'],
    explanation: '95里面有9个十和5个一。95=90+5，9个十是90，5个一是5。',
    hint: '95的十位是9，个位是5',
  },

  // 第3题：数的组成（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '6个十和3个一组成的数是？',
    options: [
      { id: 'a', text: '36' },
      { id: 'b', text: '63' },
      { id: 'c', text: '60' },
      { id: 'd', text: '30' },
    ],
    correctAnswer: 'b',
    explanation: '6个十和3个一组成的数是63。6个十是60，3个一是3，60+3=63。',
    hint: '6个十是60，加上3个一',
  },

  // 第4题：数的分解（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '玄铁战神的能量等级是95，95可以分成？',
    options: [
      { id: 'a', text: '9个十和5个一' },
      { id: 'b', text: '5个十和9个一' },
      { id: 'c', text: '9个十和9个一' },
      { id: 'd', text: '5个十和5个一' },
    ],
    correctAnswer: 'a',
    explanation: '95可以分成9个十和5个一。95=90+5，十位是9，个位是5。',
    hint: '95的十位是9，个位是5',
  },

  // 第5题：综合应用（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '小明有8张十元纸币和6枚一元硬币，他一共有多少钱？',
    options: [
      { id: 'a', text: '14元' },
      { id: 'b', text: '86元' },
      { id: 'c', text: '68元' },
      { id: 'd', text: '80元' },
    ],
    correctAnswer: 'b',
    explanation: '8张十元是80元（8个十），6枚一元是6元（6个一），一共是86元（8个十和6个一组成的数）。',
    hint: '8个十和6个一组成什么数？',
  },
];

/**
 * 关卡 3-4 挑战难度题目：重型能量炮
 * 主题：三、100以内数的认识 - 第4课时：数的组成综合练习
 * 场景：重型能量炮发射台，玄铁战神展开重型能量炮挑战
 * 难度定位：综合应用（数的组成验证、数的分解、十位个位应用、找规律）
 * 角色：玄铁战神（Heavy Iron）- 20世纪70至80年代美国机车牵引卡车 - 深红+靛蓝 - 重型能量炮、钢铁能量、铁剑斩击
 */
export const level34MediumQuestions: Question[] = [
  // 第1题：数的组成组合（拖拽题）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '玄铁战神的重型能量炮需要三组能量块：第一组：3个十和5个一（35）；第二组：4个十和8个一（48）；第三组：2个十和7个一（27）。把三组能量块拖到目标区域，计算总能量。',
    instruction: '把三组能量块拖到目标区域，计算总能量。',
    items: [
      { id: 'group1', name: '第一组 35' },
      { id: 'group2', name: '第二组 48' },
      { id: 'group3', name: '第三组 27' },
    ],
    targets: [
      { id: 'total', name: '总能量', accepts: ['group1', 'group2', 'group3'], position: { x: 0, y: 30 }, size: { width: 280, height: 200 } },
    ],
    calculation: {
      type: 'sum',
      values: [35, 48, 27],
      result: 110,
      label: '总能量',
    },
    explanation: '总能量 = 35 + 48 + 27 = 110。35是3个十和5个一，48是4个十和8个一，27是2个十和7个一。',
    hint: '把三组能量块加起来',
  },

  // 第2题：十位个位（填空题）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '4个十是{{___}}，10个十是{{___}}。',
    answer: ['40', '100'],
    explanation: '4个十是40（4×10=40），10个十是100（10×10=100）。',
    hint: '1个十是10，数一数几个十',
  },

  // 第3题：数的组成比较（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '玄铁战神的能量等级是78，深海天锚的能量等级是86。谁的能量等级高？高多少？',
    options: [
      { id: 'a', text: '玄铁战神高，高8个一' },
      { id: 'b', text: '深海天锚高，高8个一' },
      { id: 'c', text: '玄铁战神高，高2个十' },
      { id: 'd', text: '深海天锚高，高2个十' },
    ],
    correctAnswer: 'b',
    explanation: '86 > 78，所以深海天锚的能量等级高。86-78=8，所以高8个一。86是8个十和6个一，78是7个十和8个一，相差1个十和-2个一，实际相差8个一。',
    hint: '比较两个数的大小，再计算差',
  },

  // 第4题：数的组成验证（多选题）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '下面哪些数的组成是正确的？请选出所有正确的。',
    options: [
      { id: 'a', text: '78里面有7个十和8个一' },
      { id: 'b', text: '95里面有5个十和9个一' },
      { id: 'c', text: '63里面有6个十和3个一' },
      { id: 'd', text: '40里面有4个十和0个一' },
    ],
    correctAnswers: ['a', 'c', 'd'],
    explanation: 'A: 78=70+8，7个十和8个一 ✅；B: 95=90+5，应该是9个十和5个一，不是5个十和9个一 ❌；C: 63=60+3，6个十和3个一 ✅；D: 40=40+0，4个十和0个一 ✅',
    hint: '验证每个数的组成是否正确',
  },

  // 第5题：找规律（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '玄铁战神的能量序列：30, 40, 50, 60, ___ 下一个能量是多少？',
    options: [
      { id: 'a', text: '65' },
      { id: 'b', text: '70' },
      { id: 'c', text: '75' },
      { id: 'd', text: '80' },
    ],
    correctAnswer: 'b',
    explanation: '规律是每次加10（增加1个十）：30+10=40, 40+10=50, 50+10=60, 60+10=70。',
    hint: '每次增加1个十',
  },
];

/**
 * 关卡 3-4 高手难度题目：玄铁战神终极炮
 * 主题：三、100以内数的认识 - 第4课时：数的组成综合练习
 * 场景：玄铁战神基地，小俊团队重型能量炮挑战成功
 * 难度定位：拓展挑战（三数组成、逆向思维、逻辑推理、多步计算、最佳方案）
 * 角色：玄铁战神（Heavy Iron）- 20世纪70至80年代美国机车牵引卡车 - 深红+靛蓝 - 重型能量炮、钢铁能量、铁剑斩击
 */
export const level34HardQuestions: Question[] = [
  // 第1题：三数组成（拖拽题）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '玄铁战神的基地防御系统需要三组能量：第一组：12个十和5个一（125）；第二组：8个十和15个一（95）；第三组：15个十和10个一（160）。把三组能量拖到目标区域，计算总防御能量。',
    instruction: '把三组能量拖到目标区域，计算总防御能量。',
    items: [
      { id: 'group1', name: '第一组 125' },
      { id: 'group2', name: '第二组 95' },
      { id: 'group3', name: '第三组 160' },
    ],
    targets: [
      { id: 'total', name: '总防御能量', accepts: ['group1', 'group2', 'group3'], position: { x: 0, y: 30 }, size: { width: 280, height: 200 } },
    ],
    calculation: {
      type: 'sum',
      values: [125, 95, 160],
      result: 380,
      label: '总防御能量',
    },
    explanation: '总防御能量 = 125 + 95 + 160 = 380。125是12个十和5个一，95是8个十和15个一，160是15个十和10个一。',
    hint: '把三组能量加起来',
  },

  // 第2题：逆向思维（填空题）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '玄铁战神的基地总防御能量是380，第一组是125，第二组是95，第三组是多少？{{___}}',
    answer: ['160'],
    explanation: '整体 - 部分 - 部分 = 另一部分。380 - 125 - 95 = 160。',
    hint: '用总防御能量减去第一组和第二组',
  },

  // 第3题：逻辑推理（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '玄铁战神的能量等级是100，深海天锚比玄铁战神少15个一，重力金刚比深海天锚多2个十。重力金刚的能量等级是多少？',
    options: [
      { id: 'a', text: '85' },
      { id: 'b', text: '95' },
      { id: 'c', text: '105' },
      { id: 'd', text: '115' },
    ],
    correctAnswer: 'c',
    explanation: '先算深海天锚：100 - 15 = 85；再算重力金刚：85 + 20 = 105（2个十=20）',
    hint: '先算深海天锚的能量等级，再算重力金刚的能量等级',
  },

  // 第4题：多步计算（多选题）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '玄铁战神有120个能量块，战斗消耗了35个能量块（3个十和5个一），又获得了补给28个能量块（2个十和8个一）。现在还剩多少个能量块？下面哪些说法正确？',
    options: [
      { id: 'a', text: '消耗后还剩85个能量块' },
      { id: 'b', text: '现在有113个能量块' },
      { id: 'c', text: '消耗后还剩95个能量块' },
      { id: 'd', text: '现在有103个能量块' },
    ],
    correctAnswers: ['a', 'b'],
    explanation: '先算消耗后剩余：120 - 35 = 85 ✅；再算补给后总数：85 + 28 = 113 ✅',
    hint: '先算消耗后剩余，再算补给后总数',
  },

  // 第5题：最佳方案（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '玄铁战神的基地需要设置防御能量等级。下面哪个能量等级最适合基地防御？',
    options: [
      { id: 'a', text: '50（5个十，防御太弱）' },
      { id: 'b', text: '100（10个十，防御适中）' },
      { id: 'c', text: '150（15个十，防御过强浪费能量）' },
      { id: 'd', text: '10（1个十，防御极弱）' },
    ],
    correctAnswer: 'b',
    explanation: '100（10个十）是最适合的防御能量等级，防御适中，不浪费能量。50太弱，150过强浪费，10极弱。',
    hint: '选择最适合的防御能量等级',
  },
];

/**
 * 按难度分组的题目
 */
export const level34QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level34EasyQuestions,
  [DifficultyLevel.MEDIUM]: level34MediumQuestions,
  [DifficultyLevel.HARD]: level34HardQuestions,
};

/**
 * 关卡 3-4 新手模式武器零件：玄铁重剑（5个零件）
 */
export const level34EasyWeaponParts: WeaponPart[] = [
  { id: 'easy-heavy-core', name: '玄铁探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.webp') },
  { id: 'easy-heavy-navigator', name: '玄铁导航仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.webp') },
  { id: 'easy-heavy-armor-head', name: '玄铁胸甲头', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能护盾.webp') },
  { id: 'easy-heavy-shoulder-pipe', name: '玄铁肩火管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.webp') },
  { id: 'easy-heavy-sword-complete', name: '玄铁重剑完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/easy-xuanlan-shandian-light.webp') },
];

/**
 * 关卡 3-4 挑战模式武器零件：重型能量炮（4个零件）
 */
export const level34MediumWeaponParts: WeaponPart[] = [
  { id: 'medium-heavy-core', name: '重型探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.webp') },
  { id: 'medium-heavy-locator', name: '重型定位器', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.webp') },
  { id: 'medium-heavy-armor-plate', name: '重型装甲板', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.webp') },
  { id: 'medium-heavy-cannon-complete', name: '重型能量炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/medium-xuanlan-shandian-bolt.webp') },
];

/**
 * 关卡 3-4 高手模式武器零件：玄铁战神终极炮（4个零件）
 */
export const level34HardWeaponParts: WeaponPart[] = [
  { id: 'hard-partner-command-core', name: '伙伴指挥核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.webp') },
  { id: 'hard-courage-navigator', name: '勇气导航仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.webp') },
  { id: 'hard-heavy-sword-system', name: '玄铁重剑系统', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.webp') },
  { id: 'hard-heavy-iron-ultimate-cannon-complete', name: '玄铁战神终极炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/hard-xuanlan-shandian-thunder.webp') },
];

/**
 * 按难度分组的武器零件
 */
export const level34WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level34EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level34MediumWeaponParts,
  [DifficultyLevel.HARD]: level34HardWeaponParts,
};

/**
 * 关卡 3-4 故事气泡配置
 */

/**
 * 关卡 3-4 完整配置
 */
export const level34EnhancedData = {
  levelId: 'level-3-4',
  characterName: '玄铁战神',
  characterEnglishName: 'Heavy Iron',
  theme: '三、100以内数的认识 - 第4课时：数的组成综合练习',
  vehicleForm: '20世纪70至80年代美国机车牵引卡车',
  weapons: ['玄铁胸甲', '玄铁腕刃重剑', '玄铁肩火炮'],
  ultimateSkills: ['重型能量炮', '钢铁能量', '铁剑斩击'],
  themeColor: '深红+靛蓝',
  difficulty: 3,
  rarity: '金边 + 重型能量特效',
  questionsByDifficulty: level34QuestionsByDifficulty,
  weaponPartsByDifficulty: level34WeaponPartsByDifficulty,
};
