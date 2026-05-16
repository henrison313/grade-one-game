import { getAssetPath } from '@/config/paths.config';
import { DifficultyLevel, type WeaponPart } from '@/types';

/**
 * 零件形状类型
 */
type ShapeType = 'circle' | 'triangle' | 'square' | 'rectangle' | 'composite';

/**
 * 武器配置接口
 */
export interface WeaponConfig {
  characterId: string;
  characterName: string;
  difficulty: DifficultyLevel;
  weaponName: string;
  weaponImage: string;
}

/**
 * 武器零件配置接口
 */
export interface WeaponPartsConfig {
  easy: WeaponPart[];
  medium: WeaponPart[];
  hard: WeaponPart[];
}

/**
 * 武器配置列表
 * 命名格式：难度等级-角色名称-武器名称.png
 */
export const weaponConfigs: WeaponConfig[] = [
  // ========== 炫蓝闪电 ==========
  {
    characterId: 'xuanlan-shandian',
    characterName: '炫蓝闪电',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫蓝光能枪',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-xuanlan-shandian-light.png')),
  },
  {
    characterId: 'xuanlan-shandian',
    characterName: '炫蓝闪电',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '炫蓝闪电枪',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-xuanlan-shandian-bolt.png')),
  },
  {
    characterId: 'xuanlan-shandian',
    characterName: '炫蓝闪电',
    difficulty: DifficultyLevel.HARD,
    weaponName: '炫蓝雷霆炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-xuanlan-shandian-thunder.png')),
  },

  // ========== 巨力风暴 ==========
  {
    characterId: 'juli-fengbao',
    characterName: '巨力风暴',
    difficulty: DifficultyLevel.EASY,
    weaponName: '风暴冲击拳套',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-juli-fengbao-gauntlet.png')),
  },
  {
    characterId: 'juli-fengbao',
    characterName: '巨力风暴',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '重力压制双炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-juli-fengbao-dual.png')),
  },
  {
    characterId: 'juli-fengbao',
    characterName: '巨力风暴',
    difficulty: DifficultyLevel.HARD,
    weaponName: '超级能量冲击炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-juli-fengbao-energy.png')),
  },

  // ========== 急救卫士 ==========
  {
    characterId: 'baoche-jiushi',
    characterName: '急救卫士',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫光医疗枪',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-jiushi-weishi-medical.png')),
  },
  {
    characterId: 'baoche-jiushi',
    characterName: '急救卫士',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '闪电医疗钻',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-jiushi-weishi-drill.png')),
  },
  {
    characterId: 'baoche-jiushi',
    characterName: '急救卫士',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆急救炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-jiushi-weishi-thunder.png')),
  },

  // ========== 烈火修罗 ==========
  {
    characterId: 'liehuo-xiuluo',
    characterName: '烈火修罗',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫光火焰枪',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-liehuo-xiuluo-fire.png')),
  },
  {
    characterId: 'liehuo-xiuluo',
    characterName: '烈火修罗',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '闪电烈焰锤',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-liehuo-xiuluo-hammer.png')),
  },
  {
    characterId: 'liehuo-xiuluo',
    characterName: '烈火修罗',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆焚天炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-liehuo-xiuluo-inferno.png')),
  },

  // ========== 暗影特工 ==========
  {
    characterId: 'anying-tegong',
    characterName: '暗影特工',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫影潜行刃',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-anying-tegong-blade.png')),
  },
  {
    characterId: 'anying-tegong',
    characterName: '暗影特工',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '暗影突击枪',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-anying-tegong-assault.png')),
  },
  {
    characterId: 'anying-tegong',
    characterName: '暗影特工',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆暗影炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-anying-tegong-thunder.png')),
  },

  // ========== 铁臂爵士 ==========
  {
    characterId: 'tiebi-jueshi',
    characterName: '铁臂爵士',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫光重拳炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-tiebi-jueshi-fist.png')),
  },
  {
    characterId: 'tiebi-jueshi',
    characterName: '铁臂爵士',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '闪电钢铁臂',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-tiebi-jueshi-arm.png')),
  },
  {
    characterId: 'tiebi-jueshi',
    characterName: '铁臂爵士',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆粉碎炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-tiebi-jueshi-crusher.png')),
  },

  // ========== 喷射加仑 ==========
  {
    characterId: 'penshi-jialun',
    characterName: '喷射加仑',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫光水炮枪',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-penshi-jialun-water.png')),
  },
  {
    characterId: 'penshi-jialun',
    characterName: '喷射加仑',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '闪电水龙炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-penshi-jialun-water.png')),
  },
  {
    characterId: 'penshi-jialun',
    characterName: '喷射加仑',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆海啸炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-penshi-jialun-tsunami.png')),
  },

  // ========== 裂变骑士 ==========
  {
    characterId: 'liebian-qishi',
    characterName: '裂变骑士',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫光分裂枪',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-liebian-qishi-split.png')),
  },
  {
    characterId: 'liebian-qishi',
    characterName: '裂变骑士',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '闪电裂变刃',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-liebian-qishi-blade.png')),
  },
  {
    characterId: 'liebian-qishi',
    characterName: '裂变骑士',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆量子炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-liebian-qishi-quantum.png')),
  },

  // ========== 暴烈重卡 ==========
  {
    characterId: 'baolie-zhongka',
    characterName: '暴烈重卡',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫光冲撞炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-baolie-zhongka-ram.png')),
  },
  {
    characterId: 'baolie-zhongka',
    characterName: '暴烈重卡',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '闪电重卡炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-baolie-zhongka-bolt.png')),
  },
  {
    characterId: 'baolie-zhongka',
    characterName: '暴烈重卡',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆毁灭炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-baolie-zhongka-destroyer.png')),
  },

  // ========== 深海天锚 ==========
  {
    characterId: 'shenhai-tianmao',
    characterName: '深海天锚',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫光锚枪',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-shenhai-tianmao-anchor.png')),
  },
  {
    characterId: 'shenhai-tianmao',
    characterName: '深海天锚',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '闪电深海炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-shenhai-tianmao-deep.png')),
  },
  {
    characterId: 'shenhai-tianmao',
    characterName: '深海天锚',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆海王炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-shenhai-tianmao-king.png')),
  },

  // ========== 重力金刚 ==========
  {
    characterId: 'zhongli-jingang',
    characterName: '重力金刚',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫光重力炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-zhongli-jingang-gravity.png')),
  },
  {
    characterId: 'zhongli-jingang',
    characterName: '重力金刚',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '闪电重力炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-zhongli-jingang-bolt.png')),
  },
  {
    characterId: 'zhongli-jingang',
    characterName: '重力金刚',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆重力炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-zhongli-jingang-gravity.png')),
  },

  // ========== 玄铁战神 ==========
  {
    characterId: 'xuantie-zhanshen',
    characterName: '玄铁战神',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫光金属刃',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-xuantie-zhanshen-metal.png')),
  },
  {
    characterId: 'xuantie-zhanshen',
    characterName: '玄铁战神',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '闪电玄铁炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-xuantie-zhanshen-bolt.png')),
  },
  {
    characterId: 'xuantie-zhanshen',
    characterName: '玄铁战神',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆玄铁炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-xuantie-zhanshen-thunder.png')),
  },

  // ========== 炫蓝闪电S ==========
  {
    characterId: 'xuanlan-shandian-s',
    characterName: '炫蓝闪电S',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫光闪电枪',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-xuanlan-shandian-s-bolt.png')),
  },
  {
    characterId: 'xuanlan-shandian-s',
    characterName: '炫蓝闪电S',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '电音速炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-xuanlan-shandian-s-sonic.png')),
  },
  {
    characterId: 'xuanlan-shandian-s',
    characterName: '炫蓝闪电S',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆超新星炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-xuanlan-shandian-s-nova.png')),
  },

  // ========== 焰龙战神 ==========
  {
    characterId: 'yanlong-zhanshen',
    characterName: '焰龙战神',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫光龙焰枪',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-yanlong-zhanshen-dragon.png')),
  },
  {
    characterId: 'yanlong-zhanshen',
    characterName: '焰龙战神',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '闪电龙炎炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-yanlong-zhanshen-dragon.png')),
  },
  {
    characterId: 'yanlong-zhanshen',
    characterName: '焰龙战神',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆焚天龙炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-yanlong-zhanshen-dragon.png')),
  },

  // ========== 霹雳火影 ==========
  {
    characterId: 'pili-huoying',
    characterName: '霹雳火影',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫光火影刃',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-pili-huoying-blade.png')),
  },
  {
    characterId: 'pili-huoying',
    characterName: '霹雳火影',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '闪电火影枪',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-pili-huoying-bolt.png')),
  },
  {
    characterId: 'pili-huoying',
    characterName: '霹雳火影',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆火影炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-pili-huoying-barrage.png')),
  },

  // ========== 猎空悍将 ==========
  {
    characterId: 'liekong-hanjiang',
    characterName: '猎空悍将',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫光猎空枪',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-liekong-hanjiang-sky.png')),
  },
  {
    characterId: 'liekong-hanjiang',
    characterName: '猎空悍将',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '闪电猎空炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-liekong-hanjiang-bolt.png')),
  },
  {
    characterId: 'liekong-hanjiang',
    characterName: '猎空悍将',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆猎空炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-liekong-hanjiang-thunder.png')),
  },

  // ========== 钢臂力士 ==========
  {
    characterId: 'gangbi-lishi',
    characterName: '钢臂力士',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫光钢臂炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-gangbi-lishi-arm.png')),
  },
  {
    characterId: 'gangbi-lishi',
    characterName: '钢臂力士',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '闪电钢臂锤',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-gangbi-lishi-hammer.png')),
  },
  {
    characterId: 'gangbi-lishi',
    characterName: '钢臂力士',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆钢臂炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-gangbi-lishi-thunder.png')),
  },

  // ========== 星际游侠 ==========
  {
    characterId: 'xingji-youxia',
    characterName: '星际游侠',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫光星际枪',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-xingji-youxia-star.png')),
  },
  {
    characterId: 'xingji-youxia',
    characterName: '星际游侠',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '闪电星际炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-xingji-youxia-star.png')),
  },
  {
    characterId: 'xingji-youxia',
    characterName: '星际游侠',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆宇宙炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-xingji-youxia-cosmos.png')),
  },

  // ========== 爆旋洛克 ==========
  {
    characterId: 'baoxuan-luoke',
    characterName: '爆旋洛克',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫光爆旋炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-baoxuan-luoke-spin.png')),
  },
  {
    characterId: 'baoxuan-luoke',
    characterName: '爆旋洛克',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '闪电爆旋枪',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-baoxuan-luoke-bolt.png')),
  },
  {
    characterId: 'baoxuan-luoke',
    characterName: '爆旋洛克',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆爆旋炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-baoxuan-luoke-thunder.png')),
  },

  // ========== 深海霸王 ==========
  {
    characterId: 'shenhai-bawang',
    characterName: '深海霸王',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫光深海枪',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-shenhai-bawang-deep.png')),
  },
  {
    characterId: 'shenhai-bawang',
    characterName: '深海霸王',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '闪电深海炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-shenhai-bawang-deep.png')),
  },
  {
    characterId: 'shenhai-bawang',
    characterName: '深海霸王',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆霸王炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-shenhai-bawang-king.png')),
  },

  // ========== 银翼骑士 ==========
  {
    characterId: 'yinyi-qishi',
    characterName: '银翼骑士',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫光银翼剑',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-yinyi-qishi-sword.png')),
  },
  {
    characterId: 'yinyi-qishi',
    characterName: '银翼骑士',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '闪电银翼枪',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-yinyi-qishi-lance.png')),
  },
  {
    characterId: 'yinyi-qishi',
    characterName: '银翼骑士',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆银翼炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-yinyi-qishi-thunder.png')),
  },

  // ========== 重装赤魂王 ==========
  {
    characterId: 'zhongzhang-chihunwang',
    characterName: '重装赤魂王',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫光赤魂枪',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-zhongzhuang-chihunwang-red.png')),
  },
  {
    characterId: 'zhongzhang-chihunwang',
    characterName: '重装赤魂王',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '闪电赤魂炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-zhongzhuang-chihunwang-bolt.png')),
  },
  {
    characterId: 'zhongzhang-chihunwang',
    characterName: '重装赤魂王',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆赤魂炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-zhongzhuang-chihunwang-thunder.png')),
  },

  // ========== 超炫电光王（隐藏关卡 H1）==========
  {
    characterId: 'chaoxuan-dianguangwang',
    characterName: '超炫电光王',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫光电光炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-chaoxuan-dianguangwang-blast.png')),
  },
  {
    characterId: 'chaoxuan-dianguangwang',
    characterName: '超炫电光王',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '闪电数位炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-chaoxuan-dianguangwang-digit.png')),
  },
  {
    characterId: 'chaoxuan-dianguangwang',
    characterName: '超炫电光王',
    difficulty: DifficultyLevel.HARD,
    weaponName: '雷霆电光爆裂炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-chaoxuan-dianguangwang-burst.png')),
  },

  // ========== 炫蓝雷霆王（隐藏关卡 H2）==========
  {
    characterId: 'xuanlan-leitingwang',
    characterName: '炫蓝雷霆王',
    difficulty: DifficultyLevel.EASY,
    weaponName: '炫蓝雷霆枪',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/easy-炫蓝雷霆王-炫蓝雷霆枪.png')),
  },
  {
    characterId: 'xuanlan-leitingwang',
    characterName: '炫蓝雷霆王',
    difficulty: DifficultyLevel.MEDIUM,
    weaponName: '炫蓝雷霆炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/medium-炫蓝雷霆王-炫蓝雷霆炮.png')),
  },
  {
    characterId: 'xuanlan-leitingwang',
    characterName: '炫蓝雷霆王',
    difficulty: DifficultyLevel.HARD,
    weaponName: '炫蓝终极雷霆炮',
    weaponImage: getAssetPath(getAssetPath('/assets/weapons/hard-炫蓝雷霆王-炫蓝终极雷霆炮.png')),
  },
];

