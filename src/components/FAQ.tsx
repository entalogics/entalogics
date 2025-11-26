"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { faqsData } from "../data/faqsData"

interface FAQProps {
  showCta?: boolean
}

const FAQ = ({ showCta = true }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Show first 8 FAQs on homepage
  const faqs = faqsData.slice(0, 8)

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
      </div>
    </section>
  )
}

export default FAQ
