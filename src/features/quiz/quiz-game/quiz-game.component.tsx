import React, { useState, useCallback, useMemo, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { GameConfig } from '@/config';
import { storageService } from '@/services';
import { useSound } from '@/shared/hooks';
import { getLevelById } from '@/data/levels.data';
import { getHiddenLevelById } from '@/data/hidden-levels.data';
// 第一单元：认识平面图形
import { level1_1QuestionsByDifficulty } from '@/data/levels/level-1-1.data';
import { level1_2QuestionsByDifficulty } from '@/data/levels/level-1-2.data';
import { level1_3QuestionsByDifficulty } from '@/data/levels/level-1-3.data';
// 第二单元：20以内退位减法
import { level2_1QuestionsByDifficulty } from '@/data/levels/level-2-1.data';
import { level2_2QuestionsByDifficulty } from '@/data/levels/level-2-2.data';
import { level2_3QuestionsByDifficulty } from '@/data/levels/level-2-3.data';
import { level2_4QuestionsByDifficulty } from '@/data/levels/level-2-4.data';
// 第三单元：100以内数的认识
import { level3_1QuestionsByDifficulty } from '@/data/levels/level-3-1.data';
import { level3_2QuestionsByDifficulty } from '@/data/levels/level-3-2.data';
import { level3_3QuestionsByDifficulty } from '@/data/levels/level-3-3.data';
import { level34QuestionsByDifficulty } from '@/data/levels/level-3-4.data';
// 第四单元：100以内口算加减法
import { level41QuestionsByDifficulty } from '@/data/levels/level-4-1.data';
import { level42QuestionsByDifficulty } from '@/data/levels/level-4-2.data';
import { level43QuestionsByDifficulty } from '@/data/levels/level-4-3.data';
// 第五单元：100以内笔算加减法
import { level51QuestionsByDifficulty } from '@/data/levels/level-5-1.data';
import { level52QuestionsByDifficulty } from '@/data/levels/level-5-2.data';
// 第六单元：数量间的加减关系
import { level6QuestionsByDifficulty } from '@/data/levels/level-6.data';
// 第七单元：欢乐购物街
import { level71QuestionsByDifficulty } from '@/data/levels/level-7-1.data';
import { level72QuestionsByDifficulty } from '@/data/levels/level-7-2.data';
// 第八单元：找规律
import { level8QuestionsByDifficulty } from '@/data/levels/level-8.data';
// 第九单元：期末综合
import { level9QuestionsByDifficulty } from '@/data/levels/level-9.data';
// 隐藏关卡
import { levelH1QuestionsByDifficulty } from '@/data/levels/level-h1.data';
import { levelH2QuestionsByDifficulty } from '@/data/levels/level-h2.data';
import { ChoiceQuestion, DragQuestion, CircleQuestion, MultiSelectQuestion, FillBlankQuestion, ShapeComposeQuestion } from '@/features/quiz';
import LinkQuestion from '../link-question/link-question.component';
import MazeGame from '../maze-question/maze-question.component';
import ShapeMatchingGame from '../shape-matching-game/shape-matching-game.component';
import TangramGame from '../tangram-game/tangram-game.component';
import ComboMode from '../combo-mode/combo-mode.component';
import TimedQuestion from '../timed-question/timed-question.component';
import QuizProgress from '../quiz-progress/quiz-progress.component';
import AnswerFeedback from '../answer-feedback/answer-feedback.component';
import WeaponShowcase from '@/features/battle/weapon-showcase/weapon-showcase.component';
import GuardianUpgradeAnimation from '@/features/battle/guardian-upgrade-animation/guardian-upgrade-animation.component';
import BattleScene from '@/features/battle/battle-scene/battle-scene.component';
import { WeaponProgress, SceneBackground, QuestionStory } from '@/features/question-scene';
import { QuestionStoryConfigs, DifficultyConfigs, LevelStoryConfigs } from '@/config/question-story.config';
import { getWeaponImage, getWeaponName, getWeaponPartsByLevel, getWeaponImageByLevel, getWeaponNameByLevel } from '@/data/weapon-configs.data';
import { characters } from '@/data/characters.data';
import { getVariantByDifficulty } from '@/data/character-variants.data';
import type { UserAnswer, Question, LinkQuestionData, DragQuestionData, ChoiceQuestionData, MultiSelectQuestionData, RarityLevel } from '@/types';
import { DifficultyLevel } from '@/types';

// 🎨 Candy Kingdom 色彩方案
const CandyColors = {
  pink: '#FFB5BA',
  mint: '#7FCCB0',
  sky: '#89CFF0',
  yellow: '#FFE66D',
  lavender: '#E6E6FA',
  coral: '#FF7F7F',
  peach: '#FFCBA4',
  cream: '#FFF8E7',
};

// ✨ 背景星星漂浮动画
const floatStars = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-15px) rotate(10deg);
    opacity: 0.9;
  }
