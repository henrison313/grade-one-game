#!/usr/bin/env node
/**
 * 根据 level-character-mapping-v2.md 批量修改关卡故事
 */

import { readFileSync, writeFileSync } from 'fs';

const filePath = './src/data/levels.data.ts';
let content = readFileSync(filePath, 'utf-8');

// 根据 v2 映射表的故事修改
const levelStories = {
  '2-1': {
    story: `const level2_1Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '暗影特工在暗处设下了数学陷阱！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '暗影特工',
    speakerImage: '/图片素材/暗影特工.png',
    text: '想通过我的关卡？用破十法来破解吧！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '用数学知识帮助暗影特工解开谜题！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '暗影特工被你的智慧折服，加入了队伍！',
    duration: 2000,
  },
];`,
  },
  '2-2': {
    story: `const level2_2Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '铁臂爵士在地下设下了钻探考验！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '铁臂爵士',
    speakerImage: '/图片素材/铁臂爵士.png',
    text: '用破十法破解更多算式，帮我找到前行的方向！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '继续挑战，越练越熟练！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '铁臂爵士的钻探机重新启动，继续向前！',
    duration: 2000,
  },
];`,
  },
  '2-3': {
    story: `const level2_3Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '喷射加仑发起了连击挑战！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '喷射加仑',
    speakerImage: '/图片素材/喷射加仑.png',
    text: '30秒内快速计算，考验你的速度和准确率！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '快速又准确，你是最棒的！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '喷射加仑的认可，让你更有信心！',
    duration: 2000,
  },
];`,
  },
  '2-4': {
    story: `const level2_4Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '裂变骑士设下了终极减法考验！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '裂变骑士',
    speakerImage: '/图片素材/裂变骑士.png',
    text: '20以内退位减法大综合，证明你实力的时候到了！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '你是最棒的，相信自己！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '裂变骑士被你的实力折服，加入了队伍！',
    duration: 2000,
  },
];`,
  },
  '3-1': {
    story: `const level3_1Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '暴烈重卡带你进入100以内的数字世界！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '暴烈重卡',
    speakerImage: '/图片素材/暴烈重卡.png',
    text: '6个十和3个一等于多少？揭开数的组成秘密！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '数的组成很简单，加油！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '暴烈重卡的认可，让你更有信心！',
    duration: 2000,
  },
];`,
  },
  '3-2': {
    story: `const level3_2Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '深海天锚的百数表藏着神秘规律！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '深海天锚',
    speakerImage: '/图片素材/深海天锚.png',
    text: '每一行多1、每一列多10……你能发现所有秘密吗？',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '发现规律真棒！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '深海天锚的百数表被你破解！',
    duration: 2000,
  },
];`,
  },
  '3-3': {
    story: `const level3_3Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '重力金刚的重力装置出故障了！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '重力金刚',
    speakerImage: '/图片素材/重力金刚.png',
    text: '比较数字大小来修复它，45和54谁大？快来帮忙！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '你是比较大小的高手！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '重力金刚的重力装置被你修复！',
    duration: 2000,
  },
];`,
  },
  '3-4': {
    story: `const level3_4Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '玄铁战神的重型能量炮需要充能！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '玄铁战神',
    speakerImage: '/图片素材/玄铁战神.png',
    text: '用数的组成知识完成综合挑战，能量满格才能出发！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '胜利就在前方！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '玄铁战神的重型能量炮充能完成！',
    duration: 2000,
  },
];`,
  },
  '4-1': {
    story: `const level4_1Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '炫蓝闪电S在警车基地等你！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电S',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '整十数加减法，30+40等于几？算对了才能通过考验！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '整十数加减很简单！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '炫蓝闪电S的考验通过！',
    duration: 2000,
  },
];`,
  },
  '4-2': {
    story: `const level4_2Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '焰龙战神发现头部故障！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '焰龙战神',
    speakerImage: '/图片素材/焰龙战神 1.png',
    text: '用两位数加减整十数帮我修复，35+20等于几？',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '越算越快！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '焰龙战神的头部故障被你修复！',
    duration: 2000,
  },
];`,
  },
  '4-3': {
    story: `const level4_3Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '霹雳火影在训练室设下考验！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '霹雳火影',
    speakerImage: '/图片素材/霹雳火影.jpg',
    text: '两位数加减一位数，个位相加减十位不变，细心才能赢！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '细心计算！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '霹雳火影的考验通过！',
    duration: 2000,
  },
];`,
  },
  '5-1': {
    story: `const level5_1Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '猎空悍将在天空基地发起竖式加法挑战！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '猎空悍将',
    speakerImage: '/图片素材/猎空悍将.png',
    text: '个位加个位、十位加十位，对齐才能算对！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '竖式计算很简单！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '猎空悍将的竖式加法挑战通过！',
    duration: 2000,
  },
];`,
  },
  '5-2': {
    story: `const level5_2Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '钢臂力士在工地等你！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '钢臂力士',
    speakerImage: '/图片素材/钢臂力士.png',
    text: '竖式减法大挑战，个位减个位、十位减十位，从个位算起！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '仔细计算！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '钢臂力士的竖式减法挑战通过！',
    duration: 2000,
  },
];`,
  },
  '6': {
    story: `const level6Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '星际游侠亲自坐镇BOSS关！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '星际游侠',
    speakerImage: '/图片素材/星际游侠 1.png',
    text: '前面学的所有知识齐聚一堂，你能战胜他吗？',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '相信你一定能成功！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '全力以赴，战胜 BOSS！',
    duration: 2000,
  },
];`,
  },
  '7-1': {
    story: `const level7_1Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '爆旋洛克在欢乐购物街开了家银行！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '爆旋洛克',
    speakerImage: '/图片素材/爆旋洛克.png',
    text: '认识人民币，1元=10角、1角=10分，学会用钱做理财小能手！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '学会用钱！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '爆旋洛克的银行考验通过！',
    duration: 2000,
  },
];`,
  },
  '7-2': {
    story: `const level7_2Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '深海霸王的极速便利店开业啦！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '深海霸王',
    speakerImage: '/图片素材/深海霸王.png',
    text: '帮顾客算钱、找零，用人民币知识解决真实购物问题！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '算对钱，买对东西！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '深海霸王的便利店考验通过！',
    duration: 2000,
  },
];`,
  },
  '8': {
    story: `const level8Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '银翼骑士的规律世界藏着神秘密码！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '银翼骑士',
    speakerImage: '/图片素材/银翼骑士.png',
    text: '图形规律、数字规律……找出规律就能破解密码！',
    duration: 2500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '发现规律，享受发现的乐趣！',
    duration: 2500,
  },
  {
    id: '4',
    type: 'narration',
    text: '银翼骑士的规律密码被你破解！',
    duration: 2000,
  },
];`,
  },
  '9': {
    story: `const level9Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '重装赤魂王设下期末终极挑战！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '重装赤魂王',
    speakerImage: '/图片素材/重装赤魂王 1.png',
    text: '本学期所有知识点大集合，图形、计算、人民币……你能全部通关吗？',
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
];`,
  },
};

const lines = content.split('\n');
let currentLevel = '';
let modified = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // 检测关卡ID
  const idMatch = line.match(/id:\s*'([^']+)'/);
  if (idMatch) {
    currentLevel = idMatch[1];
  }
  
  // 替换 story
  if (line.includes('story:') && levelStories[currentLevel]) {
    const story = levelStories[currentLevel].story;
    // 找到 story 的起始行
    const storyStart = i;
    // 找到 story 的结束行（下一个关卡或文件结束）
    let storyEnd = i + 1;
    while (storyEnd < lines.length && !lines[storyEnd].includes('story:') && !lines[storyEnd].includes('id:')) {
      storyEnd++;
    }
    
    // 替换 story
    const newLines = story.split('\n');
    lines.splice(storyStart, storyEnd - storyStart, ...newLines);
    modified = true;
    console.log(`✅ ${currentLevel}: story 已更新`);
    
    // 更新索引
    i = storyStart + newLines.length - 1;
  }
}

if (modified) {
  writeFileSync(filePath, lines.join('\n'), 'utf-8');
  console.log('\n✅ 修改完成！');
} else {
  console.log('\n❌ 没有修改任何内容');
}
