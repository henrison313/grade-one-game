---
name: 巨力风暴多形态炫卡收集系统
description: 实现挑战/高手模式的巨力风暴不同形态图片，以及炫卡收集册的多形态分组展示功能
created: 2026-04-20
---

# 巨力风暴多形态炫卡收集系统设计

## Context

用户需求：
1. **挑战模式**：巨力风暴使用火焰形态图片 (`巨力风暴-机器人-火.jpeg`)
2. **高手模式**：巨力风暴使用终极形态图片 (`巨力风暴-机器人-终极.jpeg`)
3. **炫卡收集动画**：根据难度显示对应形态的炫卡
4. **炫卡收集册**：支持同一角色收集多种形态，按角色分组展示

---

## 一、巨力风暴形态定义

| 难度 | 形态名称 | variant | 稀有度 | 图片路径 |
|------|----------|---------|--------|----------|
| easy | 基础形态 | base | rare | `/图片素材/巨力风暴-机器人.jpeg` |
| medium | 火焰形态 | flame | gold | `/图片素材/巨力风暴-机器人-火.jpeg` |
| hard | 终极形态 | ultimate | rainbow | `/图片素材/巨力风暴-机器人-终极.jpeg` |

---

## 二、数据结构修改

### CollectedCard 扩展

```typescript
// src/types/user.types.ts
interface CollectedCard {
  characterId: string;      // 基础角色 ID
  variant: 'base' | 'flame' | 'ultimate';  // 新增：形态类型
  rarity: RarityLevel;      // 新增：该形态的稀有度
  collectedAt: string;
  levelId: string;
  stars: number;
  difficulty: DifficultyLevel;  // 新增：难度来源
}
```

### 角色形态配置

```typescript
// src/data/character-variants.data.ts（新文件）
interface CharacterVariant {
  characterId: string;
  variant: 'base' | 'flame' | 'ultimate';
  rarity: RarityLevel;
  image: string;
  difficulty: DifficultyLevel;
  name: string;  // 显示名称（如"巨力风暴·火焰形态"）
}

const characterVariants: CharacterVariant[] = [
  {
    characterId: 'juli-fengbao',
    variant: 'base',
    rarity: 'rare',
    image: '/图片素材/巨力风暴-机器人.jpeg',
    difficulty: 'easy',
    name: '巨力风暴',
  },
  {
    characterId: 'juli-fengbao',
    variant: 'flame',
    rarity: 'gold',
    image: '/图片素材/巨力风暴-机器人-火.jpeg',
    difficulty: 'medium',
    name: '巨力风暴·火焰形态',
  },
  {
    characterId: 'juli-fengbao',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: '/图片素材/巨力风暴-机器人-终极.jpeg',
    difficulty: 'hard',
    name: '巨力风暴·终极形态',
  },
];
```

---

## 三、炫卡收集册布局设计（方案 C）

### 展示效果

- 每个形态独立一张卡片
- 同一角色的形态卡片相邻排列
- 用左侧颜色条标记同一角色分组
- 未收集的形态显示灰色占位卡片

### 卡片样式

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ 🤖          │  │ 🔥          │  │ ✨          │
│ 巨力风暴    │  │ 巨力风暴    │  │ 巨力风暴    │
│ 基础形态    │  │ 火焰形态    │  │ 终极形态    │
│ rare        │  │ gold        │  │ rainbow     │
└─────────────┘  └─────────────┘  └─────────────┘
   ↑蓝色边条        ↑蓝色边条        ↑蓝色边条（同一组）
```

### 分组颜色方案

每个角色分配一个独特的分组颜色：
- 巨力风暴：#3B82F6（蓝色）
- 炫蓝闪电：#FFD700（金色）
- 急救卫士：#10B981（绿色）
- ...

---

## 四、文件修改清单

| 文件 | 修改内容 |
|------|----------|
| `src/types/user.types.ts` | 扩展 CollectedCard 结构，添加 variant/rarity/difficulty 字段 |
| `src/data/character-variants.data.ts` | 新建：角色形态配置数据 |
| `src/features/battle/battle-scene/battle-scene.component.tsx` | 根据难度切换巨力风暴图片 |
| `src/features/level/level-complete/level-complete.component.tsx` | 根据难度显示对应形态炫卡 |
| `src/features/card/card-collection/card-collection.component.tsx` | 改造为多形态分组展示 |
| `src/services/storage.service.ts` | 更新炫卡收集逻辑，支持多形态 |

---

## 五、验证步骤

1. `npm run build` 确认编译无误
2. 启动 `npm run dev`
3. **战斗场景验证**：
   - 新手模式：巨力风暴显示基础形态
   - 挑战模式：巨力风暴显示火焰形态
   - 高手模式：巨力风暴显示终极形态
4. **炫卡收集验证**：
   - 完成不同难度关卡，收集不同形态炫卡
   - 检查炫卡收集册分组展示效果
5. 系统化测试：依次验证三种难度的完整流程