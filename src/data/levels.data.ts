import { getAssetPath } from '@/config/paths.config';
import type { Level, StorySegment } from '@/types';
import { characters, getCharacterById } from './characters.data';
import { level1_1Questions } from './questions.data';
import { level1_2EasyQuestions as level1_2Questions } from './levels/level-1-2.data';
import { level1_3EasyQuestions as level1_3Questions } from './levels/level-1-3.data';
// 第二单元：20 以内退位减法
import { level2_1EasyQuestions as level2_1Questions } from './levels/level-2-1.data';
import { level2_2EasyQuestions as level2_2Questions } from './levels/level-2-2.data';
import { level2_3EasyQuestions as level2_3Questions } from './levels/level-2-3.data';
import { level2_4EasyQuestions as level2_4Questions } from './levels/level-2-4.data';
// 第三单元：100 以内数的认识
import { level3_1EasyQuestions as level3_1Questions } from './levels/level-3-1.data';
import { level3_2EasyQuestions as level3_2Questions } from './levels/level-3-2.data';
import { level3_3EasyQuestions as level3_3Questions } from './levels/level-3-3.data';
import { level34EasyQuestions as level3_4Questions } from './levels/level-3-4.data';
// 第四单元：100 以内口算加减法
import { level41EasyQuestions as level4_1Questions } from './levels/level-4-1.data';
import { level42EasyQuestions as level4_2Questions } from './levels/level-4-2.data';
import { level43EasyQuestions as level4_3Questions } from './levels/level-4-3.data';
// 第五单元：100 以内笔算加减法
import { level51EasyQuestions as level5_1Questions } from './levels/level-5-1.data';
import { level52EasyQuestions as level5_2Questions } from './levels/level-5-2.data';
// 第六单元：BOSS 关
import { level6EasyQuestions as level6Questions } from './levels/level-6.data';
// 第七单元：欢乐购物街
import { level71EasyQuestions as level7_1Questions } from './levels/level-7-1.data';
import { level72EasyQuestions as level7_2Questions } from './levels/level-7-2.data';
// 第八单元：找规律
import { level8EasyQuestions as level8Questions } from './levels/level-8.data';
// 第九单元：期末综合
import { level9EasyQuestions as level9Questions } from './levels/level-9.data';

/**
 * 关卡 1-1 剧情：巨力风暴的图形迷宫
 */
const level1_1Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '轰隆隆——森林深处传来巨响！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '小勇士！我是炫蓝闪电，终于等到你了！森林里出现了一个巨大的图形迷宫，守护者巨力风暴正在等着挑战者！',
    duration: 4000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '巨力风暴是个大力士，他用圆形、三角形、正方形建造了重重关卡。只有认识这些图形的小朋友才能通过！',
    duration: 4000,
  },
  {
    id: '4',
    type: 'dialogue',
    speaker: '巨力风暴',
    speakerImage: getAssetPath(getAssetPath('/assets/character/juli-fengbao.png')),
    text: '哈哈哈！想拿到我的炫卡？先告诉我圆形和正方形有什么区别吧！',
    duration: 3000,
  },
  {
    id: '5',
    type: 'narration',
    text: '小勇士，快帮助炫蓝闪电解开图形谜题，打败巨力风暴！',
    duration: 2500,
  },
];

/**
 * 关卡 1-2 剧情：急救卫士的拼图挑战
 */
const level1_2Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '嘀嘟嘀嘟——摩城医院传来救护车的声音！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '小勇士，急救卫士需要你的帮助！他的救护车坏了，需要用图形零件重新组装！',
    duration: 4000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '急救卫士',
    speakerImage: getAssetPath(getAssetPath('/assets/character/jiushi-weishi.png')),
    text: '小朋友，我是急救卫士！两个三角形能拼成一个正方形，你知道怎么用这些图形拼出我的救护车吗？',
    duration: 4000,
  },
  {
    id: '4',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '圆形可以做轮子，长方形做车身，正方形做窗户。快来帮急救卫士组装救护车吧！',
    duration: 3500,
  },
  {
    id: '5',
    type: 'narration',
    text: '完成拼图挑战，组装救护车，就能获得急救卫士的炫卡！',
    duration: 2500,
  },
];

/**
 * 关卡 1-3 剧情：七巧板
 */
const level1_3Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '消防站里，烈火修罗正在角落里发抖...',
    duration: 2500,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '烈火修罗，你怎么了？',
    duration: 2000,
  },
  {
    id: '3',
    type: 'narration',
    text: '烈火修罗紧张地说："我...我怕火！虽然我是消防员，但小时候被烟花吓到过..."',
    duration: 3500,
  },
  {
    id: '4',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '别怕！我有一个神奇的法宝——七巧板！它能拼出任何东西，也许能帮你克服恐惧！',
    duration: 4000,
  },
  {
    id: '5',
    type: 'narration',
    text: '炫蓝闪电拿出一个盒子，里面有7块彩色的小板子...',
    duration: 2500,
  },
  {
    id: '6',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '七巧板是中国古老的益智游戏，7块板能拼出小鱼、小船、房子，甚至烟花！',
    duration: 4000,
  },
  {
    id: '7',
    type: 'narration',
    text: '烈火修罗眼睛一亮："拼出烟花？那我就不怕真的烟花了！"',
    duration: 3000,
  },
  {
    id: '8',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '没错！用你的想象力，完成七巧板挑战，帮助烈火修罗成为勇敢的消防英雄！',
    duration: 3500,
  },
];

/**
 * 关卡 2-1 剧情：暗影特工的密码门
 */
const level2_1Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '深夜，城市地下传来神秘的滴滴声...',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '小勇士，暗影特工藏身在地下秘密基地！他设置了五道密码门，只有会用"破十法"的小朋友才能打开！',
    duration: 4500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '暗影特工',
    speakerImage: getAssetPath(getAssetPath('/assets/character/anying-tegong.png')),
    text: '14减9等于几？先把14分成10和4，再用10减9得1，最后1加4等于5！这就是我的破十法密码！',
    duration: 5000,
  },
  {
    id: '4',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '破十法就像拆解密码：把十几拆成10和几，先用10去减，再把结果加起来！快来破解暗影特工的五道密码门！',
    duration: 4500,
  },
  {
    id: '5',
    type: 'narration',
    text: '解开所有密码，就能获得暗影特工的炫影潜行刃！',
    duration: 2500,
  },
];

/**
 * 关卡 2-2 剧情：铁臂爵士的地下隧道
 */
const level2_2Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '轰隆隆——地面传来震动的声音！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '小勇士！地面下有一个神秘的隧道守护者——铁臂爵士！他虽然失明了，但耳朵能听到岩石的声音！',
    duration: 4000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '铁臂爵士在地下为小动物们挖掘安全的栖息地。他用破十法破解岩石密码，打通了一条条隧道！',
    duration: 4000,
  },
  {
    id: '4',
    type: 'dialogue',
    speaker: '铁臂爵士',
    speakerImage: getAssetPath(getAssetPath('/assets/character/tiebi-jueshi.png')),
    text: '轰！我是铁臂爵士！想通过我的隧道？先证明你会破十法！12减8等于几？',
    duration: 4000,
  },
  {
    id: '5',
    type: 'narration',
    text: '小勇士，快用破十法帮助铁臂爵士打通地下隧道！',
    duration: 2500,
  },
];

/**
 * 关卡 2-3 剧情：连击挑战
 */
const level2_3Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '嗖——一道水柱冲天而起！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '小勇士！喷射加仑发起连击挑战！他在消防训练中设下了速度关卡！',
    duration: 4000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '喷射加仑',
    speakerImage: getAssetPath(getAssetPath('/assets/character/penshi-jialun.png')),
    text: '轰！我是消防战士喷射加仑！30秒内完成所有破十法题目，你能跟上我的喷射速度吗？',
    duration: 4000,
  },
  {
    id: '4',
    type: 'narration',
    text: '小勇士，快速答题展现你的实力！',
    duration: 2500,
  },
];

/**
 * 关卡 2-4 剧情：综合练习
 */
const level2_4Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '轰隆——天空划过一道闪电！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '小勇士！裂变骑士在终极考验等你！他是第二单元最强大的守护者！',
    duration: 4000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '裂变骑士',
    speakerImage: getAssetPath(getAssetPath('/assets/character/liebian-qishi.png')),
    text: '哈！想通过20以内退位减法的终极考验？证明你的破十法已经炉火纯青！',
    duration: 4000,
  },
  {
    id: '4',
    type: 'narration',
    text: '这是证明你实力的时候！击败裂变骑士，获得炫卡奖励！',
    duration: 2500,
  },
];

/**
 * 关卡 3-1 剧情：数数和数的组成
 */
