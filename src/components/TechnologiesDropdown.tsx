"use client"

import React, { useEffect } from "react"
// @ts-ignore - react-dom is available in Next.js
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { technologiesByCategory, getTechnologyCategories } from "../data/technologiesData"

// Type assertion for motion components
const MotionDiv = motion.div as any

interface TechnologiesDropdownProps {
  isOpen: boolean
  onClose: () => void
  shrink: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const TechnologiesDropdown: React.FC<TechnologiesDropdownProps> = ({ isOpen, onClose, shrink, onMouseEnter, onMouseLeave }) => {
  const [mounted, setMounted] = React.useState(false)
  const [topPosition, setTopPosition] = React.useState(shrink ? '60px' : '72px')
  const [dropdownWidth, setDropdownWidth] = React.useState('95%')
  const categories = getTechnologyCategories()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Always calculate top position based on current shrink state
    setTopPosition(shrink ? '63px' : '85px')
  }, [shrink])

  useEffect(() => {
    const calculateWidth = () => {
      if (typeof window !== 'undefined') {
        // Large Desktop: 1440px and above
        if (window.innerWidth >= 1440) {
          setDropdownWidth('50%')
        } 
        // Laptop/Desktop: 1024px to 1439px - increased width for better layout
        else if (window.innerWidth >= 1024) {
          setDropdownWidth('90%')
        } else if (window.innerWidth >= 768) {
          setDropdownWidth('90%')
        } else {
          // Mobile - full width
          setDropdownWidth('100%')
        }
      }
    }

    calculateWidth()
    window.addEventListener('resize', calculateWidth)
    return () => window.removeEventListener('resize', calculateWidth)
  }, [])

  const dropdownContent = (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: topPosition,
            left: 0,
            right: 0,
            width: dropdownWidth,
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 0,
            paddingRight: 0,
            zIndex: 50,
            pointerEvents: 'auto',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <div 
              className="technologies-dropdown-container bg-white dark:bg-[#0a1225] shadow-2xl border-t border-gray-200 dark:border-gray-800 w-full rounded-lg overflow-hidden"
              style={{
                width: '100%',
                height: '100%',
                margin: 0,
                padding: 0,
              }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onWheel={(e: React.WheelEvent) => {
                e.stopPropagation()
              }}
            >
            <div className="w-full mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-6" style={{ overflow: 'visible' }}>
              {/* Header */}
              <div className="mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">All Technologies</h3>
              </div>
              
              {/* Technologies by Category - Multi-column layout */}
              <div 
                className="max-h-[600px] overflow-y-auto custom-scrollbar"
                style={{ 
                  scrollBehavior: 'smooth',
                  WebkitOverflowScrolling: 'touch'
                }}
                onWheel={(e: React.WheelEvent) => {
                  e.stopPropagation()
                }}
              >
                {/* Grid layout for categories - 7 columns on desktop, 3 on tablet, 2 on mobile */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 xl:grid-cols-7 gap-6 lg:gap-6">
                  {categories.map((category, categoryIdx) => {
                    const technologies = technologiesByCategory[category]
                    return (
                      <div key={category} className="flex flex-col h-full">
                        {/* Category Header with Green Underline */}
                        <div className="space-y-2 mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                            {category}
                          </h4>
                          {/* Blue underline */}
                          <div className="h-0.5 bg-blue-500 w-10 rounded-full"></div>
                        </div>
                        
                        {/* Technologies List - Vertical */}
                        <div className="flex flex-col space-y-1 flex-grow">
                          {technologies.map((tech, techIdx) => {
                            const imagePath = tech.imagePath || `/assets/technologies/${tech.slug.replace('-development-services', '')}.svg`
                            const globalIdx = categoryIdx * 100 + techIdx
                            
                            return (
                              <Link
                                key={tech.slug}
                                href={`/technologies/${tech.slug}`}
                                onClick={onClose}
                              >
                                <MotionDiv
                                  initial={{ opacity: 1, x: 0 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0 }}
                                  whileHover={{ x: 4 }}
                                  className="group"
                                >
                                  <div className="flex items-center gap-2.5 py-1.5 px-1.5 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 cursor-pointer">
                                    {/* SVG Icon */}
                                    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                      <img
                                        src={imagePath}
                                        alt={`${tech.title} icon`}
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                    
                                    {/* Technology Name */}
                                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                                      {tech.title}
                                    </span>
                                  </div>
                                </MotionDiv>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              
              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/20">
                <Link
                  href="/technologies"
                  onClick={onClose}
                  className="flex items-center justify-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  View All Technologies
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            
            {/* Custom Scrollbar Styles */}
            <style jsx global>{`
              .custom-scrollbar {
                overflow-y: auto !important;
                overflow-x: hidden !important;
                scrollbar-width: thin;
                scrollbar-color: rgba(156, 163, 175, 0.3) transparent;
              }
              .custom-scrollbar::-webkit-scrollbar {
                width: 8px;
                height: 8px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: transparent;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(156, 163, 175, 0.4);
                border-radius: 10px;
                border: 2px solid transparent;
                background-clip: padding-box;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(156, 163, 175, 0.6);
                background-clip: padding-box;
              }
              .dark .custom-scrollbar {
                scrollbar-color: rgba(59, 130, 246, 0.4) transparent;
              }
              .dark .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(59, 130, 246, 0.4);
                background-clip: padding-box;
              }
              .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(59, 130, 246, 0.6);
                background-clip: padding-box;
              }
            `}</style>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )

  if (!mounted) {
    return null
  }

  // Render using portal to escape any parent container constraints
  return createPortal(dropdownContent, document.body)
}

export default TechnologiesDropdown
