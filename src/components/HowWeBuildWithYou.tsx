"use client"

import { motion } from "framer-motion"
import { Compass, Building2, Palette, Code2, TestTube, Rocket, ArrowRight } from "lucide-react"
import Heading from "./ui/Heading"
import SubHeading from "./ui/SubHeading"
import Paragraph from "./ui/Paragraph"
import Button from "./ui/Button"
import Link from "next/link"

const buildSteps = [
  {
    icon: Compass,
    title: "Discovery & Strategy",
    desc: "We understand your vision and define clear objectives for your project.",
    color: "blue-500",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    borderColor: "border-blue-500/30",
  },
  {
    icon: Building2,
    title: "Architecture & Planning",
    desc: "We design scalable systems that grow with your business needs.",
    color: "purple-500",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    borderColor: "border-purple-500/30",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "We create beautiful, intuitive interfaces that users love.",
    color: "emerald-500",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    borderColor: "border-emerald-500/30",
  },
  {
    icon: Code2,
    title: "Development",
    desc: "We build your solution using modern frameworks and best practices.",
    color: "orange-500",
    iconBg: "bg-orange-100 dark:bg-orange-900/30",
    borderColor: "border-orange-500/30",
  },
  {
    icon: TestTube,
    title: "Testing & QA",
    desc: "We ensure everything works perfectly before launch.",
    color: "red-500",
    iconBg: "bg-red-100 dark:bg-red-900/30",
    borderColor: "border-red-500/30",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    desc: "We launch your project and provide ongoing support.",
    color: "indigo-500",
    iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
    borderColor: "border-indigo-500/30",
  },
]

const colorHexMap: Record<string, string> = {
  blue: "#3B82F6",
  purple: "#A855F7",
  emerald: "#10B981",
  orange: "#F59E0B",
  red: "#EF4444",
  indigo: "#6366F1",
}

const getColorHex = (twColor: string): string => {
  const base = twColor.split("-")[0]
  return colorHexMap[base] || "#3B82F6"
}

const HowWeBuildWithYou = () => {
  return (
    <section className="relative  px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Heading level={2} className="mb-6" gradient={true} gradientText="With You">
              How We Build With You
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Paragraph size="md" className="max-w-3xl mx-auto" center={true}>
              Our collaborative approach ensures your vision becomes reality through every step of the journey.
            </Paragraph>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {buildSteps.map((step, index) => {
            const IconComponent = step.icon

            return (
              <div key={step.title} className="group h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{ height: "100%" }}
                >
                <div
                  className={`relative bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-gray-200 dark:border-gray-800 hover:scale-[1.03] overflow-hidden flex flex-col`}
                >
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 mb-4 border border-gray-200 dark:border-gray-700 bg-transparent`}>
                      <IconComponent className={`w-6 h-6`} style={{ color: getColorHex(step.color) }} />
                    </div>

                    <h3 className="text-xl font-poppins font-semibold text-black dark:text-white transition-colors duration-300 mb-3">
                      {step.title}
                    </h3>
                  </div>

                  <div className="flex-1 flex items-center">
                    <Paragraph size="sm" className="text-center w-full">{step.desc}</Paragraph>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    style={{ backgroundColor: getColorHex(step.color) }}
                  ></div>
                </div>
                </motion.div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
          <div className="relative bg-blue-600 rounded-2xl p-8 text-white overflow-hidden">
            <div className="relative z-10">
              <Heading level={3} className="text-white mb-4">
                Ready to Get Started?
              </Heading>

              <Paragraph className="mb-6 text-blue-100 text-lg font-medium">
                Let's discuss your project and bring your ideas to life.
              </Paragraph>
           <Link href="/contact">
            <Button
  size="sm"
  className="w-auto max-w-[280px] sm:max-w-none bg-white text-blue-600 hover:bg-blue-100  
             dark:bg-blue-100 dark:text-blue-700 dark:hover:bg-blue-200 font-semibold
             transition-transform duration-500 hover:-translate-y-1 px-6 py-3"
  icon={
    <span style={{ display: "inline-flex" }}>
      <motion.span
        animate={{ x: [0, 6, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "easeInOut"
        }}
        whileHover={{
          x: [0, 10, 0],
          transition: { repeat: Infinity, duration: 0.8, ease: "easeInOut" }
        }}
      >
        <ArrowRight className="w-4 h-4" />
      </motion.span>
    </span>
  }
  iconPosition="right"
>
  Start Your Project
</Button>

              </Link>
            </div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HowWeBuildWithYou
