import { level6QuestionsByDifficulty } from '../src/data/levels/level-6-enhanced.data'

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
}

console.log(`${colors.cyan}
╔══════════════════════════════════════════════════════════════╗
║     验证关卡6挑战第2题修复结果                                  ║
╚══════════════════════════════════════════════════════════════╝${colors.reset}`)

const q = level6QuestionsByDifficulty.medium[1]

console.log(`\n题目: ${q.question}`)
console.log(`\n选项:`)
q.options?.forEach(o => console.log(`  ${o.id}: ${o.text}`))
console.log(`\n正确答案: ${q.correctAnswer}`)
const correctOption = q.options?.find(o => o.id === q.correctAnswer)
console.log(`答案内容: ${correctOption?.text}`)
console.log(`\n解析: ${q.explanation}`)

console.log(`\n${colors.cyan}========== 计算验证 ==========${colors.reset}`)
console.log(`步骤1: 87 - 25 = ${87 - 25} (炫蓝闪电)`)
console.log(`步骤2: 62 + 12 = ${62 + 12} (深海霸王)`)

const isCorrect = parseInt(correctOption?.text || '0') === 74
if (isCorrect) {
  console.log(`\n${colors.green}✅ 修复成功！答案正确：74${colors.reset}`)
} else {
  console.log(`\n${colors.red}❌ 修复失败！答案应为 74，实际为 ${correctOption?.text}${colors.reset}`)
}
