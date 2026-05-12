/**
 * 第六到第九单元关卡数据验证脚本
 * 基于系统测试技能进行逐一验证
 */

import { level6QuestionsByDifficulty } from '../src/data/levels/level-6-enhanced.data'
import { level71QuestionsByDifficulty } from '../src/data/levels/level-7-1-enhanced.data'
import { level72QuestionsByDifficulty } from '../src/data/levels/level-7-2-enhanced.data'
import { level8QuestionsByDifficulty } from '../src/data/levels/level-8-enhanced.data'
import { level9QuestionsByDifficulty } from '../src/data/levels/level-9-enhanced.data'
import { Question, QuestionType } from '../src/types'

// ==================== 颜色输出 ====================
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
}

// ==================== 验证结果存储 ====================
interface ValidationError {
  level: string
  difficulty: string
  questionIndex: number
  questionType: string
  error: string
  severity: 'error' | 'warning' | 'info'
}

const errors: ValidationError[] = []
const warnings: ValidationError[] = []
const infos: ValidationError[] = []

function addError(level: string, difficulty: string, index: number, type: string, error: string) {
  errors.push({ level, difficulty, questionIndex: index + 1, questionType: type, error, severity: 'error' })
}

function addWarning(level: string, difficulty: string, index: number, type: string, error: string) {
  warnings.push({ level, difficulty, questionIndex: index + 1, questionType: type, error, severity: 'warning' })
}

function addInfo(level: string, difficulty: string, index: number, type: string, error: string) {
  infos.push({ level, difficulty, questionIndex: index + 1, questionType: type, error, severity: 'info' })
}

// ==================== 题目验证函数 ====================

/**
 * 验证题目基础结构
 */
function validateQuestionStructure(q: Question, level: string, difficulty: string, index: number): boolean {
  let valid = true

  if (!q.question || q.question.trim() === '') {
    addError(level, difficulty, index, q.type, '题目内容为空')
    valid = false
  }

  if (!q.explanation || q.explanation.trim() === '') {
    addWarning(level, difficulty, index, q.type, '缺少解析')
  }

  if (!q.hint || q.hint.trim() === '') {
    addWarning(level, difficulty, index, q.type, '缺少提示')
  }

  return valid
}

/**
 * 验证选择题
 */
function validateChoice(q: Question, level: string, difficulty: string, index: number): boolean {
  let valid = true

  if (!q.options || q.options.length === 0) {
    addError(level, difficulty, index, q.type, '选择题缺少选项')
    return false
  }

  if (!q.correctAnswer) {
    addError(level, difficulty, index, q.type, '选择题缺少正确答案')
    valid = false
  } else {
    const correctOption = q.options.find(opt => opt.id === q.correctAnswer)
    if (!correctOption) {
      addError(level, difficulty, index, q.type, `正确答案 "${q.correctAnswer}" 不在选项中。可用选项: ${q.options.map(o => o.id).join(', ')}`)
      valid = false
    }
  }

  return valid
}

/**
 * 验证多选题
 */
function validateMultiSelect(q: Question, level: string, difficulty: string, index: number): boolean {
  let valid = true

  if (!q.options || q.options.length === 0) {
    addError(level, difficulty, index, q.type, '多选题缺少选项')
    return false
  }

  if (!q.correctAnswers || q.correctAnswers.length === 0) {
    addError(level, difficulty, index, q.type, '多选题缺少正确答案列表')
    valid = false
  } else {
    for (const answer of q.correctAnswers) {
      const correctOption = q.options.find(opt => opt.id === answer)
      if (!correctOption) {
        addError(level, difficulty, index, q.type, `正确答案 "${answer}" 不在选项中`)
        valid = false
      }
    }
  }

  return valid
}

/**
 * 验证填空题
 */
function validateFillBlank(q: Question, level: string, difficulty: string, index: number): boolean {
  if (!q.answer || q.answer.trim() === '') {
    addError(level, difficulty, index, q.type, '填空题缺少答案')
    return false
  }
  return true
}

/**
 * 验证拖拽题
 */
function validateDrag(q: Question, level: string, difficulty: string, index: number): boolean {
  let valid = true

  if (!q.items || q.items.length === 0) {
    addError(level, difficulty, index, q.type, '拖拽题缺少可拖拽项目')
    valid = false
  }

  if (!q.targets || q.targets.length === 0) {
    addError(level, difficulty, index, q.type, '拖拽题缺少目标区域')
    valid = false
  }

  return valid
}

/**
 * 数学计算验证 - 检查答案是否与题目计算一致
 */
