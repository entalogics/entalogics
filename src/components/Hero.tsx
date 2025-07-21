import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe, UserCheck, Lock, Shield } from 'lucide-react';
import TrustBar from './TrustBar';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <section id="home" className="relative w-full bg-white dark:bg-[#0a1225] overflow-hidden flex flex-col items-center justify-center py-24 md:py-32 lg:py-40 px-4 subtle-grid-background">
        {/* Blurred background circles for RozmeriGPT effect */}
        {/* Top-left blue circle */}
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-blue-100/50 dark:bg-blue-600/5 blur-3xl z-0 pointer-events-none"></div>
        {/* Bottom-right purple circle */}
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-purple-100/50 dark:bg-purple-600/5 blur-3xl z-0 pointer-events-none"></div>
        
        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
          {/* Badge */}
          <div className="mb-6 md:mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-700 shadow transition-all duration-300">
              Full-Stack Development, Backed by Logic
            </span>
          </div>
          {/* Main heading with gradient only on 'Scalable Product' */}
          <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.15] mb-4 md:mb-7 tracking-tighter text-black dark:text-white">
            From Idea to <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Scalable Product</span><br />
            We Build What Others<br />
            Don’t Dare To.
          </h1>
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            We're your full-stack product development partner for startups, scaleups, and innovators. Whether it's SaaS, AI platforms, custom browsers, or Web3 apps — we engineer and launch with precision, speed, and business logic.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-6">
            <button
              className="w-full sm:w-auto px-7 py-3 font-bold rounded-lg shadow transition-all duration-200 text-base bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
              data-cal-link="entalogics/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view","theme":"auto"}'
            >
              Schedule a Quick Call
              <motion.span
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="inline-flex"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </button>
            <Link href="/quote" legacyBehavior>
              <a className="w-full sm:w-auto px-7 py-3 font-bold rounded-lg border border-gray-300 dark:border-blue-400/30 bg-white dark:bg-transparent text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 flex items-center gap-2 transition-all duration-200 text-base">
                Get a Quote
              </a>
            </Link>
          </div>
          {/* Security Badge Row */}
          <div className="flex items-center justify-center space-x-4 mt-4">
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
              <Shield size={14} />
              <span>NDA Friendly</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400">
              <Lock size={14} />
              <span>SSL Secure</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-violet-600 dark:text-violet-400">
              <UserCheck size={14} />
              <span>Top Rated Plus Team</span>
            </div>
          </div>
        </div>
      </section>
      <TrustBar />
    </>
  );
};

export default Hero; 