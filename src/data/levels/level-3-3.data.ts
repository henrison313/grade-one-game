import { getAssetPath } from '@/config/paths.config';
import type { Question, WeaponPart } from '@/types'
import { DifficultyLevel, QuestionType } from '@/types'

/**
 * 第十关（3-3 重力金刚 - 100 以内数的比较大小）重力装置主题武器零件配置
 * 重力金刚：天才科学家和发明家，性格狡猾急躁但具有可爱的一面
 * 载具形态：卡特彼勒 D6R 推土机
 * 武器：重力光炮
 * 绝招：双机关炮、核心光炮、爆裂射线
 */

/**
 * 新手模式武器零件：炫光重力炮
 */
export const level3_3EasyWeaponParts: WeaponPart[] = [
  { id: 'gravity-easy-core', name: '重力核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'gravity-easy-shell', name: '炫光外壳', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'gravity-easy-cannon', name: '炫光炮管', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'gravity-easy-gauge', name: '重力仪表', shapeType: 'square', iconImage: getAssetPath('/assets/weapons/光能护盾.png') },
  { id: 'gravity-easy-complete', name: '炫光重力炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/easy-weapon.png') },
]

/**
 * 挑战模式武器零件：重力炮
 */
export const level3_3MediumWeaponParts: WeaponPart[] = [
  { id: 'gravity-medium-core', name: '重力炮核心', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'gravity-medium-shell', name: '重力炮身', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'gravity-medium-cannon', name: '重型炮管', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'gravity-medium-complete', name: '重力炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/medium-weapon.png') },
]

/**
 * 高手模式武器零件：雷霆重力炮
 */
export const level3_3HardWeaponParts: WeaponPart[] = [
  { id: 'gravity-hard-ring', name: '雷霆能量环', shapeType: 'circle', iconImage: getAssetPath('/assets/weapons/光能核心.png') },
  { id: 'gravity-hard-shell', name: '雷霆炮身', shapeType: 'rectangle', iconImage: getAssetPath('/assets/weapons/光能外壳.png') },
  { id: 'gravity-hard-cannon', name: '雷霆炮管', shapeType: 'triangle', iconImage: getAssetPath('/assets/weapons/光能发射器.png') },
  { id: 'gravity-hard-complete', name: '雷霆重力炮完成', shapeType: 'composite', iconImage: getAssetPath('/assets/weapons/hard-weapon.png') },
]

/**
 * 关卡 3-3 新手模式题目：炫光重力炮
 * 主题：100 以内数的比较大小 - 基础比较
 * 场景：第 18 集 → 地下实验室初次登场 → 展现对海盗生活的厌倦 → 调试重力比较仪
 * 故事背景：重力金刚是天才科学家和发明家，性格狡猾急躁但具有可爱的一面。
 *           最初是黑色军团成员，深海天锚的手下，但不承认队长身份。
 *           厌倦扮演海盗，带着征服宇宙的野心背叛深海天锚。
 */
