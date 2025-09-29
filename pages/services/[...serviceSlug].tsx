import React from "react"
import type { GetStaticProps, GetStaticPaths } from "next"
import { getServiceBySlug, getAllServiceSlugs, type Service } from "../../src/data/servicesData"
import {
  CheckCircle,
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  Zap,
  Database,
  Shield,
  Brain,
  Chrome,
  Palette,
  Monitor,
  Settings,
  Rocket,
  Phone,
  Award,
  Users,
  Heart,
} from "lucide-react"
import Link from "next/link"
import Head from "next/head"
import Layout from "../../src/components/Layout"
import Testimonials from "../../src/components/Testimonials"
import FAQ from "../../src/components/FAQ"
import CTA from "../../src/components/CTA"
import Heading from "../../src/components/ui/Heading"
import Paragraph from "../../src/components/ui/Paragraph"
import Button from "../../src/components/ui/Button"
import { Work_Sans, Open_Sans, Poppins } from "next/font/google"

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-work-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-open-sans",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
})

const iconMap = {
  Code,
  Smartphone,
  Globe,
  Zap,
  Database,
  Shield,
  Brain,
  Chrome,
  Palette,
  Monitor,
  Settings,
}

interface ServicePageProps {
  service: Omit<Service, "icon"> & { iconName: string }
}

const getTechIcon = (techName: string, className: string) => {
  const name = techName.toLowerCase()
  switch(name) {
    case 'react':
    case 'react.js':
    case 'react native':
      return <div className={className}><Code size={16} /></div>
    case 'typescript':
      return <div className={className}><Code size={16} /></div>
    case 'tailwind css':
    case 'tailwindcss':
      return <div className={className}><Palette size={16} /></div>
    case 'postgresql':
      return <div className={className}><Database size={16} /></div>
    case 'node.js':
    case 'nodejs':
      return <div className={className}><Code size={16} /></div>
    case 'graphql':
      return <div className={className}><Globe size={16} /></div>
    case 'figma':
      return <div className={className}><Palette size={16} /></div>
    case 'docker':
      return <div className={className}><Code size={16} /></div>
    case 'next.js':
    case 'nextjs':
      return <div className={className}><Code size={16} /></div>
    case 'flutter':
      return <div className={className}><Smartphone size={16} /></div>
    case 'python':
      return <div className={className}><Code size={16} /></div>
    default:
      return <div className={className}><Code size={16} /></div>
  }
}

