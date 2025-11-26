"use client"

import React from "react"
import Head from "next/head"
import Link from "next/link"
import {
  Users,
  Star,
  Code2,
} from "lucide-react"
import Layout from "../src/components/Layout"
import Heading from "../src/components/ui/Heading"
import Paragraph from "../src/components/ui/Paragraph"
import ProjectCTA from "../src/components/ProjectCTA"
import TrustBar from "../src/components/TrustBar"
import { Poppins } from "next/font/google"
import TrustedCompanies from "@/components/TrustedCompanies"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

interface TeamMember {
  name: string
  role: string
  expertise: string[]
  avatar: string
  gradient: string
  rating: number
  reviewCount: number
}

const getGradientColors = (gradient: string) => {
  if (gradient.includes('blue-500') && gradient.includes('purple-500')) {
    return {
      start: 'rgb(59, 130, 246)',
      middle: 'rgb(168, 85, 247)',
      end: 'rgb(37, 99, 235)',
      bgStart: 'rgba(59, 130, 246, 0.05)',
      bgEnd: 'rgba(37, 99, 235, 0.05)'
    }
  }
  if (gradient.includes('indigo-500') && gradient.includes('blue-500')) {
    return {
      start: 'rgb(99, 102, 241)',
      middle: 'rgb(59, 130, 246)',
      end: 'rgb(147, 51, 234)',
      bgStart: 'rgba(99, 102, 241, 0.05)',
      bgEnd: 'rgba(147, 51, 234, 0.05)'
    }
  }
  if (gradient.includes('blue-500') && gradient.includes('cyan-500')) {
    return {
      start: 'rgb(59, 130, 246)',
      middle: 'rgb(6, 182, 212)',
      end: 'rgb(37, 99, 235)',
      bgStart: 'rgba(59, 130, 246, 0.05)',
      bgEnd: 'rgba(37, 99, 235, 0.05)'
    }
  }
  if (gradient.includes('purple-500') && gradient.includes('violet-500')) {
    return {
      start: 'rgb(168, 85, 247)',
      middle: 'rgb(139, 92, 246)',
      end: 'rgb(147, 51, 234)',
      bgStart: 'rgba(168, 85, 247, 0.05)',
      bgEnd: 'rgba(147, 51, 234, 0.05)'
    }
  }
  if (gradient.includes('green-500') && gradient.includes('emerald-500')) {
    return {
      start: 'rgb(34, 197, 94)',
      middle: 'rgb(16, 185, 129)',
      end: 'rgb(22, 163, 74)',
      bgStart: 'rgba(34, 197, 94, 0.05)',
      bgEnd: 'rgba(22, 163, 74, 0.05)'
    }
  }
  if (gradient.includes('orange-500') && gradient.includes('amber-500')) {
    return {
      start: 'rgb(249, 115, 22)',
      middle: 'rgb(245, 158, 11)',
      end: 'rgb(234, 88, 12)',
      bgStart: 'rgba(249, 115, 22, 0.05)',
      bgEnd: 'rgba(234, 88, 12, 0.05)'
    }
  }
  // Default to blue
  return {
    start: 'rgb(59, 130, 246)',
    middle: 'rgb(168, 85, 247)',
    end: 'rgb(37, 99, 235)',
    bgStart: 'rgba(59, 130, 246, 0.05)',
    bgEnd: 'rgba(37, 99, 235, 0.05)'
  }
}

const leadership: TeamMember[] = [
  {
    name: "Umar Abdullah",
    role: "Founder & CEO",
    expertise: [],
    avatar: "/assets/team/umar.png",
    gradient: "from-blue-500 via-purple-500 to-blue-600",
    rating: 5,
    reviewCount: 0,
  },
  {
    name: "M Bilal",
    role: "Co-Founder & CTO",
    expertise: [],
    avatar: "/assets/team/bilal.png",
    gradient: "from-indigo-500 via-blue-500 to-purple-600",
    rating: 5,
    reviewCount: 0,
  },
]

