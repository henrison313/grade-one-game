import type { Level, StorySegment } from '@/types';
import { characters, getCharacterById } from './characters.data';
import { level1_1Questions } from './questions.data';
import { level1_2Questions } from './levels/level-1-2.data';
import { level1_3Questions } from './levels/level-1-3.data';
// 第二单元：20 以内退位减法
import { level2_1Questions } from './levels/level-2-1.data';
import { level2_2Questions } from './levels/level-2-2.data';
import { level2_3Questions } from './levels/level-2-3.data';
import { level2_4Questions } from './levels/level-2-4.data';
// 第三单元：100 以内数的认识
import { level3_1Questions } from './levels/level-3-1.data';
import { level3_2Questions } from './levels/level-3-2.data';
import { level3_3Questions } from './levels/level-3-3.data';
import { level3_4Questions } from './levels/level-3-4.data';
// 第四单元：100 以内口算加减法
import { level4_1Questions } from './levels/level-4-1.data';
import { level4_2Questions } from './levels/level-4-2.data';
import { level4_3Questions } from './levels/level-4-3.data';
// 第五单元：100 以内笔算加减法
import { level5_1Questions } from './levels/level-5-1.data';
import { level5_2Questions } from './levels/level-5-2.data';
// 第六单元：BOSS 关
import { level6Questions } from './levels/level-6.data';
// 第七单元：欢乐购物街
import { level7_1Questions } from './levels/level-7-1.data';
import { level7_2Questions } from './levels/level-7-2.data';
// 第八单元：找规律
import { level8Questions } from './levels/level-8.data';
// 第九单元：期末综合
import { level9Questions } from './levels/level-9.data';

/**
 * 关卡 1-1 剧情
 */
const level1_1Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '欢迎来到炫卡世界！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '你好！我是炫蓝闪电，你的炫卡导师。今天我们要认识一个强大的守护者！',
    duration: 3000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '他叫"巨力风暴"，守护着"认识平面图形"这个关卡。',
    duration: 3000,
  },
  {
    id: '4',
    type: 'narration',
    text: '你需要完成闯关，获得星星，才能打败他，收集到他的炫卡！',
    duration: 2000,
  },
];

/**
 * 关卡 1-2 剧情：平面图形的拼图
 */
const level1_2Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '欢迎回到炫卡世界！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '今天我们要挑战"平面图形的拼图"！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '看看你能不能用不同的图形拼出美丽的图案！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '完成拼图挑战，就能获得星星，继续向炫卡斗士发起挑战！',
    duration: 2000,
  },
];

/**
 * 关卡 1-3 剧情：七巧板
 */
const level1_3Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '恭喜你来到了第三关！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '这一关我们要玩一个古老而神奇的游戏——七巧板！',
    duration: 3000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '七巧板由 7 块板组成，可以拼出成千上万种图案！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '发挥你的想象力，完成七巧板挑战，收集更多星星！',
    duration: 2000,
  },
];

/**
 * 关卡 2-1 剧情：破十法初步认识
 */
const level2_1Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '欢迎来到第二单元！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '今天我们要学习一种新的计算方法——破十法！',
    duration: 3000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '把 10 用来帮忙减法，剩下的再加上个位数！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '完成挑战，掌握破十法！',
    duration: 2000,
  },
];

/**
 * 关卡 2-2 剧情：进一步练习破十法
 */
const level2_2Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '继续挑战破十法！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '让我们用破十法解决更多的减法问题！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'narration',
    text: '越练越熟练，加油！',
    duration: 2000,
  },
];

/**
 * 关卡 2-3 剧情：连击挑战
 */
const level2_3Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '连击挑战来了！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '在 30 秒内完成所有题目，考验你的速度和准确率！',
    duration: 3000,
  },
  {
    id: '3',
    type: 'narration',
    text: '准备好了吗？开始！',
    duration: 2000,
  },
];

/**
 * 关卡 2-4 剧情：综合练习
 */
const level2_4Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '20 以内退位减法综合练习！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '用你学到的破十法，完成所有挑战！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'narration',
    text: '证明你的实力的时候到了！',
    duration: 2000,
  },
];

