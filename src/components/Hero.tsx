"use client"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import TrustBar from "./TrustBar"
import Link from "next/link"
import Image from "next/image"
import { Sora, Inter, Poppins, Arizonia } from "next/font/google"
import Button from "./ui/Button"
import Paragraph from "./ui/Paragraph"
import Heading from "./ui/Heading"

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "800"], display: "swap" })
const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "800", "900"], display: "swap" })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "800", "900"], display: "swap" })
const arizonia = Arizonia({ subsets: ["latin"], weight: "400", display: "swap" })

const HERO_BADGE_LINES = [
  "Featured on Clutch",
  "Recognized by GoodFirms",
  "Partnered with 30+ startups",
]

const Hero = () => {
  const [currentBadgeIndex, setCurrentBadgeIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBadgeIndex((prev) => (prev + 1) % HERO_BADGE_LINES.length)
    }, 2600)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section
        id="home"
        className={`relative isolate w-full overflow-hidden !overflow-y-visible flex flex-col items-center justify-center pt-32 md:pt-32 lg:pt-40 px-10 max-2xl:px-[70px]  max-md:px-4  pb-3 md:pb-7 lg:pb-3 xl:pb-7 ${sora.className}`}
      >
        {/* Main Content Container */}
        <div className="w-full max-w-[1050px] max-laptop:max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:col-span-7">
            {/* Animated Badge */}
            <div className="mb-4 md:mb-5 flex items-center justify-center lg:justify-start">
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={HERO_BADGE_LINES[currentBadgeIndex]}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ display: "inline-flex" }}
                  >
                    <Link
                      href={(() => {
                        switch (currentBadgeIndex) {
                          case 0:
                            return "https://clutch.co/profile/entalogics"
                          case 1:
                            return "https://www.goodfirms.co/company/entalogics"
                          default:
                            return "/portfolio"
                        }
                      })()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700"
                    >
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{HERO_BADGE_LINES[currentBadgeIndex]}</span>
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Main heading with gradient */}
            <Heading
              level={1}
              className={`relative text-9xl max-md:text-6xl max-lg:text-6xl max-xl:text-7xl max-laptop:text-7xl  font-[700] leading-[1.1] mb-2 ${poppins.className}`}
            >
              <span className="block">
                <span className="text-black dark:text-white">Custom </span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-[800]">
                  Software
                </span>
              </span>
              <span className="block text-black dark:text-white">Development Company</span>
              <span className="block text-[#4F46E5] dark:text-gray-400 text-xl md:text-2xl lg:text-3xl font-[500] mt-3">
                Business & IT Solutions
              </span>
            </Heading>

            {/* Subtitle */}
            <p className="mb-5 max-w-xl mx-auto lg:mx-0 text-gray-600 dark:text-gray-400 leading-relaxed max-laptop:text-[15px] text-md max-md:text-[13px]">
              We build Custom Chromium Browsers, Web, Desktop & Mobile Apps, AI/ML Tools, and SaaS Products for Startups, SMEs, and B2B Companies.
              <br />
              <span className="inline-block mt-2 text-blue-600 dark:text-blue-400 font-medium text-[14px]">"Open to Tech Partnerships"</span>
            </p>

            {/* Buttons */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-4 mb-6">
              <a href="/contact" className="inline-block group">
                <div
                  className="relative rounded-lg p-[1px] transition-all duration-300 group-hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #8b5cf6, #3b82f6)',
                  }}
                >
                  <button className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-semibold text-sm px-4 py-3 rounded-lg flex items-center gap-2 whitespace-nowrap group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_40px_rgba(139,92,246,0.3)] transition-shadow duration-300">
                    <span>Start your project</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ display: "inline-flex" }}
                    >
                      <ArrowRight className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                    </motion.span>
                  </button>
                </div>
              </a>

              <Link href="/about" className="inline-block">
                <Button variant="secondary" size="sm" className="text-sm font-[500] px-4 py-3 whitespace-nowrap bg-transparent border border-gray-300 dark:border-gray-700  dark:text-white hover:bg-black/90 dark:hover:bg-gray-800 transition-colors bg-black text-white">
                  About Us
                </Button>
              </Link>
            </div>

            {/* Badges */}

          </div>

          {/* Right Column: Hero Image */}
          <div className="flex items-center justify-center order-2 lg:justify-end lg:col-span-5 ">
            {/* <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl rounded-full"></div>
              <Image
                src="/right-hero.png"
                alt="Hero Illustration"
                width={600}
                height={600}
                className="relative w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div> */}




            <div className="flex items-center justify-center lg:justify-end gap-4 mt-6 max-w-[400px] max-md:w-[400px] mr-5 max-md:mr-0 flex-wrap">
              <a href="https://clutch.co/profile/entalogics" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                <Image
                  src="/assets/badges/entalogics-clutch.svg"
                  alt="Clutch Badge"
                  width={120}
                  height={40}
                  className="h-36 w-auto max-md:h-20"
                />
              </a>
              <a href="https://www.upwork.com/agencies/entalogics/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                <Image
                  src="/assets/badges/entalogics-upwork.svg"
                  alt="Upwork Badge"
                  width={120}
                  height={40}
                  className="h-36 w-auto max-md:h-20"
                />
              </a>
              <a href="https://www.goodfirms.co/company/entalogics" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                <Image
                  src="/assets/badges/entalogics-goodfirms.svg"
                  alt="GoodFirms Badge"
                  width={120}
                  height={40}
                  className="h-36 w-auto max-md:h-20"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80 -m-3">
                <Image
                  src="/assets/badges/entalogics-top-software-developers-2025.svg"
                  alt="GoodFirms Badge"
                  width={120}
                  height={40}
                  className="h-36 w-auto max-md:hidden"
                />
              </a>
            </div>

          </div>
        </div>
      </section>
      <section id="home" className="pb-0 pt-0 max-md:pt-2">
        <TrustBar />
      </section>
    </>
  )
}

export default Hero
