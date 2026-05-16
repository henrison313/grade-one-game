import { getAssetPath } from '@/config/paths.config';
/**
 * 隐藏关卡数据结构
 */

import type { Level, StorySegment } from '@/types';
import { characters, getCharacterById } from './characters.data';
import { levelH1EasyQuestions as levelH1Questions } from './levels/level-h1.data';
import { levelH2EasyQuestions as levelH2Questions } from './levels/level-h2.data';

/**
 * 隐藏关卡 H1 剧情：超炫电光王的合体觉醒
 * 第一季大结局：十一位炫卡斗士合体
 */
const levelH1Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '【第一季大结局】小俊成功收集了十位炫卡斗士的力量！炫蓝闪电S感受到前所未有的能量波动！',
    duration: 3500,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电S',
    speakerImage: getAssetPath(getAssetPath('/assets/character/炫蓝闪电S.png')),
    text: '伙伴们！巨力风暴、急救卫士、烈火修罗、暗影特工、铁臂爵士、喷射加仑、裂变骑士、暴烈重卡、重力金刚、深海天锚——你们的力量与我共鸣！禁断之力正在觉醒！',
    duration: 5000,
  },
  {
    id: '3',
    type: 'narration',
    text: '十位伙伴的力量汇聚成璀璨光芒，炫蓝闪电S开始变形！',
    duration: 3000,
  },
  {
    id: '4',
    type: 'dialogue',
    speaker: '超炫电光王',
    speakerImage: getAssetPath(getAssetPath('/assets/character/超炫电光王.png')),
    text: '用圆片在数位表上摆出正确的数，激活合体能量！让我们一起成为守护和平的超炫电光王！',
    duration: 4000,
  },
];

/**
 * 隐藏关卡 H2 剧情：炫蓝雷霆王的时空裂缝
 * 炫蓝雷霆王从未来穿越而来，帮助小俊对抗重装赤魂王
 */
const levelH2Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '一道时空裂缝在炫卡世界上方撕开，紫色雷霆从裂缝中涌出！',
    duration: 2500,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电S',
    speakerImage: getAssetPath(getAssetPath('/assets/character/炫蓝闪电S.png')),
    text: '这是……来自未来的力量！时空裂缝中走出来的，是我从未见过的形态！',
    duration: 4000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝雷霆王',
    speakerImage: getAssetPath(getAssetPath('/assets/character/炫蓝雷霆王.png')),
    text: '小俊！我从未来穿越而来！重装赤魂王的力量在未来会毁灭炫卡世界，只有我能阻止他！但你需要先通过我的考验！',
    duration: 5000,
  },
  {
    id: '4',
    type: 'dialogue',
    speaker: '炫蓝雷霆王',
    speakerImage: getAssetPath(getAssetPath('/assets/character/炫蓝雷霆王.png')),
    text: '我的雷霆之力需要数学能量激活！用你学到的所有知识，证明你有资格驾驭这股力量！',
    duration: 4000,
  },
  {
    id: '5',
    type: 'narration',
    text: '跨单元综合挑战开始！通过考验，获得炫蓝雷霆王的力量！',
    duration: 2500,
  },
];

/**
 * 隐藏关卡数据
 */
export const hiddenLevels: Level[] = [
  // 隐藏关卡 H1：超炫电光王的合体觉醒
  {
    id: 'H1',
    name: '超炫电光王的合体觉醒',
    chapter: 10,
    chapterName: '第一季大结局',
    description: '十一位炫卡斗士力量汇聚！炫蓝闪电S觉醒禁断之力，与伙伴们合体成为超炫电光王！用数位知识激活合体能量！',
    thumbnail: getAssetPath(getAssetPath('/assets/character/超炫电光王.png')),
    status: 'locked',
    guardian: getCharacterById('chaoxuan-dianguangwang') || characters[20],
    mentor: {
      id: 'xuanlan-shandian-s',
      name: '炫蓝闪电S',
      image: getAssetPath(getAssetPath('/assets/character/炫蓝闪电S.png')),
      greeting: '伙伴们，合体能量就绪！',
      encouragement: '合体成功！超炫电光王觉醒！',
    },
    questions: levelH1Questions,
    totalStars: 50,
    starReward: 10,
    story: levelH1Story,
    unlockConditions: [
      {
        type: 'levels_completed',
        targetLevels: ['1-1', '1-2', '1-3', '2-1', '2-2', '2-3', '2-4', '3-1', '3-2', '3-3'],
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
        description: '在后续关卡中自动显示数位提示，让你成为数字大师！',
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
    description: '炫蓝雷霆王撕开了时空裂缝！跨越所有单元知识，终极综合大挑战，你敢来吗？',
    thumbnail: getAssetPath(getAssetPath('/assets/character/炫蓝雷霆王.png')),
    status: 'locked',
    guardian: getCharacterById('xuanlan-leitingwang') || characters[21],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: getAssetPath(getAssetPath('/assets/character/炫蓝闪电 1.png')),
      greeting: '终极形态的挑战！',
      encouragement: '你掌握了所有知识！',
    },
    questions: levelH2Questions,
    totalStars: 40,
    starReward: 10,
    story: levelH2Story,
    unlockConditions: [
      {
        type: 'levels_completed',
        targetLevels: ['1-1', '1-2', '1-3', '2-1', '2-2', '2-3', '2-4', '3-1', '3-2', '3-3', '3-4', '4-1', '4-2', '4-3', '5-1', '5-2', '6', '7-1', '7-2', '8'],
        minStars: 3, // 每个关卡至少 3 星
      },
      {
        type: 'stars_collected',
        minStars: 90,
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
