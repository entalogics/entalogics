"use client"

import { Code2, Zap, Lock, MousePointerClick, Briefcase, Settings, Brain, DollarSign, Shield, Star } from "lucide-react"
import { Poppins } from "next/font/google"
import Heading from "./ui/Heading"
import SubHeading from "./ui/SubHeading"
import Button from "./ui/Button"
import Paragraph from "./ui/Paragraph"
import HowWeDiffer from "./HowWeDiffer"

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
          <Heading level={2} className="mb-6" gradient={true} gradientText="Differently">
            How We Make Things Differently
          </Heading>

             <Paragraph size="sm" className="max-w-4xl mx-auto" center={true}>
            I started Entalogics in 2023 because I was frustrated. Founders were paying agencies premium rates to get code written by junior devs. The math didn't add up — and neither did the quality.
            <br /><br />
            So I built something different: <strong className="text-blue-600 dark:text-blue-400">a team of senior developers who work directly with you</strong>. No layers. No markup. Just quality code at fair prices. Today, we've helped 33+ products launch and scale to $40M+ ARR. But the mission never changed: bring clarity and logic into software development.
          </Paragraph>
        </div>

        {/* How We Differ Section */}
        <div className="mb-16">
          <HowWeDiffer showHeading={false} />
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


        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 mb-6">
            <div className="p-1 bg-primary/20 dark:bg-primary/30 rounded-full mr-2">
              <div className="w-3 h-3 text-blue-600"><Star size={12} /></div>
            </div>
            <span className="text-[11px] text-blue-600 tracking-wide font-poppins">Why Choose Us</span>
          </div>

          {/* Main Heading */}
          <Heading level={2} className="mb-4" gradient={true} gradientText="Development Partner">
            Your Trusted Development Partner
          </Heading>

          <Paragraph size="sm" className="max-w-2xl mx-auto" center={true}>
            Here's why founders choose us over agencies: <strong className="text-blue-600 dark:text-blue-400">we're not an agency</strong>. We're a team of independent senior developers who work directly with you. No project managers. No account executives. Just skilled engineers building products that scale.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl p-6 bg-white dark:bg-[#0a1225] border border-gray-100 dark:border-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 dark:shadow-blue-500/5 dark:hover:shadow-blue-500/10 dark:bg-gradient-to-br dark:from-blue-950/30 dark:via-[#0a1225] dark:to-purple-950/20"
            >
              <div className="mb-6">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${getFeatureIconBg(feature.color)} group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10 blur-2xl rounded-full transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-500/5 to-blue-500/5 dark:from-blue-400/10 dark:to-purple-400/10 blur-2xl rounded-full transform -translate-x-16 translate-y-16 group-hover:-translate-x-12 group-hover:translate-y-12 transition-transform duration-500" />
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default WhyChooseUs
