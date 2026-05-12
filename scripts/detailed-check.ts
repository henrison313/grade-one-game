import { level51QuestionsByDifficulty } from '../src/data/levels/level-5-1-enhanced.data'
import { level52QuestionsByDifficulty } from '../src/data/levels/level-5-2-enhanced.data'

console.log("=".repeat(60))
console.log("关卡 5-1 问题详情")
console.log("=".repeat(60))

// 5-1 新手第3题
const q51_easy_3 = level51QuestionsByDifficulty.easy[2]
console.log("\n【5-1 新手 第3题】")
console.log("题目:", q51_easy_3.question)
console.log("答案:", q51_easy_3.answer)
console.log("解析:", q51_easy_3.explanation)
console.log("提示:", q51_easy_3.hint)

// 5-1 挑战第1题
const q51_med_1 = level51QuestionsByDifficulty.medium[0]
console.log("\n【5-1 挑战 第1题】")
console.log("题目:", q51_med_1.question)
console.log("选项:", q51_med_1.options?.map(o => `${o.id}: ${o.text}`).join(", "))
console.log("正确答案:", q51_med_1.correctAnswer)
console.log("解析:", q51_med_1.explanation)

console.log("\n" + "=".repeat(60))
console.log("关卡 5-2 问题详情")
console.log("=".repeat(60))

// 5-2 新手第3题
const q52_easy_3 = level52QuestionsByDifficulty.easy[2]
console.log("\n【5-2 新手 第3题】")
console.log("题目:", q52_easy_3.question)
console.log("答案:", q52_easy_3.answer)
console.log("解析:", q52_easy_3.explanation)

// 5-2 新手第4题
const q52_easy_4 = level52QuestionsByDifficulty.easy[3]
console.log("\n【5-2 新手 第4题】")
console.log("题目:", q52_easy_4.question)
console.log("选项:", q52_easy_4.options?.map(o => `${o.id}: ${o.text}`).join(", "))
console.log("正确答案:", q52_easy_4.correctAnswer)
console.log("解析:", q52_easy_4.explanation)

// 5-2 挑战第1题
const q52_med_1 = level52QuestionsByDifficulty.medium[0]
console.log("\n【5-2 挑战 第1题】")
console.log("题目:", q52_med_1.question)
console.log("选项:", q52_med_1.options?.map(o => `${o.id}: ${o.text}`).join(", "))
console.log("正确答案:", q52_med_1.correctAnswer)
console.log("解析:", q52_med_1.explanation)
