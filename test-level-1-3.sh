#!/bin/bash

echo "========================================"
echo "第三关【七巧板】自动化测试报告"
echo "========================================"
echo ""

# 1. 数据层验证
echo "## 1. 数据层验证"
echo ""

# 检查文件是否存在
if [ -f "src/data/levels/level-1-3-enhanced.data.ts" ]; then
    echo "✅ 数据文件存在：src/data/levels/level-1-3-enhanced.data.ts"
else
    echo "❌ 数据文件不存在"
    exit 1
fi

# 验证题目数量
EASY_COUNT=$(grep -c "type:" src/data/levels/level-1-3-enhanced.data.ts || echo "0")
echo "📊 总题目数量：约 $EASY_COUNT 题（目标 21 题：7 题×3 难度）"

# 检查填空题格式
FILL_BLANK_WRONG=$(grep -n " ___ " src/data/levels/level-1-3-enhanced.data.ts | wc -l | tr -d ' ')
if [ "$FILL_BLANK_WRONG" -eq 0 ]; then
    echo "✅ 填空题格式正确（使用 {{___}}）"
else
    echo "❌ 发现 $FILL_BLANK_WRONG 处填空题格式错误（使用 ___ 而非 {{___}}）"
fi

# 检查拖拽题 shape 属性
DRAG_WITH_SHAPE=$(grep -A5 "QuestionType.DRAG" src/data/levels/level-1-3-enhanced.data.ts | grep -c "shape:" || echo "0")
if [ "$DRAG_WITH_SHAPE" -gt 0 ]; then
    echo "✅ 拖拽题包含 shape 属性（$DRAG_WITH_SHAPE 处）"
else
    echo "❌ 拖拽题缺少 shape 属性"
fi

# 检查 SHAPE_COMPOSE 题 shape 属性
SHAPE_COMPOSE_WITH_SHAPE=$(grep -A5 "QuestionType.SHAPE_COMPOSE" src/data/levels/level-1-3-enhanced.data.ts | grep -c "shape:" || echo "0")
if [ "$SHAPE_COMPOSE_WITH_SHAPE" -gt 0 ]; then
    echo "✅ SHAPE_COMPOSE 题包含 shape 属性（$SHAPE_COMPOSE_WITH_SHAPE 处）"
else
    echo "❌ SHAPE_COMPOSE 题缺少 shape 属性"
fi

echo ""

# 2. 角色形态验证
echo "## 2. 角色形态验证"
echo ""

if grep -q "liehuo-xiuluo" src/data/character-variants.data.ts; then
    echo "✅ 烈火修罗角色 ID 正确：liehuo-xiuluo"
else
    echo "❌ 烈火修罗角色 ID 未找到"
fi

if grep -q "烈火修罗 - 机器人.png" src/data/character-variants.data.ts; then
    echo "✅ 基础形态图片路径正确"
else
    echo "❌ 基础形态图片路径错误"
fi

if grep -q "烈火修罗 - 烈焰形态.png" src/data/character-variants.data.ts; then
    echo "✅ 烈焰形态图片路径正确"
else
    echo "❌ 烈焰形态图片路径错误"
fi

if grep -q "烈火修罗 - 终极形态.png" src/data/character-variants.data.ts; then
    echo "✅ 终极形态图片路径正确"
else
    echo "❌ 终极形态图片路径错误"
fi

if grep -q "'liehuo-xiuluo': '#EF4444'" src/data/character-variants.data.ts; then
    echo "✅ 分组颜色正确：红色 #EF4444"
else
    echo "❌ 分组颜色未配置"
fi

echo ""

# 3. 绝招配置验证
echo "## 3. 绝招配置验证"
echo ""

if grep -q "'liehuo-xiuluo':" src/data/character-ultimates.data.ts; then
    echo "✅ 新手形态绝招配置存在"
    if grep -A3 "'liehuo-xiuluo':" src/data/character-ultimates.data.ts | grep -q "水流发射"; then
        echo "   ✅ 绝招名称：水流发射"
    fi
else
    echo "❌ 新手形态绝招配置未找到"
fi

if grep -q "'liehuo-xiuluo-flame':" src/data/character-ultimates.data.ts; then
    echo "✅ 挑战形态绝招配置存在"
    if grep -A3 "'liehuo-xiuluo-flame':" src/data/character-ultimates.data.ts | grep -q "烈焰巨锤"; then
        echo "   ✅ 绝招名称：烈焰巨锤"
    fi
else
    echo "❌ 挑战形态绝招配置未找到"
fi

if grep -q "'liehuo-xiuluo-ultimate':" src/data/character-ultimates.data.ts; then
    echo "✅ 高手形态绝招配置存在"
    if grep -A3 "'liehuo-xiuluo-ultimate':" src/data/character-ultimates.data.ts | grep -q "巨锤重击"; then
        echo "   ✅ 绝招名称：巨锤重击"
    fi
else
    echo "❌ 高手形态绝招配置未找到"
fi

echo ""

# 4. 故事配置验证
echo "## 4. 故事配置验证"
echo ""

if grep -q "EasyFirefightingStoryConfig" src/config/question-story.config.ts; then
    echo "✅ 新手模式故事配置存在：EasyFirefightingStoryConfig"
else
    echo "❌ 新手模式故事配置未找到"
fi

if grep -q "MediumFirefightingStoryConfig" src/config/question-story.config.ts; then
    echo "✅ 挑战模式故事配置存在：MediumFirefightingStoryConfig"
else
    echo "❌ 挑战模式故事配置未找到"
fi

if grep -q "HardFirefightingStoryConfig" src/config/question-story.config.ts; then
    echo "✅ 高手模式故事配置存在：HardFirefightingStoryConfig"
else
    echo "❌ 高手模式故事配置未找到"
fi

# 检查场景叙事
if grep -q "消防站" src/config/question-story.config.ts; then
    echo "✅ 场景 1：消防站"
fi

if grep -q "居民楼" src/config/question-story.config.ts; then
    echo "✅ 场景 2：居民楼"
fi

if grep -q "商场" src/config/question-story.config.ts; then
    echo "✅ 场景 3：商场"
fi

if grep -q "工厂" src/config/question-story.config.ts; then
    echo "✅ 场景 4：工厂"
fi

if grep -q "烟花" src/config/question-story.config.ts; then
    echo "✅ 场景 5：烟花广场"
fi

# 检查烈火修罗怕火剧情
if grep -q "克服恐惧\|创伤\|怕火" src/config/question-story.config.ts; then
    echo "✅ 包含烈火修罗怕火剧情元素"
fi

echo ""

# 5. 构建验证
echo "## 5. 构建验证"
echo ""
echo "构建已在开发时完成，检查构建产物..."

if [ -f "dist/index.html" ]; then
    echo "✅ 构建产物存在：dist/index.html"
else
    echo "❌ 构建产物不存在"
fi

if [ -f "dist/assets/level-1-3*.js" ] 2>/dev/null || [ -f "dist/assets/character-variants.data-CTzdd_kA.js" ]; then
    echo "✅ 角色形态数据已打包"
else
    echo "⚠️ 角色形态数据打包文件未找到（可能文件名不同）"
fi

echo ""
echo "========================================"
echo "自动化测试完成"
echo "========================================"
