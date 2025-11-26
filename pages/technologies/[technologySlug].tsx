import React from "react"
import type { GetStaticProps, GetStaticPaths } from "next"
import { getTechnologyBySlug, getAllTechnologySlugs, type Technology } from "../../src/data/technologiesData"
import { ArrowRight, CheckCircle, Code, Smartphone, Globe, Database, Cloud, Settings, FileText, Box, Layers, Terminal, Coffee, Code2, Apple, Zap, Package, ShoppingCart, Building2, FileCode, Server, HardDrive, Circle, Monitor, Users, Rocket, Chrome } from "lucide-react"
import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import Layout from "../../src/components/Layout"
import CTA from "../../src/components/CTA"
import FAQ from "../../src/components/FAQ"
import FounderCTASection from "../../src/components/FounderCTASection"
import Heading from "../../src/components/ui/Heading"
import Paragraph from "../../src/components/ui/Paragraph"
import Button from "../../src/components/ui/Button"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
})

interface TechnologyPageProps {
  technology: Omit<Technology, "icon"> & { iconName: string }
}

const iconMap: Record<string, React.ElementType> = {
  Code,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Settings,
  FileText,
  Box,
  Layers,
  Terminal,
  Coffee,
  Code2,
  Apple,
  Zap,
  Package,
  ShoppingCart,
  Building2,
  FileCode,
  Server,
  HardDrive,
  Circle,
  Monitor,
  Chrome,
}

const TechnologyPage: React.FC<TechnologyPageProps> = ({ technology }) => {
  const IconComponent = iconMap[technology.iconName] || Code

  return (
    <Layout>
      <Head>
        <title>{technology.ogTitle || `${technology.title} Development Services | Entalogics - Expert ${technology.title} Developers`}</title>
        <meta name="description" content={technology.seoDescription || technology.heroDescription || `Learn about ${technology.title} development services at Entalogics. ${technology.tagline || 'Expert solutions for your business needs.'}`} />
        <meta name="keywords" content={technology.seoKeywords || `${technology.title}, ${technology.title} development, ${technology.title} developers, ${technology.category}, Entalogics, software development`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://entalogics.com/technologies/${technology.slug}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={technology.ogTitle || `${technology.title} Development Services | Entalogics`} />
        <meta property="og:description" content={technology.ogDescription || technology.seoDescription || technology.heroDescription || `Expert ${technology.title} development services by Entalogics. Professional ${technology.title} developers delivering scalable solutions.`} />
        <meta property="og:url" content={`https://entalogics.com/technologies/${technology.slug}`} />
        <meta property="og:site_name" content="Entalogics" />
        {technology.imagePath && (
          <meta property="og:image" content={`https://entalogics.com${technology.imagePath}`} />
        )}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={technology.ogTitle || `${technology.title} Development Services | Entalogics`} />
        <meta name="twitter:description" content={technology.ogDescription || technology.seoDescription || technology.heroDescription || `Expert ${technology.title} development services by Entalogics.`} />
        {technology.imagePath && (
          <meta name="twitter:image" content={`https://entalogics.com${technology.imagePath}`} />
        )}
        
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
                <Link href="/technologies" className="hover:text-white transition-colors">Technology</Link>
                <span>/</span>
                <span className="text-white underline underline-offset-4">{technology.title}</span>
              </nav>
            </div>

            {/* Main Content - Left Aligned */}
            <div className="max-w-4xl">
              {/* Main Heading */}
              <Heading 
                level={1}
                className="mb-3 md:mb-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Unlock Scalable, High-Performance {technology.category} Solutions with {technology.title}
              </Heading>

              {/* Descriptive Paragraph */}
              <Paragraph 
                size="lg" 
                className="text-sm md:text-base text-white/90 mb-5 md:mb-6 leading-relaxed max-w-3xl"
              >
                {technology.heroDescription || technology.description || `Looking to build with ${technology.title}? You're in the right place. Our team has deep expertise in ${technology.title} development, and we've used it to build everything from startups to enterprise applications. We understand ${technology.title} inside and out, and we know how to leverage its strengths to deliver solutions that actually work.`}
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
              {/* Left Side - Technology Image */}
              <div className="relative flex items-center justify-center lg:justify-start lg:col-span-2">
                <div className="relative w-full max-w-md">
                  {/* Technology Image */}
                  <div className="relative">
                    {/* Image Container */}
                    <div className="relative w-full h-auto">
                      <Image
                        src={technology.imagePath || `/assets/technologies/${technology.slug.replace('-development-services', '')}.png`}
                        alt={`${technology.title} Development`}
                        width={500}
                        height={500}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Text Content */}
              <div className="space-y-6 lg:col-span-3">
                {/* Headline */}
                <Heading 
                  level={2}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                >
                  Entalogics' Expertise in {technology.title} Development
                </Heading>

                {/* First Paragraph */}
                <Paragraph 
                  size="md" 
                  className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {technology.expertiseContent?.paragraph1 || `When it comes to ${technology.title}, we don't just follow tutorials—we've built real projects with it. Our developers have hands-on experience working with ${technology.title} in production environments, solving actual problems, and dealing with the challenges that come up when you're building at scale. We understand the ecosystem, the best practices, and the gotchas that can trip you up.`}
                </Paragraph>

                {/* Second Paragraph */}
                <Paragraph 
                  size="md" 
                  className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {technology.expertiseContent?.paragraph2 || `We've seen ${technology.title} evolve, and we've evolved with it. Whether you're starting a new project or modernizing an existing one, we know how to make ${technology.title} work for you. We write clean, maintainable code, follow best practices, and always keep performance and scalability in mind. Every project is different, and we adapt our approach to fit your specific needs.`}
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
              >
                Why Choose Entalogics for {technology.title} Development?
              </Heading>
              <Paragraph 
                size="md" 
                className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
                center={true}
              >
                We combine deep technical expertise with business acumen to deliver {technology.title} solutions that drive real results for your organization.
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
                    Expert {technology.title} Developers
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Our team consists of certified {technology.title} specialists with years of hands-on experience building scalable, high-performance applications for diverse industries and use cases.
                  </p>
                </div>
              </div>

              {/* Benefit 2 - Modern Best Practices */}
              <div className="group relative overflow-hidden bg-white dark:bg-[#0a1225] rounded-xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Latest Best Practices
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    We stay up-to-date with the latest {technology.title} trends, frameworks, and architectural patterns to ensure your solution is built with cutting-edge technologies and methodologies.
                  </p>
                </div>
              </div>

              {/* Benefit 3 - Scalable Solutions */}
              <div className="group relative overflow-hidden bg-white dark:bg-[#0a1225] rounded-xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Scalable Architecture
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    We design and develop {technology.title} solutions that can grow with your business, handling increased load and complexity without compromising performance or user experience.
                  </p>
                </div>
              </div>

              {/* Benefit 4 - Quality Assurance */}
              <div className="group relative overflow-hidden bg-white dark:bg-[#0a1225] rounded-xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Rigorous Testing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Every {technology.title} solution undergoes comprehensive testing to ensure reliability, security, and optimal performance across different environments and use cases.
                  </p>
                </div>
              </div>

              {/* Benefit 5 - Fast Delivery */}
              <div className="group relative overflow-hidden bg-white dark:bg-[#0a1225] rounded-xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Agile Development
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    We follow Agile methodologies with regular sprints, continuous integration, and transparent communication to deliver value quickly and adapt to changing requirements.
                  </p>
                </div>
              </div>

              {/* Benefit 6 - Ongoing Support */}
              <div className="group relative overflow-hidden bg-white dark:bg-[#0a1225] rounded-xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Long-term Partnership
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Beyond development, we provide ongoing maintenance, updates, and support to ensure your {technology.title} application continues to perform optimally as your business evolves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <FounderCTASection />
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllTechnologySlugs()
  const paths = slugs.map((slug) => ({
    params: { technologySlug: slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.technologySlug as string
  const technology = getTechnologyBySlug(slug)

  if (!technology) {
    return {
      notFound: true,
    }
  }

  // Serialize technology without the icon component (which is not JSON serializable)
  const { icon, ...serializableTechnology } = technology
  
  return {
    props: {
      technology: {
        ...serializableTechnology,
        iconName: technology.iconName,
      },
    },
  }
}

export default TechnologyPage