function validateMathCalculation(q: Question, level: string, difficulty: string, index: number) {
  const text = q.question

  // 匹配数学表达式: 数字 运算符 数字 [运算符 数字]
  const patterns = [
    // 两数加减: 30 + 20, 68 - 40
    { regex: /(\d+)\s*\+\s*(\d+)(?:\s*=\s*\?)?/, type: 'add2' },
    { regex: /(\d+)\s*-\s*(\d+)(?:\s*=\s*\?)?/, type: 'sub2' },
    // 三数运算: 30 + 40 + 20, 80 - 20 - 30
    { regex: /(\d+)\s*\+\s*(\d+)\s*\+\s*(\d+)/, type: 'add3' },
    { regex: /(\d+)\s*-\s*(\d+)\s*-\s*(\d+)/, type: 'sub3' },
    { regex: /(\d+)\s*\+\s*(\d+)\s*-\s*(\d+)/, type: 'addsub3' },
  ]

  for (const pattern of patterns) {
    const match = text.match(pattern.regex)
    if (!match) continue

    let calculated: number

    if (pattern.type === 'add2') {
      calculated = parseInt(match[1]) + parseInt(match[2])
    } else if (pattern.type === 'sub2') {
      calculated = parseInt(match[1]) - parseInt(match[2])
    } else if (pattern.type === 'add3') {
      calculated = parseInt(match[1]) + parseInt(match[2]) + parseInt(match[3])
    } else if (pattern.type === 'sub3') {
      calculated = parseInt(match[1]) - parseInt(match[2]) - parseInt(match[3])
    } else if (pattern.type === 'addsub3') {
      calculated = parseInt(match[1]) + parseInt(match[2]) - parseInt(match[3])
    } else {
      continue
    }

    // 验证选择题答案
    if (q.type === QuestionType.CHOICE && q.options && q.correctAnswer) {
      const correctOption = q.options.find(opt => opt.id === q.correctAnswer)
      if (correctOption) {
        const optionNum = parseInt(correctOption.text.replace(/[^\d]/g, ''))
        if (!isNaN(optionNum) && optionNum !== calculated) {
          addError(level, difficulty, index, q.type, `答案计算错误: ${match[1]} ${pattern.type.includes('add') ? '+' : '-'} ${match[2]} = ${calculated}，但正确答案是 ${optionNum}`)
        }
      }
    }

    // 验证填空题答案
    if (q.type === QuestionType.FILL_BLANK && q.answer) {
      const answerNums = q.answer.split(',').map(s => parseInt(s.trim()))
      const calculatedStr = calculated.toString()
      if (!answerNums.some(n => n.toString() === calculatedStr)) {
        if (!q.answer.includes(calculatedStr)) {
          addWarning(level, difficulty, index, q.type, `填空题答案 "${q.answer}" 可能与计算结果 ${calculated} 不符，请人工复核`)
        }
      }
    }
  }
}

/**
 * 验证斐波那契数列等特殊规律
 */
function validateFibonacci(q: Question, level: string, difficulty: string, index: number) {
  const text = q.question.toLowerCase()
  
  // 检查是否提到斐波那契
  if (text.includes('斐波那契') || text.includes('1、1、2、3、5、8')) {
    // 1, 1, 2, 3, 5, 8, 13
    const fibPattern = /1\s*[,、]\s*1\s*[,、]\s*2\s*[,、]\s*3\s*[,、]\s*5\s*[,、]\s*8\s*[,、]\s*([_\?]+)/
    const match = text.match(fibPattern)
    if (match && q.type === QuestionType.CHOICE && q.correctAnswer) {
      const correctOption = q.options?.find(opt => opt.id === q.correctAnswer)
      if (correctOption) {
        const optionNum = parseInt(correctOption.text.replace(/[^\d]/g, ''))
        if (!isNaN(optionNum) && optionNum !== 13) {
          addError(level, difficulty, index, q.type, `斐波那契数列答案错误: 1,1,2,3,5,8 的下一个应该是 13，但答案是 ${optionNum}`)
        }
      }
    }
  }
}

// ==================== 关卡验证 ====================

interface LevelConfig {
  id: string
  name: string
  data: Record<string, Question[]>
}

const levels: LevelConfig[] = [
  { id: '6', name: '星际游侠', data: level6QuestionsByDifficulty },
  { id: '7-1', name: '爆旋洛克-认识人民币', data: level71QuestionsByDifficulty },
  { id: '7-2', name: '深海霸王-买卖我做主', data: level72QuestionsByDifficulty },
  { id: '8', name: '银翼骑士', data: level8QuestionsByDifficulty },
  { id: '9', name: '重装赤魂王', data: level9QuestionsByDifficulty },
]

