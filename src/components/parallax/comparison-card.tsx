"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { X, Check } from "lucide-react"
import type { ComparisonItem } from "@/lib/comparison-data"

interface ComparisonCardProps {
  card: ComparisonItem
  index: number
  progress: any
  range: [number, number]
  targetScale: number
}

export default function ComparisonCardComponent({ card, index, progress, range, targetScale }: ComparisonCardProps) {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container as any,
    offset: ["start end", "start start"],
  })

  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={container} className="h-auto py-2 md:py-4 flex items-center justify-center sticky z-10 md:px-3 sm:px-4" style={{ top: `300px` }}>
      <motion.div
        style={{
          scale,
          position: 'relative',
          width: '100%',
        } as any}
      >
        {/* Comparison Card - Simple Design */}
        <div className="mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-2xl lg:max-w-4xl rounded-lg md:rounded-md bg-white dark:bg-gray-800/95 backdrop-blur-sm shadow-lg md:shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Comparison Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
            {/* Left Side - Others */}
            <div className="p-4 sm:p-6 md:p-8 bg-red-50/50 dark:bg-red-950/20">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-red-900 dark:text-red-300 mb-1 sm:mb-2">
                    Others
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {card.others}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Entalogics */}
            <div className="p-4 sm:p-6 md:p-8 bg-green-50/50 dark:bg-green-950/20">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-green-900 dark:text-green-300 mb-1 sm:mb-2">
                    Entalogics
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    {card.us}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
