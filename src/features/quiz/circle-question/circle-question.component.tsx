import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeColors } from '@/config';
import { useSound } from '@/shared/hooks';
import type { CircleQuestionData, CircleMark } from '@/types';

interface CircleQuestionProps {
  question: CircleQuestionData;
  marks: CircleMark[];
  isAnswered: boolean;
  onAnswer: (marks: CircleMark[]) => void;
}

const QuestionContainer = styled.div`
  width: 100%;
`;

const QuestionText = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${ThemeColors.textPrimary};
  text-align: center;
  margin-bottom: 12px;
`;

const Instruction = styled.p`
  font-size: 16px;
  color: ${ThemeColors.textSecondary};
  text-align: center;
  margin-bottom: 24px;
`;

const CanvasContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const StyledCanvas = styled.canvas`
  width: 100%;
  display: block;
  cursor: crosshair;
`;

const CircleOverlay = styled.div<{ $x: number; $y: number; $radius: number; $isCorrect: boolean }>`
  position: absolute;
  left: ${(props) => props.$x}px;
  top: ${(props) => props.$y}px;
  width: ${(props) => props.$radius * 2}px;
  height: ${(props) => props.$radius * 2}px;
  border: 4px solid ${(props) => (props.$isCorrect ? ThemeColors.success : ThemeColors.error)};
  background: ${(props) =>
    props.$isCorrect ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

const CorrectCircleOverlay = styled.div<{ $x: number; $y: number; $radius: number }>`
  position: absolute;
  left: ${(props) => props.$x}px;
  top: ${(props) => props.$y}px;
  width: ${(props) => props.$radius * 2}px;
  height: ${(props) => props.$radius * 2}px;
  border: 3px dashed ${ThemeColors.success};
  background: rgba(16, 185, 129, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: ${ThemeColors.success};
`;

const ClearButton = styled(motion.button)`
  margin-top: 16px;
  padding: 8px 24px;
  background: rgba(255, 255, 255, 0.9);
  color: ${ThemeColors.textPrimary};
  border: 2px solid ${ThemeColors.primaryLight};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

const SubmitButton = styled(motion.button)`
  margin-top: 16px;
  padding: 12px 32px;
  background: linear-gradient(135deg, ${ThemeColors.primary} 0%, ${ThemeColors.primaryLight} 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;
`;

const CircleQuestion: React.FC<CircleQuestionProps> = ({
  question,
  marks: externalMarks,
  isAnswered,
  onAnswer,
}) => {
  const { playClick, playCorrect, playWrong } = useSound();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [marks, setMarks] = useState<CircleMark[]>(externalMarks || []);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [scale, setScale] = useState(1);

  // 加载图片到 canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = question.image;
    img.onload = () => {
      // 设置 canvas 尺寸
      const maxWidth = 500;
      const maxHeight = 400;
      let width = img.width;
      let height = img.height;

      // 缩放以适应最大尺寸
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }
      if (height > maxHeight) {
        width = (width * maxHeight) / height;
        height = maxHeight;
      }

      canvas.width = width;
      canvas.height = height;
      setScale(width / img.width);

      // 绘制图片
      ctx.drawImage(img, 0, 0, width, height);
      setImageLoaded(true);
    };
  }, [question.image]);

  // 处理点击
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isAnswered) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const radius = 30;

    // 添加新的圆圈
    const newMark: CircleMark = { x, y, radius };
    const newMarks = [...marks, newMark];
    setMarks(newMarks);
    playClick();
  };

  // 处理触摸
  const handleCanvasTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (isAnswered) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    const radius = 30;

    const newMark: CircleMark = { x, y, radius };
    const newMarks = [...marks, newMark];
    setMarks(newMarks);
    playClick();
  };

  // 清除所有圆圈
  const clearMarks = () => {
    setMarks([]);
  };

  // 检查答案
  const checkAnswers = useCallback(() => {
    // 检查每个答案区域是否被圈中
    const matchedAreas = question.answerAreas.map((area) => {
      const scaledArea = {
        x: area.x * scale,
        y: area.y * scale,
        radius: area.radius * scale,
      };

      return marks.some((mark) => {
        const distance = Math.sqrt(
          Math.pow(mark.x - scaledArea.x, 2) + Math.pow(mark.y - scaledArea.y, 2)
        );
        return distance < mark.radius + scaledArea.radius - question.tolerance;
      });
    });

    return matchedAreas.every((matched) => matched);
  }, [marks, question.answerAreas, question.tolerance, scale]);

  // 提交答案
  const handleSubmit = () => {
    if (marks.length === 0 || isAnswered) return;
    onAnswer(marks);

    if (checkAnswers()) {
      playCorrect();
    } else {
      playWrong();
    }
  };

  // 渲染圆圈
  const renderCircles = () => {
    if (!isAnswered) {
      return marks.map((mark, index) => (
        <CircleOverlay
          key={index}
          $x={mark.x}
          $y={mark.y}
          $radius={mark.radius}
          $isCorrect={false}
        />
      ));
    }

    // 已答题，显示正确答案和用户答案
    const elements: React.ReactNode[] = [];

    // 显示正确答案区域
    question.answerAreas.forEach((area, index) => {
      const scaledArea = {
        x: area.x * scale,
        y: area.y * scale,
        radius: area.radius * scale,
      };

      // 检查是否被用户圈中 - 用于后续扩展
      marks.some((mark) => {
        const distance = Math.sqrt(
          Math.pow(mark.x - scaledArea.x, 2) + Math.pow(mark.y - scaledArea.y, 2)
        );
        return distance < mark.radius + scaledArea.radius - question.tolerance;
      });

      elements.push(
        <CorrectCircleOverlay
          key={`correct-${index}`}
          $x={scaledArea.x}
          $y={scaledArea.y}
          $radius={scaledArea.radius}
        >
          {area.label}
        </CorrectCircleOverlay>
      );
    });

    // 显示用户的圈
    marks.forEach((mark, index) => {
      // 检查是否圈中了正确答案
      const isCorrect = question.answerAreas.some((area) => {
        const scaledArea = {
          x: area.x * scale,
          y: area.y * scale,
          radius: area.radius * scale,
        };
        const distance = Math.sqrt(
          Math.pow(mark.x - scaledArea.x, 2) + Math.pow(mark.y - scaledArea.y, 2)
        );
        return distance < mark.radius + scaledArea.radius - question.tolerance;
      });

      elements.push(
        <CircleOverlay
          key={`mark-${index}`}
          $x={mark.x}
          $y={mark.y}
          $radius={mark.radius}
          $isCorrect={isCorrect}
        />
      );
    });

    return elements;
  };

  return (
    <QuestionContainer>
      <QuestionText>{question.question}</QuestionText>
      <Instruction>{question.instruction}</Instruction>

      <CanvasContainer>
        <StyledCanvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          onTouchStart={handleCanvasTouch}
        />
        {imageLoaded && renderCircles()}
      </CanvasContainer>

      <ButtonsContainer>
        {!isAnswered && marks.length > 0 && (
          <ClearButton
            onClick={clearMarks}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            清除
          </ClearButton>
        )}
        {!isAnswered && marks.length > 0 && (
          <SubmitButton
            onClick={handleSubmit}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            确认答案
          </SubmitButton>
        )}
      </ButtonsContainer>
    </QuestionContainer>
  );
};

export default CircleQuestion;