"use client"
import Heading from "./ui/Heading"
import Paragraph from "./ui/Paragraph"

const trustLogos = [
  { name: "Upwork", src: "https://cdn.worldvectorlogo.com/logos/upwork.svg" },
  { name: "Clutch", src: "/clutch.png" },
  { name: "GoodFirms", src: "goodfirms.png" },
  { name: "G2", src: "/g2.png" },
]

interface TrustedCompaniesProps {
  className?: string
}

const TrustedCompanies = ({ className = "" }: TrustedCompaniesProps) => {
  return (
    <div className={`text-center ${className}`}>
      <Heading level={2} className="mb-3" gradient={true} gradientText="Companies Worldwide">
        Trusted by Companies Worldwide
      </Heading>

      <Paragraph size="md" className="text-gray-500 dark:text-gray-400 text-sm md:text-base mb-6 md:mb-8 max-w-xl mx-auto px-4">
        Join industry leaders who trust us to deliver exceptional results
      </Paragraph>

      <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-6 max-w-4xl mx-auto mb-6 md:mb-8 px-4">
        {trustLogos.map((logo, idx) => (
          <div
            key={idx}
            className="group relative bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-sm border border-gray-200/60 dark:border-white/20 rounded-lg px-3 py-2 md:px-4 md:py-3 hover:bg-white dark:hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-w-[80px] md:min-w-[100px] flex items-center justify-center h-12 md:h-14"
          >
            <img
              src={logo.src || "/placeholder.svg"}
              alt={`${logo.name} logo`}
              className="h-4 md:h-5 w-auto max-w-[120px] md:max-w-[150px] object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = "none"
                const parent = target.parentElement
                if (parent) {
                  parent.innerHTML = `<span class="text-gray-600 dark:text-gray-400 text-xs font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">${logo.name}</span>`
                }
              }}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-nowrap justify-center gap-1 md:gap-2 lg:gap-3 px-2 md:px-4 overflow-x-auto">
        <div className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full px-2 py-1.5 text-xs font-medium shadow-md hover:shadow-lg hover:scale-102 transition-all duration-200 whitespace-nowrap">
          <div className="w-1 h-1 rounded-full bg-white/90"></div>
          <span>100+ Projects</span>
        </div>
        
        <div className="flex items-center gap-1.5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full px-2 py-1.5 text-xs font-medium shadow-md hover:shadow-lg hover:scale-102 transition-all duration-200 whitespace-nowrap">
          <div className="w-1 h-1 rounded-full bg-white/90"></div>
          <span>4.9/5 Rating</span>
        </div>
        
        <div className="flex items-center gap-1.5 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full px-2 py-1.5 text-xs font-medium shadow-md hover:shadow-lg hover:scale-102 transition-all duration-200 whitespace-nowrap">
          <div className="w-1 h-1 rounded-full bg-white/90"></div>
          <span>50+ Clients</span>
        </div>
      </div>
    </div>
  )
}

export default TrustedCompanies