const level3_1Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '轰隆隆——一辆巨型卡车驶来！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '小勇士！暴烈重卡带你进入100以内的数字世界！他需要你的帮助来清点货物数量！',
    duration: 4000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '暴烈重卡',
    speakerImage: getAssetPath(getAssetPath('/assets/character/baolie-zhongka.png')),
    text: '轰！我是暴烈重卡！100以内的数字，6个十和3个一等于多少？你能帮我数清楚吗？',
    duration: 4000,
  },
  {
    id: '4',
    type: 'narration',
    text: '小勇士，探索数字的秘密，成为数字小达人！',
    duration: 2500,
  },
];

/**
 * 关卡 3-2 剧情：百数表
 */
const level3_2Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '咕噜咕噜——深海传来神秘的声音！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '小勇士！深海天锚在海底发现了一张神秘的百数表！每一行、每一列都藏着规律！',
    duration: 4000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '深海天锚',
    speakerImage: getAssetPath(getAssetPath('/assets/character/shenhai-tianmao.png')),
    text: '咕噜！我是深海天锚！百数表的秘密：每一行多1，每一列多10……你能发现所有规律吗？',
    duration: 4000,
  },
  {
    id: '4',
    type: 'narration',
    text: '小勇士，揭开百数表的秘密，成为数字侦探！',
    duration: 2500,
  },
];

/**
 * 关卡 3-3 剧情：数的顺序和比较大小
 */
const level3_3Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '咚咚——地面传来重击的声音！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '小勇士！重力金刚的重力装置出故障了！比较数字大小可以修复它！',
    duration: 4000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '重力金刚',
    speakerImage: getAssetPath(getAssetPath('/assets/character/zhongli-jingang.png')),
    text: '咚！我是重力金刚！45和54谁大？先比十位再比个位，帮我修复重力装置！',
    duration: 4000,
  },
  {
    id: '4',
    type: 'narration',
    text: '小勇士，比较大小修复重力装置！',
    duration: 2500,
  },
];

/**
 * 关卡 3-4 剧情：数的组成综合练习 - 玄铁战神与超炫电光王
 */
const level3_4Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '玄铁战神的基地矗立在前方，能量护盾闪烁着耀眼的光芒！',
    duration: 2500,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '小勇士！玄铁战神的能量护盾太强了！普通攻击无法突破！',
    duration: 4000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '超炫电光王',
    speakerImage: getAssetPath(getAssetPath('/assets/character/chaoxuan-dianguangwang.png')),
    text: '小俊！用我的数位透视能力，你能看穿他的弱点！他的能量核心在数的组成上！',
    duration: 4000,
  },
  {
    id: '4',
    type: 'dialogue',
    speaker: '玄铁战神',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuantie-zhanshen.png')),
    text: '轰！即使你能看穿我，也需要用100以内数的组成知识才能击败我！来吧！',
    duration: 4000,
  },
  {
    id: '5',
    type: 'narration',
    text: '超炫电光王的数位透视揭示了玄铁战神的弱点！准备战斗！',
    duration: 2500,
  },
];

/**
 * 关卡 4-1 剧情：整十数加减整十数 - 炫蓝闪电升级为炫蓝闪电S
 */
const level4_1Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '恭喜！炫蓝闪电成功闯过了前三单元的所有关卡！',
    duration: 3000,
  },
  {
    id: '2',
    type: 'narration',
    text: '一道耀眼的光芒闪过——炫蓝闪电正在进化！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电S',
    speakerImage: getAssetPath(getAssetPath('/assets/character/炫蓝闪电S.png')),
    text: '太棒了！我升级成功了！我现在是炫蓝闪电S！速度更快，力量更强！',
    duration: 4000,
  },
  {
    id: '4',
    type: 'dialogue',
    speaker: '炫蓝闪电S',
    speakerImage: getAssetPath(getAssetPath('/assets/character/炫蓝闪电S.png')),
    text: '第四单元是整十数加减法！比如30+40，只要十位相加：3+4=7，答案是70！',
    duration: 4000,
  },
  {
    id: '5',
    type: 'narration',
    text: '炫蓝闪电S获得新武器——炫光闪电枪！准备战斗！',
    duration: 3000,
  },
];

/**
 * 关卡 4-2 剧情：两位数加减整十数
 */
const level4_2Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '轰——一声巨响，火焰喷出！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '小勇士！焰龙战神发现头部故障！用两位数加减整十数帮他修复！',
    duration: 4000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '焰龙战神',
    speakerImage: getAssetPath(getAssetPath('/assets/character/yanlong-zhanshen.png')),
    text: '轰！我是焰龙战神！35+20等于几？十位相加，个位不变！帮我修复头部！',
    duration: 4000,
  },
  {
    id: '4',
    type: 'narration',
    text: '小勇士，帮助焰龙战神修复故障！',
    duration: 2500,
  },
];

/**
 * 关卡 4-3 剧情：两位数加减一位数
 */
const level4_3Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '嗖——一道黑影闪过！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '小勇士！霹雳火影在训练室设下考验！两位数加减一位数，个位相加减十位不变！',
    duration: 4000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '霹雳火影',
    speakerImage: getAssetPath(getAssetPath('/assets/character/pili-huoying.png')),
    text: '嗖！我是霹雳火影！23+5等于几？个位相加，十位不变！细心才能赢！',
    duration: 4000,
  },
  {
    id: '4',
    type: 'narration',
    text: '小勇士，接受霹雳火影的训练考验！',
    duration: 2500,
  },
];

/**
 * 关卡 5-1 剧情：两位数加两位数（不进位）
 */
const level5_1Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '呼——一阵风从天空中吹过！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '小勇士！猎空悍将在天空基地等你！他想教你用竖式计算两位数加两位数！',
    duration: 4000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '猎空悍将',
    speakerImage: getAssetPath(getAssetPath('/assets/character/liekong-hanjiang.png')),
    text: '呼！我是猎空悍将！用竖式计算：个位加个位，十位加十位，对齐很重要！',
    duration: 4000,
  },
  {
    id: '4',
    type: 'narration',
    text: '小勇士，学习竖式计算，通过猎空悍将的考验！',
    duration: 2500,
  },
];

/**
 * 关卡 5-2 剧情：两位数减两位数（不退位）
 */
const level5_2Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '咚——一声重响！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '小勇士！钢臂力士在重装基地等你！用竖式计算两位数减两位数！',
    duration: 4000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '钢臂力士',
    speakerImage: getAssetPath(getAssetPath('/assets/character/gangbi-lishi.png')),
    text: '咚！我是钢臂力士！用竖式计算：个位减个位，十位减十位，从个位算起！',
    duration: 4000,
  },
  {
    id: '4',
    type: 'narration',
    text: '小勇士，学习减法竖式，通过钢臂力士的考验！',
    duration: 2500,
  },
];

/**
 * 关卡 6 剧情：星际游侠的终极挑战
 */
const level6Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '警报！警报！星际游侠在宇宙中设下了终极挑战！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '小勇士，星际游侠是炫卡世界最强的守护者！他在星际穿梭中融合了数量关系的所有秘密，只有通过全部考验才能获得他的认可！',
    duration: 5000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '星际游侠',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xingji-youxia-1.png')),
    text: '哈哈哈哈！想知道部分和整体的关系吗？第一组用了45个能量，第二组用了23个，第三组用了30个，总共用了多少？这就是数量间的加减关系！',
    duration: 5500,
  },
  {
    id: '4',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '别怕！用你学到的所有知识：破十法、数的组成、加减计算...相信自己，你一定能战胜星际游侠！',
    duration: 4500,
  },
  {
    id: '5',
    type: 'narration',
    text: '全力以赴，战胜终极BOSS，成为真正的炫卡斗士！',
    duration: 2500,
  },
];

/**
 * 关卡 7-1 剧情：认识人民币
 */
const level7_1Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '叮当——硬币响起了悦耳的声音！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '小勇士！爆旋洛克在市场等你！他想教你认识人民币！',
    duration: 4000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '爆旋洛克',
    speakerImage: getAssetPath(getAssetPath('/assets/character/baoxuan-luoke.png')),
    text: '叮！我是爆旋洛克！人民币的单位有元、角、分！1元=10角，1角=10分！学会了吗？',
    duration: 4000,
  },
  {
    id: '4',
    type: 'narration',
    text: '小勇士，学习人民币，成为理财小能手！',
    duration: 2500,
  },
];

/**
 * 关卡 7-2 剧情：简单购物计算
 */
const level7_2Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '热闹的购物街开门啦！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '小勇士！深海霸王在购物街等你！用人民币知识帮他购物！',
    duration: 4000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '深海霸王',
    speakerImage: getAssetPath(getAssetPath('/assets/character/shenhai-bawang.png')),
    text: '咕噜！我是深海霸王！帮我算算：这个玩具5元，我有10元，能找回多少？',
    duration: 4000,
  },
  {
    id: '4',
    type: 'narration',
    text: '小勇士，帮深海霸王算对钱，买对东西！',
    duration: 2500,
  },
];

