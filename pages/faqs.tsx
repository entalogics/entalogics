"use client"

import React, { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react"
import Layout from "../src/components/Layout"
import Heading from "../src/components/ui/Heading"
import Paragraph from "../src/components/ui/Paragraph"
import Button from "../src/components/ui/Button"
import { faqsData } from "../src/data/faqsData"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
})

const FAQsPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const allCategories = Array.from(new Set(faqsData.map((faq) => faq.category)))
  const [activeCategory, setActiveCategory] = useState<string>(allCategories[0] || "")

  const filteredFAQs = faqsData.filter((faq) => faq.category === activeCategory)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>FAQs | Frequently Asked Questions | Entalogics</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about Entalogics' software development services, pricing, process, and more. Get all your questions answered."
        />
        <meta
          name="keywords"
          content="FAQs, frequently asked questions, software development FAQs, web development questions, mobile app development FAQs, custom browser development, Entalogics FAQs"
        />
        <meta name="author" content="Entalogics" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://entalogics.com/faqs" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="FAQs | Frequently Asked Questions | Entalogics" />
        <meta
          property="og:description"
          content="Find answers to frequently asked questions about Entalogics' software development services, pricing, process, and more."
        />
        <meta property="og:url" content="https://entalogics.com/faqs" />
        <meta property="og:site_name" content="Entalogics" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQs | Frequently Asked Questions | Entalogics" />
        <meta
          name="twitter:description"
          content="Find answers to frequently asked questions about Entalogics' software development services."
        />
      </Head>

      <Layout>
        <div className={`bg-white dark:bg-[#0a1225] text-black dark:text-white min-h-screen ${poppins.variable}`}>
          {/* Hero Section */}
          <section className="relative isolate w-full bg-gradient-to-br from-background dark:from-[#0a1225] to-muted/30 dark:to-gray-800/30 overflow-hidden py-16 md:py-20 lg:py-24">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[size:32px_32px]"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted dark:bg-gray-800 border border-border dark:border-gray-700 mb-6">
                  <HelpCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-muted-foreground dark:text-gray-300">
                    Frequently Asked Questions
                  </span>
                </div>

                {/* Main Heading */}
                <Heading level={1} className="mb-6" gradient={true} gradientText="Questions">
                  Questions? We're Here to Help
                </Heading>

                <Paragraph size="sm" className="max-w-3xl mx-auto mb-8" center={true}>
                  Find answers to common questions about our services, process, pricing, and more. Can't find what you're looking for? Don't hesitate to contact us.
                </Paragraph>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="py-12 pt-0 md:py-16 md:pt-0 lg:pt-0  lg:py-20 bg-white dark:bg-[#0a1225]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category Filter */}
              <div className="mb-6 md:mb-8">
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-4 pb-4 border-b border-gray-300 dark:border-gray-600">
                  {allCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setActiveCategory(category)
                        setOpenIndex(null)
                      }}
                      className={`relative text-sm md:text-base font-medium transition-all duration-200 pb-1 ${
                        activeCategory === category
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    >
                      {category}
                      {activeCategory === category && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* FAQ Items */}
              <div className="space-y-0">
                {filteredFAQs.map((faq, idx) => {
                  const uniqueKey = `${faq.question}-${idx}`
                  const isOpen = openIndex === idx
                  return (
                    <div
                      key={uniqueKey}
                      className="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                    >
                      <button
                        className="w-full flex items-center justify-between py-3 md:py-4 text-left focus:outline-none group"
                        onClick={() => toggleFAQ(idx)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${uniqueKey}`}
                      >
                        <h3 className="flex-1 pr-4 text-base md:text-lg font-normal text-gray-900 dark:text-gray-100 leading-relaxed">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                          {isOpen ? (
                            <Minus className="w-5 h-5 text-gray-600 dark:text-gray-400" strokeWidth={2} />
                          ) : (
                            <Plus className="w-5 h-5 text-gray-600 dark:text-gray-400" strokeWidth={2} />
                          )}
                        </div>
                      </button>

                      {isOpen && (
                        <div
                          id={`faq-panel-${uniqueKey}`}
                          className="pb-3 md:pb-4 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed pr-10"
                        >
                          {faq.answer.split(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g).map((part, i) => {
                            // Check if this part is an email address
                            if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(part)) {
                              return (
                                <a
                                  key={i}
                                  href={`mailto:${part}`}
                                  className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                  {part}
                                </a>
                              )
                            }
                            return <span key={i}>{part}</span>
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* CTA Section */}
              <div className="mt-12 md:mt-16 text-center bg-gray-50 dark:bg-gray-900/50 rounded-xl p-8 md:p-10">
                <Heading level={2} className="mb-4" gradient={true} gradientText="Still">
                  Still Have Questions?
                </Heading>
                <Paragraph size="md" className="mb-6 text-gray-600 dark:text-gray-400" center={true}>
                  Can't find the answer you're looking for? Our team is here to help. Get in touch and we'll respond as soon as possible.
                </Paragraph>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="md">
                    <Link href="/contact-us" className="flex items-center gap-2">
                      Contact Us
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="secondary" size="md">
                    <Link href="/#contact" className="flex items-center gap-2">
                      Book a Call
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default FAQsPage

