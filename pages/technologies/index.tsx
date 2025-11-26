import React from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Layout from "../../src/components/Layout"
import Heading from "../../src/components/ui/Heading"
import Paragraph from "../../src/components/ui/Paragraph"
import { technologiesByCategory, getTechnologyCategories } from "../../src/data/technologiesData"
import { ArrowRight } from "lucide-react"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
})

const TechnologiesPage = () => {
  const categories = getTechnologyCategories()

  return (
    <Layout>
      <Head>
        <title>Technologies We Use | Entalogics - Top Software Development Company</title>
        <meta name="description" content="Explore Entalogics' comprehensive technology stack. Expert in React, Angular, Node.js, Python, .NET, mobile development, cloud services, and more. See all technologies we work with." />
        <meta name="keywords" content="technologies, tech stack, frontend technologies, backend technologies, mobile development technologies, cloud services, database technologies, DevOps tools, React, Angular, Node.js, Python, .NET, AWS, Azure, Google Cloud, Entalogics technologies, software development stack, programming languages, frameworks, development tools" />
        <link rel="canonical" href="https://entalogics.com/technologies" />
      </Head>

      <div className={`bg-white dark:bg-[#0a1225] text-black dark:text-white ${poppins.className}`}>
        {/* Hero Section */}
        <section className="relative isolate w-full bg-white dark:bg-[#0a1225] overflow-hidden pt-16 pb-8 md:pt-20 md:pb-12">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <Heading 
                level={1}
                className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                Our <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Technologies</span>
              </Heading>

              <Paragraph size="lg" className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                We work with the best tools in the industry. From modern frontend frameworks to powerful backend technologies, cloud platforms, and mobile development tools—here's everything we use to build exceptional software solutions.
              </Paragraph>
            </div>
          </div>
        </section>

        {/* Technologies by Category */}
        <section className="pt-4 pb-12 md:pt-6 md:pb-16 bg-white dark:bg-[#0a1225] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {categories.map((category) => {
                const technologies = technologiesByCategory[category]
                return (
                  <div key={category} className="space-y-6">
                    {/* Category Header */}
                    <div className="flex items-center gap-4">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
                      <Heading level={2} className="text-2xl md:text-3xl font-bold">
                        {category}
                      </Heading>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
                    </div>

                    {/* Technologies Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3">
                      {technologies.map((tech) => {
                        const imagePath = tech.imagePath || `/assets/technologies/${tech.slug.replace('-development-services', '')}.svg`
                        return (
                          <Link
                            key={tech.slug}
                            href={`/technologies/${tech.slug}`}
                            className="group"
                          >
                            <div className="h-full p-3 md:p-4 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all duration-200">
                              <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
                                {/* SVG Icon */}
                                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                  <Image
                                    src={imagePath}
                                    alt={`${tech.title} icon`}
                                    width={56}
                                    height={56}
                                    className="w-full h-full object-contain"
                                  />
                                </div>

                                {/* Title */}
                                <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                                  {tech.title}
                                </h3>

                                {/* Tagline */}
                                {tech.tagline && (
                                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-tight">
                                    {tech.tagline}
                                  </p>
                                )}

                                {/* Arrow */}
                                <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <span className="text-xs font-medium">Learn more</span>
                                  <ArrowRight className="w-3 h-3" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default TechnologiesPage

