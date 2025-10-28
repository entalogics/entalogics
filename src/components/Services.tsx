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
  return (
    <div className="group relative h-full flex flex-col bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-xl border border-border dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      <div className="relative h-52 overflow-hidden rounded-t-2xl">
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
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="relative z-10 flex-grow flex flex-col p-3">
        <div className="flex-grow flex flex-col">
          {/* Service Icon */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-600/20 dark:from-blue-500/20 dark:to-purple-600/30 flex items-center justify-center border border-blue-200/50 dark:border-blue-700/50">
              <service.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
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

          {service.features && (
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
          )}
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
