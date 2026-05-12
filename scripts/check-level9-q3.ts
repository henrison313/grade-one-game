import { level9QuestionsByDifficulty } from '../src/data/levels/level-9-enhanced.data'

console.log("=".repeat(60))
console.log("关卡 9 新手第3题详情")
console.log("=".repeat(60))

const q = level9QuestionsByDifficulty.easy[2]
console.log("\n题目:", q.question)
console.log("选项:", q.options?.map(o => `${o.id}: ${o.text}`).join(", "))
console.log("正确答案:", q.correctAnswer)
console.log("解析:", q.explanation)

// 验证计算
console.log("\n计算验证:")
console.log("60 + 30 - 40 = ?")
console.log("第一步: 60 + 30 = 90")
console.log("第二步: 90 - 40 = 50")
console.log("正确答案应该是: 50")

// 检查选项中是否有正确答案
const correctOption = q.options?.find(opt => opt.id === q.correctAnswer)
console.log("\n标记的正确选项:", correctOption?.text)
