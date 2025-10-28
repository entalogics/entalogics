"use client"

import type React from "react"
import { cn } from "../../lib/utils"

interface GlowingButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  type?: "button" | "submit" | "reset"
}

const GlowingButton: React.FC<GlowingButtonProps> = ({
  children,
  className = "",
  onClick,
  disabled = false,
  icon,
  iconPosition = "left",
  type = "button",
}) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cn("glowing-button", className)}>
      <div className="glowing-button-inner">
        {icon && iconPosition === "left" && (
          <span className="flex items-center justify-center flex-shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="flex items-center justify-center flex-shrink-0">{icon}</span>
        )}
      </div>
    </button>
  )
}

export default GlowingButton

