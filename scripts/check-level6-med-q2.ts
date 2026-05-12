import { level6QuestionsByDifficulty } from '../src/data/levels/level-6-enhanced.data'

console.log("=".repeat(70))
console.log("关卡6挑战第2题详细检查")
console.log("=".repeat(70))

const q = level6QuestionsByDifficulty.medium[1]
console.log("\n题目:", q.question)
console.log("选项:", q.options?.map(o => `${o.id}: ${o.text}`).join(", "))
console.log("正确答案:", q.correctAnswer)
console.log("解析:", q.explanation)

console.log("\n" + "=".repeat(70))
console.log("计算验证:")
console.log("=".repeat(70))

console.log("\n步骤1: 星际游侠能量 = 87")
console.log("步骤2: 炫蓝闪电 = 87 - 25 = 62")
console.log("步骤3: 深海霸王 = 62 + 12 = 74")

console.log("\n预期答案: 74")
console.log("实际答案: b (77)")

console.log("\n❌ 发现严重错误!")
console.log("正确答案应该是 74，但数据中标记的答案是 77")

console.log("\n".repeat(2))

// 检查解析是否也有问题
console.log("解析内容:", q.explanation)
console.log("\n解析说'让我用正确的计算：87-25=62，62+12=74'")
console.log("但答案却标记为77，这是矛盾的！")
