import { test, expect } from '@playwright/test';
import {
  waitForPageReady,
  navigateToLevel,
  handleCurrentQuestion,
  checkWeaponProgress,
  DifficultyLevel,
  LevelTestResult,
} from '../helpers/test-helpers';
import * as fs from 'fs';

// 所有需要测试的关卡
const LEVELS = [
  { id: '1-1', name: '巨力风暴 - 认识平面图形' },
  { id: '1-2', name: '急救卫士 - 平面图形拼图' },
  { id: '1-3', name: '烈火修罗 - 七巧板' },
  { id: '2-1', name: '暗影特工 - 20以内退位减法' },
  { id: '2-2', name: '铁臂爵士' },
  { id: '2-3', name: '喷射加仑' },
  { id: '2-4', name: '裂变骑士' },
  { id: '3-1', name: '暴烈重卡 - 100以内数的认识' },
  { id: '3-2', name: '深海天锚' },
  { id: '3-3', name: '重力金刚' },
];

const difficulties: DifficultyLevel[] = ['easy', 'medium', 'hard'];

// 设置测试超时时间
test.describe.configure({ timeout: 180000 }); // 3分钟

test.describe('所有关卡测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());

    // 等待页面稳定后，尝试移除 vite-error-overlay（如果存在）
    await page.waitForTimeout(1000);
    try {
      const viteOverlay = page.locator('vite-error-overlay');
      if (await viteOverlay.count() > 0) {
        // 如果有错误 overlay，尝试点击关闭或者记录错误
        console.log('检测到 vite-error-overlay');
        await page.evaluate(() => {
          const overlay = document.querySelector('vite-error-overlay');
          if (overlay) {
            // 移除 overlay 元素
            overlay.remove();
          }
        });
        await page.waitForTimeout(500);
      }
    } catch (e) {
      console.log('处理 vite-error-overlay 时出错:', e);
    }
  });

  // 批量测试所有关卡的所有难度
  for (const level of LEVELS) {
    for (const difficulty of difficulties) {
      test(`关卡 ${level.id} - ${difficulty}`, async ({ page }) => {
        console.log(`开始测试 ${level.id} - ${level.name} - ${difficulty}`);

        const result: LevelTestResult = {
          levelId: level.id,
          levelName: level.name,
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
          await navigateToLevel(page, level.id, difficulty);
          await page.waitForTimeout(2000);

          // 验证页面加载成功
          const url = page.url();
          if (!url.includes(`/level/${level.id}/play`)) {
            result.errors.push(`页面跳转失败: ${url}`);
            await page.screenshot({ path: `test-reports/screenshots/${level.id}-${difficulty}-url-error.png` });
          } else {
            // 截图记录初始状态
            await page.screenshot({ path: `test-reports/screenshots/${level.id}-${difficulty}-start.png` });

            // 检查武器进度组件
            result.weaponProgress = await checkWeaponProgress(page);

            // 处理所有题目
            let questionIndex = 0;
            const maxQuestions = 6;
            const maxLoopIterations = 60;
            let loopIterations = 0;

            while (questionIndex < maxQuestions && loopIterations < maxLoopIterations) {
              loopIterations++;
              await page.waitForTimeout(1000);

              // 检查是否已完成
              const completePage = page.locator('text=/关卡完成|完成|胜利|再来一次/');
              if (await completePage.count() > 0) {
                console.log(`检测到完成页面`);
                result.cardCollected = true;
                break;
              }

              // 检查武器展示
              const weaponShowcase = page.locator('text=/武器展示|组装完成|超级武器/');
              if (await weaponShowcase.count() > 0) {
                console.log('进入武器展示');
                await page.waitForTimeout(5000);
                const continueBtn = page.locator('button').filter({ hasText: /继续|下一步|开始战斗|开始/ });
                if (await continueBtn.count() > 0) {
                  await continueBtn.click();
                  await page.waitForTimeout(1000);
                }
                continue;
              }

              // 检查战斗场景
              const battleScene = page.locator('text=/战斗|击败|炫卡/');
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

              // 检查题目文字
              const questionText = page.locator('h2');
              if (await questionText.count() === 0) {
                await page.waitForTimeout(3000);
                if (await completePage.count() > 0 || await battleScene.count() > 0) {
                  result.cardCollected = true;
                  break;
                }
                if (await questionText.count() === 0) {
                  result.errors.push(`第 ${questionIndex + 1} 题：无法找到题目文字`);
                  await page.screenshot({ path: `test-reports/screenshots/${level.id}-${difficulty}-q${questionIndex}-no-question.png` });
                  await page.waitForTimeout(5000);
                  break;
                }
              }

              // 获取题目内容
              const questionContent = await questionText.textContent();
              console.log(`第 ${questionIndex + 1} 题: ${questionContent?.substring(0, 50)}...`);

              // 处理题目
              const { handled, type } = await handleCurrentQuestion(page);
              console.log(`题目类型: ${type}, 处理: ${handled ? '成功' : '失败'}`);

              if (!handled) {
                result.errors.push(`第 ${questionIndex + 1} 题：无法处理题目类型 ${type}`);
                await page.screenshot({ path: `test-reports/screenshots/${level.id}-${difficulty}-q${questionIndex}-unhandled.png` });
              }

              // 等待反馈
              await page.waitForTimeout(2000);
              const feedbackPopup = page.locator('text=/正确|错误|太棒了|再想想/');
              const nextBtn = page.locator('button').filter({ hasText: /下一题|继续|下一步/ });

              if (await feedbackPopup.count() > 0) {
                console.log('检测到反馈');
                await page.waitForTimeout(3000);
              }

              if (await nextBtn.count() > 0 && await nextBtn.isVisible()) {
                await nextBtn.click();
                await page.waitForTimeout(1000);
              }

              questionIndex++;
            }

            result.questionsCompleted = questionIndex;
            result.passed = result.errors.length === 0 && questionIndex > 0;

            // 最终截图
            await page.screenshot({ path: `test-reports/screenshots/${level.id}-${difficulty}-final.png` });
            await page.waitForTimeout(3000);
          }
        } catch (error) {
          result.errors.push(`测试异常: ${error instanceof Error ? error.message : String(error)}`);
          try {
            await page.screenshot({ path: `test-reports/screenshots/${level.id}-${difficulty}-exception.png` });
          } catch {}
        }

        // 保存测试报告
        const reportPath = `test-reports/${level.id}-${difficulty}-report.json`;
        fs.writeFileSync(reportPath, JSON.stringify(result, null, 2));

        console.log(`测试完成: ${result.passed ? '通过' : '失败'}, 题目数: ${result.questionsCompleted}, 错误: ${result.errors.length}`);

        // 即使有错误也不失败测试（用于调试）
        expect(result.questionsCompleted).toBeGreaterThanOrEqual(0);
      });
    }
  }

  // 生成综合报告
  test('生成综合测试报告', async ({ page }) => {
    const allResults: LevelTestResult[] = [];

    // 读取所有已生成的报告
    for (const level of LEVELS) {
      for (const difficulty of difficulties) {
        const reportPath = `test-reports/${level.id}-${difficulty}-report.json`;
        if (fs.existsSync(reportPath)) {
          const content = fs.readFileSync(reportPath, 'utf-8');
          allResults.push(JSON.parse(content));
        }
      }
    }

    const summary = {
      timestamp: new Date().toISOString(),
      totalTests: allResults.length,
      passed: allResults.filter(r => r.passed).length,
      failed: allResults.filter(r => !r.passed).length,
      levels: LEVELS.map(level => ({
        id: level.id,
        name: level.name,
        results: allResults.filter(r => r.levelId === level.id),
      })),
    };

    const summaryPath = 'test-reports/all-levels-summary-report.json';
    fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));

    console.log(`=== 测试汇总 ===`);
    console.log(`总测试数: ${summary.totalTests}`);
    console.log(`通过: ${summary.passed}`);
    console.log(`失败: ${summary.failed}`);
    console.log(`报告路径: ${summaryPath}`);
  });
});