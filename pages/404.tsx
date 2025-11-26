import React from "react"
import Head from "next/head"
import Link from "next/link"
import { Home, ArrowLeft, Search, FileQuestion } from "lucide-react"
import Layout from "../src/components/Layout"
import { motion } from "framer-motion"

// Type assertion for motion components
const MotionDiv = motion.div as any
const MotionH2 = motion.h2 as any
const MotionP = motion.p as any

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Entalogics</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Entalogics homepage or explore our services." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://entalogics.com/404" />
      </Head>

      <Layout noPaddingTop>
        <div className="min-h-screen bg-white dark:bg-[#0a1225] flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-xl mx-auto text-center w-full">
            {/* Animated 404 Number */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="mb-4 sm:mb-6"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-none">
                404
              </h1>
            </MotionDiv>

            {/* Icon */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 sm:mb-6 flex justify-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center border border-blue-200 dark:border-blue-800">
                <FileQuestion className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400" />
              </div>
            </MotionDiv>

            {/* Title */}
            <MotionH2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3"
            >
              Page Not Found
            </MotionH2>

            {/* Description */}
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed px-2"
            >
              Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </MotionP>

            {/* Action Buttons */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-3 justify-center items-center mb-6 sm:mb-8"
            >
              <Link
                href="/"
                className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold text-sm sm:text-base rounded-lg transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full sm:w-auto justify-center"
              >
                <Home className="w-4 h-4 sm:w-4 sm:h-4" />
                <span>Go to Homepage</span>
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-600 text-gray-900 dark:text-white font-semibold text-sm sm:text-base rounded-lg transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full sm:w-auto justify-center"
              >
                <Search className="w-4 h-4 sm:w-4 sm:h-4" />
                <span>Explore Services</span>
              </Link>
            </MotionDiv>

            {/* Quick Links */}
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800"
            >
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
                Popular Pages:
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/contact-us", label: "Contact" },
                  { href: "/blog", label: "Blog" },
                  { href: "/technologies", label: "Technologies" },
                  { href: "/faqs", label: "FAQs" },
                ].map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </MotionDiv>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Custom404

