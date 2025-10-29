"use client"

import React from "react"
import Head from "next/head"
import Link from "next/link"
import {
  Users,
  ArrowRight,
  Award,
  Heart,
  CheckCircle,
  Lightbulb,
  Star,
} from "lucide-react"
import Layout from "../src/components/Layout"
import Heading from "../src/components/ui/Heading"
import Paragraph from "../src/components/ui/Paragraph"
import Button from "../src/components/ui/Button"
import TrustedCompanies from "../src/components/TrustedCompanies"
import FAQ from "../src/components/FAQ"
import CTA from "../src/components/CTA"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})


const AboutPage = () => {




  return (
    <Layout>
      <Head>
        <title>About Us | Full-Stack Development Team | Entalogics</title>
        <meta name="description" content="Meet the Entalogics team of expert full-stack developers. We specialize in AI SaaS platforms, web applications, mobile apps, and custom Chromium browser development. Learn about our mission and expertise." />
        <meta name="keywords" content="about Entalogics, development team, full-stack developers, AI development team, SaaS development experts, Chromium browser developers, software development company, web development team, mobile app developers" />
        <meta name="author" content="Entalogics" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us | Full-Stack Development Team | Entalogics" />
        <meta property="og:description" content="Meet the Entalogics team of expert full-stack developers specializing in AI SaaS platforms, web applications, and custom Chromium browser development." />
        <meta property="og:image" content="https://entalogics.com/assets/about-og.jpg" />
        <meta property="og:url" content="https://entalogics.com/about" />
        <meta property="og:site_name" content="Entalogics" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Full-Stack Development Team | Entalogics" />
        <meta name="twitter:description" content="Meet the Entalogics team of expert full-stack developers specializing in AI SaaS platforms and custom Chromium browser development." />
        <meta name="twitter:image" content="https://entalogics.com/assets/about-og.jpg" />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://entalogics.com/about" />
        <meta name="theme-color" content="#3b82f6" />
        
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className={`bg-white dark:bg-[#0a1225] text-black dark:text-white ${poppins.className}`}>
        {/* Hero Section */}
        <section className="relative isolate w-full bg-gradient-to-br from-background dark:from-[#0a1225] to-muted/30 dark:to-gray-800/30 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-6 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-4 sm:space-y-6 md:space-y-4 lg:space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-1 bg-primary/20 dark:bg-primary/30 rounded-full mr-2">
                    <div className="w-3 h-3 text-blue-600"><Users size={12} /></div>
                  </div>
                  <span className="text-[11px] text-blue-600 tracking-wide font-poppins">About Our Team</span>
              </div>
              
                {/* Main Heading */}
                <div className="space-y-3 sm:space-y-4 md:space-y-3 lg:space-y-4">
                  <Heading 
                    level={1}
                    className="text-balance font-poppins text-[clamp(1.3rem,6vw,3.2rem)] md:text-[clamp(1.5rem,4vw,2.5rem)] lg:text-[clamp(1.3rem,6vw,3.2rem)] font-extrabold leading-[1.15] tracking-tight"
                  >
                    Meet the Team Behind Your{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                      Success
                </span>
              </Heading>
              
                  <Paragraph size="sm" className="text-pretty font-poppins text-sm sm:text-base md:text-sm lg:text-base" center={false}>
                    We're a passionate team of developers, designers, and innovators who believe in the power of 
                    technology to transform businesses. With years of experience and a commitment to excellence, 
                    we turn your vision into reality.
              </Paragraph>
                </div>

                {/* Team Highlights */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-2 lg:gap-3">
                  <div className="flex items-center gap-2 text-xs sm:text-[13px] md:text-xs lg:text-[13px] text-gray-600 dark:text-gray-400 font-poppins leading-snug">
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0"><Users size={14} /></div>
                    <span className="truncate opacity-90">Experienced Developers</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-[13px] md:text-xs lg:text-[13px] text-gray-600 dark:text-gray-400 font-poppins leading-snug">
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0"><Award size={14} /></div>
                    <span className="truncate opacity-90">Award-Winning Team</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-[13px] md:text-xs lg:text-[13px] text-gray-600 dark:text-gray-400 font-poppins leading-snug">
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0"><Heart size={14} /></div>
                    <span className="truncate opacity-90">Client-Focused Approach</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-[13px] md:text-xs lg:text-[13px] text-gray-600 dark:text-gray-400 font-poppins leading-snug">
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0"><Lightbulb size={14} /></div>
                    <span className="truncate opacity-90">Innovation-Driven</span>
                  </div>
                </div>

                {/* Team Stats - Small Badges */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 sm:gap-2 md:gap-1.5 lg:gap-2 pt-2 sm:pt-3 md:pt-2 lg:pt-3">
                  <div className="inline-flex items-center gap-1 bg-card dark:bg-gray-800 rounded-full border border-border dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 px-2.5 sm:px-3 py-1 sm:py-1.5 group">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-blue-500/10 to-blue-600/20 dark:from-blue-500/20 dark:to-blue-600/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-xs font-semibold text-gray-900 dark:text-white font-poppins">5+ Years</span>
                  </div>

                  <div className="inline-flex items-center gap-1 bg-card dark:bg-gray-800 rounded-full border border-border dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 px-2.5 sm:px-3 py-1 sm:py-1.5 group">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 dark:from-yellow-500/20 dark:to-yellow-600/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Star className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <span className="text-xs font-semibold text-gray-900 dark:text-white font-poppins">Top Rated</span>
                  </div>

                  <div className="inline-flex items-center gap-1 bg-card dark:bg-gray-800 rounded-full border border-border dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 px-2.5 sm:px-3 py-1 sm:py-1.5 group">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-green-500/10 to-green-600/20 dark:from-green-500/20 dark:to-green-600/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Award className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-xs font-semibold text-gray-900 dark:text-white font-poppins">100% Satisfaction</span>
                  </div>
                </div>
              </div>

              {/* Right Visual - CONTROLLED HEIGHT */}
              <div className="relative hidden md:block">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl  ">
                  <div className="relative md:h-[340px] md:min-h-[340px] lg:h-[440px] lg:min-h-[440px]">
                    <img
                      src="./entalogics.png"
                      alt="About Entalogics Team"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom fade for hero background to avoid hard cut */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background dark:to-[#0a1225]"></div>
        </section>

        {/* Founder Section */}
        <section className="pt-6 sm:pt-8 pb-16 sm:pb-20 md:pb-32 bg-white dark:bg-[#0a1225] relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-purple-100/20 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-indigo-100/10 to-cyan-100/10 dark:from-indigo-900/5 dark:to-cyan-900/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Section Header */}
            <div className="text-center  md:mb-9">
              <div className="inline-flex items-center gap-2 bg-muted dark:bg-gray-800 border border-border dark:border-gray-700 rounded-full px-4 py-2 mb-6 shadow-sm">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-muted-foreground dark:text-gray-300">Leadership</span>
              </div>
              
              <Heading level={2} className="mb-6">
                Meet the <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Founder</span>
              </Heading>
              
              <Paragraph size="sm" className="max-w-3xl mx-auto text-sm sm:text-base" center={true}>
                Driving innovation through technology with 5+ years of full-stack development expertise. 
                Specializing in AI-powered solutions and custom browser development.
              </Paragraph>
            </div>

            {/* Main Content - Plain Text Layout */}
            <div className="max-w-4xl mx-auto">
              
              {/* Founder Introduction - Plain Text */}
              <div className="space-y-4 sm:space-y-6 mb-8">
                <div className="space-y-3 sm:space-y-4">
                  <Paragraph size="sm" className="text-sm sm:text-base">
                    Hi, I'm <strong className="text-foreground dark:text-white">Umar Abdullah</strong>, Founder & Lead Developer at Entalogics. 
                    I started this company with one simple belief: <strong className="text-blue-600 dark:text-blue-400">building great software shouldn't cost a fortune.</strong>
                  </Paragraph>
                  <Paragraph size="sm" className="text-sm sm:text-base">
                    I saw too many agencies charging clients for every little thing: separate teams, code reviews, hidden fees. It didn't feel right. So I decided to change that.
                  </Paragraph>
                  <Paragraph size="sm" className="text-sm sm:text-base font-semibold text-foreground dark:text-white">
                    Here's how we do things differently:
                  </Paragraph>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>You work directly with me and our senior team from day one. No bouncing between juniors, no hidden hand-offs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>We keep the structure lean. You won't be billed for "team layers" or "management markup".</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>We provide independent developers and designers for your project — you pay for individuals doing high-quality work, not for an entire company overhead.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Because many of our developers are based in Asia, our labour cost is lower than many European or US-based agencies. That saving is passed on to you.</span>
                    </li>
                  </ul>
                  <div className="w-full flex justify-center">
                  <Link href="/founder" className="block   mx-auto">
                    <Button 
                      variant="primary" 
                      size="sm"
                      icon={<ArrowRight className="w-4 h-4" />}
                      iconPosition="right"
                      className="!font-medium !px-4 !py-2 o"
                    >
                      Meet Founder
                    </Button>
                  </Link>
                  </div>
                </div>
              </div>

              {/* Content Cards */}
              <div className="space-y-4 sm:space-y-6">

                {/* Quote Card */}
                <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 border border-blue-200/30 dark:border-blue-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <blockquote className="text-gray-700 dark:text-gray-300 italic text-sm sm:text-base leading-relaxed mb-3">
                      "I made Entalogics so you, the client, get senior-level expertise at fair pricing. No hidden fees. No middle-men. Just direct collaboration and quality you can trust."
                    </blockquote>
                    <cite className="text-xs sm:text-sm text-muted-foreground dark:text-gray-400 font-medium not-italic">
                      — Umar Abdullah, Founder & Lead Developer
                    </cite>
                  </div>
                </div>

                {/* Stats Grid */}
               
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Companies Section */}
        <section className="pt-1 pb-16 sm:pb-20 bg-white dark:bg-[#0a1225]">
          <div className="container mx-auto px-4 md:px-8">
            <TrustedCompanies />
          </div>
        </section>





        

        
        

        {/* FAQ Section */}
        <section className="py-6 sm:py-12 bg-gray-50 dark:bg-[#0a1225]">
          <div className="">
            <FAQ showCta={false} />
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </div>
    </Layout>
  )
}

export default AboutPage