#!/usr/bin/env node
/**
 * 验证关卡守护者映射是否与 level-character-mapping-v2.md 一致
 */

import { readFileSync } from 'fs';

const filePath = './src/data/levels.data.ts';
const content = readFileSync(filePath, 'utf-8');

// 根据 level-character-mapping-v2.md 的官方设定
const expectedMapping = {
  '1-1': 'juli-fengbao',
  '1-2': 'baoche-jiushi',
  '1-3': 'liehuo-xiuluo',
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

const lines = content.split('\n');
let currentLevel = '';
let issues = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // 检测关卡ID
  const idMatch = line.match(/id:\s*'([^']+)'/);
  if (idMatch && expectedMapping[idMatch[1]]) {
    currentLevel = idMatch[1];
  }
  
  // 检测 guardian
  if (line.includes('guardian:') && currentLevel && expectedMapping[currentLevel]) {
    const guardianMatch = line.match(/getCharacterById\('([^']+)'\)/);
    if (guardianMatch) {
      const actualGuardian = guardianMatch[1];
      const expectedGuardian = expectedMapping[currentLevel];
      
      if (actualGuardian !== expectedGuardian) {
        issues.push(`❌ ${currentLevel}: 期望 ${expectedGuardian}，实际 ${actualGuardian}`);
      } else {
        console.log(`✅ ${currentLevel}: ${actualGuardian}`);
      }
    }
  }
}

console.log('\n' + '='.repeat(60));
if (issues.length > 0) {
  console.log(`发现 ${issues.length} 个问题：`);
  issues.forEach(issue => console.log(issue));
} else {
  console.log('✅ 所有关卡守护者映射正确！');
}