/**
 * 关卡武器零件配置
 * 根据角色主题设计零件名称
 */
export const weaponPartsByLevel: Record<string, WeaponPartsConfig> = {
  // ========== 第一单元：图形与几何 ==========
  '1-1': {
    // 巨力风暴 - 风暴力量主题
    easy: [
      { id: 'part-1', name: '风暴核心', shapeType: 'circle' as ShapeType as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光拳套', shapeType: 'triangle' as ShapeType as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '力量护盾', shapeType: 'square' as ShapeType as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '风暴外壳', shapeType: 'rectangle' as ShapeType as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '风暴冲击拳套', shapeType: 'composite' as ShapeType as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-juli-fengbao-gauntlet.png')) },
    ],
    medium: [
      { id: 'part-1', name: '重力核心', shapeType: 'circle' as ShapeType as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '双管炮', shapeType: 'rectangle' as ShapeType as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '压制护盾', shapeType: 'square' as ShapeType as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '风暴稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '重力压制双炮', shapeType: 'composite' as ShapeType as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-juli-fengbao-dual.png')) },
    ],
    hard: [
      { id: 'part-1', name: '能量核心', shapeType: 'circle' as ShapeType as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '冲击炮管', shapeType: 'rectangle' as ShapeType as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '超级外壳', shapeType: 'rectangle' as ShapeType as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '能量稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '超级能量冲击炮', shapeType: 'composite' as ShapeType as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-juli-fengbao-energy.png')) },
    ],
  },

  '1-2': {
    // 急救卫士 - 医疗救护主题
    easy: [
      { id: 'part-1', name: '医疗核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光发射器', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '救护护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '医疗外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫光医疗枪', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-jiushi-weishi-medical.png')) },
    ],
    medium: [
      { id: 'part-1', name: '急救核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '医疗钻头', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '闪电外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '医疗稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '闪电医疗钻', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-jiushi-weishi-drill.png')) },
    ],
    hard: [
      { id: 'part-1', name: '雷霆核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '急救炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '雷霆稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '雷霆急救炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-jiushi-weishi-thunder.png')) },
    ],
  },

  '1-3': {
    // 烈火修罗 - 火焰主题
    easy: [
      { id: 'part-1', name: '火焰核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光火焰管', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '熔岩护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '炎龙外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫光火焰枪', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-liehuo-xiuluo-fire.png')) },
    ],
    medium: [
      { id: 'part-1', name: '烈焰核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '烈焰锤头', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '闪电外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '火焰稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '闪电烈焰锤', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-liehuo-xiuluo-hammer.png')) },
    ],
    hard: [
      { id: 'part-1', name: '焚天核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '雷霆炮管', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '烈焰稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '终极火焰壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '雷霆焚天炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-liehuo-xiuluo-inferno.png')) },
    ],
  },

  // ========== 第二单元：20以内退位减法 ==========
  '2-1': {
    // 暗影特工 - 暗影潜行主题
    easy: [
      { id: 'part-1', name: '暗影核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫影刀刃', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '潜行护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '暗影外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫影潜行刃', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-anying-tegong-blade.png')) },
    ],
    medium: [
      { id: 'part-1', name: '虚空核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '突击炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '暗影外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '暗影稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '暗影突击枪', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-anying-tegong-assault.png')) },
    ],
    hard: [
      { id: 'part-1', name: '雷霆暗影核', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '暗影炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极暗影壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '雷霆稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '雷霆暗影炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-anying-tegong-thunder.png')) },
    ],
  },

  '2-2': {
    // 铁臂爵士 - 钻探钢铁主题
    easy: [
      { id: 'part-1', name: '钻探核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光钻头', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '钢铁手柄', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '岩石护甲', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫光重拳炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-tiebi-jueshi-fist.png')) },
    ],
    medium: [
      { id: 'part-1', name: '钢铁核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '闪电铁臂', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '钢铁外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '钢铁稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '闪电钢铁臂', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-tiebi-jueshi-arm.png')) },
    ],
    hard: [
      { id: 'part-1', name: '雷霆核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '粉碎炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极钢铁壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '雷霆稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '雷霆粉碎炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-tiebi-jueshi-crusher.png')) },
    ],
  },

  '2-3': {
    // 喷射加仑 - 水流喷射主题
    easy: [
      { id: 'part-1', name: '水流核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光水枪', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '喷射护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '水流外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫光水炮枪', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-penshi-jialun-water.png')) },
    ],
    medium: [
      { id: 'part-1', name: '海啸核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '水龙炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '闪电外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '水流稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '闪电水龙炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-penshi-jialun-water.png')) },
    ],
    hard: [
      { id: 'part-1', name: '雷霆水核', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '海啸炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极水流壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '雷霆稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '雷霆海啸炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-penshi-jialun-tsunami.png')) },
    ],
  },

  '2-4': {
    // 裂变骑士 - 量子裂变主题
    easy: [
      { id: 'part-1', name: '裂变核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光分裂管', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '量子护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '裂变外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫光分裂枪', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-liebian-qishi-split.png')) },
    ],
    medium: [
      { id: 'part-1', name: '量子核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '裂变刀刃', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '闪电外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '量子稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '闪电裂变刃', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-liebian-qishi-blade.png')) },
    ],
    hard: [
      { id: 'part-1', name: '雷霆量子核', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '量子炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极裂变壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '雷霆稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '雷霆量子炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-liebian-qishi-quantum.png')) },
    ],
  },

  // ========== 第三单元：100以内数的认识 ==========
  '3-1': {
    // 暴烈重卡 - 重型卡车主题
    easy: [
      { id: 'part-1', name: '引擎核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光冲撞头', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '重型护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '卡车外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫光冲撞炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-baolie-zhongka-ram.png')) },
    ],
    medium: [
      { id: 'part-1', name: '重卡核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '闪电炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '重卡外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '重卡稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '闪电重卡炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-baolie-zhongka-bolt.png')) },
    ],
    hard: [
      { id: 'part-1', name: '毁灭核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '雷霆炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极重卡壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '毁灭稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '雷霆毁灭炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-baolie-zhongka-destroyer.png')) },
    ],
  },

  '3-2': {
    // 深海天锚 - 深海锚定主题
    easy: [
      { id: 'part-1', name: '深海核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光锚头', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '锚链护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '深海外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫光锚枪', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-shenhai-tianmao-anchor.png')) },
    ],
    medium: [
      { id: 'part-1', name: '海锚核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '闪电深海管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '海锚外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '深海稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '闪电深海炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-shenhai-tianmao-deep.png')) },
    ],
    hard: [
      { id: 'part-1', name: '海神核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '雷霆海神管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极深海壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '海神稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '雷霆海王炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-shenhai-tianmao-king.png')) },
    ],
  },

  '3-3': {
    // 重力金刚 - 重力控制主题
    easy: [
      { id: 'part-1', name: '重力核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光重力管', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '引力护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '金刚外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫光重力炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-重力金刚-炫光重力炮.png')) },
    ],
    medium: [
      { id: 'part-1', name: '引力核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '重力锤头', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '闪电外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '引力稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '闪电重力锤', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-重力金刚-闪电重力锤.png')) },
    ],
    hard: [
      { id: 'part-1', name: '雷霆引力核', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '引力炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极金刚壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '雷霆稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '雷霆引力炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-zhongli-jingang-gravity.png')) },
    ],
  },

  '3-4': {
    // 玄铁战神 - 玄铁重装主题
    easy: [
      { id: 'part-1', name: '玄铁核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光玄铁管', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '战神护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '玄铁外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫光玄铁炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-玄铁战神-炫光玄铁炮.png')) },
    ],
    medium: [
      { id: 'part-1', name: '战神核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '玄铁刀刃', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '闪电外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '玄铁稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '闪电玄铁刃', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-玄铁战神-闪电玄铁刃.png')) },
    ],
    hard: [
      { id: 'part-1', name: '雷霆玄铁核', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '玄铁炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极战神壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '雷霆稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '雷霆玄铁炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-xuantie-zhanshen-thunder.png')) },
    ],
  },

  // ========== 第四单元：100以内口算加减法 ==========
  '4-1': {
    // 炫蓝闪电S - 警车光能主题
    easy: [
      { id: 'part-1', name: '光能核心S', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光发射器S', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '警车护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '光能外壳S', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫蓝光能枪S', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-xuanlan-shandian-light.png')) },
    ],
    medium: [
      { id: 'part-1', name: '闪电核心S', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '闪电枪管S', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '警车外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '警车稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫蓝闪电枪S', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-xuanlan-shandian-bolt.png')) },
    ],
    hard: [
      { id: 'part-1', name: '雷霆核心S', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '雷霆炮管S', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极外壳S', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '雷霆稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫蓝雷霆炮S', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-xuanlan-shandian-thunder.png')) },
    ],
  },

  '4-2': {
    // 焰龙战神 - 火焰龙神主题
    easy: [
      { id: 'part-1', name: '焰龙核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光焰龙管', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '龙鳞护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '焰龙外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫光焰龙枪', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-焰龙战神-炫光焰龙枪.png')) },
    ],
    medium: [
      { id: 'part-1', name: '龙神核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '闪电焰龙管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '龙神外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '龙神稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '闪电焰龙炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-焰龙战神-闪电焰龙炮.png')) },
    ],
    hard: [
      { id: 'part-1', name: '雷霆龙神核', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '龙神炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极焰龙壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '雷霆稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '雷霆龙神炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-焰龙战神-雷霆龙神炮.png')) },
    ],
  },

  '4-3': {
    // 霹雳火影 - 忍者火影主题
    easy: [
      { id: 'part-1', name: '火影核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光火影刃', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '忍者护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '火影外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫光火影刃', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-pili-huoying-blade.png')) },
    ],
    medium: [
      { id: 'part-1', name: '忍者核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '闪电火影管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '忍者外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '忍者稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '闪电火影枪', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-pili-huoying-bolt.png')) },
    ],
    hard: [
      { id: 'part-1', name: '雷霆火影核', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '火影炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极忍者壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '雷霆稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '雷霆火影炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-霹雳火影-雷霆火影炮.png')) },
    ],
  },

  // ========== 第五单元：100以内笔算加减法 ==========
  '5-1': {
    // 猎空悍将 - 天空猎手主题
    easy: [
      { id: 'part-1', name: '猎空核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光猎空管', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '天空护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '猎空外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫光猎空枪', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-liekong-hanjiang-sky.png')) },
    ],
    medium: [
      { id: 'part-1', name: '天空核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '闪电猎空管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '天空外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '天空稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '闪电猎空炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-liekong-hanjiang-bolt.png')) },
    ],
    hard: [
      { id: 'part-1', name: '雷霆猎空核', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '猎空炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极天空壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '雷霆稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '雷霆猎空炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-liekong-hanjiang-thunder.png')) },
    ],
  },

  '5-2': {
    // 钢臂力士 - 钢臂力量主题
    easy: [
      { id: 'part-1', name: '钢臂核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光钢臂管', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '力量护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '钢臂外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫光钢臂炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-gangbi-lishi-arm.png')) },
    ],
    medium: [
      { id: 'part-1', name: '力量核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '钢臂锤头', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '闪电外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '力量稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '闪电钢臂锤', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-gangbi-lishi-hammer.png')) },
    ],
    hard: [
      { id: 'part-1', name: '雷霆钢臂核', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '钢臂炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极力量壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '雷霆稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '雷霆钢臂炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-gangbi-lishi-thunder.png')) },
    ],
  },

  // ========== 第六单元：BOSS关 ==========
  '6': {
    // 星际游侠 - 宇宙星际主题
    easy: [
      { id: 'part-1', name: '星际核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光星际管', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '宇宙护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '星际外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫光星际枪', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-xingji-youxia-star.png')) },
    ],
    medium: [
      { id: 'part-1', name: '宇宙核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '闪电星际管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '宇宙外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '宇宙稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '闪电星际炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-xingji-youxia-star.png')) },
    ],
    hard: [
      { id: 'part-1', name: '雷霆宇宙核', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '宇宙炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极星际壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '雷霆稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '雷霆宇宙炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-xingji-youxia-cosmos.png')) },
    ],
  },

  // ========== 第七单元：欢乐购物街 ==========
  '7-1': {
    // 爆旋洛克 - 旋转爆发主题
    easy: [
      { id: 'part-1', name: '爆旋核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光爆旋管', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '金币护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '爆旋外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫光爆旋炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-baoxuan-luoke-spin.png')) },
    ],
    medium: [
      { id: 'part-1', name: '金币核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '闪电爆旋管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '金币外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '金币稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '闪电爆旋枪', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-baoxuan-luoke-bolt.png')) },
    ],
    hard: [
      { id: 'part-1', name: '雷霆金币核', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '爆旋炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极金币壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '雷霆稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '雷霆爆旋炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-baoxuan-luoke-thunder.png')) },
    ],
  },

  '7-2': {
    // 深海霸王 - 深海霸主主题
    easy: [
      { id: 'part-1', name: '霸王核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光深海管', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '霸王护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '深海外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫光深海枪', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-shenhai-bawang-deep.png')) },
    ],
    medium: [
      { id: 'part-1', name: '深海核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '闪电深海管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '深海外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '深海稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '闪电深海炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-shenhai-bawang-deep.png')) },
    ],
    hard: [
      { id: 'part-1', name: '雷霆霸王核', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '霸王炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极深海壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '雷霆稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '雷霆霸王炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-shenhai-bawang-king.png')) },
    ],
  },

  // ========== 第八单元：找规律 ==========
  '8': {
    // 银翼骑士 - 银翼飞行主题
    easy: [
      { id: 'part-1', name: '银翼核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光银翼刃', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '骑士护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '银翼外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫光银翼剑', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-yinyi-qishi-sword.png')) },
    ],
    medium: [
      { id: 'part-1', name: '骑士核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '闪电银翼管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '骑士外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '骑士稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '闪电银翼枪', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-yinyi-qishi-lance.png')) },
    ],
    hard: [
      { id: 'part-1', name: '雷霆银翼核', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '银翼炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极骑士壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '雷霆稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '雷霆银翼炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-yinyi-qishi-thunder.png')) },
    ],
  },

  // ========== 第九单元：期末综合 ==========
  '9': {
    // 重装赤魂王 - 重装火焰主题
    easy: [
      { id: 'part-1', name: '赤魂核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光赤魂管', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '重装护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '赤魂外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫光赤魂枪', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-zhongzhuang-chihunwang-red.png')) },
    ],
    medium: [
      { id: 'part-1', name: '重装核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '闪电赤魂管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '重装外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '重装稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '闪电赤魂炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-zhongzhuang-chihunwang-bolt.png')) },
    ],
    hard: [
      { id: 'part-1', name: '雷霆赤魂核', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '赤魂炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极重装壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '雷霆稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '雷霆赤魂炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-zhongzhuang-chihunwang-thunder.png')) },
    ],
  },

  // ========== 隐藏关卡 H1：超炫电光王 ==========
  'H1': {
    // 超炫电光王 - 电光数字主题
    easy: [
      { id: 'part-1', name: '电光核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光电光管', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '数字护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '电光外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫光电光炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-chaoxuan-dianguangwang-blast.png')) },
    ],
    medium: [
      { id: 'part-1', name: '数位核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '闪电数位管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '数位外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '数位稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '闪电数位炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-chaoxuan-dianguangwang-digit.png')) },
    ],
    hard: [
      { id: 'part-1', name: '雷霆电光核', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '电光爆裂管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极电光壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '雷霆稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '雷霆电光爆裂炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-chaoxuan-dianguangwang-burst.png')) },
    ],
  },

  // ========== 隐藏关卡 H2：炫蓝雷霆王 ==========
  'H2': {
    // 炫蓝雷霆王 - 终极雷霆主题
    easy: [
      { id: 'part-1', name: '雷霆核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫蓝雷霆管', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '雷霆外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫蓝雷霆枪', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-炫蓝雷霆王-炫蓝雷霆枪.png')) },
    ],
    medium: [
      { id: 'part-1', name: '炫蓝核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫蓝雷霆管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '炫蓝外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '炫蓝稳定器', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫蓝雷霆炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-炫蓝雷霆王-炫蓝雷霆炮.png')) },
    ],
    hard: [
      { id: 'part-1', name: '终极雷霆核', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '终极炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '终极雷霆壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '终极稳定器', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫蓝终极雷霆炮', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-炫蓝雷霆王-炫蓝终极雷霆炮.png')) },
    ],
  },
};

