import type React from "react"
import { cn } from "../../lib/utils"

interface ParagraphProps {
  children: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  center?: boolean
}

const Paragraph: React.FC<ParagraphProps> = ({ children, size = "md", className = "", center = false }) => {
  const baseClasses = "text-gray-700 dark:text-gray-300 leading-relaxed font-normal"

  const sizeClasses = {
    sm: "text-sm md:text-base",
    md: "text-base md:text-lg",
    lg: "text-lg md:text-xl",
    xl: "text-xl md:text-2xl",
  }

  const alignmentClass = center ? "text-center" : ""

  return <p className={cn(baseClasses, sizeClasses[size], alignmentClass, className)}>{children}</p>
}

export default Paragraph
