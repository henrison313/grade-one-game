#!/usr/bin/env node
/**
 * 检查所有拖拽题的 target position 是否都是 { x: 0, y: 0 }
 */

import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const levelsDir = './src/data/levels';

const files = readdirSync(levelsDir).filter(f => f.endsWith('-enhanced.data.ts'));

let totalIssues = 0;

for (const file of files) {
  const content = readFileSync(join(levelsDir, file), 'utf-8');
  const lines = content.split('\n');
  
  // Find all drag questions
  let inDragQuestion = false;
  let inTargets = false;
  let dragLine = 0;
  let targetCount = 0;
  let zeroPosCount = 0;
  let questionText = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes("type: 'drag'") || line.includes("type: 'drag'")) {
      inDragQuestion = true;
      dragLine = i + 1;
      targetCount = 0;
      zeroPosCount = 0;
      inTargets = false;
      
      // Look back for question text
      for (let j = i; j >= Math.max(0, i - 10); j--) {
        if (lines[j].includes('question:')) {
          const match = lines[j].match(/question:\s*'([^']+)'/);
          if (match) questionText = match[1];
          break;
        }
      }
    }
    
    if (inDragQuestion && line.includes('targets: [')) {
      inTargets = true;
    }
    
    if (inTargets && line.includes('position:')) {
      targetCount++;
      if (line.includes('x: 0') && line.includes('y: 0')) {
        zeroPosCount++;
      }
    }
    
    if (inTargets && line.includes('],') && line.includes('position') === false) {
      if (targetCount > 0 && zeroPosCount === targetCount) {
        console.log(`❌ ${file}:${dragLine} - "${questionText}"`);
        console.log(`   所有 ${targetCount} 个 target 的 position 都是 { x: 0, y: 0 }`);
        totalIssues++;
      } else if (targetCount > 0 && zeroPosCount > 0) {
        console.log(`⚠️  ${file}:${dragLine} - "${questionText}"`);
        console.log(`   ${zeroPosCount}/${targetCount} 个 target 的 position 是 { x: 0, y: 0 }`);
        totalIssues++;
      }
      inTargets = false;
      inDragQuestion = false;
    }
  }
}

console.log(`\n${'='.repeat(60)}`);
if (totalIssues > 0) {
  console.log(`发现 ${totalIssues} 个问题拖拽题`);
} else {
  console.log('✅ 所有拖拽题的 target position 都正常');
}