`;

// 🌈 背景渐变流动动画
const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// ☁️ 云朵漂浮动画
const cloudDrift = keyframes`
  0%, 100% {
    transform: translateX(0px) translateY(0px);
  }
  25% {
    transform: translateX(10px) translateY(-5px);
  }
  50% {
    transform: translateX(0px) translateY(-8px);
  }
  75% {
    transform: translateX(-10px) translateY(-3px);
  }
`;

// Fisher-Yates 洗牌算法
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// 打乱题目选项顺序
function shuffleQuestion(question: Question): Question {
  switch (question.type) {
    case 'choice': {
      const q = question as ChoiceQuestionData;
      return { ...q, options: shuffleArray(q.options) };
    }
    case 'multi_select': {
      const q = question as MultiSelectQuestionData;
      return { ...q, options: shuffleArray(q.options) };
    }
    case 'link': {
      const q = question as LinkQuestionData;
      return { ...q, pairs: shuffleArray(q.pairs) };
    }
    case 'drag': {
      const q = question as DragQuestionData;
      return { ...q, items: shuffleArray(q.items) };
    }
    default:
      return question;
  }
}

// 🎀 游戏容器 - Candy Kingdom 网格渐变背景
const GameContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 16px;
  position: relative;
  overflow: hidden;

  /* 网格渐变背景 */
  background:
    linear-gradient(135deg,
      rgba(255, 182, 193, 0.95) 0%,
      rgba(255, 230, 109, 0.9) 25%,
      rgba(127, 204, 176, 0.85) 50%,
      rgba(137, 207, 240, 0.9) 75%,
      rgba(230, 230, 250, 0.85) 100%);
  background-size: 400% 400%;
  animation: ${gradientFlow} 15s ease infinite;

  /* 装饰星星 */
  &::before {
    content: '⭐';
    position: fixed;
    top: 15%;
    left: 10%;
    font-size: 24px;
    animation: ${floatStars} 3s ease-in-out infinite;
    opacity: 0.7;
    pointer-events: none;
    z-index: 0;
  }

  &::after {
    content: '✨';
    position: fixed;
    bottom: 20%;
    right: 8%;
    font-size: 28px;
    animation: ${floatStars} 4s ease-in-out infinite 1s;
    opacity: 0.6;
    pointer-events: none;
    z-index: 0;
  }
`;

// ☁️ 漂浮云朵装饰
const FloatingCloud = styled.div<{ $position: string }>`
  position: fixed;
  ${(props) => props.$position};
  font-size: 32px;
  opacity: 0.4;
  animation: ${cloudDrift} 6s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
`;

// 📌 固定头部区域
const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