function validateLevel(level: LevelConfig) {
  console.log(`${colors.cyan}\n========== 验证关卡 ${level.id}: ${level.name} ==========${colors.reset}`)

  const difficulties = [
    { key: 'easy', name: '新手' },
    { key: 'medium', name: '挑战' },
    { key: 'hard', name: '高手' },
  ]

  for (const diff of difficulties) {
    const questions = level.data[diff.key]
    if (!questions || questions.length === 0) {
      console.log(`${colors.yellow}  ${diff.name}难度: 无题目${colors.reset}`)
      continue
    }

    console.log(`${colors.blue}  ${diff.name}难度: ${questions.length} 题${colors.reset}`)

    questions.forEach((q, i) => {
      // 基础结构验证
      validateQuestionStructure(q, level.id, diff.name, i)

      // 类型特定验证
      switch (q.type) {
        case QuestionType.CHOICE:
          validateChoice(q, level.id, diff.name, i)
          break
        case QuestionType.MULTI_SELECT:
          validateMultiSelect(q, level.id, diff.name, i)
          break
        case QuestionType.FILL_BLANK:
          validateFillBlank(q, level.id, diff.name, i)
          break
        case QuestionType.DRAG:
          validateDrag(q, level.id, diff.name, i)
          break
      }

      // 数学计算验证
      validateMathCalculation(q, level.id, diff.name, i)

      // 斐波那契验证
      validateFibonacci(q, level.id, diff.name, i)
    })
  }
}

// ==================== 主程序 ====================

console.log(`${colors.magenta}
╔══════════════════════════════════════════════════════════════╗
║     第六到第九单元关卡数据验证报告                              ║
║     基于系统测试技能 - 严格模式                                ║
╚══════════════════════════════════════════════════════════════╝${colors.reset}`)

// 验证所有关卡
for (const level of levels) {
  validateLevel(level)
}

// 生成报告
console.log(`${colors.magenta}\n========== 验证结果汇总 ==========${colors.reset}`)

// 错误
if (errors.length > 0) {
  console.log(`${colors.red}\n❌ 发现 ${errors.length} 个严重错误:${colors.reset}`)
  errors.forEach((e, i) => {
    console.log(`${colors.red}  ${i + 1}. [${e.level}] ${e.difficulty} 第${e.questionIndex}题 (${e.questionType}): ${e.error}${colors.reset}`)
  })
}

// 警告
if (warnings.length > 0) {
  console.log(`${colors.yellow}\n⚠️  发现 ${warnings.length} 个警告:${colors.reset}`)
  warnings.forEach((w, i) => {
    console.log(`${colors.yellow}  ${i + 1}. [${w.level}] ${w.difficulty} 第${w.questionIndex}题 (${w.questionType}): ${w.error}${colors.reset}`)
  })
}

// 信息
if (infos.length > 0) {
  console.log(`${colors.blue}\nℹ️  ${infos.length} 条信息:${colors.reset}`)
  infos.forEach((info, i) => {
    console.log(`${colors.blue}  ${i + 1}. [${info.level}] ${info.difficulty} 第${info.questionIndex}题: ${info.error}${colors.reset}`)
  })
}

// 统计
const totalIssues = errors.length + warnings.length
console.log(`\n${colors.cyan}========== 统计 ==========${colors.reset}`)
console.log(`  关卡数: ${levels.length}`)
console.log(`  严重错误: ${colors.red}${errors.length}${colors.reset}`)
console.log(`  警告: ${colors.yellow}${warnings.length}${colors.reset}`)
console.log(`  信息: ${colors.blue}${infos.length}${colors.reset}`)
console.log(`  总计: ${totalIssues > 0 ? colors.red : colors.green}${totalIssues} 个问题${colors.reset}`)

if (errors.length === 0 && warnings.length === 0) {
  console.log(`\n${colors.green}✅ 所有关卡验证通过！未发现明显问题。${colors.reset}`)
} else if (errors.length === 0) {
  console.log(`\n${colors.yellow}⚠️  验证完成，发现 ${warnings.length} 个警告，建议复查。${colors.reset}`)
} else {
  console.log(`\n${colors.red}❌ 验证失败，发现 ${errors.length} 个严重错误，需要修复！${colors.reset}`)
}

console.log(`${colors.magenta}================================${colors.reset}\n`)

// 退出码
process.exit(errors.length > 0 ? 1 : 0)