/**
 * 根据角色ID和难度获取武器配置
 */
export function getWeaponByCharacterAndDifficulty(
  characterId: string,
  difficulty: DifficultyLevel
): WeaponConfig | undefined {
  return weaponConfigs.find(
    (w) => w.characterId === characterId && w.difficulty === difficulty
  );
}

/**
 * 根据角色ID和难度获取武器图片路径
 */
export function getWeaponImage(
  characterId: string,
  difficulty: DifficultyLevel
): string {
  const config = getWeaponByCharacterAndDifficulty(characterId, difficulty);
  return config?.weaponImage || `/assets/weapons/${difficulty}-weapon.png`;
}

/**
 * 根据角色ID和难度获取武器名称
 */
export function getWeaponName(
  characterId: string,
  difficulty: DifficultyLevel
): string {
  const config = getWeaponByCharacterAndDifficulty(characterId, difficulty);
  return config?.weaponName || '武器';
}

/**
 * 根据关卡ID和难度获取武器零件
 */
export function getWeaponPartsByLevel(
  levelId: string,
  difficulty: DifficultyLevel
): WeaponPart[] {
  const config = weaponPartsByLevel[levelId];
  if (!config) {
    // 返回默认零件配置
    return getDefaultWeaponParts(difficulty);
  }
  return config[difficulty] || getDefaultWeaponParts(difficulty);
}

