"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Heading from "./ui/Heading"
import Paragraph from "./ui/Paragraph"

// Counter component for animated numbers
const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = React.useState(0)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById(`counter-${target}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [target, isVisible])

  React.useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const startTime = Date.now()
    const startValue = 0

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart)
      
      setCount(currentValue)

      if (progress >= 1) {
        clearInterval(timer)
        setCount(target)
      }
    }, 16) // ~60fps

    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <span id={`counter-${target}`}>
      {count.toLocaleString()}
    </span>
  )
}

const FunFacts = () => {
  const [isDark, setIsDark] = useState(false)

  // Effect to detect theme changes
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    checkTheme()
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-4 md:py-8 dark:bg-[#0D1526] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Heading level={2} className="mb-4">
            Fun <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Facts</span>
          </Heading>
          <Paragraph size="md" className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Over the years we have done many things that we are proud of. This motivates us to continue looking for new challenges in order to improve our services.
          </Paragraph>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Happy Customers */}
          <div className="text-center group">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <div className="w-16 h-16 text-gray-400">
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-2 font-poppins" style={{
                      WebkitTextStroke: isDark ? '2px white' : '2px #6b7280',
                      color: 'transparent'
                    }}>
                      <Counter target={300} />
                    </div>
                    <div className="text-base md:text-lg font-semibold text-gray-700 dark:text-gray-300 font-poppins">
                      Happy Customers
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Countries */}
          <div className="text-center group">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <div className="w-16 h-16 text-gray-400">
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-2 font-poppins" style={{
                      WebkitTextStroke: isDark ? '2px white' : '2px #6b7280',
                      color: 'transparent'
                    }}>
                      <Counter target={12} />
                    </div>
                    <div className="text-base md:text-lg font-semibold text-gray-700 dark:text-gray-300 font-poppins">
                      Countries
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Innovations */}
          <div className="text-center group">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <div className="w-16 h-16 text-gray-400">
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                    </svg>
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-2 font-poppins" style={{
                      WebkitTextStroke: isDark ? '2px white' : '2px #6b7280',
                      color: 'transparent'
                    }}>
                      <Counter target={623} />
                    </div>
                    <div className="text-base md:text-lg font-semibold text-gray-700 dark:text-gray-300 font-poppins">
                      Innovations
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Great Projects */}
          <div className="text-center group">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <div className="w-16 h-16 text-gray-400">
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-2 font-poppins" style={{
                      WebkitTextStroke: isDark ? '2px white' : '2px #6b7280',
                      color: 'transparent'
                    }}>
                      <Counter target={860} />
                    </div>
                    <div className="text-base md:text-lg font-semibold text-gray-700 dark:text-gray-300 font-poppins">
                      Great Projects
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FunFacts
