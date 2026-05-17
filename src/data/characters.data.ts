import { getAssetPath } from '@/config/paths.config';
import type { Character } from '@/types';

/**
 * 所有角色数据 - 21 个炫卡斗士
 */
export const characters: Character[] = [
  // 000: 炫蓝闪电 - 导师角色
  {
    id: 'xuanlan-shandian',
    name: '炫蓝闪电',
    title: '智慧导师',
    description: '炫卡世界的智慧导师，负责引导新战士完成训练。他的闪电速度代表着思维的敏捷。',
    vehicleImage: getAssetPath('/assets/character/xuanlan-shandian.png'),
    robotImage: getAssetPath('/assets/character/xuanlan-shandian-robot2.jpeg'),
    stats: {
      height: '3.8 米',
      weight: '2.8 吨',
      speed: '350km/h',
      power: '6000 马力',
    },
    skills: [
      { name: '闪电加速', description: '瞬间提升速度，快速移动到任何位置' },
      { name: '智慧之光', description: '释放智慧能量，帮助战士们思考问题' },
    ],
    knowledge: ['数学基础', '逻辑思维'],
    rarity: 'epic',
    number: '000',
    ultimateSkill: '闪电风暴',
    attribute: '闪电',
  },
  // 001: 巨力风暴 - 关卡 1-1 守护者
  {
    id: 'juli-fengbao',
    name: '巨力风暴',
    title: '力量守护者',
    description: '拥有强大力量的炫卡斗士，守护着"认识平面图形"关卡。他的变形能力让他在战斗中无往不利。',
    vehicleImage: getAssetPath('/assets/character/juli-fengbao.png'),
    robotImage: getAssetPath('/assets/character/juli-fengbao-robot.jpeg'),
    stats: {
      height: '4.2 米',
      weight: '3.5 吨',
      speed: '120km/h',
      power: '8500 马力',
    },
    skills: [
      { name: '风暴冲击', description: '利用强大的力量制造风暴，击退敌人' },
      { name: '重力压制', description: '改变周围重力，让敌人无法动弹' },
    ],
    knowledge: ['认识平面图形', '圆形', '三角形', '正方形', '长方形'],
    rarity: 'rare',
    number: '001',
    ultimateSkill: '超级能量冲击',
    attribute: '力量',
  },
  // 002: 急救卫士 - 关卡 1-2 守护者
  {
    id: 'baoche-jiushi',
    name: '急救卫士',
    title: '生命守护者',
    description: '医疗救援型炫卡斗士，永远在第一时间赶赴现场救助伤员。',
    vehicleImage: getAssetPath('/assets/character/jiushi-weishi.png'),
    robotImage: getAssetPath('/assets/character/jiushi-weishi-robot.png'),
    stats: {
      height: '3.5 米',
      weight: '2.2 吨',
      speed: '180km/h',
      power: '4500 马力',
    },
    skills: [
      { name: '紧急救援', description: '快速到达现场进行救援' },
    ],
    knowledge: ['20 以内的退位减法'],
    rarity: 'common',
    number: '002',
    ultimateSkill: '生命守护结界',
    attribute: '光',
  },
  // 003: 烈火修罗 - 关卡 1-3 守护者
  {
    id: 'liehuo-xiuluo',
    name: '烈火修罗',
    title: '火焰战士',
    description: '操控火焰的炫卡斗士，在烈火中锻造出强大的意志。',
    vehicleImage: getAssetPath('/assets/character/liehuo-xiuluo.png'),
    robotImage: getAssetPath('/assets/character/liehuo-xiuluo-robot.png'),
    stats: {
      height: '4.0 米',
      weight: '3.0 吨',
      speed: '200km/h',
      power: '7000 马力',
    },
    skills: [
      { name: '烈焰冲击', description: '释放烈焰攻击敌人' },
    ],
    knowledge: ['100 以内数的认识'],
    rarity: 'rare',
    number: '003',
    ultimateSkill: '烈火焚天',
    attribute: '火焰',
  },
  // 004: 暗影特工 - 关卡 2-1 守护者
  {
    id: 'anying-tegong',
    name: '暗影特工',
    title: '潜行者',
    description: '擅长隐秘行动的炫卡斗士，在暗影中守护正义。',
    vehicleImage: getAssetPath('/assets/character/anying-tegong.png'),
    robotImage: getAssetPath('/assets/character/anying-tegong.png'),
    stats: {
      height: '3.6 米',
      weight: '2.5 吨',
      speed: '280km/h',
      power: '5500 马力',
    },
    skills: [
      { name: '暗影潜行', description: '隐身移动，悄无声息' },
    ],
    knowledge: ['认识人民币'],
    rarity: 'rare',
    number: '004',
    ultimateSkill: '暗影终结击',
    attribute: '暗影',
  },
  // 005: 铁臂爵士 - 关卡 2-2 守护者
  {
    id: 'tiebi-jueshi',
    name: '铁臂爵士',
    title: '力量战士',
    description: '拥有钢铁手臂的炫卡斗士，力量惊人，正义的化身。',
    vehicleImage: getAssetPath('/assets/character/tiebi-jueshi.png'),
    robotImage: getAssetPath('/assets/character/tiebi-jueshi.png'),
    stats: {
      height: '4.5 米',
      weight: '4.0 吨',
      speed: '150km/h',
      power: '9000 马力',
    },
    skills: [
      { name: '铁臂重击', description: '用钢铁手臂发出致命一击' },
    ],
    knowledge: ['100 以内的加法和减法'],
    rarity: 'epic',
    number: '005',
    ultimateSkill: '钢铁粉碎拳',
    attribute: '力量',
  },
  // 006: 喷射加仑 - 关卡 2-3 守护者
  {
    id: 'penshi-jialun',
    name: '喷射加仑',
    title: '消防战士',
    description: '消防型炫卡斗士，喷射高压水柱，灭火救援两不误。',
    vehicleImage: getAssetPath('/assets/character/penshi-jialun.png'),
    robotImage: getAssetPath('/assets/character/penshi-jialun.png'),
    stats: {
      height: '3.8 米',
      weight: '3.2 吨',
      speed: '160km/h',
      power: '6000 马力',
    },
    skills: [
      { name: '高压水炮', description: '喷射高压水柱灭火' },
    ],
    knowledge: ['找规律'],
    rarity: 'common',
    number: '006',
    ultimateSkill: '高压水龙卷',
    attribute: '水',
  },
  // 007: 裂变骑士 - 关卡 2-4 守护者
  {
    id: 'liebian-qishi',
    name: '裂变骑士',
    title: '分裂战士',
    description: '能够分裂成多个个体的炫卡斗士，战斗力成倍增长。',
    vehicleImage: getAssetPath('/assets/character/liebian-qishi.png'),
    robotImage: getAssetPath('/assets/character/liebian-qishi.png'),
    stats: {
      height: '4.0 米',
      weight: '2.8 吨',
      speed: '220km/h',
      power: '7500 马力',
    },
    skills: [
      { name: '裂变分身', description: '分裂成多个分身作战' },
    ],
    knowledge: ['分类与整理'],
    rarity: 'epic',
    number: '007',
    ultimateSkill: '量子裂变爆发',
    attribute: '能量',
  },
  // 008: 暴烈重卡 - 关卡 3-1 守护者
  {
    id: 'baolie-zhongka',
    name: '暴烈重卡',
    title: '运输战士',
    description: '重型运输型炫卡斗士，载重能力超强，是团队的后勤保障。',
    vehicleImage: getAssetPath('/assets/character/baolie-zhongka.png'),
    robotImage: getAssetPath('/assets/character/baolie-zhongka.png'),
    stats: {
      height: '5.0 米',
      weight: '6.0 吨',
      speed: '120km/h',
      power: '10000 马力',
    },
    skills: [
      { name: '重装突击', description: '利用巨大载重进行突击' },
    ],
    knowledge: ['位置'],
    rarity: 'rare',
    number: '008',
    ultimateSkill: '暴烈冲锋',
    attribute: '力量',
  },
  // 009: 深海天锚 - 关卡 3-2 守护者
  {
    id: 'shenhai-tianmao',
    name: '深海天锚',
    title: '海洋战士',
    description: '深海作战型炫卡斗士，在海洋中自由穿梭，守护蓝色领土。',
    vehicleImage: getAssetPath('/assets/character/shenhai-tianmao.png'),
    robotImage: getAssetPath('/assets/character/shenhai-tianmao.png'),
    stats: {
      height: '4.2 米',
      weight: '3.8 吨',
      speed: '150km/h(水下 80 节)',
      power: '8000 马力',
    },
    skills: [
      { name: '深海锚击', description: '发射深海锚进行攻击' },
    ],
    knowledge: ['找规律'],
    rarity: 'epic',
    number: '009',
    ultimateSkill: '海啸锚击',
    attribute: '水',
  },
  // 010: 重力金刚 - 关卡 3-3 守护者
  {
    id: 'zhongli-jingang',
    name: '重力金刚',
    title: '重力操控者',
    description: '能够操控重力的炫卡斗士，可以让物体变轻或变重。',
    vehicleImage: getAssetPath('/assets/character/zhongli-jingang.png'),
    robotImage: getAssetPath('/assets/character/zhongli-jingang.png'),
    stats: {
      height: '4.8 米',
      weight: '5.5 吨',
      speed: '100km/h',
      power: '9500 马力',
    },
    skills: [
      { name: '重力场', description: '制造重力场困住敌人' },
      { name: '反重力', description: '让物体漂浮起来' },
    ],
    knowledge: ['认识钟表'],
    rarity: 'rare',
    number: '010',
    ultimateSkill: '重力崩溃',
    attribute: '能量',
  },
  // 011: 玄铁战神 - 关卡 3-4 守护者
  {
    id: 'xuantie-zhanshen',
    name: '玄铁战神',
    title: '金属掌控者',
    description: '掌控金属力量的炫卡斗士，身体由神秘的玄铁构成。',
    vehicleImage: getAssetPath('/assets/character/xuantie-zhanshen.png'),
    robotImage: getAssetPath('/assets/character/xuantie-zhanshen.png'),
    stats: {
      height: '4.6 米',
      weight: '5.8 吨',
      speed: '130km/h',
      power: '9200 马力',
    },
    skills: [
      { name: '金属护盾', description: '形成金属护盾保护自己' },
      { name: '磁力吸附', description: '用磁力吸附金属物体' },
    ],
    knowledge: ['认识图形'],
    rarity: 'epic',
    number: '011',
    ultimateSkill: '玄铁爆裂',
    attribute: '金属',
  },
  // 012: 炫蓝闪电 S - 关卡 4-1 守护者
  {
    id: 'xuanlan-shandian-s',
    name: '炫蓝闪电 S',
    title: '极速王者',
    description: '炫蓝闪电的升级版本，速度更快，力量更强。',
    vehicleImage: getAssetPath('/assets/character/xuanlan-shandian-s.png'),
    robotImage: getAssetPath('/assets/character/xuanlan-shandian-s.png'),
    stats: {
      height: '3.9 米',
      weight: '2.9 吨',
      speed: '450km/h',
      power: '7000 马力',
    },
    skills: [
      { name: '超音速', description: '突破音障移动' },
      { name: '雷电链', description: '释放连锁闪电攻击' },
    ],
    knowledge: ['20 以内加减法'],
    rarity: 'gold',
    number: '012',
    ultimateSkill: '超新星爆发',
    attribute: '闪电',
  },
  // 013: 焰龙战神 - 关卡 4-2 守护者
  {
    id: 'yanlong-zhanshen',
    name: '焰龙战神',
    title: '龙炎传承者',
    description: '拥有龙族血脉的炫卡斗士，能够喷吐炽热的龙炎。',
    vehicleImage: getAssetPath('/assets/character/yanlong-zhanshen-1.png'),
    robotImage: getAssetPath('/assets/character/yanlong-zhanshen-2.png'),
    stats: {
      height: '4.5 米',
      weight: '3.8 吨',
      speed: '250km/h',
      power: '8800 马力',
    },
    skills: [
      { name: '龙炎吐息', description: '喷吐高温龙炎' },
      { name: '龙鳞护甲', description: '形成龙鳞护甲' },
    ],
    knowledge: ['两位数加减法'],
    rarity: 'gold',
    number: '013',
    ultimateSkill: '焚天龙焰',
    attribute: '火焰',
  },
  // 014: 霹雳火影 - 关卡 5-1 守护者
  {
    id: 'pili-huoying',
    name: '霹雳火影',
    title: '闪电忍者',
    description: '来自忍者村的炫卡斗士，擅长使用闪电忍术。',
    vehicleImage: getAssetPath('/assets/character/pili-huoying.png'),
    robotImage: getAssetPath('/assets/character/pili-huoying.png'),
    stats: {
      height: '3.7 米',
      weight: '2.6 吨',
      speed: '320km/h',
      power: '6500 马力',
    },
    skills: [
      { name: '影分身', description: '制造闪电分身' },
      { name: '雷切', description: '凝聚闪电于手中攻击' },
    ],
    knowledge: ['连加连减'],
    rarity: 'rare',
    number: '014',
    ultimateSkill: '万雷归宗',
    attribute: '闪电',
  },
  // 015: 猎空悍将 - 关卡 5-2 守护者
  {
    id: 'liekong-hanjiang',
    name: '猎空悍将',
    title: '空中猎手',
    description: '擅长空中作战的炫卡斗士，拥有强大的制空能力。',
    vehicleImage: getAssetPath('/assets/character/liekong-hanjiang-alt.png'),
    robotImage: getAssetPath('/assets/character/liekong-hanjiang-alt.png'),
    stats: {
      height: '4.0 米',
      weight: '3.0 吨',
      speed: '400km/h',
      power: '7200 马力',
    },
    skills: [
      { name: '空中打击', description: '从空中发动攻击' },
      { name: '锁定追踪', description: '锁定敌人进行追踪' },
    ],
    knowledge: ['加减混合运算'],
    rarity: 'rare',
    number: '015',
    ultimateSkill: '天空坠落',
    attribute: '风',
  },
  // 016: 钢臂力士 - 关卡 6 BOSS
  {
    id: 'gangbi-lishi',
    name: '钢臂力士',
    title: '力量之王',
    description: '拥有最强力量的炫卡斗士，双臂由精钢打造。',
    vehicleImage: getAssetPath('/assets/character/gangbi-lishi.png'),
    robotImage: getAssetPath('/assets/character/gangbi-lishi.png'),
    stats: {
      height: '5.2 米',
      weight: '6.5 吨',
      speed: '90km/h',
      power: '12000 马力',
    },
    skills: [
      { name: '巨力投掷', description: '投掷巨大物体' },
      { name: '地震波', description: '撞击地面引发地震' },
    ],
    knowledge: ['综合应用'],
    rarity: 'gold',
    number: '016',
    ultimateSkill: '毁天灭地',
    attribute: '力量',
  },
  // 017: 星际游侠 - 隐藏角色
  {
    id: 'xingji-youxia',
    name: '星际游侠',
    title: '宇宙旅行者',
    description: '来自遥远星系的炫卡斗士，见识广博。',
    vehicleImage: getAssetPath('/assets/character/xingji-youxia-1.png'),
    robotImage: getAssetPath('/assets/character/xingji-youxia-2.png'),
    stats: {
      height: '4.1 米',
      weight: '3.2 吨',
      speed: '500km/h',
      power: '7800 马力',
    },
    skills: [
      { name: '星际跳跃', description: '瞬间移动到远处' },
      { name: '宇宙射线', description: '发射宇宙射线' },
    ],
    knowledge: ['拓展训练'],
    rarity: 'rainbow',
    number: '017',
    ultimateSkill: '超新星爆炸',
    attribute: '宇宙',
  },
  // 018: 爆旋洛克 - 隐藏角色
  {
    id: 'baoxuan-luoke',
    name: '爆旋洛克',
    title: '旋转大师',
    description: '擅长旋转攻击的炫卡斗士，身体可以高速旋转。',
    vehicleImage: getAssetPath('/assets/character/baoxuan-luoke.png'),
    robotImage: getAssetPath('/assets/character/baoxuan-luoke.png'),
    stats: {
      height: '3.8 米',
      weight: '3.0 吨',
      speed: '280km/h',
      power: '7000 马力',
    },
    skills: [
      { name: '旋转冲击', description: '高速旋转撞击敌人' },
      { name: '旋风斩', description: '形成旋风切割敌人' },
    ],
    knowledge: ['拓展训练'],
    rarity: 'rare',
    number: '018',
    ultimateSkill: '终极旋风',
    attribute: '风',
  },
  // 019: 深海霸王 - 隐藏角色
  {
    id: 'shenhai-bawang',
    name: '深海霸王',
    title: '海洋霸主',
    description: '深海中的霸主，统治着所有海洋生物。',
    vehicleImage: getAssetPath('/assets/character/shenhai-bawang-1.png'),
    robotImage: getAssetPath('/assets/character/shenhai-bawang-robot.png'),
    stats: {
      height: '5.5 米',
      weight: '7.0 吨',
      speed: '180km/h',
      power: '10000 马力',
    },
    skills: [
      { name: '海啸召唤', description: '召唤巨大海啸' },
      { name: '水炮连发', description: '连续发射水炮' },
    ],
    knowledge: ['拓展训练'],
    rarity: 'gold',
    number: '019',
    ultimateSkill: '怒海狂涛',
    attribute: '水',
  },
  // 020: 银翼骑士 - 隐藏角色
  {
    id: 'yinyi-qishi',
    name: '银翼骑士',
    title: '白银守护者',
    description: '身披银甲的骑士，守护着炫卡世界的和平。',
    vehicleImage: getAssetPath('/assets/character/yinyi-qishi.png'),
    robotImage: getAssetPath('/assets/character/yinyi-qishi.png'),
    stats: {
      height: '4.3 米',
      weight: '3.6 吨',
      speed: '260km/h',
      power: '8200 马力',
    },
    skills: [
      { name: '银光斩', description: '释放银色剑光' },
      { name: '骑士冲锋', description: '发起冲锋攻击' },
    ],
    knowledge: ['拓展训练'],
    rarity: 'gold',
    number: '020',
    ultimateSkill: '圣光审判',
    attribute: '光',
  },
  // 021: 重装赤魂王 - 最终 BOSS
  {
    id: 'zhongzhang-chihunwang',
    name: '重装赤魂王',
    title: '赤色帝王',
    description: '炫卡世界的最终 BOSS，拥有最强的力量和防御。',
    vehicleImage: getAssetPath('/assets/character/zhongzhuang-chihunwang.png'),
    robotImage: getAssetPath('/assets/character/zhongzhuang-chihunwang.png'),
    stats: {
      height: '6.0 米',
      weight: '8.0 吨',
      speed: '110km/h',
      power: '15000 马力',
    },
    skills: [
      { name: '赤魂冲击', description: '释放赤色灵魂能量' },
      { name: '帝王威压', description: '释放威压震慑敌人' },
    ],
    knowledge: ['终极挑战'],
    rarity: 'prismatic',
    number: '021',
    ultimateSkill: '赤魂灭世',
    attribute: '暗',
  },
  // 022: 超炫电光王 - 隐藏关卡 H1 守护者
  {
    id: 'chaoxuan-dianguangwang',
    name: '超炫电光王',
    title: '数位大师',
    description: '来自数字王国的隐藏 BOSS，精通数位和数的组成。他的电光能力可以揭示数字的本质。',
    vehicleImage: getAssetPath('/assets/character/chaoxuan-dianguangwang.png'),
    robotImage: getAssetPath('/assets/character/chaoxuan-dianguangwang.png'),
    stats: {
      height: '4.5 米',
      weight: '3.2 吨',
      speed: '280km/h',
      power: '9000 马力',
    },
    skills: [
      { name: '数位透视', description: '看穿任何数的数位组成' },
      { name: '电光启示', description: '释放电光启发智慧' },
    ],
    knowledge: ['100 以内数的认识', '数的组成', '数位理解'],
    rarity: 'rainbow',
    number: 'H1',
    ultimateSkill: '超炫电光爆裂',
    attribute: '电',
  },
  // 023: 炫蓝雷霆王 - 隐藏关卡 H2 守护者
  {
    id: 'xuanlan-leitingwang',
    name: '炫蓝雷霆王',
    title: '时空王者',
    description: '炫蓝闪电的终极形态，从未来穿越而来的王者。掌握跨单元综合应用的终极力量。',
    vehicleImage: getAssetPath('/assets/character/xuanlan-leitingwang.png'),
    robotImage: getAssetPath('/assets/character/xuanlan-leitingwang.png'),
    stats: {
      height: '5.0 米',
      weight: '4.0 吨',
      speed: '350km/h',
      power: '12000 马力',
    },
    skills: [
      { name: '时空穿梭', description: '穿越时空预知未来' },
      { name: '雷霆万钧', description: '释放万钧雷霆攻击' },
    ],
    knowledge: ['综合应用', '跨单元知识', '问题解决'],
    rarity: 'prismatic',
    number: 'H2',
    ultimateSkill: '炫蓝雷霆灭世',
    attribute: '雷电',
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

/**
 * 根据稀有度筛选角色
 */
export function getCharactersByRarity(rarity: string): Character[] {
  return characters.filter((c) => c.rarity === rarity);
}

/**
 * 获取指定属性的角色
 */
export function getCharactersByAttribute(attribute: string): Character[] {
  return characters.filter((c) => c.attribute === attribute);
}
