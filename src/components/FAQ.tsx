import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <section id="faq" className="py-20 bg-gray-50 dark:bg-[#0D1526] relative overflow-hidden">
      {/* Blurred background circles for RozmeriGPT effect */}
      <div className="absolute -top-1/4 -left-24 w-80 h-80 rounded-full bg-blue-100/40 dark:bg-blue-600/5 blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute -bottom-1/4 -right-24 w-80 h-80 rounded-full bg-purple-100/40 dark:bg-purple-600/5 blur-3xl z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl md:text-6xl font-bold text-black dark:text-white mb-2 md:mb-6 tracking-tight">
            Frequently Asked <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-4 md:mb-6">
            Still have questions? We've got answers.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className={`bg-white dark:bg-[#111A2F] border border-gray-300 dark:border-blue-900/40 rounded-xl transition-all duration-200 overflow-hidden shadow-sm hover:shadow-lg dark:hover:shadow-blue-900/20 group`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-5 py-5 md:px-6 md:py-6 text-left group focus:outline-none rounded-xl"
                style={{ fontSize: 16 }}
              >
                <span className="font-semibold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-relaxed">
                  {faq.question}
                </span>
                <motion.div
                  className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 text-black dark:text-white"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 md:px-6 md:pb-6 text-gray-700 dark:text-gray-300 leading-relaxed font-normal text-sm">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
            Have a different question?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 border-2 border-blue-600 inline-flex items-center space-x-2"
          >
            <span>Send us a message →</span>
          </motion.button>
        </motion.div>
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