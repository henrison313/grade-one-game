import { getAssetPath } from '@/config/paths.config';
import type { Question, QuestionType, WeaponPart } from '@/types'
import { DifficultyLevel } from '@/types'

/**
 * 关卡 H2 新手难度题目：炫蓝雷霆战炮
 * 主题：跨单元综合（期末综合2 - 应用提升）
 * 角色：炫蓝雷霆王（Blue Cop Trinity）- 炫蓝闪电S三合体终极形态
 * 剧情：第二季第1-15集，炫蓝闪电升级为炫蓝闪电S，双单元融合考验
 * 隐喻：三合体=三单元融合，时空裂缝=跨单元挑战
 */

export const levelH2EasyQuestions: Question[] = [
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '炫蓝闪电说："我已经升级为炫蓝闪电S了！新的炫蓝重拳S和炫蓝战甲更强了！现在开始跨单元考验！用七巧板知识解决计算问题！用七巧板拼出数字\'8\'的形状后，计算88-59=？"',
    options: [
      { id: 'a', text: '29' },
      { id: 'b', text: '39' },
      { id: 'c', text: '19' },
      { id: 'd', text: '49' },
    ],
    correctAnswer: 'a',
    explanation: '炫蓝闪电S："88-59=29！八十八减五十九等于二十九！先算8-9不够减，从十位借1，变成18-9=9，十位8-1-5=2，所以是29！图形和计算融合考验通过！"',
    hint: '七巧板拼出8后，用退位减法计算88-59',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '炫蓝闪电S说："用人民币知识和退位减法解决购物问题！你有100元，买文具盒35元、铅笔12元、橡皮8元。买完后还剩多少钱？"',
    options: [
      { id: 'a', text: '45元' },
      { id: 'b', text: '55元' },
      { id: 'c', text: '35元' },
      { id: 'd', text: '65元' },
    ],
    correctAnswer: 'a',
    explanation: '炫蓝闪电S："35+12+8=55元，100-55=45元！购物和退位减法融合考验通过！"',
    hint: '先算出3件商品一共多少钱，再用100减去',
  },
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '炫蓝闪电S说："用规律知识和应用题解决！找规律填数：2、5、10、17、26、{{___}}。这个数表示小明有{{___}}元零花钱。',
    answer: ['37', '37'],
    explanation: '炫蓝闪电S："规律是相邻两数的差每次加2：3、5、7、9、11！26+11=37！小明有37元零花钱！规律和应用融合考验通过！"',
    hint: '相邻两数的差有什么规律？3、5、7、9、...',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '炫蓝闪电S说："用数位知识和加减法解决！摆数问题：用7个圆片能摆出的最大阵型是几？"',
    options: [
      { id: 'a', text: '70' },
      { id: 'b', text: '61' },
      { id: 'c', text: '52' },
      { id: 'd', text: '7' },
    ],
    correctAnswer: 'a',
    explanation: '炫蓝闪电S："把7个圆片都放在十位，就是70！数位和加减法融合考验通过！"',
    hint: '想让阵型最大，把所有力量放在十位',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '炫蓝闪电S说："最后一个基础考验！用图形和计算解决：三角形有3条边，正方形有4条边，一共几条边？用这个数减去圆形的边数（圆形没有边），结果是几？"',
    options: [
      { id: 'a', text: '5' },
      { id: 'b', text: '6' },
      { id: 'c', text: '7' },
      { id: 'd', text: '8' },
    ],
    correctAnswer: 'c',
    explanation: '炫蓝闪电S："3+4=7条边！7-0=7！图形和计算融合考验全部通过！炫蓝闪电S升级成功！"',
    hint: '三角形3条边+正方形4条边=几条边？',
  },
]

