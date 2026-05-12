/**
 * 七巧板拼图游戏组件 (TANGRAM)
 * 功能：7 块七巧板，拖拽和旋转操作，目标图案轮廓显示，容差检测
 * 新增：碰撞检测/防重叠、画布内旋转、悬停旋转按钮
 */

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import type { TangramQuestionData, TangramPiece } from '@/types'

interface TangramGameProps {
  question: TangramQuestionData
  onComplete: (stars: number) => void
}

// 画布尺寸配置
const CANVAS_SIZE = 300
const PIECE_SIZE = 60

// 游戏容器
const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 500px;
`

// 游戏区域
const GameArea = styled.div`
  display: flex;
  gap: 40px;
  padding: 20px;
  width: 100%;
  max-width: 900px;
`

// 拼图区域
const PuzzleArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

// 参考区域
const ReferenceArea = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
`

const ReferenceTitle = styled.h3`
  font-size: 16px;
  color: white;
  margin: 0;
  text-align: center;
`

const ReferenceSvg = styled.svg`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`

// 目标轮廓区域
const TargetArea = styled.div`
  width: ${CANVAS_SIZE}px;
  height: ${CANVAS_SIZE}px;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border: 3px dashed rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  margin-bottom: 20px;
  overflow: hidden;
`

// 七巧板块容器 - 扩大悬停区域包含旋转按钮
const TangramPieceWrapper = styled(motion.div)<{
  $rotation: number;
  $x: number;
  $y: number;
  $isHovered: boolean;
}>`
  position: absolute;
  cursor: grab;
  transform: translate(${({ $x }) => $x}px, ${({ $y }) => $y}px) rotate(${({ $rotation }) => $rotation}deg);
  transform-origin: center center;
  user-select: none;
  padding-right: 50px; /* 扩大悬停检测区域，包含旋转按钮位置 */

  &:active {
    cursor: grabbing;
  }
`

// 悬停旋转按钮容器 - 扩大悬停区域，包含按钮
const RotateButtonContainer = styled.div`
  position: absolute;
  right: -40px;
  top: 0;
  width: 45px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
`

// 悬停旋转按钮 - 改进点击体验
const HoverRotateButton = styled.button<{ $visible: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid #4ECDC4;
  cursor: pointer;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity 0.15s ease, transform 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  z-index: 100;

  &:hover {
    background: white;
    transform: scale(1.15);
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.9);
  }
`

// 单块七巧板显示
const PieceDisplay = styled.div<{ $color: string }>`
  width: ${PIECE_SIZE}px;
  height: ${PIECE_SIZE}px;
  position: relative;
`

// 状态栏
const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  margin-bottom: 16px;
`

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`

const StatLabel = styled.span`
  font-size: 12px;
  color: #666;
`

const StatValue = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`

// 提示信息
const Hint = styled.div`
  text-align: center;
  color: white;
  font-size: 16px;
  margin: 10px 0;
`

// 碰撞警告
const CollisionWarning = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 100, 100, 0.9);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  pointer-events: none;
  white-space: nowrap;
  z-index: 200;