const teamMembers: TeamMember[] = [
  {
    name: "M Shehzad",
    role: "Senior Software Engineer",
    expertise: ["React", "Node.js", "TypeScript", "Next.js"],
    avatar: "/assets/team/shehzad.png",
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    rating: 4.9,
    reviewCount: 28,
  },
  {
    name: "Daniyal Ahmad",
    role: "Senior Full-Stack Developer",
    expertise: ["Python", "Django", "PostgreSQL", "API Design"],
    avatar: "/assets/team/danial.png",
    gradient: "from-purple-500 via-violet-500 to-purple-600",
    rating: 5.0,
    reviewCount: 32,
  },
  {
    name: "Ahmad Abdullah",
    role: "Senior UI/UX Designer",
    expertise: ["React", "UI/UX", "Tailwind CSS", "Animation"],
    avatar: "/assets/team/ahmad.png",
    gradient: "from-green-500 via-emerald-500 to-green-600",
    rating: 4.8,
    reviewCount: 25,
  },
  {
    name: "Hamza Zain",
    role: "Backend Engineer",
    expertise: ["JavaScript", "MongoDB", "Express", "React"],
    avatar: "/assets/team/hamza.jpg",
    gradient: "from-orange-500 via-amber-500 to-orange-600",
    rating: 4.9,
    reviewCount: 30,
  },
]

