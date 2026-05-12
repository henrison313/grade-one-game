#!/usr/bin/env node
/**
 * 根据 level-character-mapping-v2.md 批量修改关卡 guardian
 */

import { readFileSync, writeFileSync } from 'fs';

const filePath = './src/data/levels.data.ts';
let content = readFileSync(filePath, 'utf-8');

// 根据 v2 映射表的修改
const replacements = [
  // 2-1: 暗影特工
  { old: "id: '2-1',", new: "id: '2-1'," },
  { old: "guardian: getCharacterById('baolie-zhongka')", new: "guardian: getCharacterById('anying-tegong')" },
  
  // 2-2: 铁臂爵士
  { old: "id: '2-2',", new: "id: '2-2'," },
  { old: "guardian: getCharacterById('shenhai-tianmao')", new: "guardian: getCharacterById('tiebi-jueshi')" },
  
  // 2-3: 喷射加仑
  { old: "id: '2-3',", new: "id: '2-3'," },
  { old: "guardian: getCharacterById('zhongli-jingang')", new: "guardian: getCharacterById('penshi-jialun')" },
  
  // 2-4: 裂变骑士
  { old: "id: '2-4',", new: "id: '2-4'," },
  { old: "guardian: getCharacterById('xuantie-zhanshen')", new: "guardian: getCharacterById('liebian-qishi')" },
  
  // 3-1: 暴烈重卡
  { old: "id: '3-1',", new: "id: '3-1'," },
  { old: "guardian: getCharacterById('xuanlan-shandian-s')", new: "guardian: getCharacterById('baolie-zhongka')" },
  
  // 3-2: 深海天锚
  { old: "id: '3-2',", new: "id: '3-2'," },
  { old: "guardian: getCharacterById('yanlong-zhanshen')", new: "guardian: getCharacterById('shenhai-tianmao')" },
  
  // 3-3: 重力金刚
  { old: "id: '3-3',", new: "id: '3-3'," },
  { old: "guardian: getCharacterById('pili-huoying')", new: "guardian: getCharacterById('zhongli-jingang')" },
  
  // 3-4: 玄铁战神
  { old: "id: '3-4',", new: "id: '3-4'," },
  { old: "guardian: getCharacterById('liekong-hanjiang')", new: "guardian: getCharacterById('xuantie-zhanshen')" },
  
  // 4-1: 炫蓝闪电S
  { old: "id: '4-1',", new: "id: '4-1'," },
  { old: "guardian: getCharacterById('gangbi-lishi')", new: "guardian: getCharacterById('xuanlan-shandian-s')" },
  
  // 4-2: 焰龙战神
  { old: "id: '4-2',", new: "id: '4-2'," },
  { old: "guardian: getCharacterById('xingji-youxia')", new: "guardian: getCharacterById('yanlong-zhanshen')" },
  
  // 4-3: 霹雳火影
  { old: "id: '4-3',", new: "id: '4-3'," },
  { old: "guardian: getCharacterById('baoxuan-luoke')", new: "guardian: getCharacterById('pili-huoying')" },
  
  // 5-1: 猎空悍将
  { old: "id: '5-1',", new: "id: '5-1'," },
  { old: "guardian: getCharacterById('shenhai-bawang')", new: "guardian: getCharacterById('liekong-hanjiang')" },
  
  // 5-2: 钢臂力士
  { old: "id: '5-2',", new: "id: '5-2'," },
  { old: "guardian: getCharacterById('yinyi-qishi')", new: "guardian: getCharacterById('gangbi-lishi')" },
  
  // 6: 星际游侠
  { old: "id: '6',", new: "id: '6'," },
  { old: "guardian: getCharacterById('zhongzhang-chihunwang')", new: "guardian: getCharacterById('xingji-youxia')" },
  
  // 7-1: 爆旋洛克
  { old: "id: '7-1',", new: "id: '7-1'," },
  { old: "guardian: getCharacterById('penshi-jialun')", new: "guardian: getCharacterById('baoxuan-luoke')" },
  
  // 7-2: 深海霸王
  { old: "id: '7-2',", new: "id: '7-2'," },
  { old: "guardian: getCharacterById('liebian-qishi')", new: "guardian: getCharacterById('shenhai-bawang')" },
  
  // 8: 银翼骑士
  { old: "id: '8',", new: "id: '8'," },
  { old: "guardian: getCharacterById('penshi-jialun')", new: "guardian: getCharacterById('yinyi-qishi')" },
  
  // 9: 重装赤魂王
  { old: "id: '9',", new: "id: '9'," },
  { old: "guardian: getCharacterById('tiebi-jueshi')", new: "guardian: getCharacterById('zhongzhang-chihunwang')" },
];

// 按关卡顺序替换（避免重复替换）
const lines = content.split('\n');
let currentLevel = '';
let modified = false;

const levelGuardianMap = {
  '2-1': 'anying-tegong',
  '2-2': 'tiebi-jueshi',
  '2-3': 'penshi-jialun',
  '2-4': 'liebian-qishi',
  '3-1': 'baolie-zhongka',
  '3-2': 'shenhai-tianmao',
  '3-3': 'zhongli-jingang',
  '3-4': 'xuantie-zhanshen',
  '4-1': 'xuanlan-shandian-s',
  '4-2': 'yanlong-zhanshen',
  '4-3': 'pili-huoying',
  '5-1': 'liekong-hanjiang',
  '5-2': 'gangbi-lishi',
  '6': 'xingji-youxia',
  '7-1': 'baoxuan-luoke',
  '7-2': 'shenhai-bawang',
  '8': 'yinyi-qishi',
  '9': 'zhongzhang-chihunwang',
};

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // 检测关卡ID
  const idMatch = line.match(/id:\s*'([^']+)'/);
  if (idMatch) {
    currentLevel = idMatch[1];
  }
  
  // 替换 guardian
  if (line.includes('guardian:') && levelGuardianMap[currentLevel]) {
    const newGuardian = levelGuardianMap[currentLevel];
    lines[i] = line.replace(/guardian:\s*getCharacterById\('[^']+'\)/, `guardian: getCharacterById('${newGuardian}')`);
    modified = true;
    console.log(`✅ ${currentLevel}: guardian 改为 ${newGuardian}`);
  }
}

if (modified) {
  writeFileSync(filePath, lines.join('\n'), 'utf-8');
  console.log('\n✅ 修改完成！');
} else {
  console.log('\n❌ 没有修改任何内容');
}
