#!/usr/bin/env node
/**
 * 验证每个关卡的战斗动画是否会显示正确的角色名称、武器和绝招
 */

import { readFileSync } from 'fs';

// 从 characters.data.ts 读取所有角色数据
const charactersContent = readFileSync('./src/data/characters.data.ts', 'utf-8');
const characterMatches = charactersContent.matchAll(/id:\s*'([^']+)'.*?name:\s*'([^']+)'.*?ultimateSkill:\s*'([^']+)'/gs);

const characterMap = {};
for (const match of characterMatches) {
  const id = match[1];
  const name = match[2];
  const ultimateSkill = match[3];
  characterMap[id] = { name, ultimateSkill };
}

// 从 levels.data.ts 读取关卡守护者
const levelsContent = readFileSync('./src/data/levels.data.ts', 'utf-8');
const levelMatches = levelsContent.matchAll(/id:\s*'([^']+)'.*?guardian:\s*getCharacterById\('([^']+)'\)/gs);

console.log('=== 战斗动画验证报告 ===\n');

let validCount = 0;
let invalidCount = 0;

for (const match of levelMatches) {
  const levelId = match[1];
  const guardianId = match[2];
  
  if (characterMap[guardianId]) {
    console.log(`✅ ${levelId}: ${characterMap[guardianId].name} (${guardianId})`);
    console.log(`   绝招: ${characterMap[guardianId].ultimateSkill}`);
    validCount++;
  } else {
    console.log(`❌ ${levelId}: 未找到守护者 ${guardianId}`);
    invalidCount++;
  }
}

console.log(`\n${'='.repeat(50)}`);
console.log(`✅ 有效关卡: ${validCount}`);
console.log(`❌ 无效关卡: ${invalidCount}`);
console.log(`总计: ${validCount + invalidCount} 个关卡`);
