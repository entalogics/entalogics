"use client"
import { motion } from "framer-motion"
import { ArrowRight, Globe, UserCheck, Lock, Shield } from "lucide-react"
import TrustBar from "./TrustBar"
import Link from "next/link"
import Image from "next/image"
import { Sora, Inter, Poppins } from "next/font/google"
import Button from "./ui/Button"
import Paragraph from "./ui/Paragraph"
import Heading from "./ui/Heading"

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "800"], display: "swap" })
const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "800", "900"], display: "swap" })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "800", "900"], display: "swap" })

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className={`relative isolate w-full  overflow-hidden !overflow-y-visible flex flex-col items-center justify-center pt-32 md:py-32 lg:py-40   px-4 subtle-grid-background !pb-0 ${sora.className}`}
      >
        {/* Blurred background circles for RozmeriGPT effect - CONTAINED to hero only */}

        {/* Main Content Container - no z-index needed here now */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
          {/* Badge */}
          <div className="mb-6 md:mb-8">
            <span className="relative inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-700 shadow transition-all duration-300">
              Full-Stack Development, Backed by Logic
            </span>
          </div>
          {/* Main heading with gradient only on 'Scalable Product' */}
          <Heading level={1}
            className={`relative text-[clamp(1.3rem,6vw,3.2rem)] font-extrabold leading-[1.15] mb-4 md:mb-7 tracking-tight text-black dark:text-white ${poppins.className}`}
          >
            From Idea to{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Scalable Product
            </span>
            <br />
            We Build What Others
            <br />
            Don’t Dare To.
          </Heading>
          {/* Subtitle */}
          <Paragraph size="sm" className="mb-8 md:mb-12 max-w-3xl mx-auto">
            We're your full-stack product development partner for startups, scaleups, and innovators. Whether it's SaaS,
            AI platforms, Custom Chromium Browsers, or Web3 apps — we engineer and launch with precision, speed, and
            business logic.
          </Paragraph>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-6">
            <Link href="/contact">
              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto min-w-[200px]"
                icon={
                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.2, ease: "easeInOut" }}
                    style={{ display: "inline-flex" }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                }
                iconPosition="right"
              >
                Start your project
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="secondary" size="md" className="w-full sm:w-auto min-w-[200px]">
                Why choose us
              </Button>
            </Link>
          </div>
          {/* Trust Bar: Enterprise-Polish, Single Line */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/40 rounded-full text-xs font-medium text-green-700 dark:text-green-400">
              <Shield className="w-3 h-3" />
              NDA Friendly
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/40 rounded-full text-xs font-medium text-blue-700 dark:text-blue-400">
              <Lock className="w-3 h-3" />
              SSL Secure
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700/40 rounded-full text-xs font-medium text-purple-700 dark:text-purple-400">
              <Globe className="w-3 h-3" />
              100+ Projects Delivered
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/40 rounded-full text-xs font-medium text-yellow-700 dark:text-yellow-400">
              <UserCheck className="w-3 h-3" />
              Top-Rated Plus Agency
            </div>
          </div>
        </div>

        {/* Tech Icons Row - improved theme matching */}
        <div className="sm:flex hidden flex-wrap justify-center items-center gap-4 mt-10 mb-2">
          {[
            { src: "/assets/tech-icons/figma.svg", alt: "Figma" },
            { src: "/assets/tech-icons/flutter.svg", alt: "Flutter" },
            { src: "/assets/tech-icons/graphql.svg", alt: "GraphQL" },
            { src: "/assets/tech-icons/nextjs.svg", alt: "Next.js" },
            { src: "/assets/tech-icons/nodejs.svg", alt: "Node.js" },
            { src: "/assets/tech-icons/python.svg", alt: "Python" },
            { src: "/assets/tech-icons/react.svg", alt: "React" },
            { src: "/assets/tech-icons/tailwindcss.svg", alt: "Tailwind CSS" },
            { src: "/assets/tech-icons/typescript.svg", alt: "TypeScript" },
            { src: "/assets/tech-icons/docker.svg", alt: "Docker" },
            { src: "/assets/tech-icons/postgresql.svg", alt: "PostgreSQL" },
          ].map((icon) => (
            <div
              key={icon.alt}
              className="bg-white/70 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700/40 rounded-xl p-3 flex items-center justify-center backdrop-blur-md shadow-md transition-all duration-300 w-14 h-14 mx-auto"
            >
              <Image
                src={icon.src || "/placeholder.svg"}
                alt={icon.alt}
                width={40}
                height={40}
                className="w-10 h-10 filter invert-0 dark:invert"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          ))}
        </div>
        {/* Mobile: horizontal scrollable row, tiny icons */}
        <div
          className="hidden sm:hidden gap-2 mt-10 mb-2 overflow-x-auto px-1"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {[
            { src: "/assets/tech-icons/figma.svg", alt: "Figma" },
            { src: "/assets/tech-icons/flutter.svg", alt: "Flutter" },
            { src: "/assets/tech-icons/graphql.svg", alt: "GraphQL" },
            { src: "/assets/tech-icons/nextjs.svg", alt: "Next.js" },
            { src: "/assets/tech-icons/nodejs.svg", alt: "Node.js" },
            { src: "/assets/tech-icons/python.svg", alt: "Python" },
            { src: "/assets/tech-icons/react.svg", alt: "React" },
            { src: "/assets/tech-icons/tailwindcss.svg", alt: "Tailwind CSS" },
            { src: "/assets/tech-icons/typescript.svg", alt: "TypeScript" },
            { src: "/assets/tech-icons/docker.svg", alt: "Docker" },
            { src: "/assets/tech-icons/postgresql.svg", alt: "PostgreSQL" },
          ].map((icon) => (
            <div
              key={icon.alt}
              className="bg-white/70 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700/40 rounded-xl p-0.5 flex items-center justify-center backdrop-blur-md shadow-md transition-all duration-300 w-8 h-8 flex-shrink-0"
            >
              <Image
                src={icon.src || "/placeholder.svg"}
                alt={icon.alt}
                width={28}
                height={28}
                className="w-7 h-7 filter invert-0 dark:invert"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </section>
      <TrustBar />
    </>
  )
}

export default Hero
