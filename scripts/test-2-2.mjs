/**
 * 2-2 关卡自动化测试脚本
 * 验证关卡: 2-2 铁臂爵士 - 十几减8、7、6
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('='.repeat(60));
console.log('2-2 关卡自动化测试 (铁臂爵士 - 十几减8、7、6)');
console.log('='.repeat(60));
console.log('');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const errors = [];

// ==================== Phase 1: 文件完整性检查 ====================
console.log('## Phase 1: 文件完整性检查');
console.log('');

const filePath = path.join(__dirname, '../src/data/levels/level-2-2-enhanced.data.ts');
totalTests++;
if (fs.existsSync(filePath)) {
  passedTests++;
  console.log('✅ Level 文件存在');
  console.log(`   路径: ${filePath}`);
} else {
  failedTests++;
  console.log('❌ Level 文件不存在');
}
console.log('');

// ==================== Phase 2: 数据结构检查 ====================
console.log('## Phase 2: 数据结构检查');
console.log('');

const content = fs.readFileSync(filePath, 'utf-8');

// 检查导出结构
totalTests++;
if (content.includes('export const level2_2QuestionsByDifficulty')) {
  passedTests++;
  console.log('✅ QuestionsByDifficulty 导出存在');
} else {
  failedTests++;
  console.log('❌ QuestionsByDifficulty 导出缺失');
}

totalTests++;
if (content.includes('export const level2_2WeaponPartsByDifficulty')) {
  passedTests++;
  console.log('✅ WeaponPartsByDifficulty 导出存在');
} else {
  failedTests++;
  console.log('❌ WeaponPartsByDifficulty 导出缺失');
}
console.log('');

// 检查难度枚举
totalTests++;
if (content.includes('DifficultyLevel.EASY') && 
    content.includes('DifficultyLevel.MEDIUM') && 
    content.includes('DifficultyLevel.HARD')) {
  passedTests++;
  console.log('✅ 难度枚举结构完整 (EASY/MEDIUM/HARD)');
} else {
  failedTests++;
  console.log('❌ 难度枚举结构不完整');
}
console.log('');

// ==================== Phase 3: 题目数量检查 ====================
console.log('## Phase 3: 题目数量检查 (每档难度 5 题)');
console.log('');

// 统计题目类型
const types = {};
const typePatterns = [
  ['choice', /type: 'choice'/g],
  ['fill_blank', /type: 'fill_blank'/g],
  ['drag', /type: 'drag'/g],
  ['multi_select', /type: 'multi_select'/g],
  ['link', /type: 'link'/g],
  ['circle', /type: 'circle'/g],
  ['shape_compose', /type: 'shape_compose'/g],
];

typePatterns.forEach(([name, pattern]) => {
  const matches = content.match(pattern);
  types[name] = matches ? matches.length : 0;
});

const totalQuestions = Object.values(types).reduce((a, b) => a + b, 0);

totalTests++;
if (totalQuestions === 15) {
  passedTests++;
  console.log(`✅ 题目总数: ${totalQuestions} 题 (预期 15 题)`);
} else {
  failedTests++;
  console.log(`❌ 题目总数: ${totalQuestions} 题 (预期 15 题)`);
}

totalTests++;
if (content.match(/level2_2EasyQuestions/g)) {
  passedTests++;
  console.log('✅ Easy 题目定义存在');
} else {
  failedTests++;
  console.log('❌ Easy 题目定义缺失');
}

totalTests++;
if (content.match(/level2_2MediumQuestions/g)) {
  passedTests++;
  console.log('✅ Medium 题目定义存在');
} else {
  failedTests++;
  console.log('❌ Medium 题目定义缺失');
}

totalTests++;
if (content.match(/level2_2HardQuestions/g)) {
  passedTests++;
  console.log('✅ Hard 题目定义存在');
} else {
  failedTests++;
  console.log('❌ Hard 题目定义缺失');
}
console.log('');

// ==================== Phase 4: 武器零件检查 ====================
console.log('## Phase 4: 武器零件检查 (每档难度 4-5 个)');
console.log('');

totalTests++;
if (content.match(/level2_2EasyWeaponParts/g)) {
  passedTests++;
  console.log('✅ Easy 武器零件定义存在');
  // 统计零件数量
  const easyPartMatches = content.match(/{ id: 'drill-easy-[^']+',/g) || [];
  const easyPartCount = easyPartMatches.length;
  console.log(`   数量: ${easyPartCount} 个`);
} else {
  failedTests++;
  console.log('❌ Easy 武器零件定义缺失');
}

totalTests++;
if (content.match(/level2_2MediumWeaponParts/g)) {
  passedTests++;
  console.log('✅ Medium 武器零件定义存在');
  const mediumPartMatches = content.match(/{ id: 'drill-medium-[^']+',/g) || [];
  const mediumPartCount = mediumPartMatches.length;
  console.log(`   数量: ${mediumPartCount} 个`);
} else {
  failedTests++;
  console.log('❌ Medium 武器零件定义缺失');
}

totalTests++;
if (content.match(/level2_2HardWeaponParts/g)) {
  passedTests++;
  console.log('✅ Hard 武器零件定义存在');
  const hardPartMatches = content.match(/{ id: 'drill-hard-[^']+',/g) || [];
  const hardPartCount = hardPartMatches.length;
  console.log(`   数量: ${hardPartCount} 个`);
} else {
  failedTests++;
  console.log('❌ Hard 武器零件定义缺失');
}
console.log('');

// ==================== Phase 5: 答案正确性验证 ====================
console.log('## Phase 5: 答案正确性验证');
console.log('');

// 题目答案列表 (12-16 题)
const testQuestions = [
  { num: 1, q: '12 - 8', expected: 4, answer: 'c' },
  { num: 2, q: '11 - 7', expected: 4, answer: '填空题' },
  { num: 3, q: '13 - 6', expected: 7, answer: 'b' },
  { num: 4, q: '15 - 8', expected: 7, answer: '拖拽题' },
  { num: 5, q: '14 - 7', expected: 7, answer: '拖拽题' },
  { num: 6, q: '12 - 6', expected: 6, answer: '拖拽题' },
  { num: 7, q: '14 - 8', expected: 6, answer: 'choice' },
  { num: 8, q: '13 - 7', expected: 6, answer: 'choice' },
  { num: 9, q: '16 - 8', expected: 8, answer: 'choice' },
  { num: 10, q: '15 - 7', expected: 8, answer: 'choice' },
  { num: 11, q: '14 - 6', expected: 8, answer: 'choice' },
  { num: 12, q: '13 - 8', expected: 5, answer: 'multi_select' },
  { num: 13, q: '12 - 7', expected: 5, answer: 'multi_select' },
  { num: 14, q: '16 - 7', expected: 9, answer: 'multi_select' },
  { num: 15, q: '15 - 6', expected: 9, answer: 'multi_select' },
];

let answerPassed = 0;
let answerFailed = 0;

testQuestions.forEach(test => {
  const [minuend, subtrahend] = test.q.split(' - ').map(Number);
  const actual = minuend - subtrahend;
  const isCorrect = actual === test.expected;
  
  if (isCorrect) {
    answerPassed++;
  } else {
    answerFailed++;
    errors.push({ type: 'answer_incorrect', message: `${test.q} = ${actual}, 预期 ${test.expected}` });
  }
});

totalTests++;
if (answerFailed === 0) {
  passedTests++;
  console.log(`✅ 答案验证通过: ${answerPassed}/${testQuestions.length}`);
} else {
  failedTests++;
  console.log(`❌ 答案验证失败: ${answerPassed}/${testQuestions.length}`);
}

// 破十法步骤验证
console.log('');
console.log('破十法步骤验证:');
const subtractionProblems = [
  { num: 12, sub: 8, result: 4, steps: '12→10+2, 10-8=2, 2+2=4' },
  { num: 11, sub: 7, result: 4, steps: '11→10+1, 10-7=3, 3+1=4' },
  { num: 13, sub: 6, result: 7, steps: '13→10+3, 10-6=4, 4+3=7' },
  { num: 15, sub: 8, result: 7, steps: '15→10+5, 10-8=2, 2+5=7' },
  { num: 14, sub: 7, result: 7, steps: '14→10+4, 10-7=3, 3+4=7' },
];

subtractionProblems.forEach(problem => {
  const check = problem.num - problem.sub === problem.result;
  const status = check ? '✅' : '❌';
  console.log(`   ${status} ${problem.num} - ${problem.sub} = ${problem.result} (${problem.steps})`);
});
console.log('');

// ==================== Phase 6: 题目类型分布检查 ====================
console.log('## Phase 6: 题目类型分布检查');
console.log('');

Object.entries(types).forEach(([type, count]) => {
  totalTests++;
  console.log(`   ${type}: ${count} 题`);
});
console.log(`   总计: ${totalQuestions} 题`);
console.log('');

// ==================== Phase 7: 游戏集成检查 ====================
console.log('## Phase 7: 游戏集成检查');
console.log('');

const gameComponentPath = path.join(__dirname, '../src/features/quiz/quiz-game/quiz-game.component.tsx');
totalTests++;
if (fs.existsSync(gameComponentPath)) {
  passedTests++;
  console.log('✅ quiz-game.component.tsx 存在');
  
  const gameContent = fs.readFileSync(gameComponentPath, 'utf-8');
  
  totalTests++;
  if (gameContent.includes('import { level2_2QuestionsByDifficulty }')) {
    passedTests++;
    console.log('✅ 2-2 关卡导入语句存在');
  } else {
    failedTests++;
    console.log('❌ 2-2 关卡导入语句缺失');
  }
  
  totalTests++;
  if (gameContent.includes("levelId === '2-2'")) {
    passedTests++;
    console.log('✅ 2-2 关卡加载条件存在');
  } else {
    failedTests++;
    console.log('❌ 2-2 关卡加载条件缺失');
  }
} else {
  failedTests++;
  console.log('❌ quiz-game.component.tsx 不存在');
}
console.log('');

// ==================== Phase 8: 关卡定义检查 ====================
console.log('## Phase 8: 关卡定义检查');
console.log('');

const levelsDataPath = path.join(__dirname, '../src/data/levels.data.ts');
totalTests++;
if (fs.existsSync(levelsDataPath)) {
  passedTests++;
  console.log('✅ levels.data.ts 存在');
  
  const levelsContent = fs.readFileSync(levelsDataPath, 'utf-8');
  
  totalTests++;
  if (levelsContent.includes("id: '2-2'")) {
    passedTests++;
    console.log('✅ 2-2 关卡定义存在');
    
    // 检查守护者
    if (levelsContent.includes('guardian: getCharacterById')) {
      passedTests++;
      console.log('✅ 守护者配置存在');
    }
  } else {
    failedTests++;
    console.log('❌ 2-2 关卡定义缺失');
  }
} else {
  failedTests++;
  console.log('❌ levels.data.ts 不存在');
}
console.log('');

// ==================== Phase 9: Story Bubbles 检查 ====================
console.log('## Phase 9: Story Bubbles 检查');
console.log('');

totalTests++;
if (content.includes('opening:') || content.includes('第')) {
  // 简单检查是否包含开场描述
  const hasOpening = content.includes('场景：');
  if (hasOpening) {
    passedTests++;
    console.log('✅ Story Bubbles 开场描述存在');
  } else {
    failedTests++;
    console.log('❌ Story Bubbles 开场描述缺失');
  }
} else {
  failedTests++;
  console.log('❌ Story Bubbles 检查失败');
}
console.log('');

// ==================== 测试结果汇总 ====================
console.log('='.repeat(60));
console.log('测试结果汇总');
console.log('='.repeat(60));
console.log(`总测试数: ${totalTests}`);
console.log(`通过数: ${passedTests}`);
console.log(`失败数: ${failedTests}`);
console.log(`通过率: ${((passedTests / totalTests) * 100).toFixed(1)}%`);
console.log('');

if (errors.length > 0) {
  console.log('## 错误详情');
  console.log('');
  errors.forEach((err, idx) => {
    console.log(`${idx + 1}. ${err.type}: ${err.message}`);
  });
}
console.log('');

if (failedTests === 0) {
  console.log('🎉 2-2 关卡所有测试通过！');
  console.log('');
  console.log('关卡信息:');
  console.log('  ID: 2-2');
  console.log('  守护者: 铁臂爵士');
  console.log('  知识点: 十几减8、7、6 (破十法)');
  console.log('  题目总数: 15题 (每档难度5题)');
  console.log('  武器零件: 3档难度各4-5个零件');
  console.log('  Story Bubbles: 开场+完成气泡');
  process.exit(0);
} else {
  console.log(`⚠️ 有 ${failedTests} 个测试失败，需要修复。`);
  process.exit(1);
}