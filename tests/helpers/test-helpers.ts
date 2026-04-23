import { Page, Locator, expect } from '@playwright/test';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface LevelTestResult {
  levelId: string;
  levelName: string;
  difficulty: DifficultyLevel;
  passed: boolean;
  errors: string[];
  questionsCompleted: number;
  starsEarned: number;
  weaponProgress: boolean;
  cardCollected: boolean;
  screenshots: string[];
}

/**
 * 等待页面加载完成 - 使用更宽松的策略
 */
export async function waitForPageReady(page: Page): Promise<void> {
  // 等待 DOM 内容加载，而不是 networkidle
  await page.waitForLoadState('domcontentloaded');
  // 等待一段时间让 React 组件渲染
  await page.waitForTimeout(2000);
}

/**
 * 导航到关卡答题页面
 */
export async function navigateToLevel(page: Page, levelId: string, difficulty: DifficultyLevel): Promise<void> {
  await page.goto(`/level/${levelId}/play?difficulty=${difficulty}`);
  await waitForPageReady(page);
}

/**
 * 获取当前题目类型 - 基于 DOM 结构判断
 */
export async function getQuestionType(page: Page): Promise<string | null> {
  // 拖拽题检测 - 通过 data-testid 属性（最高优先级）
  const dragItems = page.locator('[data-testid="drag-item"]');
  const dropTargets = page.locator('[data-testid="drop-target"]');
  if (await dragItems.count() > 0 && await dropTargets.count() > 0) {
    return 'drag';
  }

  // 连线题检测 - 检测左右两列的连线元素（id="left-xxx" 和 id="right-xxx"）
  const leftItems = page.locator('[id^="left-"]');
  const rightItems = page.locator('[id^="right-"]');
  if (await leftItems.count() > 0 && await rightItems.count() > 0) {
    return 'link';
  }

  // 多选题检测 - 有 "请选择所有正确答案" 提示
  const multiSelectHint = page.locator('text=/请选择所有正确答案|多选/');
  if (await multiSelectHint.count() > 0) {
    return 'multi_select';
  }

  // 填空题检测 - input type text
  if (await page.locator('input[type="text"]').count() > 0) {
    return 'fill_blank';
  }

  // 圈画题检测
  if (await page.locator('text=/圈|圈出/').count() > 0) {
    return 'circle';
  }

  // 迷宫题检测
  if (await page.locator('text=/迷宫|路径/').count() > 0) {
    return 'maze';
  }

  // 图形匹配检测
  if (await page.locator('text=/配对|找相同|记忆/').count() > 0) {
    return 'shape_match';
  }

  // 七巧板检测
  if (await page.locator('text=/七巧板|拼图|拼成/').count() > 0) {
    return 'tangram';
  }

  // 连击模式检测 - 检测 combo 特有的 UI 元素（连击计数器）
  const comboCounter = page.locator('text=/连击|连答|快速|🔥/');
  if (await comboCounter.count() > 0) {
    return 'combo';
  }

  // 计时题检测
  if (await page.locator('text=/秒|倒计时|限时/').count() > 0) {
    return 'timed';
  }

  // 图形组合检测
  if (await page.locator('text=/设计|组合|组装|自由/').count() > 0) {
    return 'shape_compose';
  }

  // 单选题检测 - 有题目文字和选项按钮（无多选提示）
  const questionText = page.locator('h2');
  if (await questionText.count() > 0) {
    // 如果有多个按钮且没有特殊题型提示，默认当作选择题处理
    return 'choice';
  }

  return null;
}

/**
 * 处理单选题 - 点击选项按钮
 * 策略：由于选项被打乱顺序，点击第一个可见的选项按钮
 */
export async function handleChoiceQuestion(page: Page): Promise<boolean> {
  // 查找所有答题按钮（排除退出按钮）
  const optionButtons = page.locator('button').filter({ hasNotText: /退出|返回|首页|继续|下一题|查看结果/ });
  const count = await optionButtons.count();

  if (count === 0) {
    console.log('未找到选项按钮');
    return false;
  }

  // 点击第一个选项，使用 force: true 绕过可能的 overlay 遮挡
  await optionButtons.first().click({ force: true });
  await page.waitForTimeout(500);
  return true;
}

