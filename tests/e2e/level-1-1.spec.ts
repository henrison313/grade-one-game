import { test, expect } from '@playwright/test';
import {
  runLevelTest,
  waitForPageReady,
  navigateToLevel,
  handleCurrentQuestion,
  handleFeedbackAndNext,
  checkWeaponProgress,
  DifficultyLevel,
  LevelTestResult,
} from '../helpers/test-helpers';
import * as fs from 'fs';

// Level 1-1: 巨力风暴 - 认识平面图形
const LEVEL_ID = '1-1';
const LEVEL_NAME = '巨力风暴';

// 测试三档难度
const difficulties: DifficultyLevel[] = ['easy', 'medium', 'hard'];

test.describe(`关卡 ${LEVEL_ID}: ${LEVEL_NAME}`, () => {
  test.beforeEach(async ({ page }) => {
    // 清除 localStorage 以获得干净的测试环境
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
  });

  // 设置测试超时时间 - hard 需要更长时间
  test.describe.configure({ timeout: 120000 }); // 2分钟

  // 单独测试每个难度
  for (const difficulty of difficulties) {
    test(`难度 ${difficulty} - 完整流程测试`, async ({ page }) => {
      console.log(`开始测试 ${LEVEL_ID} - ${difficulty}`);

      // 导航到关卡
      await navigateToLevel(page, LEVEL_ID, difficulty);
      await page.waitForTimeout(2000);

      // 验证页面加载成功
      await expect(page).toHaveURL(/level\/1-1\/play/);

      // 截图记录初始状态
      await page.screenshot({
        path: `test-reports/screenshots/${LEVEL_ID}-${difficulty}-start.png`,
      });

      // 检查武器进度组件存在
      const hasWeaponProgress = await checkWeaponProgress(page);
      console.log(`武器进度组件: ${hasWeaponProgress ? '存在' : '不存在'}`);

      // 处理所有题目（最多 5 题）
      let questionIndex = 0;
      const maxQuestions = 5;
      const maxLoopIterations = 50; // 限制总循环次数，防止无限循环
      let loopIterations = 0;
      const errors: string[] = [];

      while (questionIndex < maxQuestions && loopIterations < maxLoopIterations) {
        loopIterations++;

        // 等待页面稳定
        await page.waitForTimeout(1000);

        // 检查是否已完成关卡（跳转到完成页面或结果页面）
        const completePage = page.locator('text=/关卡完成|完成|胜利|再来一次/');
        if (await completePage.count() > 0) {
          console.log(`第 ${questionIndex} 题后检测到完成页面`);
          break;
        }

        // 检查是否在武器展示或战斗场景
        const weaponShowcase = page.locator('text=/武器展示|组装完成|超级武器/');
        const battleScene = page.locator('text=/战斗|击败|炫卡/');

        if (await weaponShowcase.count() > 0) {
          console.log('进入武器展示阶段');
          await page.waitForTimeout(5000);
          const continueBtn = page.locator('button').filter({ hasText: /继续|下一步|开始战斗|开始/ });
          if (await continueBtn.count() > 0) {
            await continueBtn.click();
            await page.waitForTimeout(1000);
          }
          continue;
        }

        if (await battleScene.count() > 0) {
          console.log('进入战斗场景');
          await page.waitForTimeout(8000);
          const finishBtn = page.locator('button').filter({ hasText: /完成|领取|收集|继续/ });
          if (await finishBtn.count() > 0) {
            await finishBtn.click();
            await page.waitForTimeout(1000);
          }
          continue;
        }

        // 检查题目卡片存在
        const questionText = page.locator('h2');

        if (await questionText.count() === 0) {
          await page.waitForTimeout(3000);

          if (await completePage.count() > 0 || await battleScene.count() > 0) {
            break;
          }

          if (await questionText.count() === 0) {
            errors.push(`第 ${questionIndex + 1} 题：无法找到题目文字`);
            await page.screenshot({
              path: `test-reports/screenshots/${LEVEL_ID}-${difficulty}-q${questionIndex}-no-question.png`,
            });
            await page.waitForTimeout(5000);
            break;
          }
        }

        // 获取题目内容用于日志
        const questionContent = await questionText.textContent();
        console.log(`第 ${questionIndex + 1} 题: ${questionContent?.substring(0, 50)}...`);

        // 处理当前题目
        const { handled, type } = await handleCurrentQuestion(page);
        console.log(`题目类型: ${type}, 处理结果: ${handled ? '成功' : '失败'}`);

        if (!handled) {
          errors.push(`第 ${questionIndex + 1} 题：无法处理题目类型 ${type}`);
          await page.screenshot({
            path: `test-reports/screenshots/${LEVEL_ID}-${difficulty}-q${questionIndex}-unhandled.png`,
          });
        }

        // 等待答题反馈
        await page.waitForTimeout(2000);

        // 检查是否有反馈弹窗或下一题按钮
        const feedbackPopup = page.locator('text=/正确|错误|太棒了|再想想/');
        const nextBtn = page.locator('button').filter({ hasText: /下一题|继续|下一步/ });

        if (await feedbackPopup.count() > 0) {
          console.log('检测到答题反馈');
          await page.waitForTimeout(3000);
        }

        if (await nextBtn.count() > 0 && await nextBtn.isVisible()) {
          await nextBtn.click();
          await page.waitForTimeout(1000);
        }

        questionIndex++;
      }

      // 最终截图
      await page.screenshot({
        path: `test-reports/screenshots/${LEVEL_ID}-${difficulty}-final.png`,
      });

      // 等待关卡完成流程
      await page.waitForTimeout(5000);

      // 验证完成状态
      const isComplete = await page.locator('text=/关卡完成|完成|收集/').count() > 0;

      // 生成测试报告
      const report: LevelTestResult = {
        levelId: LEVEL_ID,
        levelName: LEVEL_NAME,
        difficulty,
        passed: errors.length === 0 && questionIndex > 0,
        errors,
        questionsCompleted: questionIndex,
        starsEarned: 0,
        weaponProgress: hasWeaponProgress,
        cardCollected: isComplete,
        screenshots: [],
      };

      // 保存测试报告
      const reportPath = `test-reports/${LEVEL_ID}-${difficulty}-report.json`;
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

      console.log(`测试完成: ${errors.length === 0 ? '通过' : '失败'}`);
      console.log(`完成题目数: ${questionIndex}`);
      console.log(`错误: ${errors.length}`);

      expect(questionIndex).toBeGreaterThan(0);
    });
  }

  // 综合测试报告 - 也需要更长超时
  test('生成综合测试报告', async ({ page }) => {
    const results: LevelTestResult[] = [];

    for (const difficulty of difficulties) {
      // 清除 localStorage
      await page.goto('/');
      await page.evaluate(() => localStorage.clear());

      // 运行测试
      const result = await runLevelTest(page, LEVEL_ID, difficulty);
      results.push(result);
    }

    // 生成综合报告
    const summary = {
      levelId: LEVEL_ID,
      levelName: LEVEL_NAME,
      timestamp: new Date().toISOString(),
      results,
      summary: {
        total: results.length,
        passed: results.filter((r) => r.passed).length,
        failed: results.filter((r) => !r.passed).length,
      },
    };

    const reportPath = `test-reports/${LEVEL_ID}-summary-report.json`;
    fs.writeFileSync(reportPath, JSON.stringify(summary, null, 2));

    console.log(`综合报告已生成: ${reportPath}`);
    console.log(`通过: ${summary.summary.passed}/${summary.summary.total}`);
  });
});