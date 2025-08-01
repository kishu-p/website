"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { useState, useEffect } from "react"

export default function FloatingHearts() {
  const [isClient, setIsClient] = useState(false)
  const [windowHeight, setWindowHeight] = useState(800)
  const [hearts, setHearts] = useState<
    Array<{
      id: number
      size: number
      left: number
      delay: number
      duration: number
      opacity: number
    }>
  >([])

  useEffect(() => {
    // Only run on client side to avoid hydration mismatch
    setIsClient(true)

    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight)

      // Generate hearts data only on client side
      const heartsData = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        size: Math.random() * 20 + 15,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 6,
        opacity: 0.3 + Math.random() * 0.4,
      }))

      setHearts(heartsData)

      const handleResize = () => {
        setWindowHeight(window.innerHeight)
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Don't render anything until client-side hydration is complete
  if (!isClient) {
    return <div className="absolute inset-0 overflow-hidden" />
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.left}%`,
            bottom: "-50px",
          }}
          animate={{
            y: [0, -windowHeight - 100],
            x: [0, Math.sin(heart.id) * 80],
            rotate: [0, 360],
            scale: [0.8, 1],
          }}
          transition={{
            duration: heart.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: heart.delay,
            ease: "linear",
            type: "tween", // Changed from spring to tween
          }}
        >
          <Heart
            className="text-pink-400 fill-current"
            style={{
              width: heart.size,
              height: heart.size,
              opacity: heart.opacity,
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}
