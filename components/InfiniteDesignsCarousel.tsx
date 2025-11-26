"use client"

import { useEffect, useRef, useState } from "react"

interface InfiniteDesignsCarouselProps {
  designs: string[]
}

export default function InfiniteDesignsCarousel({ designs }: InfiniteDesignsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
const animationRef = useRef<number | null>(null)
  const positionRef = useRef(0)

  useEffect(() => {
    const element = scrollRef.current
    if (!element) return

    const speed = 1.5 // pixels per frame - same speed as promotions
    const itemWidth = 336 // 320px width + 16px gap

    const animate = () => {
      if (!isPaused && element) {
        positionRef.current += speed
        element.style.transform = `translateX(-${positionRef.current}px)`

        // Reset position when first set of items is off screen
        if (positionRef.current >= itemWidth * designs.length) {
          positionRef.current = 0
        }
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPaused, designs.length])

  return (
    <div className="relative overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 will-change-transform"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Render designs 3 times for seamless infinite loop */}
        {[...designs, ...designs, ...designs].map((image, index) => (
          <div
            key={index}
            className="relative w-80 h-80 flex-shrink-0 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <img src={image || "/placeholder.svg"} alt={`Design ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
