"use client"

import React, { useEffect } from "react"
// @ts-ignore - react-dom is available in Next.js
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { servicesData } from "../data/servicesData"

interface ServicesDropdownProps {
  isOpen: boolean
  onClose: () => void
  shrink: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ isOpen, onClose, shrink, onMouseEnter, onMouseLeave }) => {
  const services = Object.values(servicesData)
  const [mounted, setMounted] = React.useState(false)
  const [topPosition, setTopPosition] = React.useState(shrink ? '60px' : '72px')
  const [dropdownWidth, setDropdownWidth] = React.useState('95%')

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
          setDropdownWidth('850px')
        } 
        // Desktop: 1024px to 1439px - reduced width for 2 columns
        else if (window.innerWidth >= 1024) {
          setDropdownWidth('60%')
        } else if (window.innerWidth >= 768) {
          setDropdownWidth('80%')
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
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
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
              className="bg-white dark:bg-[#0a1225] shadow-2xl border-t border-gray-200 dark:border-gray-800 w-full rounded-lg"
              style={{
                width: '100%',
                height: '100%',
                margin: 0,
                padding: 0,
                overflow: 'visible',
              }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onWheel={(e: React.WheelEvent) => {
                e.stopPropagation()
              }}
            >
            <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{ overflow: 'visible' }}>
              {/* Header */}
              <div className="py-4 border-b border-gray-100 dark:border-gray-800">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">All Services</h3>
              </div>
              
              {/* Services Grid */}
              <div 
                className="py-6 max-h-[500px] overflow-y-auto custom-scrollbar"
                style={{ 
                  scrollBehavior: 'smooth',
                  WebkitOverflowScrolling: 'touch'
                }}
                onWheel={(e: React.WheelEvent) => {
                  e.stopPropagation()
                }}
              >
                <div className="grid grid-cols-2 gap-1.5 px-1">
                  {services.map((service, idx) => {
                    const imagePath = service.imagePath || `/assets/services-logos/${service.slug}.svg`
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={onClose}
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: idx * 0.03 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="group flex items-center gap-2.5 p-2.5 rounded-lg border border-transparent hover:border-blue-200 dark:hover:border-blue-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 cursor-pointer">
                            {/* SVG Icon */}
                            <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                              <img
                                src={imagePath}
                                alt={`${service.title} icon`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            
                            {/* Title */}
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1 flex-1">
                              {service.title}
                            </h4>
                          </div>
                        </motion.div>
                      </Link>
                    )
                  })}
                </div>
              </div>
              
              {/* Footer */}
              <div className="py-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/20">
                <Link
                  href="/services"
                  onClick={onClose}
                  className="flex items-center justify-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  View All Services
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

export default ServicesDropdown
