"use client"

import { useRef } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Poppins } from "next/font/google"
import Heading from "./ui/Heading"
import Paragraph from "./ui/Paragraph"
import Button from "./ui/Button"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "800", "900"], display: "swap" })

const portfolioItems = [
  {
    img: "https://framerusercontent.com/images/aazHOm8q1Dle8CaB8mAB23Iug.jpg?scale-down-to=1024",
    alt: "Portfolio 1",
    slug: "browser-ghuin",
    title: "Browser Development for Ghuin Company",
    caseStudy: "Details about browser development for Ghuin Company.",
  },
  {
    img: "https://framerusercontent.com/images/Sl4cFgp0S9EM73msgCfcHS06VU4.jpg",
    alt: "Portfolio 2",
    slug: "ai-saas",
    title: "AI SaaS Platform for Innovators",
    caseStudy: "Details about AI SaaS platform.",
  },
  {
    img: "https://framerusercontent.com/images/igYVAioJ71gEVk6mBJiW2rfDF8.jpg",
    alt: "Portfolio 3",
    slug: "ecommerce-redesign",
    title: "E-Commerce Redesign for SyntStore",
    caseStudy: "Details about e-commerce redesign.",
  },
  {
    img: "https://framerusercontent.com/images/hat47grEjBWfesZ7BaiBbeatQ.jpg",
    alt: "Portfolio 4",
    slug: "healthcare-app",
    title: "Healthcare App for Medix",
    caseStudy: "Details about healthcare app.",
  },
  {
    img: "https://framerusercontent.com/images/xgykL3t2ZWDB14YtJW3oI1dd5RA.jpg",
    alt: "Portfolio 5",
    slug: "web3-wallet",
    title: "Web3 Wallet for CryptoX",
    caseStudy: "Details about web3 wallet.",
  },
  {
    img: "https://framerusercontent.com/images/efhLWkFH29SDhozs7ZhlUgWAkjk.jpg",
    alt: "Portfolio 6",
    slug: "saas-dashboard",
    title: "SaaS Dashboard for Finlytics",
    caseStudy: "Details about SaaS dashboard.",
  },
  {
    img: "https://framerusercontent.com/images/bHK8tjLNwXKFljRK6Gy7KZ6sc.jpg",
    alt: "Portfolio 7",
    slug: "custom-crm",
    title: "Custom CRM for SalesPro",
    caseStudy: "Details about custom CRM.",
  },
  {
    img: "https://framerusercontent.com/images/7vdKibdfBacm0gh8GmZgZf2seUo.jpg",
    alt: "Portfolio 8",
    slug: "mobile-banking",
    title: "Mobile Banking for Bankly",
    caseStudy: "Details about mobile banking.",
  },
  {
    img: "https://framerusercontent.com/images/fDwBP8JIoY7d98D09zaO17aug.jpg",
    alt: "Portfolio 9",
    slug: "logistics-platform",
    title: "Logistics Platform for MoveIt",
    caseStudy: "Details about logistics platform.",
  },
]

const PortfolioCarousel = () => {
  const router = useRouter()
  const swiperRef = useRef<any>(null)

  return (
    <section id="portfolio" className="relative w-full px-2 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <Heading level={2} className="mb-4 text-center" gradient gradientText="Speaks for Itself">
          Our Work Speaks for Itself
        </Heading>
        <Paragraph size="sm" center className="mb-6 max-w-2xl mx-auto">
          From AI-native platforms to custom browsers and full-stack SaaS — here's what we've shipped.
        </Paragraph>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="portfolio-swiper"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        >
          {portfolioItems.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="flex flex-col items-center group"
                style={{
                  width: "100%",
                  maxWidth: 407,
                  minWidth: 240,
                  height: 308,
                  position: "relative",
                  margin: "0 auto",
                }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg glass-light dark:glass-dark border border-gray-300 dark:border-white/10">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={item.img || "/placeholder.svg"}
                      alt={item.alt}
                      fill
                      className="w-full h-full object-cover object-top rounded-2xl"
                      sizes="(max-width: 600px) 90vw, 407px"
                      priority={idx < 2}
                      onError={(e) => {
                        // Fallback to a gradient background if image fails to load
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        const parent = target.parentElement
                        if (parent) {
                          parent.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                        }
                      }}
                    />
                  </div>
                  <div
                    className="absolute inset-0 z-10"
                    style={{
                      background: "linear-gradient(180deg,rgba(11,13,20,0) 75%,#0b0d14 100%)",
                      borderRadius: 16,
                    }}
                  />
                  <div
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition-opacity duration-200"
                    style={{ touchAction: "manipulation" }}
                  >
                    <div className="portfolio-card-title text-white text-xs sm:text-sm md:text-base font-semibold text-center px-2 md:px-4 mb-2 md:mb-3 max-w-[90%] truncate md:whitespace-normal">
                      {item.title}
                    </div>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => router.push(`/portfolio/${item.slug}`)}
                      className="bg-white/90 text-black hover:bg-white border-none shadow"
                    >
                      view case study
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default PortfolioCarousel