/**
 * 关卡 3-1 剧情：数数和数的组成
 */
const level3_1Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '欢迎来到第三单元！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '今天我们要探索 100 以内的数字世界！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'narration',
    text: '认识数的组成，成为数字小达人！',
    duration: 2000,
  },
];

/**
 * 关卡 3-2 剧情：百数表
 */
const level3_2Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '探索百数表的奥秘！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '百数表里藏着很多规律，等你去发现！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'narration',
    text: '找找看，数字之间有什么秘密？',
    duration: 2000,
  },
];

/**
 * 关卡 3-3 剧情：数的顺序和比较大小
 */
const level3_3Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '学习比较数的大小！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '先比十位，再比个位，就能知道谁大谁小！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'narration',
    text: '成为比较大小的高手！',
    duration: 2000,
  },
];

/**
 * 关卡 3-4 剧情：数的组成综合练习
 */
const level3_4Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '数的组成综合挑战！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '用你学到的知识，完成数的组成练习！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'narration',
    text: '加油，胜利就在前方！',
    duration: 2000,
  },
];

/**
 * 关卡 4-1 剧情：整十数加减整十数
 */
const level4_1Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '欢迎来到第四单元！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '今天我们来学习整十数的加减法！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'narration',
    text: '整十数加减很简单，十位相加减就行！',
    duration: 2000,
  },
];

/**
 * 关卡 4-2 剧情：两位数加减整十数
 */
const level4_2Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '学习两位数加减整十数！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '十位相加减，个位不变！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'narration',
    text: '越算越快，越算越准！',
    duration: 2000,
  },
];

/**
 * 关卡 4-3 剧情：两位数加减一位数
 */
const level4_3Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '学习两位数加减一位数！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '个位相加减，十位不变！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'narration',
    text: '细心计算，不要出错哦！',
    duration: 2000,
  },
];

/**
 * 关卡 5-1 剧情：两位数加两位数（不进位）
 */
const level5_1Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '欢迎来到第五单元！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '今天学习用竖式计算两位数加两位数！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '个位加个位，十位加十位，对齐很重要！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '认真完成每一道竖式计算！',
    duration: 2000,
  },
];

/**
 * 关卡 5-2 剧情：两位数减两位数（不退位）
 */
const level5_2Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '学习两位数减两位数的竖式计算！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '个位减个位，十位减十位，从个位算起！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'narration',
    text: '仔细计算，验算一下！',
    duration: 2000,
  },
];

/**
 * 关卡 6 剧情：BOSS 关综合练习
 */
const level6Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: 'BOSS 关挑战来了！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '这一关综合了前面学的所有知识！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '相信你一定能成功！加油！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '全力以赴，战胜 BOSS！',
    duration: 2000,
  },
];

/**
 * 关卡 7-1 剧情：认识人民币
 */
const level7_1Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '欢迎来到第七单元！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '今天我们来认识人民币！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '人民币的单位有元、角、分，1 元=10 角，1 角=10 分！',
    duration: 3000,
  },
  {
    id: '4',
    type: 'narration',
    text: '学会用钱，做理财小能手！',
    duration: 2000,
  },
];

/**
 * 关卡 7-2 剧情：简单购物计算
 */
const level7_2Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '小小购物街开业啦！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '用你学到的知识，帮小明购物吧！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'narration',
    text: '算对钱，买对东西！',
    duration: 2000,
  },
];

/**
 * 关卡 8 剧情：找规律
 */
const level8Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '欢迎来到规律的世界！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '找规律，填数字，看图猜规律！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'narration',
    text: '发现规律，享受发现的乐趣！',
    duration: 2000,
  },
];

/**
 * 关卡 9 剧情：期末综合练习
 */
const level9Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '期末综合大挑战！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '这一关包含了本学期所有的知识点！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '相信自己，你能行的！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '全力以赴，迎接期末考试！',
    duration: 2000,
  },
];

/**
 * 所有关卡数据
 */
