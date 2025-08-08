import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What industries do you specialize in?',
      answer: 'We work across multiple industries — from startups launching their first MVP to enterprises scaling AI-powered platforms. Our past projects span finance, healthcare, e-commerce, Web3, and custom browser development.'
    },
    {
      question: 'Can you build both web and mobile apps?',
      answer: 'Yes! We develop responsive web apps, native iOS/Android apps, and cross-platform solutions using frameworks like React Native and Flutter — all built for performance, scalability, and user-friendly experiences.'
    },
    {
      question: 'Do you offer AI-powered solutions?',
      answer: 'Absolutely. We integrate AI into apps, websites, and browsers — from intelligent chatbots to advanced automation and data-driven features — using APIs like OpenAI, DeepSeek, and custom AI models.'
    },
    {
      question: 'What is Chromium browser development?',
      answer: 'It\'s creating custom browsers based on the Chromium engine. We can modify UI, add features like ad-blockers, VPN, crypto wallets, or AI tools, and remove unnecessary components to meet your exact requirements.'
    },
    {
      question: 'Do you handle end-to-end product development?',
      answer: 'Yes. From idea validation, design, and development to testing, deployment, and long-term maintenance — we manage the full product lifecycle.'
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Timelines depend on complexity. A simple landing page can be ready in 1-2 weeks, while a full-scale SaaS platform or browser build may take 8-12 weeks.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes, we offer maintenance, updates, and feature enhancements to keep your product secure, optimized, and ahead of the competition.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-white dark:bg-[#0a1225] py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Blurred background circles for RozmeriGPT effect */}
      <div className="absolute -bottom-40 -left-40 w-[320px] sm:w-[400px] md:w-[480px] h-[320px] sm:h-[400px] md:h-[480px] rounded-full bg-blue-100/50 dark:bg-blue-600/5 blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-[340px] sm:w-[420px] md:w-[520px] h-[340px] sm:h-[420px] md:h-[520px] rounded-full bg-purple-100/50 dark:bg-purple-600/5 blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start relative z-10">
        {/* Left: Heading & Subtext */}
        <div className="mb-8 md:mb-0 flex flex-col justify-center items-start md:items-start px-2 sm:px-4 md:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Frequently</span>{' '}
            <span className="text-black dark:text-white">asked</span>
            <br />
            <span className="text-black dark:text-white">questions!</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4">
            Can’t find the answer you’re looking for?{' '}
            <a href="#contact" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Reach out</a> to us and we will get in touch with you
          </p>
        </div>
        {/* Right: FAQ Accordion */}
        <div className="w-full flex justify-center items-start px-2 sm:px-4 md:px-0">
          <div className="w-full max-w-xl sm:max-w-2xl flex flex-col divide-y divide-gray-200 dark:divide-blue-900/40 glass-light dark:glass-dark rounded-2xl shadow-lg border border-gray-200 dark:border-blue-900/40 px-2 sm:px-4 md:px-6">
            {faqs.map((faq, idx) => (
              <div key={faq.question}>
                <button
                  className="w-full flex items-center justify-between py-5 sm:py-6 px-0 text-left focus:outline-none group"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span className="font-semibold text-base sm:text-lg md:text-xl text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {faq.question}
                  </span>
                  <span className="ml-4 text-blue-600 dark:text-blue-400">
                    {openIndex === idx ? <ChevronUp size={26} /> : <ChevronDown size={26} />}
                  </span>
                </button>
                {openIndex === idx && (
                  <div
                    id={`faq-panel-${idx}`}
                    className="pb-5 sm:pb-6 text-gray-700 dark:text-gray-300 text-sm sm:text-base animate-fadeIn"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 