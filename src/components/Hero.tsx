import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe, UserCheck, Lock, Shield } from 'lucide-react';
import TrustBar from './TrustBar';
import Link from 'next/link';
import Image from 'next/image';
import { Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'], weight: ['400', '600', '800'], display: 'swap' });

const Hero = () => {
  return (
    <>
      <section id="home" className={`relative isolate w-full bg-white dark:bg-[#0a1225] overflow-hidden flex flex-col items-center justify-center py-24 md:py-32 lg:py-40 px-4 subtle-grid-background pb-0 ${sora.className}`}>
        {/* Blurred background circles for RozmeriGPT effect - CONTAINED to hero only */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] sm:-top-32 sm:-left-32 max-w-none max-h-none rounded-full bg-blue-100/50 dark:bg-blue-600/5 blur-3xl" style={{zIndex: -10}}></div>
          <div className="absolute -bottom-24 -right-40 w-[400px] h-[400px] sm:w-[520px] sm:h-[520px] sm:-bottom-40 sm:-right-40 max-w-none max-h-none rounded-full bg-purple-100/50 dark:bg-purple-600/5 blur-3xl" style={{zIndex: -10}}></div>
        </div>
        
        {/* Main Content Container - no z-index needed here now */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
          {/* Badge */}
          <div className="mb-6 md:mb-8">
            <span className="relative inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-700 shadow transition-all duration-300">
              Full-Stack Development, Backed by Logic
            </span>
          </div>
          {/* Main heading with gradient only on 'Scalable Product' */}
          <h1 className="relative text-[clamp(1.3rem,6vw,3.2rem)] font-extrabold leading-[1.15] mb-4 md:mb-7 tracking-tighter text-black dark:text-white">
            From Idea to <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Scalable Product</span><br />
            We Build What Others<br />
            Don’t Dare To.
          </h1>
          {/* Subtitle */}
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            We're your full-stack product development partner for startups, scaleups, and innovators. Whether it's SaaS, AI platforms, custom browsers, or Web3 apps — we engineer and launch with precision, speed, and business logic.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-6">
            <button
              className="w-full sm:w-auto px-7 py-3 font-bold rounded-lg shadow transition-all duration-200 text-base bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400/40 text-center"
              data-cal-link="entalogics/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view","theme":"auto"}'
            >
              <span className="flex items-center justify-center w-full">Schedule a Quick Call
                <motion.span
                  animate={{ x: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                  className="inline-flex ml-2"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </span>
            </button>
            <Link href="/quote" legacyBehavior> 
              <a className="w-full sm:w-auto px-7 py-3 font-bold rounded-lg border border-gray-300 dark:border-blue-400/30 bg-white dark:bg-transparent text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 flex items-center justify-center gap-2 transition-all duration-200 text-base text-center">
                <span className="w-full flex items-center justify-center">Get a Quote</span>
              </a>
            </Link>
          </div>
          {/* Trust Bar: Enterprise-Polish, Single Line */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-4 text-[13px] text-gray-500 dark:text-blue-300 font-medium">
            <span className="flex items-center gap-1">🛡️ NDA Friendly</span>
            <span className="mx-1">|</span>
            <span className="flex items-center gap-1">🔒 SSL Secure</span>
            <span className="mx-1">|</span>
            <span className="flex items-center gap-1">🏗️ 100+ Projects Delivered</span>
            <span className="mx-1">|</span>
            <span className="flex items-center gap-1">⭐ Top-Rated Plus Agency</span>
          </div>
        </div>

        {/* Tech Icons Row - improved theme matching */}
        <div className="sm:flex hidden flex-wrap justify-center items-center gap-4 mt-10 mb-2">
          {[
            { src: '/assets/tech-icons/figma.svg', alt: 'Figma' },
            { src: '/assets/tech-icons/flutter.svg', alt: 'Flutter' },
            { src: '/assets/tech-icons/graphql.svg', alt: 'GraphQL' },
            { src: '/assets/tech-icons/nextjs.svg', alt: 'Next.js' },
            { src: '/assets/tech-icons/nodejs.svg', alt: 'Node.js' },
            { src: '/assets/tech-icons/python.svg', alt: 'Python' },
            { src: '/assets/tech-icons/react.svg', alt: 'React' },
            { src: '/assets/tech-icons/tailwindcss.svg', alt: 'Tailwind CSS' },
            { src: '/assets/tech-icons/typescript.svg', alt: 'TypeScript' },
            { src: '/assets/tech-icons/docker.svg', alt: 'Docker' },
            { src: '/assets/tech-icons/postgresql.svg', alt: 'PostgreSQL' },
          ].map(icon => (
            <div key={icon.alt} className="bg-white/70 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700/40 rounded-xl p-3 flex items-center justify-center backdrop-blur-md shadow-md transition-all duration-300 w-14 h-14 mx-auto">
              <Image src={icon.src} alt={icon.alt} width={40} height={40} className="w-10 h-10 filter invert-0 dark:invert" />
            </div>
          ))}
        </div>
        {/* Mobile: horizontal scrollable row, tiny icons */}
        {/* <div className="flex sm:hidden gap-2 mt-10 mb-2 overflow-x-auto px-1" style={{ WebkitOverflowScrolling: 'touch' }}>
          {[
            { src: '/assets/tech-icons/figma.svg', alt: 'Figma' },
            { src: '/assets/tech-icons/flutter.svg', alt: 'Flutter' },
            { src: '/assets/tech-icons/graphql.svg', alt: 'GraphQL' },
            { src: '/assets/tech-icons/nextjs.svg', alt: 'Next.js' },
            { src: '/assets/tech-icons/nodejs.svg', alt: 'Node.js' },
            { src: '/assets/tech-icons/python.svg', alt: 'Python' },
            { src: '/assets/tech-icons/react.svg', alt: 'React' },
            { src: '/assets/tech-icons/tailwindcss.svg', alt: 'Tailwind CSS' },
            { src: '/assets/tech-icons/typescript.svg', alt: 'TypeScript' },
            { src: '/assets/tech-icons/docker.svg', alt: 'Docker' },
            { src: '/assets/tech-icons/postgresql.svg', alt: 'PostgreSQL' },
          ].map(icon => (
            <div key={icon.alt} className="bg-white/70 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700/40 rounded-xl p-0.5 flex items-center justify-center backdrop-blur-md shadow-md transition-all duration-300 w-8 h-8 flex-shrink-0">
              <img src={icon.src} alt={icon.alt} className="w-7 h-7 filter invert-0 dark:invert" />
            </div>
          ))}
        </div> */}
      </section>
      <TrustBar />
    </>
  );
};

export default Hero; 