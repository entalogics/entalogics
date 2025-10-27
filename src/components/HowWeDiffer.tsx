import React from "react"
import {
  Users,
  TrendingUp,
  Target,
  Globe,
  Building2,
  Heart,
} from "lucide-react"
import Heading from "./ui/Heading"

interface DifferenceItem {
  icon: React.ReactNode
  title: string
  description: string
  bgColor: string
  iconColor: string
}

const differences: DifferenceItem[] = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Direct Senior Access",
    description: "You work directly with me and our senior team from day one. No bouncing between juniors, no hidden hand-offs.",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Lean Structure",
    description: "We keep the structure lean. You won't be billed for \"team layers\" or \"management markup\".",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Independent Specialists",
    description: "We provide independent developers and designers for your project — you pay for individuals doing high-quality work, not for an entire company overhead.",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Talent, Fair Pricing",
    description: "Because many of our developers are based in Asia, our labour cost is lower than many European or US-based agencies. That saving is passed on to you.",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    iconColor: "text-yellow-600",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Internal Global Agency",
    description: "We operate like an internal global agency: elite developers, worldwide standards, modern tools — but without the fluff.",
    bgColor: "bg-red-100 dark:bg-red-900/30",
    iconColor: "text-red-600",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Your Success Matters",
    description: "Your success matters to us. We don't just write code. We build products that scale, meet your goals, and deliver real value.",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    iconColor: "text-indigo-600",
  },
]

interface HowWeDifferProps {
  showHeading?: boolean
  className?: string
}

const HowWeDiffer: React.FC<HowWeDifferProps> = ({ 
  showHeading = true, 
  className = "" 
}) => {
  return (
    <div className={`bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/10 dark:to-purple-950/10 border border-blue-200/50 dark:border-blue-800/50 rounded-2xl p-6 sm:p-8 ${className}`}>
      {showHeading && (
        <Heading level={2} className="mb-6 text-center" gradient={true} gradientText="Differently">
          Here's How We Do Things Differently
        </Heading>
      )}
      
      <div className="space-y-4">
        {differences.map((item, index) => (
          <div 
            key={index}
            className="flex items-start gap-4 p-4 bg-white/60 dark:bg-gray-800/40 rounded-xl hover:shadow-md transition-shadow duration-300"
          >
            <div className={`w-12 h-12 rounded-full ${item.bgColor} flex items-center justify-center flex-shrink-0`}>
              <div className={item.iconColor}>
                {item.icon}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowWeDiffer

