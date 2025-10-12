"use client"

import type React from "react"
import { cn } from "../../lib/utils"

interface ButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "gradient"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  disabled?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  type?: "button" | "submit" | "reset"
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  icon,
  iconPosition = "left",
  type = "button",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-poppins font-bold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"

  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow hover:shadow-lg focus:ring-blue-400/40 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full group-hover:before:translate-x-full before:transition-transform before:duration-500",
    secondary:
      "bg-white dark:bg-transparent border border-gray-300 dark:border-blue-400/30 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 hover:border-gray-400 dark:hover:border-blue-400/50",
    gradient:
      "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl focus:ring-blue-500 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent before:-translate-x-full group-hover:before:translate-x-full before:transition-transform before:duration-500",
  }

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm gap-1.5 min-h-[32px]",
    md: "px-7 py-3 text-base gap-2 min-h-[44px]",
    lg: "px-8 py-4 text-lg gap-2.5 min-h-[52px]",
  }

  return (
    <button
      type={type}
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && (
        <span className="flex items-center justify-center flex-shrink-0 relative z-10">
          {icon}
        </span>
      )}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === "right" && (
        <span className="flex items-center justify-center flex-shrink-0 relative z-10">
          {icon}
        </span>
      )}
    </button>
  )
}

export default Button