import type { Character } from '@/types';

/**
 * 所有角色数据
 */
export const characters: Character[] = [
  {
    id: 'juli-fengbao',
    name: '巨力风暴',
    title: '力量守护者',
    description: '拥有强大力量的炫卡斗士，守护着"认识平面图形"关卡。他的变形能力让他在战斗中无往不利。',
    vehicleImage: '/图片素材/巨力风暴.png',
    robotImage: '/图片素材/巨力风暴.png',
    stats: {
      height: '4.2米',
      weight: '3.5吨',
      speed: '120km/h',
      power: '8500马力',
    },
    skills: [
      {
        name: '风暴冲击',
        description: '利用强大的力量制造风暴，击退敌人',
      },
      {
        name: '重力压制',
        description: '改变周围重力，让敌人无法动弹',
      },
    ],
    knowledge: ['认识平面图形', '圆形', '三角形', '正方形', '长方形'],
    rarity: 'rare',
    number: '001',
  },
  {
    id: 'xuanlan-shandian',
    name: '炫蓝闪电',
    title: '智慧导师',
    description: '炫卡世界的智慧导师，负责引导新战士完成训练。他的闪电速度代表着思维的敏捷。',
    vehicleImage: '/图片素材/炫蓝闪电1.png',
    robotImage: '/图片素材/炫蓝闪电2.png',
    stats: {
      height: '3.8米',
      weight: '2.8吨',
      speed: '350km/h',
      power: '6000马力',
    },
    skills: [
      {
        name: '闪电加速',
        description: '瞬间提升速度，快速移动到任何位置',
      },
      {
        name: '智慧之光',
        description: '释放智慧能量，帮助战士们思考问题',
      },
    ],
    knowledge: ['数学基础', '逻辑思维'],
    rarity: 'epic',
    number: '000',
  },
  {
    id: 'baoche-jiushi',
    name: '急救卫士',
    title: '生命守护者',
    description: '医疗救援型炫卡斗士，永远在第一时间赶赴现场救助伤员。',
    vehicleImage: '/图片素材/急救卫士.png',
    robotImage: '/图片素材/急救卫士.png',
    stats: {
      height: '3.5米',
      weight: '2.2吨',
      speed: '180km/h',
      power: '4500马力',
    },
    skills: [
      {
        name: '紧急救援',
        description: '快速到达现场进行救援',
      },
    ],
    knowledge: ['20以内的退位减法'],
    rarity: 'common',
    number: '002',
  },
  {
    id: 'liehuo-xiuluo',
    name: '烈火修罗',
    title: '火焰战士',
    description: '操控火焰的炫卡斗士，在烈火中锻造出强大的意志。',
    vehicleImage: '/图片素材/烈火修罗.png',
    robotImage: '/图片素材/烈火修罗.png',
    stats: {
      height: '4.0米',
      weight: '3.0吨',
      speed: '200km/h',
      power: '7000马力',
    },
    skills: [
      {
        name: '烈焰冲击',
        description: '释放烈焰攻击敌人',
      },
    ],
    knowledge: ['100以内数的认识'],
    rarity: 'rare',
    number: '003',
  },
  {
    id: 'anying-tegong',
    name: '暗影特工',
    title: '潜行者',
    description: '擅长隐秘行动的炫卡斗士，在暗影中守护正义。',
    vehicleImage: '/图片素材/暗影特工.png',
    robotImage: '/图片素材/暗影特工.png',
    stats: {
      height: '3.6米',
      weight: '2.5吨',
      speed: '280km/h',
      power: '5500马力',
    },
    skills: [
      {
        name: '暗影潜行',
        description: '隐身移动，悄无声息',
      },
    ],
    knowledge: ['认识人民币'],
    rarity: 'rare',
    number: '004',
  },
  {
    id: 'tiebi-jueshi',
    name: '铁臂爵士',
    title: '力量战士',
    description: '拥有钢铁手臂的炫卡斗士，力量惊人，正义的化身。',
    vehicleImage: '/图片素材/铁臂爵士.png',
    robotImage: '/图片素材/铁臂爵士.png',
    stats: {
      height: '4.5米',
      weight: '4.0吨',
      speed: '150km/h',
      power: '9000马力',
    },
    skills: [
      {
        name: '铁臂重击',
        description: '用钢铁手臂发出致命一击',
      },
    ],
    knowledge: ['100以内的加法和减法'],
    rarity: 'epic',
    number: '005',
  },
  {
    id: 'penshi-jialun',
    name: '喷射加仑',
    title: '消防战士',
    description: '消防型炫卡斗士，喷射高压水柱，灭火救援两不误。',
    vehicleImage: '/图片素材/喷射加仑.png',
    robotImage: '/图片素材/喷射加仑.png',
    stats: {
      height: '3.8米',
      weight: '3.2吨',
      speed: '160km/h',
      power: '6000马力',
    },
    skills: [
      {
        name: '高压水炮',
        description: '喷射高压水柱灭火',
      },
    ],
    knowledge: ['找规律'],
    rarity: 'common',
    number: '006',
  },
  {
    id: 'liebian-qishi',
    name: '裂变骑士',
    title: '分裂战士',
    description: '能够分裂成多个个体的炫卡斗士，战斗力成倍增长。',
    vehicleImage: '/图片素材/裂变骑士.png',
    robotImage: '/图片素材/裂变骑士.png',
    stats: {
      height: '4.0米',
      weight: '2.8吨',
      speed: '220km/h',
      power: '7500马力',
    },
    skills: [
      {
        name: '裂变分身',
        description: '分裂成多个分身作战',
      },
    ],
    knowledge: ['分类与整理'],
    rarity: 'epic',
    number: '007',
  },
  {
    id: 'baolie-zhongka',
    name: '暴烈重卡',
    title: '运输战士',
    description: '重型运输型炫卡斗士，载重能力超强，是团队的后勤保障。',
    vehicleImage: '/图片素材/暴烈重卡.png',
    robotImage: '/图片素材/暴烈重卡.png',
    stats: {
      height: '5.0米',
      weight: '6.0吨',
      speed: '120km/h',
      power: '10000马力',
    },
    skills: [
      {
        name: '重装突击',
        description: '利用巨大载重进行突击',
      },
    ],
    knowledge: ['位置'],
    rarity: 'rare',
    number: '008',
  },
  {
    id: 'shenhai-tianmao',
    name: '深海天锚',
    title: '海洋战士',
    description: '深海作战型炫卡斗士，在海洋中自由穿梭，守护蓝色领土。',
    vehicleImage: '/图片素材/深海天锚.png',
    robotImage: '/图片素材/深海天锚.png',
    stats: {
      height: '4.2米',
      weight: '3.8吨',
      speed: '150km/h(水下80节)',
      power: '8000马力',
    },
    skills: [
      {
        name: '深海锚击',
        description: '发射深海锚进行攻击',
      },
    ],
    knowledge: ['找规律'],
    rarity: 'epic',
    number: '009',
  },
];

/**
 * 根据 ID 获取角色
 */
export function getCharacterById(id: string): Character | undefined {
  return characters.find((c) => c.id === id);
}

/**
 * 获取所有角色
 */
export function getAllCharacters(): Character[] {
  return characters;
}