import { getAssetPath } from '@/config/paths.config';
import type { Question, QuestionType, WeaponPart } from '@/types'
import { DifficultyLevel } from '@/types'

/**
 * 关卡 H1 新手难度题目：炫蓝电光炮
 * 主题：数位理解（摆一摆，想一想）
 * 角色：超炫电光王（Ultimate Blue Cop）- 炫蓝闪电终极形态
 * 剧情：第一季第1-10集，小俊初识炫蓝闪电，结识3-7位伙伴
 * 隐喻：圆片=伙伴力量，数位表=合体阵型
 */

export const levelH1EasyQuestions: Question[] = [
  {
    type: 'drag' as QuestionType.DRAG,
    question: '炫蓝闪电说："小俊，我们来学习数位表！十位上的圆片代表几十，个位上的圆片代表几个。你有3个圆片，试着把它们拖到十位和个位，看看能摆出什么数？"',
    instruction: '把3个圆片拖到【十位】或【个位】，每种摆法表示一个数。例如：3个圆片都放在十位，表示30。',
    items: [
      { id: 'piece-1', name: '圆片1', shape: 'circle' as const },
      { id: 'piece-2', name: '圆片2', shape: 'circle' as const },
      { id: 'piece-3', name: '圆片3', shape: 'circle' as const },
    ],
    targets: [
      { id: 'tens', name: '十位（代表几十）', accepts: ['piece-1', 'piece-2', 'piece-3'], position: { x: 100, y: 150 }, size: { width: 180, height: 140 } },
      { id: 'ones', name: '个位（代表几个）', accepts: ['piece-1', 'piece-2', 'piece-3'], position: { x: 320, y: 150 }, size: { width: 180, height: 140 } },
    ],
    explanation: '炫蓝闪电说："太棒了！3个圆片可以摆出4个数：30（3个在十位）、21（2个在十位+1个在个位）、12（1个在十位+2个在个位）、3（3个在个位）！规律：圆片数+1=能摆出的数的个数！"',
    hint: '试试把圆片都放在十位，表示几？都放在个位，表示几？',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '小俊团队认识了暗影特工！现在有4位伙伴了（炫蓝闪电+巨力风暴+急救卫士+暗影特工）。用4个圆片摆出最大的阵型是几？',
    options: [
      { id: 'a', text: '40' },
      { id: 'b', text: '31' },
      { id: 'c', text: '22' },
      { id: 'd', text: '13' },
    ],
    correctAnswer: 'a',
    explanation: '把所有伙伴的力量集中在十位阵型，就是40！这是最强阵型！炫蓝闪电："暗影特工的旋转飞镖加入十位阵型，力量最大化！"',
    hint: '想让阵型最大，应该把所有伙伴力量放在十位',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '铁臂爵士加入小俊团队！现在有5位伙伴了（炫蓝闪电+巨力风暴+急救卫士+暗影特工+铁臂爵士）。用5个圆片摆出最小的阵型是几？',
    options: [
      { id: 'a', text: '50' },
      { id: 'b', text: '41' },
      { id: 'c', text: '14' },
      { id: 'd', text: '5' },
    ],
    correctAnswer: 'd',
    explanation: '把所有伙伴的力量集中在个位阵型，就是5！这是最灵活阵型！铁臂爵士："我的铁臂巨钻可以灵活应对任何挑战！"',
    hint: '想让阵型最小，应该把所有伙伴力量放在个位',
  },
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '裂变骑士加入小俊团队！现在有6位伙伴。炫蓝闪电发现了规律："圆片数加1等于能摆出的阵型数！"用6个圆片能摆出{{___}}个不同的阵型。',
    answer: ['7'],
    explanation: '裂变骑士："圆片数+1=阵型数！6+1=7！伙伴力量规律发现了！6个伙伴可以摆出7种阵型：60、51、42、33、24、15、6！"',
    hint: '圆片数加1就是能摆出的阵型数',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '喷射加仑汇合！现在有7位伙伴了。用7个圆片摆出的最小阵型是几？',
    options: [
      { id: 'a', text: '70' },
      { id: 'b', text: '61' },
      { id: 'c', text: '7' },
      { id: 'd', text: '16' },
    ],
    correctAnswer: 'c',
    explanation: '喷射加仑："我的喷射神弓可以灵活应对！7个伙伴的力量集中在个位阵型，就是7！"',
    hint: '想让阵型最小，把所有力量放在个位',
  },
]

