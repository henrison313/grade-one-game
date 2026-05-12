/**
 * UI 组件和动画配置自动化测试
 * 验证答题、动画播放等关键组件的实现
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, '../src');

console.log('='.repeat(60));
console.log('UI 组件和动画配置自动化测试');
console.log('='.repeat(60));
console.log('');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const errors = [];

// ==================== Phase 1: UI 组件检查 ====================
console.log('## Phase 1: UI 组件检查');
console.log('');

// 1.1 检查答题组件
console.log('### 1.1 答题组件');
const quizComponents = [
  'features/quiz/quiz-game/quiz-game.component.tsx',
  'features/quiz/choice-question/choice-question.component.tsx',
  'features/quiz/fill-blank-question/fill-blank-question.component.tsx',
  'features/quiz/drag-question/drag-question.component.tsx',
  'features/quiz/multi-select-question/multi-select-question.component.tsx',
  'features/quiz/answer-feedback/answer-feedback.component.tsx',
  'features/quiz/quiz-progress/quiz-progress.component.tsx',
];

quizComponents.forEach(compPath => {
  totalTests++;
  const filePath = path.join(SRC_DIR, compPath);
  if (fs.existsSync(filePath)) {
    passedTests++;
    console.log(`✅ ${compPath} - 文件存在`);
    
    // 检查是否使用 framer-motion 动画
    const content = fs.readFileSync(filePath, 'utf-8');
    if (content.includes('framer-motion') || content.includes('motion')) {
      console.log(`   ✅ 使用 framer-motion 动画库`);
    }
  } else {
    failedTests++;
    errors.push({ type: 'component_missing', message: `组件不存在: ${compPath}` });
    console.log(`❌ ${compPath} - 文件不存在`);
  }
});
console.log('');

// 1.2 检查战斗场景组件
console.log('### 1.2 战斗场景组件');
const battleComponents = [
  'features/battle/battle-scene/battle-scene.component.tsx',
  'features/battle/weapon-showcase/weapon-showcase.component.tsx',
];

battleComponents.forEach(compPath => {
  totalTests++;
  const filePath = path.join(SRC_DIR, compPath);
  if (fs.existsSync(filePath)) {
    passedTests++;
    console.log(`✅ ${compPath} - 文件存在`);
    
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // 检查动画关键帧定义
    const hasKeyframes = content.includes('keyframes');
    if (hasKeyframes) {
      console.log(`   ✅ 定义了 CSS 动画关键帧`);
    }
    
    // 检查动画变量
    const animVars = ['waveMotion', 'collisionFlash', 'weaponPulse', 'energyBeam', 'starBounce', 'progressFlow', 'sparkle'];
    animVars.forEach(varName => {
      if (content.includes(varName)) {
        console.log(`   ✅ 包含动画: ${varName}`);
      }
    });
  } else {
    failedTests++;
    errors.push({ type: 'component_missing', message: `组件不存在: ${compPath}` });
    console.log(`❌ ${compPath} - 文件不存在`);
  }
});
console.log('');

// 1.3 检查关卡选择组件
console.log('### 1.3 关卡选择组件');
const levelComponents = [
  'features/level/level-select/level-select.component.tsx',
  'features/level/level-intro/level-intro.component.tsx',
  'features/level/level-complete/level-complete.component.tsx',
];

levelComponents.forEach(compPath => {
  totalTests++;
  const filePath = path.join(SRC_DIR, compPath);
  if (fs.existsSync(filePath)) {
    passedTests++;
    console.log(`✅ ${compPath} - 文件存在`);
  } else {
    failedTests++;
    errors.push({ type: 'component_missing', message: `组件不存在: ${compPath}` });
    console.log(`❌ ${compPath} - 文件不存在`);
  }
});
console.log('');

// ==================== Phase 2: 答题逻辑检查 ====================
console.log('## Phase 2: 答题逻辑检查');
console.log('');

// 2.1 检查答题处理逻辑
console.log('### 2.1 答题处理逻辑');
const quizGamePath = path.join(SRC_DIR, 'features/quiz/quiz-game/quiz-game.component.tsx');
if (fs.existsSync(quizGamePath)) {
  const content = fs.readFileSync(quizGamePath, 'utf-8');
  
  // 检查答题类型处理
  const answerTypes = ['choice', 'multi_select', 'drag', 'fill_blank', 'circle', 'link', 'shape_compose'];
  answerTypes.forEach(type => {
    totalTests++;
    if (content.includes(`case '${type}'`) || content.includes(`case "${type}"`)) {
      passedTests++;
      console.log(`✅ 处理答题类型: ${type}`);
    } else {
      failedTests++;
      errors.push({ type: 'answer_logic', message: `缺少答题类型处理: ${type}` });
      console.log(`❌ 缺少答题类型处理: ${type}`);
    }
  });
  
  // 检查正误判断逻辑
  totalTests++;
  if (content.includes('isCorrect')) {
    passedTests++;
    console.log(`✅ 包含正误判断逻辑 (isCorrect)`);
  } else {
    failedTests++;
    errors.push({ type: 'answer_logic', message: `缺少正误判断逻辑` });
    console.log(`❌ 缺少正误判断逻辑`);
  }
  
  // 检查星星奖励逻辑
  totalTests++;
  if (content.includes('earnedStars') || content.includes('starsEarned')) {
    passedTests++;
    console.log(`✅ 包含星星奖励逻辑`);
  } else {
    failedTests++;
    errors.push({ type: 'answer_logic', message: `缺少星星奖励逻辑` });
    console.log(`❌ 缺少星星奖励逻辑`);
  }
} else {
  console.log(`❌ quiz-game.component.tsx 不存在，无法检查答题逻辑`);
}
console.log('');

// ==================== Phase 3: 动画配置检查 ====================
console.log('## Phase 3: 动画配置检查');
console.log('');

// 3.1 检查动画配置文件
console.log('### 3.1 动画配置文件');
const configFiles = [
  'config/question-story.config.ts',
  'config/index.ts',
];

configFiles.forEach(configPath => {
  totalTests++;
  const filePath = path.join(SRC_DIR, configPath);
  if (fs.existsSync(filePath)) {
    passedTests++;
    console.log(`✅ ${configPath} - 文件存在`);
    
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // 检查难度配置
    if (content.includes('DifficultyConfigs') || content.includes('EASY') || content.includes('MEDIUM') || content.includes('HARD')) {
      console.log(`   ✅ 包含难度配置`);
    }
    
    // 检查故事配置
    if (content.includes('StoryConfig') || content.includes('LevelStoryConfigs')) {
      console.log(`   ✅ 包含故事配置`);
    }
  } else {
    failedTests++;
    errors.push({ type: 'config_missing', message: `配置不存在: ${configPath}` });
    console.log(`❌ ${configPath} - 文件不存在`);
  }
});
console.log('');

// 3.2 检查角色动画数据
console.log('### 3.2 角色动画数据');
const characterFiles = [
  'data/characters.data.ts',
  'data/character-variants.data.ts',
];

characterFiles.forEach(dataPath => {
  totalTests++;
  const filePath = path.join(SRC_DIR, dataPath);
  if (fs.existsSync(filePath)) {
    passedTests++;
    console.log(`✅ ${dataPath} - 文件存在`);
    
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // 检查角色属性
    const charAttrs = ['name', 'title', 'skills', 'ultimateSkill', 'vehicleImage', 'robotImage'];
    charAttrs.forEach(attr => {
      if (content.includes(attr)) {
        console.log(`   ✅ 包含角色属性: ${attr}`);
      }
    });
  } else {
    failedTests++;
    errors.push({ type: 'data_missing', message: `数据不存在: ${dataPath}` });
    console.log(`❌ ${dataPath} - 文件不存在`);
  }
});
console.log('');

// ==================== Phase 4: 隐藏关卡检查 ====================
console.log('## Phase 4: 隐藏关卡检查');
console.log('');

// 4.1 检查隐藏关卡数据
console.log('### 4.1 隐藏关卡数据');
const hiddenLevelsPath = path.join(SRC_DIR, 'data/hidden-levels.data.ts');
if (fs.existsSync(hiddenLevelsPath)) {
  passedTests++;
  console.log(`✅ hidden-levels.data.ts - 文件存在`);
  
  const content = fs.readFileSync(hiddenLevelsPath, 'utf-8');
  
  // 检查 H1 和 H2
  totalTests++;
  if (content.includes('h1') || content.includes('H1') || content.includes('超炫电光王')) {
    passedTests++;
    console.log(`   ✅ 包含隐藏关卡 H1 (超炫电光王)`);
  } else {
    failedTests++;
    errors.push({ type: 'hidden_level', message: `缺少隐藏关卡 H1` });
    console.log(`   ❌ 缺少隐藏关卡 H1`);
  }
  
  totalTests++;
  if (content.includes('h2') || content.includes('H2') || content.includes('炫蓝雷霆王')) {
    passedTests++;
    console.log(`   ✅ 包含隐藏关卡 H2 (炫蓝雷霆王)`);
  } else {
    failedTests++;
    errors.push({ type: 'hidden_level', message: `缺少隐藏关卡 H2` });
    console.log(`   ❌ 缺少隐藏关卡 H2`);
  }
  
  // 检查解锁条件
  totalTests++;
  if (content.includes('unlockCondition') || content.includes('解锁条件')) {
    passedTests++;
    console.log(`   ✅ 包含解锁条件定义`);
  } else {
    failedTests++;
    errors.push({ type: 'hidden_level', message: `缺少解锁条件定义` });
    console.log(`   ❌ 缺少解锁条件定义`);
  }
} else {
  failedTests++;
  errors.push({ type: 'data_missing', message: `hidden-levels.data.ts 不存在` });
  console.log(`❌ hidden-levels.data.ts - 文件不存在`);
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
  console.log('🎉 所有测试通过！UI组件、答题逻辑、动画配置完整。');
  process.exit(0);
} else {
  console.log(`⚠️ 有 ${failedTests} 个测试失败，需要修复。`);
  process.exit(1);
}