export const level3_3EasyQuestions: Question[] = [
  // 第 1 题：数的大小比较（第 18 集实验室初次登场）
  {
    type: QuestionType.CHOICE,
    question: '下面哪个数最大？',
    options: [
      { id: 'a', text: '89' },
      { id: 'b', text: '98' },
      { id: 'c', text: '90' },
      { id: 'd', text: '88' },
    ],
    correctAnswer: 'b',
    explanation: '98 最大！先比较十位，9 比 8 大，所以 98 的十位最大；十位相同的数再比较个位。第 18 集，重力金刚在地下实验室初次登场！他是天才科学家和发明家，烦躁地踢开海盗旗："又是无聊的海盗任务！"他对海盗生活感到厌倦，正在调试重力比较仪。他的载具形态是卡特彼勒 D6R 推土机！武器是重力光炮！',
    hint: '先看十位，十位大的数就大',
  },

  // 第 2 题：傲娇性格展现（填空题）
  {
    type: QuestionType.FILL_BLANK,
    question: '45 和 54，哪个数大？{{___}}',
    answer: ['54', '五十四'],
    explanation: '54 大！十位上 5 比 4 大，所以 54 比 45 大。重力金刚看着小俊答对题目，嘴角微微上扬但立刻板着脸："哼，算你还有点头脑。但这只是最基础的比较，别得意！"他虽然狡猾急躁，但也有可爱的一面！开始认可小俊团队的能力，态度逐渐软化！绝招是双机关炮、核心光炮、爆裂射线！',
    hint: '比较十位上的数字',
  },

  // 第 3 题：科学家严谨一面
  {
    type: QuestionType.CHOICE,
    question: '比 60 大但比 70 小的数有几个？',
    options: [
      { id: 'a', text: '8 个' },
      { id: 'b', text: '9 个' },
      { id: 'c', text: '10 个' },
      { id: 'd', text: '11 个' },
    ],
    correctAnswer: 'b',
    explanation: '比 60 大但比 70 小的数有 9 个：61、62、63、64、65、66、67、68、69！重力金刚检查重力比较仪的数据："精确很重要！61、62...一直到69，一共9个数。科学实验容不得半点误差！"作为科学家，性格严谨！仪器开始稳定运转，墙上隐约可见宇宙征服计划的草图！',
    hint: '从 61 数到 69',
  },

  // 第 4 题：数字分类拖拽
  {
    type: QuestionType.DRAG,
    question: '把数字拖到正确的分类上！',
    instruction: '根据数字大小，拖到对应的位置',
    items: [
      { id: 'num45', name: '45' },
      { id: 'num54', name: '54' },
      { id: 'num67', name: '67' },
      { id: 'num76', name: '76' },
      { id: 'num89', name: '89' },
      { id: 'num98', name: '98' },
    ],
    targets: [
      { id: 'less60', name: '比 60 小', accepts: ['num45', 'num54'], position: { x: 100, y: 30 }, size: { width: 180, height: 120 } },
      { id: 'between60and80', name: '60 到 80 之间', accepts: ['num67', 'num76'], position: { x: 310, y: 30 }, size: { width: 180, height: 120 } },
      { id: 'greater80', name: '比 80 大', accepts: ['num89', 'num98'], position: { x: 205, y: 180 }, size: { width: 180, height: 120 } },
    ],
    explanation: '45 和 54 的十位都小于 6，所以比 60 小；67 和 76 的十位是 6 和 7，在 60 到 80 之间；89 和 98 的十位是 8 和 9，比 80 大！重力金刚一边调整装置一边说："你们这群小家伙还挺有用的...咳，我说什么了？继续干活！"他偷偷瞥了一眼小俊的炫卡召唤器。态度在软化，开始暗中观察团队！展现可爱的一面！',
    hint: '先看十位，判断在哪个范围',
  },

  // 第 5 题：仪器启动显露野心
  {
    type: QuestionType.CHOICE,
    question: '按从小到大的顺序，排在 79 后面的数是？',
    options: [
      { id: 'a', text: '78' },
      { id: 'b', text: '80' },
      { id: 'c', text: '70' },
      { id: 'd', text: '90' },
    ],
    correctAnswer: 'b',
    explanation: '排在 79 后面的数是 80！79 + 1 = 80。重力比较仪发出轰鸣声，重力金刚眼中闪过狂热："终于稳定了！这台装置...可以测量宇宙中任何物体的重量！"墙上隐约可见一张征服宇宙的草图。重力装置启动成功！他显露了征服宇宙的野心！炫光重力炮组装完成！他带着推土机形态准备开始他的计划！',
    hint: '79 后面是哪个数？',
  },
]

/**
 * 关卡 3-3 挑战模式题目：重力炮
 * 主题：100 以内数的比较大小 - 进阶比较
 * 场景：实验室核心区域 → 能量反应堆过载 → 重力金刚正在绘制宇宙征服蓝图 → 野心与危机的十字路口
 */
