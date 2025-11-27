"use client"

import React from "react"
import Head from "next/head"
import Link from "next/link"
import {
  Users,
} from "lucide-react"
import Layout from "../src/components/Layout"
import Heading from "../src/components/ui/Heading"
import Paragraph from "../src/components/ui/Paragraph"
import ProjectCTA from "../src/components/ProjectCTA"
import TrustBar from "../src/components/TrustBar"
import { Poppins } from "next/font/google"
import TrustedCompanies from "@/components/TrustedCompanies"
import { allTeamMembers } from "../src/data/teamData"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

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
              {/* Small uppercase label */}
              <div className="inline-block text-xs sm:text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-2">
                OUR TEAM
              </div>

              {/* Main Heading */}
              <div className="space-y-3 sm:space-y-4">
                <Heading level={1} className="text-balance font-poppins text-[clamp(1.8rem,6vw,3.5rem)] font-bold leading-[1.15] tracking-tight">
                  Meet the Entalogics team
                </Heading>

                <Paragraph size="sm" className="max-w-3xl mx-auto text-sm sm:text-base" center={true}>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour.
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
            {/* All Team Members Grid - All in one row */}
            <div className="flex flex-wrap justify-center items-start gap-8 md:gap-12">
              {allTeamMembers.map((member, index) => {
                if (member.name === "Umar Abdullah") {
                  return (
                    <Link
                      key={index}
                      href="/founder"
                      className="flex flex-col items-center text-center w-full max-w-[200px] relative group cursor-pointer"
                    >
                      {/* Circular Profile Image */}
                      <div className="mb-4">
                        <div className="w-32 h-32 rounded-full overflow-hidden">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Name */}
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {member.name}
                      </h3>
                      
                      {/* Role/Title */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 relative">
                        {member.role}
                      </p>

                      {/* Meet Founder Button - Shows on hover with fade-up */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 top-full -mt-1 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                        <div className="relative inline-block text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
                          <span>Meet Founder</span>
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"></span>
                        </div>
                      </div>
                    </Link>
                  )
                }
                
                return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center w-full max-w-[200px]"
                >
                  {/* Circular Profile Image */}
                  <div className="mb-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  
                  {/* Role/Title */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {member.role}
                  </p>
                </div>
              )})}
            </div>
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

