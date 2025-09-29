"use client"

import { Code2, Zap, Lock, MousePointerClick, Briefcase, Settings, Brain, DollarSign, Shield, Star } from "lucide-react"
import { Poppins } from "next/font/google"
import Heading from "./ui/Heading"
import SubHeading from "./ui/SubHeading"
import Button from "./ui/Button"
import Paragraph from "./ui/Paragraph"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

const stats = [
  { icon: <Brain className="w-5 h-5" />, value: "33+", label: "Products Launched" },
  { icon: <DollarSign className="w-5 h-5" />, value: "$40M+", label: "ARR Scaled" },
  { icon: <Shield className="w-5 h-5" />, value: "Privacy", label: "Focused Stack" },
  { icon: <Star className="w-5 h-5" />, value: "Top Rated", label: "Plus on Upwork" },
]

const coreBeliefs = [
  "Own what you ship",
  "Build smart, scalable code",
  "Think like product partners",
  "Communicate with logic",
  "Design for clarity & simplicity",
]

const features = [
  {
    icon: Code2,
    title: "Full-Stack Specialization",
    description:
      "We handle frontend, backend, and everything in between. No need to juggle multiple vendors. Our team consistently delivers a cohesive, fully integrated product.",
    color: "blue-500",
  },
  {
    icon: Zap,
    title: "Agile, Fast, Reliable",
    description:
      "We follow Agile methodology with weekly sprints, milestone tracking, and regular demos. That means faster delivery cycles and zero guesswork for you.",
    color: "yellow-500",
  },
  {
    icon: Lock,
    title: "Code That Won't Break",
    description:
      "We write maintainable, scalable code with documentation and clean structure. Entalogics makes sure your product can evolve with future features or tech changes.",
    color: "green-500",
  },
  {
    icon: MousePointerClick,
    title: "UI/UX That Converts",
    description:
      "We design interfaces that drive actions: improved usability, increased engagement, and higher ROI. Our UX/UI specialists make your visitors fall in love with your site/app.",
    color: "purple-500",
  },
  {
    icon: Briefcase,
    title: "Industry-Specific Solutions",
    description:
      "From healthcare to eCommerce to SaaS, we understand industry constraints and user expectations, building software that performs where it matters.",
    color: "indigo-500",
  },
  {
    icon: Settings,
    title: "Post-Launch Partnership",
    description:
      "We don't disappear after delivery. Our post-launch support ensures updates, improvements, and peace of mind as your product grows.",
    color: "red-500",
  },
]

const getFeatureIconBg = (color: string) => {
  const colorMap: { [key: string]: string } = {
    "blue-500": "bg-blue-500 hover:bg-blue-600",
    "yellow-500": "bg-yellow-500 hover:bg-yellow-600",
    "green-500": "bg-green-500 hover:bg-green-600",
    "purple-500": "bg-purple-500 hover:bg-purple-600",
    "indigo-500": "bg-indigo-500 hover:bg-indigo-600",
    "red-500": "bg-red-500 hover:bg-red-600",
  }
  return colorMap[color] || "bg-blue-500 hover:bg-blue-600"
}

const WhyChooseUs = () => {
  return (
    <section className={`relative  px-4 md:px-8  ${poppins.className}`}>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <Heading level={2} className="mb-6" gradient={true} gradientText="Long-Term Tech Partner">
            Your Long-Term Tech Partner
          </Heading>

             <Paragraph size="sm" className="max-w-4xl mx-auto" center={true}>
            Entalogics was founded with one goal — to bring clarity and logic into software development. We're a team of
            engineers, designers, and product minds helping founders go from idea to launch… with systems that scale.
          </Paragraph>
        </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-12 max-w-5xl mx-auto px-3">
  {stats.map((stat, idx) => (
    <div
      key={idx}
      className="group relative overflow-hidden flex flex-col items-center text-center 
                 p-3 sm:p-4 lg:p-5
                 bg-gradient-to-br from-white/90 to-white/70 
                 dark:from-gray-800/90 dark:to-gray-900/70
                 backdrop-blur-xl rounded-2xl 
                 border border-gray-200/40 dark:border-gray-700/40
                 shadow-md shadow-gray-900/5 dark:shadow-black/20
                 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5
                 hover:-translate-y-1 hover:scale-105
                 transition-all duration-500 ease-out
                 before:absolute before:inset-0 before:bg-gradient-to-br 
                 before:from-blue-500/5 before:to-purple-500/5 
                 before:opacity-0 hover:before:opacity-100 
                 before:transition-opacity before:duration-300"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/10 to-purple-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon container */}
      <div
        className="relative z-10 text-blue-600 dark:text-blue-400 mb-2 sm:mb-3 p-2 sm:p-3
                   bg-gradient-to-br from-blue-50 to-blue-100/50 
                   dark:from-blue-900/30 dark:to-blue-800/20 
                   rounded-xl shadow-inner
                   group-hover:shadow-lg group-hover:scale-110
                   transition-all duration-300 
                   border border-blue-200/30 dark:border-blue-700/30
                   group-hover:border-blue-300/50 dark:group-hover:border-blue-600/50"
      >
        <div className="transform group-hover:rotate-6 transition-transform duration-300">
          {stat.icon}
        </div>
      </div>

      {/* Value */}
      <div
        className="relative z-10 text-lg sm:text-xl lg:text-2xl font-bold 
                   bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 
                   dark:from-white dark:via-gray-100 dark:to-gray-200 
                   bg-clip-text text-transparent mb-1
                   group-hover:scale-110 transition-transform duration-300"
      >
        {stat.value}
      </div>

      {/* Label */}
      <div
        className="relative z-10 text-[10px] sm:text-xs font-medium 
                   text-gray-600 dark:text-gray-400 
                   group-hover:text-gray-700 dark:group-hover:text-gray-300
                   transition-colors duration-300 leading-relaxed"
      >
        {stat.label}
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
    </div>
  ))}
</div>


        <div className="mb-16 hidden md:block">
          <SubHeading size="xl" className=" font-poppins font-bold text-gray-900 dark:text-white text-center mb-8">
            Our Core Beliefs
          </SubHeading>
        <div className="flex flex-wrap justify-center gap-2 max-w-6xl mx-auto">
  {coreBeliefs.map((belief, idx) => (
    <span
      key={idx}
      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-[11px] md:text-xs font-medium border border-blue-200/70 dark:border-blue-700/70 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-sm whitespace-nowrap"
    >
      {belief}
    </span>
  ))}
</div>

        </div>

        <div className="text-center mb-12 ">
          <Heading level={2} className="mb-6" gradient={true} gradientText="Development Agency">
            Why Entalogics Is Your Go-to Development Agency
          </Heading>

          <Paragraph size="sm" className="max-w-3xl mx-auto" center={true}>
            You'll find hundreds of full-stack development agencies out there. But Entalogics is different from all the
            mediocre ones. Here's how:
          </Paragraph>
        </div>

        <div className="space-y-6 md:space-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-xl border border-gray-200/60 dark:border-white/20 hover:bg-white/90 dark:hover:bg-white/15 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 shadow-lg"
            >
              <div className="flex-shrink-0 max-md:text-center max-md:w-full">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 max-md:mx-auto ${getFeatureIconBg(feature.color)} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                >
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 max-md:text-center lg:w-7 lg:h-7 text-white" />
                </div>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <Paragraph className="text-sm sm:text-base lg:text-lg">{feature.description}</Paragraph>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default WhyChooseUs
