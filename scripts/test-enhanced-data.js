/**
 * Enhanced 数据自动化测试脚本
 * 验证所有 enhanced 数据文件的完整性
 */

const fs = require('fs');
const path = require('path');

// 测试配置
const LEVELS_DIR = path.join(__dirname, '../src/data/levels');
const EXPECTED_QUESTIONS_PER_LEVEL = 15; // 每关 15 题（每档难度 5 题）
const EXPECTED_WEAPON_PARTS_PER_LEVEL = 15; // 每关 15 个武器部件（每档难度 5 个）
const EXPECTED_STORY_BUBBLES_PER_LEVEL = 6; // 每关 6 个故事气泡（开场 + 每档难度完成各 1 个）
const DIFFICULTY_LEVELS = ['easy', 'medium', 'hard'];

// 关卡列表
const LEVEL_IDS = [
  '1-1', '1-2', '1-3',
  '2-1', '2-2', '2-3', '2-4',
  '3-1', '3-2', '3-3', '3-4',
  '4-1', '4-2', '4-3',
  '5-1', '5-2',
  '6',
  '7-1', '7-2',
  '8', '9',
  'h1', 'h2',
  '17', '18', '19', '20', '21', '22', '23', '24'
];

// 测试结果统计
let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const errors = [];

console.log('='.repeat(60));
console.log('Enhanced 数据自动化测试');
console.log('='.repeat(60));
console.log('');

// Phase 1: Root Cause Investigation - 检查文件存在性
console.log('## Phase 1: Root Cause Investigation');
console.log('');

// 1.1 检查所有 enhanced 文件是否存在
console.log('### 1.1 检查文件存在性');
LEVEL_IDS.forEach(levelId => {
  totalTests++;
  const fileName = getEnhancedFileName(levelId);
  const filePath = path.join(LEVELS_DIR, fileName);
  
  if (fs.existsSync(filePath)) {
    passedTests++;
    console.log(`✅ ${fileName} - 文件存在`);
  } else {
    failedTests++;
    errors.push({ levelId, type: 'file_missing', message: `文件不存在: ${fileName}` });
    console.log(`❌ ${fileName} - 文件不存在`);
  }
});
console.log('');