export const levels: Level[] = [
  // === 第一单元：图形与几何 ===
  {
    id: '1-1',
    name: '认识平面图形',
    chapter: 1,
    chapterName: '图形与几何',
    description: '认识圆形、三角形、正方形和长方形',
    thumbnail: '/图片素材/巨力风暴.png',
    status: 'available',
    guardian: getCharacterById('juli-fengbao') || characters[0],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '欢迎来到炫卡世界！',
      encouragement: '你做得很棒！继续加油！',
    },
    questions: level1_1Questions,
    totalStars: 50,
    starReward: 10,
    story: level1_1Story,
  },
  {
    id: '1-2',
    name: '平面图形的拼图',
    chapter: 1,
    chapterName: '图形与几何',
    description: '通过图形组合/拼图来巩固对平面图形的认识',
    thumbnail: '/图片素材/急救卫士.png',
    status: 'locked',
    guardian: getCharacterById('baoche-jiushi') || characters[1],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '欢迎回到炫卡世界！',
      encouragement: '你的拼图能力真棒！',
    },
    questions: level1_2Questions,
    totalStars: 50,
    starReward: 10,
    story: level1_2Story,
  },
  {
    id: '1-3',
    name: '七巧板',
    chapter: 1,
    chapterName: '图形与几何',
    description: '通过七巧板游戏进一步巩固对平面图形的认识',
    thumbnail: '/图片素材/烈火修罗.png',
    status: 'locked',
    guardian: getCharacterById('liehuo-xiuluo') || characters[2],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '恭喜你来到了第三关！',
      encouragement: '你的想象力真丰富！',
    },
    questions: level1_3Questions,
    totalStars: 50,
    starReward: 10,
    story: level1_3Story,
  },
  // === 第二单元：20 以内退位减法 ===
  {
    id: '2-1',
    name: '破十法初步认识',
    chapter: 2,
    chapterName: '20 以内退位减法',
    description: '学习用破十法计算 20 以内退位减法',
    thumbnail: '/图片素材/爆裂重卡.png',
    status: 'locked',
    guardian: getCharacterById('baolie-zhongka') || characters[3],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '欢迎来到第二单元！',
      encouragement: '破十法很简单，加油！',
    },
    questions: level2_1Questions,
    totalStars: 50,
    starReward: 10,
    story: level2_1Story,
  },
  {
    id: '2-2',
    name: '进一步练习破十法',
    chapter: 2,
    chapterName: '20 以内退位减法',
    description: '通过多种练习巩固破十法',
    thumbnail: '/图片素材/深海天锚.png',
    status: 'locked',
    guardian: getCharacterById('shenhai-tianmao') || characters[4],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '继续挑战！',
      encouragement: '越练越熟练！',
    },
    questions: level2_2Questions,
    totalStars: 50,
    starReward: 10,
    story: level2_2Story,
  },
  {
    id: '2-3',
    name: '连击挑战',
    chapter: 2,
    chapterName: '20 以内退位减法',
    description: '在限定时间内快速完成计算',
    thumbnail: '/图片素材/重力金刚.png',
    status: 'locked',
    guardian: getCharacterById('zhongli-jingang') || characters[5],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '连击挑战来了！',
      encouragement: '快速又准确！',
    },
    questions: level2_3Questions,
    totalStars: 60,
    starReward: 15,
    story: level2_3Story,
  },
  {
    id: '2-4',
    name: '综合练习',
    chapter: 2,
    chapterName: '20 以内退位减法',
    description: '20 以内退位减法综合应用',
    thumbnail: '/图片素材/玄铁战神.png',
    status: 'locked',
    guardian: getCharacterById('xuantie-zhanshen') || characters[6],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '证明你的实力！',
      encouragement: '你是最棒的！',
    },
    questions: level2_4Questions,
    totalStars: 50,
    starReward: 10,
    story: level2_4Story,
  },
  // === 第三单元：100 以内数的认识 ===
  {
    id: '3-1',
    name: '数数和数的组成',
    chapter: 3,
    chapterName: '100 以内数的认识',
    description: '认识 100 以内的数，学习数的组成',
    thumbnail: '/图片素材/炫蓝闪电 1.png',
    status: 'locked',
    guardian: getCharacterById('xuanlan-shandian-S') || characters[7],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '欢迎来到第三单元！',
      encouragement: '数的组成很简单！',
    },
    questions: level3_1Questions,
    totalStars: 50,
    starReward: 10,
    story: level3_1Story,
  },
  {
    id: '3-2',
    name: '百数表',
    chapter: 3,
    chapterName: '100 以内数的认识',
    description: '探索百数表的规律',
    thumbnail: '/图片素材/焰龙战神 1.png',
    status: 'locked',
    guardian: getCharacterById('yanlong-zhanshen') || characters[8],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '探索百数表的奥秘！',
      encouragement: '发现规律真棒！',
    },
    questions: level3_2Questions,
    totalStars: 50,
    starReward: 10,
    story: level3_2Story,
  },
  {
    id: '3-3',
    name: '数的顺序和比较大小',
    chapter: 3,
    chapterName: '100 以内数的认识',
    description: '学习数的顺序和比较大小',
    thumbnail: '/图片素材/霹雳火影.jpg',
    status: 'locked',
    guardian: getCharacterById('pili-huoying') || characters[9],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '学习比较数的大小！',
      encouragement: '你是比较大小的高手！',
    },
    questions: level3_3Questions,
    totalStars: 50,
    starReward: 10,
    story: level3_3Story,
  },
  {
    id: '3-4',
    name: '数的组成综合练习',
    chapter: 3,
    chapterName: '100 以内数的认识',
    description: '数的组成综合应用',
    thumbnail: '/图片素材/裂空悍将.png',
    status: 'locked',
    guardian: getCharacterById('liekong-hanjiang') || characters[10],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '数的组成综合挑战！',
      encouragement: '胜利就在前方！',
    },
    questions: level3_4Questions,
    totalStars: 50,
    starReward: 10,
    story: level3_4Story,
  },
  // === 第四单元：100 以内口算加减法 ===
  {
    id: '4-1',
    name: '整十数加减整十数',
    chapter: 4,
    chapterName: '100 以内口算加减法',
    description: '学习整十数的加减法',
    thumbnail: '/图片素材/钢臂力士.png',
    status: 'locked',
    guardian: getCharacterById('gangbi-lishi') || characters[11],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '欢迎来到第四单元！',
      encouragement: '整十数加减很简单！',
    },
    questions: level4_1Questions,
    totalStars: 50,
    starReward: 10,
    story: level4_1Story,
  },
  {
    id: '4-2',
    name: '两位数加减整十数',
    chapter: 4,
    chapterName: '100 以内口算加减法',
    description: '学习两位数加减整十数',
    thumbnail: '/图片素材/星际游侠 1.png',
    status: 'locked',
    guardian: getCharacterById('xingji-youxia') || characters[12],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '学习两位数加减整十数！',
      encouragement: '越算越快！',
    },
    questions: level4_2Questions,
    totalStars: 50,
    starReward: 10,
    story: level4_2Story,
  },
  {
    id: '4-3',
    name: '两位数加减一位数',
    chapter: 4,
    chapterName: '100 以内口算加减法',
    description: '学习两位数加减一位数（不进位、不退位）',
    thumbnail: '/图片素材/爆旋洛克.png',
    status: 'locked',
    guardian: getCharacterById('baoxuan-luoke') || characters[13],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '学习两位数加减一位数！',
      encouragement: '细心计算！',
    },
    questions: level4_3Questions,
    totalStars: 50,
    starReward: 10,
    story: level4_3Story,
  },
  // === 第五单元：100 以内笔算加减法 ===
  {
    id: '5-1',
    name: '两位数加两位数（不进位）',
    chapter: 5,
    chapterName: '100 以内笔算加减法',
    description: '学习用竖式计算两位数加两位数（不进位）',
    thumbnail: '/图片素材/爆旋洛克.png',
    status: 'locked',
    guardian: getCharacterById('shenhai-bawang') || characters[14],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '欢迎来到第五单元！',
      encouragement: '竖式计算很简单！',
    },
    questions: level5_1Questions,
    totalStars: 50,
    starReward: 10,
    story: level5_1Story,
  },
  {
    id: '5-2',
    name: '两位数减两位数（不退位）',
    chapter: 5,
    chapterName: '100 以内笔算加减法',
    description: '学习用竖式计算两位数减两位数（不退位）',
    thumbnail: '/图片素材/银翼骑士.png',
    status: 'locked',
    guardian: getCharacterById('yinyi-qishi') || characters[15],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '学习两位数减两位数的竖式计算！',
      encouragement: '仔细计算！',
    },
    questions: level5_2Questions,
    totalStars: 50,
    starReward: 10,
    story: level5_2Story,
  },
  // === 第六单元：BOSS 关 ===
  {
    id: '6',
    name: '综合练习（BOSS 关）',
    chapter: 6,
    chapterName: '期中综合练习',
    description: '综合运用所学知识，挑战 BOSS',
    thumbnail: '/图片素材/重装赤魂王 1.png',
    status: 'locked',
    guardian: getCharacterById('zhongzhuang-chihunwang') || characters[16],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: 'BOSS 关挑战来了！',
      encouragement: '相信你一定能成功！',
    },
    questions: level6Questions,
    totalStars: 100,
    starReward: 30,
    story: level6Story,
  },
  // === 第七单元：欢乐购物街 ===
  {
    id: '7-1',
    name: '认识人民币',
    chapter: 7,
    chapterName: '欢乐购物街',
    description: '认识人民币，学习元角分的换算',
    thumbnail: '/图片素材/喷射加仑.png',
    status: 'locked',
    guardian: getCharacterById('penshe-jialun') || characters[17],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '欢迎来到第七单元！',
      encouragement: '学会用钱！',
    },
    questions: level7_1Questions,
    totalStars: 50,
    starReward: 10,
    story: level7_1Story,
  },
  {
    id: '7-2',
    name: '简单购物计算',
    chapter: 7,
    chapterName: '欢乐购物街',
    description: '运用人民币知识解决购物问题',
    thumbnail: '/图片素材/裂变骑士.png',
    status: 'locked',
    guardian: getCharacterById('liebian-qishi') || characters[18],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '小小购物街开业啦！',
      encouragement: '算对钱，买对东西！',
    },
    questions: level7_2Questions,
    totalStars: 50,
    starReward: 10,
    story: level7_2Story,
  },
  // === 第八单元：找规律 ===
  {
    id: '8',
    name: '找规律',
    chapter: 8,
    chapterName: '找规律',
    description: '发现图形和数字的规律',
    thumbnail: '/图片素材/暴击悟空.png',
    status: 'locked',
    guardian: getCharacterById('baoji-wukong') || characters[19],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '欢迎来到规律的世界！',
      encouragement: '发现规律真有趣！',
    },
    questions: level8Questions,
    totalStars: 50,
    starReward: 10,
    story: level8Story,
  },
  // === 第九单元：期末综合 ===
  {
    id: '9',
    name: '期末综合练习',
    chapter: 9,
    chapterName: '期末复习',
    description: '综合复习本学期所有知识点',
    thumbnail: '/图片素材/炫卡斗士 Logo.png',
    status: 'locked',
    guardian: getCharacterById('xuanka-doushi') || characters[20],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '期末综合大挑战！',
      encouragement: '相信自己，你能行的！',
    },
    questions: level9Questions,
    totalStars: 120,
    starReward: 40,
    story: level9Story,
  },
];

/**
 * 根据 ID 获取关卡
 */
export function getLevelById(id: string): Level | undefined {
  return levels.find((l) => l.id === id);
}

/**
 * 获取所有关卡
 */
export function getAllLevels(): Level[] {
  return levels;
}

/**
 * 获取章节列表
 */
export function getChapters() {
  const chapterMap = new Map<number, { name: string; levelIds: string[] }>();

  levels.forEach((level) => {
    if (!chapterMap.has(level.chapter)) {
      chapterMap.set(level.chapter, {
        name: level.chapterName,
        levelIds: [],
      });
    }
    chapterMap.get(level.chapter)!.levelIds.push(level.id);
  });

  return Array.from(chapterMap.entries()).map(([num, data]) => ({
    number: num,
    name: data.name,
    levelIds: data.levelIds,
  }));
}
