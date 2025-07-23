import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Plus, Minus, ChevronDown, ChevronUp, Mail } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showCookie, setShowCookie] = useState(true);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: 'How long will it take to build my project?',
      answer: 'Most MVPs take 4–6 weeks. Complex builds or browser forks can range from 8–12 weeks depending on scope. We give you a clear timeline after the discovery call.'
    },
    {
      question: 'Can I start with just an idea?',
      answer: 'Absolutely. We help founders shape ideas into solid plans, mockups, and launch-ready builds — no technical background needed.'
    },
    {
      question: 'Do you sign NDAs?',
      answer: 'Yes — we\'re NDA-friendly by default. Just send yours over, or we can provide one.'
    },
    {
      question: 'Can we work through Upwork or another platform?',
      answer: 'Yes! We\'re Top Rated Plus on Upwork. We also support direct invoicing or milestone-based contracts.'
    },
    {
      question: 'What tech stack do you use?',
      answer: 'We use modern tools: Next.js, React, Flutter, OpenAI, Chromium, Firebase, Supabase, etc. We recommend the best stack based on your product goals — not trends.'
    },
    {
      question: 'Will I own the code and IP?',
      answer: '100% yes. You\'ll get full access to your repo, assets, and product — no lock-in, ever.'
    }
  ];

  // Split FAQs into two columns for grid layout
  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (showCookie) {
      const timer = setTimeout(() => setShowCookie(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showCookie]);

  return (
    <section id="faq" className="relative bg-gray-50 dark:bg-[#0D1526] py-20 px-4 md:px-12 overflow-hidden">
      {/* Blurred background circles for RozmeriGPT effect */}
      <div className="absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full bg-blue-100/50 dark:bg-blue-600/5 blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-purple-100/50 dark:bg-purple-600/5 blur-3xl z-0 pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Label */}
        <div className="text-center mb-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 opacity-80">FAQs</span>
        </div>
        {/* Section Header */}
        <div ref={ref} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
            <span className="text-black dark:text-white">Questions?</span> <span className="font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">We have answers.</span>
          </h2>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Custom two-column grid with col-span-2 for last item if odd */}
          {(() => {
            const isOdd = faqs.length % 2 === 1;
            const lastIndex = faqs.length - 1;
            return [0, 1].map(col => (
              <div key={col} className="flex flex-col gap-4 md:gap-6">
                {faqs
                  .filter((_, i) => i % 2 === col && (!isOdd || i !== lastIndex))
                  .map((faq, i) => {
                    const index = col + i * 2;
                    return (
                      <div
                        key={faq.question}
                        className={`bg-glass-light dark:bg-glass-dark border border-gray-300 dark:border-blue-900/40 rounded-2xl transition-all duration-200 overflow-hidden shadow-sm hover:shadow-glass-light dark:hover:shadow-glass-dark group`}
                      >
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-full flex items-center justify-between px-6 py-6 text-left group focus:outline-none rounded-2xl"
                          style={{ fontSize: 18 }}
                        >
                          <span className="font-medium text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-relaxed text-base md:text-lg">
                            {faq.question}
                          </span>
                          <div
                            className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 text-black dark:text-white bg-white/80 dark:bg-white/10 border border-white/20 dark:border-blue-900/40 ml-4 ${openIndex === index ? 'rotate-45' : ''}`}
                          >
                            <span className="text-2xl font-bold select-none">+</span>
                          </div>
                        </button>
                        {openIndex === index && (
                          <div className="overflow-hidden">
                            <div className="px-6 pb-6 text-gray-700 dark:text-gray-300 leading-relaxed font-normal text-sm md:text-base">
                              <p>{faq.answer}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                {/* If odd, add the last item as col-span-2 in the first column */}
                {isOdd && col === 0 && (
                  <div
                    key={faqs[lastIndex].question}
                    className="bg-glass-light dark:bg-glass-dark border border-gray-300 dark:border-blue-900/40 rounded-2xl transition-all duration-200 overflow-hidden shadow-sm hover:shadow-glass-light dark:hover:shadow-glass-dark group col-span-2 mt-4"
                    style={{ gridColumn: 'span 2 / span 2' }}
                  >
                    <button
                      onClick={() => toggleFAQ(lastIndex)}
                      className="w-full flex items-center justify-between px-6 py-6 text-left group focus:outline-none rounded-2xl"
                      style={{ fontSize: 18 }}
                    >
                      <span className="font-medium text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-relaxed text-base md:text-lg">
                        {faqs[lastIndex].question}
                      </span>
                      <div
                        className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 text-black dark:text-white bg-white/80 dark:bg-white/10 border border-white/20 dark:border-blue-900/40 ml-4 ${openIndex === lastIndex ? 'rotate-45' : ''}`}
                      >
                        <span className="text-2xl font-bold select-none">+</span>
                      </div>
                    </button>
                    {openIndex === lastIndex && (
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 text-gray-700 dark:text-gray-300 leading-relaxed font-normal text-sm md:text-base">
                          <p>{faqs[lastIndex].answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ));
          })()}
        </div>

        <div className="text-center mt-12">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
            Have a different question?
          </p>
          <button
            className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 border-2 border-blue-600 inline-flex items-center space-x-2"
          >
            <span>Send us a message →</span>
          </button>
        </div>
      </div>

      {/* Back to Top & CTA Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <div className="relative group flex flex-col items-end">
          {/* Tooltip */}
          <span className="absolute bottom-12 right-0 mb-2 px-3 py-1 rounded-md bg-black/90 text-white text-[11px] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap shadow-lg">
            Any questions? Contact us!
          </span>
          <a
            href="#contact"
            className="bg-[#512feb] text-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center font-semibold hover:bg-[#3a22a8] transition-colors duration-200 focus:outline-none text-sm group"
            aria-label="Contact Us"
            tabIndex={0}
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#512feb] text-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center hover:bg-[#3a22a8] transition-colors duration-200 focus:outline-none"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>

      {/* Cookies Popup */}
      {showCookie && (
        <div className="fixed bottom-4 left-4 z-50 bg-white dark:bg-[#181818] text-gray-800 dark:text-gray-100 px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 border border-gray-200 dark:border-gray-700 animate-fade-in">
          <span className="text-xs">This site uses cookies to enhance your experience.</span>
          <button
            onClick={() => setShowCookie(false)}
            className="ml-2 px-3 py-1 rounded-lg bg-[#512feb] text-white text-xs font-semibold hover:bg-[#3a22a8] transition-colors"
          >
            Accept
          </button>
          <button
            onClick={() => setShowCookie(false)}
            className="ml-1 px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Reject
          </button>
        </div>
      )}
    </section>
  );
};

export default FAQ; 