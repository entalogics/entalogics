"use client"

import React from "react"
import Head from "next/head"
import Link from "next/link"
import {
  Users,
  Rocket,
  ArrowRight,
  Lightbulb,
  Heart,
  Phone,
  Calendar,
  CheckCircle,
  Globe,
  Award,
  Briefcase,
  Star,
  Verified,
  Code2,
  TrendingUp,
  Zap,
} from "lucide-react"
import Layout from "../src/components/Layout"
import Heading from "../src/components/ui/Heading"
import Paragraph from "../src/components/ui/Paragraph"
import Button from "../src/components/ui/Button"
import CTA from "../src/components/CTA"
import HowWeDiffer from "../src/components/HowWeDiffer"
import ContraButton from "../src/components/ContraButton"
import FounderCTASection from "../src/components/FounderCTASection"
import { Poppins } from "next/font/google"
import ComparisonSectionWrapper from "@/components/parallax/comparison-section-wrapper"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

const FounderPage = () => {
  return (
    <Layout>
      <Head>
        <title>Meet the Founder | Umar Abdullah | Entalogics</title>
        <meta name="description" content="Learn about Umar Abdullah, Founder & Lead Developer at Entalogics. Discover our mission to deliver premium software development with clarity and fairness." />
        <meta name="keywords" content="Umar Abdullah, Entalogics founder, software development founder, full-stack developer, custom software agency, fair pricing software" />
        <link rel="canonical" href="https://entalogics.com/founder" />
      </Head>

      <div className={`bg-white dark:bg-[#0a1225] text-black dark:text-white ${poppins.className}`}>
        {/* Hero Section */}
        <section className="relative isolate w-full bg-white dark:bg-[#0a1225] overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-24">
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-4 md:space-y-6 text-center md:text-left">
                <Heading 
                  level={1}
                  className="text-balance font-poppins !leading-tight"
                >
                  Meet <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Umar Abdullah</span>
                </Heading>

                <div className="space-y-3 md:space-y-4">
                  <div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    Founder & Lead Developer at{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Entalogics
                    </span>
                  </div>
                  
                  <Paragraph size="sm" className="text-pretty font-poppins text-sm md:text-base text-gray-600 dark:text-gray-400" center={false}>
                    At Entalogics, we skip the agency overhead. Work directly with <span className="text-blue-600 dark:text-blue-400 font-semibold">senior developers</span> who've built products scaling to $40M+ ARR. <span className="text-purple-600 dark:text-purple-400 font-semibold">Fair pricing</span> with no hidden fees, no project managers, no layers. Just quality code delivered on time.
                  </Paragraph>
                </div>

                {/* Key Highlights */}
                <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">11+ Years</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">600+ Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">100% Satisfaction</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full md:w-auto">
                  <div className="w-full sm:w-auto">
                    <ContraButton />
                  </div>
                  <button
                    data-cal-link="entalogics/30min"
                    data-cal-namespace="30min"
                    data-cal-config='{"layout":"month_view","theme":"auto"}'
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 md:px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule a Call
                  </button>
                </div>

                {/* Badges Below Buttons */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 pt-3">
                  {/* Available for Hire Badge */}
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 border border-emerald-500/30 dark:border-emerald-500/40 shadow-sm hover:shadow-md transition-all animate-pulse">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse"></div>
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400 tracking-wide font-medium">Available</span>
                  </div>

                  {/* Top Rated Badge */}
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-500/20 dark:to-orange-500/20 border border-yellow-500/30 dark:border-yellow-500/40 shadow-sm hover:shadow-md transition-all">
                    <Star className="w-3.5 h-3.5 text-yellow-600 dark:text-yellow-400 mr-1.5 fill-yellow-600 dark:fill-yellow-400" />
                    <span className="text-[11px] text-yellow-600 dark:text-yellow-400 tracking-wide font-medium">Top Rated</span>
                  </div>
                  
                  {/* Verified Developer Badge */}
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 border border-green-500/30 dark:border-green-500/40 shadow-sm hover:shadow-md transition-all">
                    <Verified className="w-3.5 h-3.5 text-green-600 dark:text-green-400 mr-1.5" />
                    <span className="text-[11px] text-green-600 dark:text-green-400 tracking-wide font-medium">Verified</span>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative mt-4 md:mt-0">
                {/* Rating Badge */}
                <div className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 lg:-bottom-4 lg:-left-4 z-10 bg-white dark:bg-gray-800 px-2 py-2 md:px-3 md:py-2.5 lg:px-4 lg:py-3 rounded-md shadow-2xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-1 md:gap-1.5 lg:gap-2">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-yellow-400 fill-yellow-400" />
                      <Star className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-yellow-400 fill-yellow-400" />
                      <Star className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-yellow-400 fill-yellow-400" />
                      <Star className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-yellow-400 fill-yellow-400" />
                      <Star className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-yellow-400 fill-yellow-400" />
                    </div>
                    <span className="text-xs md:text-xs lg:text-sm font-bold text-gray-700 dark:text-gray-300">5.0</span>
                  </div>
                  <p className="text-[10px] md:text-[10px] lg:text-xs text-gray-600 dark:text-gray-400 mt-1">Client Rating</p>
                </div>

                <div className="relative overflow-hidden rounded-md bg-white dark:bg-gray-800 border-2 border-border/50 dark:border-gray-600/50 shadow-2xl">
                  <div className="relative h-[300px] md:h-[450px] lg:h-[500px]">
                    <img
                      src="/umar.png"
                      alt="Umar Abdullah - Founder & Lead Developer"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Story Section */}
        <section className="py-8 sm:py-12 bg-white dark:bg-[#0a1225] relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="space-y-8">
              <div>
                <Heading level={2} className="mb-6">
                  The Story Behind <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Entalogics</span>
                </Heading>
                
                <div className="space-y-4">
                  <Paragraph size="sm">
                    Hi, I'm <a href="https://pk.linkedin.com/in/chromiumexpert" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline">Umar Abdullah</a>. 
                  </Paragraph>
                  
                  <Paragraph size="sm">
                    I was just another developer frustrated by how broken the agency model was. Clients paying $150/hour to talk to a project manager, who then talked to another manager, who finally passed it to a junior dev making $20/hour. The math never added up.
                  </Paragraph>

                  <Paragraph size="sm">
                    I watched founders pour their life savings into projects that dragged on for months, charged for every code review, every meeting, every "change request." Hidden fees everywhere. <strong className="text-blue-600 dark:text-blue-400">It felt wrong.</strong>
                  </Paragraph>

                  <Paragraph size="sm">
                    So in 2023, I said screw it. I started Entalogics with one rule: <strong className="text-purple-600 dark:text-purple-400">work directly with senior developers. No layers. No markup. Just quality code at fair prices.</strong>
                  </Paragraph>

                  <Paragraph size="sm">
                    Fast forward — we've built 600+ products, scaled companies to $40M+ ARR, and helped founders launch everything from custom Chromium browsers to AI SaaS platforms. But here's what hasn't changed: <strong className="text-green-600 dark:text-green-400">we still believe software shouldn't cost a fortune.</strong>
                  </Paragraph>
                </div>
              </div>

              {/* Quote Section */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-md p-8 text-center text-white shadow-xl">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <blockquote className="text-xl font-medium leading-relaxed mb-4 italic">
                  "I made Entalogics so you, the client, get senior-level expertise at fair pricing. No hidden fees. No middle-men. Just direct collaboration and quality you can trust."
                </blockquote>
                <cite className="text-sm font-medium not-italic opacity-90">
                  — Umar Abdullah, Founder & Lead Developer
                </cite>
              </div>

              {/* Why Top 1% Section */}
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30 border border-blue-200 dark:border-blue-800 rounded-md p-6 sm:p-8">
                <Heading level={3} className="mb-6 text-2xl">
                  Why We're in the <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Top 1%</span>
                </Heading>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground dark:text-white mb-2">
                          We Scale Companies to $40M+ ARR
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                          Not just code — we build systems that grow. We've helped 33+ products launch and scale to millions in revenue. Our code doesn't just work; it scales.
                    </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <Code2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground dark:text-white mb-2">
                          Senior Developers, Not Junior Teams
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                          You work directly with developers who've been coding for 10+ years. No project managers, no account executives — just skilled engineers who write clean, maintainable code.
                    </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground dark:text-white mb-2">
                          Top Rated on Every Platform
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                          Top Rated Plus on Upwork. Featured on Clutch. Recognized by GoodFirms. 5.0 stars across the board. Our clients don't just like us — they love us enough to come back for project #2, #3, and beyond.
                    </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground dark:text-white mb-2">
                          We Build What Others Don't Dare
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                          Custom Chromium browsers? We've done it. AI agents that actually work? Built them. Complex SaaS platforms that handle millions of users? That's our daily. Most agencies say no. We say "let's figure it out."
                    </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* How We're Different - Before CTA */}
        <section className="relative bg-transparent pt-12 md:pt-5 lg:pt-5 xl:pt-5">
          <ComparisonSectionWrapper />
        </section>

        {/* Main Story Section Continued */}
        <FounderCTASection />

      </div>
    </Layout>
  )
}

export default FounderPage


