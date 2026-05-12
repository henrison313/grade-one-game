import type { Question, QuestionType, WeaponPart } from '@/types';
import { DifficultyLevel } from '@/types';

/**
 * 关卡 23 新手难度题目：重轨战铠
 * 主题：七、找规律（全单元）
 * 场景：午夜车站入口，小俊团队发现神秘列车
 * 难度定位：基础概念理解（图形规律、颜色规律、数字等差规律、递减规律、百数表规律）
 * 角色：重轨巨神（Blastrain）- EMD E型内燃机车 - 黑色 - 利爪暴击、巨量重炮
 */
export const level23EasyQuestions: Question[] = [
  // 第1题：图形规律（拖拽题）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '重轨巨神的铁轨上出现了图形规律：△○□△○□△○，下一个图形是什么？把正确的图形拖到规律序列的末尾。',
    instruction: '观察图形规律，找出重复模式，把下一个图形拖到目标区域。',
    items: [
      { id: 'triangle', name: '△（三角形）' },
      { id: 'circle', name: '○（圆形）' },
      { id: 'square', name: '□（正方形）' },
      { id: 'diamond', name: '◇（菱形）' },
    ],
    targets: [
      { id: 'next', name: '下一个图形', accepts: ['square'], position: { x: 200, y: 150 }, size: { width: 150, height: 100 } },
    ],
    explanation: '规律是"△○□"三个图形为一组重复出现。第1、4、7个是△，第2、5、8个是○，第3、6个是□，所以第9个应该是□。',
    hint: '三个图形为一组重复，想想下一组第三个是什么',
  },

  // 第2题：颜色规律（填空题）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '重轨巨神的信号灯出现颜色规律：红、黄、蓝、绿、红、黄、蓝、绿、___ 下一个颜色是什么？',
    answer: '红',
    explanation: '规律是"红黄蓝绿"四个颜色为一组重复出现。第1、5个是红，第2、6个是黄，第3、7个是蓝，第4、8个是绿，所以第9个应该是红。',
    hint: '四个颜色为一组，第9个是新一组的第一个',
  },

  // 第3题：数字等差规律（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '重轨巨神的车厢编号出现规律：3, 6, 9, 12, ___ 下一个编号是多少？',
    options: [
      { id: 'a', text: '14' },
      { id: 'b', text: '15' },
      { id: 'c', text: '16' },
      { id: 'd', text: '18' },
    ],
    correctAnswer: 'b',
    explanation: '规律是每次加3：3+3=6, 6+3=9, 9+3=12, 12+3=15。所以下一个编号是15。',
    hint: '每个数比前一个数多3',
  },

  // 第4题：递减规律（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '重轨巨神的速度记录出现规律：50, 45, 40, 35, ___ 下一个速度是多少？',
    options: [
      { id: 'a', text: '25' },
      { id: 'b', text: '28' },
      { id: 'c', text: '30' },
      { id: 'd', text: '32' },
    ],
    correctAnswer: 'c',
    explanation: '规律是每次减5：50-5=45, 45-5=40, 40-5=35, 35-5=30。所以下一个速度是30。',
    hint: '每个数比前一个数少5',
  },

  // 第5题：百数表规律（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '在百数表中，同一行的相邻两个数有什么关系？',
    options: [
      { id: 'a', text: '相差1' },
      { id: 'b', text: '相差5' },
      { id: 'c', text: '相差10' },
      { id: 'd', text: '相差100' },
    ],
    correctAnswer: 'a',
    explanation: '在百数表中，同一行从左到右，每个数比前一个数大1。同一列从上到下，每个数比上面那个数大10。',
    hint: '想想百数表，1、2、3、4...相邻的数相差几',
  },
];

/**
 * 关卡 23 挑战难度题目：重轨巨神战炮
 * 主题：七、找规律（全单元）
 * 场景：失控铁轨战场，重轨巨神在铁轨上失控狂奔
 * 难度定位：综合应用（复合图形规律、复合数字规律、平方规律、规律验证、找不同规律）
 * 角色：重轨巨神（Blastrain）- EMD E型内燃机车 - 黑色 - 利爪暴击、巨量重炮
 */
