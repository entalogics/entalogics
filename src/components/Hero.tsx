import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe, UserCheck, Lock, Shield } from 'lucide-react';
import TrustBar from './TrustBar';
import Script from 'next/script';

// Only the tech icon data for the tag cloud
const techIcons = [
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/brave.svg', alt: 'Brave', color: '#fb542b' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Microsoft_Edge_logo_%282019%29.svg', alt: 'Edge WebView' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/webassembly.svg', alt: 'WebAssembly' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg', alt: 'Chromium' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg', alt: 'Electron' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg', alt: 'Next.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TypeScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', alt: 'Vue.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg', alt: 'Angular' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', alt: 'Tailwind' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg', alt: 'Astro' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qwik/qwik-original.svg', alt: 'Qwik' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', alt: 'Flutter' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg', alt: 'Swift' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', alt: 'Kotlin' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', alt: 'MAUI' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tauri/tauri-original.svg', alt: 'Tauri' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', alt: 'C++' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', alt: 'C#/.NET' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg', alt: 'Rust' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', alt: 'GraphQL' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', alt: 'Firebase' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', alt: 'Docker' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', alt: 'Supabase' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', alt: 'AWS' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', alt: 'Azure' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', alt: 'Git' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', alt: 'GitHub' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', alt: 'Redux' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', alt: 'SASS' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', alt: 'Bootstrap' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', alt: 'MySQL' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', alt: 'PostgreSQL' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', alt: 'Express.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', alt: 'Linux' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', alt: 'Nginx' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypress/cypress-original.svg', alt: 'Cypress' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', alt: 'Jest' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', alt: 'Vercel' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg', alt: 'Netlify' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg', alt: 'DigitalOcean' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg', alt: 'Heroku' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', alt: 'Figma' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg', alt: 'Slack' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg', alt: 'Trello' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg', alt: 'Jira' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg', alt: 'Bitbucket' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg', alt: 'Webpack' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg', alt: 'Babel' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg', alt: 'Yarn' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg', alt: 'npm' },
];

const handleTagCanvasInit = () => {
  if (typeof window !== 'undefined' && window.TagCanvas) {
    try {
      const options = {
        reverse: true,
        maxSpeed: 0.02,
        weight: true,
        wheelZoom: false,
        freezeActive: true,
        shuffleTags: true,
        initial: [0.2, -0.2],
        dragControl: true,
        zoom: 1.05,
        pinchZoom: true,
        freezeDecel: true,
        fadeIn: 800,
        clickToFront: 600,
        shape: 'sphere',
        imageScale: 0.3,
        lock: 'xy',
        outlineMethod: 'none',
      };
      console.log('TagCanvas options:', options);
      window.TagCanvas.Start('tagcanvas', 'taglist', options);
    } catch (e) {
      // TagCanvas failed to load
    }
  }
};