/**
 * 默认武器零件配置
 */
function getDefaultWeaponParts(difficulty: DifficultyLevel): WeaponPart[] {
  const defaults = {
    easy: [
      { id: 'part-1', name: '能量核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '炫光发射器', shapeType: 'triangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '防护护盾', shapeType: 'square' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'part-4', name: '能量外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-4.png')) },
      { id: 'complete', name: '炫光武器', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/easy-weapon.png')) },
    ],
    medium: [
      { id: 'part-1', name: '闪电核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '闪电炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '闪电外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'complete', name: '闪电武器', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/medium-weapon.png')) },
    ],
    hard: [
      { id: 'part-1', name: '雷霆核心', shapeType: 'circle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-1.png')) },
      { id: 'part-2', name: '雷霆炮管', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-2.png')) },
      { id: 'part-3', name: '雷霆外壳', shapeType: 'rectangle' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/weapon-part-3.png')) },
      { id: 'complete', name: '雷霆武器', shapeType: 'composite' as ShapeType, iconImage: getAssetPath(getAssetPath('/assets/weapons/hard-weapon.png')) },
    ],
  };
  return defaults[difficulty] || defaults.easy;
}

/**
 * 关卡ID与守护者角色ID映射
 */
export const levelGuardianMap: Record<string, string> = {
  '1-1': 'juli-fengbao',
  '1-2': 'baoche-jiushi',
  '1-3': 'liehuo-xiuluo',
  '2-1': 'anying-tegong',
  '2-2': 'tiebi-jueshi',
  '2-3': 'penshi-jialun',
  '2-4': 'liebian-qishi',
  '3-1': 'baolie-zhongka',
  '3-2': 'shenhai-tianmao',
  '3-3': 'zhongli-jingang',
  '3-4': 'xuantie-zhanshen',
  '4-1': 'xuanlan-shandian-s',
  '4-2': 'yanlong-zhanshen',
  '4-3': 'pili-huoying',
  '5-1': 'liekong-hanjiang',
  '5-2': 'gangbi-lishi',
  '6': 'xingji-youxia',
  '7-1': 'baoxuan-luoke',
  '7-2': 'shenhai-bawang',
  '8': 'yinyi-qishi',
  '9': 'zhongzhang-chihunwang',
  'H1': 'chaoxuan-dianguangwang',
  'H2': 'xuanlan-leitingwang',
};

/**
 * 根据关卡ID获取武器图片
 */
export function getWeaponImageByLevel(
  levelId: string,
  difficulty: DifficultyLevel
): string {
  const characterId = levelGuardianMap[levelId];
  if (characterId) {
    return getWeaponImage(characterId, difficulty);
  }
  return `/assets/weapons/${difficulty}-weapon.png`;
}

/**
 * 根据关卡ID获取武器名称
 */
export function getWeaponNameByLevel(
  levelId: string,
  difficulty: DifficultyLevel
): string {
  const characterId = levelGuardianMap[levelId];
  if (characterId) {
    return getWeaponName(characterId, difficulty);
  }
  return '武器';
}
