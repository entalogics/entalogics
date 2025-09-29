"use client"

import React from "react"
import Head from "next/head"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Users,
  Rocket,
  ArrowRight,
  Shield,
  Zap,
  Star,
  Award,
  Building2,
  Lightbulb,
  Heart,
  Phone,
  Calendar,
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

      <div className={`bg-white dark:bg-[#0a1225] text-black dark:text-white ${poppins.className}`} style={{ scrollBehavior: 'smooth' }}>
        {/* Hero Section */}
        <section className="relative isolate w-full bg-gradient-to-br from-background dark:from-[#0a1225] to-muted/30 dark:to-gray-800/30 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-1 bg-primary/20 dark:bg-primary/30 rounded-full mr-2">
                    <div className="w-3 h-3 text-blue-600"><Users size={12} /></div>
                  </div>
                  <span className="text-[11px] text-blue-600 tracking-wide font-poppins">About Our Team</span>
              </div>
              
                {/* Main Heading */}
                <div className="space-y-4">
                  <Heading 
                    level={1}
                    className="text-balance font-poppins"
                  >
                    Meet the Team Behind Your{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                      Success
                </span>
              </Heading>
              
                  <Paragraph size="sm" className="text-pretty font-poppins" center={false}>
                    We're a passionate team of developers, designers, and innovators who believe in the power of 
                    technology to transform businesses. With years of experience and a commitment to excellence, 
                    we turn your vision into reality.
              </Paragraph>
                </div>

                {/* Team Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <div className="flex items-center gap-2 text-xs sm:text-[13px] text-gray-600 dark:text-gray-400 font-poppins leading-snug">
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0"><Users size={14} /></div>
                    <span className="truncate opacity-90">Experienced Developers</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-[13px] text-gray-600 dark:text-gray-400 font-poppins leading-snug">
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0"><Award size={14} /></div>
                    <span className="truncate opacity-90">Award-Winning Team</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-[13px] text-gray-600 dark:text-gray-400 font-poppins leading-snug">
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0"><Heart size={14} /></div>
                    <span className="truncate opacity-90">Client-Focused Approach</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-[13px] text-gray-600 dark:text-gray-400 font-poppins leading-snug">
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0"><Lightbulb size={14} /></div>
                    <span className="truncate opacity-90">Innovation-Driven</span>
                  </div>
                </div>

                {/* Team Stats - Small Badges */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 sm:gap-2 pt-3">
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
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card dark:from-gray-800 to-muted dark:to-gray-700 border-2 border-border/50 dark:border-gray-600/50 shadow-xl">
                  <div style={{ height: "440px" }} className="relative">
                    <img
                      src="./about.png"
                      alt="About Entalogics Team"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom fade for hero background to avoid hard cut */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background dark:to-[#0a1225]"></div>
        </section>

        {/* Founder Section */}
        <section className="pt-8 pb-20 md:pb-32 bg-white dark:bg-[#0a1225] relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-purple-100/20 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-indigo-100/10 to-cyan-100/10 dark:from-indigo-900/5 dark:to-cyan-900/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Section Header */}
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-flex items-center gap-2 bg-muted dark:bg-gray-800 border border-border dark:border-gray-700 rounded-full px-4 py-2 mb-6 shadow-sm">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-muted-foreground dark:text-gray-300">Leadership</span>
              </div>
              
              <Heading level={2} className="mb-6">
                Meet the <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Founder</span>
              </Heading>
              
              <Paragraph size="lg" className="max-w-3xl mx-auto" center={true}>
                Driving innovation through technology with 5+ years of full-stack development expertise
              </Paragraph>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Profile Card - Left Side */}
              <div className="lg:col-span-4">
                <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-border dark:border-gray-700 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  
                  {/* Profile Image */}
                  <div className="text-center mb-8">
                    <div className="relative inline-block">
                      <div className="w-28 h-28 md:w-36 md:h-36 mx-auto relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                        <img 
                          src="/umar.jpg" 
                          alt="Umar Abdullah - Founder & Lead Developer"
                          className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
                        />
                        {/* Online Status */}
                        <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            <span className="hidden sm:inline">Online</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Heading level={3} className="text-xl md:text-2xl mb-2">
                      Umar Abdullah
                    </Heading>
                    <Paragraph size="sm" className="text-muted-foreground dark:text-gray-400 mb-4">
                      Founder & Lead Developer
                    </Paragraph>
                    
                    {/* Rating */}
                    <div className="flex justify-center items-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-muted-foreground dark:text-gray-400 ml-2">5.0 • 50+ reviews</span>
                    </div>
                  </div>

                  {/* Status Badges */}
                  <div className="grid grid-cols-3 gap-2 mb-8">
                    <div className="flex items-center justify-center gap-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-2 py-1.5 rounded-full text-xs font-medium border border-green-200 dark:border-green-800">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="hidden sm:inline">Available</span>
                      <span className="sm:hidden">Live</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-1.5 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-800">
                      <Shield className="w-3 h-3" />
                      <span className="hidden sm:inline">NDA Safe</span>
                      <span className="sm:hidden">Safe</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-2 py-1.5 rounded-full text-xs font-medium border border-purple-200 dark:border-purple-800">
                      <Zap className="w-3 h-3" />
                      <span className="hidden sm:inline">Fast</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Link href="/contact">
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full shadow-lg hover:shadow-xl py-3 ring-1 ring-primary/20 hover:ring-primary/40 font-normal"
                        icon={<Rocket className="w-5 h-5" />}
                      >
                        Start Project
                      </Button>
                    </Link>
                    <button
                      data-cal-link="entalogics/30min"
                      data-cal-namespace="30min"
                      data-cal-config='{"layout":"month_view","theme":"auto"}'
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <Calendar className="w-5 h-5" />
                      Schedule Call
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Cards - Right Side */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* About Card */}
                <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-border dark:border-gray-700 rounded-2xl p-6 md:p-8 shadow-lg">
                  <Heading level={3} className="mb-6">
                    About
                  </Heading>
                  
                  <div className="space-y-4">
                    <Paragraph size="md">
                      With over <strong className="text-foreground dark:text-white">5 years of dedicated experience</strong> in full-stack development, 
                      I specialize in transforming complex business challenges into elegant, scalable solutions.
                    </Paragraph>
                    <Paragraph size="md">
                      My expertise spans from building <strong className="text-blue-600 dark:text-blue-400">AI-powered SaaS platforms</strong> to developing 
                      <strong className="text-green-600 dark:text-green-400"> custom Chromium browsers</strong>, always focusing on delivering 
                      exceptional user experiences and business value.
                    </Paragraph>
                  </div>
                </div>

                {/* Quote Card */}
                <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 border border-blue-200/30 dark:border-blue-800/30 rounded-2xl p-6 md:p-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <blockquote className="text-gray-700 dark:text-gray-300 italic text-lg leading-relaxed mb-3">
                      "I believe technology should be accessible, powerful, and beautiful. Every line of code I write 
                      is with the intention of making someone's life easier or their business more successful."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground dark:text-gray-400 font-medium not-italic">
                      — Umar, Founder & Lead Developer
                    </cite>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200/50 dark:border-blue-800/50">
                    <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground dark:text-gray-400">Support</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border border-green-200/50 dark:border-green-800/50">
                    <div className="text-2xl font-bold text-green-600 mb-1">&lt;2h</div>
                    <div className="text-sm text-muted-foreground dark:text-gray-400">Response</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl border border-purple-200/50 dark:border-purple-800/50">
                    <div className="text-2xl font-bold text-purple-600 mb-1">Free</div>
                    <div className="text-sm text-muted-foreground dark:text-gray-400">Consultation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Companies Section */}
        <section className="pt-4 pb-20 bg-white dark:bg-[#0a1225]">
          <div className="container mx-auto px-4 md:px-8">
            <TrustedCompanies />
          </div>
        </section>



        

        
        

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50 dark:bg-[#0a1225]">
          <div className="container mx-auto px-4 md:px-8">
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