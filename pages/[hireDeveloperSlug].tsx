import React, { useState } from "react"
import type { GetStaticProps, GetStaticPaths } from "next"
import { getHireDeveloperBySlug, getAllHireDeveloperSlugs, type HireDeveloperItem } from "../src/data/hireDevelopersData"
import { ArrowRight, Users, Rocket, CheckCircle, Code, Smartphone, Globe, Database, Cloud, Settings, FileText, Box, Layers, Terminal, Coffee, Code2, Apple, Zap, Package, ShoppingCart, Building2, FileCode, Server, HardDrive, Circle, Monitor, Chrome } from "lucide-react"
import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import Layout from "../src/components/Layout"
import FAQ from "../src/components/FAQ"
import FounderCTASection from "../src/components/FounderCTASection"
import Heading from "../src/components/ui/Heading"
import Paragraph from "../src/components/ui/Paragraph"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
})

interface HireDeveloperPageProps {
  hireDeveloper: HireDeveloperItem
}

const HireDeveloperPage: React.FC<HireDeveloperPageProps> = ({ hireDeveloper }) => {
  const [activeTab, setActiveTab] = useState<string>("")

  // Auto-select first tab on mount
  React.useEffect(() => {
    if (hireDeveloper.technologyCategories && hireDeveloper.technologyCategories.length > 0) {
      setActiveTab(hireDeveloper.technologyCategories[0].name)
    }
  }, [hireDeveloper.technologyCategories])

  const activeTechnologies = hireDeveloper.technologyCategories?.find(
    cat => cat.name === activeTab
  )?.technologies || []

  return (
    <Layout>
      <Head>
        <title>{`Hire ${hireDeveloper.title} Worldwide | Top ${hireDeveloper.title} | Entalogics`}</title>
        <meta name="description" content={`${hireDeveloper.seoDescription || `Hire expert ${hireDeveloper.title} from Entalogics. Professional ${hireDeveloper.title} services for your business needs.`} Serving clients in top global markets including USA (all 50 states, 500+ cities, tech hubs), UK (all regions), Singapore, Japan, China, Canada, Australia, Germany, and 15+ high-value markets.`} />
        <meta name="keywords" content={`${hireDeveloper.seoKeywords || `hire ${hireDeveloper.title}, ${hireDeveloper.title}, ${hireDeveloper.category}`}, top ${hireDeveloper.title}, best ${hireDeveloper.title} company, hire ${hireDeveloper.title} USA, hire ${hireDeveloper.title} California, hire ${hireDeveloper.title} Texas, hire ${hireDeveloper.title} New York, hire ${hireDeveloper.title} UK, hire ${hireDeveloper.title} Singapore, hire ${hireDeveloper.title} Japan, hire ${hireDeveloper.title} Canada, hire ${hireDeveloper.title} Australia, Entalogics, hire developers`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://entalogics.com/${hireDeveloper.slug}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Hire ${hireDeveloper.title} | Entalogics`} />
        <meta property="og:description" content={hireDeveloper.seoDescription || `Hire expert ${hireDeveloper.title} from Entalogics. Professional ${hireDeveloper.title} services.`} />
        <meta property="og:url" content={`https://entalogics.com/${hireDeveloper.slug}`} />
        <meta property="og:site_name" content="Entalogics" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Hire ${hireDeveloper.title} | Entalogics`} />
        <meta name="twitter:description" content={hireDeveloper.seoDescription || `Hire expert ${hireDeveloper.title} from Entalogics.`} />
        
        {/* Additional SEO */}
        <meta name="author" content="Entalogics" />
        <meta name="theme-color" content="#3b82f6" />
      </Head>

      <div className={`bg-white dark:bg-[#0a1225] text-black dark:text-white ${poppins.className}`}>
        {/* Hero Section with Background Image and Overlay */}
        <section className="relative isolate w-full overflow-hidden">
          {/* Background Image with Subtle Effects */}
          <div className="absolute inset-0 z-0">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/technology.jpg)',
                filter: 'blur(2px) brightness(0.4)',
                transform: 'scale(1.05)',
              }}
            ></div>
            {/* Dark Blue Gradient Overlay - More Subtle */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/75 via-blue-800/70 to-indigo-900/75"></div>
            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] opacity-60"></div>
            {/* Additional subtle gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 md:pt-20 md:pb-12 lg:pt-24 lg:pb-16">
            {/* Breadcrumbs */}
            <div className="mb-4 md:mb-5">
              <nav className="flex items-center gap-2 text-xs md:text-sm text-white/80">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white underline underline-offset-4">Hire {hireDeveloper.title}</span>
              </nav>
            </div>

            {/* Main Content - Left Aligned */}
            <div className="max-w-4xl">
              {/* Main Heading */}
              <Heading 
                level={1}
                className="mb-3 md:mb-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Hire Expert {hireDeveloper.title}
              </Heading>

              {/* Descriptive Paragraph */}
              <Paragraph 
                size="lg" 
                className="text-sm md:text-base text-white/90 mb-5 md:mb-6 leading-relaxed max-w-3xl"
              >
                Looking for skilled {hireDeveloper.title.toLowerCase()}? We've got you covered. Our team of experienced developers specializes in {hireDeveloper.title.toLowerCase()}, bringing real-world expertise and a passion for building exceptional solutions. Let's bring your vision to life.
              </Paragraph>

              {/* CTA Button */}
              <Link href="/contact-us">
                <button 
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started Today!
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Expertise Section - Two Column Layout */}
        <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Left Side - Image */}
              <div className="relative flex items-center justify-center lg:justify-start lg:col-span-2">
                <div className="relative w-full max-w-md">
                  {/* Image Container */}
                  <div className="relative w-full h-auto">
                    <Image
                      src={hireDeveloper.imagePath || `/assets/technologies/${hireDeveloper.slug.replace('hire-', '').replace('-developers', '').replace('-app', '')}.svg`}
                      alt={`${hireDeveloper.title} Development`}
                      width={500}
                      height={500}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Text Content */}
              <div className="space-y-6 lg:col-span-3">
                {/* Headline */}
                <Heading 
                  level={2}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                  gradient={true}
                  gradientText={hireDeveloper.title}
                >
                  Entalogics' Expertise in Hiring {hireDeveloper.title}
                </Heading>

                {/* First Paragraph */}
                <Paragraph 
                  size="md" 
                  className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {hireDeveloper.customContent?.expertiseParagraph1 || `At Entalogics, we understand that finding the right ${hireDeveloper.title.toLowerCase()} can make or break your project. That's why we've built a team of specialists who don't just code—they solve problems, think creatively, and deliver solutions that actually work. Our developers bring years of hands-on experience, working with cutting-edge technologies and best practices.`}
                </Paragraph>

                {/* Second Paragraph */}
                <Paragraph 
                  size="md" 
                  className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {hireDeveloper.customContent?.expertiseParagraph2 || `Whether you're building from scratch or enhancing an existing project, our ${hireDeveloper.title.toLowerCase()} are ready to jump in. We focus on writing clean, maintainable code that scales with your business. From architecture decisions to implementation details, we ensure every line of code serves a purpose and meets the highest standards of quality and security.`}
                </Paragraph>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <Heading 
                level={2}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                gradient={true}
                gradientText="Entalogics"
              >
                Why Choose Entalogics for Hiring {hireDeveloper.title}?
              </Heading>
              <Paragraph 
                size="md" 
                className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
                center={true}
              >
                We don't just match you with developers—we find the right fit. Our process is thorough but fast, ensuring you get someone who truly understands your project and can hit the ground running.
              </Paragraph>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Benefit 1 - Experienced Team */}
              <div className="group relative overflow-hidden bg-white dark:bg-[#0a1225] rounded-xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Expert {hireDeveloper.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Every developer in our network has been through a rigorous selection process. We look for real experience, problem-solving skills, and a genuine passion for what they do—not just a resume.
                  </p>
                </div>
              </div>

              {/* Benefit 2 - Fast Hiring */}
              <div className="group relative overflow-hidden bg-white dark:bg-[#0a1225] rounded-xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Fast Hiring Process
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Time is money, and we get it. Our streamlined process means you can have a developer working on your project in days, not weeks. No endless interviews, no waiting around.
                  </p>
                </div>
              </div>

              {/* Benefit 3 - Flexible Engagement */}
              <div className="group relative overflow-hidden bg-white dark:bg-[#0a1225] rounded-xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Flexible Engagement
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Every project is different, and so are your needs. Whether you need someone full-time, part-time, or just for a specific project, we've got flexible options that work for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Hiring Model Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-[#0a1225] relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <Heading 
                level={2}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                gradient={true}
                gradientText="Hiring Model"
              >
                Our Hiring Model
              </Heading>
              <Paragraph 
                size="md" 
                className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
                center={true}
              >
                Get on discovery call and hire our software developers or programmers with a dedicated model that suits well with your business and project requirements.
              </Paragraph>
            </div>

            {/* Hiring Models Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Full-Time Hiring */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <img
                    src="/assets/hire-developers/hire-full-time.svg"
                    alt="Full-Time Hiring"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Full-Time Hiring
                </h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  A dedicated resource working exclusively on your projects for 160 hours per month, ensuring consistent progress and deep project involvement.
                </p>
              </div>

              {/* Part-Time Hiring */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <img
                    src="/assets/hire-developers/hire-part-time.svg"
                    alt="Part-Time Hiring"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Part-Time Hiring
                </h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  A flexible resource working 80 hours per month, providing focused support for specific tasks or projects as needed.
                </p>
              </div>

              {/* Hourly Hiring */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <img
                    src="/assets/hire-developers/hire-hourly.svg"
                    alt="Hourly Hiring"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Hourly Hiring
                </h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Expert consulting services billed in non-expiring 40-hour blocks, offering the flexibility to engage on-demand for specific needs or short-term projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Engagement Models Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-[#0a1225] relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <Heading 
                level={2}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                gradient={true}
                gradientText="Engagement Models"
              >
                Our Engagement Models
              </Heading>
            </div>

            {/* Engagement Models Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Entalogics Managed Team */}
              <div className="group relative bg-white dark:bg-transparent backdrop-blur-2xl border border-gray-200 dark:border-white/15 rounded-lg p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Enhanced glassy overlay effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 via-white/5 to-transparent dark:from-white/10 dark:via-white/3 dark:to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Additional glassy border effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Glassy shine effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-white/10 to-transparent dark:via-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <img
                        src="/assets/engagement-models/hire-managed-team.svg"
                        alt="Entalogics Managed Team"
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1e3a5f] dark:text-white mb-2 text-center">
                    Entalogics Managed Team
                  </h3>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-0.5 bg-blue-500"></div>
                  </div>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-left">
                    Manages the entire development process, ensuring quality and timely delivery, allowing you to focus on critical tasks.
                  </p>
                </div>
              </div>

              {/* Client Managed Team */}
              <div className="group relative bg-white dark:bg-transparent backdrop-blur-2xl border border-gray-200 dark:border-white/15 rounded-lg p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Enhanced glassy overlay effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 via-white/5 to-transparent dark:from-white/10 dark:via-white/3 dark:to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Additional glassy border effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Glassy shine effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-white/10 to-transparent dark:via-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <img
                        src="/assets/engagement-models/hire-client-managed-team.svg"
                        alt="Client Managed Team"
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1e3a5f] dark:text-white mb-2 text-center">
                    Client Managed Team
                  </h3>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-0.5 bg-blue-500"></div>
                  </div>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-left">
                    Offers full project control with expert developers, ideal for companies with strong in-house teams needing additional talent.
                  </p>
                </div>
              </div>

              {/* Hybrid Model */}
              <div className="group relative bg-white dark:bg-transparent backdrop-blur-2xl border border-gray-200 dark:border-white/15 rounded-lg p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Enhanced glassy overlay effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 via-white/5 to-transparent dark:from-white/10 dark:via-white/3 dark:to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Additional glassy border effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Glassy shine effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-white/10 to-transparent dark:via-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <img
                        src="/assets/engagement-models/hire-hybrid-team.svg"
                        alt="Hybrid Model"
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1e3a5f] dark:text-white mb-2 text-center">
                    Hybrid Model
                  </h3>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-0.5 bg-blue-500"></div>
                  </div>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-left">
                    Merges your in-house team with Entalogics' expertise, perfect for complex projects needing diverse skills and collaborative effort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section with Tabs */}
        {hireDeveloper.technologyCategories && hireDeveloper.technologyCategories.length > 0 && (
          <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-[#0a1225] relative overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <div className="text-center mb-8 md:mb-12">
                <Heading 
                  level={2}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                  gradient={true}
                  gradientText={hireDeveloper.title}
                >
                  Technologies That Our {hireDeveloper.title} Use Competently
                </Heading>
                <Paragraph 
                  size="md" 
                  className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
                  center={true}
                >
                  Hire expert {hireDeveloper.title} from Entalogics who are experts in many different technologies. Here is a view of the tools and technology our professionals apply to create premium applications:
                </Paragraph>
              </div>

              {/* Tab Navigation */}
              <div className="mb-6 md:mb-8">
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-4 pb-4 border-b border-gray-300 dark:border-gray-600">
                  {hireDeveloper.technologyCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setActiveTab(category.name)}
                      className={`relative text-sm md:text-base font-medium transition-all duration-200 pb-1 ${
                        activeTab === category.name
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    >
                      {category.name}
                      {activeTab === category.name && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {activeTechnologies.map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className="group relative bg-white dark:bg-transparent backdrop-blur-2xl border border-gray-200 dark:border-white/15 rounded-lg p-5 md:p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  >
                    {/* Enhanced glassy overlay effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 via-white/5 to-transparent dark:from-white/10 dark:via-white/3 dark:to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Additional glassy border effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Glassy shine effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-white/10 to-transparent dark:via-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      {/* Technology Name with Icon */}
                      <div className="flex items-center gap-3 mb-3">
                        {tech.iconPath ? (
                          <img
                            src={tech.iconPath}
                            alt={`${tech.name} icon`}
                            className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0"
                          />
                        ) : (
                          <Code className="w-8 h-8 md:w-10 md:h-10 text-gray-400 flex-shrink-0" />
                        )}
                        <h3 className="text-lg md:text-xl font-bold text-[#1e3a5f] dark:text-white">
                          {tech.name}
                        </h3>
                      </div>

                      {/* Technology Description */}
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <FounderCTASection />
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllHireDeveloperSlugs()
  const paths = slugs.map((slug) => ({
    params: { hireDeveloperSlug: slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.hireDeveloperSlug as string
  const hireDeveloper = getHireDeveloperBySlug(slug)

  if (!hireDeveloper) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      hireDeveloper,
    },
  }
}

export default HireDeveloperPage