export const level3_3MediumQuestions: Question[] = [
  // 第 1 题：野心暴露
  {
    type: QuestionType.CHOICE,
    question: '67 和 76，哪个数大？',
    options: [
      { id: 'a', text: '67' },
      { id: 'b', text: '76' },
      { id: 'c', text: '一样大' },
      { id: 'd', text: '无法比较' },
    ],
    correctAnswer: 'b',
    explanation: '76 大！十位上 7 比 6 大，所以 76 比 67 大。重力金刚指着墙上的宇宙征服蓝图："我要用重力装置征服整个宇宙！海盗游戏玩够了！"团队成员震惊，但小俊选择先倾听他的想法。重力金刚暴露了野心！他是黑色军团成员，深海天锚的手下，但不承认队长身份！',
    hint: '比较十位上的数字',
  },

  // 第 2 题：反应堆过载（多选题）
  {
    type: QuestionType.MULTI_SELECT,
    question: '选出所有比 50 大的数！',
    options: [
      { id: 'a', text: '45' },
      { id: 'b', text: '67' },
      { id: 'c', text: '38' },
      { id: 'd', text: '89' },
    ],
    correctAnswers: ['b', 'd'],
    explanation: '67 和 89 比 50 大！67 的十位 6 > 5，89 的十位 8 > 5。45 和 38 的十位都小于 5，所以比 50 小。能量反应堆发出警报声！重力金刚首次显露慌乱："糟了！能量过载！我的完美计划...！"他焦躁地在实验台前踱步，可爱的一面在危机中展现！',
    hint: '十位大于 5 的数比 50 大',
  },

  // 第 3 题：连线配对
  {
    type: QuestionType.LINK,
    question: '把数对和比较结果连起来！',
    pairs: [
      { id: '1', left: '45 和 54', right: '54 大' },
      { id: '2', left: '67 和 76', right: '76 大' },
      { id: '3', left: '89 和 98', right: '98 大' },
      { id: '4', left: '23 和 32', right: '32 大' },
    ],
    explanation: '54 > 45（十位 5 > 4），76 > 67（十位 7 > 6），98 > 89（十位 9 > 8），32 > 23（十位 3 > 2）！小俊主动帮忙稳定反应堆，重力金刚暗中观察："这群孩子...配合得还挺默契。"他傲娇地撇过头，但嘴角有了笑意。团队默契配合！态度继续转变！',
  },

  // 第 4 题：放下骄傲求助（填空题）
  {
    type: QuestionType.FILL_BLANK,
    question: '比 60 大但比 70 小的数有{{___}}个',
    answer: ['9'],
    explanation: '比 60 大但比 70 小的数有 9 个：61、62、63、64、65、66、67、68、69！危机逼近，重力金刚放下骄傲："虽然我是天才科学家，但这次...我需要你们的帮助。"他第一次放下傲娇的姿态，向团队求助！这是态度转变的重要时刻！认识到团队的重要性！',
    hint: '从 61 数到 69',
  },

  // 第 5 题：反应堆稳定态度转变（圈画题）
  {
    type: QuestionType.CIRCLE,
    question: '圈出所有比 80 小的数！',
    instruction: '点击圈出十位小于 8 的数',
    correctAnswers: ['num45', 'num67', 'num23', 'num76', 'num35'],
    answerAreas: [
      // 第一行：3个正确答案 + 2个干扰项
      { id: 'num45', x: 60, y: 80, radius: 30, label: '45' },
      { id: 'num85', x: 155, y: 80, radius: 30, label: '85' },
      { id: 'num67', x: 250, y: 80, radius: 30, label: '67' },
      { id: 'num92', x: 345, y: 80, radius: 30, label: '92' },
      { id: 'num23', x: 440, y: 80, radius: 30, label: '23' },
      // 第二行：2个正确答案 + 3个干扰项
      { id: 'num80', x: 60, y: 160, radius: 30, label: '80' },
      { id: 'num76', x: 155, y: 160, radius: 30, label: '76' },
      { id: 'num89', x: 250, y: 160, radius: 30, label: '89' },
      { id: 'num35', x: 345, y: 160, radius: 30, label: '35' },
      { id: 'num88', x: 440, y: 160, radius: 30, label: '88' },
    ],
    tolerance: 10,
    explanation: '比 80 小的数：45、67、23、76、35！它们的十位都小于 8。85、92、80、89、88 的十位是 8 或 9，不小于 8。反应堆稳定后，重力金刚深吸一口气："谢谢你们...虽然我本来就能搞定，哼。"他嘴上傲娇，但眼中有真诚的感谢。重力炮组装完成！反应堆稳定！态度彻底转变！从傲慢的天才科学家，开始认可团队伙伴！',
    hint: '十位小于 8 的数比 80 小',
  },
]

