/**
 * 查找1-1和1-2关卡中重复的题目
 */

import fs from 'fs';

const content11 = fs.readFileSync('/Users/Henrison/Desktop/grade-one-game/src/data/levels/level-1-1-enhanced.data.ts', 'utf-8');
const content12 = fs.readFileSync('/Users/Henrison/Desktop/grade-one-game/src/data/levels/level-1-2-enhanced.data.ts', 'utf-8');

// 提取每个档的题目列表
function extractQuestions(content, startMarker) {
  const startIndex = content.indexOf(startMarker);
  if (startIndex === -1) return [];
  
  // 找到下一个导出语句的索引
  const nextExport = content.indexOf('export const', startIndex + 1);
  const endIndex = nextExport === -1 ? content.length : nextExport;
  
  const questionsBlock = content.substring(startIndex, endIndex);
  
  // 提取所有题目
  const questions = [];
  let idx = questionsBlock.indexOf('// 第');
  let qNum = 1;
  while (idx !== -1) {
    const nextIdx = questionsBlock.indexOf('// 第', idx + 1);
    if (nextIdx === -1) {
      questions.push(questionsBlock.substring(idx));
    } else {
      questions.push(questionsBlock.substring(idx, nextIdx));
    }
    idx = nextIdx;
    qNum++;
  }
  return questions;
}

// 提取1-1的题目
const questions11 = {
  easy: extractQuestions(content11, 'export const level1_1EasyQuestions'),
  medium: extractQuestions(content11, 'export const level1_1MediumQuestions'),
  hard: extractQuestions(content11, 'export const level1_1HardQuestions'),
};

// 提取1-2的题目
const questions12 = {
  easy: extractQuestions(content12, 'export const level1_2EasyQuestions'),
  medium: extractQuestions(content12, 'export const level1_2MediumQuestions'),
  hard: extractQuestions(content12, 'export const level1_2HardQuestions'),
};

// 检查1-1和1-2的每个档是否有重复题目
console.log('=== 1-1 vs 1-2 题目重复检查 ===\n');

const diffs = ['easy', 'medium', 'hard'];
diffs.forEach(diff => {
  console.log(`${diff.toUpperCase()} 模式:`);
  
  const q11 = questions11[diff];
  const q12 = questions12[diff];
  
  console.log(`  1-1: ${q11.length} 题`);
  console.log(`  1-2: ${q12.length} 题`);
  
  if (q11[4] && q12[4]) {
    console.log('\n  1-1 第5题:');
    console.log('    ' + q11[4].split('\n').slice(0, 3).join('\n    '));
    console.log('\n  1-2 第5题:');
    console.log('    ' + q12[4].split('\n').slice(0, 3).join('\n    '));
  }
  console.log('');
});

// 检查具体重复的题目
console.log('\n=== 检查具体重复的题目 ===\n');

diffs.forEach(diff => {
  const q11 = questions11[diff];
  const q12 = questions12[diff];
  
  q11.forEach((q, i) => {
    q12.forEach((q2, j) => {
      if (q.includes('拖到正确的名称上') && q2.includes('拖到正确的名称上')) {
        console.log(`${diff.toUpperCase()} 模式: 1-1 第${i+1}题 与 1-2 第${j+1}题 可能重复`);
      }
    });
  });
});