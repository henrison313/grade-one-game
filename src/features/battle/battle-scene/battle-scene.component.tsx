/**
 * 战斗画面组件
 * 功能：炫蓝闪电 VS 巨力风暴战斗动画
 * 动画流程：双方入场 → 炫蓝闪电绝招 → 巨力风暴绝招 → 冲击碰撞 → 胜利光芒
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes, css } from 'styled-components';
import type { Character, DifficultyLevel } from '@/types';
import { useSound } from '@/shared/hooks';
import { getVariantByDifficulty } from '@/data/character-variants.data';

// 🎨 战斗场景色彩
const BattleColors = {
  lightning: '#FFD700',
  storm: '#7FCCB0',
  sky: '#89CFF0',
  energy: '#FFE66D',
  glow: '#E6E6FA',
  impact: '#FF7F7F',
};

// 🌊 能量波动动画
const waveMotion = keyframes`
  0% { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(100%) skewX(-15deg); }
`;

// 💥 碰撞闪光动画
const collisionFlash = keyframes`
  0% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(2); }
  100% { opacity: 0; transform: scale(3); }
`;

// ⚡ 武器能量脉冲动画
const weaponPulse = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 15px ${BattleColors.lightning}) drop-shadow(0 0 30px ${BattleColors.energy});
    transform: scale(1);
  }
  50% {
    filter: drop-shadow(0 0 25px ${BattleColors.lightning}) drop-shadow(0 0 50px ${BattleColors.energy}) drop-shadow(0 0 70px #FF4500);
    transform: scale(1.1);
  }
`;

// 🎯 能量光束发射动画
const energyBeam = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }
  20% {
    width: 50px;
    opacity: 1;
  }
  100% {
    width: 400px;
    opacity: 0;
  }
`;

// 🎬 战斗容器
const BattleContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: linear-gradient(180deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%);
  overflow: hidden;
`;

// 🌟 战斗场地
const BattleStage = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
`;

// 🦸 角色容器
const CharacterBox = styled(motion.div)<{ $side: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => props.$side === 'left' ? 'align-self: flex-start;' : 'align-self: flex-end;'}
`;

// 🖼️ 角色图像
const FighterImage = styled(motion.img)`
  width: 180px;
  height: 180px;
  object-fit: contain;
  filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.5));
`;

// ⚔️ 武器图像（战斗中展示 - 放在机器人下方）
const WeaponImage = styled(motion.img)<{ $firing: boolean }>`
  width: ${(props) => props.$firing ? '150px' : '120px'};
  height: ${(props) => props.$firing ? '150px' : '120px'};
  object-fit: contain;
  filter: drop-shadow(0 0 20px ${BattleColors.lightning});
  margin-top: 16px;
  ${(props) => props.$firing && css`
    animation: ${weaponPulse} 0.5s ease-in-out infinite;
  `}
`;

// 🔫 能量光束（武器发射效果）
const EnergyBeam = styled(motion.div)`
  position: absolute;
  height: 8px;
  background: linear-gradient(90deg,
    ${BattleColors.lightning} 0%,
    ${BattleColors.energy} 50%,
    transparent 100%
  );
  border-radius: 4px;
  box-shadow:
    0 0 10px ${BattleColors.lightning},
    0 0 20px ${BattleColors.energy},
    0 0 30px ${BattleColors.lightning};
  animation: ${energyBeam} 1s ease-out forwards;
`;

// 🦸 角色武器组合容器
const CharacterWeaponBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

// 📝 角色名称
const FighterName = styled(motion.div)`
  margin-top: 12px;
  padding: 8px 24px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  font-size: 16px;
  font-weight: 700;
  color: white;
`;

// ⚡ 绝招名称显示
const UltimateDisplay = styled(motion.div)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px 48px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.9) 0%, rgba(255, 230, 109, 0.9) 100%);
  border-radius: 24px;
  border: 4px solid white;
  font-size: 28px;
  font-weight: 800;
  color: #1e1b4b;
  text-align: center;
  box-shadow:
    0 0 30px rgba(255, 215, 0, 0.8),
    0 0 60px rgba(255, 230, 109, 0.6);
`;

// 💥 碰撞效果
const CollisionEffect = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, white 0%, ${BattleColors.energy} 30%, transparent 70%);
  animation: ${collisionFlash} 0.5s ease-out;
`;

// 🌈 能量波
const EnergyWave = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(255, 215, 0, 0.3) 50%,
    transparent 100%
  );
  animation: ${waveMotion} 1s ease-out;
`;

// ✨ 背景粒子
const BackgroundParticle = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${(props) => props.$color};
  opacity: 0.6;
`;

// 🎯 胜利光芒
const VictoryGlow = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center,
    rgba(255, 215, 0, 0.5) 0%,
    transparent 50%
  );
`;

// 📋 战斗信息
const BattleInfo = styled(motion.div)`
  position: absolute;
  top: 16px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
`;

// 🎤 战斗解说
const BattleAnnouncement = styled(motion.div)`
  position: absolute;
  bottom: 16px;
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: white;
  font-weight: 700;
  background: rgba(0, 0, 0, 0.5);
  padding: 12px;
`;

// 💡 跳过按钮
const SkipButton = styled(motion.button)`
  position: absolute;
  bottom: 24px;
  right: 24px;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  font-size: 14px;
  color: white;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

// 招术配置（官方设定）
// 炫蓝闪电绝招：爆裂轰击、闪电扣杀、百万伏特拳、无限爆裂
// 巨力风暴绝招：超级能量冲击、超级能量护盾、超级触地攻击
const LightningUltimates = {
  easy: [
    { name: '百万伏特拳', effect: 'flicker', color: '#FFD700' },
    { name: '爆裂轰击', effect: 'pulse', color: '#89CFF0' },
  ],
  medium: [
    { name: '闪电扣杀', effect: 'shake', color: '#FFD700' },
    { name: '百万伏特拳', effect: 'swirl', color: '#89CFF0' },
  ],
  hard: [
    { name: '无限爆裂', effect: 'shake', color: '#FFD700' },
    { name: '闪电扣杀', effect: 'swirl', color: '#E6E6FA' },
  ],
};

const StormUltimates = {
  easy: [
    { name: '超级能量冲击', effect: 'pulse', color: '#7FCCB0' },
    { name: '超级能量护盾', effect: 'swirl', color: '#89CFF0' },
  ],
  medium: [
    { name: '烈焰风暴冲击', effect: 'shake', color: '#FF4500' },  // 火焰形态
    { name: '超级触地攻击', effect: 'swirl', color: '#E6E6FA' },
  ],
  hard: [
    { name: '宇宙风暴毁灭', effect: 'swirl', color: '#EC4899' },  // 终极形态（彩虹效果）
    { name: '超级无敌能量护盾', effect: 'shake', color: '#7FCCB0' },
  ],
};

// 随机选择招术
const getRandomUltimate = (ultimates: typeof LightningUltimates, difficulty: DifficultyLevel) => {
  const moves = ultimates[difficulty];
  return moves[Math.floor(Math.random() * moves.length)];
};

interface BattleSceneProps {
  hero: Character;      // 炫蓝闪电
  enemy: Character;     // 巨力风暴/关卡守护者
  difficulty: DifficultyLevel;
  weaponComplete?: boolean;  // 武器是否完成
  weaponImage?: string;      // 武器图片（如果完成）
  onComplete: () => void;
}

export const BattleScene: React.FC<BattleSceneProps> = ({
  hero,
  enemy,
  difficulty,
  weaponComplete = false,
  weaponImage,
  onComplete,
}) => {
  const [phase, setPhase] = useState<'entry' | 'heroUltimate' | 'enemyUltimate' | 'collision' | 'victory'>('entry');
  const { playCardReveal, playStarEarn, playCorrect, playVictory, playBGM } = useSound();

  // 根据难度获取巨力风暴形态图片
  const enemyVariant = useMemo(() => {
    return getVariantByDifficulty(enemy.id, difficulty);
  }, [enemy.id, difficulty]);

  const enemyImage = enemyVariant?.image || enemy.robotImage || enemy.vehicleImage;

  // 随机选择招术
  const heroMove = useMemo(() => getRandomUltimate(LightningUltimates, difficulty), [difficulty]);
  const enemyMove = useMemo(() => getRandomUltimate(StormUltimates, difficulty), [difficulty]);

  // 动画时序
  useEffect(() => {
    playBGM('battle');

    // 1秒后：双方入场完成
    const entryTimer = setTimeout(() => {
      setPhase('heroUltimate');
      playCardReveal();
    }, 1000);

    // 2秒后：炫蓝闪电绝招
    const heroTimer = setTimeout(() => {
      setPhase('enemyUltimate');
      playStarEarn();
    }, 2500);

    // 3.5秒后：巨力风暴绝招
    const enemyTimer = setTimeout(() => {
      setPhase('collision');
      playCorrect();
    }, 4000);

    // 5秒后：碰撞效果
    const collisionTimer = setTimeout(() => {
      setPhase('victory');
      playVictory();
    }, 5500);

    // 7秒后：胜利，进入炫卡收集
    const victoryTimer = setTimeout(() => {
      onComplete();
    }, 7500);

    return () => {
      clearTimeout(entryTimer);
      clearTimeout(heroTimer);
      clearTimeout(enemyTimer);
      clearTimeout(collisionTimer);
      clearTimeout(victoryTimer);
    };
  }, [onComplete, playBGM, playCardReveal, playStarEarn, playCorrect, playVictory]);

  // 背景粒子
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    color: [BattleColors.lightning, BattleColors.storm, BattleColors.sky][i % 3],
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <BattleContainer>
      {/* 背景粒子 */}
      {particles.map((p) => (
        <BackgroundParticle
          key={p.id}
          $color={p.color}
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: p.id * 0.1,
          }}
        />
      ))}

      {/* 胜利光芒 */}
      <AnimatePresence>
        {phase === 'victory' && (
          <VictoryGlow
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>

      {/* 战斗信息 */}
      <BattleInfo
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        难度：{difficulty === 'easy' ? '简单' : difficulty === 'medium' ? '中等' : '困难'}
      </BattleInfo>

      {/* 战斗场地 */}
      <BattleStage>
        {/* 炫蓝闪电（左侧） */}
        <CharacterBox $side="left">
          <CharacterWeaponBox
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: phase === 'heroUltimate' ? 50 : phase === 'collision' ? 100 : 0,
              opacity: 1,
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <FighterImage
              src={hero.robotImage || hero.vehicleImage}
              alt={hero.name}
              animate={{
                scale: phase === 'heroUltimate' ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            {/* 武器展示（如果武器完成） */}
            {weaponComplete && weaponImage && (
              <WeaponImage
                src={weaponImage}
                alt="炫蓝光能枪"
                $firing={phase === 'heroUltimate'}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  scale: phase === 'heroUltimate' ? 1.2 : 1,
                }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
            )}
            {/* 武器能量光束 */}
            <AnimatePresence>
              {weaponComplete && phase === 'heroUltimate' && (
                <EnergyBeam
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    top: '50%',
                    left: '100%',
                  }}
                />
              )}
            </AnimatePresence>
          </CharacterWeaponBox>
          <FighterName
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {hero.name}
          </FighterName>
        </CharacterBox>

        {/* 巨力风暴（右侧） */}
        <CharacterBox $side="right">
          <FighterImage
            src={enemyImage}
            alt={enemy.name}
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: phase === 'enemyUltimate' ? -50 : phase === 'collision' ? -100 : 0,
              opacity: 1,
              scale: phase === 'enemyUltimate' ? 1.2 : 1,
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          <FighterName
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {enemy.name}
          </FighterName>
        </CharacterBox>

        {/* 能量波 */}
        <AnimatePresence>
          {(phase === 'heroUltimate' || phase === 'enemyUltimate') && (
            <EnergyWave
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>

        {/* 碰撞效果 */}
        <AnimatePresence>
          {phase === 'collision' && (
            <CollisionEffect
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2, opacity: 1 }}
              exit={{ scale: 3, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      </BattleStage>

      {/* 绝招名称显示 */}
      <AnimatePresence>
        {phase === 'heroUltimate' && (
          <UltimateDisplay
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            ⚡ {heroMove.name}
          </UltimateDisplay>
        )}
        {phase === 'enemyUltimate' && (
          <UltimateDisplay
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            🌪️ {enemyMove.name}
          </UltimateDisplay>
        )}
        {phase === 'victory' && (
          <UltimateDisplay
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 150 }}
          >
            🏆 战斗胜利！
          </UltimateDisplay>
        )}
      </AnimatePresence>

      {/* 战斗解说 */}
      <BattleAnnouncement
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {phase === 'entry' && '双方战士入场...'
        }
        {phase === 'heroUltimate' && (weaponComplete
          ? `${hero.name} 使用炫蓝光能枪使出 ${heroMove.name}！`
          : `${hero.name} 使出 ${heroMove.name}！`
        )
        }
        {phase === 'enemyUltimate' && `${enemy.name} 使出 ${enemyMove.name}！`
        }
        {phase === 'collision' && (weaponComplete
          ? '炫蓝光能枪威力爆发！能量冲击！'
          : '绝招碰撞！能量爆发！'
        )
        }
        {phase === 'victory' && `${hero.name} 获得胜利！即将获得炫卡...`
        }
      </BattleAnnouncement>

      {/* 跳过按钮 */}
      <SkipButton
        onClick={onComplete}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        跳过
      </SkipButton>
    </BattleContainer>
  );
};

export default BattleScene;