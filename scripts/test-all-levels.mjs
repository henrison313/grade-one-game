/**
 * 所有关卡批量自动化测试脚本
 * 测试所有31个增强数据文件
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LEVELS_DIR = path.join(__dirname, '../src/data/levels');

console.log('='.repeat(70));
console.log('所有关卡批量自动化测试');
console.log('='.repeat(70));
console.log('');

// 关卡列表
const LEVELS = [
  { id: '1-1', name: '认识平面图形' },
  { id: '1-2', name: '认识平面图形' },
  { id: '1-3', name: '认识平面图形' },
  { id: '2-1', name: '20以内退位减法' },
  { id: '2-2', name: '20以内退位减法' },
  { id: '2-3', name: '20以内退位减法' },
  { id: '2-4', name: '20以内退位减法' },
  { id: '3-1', name: '100以内数的认识' },
  { id: '3-2', name: '100以内数的认识' },
  { id: '3-3', name: '100以内数的认识' },
  { id: '3-4', name: '100以内数的认识' },
  { id: '4-1', name: '100以内口算加减法' },
  { id: '4-2', name: '100以内口算加减法' },
  { id: '4-3', name: '100以内口算加减法' },
  { id: '5-1', name: '100以内笔算加减法' },
  { id: '5-2', name: '100以内笔算加减法' },
  { id: '6', name: '数量间的加减关系' },
  { id: '7-1', name: '欢乐购物街' },
  { id: '7-2', name: '欢乐购物街' },
  { id: '8', name: '找规律' },
  { id: '9', name: '期末综合' },
  { id: 'h1', name: '超炫电光王(隐藏)' },
  { id: 'h2', name: '炫蓝雷霆王(隐藏)' },
  { id: '17', name: '高级关卡' },
  { id: '18', name: '高级关卡' },
  { id: '19', name: '高级关卡' },
  { id: '20', name: '高级关卡' },
  { id: '21', name: '高级关卡' },
  { id: '22', name: '高级关卡' },
  { id: '23', name: '高级关卡' },
  { id: '24', name: '高级关卡' },
];

// 测试统计
let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const allErrors = [];

// 测试单个关卡
function testLevel(level) {
  const { id, name } = level;
  const fileName = `level-${id}-enhanced.data.ts`;
  const filePath = path.join(LEVELS_DIR, fileName);
  
  const errors = [];
  
  console.log(`\n${'='.repeat(70)}`);
  console.log(`关卡 ${id} - ${name}`);
  console.log(`${'='.repeat(70)}`);
  
  // Phase 1: 文件存在性检查
  totalTests++;
  if (fs.existsSync(filePath)) {
    passedTests++;
    console.log('✅ 文件存在');
  } else {
    failedTests++;
    errors.push('文件不存在');
    console.log('❌ 文件不存在');
    return { id, name, errors, passed: false };
  }
  
  // Phase 2: 数据结构检查
  const content = fs.readFileSync(filePath, 'utf-8');
  
  totalTests++;
  if (content.includes('level')) {
    passedTests++;
    console.log('✅ 数据结构完整');
  } else {
    failedTests++;
    errors.push('数据结构不完整');
    console.log('❌ 数据结构不完整');
  }
  
  // Phase 3: 题目数量检查
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
    console.log(`✅ 题目总数: ${totalQuestions} 题`);
  } else {
    failedTests++;
    errors.push(`题目数量错误: ${totalQuestions} < 15`);
    console.log(`❌ 题目数量: ${totalQuestions} 题 (预期 15 题)`);
  }
  
  // Phase 4: 武器零件检查
  const weaponMatches = content.match(/WeaponPart/g);
  const weaponCount = weaponMatches ? weaponMatches.length : 0;
  
  totalTests++;
  if (weaponCount >= 3) {
    passedTests++;
    console.log(`✅ 武器部件定义: ${weaponCount} 个`);
  } else {
    failedTests++;
    errors.push(`武器部件不足: ${weaponCount}`);
    console.log(`❌ 武器部件不足: ${weaponCount}`);
  }
  
  // Phase 5: 难度结构检查
  totalTests++;
  if (content.includes('DifficultyLevel.EASY') && 
      content.includes('DifficultyLevel.MEDIUM') && 
      content.includes('DifficultyLevel.HARD')) {
    passedTests++;
    console.log('✅ 难度结构完整');
  } else {
    failedTests++;
    errors.push('难度结构不完整');
    console.log('❌ 难度结构不完整');
  }
  
  // Phase 6: 导出检查
  totalTests++;
  if (content.includes('QuestionsByDifficulty') && 
      content.includes('WeaponPartsByDifficulty')) {
    passedTests++;
    console.log('✅ 导出结构完整');
  } else {
    failedTests++;
    errors.push('导出结构不完整');
    console.log('❌ 导出结构不完整');
  }
  
  // Phase 7: Story Bubbles 检查
  totalTests++;
  if (content.includes('opening') || content.includes('场景：')) {
    passedTests++;
    console.log('✅ Story Bubbles 存在');
  } else {
    failedTests++;
    errors.push('Story Bubbles 缺失');
    console.log('❌ Story Bubbles 缺失');
  }
  
  // 题目类型分布
  console.log('\n题目类型分布:');
  Object.entries(types).forEach(([type, count]) => {
    console.log(`  ${type}: ${count} 题`);
  });
  console.log(`  总计: ${totalQuestions} 题`);
  
  return { id, name, errors, passed: errors.length === 0 };
}

// 测试所有关卡
console.log(`\n开始测试所有31个增强数据文件...\n`);

const results = LEVELS.map(testLevel);

// 汇总结果
console.log('\n' + '='.repeat(70));
console.log('测试结果汇总');
console.log('='.repeat(70));
console.log(`\n总测试数: ${totalTests}`);
console.log(`通过数: ${passedTests}`);
console.log(`失败数: ${failedTests}`);
console.log(`通过率: ${((passedTests / totalTests) * 100).toFixed(1)}%`);

// 失败关卡
const failedLevels = results.filter(r => !r.passed);
if (failedLevels.length > 0) {
  console.log('\n失败关卡列表:');
  failedLevels.forEach(l => {
    console.log(`  ❌ ${l.id} - ${l.name}`);
    l.errors.forEach(e => console.log(`     ${e}`));
  });
} else {
  console.log('\n🎉 所有关卡测试通过！');
}

// 保存测试报告
const reportPath = path.join(__dirname, '../memory/2026-04-25-level-testing-report.md');
const reportContent = `# 关卡自动化测试报告

> **测试日期**: ${new Date().toISOString()}
> **测试范围**: 31个增强数据文件

## 测试统计

| 项目 | 数量 |
|------|------|
| 总测试数 | ${totalTests} |
| 通过数 | ${passedTests} |
| 失败数 | ${failedTests} |
| 通过率 | ${((passedTests / totalTests) * 100).toFixed(1)}% |

## 测试详情

`;
LEVELS.forEach(l => {
  const result = results.find(r => r.id === l.id);
  const status = result?.passed ? '✅' : '❌';
  reportContent += `| ${l.id} - ${l.name} | ${status} |\n`;
});

reportContent += `
## 失败详情

`;
if (failedLevels.length === 0) {
  reportContent += '所有关卡测试通过！✅\n';
} else {
  failedLevels.forEach(l => {
    reportContent += `### ${l.id} - ${l.name}\n`;
    l.errors.forEach(e => {
      reportContent += `- ${e}\n`;
    });
  });
}

reportContent += `
## 通过关卡统计

`;
const passedLevels = results.filter(r => r.passed);
reportContent += `| ID | 关卡名称 | 状态 |\n`;
reportContent += `|----|----------|------|\n`;
passedLevels.forEach(l => {
  reportContent += `| ${l.id} | ${l.name} | ✅ 通过 |\n`;
});

fs.writeFileSync(reportPath, reportContent);
console.log(`\n测试报告已保存到: ${reportPath}`);

// 最终退出
if (failedLevels.length === 0) {
  console.log('\n🎉 所有关卡测试通过！');
  process.exit(0);
} else {
  console.log(`\n⚠️ 有 ${failedLevels.length} 个关卡测试失败。`);
  process.exit(1);
}