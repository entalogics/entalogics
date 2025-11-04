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
    <div className={`mt-16 md:mt-24 pt-8 md:pt-16 border-t border-border dark:border-gray-700 flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-0 ${className}`}>
      <div className="flex items-start flex-wrap min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground dark:text-white font-poppins leading-tight select-text">
          Are you looking for <span 
            className="font-poppins text-transparent inline select-text" 
            style={{
              WebkitTextStroke: isDark ? '1px white' : '1px black',
              color: 'transparent',
              WebkitUserSelect: 'text',
              userSelect: 'text'
            }}
          >{displayText}</span><span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground dark:text-white animate-pulse font-poppins select-none ml-1">|</span>
        </h2>
      </div>
      <Link href="/contact" className="border-2 border-foreground dark:border-white rounded-full px-6 py-3 bg-transparent hover:bg-foreground hover:text-background dark:hover:bg-white dark:hover:text-black transition-all duration-300 text-foreground dark:text-white font-medium text-sm md:text-base self-start md:self-start flex-shrink-0">
        Contact →
      </Link>
      <style jsx>{`
        .select-text::selection {
          background-color: ${isDark ? '#3b82f6' : '#1e40af'};
          color: white;
        }
        .select-text::-moz-selection {
          background-color: ${isDark ? '#3b82f6' : '#1e40af'};
          color: white;
        }
      `}</style>
    </div>
  )
}

export default TypewriterCTA