// 🎮 题目卡片区域包装
const QuestionAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  flex: 1;
`;

// 🃏 题目卡片 - 大圆角 + 柔和阴影，自适应宽度
const QuestionCard = styled(motion.div)`
  width: 100%;
  min-width: 320px;
  max-width: min(90vw, 800px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px 32px;
  background: ${CandyColors.cream};
  border-radius: 32px;
  box-shadow:
    0 8px 0 rgba(255, 182, 193, 0.25),
    0 20px 40px rgba(255, 182, 193, 0.2),
    inset 0 -6px 20px rgba(255, 230, 109, 0.1);
  border: 4px solid rgba(255, 182, 193, 0.4);
  position: relative;

  /* 卡片顶部装饰 */
  &::before {
    content: '🌟';
    position: absolute;
    top: -15px;
    left: 20px;
    font-size: 18px;
    animation: ${floatStars} 2s ease-in-out infinite;
  }

  &::after {
    content: '🌈';
    position: absolute;
    top: -12px;
    right: 24px;
    font-size: 16px;
    opacity: 0.8;
  }
`;

// 🚪 退出按钮 - 小可爱按钮
const QuitButton = styled(motion.button)`
  margin-top: 16px;
  padding: 10px 24px;
  background: ${CandyColors.cream};
  border: 3px solid ${CandyColors.lavender};
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  color: #7A7A7A;
  cursor: pointer;
  box-shadow:
    0 4px 0 rgba(230, 230, 250, 0.3),
    0 8px 16px rgba(230, 230, 250, 0.2);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 182, 193, 0.3);
    border-color: ${CandyColors.coral};
    transform: translateY(-3px);
    box-shadow:
      0 6px 0 rgba(255, 127, 127, 0.3),
      0 12px 24px rgba(255, 127, 127, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow:
      0 2px 0 rgba(255, 127, 127, 0.3),
      0 4px 8px rgba(255, 127, 127, 0.2);
  }
