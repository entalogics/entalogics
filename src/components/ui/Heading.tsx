import React from "react"
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import type { JSX } from "react/jsx-runtime" // Import JSX to fix the undeclared variable error

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
})

interface HeadingProps {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  gradient?: boolean
  gradientText?: string
}

const Heading: React.FC<HeadingProps> = ({ children, level = 2, className = "", gradient = false, gradientText }) => {
  const baseClasses = `font-bold text-black dark:text-white leading-tight tracking-tight ${poppins.className}`

  const sizeClasses = {
    1: "text-[clamp(1.3rem,6vw,3.2rem)] font-extrabold leading-[1.15]",
    2: "text-4xl md:text-5xl lg:text-6xl",
    3: "text-2xl md:text-3xl lg:text-4xl",
    4: "text-lg md:text-xl",
    5: "text-base md:text-lg",
    6: "text-sm md:text-base",
  }

  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  const renderContent = () => {
    if (gradient && gradientText) {
      // Split children to find and wrap the gradient text
      const childrenString = React.Children.toArray(children).join("")
      const parts = childrenString.split(gradientText)

      if (parts.length > 1) {
        return (
          <>
            {parts[0]}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              {gradientText}
            </span>
            {parts[1]}
          </>
        )
      }
    }

    if (gradient && !gradientText) {
      return (
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          {children}
        </span>
      )
    }

    return children
  }

  return <Tag className={cn(baseClasses, sizeClasses[level], className)}>{renderContent()}</Tag>
}

export default Heading
