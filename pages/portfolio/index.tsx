"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Layout from "../../src/components/Layout"
import Heading from "../../src/components/ui/Heading"
import Paragraph from "../../src/components/ui/Paragraph"
import Button from "../../src/components/ui/Button"
import { ArrowRight } from "lucide-react"
import { portfolioItems, PortfolioCategory } from "../../src/components/PortfolioCarousel"

const filterCategories: PortfolioCategory[] = ["All", "Case studies", "Mobile", "UX/UI", "QA", "Guides", "Articles"]

const PortfolioIndex = () => {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("All")

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <>
      <Head>
        <title>Portfolio | Our Projects & Case Studies | Entalogics</title>
        <meta name="description" content="Explore our portfolio of successful projects including AI-powered platforms, SaaS applications, custom browsers, web development, and mobile apps. See real-world case studies and client success stories." />
        <meta name="keywords" content="software development portfolio, SaaS projects, AI development projects, web development portfolio, mobile app portfolio, case studies, software projects, custom browser development, Entalogics portfolio" />
        <meta name="author" content="Entalogics" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Portfolio | Our Projects & Case Studies | Entalogics" />
        <meta property="og:description" content="Explore our portfolio of successful projects including AI-powered platforms, SaaS applications, custom browsers, web development, and mobile apps. See real-world case studies and client success stories." />
        <meta property="og:image" content="https://entalogics.com/assets/og-image.jpg" />
        <meta property="og:url" content="https://entalogics.com/portfolio" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | Our Projects & Case Studies | Entalogics" />
        <meta name="twitter:description" content="Explore our portfolio of successful projects including AI-powered platforms, SaaS applications, custom browsers, web development, and mobile apps." />
        <meta name="twitter:image" content="https://entalogics.com/assets/og-image.jpg" />
        <link rel="canonical" href="https://entalogics.com/portfolio" />
      </Head>

      <Layout>
        <div className="bg-white dark:bg-[#0a1225] text-black dark:text-white min-h-screen">
          <section className="relative py-12 md:py-16 lg:py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <Heading level={1} className="mb-4" gradient gradientText="Our Portfolio">
                  Our Portfolio
                </Heading>
                <Paragraph size="md" center className="max-w-2xl mx-auto">
                  Explore our diverse range of projects across different categories. From AI-native platforms to custom browsers and full-stack SaaS solutions.
                </Paragraph>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 px-4">
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

              {/* Projects Grid */}
              {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {filteredItems.map((item, idx) => {
                    const summary = item.caseStudy
                      ? item.caseStudy.split(" ").slice(0, 28).join(" ") + (item.caseStudy.split(" ").length > 28 ? "…" : "")
                      : ""

                    return (
                      <Link
                        key={item.slug}
                        href={`/portfolio/${item.slug}`}
                        className="group block"
                      >
                        <article className="flex flex-col h-full bg-white dark:bg-[#10172a] transition-transform duration-300 overflow-hidden group-hover:translate-y-[-2px]">
                          <div className="relative h-80 overflow-hidden rounded-md">
                            <Image
                              src={item.img || "/placeholder.svg"}
                              alt={item.alt}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-[1.02] rounded-sm"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                              priority={idx < 4}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.style.display = "none"
                                const parent = target.parentElement
                                if (parent) {
                                  (parent as HTMLElement).style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                                }
                              }}
                            />
                            <div className="absolute inset-x-0 top-4 flex flex-wrap gap-2 px-4">
                              <span className="inline-flex items-center rounded-full bg-white/90 text-gray-900 dark:bg-teal-500/90 dark:text-white px-3 py-1 text-xs font-semibold shadow">
                                {item.category}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-col gap-4 p-6 px-0">
                            <h3 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white leading-snug group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                            {summary && (
                              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                                {summary}
                              </p>
                            )}
                            <div className="mt-0.5">
                              <span className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 group-hover:bg-blue-700 group-hover:shadow-lg">
                                View case study
                                <ArrowRight className="h-4 w-4" />
                              </span>
                            </div>
                          </div>
                        </article>
                      </Link>
                    )
                  })}
                </div>
              ) : (
                <div className="text-center py-16 pt-3">
                  <Paragraph size="lg" center className="text-gray-500 dark:text-gray-400 mb-6">
                    No projects found in this category.
                  </Paragraph>
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => setActiveFilter("All")}
                  >
                    Show All Projects
                  </Button>
                </div>
              )}
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default PortfolioIndex