/**
 * 处理多选题 - 选择多个选项并提交
 */
export async function handleMultiSelectQuestion(page: Page): Promise<boolean> {
  // 查找所有答题选项按钮（排除功能性按钮）
  const allButtons = page.locator('button');
  const count = await allButtons.count();

  if (count === 0) return false;

  // 找到选项按钮（通常是带有选项内容的按钮）
  // 多选题的选项按钮通常包含文字内容但不包含"确认"、"退出"等
  const optionButtons = allButtons.filter({ hasNotText: /确认|提交|退出|返回|首页|继续|下一题/ });
  const optionCount = await optionButtons.count();

  if (optionCount === 0) return false;

  // 选择所有选项（这样肯定包含正确答案）
  for (let i = 0; i < optionCount; i++) {
    const btn = optionButtons.nth(i);
    if (await btn.isVisible() && await btn.isEnabled()) {
      await btn.click();
      await page.waitForTimeout(150);
    }
  }

  // 等待一下让按钮状态更新
  await page.waitForTimeout(500);

  // 点击确认按钮
  const confirmBtn = page.locator('button:has-text("确认答案"), button:has-text("确认"), button:has-text("提交")');
  if (await confirmBtn.count() > 0 && await confirmBtn.isVisible()) {
    await confirmBtn.click();
    await page.waitForTimeout(500);
  }

  return true;
}

/**
 * 处理填空题 - 输入答案
 */
export async function handleFillBlankQuestion(page: Page): Promise<boolean> {
  const inputs = page.locator('[data-testid="fill-blank-input"], input[type="text"]');
  const count = await inputs.count();

  if (count === 0) return false;

  // 输入一个数字作为答案（适用于数学题）
  await inputs.first().fill('4');

  // 点击确认按钮
  const confirmBtn = page.locator('[data-testid="confirm-btn"], button:has-text("确认"), button:has-text("提交")');
  if (await confirmBtn.count() > 0) {
    await confirmBtn.click();
  }

  return true;
}

/**
 * 处理连线题
 */
export async function handleLinkQuestion(page: Page): Promise<boolean> {
  // 连线题需要点击左右两边进行配对
  // 使用 id 匹配元素（left-xxx 和 right-xxx）
  const leftItems = page.locator('[id^="left-"]');
  const rightItems = page.locator('[id^="right-"]');

  const leftCount = await leftItems.count();
  const rightCount = await rightItems.count();

  if (leftCount === 0 || rightCount === 0) return false;

  // 尝试连接前几个项目（左侧点击 -> 右侧点击）
  for (let i = 0; i < Math.min(leftCount, rightCount); i++) {
    await leftItems.nth(i).click();
    await page.waitForTimeout(200);
    await rightItems.nth(i).click();
    await page.waitForTimeout(300);
  }

  // 点击提交按钮
  const submitBtn = page.locator('button').filter({ hasText: /提交答案|提交/ });
  if (await submitBtn.count() > 0) {
    await submitBtn.click();
    await page.waitForTimeout(500);
  }

  return true;
}

/**
 * 处理拖拽题
 */
export async function handleDragQuestion(page: Page): Promise<boolean> {
  const dragItems = page.locator('[data-testid="drag-item"], .drag-item');
  const dropTargets = page.locator('[data-testid="drop-target"], .drop-target');

  const itemCount = await dragItems.count();
  const targetCount = await dropTargets.count();

  if (itemCount === 0 || targetCount === 0) return false;

  // 拖拽每个项目到对应的目标
  for (let i = 0; i < Math.min(itemCount, targetCount); i++) {
    const item = dragItems.nth(i);
    const target = dropTargets.nth(i);

    await item.dragTo(target);
    await page.waitForTimeout(300);
  }

  return true;
}

/**
 * 处理圈画题
 */
