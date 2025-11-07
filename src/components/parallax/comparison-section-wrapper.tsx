"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { comparisonCards } from "@/lib/comparison-data"
import ComparisonCard from "./comparison-card"
import Heading from "../ui/Heading"
import Paragraph from "../ui/Paragraph"

export default function ComparisonSectionWrapper() {
  const container = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const lastCardRef = useRef<HTMLDivElement>(null)
  const [headerOpacity, setHeaderOpacity] = useState(1)
  const [collapseCardsMinHeight, setCollapseCardsMinHeight] = useState(false)
  const [baseMinHeightPx, setBaseMinHeightPx] = useState<number>(0)
  
  const { scrollYProgress } = useScroll({
    target: container as React.RefObject<HTMLElement>,
    offset: ["start start", "end end"],
  })

  // Add smooth spring animation to scroll - creates delay/damping effect
  // Lower stiffness = more delay, Higher damping = smoother motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,    // Reduced from 100 for more delay
    damping: 25,      // Reduced from 30 for smoother feel
    restDelta: 0.001
  })

  // Fade header based on last card entering the viewport
  const { scrollYProgress: lastCardProgress } = useScroll({
    target: lastCardRef as React.RefObject<HTMLElement>,
    offset: ["start end", "start start"],
  })
  useEffect(() => {
    const unsub = lastCardProgress.on("change", (v) => {
      const start = 0.05
      const span = 0.6
      if (v <= start) {
        setHeaderOpacity(1)
      } else {
        const t = Math.min(1, Math.max(0, (v - start) / span))
        setHeaderOpacity(1 - t)
      }
    })
    return () => unsub()
  }, [lastCardProgress])

  useEffect(() => {
    const originalBehavior = document.documentElement.style.scrollBehavior
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = originalBehavior
    }
  }, [])

  // Compute responsive base min-height (mirrors min-h-[150vh] / [100vh])
  useEffect(() => {
    const compute = () => {
      const vh = window.innerHeight
      const isLg = window.innerWidth >= 1024 // tailwind lg
      setBaseMinHeightPx(Math.round((isLg ? 1.5 : 1.0) * vh))
    }
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  // Collapse cards container min-height when last card begins to appear
  useEffect(() => {
    const total = comparisonCards.length
    const lastCardStart = (total - 1) / total
    const threshold = Math.max(0, lastCardStart - 0.02) // tiny lead before last card

    const unsub = scrollYProgress.on("change", (v) => {
      setCollapseCardsMinHeight(v >= threshold)
    })

    return () => unsub()
  }, [scrollYProgress])

  // Animated min-height using spring
  const animatedMinHeight = useSpring(baseMinHeightPx, { stiffness: 140, damping: 24, mass: 0.6 })
  useEffect(() => {
    animatedMinHeight.set(collapseCardsMinHeight ? 0 : baseMinHeightPx)
  }, [collapseCardsMinHeight, baseMinHeightPx, animatedMinHeight])

  return (
    <div 
      ref={container}
      className="relative w-full  scroll-smooth-section"
      style={{
        // Container height includes header + cards - reduced for faster scroll
        // minHeight: `${100 + (comparisonCards.length - 1) * 50}vh`,
      }}
    >
      {/* Sticky Header - Sticks during cards, then fades out */}
      <div 
        ref={headerRef}
        className="sticky top-[60px] z-40 py-8 sm:py-12 md:py-16 md:pb-0 bg-transparent dark:bg-transparent  transition-opacity duration-300"
        style={{ opacity: headerOpacity }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heading level={2} className="mb-4 text-3xl sm:text-4xl md:text-5xl" gradient={true} gradientText="Differently">
            How We Make Things Differently
          </Heading>
          <Paragraph size="sm" className="max-w-4xl mx-auto" center={true}>
            Entalogics was founded with one goal — to bring clarity and logic into software development. We're a team of
            engineers, designers, and product minds helping founders go from idea to launch… with systems that scale.
          </Paragraph>
        </div>
      </div>

      {/* Parallax Cards Container */}
      <motion.div 
        style={{ minHeight: animatedMinHeight as any }}
      >
        <div className="relative w-full bg-transparent dark:bg-transparent pt-8 sm:pt-12 md:pt-16">
          {/* Global column labels above all cards (centered over cards, stays until last card) */}
          <div className="sticky z-30 pointer-events-none mb-4" style={{ top: 270, opacity: headerOpacity }}>
            <div className="mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-2xl lg:max-w-4xl px-3 sm:px-4">
              <div className="w-full flex items-center justify-between">
                {/* OTHERS Label - Red/Orange Theme */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-md backdrop-blur-md transition-all duration-300 dark:backdrop-blur-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(249, 115, 22, 0.15))',
                    borderColor: 'rgba(239, 68, 68, 0.3)',
                    boxShadow: '0 2px 8px rgba(239, 68, 68, 0.12), 0 0 0 1px rgba(239, 68, 68, 0.1)'
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 animate-pulse shadow-sm shadow-red-500/50 dark:shadow-red-500/70"></div>
                  <span className="text-[10px] font-bold tracking-wider uppercase"
                    style={{
                      background: 'linear-gradient(135deg, #ef4444, #f97316)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    OTHERS
                  </span>
                </div>
                {/* ENTALOGICS Label - Blue/Purple Brand Theme */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-md backdrop-blur-md transition-all duration-300 dark:backdrop-blur-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15))',
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                    boxShadow: '0 2px 8px rgba(59, 130, 246, 0.12), 0 0 0 1px rgba(139, 92, 246, 0.1)'
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 animate-pulse shadow-sm shadow-blue-500/50 dark:shadow-blue-500/70"></div>
                  <span className="text-[10px] font-bold tracking-wider uppercase"
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #3b82f6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    ENTALOGICS
                  </span>
                </div>
              </div>
            </div>
          </div>
          {comparisonCards.map((card, i) => {
          // Last card stays at full scale (no zoom out) and no parallax
            const isLastCard = i === comparisonCards.length - 1
            // Keep cards looking proper (no heavy zoom-out). Subtle scale only.
            const targetScale = isLastCard ? 1 : 0.98
          
          // Last card uses regular scroll progress (no spring delay)
          const cardProgress = isLastCard ? scrollYProgress : smoothProgress

          const node = (
            <ComparisonCard
              key={card.category}
              card={card}
              index={i}
              progress={cardProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          )
          return isLastCard ? (
            <div ref={lastCardRef} key={`wrap-${card.category}`}>{node}</div>
          ) : node
          })}
        </div>
      </motion.div>
    </div>
  )
}

