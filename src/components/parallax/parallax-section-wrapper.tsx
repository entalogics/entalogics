"use client"

import { useRef, useEffect } from "react"
import { useScroll } from "framer-motion"
import { projects } from "@/lib/projects-data"
import ParallaxCard from "./parallax-card"

export default function ParallaxSectionWrapper() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container as React.RefObject<HTMLElement>,
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    // Temporarily override smooth scroll if needed
    const originalBehavior = document.documentElement.style.scrollBehavior
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = originalBehavior
    }
  }, [])

  return (
    // Isolated scroll context with proper height
    <div 
      ref={container} 
      className="relative w-full"
      style={{
        // Calculate total height needed for all cards to stack properly
        minHeight: `${projects.length * 100}vh`,
      }}
    >
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05

        return (
          <ParallaxCard
            key={project.id}
            project={project}
            index={i}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        )
      })}
    </div>
  )
}

