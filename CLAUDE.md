# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目信息
- 项目名称：炫卡收集游戏
- 项目类型：Web 应用
- 主要语言：TypeScript
- 框架：React 19 + Vite
- 包管理器：npm
- 状态管理：localStorage + React state (无全局状态库)
- 样式方案：styled-components
- 动画：framer-motion
- 路由：react-router-dom

## 项目概述

这是一款面向一年级儿童的数学学习卡牌收集游戏:
- 炫卡斗士风格的卡牌收集机制激励学习
- 数学课程基于人教版一年级下学期教材
- 题目难度对标《黄冈小状元作业本》
- 目标用户：~7 岁儿童，UI 需简单、有趣、易操作
- 离线可用：核心玩法不依赖服务器
- 回复语言：所有回复均用中文

## 音效系统配置

### 音频资源目录
```
public/audio/
  bg/         # 背景音乐 (BGM)
  sfx/        # 音效 (SE)
  ultimate/   # 绝招音效
```

### BGM 类型
| 类型 | 用途 | 文件 |
|------|------|------|
| `menu` | 主界面 | menu-theme.mp3 |
| `battle` | 战斗/答题 | battle-theme.mp3 |
| `victory` | 胜利/关卡完成 | victory-theme.mp3 |
| `story` | 剧情/关卡介绍 | story-theme.mp3 |
| `collection` | 卡牌收集册 | collection-theme.mp3 |

### 音效类型
- 答题：`correct`, `wrong`, `click`, `combo-1`, `combo-5`, `combo-10`
- 战斗：`card-reveal`, `star-earn`, `level-complete`, `victory`, `defeat`
- 交互：`drag`, `drop`, `summon`, `transform`
- 绝招：`ultimate-bronze`, `ultimate-silver`, `ultimate-gold`, `ultimate-rainbow`, `ultimate-prismatic`

### 音量配置
- 默认音量：音效 0.7, BGM 0.4, 语音 0.8
- BGM 压低音量：0.15 (语音播放时)
- 设置持久化：localStorage

### 音频资源来源
- Kenney Music Jingles: https://kenney.nl/assets/music-jingles
- 格式要求：MP3 或 Ogg (浏览器兼容)

## 常用命令
```
npm install       # 安装依赖
npm run dev       # 启动开发环境 (默认端口 3000)
npm run build     # 构建生产版本 (完成任何修改后必须运行验证)
npm run preview   # 预览生产版本
npm run lint      # 代码检查
```

## 核心玩法与数据流

```
答题闯关 → 获得星星积分 → 凑够积分击败炫卡斗士 → 收集角色炫卡 → 成果展示
```

**用户数据持久化**: 通过 `storageService` 单例管理，数据存储在 localStorage，键名由 `GameConfig.storageKey` 定义。用户数据包括：
- 关卡进度 (`levelProgress`)
- 收集的卡牌 (`collectedCards`)
- 总星星数 (`totalStars`)
- 用户设置 (`settings`)

**页面路由**:
- `/` - 首页
- `/levels` - 关卡选择
- `/level/:levelId/intro` - 关卡剧情介绍
- `/level/:levelId/play` - 答题页面
- `/level/:levelId/complete` - 关卡完成/卡牌获得
- `/collection` - 卡牌收集册

## 命名规范

### 文件命名
- 格式：`[功能]-[描述].[类型].ext`
- 全小写，中划线分隔
- 类型后缀：`.component`, `.service`, `.hook`, `.config`, `.types`
- 示例：`story-player.component.tsx`, `speech.service.ts`, `use-sound.hook.ts`

### 文件夹命名
- 格式：kebab-case (全小写，中划线分隔)
- 禁止：大写字母、空格
- 层级：最多 4 层深度
- 单文件直接放父目录，不单独建文件夹

## 目录结构
```
src/
  features/       # 业务功能模块 (home, level, quiz, story, card, character)
  shared/         # 公共代码 (components, hooks, styles)
  services/       # 服务层 (storage, sound, speech)
  config/         # 配置文件 (game.config, 主题颜色)
  types/          # 类型定义
  data/           # 静态数据 (characters, levels, questions, games-examples)
docs/             # 版本规划、测试报告、PRD
public/           # 图片素材
```

## 核心类型系统