const TeamPage = () => {
  return (
    <Layout>
      <Head>
        <title>Our Team | Expert Developers | Entalogics</title>
        <meta
          name="description"
          content="Meet the talented team of developers at Entalogics. Our expert full-stack developers, designers, and engineers are ready to bring your vision to life."
        />
        <meta
          name="keywords"
          content="Entalogics team, development team, full-stack developers, web developers, software engineers, SaaS developers, AI developers, mobile app developers, UI UX designers, Chromium browser developers, expert developers, software development team"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Team | Expert Developers | Entalogics" />
        <meta
          property="og:description"
          content="Meet the talented team of developers at Entalogics."
        />
        <meta property="og:url" content="https://entalogics.com/team" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Team | Expert Developers | Entalogics" />

        <link rel="canonical" href="https://entalogics.com/team" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className={`bg-white dark:bg-[#0a1225] text-black dark:text-white ${poppins.className}`}>
        {/* Hero Section */}
        <section className="relative isolate w-full bg-gradient-to-br from-background dark:from-[#0a1225] to-muted/30 dark:to-[#0a1225] overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 md:pb-0 pb-0">
            <div className="text-center space-y-4 sm:space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-1 bg-primary/20 dark:bg-primary/30 rounded-full mr-2">
                  <div className="w-3 h-3 text-blue-600">
                    <Users size={12} />
                  </div>
                </div>
                <span className="text-[11px] text-blue-600 tracking-wide font-poppins">
                  Meet Our Team
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-3 sm:space-y-4">
                <Heading level={1} className="text-balance font-poppins text-[clamp(1.3rem,6vw,3.2rem)] font-extrabold leading-[1.15] tracking-tight">
                  The Talented People Behind{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Entalogics
                  </span>
                </Heading>

                <Paragraph size="sm" className="max-w-3xl mx-auto text-sm sm:text-base" center={true}>
                  We're a passionate team of developers, designers, and innovators dedicated to
                  building exceptional digital solutions. Each team member brings unique expertise
                  and a commitment to excellence.
                </Paragraph>
              </div>
            </div>
          </div>

          {/* Bottom fade - Removed for seamless transition */}
        </section>

        {/* Trust Bar Section */}
        <section className="bg-white dark:bg-[#0a1225] pb-6 sm:pb-8">
          <TrustBar showHeading={false} showDescription={true} descriptionBelow={true} noPaddingTop={true} noDescriptionGap={true} descriptionMarginTop="-mt-9" />
        </section>

        {/* Team Members Section */}
        <section className="pt-6 sm:pt-8 md:pt-9 pb-12 sm:pb-16 md:pb-20 bg-white dark:bg-[#0a1225] relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-purple-100/20 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-indigo-100/10 to-cyan-100/10 dark:from-indigo-900/5 dark:to-cyan-900/5 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <Heading level={2} className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Expert Team
                </span>
              </Heading>
              <Paragraph size="sm" className="max-w-2xl mx-auto text-sm sm:text-base" center={true}>
                Every member of our team is carefully selected for their expertise, passion, and
                dedication to delivering exceptional results.
              </Paragraph>
            </div>

            {/* Leadership Cards - Top Row (Centered) */}
            <div className="mb-6 sm:mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                <div className="hidden lg:block"></div>
                {leadership.map((member, index) => {
                  const colors = getGradientColors(member.gradient)
                  return (
                <div
                  key={`leadership-${index}`}
                  className="group relative overflow-hidden flex flex-col bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200/40 dark:border-gray-700/40 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-500 hover:-translate-y-2 text-center"
                >
                  {/* Animated background gradient */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to bottom right, transparent, ${colors.bgStart}, ${colors.bgEnd})`
                    }}
                  ></div>
                  
                  {/* Avatar with gradient ring */}
                  <div className="relative z-10 mb-4 sm:mb-6 flex justify-center">
                    <div className="relative">
                      <div 
                        className="absolute -inset-2 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(to right, ${colors.start}, ${colors.middle || colors.start}, ${colors.end})`
                        }}
                      ></div>
                      <div 
                        className="absolute -inset-1 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(to right, ${colors.start}, ${colors.middle || colors.start}, ${colors.end})`
                        }}
                      ></div>
                    <div className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                          className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-4 border-white dark:border-gray-800 shadow-lg group-hover:scale-105 transition-transform duration-300 object-cover"
                      />
                      </div>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="relative z-10 mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p 
                      className="text-xs sm:text-sm font-medium"
                      style={{
                        background: `linear-gradient(to right, ${colors.start}, ${colors.end})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {member.role}
                    </p>
                  </div>

                  {/* View Profile Button / Badge */}
                  {member.name === "Umar Abdullah" ? (
                    <Link 
                      href="/founder"
                      className="relative z-10 inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                      style={{
                        background: `linear-gradient(to right, ${colors.start}, ${colors.middle || colors.start}, ${colors.end})`
                      }}
                    >
                      Meet Founder
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ) : (
                    <div className="relative z-10 inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-md border-2"
                      style={{
                        borderColor: `${colors.start}40`,
                        color: colors.start,
                        backgroundColor: `${colors.start}08`
                      }}
                    >
                      <Code2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                      Technical Leader
                    </div>
                  )}
                </div>
                )})}
              </div>
            </div>
              
            {/* Team Members Cards - Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {teamMembers.map((member, index) => {
                const colors = getGradientColors(member.gradient)
                return (
                <div
                  key={index}
                  className="group relative overflow-hidden flex flex-col bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200/40 dark:border-gray-700/40 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-500 hover:-translate-y-2 text-center"
                >
                  {/* Animated background gradient */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to bottom right, transparent, ${colors.bgStart}, ${colors.bgEnd})`
                    }}
                  ></div>
                  
                  {/* Avatar with gradient ring */}
                  <div className="relative z-10 mb-4 sm:mb-6 flex justify-center">
                    <div className="relative">
                      <div 
                        className="absolute -inset-2 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(to right, ${colors.start}, ${colors.middle || colors.start}, ${colors.end})`
                        }}
                      ></div>
                      <div 
                        className="absolute -inset-1 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(to right, ${colors.start}, ${colors.middle || colors.start}, ${colors.end})`
                        }}
                      ></div>
                    <div className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                          className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-4 border-white dark:border-gray-800 shadow-lg group-hover:scale-105 transition-transform duration-300 object-cover"
                      />
                      </div>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="relative z-10 mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p 
                      className="text-xs sm:text-sm font-medium"
                      style={{
                        background: `linear-gradient(to right, ${colors.start}, ${colors.end})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {member.role}
                    </p>
                  </div>

                  {/* Rating System */}
                  <div className="relative z-10 mb-4">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 transition-transform duration-300 ${
                            i < Math.floor(member.rating)
                              ? "fill-yellow-400 text-yellow-400 group-hover:scale-110"
                              : i < member.rating
                              ? "fill-yellow-400/50 text-yellow-400 group-hover:scale-110"
                              : "fill-gray-300 dark:fill-gray-600 text-gray-300 dark:text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <span className="font-semibold text-gray-900 dark:text-white">{member.rating}</span>
                      <span>•</span>
                      <span>{member.reviewCount} reviews</span>
                    </div>
                  </div>
                </div>
              )})}
            </div>

            {/* Team Stats */}
            
          </div>
        </section>

       <section className="pb-8 sm:pb-12 md:pb-16">
        <TrustedCompanies/>
       </section>


        {/* CTA Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-white dark:bg-[#0a1225]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectCTA />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default TeamPage

