"use client"

import { useState } from "react"
import { ArrowRight, ChevronDown, HelpCircle, Rocket, Phone } from "lucide-react"
import { Poppins } from "next/font/google"
import Heading from "./ui/Heading"
import Paragraph from "./ui/Paragraph"
import Button from "./ui/Button"
import { motion } from "framer-motion"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
})

interface FAQProps {
  showCta?: boolean
}

const FAQ = ({ showCta = true }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What industries do you work with?",
      answer:
        "We work across multiple industries — from startups launching their first MVP to enterprises scaling AI-powered platforms. Our past projects span finance, healthcare, e-commerce, Web3, and custom browser development.",
      category: "General",
    },
    {
      question: "Do you build web and mobile apps?",
      answer:
        "Yes! We develop responsive web apps, native iOS/Android apps, and cross-platform solutions using frameworks like React Native and Flutter — all built for performance, scalability, and user-friendly experiences.",
      category: "Development",
    },
    {
      question: "Do you work with AI technology?",
      answer:
        "Absolutely. We integrate AI into apps, websites, and browsers — from intelligent chatbots to advanced automation and data-driven features — using APIs like OpenAI, DeepSeek, and custom AI models.",
      category: "Technology",
    },
    {
      question: "What is custom browser development?",
      answer:
        "It's creating custom browsers based on the Chromium engine. We can modify UI, add features like ad-blockers, VPN, crypto wallets, or AI tools, and remove unnecessary components to meet your exact requirements.",
      category: "Development",
    },
    {
      question: "Do you handle complete project development?",
      answer:
        "Yes. From idea validation, design, and development to testing, deployment, and long-term maintenance — we manage the full product lifecycle.",
      category: "Process",
    },
    {
      question: "How long do projects typically take?",
      answer:
        "Timelines depend on complexity. A simple landing page can be ready in 1-2 weeks, while a full-scale SaaS platform or browser build may take 8-12 weeks.",
      category: "Timeline",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes, we offer maintenance, updates, and feature enhancements to keep your product secure, optimized, and ahead of the competition.",
      category: "Support",
    },
    {
      question: "How do you price your work?",
      answer:
        "We offer flexible pricing including fixed-price projects, hourly rates, and retainer agreements. Each project gets a custom quote based on scope, timeline, and requirements.",
      category: "Pricing",
    },
    {
      question: "Do you work with clients worldwide?",
      answer:
        "We work with clients worldwide and are experienced in remote collaboration across different time zones. Communication is handled through Slack, email, and video calls.",
      category: "Process",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-4 sm:mb-6">
            <HelpCircle className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3 sm:mb-4" />
            <Heading level={2} className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl" gradient={true} gradientText="Questions">
              Frequently Asked Questions
            </Heading>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
              Find answers to common questions about our services and process.
            </p>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={`${faq.question}-${idx}`}
              className={`border rounded-md sm:rounded-md transition-colors duration-200 ${openIndex === idx
                ? "border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/90 to-blue-50/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-sm"
                : "border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-sm"
                }`}
            >
              <button
                className={`w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none transition-colors duration-200 ${openIndex === idx
                  ? "" // Removed hover effect for opened questions
                  : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  }`}
                onClick={() => toggleFAQ(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <div className="flex-1 pr-3 sm:pr-4">
                  <h3
                    className={`font-semibold text-base sm:text-lg transition-colors duration-200 leading-tight ${openIndex === idx ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white"
                      } ${poppins.className}`}
                  >
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-3 sm:ml-4">
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${openIndex === idx
                      ? "transform rotate-180 text-blue-600 dark:text-blue-400"
                      : "text-gray-500 dark:text-gray-400"
                      }`}
                  />
                </div>
              </button>

              {openIndex === idx && (
                <div
                  id={`faq-panel-${idx}`}
                  className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {showCta && (
          <div className="text-center mt-16 sm:mt-20 lg:mt-24 px-2">
            <Heading level={2} className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl">
              Still have <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">questions?</span>
            </Heading>
            <Paragraph size="lg" className="mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Our team is here to help you understand how we can bring your project to life.
            </Paragraph>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button
                variant="primary"
                size="sm"
                className="shadow-lg hover:shadow-xl py-3 px-4 sm:px-6 ring-1 ring-primary/20 hover:ring-primary/40 font-normal text-sm sm:text-base"
                onClick={() => {
                  const contactSection = document.querySelector("#contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <div className="flex items-center gap-2">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden xs:inline">Get Free Quote</span>
                  <span className="xs:hidden">Get Quote</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </Button>

              <a
                data-cal-link="entalogics/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view","theme":"auto"}'
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md cursor-pointer"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden xs:inline">Schedule Call</span>
                <span className="xs:hidden">Call</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default FAQ
