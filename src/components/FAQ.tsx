"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

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
    <section id="faq" className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-3">
          <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-2">
            Questions? We're happy to help.
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, idx) => (
            <div
              key={`${faq.question}-${idx}`}
              className="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
            >
              <button
                className="w-full flex items-center justify-between py-3 md:py-4 text-left focus:outline-none group"
                onClick={() => toggleFAQ(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <h3 className="flex-1 pr-4 text-base md:text-lg font-normal text-gray-900 dark:text-gray-100 leading-relaxed">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  {openIndex === idx ? (
                    <Minus className="w-5 h-5 text-gray-600 dark:text-gray-400" strokeWidth={2} />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600 dark:text-gray-400" strokeWidth={2} />
                  )}
                </div>
              </button>

              {openIndex === idx && (
                <div
                  id={`faq-panel-${idx}`}
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
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 md:mt-10 text-center">
          <p className="text-base md:text-lg font-normal text-black dark:text-white">
            Still have questions? <a href="#contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact Us</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default FAQ
