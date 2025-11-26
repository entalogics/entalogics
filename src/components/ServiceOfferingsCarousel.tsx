"use client"

import React, { useRef, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Smartphone, PenTool, Search, BarChart3, LucideIcon, Code, Globe, Palette, Monitor, Settings, Brain, Chrome } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Heading from "./ui/Heading"
import { servicesData, type Service } from "@/data/servicesData"

interface Offering {
  icon: LucideIcon | React.ComponentType<any>
  title: string
  description: string
  customIcon?: React.ReactNode
}

interface ServiceOfferingsCarouselProps {
  title: string
  description: string
  gradientText?: string
  offerings?: Offering[]
  useServicesData?: boolean
  serviceKeys?: string[]
}

// Truncate description to same character count
const truncateDescription = (description: string, maxLength: number = 180): string => {
  if (description.length <= maxLength) {
    return description
  }
  return description.substring(0, maxLength).trim() + "..."
}

// Convert Service to Offering format
const serviceToOffering = (service: Service): Offering => {
  return {
    icon: service.icon as LucideIcon,
    title: service.title,
    description: truncateDescription(service.description || service.tagline || ""),
  }
}

// Get offerings from services data
const getOfferingsFromServices = (serviceKeys?: string[]): Offering[] => {
  const services = serviceKeys 
    ? serviceKeys.map(key => servicesData[key]).filter(Boolean)
    : Object.values(servicesData)
  
  return services.slice(0, 6).map(serviceToOffering)
}

const defaultOfferings: Offering[] = [
  {
    icon: Smartphone,
    title: "Mobile App Design",
    description: "Leveraging top-notch technology and industry best practices, our design studio crafts unique mobile interfaces that provide a personalized experience. We focus on aesthetics and usability, ensuring complex functionality fits seamlessly on mobile screens while keeping navigation simple.",
  },
  {
    icon: PenTool,
    title: "Web Design",
    description: "We deliver web design solutions that enhance user engagement and distinguish you in a competitive landscape. By analyzing business goals, competitors, and audience needs, we create sleek, user-friendly web interfaces that drive results.",
  },
  {
    icon: Search,
    title: "UI/UX Consulting & Audit",
    description: "Our team conducts an expert review of your current design along with meaningful recommendations for improvement. We create a comprehensive action plan in order to optimize your product and drive user engagement in the most efficient way.",
  },
  {
    icon: Code,
    title: "SaaS Product Development",
    description: "We design & build SaaS platforms from idea to scale. Think dashboards, billing, auth, API, onboarding — we handle it all. Launch, scale, and automate your SaaS business with a team that handles everything.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "We build modern, scalable web applications that grow with your business. From responsive front-end interfaces to robust back-end systems, we deliver solutions that perform.",
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description: "Leverage artificial intelligence to automate processes, enhance user experiences, and unlock new possibilities for your business with cutting-edge AI technologies.",
  },
]

