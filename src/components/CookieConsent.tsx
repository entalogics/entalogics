"use client"

import React, { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

// Type assertion for motion components
const MotionDiv = motion.div as any

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (cookieConsent !== "accepted") {
      // Show banner after a short delay
      const showTimer = setTimeout(() => {
        setShowBanner(true)
      }, 1000)
      
      // Auto-hide banner after 7 seconds (but don't save to localStorage, so it shows again next time)
      const hideTimer = setTimeout(() => {
        setShowBanner(false)
        // Don't save anything - so it will show again on next visit
      }, 8000) // 1 second delay + 7 seconds display = 8 seconds total
      
      return () => {
        clearTimeout(showTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [])

  const handleAccept = () => {
    // Only save "accepted" when user explicitly clicks Accept
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <AnimatePresence>
      {showBanner && (
        <MotionDiv
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-6 py-3 sm:py-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#0b142a] dark:bg-[#0a1225] rounded-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 shadow-2xl border border-gray-800/50 dark:border-gray-700/30">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm md:text-base text-white dark:text-gray-100 leading-relaxed mb-1.5 sm:mb-2">
                    In order to improve your experience of using our website, we use cookies.
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-white dark:text-gray-100 leading-relaxed">
                    By pressing this button you accept the terms of our{" "}
                    <Link
                      href="/privacy-policy#cookies"
                      className="text-blue-400 dark:text-blue-400 hover:text-blue-300 dark:hover:text-blue-300 underline font-medium transition-colors break-words"
                    >
                      privacy policy.
                    </Link>
                  </p>
                </div>

                {/* Accept Button */}
                <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-end">
                  <button
                    onClick={handleAccept}
                    className="group relative inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 px-3 sm:px-5 md:px-6 py-1.5 sm:py-2.5 md:py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm md:text-base rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0b142a] dark:focus:ring-offset-[#0a1225]"
                  >
                    <span>Accept</span>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-[#0b142a] dark:bg-[#0a1225] flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-white" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent
