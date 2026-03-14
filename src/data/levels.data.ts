import type { Level, StorySegment } from '@/types';
import { characters, getCharacterById } from './characters.data';
import { level1_1Questions } from './questions.data';

/**
 * 关卡 1-1 剧情
 */
const level1_1Story: StorySegment[] = [
  {
    id: '1',
    type: 'narration',
    text: '欢迎来到炫卡世界！',
    duration: 2000,
  },
  {
    id: '2',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电1.png',
    text: '你好！我是炫蓝闪电，你的炫卡导师。今天我们要认识一个强大的守护者！',
    duration: 3000,
  },
  {
    id: '3',
    type: 'dialogue',
    speaker: '炫蓝闪电',
    speakerImage: '/图片素材/炫蓝闪电1.png',
    text: '他叫"巨力风暴"，守护着"认识平面图形"这个关卡。',
    duration: 3000,
  },
  {
    id: '4',
    type: 'narration',
    text: '你需要答对题目，获得星星，才能收集到他的炫卡！',
    duration: 2000,
  },
];

/**
 * 所有关卡数据
 */
export const levels: Level[] = [
  {
    id: '1-1',
    name: '认识平面图形',
    chapter: 1,
    chapterName: '图形与几何',
    description: '认识圆形、三角形、正方形和长方形',
    thumbnail: '/图片素材/巨力风暴.png',
    status: 'available',
    guardian: getCharacterById('juli-fengbao') || characters[0],
    mentor: {
      id: 'xuanlan-shandian',
      name: '炫蓝闪电',
      image: '/图片素材/炫蓝闪电1.png',
      greeting: '欢迎来到炫卡世界！',
      encouragement: '你做得很棒！继续加油！',
    },
    questions: level1_1Questions,
    totalStars: 50,
    starReward: 10,
    story: level1_1Story,
  },
  // 后续关卡可以继续添加
  // {
  //   id: '1-2',
  //   name: '20以内的退位减法',
  //   ...
  // },
];

/**
 * 根据 ID 获取关卡
 */
export function getLevelById(id: string): Level | undefined {
  return levels.find((l) => l.id === id);
}

/**
 * 获取所有关卡
 */
export function getAllLevels(): Level[] {
  return levels;
}

/**
 * 获取章节列表
 */
export function getChapters() {
  const chapterMap = new Map<number, { name: string; levelIds: string[] }>();

  levels.forEach((level) => {
    if (!chapterMap.has(level.chapter)) {
      chapterMap.set(level.chapter, {
        name: level.chapterName,
        levelIds: [],
      });
    }
    chapterMap.get(level.chapter)!.levelIds.push(level.id);
  });

  return Array.from(chapterMap.entries()).map(([num, data]) => ({
    number: num,
    name: data.name,
    levelIds: data.levelIds,
  }));
}