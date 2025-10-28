"use client"

import React from "react"

interface BorderBeamProps {
  duration?: number
  delay?: number
}

export const BorderBeam = ({
  duration = 4,
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div className="absolute -inset-[1px] rounded-lg pointer-events-none">
      {/* Neon gradient border */}
      <div 
        className="absolute inset-0 rounded-lg p-[2px]" 
        style={{
          background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #8b5cf6, #3b82f6)',
          backgroundSize: '200% 100%',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3), 0 0 60px rgba(236, 72, 153, 0.2)',
        }}
      />
    </div>
  )
}

