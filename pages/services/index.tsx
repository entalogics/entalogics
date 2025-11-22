import React from "react"
import type { GetStaticProps } from "next"
import Link from "next/link"
import Head from "next/head"
import { ArrowRight, Check, Star, Shield, Building2, Zap } from "lucide-react"
import { servicesData } from "../../src/data/servicesData"
import { Poppins } from "next/font/google"
import Layout from "../../src/components/Layout"
import Heading from "../../src/components/ui/Heading"
import Paragraph from "../../src/components/ui/Paragraph"
import Button from "../../src/components/ui/Button"
import TrustedCompanies from "../../src/components/TrustedCompanies"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
})

interface Service {
  slug: string
  title: string
  tagline: string
  icon?: React.ElementType
  thumbnail?: string
  features?: string[] | string[][]
  pricing?: {
    starting: string
    description: string
  }
  timeline?: string
}

const allServices: Service[] = Object.values(servicesData)

interface ServiceCardProps {
  service: Service
  index: number
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  // Get the icon from the original servicesData
  const originalService = servicesData[service.slug]
  const IconComponent = originalService?.icon || Building2

  return (
    <div className="group relative h-full flex flex-col bg-transparent dark:bg-transparent backdrop-blur-2xl border border-gray-200 dark:border-white/15 rounded-md shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {/* Enhanced glassy overlay effect */}
      <div className="absolute inset-0 rounded-md bg-gradient-to-br from-white/20 via-white/5 to-transparent dark:from-white/10 dark:via-white/3 dark:to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
      {/* Additional glassy border effect */}
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      {/* Glassy shine effect */}
      <div className="absolute inset-0 rounded-md bg-gradient-to-br from-transparent via-white/10 to-transparent dark:via-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative h-52 overflow-hidden rounded-t-md">
        <img
          src={
            service.thumbnail ||
            "/placeholder.svg?height=200&width=400&query=professional service illustration"
          }
          alt={`${service.title} service illustration`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="relative z-10 flex-grow flex flex-col p-3">
        <div className="flex-grow flex flex-col">
          {/* Service Icon */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-600/20 dark:from-blue-500/20 dark:to-purple-600/30 flex items-center justify-center border border-blue-200/50 dark:border-blue-700/50">
              <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <Heading
              level={4}
              className="tracking-tight text-card-foreground dark:text-white leading-tight group-hover:text-primary transition-colors duration-300"
              gradient={false}
            >
              {service.title}
            </Heading>
          </div>

          <Paragraph
            size="sm"
            className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium mb-3 line-clamp-2"
            center={false}
          >
            {service.tagline}
          </Paragraph>

          {/* {service.features && (
            <div className="mb-2">
              <h5 className="font-semibold font-poppins text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2 text-xs">
                <Star className="w-3 h-3 text-blue-600 " />
                Key Features
              </h5>
              {Array.isArray(service.features) && typeof service.features[0] === "string" ? (
                <div className="grid grid-cols-2 gap-1">
                  {(service.features as string[]).map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-1 rounded-md hover:bg-muted/30 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <Check className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-poppins text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              ) : Array.isArray(service.features[0]) ? (
                <div className="grid grid-cols-2 gap-1">
                  {service.features
                    .flat()
                    .slice(0, 4)
                    .map(
                      (feature, idx) =>
                        feature && (
                          <div
                            key={idx}
                            className="flex items-start gap-2 p-1 rounded-md hover:bg-muted/30 dark:hover:bg-gray-700/50 transition-colors"
                          >
                            <Check className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ),
                    )}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-1">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-1 rounded-md hover:bg-muted/30 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <Check className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )} */}
        </div>

        <div className="mt-auto flex-shrink-0 pt-2 pb-1 mx-auto">
          {service.slug ? (
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center justify-center px-6  mx-auto py-2 rounded-xl bg-transparent text-primary font-semibold border-[1px] border-primary/20 dark:border-primary/30 hover:shadow-lg transition-all duration-300 group/btn text-sm hover:bg-primary/5 dark:hover:bg-primary/10"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  )
}

interface ServicesPageProps {
  services: Service[]
}

const ServicesPage: React.FC<ServicesPageProps> = ({ services }) => {
  return (
    <>
      <Head>
        <title>Our Services | Entalogics - Professional Software Development</title>
        <meta name="description" content="Explore our comprehensive range of software development services including SaaS development, AI-powered apps, web development, mobile apps, UI/UX design, and more." />
        <meta name="keywords" content="software development services, SaaS development, AI development, web development, mobile app development, UI UX design, Chromium browser development, maintenance support, Entalogics" />
        <meta name="author" content="Entalogics" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Services | Entalogics" />
        <meta property="og:description" content="Explore our comprehensive range of software development services including SaaS development, AI-powered apps, web development, mobile apps, UI/UX design, and more." />
        <meta property="og:image" content="https://entalogics.com/assets/og-services.jpg" />
        <meta property="og:url" content="https://entalogics.com/services" />
        <meta property="og:site_name" content="Entalogics" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Entalogics" />
        <meta name="twitter:description" content="Explore our comprehensive range of software development services including SaaS development, AI-powered apps, web development, mobile apps, UI/UX design, and more." />
        <meta name="twitter:image" content="https://entalogics.com/assets/og-services.jpg" />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://entalogics.com/services" />
        <meta name="theme-color" content="#3b82f6" />
      </Head>
      
      <Layout>
        <div className={`bg-background dark:bg-[#0a1225] min-h-screen ${poppins.variable}`}>
          {/* Hero Section */}
          <section className="relative isolate w-full bg-gradient-to-br from-background dark:from-[#0a1225] to-muted/30 dark:to-gray-800/30 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[size:32px_32px]"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 lg:py-16">
              <div className="text-center max-w-4xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted dark:bg-gray-800 border border-border dark:border-gray-700 mb-6">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-muted-foreground dark:text-gray-300">
                    Professional Services
                  </span>
                </div>

                {/* Main Heading */}
                <Heading level={1} className="mb-6" gradient={true} gradientText="Solutions">
                  Enterprise-Grade Solutions
                </Heading>

                <Paragraph size="sm" className="max-w-4xl mx-auto mb-8" center={true}>
                  Entalogics was founded with one goal — to bring clarity and logic into software development. We're a team of
                  engineers, designers, and product minds helping founders go from idea to launch… with systems that scale.
                </Paragraph>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <div className="inline-flex items-center gap-2 bg-card dark:bg-gray-800 rounded-full border border-border dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 px-4 py-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Expert Team</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-card dark:bg-gray-800 rounded-full border border-border dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 px-4 py-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Fast Delivery</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-card dark:bg-gray-800 rounded-full border border-border dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 px-4 py-2">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Quality Code</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid Section */}
          <section className="relative px-4 md:px-8 pt-4 pb-16 lg:pb-24 overflow-hidden bg-background dark:bg-[#0a1225]">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808004_1px,transparent_1px),linear-gradient(to_bottom,#80808004_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] dark:bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
                {services.map((service, index) => (
                  <div className="h-full w-full" key={service.slug}>
                    <ServiceCard service={service} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative px-4 md:px-8 pt-4 pb-16 lg:pb-24 bg-gradient-to-b from-background to-primary/5 dark:from-[#0a1225] dark:to-primary/5">
            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl text-center">
              <div className="space-y-6">
                <Heading level={2} gradient={true} gradientText="Amazing" className="mb-4">
                  Ready to Start Your Project?
                </Heading>
                <Paragraph size="sm" className="max-w-2xl mx-auto text-muted-foreground dark:text-gray-300" center={true}>
                  Transform your ideas into reality with our expert development team. Get started with a free
                  consultation and see how we can help your business grow.
                </Paragraph>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button
                    variant="primary"
                    size="md"
                    className="shadow-lg hover:shadow-xl ring-1 ring-primary/20 hover:ring-primary/40 font-normal"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      Get Free Quote
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>

                  <Button
                    variant="secondary"
                    size="md"
                    className="border border-border dark:border-gray-600 font-normal"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      Contact Us
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Trusted Companies Section */}
          <section className="py-20 bg-background dark:bg-[#0a1225]">
            <div className="container mx-auto px-4 md:px-8">
              <TrustedCompanies />
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Remove icon property to avoid serialization issues
  const serializableServices = allServices.map(({ icon, ...service }) => service)
  
  return {
    props: {
      services: serializableServices,
    },
  }
}

export default ServicesPage