export const levelH1MediumQuestions: Question[] = [
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '炫蓝闪电收到一封神秘信件："有一个两位数，十位和个位上的数字之和是7。用7个圆片能摆出这个数吗？"炫蓝闪电分析后说："这个数可能是哪些？"',
    options: [
      { id: 'a', text: '只能是16、25、34、43、52、61、70中的一个' },
      { id: 'b', text: '可以是16、25、34、43、52、61中的任意几个' },
      { id: 'c', text: '不能摆出，因为圆片数不够' },
      { id: 'd', text: '需要更多圆片才能确定' },
    ],
    correctAnswer: 'a',
    explanation: '炫蓝闪电："十位+个位=7的两位数有：70、61、52、43、34、25、16，共7个。但7个圆片只能摆出其中一个数！每个具体的摆法只对应一个数！"',
    hint: '7个圆片只能摆出一种摆法，对应一个具体的数',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '玄铁战神的考验！他问："要摆出81这个阵型，至少需要几个伙伴的力量？"',
    options: [
      { id: 'a', text: '8个伙伴' },
      { id: 'b', text: '9个伙伴' },
      { id: 'c', text: '1个伙伴' },
      { id: 'd', text: '81个伙伴' },
    ],
    correctAnswer: 'b',
    explanation: '炫蓝闪电警告："81的十位阵型需要8个伙伴，个位阵型需要1个伙伴，总共需要8+1=9个伙伴力量！玄铁战神的考验通过了！"',
    hint: '十位数字+个位数字=需要的伙伴数',
  },
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '炫蓝闪电说："我们已经有足够的伙伴力量了！用9个圆片，可以摆出哪些阵型？选出所有正确的！"',
    options: [
      { id: 'a', text: '90阵型' },
      { id: 'b', text: '81阵型' },
      { id: 'c', text: '72阵型' },
      { id: 'd', text: '54阵型' },
    ],
    correctAnswers: ['a', 'b', 'c', 'd'],
    explanation: '炫蓝闪电："9个伙伴力量可以摆出10种阵型！90、81、72、63、54、45、36、27、18、9！这些都是正确的！"',
    hint: '十位+个位=9的阵型都可以摆出来',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '炫蓝闪电对比阵型："用5个圆片和用7个圆片，能摆出的阵型数量相差几个？"',
    options: [
      { id: 'a', text: '2种阵型' },
      { id: 'b', text: '5种阵型' },
      { id: 'c', text: '7种阵型' },
      { id: 'd', text: '12种阵型' },
    ],
    correctAnswer: 'a',
    explanation: '炫蓝闪电："5个圆片摆出6种阵型（5+1=6），7个圆片摆出8种阵型（7+1=8）！相差8-6=2种阵型！伙伴力量的差距就是2种阵型！"',
    hint: '先算各自能摆出几种阵型，再相减',
  },
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '玄铁战神的考验升级！"一个阵型的十位比个位多3个伙伴力量，总共用了9个伙伴！这个阵型是{{___}}。"',
    answer: '63',
    explanation: '炫蓝闪电："设个位有x个伙伴，十位有x+3个伙伴。x+(x+3)=9，x=3。个位3个伙伴，十位6个伙伴，阵型是63！考验通过！"',
    hint: '设个位为x，十位为x+3，解方程',
  },
]

export const levelH1HardQuestions: Question[] = [
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '【禁断之力考验！限时30秒！】第一季第26集大结局！炫蓝闪电觉醒禁断之力！他大喊："禁断之力！全炫卡合体！用10个圆片——代表我们全部伙伴的力量——验证数位终极规律！能摆出{{___}}种阵型！"',
    answer: '11',
    explanation: '超炫电光王："禁断之力觉醒！圆片数+1=阵型数！10+1=11！终极爆裂验证成功！10个伙伴可以摆出11种阵型：90、81、72、63、54、45、36、27、18、9、10（超炫合体终极阵型）！"',
    hint: '圆片数+1=阵型数，这是马奇纳智脑的终极规律！',
  },
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '超炫电光王说："我融合了所有炫卡斗士的技能！下面哪些阵型可以用9个伙伴力量摆出来？哪些需要10个伙伴力量？判断正确！"',
    options: [
      { id: 'a', text: '81阵型需要9个伙伴力量' },
      { id: 'b', text: '91阵型需要10个伙伴力量' },
      { id: 'c', text: '45阵型需要9个伙伴力量' },
      { id: 'd', text: '73阵型需要10个伙伴力量' },
    ],
    correctAnswers: ['a', 'b', 'c', 'd'],
    explanation: '超炫电光王："81=8+1=9个伙伴 ✅；91=9+1=10个伙伴 ✅；45=4+5=9个伙伴 ✅；73=7+3=10个伙伴 ✅！终极阵型判断成功！"',
    hint: '十位数字+个位数字=需要的伙伴力量数',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '超炫电光王展示终极能量！"我的超炫加速能量是一个两位数，十位和个位相加等于12，十位比个位大4！猜出这个能量数！"',
    options: [
      { id: 'a', text: '84' },
      { id: 'b', text: '93' },
      { id: 'c', text: '75' },
      { id: 'd', text: '66' },
    ],
    correctAnswer: 'a',
    explanation: '超炫电光王："设个位为x，十位为x+4。x+(x+4)=12，x=4。个位4，十位8，超炫加速能量是84！"',
    hint: '设个位为x，十位为x+4，解方程',
  },
  {
    type: 'drag' as QuestionType.DRAG,
    question: '超炫电光王说："把我们伙伴的力量分成两组！一组需要8个伙伴力量，一组需要9个伙伴力量！把阵型拖到正确的区域！"',
    instruction: '把每个阵型拖到对应的伙伴力量区域。',
    items: [
      { id: 'num-35', name: '35阵型' },
      { id: 'num-44', name: '44阵型' },
      { id: 'num-27', name: '27阵型' },
      { id: 'num-18', name: '18阵型' },
    ],
    targets: [
      { id: 'circle-8', name: '8个伙伴力量', accepts: ['num-35', 'num-44'], position: { x: 100, y: 150 }, size: { width: 150, height: 80 } },
      { id: 'circle-9', name: '9个伙伴力量', accepts: ['num-27', 'num-18'], position: { x: 280, y: 150 }, size: { width: 150, height: 80 } },
    ],
    explanation: '超炫电光王："35=3+5=8个伙伴 ✅；44=4+4=8个伙伴 ✅；27=2+7=9个伙伴 ✅；18=1+8=9个伙伴 ✅！阵型分类成功！"',
    hint: '十位数字+个位数字=伙伴力量数',
  },
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '超炫电光王终极爆裂！"我的终极爆裂能量是一个两位数，十位和个位相加等于11，十位比个位大3！这是守护数位世界的终极力量！这个能量数是{{___}}。"',
    answer: ['74'],
    explanation: '超炫电光王："终极爆裂验证成功！设个位为x，十位为x+3。x+(x+3)=11，x=4。个位4，十位7，终极爆裂能量是74！从今以后，我是数位世界的终极守护者！让我们一起守护地球和马奇纳的和平！终极爆裂出击！"',
    hint: '设个位为x，十位为x+3，解方程',
  },
]

