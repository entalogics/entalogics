import React from "react"
import { X, Check, Zap } from "lucide-react"
import Heading from "./ui/Heading"

interface ComparisonItem {
  category: string
  others: string
  us: string
}

const comparisons: ComparisonItem[] = [
  {
    category: "Direct Senior Access",
    others: "Junior developers handle most work",
    us: "Work directly with senior team from day one",
  },
  {
    category: "Lean Structure",
    others: "Multiple team layers & management markup",
    us: "No hidden costs - pay for quality work only",
  },
  {
    category: "Independent Specialists",
    others: "Full company overhead included in pricing",
    us: "Individual experts - no company overhead",
  },
  {
    category: "Global Talent, Fair Pricing",
    others: "High European/US agency rates",
    us: "Global talent with fair, transparent pricing",
  },
  {
    category: "Internal Global Agency",
    others: "Bloated with unnecessary processes",
    us: "Elite developers, modern tools - no fluff",
  },
  {
    category: "Your Success Matters",
    others: "Just write code and move on",
    us: "Build products that scale and deliver real value",
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
    <div className={className}>
      {showHeading && (
        <Heading level={2} className="mb-12 text-center" gradient={true} gradientText="Differently">
          Here's How We Do Things Differently
        </Heading>
      )}
      
      <div className="max-w-6xl mx-auto">
        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* LEFT SIDE - Others */}
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-500 text-white font-semibold text-sm shadow-lg">
                <X className="w-4 h-4" />
                Others
              </div>
            </div>
            
            {comparisons.map((item, index) => (
              <div 
                key={`others-${index}`}
                className="group p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/40 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-red-500 flex items-center justify-center">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm pt-0.5">
                    {item.category}
                  </h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed pl-10">
                  {item.others}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - Entalogics */}
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500 text-white font-semibold text-sm shadow-lg">
                <Check className="w-4 h-4" />
                Entalogics
              </div>
            </div>
            
            {comparisons.map((item, index) => (
              <div 
                key={`us-${index}`}
                className="group relative p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/40 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Shine Effect on Hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
                
                <div className="relative">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm pt-0.5">
                      {item.category}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-900 dark:text-white leading-relaxed pl-10 font-medium">
                    {item.us}
                  </p>
                  
                  {/* Lightning Badge on Hover */}
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center animate-pulse shadow-md">
                      <Zap className="w-3 h-3 text-white fill-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowWeDiffer
