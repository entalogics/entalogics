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
          className="fixed bottom-4 left-4 z-50"
        >
          <div className="max-w-sm md:max-w-md">
            <div className="bg-[#0b142a] dark:bg-[#0a1225] rounded-lg px-4 py-3 shadow-2xl border border-gray-800/50 dark:border-gray-700/30">
                <div className="flex flex-col gap-2.5">
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="hidden md:block text-[11px] leading-relaxed text-white dark:text-gray-100 mb-1.5">
                      In order to improve your experience of using our website, we use cookies.
                    </p>
                    <p className="text-[11px] leading-relaxed text-white dark:text-gray-100">
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
                  <div className="flex-shrink-0 w-full flex justify-center md:justify-end">
                    <button
                      onClick={handleAccept}
                      className="group relative inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium text-xs rounded-md transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0b142a] dark:focus:ring-offset-[#0a1225]"
                    >
                      <span>Accept</span>
                      <ArrowRight className="w-3 h-3 text-white" />
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
