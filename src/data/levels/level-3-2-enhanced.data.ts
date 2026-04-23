import type { Question, WeaponPart } from '@/types'
import { DifficultyLevel, QuestionType } from '@/types'

/**
 * 第九关（3-2 深海天锚 - 100 以内数的认识）海盗船主题武器零件配置
 * 深海天锚：海盗团首领，沉默寡言但重视同伴义气
 * 载具形态：海盗船
 * 武器：深海重炮、船长船锚
 * 绝招：深海爆弹、舷炮齐射、终极黑鲨鱼
 */

/**
 * 新手模式武器零件：炫光炮舰
 */
export const level3_2EasyWeaponParts: WeaponPart[] = [
  { id: 'ship-easy-core', name: '炮舰核心', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'ship-easy-hull', name: '炫光船体', shapeType: 'rectangle', iconImage: '/assets/weapons/光能外壳.png' },
  { id: 'ship-easy-cannon', name: '炫光火炮', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'ship-easy-anchor', name: '船锚装饰', shapeType: 'square', iconImage: '/assets/weapons/光能护盾.png' },
  { id: 'ship-easy-complete', name: '炫光炮舰完成', shapeType: 'composite', iconImage: '/assets/weapons/easy-weapon.png' },
]

/**
 * 挑战模式武器零件：炮舰炮
 */
export const level3_2MediumWeaponParts: WeaponPart[] = [
  { id: 'ship-medium-core', name: '炮舰炮核心', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'ship-medium-hull', name: '炮舰炮身', shapeType: 'rectangle', iconImage: '/assets/weapons/光能外壳.png' },
  { id: 'ship-medium-cannon', name: '重型火炮', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'ship-medium-complete', name: '炮舰炮完成', shapeType: 'composite', iconImage: '/assets/weapons/medium-weapon.png' },
]

/**
 * 高手模式武器零件：雷霆炮舰
 */
export const level3_2HardWeaponParts: WeaponPart[] = [
  { id: 'ship-hard-ring', name: '雷霆能量环', shapeType: 'circle', iconImage: '/assets/weapons/光能核心.png' },
  { id: 'ship-hard-hull', name: '雷霆船体', shapeType: 'rectangle', iconImage: '/assets/weapons/光能外壳.png' },
  { id: 'ship-hard-cannon', name: '雷霆火炮', shapeType: 'triangle', iconImage: '/assets/weapons/光能发射器.png' },
  { id: 'ship-hard-complete', name: '雷霆炮舰完成', shapeType: 'composite', iconImage: '/assets/weapons/hard-weapon.png' },
]

/**
 * 关卡 3-2 新手模式题目：炫光炮舰
 * 主题：100 以内数的认识 - 百数表基础
 * 场景：第 18 集 → 海盗船甲板初次登场 → 找玄铁战神算账 → 用百数表找航线
 * 故事背景：深海天锚是海盗团首领，沉默寡言但重视同伴义气。第 18 集初次登场，
 *           打算找玄铁战神拿回星冠算账，盯上小俊的炫卡召唤器。
 */
export const level3_2EasyQuestions: Question[] = [
  // 第 1 题：百数表认识（第 18 集海盗船甲板登场）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '百数表里一共有多少个数？',
    options: [
      { id: 'a', text: '90 个' },
      { id: 'b', text: '99 个' },
      { id: 'c', text: '100 个' },
      { id: 'd', text: '101 个' },
    ],
    correctAnswer: 'c',
    explanation: '百数表里一共有 100 个数！从 1 到 100。第 18 集，深海天锚在海盗船甲板上初次登场！他是海盗团首领，沉默寡言但重视同伴义气。他需要用百数表找到正确的航线，去找玄铁战神算账！他的载具形态是海盗船！',
    hint: '百数表从 1 开始，到 100 结束',
  },

  // 第 2 题：第二步导航（填空题）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '56 下面的数是{{___}}',
    answer: ['66', '六十六'],
    explanation: '56 下面的数是 66！百数表中，每一列下面的数比上面的数十位多 1，56 + 10 = 66。深海天锚用百数表导航，继续寻找玄铁战神的航线！他的武器是深海重炮和船长船锚！',
    hint: '下面的数比 56 多 10',
  },

  // 第 3 题：深海天锚开始冷静
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '在百数表中，和 78 相邻的数有哪些？',
    options: [
      { id: 'a', text: '77 和 79' },
      { id: 'b', text: '68 和 88' },
      { id: 'c', text: '77、79、68、88' },
      { id: 'd', text: '67 和 89' },
    ],
    correctAnswer: 'c',
    explanation: '和 78 相邻的数有 4 个：左边 77，右边 79，上面 68，下面 88！深海天锚开始冷静下来，用百数表精确计算航线。他的绝招是深海爆弹、舷炮齐射、终极黑鲨鱼！',
    hint: '相邻包括左右和上下四个方向',
  },

  // 第 4 题：航线配对（拖拽题）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '把数字拖到正确的位置上！',
    instruction: '将左侧的数字拖到右侧百数表中的正确位置',
    items: [
      { id: 'item1', name: '23', shape: 'rectangle' },
      { id: 'item2', name: '45', shape: 'rectangle' },
      { id: 'item3', name: '67', shape: 'rectangle' },
    ],
    targets: [
      { id: 'pos23', name: '23 位置', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: 'pos45', name: '45 位置', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: 'pos67', name: '67 位置', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
    ],
    explanation: '航线配对完成！23 在第 3 行第 3 列，45 在第 5 行第 5 列，67 在第 7 行第 7 列！深海天锚的航线越来越清晰！他盯上了小俊的炫卡召唤器！',
    hint: '百数表中十位表示行，个位表示列',
  },

  // 第 5 题：深海天锚认识到错误
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '34 右边的第 3 个数是？',
    options: [
      { id: 'a', text: '36' },
      { id: 'b', text: '37' },
      { id: 'c', text: '64' },
      { id: 'd', text: '31' },
    ],
    correctAnswer: 'b',
    explanation: '34 右边的第 3 个数是 37！34→35→36→37。深海天锚认识到自己的行为可能不对，但作为海盗团首领，他必须完成使命！炫光炮舰组装完成！他与玄铁战神暂时结盟！',
    hint: '往右数 3 格',
  },
]