export const level23MediumQuestions: Question[] = [
  // 第1题：复合图形规律（拖拽题）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '重轨巨神的铁轨信号出现复合规律：△△○△△○△△，下一个是什么图形组合？把正确的图形组合拖到规律序列的末尾。',
    instruction: '观察图形规律，找出重复模式，把下一个图形组合拖到目标区域。',
    items: [
      { id: 'two-triangle', name: '△△（两个三角形）' },
      { id: 'two-circle', name: '○○（两个圆形）' },
      { id: 'two-square', name: '□□（两个正方形）' },
      { id: 'one-circle', name: '○（单个圆形）' },
    ],
    targets: [
      { id: 'next', name: '下一个图形组合', accepts: ['one-circle'], position: { x: 200, y: 150 }, size: { width: 150, height: 100 } },
    ],
    explanation: '规律是"△△○"三个图形为一组重复出现。第1-2、4-5、7-8个是△△，第3、6个是○，所以第9个应该是○。',
    hint: '"△△○"三个图形为一组重复，想想下一个是什么',
  },

  // 第2题：复合数字规律（填空题）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '重轨巨神的车厢负载出现规律：1, 2, 4, 7, 11, ___ 相邻两数的差分别是1, 2, 3, 4, 5。下一个负载是多少？',
    answer: '16',
    explanation: '规律是相邻两数的差依次加1：2-1=1, 4-2=2, 7-4=3, 11-7=4，所以下一个差是5，11+5=16。',
    hint: '先算出相邻两数的差，看看差有什么规律',
  },

  // 第3题：平方规律（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '重轨巨神的能量方块出现规律：1个, 4个, 9个, 16个, ___ 下一个是多少个？',
    options: [
      { id: 'a', text: '20个' },
      { id: 'b', text: '25个' },
      { id: 'c', text: '24个' },
      { id: 'd', text: '30个' },
    ],
    correctAnswer: 'b',
    explanation: '规律是平方数：1×1=1, 2×2=4, 3×3=9, 4×4=16, 5×5=25。所以下一个是25个。',
    hint: '1、2、3、4、5的平方分别是多少',
  },

  // 第4题：规律验证（多选题）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '下面哪些规律是正确的？请选出所有正确的。',
    options: [
      { id: 'a', text: '△○□△○□...下一个是△' },
      { id: 'b', text: '3, 6, 9, 12...下一个是15' },
      { id: 'c', text: '50, 45, 40, 35...下一个是28' },
      { id: 'd', text: '红、黄、蓝、绿、红、黄...下一个是蓝' },
    ],
    correctAnswers: ['a', 'b', 'd'],
    explanation: 'A: △○□三图形重复，第7个是△ ✅；B: 每次+3，12+3=15 ✅；C: 每次-5，35-5=30，不是28 ❌；D: 红黄蓝绿四颜色重复，第7个是蓝 ✅',
    hint: '分别验证每个规律是否正确',
  },

  // 第5题：找不同规律（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个规律和其他三个不同类型？',
    options: [
      { id: 'a', text: '3, 6, 9, 12（每次+3的等差规律）' },
      { id: 'b', text: '△○□△○□（图形重复规律）' },
      { id: 'c', text: '红、黄、蓝、绿（颜色重复规律）' },
      { id: 'd', text: '1, 4, 9, 16（平方规律）' },
    ],
    correctAnswer: 'a',
    explanation: 'B、C、D都是重复规律（图形重复、颜色重复、平方数重复），只有A是等差规律（每次加固定数值）。所以A的类型不同。',
    hint: '看看哪个规律是"每次加固定数值"而不是"重复出现"',
  },
];

/**
 * 关卡 23 高手难度题目：重轨巨神终极炮
 * 主题：七、找规律（全单元）
 * 场景：规律驯服成功，重轨巨神被规律力量折服成为伙伴
 * 难度定位：拓展挑战（多规律组合、规律推理、规律对战、规律设计验证、最佳规律设计）
 * 角色：重轨巨神（Blastrain）- EMD E型内燃机车 - 黑色 - 利爪暴击、巨量重炮
 */