export const levelH1QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: levelH1EasyQuestions,
  [DifficultyLevel.MEDIUM]: levelH1MediumQuestions,
  [DifficultyLevel.HARD]: levelH1HardQuestions,
}

export const levelH1EasyWeaponParts: WeaponPart[] = [
  { id: 'easy-blue-core', name: '炫蓝探测核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'easy-blue-nav', name: '炫蓝导航仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'easy-blue-head', name: '炫蓝电光头', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'easy-blue-pipe', name: '炫蓝穿梭管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'easy-blue-complete', name: '炫蓝电光炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/easy-weapon.png') },
]

export const levelH1MediumWeaponParts: WeaponPart[] = [
  { id: 'med-blue-core', name: '炫蓝探测核心（升级）', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'med-blue-loc', name: '炫蓝定位器', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'med-blue-armor', name: '炫蓝装甲板', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'med-blue-meter', name: '炫蓝计量管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'med-blue-cannon', name: '炫蓝电光王战炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/medium-weapon.png') },
]

export const levelH1HardWeaponParts: WeaponPart[] = [
  { id: 'hard-ult-partner', name: '伙伴终极核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'hard-ult-fair', name: '炫蓝公平仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'hard-ult-sys', name: '终极爆裂系统', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'hard-ult-armor', name: '炫蓝装甲管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'hard-ult-ult', name: '超炫电光王终极炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/hard-weapon.png') },
]

export const levelH1WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: levelH1EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: levelH1MediumWeaponParts,
  [DifficultyLevel.HARD]: levelH1HardWeaponParts,
}


export const levelH1EnhancedData = {
  levelId: 'level-h1',
  characterName: '超炫电光王',
  characterFullName: '超炫电光王（炫蓝闪电终极形态）',
  theme: '数位理解（摆一摆，想一想）',
  storyline: '第一季完整剧情线：小俊初识炫蓝闪电 → 结识伙伴 → 发现规律 → 第26集禁断之力觉醒 → 五合体超炫电光王',
  vehicleForm: '兰博基尼盖拉多LP560-4警车',
  weapons: ['炫蓝重拳', '手腕爆破枪', '终极电光武器'],
  ultimateSkills: ['超炫加速', '超级能量护盾', '闪电连续暴击', '终极爆裂'],
  themeColor: '蓝',
  difficulty: 5,
  rarity: '炫彩动态边',
  unlockCondition: '单元1-3全部三星 + 收集100星星',
  metaphor: {
    circles: '伙伴力量（每个圆片代表一位炫卡斗士伙伴）',
    placeValueTable: '合体阵型（十位+个位=伙伴力量分布）',
    rule: '圆片数+1=阵型数（马奇纳智脑的数位规律）',
  },
  questionsByDifficulty: levelH1QuestionsByDifficulty,
  weaponPartsByDifficulty: levelH1WeaponPartsByDifficulty,
}