export const levelH2MediumQuestions: Question[] = [
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '炫蓝雷霆王觉醒！三合体由炫蓝闪电S（兰博基尼警车）+悍马装甲车+警用巴士组成！他说："三位一体！终极的炫卡力量！用三个单元的知识解决！计算：76-28+15=_"',
    answer: '63',
    explanation: '炫蓝雷霆王："76-28=48，48+15=63！三位一体融合考验通过！炫蓝雷霆王力量觉醒！"',
    hint: '先算减法，再算加法',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '炫蓝雷霆王说："三合体考验升级！找规律后用规律解决购物问题！规律：5、10、15、20、25、_。用这个数买25元的书，还剩多少元？"',
    options: [
      { id: 'a', text: '0元' },
      { id: 'b', text: '5元' },
      { id: 'c', text: '10元' },
      { id: 'd', text: '15元' },
    ],
    correctAnswer: 'b',
    explanation: '炫蓝雷霆王："规律是每次加5！下一个数是30！30-25=5元！三单元融合考验通过！"',
    hint: '规律是每次加5',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '炫蓝雷霆王说："三合体考验挑战！用本学期知识设计一道综合题考考我！选出最好的设计！"',
    options: [
      { id: 'a', text: '只考加法：5+3=？ ❌（太简单）' },
      { id: 'b', text: '只考减法：10-5=？ ❌（太简单）' },
      { id: 'c', text: '综合应用：小明有50元，买25元的书和12元的笔，还剩多少元？ ✅（综合三个单元）' },
      { id: 'd', text: '只考图形：正方形有几条边？ ❌（太简单）' },
    ],
    correctAnswer: 'c',
    explanation: '炫蓝雷霆王："选项c综合了人民币、加法、减法三个单元！这是最好的设计！三合体考验通过！"',
    hint: '好的综合题应该包含多个单元',
  },
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '炫蓝雷霆王说："三合体考验升级！数位+规律融合！用圆片摆数规律解决：下面哪些数可以用8个圆片摆出来？"',
    options: [
      { id: 'a', text: '80阵型 ✅' },
      { id: 'b', text: '71阵型 ✅' },
      { id: 'c', text: '62阵型 ✅' },
      { id: 'd', text: '53阵型 ✅' },
    ],
    correctAnswers: ['a', 'b', 'c', 'd'],
    explanation: '炫蓝雷霆王："80=8+0=8个圆片 ✅；71=7+1=8个圆片 ✅；62=6+2=8个圆片 ✅；53=5+3=8个圆片 ✅！数位+规律融合考验通过！"',
    hint: '十位数字+个位数字=8的阵型都可以',
  },
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '炫蓝雷霆王说："三合体终极考验！全单元融合！找规律：1、4、9、16、_（平方数列）。小明有50元，用这个数买书，还剩多少元？"',
    answer: '25',
    explanation: '炫蓝雷霆王："平方数列：1²=1，2²=4，3²=9，4²=16，5²=25！50-25=25元！全单元融合考验通过！炫蓝雷霆王力量全开！"',
    hint: '平方数列：1×1=1，2×2=4，3×3=9...',
  },
]

export const levelH2HardQuestions: Question[] = [
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '【第二季第26集大结局】重装赤魂王的阴谋！他说："我是星球守卫的重装赤魂王！炫蓝闪电曾经是我的下属！用终极跨单元知识解决：找规律：1、1、2、3、5、8、_（斐波那契数列）。这个数减去13后是_"',
    answer: '0',
    explanation: '炫蓝雷霆王："斐波那契数列：1+1=2，1+2=3，2+3=5，3+5=8，5+8=13！13-13=0！重装赤魂王阴谋破解第一步！"',
    hint: '斐波那契数列：前两个数相加等于后一个数',
  },
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '炫蓝雷霆王说："粉碎重装赤魂王的阴谋！炫蓝雷霆王与重轨巨神合力保护蓝星！用跨单元综合知识解决！下面哪些计算正确？"',
    options: [
      { id: 'a', text: '76-28=48 ✅' },
      { id: 'b', text: '35+12+8=55 ✅' },
      { id: 'c', text: '88-59=29 ✅' },
      { id: 'd', text: '100-55=45 ✅' },
    ],
    correctAnswers: ['a', 'b', 'c', 'd'],
    explanation: '炫蓝雷霆王："76-28=48 ✅；35+12+8=55 ✅；88-59=29 ✅；100-55=45 ✅！全部正确！重装赤魂王阴谋破解第二步！"',
    hint: '验证每个计算是否正确',
  },
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '炫蓝雷霆王说："第25集回忆：小俊夺回炫卡召唤器，释放第一季炫卡斗士增援！炫蓝闪电、暗影特工、裂变骑士、铁臂爵士、巨力风暴！用终极综合解决：设计一道跨单元题，包含图形、计算、规律三个单元！选出最好的设计！"',
    options: [
      { id: 'a', text: '只考图形：三角形有几条边？ ❌' },
      { id: 'b', text: '只考计算：5+3=？ ❌' },
      { id: 'c', text: '综合设计：三角形3条边+正方形4条边=7条边，规律是每次加7，下一个数是14 ✅' },
      { id: 'd', text: '只考规律：1、2、3、4、_ ❌' },
    ],
    correctAnswer: 'c',
    explanation: '炫蓝雷霆王："选项c综合了图形（三角形、正方形）、计算（3+4=7）、规律（每次加7）三个单元！这是最好的跨单元设计！第一季伙伴增援成功！"',
    hint: '最好的跨单元设计应该包含图形、计算、规律',
  },
  {
    type: 'drag' as QuestionType.DRAG,
    question: '炫蓝雷霆王说："终极能量对决！把计算结果拖到正确的区域！粉碎重装赤魂王的阴谋！"',
    instruction: '把每个计算结果拖到对应的数值区域。',
    items: [
      { id: 'calc-29', name: '88-59的结果' },
      { id: 'calc-45', name: '100-55的结果' },
      { id: 'calc-63', name: '76-28+15的结果' },
    ],
    targets: [
      { id: 'area-29', name: '29区域', accepts: ['calc-29'], position: { x: 100, y: 150 }, size: { width: 100, height: 80 } },
      { id: 'area-45', name: '45区域', accepts: ['calc-45'], position: { x: 220, y: 150 }, size: { width: 100, height: 80 } },
      { id: 'area-63', name: '63区域', accepts: ['calc-63'], position: { x: 340, y: 150 }, size: { width: 100, height: 80 } },
    ],
    explanation: '炫蓝雷霆王："88-59=29 ✅；100-55=45 ✅；76-28+15=63 ✅！终极能量对决胜利！"',
    hint: '先计算出结果，再拖到正确区域',
  },
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '炫蓝雷霆王终极爆裂！"粉碎重装赤魂王的阴谋！炫蓝雷霆王与重轨巨神合力保护蓝星！终极综合考验：找规律2、5、10、17、26、37、_（每次加的数递增2）。这个终极能量是_！"',
    answer: '50',
    explanation: '炫蓝雷霆王："规律：2+3=5，5+5=10，10+7=17，17+9=26，26+11=37，37+13=50！炫蓝雷霆王终极能量是50！粉碎重装赤魂王的阴谋！从今以后，我们守护蓝星和马奇纳的和平！炫蓝雷霆破出击！"',
    hint: '每次加的数递增2：3、5、7、9、11、13',
  },
]

