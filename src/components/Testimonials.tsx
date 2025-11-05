"use client"

import React, { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Poppins } from "next/font/google"
import { MessageSquare } from "lucide-react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
})

interface Testimonial {
  id: number
  text: string
  author: string
  role: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Working with this team we game-changer. The AI-enhanced they delivered helped reduce bounce rates by 40% engagement like never before.",
    author: "Lauren M",
    role: "hardware Technician",
    avatar: "https://demo.awaikenthemes.com/nextmind/wp-content/uploads/2025/05/author-3.jpg"
  },
  {
    id: 2,
    text: "Working with this team we game-changer. The AI-enhanced they delivered helped reduce bounce rates by 40% engagement like never before.",
    author: "Jason M",
    role: "hardware Technician",
    avatar: "https://demo.awaikenthemes.com/nextmind/wp-content/uploads/2025/05/author-2.jpg"
  },
  {
    id: 3,
    text: "Working with this team we game-changer. The AI-enhanced they delivered helped reduce bounce rates by 40% engagement like never before.",
    author: "Jenny W",
    role: "fintech startup",
    avatar: "https://demo.awaikenthemes.com/nextmind/wp-content/uploads/2025/05/author-1.jpg"
  },
]

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials-section"
      className="relative bg-white dark:bg-[#0a1225] py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Background Grid Pattern - Adapts to theme */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute inset-0 dark:opacity-[0.03] opacity-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial Gradients - Adapts to theme */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[100px] opacity-40 dark:opacity-60" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 dark:bg-orange-500/15 rounded-full blur-[100px] opacity-40 dark:opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge - Separate on top like other components */}
        <div className="text-center mb-8 md:mb-10 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted dark:bg-gray-800 border border-border dark:border-gray-700 mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-muted-foreground dark:text-gray-300">
              Testimonials
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left Section - Text Content */}
          <div className="space-y-8">
            {/* Main Heading - Larger and more prominent */}
            <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white leading-[1.1] tracking-tight ${poppins.className}`}>
              Trusted by clients{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                worldwide
              </span>
            </h2>

            {/* Paragraph - Exact text styling */}
            <p className="text-[15px] sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl font-normal">
              From startups to enterprises, our clients trust us to deliver exceptional software solutions. See what they say about working with Entalogics and our commitment to quality, transparency, and results.
            </p>
          </div>

          {/* Right Section - Testimonial Slider */}
          <div className="relative mt-8 lg:mt-0 w-full lg:max-w-md lg:w-auto">
            {/* Rotated Blurred Background Card */}
            <div className="absolute inset-0 z-[1] transform -rotate-6 -translate-x-1 translate-y-1 rounded-2xl bg-black/20 dark:bg-white/30  opacity-1 "></div>

            {/* Static Card Background */}
            <div 
              className="relative rounded-2xl z-20 overflow-hidden px-6 pt-8 pb-[3vw] md:pt-12 md:pb-10 md:px-0 w-[97%] md:w-full h-[280px] md:h-auto md:min-h-[398px] bg-[#1d4bcf]/95"
            >

              {/* Watermark Quote Icon - Static */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-25 z-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  className="md:w-10 md:h-10"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.0888 10.4861C24.1019 9.06677 26.0168 7.53881 28.6238 6.26679C29.3013 5.93622 28.9957 4.91165 28.2478 5.00625C22.7703 5.69911 19.22 8.09805 17.2812 11.6656C16.5602 12.9924 16.1071 14.4047 15.8659 15.8464C15.7068 16.797 15.6648 17.5104 15.6648 18.3343C15.6648 22.0162 18.6496 25.001 22.3315 25.001C26.0134 25.001 28.9981 22.0162 28.9981 18.3343C28.9981 14.6524 25.9657 11.6656 22.481 11.6656C22.6649 11.1608 22.709 11.0182 23.0888 10.4861ZM8.42212 10.4861C9.43522 9.06677 11.3502 7.53881 13.9571 6.26679C14.6346 5.93622 14.329 4.91165 13.5811 5.00625C8.10361 5.69911 4.55332 8.09805 2.61457 11.6656C1.89349 12.9924 1.44046 14.4047 1.19921 15.8464C1.04013 16.797 0.998125 17.5104 0.998125 18.3343C0.998125 22.0162 3.98289 25.001 7.66479 25.001C11.3467 25.001 14.3315 22.0162 14.3315 18.3343C14.3315 14.6524 11.2991 11.6656 7.81437 11.6656C7.99821 11.1608 8.04236 11.0182 8.42212 10.4861Z"
                    fill="white"
                  />
                </svg>
              </div>

              {/* Swiper for Content Only */}
              <div className="relative overflow-hidden">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet testimonial-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active testimonial-bullet-active",
                    el: ".testimonial-pagination",
                  }}
                  loop={true}
                  className="testimonial-swiper"
                >
                  {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="relative z-10 px-0 md:px-8">
                        {/* Profile Info - At Top */}
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                          <div className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] md:w-[56px] md:h-[56px] rounded-full overflow-hidden flex-shrink-0 border-2 border-white/40">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.author}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=random&color=fff&size=128`
                              }}
                            />
                          </div>
                          <div>
                            <div className={`text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl ${poppins.className}`}>
                              {testimonial.author}
                            </div>
                            <div className="text-white/85 text-xs sm:text-sm md:text-base font-normal">
                              {testimonial.role}
                            </div>
                          </div>
                        </div>

                        {/* Light Gray Line */}
                        <div className="w-full h-px bg-white/20 mb-4 md:mb-6"></div>

                        {/* Testimonial Text - Below */}
                        <div>
                          <p className="text-white text-[15px] sm:text-base md:text-lg lg:text-xl leading-[1.6] md:leading-[1.7] font-normal">
                            "{testimonial.text}"
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Pagination - Bottom Left Inside Card */}
              <div className="testimonial-pagination absolute bottom-4 left-6 md:bottom-6 md:left-10 z-20"></div>
            </div>

            {/* Custom Pagination Styles - Bottom Left */}
            <style jsx global>{`
              .testimonial-swiper {
                overflow: hidden !important;
                width: 100%;
              }

              .testimonial-swiper .swiper-wrapper {
                align-items: stretch;
              }

              .testimonial-swiper .swiper-slide {
                height: auto;
                width: 100% !important;
                overflow: hidden;
              }

              .testimonial-pagination {
                position: absolute !important;
                bottom: 1rem !important;
                left: 1.5rem !important;
                width: auto !important;
                display: flex !important;
                justify-content: flex-start !important;
                gap: 0.5rem !important;
              }

              @media (min-width: 768px) {
                .testimonial-pagination {
                  bottom: 1.5rem !important;
                  left: 2.5rem !important;
                }
              }

              .testimonial-pagination .testimonial-bullet {
                width: 8px;
                height: 8px;
                background: transparent;
                border: 2px solid rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                opacity: 1;
                transition: all 0.3s ease;
                cursor: pointer;
                margin: 0 !important;
              }

              .testimonial-pagination .testimonial-bullet-active {
                background: white;
                border-color: white;
                width: 24px;
                border-radius: 12px;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