export const level23HardQuestions: Question[] = [
  // 第1题：多规律组合（拖拽题）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '重轨巨神的铁轨控制台有三个规律：图形规律：△○□△○□△○□，颜色规律：红、黄、蓝、红、黄、蓝、红、黄、蓝，数字规律：3, 6, 9, 12, 15, 18, 21, 24, 27。把下一个组合拖到控制台目标区域。',
    instruction: '观察三个规律，找出下一个组合，拖到目标区域。',
    items: [
      { id: 'square-blue-30', name: '□蓝30' },
      { id: 'triangle-red-30', name: '△红30' },
      { id: 'circle-yellow-27', name: '○黄27' },
      { id: 'square-green-27', name: '□绿27' },
    ],
    targets: [
      { id: 'next', name: '下一个组合', accepts: ['square-blue-30'], position: { x: 200, y: 150 }, size: { width: 150, height: 100 } },
    ],
    explanation: '图形规律第10个是□（△○□重复，第10个是第4组第3个=□），颜色规律第10个是蓝（红黄蓝重复，第10个是第4组第3个=蓝），数字规律第10个是30（每次+3，27+3=30）。所以下一个组合是□蓝30。',
    hint: '分别找出三个规律的下一个值，再组合起来',
  },

  // 第2题：规律推理（填空题）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '重轨巨神的能量核心规律：第1层有2个能量块，第2层有4个，第3层有8个，第4层有16个，第5层有多少个？',
    answer: '32',
    explanation: '规律是每次乘2：2×2=4, 4×2=8, 8×2=16, 16×2=32。所以第5层有32个能量块。',
    hint: '每个层的能量块是前一层乘2',
  },

  // 第3题：规律对战（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '重轨巨神的攻击节奏规律：第1回合攻击力100，第2回合120，第3回合140，第4回合160。小俊团队的防御规律：第1回合防御力50，第2回合70，第3回合90，第4回合110。第5回合谁更强？',
    options: [
      { id: 'a', text: '重轨巨神更强（攻击力180，防御力130，攻击>防御）' },
      { id: 'b', text: '小俊团队更强（防御力130，攻击力180）' },
      { id: 'c', text: '一样强' },
      { id: 'd', text: '无法判断' },
    ],
    correctAnswer: 'a',
    explanation: '攻击规律每次+20：100→120→140→160→180；防御规律每次+20：50→70→90→110→130。第5回合：攻击力180，防御力130，180>130，所以重轨巨神的攻击更强。',
    hint: '分别算出第5回合的攻击力和180和防御力130，再比较',
  },

  // 第4题：规律设计验证（多选题）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '小俊团队设计了规律陷阱来驯服重轨巨神。下面哪些设计是正确的规律陷阱？',
    options: [
      { id: 'a', text: '图形陷阱：△○□△○□...重轨巨神会被困在第9个位置' },
      { id: 'b', text: '数字陷阱：3, 6, 9, 12...重轨巨神会在第8个位置停下' },
      { id: 'c', text: '颜色陷阱：红、黄、蓝、绿...重轨巨神会在第5个位置逃脱' },
      { id: 'd', text: '速度陷阱：50, 45, 40, 35...重轨巨神会在第6个位置停止' },
    ],
    correctAnswers: ['a', 'b', 'd'],
    explanation: 'A: △○□重复，第9个是□，陷阱在□位置有效 ✅；B: 每次+3，第8个是24，陷阱在24位置有效 ✅；C: 红黄蓝绿重复，第5个是红，规律正确但陷阱位置设计错误 ❌；D: 每次-5，第6个是25，陷阱在25位置有效 ✅',
    hint: '验证每个规律陷阱的设计是否正确',
  },

  // 第5题：最佳规律设计（选择题）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '驯服重轨巨神后，他需要一个新的规律来稳定运行。下面哪个规律是最好的设计？',
    options: [
      { id: 'a', text: '10, 20, 30, 40（每次+10的等差规律，简单稳定）' },
      { id: 'b', text: '1, 2, 4, 8（每次乘2的倍增规律，增长太快不稳定）' },
      { id: 'c', text: '100, 90, 80, 70（每次-10的递减规律，能量减少不适合）' },
      { id: 'd', text: '1, 3, 2, 4, 3（没有明显规律，不适合稳定运行）' },
    ],
    correctAnswer: 'a',
    explanation: '好的规律应该清晰、有特点、稳定可控。选项A是每次+10的等差规律，简单稳定，最适合重轨巨神的稳定运行！选项B增长太快，选项C能量减少，选项D没有明显规律，都不适合。',
    hint: '好的规律要清晰、稳定、可控',
  },
];