export async function handleCircleQuestion(page: Page): Promise<boolean> {
  // 圈画题需要点击画布上的区域
  const canvas = page.locator('[data-testid="circle-canvas"], canvas');

  if (await canvas.count() === 0) {
    // 尝试点击图片区域
    const image = page.locator('img');
    if (await image.count() > 0) {
      const box = await image.first().boundingBox();
      if (box) {
        await page.mouse.click(box.x + 50, box.y + 50);
        await page.waitForTimeout(200);
        await page.mouse.click(box.x + 100, box.y + 100);
        return true;
      }
    }
    return false;
  }

  const box = await canvas.boundingBox();
  if (box) {
    await page.mouse.click(box.x + 50, box.y + 50);
    await page.waitForTimeout(200);
    await page.mouse.click(box.x + 100, box.y + 100);
  }

  return true;
}

/**
 * 处理迷宫题
 */
export async function handleMazeQuestion(page: Page): Promise<boolean> {
  // 迷宫题需要找到路径到达终点
  // 简化处理：等待迷宫组件自动完成或点击终点
  const endCell = page.locator('[data-testid="maze-end"], .maze-end');

  if (await endCell.count() > 0) {
    await endCell.click();
    return true;
  }

  // 如果没有终点标记，等待一段时间让用户手动处理
  await page.waitForTimeout(5000);
  return true;
}

/**
 * 处理图形匹配题
 */
export async function handleShapeMatchQuestion(page: Page): Promise<boolean> {
  const cards = page.locator('[data-testid="shape-card"], .shape-card');
  const count = await cards.count();

  if (count === 0) return false;

  // 点击卡片进行匹配
  for (let i = 0; i < Math.min(count, 6); i++) {
    await cards.nth(i).click();
    await page.waitForTimeout(300);
  }

  return true;
}

/**
 * 处理七巧板题
 */
export async function handleTangramQuestion(page: Page): Promise<boolean> {
  const pieces = page.locator('[data-testid="tangram-piece"], .tangram-piece');
  const count = await pieces.count();

  if (count === 0) {
    await page.waitForTimeout(5000);
    return true;
  }

  // 拖拽七巧板块到画布
  const canvas = page.locator('[data-testid="tangram-canvas"], .tangram-canvas');
  if (await canvas.count() > 0) {
    const canvasBox = await canvas.boundingBox();
    if (canvasBox) {
      for (let i = 0; i < count; i++) {
        const piece = pieces.nth(i);
        await piece.dragTo(canvas, { targetPosition: { x: canvasBox.x + 100 + i * 50, y: canvasBox.y + 100 } });
        await page.waitForTimeout(300);
      }
    }
  }

  return true;
}

/**
 * 处理连击模式
 */
export async function handleComboQuestion(page: Page): Promise<boolean> {
  // 连击模式通常需要快速点击答案
  // 使用 force: true 绕过可能的 overlay 遮挡
  const answerBtns = page.locator('[data-testid="combo-answer"], button');
  const count = await answerBtns.count();

  if (count === 0) return false;

  // 快速点击正确答案按钮
  for (let i = 0; i < Math.min(count, 10); i++) {
    const btn = answerBtns.nth(i);
    if (await btn.isVisible()) {
      // 使用 force: true 绕过 overlay 遮挡
      await btn.click({ force: true });
      await page.waitForTimeout(100);
    }
  }

  return true;
}

/**
 * 处理计时题
 */
export async function handleTimedQuestion(page: Page): Promise<boolean> {
  const options = page.locator('[data-testid="timed-option"], button');
  const count = await options.count();

  if (count === 0) return false;

  // 快速选择答案
  await options.first().click();
  return true;
}

/**
 * 处理图形组合题
 */
export async function handleShapeComposeQuestion(page: Page): Promise<boolean> {
  const shapes = page.locator('[data-testid="compose-shape"], .compose-shape');
  const canvas = page.locator('[data-testid="compose-canvas"], .compose-canvas');

  const shapeCount = await shapes.count();

  if (shapeCount === 0 || await canvas.count() === 0) {
    await page.waitForTimeout(3000);
    return true;
  }

  const canvasBox = await canvas.boundingBox();
  if (canvasBox) {
    for (let i = 0; i < shapeCount; i++) {
      const shape = shapes.nth(i);
      await shape.dragTo(canvas, { targetPosition: { x: canvasBox.x + 50 + i * 30, y: canvasBox.y + 50 } });
      await page.waitForTimeout(200);
    }
  }

  // 点击完成按钮
  const completeBtn = page.locator('button:has-text("完成"), button:has-text("组装完成")');
  if (await completeBtn.count() > 0) {
    await completeBtn.click();
  }

  return true;
}