const ServiceOfferingsCarousel: React.FC<ServiceOfferingsCarouselProps> = ({
  title,
  description,
  gradientText,
  offerings,
  useServicesData = false,
  serviceKeys,
}) => {
  const swiperRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Determine which offerings to use
  let finalOfferings: Offering[] = defaultOfferings.map(offering => ({
    ...offering,
    description: truncateDescription(offering.description)
  }))
  if (offerings) {
    finalOfferings = offerings.map(offering => ({
      ...offering,
      description: truncateDescription(offering.description)
    }))
  } else if (useServicesData) {
    finalOfferings = getOfferingsFromServices(serviceKeys)
  }

  // Ensure all cards have the same height
  useEffect(() => {
    const equalizeHeights = () => {
      if (containerRef.current) {
        const cards = containerRef.current.querySelectorAll('.service-offerings-card')
        let maxHeight = 0
        
        // Reset heights first
        cards.forEach((card) => {
          const htmlCard = card as HTMLElement
          htmlCard.style.height = 'auto'
        })
        
        // Find max height
        cards.forEach((card) => {
          const htmlCard = card as HTMLElement
          const height = htmlCard.offsetHeight
          if (height > maxHeight) {
            maxHeight = height
          }
        })
        
        // Apply max height to all cards
        if (maxHeight > 0) {
          cards.forEach((card) => {
            const htmlCard = card as HTMLElement
            htmlCard.style.height = `${maxHeight}px`
          })
        }
      }
    }

    // Run after initial render
    const timer = setTimeout(() => {
      equalizeHeights()
    }, 200)
    
    // Re-run when window resizes
    window.addEventListener('resize', equalizeHeights)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', equalizeHeights)
    }
  }, [finalOfferings])

  return (
    <section className="relative bg-white dark:bg-[#0a1225] pt-4 pb-12 lg:pt-6 lg:pb-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <Heading level={2} className="mb-4 text-black dark:text-white" gradient={true} gradientText={gradientText}>
            {title}
          </Heading>
          <p className="max-w-3xl mx-auto text-[#374151] dark:text-gray-300 font-poppins text-center" style={{ fontSize: '16px', fontWeight: 400 }}>
            {description}
          </p>
        </div>

        {/* Carousel Container */}
        <div ref={containerRef} className="relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 1, spaceBetween: 16 },
              1024: { slidesPerView: 2, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="service-offerings-carousel"
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            onSlideChange={() => {
              // Equalize heights after slide changes
              setTimeout(() => {
                if (containerRef.current) {
                  const cards = containerRef.current.querySelectorAll('.service-offerings-card')
                  let maxHeight = 0
                  
                  cards.forEach((card) => {
                    const htmlCard = card as HTMLElement
                    htmlCard.style.height = 'auto'
                  })
                  
                  cards.forEach((card) => {
                    const htmlCard = card as HTMLElement
                    const height = htmlCard.offsetHeight
                    if (height > maxHeight) {
                      maxHeight = height
                    }
                  })
                  
                  if (maxHeight > 0) {
                    cards.forEach((card) => {
                      const htmlCard = card as HTMLElement
                      htmlCard.style.height = `${maxHeight}px`
                    })
                  }
                }
              }, 100)
            }}
          >
            {finalOfferings.map((offering, index) => (
              <SwiperSlide key={index}>
                <div className="service-offerings-card group relative overflow-hidden bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-xl rounded-md p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-500 flex flex-col h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/10 to-purple-50/10 dark:via-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-4 flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      {offering.customIcon ? (
                        offering.customIcon
                      ) : index === 2 && offering.icon === Search ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Search className="w-5 h-5 text-white absolute top-1 left-1" />
                          <BarChart3 className="w-4 h-4 text-white absolute bottom-1 right-1" />
                        </div>
                      ) : (
                        React.createElement(offering.icon, { className: "w-7 h-7 text-white" })
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-black dark:text-white mb-3 font-poppins flex-shrink-0 truncate" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>
                    {offering.title.length > 40 ? `${offering.title.substring(0, 40)}...` : offering.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-poppins flex-grow line-clamp-5" style={{ fontSize: '14px', fontWeight: 400, display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {offering.description}
                  </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Arrow Buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center shadow-md transition-all duration-300 -ml-12 lg:-ml-14 cursor-pointer"
            aria-label="Previous slide"
            type="button"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center shadow-md transition-all duration-300 -mr-12 lg:-mr-14 cursor-pointer"
            aria-label="Next slide"
            type="button"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Custom Styles */}
        <style jsx global>{`
          .service-offerings-carousel {
            padding-bottom: 40px;
          }
          .service-offerings-carousel .swiper-slide {
            height: auto;
            display: flex;
          }
          .service-offerings-card {
            width: 100%;
            height: 100%;
          }
          .service-offerings-carousel .swiper-slide h3 {
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            max-width: 100% !important;
            line-height: 1.5 !important;
          }
          .service-offerings-carousel .swiper-slide p {
            display: -webkit-box !important;
            -webkit-line-clamp: 5 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            line-height: 1.5 !important;
            max-height: calc(1.5em * 5) !important;
          }
          .service-offerings-carousel .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #d1d5db;
            opacity: 1;
            margin: 0 4px;
            cursor: pointer;
          }
          .service-offerings-carousel .swiper-pagination-bullet-active {
            background-color: #3b82f6;
            width: 8px;
            height: 8px;
          }
          .service-offerings-carousel .swiper-pagination {
            bottom: 0 !important;
            text-align: center;
          }
          @media (max-width: 768px) {
            .swiper-button-prev-custom,
            .swiper-button-next-custom {
              display: none;
            }
          }
        `}</style>
      </div>
    </section>
  )
}

export default ServiceOfferingsCarousel
