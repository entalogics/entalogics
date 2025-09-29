"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"

interface TypewriterCTAProps {
  texts?: string[]
  className?: string
}

const defaultTexts = [
  'SaaS Developer?',
  'AI Apps Developer?',
  'Web Developer?',
  'Mobile App Developer?',
  'Browser Developer?',
  'UI/UX Designer?',
  'DevOps Developer?'
]

const TypewriterCTA: React.FC<TypewriterCTAProps> = ({ 
  texts = defaultTexts, 
  className = "" 
}) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
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

  // Typewriter animation effect
  useEffect(() => {
    const currentText = texts[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, texts])

  return (
    <div className={`mt-24 pt-16 border-t border-border dark:border-gray-700 flex justify-between items-center ${className}`}>
      <div className="flex items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-white mr-2 font-poppins">
          Are you looking for <span 
            className="font-poppins text-transparent" 
            style={{
              WebkitTextStroke: isDark ? '1px white' : '1px black',
              color: 'transparent'
            }}
          >{displayText}</span>
        </h2>
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-white animate-pulse font-poppins">|</span>
      </div>
      <Link href="/contact" className="border-2 border-foreground dark:border-white rounded-full px-4 py-2 bg-transparent hover:bg-foreground hover:text-background dark:hover:bg-white dark:hover:text-black transition-all duration-300 text-foreground dark:text-white font-medium">
        Contact →
      </Link>
    </div>
  )
}

export default TypewriterCTA