/**
 * 等待答题反馈消失
 */
export async function waitForFeedbackToDisappear(page: Page): Promise<void> {
  // 等待 AnswerFeedback overlay 消失
  // 检测 overlay 的存在（黑色半透明背景）
  const overlay = page.locator('.sc-eSfNbK, .sc-inyXkt, [style*="rgba(0, 0, 0, 0.5)"]');

  // 如果存在 overlay，等待它消失
  if (await overlay.count() > 0) {
    // 答对时自动跳转需要等待 2-3 秒
    await page.waitForTimeout(3000);

    // 检查是否还在显示
    if (await overlay.count() > 0) {
      // 可能需要点击"下一题"按钮
      const nextBtn = page.locator('button:has-text("下一题"), button:has-text("继续"), button:has-text("查看结果")');
      if (await nextBtn.count() > 0 && await nextBtn.isVisible()) {
        await nextBtn.click({ force: true });
        await page.waitForTimeout(500);
      }
    }
  }
}

/**
 * 处理当前题目
 */
export async function handleCurrentQuestion(page: Page): Promise<{ handled: boolean; type: string | null }> {
  const type = await getQuestionType(page);

  if (!type) {
    // 如果无法识别题目类型，尝试通用处理
    const anyButton = page.locator('button').filter({ hasNotText: '退出' });
    if (await anyButton.count() > 0) {
      await anyButton.first().click();
      return { handled: true, type: 'unknown' };
    }
    return { handled: false, type: null };
  }

  let handled = false;

  switch (type) {
    case 'choice':
      handled = await handleChoiceQuestion(page);
      break;
    case 'multi_select':
      handled = await handleMultiSelectQuestion(page);
      break;
    case 'fill_blank':
      handled = await handleFillBlankQuestion(page);
      break;
    case 'link':
      handled = await handleLinkQuestion(page);
      break;
    case 'drag':
      handled = await handleDragQuestion(page);
      break;
    case 'circle':
      handled = await handleCircleQuestion(page);
      break;
    case 'maze':
      handled = await handleMazeQuestion(page);
      break;
    case 'shape_match':
      handled = await handleShapeMatchQuestion(page);
      break;
    case 'tangram':
      handled = await handleTangramQuestion(page);
      break;
    case 'combo':
      handled = await handleComboQuestion(page);
      break;
    case 'timed':
      handled = await handleTimedQuestion(page);
      break;
    case 'shape_compose':
      handled = await handleShapeComposeQuestion(page);
      break;
  }

  // 答题后等待反馈消失
  if (handled) {
    await waitForFeedbackToDisappear(page);
  }

  return { handled, type };
}

/**
 * 处理答案反馈并进入下一题
 */
export async function handleFeedbackAndNext(page: Page): Promise<boolean> {
  // 等待反馈显示
  await page.waitForTimeout(1500);

  // 检查是否有下一题按钮
  const nextBtn = page.locator('[data-testid="next-btn"], button:has-text("下一题"), button:has-text("继续")');

  if (await nextBtn.count() > 0) {
    await nextBtn.click();
    await page.waitForTimeout(500);
    return true;
  }

  // 自动进入下一题的情况（答对自动跳转）
  await page.waitForTimeout(2500);
  return true;
}

/**
 * 验证武器进度显示
 */
export async function checkWeaponProgress(page: Page): Promise<boolean> {
  // 检查武器进度相关的元素
  const weaponProgress = page.locator('text=/武器|零件|进度/');
  return await weaponProgress.count() > 0;
}

/**
 * 验证炫卡收集动画
 */
