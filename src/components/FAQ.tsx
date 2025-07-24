import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is your web design process?',
      answer: 'Our web design process starts with understanding your needs, followed by wireframing, prototyping, and final design implementation. We keep you involved at every step.'
    },
    {
      question: 'What is your web development process?',
      answer: 'We use modern frameworks and best practices to build scalable, maintainable websites. Our process includes planning, development, testing, and deployment.'
    },
    {
      question: 'How long does it take to design and develop a website?',
      answer: 'Timelines vary by project scope, but most websites are completed within 4–8 weeks. We provide a detailed timeline after our initial consultation.'
    },
    {
      question: 'What is LinkedIn profile optimization?',
      answer: 'LinkedIn profile optimization involves improving your profile content, visuals, and keywords to increase visibility and attract opportunities.'
    },
    {
      question: 'How can a better LinkedIn profile help my career?',
      answer: 'A strong LinkedIn profile can help you get noticed by recruiters, connect with industry peers, and showcase your expertise.'
    },
    {
      question: 'Do you rewrite my LinkedIn summary and headline?',
      answer: 'Yes, we can rewrite your summary and headline to better reflect your skills, experience, and career goals.'
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