/**
 * 关卡 3-2 挑战模式题目：炮舰炮
 * 主题：100 以内数的认识 - 百数表进阶
 * 场景：能量冲突现场 → 发现玄铁战神要毁掉召唤器 → 深海爆弹发射 → 两败俱伤撤退
 */
export const level3_2MediumQuestions: Question[] = [
  // 第 1 题：能量冲突开始
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '45 下面的数是？',
    options: [
      { id: 'a', text: '44' },
      { id: 'b', text: '46' },
      { id: 'c', text: '55' },
      { id: 'd', text: '35' },
    ],
    correctAnswer: 'c',
    explanation: '45 下面的数是 55！百数表中，每一列下面的数比上面的数十位多 1，45 + 10 = 55。能量冲突开始！深海天锚发现玄铁战神竟然要毁掉炫卡召唤器！这与他的目标相冲突！',
    hint: '下面的数比 45 多 10',
  },

  // 第 2 题：多重导航（多选题）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '选出和 67 相邻的所有数！',
    options: [
      { id: 'a', text: '66' },
      { id: 'b', text: '68' },
      { id: 'c', text: '57' },
      { id: 'd', text: '77' },
    ],
    correctAnswers: ['a', 'b', 'c', 'd'],
    explanation: '和 67 相邻的所有数：左边 66，右边 68，上面 57，下面 77！多重导航完成！深海天锚决定阻止玄铁战神毁掉召唤器！他发射了深海爆弹！',
    hint: '相邻包括左右和上下四个方向',
  },

  // 第 3 题：导航航线（连线配对）
  {
    type: 'link' as QuestionType.LINK,
    question: '把数字和它在百数表中的位置连起来！',
    pairs: [
      { id: '1', left: '12', right: '第 2 行第 2 列' },
      { id: '2', left: '35', right: '第 4 行第 5 列' },
      { id: '3', left: '58', right: '第 6 行第 8 列' },
      { id: '4', left: '79', right: '第 8 行第 9 列' },
      { id: '5', left: '90', right: '第 10 行第 10 列' },
    ],
    explanation: '导航航线建立！12 在第 2 行第 2 列，35 在第 4 行第 5 列，58 在第 6 行第 8 列，79 在第 8 行第 9 列，90 在第 10 行第 10 列！深海天锚与玄铁战神展开激战！双方都受到重创！',
  },

  // 第 4 题：核心导航（填空题）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '34 右边的第 3 个数是{{___}}',
    answer: ['37', '三十七'],
    explanation: '34 右边的第 3 个数是 37！34→35→36→37。核心导航完成！深海天锚虽然与玄铁战神暂时结盟，但发现玄铁战神要毁掉召唤器后，他用深海爆弹回击！双方两败俱伤撤退！',
    hint: '往右数 3 格',
  },

  // 第 5 题：开始认真装载（圈画题）
  {
    type: 'circle' as QuestionType.CIRCLE,
    question: '圈出百数表中第 5 行的数！',
    instruction: '点击圈出第 5 行的数（41-50）',
    image: '/assets/shapes/number-examples.svg',
    answerAreas: [
      { id: 'num41', x: 80, y: 100, radius: 40, label: '41' },
      { id: 'num42', x: 120, y: 100, radius: 40, label: '42' },
      { id: 'num45', x: 200, y: 100, radius: 40, label: '45' },
      { id: 'num50', x: 320, y: 100, radius: 40, label: '50' },
    ],
    tolerance: 10,
    explanation: '百数表中第 5 行的数是 41、42、43、44、45、46、47、48、49、50！炮舰炮组装完成！深海天锚虽然与玄铁战神发生冲突，但他内心重视同伴义气，这为他后来的转变埋下伏笔！',
    hint: '第 5 行从 41 开始到 50 结束',
  },
]

/**
 * 关卡 3-2 高手模式题目：雷霆炮舰
 * 主题：100 以内数的认识 - 百数表高阶
 * 场景：第 24 集封装完成 → 成为小俊伙伴 → 与重力金刚、爆裂重卡、玄铁战神和好
 */