`

// 七巧板块类型定义
type PieceType = 'triangle_large' | 'triangle_medium' | 'triangle_small' | 'square' | 'parallelogram'

// 七巧板块颜色
const pieceColors: Record<PieceType, string> = {
  triangle_large: '#FF6B6B',
  triangle_medium: '#4ECDC4',
  triangle_small: '#45B7D1',
  square: '#96CEB4',
  parallelogram: '#FFEAA7',
}

// 获取图形的顶点（相对于中心点，未旋转）
function getPieceVertices(type: PieceType, size: number): { x: number; y: number }[] {
  const half = size / 2

  switch (type) {
    case 'triangle_large':
      return [
        { x: -half, y: -half },
        { x: half, y: -half },
        { x: -half, y: half },
      ]
    case 'triangle_medium':
      return [
        { x: -half, y: -half },
        { x: half, y: -half },
        { x: half, y: half },
      ]
    case 'triangle_small':
      return [
        { x: -half * 0.8, y: -half * 0.8 },
        { x: half * 0.8, y: -half * 0.8 },
        { x: -half * 0.8, y: half * 0.8 },
      ]
    case 'square':
      return [
        { x: -half * 0.8, y: -half * 0.8 },
        { x: half * 0.8, y: -half * 0.8 },
        { x: half * 0.8, y: half * 0.8 },
        { x: -half * 0.8, y: half * 0.8 },
      ]
    case 'parallelogram':
      return [
        { x: -half * 0.6, y: -half * 0.8 },
        { x: half * 0.6, y: -half * 0.8 },
        { x: half, y: half * 0.8 },
        { x: -half, y: half * 0.8 },
      ]
    default:
      return []
  }
}

// 旋转顶点
function rotateVertices(
  vertices: { x: number; y: number }[],
  angle: number
): { x: number; y: number }[] {
  const rad = (angle * Math.PI) / 180
  const cos = Math.cos(rad)
  const sin = Math.sin(rad)

  return vertices.map((v) => ({
    x: v.x * cos - v.y * sin,
    y: v.x * sin + v.y * cos,
  }))
}

// 获取图形的世界坐标顶点（用于碰撞检测）
function getWorldVertices(
  type: PieceType,
  x: number,
  y: number,
  rotation: number,
  size: number
): { x: number; y: number }[] {
  const localVertices = getPieceVertices(type, size)
  const rotatedVertices = rotateVertices(localVertices, rotation)

  return rotatedVertices.map((v) => ({
    x: x + v.x + size / 2, // 加上 size/2 是因为图形中心在容器中心
    y: y + v.y + size / 2,
  }))
}

// 使用分离轴定理检测两个多边形是否碰撞
function polygonsCollide(
  vertices1: { x: number; y: number }[],
  vertices2: { x: number; y: number }[]
): boolean {
  const polygons = [vertices1, vertices2]

  for (let i = 0; i < polygons.length; i++) {
    const polygon = polygons[i]

    for (let j = 0; j < polygon.length; j++) {
      const k = (j + 1) % polygon.length
      const edge = {
        x: polygon[k].x - polygon[j].x,
        y: polygon[k].y - polygon[j].y,
      }

      // 法线轴
      const axis = { x: -edge.y, y: edge.x }

      // 投影两个多边形到法线轴
      let min1 = Infinity,
        max1 = -Infinity
      let min2 = Infinity,
        max2 = -Infinity

      for (const vertex of vertices1) {
        const projection = vertex.x * axis.x + vertex.y * axis.y
        min1 = Math.min(min1, projection)
        max1 = Math.max(max1, projection)
      }

      for (const vertex of vertices2) {
        const projection = vertex.x * axis.x + vertex.y * axis.y
        min2 = Math.min(min2, projection)
        max2 = Math.max(max2, projection)
      }

      // 检查投影是否重叠
      if (max1 < min2 + 5 || max2 < min1 + 5) {
        // 5 是容差，允许边缘接触
        return false
      }
    }
  }

  return true
}

// 计算图形的边界框
function getBoundingBox(
  type: PieceType,
  x: number,
  y: number,
  rotation: number,
  size: number
): { minX: number; minY: number; maxX: number; maxY: number } {
  const vertices = getWorldVertices(type, x, y, rotation, size)

  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity

  for (const v of vertices) {
    minX = Math.min(minX, v.x)
    minY = Math.min(minY, v.y)
    maxX = Math.max(maxX, v.x)
    maxY = Math.max(maxY, v.y)
  }

  return { minX, minY, maxX, maxY }
}

// 检查图形是否在画布内
function isWithinCanvas(
  type: PieceType,
  x: number,
  y: number,
  rotation: number,
  size: number,
  canvasSize: number
): boolean {
  const bbox = getBoundingBox(type, x, y, rotation, size)
  return bbox.minX >= 0 && bbox.minY >= 0 && bbox.maxX <= canvasSize && bbox.maxY <= canvasSize
}

// 找到一个在画布内的有效位置
function findValidPosition(
  type: PieceType,
  x: number,
  y: number,
  rotation: number,
  size: number,
  canvasSize: number
): { x: number; y: number } {
  if (isWithinCanvas(type, x, y, rotation, size, canvasSize)) {
    return { x, y }
  }

  const bbox = getBoundingBox(type, x, y, rotation, size)

  let newX = x
  let newY = y

  // 计算需要的偏移量
  const overflowLeft = Math.max(0, -bbox.minX)
  const overflowTop = Math.max(0, -bbox.minY)
  const overflowRight = Math.max(0, bbox.maxX - canvasSize)
  const overflowBottom = Math.max(0, bbox.maxY - canvasSize)

  // 调整位置
  newX += overflowLeft - overflowRight
  newY += overflowTop - overflowBottom

  // 最终验证
  const finalBbox = getBoundingBox(type, newX, newY, rotation, size)
  const margin = 5 // 允许 5px 的误差

  // 如果还有超出，强制约束
  if (finalBbox.minX < margin) newX = margin + (x - finalBbox.minX + bbox.minX)
  if (finalBbox.minY < margin) newY = margin + (y - finalBbox.minY + bbox.minY)
  if (finalBbox.maxX > canvasSize - margin) newX = canvasSize - margin - (finalBbox.maxX - x)
  if (finalBbox.maxY > canvasSize - margin) newY = canvasSize - margin - (finalBbox.maxY - y)

  // 确保坐标非负
  newX = Math.max(0, newX)
  newY = Math.max(0, newY)

  return { x: newX, y: newY }
}

/**
 * 七巧板拼图游戏组件
 */
export const TangramGame: React.FC<TangramGameProps> = ({ question, onComplete }) => {
  // 初始化图形，确保所有位置都在画布内
  const [pieces, setPieces] = useState<TangramPiece[]>(() => {
    const initialPieces = question.puzzle.pieces.map((p) => ({
      ...p,
      color: pieceColors[p.type as PieceType] || p.color,
    }))

    // 确保初始位置在画布内
    return initialPieces.map((piece) => {
      const validPos = findValidPosition(
        piece.type as PieceType,
        piece.initialPosition.x,
        piece.initialPosition.y,
        piece.initialRotation,
        PIECE_SIZE,
        CANVAS_SIZE
      )
      return {
        ...piece,
        initialPosition: validPos,
      }
    })
  })
  const [timeUsed, setTimeUsed] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [collisionWarning, setCollisionWarning] = useState(false)
  const [hoveredPiece, setHoveredPiece] = useState<string | null>(null)
  const [draggingPiece, setDraggingPiece] = useState<string | null>(null)

  // 保存上一次有效位置
  const lastValidPosition = useRef<Record<string, { x: number; y: number }>>({})

  // 计时器
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeUsed((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // 初始化上一次有效位置（在 pieces 初始化后执行）
  useEffect(() => {
    pieces.forEach((piece) => {
      lastValidPosition.current[piece.id] = { ...piece.initialPosition }
    })
  }, [])

  // 检测碰撞
  const checkCollision = useCallback(
    (pieceId: string, newX: number, newY: number, newRotation: number): boolean => {
      const movingPiece = pieces.find((p) => p.id === pieceId)
      if (!movingPiece) return false

      const movingVertices = getWorldVertices(
        movingPiece.type as PieceType,
        newX,
        newY,
        newRotation,
        PIECE_SIZE
      )

      for (const piece of pieces) {
        if (piece.id === pieceId) continue

        const otherVertices = getWorldVertices(
          piece.type as PieceType,
          piece.initialPosition.x,
          piece.initialPosition.y,
          piece.initialRotation,
          PIECE_SIZE
        )

        if (polygonsCollide(movingVertices, otherVertices)) {
          return true
        }
      }

      return false
    },
    [pieces]
  )

  // 检查完成状态
  const checkCompletion = useCallback(() => {
    const allPlaced = pieces.every((piece) => {
      const targetX = question.puzzle.targetOutline[0]?.x || 150
      const targetY = question.puzzle.targetOutline[0]?.y || 150
      const dx = piece.initialPosition.x - targetX
      const dy = piece.initialPosition.y - targetY
      return Math.sqrt(dx * dx + dy * dy) < question.puzzle.tolerance
    })

    if (allPlaced && !isComplete) {
      setIsComplete(true)
      const baseStars = 50
      const timeBonus = Math.max(0, 120 - timeUsed) / 2
      const stars = Math.min(100, baseStars + timeBonus)
      setTimeout(() => onComplete(Math.floor(stars)), 1000)
    }
  }, [pieces, question.puzzle, isComplete, timeUsed, onComplete])

  // 处理拖拽
  const handleDrag = useCallback(
    (pieceId: string, info: { point: { x: number; y: number }; offset: { x: number; y: number } }) => {
      const piece = pieces.find((p) => p.id === pieceId)
      if (!piece) return

      const newX = lastValidPosition.current[pieceId].x + info.offset.x
      const newY = lastValidPosition.current[pieceId].y + info.offset.y

      // 检查碰撞
      const hasCollision = checkCollision(pieceId, newX, newY, piece.initialRotation)

      // 检查是否在画布内
      const withinCanvas = isWithinCanvas(
        piece.type as PieceType,
        newX,
        newY,
        piece.initialRotation,
        PIECE_SIZE,
        CANVAS_SIZE
      )

      setCollisionWarning(hasCollision || !withinCanvas)
    },
    [pieces, checkCollision]
  )

  // 处理拖拽结束
  const handleDragEnd = useCallback(
    (pieceId: string, info: { offset: { x: number; y: number } }) => {
      const piece = pieces.find((p) => p.id === pieceId)
      if (!piece) return

      const newX = lastValidPosition.current[pieceId].x + info.offset.x
      const newY = lastValidPosition.current[pieceId].y + info.offset.y

      // 检查碰撞
      const hasCollision = checkCollision(pieceId, newX, newY, piece.initialRotation)

      // 检查是否在画布内
      const withinCanvas = isWithinCanvas(
        piece.type as PieceType,
        newX,
        newY,
        piece.initialRotation,
        PIECE_SIZE,
        CANVAS_SIZE
      )

      if (hasCollision || !withinCanvas) {
        // 有碰撞或超出画布，恢复到上次有效位置
        setPieces((prev) =>
          prev.map((p) =>
            p.id === pieceId
              ? {
                  ...p,
                  initialPosition: lastValidPosition.current[pieceId],
                }
              : p
          )
        )
      } else {
        // 有效位置，更新状态
        const validPos = findValidPosition(
          piece.type as PieceType,
          newX,
          newY,
          piece.initialRotation,
          PIECE_SIZE,
          CANVAS_SIZE
        )

        setPieces((prev) =>
          prev.map((p) =>
            p.id === pieceId
              ? {
                  ...p,
                  initialPosition: validPos,
                }
              : p
          )
        )

        lastValidPosition.current[pieceId] = validPos
      }

      setDraggingPiece(null)
      setCollisionWarning(false)

      setTimeout(checkCompletion, 100)
    },
    [pieces, checkCollision, checkCompletion]
  )

  // 旋转选中的块（带画布边界检测）
  const rotatePiece = useCallback(
    (pieceId: string) => {
      const piece = pieces.find((p) => p.id === pieceId)
      if (!piece) return

      const newRotation = (piece.initialRotation + 90) % 360

      // 检查旋转后是否在画布内
      const withinCanvas = isWithinCanvas(
        piece.type as PieceType,
        piece.initialPosition.x,
        piece.initialPosition.y,
        newRotation,
        PIECE_SIZE,
        CANVAS_SIZE
      )

      // 检查旋转后是否与其他图形碰撞
      const hasCollision = checkCollision(pieceId, piece.initialPosition.x, piece.initialPosition.y, newRotation)

      if (!withinCanvas) {
        // 尝试找到画布内的有效位置
        const validPos = findValidPosition(
          piece.type as PieceType,
          piece.initialPosition.x,
          piece.initialPosition.y,
          newRotation,
          PIECE_SIZE,
          CANVAS_SIZE
        )

        // 再次检查碰撞
        const collisionAtNewPos = checkCollision(pieceId, validPos.x, validPos.y, newRotation)

        if (!collisionAtNewPos) {
          setPieces((prev) =>
            prev.map((p) =>
              p.id === pieceId
                ? {
                    ...p,
                    initialRotation: newRotation,
                    initialPosition: validPos,
                  }
                : p
            )
          )
          lastValidPosition.current[pieceId] = validPos
        } else {
          // 旋转会碰撞，显示警告
          setCollisionWarning(true)
          setTimeout(() => setCollisionWarning(false), 1000)
        }
      } else if (!hasCollision) {
        setPieces((prev) =>
          prev.map((p) =>
            p.id === pieceId ? { ...p, initialRotation: newRotation } : p
          )
        )
      } else {
        // 旋转会碰撞，显示警告
        setCollisionWarning(true)
        setTimeout(() => setCollisionWarning(false), 1000)
      }

      setTimeout(checkCompletion, 100)
    },
    [pieces, checkCollision, checkCompletion]
  )

  // 渲染七巧板参考 SVG
  const renderTangramReference = () => {
    return (
      <ReferenceSvg width="150" height="150" viewBox="0 0 150 150">
        <polygon points="0,0 75,0 0,75" fill={pieceColors.triangle_large} stroke="white" strokeWidth="1" />
        <polygon points="75,0 150,0 75,75" fill={pieceColors.triangle_large} stroke="white" strokeWidth="1" />
        <polygon points="75,75 150,75 150,150" fill={pieceColors.triangle_medium} stroke="white" strokeWidth="1" />
        <polygon points="0,75 37.5,75 0,112.5" fill={pieceColors.triangle_small} stroke="white" strokeWidth="1" />
        <polygon points="75,75 112.5,75 75,112.5" fill={pieceColors.triangle_small} stroke="white" strokeWidth="1" />
        <rect x="37.5" y="75" width="37.5" height="37.5" fill={pieceColors.square} stroke="white" strokeWidth="1" />
        <polygon
          points="75,112.5 112.5,75 150,75 112.5,112.5"
          fill={pieceColors.parallelogram}
          stroke="white"
          strokeWidth="1"
        />
      </ReferenceSvg>
    )
  }

  // 渲染单个七巧板块 SVG
  const renderPieceSvg = (pieceType: PieceType, size: number = 50) => {
    const color = pieceColors[pieceType] || '#fff'

    switch (pieceType) {
      case 'triangle_large':
        return (
          <svg width={size} height={size} viewBox="0 0 50 50">
            <polygon points="0,0 50,0 0,50" fill={color} stroke="white" strokeWidth="1" />
          </svg>
        )
      case 'triangle_medium':
        return (
          <svg width={size} height={size} viewBox="0 0 50 50">
            <polygon points="0,0 50,0 50,50" fill={color} stroke="white" strokeWidth="1" />
          </svg>
        )
      case 'triangle_small':
        return (
          <svg width={size} height={size} viewBox="0 0 40 40">
            <polygon points="0,0 40,0 0,40" fill={color} stroke="white" strokeWidth="1" />
          </svg>
        )
      case 'square':
        return (
          <svg width={size} height={size} viewBox="0 0 40 40">
            <rect x="0" y="0" width="40" height="40" fill={color} stroke="white" strokeWidth="1" />
          </svg>
        )
      case 'parallelogram':
        return (
          <svg width={size} height={size} viewBox="0 0 50 40">
            <polygon points="0,0 25,0 50,40 25,40" fill={color} stroke="white" strokeWidth="1" />
          </svg>
        )
      default:
        return null
    }
  }

  // 渲染实际游戏中的图形
  const renderGamePiece = (piece: TangramPiece) => {
    const color = pieceColors[piece.type as PieceType] || piece.color
    const size = PIECE_SIZE

    switch (piece.type) {
      case 'triangle_large':
        return (
          <svg width={size} height={size} viewBox="0 0 60 60">
            <polygon
              points="0,0 60,0 0,60"
              fill={color}
              stroke="white"
              strokeWidth="2"
              filter="drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))"
            />
          </svg>
        )
      case 'triangle_medium':
        return (
          <svg width={size} height={size} viewBox="0 0 60 60">
            <polygon
              points="0,0 60,0 60,60"
              fill={color}
              stroke="white"
              strokeWidth="2"
              filter="drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))"
            />
          </svg>
        )
      case 'triangle_small':
        return (
          <svg width={size} height={size} viewBox="0 0 50 50">
            <polygon
              points="0,0 50,0 0,50"
              fill={color}
              stroke="white"
              strokeWidth="2"
              filter="drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))"
            />
          </svg>
        )
      case 'square':
        return (
          <svg width={size} height={size} viewBox="0 0 50 50">
            <rect
              x="0"
              y="0"
              width="50"
              height="50"
              fill={color}
              stroke="white"
              strokeWidth="2"
              filter="drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))"
            />
          </svg>
        )
      case 'parallelogram':
        return (
          <svg width={size} height={size} viewBox="0 0 60 50">
            <polygon
              points="0,0 30,0 60,50 30,50"
              fill={color}
              stroke="white"
              strokeWidth="2"
              filter="drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <GameContainer>
      <StatusBar>
        <StatItem>
          <StatLabel>目标</StatLabel>
          <StatValue>{question.puzzle.targetShape}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>时间</StatLabel>
          <StatValue>{timeUsed}秒</StatValue>
        </StatItem>
      </StatusBar>

      <Hint>拖拽七巧板块到目标区域，悬停显示旋转按钮</Hint>

      <GameArea>
        <PuzzleArea>
          <TargetArea>
            {/* 目标轮廓 */}
            <svg
              width={CANVAS_SIZE}
              height={CANVAS_SIZE}
              style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
            >
              <path
                d={
                  question.puzzle.targetOutline
                    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
                    .join(' ') + ' Z'
                }
                fill="none"
                stroke="rgba(255, 255, 255, 0.5)"
                strokeWidth="3"
                strokeDasharray="5,5"
              />
            </svg>

            {/* 七巧板块 */}
            {pieces.map((piece) => {
              const isHovered = hoveredPiece === piece.id
              const isDragging = draggingPiece === piece.id

              return (
                <TangramPieceWrapper
                  key={piece.id}
                  $rotation={piece.initialRotation}
                  $x={piece.initialPosition.x}
                  $y={piece.initialPosition.y}
                  $isHovered={isHovered}
                  drag
                  dragMomentum={false}
                  dragElastic={0}
                  onDragStart={() => {
                    setDraggingPiece(piece.id)
                    // 记录开始拖拽时的位置
                    if (!lastValidPosition.current[piece.id]) {
                      lastValidPosition.current[piece.id] = { ...piece.initialPosition }
                    }
                  }}
                  onDrag={(_, info) => handleDrag(piece.id, info)}
                  onDragEnd={(_, info) => handleDragEnd(piece.id, info)}
                  onMouseEnter={() => !isDragging && setHoveredPiece(piece.id)}
                  onMouseLeave={(e) => {
                    // 检查鼠标是否移动到旋转按钮容器
                    const relatedTarget = e.relatedTarget as HTMLElement
                    if (!relatedTarget || !relatedTarget.closest('[data-rotate-btn-container]')) {
                      setHoveredPiece(null)
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileDrag={{ scale: 1.05, zIndex: 50 }}
                  style={{ zIndex: isDragging ? 50 : isHovered ? 10 : 1 }}
                >
                  <PieceDisplay $color={pieceColors[piece.type as PieceType] || piece.color}>
                    {renderGamePiece(piece)}
                  </PieceDisplay>

                  {/* 悬停旋转按钮容器 - 扩大悬停区域 */}
                  <RotateButtonContainer
                    data-rotate-btn-container
                    onMouseEnter={() => !isDragging && setHoveredPiece(piece.id)}
                    onMouseLeave={() => setHoveredPiece(null)}
                  >
                    <HoverRotateButton
                      $visible={isHovered && !isDragging}
                      onClick={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        rotatePiece(piece.id)
                      }}
                      title="旋转 90°"
                    >
                      🔄
                    </HoverRotateButton>
                  </RotateButtonContainer>
                </TangramPieceWrapper>
              )
            })}

            {/* 碰撞警告 */}
            {collisionWarning && <CollisionWarning>⚠️ 无法放置在此位置</CollisionWarning>}
          </TargetArea>
        </PuzzleArea>

        {/* 七巧板参考区域 */}
        <ReferenceArea>
          <ReferenceTitle>七巧板</ReferenceTitle>
          {renderTangramReference()}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', gap: '4px' }}>
              {renderPieceSvg('triangle_large', 40)}
              {renderPieceSvg('triangle_medium', 40)}
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              {renderPieceSvg('triangle_small', 30)}
              {renderPieceSvg('square', 30)}
              {renderPieceSvg('parallelogram', 40)}
            </div>
          </div>
        </ReferenceArea>
      </GameArea>
    </GameContainer>
  )
}

export default TangramGame
