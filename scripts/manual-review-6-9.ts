/**
 * 第六到第九单元关卡数据人工复核
 * 针对验证脚本发现的问题进行精确检查
 */

import { level6QuestionsByDifficulty } from '../src/data/levels/level-6-enhanced.data'
import { level71QuestionsByDifficulty } from '../src/data/levels/level-7-1-enhanced.data'
import { level72QuestionsByDifficulty } from '../src/data/levels/level-7-2-enhanced.data'
import { level8QuestionsByDifficulty } from '../src/data/levels/level-8-enhanced.data'
import { level9QuestionsByDifficulty } from '../src/data/levels/level-9-enhanced.data'
import { QuestionType } from '../src/types'

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
}

console.log(`${colors.cyan}
╔══════════════════════════════════════════════════════════════╗
║     第六到第九单元关卡数据人工复核                              ║
╚══════════════════════════════════════════════════════════════╝${colors.reset}`)

// ==================== 人工验证选择题答案 ====================

interface ChoiceQuestionCheck {
  level: string
  difficulty: string
  index: number
  question: string
  correctAnswer: string
  correctOptionText: string
  calculated?: number
  isValid: boolean
  reason: string
}

const checks: ChoiceQuestionCheck[] = []

function verifyChoiceCalculation(
  level: string,
  difficulty: string,
  questions: any[],
  extractCalculation: (q: string) => { nums: number[], ops: string[], result: number } | null
) {
  questions.forEach((q, i) => {
    if (q.type !== QuestionType.CHOICE) return
    
    const calc = extractCalculation(q.question)
    if (!calc) return

    const correctOption = q.options?.find((o: any) => o.id === q.correctAnswer)
    if (!correctOption) {
      checks.push({
        level,
        difficulty,
        index: i + 1,
        question: q.question,
        correctAnswer: q.correctAnswer,
        correctOptionText: '未找到',
        calculated: calc.result,
        isValid: false,
        reason: '正确答案选项不存在'
      })
      return
    }

    const optionNum = parseInt(correctOption.text.replace(/[^\d]/g, ''))
    const isValid = optionNum === calc.result

    checks.push({
      level,
      difficulty,
      index: i + 1,
      question: q.question,
      correctAnswer: q.correctAnswer,
      correctOptionText: correctOption.text,
      calculated: calc.result,
      isValid,
      reason: isValid ? '✅ 正确' : `❌ 应该是 ${calc.result}`
    })
  })
}

// 简单的两数加减验证
function simpleCalc(question: string): { nums: number[], ops: string[], result: number } | null {
  // 匹配 "A + B = ?" 或 "A - B = ?"
  const match = question.match(/(\d+)\s*\+\s*(\d+)(?:\s*-\s*(\d+))?\s*=\s*\?/)
  if (match) {
    const n1 = parseInt(match[1])
    const n2 = parseInt(match[2])
    const n3 = match[3] ? parseInt(match[3]) : null
    
    if (n3 !== null) {
      return { nums: [n1, n2, n3], ops: ['+', '-'], result: n1 + n2 - n3 }
    }
    return { nums: [n1, n2], ops: ['+'], result: n1 + n2 }
  }

  const match2 = question.match(/(\d+)\s*-\s*(\d+)(?:\s*\+\s*(\d+))?\s*=\s*\?/)
  if (match2) {
    const n1 = parseInt(match2[1])
    const n2 = parseInt(match2[2])
    const n3 = match2[3] ? parseInt(match2[3]) : null
    
    if (n3 !== null) {
      return { nums: [n1, n2, n3], ops: ['-', '+'], result: n1 - n2 + n3 }
    }
    return { nums: [n1, n2], ops: ['-'], result: n1 - n2 }
  }

  return null
}

// 验证所有关卡
const allLevels = [
  { id: '6', data: level6QuestionsByDifficulty },
  { id: '7-1', data: level71QuestionsByDifficulty },
  { id: '7-2', data: level72QuestionsByDifficulty },
  { id: '8', data: level8QuestionsByDifficulty },
  { id: '9', data: level9QuestionsByDifficulty },
]

for (const level of allLevels) {
  for (const [diff, questions] of Object.entries(level.data)) {
    verifyChoiceCalculation(level.id, diff, questions as any[], simpleCalc)
  }
}

// 输出结果
console.log(`\n${colors.cyan}========== 选择题计算验证 ==========${colors.reset}`)