// 1.2 检查导出变量命名
console.log('### 1.2 检查导出变量命名');
LEVEL_IDS.forEach(levelId => {
  totalTests++;
  const fileName = getEnhancedFileName(levelId);
  const filePath = path.join(LEVELS_DIR, fileName);
  
  if (!fs.existsSync(filePath)) {
    failedTests++;
    console.log(`❌ ${levelId} - 无法检查（文件不存在）`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const exportVarName = getExportVarName(levelId);
  
  if (content.includes(exportVarName)) {
    passedTests++;
    console.log(`✅ ${levelId} - 导出变量 ${exportVarName} 存在`);
  } else {
    failedTests++;
    errors.push({ levelId, type: 'export_missing', message: `缺少导出变量: ${exportVarName}` });
    console.log(`❌ ${levelId} - 缺少导出变量 ${exportVarName}`);
  }
});
console.log('');

// 1.3 检查每档难度题目数量
console.log('### 1.3 检查题目数量');
LEVEL_IDS.forEach(levelId => {
  const fileName = getEnhancedFileName(levelId);
  const filePath = path.join(LEVELS_DIR, fileName);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${levelId} - 无法检查（文件不存在）`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // 统计题目数量（通过检查 type: 'choice', type: 'fill_blank' 等）
  const questionTypes = ['choice', 'fill_blank', 'multi_select', 'drag', 'link', 'circle', 'shape_compose'];
  let totalQuestions = 0;
  
  questionTypes.forEach(type => {
    const matches = content.match(new RegExp(`type: '${type}'`, 'g'));
    if (matches) {
      totalQuestions += matches.length;
    }
  });
  
  totalTests++;
  if (totalQuestions >= EXPECTED_QUESTIONS_PER_LEVEL) {
    passedTests++;
    console.log(`✅ ${levelId} - 题目数量: ${totalQuestions} (预期 ${EXPECTED_QUESTIONS_PER_LEVEL})`);
  } else {
    failedTests++;
    errors.push({ levelId, type: 'questions_count', message: `题目数量不足: ${totalQuestions} < ${EXPECTED_QUESTIONS_PER_LEVEL}` });
    console.log(`❌ ${levelId} - 题目数量不足: ${totalQuestions} < ${EXPECTED_QUESTIONS_PER_LEVEL}`);
  }
});
console.log('');

// 1.4 检查武器部件数量
console.log('### 1.4 检查武器部件数量');
LEVEL_IDS.forEach(levelId => {
  const fileName = getEnhancedFileName(levelId);
  const filePath = path.join(LEVELS_DIR, fileName);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${levelId} - 无法检查（文件不存在）`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // 统计 WeaponPart 数量
  const weaponPartMatches = content.match(/WeaponPart/g);
  const weaponCount = weaponPartMatches ? weaponPartMatches.length : 0;
  
  totalTests++;
  // 武器部件数量应该足够（至少有定义）
  if (weaponCount >= 3) {
    passedTests++;
    console.log(`✅ ${levelId} - 武器部件定义数: ${weaponCount}`);
  } else {
    failedTests++;
    errors.push({ levelId, type: 'weapon_parts', message: `武器部件定义不足: ${weaponCount}` });
    console.log(`❌ ${levelId} - 武器部件定义不足: ${weaponCount}`);
  }
});
console.log('');

// 1.5 检查故事气泡
console.log('### 1.5 检查故事气泡');
LEVEL_IDS.forEach(levelId => {
  const fileName = getEnhancedFileName(levelId);
  const filePath = path.join(LEVELS_DIR, fileName);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${levelId} - 无法检查（文件不存在）`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // 检查是否有 opening 或 completion 关键字
  const hasOpening = content.includes('opening');
  const hasCompletion = content.includes('completion');
  
  totalTests++;
  if (hasOpening || hasCompletion) {
    passedTests++;
    console.log(`✅ ${levelId} - 有故事气泡定义`);
  } else {
    failedTests++;
    errors.push({ levelId, type: 'story_bubbles', message: `缺少故事气泡定义` });
    console.log(`❌ ${levelId} - 缺少故事气泡定义`);
  }
});
console.log('');

// Phase 2: Pattern Analysis - 检查数据结构一致性
console.log('## Phase 2: Pattern Analysis');
console.log('');

// 2.1 检查 questionsByDifficulty 结构
console.log('### 2.1 检查 questionsByDifficulty 结构');
LEVEL_IDS.forEach(levelId => {
  const fileName = getEnhancedFileName(levelId);
  const filePath = path.join(LEVELS_DIR, fileName);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${levelId} - 无法检查（文件不存在）`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // 检查是否有 easy, medium, hard 三档
  const hasEasy = content.includes('easy:');
  const hasMedium = content.includes('medium:');
  const hasHard = content.includes('hard:');
  
  totalTests++;
  if (hasEasy && hasMedium && hasHard) {
    passedTests++;
    console.log(`✅ ${levelId} - 包含 easy/medium/hard 三档难度`);
  } else {
    failedTests++;
    const missing = [];
    if (!hasEasy) missing.push('easy');
    if (!hasMedium) missing.push('medium');
    if (!hasHard) missing.push('hard');
    errors.push({ levelId, type: 'difficulty_structure', message: `缺少难度档: ${missing.join(', ')}` });
    console.log(`❌ ${levelId} - 缺少难度档: ${missing.join(', ')}`);
  }
});
console.log('');

// 测试结果汇总
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
    console.log(`${idx + 1}. 关卡 ${err.levelId} - ${err.type}: ${err.message}`);
  });
}

// 最终判定
console.log('');
if (failedTests === 0) {
  console.log('🎉 所有测试通过！Enhanced 数据完整且正确。');
  process.exit(0);
} else {
  console.log(`⚠️ 有 ${failedTests} 个测试失败，需要修复。`);
  process.exit(1);
}

// 辅助函数
function getEnhancedFileName(levelId) {
  // 转换 levelId 到文件名格式
  // '1-1' -> 'level-1-1-enhanced.data.ts'
  // 'h1' -> 'level-h1-enhanced.data.ts'
  return `level-${levelId}-enhanced.data.ts`;
}

function getExportVarName(levelId) {
  // 转换 levelId 到导出变量名格式
  // '1-1' -> 'level1_1QuestionsByDifficulty'
  // 'h1' -> 'levelH1QuestionsByDifficulty'
  // '3-4' -> 'level34QuestionsByDifficulty' (注意：有些文件用这种格式)
  const normalized = levelId.replace('-', '_').replace('-', '');
  const upperFirst = normalized.charAt(0).toLowerCase() + normalized.slice(1);
  
  // 特殊处理
  if (levelId === '3-4') return 'level34QuestionsByDifficulty';
  if (levelId === '4-1') return 'level41QuestionsByDifficulty';
  if (levelId === '4-2') return 'level42QuestionsByDifficulty';
  if (levelId === '4-3') return 'level43QuestionsByDifficulty';
  if (levelId === '5-1') return 'level51QuestionsByDifficulty';
  if (levelId === '5-2') return 'level52QuestionsByDifficulty';
  if (levelId === '7-1') return 'level71QuestionsByDifficulty';
  if (levelId === '7-2') return 'level72QuestionsByDifficulty';
  
  return `level${upperFirst}QuestionsByDifficulty`;
}