const Hero = () => {
  return (
    <>
      <section id="home" className="relative w-full bg-white dark:bg-[#0d0d0d] overflow-hidden flex flex-col md:flex-row items-center justify-center py-0 md:py-14 px-4 md:px-12">
        {/* TagCanvas Script */}
        <Script src="/assets/tagcanvas.min.js" strategy="afterInteractive" onLoad={handleTagCanvasInit} />
        {/* Background gradient for depth in dark mode only */}
        <div className="absolute inset-0 hidden dark:block bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-60"></div>
        {/* TagCanvas 3D Tag Cloud */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch justify-center gap-6 md:gap-0 px-0 sm:px-4 md:px-12 min-h-0">
          {/* Left: Content */}
          <div className="flex-1 flex flex-col justify-between md:justify-center md:items-start items-center text-center md:text-left md:pr-10 h-full pt-20 md:pt-0 pb-2">
          {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 dark:border-[#6d6d8c] bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-[#23233a] dark:via-[#18182b] dark:to-[#23233a] shadow-[0_4px_24px_0_rgba(81,47,235,0.10),0_1.5px_0_0_rgba(81,47,235,0.08)] dark:shadow-[0_4px_24px_0_rgba(81,47,235,0.18),0_1.5px_0_0_rgba(81,47,235,0.12)] ring-1 ring-white/70 dark:ring-black/40 font-semibold text-xs text-gray-900 dark:text-white mb-1 mt-12 relative overflow-visible" style={{boxShadow: '0 4px 24px 0 rgba(81,47,235,0.10), 0 1.5px 0 0 #fff inset, 0 2px 8px 0 rgba(0,0,0,0.04)'}}>
              {/* 3D Glow/Shadow */}
              <span className="absolute -inset-1 rounded-full bg-white/40 dark:bg-black/10 blur-[6px] opacity-60 pointer-events-none" />
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/60 via-transparent to-gray-200/60 dark:from-neutral-900/60 dark:via-transparent dark:to-neutral-800/60 blur-[2px] opacity-70 pointer-events-none" />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[90%] h-2 bg-gradient-to-t from-gray-300/40 dark:from-black/40 to-transparent rounded-b-full blur-[2px] opacity-60 pointer-events-none" />
              <span className="inline-block w-1.5 h-1.5 bg-[#512feb] rounded-full mr-1 animate-pulse z-10"></span>
              <span className="font-semibold text-xs drop-shadow-[0_1px_2px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.32)] z-10">
                <span className="block sm:hidden">Full-Stack Dev, Backed by Logic</span>
                <span className="hidden sm:block">Full-Stack Development, Backed by Clean Code and Logic</span>
              </span>
            </div>
          {/* Main heading */}
            <h1 className="text-[clamp(1.8rem,5vw,2.5rem)] font-extrabold text-black dark:text-white leading-tight mb-4 md:mb-6 tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
              <span className="block">Entalogics Gives Your</span>
              <span className="block">Raw Tech Idea a Life—</span>
              <span className="block">Built With <span style={{ fontFamily: 'Sora, sans-serif' }} className="text-[#512feb]">Logic</span></span>
            </h1>
          {/* Subtitle */}
            <p className="text-[1.125rem] text-black/80 dark:text-white/80 mb-3 md:mb-5 max-w-xl mx-auto md:mx-0 leading-snug font-medium pt-1" style={{ fontFamily: "'Sora', sans-serif" }}>
            We're your full-stack development partner for modern startups and scaleups. From custom browsers to SaaS apps—designed, engineered, and launched with clarity.
          </p>
          {/* Description */}
            <p className="text-base text-black/60 dark:text-white/60 mb-3 md:mb-5 max-w-xl mx-auto md:mx-0 leading-normal font-normal pb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
            Whether you're building an AI tool, browser platform, or custom enterprise app — we become your extended tech team. From MVP to V1 and beyond — we build what matters.
          </p>
          {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 mb-2 md:mb-4 w-full md:w-auto">
              <button
                className="w-full md:w-auto px-5 md:px-6 py-4 md:py-3 font-semibold rounded-xl shadow-lg transition-all duration-150 text-base flex items-center justify-center text-center gap-2 bg-[#512feb] text-white border-2 border-[#512feb] hover:bg-[#4a2bd4] focus:outline-none focus:ring-2 focus:ring-[#512feb] dark:bg-[#512feb] dark:text-white dark:border-[#512feb] dark:hover:bg-[#4a2bd4] dark:focus:ring-[#512feb]"
                data-cal-link="entalogics/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view","theme":"auto"}'
              >
                Schedule a Quick Call <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full md:w-auto px-5 md:px-6 py-4 md:py-3 font-semibold rounded-xl border-2 border-[#512feb] shadow-lg transition-all duration-150 text-base flex items-center justify-center text-center gap-2 bg-white text-[#512feb] hover:bg-gray-50 hover:shadow-[0_0_12px_2px_rgba(81,47,235,0.10)] focus:outline-none focus:ring-2 focus:ring-[#512feb] dark:bg-transparent dark:text-[#512feb] dark:border-[#512feb] dark:hover:bg-[#512feb]/10 dark:focus:ring-[#512feb]">
                <Play className="w-5 h-5" /> Watch Demo
              </button>
            </div>
            {/* Security Badge Row */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-3 mt-1 mb-3 md:mt-2 md:mb-4">
              <motion.span whileHover={{ scale: 1.08, boxShadow: '0 0 12px 2px rgba(34,211,238,0.18)' }} transition={{ type: 'spring', stiffness: 300, damping: 18 }} className="flex items-center gap-1 text-[11px] sm:text-xs font-medium bg-gray-200 dark:bg-gray-800/70 text-gray-800 dark:text-gray-100 px-2 sm:px-3 py-1 rounded-full h-7 sm:h-8 transition-all duration-100 shadow-[0_2px_8px_0_rgba(34,211,238,0.08)] hover:shadow-[0_0_12px_2px_rgba(34,211,238,0.18)] dark:hover:shadow-[0_0_12px_2px_rgba(34,211,238,0.18)] cursor-pointer mb-2 sm:mb-0">
                <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 dark:text-green-400 drop-shadow-[0_1px_2px_rgba(34,211,238,0.18)]" />SSL Secure
              </motion.span>
              <motion.span whileHover={{ scale: 1.08, boxShadow: '0 0 12px 2px rgba(59,130,246,0.18)' }} transition={{ type: 'spring', stiffness: 300, damping: 18 }} className="flex items-center gap-1 text-[11px] sm:text-xs font-medium bg-gray-200 dark:bg-gray-800/70 text-gray-800 dark:text-gray-100 px-2 sm:px-3 py-1 rounded-full h-7 sm:h-8 transition-all duration-100 shadow-[0_2px_8px_0_rgba(59,130,246,0.08)] hover:shadow-[0_0_12px_2px_rgba(59,130,246,0.18)] dark:hover:shadow-[0_0_12px_2px_rgba(59,130,246,0.18)] cursor-pointer mb-2 sm:mb-0">
                <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 drop-shadow-[0_1px_2px_rgba(59,130,246,0.18)]" />NDA Friendly
              </motion.span>
              <motion.span whileHover={{ scale: 1.08, boxShadow: '0 0 12px 2px rgba(168,85,247,0.18)' }} transition={{ type: 'spring', stiffness: 300, damping: 18 }} className="flex items-center gap-1 text-[11px] sm:text-xs font-medium bg-gray-200 dark:bg-gray-800/70 text-gray-800 dark:text-gray-100 px-2 sm:px-3 py-1 rounded-full h-7 sm:h-8 transition-all duration-100 shadow-[0_2px_8px_0_rgba(168,85,247,0.08)] hover:shadow-[0_0_12px_2px_rgba(168,85,247,0.18)] dark:hover:shadow-[0_0_12px_2px_rgba(168,85,247,0.18)] cursor-pointer mb-2 sm:mb-0">
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400 drop-shadow-[0_1px_2px_rgba(168,85,247,0.18)]" />Built by Experts
              </motion.span>
            </div>
            </div>
          {/* Right: TagCanvas Cloud */}
          <div className="flex-1 flex flex-col items-center justify-center min-h-[320px] hidden md:flex">
            <div className="relative w-[400px] h-[400px] md:w-[400px] md:h-[400px]">
              <canvas id="tagcanvas" width="400" height="400" className="w-full h-full" />
              <ul id="taglist" style={{ display: 'none' }}>
                {techIcons.map((icon, i) => (
                  <li key={i}>
                    <a href="#" tabIndex={-1}>
                      <img
                        src={icon.src}
                        alt={icon.alt}
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: '30%',
                          background: '#fff',
                          padding: 1,
                          boxShadow: '0 1px 2px rgba(0,0,0,0.07)',
                          filter: icon.alt === 'Brave' ? 'invert(49%) sepia(97%) saturate(7491%) hue-rotate(1deg) brightness(97%) contrast(101%)' : undefined
                        }}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Social Proof Snippet directly below TagCanvas, perfectly aligned */}
            <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.1 }} className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-2 mb-1 md:mt-3 md:mb-2 cursor-pointer select-none text-center whitespace-nowrap w-full hidden md:flex">
              <Globe className="w-4 h-4 text-neon-cyan" />
              <span>Powering 33+ AI & Apps startups to hit $10M+ ARR</span>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="mt-0 md:-mt-8"><TrustBar /></div>
    </>
  );
};

declare global {
  interface Window {
    TagCanvas?: any;
  }
}

export default Hero; 