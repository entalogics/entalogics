"use client";
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface CaseStudy {
  title: string;
  description: string;
  category: string;
  metrics: string;
  image: string;
  link: string;
}

const CaseStudies = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isUserInteracting, setIsUserInteracting] = React.useState(false);

  const caseStudies: CaseStudy[] = [
    {
      title: 'E-Commerce Platform Redesign',
      description: 'Revamped a legacy retail platform into a fast, responsive web app.',
      category: 'Web Development',
      metrics: '+38% conversions | ⏱️ 6x faster load times',
      image: '/api/placeholder/400/300',
      link: '#'
    },
    {
      title: 'Custom AI SaaS for Marketing Teams',
      description: 'Built a ChatGPT-style dashboard for teams to generate, manage, and share content workflows.',
      category: 'AI & SaaS',
      metrics: '🧠 Powered by OpenAI & vector DB',
      image: '/api/placeholder/400/300',
      link: '#'
    },
    {
      title: 'Web3 Browser (Brave Fork)',
      description: 'Designed a privacy-first browser with built-in VPN, wallet, and adblocker.',
      category: 'Browser Development',
      metrics: '🦾 Chromium + Brave, fully rebranded',
      image: '/api/placeholder/400/300',
      link: '#'
    },
    {
      title: 'Real-Time Healthcare System',
      description: 'Built a HIPAA-compliant, cross-platform app for patient record sync & alerts.',
      category: 'Healthcare',
      metrics: '🔐 Secure by design, real-time updates',
      image: '/api/placeholder/400/300',
      link: '#'
    }
  ];

  // Duplicate case studies for infinite scroll
  const infiniteCaseStudies = [...caseStudies, ...caseStudies, ...caseStudies];
  const middleIndex = caseStudies.length;

  // Infinite scroll logic
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    // Set initial scroll to the middle set
    const card = carousel.querySelector('.group') as HTMLDivElement | null;
    if (card) {
      carousel.scrollLeft = card.offsetWidth * middleIndex + 24 * middleIndex;
    }
    const handleScroll = () => {
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = card ? card.offsetWidth * middleIndex + 24 * middleIndex : 0;
      } else if (carousel.scrollLeft >= maxScroll - (card ? card.offsetWidth * middleIndex : 0)) {
        carousel.scrollLeft = card ? card.offsetWidth * middleIndex + 24 * middleIndex - 1 : 0;
      }
    };
    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [middleIndex]);

  // Auto-scroll logic
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    let animationFrame: number;
    let lastTimestamp: number | null = null;
    const speed = 0.4; // px per ms (adjust for slower/faster)
    function step(timestamp: number) {
      if (isUserInteracting) return;
      if (lastTimestamp !== null && carousel) {
        carousel.scrollLeft += (timestamp - lastTimestamp) * speed;
      }
      lastTimestamp = timestamp;
      animationFrame = requestAnimationFrame(step);
    }
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isUserInteracting]);

  // Pause auto-scroll on user interaction
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const handleMouseEnter = () => setIsUserInteracting(true);
    const handleMouseLeave = () => setIsUserInteracting(false);
    const handleMouseDown = () => setIsUserInteracting(true);
    const handleMouseUp = () => setIsUserInteracting(false);
    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mouseup', handleMouseUp);
    carousel.addEventListener('touchstart', handleMouseDown);
    carousel.addEventListener('touchend', handleMouseUp);
    return () => {
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
      carousel.removeEventListener('mousedown', handleMouseDown);
      carousel.removeEventListener('mouseup', handleMouseUp);
      carousel.removeEventListener('touchstart', handleMouseDown);
      carousel.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section className="relative isolate bg-gray-50 dark:bg-[#0D1526] py-20 px-4 md:px-12 overflow-hidden">
      {/* Blurred background circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-40 w-[480px] h-[480px] rounded-full bg-blue-100/50 dark:bg-blue-600/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 -right-40 w-[520px] h-[520px] rounded-full bg-purple-100/50 dark:bg-purple-600/5 blur-3xl pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white">
            Our Work <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Speaks for Itself</span>
          </h2>
          <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-4 md:mb-6 leading-relaxed font-normal">
            From AI-native platforms to custom browsers and full-stack SaaS — here's what we've shipped.
          </p>
        </motion.div>

        <div className="relative">
          {/* Left/Right scroll buttons for desktop */}
          <button
            type="button"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white/50 dark:bg-[#111A2F]/50 text-black dark:text-white border-2 border-gray-300 dark:border-blue-900/40 backdrop-blur-xl rounded-full w-12 h-12 items-center justify-center shadow-lg hover:bg-white/70 dark:hover:bg-[#111A2F]/70 transition-all duration-150"
            style={{marginLeft: 0}}
            onClick={() => {
              setIsUserInteracting(true);
              if (carouselRef.current) {
                const card = carouselRef.current.querySelector('.group') as HTMLDivElement;
                if (card) carouselRef.current.scrollBy({ left: -card.offsetWidth - 24, behavior: 'smooth' });
              }
              setTimeout(() => setIsUserInteracting(false), 800);
            }}
            aria-label="Scroll left"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button
            type="button"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white/50 dark:bg-[#111A2F]/50 text-black dark:text-white border-2 border-gray-300 dark:border-blue-900/40 backdrop-blur-xl rounded-full w-12 h-12 items-center justify-center shadow-lg hover:bg-white/70 dark:hover:bg-[#111A2F]/70 transition-all duration-150"
            style={{marginRight: 0}}
            onClick={() => {
              setIsUserInteracting(true);
              if (carouselRef.current) {
                const card = carouselRef.current.querySelector('.group') as HTMLDivElement;
                if (card) carouselRef.current.scrollBy({ left: card.offsetWidth + 24, behavior: 'smooth' });
              }
              setTimeout(() => setIsUserInteracting(false), 800);
            }}
            aria-label="Scroll right"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
          </button>
          {/* Carousel container */}
          <div ref={carouselRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-2 md:pb-4 no-scrollbar px-8 sm:px-12" style={{scrollSnapType:'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {infiniteCaseStudies.map((study, index) => {
              let cardImg = null;
              if (study.title === 'E-Commerce Platform Redesign') cardImg = '/assets/Web Development.png';
              else if (study.title === 'Custom AI SaaS for Marketing Teams') cardImg = '/assets/SaaS Dashboard Interface.png';
              else if (study.title === 'Web3 Browser (Brave Fork)') cardImg = '/assets/Custom Browser Solution.png';
              else if (study.title === 'Real-Time Healthcare System') cardImg = '/assets/management system.png';
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group w-full sm:w-1/2 md:w-1/3 flex-shrink-0 snap-center"
                >
                  <div className="bg-white dark:bg-[#111A2F] border border-gray-300 dark:border-blue-900/40 rounded-2xl overflow-hidden shadow-lg shadow-black/5 dark:shadow-blue-900/10 group-hover:shadow-2xl group-hover:shadow-blue-900/10 dark:group-hover:shadow-blue-900/20 transition-all duration-200 transform group-hover:scale-105 flex flex-col min-h-[320px] md:min-h-[340px] h-full">
                    <div className="aspect-video w-full bg-gray-100 dark:bg-[#0D1526] relative overflow-hidden">
                      {cardImg && (
                        <img src={cardImg} alt={study.title} className="absolute inset-0 w-full h-full object-cover rounded-t-2xl" />
                      )}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                        <span className="px-2 py-0.5 rounded-full border border-gray-300 dark:border-blue-400/30 text-[10px] md:text-xs font-medium text-gray-700 dark:text-white bg-white/80 dark:bg-black/30 backdrop-blur-sm">
                          {study.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 md:p-5 flex flex-col gap-2 flex-1">
                      <h3 className="text-lg font-bold text-black dark:text-white mb-1 leading-tight line-clamp-2">{study.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 font-normal line-clamp-2">{study.description}</p>
                      {study.metrics && (
                        <div className="text-xs text-blue-600 dark:text-blue-400 mb-2 font-medium">
                          {study.metrics}
                        </div>
                      )}
                      {study.title === 'E-Commerce Platform Redesign' ? (
                        <Link href="/case-studies/ecommerce-redesign" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 focus:text-blue-700 dark:focus:text-blue-300 text-xs font-semibold mt-1 group transition-colors duration-150">
                          View Case Study <ExternalLink className="w-4 h-4 ml-1" />
                        </Link>
                      ) : (
                        study.link ? (
                          <a href={study.link} className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 focus:text-blue-700 dark:focus:text-blue-300 text-xs font-semibold mt-1 group transition-colors duration-150">
                            View Case Study <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        ) : null
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
            Want to see more of what we've built? <a href="#contact" className="text-blue-600 dark:text-blue-400 hover:underline">Explore all case studies</a> or let's create yours next
          </p>
          <motion.button
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 border-2 border-blue-600 inline-flex items-center space-x-2"
          >
            <span>Book a 15-min call</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies; 