"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper/modules"
import "swiper/css"
import "swiper/css/free-mode"
import { testimonials } from "@/data/testimonialsData"
import { ArrowUpRight } from "lucide-react"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const Reviews = () => {
  return (
    <section className="relative  dark:bg-gray-900 w-full">
      <div className="relative w-full overflow-hidden pl-[3%] pr-[7%] sm:pl-4 sm:pr-0 md:pl-8 md:pr-0">
        <Swiper
          modules={[FreeMode]}
          spaceBetween={24}
          slidesPerView="auto"
          centeredSlides={false}
          freeMode={{
            enabled: true,
            sticky: false,
            momentumRatio: 0.5,
            momentumVelocityRatio: 0.5,
          }}
          grabCursor={true}
          resistance={true}
          resistanceRatio={0.85}
          className="reviews-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="!w-[90%] sm:!w-[300px] md:!w-[360px] lg:!w-[380px]">
              <div className="relative border bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md h-full cursor-grab active:cursor-grabbing">
                {/* Arrow Icon - Top Right */}
                <div className="absolute top-5 right-5">
                  {testimonial.link ? (
                    <a 
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ArrowUpRight className="w-5 h-5 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors cursor-pointer" />
                    </a>
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  )}
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-5 pr-8">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-full h-full object-cover grayscale"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=random&color=fff&size=128`
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-gray-900 dark:text-white font-bold text-base mb-0.5 ${poppins.className}`}>
                      {testimonial.author}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-4">
                  {testimonial.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .reviews-swiper {
            padding-bottom: 20px;
            overflow: visible;
            cursor: grab;
          }
          
          .reviews-swiper:active {
            cursor: grabbing;
          }
          
          .reviews-swiper .swiper-slide {
            height: auto;
            display: flex;
          }
          
          .reviews-swiper .swiper-wrapper {
            display: flex;
            align-items: stretch;
          }
          
          .reviews-swiper .swiper-slide > div {
            width: 100%;
          }
          
        `}</style>
      </div>
    </section>
  )
}

export default Reviews