**题目类型** (`QuestionType` 枚举):
- `CHOICE` - 单选题
- `MULTI_SELECT` - 多选题
- `DRAG` - 拖拽题
- `CIRCLE` - 圈画题
- `FILL_BLANK` - 填空题
- `LINK` - 连线配对题
- `MAZE` - 迷宫答题题

**角色系统**:
- `Character` - 炫卡角色，有载具/机器人两种形态，关联知识点和稀有度
- `Mentor` - 导师角色，用于关卡引导
- 每个关卡有一个守护者 (`guardian: Character`) 和一个导师 (`mentor: Mentor`)

**关卡结构** (`Level`):
- 包含题目列表 (`questions`)
- 包含剧情片段 (`story: StorySegment[]`)
- 关联守护者角色 (`guardian`)

## 可复用游戏组件

位于 `src/shared/components/`，所有组件通过 `index.ts` 统一导出：

| 组件 | 用途 |
|------|------|
| `Shape` / `DraggableShape` / `ClickableShape` | 图形渲染，支持颜色/大小/动画 |
| `ShapeSortingGame` | 图形分类游戏 |
| `ShapeMatchingGame` | 图形配对记忆游戏 |
| `FindShapeGame` | 找图形游戏 |
| `LinkGame` | 连线配对游戏 |
| `MazeGame` | 迷宫闯关答题游戏 |
| `CalculatorGame` | 计算器模拟答题游戏 |
| `CardSummoner` | 卡牌召唤器动画 |

示例配置数据位于 `src/data/games-examples.data.ts`。

## 路径别名
```
@/*           → src/*
@shared/*     → src/shared/*
@features/*   → src/features/*
@config/*     → src/config/*
@types/*      → src/types/*
@services/*   → src/services/*
@data/*       → src/data/*
```

## 代码复用

IMPORTANT: 禁止重复实现已有功能
- 相同代码出现 2 次 → 必须提取为公共函数
- 新建文件前 → 先搜索是否已有类似功能
- 公共模块禁止依赖业务模块，避免循环依赖

## 修改原则

IMPORTANT: 根本解决问题
- 找到 root cause，从根本上解决
- 正面面对问题，不绕过不回避
- 禁止打补丁、用 hack、投机取巧
- 废弃代码：确认无引用 → 直接删除
- 只改必要文件，不顺便改无关代码


## 禁止事项
- 硬编码密钥、密码、敏感信息
- 单文件单独建文件夹
- 公共模块依赖业务模块
- 复制粘贴已有代码而不复用
- 保留"以防万一"的废弃代码

## AI 协作协议


### 解决问题
- 遇到问题：先分析根本原因，再提出方案
- 不接受："先这样绕过"、"加个判断跳过"
- 复杂修复：说明根本原因，等待确认后再动手

### 代码质量
- 发现重复代码：主动指出并提议合并
- 发现死代码：主动指出并建议删除
- 发现设计问题：指出问题本质，提供重构建议

### 工作方式
- 不确定时：询问确认，不要猜测
- 修改前：先阅读理解现有代码
- 修改后：说明改了什么、为什么改
- 发现无关问题：指出但不"顺便"修复
- 学到项目新知识时：发现值得记录的规范、命令、模式或坑点，主动提议更新 CLAUDE.md，需用户确认后才执行

### 交付标准
- 完整实现需求，不做简化版/演示版
- 不遗留 TODO 或"后续可以扩展"
- 代码可直接运行，不需要人工补充

### 验证方式
- 完成前必须验证：运行测试/检查，确认无错误，运行 `npm run build` 确认无编译错误
- 验证失败时：查看错误、修复、重新验证，循环直到通过
- 不要假设正确：能验证的就验证，不要说"应该没问题"
- 新代码：确认有对应测试
- 修改代码：运行相关测试
- 删除代码：确认无引用

## 语言/框架特定规则

### TypeScript
- 启用 strict 模式
- 禁止 any，使用 unknown + 类型守卫
- 禁止 @ts-ignore
- 路径导入使用别名 `@/` 而非相对路径

### React 组件
- 组件文件命名：`[功能].component.tsx`
- 使用函数组件 + Hooks
- 样式使用 styled-components，定义在组件文件内
- 动画使用 framer-motion

### 服务层
- 服务类导出单例实例
- 提供便捷函数导出 (如 `speak`, `stopSpeaking`)