/**
 * 按难度分组的题目
 */
export const level23QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level23EasyQuestions,
  [DifficultyLevel.MEDIUM]: level23MediumQuestions,
  [DifficultyLevel.HARD]: level23HardQuestions,
};

/**
 * 关卡 23 新手模式武器零件：重轨战铠（5个零件）
 */
export const level23EasyWeaponParts: WeaponPart[] = [
  { id: 'easy-train-core', name: '重轨探测核心', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'easy-train-navigator', name: '重轨导航仪', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'easy-train-claw-head', name: '重轨利爪头', shapeType: 'triangle', iconImage: '/assets/weapons/光能护盾.png' },
  { id: 'easy-train-traverse-pipe', name: '重轨穿梭管', shapeType: 'square', iconImage: '/assets/weapons/光能外壳.png' },
  { id: 'easy-train-armor-complete', name: '重轨战铠完成', shapeType: 'composite', iconImage: '/assets/weapons/easy-weapon.png' },
];

/**
 * 关卡 23 挑战模式武器零件：重轨巨神战炮（4个零件）
 */
export const level23MediumWeaponParts: WeaponPart[] = [
  { id: 'medium失控-core', name: '失控探测核心', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'medium-battlefield-locator', name: '战场定位器', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'medium-train-armor-plate', name: '重轨装甲板', shapeType: 'square', iconImage: '/assets/weapons/光能护盾.png' },
  { id: 'medium-train-destroyer-cannon-complete', name: '重轨破坏炮管', shapeType: 'composite', iconImage: '/assets/weapons/medium-weapon.png' },
];

/**
 * 关卡 23 高手模式武器零件：重轨巨神终极炮（4个零件）
 */
export const level23HardWeaponParts: WeaponPart[] = [
  { id: 'hard-partner-command-core', name: '伙伴指挥核心', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'hard-courage-navigator', name: '勇气导航仪', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'hard-train-claw-system', name: '重轨利爪系统', shapeType: 'square', iconImage: '/assets/weapons/光能外壳.png' },
  { id: 'hard-train-ultimate-cannon-complete', name: '重轨巨神终极炮完成', shapeType: 'composite', iconImage: '/assets/weapons/hard-weapon.png' },
];

/**
 * 按难度分组的武器零件
 */
export const level23WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level23EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level23MediumWeaponParts,
  [DifficultyLevel.HARD]: level23HardWeaponParts,
};

/**
 * 关卡 23 故事气泡配置
 */

/**
 * 关卡 23 完整配置
 */
export const level23EnhancedData = {
  levelId: 'level-23',
  characterName: '重轨巨神',
  characterEnglishName: 'Blastrain',
  theme: '七、找规律（全单元）',
  vehicleForm: 'EMD E型内燃机车',
  weapons: ['重轨利爪', '头盔无人机', '爆破枪', '肩部破坏炮'],
  ultimateSkills: ['利爪暴击', '巨量重炮'],
  themeColor: '黑色',
  difficulty: 3,
  rarity: '炫彩边 + 铁轨延伸动画',
  questionsByDifficulty: level23QuestionsByDifficulty,
  weaponPartsByDifficulty: level23WeaponPartsByDifficulty,
};