export const levelH2QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: levelH2EasyQuestions,
  [DifficultyLevel.MEDIUM]: levelH2MediumQuestions,
  [DifficultyLevel.HARD]: levelH2HardQuestions,
}

export const levelH2EasyWeaponParts: WeaponPart[] = [
  { id: 'easy-trinity-core', name: '炫蓝雷霆核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'easy-trinity-nav', name: '炫蓝雷霆导航仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'easy-trinity-head', name: '炫蓝雷霆头部', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'easy-trinity-pipe', name: '炫蓝雷霆穿梭管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'easy-trinity-complete', name: '炫蓝雷霆战炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/easy-weapon.png') },
]

export const levelH2MediumWeaponParts: WeaponPart[] = [
  { id: 'med-trinity-core', name: '炫蓝雷霆探测核心（升级）', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'med-trinity-loc', name: '炫蓝雷霆定位器', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'med-trinity-armor', name: '炫蓝雷霆装甲板', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'med-trinity-meter', name: '炫蓝雷霆计量管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'med-trinity-cannon', name: '炫蓝雷霆王战炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/medium-weapon.png') },
]

export const levelH2HardWeaponParts: WeaponPart[] = [
  { id: 'hard-trinity-partner', name: '伙伴雷霆核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'hard-trinity-fair', name: '炫蓝雷霆公平仪', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'hard-trinity-sys', name: '炫蓝雷霆爆裂系统', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'hard-trinity-armor', name: '炫蓝雷霆装甲管', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'hard-trinity-ult', name: '炫蓝雷霆王终极炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/hard-weapon.png') },
]

export const levelH2WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: levelH2EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: levelH2MediumWeaponParts,
  [DifficultyLevel.HARD]: levelH2HardWeaponParts,
}


export const levelH2EnhancedData = {
  levelId: 'level-h2',
  characterName: '炫蓝雷霆王',
  characterFullName: '炫蓝雷霆王（Blue Cop Trinity）- 炫蓝闪电S三合体终极形态',
  theme: '跨单元综合（期末综合2 - 应用提升）',
  storyline: '第二季完整剧情线：炫蓝闪电升级为S → 三合体觉醒 → 第25集夺回召唤器 → 第26集最终决战粉碎重装赤魂王的阴谋',
  vehicleForms: ['兰博基尼埃文塔多警车（炫蓝闪电S）', '悍马装甲车', '秭一大宇FX116警用巴士'],
  weapons: ['炫蓝重拳S', '炫蓝战甲', '炫蓝雷霆枪', '炫蓝雷霆剑'],
  ultimateSkills: ['炫蓝雷霆破', '炫蓝防护罩', '三位一体合体攻击'],
  themeColor: '蓝+深蓝',
  difficulty: 5,
  rarity: '炫彩动态边',
  unlockCondition: '期末综合1正确率≥90%',
  metaphor: {
    trinity: '三合体=三单元融合（图形+计算+规律）',
    spaceTimeCrack: '时空裂缝=跨单元挑战',
    flameNova: '重装赤魂王=第二季BOSS考验',
  },
  questionsByDifficulty: levelH2QuestionsByDifficulty,
  weaponPartsByDifficulty: levelH2WeaponPartsByDifficulty,
}
