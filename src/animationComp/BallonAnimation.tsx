"use client"

import { useEffect, useRef } from "react"

interface Balloon {
  r: number
  R: number
  x: number
  y: number
  a: number
  pm: number
  speed: number
  k: number
  hue: string
  cx?: number
  cy?: number
}

interface Point {
  x: number
  y: number
}

export default function BalloonCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const backCanvasRef = useRef<HTMLCanvasElement>(null)
  const framesRef = useRef(0)
  const requestIdRef = useRef<number | null>(null)
  const balloonsRef = useRef<Balloon[]>([])

  const randomIntFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const createBalloon = (canvasWidth: number, canvasHeight: number): Balloon => {
    const r = randomIntFromInterval(20, 70)
    return {
      r,
      R: 1.4 * r,
      x: randomIntFromInterval(r, canvasWidth - r),
      y: canvasHeight + 2 * r,
      a: r * 4.5,
      pm: Math.random() < 0.5 ? -1 : 1,
      speed: randomIntFromInterval(1.5, 4),
      k: 0,
      hue: Math.random() < 0.5 ? "210" : "38",
    }
  }

  const createGradient = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    r: number,
    hue: string,
  ): CanvasGradient => {
    const grd = ctx.createRadialGradient(x - 0.5 * r, y - 1.7 * r, 0, x - 0.5 * r, y - 1.7 * r, r)
    grd.addColorStop(0, `hsla(${hue}, 100%, 65%, 0.95)`)
    grd.addColorStop(0.4, `hsla(${hue}, 100%, 45%, 0.85)`)
    grd.addColorStop(1, `hsla(${hue}, 100%, 25%, 0.80)`)
    return grd
  }

  const drawThread = (balloon: Balloon, ctx: CanvasRenderingContext2D, frames: number): Point => {
    const rad = Math.PI / 180
    let x = 0,
      y = 0

    ctx.beginPath()
    for (let i = balloon.a; i > 0; i -= 1) {
      const t = i * rad
      x = balloon.x + balloon.pm * 50 * Math.cos(balloon.k * t - frames * rad)
      y = balloon.y + balloon.pm * 25 * Math.sin(balloon.k * t - frames * rad) + 50 * t
      ctx.lineTo(x, y)
    }
    ctx.stroke()
    return { x, y }
  }

  const drawBalloon = (balloon: Balloon, ctx: CanvasRenderingContext2D): void => {
    if (!balloon.cx || !balloon.cy) return

    const kappa = 0.5522847498
    const rad = Math.PI / 180
    const or = balloon.r * kappa

    const p1 = { x: balloon.cx - balloon.r, y: balloon.cy }
    const pc11 = { x: p1.x, y: p1.y + or }
    const pc12 = { x: p1.x, y: p1.y - or }

    const p2 = { x: balloon.cx, y: balloon.cy - balloon.r }
    const pc21 = { x: balloon.cx - or, y: p2.y }
    const pc22 = { x: balloon.cx + or, y: p2.y }

    const p3 = { x: balloon.cx + balloon.r, y: balloon.cy }
    const pc31 = { x: p3.x, y: p3.y - or }
    const pc32 = { x: p3.x, y: p3.y + or }

    const p4 = { x: balloon.cx, y: balloon.cy + balloon.R }
    const pc41 = { x: p4.x + or, y: p4.y }
    const pc42 = { x: p4.x - or, y: p4.y }

    const t1 = {
      x: p4.x + 0.2 * balloon.r * Math.cos(70 * rad),
      y: p4.y + 0.2 * balloon.r * Math.sin(70 * rad),
    }
    const t2 = {
      x: p4.x + 0.2 * balloon.r * Math.cos(110 * rad),
      y: p4.y + 0.2 * balloon.r * Math.sin(110 * rad),
    }

    ctx.beginPath()
    ctx.moveTo(p4.x, p4.y)
    ctx.bezierCurveTo(pc42.x, pc42.y, pc11.x, pc11.y, p1.x, p1.y)
    ctx.bezierCurveTo(pc12.x, pc12.y, pc21.x, pc21.y, p2.x, p2.y)
    ctx.bezierCurveTo(pc22.x, pc22.y, pc31.x, pc31.y, p3.x, p3.y)
    ctx.bezierCurveTo(pc32.x, pc32.y, pc41.x, pc41.y, p4.x, p4.y)
    ctx.lineTo(t1.x, t1.y)
    ctx.lineTo(t2.x, t2.y)
    ctx.closePath()
    ctx.fill()
  }

  const updateBalloons = (
    ctx: CanvasRenderingContext2D,
    mainCtx: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number,
  ): void => {
    framesRef.current += 1
    const frames = framesRef.current

    if (frames % 37 === 0 && balloonsRef.current.length < 37) {
      const balloon = createBalloon(canvasWidth, canvasHeight)
      balloon.k = balloon.speed / 5
      balloonsRef.current.push(balloon)
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    balloonsRef.current.forEach((balloon) => {
      if (balloon.y > -balloon.a) {
        balloon.y -= balloon.speed
      } else {
        balloon.y = canvasHeight + balloon.r + balloon.R
      }

      const threadEnd = drawThread(balloon, ctx, frames)
      balloon.cx = threadEnd.x
      balloon.cy = threadEnd.y - balloon.R

      ctx.fillStyle = createGradient(mainCtx, threadEnd.x, threadEnd.y, balloon.r, balloon.hue)
      drawBalloon(balloon, ctx)
    })
  }

  const draw = (): void => {
    const canvas = canvasRef.current
    const backCanvas = backCanvasRef.current
    if (!canvas || !backCanvas) return

    const ctx = canvas.getContext("2d")
    const bCtx = backCanvas.getContext("2d")
    if (!ctx || !bCtx) return

    updateBalloons(bCtx, ctx, canvas.width, canvas.height)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(backCanvas, 0, 0)

    requestIdRef.current = requestAnimationFrame(draw)
  }

  const initCanvas = (): void => {
    const canvas = canvasRef.current
    const backCanvas = backCanvasRef.current
    if (!canvas || !backCanvas) return

    if (requestIdRef.current) {
      cancelAnimationFrame(requestIdRef.current)
      requestIdRef.current = null
    }

    const width = window.innerWidth
    const height = window.innerHeight + 100

    canvas.width = width
    canvas.height = height
    backCanvas.width = width
    backCanvas.height = height

    const bCtx = backCanvas.getContext("2d")
    if (bCtx) {
      bCtx.strokeStyle = "#abcdef"
      bCtx.lineWidth = 1
    }

    draw()
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      initCanvas()
      window.addEventListener("resize", initCanvas)
    }, 15)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", initCanvas)
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current)
      }
    }
  },  [])

  return (
    <>
      <canvas ref={backCanvasRef} className="absolute inset-0 opacity-0 pointer-events-none" aria-hidden="true" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-label="Animated balloons floating upward"
      />
    </>
  )
}
