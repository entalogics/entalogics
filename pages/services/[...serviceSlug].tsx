import React, { useEffect, useRef, useState } from "react"
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
  FileText,
  BarChart3,
  Check,
} from "lucide-react"
import Link from "next/link"
import Head from "next/head"
import Layout from "../../src/components/Layout"
import Testimonials from "../../src/components/Testimonials"
import FAQ from "../../src/components/FAQ"
import CTA from "../../src/components/CTA"
import FounderCTASection from "../../src/components/FounderCTASection"
import Heading from "../../src/components/ui/Heading"
import Paragraph from "../../src/components/ui/Paragraph"
import Button from "../../src/components/ui/Button"
import ServiceOfferingsCarousel from "../../src/components/ServiceOfferingsCarousel"
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

// Process Steps Component with Scroll Animation
const ProcessStepsSection: React.FC<{ steps: Array<{ title: string; description: string }> }> = ({ steps }) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      // rect.top is relative to viewport, convert to document coordinates
      const sectionTop = rect.top + scrollTop
      const sectionHeight = rect.height
      const sectionBottom = sectionTop + sectionHeight

      // Calculate progress based on viewport center position
      const viewportCenter = scrollTop + windowHeight / 2
      let progress = 0

      if (viewportCenter < sectionTop) {
        // Viewport center hasn't reached section yet
        progress = 0
      } else if (viewportCenter > sectionBottom) {
        // Viewport center has passed section
        progress = 1
      } else {
        // Viewport center is within section - calculate linear progress
        progress = (viewportCenter - sectionTop) / sectionHeight
      }

      setScrollProgress(Math.max(0, Math.min(1, progress)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  // Default steps if not provided
  const defaultSteps = [
    {
      title: "Discuss",
      description: "This stage requires close cooperation with the client to grasp and document all the demands and objectives. We conduct interviews with stakeholders, hold strategy sessions, validate business ideas, and define user personas.",
      completed: true,
    },
    {
      title: "Research",
      description: "Next, we perform an end-to-end analysis of the market, competitors, and target audience. Additionally, by working on product positioning, UX research, and functional decomposition we gather the information necessary to make a step-by-step plan for design implementation.",
      completed: true,
    },
    {
      title: "Prototyping",
      description: "To bring concepts to life with precision, we create user flows, high-fidelity prototypes, and interactive wireframes. This stage also involves effectiveness validation through iterative testing, metrics analysis, and feedback collection. With the obtained data, we introduce improvements to ensure the future UI is intuitive as well as aesthetically pleasing.",
      completed: false,
    },
    {
      title: "Design Process",
      description: "The visual design is developed using responsive principles and the latest technology. Once complete, the design files are handed over to developers, and close collaboration ensures accurate implementation.",
      completed: false,
    },
    {
      title: "Testing",
      description: "Rigorous testing ensures each design is functional and scalable. Following a successful launch, continuous maintenance and support ensure optimal performance and high satisfaction.",
      completed: false,
    },
  ]

  // Calculate which steps are completed based on scroll progress
  // Each step turns green when progress line touches it
  const getStepCompletion = (index: number, progress: number, totalSteps: number) => {
    // Each step completes when progress reaches its position
    // Step 1 at ~20% (0.2), Step 2 at ~40% (0.4), Step 3 at ~60% (0.6), etc.
    const stepThreshold = (index + 1) / totalSteps // 0.2, 0.4, 0.6, 0.8, 1.0
    return progress >= stepThreshold
  }

  const processSteps = steps && steps.length > 0 
    ? steps.map((step, index) => ({ ...step, index }))
    : defaultSteps.map((step, index) => ({ ...step, index }))

  return (
    <section ref={sectionRef} className="bg-white dark:bg-[#0a1225]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 xl:pt-24 pb-4 sm:pb-6 lg:pb-8">
        <div className="grid lg:grid-cols-[40%_60%] gap-12 lg:gap-8 items-start">
          {/* Left Side - Title */}
          <div className="lg:sticky lg:top-24 lg:text-right">
            <Heading 
              level={2}
              gradient={true}
              gradientText="Process"
              className="mb-4 text-[#1A2B48] dark:text-white font-poppins text-left lg:text-right"
            >
              UI/UX Design Process: Step-by-step
            </Heading>
          </div>

          {/* Right Side - Timeline */}
          <div className="relative">
            {/* Central Vertical Line - Full Height Background */}
            <div 
              className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"
            />
            
            {/* Central Vertical Line - Progress Fill (moves with scroll) */}
            <div 
              ref={lineRef}
              className="absolute left-4 top-0 w-0.5 bg-[#4EBA85] transition-all duration-300 ease-out"
              style={{
                height: `${Math.max(0, Math.min(100, scrollProgress * 100))}%`,
                opacity: scrollProgress > 0 ? 1 : 0,
              }}
            />

            {/* Steps */}
            <div className="relative space-y-8">
              {processSteps.map((step, index) => {
                const isCompleted = getStepCompletion(index, scrollProgress, processSteps.length)
                
                // Calculate smooth transition opacity for each step
                const stepThreshold = (index + 1) / processSteps.length
                const fadeRange = 0.05 // 5% fade range for smooth transition
                const fadeStart = stepThreshold - fadeRange
                const fadeEnd = stepThreshold + fadeRange
                
                let circleOpacity = 0
                if (scrollProgress < fadeStart) {
                  circleOpacity = 0 // Gray
                } else if (scrollProgress > fadeEnd) {
                  circleOpacity = 1 // Green
                } else {
                  // Smooth transition between gray and green
                  circleOpacity = (scrollProgress - fadeStart) / (fadeEnd - fadeStart)
                }

                return (
                  <div key={index} className="relative flex gap-6">
                    {/* Circle Indicator */}
                    <div className="flex-none relative z-10">
                      <div className="relative w-8 h-8">
                        {/* Gray background (fades out when progress reaches step) */}
                        <div
                          className="absolute top-0 left-0 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-300 dark:bg-gray-600 transition-opacity duration-500"
                          style={{
                            opacity: 1 - circleOpacity
                          }}
                        >
                          {!isCompleted && (
                            <span className="text-sm font-semibold text-white font-poppins">
                              {index + 1}
                            </span>
                          )}
                        </div>
                        
                        {/* Green background with checkmark (fades in when progress reaches step) */}
                        <div
                          className="absolute top-0 left-0 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-[#4EBA85] transition-opacity duration-500"
                          style={{
                            opacity: circleOpacity
                          }}
                        >
                          <Check className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1 min-w-0">
                      <h3 className="text-lg font-bold text-[#1A2B48] dark:text-white mb-2 font-poppins break-words">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#374151] dark:text-gray-400 leading-relaxed font-poppins break-words">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
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
        <title>{`${service?.title || 'Service'} | Entalogics`}</title>
        <meta name="description" content={service?.tagline || 'Professional software development services'} />
        <meta name="keywords" content={`${service?.title || 'Service'}, ${(service?.title || 'service').toLowerCase()} development, custom ${(service?.title || 'service').toLowerCase()}, ${(service?.title || 'service').toLowerCase()} services, software development, web development, mobile app development, AI development, SaaS development, Chromium browser development, UI UX design, maintenance support, Entalogics`} />
        <meta name="author" content="Entalogics" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${service?.title || 'Service'} | Entalogics`} />
        <meta property="og:description" content={service?.tagline || 'Professional software development services'} />
        <meta property="og:image" content={service.ogImage || "https://entalogics.com/assets/og-image.jpg"} />
        <meta property="og:url" content={`https://entalogics.com/services/${service.slug}`} />
        <meta property="og:site_name" content="Entalogics" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${service?.title || 'Service'} | Entalogics`} />
        <meta name="twitter:description" content={service?.tagline || 'Professional software development services'} />
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
              "name": service?.title || 'Service',
              "description": service?.tagline || 'Professional software development services',
              "provider": {
                "@type": "Organization",
                "name": "Entalogics",
                "url": "https://entalogics.com"
              },
              "serviceType": service?.title || 'Service',
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
          className={`bg-white dark:bg-[#0a1225] min-h-screen ${workSans.variable} ${openSans.variable} ${poppins.variable}`}
        >
        {/* Hero Section */}
        <section className="relative isolate w-full bg-white dark:bg-[#0a1225] overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 xl:pt-24 pb-4 sm:pb-6 lg:pb-8">
            {/* Breadcrumbs */}
            <div className="mb-6 sm:mb-8">
              <nav className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-500">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <span className="text-gray-500 dark:text-gray-400">{service.title}</span>
              </nav>
            </div>

            <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start">
              {/* Left Content */}
              <div className="space-y-6">
                {/* Main Heading - Two Lines */}
                <div className="space-y-4">
                  <Heading level={1} className="text-[#1A2B48] dark:text-white whitespace-pre-line" gradient={true} gradientText="services">
                    {service.title + "\nservices"}
                  </Heading>

                  {/* Descriptive Paragraph */}
                  <p className="leading-relaxed max-w-2xl font-poppins text-[#374151] dark:text-gray-300" style={{ fontSize: '16px', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal' }}>
                    {service.tagline || `Extend your tech capabilities with our ${service.title.toLowerCase()} services. Access proven expertise and strong skills to address the most specific project challenges and get ahead of the competition with advanced solutions.`}
                  </p>
                </div>

                {/* CTA Button - Green with Arrow */}
                <div className="pt-4">
                  <Link href="/contact">
                    <button className="group relative inline-flex items-center gap-2.5 bg-[#4EBA85] hover:bg-[#45a875] text-white font-semibold px-5 pr-2 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                      <span className="font-poppins font-semibold" style={{ fontSize: '14px', fontWeight: 600 }}>Get in touch</span>
                      <div className="flex items-center justify-center w-7 h-7 bg-[#1A2B48] rounded-full flex-shrink-0">
                        <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </button>
                  </Link>
                  </div>
                </div>

              {/* Right Content - Clutch and Upwork Badges */}
              <div className="flex flex-col gap-8 items-start lg:items-end">
                 {/* Clutch Rating */}
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
                       <path fill="#19313C" d="M19.463 3.103c-6.705.93-11.834 5.084-13.76 11.145-.75 2.346-.926 6.452-.4 8.92.5 2.396 2.276 5.867 3.902 7.626 1.777 1.955 4.454 3.617 7.156 4.497 2.026.66 2.527.709 5.73.709 3.177 0 3.677-.073 5.503-.684 2.377-.831 4.354-1.956 6.13-3.52L35 30.672l-2.577-2.542c-1.401-1.368-2.677-2.517-2.802-2.517s-.676.39-1.226.88c-.55.489-1.626 1.173-2.402 1.54-1.226.562-1.666.967-3.993.967-2.377 0-2.812-.405-4.213-1.04-3.127-1.394-5.079-4.327-5.279-7.87-.3-5.622 3.503-9.606 9.182-9.679 2.602-.024 4.403.538 6.38 1.98l1.601 1.197 2.677-2.64L35 8.335l-1.576-1.271c-1.701-1.369-5.354-3.226-7.23-3.666-1.627-.367-5.08-.514-6.73-.294"></path>
                       <path fill="#FE3D2E" d="M19.312 14.59c-1.326.587-2.727 2.224-3.102 3.617-.575 2.249.425 4.717 2.427 5.94 3.778 2.346 8.581-.22 8.581-4.571-.025-3.226-2.276-5.45-5.554-5.45-.75 0-1.776.22-2.352.464"></path>
                     </svg>
                   </div>
                   <div className="flex flex-col gap-1">
                     <div className="flex items-center gap-2">
                       <span className="text-gray-900 dark:text-white font-poppins" style={{ fontSize: '16px', fontWeight: 600 }}>5.0</span>
                       <div className="flex gap-0.5">
                         {[...Array(5)].map((_, i) => (
                           <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFD700" className="w-4 h-4">
                             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                           </svg>
                         ))}
                    </div>
                  </div>
                     <p className="text-xs font-normal text-gray-500 dark:text-gray-400 font-poppins">Based on 30+ Reviews</p>
                    </div>
                  </div>

                {/* Upwork Badges */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
                      <path fill="#4EBA85" d="M29.912 12.487c-3.74 0-6.561 2.469-7.69 6.349-1.764-2.751-3.175-5.855-3.95-8.536H14.32v10.37c0 2.046-1.693 3.74-3.74 3.74-2.045 0-3.738-1.694-3.738-3.74v-10.3h-3.81v10.37c0 4.304 3.457 7.76 7.69 7.76s7.69-3.456 7.69-7.76v-1.763c.775 1.552 1.763 3.245 2.821 4.727l-2.469 11.499h4.021l1.693-8.395c1.552.987 3.316 1.552 5.433 1.552 4.303 0 7.83-3.528 7.83-8.043 0-4.303-3.527-7.83-7.83-7.83m0 11.922c-1.552 0-3.175-.705-4.445-1.764l.423-1.552v-.07c.282-1.693 1.2-4.515 4.092-4.515a3.944 3.944 0 0 1 3.95 3.95c-.07 2.188-1.975 3.951-4.02 3.951"></path>
                    </svg>
                  </div>
                   <div className="flex flex-col gap-2">
                     <div className="flex items-center gap-1.5">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-pink-500">
                         <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                       </svg>
                       <span className="text-gray-900 dark:text-white font-poppins" style={{ fontSize: '12px', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal' }}>TOP RATED PLUS</span>
                    </div>
                     <div className="flex items-center gap-1.5">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-blue-500">
                         <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                       </svg>
                       <span className="text-gray-900 dark:text-white font-poppins" style={{ fontSize: '12px', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal' }}>100% Job Success</span>
                  </div>
                </div>
              </div>
                        </div>
                      </div>
                    </div>
        </section>

        {/* Our Awards Section */}
        <section className="relative bg-white dark:bg-[#0a1225] pt-6 pb-12 lg:pt-8 lg:pb-16">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Heading level={2} className="mb-8 sm:mb-12 text-[#1A2B48] dark:text-white" gradient={true} gradientText="awards">
              Our awards
            </Heading>
            
            {/* Award Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  title: "Top App\nDevelopment\nCompany",
                  subtitle: "Tallinn 2025",
                  icon: "award"
                },
                {
                  title: "Top Company\nNext.js Developer",
                  subtitle: "2025",
                  icon: "verified"
                },
                {
                  title: "Top Software\nTesting Company",
                  subtitle: "2025",
                  icon: "award"
                },
                {
                  title: "Global\nAward",
                  subtitle: "Spring 2025",
                  icon: "award"
                },
                {
                  title: "Top Company\nNext.js Developer",
                  subtitle: "2023",
                  icon: "verified"
                },
                {
                  title: "Top Software\nTesting Company",
                  subtitle: "2023",
                  icon: "award"
                },
              ].map((badge, index) => (
                <div
                  key={index}
                  className="relative group flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  {/* Award Badge SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="130" height="135" viewBox="0 0 214 221" fill="none" className="text-yellow-400 dark:text-yellow-500 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors duration-300">
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

                  {/* Text Content - Centered */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center" style={{ top: '-8px' }}>
                    {/* Icon at top */}
                    <div className="mb-1">
                      {badge.icon === "award" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 dark:text-gray-400 w-6 h-6 sm:w-7 sm:h-7">
                          <circle cx="12" cy="8" r="6"></circle>
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 dark:text-gray-400 w-6 h-6 sm:w-7 sm:h-7">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                  )}
                </div>

                    {/* Award Title */}
                    <div className="text-[10px] sm:text-[11px] font-bold text-gray-800 dark:text-gray-200 leading-tight mb-1 max-w-[100px] sm:max-w-[110px]">
                      {badge.title.split('\n').map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>

                    {/* Year/Date */}
                    <div className="text-[9px] sm:text-[10px] text-gray-600 dark:text-gray-400 font-medium">
                      {badge.subtitle}
              </div>
            </div>
          </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <ServiceOfferingsCarousel
          title={`What We Offer: Our ${service.title.includes("UI/UX") || service.title.includes("Design") ? "UI/UX Design" : service.title} Services`}
          description="Our company creates highly functional and easy-to-use designs with a creative touch. Entalogics has a proven track record of designing visually striking interfaces that resonate with users' needs and help establish an emotional connection."
          gradientText={service.title.includes("UI/UX") || service.title.includes("Design") ? "UI/UX" : service.title.split(" ")[0]}
          useServicesData={true}
        />

                {/* Technologies Section */}
  {service.techStack && (
  <section className="pt-8 sm:pt-10 md:pt-12 bg-transparent">
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

        {/* What's Included Section */}
        {service.detailedFeatures && (
          <section id="features" className="pt-12 md:pt-16 lg:pt-24 bg-white dark:bg-[#0a1225]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <Heading 
                  level={2}
                  gradient={true}
                  gradientText="Included"
                  className="mb-4 text-[#1A2B48] dark:text-white font-poppins"
                >
                  What's Included
                </Heading>
              </div>

              {/* Two Cards Layout */}
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
                {/* Left Card - Free Custom Design Creation */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-xl rounded-xl p-6 lg:p-8 shadow-sm border border-gray-200/40 dark:border-gray-700/40 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/10 to-purple-50/10 dark:via-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
              {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-white" />
                </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white font-poppins">
                      Free Custom Design Creation
                    </h3>
              </div>

                  {/* Intro Text */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-poppins leading-relaxed">
                    The discount is provided on ordering a full cycle development
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#4EBA85] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-poppins">
                        By choosing Entalogics to cover the complex development cycle, you can save money on design services and get a custom design solution developed in strict alignment with your requirements and business objectives.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#4EBA85] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-poppins">
                        Get your solution developed from scratch and reduce expenses with our special deal that includes free custom design creation.
                      </p>
                    </li>
                  </ul>
                          </div>
                        </div>

                {/* Right Card - Free Design Audit */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-xl rounded-xl p-6 lg:p-8 shadow-sm border border-gray-200/40 dark:border-gray-700/40 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/10 to-purple-50/10 dark:via-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white font-poppins">
                      Free Design Audit
                    </h3>
                          </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#4EBA85] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-poppins">
                        Entalogics provides a free design audit if you choose us for the redesign or implementation.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#4EBA85] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-poppins">
                        Using established usability principles, we analyze your design's aesthetics, consistency, and user interface elements, ensure accessibility compliance, and test performance across devices.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#4EBA85] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-poppins">
                        We provide a detailed report with issues and recommendations for improvement.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#4EBA85] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-poppins">
                        Benefit from our problem-solving skills, efficiency, and expertise in order to create intuitive and accessible designs that enhance user experience.
                      </p>
                    </li>
                  </ul>
                          </div>
                        </div>
                      </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <Link href="/contact">
                  <button className="group relative inline-flex items-center gap-2.5 bg-[#4EBA85] hover:bg-[#45a875] text-white font-semibold px-5 pr-2 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                    <span className="font-poppins" style={{ fontSize: '14px', fontWeight: 600 }}>Let's cooperate</span>
                    <div className="flex items-center justify-center w-7 h-7 bg-[#1A2B48] rounded-full flex-shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
                      </div>
                  </button>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Process Steps Section */}
        {service.methodology && (
          <ProcessStepsSection steps={service.methodology.steps} />
        )}

        {/* Testimonials Section */}
        <div className="pt-8 md:pt-10 lg:pt-12">
        <Testimonials />
        </div>

        {/* FAQ Section (CTA hidden on service page) */}
        <div className="pt-12 md:pt-16 lg:pt-24 bg-muted/30 dark:bg-[#0a1225]">
          <FAQ showCta={false} />
        </div>

        {/* CTA Section */}
        <FounderCTASection />
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