const validChecks = checks.filter(c => c.isValid)
const invalidChecks = checks.filter(c => !c.isValid)

console.log(`\n找到 ${checks.length} 道可验证的选择题`)

if (invalidChecks.length > 0) {
  console.log(`\n${colors.red}❌ 发现 ${invalidChecks.length} 道答案错误的选择题:${colors.reset}`)
  invalidChecks.forEach(c => {
    console.log(`${colors.red}  [${c.level}] ${c.difficulty} 第${c.index}题: ${c.question}`)
    console.log(`    计算结果: ${c.calculated}, 标记答案: ${c.correctOptionText}, ${c.reason}${colors.reset}`)
  })
}

if (validChecks.length > 0) {
  console.log(`\n${colors.green}✅ ${validChecks.length} 道选择题答案正确${colors.reset}`)
}

// ==================== 检查规律题 ====================

console.log(`\n${colors.cyan}========== 规律题验证 ==========${colors.reset}`)

// 检查斐波那契数列
const fibQuestions = [
  { level: '6', difficulty: 'hard', index: 5, data: level6QuestionsByDifficulty.hard[4] },
  { level: '8', difficulty: 'medium', index: 1, data: level8QuestionsByDifficulty.medium[0] },
  { level: '9', difficulty: 'hard', index: 2, data: level9QuestionsByDifficulty.hard[1] },
]

console.log('\n斐波那契数列题:')
fibQuestions.forEach(q => {
  console.log(`  [${q.level}] ${q.difficulty} 第${q.index}题: ${q.data.question}`)
  if (q.data.type === QuestionType.CHOICE) {
    const correctOption = q.data.options?.find((o: any) => o.id === q.data.correctAnswer)
    console.log(`    答案: ${correctOption?.text} (应该是13) ${parseInt(correctOption?.text || '0') === 13 ? '✅' : '❌'}`)
  }
})

// 检查平方数列
const squareQuestions = [
  { level: '8', difficulty: 'hard', index: 2, data: level8QuestionsByDifficulty.hard[1] },
  { level: '9', difficulty: 'hard', index: 3, data: level9QuestionsByDifficulty.hard[2] },
]

console.log('\n平方数列题:')
squareQuestions.forEach(q => {
  console.log(`  [${q.level}] ${q.difficulty} 第${q.index}题: ${q.data.question}`)
  if (q.data.type === QuestionType.FILL_BLANK) {
    console.log(`    答案: ${q.data.answer} (应该是25) ${q.data.answer === '25' ? '✅' : '❌'}`)
  }
})

// 检查等差数列
console.log('\n等差数列题:')
const arithmeticQuestions = [
  { level: '8', difficulty: 'easy', index: 2, data: level8QuestionsByDifficulty.easy[1], expected: 10 },
  { level: '8', difficulty: 'easy', index: 4, data: level8QuestionsByDifficulty.easy[3], expected: 25 },
  { level: '8', difficulty: 'medium', index: 4, data: level8QuestionsByDifficulty.medium[3], expected: 15 },
  { level: '9', difficulty: 'medium', index: 1, data: level9QuestionsByDifficulty.medium[0], expected: '40,45' },
]

arithmeticQuestions.forEach(q => {
  console.log(`  [${q.level}] ${q.difficulty} 第${q.index}题: ${q.data.question}`)
  if (q.data.type === QuestionType.CHOICE) {
    const correctOption = q.data.options?.find((o: any) => o.id === q.data.correctAnswer)
    console.log(`    答案: ${correctOption?.text} (应该是${q.expected}) ${parseInt(correctOption?.text || '0') === q.expected ? '✅' : '❌'}`)
  } else if (q.data.type === QuestionType.FILL_BLANK) {
    console.log(`    答案: ${q.data.answer} (应该是${q.expected}) ${q.data.answer === q.expected ? '✅' : '❌'}`)
  }
})

// ==================== 总结 ====================

console.log(`\n${colors.cyan}========== 总结 ==========${colors.reset}`)

if (invalidChecks.length === 0) {
  console.log(`${colors.green}\n✅ 所有验证的选择题答案正确！${colors.reset}`)
} else {
  console.log(`${colors.red}\n❌ 发现 ${invalidChecks.length} 道答案错误，需要修复！${colors.reset}`)
}

console.log('')
