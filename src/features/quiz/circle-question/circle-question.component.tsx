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

    const maxWidth = 500;
    const maxHeight = 400;

    const img = new Image();
    img.src = question.image || '';
    img.onload = () => {
      // 设置 canvas 尺寸
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
    img.onerror = () => {
      // 图片加载失败，根据 answerAreas 动态绘制图形
      canvas.width = maxWidth;
      canvas.height = 360; // 增加高度以容纳3行图形
      setScale(1);

      // 绘制背景
      ctx.fillStyle = '#F8FAFC';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 颜色配置
      const colors = ['#FF6B6B', '#FF6B6B', '#4ECDC4', '#95E1D3', '#FFA07A', '#F7DC6F', '#FFA07A', '#4ECDC4', '#95E1D3'];
      const strokeColor = '#333';

      // 辅助函数：绘制等腰直角三角形（可拼成正方形）
      const drawTriangle = (x: number, y: number, size: number, color: string, rotation: number = 0) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.fillStyle = color;
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        // 等腰直角三角形：直角在左下角，斜边在右上
        // 三个顶点：(0,0) 直角顶点, (size,0), (0,-size)
        ctx.moveTo(0, 0);        // 直角顶点（中心偏右下）
        ctx.lineTo(size, 0);     // 水平向右
        ctx.lineTo(0, -size);    // 垂直向上
        ctx.closePath();         // 斜边连接
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      };

      // 辅助函数：绘制圆形
      const drawCircle = (x: number, y: number, radius: number, color: string) => {
        ctx.fillStyle = color;
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      };

      // 辅助函数：绘制正方形
      const drawSquare = (x: number, y: number, size: number, color: string) => {
        ctx.fillStyle = color;
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 2;
        ctx.fillRect(x - size / 2, y - size / 2, size, size);
        ctx.strokeRect(x - size / 2, y - size / 2, size, size);
      };

      // 辅助函数：绘制长方形
      const drawRectangle = (x: number, y: number, width: number, height: number, color: string) => {
        ctx.fillStyle = color;
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 2;
        ctx.fillRect(x - width / 2, y - height / 2, width, height);
        ctx.strokeRect(x - width / 2, y - height / 2, width, height);
      };

      // 根据 answerAreas 绘制图形或算式
      if (question.answerAreas && question.answerAreas.length > 0) {
        question.answerAreas.forEach((area, index) => {
          const color = colors[index % colors.length];
          const label = area.label || '';

          // 检查是否是算式（包含 - 或 + 运算符）
          if (label.match(/\d+\s*[-+]\s*\d+/)) {
            // 绘制算式卡片背景
            ctx.fillStyle = '#E0F2FE'; // 浅蓝色背景
            ctx.strokeStyle = '#0EA5E9'; // 蓝色边框
            ctx.lineWidth = 2;
            const cardWidth = 100;
            const cardHeight = 60;
            ctx.fillRect(area.x - cardWidth/2, area.y - cardHeight/2, cardWidth, cardHeight);
            ctx.strokeRect(area.x - cardWidth/2, area.y - cardHeight/2, cardWidth, cardHeight);

            // 绘制算式文本
            ctx.fillStyle = '#0369A1'; // 深蓝色文字
            ctx.font = 'bold 20px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(label, area.x, area.y);
          } else if (label.includes('三角形')) {
            // 两个相同的直角三角形可以拼成正方形
            const rotation = index === 0 ? 0 : index === 1 ? 180 : index === 4 ? 90 : 270;
            drawTriangle(area.x, area.y, 50, color, rotation);

            // 绘制标签
            ctx.fillStyle = '#333';
            ctx.font = 'bold 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'alphabetic';
            ctx.fillText(label, area.x, area.y + 35);
          } else if (label.includes('圆形')) {
            drawCircle(area.x, area.y, 25, color);

            // 绘制标签
            ctx.fillStyle = '#333';
            ctx.font = 'bold 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'alphabetic';
            ctx.fillText(label, area.x, area.y + 35);
          } else if (label.includes('正方形')) {
            drawSquare(area.x, area.y, 45, color);

            // 绘制标签
            ctx.fillStyle = '#333';
            ctx.font = 'bold 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'alphabetic';
            ctx.fillText(label, area.x, area.y + 35);
          } else if (label.includes('长方形')) {
            drawRectangle(area.x, area.y, 60, 40, color);

            // 绘制标签
            ctx.fillStyle = '#333';
            ctx.font = 'bold 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'alphabetic';
            ctx.fillText(label, area.x, area.y + 35);
          } else if (label.includes('小鱼') || label.includes('鱼')) {
            // 绘制七巧板小鱼图案（两个三角形组成）
            ctx.save();
            ctx.translate(area.x, area.y);
            // 身体（大三角形）
            ctx.fillStyle = '#FF6B6B';
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(-25, 0);
            ctx.lineTo(25, -20);
            ctx.lineTo(25, 20);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            // 尾巴（小三角形）
            ctx.fillStyle = '#FFA07A';
            ctx.beginPath();
            ctx.moveTo(25, 0);
            ctx.lineTo(45, -15);
            ctx.lineTo(45, 15);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            // 绘制标签
            ctx.fillStyle = '#333';
            ctx.font = 'bold 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'alphabetic';
            ctx.fillText(label, area.x, area.y + 45);
          } else if (label.includes('小船') || label.includes('船')) {
            // 绘制七巧板小船图案
            ctx.save();
            ctx.translate(area.x, area.y);
            // 船身（梯形）
            ctx.fillStyle = '#4ECDC4';
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(-30, 10);
            ctx.lineTo(30, 10);
            ctx.lineTo(20, -10);
            ctx.lineTo(-20, -10);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            // 帆（三角形）
            ctx.fillStyle = '#F7DC6F';
            ctx.beginPath();
            ctx.moveTo(0, -10);
            ctx.lineTo(0, -40);
            ctx.lineTo(20, -10);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            // 绘制标签
            ctx.fillStyle = '#333';
            ctx.font = 'bold 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'alphabetic';
            ctx.fillText(label, area.x, area.y + 50);
          } else if (label.includes('房子')) {
            // 绘制七巧板房子图案
            ctx.save();
            ctx.translate(area.x, area.y);
            // 房身（正方形）
            ctx.fillStyle = '#95E1D3';
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 2;
            ctx.fillRect(-20, -5, 40, 35);
            ctx.strokeRect(-20, -5, 40, 35);
            // 屋顶（三角形）
            ctx.fillStyle = '#FF6B6B';
            ctx.beginPath();
            ctx.moveTo(-25, -5);
            ctx.lineTo(0, -35);
            ctx.lineTo(25, -5);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            // 绘制标签
            ctx.fillStyle = '#333';
            ctx.font = 'bold 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'alphabetic';
            ctx.fillText(label, area.x, area.y + 50);
          } else if (label.includes('猫')) {
            // 绘制七巧板小猫图案
            ctx.save();
            ctx.translate(area.x, area.y);
            // 身体（大三角形）
            ctx.fillStyle = '#FFA07A';
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(-20, 20);
            ctx.lineTo(20, 20);
            ctx.lineTo(0, -15);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            // 头（小正方形）
            ctx.fillStyle = '#F7DC6F';
            ctx.fillRect(-10, -30, 20, 20);
            ctx.strokeRect(-10, -30, 20, 20);
            // 耳朵（小三角形）
            ctx.fillStyle = '#FF6B6B';
            ctx.beginPath();
            ctx.moveTo(-10, -30);
            ctx.lineTo(-15, -40);
            ctx.lineTo(-5, -30);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(10, -30);
            ctx.lineTo(15, -40);
            ctx.lineTo(5, -30);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            // 绘制标签
            ctx.fillStyle = '#333';
            ctx.font = 'bold 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'alphabetic';
            ctx.fillText(label, area.x, area.y + 50);
          } else {
            // 默认绘制一个带标签的圆圈
            ctx.fillStyle = '#E0E7FF';
            ctx.strokeStyle = '#6366F1';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(area.x, area.y, 30, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            // 绘制标签
            ctx.fillStyle = '#333';
            ctx.font = 'bold 14px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(label, area.x, area.y);
          }
        });
      } else {
        // 默认绘制两个三角形（向后兼容）
        drawTriangle(120, 160, 50, '#3B82F6', 0);
        drawTriangle(200, 160, 50, '#EF4444', 180);
        ctx.fillStyle = '#333';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('三角形1', 120, 195);
        ctx.fillText('三角形2', 200, 195);
      }

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
    // 如果有 correctAnswers 字段，只检查指定的答案区域
    const targetIds = question.correctAnswers || question.answerAreas.map(a => a.id);

    // 检查每个目标区域是否被圈中
    const matchedAreas = targetIds.map((targetId) => {
      const area = question.answerAreas.find(a => a.id === targetId);
      if (!area) return false;

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

    // 所有目标区域都被圈中才算正确
    return matchedAreas.every((matched) => matched);
  }, [marks, question.answerAreas, question.correctAnswers, question.tolerance, scale]);

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

    // 获取正确答案 ID 列表
    const correctIds = question.correctAnswers || question.answerAreas.map(a => a.id);

    // 显示应该圈的正确答案区域（虚线提示）
    correctIds.forEach((correctId) => {
      const area = question.answerAreas.find(a => a.id === correctId);
      if (!area) return;

      const scaledArea = {
        x: area.x * scale,
        y: area.y * scale,
        radius: area.radius * scale,
      };

      // 检查是否被用户圈中
      const isCircled = marks.some((mark) => {
        const distance = Math.sqrt(
          Math.pow(mark.x - scaledArea.x, 2) + Math.pow(mark.y - scaledArea.y, 2)
        );
        return distance < mark.radius + scaledArea.radius - question.tolerance;
      });

      // 只显示未被圈中的正确答案提示
      if (!isCircled) {
        elements.push(
          <CorrectCircleOverlay
            key={`correct-${correctId}`}
            $x={scaledArea.x}
            $y={scaledArea.y}
            $radius={scaledArea.radius}
          >
            {area.label}
          </CorrectCircleOverlay>
        );
      }
    });

    // 显示用户的圈
    marks.forEach((mark, index) => {
      // 检查圈中的是哪个区域
      const circledArea = question.answerAreas.find((area) => {
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

      // 判断是否正确：圈中的区域必须在正确答案列表中
      const isCorrect = circledArea ? correctIds.includes(circledArea.id) : false;

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