"use client"

import React, { useState, useEffect, useRef } from "react"
import Head from "next/head"
import Link from "next/link"
import { Rocket, Eye, Users, Heart } from "lucide-react"
import Layout from "../src/components/Layout"
import Heading from "../src/components/ui/Heading"
import Paragraph from "../src/components/ui/Paragraph"
import TrustedCompanies from "../src/components/TrustedCompanies"
import FAQ from "../src/components/FAQ"
import FounderCTASection from "../src/components/FounderCTASection"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

const MissionVisionContent = () => {
  const [activeTab, setActiveTab] = useState("mission")

  const tabs = [
    {
      id: "mission",
      title: "Our Mission",
      icon: Rocket,
    },
    {
      id: "vision",
      title: "Our Vision",
      icon: Eye,
    },
    {
      id: "commitment",
      title: "Our Commitment",
      icon: Users,
    },
    {
      id: "values",
      title: "Core Values",
      icon: Heart,
    },
  ]

  const content = {
    mission: {
      title: "Our Mission",
      paragraphs: [
        "Our mission is simple: deliver premium software development with clarity and fairness. We started Entalogics because we were tired of seeing founders pay premium rates to talk to managers who then passed work to junior developers. That's not how it should work.",
        "Today, we connect you directly with senior developers who've built products scaling to $40M+ ARR. No layers. No markup. Just quality code at fair prices. We build custom Chromium browsers, AI-powered SaaS platforms, full-stack apps, and mobile applications — but we never forget that great software shouldn't cost a fortune."
      ]
    },
    vision: {
      title: "Our Vision",
      paragraphs: [
        "We want to change how software development works. Not with flashy offices or big teams, but with real developers building real products. We envision a world where founders can launch their ideas without burning through their funding on agency overhead.",
        "Our vision? Become the go-to partner for founders who need senior-level expertise without the enterprise price tag. We're building the anti-agency — lean, direct, and focused on what actually matters: code that works, scales, and doesn't break the bank."
      ]
    },
    commitment: {
      title: "Our Commitment",
      paragraphs: [
        "We are committed to maintaining the highest standards of transparency, quality, and ethical practices in everything we do. Every project receives our full attention, from initial concept to deployment and ongoing maintenance.",
        "Our commitment extends to fair pricing with no hidden fees, direct collaboration with senior developers, and unwavering support throughout your project lifecycle. We believe in building long-term partnerships based on trust, quality, and mutual success."
      ]
    },
    values: {
      title: "Core Values",
      paragraphs: [
        "Transparency. Quality. Fairness. These aren't buzzwords for us — they're how we've operated since day one. We believe in honest communication (no surprises), clean code (code you can actually maintain), and fair pricing (you pay for talent, not overhead).",
        "We're always learning. Technology changes fast, and so do we. But what never changes is our commitment to building products that actually work, scale, and deliver real value. We're not here to sell you hours. We're here to build solutions that make your business better."
      ]
    },
  }

  const activeContent = content[activeTab as keyof typeof content]

  return (
    <div className="grid grid-cols-1 md:grid-cols-[28%_72%] gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 items-start">
      {/* Left Column - Navigation Menu */}
      <div className="space-y-4 sm:space-y-5">
        {tabs.map((tab) => {
          const IconComponent = tab.icon
          const isActive = activeTab === tab.id
          return (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative rounded-md p-4 flex items-center gap-3 cursor-pointer transition-all duration-300 ${
                isActive 
                  ? 'bg-blue-50 dark:bg-blue-900/20' 
                  : 'bg-white dark:bg-gray-800'
              }`}
              style={{
                height: '65px',
                borderRadius: '12px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Icon - Circular white background with red border */}
              <div 
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-blue-600 ${
                  isActive 
                    ? 'bg-white dark:bg-gray-700' 
                    : 'bg-white dark:bg-gray-700'
                }`}
              >
                <IconComponent className="w-5 h-5 text-blue-600" />
              </div>

              {/* Text */}
              <span 
                className={`font-bold text-left flex-1 ${
                  isActive 
                    ? 'text-blue-600' 
                    : 'text-black dark:text-white'
                }`}
                style={{
                  fontSize: '16px'
                }}
              >
                {tab.title}
              </span>
            </div>
          )
        })}
      </div>

      {/* Right Column - Content Area */}
      <div className="pt-0">
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-black dark:text-white mb-4 sm:mb-5 md:mb-6 text-left"
          style={{
            fontWeight: 700,
            lineHeight: '1.2'
          }}
        >
          {activeContent.title}
        </h2>
        <div className="space-y-4 text-left">
          {activeContent.paragraphs.map((paragraph, index) => (
            <p 
              key={index}
              className="text-sm sm:text-base leading-relaxed text-black dark:text-white"
              style={{
                lineHeight: '1.6'
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

// Animated Stats Component
const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  const stats = [
    { value: 600, suffix: "+", label: "Complete Projects" },
    { value: 600, suffix: "+", label: "Happy Clients" },
    { value: "11 to 50", suffix: "", label: "Expert Team" },
    { value: 11, suffix: "+", label: "Success Years" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  const AnimatedNumber = ({ target, suffix }: { target: number | string; suffix: string }) => {
    const [count, setCount] = useState(0)
    const isNumber = typeof target === "number"

    useEffect(() => {
      if (!isVisible || !isNumber) return

      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = (target as number) / steps
      let current = 0
      let step = 0

      const timer = setInterval(() => {
        step++
        current = Math.min(increment * step, target as number)
        setCount(Math.floor(current))

        if (step >= steps) {
          setCount(target as number)
          clearInterval(timer)
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, [isVisible, target, isNumber])

    if (!isNumber) {
      return (
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
          {target}
        </span>
      )
    }

    return (
      <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
        {isVisible ? count : 0}
        {suffix}
      </span>
    )
  }

  return (
    <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pt-6 md:pt-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="group relative p-4 sm:p-5 md:p-6 rounded-xl bg-white dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-700/50 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10"
        >
          <div className="relative text-center">
            <div className="mb-2 sm:mb-3 min-h-[40px] sm:min-h-[50px] md:min-h-[60px] flex items-center justify-center">
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-xs sm:text-sm font-medium text-black dark:text-white/80 tracking-tight leading-tight">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const AboutPage = () => {




  return (
    <Layout>
      <Head>
        <title>About Us | Full-Stack Development Team | Entalogics</title>
        <meta name="description" content="Entalogics is a software development company serving clients worldwide. We specialize in custom Chromium browsers, AI SaaS platforms, full-stack web applications, and mobile apps. With 600+ completed projects and 11+ years of experience, we deliver premium software solutions with transparency and fairness." />
        <meta name="keywords" content="about Entalogics, software development company, full-stack developers, AI development team, SaaS development experts, Chromium browser developers, custom browser development, web development team, mobile app developers, UAE software company, software development UAE, enterprise software solutions, custom software development" />
        <meta name="author" content="Entalogics" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="United Arab Emirates" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us | Full-Stack Development Team | Entalogics" />
        <meta property="og:description" content="Entalogics is a software development company serving clients worldwide. We specialize in custom Chromium browsers, AI SaaS platforms, and full-stack applications. Learn about our mission, values, and expertise." />
        <meta property="og:image" content="https://entalogics.com/assets/about-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Entalogics - Software Development Company" />
        <meta property="og:url" content="https://entalogics.com/about" />
        <meta property="og:site_name" content="Entalogics" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Full-Stack Development Team | Entalogics" />
        <meta name="twitter:description" content="Entalogics is a software development company serving clients worldwide. Specializing in custom Chromium browsers, AI SaaS platforms, and full-stack applications." />
        <meta name="twitter:image" content="https://entalogics.com/assets/about-og.jpg" />
        <meta name="twitter:image:alt" content="Entalogics - Software Development Company" />
        <meta name="twitter:creator" content="@entalogics" />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://entalogics.com/about" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Entalogics",
              "url": "https://entalogics.com",
              "logo": "https://entalogics.com/logo.svg",
              "description": "Entalogics is a top software development company serving clients worldwide. We specialize in custom Chromium browsers, AI SaaS platforms, full-stack web applications, and mobile apps. Serving 50+ countries including USA (all 50 states), UK (all regions), Canada, Australia, Germany, France, and globally.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Worldwide"
              },
              "areaServed": [
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "United Kingdom" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Country", "name": "Australia" },
                { "@type": "Country", "name": "Worldwide" }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/entalogics",
                "https://twitter.com/entalogics"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "availableLanguage": "English"
              }
            })
          }}
        />
        
        {/* Structured Data - About Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About Entalogics",
              "description": "Learn about Entalogics software development company, our mission, vision, and commitment to delivering premium software solutions with transparency and fairness.",
              "url": "https://entalogics.com/about",
              "mainEntity": {
                "@type": "Organization",
                "name": "Entalogics",
                "numberOfEmployees": {
                  "@type": "QuantitativeValue",
                  "value": "11-50"
                },
                "foundingDate": "2023",
                "description": "Software development company specializing in custom Chromium browsers, AI SaaS platforms, and full-stack applications."
              }
            })
          }}
        />
      </Head>

      <div className={`bg-white dark:bg-[#0a1225] text-black dark:text-white ${poppins.className}`}>
        {/* Hero Section - Pixel Perfect Match */}
        <section className="relative w-full bg-white dark:bg-[#0a1225] overflow-hidden">
      

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
              {/* Left Content - Text Block */}
              <div className="space-y-6 md:space-y-8">
                {/* WHO WE ARE Label */}
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 flex-shrink-0"
                    style={{
                      backgroundColor: '#2563eb',
                      borderRadius: '2px'
                    }}
                  ></div>
                  <span 
                    className="text-sm font-bold uppercase tracking-wide"
                    style={{
                      color: '#2563eb',
                      fontSize: '14px',
                      letterSpacing: '0.05em'
                    }}
                  >
                    WHO WE ARE
                  </span>
              </div>
              
                {/* Main Heading */}
                <h1 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-black dark:text-white"
                  style={{
                    lineHeight: '1.2',
                    fontWeight: 700
                  }}
                >
                  We are a software company serving clients worldwide.
                </h1>
              
                {/* First Paragraph */}
                <p 
                  className="text-sm sm:text-base leading-relaxed text-black dark:text-white"
                  style={{
                    lineHeight: '1.6'
                  }}
                >
                  We are a team of top talent delivering enterprise solutions globally. we evolve with the advancement in technology because we believe in making our technology as your innovation.
                </p>

                {/* Second Paragraph */}
                <p 
                  className="text-sm sm:text-base leading-relaxed text-black dark:text-white mt-4 sm:mt-5"
                  style={{
                    lineHeight: '1.6'
                  }}
                >
                  Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions and cloud development. We stay updated with the technology to build innovative digital products that meet client requirements across multiple business verticals and domains by housing some of the best professionals in the industry.
                </p>
                </div>

              {/* Right Visual - Building Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="./about.png"
                    alt="Entalogics Office Building"
                    className="w-full h-auto object-cover rounded-lg"
                    style={{
                      maxHeight: '600px',
                      width: '100%',
                      borderRadius: '12px'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Section - About Company */}
        <section className="relative w-full overflow-hidden bg-gray-50 dark:bg-[#0a1225]">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
            <div className="grid grid-cols-1 md:grid-cols-[28%_72%] gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start">
              {/* Left Column - 25-30% width */}
              <div className="space-y-4">
                {/* ABOUT ENTALOGICS? Label */}
                <div>
                  <h2 
                    className="text-sm font-bold uppercase tracking-wider"
                    style={{
                      color: '#2563eb',
                      fontSize: '14px',
                      letterSpacing: '0.1em',
                      marginBottom: '16px'
                    }}
                  >
                    ABOUT ENTALOGICS?
                  </h2>
              </div>
              
                {/* The Entalogics Heading */}
                <h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black dark:text-white"
                  style={{
                    lineHeight: '1.1',
                    fontWeight: 700
                  }}
                >
                  The Entalogics
                </h1>
            </div>

              {/* Right Column */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                {/* Main Heading */}
                <h3 
                  className="text-lg sm:text-xl md:text-2xl font-bold leading-snug text-black dark:text-white"
                  style={{
                    fontWeight: 700,
                    lineHeight: '1.4'
                  }}
                >
                  Entalogics is a full-service software development company serving clients worldwide.
                </h3>

                {/* First Paragraph */}
                <p 
                  className="text-sm sm:text-base leading-relaxed text-black dark:text-white"
                  style={{
                    lineHeight: '1.6'
                  }}
                >
                  We started Entalogics in 2023 because we saw too many founders getting burned by agencies that charged premium prices for junior work. <strong className="text-blue-600 dark:text-blue-400">So we did something different.</strong> We built a team of senior developers who work directly with clients — no project managers, no account executives, no layers that add cost without value.
                </p>
                
                <p 
                  className="text-sm sm:text-base leading-relaxed text-black dark:text-white mt-4"
                  style={{
                    lineHeight: '1.6'
                  }}
                >
                  Today, we've built 600+ products and helped scale companies to $40M+ ARR. We specialize in custom Chromium browsers, AI-powered SaaS platforms, full-stack web apps, and mobile applications. But what hasn't changed is our core belief: <strong className="text-purple-600 dark:text-purple-400">great software shouldn't cost a fortune.</strong>
                </p>

                {/* Second Paragraph - Call to Action */}
                <p 
                  className="text-sm sm:text-base leading-relaxed text-black dark:text-white mt-4 sm:mt-5"
                  style={{
                    lineHeight: '1.6'
                  }}
                >
                  To learn more about our approach to business and work, feel free to hop on over to our{" "}
                    <Link 
                    href="/contact-us"
                    className="text-black dark:text-blue-400 hover:underline"
                    style={{
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textDecoration = 'underline'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textDecoration = 'none'
                    }}
                  >
                    Open Contact Page
                  </Link>
                  .
                </p>

                {/* Statistics Section */}
                <StatsSection />
              </div>
            </div>
          </div>
        </section>






        

        
        

        {/* HONORS - Awards & Achievements Section */}
        <section className="relative w-full bg-white dark:bg-[#0a1225] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-[28%_72%] gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
              {/* Left Column - Headings */}
              <div className="text-left">
                {/* HONORS Label */}
                <div 
                  className="text-sm font-bold uppercase tracking-wider mb-3"
                  style={{
                    color: '#2563eb',
                    fontSize: '14px',
                    letterSpacing: '0.1em'
                  }}
                >
                  HONORS
                </div>
                {/* Awards & Achievements Heading - Stacked on two lines */}
                <h2 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black dark:text-white"
                  style={{
                    lineHeight: '1.2',
                    fontWeight: 700
                  }}
                >
                  Awards &<br />Achievements
                </h2>
              </div>

              {/* Right Column - Award Badges Grid - 2x2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {[
                  {
                    title: "Top App\nDevelopment\nCompany",
                    subtitle: "Tallinn 2025",
                    icon: "award",
                    description: "Recognized for excellence in mobile and web application development, delivering innovative solutions that exceed client expectations and industry standards."
                  },
                  {
                    title: "Top Company\nNext.js Developer",
                    subtitle: "2025",
                    icon: "verified",
                    description: "Awarded for outstanding expertise in Next.js development, building high-performance, scalable web applications with modern React frameworks."
                  },
                  {
                    title: "Top Software\nTesting Company",
                    subtitle: "2025",
                    icon: "award",
                    description: "Acknowledged for comprehensive quality assurance practices, ensuring robust, bug-free software solutions through rigorous testing methodologies."
                  },
                  {
                    title: "Global\nAward",
                    subtitle: "Spring 2025",
                    icon: "award",
                    description: "Honored for global impact in software development, serving clients worldwide with custom Chromium browsers, AI integrations, and enterprise solutions."
                  },
                ].map((badge, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
                    style={{
                      borderRadius: '12px'
                    }}
                  >
                    {/* Badge SVG - Exact copy from services slug page */}
                    <div className="mb-5 sm:mb-6 relative flex items-center justify-start">
                      <div className="relative" style={{ width: '90px', height: '95px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="135" viewBox="0 0 214 221" fill="none" className="text-yellow-400 dark:text-yellow-500 w-full h-full">
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
                        {/* Text Content - Centered inside SVG */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center" style={{ top: '-6px' }}>
                          {/* Icon at top */}
                          <div className="mb-0.5">
                            {badge.icon === "award" ? (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white w-4 h-4 sm:w-5 sm:h-5">
                                <circle cx="12" cy="8" r="6"></circle>
                                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white w-4 h-4 sm:w-5 sm:h-5">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                            )}
                          </div>
                          {/* Award Title */}
                          <div className="text-[8px] sm:text-[9px] font-bold text-black dark:text-white leading-tight mb-0.5 max-w-[75px] sm:max-w-[80px]">
                            {badge.title.split('\n').map((line, i) => (
                              <div key={i}>{line}</div>
                            ))}
                          </div>
                          {/* Year/Date */}
                          <div className="text-[7px] sm:text-[8px] text-black dark:text-white font-medium">
                            {badge.subtitle}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Badge Title - Left Aligned, Bold */}
                    <h3 
                      className="text-base sm:text-lg md:text-xl font-bold mb-4 text-black dark:text-white text-left"
                      style={{
                        fontWeight: 700,
                        lineHeight: '1.3'
                      }}
                    >
                      {badge.title.split('\n').join(' ')}
                    </h3>

                    {/* Badge Description - Left Aligned */}
                    <p 
                      className="text-sm sm:text-base leading-relaxed text-black dark:text-white text-left"
                      style={{
                        fontSize: '16px',
                        lineHeight: '1.6'
                      }}
                    >
                      {badge.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Vision Commitment Values Section */}
        <section className="relative w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50 dark:bg-[#0a1225]">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MissionVisionContent />
          </div>
        </section>

        {/* Transparency and Ethics Section */}
        <section className="relative w-full bg-white dark:bg-[#0a1225] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black dark:text-white mb-3 sm:mb-4"
                style={{
                  fontSize: 'clamp(1.875rem, 4vw, 3rem)',
                  fontWeight: 700,
                  lineHeight: '1.2'
                }}
              >
                Transparency and Ethics
              </h2>
              <p 
                className="text-sm sm:text-base md:text-lg text-black dark:text-white max-w-2xl mx-auto"
                style={{
                  lineHeight: '1.6'
                }}
              >
                We are committed to maintaining the highest standards of transparency and ethical practices in everything we do.
              </p>
            </div>

            {/* Cards Grid - 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  title: "Code Quality",
                  description: "We maintain strict code quality standards ensuring every line of code is clean, efficient, and maintainable.",
                  icon: "code"
                },
                {
                  title: "Data Privacy",
                  description: "Your data security is our priority. We follow industry best practices to protect all client information.",
                  icon: "shield"
                },
                {
                  title: "Fair Pricing",
                  description: "Transparent pricing with no hidden costs. We believe in fair and honest business practices.",
                  icon: "dollar"
                },
                {
                  title: "Employee Benefits",
                  description: "Our software house has been recognised by google for outstanding android application quality.",
                  icon: "people"
                },
                {
                  title: "Open Communication",
                  description: "We believe in transparent communication with regular updates and open dialogue with our clients.",
                  icon: "chat"
                },
                {
                  title: "Ethical Practices",
                  description: "We adhere to ethical standards in all business dealings, ensuring integrity and trust.",
                  icon: "check"
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="relative bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-200 dark:border-gray-700"
                  style={{
                    borderRadius: '12px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  {/* Icon Container - Positioned top-left, overlapping card edge */}
                  <div 
                    className="absolute top-0 left-4 sm:left-5 md:left-6 w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-sm md:shadow-md -translate-y-4 md:-translate-y-5"
                    style={{
                      borderRadius: '10px'
                    }}
                  >
                    {card.icon === "people" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-600 dark:text-blue-400">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    ) : card.icon === "code" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-purple-600 dark:text-purple-400">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    ) : card.icon === "shield" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-600 dark:text-blue-400">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    ) : card.icon === "dollar" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-purple-600 dark:text-purple-400">
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    ) : card.icon === "chat" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-600 dark:text-blue-400">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-600 dark:text-blue-400">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    )}
                  </div>

                  {/* Content - with top padding for icon */}
                  <div className="pt-10 sm:pt-11 md:pt-12">
                    {/* Title */}
                    <h3 
                      className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-2.5 md:mb-3 text-black dark:text-white text-left"
                      style={{
                        fontWeight: 700,
                        lineHeight: '1.3'
                      }}
                    >
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="text-xs sm:text-sm md:text-base text-left leading-relaxed text-black dark:text-white"
                      style={{
                        lineHeight: '1.6'
                      }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-gray-50 dark:bg-[#0a1225]">
          <div className="">
            <FAQ showCta={false} />
          </div>
        </section>

        {/* Trusted Companies Section */}
        <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20 bg-white dark:bg-[#0a1225]">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <TrustedCompanies />
          </div>
        </section>

        {/* CTA Section */}
        <FounderCTASection />
      </div>
    </Layout>
  )
}

export default AboutPage