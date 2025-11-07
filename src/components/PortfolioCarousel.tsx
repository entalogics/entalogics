"use client"

import { useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { ArrowRight } from "lucide-react"
import Heading from "./ui/Heading"
import Paragraph from "./ui/Paragraph"
import Button from "./ui/Button"
import { portfolioItems as portfolioDataItems } from "../data/portfolioData"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "800", "900"], display: "swap" })

export type PortfolioCategory = "All" | "Case studies" | "Mobile" | "UX/UI" | "QA" | "Guides" | "Articles"

export interface PortfolioItem {
  img: string
  alt: string
  slug: string
  title: string
  caseStudy: string
  description?: string
  category: PortfolioCategory
  client?: string
  duration?: string
}

// Map portfolioData items to PortfolioCarousel format
const mappedPortfolioItems: PortfolioItem[] = portfolioDataItems.map((item) => {
  const categoryMap: Record<string, PortfolioCategory> = {
    "Case studies": "Case studies",
    "Mobile": "Mobile",
    "UX/UI": "UX/UI",
    "QA": "QA",
    "Guides": "Guides",
    "Articles": "Articles",
  }

  const mappedCategory = categoryMap[item.category] ?? "Case studies"

  return {
    img: item.img,
    alt: item.alt,
    slug: item.slug,
    title: item.title,
    caseStudy: item.caseStudy,
    description: item.description,
    category: mappedCategory,
    client: item.client,
    duration: item.duration,
  }
})

export const portfolioItems: PortfolioItem[] = mappedPortfolioItems

const filterCategories: PortfolioCategory[] = ["All", "Case studies", "Mobile", "UX/UI", "QA", "Guides", "Articles"]

const PortfolioCarousel = () => {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("All")

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  const visibleItems = filteredItems.slice(0, 3)

  return (
    <section id="portfolio" className="relative w-full px-2 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <Heading level={2} className="mb-4 text-center" gradient gradientText="Speaks for Itself">
          Our Work Speaks for Itself
        </Heading>
        <Paragraph size="sm" center className="mb-6 max-w-2xl mx-auto">
          From AI-native platforms to custom browsers and full-stack SaaS — here's what we've shipped.
        </Paragraph>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 px-4">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-4 py-2 text-sm md:text-base font-medium transition-all duration-200
                ${activeFilter === category
                  ? "text-gray-900 dark:text-white border-b-2 border-teal-500 dark:border-teal-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border-b-2 border-transparent"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
              {visibleItems.map((item, idx) => (
                <div className="h-full w-full" key={item.slug}>
                  <div
                    className="group relative h-full flex flex-col   rounded-md  transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer"
                    style={{ minHeight: 'auto'}}
                    onClick={() => router.push(`/portfolio/${item.slug}`)}
                  >
                    <div className="relative h-60 overflow-hidden rounded-md border border-gray-300/90 dark:border-white/35">
                      <Image
                        src={item.img || "/placeholder.svg"}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={idx < 3}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = "none"
                          const parent = target.parentElement
                          if (parent) {
                            (parent as HTMLElement).style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                          }
                        }}
                      />
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/70 border border-white/50 text-blue-600 shadow-sm backdrop-blur-md dark:bg-white/15 dark:border-white/30 dark:text-teal-200">
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition-colors duration-300">
                        <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-semibold tracking-wide uppercase transition-opacity duration-300">
                          View case study
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10 -mt-10 mx-2 sm:mx-3">
                      <div className="rounded-2xl border border-gray-100/80 dark:border-white/10 bg-white/90 dark:bg-slate-900/75 shadow-lg shadow-primary/5 backdrop-blur-md px-4 sm:px-5 py-4 transition-transform duration-300 group-hover:-translate-y-1">
                        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 mb-2">
                          <span className="inline-flex items-center gap-2 font-semibold text-primary dark:text-teal-200">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary/70 dark:bg-teal-200/80" />
                            {item.client ?? "Case Study"}
                          </span>
                          {item.duration ? (
                            <span className="text-gray-400 dark:text-gray-500 font-medium">
                              {item.duration}
                            </span>
                          ) : null}
                        </div>

                        <h3 className="font-semibold text-lg md:text-xl tracking-tight text-gray-900 dark:text-white leading-tight line-clamp-2">
                          {item.title}
                        </h3>

                        <div className="mt-3 h-px bg-gradient-to-r from-transparent via-primary/35 dark:via-teal-200/35 to-transparent" />

                        <Paragraph
                          size="sm"
                          className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3"
                        >
                          {item.description ?? item.caseStudy}
                        </Paragraph>

                        <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary dark:text-teal-200 uppercase tracking-[0.22em]">
                          View case study
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* See More Button */}
            <div className="flex justify-center mt-12">
              <Button
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                onClick={() => router.push("/portfolio")}
                className="shadow-lg hover:shadow-xl hover:-translate-y-1 ring-1 ring-primary/20 hover:ring-primary/40"
              >
                See more
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <Paragraph size="md" center className="text-gray-500 dark:text-gray-400">
              No projects found in this category.
            </Paragraph>
          </div>
        )}
      </div>
    </section>
  )
}

export default PortfolioCarousel