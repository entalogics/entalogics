"use client"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import TrustBar from "./TrustBar"
import Link from "next/link"
import { Sora, Inter, Poppins, Arizonia } from "next/font/google"
import Button from "./ui/Button"
import Paragraph from "./ui/Paragraph"
import Heading from "./ui/Heading"

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "800"], display: "swap" })
const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "800", "900"], display: "swap" })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "800", "900"], display: "swap" })
const arizonia = Arizonia({ subsets: ["latin"], weight: "400", display: "swap" })

const HERO_TAGLINES = [
  "Build with Logic",
  "Create with Precision",
  "Innovate with Purpose",
  "Scale with Confidence",
  "Deliver with Clarity",
]

const HERO_BADGE_LINES = [
  "Featured on Clutch",
  "Recognized by GoodFirms",
  "Partnered with 30+ startups",
]

const Hero = () => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isLineComplete, setIsLineComplete] = useState(false)
  const [currentBadgeIndex, setCurrentBadgeIndex] = useState(0)

  useEffect(() => {
    const fullText = HERO_TAGLINES[currentTaglineIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isLineComplete) {
      if (displayedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1))
        }, 90)
      } else {
        timeout = setTimeout(() => {
          setIsLineComplete(true)
        }, 2600)
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayedText("")
        setIsLineComplete(false)
        setCurrentTaglineIndex((prev) => (prev + 1) % HERO_TAGLINES.length)
      }, 250)
    }

    return () => clearTimeout(timeout)
  }, [currentTaglineIndex, displayedText, isLineComplete])

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
        className={`relative isolate w-full  overflow-hidden !overflow-y-visible flex flex-col items-center justify-center pt-32 md:py-32 lg:py-40   px-4 subtle-grid-background !pb-0 ${sora.className}`}
      >
        {/* Blurred background circles for RozmeriGPT effect - CONTAINED to hero only */}

        {/* Main Content Container - no z-index needed here now */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
          {/* Rotating Badge Lines */}
          <div className="mb-6 md:mb-8 lg:mb-8 h-9 flex items-center justify-center">
            <div className="relative overflow-hidden">
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
                    className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold text-blue-700 dark:text-blue-200 border border-blue-200/70 dark:border-blue-500/40 shadow-[0_10px_30px_rgba(59,130,246,0.18)] backdrop-blur-md bg-[linear-gradient(135deg,rgba(255,255,255,0.78)_0%,rgba(236,240,255,0.65)_50%,rgba(230,245,255,0.82)_100%)] dark:bg-[linear-gradient(135deg,rgba(18,28,56,0.75)_0%,rgba(12,24,48,0.68)_50%,rgba(6,20,48,0.78)_100%)] hover:shadow-[0_12px_32px_rgba(59,130,246,0.22)] transition-shadow duration-300"
                  >
                    {HERO_BADGE_LINES[currentBadgeIndex]}
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {/* Main heading with gradient */}
          <Heading
            level={1}
            className={`relative text-[clamp(1.3rem,6vw,3.2rem)] font-[700] leading-[1.15] mb-4 md:mb-6 lg:mb-7 ${poppins.className}`}
          >
            <span className="text-black dark:text-white">Custom </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Software
            </span>
            <span className="text-black dark:text-white"> Development</span>
            <br />
            <span className="text-black dark:text-white">Business & IT Solutions</span>
            <br />
            <span className="relative block mt-3 min-h-[2.6rem] sm:min-h-[3rem]">
              <span
                className={`block  bg-clip-text font-zilla-slab-highlight leading-tight text-black dark:text-white text-[40px] max-md:text-[25px]`}
              >
                {displayedText}
          
              </span>
            </span>
          </Heading>
          {/* Subtitle */}
          <Paragraph size="sm" className="mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto">
            We build Custom Chromium Browsers, Web, Desktop & Mobile Apps, AI/ML Tools, and SaaS Products for Startups, SMEs, and B2B Companies.
            <br />
            <span className="italic"> "Open to Tech Partnerships"</span>
          </Paragraph>

          {/* Buttons */}
          <div className="flex  sm:flex-row md:flex-row lg:flex-row items-center justify-center gap-4 mb-6">
            <a href="/contact" className="inline-block group">
              <div 
                className="relative rounded-lg p-[1px] transition-all duration-300 group-hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #8b5cf6, #3b82f6)',
                }}
              >
                <button className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-semibold text-sm px-5 py-3 rounded-lg flex items-center gap-2 whitespace-nowrap group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_40px_rgba(139,92,246,0.3)] transition-shadow duration-300">
                  <span>Start your project</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    style={{ display: "inline-flex" }}
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.span>
                </button>
              </div>
            </a>

            <Link href="/about" className="inline-block">
              <Button variant="secondary" size="sm" className="text-sm px-5 py-3 whitespace-nowrap bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white">
                About Us
              </Button>
            </Link>
          </div>

          {/* Platform Award Badges */}
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-8 mb-6">
            {[
              {
                title: "Top App\nDevelopment\nCompany",
                subtitle: "Tallinn 2025",
                icon: "award"
              },
              {
                title: "Top Company\nNext.js Developer",
                subtitle: "2025",
                icon: "verified"
              },
              {
                title: "Top Software\nTesting Company",
                subtitle: "2025",
                icon: "award"
              },
              {
                title: "Global\nAward",
                subtitle: "Spring 2025",
                icon: "award"
              },
            ].map((badge, index) => (
              <div
                key={index}
                className={`relative group flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  index === 3 ? "hidden sm:flex" : "flex"
                }`}
              >
                {/* Award Badge SVG - Pixel Perfect */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 214 221"
                  fill="none"
                  className="text-yellow-400 dark:text-yellow-500 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors duration-300 w-[78px] h-[82px] sm:w-[94px] sm:h-[98px] md:w-[110px] md:h-[115px]"
                >
                  {/* Left Laurel */}
                  <path fill="currentColor" d="M19.645 48.83c3.343-2.702 8.173-2.648 8.398-2.342 0 0-2.431 2.53-4.857 6.958-2.052 3.748-7.946 2.425-7.946 2.425s1.062-4.34 4.407-7.041z"></path>
                  <path fill="currentColor" d="M12.14 57.33c-.017 1.56-.376 3.01-.83 4.231.743-.886 1.67-1.768 2.794-2.47 3.639-2.265 8.421-1.605 8.608-1.274 0 0-2.713 2.208-5.646 6.304-2.483 3.464-8.17 1.414-8.17 1.414s.08-.21.243-.56c-.93-.881-4.163-4.27-2.744-7.67 1.945-4.669 2.416-8.178 2.416-8.178.372-.008 3.374 3.855 3.328 8.204"></path>
                  <path fill="currentColor" d="M17.591 47.675c-.046 4.351-2.758 7.864-2.758 7.864s-4.636-3.94-2.989-7.89c1.945-4.67 2.416-8.179 2.416-8.179.373-.007 3.374 3.855 3.329 8.204zM21.984 38.553c-.017 1.527-.443 2.93-.93 4.04.753-.826 1.788-1.717 3.084-2.275 2.96-1.28 6.49-.16 6.597.117 0 0-2.26 1.354-4.872 4.129-1.865 1.984-5.056.652-6.009.186-.15.216-.243.333-.243.333s-3.994-3.276-2.575-6.557c1.674-3.876 2.08-6.794 2.08-6.794.32-.006 2.908 3.202 2.868 6.816z"></path>
                  <path fill="currentColor" d="M27.129 31.07c-.016 1.485-.447 2.843-.922 3.9 1.012-.606 2.371-1.21 3.906-1.347 3.28-.293 6.381 1.943 6.4 2.25 0 0-2.622.595-6.025 2.469-2.07 1.14-4.338-.387-5.449-1.336-.076.107-.125.164-.125.164s-3.73-3.057-2.406-6.122c1.563-3.62 1.941-6.342 1.941-6.342.3-.006 2.714 2.99 2.68 6.364"></path>
                  <path fill="currentColor" d="M31.646 26.665c-.174 1.506-.837 2.8-1.423 3.685.96-.46 2.43-.98 4.035-.87 2.783.192 5.09 2.482 5.066 2.74 0 0-2.267.148-5.353 1.262-2.026.732-3.847-1.169-4.563-2.059l-.16.177s-2.87-2.922-1.488-5.384c1.635-2.908 2.194-5.168 2.194-5.168.255.025 2.023 2.77 1.697 5.613z"></path>
                  <path fill="currentColor" d="M36.568 23.736c-.3 1.033-.868 1.89-1.405 2.525.8-.252 1.835-.446 2.92-.287 2.34.34 4.148 2.426 4.114 2.644 0 0-1.926-.02-4.601.723-1.67.464-3.037-1.07-3.642-1.908q-.092.07-.094.07s-1.978-2.873-.471-4.722c1.778-2.186 2.567-3.991 2.567-3.991.21.057 1.29 2.619.614 4.946z"></path>
                  <path fill="currentColor" d="m39.076 24.48-.048.035s-1.837-2.443-.54-4.015c1.532-1.856 2.188-3.392 2.188-3.392.188.05 1.218 2.228.672 4.205-.3 1.087-.972 1.945-1.514 2.498.708-.206 1.742-.378 2.782-.109 1.856.482 3.119 2.405 3.07 2.588 0 0-1.552-.175-3.782.243-1.477.277-2.465-1.336-2.828-2.054"></path>
                  <path fill="currentColor" d="M44.122 22.129q-2.002.751-3.914 1.706a38 38 0 0 0-3.712 2.113c-2.402 1.509-4.632 3.344-6.625 5.382a39 39 0 0 0-2.822 3.214c-2.619 3.343-4.726 7.222-6.579 11.088-1.245 2.608-2.387 5.277-3.592 7.933q-.226.497-.46.994c-1.087 2.322-2.267 4.618-3.64 6.782-.788 1.241-1.612 2.47-2.51 3.627a35 35 0 0 1-2.89 3.332l-.783.774c-1.77 1.75-4.001 3.29-6.255 4.368-.09-.082-.216-.526-.12-.596 1.968-1.42 3.942-2.778 5.59-4.568l.69-.813a43 43 0 0 0 2.556-3.4c.792-1.184 1.577-2.387 2.276-3.634a87 87 0 0 0 2.069-3.767l.499-.955.49-.96q.493-.964.976-1.935c1.298-2.584 2.567-5.204 3.892-7.804.994-1.952 2.05-3.89 3.2-5.75l.29-.468a46 46 0 0 1 2.843-4.044l.696-.85a39 39 0 0 1 2.996-3.198c3.168-2.974 6.83-5.45 10.775-7.2a41 41 0 0 1 4.012-1.537z"></path>
                  <path fill="currentColor" d="m.154 72.746.541-.39c1.823-1.31 3.542-2.547 5.027-4.162l.688-.81c1-1.215 1.834-2.325 2.547-3.391.885-1.326 1.612-2.449 2.273-3.628a88 88 0 0 0 2.065-3.76l.5-.955.567-1.113q.452-.887.899-1.782.828-1.651 1.648-3.316a438 438 0 0 1 2.244-4.49c1.126-2.21 2.172-4.091 3.207-5.76.194-.312.26-.422.29-.464a45 45 0 0 1 2.85-4.058l.699-.85a40 40 0 0 1 3.007-3.208c3.25-3.052 6.885-5.48 10.807-7.224 1.31-.581 2.664-1.1 4.022-1.54l.111-.035.127.389-.107.04a41 41 0 0 0-3.904 1.702 38 38 0 0 0-3.702 2.108c-2.327 1.462-4.55 3.266-6.603 5.362-1.001 1.023-1.948 2.1-2.813 3.203-2.913 3.718-5.14 8.097-6.564 11.066-.815 1.704-1.6 3.466-2.357 5.173q-.61 1.378-1.235 2.757-.196.434-.4.86l-.063.133c-1.271 2.716-2.43 4.875-3.646 6.797-.926 1.458-1.727 2.615-2.517 3.636a35 35 0 0 1-2.898 3.345l-.783.774c-1.751 1.73-3.984 3.288-6.286 4.39l-.07.033-.056-.053c-.107-.098-.204-.432-.193-.6q0-.014.003-.026a.22.22 0 0 1 .082-.157zm6.358-3.76.783-.771a35 35 0 0 0 2.879-3.32c.786-1.017 1.584-2.167 2.504-3.62 1.213-1.91 2.366-4.061 3.63-6.766l.063-.133q.203-.429.398-.858c.417-.92.825-1.837 1.234-2.755.76-1.706 1.545-3.47 2.36-5.18 1.428-2.98 3.665-7.373 6.592-11.111a39 39 0 0 1 2.83-3.225c2.068-2.111 4.304-3.926 6.647-5.398a38 38 0 0 1 3.723-2.12c.838-.419 1.696-.811 2.563-1.171q-1.329.483-2.617 1.056c-3.895 1.73-7.51 4.146-10.74 7.179a39 39 0 0 0-2.986 3.186l-.695.848a45 45 0 0 0-2.835 4.033l-.288.465c-1.03 1.662-2.075 3.54-3.195 5.741a391 391 0 0 0-2.241 4.49 499 499 0 0 1-1.649 3.315q-.444.896-.898 1.784l-1.067 2.068a87 87 0 0 1-2.072 3.77c-.664 1.183-1.392 2.313-2.282 3.643a42 42 0 0 1-2.564 3.41l-.694.817C4.391 70 2.58 71.301.828 72.558l-.525.378c-.005.077.034.253.08.356 2.247-1.09 4.42-2.614 6.129-4.3z"></path>
                  <path fill="currentColor" d="M48.946 19.14c.09.027.136.06.16.108l.053.113-.113.052s-.864.41-2.44 2.22c-1.396 1.602-4.547 1.352-4.679 1.34l-.175-.014.083-.16c.041-.079 1.004-1.935 2.887-2.98 1.758-.978 3.804-.812 4.224-.677z"></path>

                  {/* Right Laurel */}
                  <path fill="currentColor" d="M193.967 48.83c-3.343-2.702-8.173-2.648-8.398-2.342 0 0 2.431 2.53 4.856 6.958 2.052 3.748 7.947 2.425 7.947 2.425s-1.062-4.34-4.407-7.041z"></path>
                  <path fill="currentColor" d="M201.473 57.33c.015 1.56.374 3.01.829 4.231-.743-.886-1.671-1.768-2.794-2.47-3.639-2.265-8.421-1.605-8.609-1.274 0 0 2.714 2.208 5.647 6.304 2.483 3.464 8.169 1.414 8.169 1.414s-.079-.21-.242-.56c.931-.881 4.163-4.27 2.744-7.67-1.945-4.669-2.416-8.178-2.416-8.178-.372-.008-3.374 3.855-3.328 8.204"></path>
                  <path fill="currentColor" d="M196.021 47.675c.045 4.351 2.758 7.864 2.758 7.864s4.636-3.94 2.989-7.89c-1.946-4.67-2.416-8.179-2.416-8.179-.373-.007-3.374 3.855-3.329 8.204zM191.628 38.553c.017 1.527.443 2.93.93 4.04-.753-.826-1.788-1.717-3.084-2.275-2.96-1.28-6.491-.16-6.597.117 0 0 2.26 1.354 4.872 4.129 1.865 1.984 5.056.652 6.009.186.15.216.242.333.242.333s3.995-3.276 2.576-6.557c-1.675-3.876-2.079-6.794-2.079-6.794-.322-.006-2.909 3.202-2.869 6.816z"></path>
                  <path fill="currentColor" d="M186.483 31.07c.016 1.485.446 2.843.922 3.9-1.012-.606-2.371-1.21-3.906-1.347-3.281-.293-6.381 1.943-6.399 2.25 0 0 2.621.595 6.024 2.469 2.069 1.14 4.337-.387 5.449-1.336.076.107.124.164.124.164s3.731-3.057 2.407-6.122c-1.563-3.62-1.941-6.342-1.941-6.342-.3-.006-2.714 2.99-2.68 6.364"></path>
                  <path fill="currentColor" d="M181.966 26.665c.174 1.506.837 2.8 1.423 3.685-.961-.46-2.431-.98-4.035-.87-2.783.192-5.091 2.482-5.066 2.74 0 0 2.267.148 5.353 1.262 2.026.732 3.847-1.169 4.563-2.059.098.112.16.177.16.177s2.87-2.922 1.487-5.384c-1.635-2.908-2.194-5.168-2.194-5.168-.254.025-2.022 2.77-1.696 5.613z"></path>
                  <path fill="currentColor" d="M177.044 23.736c.3 1.033.868 1.89 1.405 2.525-.801-.252-1.835-.446-2.92-.287-2.34.34-4.148 2.426-4.114 2.644 0 0 1.926-.02 4.601.723 1.67.464 3.037-1.07 3.642-1.908.059.046.094.07.094.07s1.977-2.873.471-4.722c-1.778-2.186-2.568-3.991-2.568-3.991-.209.057-1.29 2.619-.613 4.946z"></path>
                  <path fill="currentColor" d="M174.535 24.48c.03.02.048.035.048.035s1.837-2.443.54-4.015c-1.531-1.856-2.187-3.392-2.187-3.392-.188.05-1.218 2.228-.672 4.205.3 1.087.972 1.945 1.514 2.498-.708-.206-1.742-.378-2.782-.109-1.856.482-3.119 2.405-3.07 2.588 0 0 1.552-.175 3.782.243 1.477.277 2.465-1.336 2.827-2.054"></path>
                  <path fill="currentColor" d="M169.489 22.129q2.003.751 3.915 1.706a38 38 0 0 1 3.712 2.113c2.401 1.509 4.632 3.344 6.625 5.382a39 39 0 0 1 2.822 3.214c2.618 3.343 4.725 7.222 6.578 11.088 1.246 2.608 2.388 5.277 3.593 7.933q.226.497.461.994c1.086 2.322 2.266 4.618 3.639 6.782.787 1.241 1.612 2.47 2.511 3.627a35 35 0 0 0 2.889 3.332l.783.774c1.771 1.75 4.001 3.29 6.254 4.368.09-.082.217-.526.121-.596-1.968-1.42-3.943-2.778-5.59-4.568l-.69-.813a43 43 0 0 1-2.556-3.4c-.792-1.184-1.577-2.387-2.276-3.634a88 88 0 0 1-2.069-3.767l-.499-.955-.491-.96q-.492-.964-.975-1.935c-1.298-2.584-2.567-5.204-3.892-7.804-.995-1.952-2.05-3.89-3.201-5.75l-.289-.468a46 46 0 0 0-2.843-4.044l-.696-.85a40 40 0 0 0-2.996-3.198c-3.168-2.974-6.831-5.45-10.775-7.2a41 41 0 0 0-4.012-1.537z"></path>
                  <path fill="currentColor" d="m213.458 72.746-.541-.39c-1.823-1.31-3.543-2.547-5.027-4.162l-.688-.81a42 42 0 0 1-2.547-3.391c-.885-1.326-1.612-2.449-2.273-3.628a87 87 0 0 1-2.065-3.76l-.5-.955-.568-1.113q-.451-.887-.898-1.782a512 512 0 0 1-1.649-3.316 430 430 0 0 0-2.243-4.49c-1.126-2.21-2.172-4.091-3.207-5.76-.194-.312-.261-.422-.291-.464a45 45 0 0 0-2.85-4.058l-.698-.85a40 40 0 0 0-3.007-3.208c-3.251-3.052-6.886-5.48-10.807-7.224-1.31-.581-2.664-1.1-4.022-1.54l-.112-.035-.126.389.107.04a41 41 0 0 1 3.904 1.702 38 38 0 0 1 3.702 2.108c2.327 1.462 4.549 3.266 6.603 5.362a39 39 0 0 1 2.813 3.203c2.913 3.718 5.14 8.097 6.564 11.066a204 204 0 0 1 2.357 5.173q.61 1.378 1.235 2.757.196.434.4.86l.063.133c1.271 2.716 2.429 4.875 3.646 6.797.926 1.458 1.727 2.615 2.516 3.636a35 35 0 0 0 2.899 3.345l.783.774c1.751 1.73 3.984 3.288 6.286 4.39l.07.033.056-.053c.107-.098.204-.432.193-.6l-.003-.026q-.014-.108-.083-.157zm-6.359-3.76-.782-.771a35 35 0 0 1-2.879-3.32c-.786-1.017-1.584-2.167-2.504-3.62-1.213-1.91-2.366-4.061-3.631-6.766l-.062-.133a62 62 0 0 1-.398-.858c-.417-.92-.825-1.837-1.234-2.755-.761-1.706-1.545-3.47-2.361-5.18-1.428-2.98-3.664-7.373-6.592-11.111a39 39 0 0 0-2.829-3.225c-2.069-2.111-4.304-3.926-6.647-5.398a38 38 0 0 0-3.723-2.12 40 40 0 0 0-2.563-1.171c.884.321 1.759.675 2.617 1.056 3.895 1.73 7.509 4.146 10.74 7.179a39 39 0 0 1 2.985 3.186l.696.848a45 45 0 0 1 2.835 4.033l.288.465c1.029 1.662 2.075 3.54 3.195 5.741.76 1.494 1.515 3.015 2.241 4.49a509 509 0 0 0 1.649 3.315c.295.597.597 1.192.898 1.784l1.067 2.068a88 88 0 0 0 2.072 3.77c.664 1.183 1.391 2.313 2.282 3.643a42 42 0 0 0 2.564 3.41l.694.817c1.504 1.637 3.316 2.938 5.067 4.195l.525.378c.005.077-.034.253-.08.356-2.247-1.09-4.42-2.614-6.129-4.3z"></path>
                  <path fill="currentColor" d="M164.666 19.14c-.089.027-.136.06-.159.108l-.054.113.113.052s.864.41 2.441 2.22c1.395 1.602 4.545 1.352 4.677 1.34l.176-.014-.083-.16c-.041-.079-1.005-1.935-2.887-2.98-1.758-.978-3.804-.812-4.224-.677z"></path>

                  {/* Bottom Text - "Clutch" */}
                  <path fill="currentColor" d="M94.68 203h2.42v15.129h-2.42zM105.518 213.334c0 2.344-1.894 2.557-2.525 2.557-1.474 0-1.684-1.385-1.684-2.131v-5.86h-2.42v5.754c0 1.385.42 2.663 1.262 3.409.737.746 1.684 1.065 2.842 1.065.841 0 1.894-.213 2.525-.852v.852h2.42V207.9h-2.42zM112.673 204.172h-2.42v3.729h-1.789v2.344h1.789v7.884h2.42v-7.884h1.789v-2.344h-1.789zM122.038 215.039c-.526.426-1.262.746-1.999.746-1.684 0-2.841-1.279-2.841-2.983s1.157-2.877 2.841-2.877c.737 0 1.473.213 1.999.746l.316.319 1.684-1.598-.421-.319a5.36 5.36 0 0 0-3.578-1.385c-2.946 0-5.156 2.237-5.156 5.22s2.21 5.221 5.156 5.221a5.36 5.36 0 0 0 3.578-1.385l.421-.32-1.684-1.705zM132.561 208.753c-.736-.746-1.473-1.065-2.63-1.065-.842 0-1.684.213-2.315.852V203h-2.421v15.129h2.421v-5.647c0-2.344 1.578-2.557 2.209-2.557 1.473 0 1.368 1.385 1.368 2.131v5.966h2.42v-5.859c0-1.385-.315-2.664-1.052-3.41"></path>
                  <path fill="currentColor" d="M119.934 214.612c.929 0 1.683-.763 1.683-1.704 0-.942-.754-1.705-1.683-1.705-.93 0-1.684.763-1.684 1.705 0 .941.754 1.704 1.684 1.704M91.312 214.399c-.842.852-2.104 1.385-3.472 1.385-2.63 0-4.525-2.131-4.525-5.007s1.894-5.008 4.63-5.008c1.263 0 2.525.533 3.472 1.492l.316.319 1.578-1.598-.315-.319c-1.368-1.385-3.157-2.131-5.051-2.131-3.999-.107-6.945 3.09-6.945 7.245s2.946 7.351 6.84 7.351c1.894 0 3.788-.746 5.05-2.131l.316-.319-1.578-1.598z"></path>

                  {/* Circle Border */}
                  <path fill="currentColor" fillRule="evenodd" d="M139 204.984c41.78-13.497 72-52.711 72-98.984C211 48.562 164.438 2 107 2S3 48.562 3 106c0 46.641 30.703 86.111 73 99.301v2.094C32.582 194.137 1 153.757 1 106 1 47.458 48.458 0 107 0s106 47.458 106 106c0 47.389-31.098 87.515-74 101.084z" clipRule="evenodd"></path>
                </svg>

                {/* Text Content - Centered */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center" style={{ top: '-10px' }}>
                  {/* Icon at top */}
                  <div className="mb-0.5 sm:mb-1">
                    {badge.icon === "award" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 dark:text-gray-400 w-5 h-5 sm:w-6 sm:h-6">
                        <circle cx="12" cy="8" r="6"></circle>
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 dark:text-gray-400 w-5 h-5 sm:w-6 sm:h-6">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    )}
                  </div>

                  {/* Award Title */}
                  <div className="text-[8px] sm:text-[9px] font-bold text-gray-800 dark:text-gray-200 leading-tight mb-0.5 sm:mb-1 max-w-[70px] sm:max-w-[80px]">
                    {badge.title.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>

                  {/* Year/Date */}
                  <div className="text-[7px] sm:text-[8px] text-gray-600 dark:text-gray-400 font-medium">
                    {badge.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TrustBar />
    </>
  )
}

export default Hero
