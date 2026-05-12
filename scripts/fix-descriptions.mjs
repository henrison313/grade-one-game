#!/usr/bin/env node
/**
 * 根据 level-character-mapping-v2.md 批量修改关卡描述和故事
 */

import { readFileSync, writeFileSync } from 'fs';

const filePath = './src/data/levels.data.ts';
let content = readFileSync(filePath, 'utf-8');

// 根据 v2 映射表的描述和故事修改
const levelDescriptions = {
  '2-1': {
    desc: '暗影特工在暗处设下陷阱！用破十法破解他的密码，12-9、11-9……算出来才能通过！',
    thumbnail: '/图片素材/暗影特工.png',
    greeting: '欢迎来到暗影世界！',
    encouragement: '暗影特工，无所畏惧！',
  },
  '2-2': {
    desc: '铁臂爵士在地下设下钻探考验！用破十法破解更多算式，帮他找到前行的方向！',
    thumbnail: '/图片素材/铁臂爵士.png',
    greeting: '继续挑战！',
    encouragement: '越练越熟练！',
  },
  '2-3': {
    desc: '喷射加仑发起连击挑战！30秒内快速计算，考验你的速度和准确率！敢来应战吗？',
    thumbnail: '/图片素材/喷射加仑.png',
    greeting: '连击挑战来了！',
    encouragement: '快速又准确！',
  },
  '2-4': {
    desc: '裂变骑士设下终极减法考验！20以内退位减法大综合，证明你实力的时候到了！',
    thumbnail: '/图片素材/裂变骑士.png',
    greeting: '证明你的实力！',
    encouragement: '你是最棒的！',
  },
  '3-1': {
    desc: '暴烈重卡带你进入100以内的数字世界！6个十和3个一等于多少？揭开数的组成秘密！',
    thumbnail: '/图片素材/暴烈重卡.png',
    greeting: '欢迎来到第三单元！',
    encouragement: '数的组成很简单！',
  },
  '3-2': {
    desc: '深海天锚的百数表藏着神秘规律！每一行多1、每一列多10……你能发现所有秘密吗？',
    thumbnail: '/图片素材/深海天锚.png',
    greeting: '探索百数表的奥秘！',
    encouragement: '发现规律真棒！',
  },
  '3-3': {
    desc: '重力金刚的重力装置出故障了！比较数字大小来修复它，45和54谁大？快来帮忙！',
    thumbnail: '/图片素材/重力金刚.png',
    greeting: '学习比较数的大小！',
    encouragement: '你是比较大小的高手！',
  },
  '3-4': {
    desc: '玄铁战神的重型能量炮需要充能！用数的组成知识完成综合挑战，能量满格才能出发！',
    thumbnail: '/图片素材/玄铁战神.png',
    greeting: '数的组成综合挑战！',
    encouragement: '胜利就在前方！',
  },
  '4-1': {
    desc: '炫蓝闪电S在警车基地等你！整十数加减法，30+40等于几？算对了才能通过考验！',
    thumbnail: '/图片素材/炫蓝闪电 1.png',
    greeting: '欢迎来到第四单元！',
    encouragement: '整十数加减很简单！',
  },
  '4-2': {
    desc: '焰龙战神发现头部故障！用两位数加减整十数帮他修复，35+20等于几？',
    thumbnail: '/图片素材/焰龙战神 1.png',
    greeting: '学习两位数加减整十数！',
    encouragement: '越算越快！',
  },
  '4-3': {
    desc: '霹雳火影在训练室设下考验！两位数加减一位数，个位相加减十位不变，细心才能赢！',
    thumbnail: '/图片素材/霹雳火影.jpg',
    greeting: '学习两位数加减一位数！',
    encouragement: '细心计算！',
  },
  '5-1': {
    desc: '猎空悍将在天空基地发起竖式加法挑战！个位加个位、十位加十位，对齐才能算对！',
    thumbnail: '/图片素材/猎空悍将.png',
    greeting: '欢迎来到第五单元！',
    encouragement: '竖式计算很简单！',
  },
  '5-2': {
    desc: '钢臂力士在工地等你！竖式减法大挑战，个位减个位、十位减十位，从个位算起！',
    thumbnail: '/图片素材/钢臂力士.png',
    greeting: '学习两位数减两位数的竖式计算！',
    encouragement: '仔细计算！',
  },
  '6': {
    desc: '星际游侠亲自坐镇BOSS关！前面学的所有知识齐聚一堂，你能战胜他吗？',
    thumbnail: '/图片素材/星际游侠 1.png',
    greeting: 'BOSS 关挑战来了！',
    encouragement: '相信你一定能成功！',
  },
  '7-1': {
    desc: '爆旋洛克在欢乐购物街开了家银行！认识人民币，1元=10角、1角=10分，学会用钱做理财小能手！',
    thumbnail: '/图片素材/爆旋洛克.png',
    greeting: '欢迎来到第七单元！',
    encouragement: '学会用钱！',
  },
  '7-2': {
    desc: '深海霸王的极速便利店开业啦！帮顾客算钱、找零，用人民币知识解决真实购物问题！',
    thumbnail: '/图片素材/深海霸王.png',
    greeting: '小小购物街开业啦！',
    encouragement: '算对钱，买对东西！',
  },
  '8': {
    desc: '银翼骑士的规律世界藏着神秘密码！图形规律、数字规律……找出规律就能破解密码！',
    thumbnail: '/图片素材/银翼骑士.png',
    greeting: '欢迎来到规律的世界！',
    encouragement: '发现规律，享受发现的乐趣！',
  },
  '9': {
    desc: '重装赤魂王设下期末终极挑战！本学期所有知识点大集合，图形、计算、人民币……你能全部通关吗？',
    thumbnail: '/图片素材/重装赤魂王 1.png',
    greeting: '期末综合大挑战！',
    encouragement: '相信自己，你能行的！',
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
  
  // 替换 description
  if (line.includes('description:') && levelDescriptions[currentLevel]) {
    const desc = levelDescriptions[currentLevel].desc;
    lines[i] = lines[i].replace(/description:\s*'[^']+'/, `description: '${desc}'`);
    modified = true;
    console.log(`✅ ${currentLevel}: description 已更新`);
  }
  
  // 替换 thumbnail
  if (line.includes('thumbnail:') && levelDescriptions[currentLevel]) {
    const thumbnail = levelDescriptions[currentLevel].thumbnail;
    lines[i] = lines[i].replace(/thumbnail:\s*'[^']+'/, `thumbnail: '${thumbnail}'`);
    modified = true;
    console.log(`✅ ${currentLevel}: thumbnail 已更新`);
  }
  
  // 替换 mentor greeting
  if (line.includes('greeting:') && levelDescriptions[currentLevel]) {
    const greeting = levelDescriptions[currentLevel].greeting;
    lines[i] = lines[i].replace(/greeting:\s*'[^']+'/, `greeting: '${greeting}'`);
    modified = true;
    console.log(`✅ ${currentLevel}: greeting 已更新`);
  }
  
  // 替换 mentor encouragement
  if (line.includes('encouragement:') && levelDescriptions[currentLevel]) {
    const encouragement = levelDescriptions[currentLevel].encouragement;
    lines[i] = lines[i].replace(/encouragement:\s*'[^']+'/, `encouragement: '${encouragement}'`);
    modified = true;
    console.log(`✅ ${currentLevel}: encouragement 已更新`);
  }
}

if (modified) {
  writeFileSync(filePath, lines.join('\n'), 'utf-8');
  console.log('\n✅ 修改完成！');
} else {
  console.log('\n❌ 没有修改任何内容');
}
