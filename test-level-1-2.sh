#!/bin/bash

echo "========================================"
echo "第二关【平面图形的拼图】自动化测试报告"
echo "========================================"
echo ""

# 1. 数据层验证
echo "## 1. 数据层验证"
echo ""

# 检查文件是否存在
if [ -f "src/data/levels/level-1-2-enhanced.data.ts" ]; then
    echo "✅ 数据文件存在：src/data/levels/level-1-2-enhanced.data.ts"
else
    echo "❌ 数据文件不存在"
    exit 1
fi

# 验证题目数量
EASY_COUNT=$(grep -c "type:" src/data/levels/level-1-2-enhanced.data.ts || echo "0")
echo "📊 总题目数量：约 $EASY_COUNT 题（需手动确认三档各 5 题）"

# 检查填空题格式
FILL_BLANK_WRONG=$(grep -n " ___ " src/data/levels/level-1-2-enhanced.data.ts | wc -l | tr -d ' ')
if [ "$FILL_BLANK_WRONG" -eq 0 ]; then
    echo "✅ 填空题格式正确（使用 {{___}}）"
else
    echo "❌ 发现 $FILL_BLANK_WRONG 处填空题格式错误（使用 ___ 而非 {{___}}）"
fi

# 检查拖拽题 shape 属性
DRAG_WITH_SHAPE=$(grep -A5 "QuestionType.DRAG" src/data/levels/level-1-2-enhanced.data.ts | grep -c "shape:" || echo "0")
if [ "$DRAG_WITH_SHAPE" -gt 0 ]; then
    echo "✅ 拖拽题包含 shape 属性（$DRAG_WITH_SHAPE 处）"
else
    echo "❌ 拖拽题缺少 shape 属性"
fi

echo ""

# 2. 角色形态验证
echo "## 2. 角色形态验证"
echo ""

if grep -q "ji-jiu-wei-shi" src/data/character-variants.data.ts; then
    echo "✅ 急救卫士角色 ID 正确：ji-jiu-wei-shi"
else
    echo "❌ 急救卫士角色 ID 未找到"
fi

if grep -q "急救卫士 - 机器人.png" src/data/character-variants.data.ts; then
    echo "✅ 基础形态图片路径正确"
else
    echo "❌ 基础形态图片路径错误"
fi

if grep -q "急救卫士 - 战地形态.png" src/data/character-variants.data.ts; then
    echo "✅ 战地形态图片路径正确"
else
    echo "❌ 战地形态图片路径错误"
fi

if grep -q "急救卫士 - 终极形态.png" src/data/character-variants.data.ts; then
    echo "✅ 终极形态图片路径正确"
else
    echo "❌ 终极形态图片路径错误"
fi

if grep -q "'ji-jiu-wei-shi': '#FFFFFF'" src/data/character-variants.data.ts; then
    echo "✅ 分组颜色正确：白色 #FFFFFF"
else
    echo "❌ 分组颜色未配置"
fi

echo ""

# 3. 绝招配置验证
echo "## 3. 绝招配置验证"
echo ""

if grep -q "'ji-jiu-wei-shi':" src/data/character-ultimates.data.ts; then
    echo "✅ 新手形态绝招配置存在"
    if grep -A3 "'ji-jiu-wei-shi':" src/data/character-ultimates.data.ts | grep -q "治疗射线"; then
        echo "   ✅ 绝招名称：治疗射线"
    fi
else
    echo "❌ 新手形态绝招配置未找到"
fi

if grep -q "'ji-jiu-wei-shi-battle':" src/data/character-ultimates.data.ts; then
    echo "✅ 挑战形态绝招配置存在"
    if grep -A3 "'ji-jiu-wei-shi-battle':" src/data/character-ultimates.data.ts | grep -q "巨钳重压"; then
        echo "   ✅ 绝招名称：巨钳重压"
    fi
else
    echo "❌ 挑战形态绝招配置未找到"
fi

if grep -q "'ji-jiu-wei-shi-ultimate':" src/data/character-ultimates.data.ts; then
    echo "✅ 高手形态绝招配置存在"
    if grep -A3 "'ji-jiu-wei-shi-ultimate':" src/data/character-ultimates.data.ts | grep -q "巨钳休克"; then
        echo "   ✅ 绝招名称：巨钳休克"
    fi
else
    echo "❌ 高手形态绝招配置未找到"
fi

echo ""

# 4. 故事配置验证
echo "## 4. 故事配置验证"
echo ""

if grep -q "EasyMedicalStoryConfig" src/config/question-story.config.ts; then
    echo "✅ 新手模式故事配置存在：EasyMedicalStoryConfig"
else
    echo "❌ 新手模式故事配置未找到"
fi

if grep -q "MediumMedicalStoryConfig" src/config/question-story.config.ts; then
    echo "✅ 挑战模式故事配置存在：MediumMedicalStoryConfig"
else
    echo "❌ 挑战模式故事配置未找到"
fi

if grep -q "HardMedicalStoryConfig" src/config/question-story.config.ts; then
    echo "✅ 高手模式故事配置存在：HardMedicalStoryConfig"
else
    echo "❌ 高手模式故事配置未找到"
fi

# 检查场景叙事
if grep -q "摩城医院" src/config/question-story.config.ts; then
    echo "✅ 场景 1：摩城医院"
fi

if grep -q "救护车" src/config/question-story.config.ts; then
    echo "✅ 场景 2：救护车"
fi

if grep -q "建筑工地" src/config/question-story.config.ts; then
    echo "✅ 场景 3：建筑工地"
fi

if grep -q "游乐场" src/config/question-story.config.ts; then
    echo "✅ 场景 4：游乐场"
fi

if grep -q "直升机" src/config/question-story.config.ts; then
    echo "✅ 场景 5：救援直升机"
fi

echo ""

# 5. 构建验证
echo "## 5. 构建验证"
echo ""
echo "正在运行 npm run build..."
npm run build > /tmp/build-output.txt 2>&1
BUILD_RESULT=$?

if [ $BUILD_RESULT -eq 0 ]; then
    echo "✅ 构建成功 - 无 TypeScript 编译错误"
    echo "✅ 无 Vite 打包错误"
else
    echo "❌ 构建失败"
    echo "错误输出:"
    tail -20 /tmp/build-output.txt
fi

echo ""
echo "========================================"
echo "自动化测试完成"
echo "========================================"
