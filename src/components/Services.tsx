import type React from "react"
import Link from "next/link"
import { ArrowRight, Check, Star, Building2, Zap, Shield } from "lucide-react"
import { servicesData } from "../data/servicesData"
import { Poppins } from "next/font/google"
import Heading from "./ui/Heading"
import Paragraph from "./ui/Paragraph"
import Button from "./ui/Button"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
})

interface Service {
  slug: string
  title: string
  tagline: string
  icon: React.ElementType
  thumbnail?: string
  features?: string[] | string[][]
  pricing?: {
    starting: string
    description: string
  }
  timeline?: string
}

const allServices: Service[] = Object.values(servicesData).filter((service) => service.slug !== "maintenance-support")
const servicesList: Service[] = allServices.slice(0, 6) // Show only first 6 services

interface ServiceCardProps {
  service: Service
  index: number
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const cardContent = (
    <div className="relative h-full flex flex-col bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-xl border border-border dark:border-gray-700 rounded-md shadow-sm transition-all duration-500 overflow-hidden transform group-hover:shadow-xl group-hover:-translate-y-2">
      <div className="relative h-52 overflow-hidden rounded-t-md border-b">
        <img
          src={
            service.thumbnail ||
            "/placeholder.svg?height=200&width=400&query=professional service illustration" ||
            "/placeholder.svg" ||
            "/placeholder.svg" ||
            "/placeholder.svg" ||
            "/placeholder.svg" ||
            "/placeholder.svg" ||
            "/placeholder.svg"
          }
          alt={`${service.title} service illustration`}
          className="w-full h-full object-cover transition-transform duration-500 "
        />
      </div>

      <div className="relative z-10 flex-grow flex flex-col p-3 pb-1">
        <div className="flex-grow flex flex-col">
          <Paragraph
            size="sm"
            className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium mb-3 line-clamp-3 "
            center={false}
          >
            {service.tagline}
          </Paragraph>

        
        </div>

        <div className="mt-auto flex-shrink-0 pt-2 pb-1 mx-auto">
          <span className="group inline-flex items-center justify-center px-6 mx-auto py-2 rounded-xl bg-transparent text-primary font-semibold text-sm transition-all duration-200">
            <span className="relative inline-flex items-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </span>
        </div>
      </div>
    </div>
  )

  if (service.slug) {
    return (
      <Link
        href={`/services/${service.slug}`}
        className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
        aria-label={`Learn more about ${service.title}`}
      >
        {cardContent}
      </Link>
    )
  }

  return <div className="group block h-full">{cardContent}</div>
}

const Services = () => {
  return (
    <section id="services" className="relative  px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        <div className="text-center mb-8 md:mb-10 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted dark:bg-gray-800 border border-border dark:border-gray-700 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-muted-foreground dark:text-gray-300 ">
              Professional Services
            </span>
          </div>

          <Heading level={2} className="mb-6" gradient={true} gradientText="Software Development">
          Our Software Development Services
          </Heading>

           <Paragraph size="sm" className="max-w-4xl mx-auto" center={true}>
           Our company provides a wide range of full-cycle software development services. Focus on your core business activities and get an advanced digital product developed by our agency.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-full">
          {servicesList.map((service, index) => (
            <div className="h-full w-full" key={service.slug}>
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-12">
          <Link href="/services">
            <Button
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="shadow-lg hover:shadow-xl hover:-translate-y-1 ring-1 ring-primary/20 hover:ring-primary/40"
            >
              View All Services
            </Button>
          </Link>
        </div>
    
      </div>
    </section>
  )
}

export default Services
