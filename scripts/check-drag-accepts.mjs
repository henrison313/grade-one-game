#!/usr/bin/env node
/**
 * 检查所有拖拽题的 accepts 字段是否与 item id 匹配
 */

import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const levelsDir = './src/data/levels';

const files = readdirSync(levelsDir).filter(f => f.endsWith('-enhanced.data.ts'));

let totalIssues = 0;

for (const file of files) {
  const content = readFileSync(join(levelsDir, file), 'utf-8');
  const lines = content.split('\n');
  
  let inDragQuestion = false;
  let inItems = false;
  let inTargets = false;
  let itemIds = [];
  let targets = [];
  let dragLine = 0;
  let questionText = '';
  let braceDepth = 0;
  let questionStart = -1;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes("type: 'drag'") || line.includes("type: 'drag'")) {
      inDragQuestion = true;
      inItems = false;
      inTargets = false;
      itemIds = [];
      targets = [];
      dragLine = i + 1;
      braceDepth = 0;
      questionStart = i;
      
      // Look back for question text
      for (let j = i; j >= Math.max(0, i - 10); j--) {
        if (lines[j].includes('question:')) {
          const match = lines[j].match(/question:\s*'([^']+)'/);
          if (match) questionText = match[1];
          break;
        }
      }
    }
    
    if (inDragQuestion) {
      if (line.includes('items: [')) {
        inItems = true;
      }
      
      if (inItems) {
        const itemMatch = line.match(/\{ id:\s*'([^']+)'/);
        if (itemMatch) {
          itemIds.push(itemMatch[1]);
        }
        if (line.includes('],')) {
          inItems = false;
        }
      }
      
      if (line.includes('targets: [')) {
        inTargets = true;
      }
      
      if (inTargets) {
        const targetMatch = line.match(/\{ id:\s*'([^']+)', name:\s*'([^']+)', accepts:\s*\[([^\]]+)\]/);
        if (targetMatch) {
          const acceptsList = targetMatch[3].trim().replace(/'/g, '').split(',').map(s => s.trim());
          targets.push({
            id: targetMatch[1],
            name: targetMatch[2],
            accepts: acceptsList,
            line: i + 1,
          });
        }
        
        if (line.includes('],') && targets.length > 0) {
          inTargets = false;
          inDragQuestion = false;
          
          // Check if all accepts match item IDs
          const issues = [];
          for (const target of targets) {
            for (const accept of target.accepts) {
              if (!itemIds.includes(accept)) {
                issues.push(`  target "${target.name}" (line ${target.line}): accepts ['${accept}'] 但 item ids 是 [${itemIds.join(', ')}]`);
              }
            }
          }
          
          if (issues.length > 0) {
            console.log(`❌ ${file}:${dragLine} - "${questionText}"`);
            console.log(`  Item IDs: [${itemIds.join(', ')}]`);
            issues.forEach(i => console.log(i));
            totalIssues++;
          }
          
          itemIds = [];
          targets = [];
        }
      }
    }
  }
}

console.log(`\n${'='.repeat(60)}`);
if (totalIssues > 0) {
  console.log(`发现 ${totalIssues} 个问题拖拽题`);
} else {
  console.log('✅ 所有拖拽题的 accepts 都正确匹配 item IDs');
}
