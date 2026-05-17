import { getAssetPath } from '@/config/paths.config';
import type { RarityLevel, VariantType } from '@/types';
import { DifficultyLevel } from '@/types';

/**
 * 角色形态属性
 */
export interface VariantStats {
  height: string;
  weight: string;
  speed: string;
  power: string;
}

/**
 * 角色形态配置
 */
export interface CharacterVariant {
  characterId: string;
  variant: VariantType;
  rarity: RarityLevel;
  image: string;
  difficulty: DifficultyLevel;
  displayName: string;
  stats?: VariantStats;
}

/**
 * 巨力风暴的多形态配置
 */
export const juliFengbaoVariants: CharacterVariant[] = [
  {
    characterId: 'juli-fengbao',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/juli-fengbao-robot.jpeg'),
    difficulty: DifficultyLevel.EASY,
    displayName: '巨力风暴',
    stats: { height: '4.2 米', weight: '3.5 吨', speed: '120km/h', power: '8500 马力' },
  },
  {
    characterId: 'juli-fengbao',
    variant: 'flame',
    rarity: 'gold',
    image: getAssetPath('/assets/character/juli-fengbao-flame.jpeg'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '巨力风暴·火焰形态',
    stats: { height: '4.5 米', weight: '3.8 吨', speed: '150km/h', power: '10000 马力' },
  },
  {
    characterId: 'juli-fengbao',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/juli-fengbao-ultimate.jpeg'),
    difficulty: DifficultyLevel.HARD,
    displayName: '巨力风暴·终极形态',
    stats: { height: '4.8 米', weight: '4.2 吨', speed: '180km/h', power: '12000 马力' },
  },
];

/**
 * 急救卫士的多形态配置
 */
export const baocheJiushiVariants: CharacterVariant[] = [
  {
    characterId: 'baoche-jiushi',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/jiushi-weishi-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '急救卫士',
    stats: { height: '3.5 米', weight: '2.2 吨', speed: '180km/h', power: '4500 马力' },
  },
  {
    characterId: 'baoche-jiushi',
    variant: 'battle',
    rarity: 'gold',
    image: getAssetPath('/assets/character/jiushi-weishi-battle.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '急救卫士·战地形态',
    stats: { height: '3.8 米', weight: '2.5 吨', speed: '220km/h', power: '5500 马力' },
  },
  {
    characterId: 'baoche-jiushi',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/jiushi-weishi-ultimate.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '急救卫士·终极形态',
    stats: { height: '4.0 米', weight: '2.8 吨', speed: '260km/h', power: '6800 马力' },
  },
];

/**
 * 烈火修罗的多形态配置
 */
export const lieHuoXiuLuoVariants: CharacterVariant[] = [
  {
    characterId: 'liehuo-xiuluo',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/liehuo-xiuluo-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '烈火修罗',
    stats: { height: '4.0 米', weight: '3.0 吨', speed: '200km/h', power: '7000 马力' },
  },
  {
    characterId: 'liehuo-xiuluo',
    variant: 'flame',
    rarity: 'gold',
    image: getAssetPath('/assets/character/liehuo-xiuluo-lava.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '烈火修罗·熔岩战甲',
    stats: { height: '4.3 米', weight: '3.4 吨', speed: '240km/h', power: '8500 马力' },
  },
  {
    characterId: 'liehuo-xiuluo',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/liehuo-xiuluo-inferno.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '烈火修罗·焚天魔神',
    stats: { height: '4.6 米', weight: '3.8 吨', speed: '280km/h', power: '10000 马力' },
  },
];

/**
 * 暗影特工的多形态配置
 */
export const anYingTeGongVariants: CharacterVariant[] = [
  {
    characterId: 'anying-tegong',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/anying-tegong-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '暗影特工',
    stats: { height: '3.2 米', weight: '1.8 吨', speed: '280km/h', power: '5500 马力' },
  },
  {
    characterId: 'anying-tegong',
    variant: 'flame',
    rarity: 'gold',
    image: getAssetPath('/assets/character/anying-tegong-ghost.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '暗影特工·幽冥猎手',
    stats: { height: '3.5 米', weight: '2.0 吨', speed: '320km/h', power: '6800 马力' },
  },
  {
    characterId: 'anying-tegong',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/anying-tegong-void.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '暗影特工·虚空暗神',
    stats: { height: '3.8 米', weight: '2.3 吨', speed: '380km/h', power: '8500 马力' },
  },
];

/**
 * 喷射加仑的多形态配置
 */
export const penSheJiaLunVariants: CharacterVariant[] = [
  {
    characterId: 'penshi-jialun',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/penshi-jialun-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '喷射加仑',
    stats: { height: '3.8 米', weight: '2.5 吨', speed: '350km/h', power: '6000 马力' },
  },
  {
    characterId: 'penshi-jialun',
    variant: 'flame',
    rarity: 'gold',
    image: getAssetPath('/assets/character/penshi-jialun-tsunami.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '喷射加仑·海啸战士',
    stats: { height: '4.0 米', weight: '2.8 吨', speed: '420km/h', power: '7500 马力' },
  },
  {
    characterId: 'penshi-jialun',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/penshi-jialun-deep-sea.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '喷射加仑·深海霸主',
    stats: { height: '4.3 米', weight: '3.2 吨', speed: '500km/h', power: '9500 马力' },
  },
];

/**
 * 暴烈重卡的多形态配置
 */
export const baoLieZhongKaVariants: CharacterVariant[] = [
  {
    characterId: 'baolie-zhongka',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/baolie-zhongka-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '暴烈重卡',
    stats: { height: '4.5 米', weight: '5.0 吨', speed: '100km/h', power: '9000 马力' },
  },
  {
    characterId: 'baolie-zhongka',
    variant: 'flame',
    rarity: 'gold',
    image: getAssetPath('/assets/character/baolie-zhongka-ram.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '暴烈重卡·冲撞战车',
    stats: { height: '5.0 米', weight: '5.8 吨', speed: '130km/h', power: '11000 马力' },
  },
  {
    characterId: 'baolie-zhongka',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/baolie-zhongka-destroyer.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '暴烈重卡·毁灭战神',
    stats: { height: '5.5 米', weight: '6.5 吨', speed: '160km/h', power: '14000 马力' },
  },
];

/**
 * 铁臂爵士的多形态配置
 */
export const tieBiJueShiVariants: CharacterVariant[] = [
  {
    characterId: 'tiebi-jueshi',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/tiebi-jueshi-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '铁臂爵士',
    stats: { height: '5.0 米', weight: '4.0 吨', speed: '80km/h', power: '8000 马力' },
  },
  {
    characterId: 'tiebi-jueshi',
    variant: 'flame',
    rarity: 'gold',
    image: getAssetPath('/assets/character/tiebi-jueshi-steel.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '铁臂爵士·钢铁战神',
    stats: { height: '5.5 米', weight: '4.5 吨', speed: '100km/h', power: '10000 马力' },
  },
  {
    characterId: 'tiebi-jueshi',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/tiebi-jueshi-titan.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '铁臂爵士·泰坦巨人',
    stats: { height: '6.0 米', weight: '5.2 吨', speed: '120km/h', power: '13000 马力' },
  },
];

/**
 * 裂变骑士的多形态配置
 */
export const lieBianQiShiVariants: CharacterVariant[] = [
  {
    characterId: 'liebian-qishi',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/liebian-qishi-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '裂变骑士',
    stats: { height: '3.6 米', weight: '2.0 吨', speed: '250km/h', power: '5000 马力' },
  },
  {
    characterId: 'liebian-qishi',
    variant: 'flame',
    rarity: 'gold',
    image: getAssetPath('/assets/character/liebian-qishi-quantum.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '裂变骑士·量子战将',
    stats: { height: '3.9 米', weight: '2.3 吨', speed: '300km/h', power: '6500 马力' },
  },
  {
    characterId: 'liebian-qishi',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/liebian-qishi-infinite.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '裂变骑士·无限分身',
    stats: { height: '4.2 米', weight: '2.6 吨', speed: '360km/h', power: '8200 马力' },
  },
];

/**
 * 深海天锚的多形态配置
 */
export const shenHaiTianMaoVariants: CharacterVariant[] = [
  {
    characterId: 'shenhai-tianmao',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/shenhai-tianmao-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '深海天锚',
    stats: { height: '4.2 米', weight: '3.8 吨', speed: '150km/h', power: '8000 马力' },
  },
  {
    characterId: 'shenhai-tianmao',
    variant: 'flame',
    rarity: 'gold',
    image: getAssetPath('/assets/character/shenhai-tianmao-hunter.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '深海天锚·海洋猎手',
    stats: { height: '4.5 米', weight: '4.2 吨', speed: '180km/h', power: '9500 马力' },
  },
  {
    characterId: 'shenhai-tianmao',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/shenhai-tianmao-poseidon.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '深海天锚·海神波塞冬',
    stats: { height: '4.8 米', weight: '4.6 吨', speed: '220km/h', power: '11500 马力' },
  },
];

/**
 * 重力金刚的多形态配置
 */
export const zhongLiJinGangVariants: CharacterVariant[] = [
  {
    characterId: 'zhongli-jingang',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/zhongli-jingang-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '重力金刚',
    stats: { height: '4.8 米', weight: '4.5 吨', speed: '100km/h', power: '8500 马力' },
  },
  {
    characterId: 'zhongli-jingang',
    variant: 'flame',
    rarity: 'gold',
    image: getAssetPath('/assets/character/zhongli-jingang-gravity.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '重力金刚·引力主宰',
    stats: { height: '5.2 米', weight: '5.0 吨', speed: '130km/h', power: '10500 马力' },
  },
  {
    characterId: 'zhongli-jingang',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/zhongli-jingang-blackhole.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '重力金刚·黑洞吞噬者',
    stats: { height: '5.6 米', weight: '5.5 吨', speed: '160km/h', power: '13000 马力' },
  },
];

/**
 * 玄铁战神的多形态配置
 */
export const xuanTieZhanShenVariants: CharacterVariant[] = [
  {
    characterId: 'xuantie-zhanshen',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/xuantie-zhanshen-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '玄铁战神',
    stats: { height: '5.5 米', weight: '6.0 吨', speed: '90km/h', power: '10000 马力' },
  },
  {
    characterId: 'xuantie-zhanshen',
    variant: 'flame',
    rarity: 'gold',
    image: getAssetPath('/assets/character/xuantie-zhanshen-steel.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '玄铁战神·钢铁霸主',
    stats: { height: '6.0 米', weight: '6.8 吨', speed: '110km/h', power: '12500 马力' },
  },
  {
    characterId: 'xuantie-zhanshen',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/xuantie-zhanshen-magnet.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '玄铁战神·万磁之王',
    stats: { height: '6.5 米', weight: '7.5 吨', speed: '140km/h', power: '15000 马力' },
  },
];

/**
 * 炫蓝闪电S的多形态配置
 */
export const xuanLanShanDianSVariants: CharacterVariant[] = [
  {
    characterId: 'xuanlan-shandian-s',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/xuanlan-shandian-s-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '炫蓝闪电S・基础形态',
    stats: { height: '3.8 米', weight: '2.0 吨', speed: '300km/h', power: '6000 马力' },
  },
  {
    characterId: 'xuanlan-shandian-s',
    variant: 'flame',
    rarity: 'gold',
    image: getAssetPath('/assets/character/xuanlan-shandian-s-supersonic.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '炫蓝闪电S・超音速战神',
    stats: { height: '4.0 米', weight: '2.3 吨', speed: '380km/h', power: '7500 马力' },
  },
  {
    characterId: 'xuanlan-shandian-s',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/xuanlan-shandian-s-lightspeed.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '炫蓝闪电S・光速王者',
    stats: { height: '4.2 米', weight: '2.6 吨', speed: '450km/h', power: '9000 马力' },
  },
];

/**
 * 焰龙战神的多形态配置
 */
export const yanLongZhanShenVariants: CharacterVariant[] = [
  {
    characterId: 'yanlong-zhanshen',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/yanlong-zhanshen-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '焰龙战神',
    stats: { height: '4.5 米', weight: '3.5 吨', speed: '200km/h', power: '8000 马力' },
  },
  {
    characterId: 'yanlong-zhanshen',
    variant: 'flame',
    rarity: 'gold',
    image: getAssetPath('/assets/character/yanlong-zhanshen-dragon.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '焰龙战神·龙炎战甲',
    stats: { height: '4.8 米', weight: '3.8 吨', speed: '250km/h', power: '10000 马力' },
  },
  {
    characterId: 'yanlong-zhanshen',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/yanlong-zhanshen-ancient.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '焰龙战神·远古龙王',
    stats: { height: '5.2 米', weight: '4.2 吨', speed: '320km/h', power: '12500 马力' },
  },
];

/**
 * 霹雳火影的多形态配置
 */
export const piLiHuoYingVariants: CharacterVariant[] = [
  {
    characterId: 'pili-huoying',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/pili-huoying-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '霹雳火影',
    stats: { height: '3.5 米', weight: '1.8 吨', speed: '280km/h', power: '5500 马力' },
  },
  {
    characterId: 'pili-huoying',
    variant: 'flame',
    rarity: 'gold',
    image: getAssetPath('/assets/character/pili-huoying-ninja.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '霹雳火影·雷遁忍者',
    stats: { height: '3.8 米', weight: '2.0 吨', speed: '350km/h', power: '7000 马力' },
  },
  {
    characterId: 'pili-huoying',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/pili-huoying-shadow-god.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '霹雳火影·雷霆影神',
    stats: { height: '4.0 米', weight: '2.3 吨', speed: '420km/h', power: '8500 马力' },
  },
];

/**
 * 猎空悍将的多形态配置
 */
export const lieKongHanJiangVariants: CharacterVariant[] = [
  {
    characterId: 'liekong-hanjiang',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/liekong-hanjiang-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '猎空悍将',
    stats: { height: '4.0 米', weight: '2.5 吨', speed: '350km/h', power: '6500 马力' },
  },
  {
    characterId: 'liekong-hanjiang',
    variant: 'flame',
    rarity: 'gold',
    image: getAssetPath('/assets/character/liekong-hanjiang-sky-hunter.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '猎空悍将·天空猎手',
    stats: { height: '4.3 米', weight: '2.8 吨', speed: '420km/h', power: '8000 马力' },
  },
  {
    characterId: 'liekong-hanjiang',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/liekong-hanjiang-sky-king.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '猎空悍将·天空之王',
    stats: { height: '4.6 米', weight: '3.2 吨', speed: '500km/h', power: '10000 马力' },
  },
];

/**
 * 钢臂力士的多形态配置
 */
export const gangBiLiShiVariants: CharacterVariant[] = [
  {
    characterId: 'gangbi-lishi',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/gangbi-lishi-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '钢臂力士',
    stats: { height: '5.0 米', weight: '5.0 吨', speed: '80km/h', power: '9000 马力' },
  },
  {
    characterId: 'gangbi-lishi',
    variant: 'flame',
    rarity: 'gold',
    image: getAssetPath('/assets/character/gangbi-lishi-titan.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '钢臂力士·泰坦战士',
    stats: { height: '5.5 米', weight: '5.8 吨', speed: '100km/h', power: '11000 马力' },
  },
  {
    characterId: 'gangbi-lishi',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/gangbi-lishi-destroyer.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '钢臂力士·毁灭巨人',
    stats: { height: '6.0 米', weight: '6.5 吨', speed: '130km/h', power: '14000 马力' },
  },
];

/**
 * 星际游侠的多形态配置
 */
export const xingJiYouXiaVariants: CharacterVariant[] = [
  {
    characterId: 'xingji-youxia',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/xingji-youxia-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '星际游侠',
    stats: { height: '4.2 米', weight: '2.8 吨', speed: '400km/h', power: '7500 马力' },
  },
  {
    characterId: 'xingji-youxia',
    variant: 'flame',
    rarity: 'gold',
    image: getAssetPath('/assets/character/xingji-youxia-galaxy.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '星际游侠·银河战士',
    stats: { height: '4.5 米', weight: '3.2 吨', speed: '500km/h', power: '9500 马力' },
  },
  {
    characterId: 'xingji-youxia',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/xingji-youxia-cosmos.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '星际游侠·宇宙之王',
    stats: { height: '4.8 米', weight: '3.6 吨', speed: '600km/h', power: '12000 马力' },
  },
];

/**
 * 爆旋洛克的多形态配置
 */
export const baoXuanLuoKeVariants: CharacterVariant[] = [
  {
    characterId: 'baoxuan-luoke',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/baoxuan-luoke-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '爆旋洛克',
    stats: { height: '3.8 米', weight: '2.5 吨', speed: '200km/h', power: '6000 马力' },
  },
  {
    characterId: 'baoxuan-luoke',
    variant: 'flame',
    rarity: 'gold',
    image: getAssetPath('/assets/character/baoxuan-luoke-cyclone.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '爆旋洛克·旋风战神',
    stats: { height: '4.0 米', weight: '2.8 吨', speed: '250km/h', power: '7500 马力' },
  },
  {
    characterId: 'baoxuan-luoke',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/baoxuan-luoke-storm-king.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '爆旋洛克·风暴之王',
    stats: { height: '4.3 米', weight: '3.2 吨', speed: '320km/h', power: '9500 马力' },
  },
];

/**
 * 深海霸王的多形态配置
 */
export const shenHaiBaWangVariants: CharacterVariant[] = [
  {
    characterId: 'shenhai-bawang',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/shenhai-bawang-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '深海霸王',
    stats: { height: '4.5 米', weight: '4.0 吨', speed: '180km/h', power: '8500 马力' },
  },
  {
    characterId: 'shenhai-bawang',
    variant: 'flame',
    rarity: 'gold',
    image: getAssetPath('/assets/character/shenhai-bawang-overlord.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '深海霸王·海洋霸主',
    stats: { height: '4.8 米', weight: '4.5 吨', speed: '220km/h', power: '10500 马力' },
  },
  {
    characterId: 'shenhai-bawang',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/shenhai-bawang-poseidon.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '深海霸王·波塞冬神',
    stats: { height: '5.2 米', weight: '5.0 吨', speed: '280km/h', power: '13000 马力' },
  },
];

/**
 * 银翼骑士的多形态配置
 */
export const yinYiQiShiVariants: CharacterVariant[] = [
  {
    characterId: 'yinyi-qishi',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/yinyi-qishi-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '银翼骑士',
    stats: { height: '4.0 米', weight: '2.8 吨', speed: '280km/h', power: '6500 马力' },
  },
  {
    characterId: 'yinyi-qishi',
    variant: 'flame',
    rarity: 'gold',
    image: getAssetPath('/assets/character/yinyi-qishi-silver.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '银翼骑士·白银圣骑',
    stats: { height: '4.3 米', weight: '3.2 吨', speed: '350km/h', power: '8000 马力' },
  },
  {
    characterId: 'yinyi-qishi',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/yinyi-qishi-light-king.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '银翼骑士·圣光之王',
    stats: { height: '4.6 米', weight: '3.6 吨', speed: '420km/h', power: '10000 马力' },
  },
];

/**
 * 重装赤魂王的多形态配置
 */
export const zhongZhuangChiHunWangVariants: CharacterVariant[] = [
  {
    characterId: 'zhongzhang-chihunwang',
    variant: 'base',
    rarity: 'rare',
    image: getAssetPath('/assets/character/zhongzhuang-chihunwang-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '重装赤魂王',
    stats: { height: '5.5 米', weight: '6.0 吨', speed: '120km/h', power: '11000 马力' },
  },
  {
    characterId: 'zhongzhang-chihunwang',
    variant: 'flame',
    rarity: 'gold',
    image: getAssetPath('/assets/character/zhongzhuang-chihunwang-emperor.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '重装赤魂王·赤色帝王',
    stats: { height: '6.0 米', weight: '7.0 吨', speed: '150km/h', power: '14000 马力' },
  },
  {
    characterId: 'zhongzhang-chihunwang',
    variant: 'ultimate',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/zhongzhuang-chihunwang-demon.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '重装赤魂王·灭世魔神',
    stats: { height: '6.5 米', weight: '8.0 吨', speed: '200km/h', power: '18000 马力' },
  },
];

/**
 * 超炫电光王的多形态配置（隐藏关卡 H1）
 */
export const chaoXuanDianGuangWangVariants: CharacterVariant[] = [
  {
    characterId: 'chaoxuan-dianguangwang',
    variant: 'base',
    rarity: 'gold',
    image: getAssetPath('/assets/character/chaoxuan-dianguangwang-robot.png'),
    difficulty: DifficultyLevel.EASY,
    displayName: '超炫电光王',
    stats: { height: '4.8 米', weight: '3.8 吨', speed: '280km/h', power: '10000 马力' },
  },
  {
    characterId: 'chaoxuan-dianguangwang',
    variant: 'flame',
    rarity: 'rainbow',
    image: getAssetPath('/assets/character/chaoxuan-dianguangwang-digit.png'),
    difficulty: DifficultyLevel.MEDIUM,
    displayName: '超炫电光王·数位战神',
    stats: { height: '5.2 米', weight: '4.2 吨', speed: '320km/h', power: '12500 马力' },
  },
  {
    characterId: 'chaoxuan-dianguangwang',
    variant: 'ultimate',
    rarity: 'prismatic',
    image: getAssetPath('/assets/character/chaoxuan-dianguangwang-thunder-god.png'),
    difficulty: DifficultyLevel.HARD,
    displayName: '超炫电光王·闪电之神',
    stats: { height: '5.5 米', weight: '4.5 吨', speed: '380km/h', power: '15000 马力' },
  },
];

/**
 * 所有角色形态配置（按角色 ID 分组）
 */
export const allCharacterVariants: CharacterVariant[] = [
  ...juliFengbaoVariants,
  ...baocheJiushiVariants,
  ...lieHuoXiuLuoVariants,
  ...anYingTeGongVariants,
  ...penSheJiaLunVariants,
  ...baoLieZhongKaVariants,
  ...tieBiJueShiVariants,
  ...lieBianQiShiVariants,
  ...shenHaiTianMaoVariants,
  ...zhongLiJinGangVariants,
  ...xuanTieZhanShenVariants,
  ...xuanLanShanDianSVariants,
  ...yanLongZhanShenVariants,
  ...piLiHuoYingVariants,
  ...lieKongHanJiangVariants,
  ...gangBiLiShiVariants,
  ...xingJiYouXiaVariants,
  ...baoXuanLuoKeVariants,
  ...shenHaiBaWangVariants,
  ...yinYiQiShiVariants,
  ...zhongZhuangChiHunWangVariants,
  ...chaoXuanDianGuangWangVariants,
];

/**
 * 根据角色 ID 和形态获取配置
 */
export function getCharacterVariant(
  characterId: string,
  variant: VariantType
): CharacterVariant | undefined {
  return allCharacterVariants.find(
    (v) => v.characterId === characterId && v.variant === variant
  );
}

/**
 * 根据角色 ID 和难度获取形态配置
 */
export function getVariantByDifficulty(
  characterId: string,
  difficulty: DifficultyLevel
): CharacterVariant | undefined {
  return allCharacterVariants.find(
    (v) => v.characterId === characterId && v.difficulty === difficulty
  );
}

/**
 * 根据角色 ID 获取所有形态
 */
export function getVariantsByCharacterId(characterId: string): CharacterVariant[] {
  return allCharacterVariants.filter((v) => v.characterId === characterId);
}

/**
 * 角色分组颜色配置
 */
export const characterGroupColors: Record<string, string> = {
  'juli-fengbao': '#3B82F6',    // 蓝色
  'baoche-jiushi': '#FFFFFF',  // 白色（急救卫士主色调）
  'liehuo-xiuluo': '#EF4444',   // 红色（烈火修罗主色调）
  'xuanlan-shandian': '#FFD700', // 金色
  'anying-tegong': '#4B0082',    // 紫色
  'penshi-jialun': '#06B6D4',    // 青色
  'baolie-zhongka': '#F97316',   // 橙色
  'tiebi-jueshi': '#6B7280',     // 灰色
  'liebian-qishi': '#8B5CF6',    // 紫罗兰
  'shenhai-tianmao': '#0EA5E9',  // 天蓝色
  'zhongli-jingang': '#6366F1',  // 靛蓝色
  'xuantie-zhanshen': '#374151', // 深灰色
  'xuanlan-shandian-s': '#FBBF24', // 金黄色
  'yanlong-zhanshen': '#DC2626', // 深红色
  'pili-huoying': '#7C3AED',     // 紫色
  'liekong-hanjiang': '#0284C7', // 深蓝色
  'gangbi-lishi': '#78716C',     // 石灰色
  'xingji-youxia': '#7C3AED',    // 紫罗兰
  'baoxuan-luoke': '#059669',    // 绿色
  'shenhai-bawang': '#0369A1',   // 深蓝色
  'yinyi-qishi': '#D1D5DB',      // 银色
  'zhongzhang-chihunwang': '#B91C1C', // 暗红色
  'chaoxuan-dianguangwang': '#00BFFF', // 深天蓝色（超炫电光王）
};

/**
 * 获取角色分组颜色
 */
export function getCharacterGroupColor(characterId: string): string {
  return characterGroupColors[characterId] || '#6B7280';
}
