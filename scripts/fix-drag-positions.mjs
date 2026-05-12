#!/usr/bin/env node
/**
 * 批量修复所有拖拽题的 target position 和 accepts 字段
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const levelsDir = './src/data/levels';

const files = readdirSync(levelsDir).filter(f => f.endsWith('-enhanced.data.ts'));

// Position layouts for different target counts (centered in 800x400 container)
const layouts = {
  2: [
    { x: 120, y: 120, w: 200, h: 160 },
    { x: 420, y: 120, w: 200, h: 160 },
  ],
  3: [
    { x: 100, y: 30, w: 180, h: 150 },
    { x: 310, y: 30, w: 180, h: 150 },
    { x: 205, y: 210, w: 180, h: 150 },
  ],
  4: [
    { x: 80, y: 30, w: 170, h: 150 },
    { x: 330, y: 30, w: 170, h: 150 },
    { x: 80, y: 210, w: 170, h: 150 },
    { x: 330, y: 210, w: 170, h: 150 },
  ],
  5: [
    { x: 60, y: 20, w: 150, h: 130 },
    { x: 240, y: 20, w: 150, h: 130 },
    { x: 420, y: 20, w: 150, h: 130 },
    { x: 150, y: 180, w: 150, h: 130 },
    { x: 330, y: 180, w: 150, h: 130 },
  ],
  6: [
    { x: 40, y: 20, w: 130, h: 120 },
    { x: 200, y: 20, w: 130, h: 120 },
    { x: 360, y: 20, w: 130, h: 120 },
    { x: 40, y: 170, w: 130, h: 120 },
    { x: 200, y: 170, w: 130, h: 120 },
    { x: 360, y: 170, w: 130, h: 120 },
  ],
  7: [
    { x: 30, y: 15, w: 110, h: 100 },
    { x: 170, y: 15, w: 110, h: 100 },
    { x: 310, y: 15, w: 110, h: 100 },
    { x: 450, y: 15, w: 110, h: 100 },
    { x: 100, y: 140, w: 110, h: 100 },
    { x: 240, y: 140, w: 110, h: 100 },
    { x: 380, y: 140, w: 110, h: 100 },
  ],
};

let totalFixed = 0;

for (const file of files) {
  let content = readFileSync(join(levelsDir, file), 'utf-8');
  
  // Find all drag question target blocks
  const dragRegex = /type:\s*'drag'\s*as\s*QuestionType\.DRAG[\s\S]*?targets:\s*\[([\s\S]*?)\],\s*explanation:/g;
  
  let match;
  let modified = false;
  
  while ((match = dragRegex.exec(content)) !== null) {
    const targetsBlock = match[1];
    const targetLines = targetsBlock.split('\n').filter(l => l.includes('position:'));
    
    // Check if all positions are { x: 0, y: 0 }
    const allZero = targetLines.every(l => l.includes('x: 0') && l.includes('y: 0'));
    
    if (allZero && targetLines.length > 0) {
      const layout = layouts[targetLines.length];
      if (layout) {
        // Extract target info
        const targetRegex = /\{ id:\s*'([^']+)', name:\s*'([^']+)', accepts:\s*\[([^\]]+)\], position:\s*\{ x:\s*\d+, y:\s*\d+ \}, size:\s*\{ width:\s*\d+, height:\s*\d+ \} \}/g;
        let tMatch;
        let newTargets = [];
        let idx = 0;
        
        while ((tMatch = targetRegex.exec(targetsBlock)) !== null) {
          const pos = layout[idx];
          const newTarget = `      { id: '${tMatch[1]}', name: '${tMatch[2]}', accepts: ['${tMatch[1]}'], position: { x: ${pos.x}, y: ${pos.y} }, size: { width: ${pos.w}, height: ${pos.h} } },`;
          newTargets.push(newTarget);
          totalFixed++;
          idx++;
        }
        
        // Replace in content
        const newBlock = '\n' + newTargets.join('\n') + '\n    ';
        content = content.replace(targetsBlock, newBlock);
        modified = true;
        
        console.log(`✅ ${file} - 修复 ${targetLines.length} 个 target`);
      }
    }
  }
  
  if (modified) {
    writeFileSync(join(levelsDir, file), content, 'utf-8');
  }
}

console.log(`\n${'='.repeat(60)}`);
console.log(`共修复 ${totalFixed} 个 target`);