/**
 * 关卡 8 剧情：找规律
 */
const level8Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '哗——天空中闪耀着银色光芒！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '小勇士！银翼骑士在规律世界等你！图形规律、数字规律、颜色规律……你能发现所有秘密吗？',
    duration: 4000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '银翼骑士',
    speakerImage: getAssetPath(getAssetPath('/assets/character/yinyi-qishi.png')),
    text: '哗！我是银翼骑士！看这个数列：2、4、6、8……下一个是什么？规律是每次加2！',
    duration: 4000,
  },
  {
    id: '4',
    type: 'narration',
    text: '小勇士，发现规律，破解银翼骑士的考验！',
    duration: 2500,
  },
];

/**
 * 关卡 9 剧情：期末综合练习
 */
const level9Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '重装赤魂王的宫殿笼罩在赤红火焰中，恐怖的威压让整个炫卡世界颤抖！',
    duration: 2500,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    text: '小勇士！重装赤魂王的力量太强了！普通炫卡斗士根本无法接近他！',
    duration: 4000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝雷霆王',
    speakerImage: getAssetPath(getAssetPath('/assets/character/xuanlan-leitingwang.png')),
    text: '小俊！用我的终极雷霆之力，能够突破他的赤魂护盾！我已经准备好了！',
    duration: 4000,
  },
  {
    id: '4',
    type: 'dialogue',
    speaker: '重装赤魂王',
    speakerImage: getAssetPath(getAssetPath('/assets/character/zhongzhuang-chihunwang.png')),
    text: '轰！炫蓝雷霆王？有趣！但想击败我，你需要用本学期所有的知识！图形、加减、人民币、规律……证明你的实力！',
    duration: 5000,
  },
  {
    id: '5',
    type: 'narration',
    text: '炫蓝雷霆王的雷霆之力与你的智慧结合，准备迎接终极挑战！',
    duration: 2500,
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
    description: '巨力风暴在森林深处布下了图形迷宫！圆形、三角形、正方形、长方形……你能认出它们，收集炫卡吗？',
    thumbnail: getAssetPath(getAssetPath('/assets/character/juli-fengbao.png')),
    status: 'available',
    guardian: getCharacterById('juli-fengbao') || characters[0],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
    description: '急救卫士的救护车需要修理！用圆形做轮子、正方形做窗户……你能拼出完整的救护车吗？',
    thumbnail: getAssetPath(getAssetPath('/assets/character/jiushi-weishi.png')),
    status: 'locked',
    guardian: getCharacterById('baoche-jiushi') || characters[1],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
    description: '烈火修罗害怕火？用七巧板帮他克服恐惧！7块神奇的板，能拼出小鱼、小船、房子……你能拼出什么？',
    thumbnail: getAssetPath(getAssetPath('/assets/character/liehuo-xiuluo.png')),
    status: 'locked',
    guardian: getCharacterById('liehuo-xiuluo') || characters[2],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
    description: '暗影特工在暗处设下陷阱！用破十法破解他的密码，12-9、11-9……算出来才能通过！',
    thumbnail: getAssetPath(getAssetPath('/assets/character/anying-tegong.png')),
    status: 'locked',
    guardian: getCharacterById('anying-tegong') || characters[3],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
    description: '铁臂爵士在地下设下钻探考验！用破十法破解更多算式，帮他找到前行的方向！',
    thumbnail: getAssetPath(getAssetPath('/assets/character/tiebi-jueshi.png')),
    status: 'locked',
    guardian: getCharacterById('tiebi-jueshi') || characters[4],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
    description: '喷射加仑发起连击挑战！30秒内快速计算，考验你的速度和准确率！敢来应战吗？',
    thumbnail: getAssetPath(getAssetPath('/assets/character/penshi-jialun.png')),
    status: 'locked',
    guardian: getCharacterById('penshi-jialun') || characters[5],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
    description: '裂变骑士设下终极减法考验！20以内退位减法大综合，证明你实力的时候到了！',
    thumbnail: getAssetPath(getAssetPath('/assets/character/liebian-qishi.png')),
    status: 'locked',
    guardian: getCharacterById('liebian-qishi') || characters[6],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
    description: '暴烈重卡带你进入100以内的数字世界！6个十和3个一等于多少？揭开数的组成秘密！',
    thumbnail: getAssetPath(getAssetPath('/assets/character/baolie-zhongka.png')),
    status: 'locked',
    guardian: getCharacterById('baolie-zhongka') || characters[7],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
    description: '深海天锚的百数表藏着神秘规律！每一行多1、每一列多10……你能发现所有秘密吗？',
    thumbnail: getAssetPath(getAssetPath('/assets/character/shenhai-tianmao.png')),
    status: 'locked',
    guardian: getCharacterById('shenhai-tianmao') || characters[8],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
    description: '重力金刚的重力装置出故障了！比较数字大小来修复它，45和54谁大？快来帮忙！',
    thumbnail: getAssetPath(getAssetPath('/assets/character/zhongli-jingang.png')),
    status: 'locked',
    guardian: getCharacterById('zhongli-jingang') || characters[9],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
    description: '玄铁战神的能量护盾坚不可摧！只有超炫电光王的数位透视能力才能看穿他的弱点！用数的组成知识击败他！',
    thumbnail: getAssetPath(getAssetPath('/assets/character/xuantie-zhanshen.png')),
    status: 'locked',
    requiredHiddenLevel: 'H1', // 需要先完成H1隐藏关卡
    guardian: getCharacterById('xuantie-zhanshen') || characters[10],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
    description: '炫蓝闪电S在警车基地等你！整十数加减法，30+40等于几？算对了才能通过考验！',
    thumbnail: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
    status: 'locked',
    guardian: getCharacterById('xuanlan-shandian-s') || characters[11],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
    description: '焰龙战神发现头部故障！用两位数加减整十数帮他修复，35+20等于几？',
    thumbnail: getAssetPath(getAssetPath('/assets/character/yanlong-zhanshen-1.png')),
    status: 'locked',
    guardian: getCharacterById('yanlong-zhanshen') || characters[12],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
    description: '霹雳火影在训练室设下考验！两位数加减一位数，个位相加减十位不变，细心才能赢！',
    thumbnail: getAssetPath(getAssetPath('/assets/character/pili-huoying.png')),
    status: 'locked',
    guardian: getCharacterById('pili-huoying') || characters[13],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
    description: '猎空悍将在天空基地发起竖式加法挑战！个位加个位、十位加十位，对齐才能算对！',
    thumbnail: getAssetPath(getAssetPath('/assets/character/liekong-hanjiang.png')),
    status: 'locked',
    guardian: getCharacterById('liekong-hanjiang') || characters[14],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
    description: '钢臂力士在工地等你！竖式减法大挑战，个位减个位、十位减十位，从个位算起！',
    thumbnail: getAssetPath(getAssetPath('/assets/character/gangbi-lishi.png')),
    status: 'locked',
    guardian: getCharacterById('gangbi-lishi') || characters[15],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
    description: '星际游侠亲自坐镇BOSS关！前面学的所有知识齐聚一堂，你能战胜他吗？',
    thumbnail: getAssetPath(getAssetPath('/assets/character/xingji-youxia-1.png')),
    status: 'locked',
    guardian: getCharacterById('xingji-youxia') || characters[16],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
    description: '爆旋洛克在欢乐购物街开了家银行！认识人民币，1元=10角、1角=10分，学会用钱做理财小能手！',
    thumbnail: getAssetPath(getAssetPath('/assets/character/baoxuan-luoke.png')),
    status: 'locked',
    guardian: getCharacterById('baoxuan-luoke') || characters[17],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
    description: '深海霸王的极速便利店开业啦！帮顾客算钱、找零，用人民币知识解决真实购物问题！',
    thumbnail: getAssetPath(getAssetPath('/assets/character/shenhai-bawang.png')),
    status: 'locked',
    guardian: getCharacterById('shenhai-bawang') || characters[18],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
    description: '银翼骑士的规律世界藏着神秘密码！图形规律、数字规律……找出规律就能破解密码！',
    thumbnail: getAssetPath(getAssetPath('/assets/character/yinyi-qishi.png')),
    status: 'locked',
    guardian: getCharacterById('yinyi-qishi') || characters[17],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
    description: '重装赤魂王的赤魂护盾无人能破！只有炫蓝雷霆王的终极雷霆之力才能与之抗衡！用本学期所有知识击败他！',
    thumbnail: getAssetPath(getAssetPath('/assets/character/zhongzhuang-chihunwang.png')),
    status: 'locked',
    requiredHiddenLevel: 'H2', // 需要先完成H2隐藏关卡
    guardian: getCharacterById('zhongzhang-chihunwang') || characters[18],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/xuanlan-shandian.png')),
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