export const level3_2HardQuestions: Question[] = [
  // 第 1 题：完整百数表（填空题）
  {
    type: 'fill_blank' as QuestionType.FILL_BLANK,
    question: '89 下面的数是{{___}}',
    answer: ['99', '九十九'],
    explanation: '89 下面的数是 99！百数表中，89 + 10 = 99。第 24 集，深海天锚经历了一系列事件后，认识到自己的错误！他自愿接受小俊用炫卡召唤器封装，成为伙伴！他的载具形态是海盗船！',
    hint: '下面的数比 89 多 10',
  },

  // 第 2 题：伙伴比较（比较哪个数最大）
  {
    type: 'choice' as QuestionType.CHOICE,
    question: '下面哪个数最大？',
    options: [
      { id: 'a', text: '72' },
      { id: 'b', text: '85' },
      { id: 'c', text: '79' },
      { id: 'd', text: '81' },
    ],
    correctAnswer: 'b',
    explanation: '85 最大！先看十位，8 比 7 大；再看 85 和 81，十位相同看个位，5 比 1 大。深海天锚成为伙伴后，与重力金刚、爆裂重卡、玄铁战神重归于好！他们曾经是敌人，但现在是并肩作战的战友！',
    hint: '先比较十位，十位相同再比较个位',
  },

  // 第 3 题：伙伴排序（数字按从小到大排序）
  {
    type: 'drag' as QuestionType.DRAG,
    question: '把数字按从小到大排列！',
    instruction: '将数字拖到正确顺序位置',
    items: [
      { id: 'num34', name: '34', shape: 'rectangle' },
      { id: 'num56', name: '56', shape: 'rectangle' },
      { id: 'num78', name: '78', shape: 'rectangle' },
      { id: 'num91', name: '91', shape: 'rectangle' },
    ],
    targets: [
      { id: 'pos1', name: '最小', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: 'pos2', name: '第二', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: 'pos3', name: '第三', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
      { id: 'pos4', name: '最大', accepts: ['rectangle'], position: { x: 0, y: 0 }, size: { width: 100, height: 50 } },
    ],
    explanation: '34 < 56 < 78 < 91！从小到大排列正确！深海天锚、重力金刚、爆裂重卡、玄铁战神四人的友谊也在恢复！他们一起对抗敌人，成为可靠的伙伴！',
    hint: '先比较十位，十位相同再比较个位',
  },

  // 第 4 题：与重力金刚、爆裂重卡、玄铁战神和好（多选题）
  {
    type: 'multi_select' as QuestionType.MULTI_SELECT,
    question: '选出百数表的正确规律！',
    options: [
      { id: 'a', text: '每一行从左到右依次多 1' },
      { id: 'b', text: '每一列从上到下依次多 10' },
      { id: 'c', text: '对角线上的数每次多 11' },
      { id: 'd', text: '每一行的十位都相同' },
    ],
    correctAnswers: ['a', 'b', 'c'],
    explanation: '百数表的规律：每一行从左到右依次多 1，每一列从上到下依次多 10，对角线上的数每次多 11！选项 d 错误，同一行的十位不都相同，只有整十数之前相同。深海天锚与重力金刚、爆裂重卡、玄铁战神和好！四人友谊重建！',
    hint: '百数表有很多规律，仔细想想',
  },

  // 第 5 题：加入团队（拼出百数表的 100 个数）
  {
    type: 'shape_compose' as QuestionType.SHAPE_COMPOSE,
    question: '用图形拼出百数表的规律示意图！',
    instruction: '把图形拖到画布中，表示百数表的行列规律：10 行 10 列组成 100',
    items: [
      { id: 'row-block-1', name: '第 1 行', shape: 'rectangle' },
      { id: 'row-block-2', name: '第 2 行', shape: 'rectangle' },
      { id: 'row-block-3', name: '第 3 行', shape: 'rectangle' },
      { id: 'row-block-4', name: '第 4 行', shape: 'rectangle' },
      { id: 'row-block-5', name: '第 5 行', shape: 'rectangle' },
      { id: 'hundred-circle', name: '100', shape: 'circle' },
    ],
    canvasSize: { width: 300, height: 200 },
    requiredCounts: { rectangle: 5, circle: 1 },
    explanation: '百数表规律示意图：10 行 × 10 列 = 100 个数！雷霆炮舰组装完成！深海天锚加入炫卡斗士团队，与重力金刚、爆裂重卡、玄铁战神化敌为友！他的绝招深海爆弹、舷炮齐射、终极黑鲨鱼成为团队的力量！',
  },
]

/**
 * 按难度分组的题目
 */
export const level3_2QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level3_2EasyQuestions,
  [DifficultyLevel.MEDIUM]: level3_2MediumQuestions,
  [DifficultyLevel.HARD]: level3_2HardQuestions,
}

/**
 * 按难度分组的武器零件
 */
export const level3_2WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level3_2EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level3_2MediumWeaponParts,
  [DifficultyLevel.HARD]: level3_2HardWeaponParts,
}