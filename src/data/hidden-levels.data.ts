/**
 * 隐藏关卡数据结构
 */

import type { Level, StorySegment } from '@/types';
import { characters, getCharacterById } from './characters.data';
import { levelH1Questions } from './levels/level-h1.data';
import { levelH2Questions } from './levels/level-h2.data';

/**
 * 隐藏关卡 H1 剧情：超炫电光王的秘密基地
 */
const levelH1Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '小俊在整理炫卡时，发现超炫电光王的卡片发出神秘光芒！',
    duration: 2500,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '原来这是隐藏 BOSS 的考验！只有真正理解数字组成的孩子才能进入他的秘密基地！',
    duration: 3500,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '超炫电光王',
    speakerImage: '/图片素材/超炫电光王.png',
    text: '我是超炫电光王，来自数字王国！让我看看你对数位的理解有多深！',
    duration: 3000,
  },
  {
    id: '4',
    type: 'narration',
    text: '用圆片在数位表上摆数，证明你的实力！',
    duration: 2000,
  },
];

/**
 * 隐藏关卡 H2 剧情：炫蓝雷霆王的时空裂缝
 */
const levelH2Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '击败重装赤魂王后，时空出现裂缝！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电 1.png',
    text: '这是炫蓝闪电的终极形态——炫蓝雷霆王从未来穿越而来！',
    duration: 3000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝雷霆王',
    speakerImage: '/图片素材/炫蓝雷霆王.png',
    text: '我从未来带来更高阶的数学挑战！只有综合应用所有知识，才能击败我！',
    duration: 3500,
  },
  {
    id: '4',
    type: 'narration',
    text: '跨单元综合挑战，准备好了吗？',
    duration: 2000,
  },
];

/**
 * 隐藏关卡数据
 */
export const hiddenLevels: Level[] = [
  // 隐藏关卡 H1：超炫电光王的秘密基地
  {
    id: 'H1',
    name: '超炫电光王的秘密基地',
    chapter: 10,
    chapterName: '隐藏关卡',
    description: '用圆片在数位表上摆数，理解数的组成',
    thumbnail: '/图片素材/超炫电光王.png',
    status: 'locked',
    guardian: getCharacterById('chaoxuan-dianguangwang') || characters[20],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '隐藏 BOSS 的考验！',
      encouragement: '你真正理解了数的组成！',
    },
    questions: levelH1Questions,
    totalStars: 50,
    starReward: 10,
    story: levelH1Story,
    unlockConditions: [
      {
        type: 'levels_completed',
        targetLevels: ['1-1', '1-2', '1-3'],
        minStars: 3, // 每个关卡至少 3 星
      },
      {
        type: 'stars_collected',
        minStars: 100,
      },
    ],
    unlockLogic: 'AND',
    reward: {
      card: {
        characterId: 'chaoxuan-dianguangwang',
        rarity: 'rainbow',
      },
      skill: {
        id: 'digit-perspective',
        name: '数位透视',
        description: '在后续关卡中自动显示数位提示',
        type: 'passive',
        permanent: true,
      },
    },
  },

  // 隐藏关卡 H2：炫蓝雷霆王的时空裂缝
  {
    id: 'H2',
    name: '炫蓝雷霆王的时空裂缝',
    chapter: 10,
    chapterName: '隐藏关卡',
    description: '跨单元综合挑战，应用提升',
    thumbnail: '/图片素材/炫蓝雷霆王.png',
    status: 'locked',
    guardian: getCharacterById('xuanlan-leitingwang') || characters[21],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电 1.png',
      greeting: '终极形态的挑战！',
      encouragement: '你掌握了所有知识！',
    },
    questions: levelH2Questions,
    totalStars: 40,
    starReward: 10,
    story: levelH2Story,
    unlockConditions: [
      {
        type: 'accuracy',
        targetLevel: '9',
        minAccuracy: 0.9, // 90% 正确率
      },
    ],
    unlockLogic: 'AND',
    reward: {
      card: {
        characterId: 'xuanlan-leitingwang',
        rarity: 'prismatic',
      },
    },
  },
];

/**
 * 根据 ID 获取隐藏关卡
 */
export function getHiddenLevelById(id: string): Level | undefined {
  return hiddenLevels.find((l) => l.id === id);
}

/**
 * 检查隐藏关卡是否已解锁
 */
export function isHiddenLevelUnlocked(_levelId: string): boolean {
  // 这里只是占位实现，实际逻辑在 hidden-level-unlock.service.ts 中实现
  return false;
}