/**
 * 关卡 3-3 高手模式题目：雷霆重力炮
 * 主题：100 以内数的比较大小 - 高阶比较
 * 场景：第 23 集与深海天锚决裂 → 实验室顶层星空观测台 → 重力金刚望着夜空反思 → 从野心家到伙伴的蜕变
 */
export const level3_3HardQuestions: Question[] = [
  // 第 1 题：深夜独白反思（填空题）
  {
    type: QuestionType.FILL_BLANK,
    question: '比 90 小的最大数是{{___}}',
    answer: ['89', '八十九'],
    explanation: '比 90 小的最大数是 89！十位相同都是 9，比较个位，9 比 0 大，所以 89 是比 90 小的最大数。深夜，重力金刚独自站在星空观测台："征服宇宙...真的是我想要的吗？"他看着手中的炫卡召唤器，想起与团队的点点滴滴。"89 比 90 小，但差那么近..."深夜独白，反思野心与孤独！质疑征服宇宙的意义！',
    hint: '找十位是 9 的最大数',
  },

  // 第 2 题：敞开心扉
  {
    type: QuestionType.CHOICE,
    question: '下面哪个数最大？',
    options: [
      { id: 'a', text: '72' },
      { id: 'b', text: '85' },
      { id: 'c', text: '79' },
      { id: 'd', text: '81' },
    ],
    correctAnswer: 'b',
    explanation: '85 最大！十位 8 > 7，所以 85 最大。团队围坐在观测台，重力金刚首次敞开心扉："我是天才科学家，但...我一直很孤独。深海天锚要我当海盗，但我厌倦了扮演坏人。你们的出现，让我看到了另一种可能。"首次向团队敞开心扉！承认孤独和对海盗生活的厌倦！他是深海天锚的手下，但不承认队长身份！',
    hint: '先比较十位',
  },

  // 第 3 题：回忆点点滴滴（数字排序拖拽）
  {
    type: QuestionType.DRAG,
    question: '把数字按从小到大排列！',
    instruction: '将数字拖到正确顺序位置',
    items: [
      { id: 'num34', name: '34' },
      { id: 'num56', name: '56' },
      { id: 'num78', name: '78' },
      { id: 'num91', name: '91' },
    ],
    targets: [
      { id: 'pos1', name: '最小', accepts: ['num34'], position: { x: 80, y: 30 }, size: { width: 170, height: 150 } },
      { id: 'pos2', name: '第二', accepts: ['num56'], position: { x: 330, y: 30 }, size: { width: 170, height: 150 } },
      { id: 'pos3', name: '第三', accepts: ['num78'], position: { x: 80, y: 210 }, size: { width: 170, height: 150 } },
      { id: 'pos4', name: '最大', accepts: ['num91'], position: { x: 330, y: 210 }, size: { width: 170, height: 150 } },
    ],
    explanation: '34 < 56 < 78 < 91！从小到大排列正确！重力金刚回忆："从最初的傲慢，到反应堆危机的求助，再到现在的坦诚...你们让我明白了什么是真正的伙伴。征服宇宙？不如守护身边的人。"心态从征服宇宙转变为守护伙伴！这是从野心家到伙伴的关键转折！',
    hint: '比较十位排序',
  },

  // 第 4 题：蜕变总结（多选题）
  {
    type: QuestionType.MULTI_SELECT,
    question: '选出比较 100 以内数大小的正确方法！',
    options: [
      { id: 'a', text: '先比较十位数字' },
      { id: 'b', text: '十位相同再比较个位数字' },
      { id: 'c', text: '十位大的数一定大' },
      { id: 'd', text: '个位大的数一定大' },
    ],
    correctAnswers: ['a', 'b', 'c'],
    explanation: '比较 100 以内数大小的方法：先比较十位数字（a），十位相同再比较个位数字（b），十位大的数一定大（c）。选项 d 错误，个位大的不一定大，要看十位！重力金刚总结："比较大小，就像比较人生选择。先看大局（十位），再看细节（个位）。我以前只想着野心，忽略了真正重要的东西——伙伴。"总结自己的蜕变，团队感动！',
    hint: '先十位，再个位',
  },

  // 第 5 题：自愿接受封装（用图形拼出更大的数）
  {
    type: QuestionType.SHAPE_COMPOSE,
    question: '比较 67 和 76，哪个数大？用图形拼出更大的数！',
    instruction: '大圆形=10，小三角形=1。想一想哪个数更大，把它拼出来！',
    items: [
      // 9个大圆形（每个值10）
      { id: 'ten-1', name: '10', shape: 'circle', value: 10 },
      { id: 'ten-2', name: '10', shape: 'circle', value: 10 },
      { id: 'ten-3', name: '10', shape: 'circle', value: 10 },
      { id: 'ten-4', name: '10', shape: 'circle', value: 10 },
      { id: 'ten-5', name: '10', shape: 'circle', value: 10 },
      { id: 'ten-6', name: '10', shape: 'circle', value: 10 },
      { id: 'ten-7', name: '10', shape: 'circle', value: 10 },
      { id: 'ten-8', name: '10', shape: 'circle', value: 10 },
      { id: 'ten-9', name: '10', shape: 'circle', value: 10 },
      // 10个小三角形（每个值1）
      { id: 'one-1', name: '1', shape: 'triangle-small', value: 1 },
      { id: 'one-2', name: '1', shape: 'triangle-small', value: 1 },
      { id: 'one-3', name: '1', shape: 'triangle-small', value: 1 },
      { id: 'one-4', name: '1', shape: 'triangle-small', value: 1 },
      { id: 'one-5', name: '1', shape: 'triangle-small', value: 1 },
      { id: 'one-6', name: '1', shape: 'triangle-small', value: 1 },
      { id: 'one-7', name: '1', shape: 'triangle-small', value: 1 },
      { id: 'one-8', name: '1', shape: 'triangle-small', value: 1 },
      { id: 'one-9', name: '1', shape: 'triangle-small', value: 1 },
      { id: 'one-10', name: '1', shape: 'triangle-small', value: 1 },
    ],
    canvasSize: { width: 500, height: 300 },
    targetValue: 76,
    shapeScale: 0.6,
    explanation: '76 比 67 大！76 = 7 个十 + 6 个一，67 = 6 个十 + 7 个一。比较大小先看十位：7 > 6，所以 76 更大！雷霆重力炮组装完成！重力金刚握着炫卡召唤器："我愿意接受封装。不是为了被控制，而是成为真正的伙伴。深海天锚...爆裂重卡...玄铁战神...我们曾经是敌人，但现在可以是朋友。"自愿接受封装，完成从野心家到伙伴的蜕变！',
    hint: '先比较十位，十位大的数更大',
  },
]

/**
 * 按难度分组的题目
 */
export const level3_3QuestionsByDifficulty: Record<DifficultyLevel, Question[]> = {
  [DifficultyLevel.EASY]: level3_3EasyQuestions,
  [DifficultyLevel.MEDIUM]: level3_3MediumQuestions,
  [DifficultyLevel.HARD]: level3_3HardQuestions,
}

/**
 * 按难度分组的武器零件
 */
export const level3_3WeaponPartsByDifficulty: Record<DifficultyLevel, WeaponPart[]> = {
  [DifficultyLevel.EASY]: level3_3EasyWeaponParts,
  [DifficultyLevel.MEDIUM]: level3_3MediumWeaponParts,
  [DifficultyLevel.HARD]: level3_3HardWeaponParts,
}