`;

interface AnswerState {
  selectedAnswer: string | string[] | null;
  placements: Record<string, string[]>;
  marks: Array<{ x: number; y: number; radius: number }>;
}

const QuizGame: React.FC = () => {
  const { levelId } = useParams<{ levelId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { playBGM, stopBGM } = useSound();

  const difficultyParam = searchParams.get('difficulty') as DifficultyLevel | null;
  const difficulty = difficultyParam || DifficultyLevel.EASY;
  const questionParam = searchParams.get('question');

  useEffect(() => {
    playBGM('battle');
    return () => { stopBGM(); };
  }, [playBGM, stopBGM]);

  const level = getLevelById(levelId || '1-1') || getHiddenLevelById(levelId || '');
  const difficultyConfig = DifficultyConfigs[difficulty];
  // 根据关卡ID选择对应的故事配置
  const baseStoryConfig = LevelStoryConfigs[levelId || '1-1']?.[difficulty] || QuestionStoryConfigs[difficulty];

  const questions = useMemo(() => {
    // 根据关卡ID选择对应的分难度题目数据
    // 第一单元：认识平面图形
    if (levelId === '1-1' && level1_1QuestionsByDifficulty[difficulty]) return level1_1QuestionsByDifficulty[difficulty];
    if (levelId === '1-2' && level1_2QuestionsByDifficulty[difficulty]) return level1_2QuestionsByDifficulty[difficulty];
    if (levelId === '1-3' && level1_3QuestionsByDifficulty[difficulty]) return level1_3QuestionsByDifficulty[difficulty];
    // 第二单元：20以内退位减法
    if (levelId === '2-1' && level2_1QuestionsByDifficulty[difficulty]) return level2_1QuestionsByDifficulty[difficulty];
    if (levelId === '2-2' && level2_2QuestionsByDifficulty[difficulty]) return level2_2QuestionsByDifficulty[difficulty];
    if (levelId === '2-3' && level2_3QuestionsByDifficulty[difficulty]) return level2_3QuestionsByDifficulty[difficulty];
    if (levelId === '2-4' && level2_4QuestionsByDifficulty[difficulty]) return level2_4QuestionsByDifficulty[difficulty];
    // 第三单元：100以内数的认识
    if (levelId === '3-1' && level3_1QuestionsByDifficulty[difficulty]) return level3_1QuestionsByDifficulty[difficulty];
    if (levelId === '3-2' && level3_2QuestionsByDifficulty[difficulty]) return level3_2QuestionsByDifficulty[difficulty];
    if (levelId === '3-3' && level3_3QuestionsByDifficulty[difficulty]) return level3_3QuestionsByDifficulty[difficulty];
    if (levelId === '3-4' && level34QuestionsByDifficulty[difficulty]) return level34QuestionsByDifficulty[difficulty];
    // 第四单元：100以内口算加减法
    if (levelId === '4-1' && level41QuestionsByDifficulty[difficulty]) return level41QuestionsByDifficulty[difficulty];
    if (levelId === '4-2' && level42QuestionsByDifficulty[difficulty]) return level42QuestionsByDifficulty[difficulty];
    if (levelId === '4-3' && level43QuestionsByDifficulty[difficulty]) return level43QuestionsByDifficulty[difficulty];
    // 第五单元：100以内笔算加减法
    if (levelId === '5-1' && level51QuestionsByDifficulty[difficulty]) return level51QuestionsByDifficulty[difficulty];
    if (levelId === '5-2' && level52QuestionsByDifficulty[difficulty]) return level52QuestionsByDifficulty[difficulty];
    // 第六单元：数量间的加减关系
    if (levelId === '6' && level6QuestionsByDifficulty[difficulty]) return level6QuestionsByDifficulty[difficulty];
    // 第七单元：欢乐购物街
    if (levelId === '7-1' && level71QuestionsByDifficulty[difficulty]) return level71QuestionsByDifficulty[difficulty];
    if (levelId === '7-2' && level72QuestionsByDifficulty[difficulty]) return level72QuestionsByDifficulty[difficulty];
    // 第八单元：找规律
    if (levelId === '8' && level8QuestionsByDifficulty[difficulty]) return level8QuestionsByDifficulty[difficulty];
    // 第九单元：期末综合
    if (levelId === '9' && level9QuestionsByDifficulty[difficulty]) return level9QuestionsByDifficulty[difficulty];
    // 隐藏关卡
    if ((levelId === 'h1' || levelId === 'H1') && levelH1QuestionsByDifficulty[difficulty]) return levelH1QuestionsByDifficulty[difficulty];
    if ((levelId === 'h2' || levelId === 'H2') && levelH2QuestionsByDifficulty[difficulty]) return levelH2QuestionsByDifficulty[difficulty];
    return level?.questions || [];
  }, [levelId, level, difficulty]);

  // 根据关卡ID获取主角角色（4-2及之后关卡使用炫蓝闪电S，4-1是升级关卡仍用普通版）
  const getHeroCharacterId = (lvlId: string | undefined): string => {
    // 4-2及之后的关卡使用炫蓝闪电S
    const levelsRequiringS = ['4-2', '4-3', '5-1', '5-2', '6', '7-1', '7-2', '8', '9', 'H1', 'H2'];
    if (lvlId && levelsRequiringS.includes(lvlId)) {
      return 'xuanlan-shandian-s';
    }
    return 'xuanlan-shandian';
  };

  // 判断是否是升级关卡（4-1是炫蓝闪电升级为炫蓝闪电S的关卡）
  const isUpgradeLevel = (lvlId: string | undefined): boolean => {
    return lvlId === '4-1';
  };

  const heroCharacterId = getHeroCharacterId(levelId);

  // 主角的武器图片
  const heroWeaponImage = getWeaponImage(heroCharacterId, difficulty);
  const heroWeaponName = getWeaponName(heroCharacterId, difficulty);

  // 守护者的武器图片（后续关卡使用）
  const guardianWeaponImage = getWeaponImageByLevel(levelId || '', difficulty);
  const guardianWeaponName = getWeaponNameByLevel(levelId || '', difficulty);

  // 第一关（1-1）使用炫蓝闪电的武器，后续关卡使用守护者的武器
  const isFirstLevel = levelId === '1-1';
  const showcaseWeaponImage = isFirstLevel ? heroWeaponImage : guardianWeaponImage;
  const showcaseWeaponName = isFirstLevel ? heroWeaponName : guardianWeaponName;

  // 根据关卡ID和难度获取武器零件配置
  const dynamicWeaponParts = getWeaponPartsByLevel(levelId || '', difficulty);

  // 合并故事配置，使用对应的武器图片和零件配置
  const storyConfig = baseStoryConfig ? {
    ...baseStoryConfig,
    weapon: {
      ...baseStoryConfig.weapon,
      name: showcaseWeaponName,
      completeImage: showcaseWeaponImage,
      parts: dynamicWeaponParts,
    },
  } : undefined;

  // 计算 question URL 参数对应的初始索引（question=7 对应 index=6）
  const initialQuestionIndex = useMemo(() => {
    if (!questionParam) return 0;
    const questionNum = parseInt(questionParam, 10);
    if (isNaN(questionNum) || questionNum < 1) return 0;
    const index = questionNum - 1;
    // 边界检查：确保 index 不超出范围
    if (index >= questions.length) return 0;
    return index;
  }, [questionParam, questions.length]);

  // 新手模式直接进入答题，挑战模式和高手模式先展示守护者升级动画
  const initialPhase = difficulty === 'easy' ? 'quiz' : 'guardianUpgrade';
  const [gamePhase, setGamePhase] = useState<'quiz' | 'guardianUpgrade' | 'weaponShowcase' | 'battleScene' | 'complete'>(initialPhase);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(initialQuestionIndex);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [starsEarned, setStarsEarned] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answerState, setAnswerState] = useState<AnswerState>({
    selectedAnswer: null,
    placements: {},
    marks: [],
  });
  const [collectedParts, setCollectedParts] = useState<string[]>([]);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  const shuffledQuestion = useMemo(() => {
    if (!currentQuestion) return null;
    return shuffleQuestion(currentQuestion);
  }, [currentQuestion]);

  // 根据难度计算最大星星数
  const maxStars = Math.floor(totalQuestions * GameConfig.starsPerQuestion * difficultyConfig.starMultiplier);
  // 根据难度计算胜利所需星星
  const victoryStars = Math.floor(maxStars * difficultyConfig.starRequirement);
  const isVictory = starsEarned >= victoryStars;

  // 武器是否完成（收集了所有零件）
  const weaponComplete = storyConfig?.weapon?.parts
    ? collectedParts.length === storyConfig.weapon.parts.length
    : false;

  const handleAnswer = useCallback(
    (answer: any, bonusStars: number = 0) => {
      if (!currentQuestion) return;
      setIsAnswered(true);

      let isCorrect = false;
      let earnedStars = Math.floor((GameConfig.starsPerQuestion + bonusStars) * difficultyConfig.starMultiplier);

      switch (currentQuestion.type) {
        case 'choice':
          isCorrect = answer === (currentQuestion as { correctAnswer: string }).correctAnswer;
          setAnswerState((prev) => ({ ...prev, selectedAnswer: answer as string }));
          break;
        case 'multi_select': {
          const multiSelectQ = currentQuestion as { correctAnswers: string[] };
          const answerArray = answer as string[];
          isCorrect = Array.isArray(answerArray) &&
            answerArray.length === multiSelectQ.correctAnswers.length &&
            answerArray.every((id) => multiSelectQ.correctAnswers.includes(id));
          setAnswerState((prev) => ({ ...prev, selectedAnswer: answerArray }));
          break;
        }
        case 'drag': {
          const placements = answer as Record<string, string[]>;
          // 检查是否是数位摆数题的正确答案
          if (placements.__digitPlacementCorrect) {
            isCorrect = true;
            setAnswerState((prev) => ({ ...prev, placements: {} }));
            break;
          }

          const dragQ = currentQuestion as { items: Array<{ id: string; group?: string }>; targets: Array<{ id: string; accepts: string[]; group?: string }> };
          isCorrect = dragQ.items.every((item) => {
            const targetId = Object.keys(placements).find((tid) => placements[tid].includes(item.id));
            if (!targetId) return false;
            const target = dragQ.targets.find((t) => t.id === targetId);
            if (!target) return false;

            // 如果 item 和 target 都有 group 字段，按 group 匹配
            if (item.group && target.group) {
              return item.group === target.group;
            }
            // 否则按 id 精确匹配
            return target.accepts.includes(item.id);
          });
          setAnswerState((prev) => ({ ...prev, placements }));
          break;
        }
        case 'circle':
          setAnswerState((prev) => ({ ...prev, marks: answer as Array<{ x: number; y: number; radius: number }> }));
          return;
        case 'fill_blank': {
          const fillBlankQ = currentQuestion as { answer: string | string[]; question: string };
          const userAnswerStr = answer as string;
          const correctAnswers = Array.isArray(fillBlankQ.answer) ? fillBlankQ.answer : [fillBlankQ.answer];
          const userAnswers = userAnswerStr.split(',').map(a => a.trim().toLowerCase());

          // 检测题目中有多少个空白
          const blankCount = (fillBlankQ.question.match(/\{\{___\}\}/g) || []).length;

          if (blankCount === 1) {
            // 单空白：correctAnswers 表示"答案可以是其中任意一个"
            isCorrect = correctAnswers.some(ans => ans.trim().toLowerCase() === userAnswers[0]);
          } else {
            // 多空白：每个空白对应一个答案，需要全部匹配
            // 对于多空白，correctAnswers 中每个元素可能是逗号分隔的多个正确值
            isCorrect = userAnswers.length === blankCount && userAnswers.every((userAns, i) => {
              // 每个位置的正确答案可能是数组形式（如 ['a,b', 'c,d']）或字符串形式
              const correctForPosition = correctAnswers[i] || correctAnswers[0];
              const validAnswersForPosition = correctForPosition.split(',').map(a => a.trim().toLowerCase());
              return validAnswersForPosition.includes(userAns);
            });
          }
          setAnswerState((prev) => ({ ...prev, selectedAnswer: userAnswerStr }));
          break;
        }
        case 'link': {
          const linkQ = currentQuestion as LinkQuestionData;
          const userConnections = answer as Array<{ leftId: string; rightId: string }>;
          const pairs = linkQ.pairs;
          
          // 检查是否所有左侧都连接了
          if (userConnections.length !== pairs.length) {
            isCorrect = false;
            break;
          }
          
          // 检查每个连接是否正确
          isCorrect = userConnections.every((conn) => {
            const leftPair = pairs.find((p) => p.id === conn.leftId);
            const rightPair = pairs.find((p) => p.id === conn.rightId);
            if (!leftPair || !rightPair) return false;
            
            // 如果有 group 字段，按 group 匹配；否则按 id 匹配
            if (leftPair.group && rightPair.group) {
              return leftPair.group === rightPair.group;
            }
            return conn.leftId === conn.rightId;
          });
          break;
        }
        case 'maze':
        case 'shape_match':
        case 'tangram':
        case 'combo':
        case 'shape_compose':
          isCorrect = true;
          earnedStars = bonusStars;
          break;
        case 'timed':
          isCorrect = answer?.isCorrect || false;
          earnedStars = GameConfig.starsPerQuestion + (answer?.timeRemaining || 0);
          break;
      }

      const userAnswer: UserAnswer = {
        questionId: `q${currentQuestionIndex + 1}`,
        isCorrect,
        timeSpent: 0,
        answer,
      };
      setAnswers((prev) => [...prev, userAnswer]);

      if (isCorrect) {
        setStarsEarned((prev) => prev + earnedStars);
        const currentPart = storyConfig?.weapon?.parts?.[currentQuestionIndex];
        if (currentPart) {
          setCollectedParts((prev) => [...prev, currentPart.id]);
        }
      }

      setTimeout(() => setShowFeedback(true), 500);
    },
    [currentQuestion, currentQuestionIndex, difficultyConfig, storyConfig]
  );

  const handleCircleAnswer = useCallback(
    (marks: Array<{ x: number; y: number; radius: number }>) => {
      if (!currentQuestion) return;
      setIsAnswered(true);
      setAnswerState((prev) => ({ ...prev, marks }));
      const isCorrect = marks.length > 0;
      const earnedStars = Math.floor(GameConfig.starsPerQuestion * difficultyConfig.starMultiplier);
      const userAnswer: UserAnswer = {
        questionId: `q${currentQuestionIndex + 1}`,
        isCorrect,
        timeSpent: 0,
        answer: marks,
      };
      setAnswers((prev) => [...prev, userAnswer]);

      if (isCorrect) {
        setStarsEarned((prev) => prev + earnedStars);
        const currentPart = storyConfig?.weapon?.parts?.[currentQuestionIndex];
        if (currentPart) {
          setCollectedParts((prev) => [...prev, currentPart.id]);
        }
      }

      setTimeout(() => setShowFeedback(true), 500);
    },
    [currentQuestion, currentQuestionIndex, difficultyConfig, storyConfig]
  );

  const handleNext = useCallback(() => {
    setShowFeedback(false);
    setIsAnswered(false);
    setAnswerState({ selectedAnswer: null, placements: {}, marks: [] });

    if (isLastQuestion) {
      if (isVictory) {
        setGamePhase('weaponShowcase');  // 全答对进入武器展示
      } else {
        finalizeLevel();
      }
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  }, [isLastQuestion, isVictory, starsEarned, level, levelId]);

  const finalizeLevel = useCallback(() => {
    if (level) {
      storageService.updateLevelProgress(level.id, { status: 'completed', stars: starsEarned }, difficulty);
      storageService.unlockNextLevel(level.id);

      // 根据难度获取形态配置并收集炫卡
      const variant = getVariantByDifficulty(level.guardian.id, difficulty);
      
      // 如果没有形态配置，根据难度使用默认 variant
      let cardVariant: 'base' | 'flame' | 'battle' | 'ultimate';
      let cardRarity: RarityLevel;
      
      if (variant) {
        // 有形态配置，使用配置值
        cardVariant = variant.variant;
        cardRarity = variant.rarity;
      } else {
        // 没有形态配置，根据难度使用默认值
        switch (difficulty) {
          case DifficultyLevel.MEDIUM:
            cardVariant = 'flame';
            cardRarity = 'gold';
            break;
          case DifficultyLevel.HARD:
            cardVariant = 'ultimate';
            cardRarity = 'rainbow';
            break;
          default:
            cardVariant = 'base';
            cardRarity = 'rare';
        }
      }
      
      if (!storageService.hasCollectedCard(level.guardian.id, cardVariant)) {
        storageService.addCollectedCard(
          level.guardian.id,
          level.id,
          starsEarned,
          cardVariant,
          cardRarity,
          difficulty
        );
      }
    }
    navigate(`/level/${levelId}/complete?stars=${starsEarned}&difficulty=${difficulty}&maxStars=${maxStars}`);
  }, [level, levelId, navigate, starsEarned, difficulty, maxStars]);

  const handleQuit = () => {
    navigate('/levels');
  };

  const renderQuestion = () => {
    if (!currentQuestion || !shuffledQuestion) return null;

    switch (shuffledQuestion.type) {
      case 'choice':
        return (
          <ChoiceQuestion
            question={shuffledQuestion as Parameters<typeof ChoiceQuestion>[0]['question']}
            selectedAnswer={answerState.selectedAnswer as string}
            isAnswered={isAnswered}
            onAnswer={(id) => handleAnswer(id)}
          />
        );
      case 'drag':
        return (
          <DragQuestion
            question={shuffledQuestion as Parameters<typeof DragQuestion>[0]['question']}
            placements={answerState.placements}
            isAnswered={isAnswered}
            onAnswer={(p) => handleAnswer(p)}
          />
        );
      case 'circle':
        return (
          <CircleQuestion
            question={shuffledQuestion as Parameters<typeof CircleQuestion>[0]['question']}
            marks={answerState.marks}
            isAnswered={isAnswered}
            onAnswer={(m) => handleCircleAnswer(m)}
          />
        );
      case 'multi_select':
        return (
          <MultiSelectQuestion
            question={shuffledQuestion as Parameters<typeof MultiSelectQuestion>[0]['question']}
            selectedAnswers={answerState.selectedAnswer as string[]}
            isAnswered={isAnswered}
            onAnswer={(ids) => handleAnswer(ids)}
          />
        );
      case 'fill_blank':
        return (
          <FillBlankQuestion
            question={shuffledQuestion as Parameters<typeof FillBlankQuestion>[0]['question']}
            selectedAnswer={answerState.selectedAnswer as string}
            isAnswered={isAnswered}
            onAnswer={(ans) => handleAnswer(ans)}
          />
        );
      case 'link':
        return (
          <LinkQuestion
            question={shuffledQuestion as any}
            onAnswer={(pairs) => handleAnswer(pairs)}
          />
        );
      case 'maze':
        return (
          <MazeGame
            question={shuffledQuestion as any}
            onComplete={(stars) => handleAnswer(null, stars)}
          />
        );
      case 'shape_match':
        return (
          <ShapeMatchingGame
            config={shuffledQuestion as any}
            onComplete={(stars) => handleAnswer(null, stars)}
          />
        );
      case 'tangram':
        return (
          <TangramGame
            question={shuffledQuestion as any}
            onComplete={(stars) => handleAnswer(null, stars)}
          />
        );
      case 'combo':
        return (
          <ComboMode
            config={shuffledQuestion as any}
            onComplete={(stars) => handleAnswer(null, stars)}
          />
        );
      case 'timed':
        return (
          <TimedQuestion
            question={shuffledQuestion as any}
            onAnswer={(_answer, timeRemaining) => {
              handleAnswer({ isCorrect: true, timeRemaining }, timeRemaining);
            }}
          />
        );
      case 'shape_compose':
        return (
          <ShapeComposeQuestion
            question={shuffledQuestion as any}
            isAnswered={isAnswered}
            onAnswer={(placedShapes) => handleAnswer(placedShapes, GameConfig.starsPerQuestion)}
          />
        );
      default:
        return <div>未知题目类型：{(shuffledQuestion as any).type}</div>;
    }
  };

  const getExplanation = () => {
    if (!currentQuestion) return '';
    return (currentQuestion as { explanation?: string }).explanation || '';
  };

  if (!level) {
    return (
      <GameContainer>
        <QuestionCard>关卡不存在</QuestionCard>
      </GameContainer>
    );
  }

  return (
    <GameContainer>
      {/* 漂浮云朵装饰 */}
      <FloatingCloud $position="top: 25%; left: -20px;">☁️</FloatingCloud>
      <FloatingCloud $position="top: 60%; right: -25px; animation-delay: 2s;">☁️</FloatingCloud>

      {gamePhase === 'quiz' && (
        <>
          <Header>
            <QuizProgress
              currentQuestion={currentQuestionIndex}
              totalQuestions={totalQuestions}
              starsEarned={starsEarned}
              levelName={level.name}
            />
            {storyConfig?.weapon?.parts && (
              <WeaponProgress
                parts={storyConfig.weapon.parts}
                currentIndex={currentQuestionIndex}
                collectedParts={collectedParts}
                difficulty={difficulty}
                weaponImage={storyConfig.weapon.completeImage}
              />
            )}
          </Header>

          {storyConfig?.narratives?.[currentQuestionIndex] && (
            <QuestionStory
              key={currentQuestionIndex}
              narrative={storyConfig.narratives[currentQuestionIndex].text}
              partName={storyConfig.weapon.parts?.[currentQuestionIndex]?.name}
            />
          )}

          <QuestionAreaWrapper>
            <QuestionCard
              key={currentQuestionIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
            >
              {storyConfig?.narratives?.[currentQuestionIndex]?.sceneBackground && (
                <SceneBackground scene={storyConfig.narratives[currentQuestionIndex].sceneBackground}>
                  {renderQuestion()}
                </SceneBackground>
              )}
              {!storyConfig?.narratives?.[currentQuestionIndex]?.sceneBackground && renderQuestion()}
            </QuestionCard>

            <QuitButton
              onClick={handleQuit}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              🚪 退出
            </QuitButton>
          </QuestionAreaWrapper>

          <AnimatePresence>
            {showFeedback && (
              <AnswerFeedback
                isCorrect={answers[answers.length - 1]?.isCorrect || false}
                explanation={getExplanation()}
                onNext={handleNext}
                isLastQuestion={isLastQuestion}
                autoNext={answers[answers.length - 1]?.isCorrect}
              />
            )}
          </AnimatePresence>
        </>
      )}

      {/* 守护者升级形态动画 */}
      {gamePhase === 'guardianUpgrade' && level && (
        <GuardianUpgradeAnimation
          guardian={level.guardian}
          difficulty={difficulty}
          onComplete={() => setGamePhase('quiz')}
        />
      )}

      {/* 武器展示界面 */}
      {gamePhase === 'weaponShowcase' && storyConfig?.weapon && (
        <WeaponShowcase
          weaponImage={storyConfig.weapon.completeImage || '/assets/weapons/easy-weapon.png'}
          weaponName={storyConfig.weapon.name || '超级武器'}
          difficulty={difficulty}
          onComplete={() => setGamePhase('battleScene')}
        />
      )}

      {/* 战斗画面 */}
      {gamePhase === 'battleScene' && level && (
        <BattleScene
          hero={characters.find(c => c.id === heroCharacterId) || characters[0]}
          enemy={level.guardian}
          difficulty={difficulty}
          weaponComplete={weaponComplete}
          weaponImage={heroWeaponImage}
          enemyWeaponImage={guardianWeaponImage}
          isUpgrade={isUpgradeLevel(levelId)}
          isFusion={levelId === 'H1' || levelId === 'h1'}
          onComplete={() => {
            setGamePhase('complete');
            finalizeLevel();
          }}
        />
      )}
    </GameContainer>
  );
};

export default QuizGame;