"use client"

import React from "react"
import Image from "next/image"

interface ContraButtonProps {
  className?: string
}

const ContraButton: React.FC<ContraButtonProps> = ({ className = "" }) => {
  return (
    <a
      href="https://contra.com/chromium?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=chromium"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 text-sm md:text-[15px] font-medium text-white bg-black hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 rounded-lg transition-all shadow-sm hover:shadow-md w-full sm:w-auto whitespace-nowrap ${className}`}
    >
      <Image
        src="/contra.png"
        alt="Contra"
        width={24}
        height={24}
        className="w-6 h-6"
      />
      <span>Contact on Contra</span>
    </a>
  )
}

export default ContraButton