const ServicePage: React.FC<ServicePageProps> = ({ service }) => {
  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-background dark:bg-[#0a1225]">
          <div className="text-center p-8 max-w-md bg-card dark:bg-gray-800 rounded-2xl shadow-lg border border-border dark:border-gray-700">
            <div className="w-16 h-16 mx-auto mb-6 bg-destructive/10 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-destructive">404</span>
            </div>
            <Heading level={1} className="mb-4">Service Not Found</Heading>
            <Paragraph className="mb-6">
              The service you're looking for doesn't exist.
            </Paragraph>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-colors"
            >
              Back to Home
              <div className="w-4 h-4"><ArrowRight size={16} /></div>
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  const IconComponent = iconMap[service.iconName as keyof typeof iconMap] || Code
  const methodologyGradientWord = service.methodology?.title?.split(" ").slice(-1)[0] || ""

  return (
    <>
      <Head>
        <title>{String(service.title)} | Entalogics</title>
        <meta name="description" content={service.tagline} />
        <meta name="keywords" content={`${service.title}, ${service.title.toLowerCase()} development, custom ${service.title.toLowerCase()}, ${service.title.toLowerCase()} services, software development, web development, mobile app development, AI development, SaaS development, Chromium browser development, UI UX design, maintenance support, Entalogics`} />
        <meta name="author" content="Entalogics" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${service.title} | Entalogics`} />
        <meta property="og:description" content={service.tagline} />
        <meta property="og:image" content={service.ogImage || "https://entalogics.com/assets/og-image.jpg"} />
        <meta property="og:url" content={`https://entalogics.com/services/${service.slug}`} />
        <meta property="og:site_name" content="Entalogics" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${service.title} | Entalogics`} />
        <meta name="twitter:description" content={service.tagline} />
        <meta name="twitter:image" content={service.ogImage || "https://entalogics.com/assets/og-image.jpg"} />
        
        {/* Additional SEO */}
        <link rel="canonical" href={`https://entalogics.com/services/${service.slug}`} />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": service.title,
              "description": service.tagline,
              "provider": {
                "@type": "Organization",
                "name": "Entalogics",
                "url": "https://entalogics.com"
              },
              "serviceType": service.title,
              "areaServed": "Worldwide",
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": `https://entalogics.com/services/${service.slug}`
              }
            })
          }}
        />
      </Head>
      
      <Layout>
        <div
          className={`bg-background dark:bg-[#0a1225] min-h-screen ${workSans.variable} ${openSans.variable} ${poppins.variable}`}
        >
        {/* Hero Section */}
        <section className="relative isolate w-full bg-gradient-to-br from-background dark:from-[#0a1225] to-muted/30 dark:to-gray-800/30 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-1 bg-primary/20 dark:bg-primary/30 rounded-full mr-2">
                    <div className="w-3 h-3 text-blue-600"><IconComponent size={12} /></div>
                  </div>
                  <span className="text-[11px] text-blue-600 tracking-wide font-poppins">{service.title} Expert</span>
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <Heading 
                    level={1}
                    gradient={true}
                    gradientText={service.title}
                    className="text-balance font-poppins"
                  >
                    Professional {service.title} Solutions
                  </Heading>

                  <Paragraph size="sm" className="text-pretty font-poppins" center={false}>
                    {service.tagline}
                  </Paragraph>
                </div>

                {/* Key Features Preview */}
                {service.detailedFeatures && (
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.detailedFeatures.slice(0, 4).map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-[13px] text-gray-600 dark:text-gray-400 font-poppins leading-snug"
                      >
                        <div className="w-4 h-4 text-blue-600 flex-shrink-0"><CheckCircle size={16} /></div>
                        <span className="truncate opacity-90">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  {/* Primary CTA */}
                  <Button
                    variant="primary"
                    size="md"
                    icon={<div className="w-4 h-4"><Rocket size={16} /></div>}
                    className="relative group shadow-md hover:shadow-lg ring-1 ring-primary/20 hover:ring-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 font-normal"
                  >
                    <Link href="/quote" className="flex items-center gap-2">
                      Get Started
                      <div className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"><ArrowRight size={16} /></div>
                    </Link>
                  </Button>

                  {/* Secondary CTA */}
                  <Button
                    variant="secondary"
                    size="md"
                    className="group border border-border hover:border-primary/40 bg-card/80 hover:bg-card/90 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 font-normal"
                  >
                    <Link href="#features" className="flex items-center gap-2">
                      Learn More
                      <div className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"><ArrowRight size={16} /></div>
                    </Link>
                  </Button>
                </div>

                {/* Trust Indicators - Matching About Page Design */}
                <div className="flex flex-wrap gap-2 pt-3">
                  <div className="inline-flex items-center gap-1.5 bg-card dark:bg-gray-800 rounded-full border border-border dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 px-3 py-1.5 group">
                    <div className="w-4 h-4 bg-gradient-to-br from-blue-500/10 to-blue-600/20 dark:from-blue-500/20 dark:to-blue-600/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="w-2.5 h-2.5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-xs font-semibold text-gray-900 dark:text-white font-poppins">Expert Team</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 bg-card dark:bg-gray-800 rounded-full border border-border dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 px-3 py-1.5 group">
                    <div className="w-4 h-4 bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 dark:from-yellow-500/20 dark:to-yellow-600/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Zap className="w-2.5 h-2.5 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <span className="text-xs font-semibold text-gray-900 dark:text-white font-poppins">Fast Delivery</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 bg-card dark:bg-gray-800 rounded-full border border-border dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 px-3 py-1.5 group">
                    <div className="w-4 h-4 bg-gradient-to-br from-green-500/10 to-green-600/20 dark:from-green-500/20 dark:to-green-600/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Award className="w-2.5 h-2.5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-xs font-semibold text-gray-900 dark:text-white font-poppins">Quality Code</span>
                  </div>
                </div>
              </div>

              {/* Right Visual - CONTROLLED HEIGHT */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card dark:from-gray-800 to-muted dark:to-gray-700 border-2 border-border/50 dark:border-gray-600/50 shadow-xl">
                  {service.thumbnail ? (
                    <div style={{ height: "440px" }} className="relative">
                      <img
                        src={service.thumbnail || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  ) : (
                    <div className="h-80 flex items-center justify-center p-8">
                      <div className="text-center space-y-4">
                        <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl inline-block border border-primary/20">
                          <div className="w-16 h-16 text-blue-600"><IconComponent size={64} /></div>
                        </div>
                        <Heading level={3} className="text-xl">
                          {service.title}
                        </Heading>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Bottom fade for hero background to avoid hard cut */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background dark:to-[#0a1225]"></div>
        </section>

                {/* Technologies Section */}
  {service.techStack && (
  <section className="pt-12  bg-transparent">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center ">
        <Heading 
          level={2}
          gradient={true}
          gradientText="Technologies"
          className="mb-6 font-poppins"
        >
          Technologies We Use
        </Heading>
        <Paragraph 
          size="sm" 
          className="max-w-2xl mx-auto text-pretty font-poppins " 
          center={true}
        >
          Cutting-edge tools and frameworks to deliver exceptional results
        </Paragraph>
      </div>

      {/* Icons Grid */}
      <div className="flex justify-center w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
        <div className="w-full max-w-6xl">
          <div className="relative flex justify-center">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                
                {/* Frontend Technologies */}
                {service.techStack.frontend && service.techStack.frontend.map((tech, index) => (
                  <div
                    key={`frontend-${index}`}
                    className="flex flex-col items-center gap-2 cursor-default"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      title={tech.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                    />
                    <span className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center max-w-20">
                      {tech.name}
                    </span>
                  </div>
                ))}

                {/* Backend Technologies */}
                {service.techStack.backend && service.techStack.backend.map((tech, index) => (
                  <div
                    key={`backend-${index}`}
                    className="flex flex-col items-center gap-2 cursor-default"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      title={tech.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                    />
                    <span className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center max-w-20">
                      {tech.name}
                    </span>
                  </div>
                ))}

                {/* Database Technologies */}
                {service.techStack.database && service.techStack.database.map((tech, index) => (
                  <div
                    key={`database-${index}`}
                    className="flex flex-col items-center gap-2 cursor-default"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      title={tech.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                    />
                    <span className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center max-w-20">
                      {tech.name}
                    </span>
                  </div>
                ))}

                {/* Infrastructure Technologies */}
                {service.techStack.infrastructure && service.techStack.infrastructure.map((tech, index) => (
                  <div
                    key={`infrastructure-${index}`}
                    className="flex flex-col items-center gap-2 cursor-default"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      title={tech.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                    />
                    <span className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center max-w-20">
                      {tech.name}
                    </span>
                  </div>
                ))}

                {/* Tools */}
                {service.techStack.tools && service.techStack.tools.map((tech, index) => (
                  <div
                    key={`tools-${index}`}
                    className="flex flex-col items-center gap-2 cursor-default"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      title={tech.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                    />
                    <span className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center max-w-20">
                      {tech.name}
                    </span>
                  </div>
                ))}

              </div>

            </div>
                        
                        </div>
                        </div>

      </div>
  </section>
)}

        {/* Features Section */}
        {service.detailedFeatures && (
          <section id="features" className="pt-12 md:pt-16 lg:pt-24 bg-background dark:bg-[#0a1225]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <Heading 
                  level={2}
                  gradient={true}
                  gradientText="Included"
                  className="mb-4 font-poppins"
                >
                  What's Included
                </Heading>
                <Paragraph size="lg" className="max-w-2xl mx-auto text-muted-foreground dark:text-gray-300" center={true}>
                  Everything you need for a successful project
                </Paragraph>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.detailedFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <Paragraph size="md" className="text-gray-900 dark:text-white font-medium leading-relaxed">
                        {feature}
                      </Paragraph>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Methodology Section */}
        {service.methodology && (
          <section className="pt-12 md:pt-16 lg:pt-24 pb-12 md:pb-16 lg:pb-24 bg-gradient-to-b from-background to-primary/5 dark:from-[#0a1225] dark:to-primary/5 relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              {/* Header */}
              <div className="max-w-3xl mx-auto text-center mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200/50 dark:border-blue-800/50 mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-sm font-medium text-primary font-poppins">Our Development Process</span>
                </div>

                <Heading 
                  level={2}
                  gradient={true}
                  gradientText={methodologyGradientWord}
                  className="mb-6 font-poppins"
                >
                  {service.methodology.title}
                </Heading>
                <Paragraph size="sm" className="max-w-2xl mx-auto text-pretty font-poppins">
                  {service.methodology.description}
                </Paragraph>
              </div>

              {/* Process Steps */}
              <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {service.methodology.steps.map((step, index) => (
                  <div 
                    key={index}
                    className="group relative"
                  >
                    {/* Card with modern design */}
                    <div className="relative h-full p-6 rounded-2xl bg-white/50 dark:bg-gray-800/30 backdrop-blur-md border border-white/20 dark:border-gray-700/20 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg dark:shadow-2xl dark:shadow-black/20">
                      {/* Decorative gradient */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Glassy overlay */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent dark:from-white/5 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative flex gap-6">
                        {/* Icon Container with Number */}
                        <div className="flex-none">
                          <div className="relative">
                            {/* Background blur effect */}
                            <div className="absolute -inset-1 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
                            {/* Icon box */}
                            <div className="relative w-16 h-16 rounded-xl bg-blue-50 dark:bg-gray-700 border border-blue-100 dark:border-gray-600 flex items-center justify-center transform group-hover:scale-105 group-hover:border-primary/50 transition-all duration-300">
                              <span className="text-2xl text-primary group-hover:scale-110 transition-transform">{step.icon}</span>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center gap-3 mb-2">
                            <Heading level={4} className="text-base font-semibold text-foreground dark:text-white font-poppins group-hover:text-primary transition-colors">
                              {step.title}
                            </Heading>
                          </div>
                          <Paragraph size="sm" className="text-gray-600 dark:text-gray-400 leading-relaxed font-poppins">
                            {step.description}
                          </Paragraph>
                          {/* Decorative line */}
                          <div className="pt-4">
                            <div className="h-px w-28 bg-gradient-to-r from-primary/40 to-transparent transition-all duration-300 group-hover:w-56 group-hover:from-primary/90"></div>
                          </div>
                        </div>
                      </div>

                      {/* Step label at bottom-right (no background) */}
                      <div className="absolute bottom-3 right-3">
                        <span className="text-primary text-xs font-semibold font-poppins">Step {(index + 1).toString().padStart(2, '0')}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Bottom fade into page background to avoid hard cut */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background dark:to-[#0a1225]"></div>
          </section>
        )}

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section (CTA hidden on service page) */}
        <div className="pt-12 md:pt-16 lg:pt-24 bg-muted/30 dark:bg-[#0a1225]">
          <FAQ showCta={false} />
        </div>

        {/* CTA Section */}
        <CTA />
        </div>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllServiceSlugs()
  const paths = slugs.map((slug) => ({
    params: { serviceSlug: [slug] },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const serviceSlug = params?.serviceSlug as string[]
  const slug = serviceSlug?.[0]

  if (!slug) {
    return {
      notFound: true,
    }
  }

  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      notFound: true,
    }
  }

  const { icon, ...serviceData } = service
  const iconName = serviceData.iconName || "Code"

  return {
    props: {
      service: {
        ...serviceData,
        iconName,
      },
    },
  }
}

export default ServicePage


