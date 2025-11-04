import type React from "react"
import { cn } from "@/lib/utils"

interface SubHeadingProps {
  children: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  center?: boolean
}

const SubHeading: React.FC<SubHeadingProps> = ({ children, size = "md", className = "", center = false }) => {
  const baseClasses = "text-gray-600 dark:text-gray-300 leading-relaxed font-medium"

  const sizeClasses = {
    sm: "text-sm md:text-base",
    md: "text-lg md:text-xl",
    lg: "text-xl md:text-2xl",
    xl: "text-2xl md:text-3xl",
  }

  const alignmentClass = center ? "text-center" : ""

  return <p className={cn(baseClasses, sizeClasses[size], alignmentClass, className)}>{children}</p>
}

export default SubHeading