export async function checkCardCollection(page: Page): Promise<boolean> {
  // 检查炫卡收集相关的元素
  const cardReveal = page.locator('text=/炫卡|收集|获得/');
  return await cardReveal.count() > 0;
}

/**
 * 完整关卡测试流程
 */
export async function runLevelTest(page: Page, levelId: string, difficulty: DifficultyLevel): Promise<LevelTestResult> {
  const result: LevelTestResult = {
    levelId,
    levelName: '',
    difficulty,
    passed: false,
    errors: [],
    questionsCompleted: 0,
    starsEarned: 0,
    weaponProgress: false,
    cardCollected: false,
    screenshots: [],
  };

  try {
    // 导航到关卡
    await navigateToLevel(page, levelId, difficulty);

    // 获取关卡名称
    const levelNameEl = page.locator('[data-testid="level-name"], h2, .level-name');
    if (await levelNameEl.count() > 0) {
      result.levelName = await levelNameEl.first().textContent() || '';
    }

    // 检查武器进度组件
    result.weaponProgress = await checkWeaponProgress(page);

    // 处理所有题目
    let questionIndex = 0;
    const maxQuestions = 10; // 防止无限循环

    while (questionIndex < maxQuestions) {
      // 检查是否已完成（跳转到完成页面）
      const completePage = page.locator('text=/关卡完成|完成|胜利/');
      if (await completePage.count() > 0) {
        result.questionsCompleted = questionIndex;
        result.passed = true;
        break;
      }

      // 检查是否还在答题页面 - 检查 h2 题目文字
      const questionText = page.locator('h2');
      if (await questionText.count() === 0) {
        // 可能已经进入武器展示或战斗场景
        await page.waitForTimeout(3000);

        const weaponShowcase = page.locator('text=/武器展示|组装完成|炫蓝/');
        const battleScene = page.locator('text=/战斗|击败/');

        if (await weaponShowcase.count() > 0 || await battleScene.count() > 0) {
          await page.waitForTimeout(5000);
          continue;
        }

        // 无法识别当前状态，记录截图
        const screenshot = `test-reports/screenshots/${levelId}-${difficulty}-q${questionIndex}-error.png`;
        await page.screenshot({ path: screenshot });
        result.screenshots.push(screenshot);
        result.errors.push(`无法识别题目卡片，第 ${questionIndex + 1} 题`);
        break;
      }

      // 处理当前题目
      const { handled, type } = await handleCurrentQuestion(page);

      if (!handled) {
        result.errors.push(`无法处理题目类型: ${type || '未知'}, 第 ${questionIndex + 1} 题`);
        const screenshot = `test-reports/screenshots/${levelId}-${difficulty}-q${questionIndex}-unhandled.png`;
        await page.screenshot({ path: screenshot });
        result.screenshots.push(screenshot);
      }

      // 处理反馈和下一题
      await handleFeedbackAndNext(page);

      questionIndex++;
    }

    // 等待关卡完成
    await page.waitForTimeout(3000);

    // 检查是否收集到炫卡
    result.cardCollected = await checkCardCollection(page);

    // 获取星星数
    const starsEl = page.locator('text=/星|⭐/');
    if (await starsEl.count() > 0) {
      const starsText = await starsEl.textContent() || '';
      const starsMatch = starsText.match(/(\d+)/);
      if (starsMatch) {
        result.starsEarned = parseInt(starsMatch[1]);
      }
    }

    // 最终截图
    const finalScreenshot = `test-reports/screenshots/${levelId}-${difficulty}-final.png`;
    await page.screenshot({ path: finalScreenshot });
    result.screenshots.push(finalScreenshot);

    // 判断是否通过
    result.passed = result.errors.length === 0 && result.questionsCompleted > 0;

  } catch (error) {
    result.errors.push(`测试异常: ${error instanceof Error ? error.message : String(error)}`);
    const errorScreenshot = `test-reports/screenshots/${levelId}-${difficulty}-exception.png`;
    try {
      await page.screenshot({ path: errorScreenshot });
      result.screenshots.push(errorScreenshot);
    } catch {}
  }

  return result;
}