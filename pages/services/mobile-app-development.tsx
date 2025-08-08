import React from 'react';
import Layout from '../../src/components/Layout';
import Head from 'next/head';

const MobileAppDevelopment = () => {
  return (
    <Layout>
      <Head>
        <title>Mobile App Development | Entalogics</title>
        <meta name="description" content="Mobile app development services by Entalogics. Cross-platform, native-feel mobile apps built with Flutter and React Native. High-performance, beautiful, and launch-ready mobile applications for startups and enterprises." />
        <link rel="canonical" href="https://entalogics.com/services/mobile-app-development" />
        <meta property="og:title" content="Mobile App Development | Entalogics" />
        <meta property="og:description" content="Mobile app development services by Entalogics. Cross-platform, native-feel mobile apps built with Flutter and React Native. High-performance, beautiful, and launch-ready mobile applications for startups and enterprises." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://entalogics.com/services/mobile-app-development" />
        <meta property="og:image" content="https://entalogics.com/assets/og-image.jpg" />
        <meta property="og:site_name" content="Entalogics" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:alt" content="Mobile App Development by Entalogics - Cross-platform, high-performance apps" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile App Development | Entalogics" />
        <meta name="twitter:description" content="Mobile app development services by Entalogics. Cross-platform, native-feel mobile apps built with Flutter and React Native. High-performance, beautiful, and launch-ready mobile applications for startups and enterprises." />
        <meta name="twitter:image" content="https://entalogics.com/assets/og-image.jpg" />
      </Head>
      {/* Hero Section */}
      <section className="relative isolate w-full bg-white dark:bg-[#0a1225] overflow-hidden flex flex-col items-center justify-center py-20 md:py-24 lg:py-28 px-4 subtle-grid-background pb-0">
        {/* Blurred background circles */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] sm:-top-32 sm:-left-32 max-w-none max-h-none rounded-full bg-blue-100/50 dark:bg-blue-600/5 blur-3xl" style={{zIndex: -10}}></div>
          <div className="absolute -bottom-24 -right-40 w-[400px] h-[400px] sm:w-[520px] sm:h-[520px] sm:-bottom-40 sm:-right-40 max-w-none max-h-none rounded-full bg-purple-100/50 dark:bg-purple-600/5 blur-3xl" style={{zIndex: -10}}></div>
        </div>
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
          <span className="relative inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-700 shadow transition-all duration-300 mb-6 md:mb-8">
            📱 Mobile App Development
          </span>
          <h1 className="text-[clamp(1.3rem,6vw,3.2rem)] font-extrabold leading-[1.15] mb-4 md:mb-7 tracking-tighter text-black dark:text-white">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Cross-platform apps. Native feel. Built to perform.</span>
          </h1>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            We build beautiful, high-performance mobile apps using Flutter and React Native — so you get native quality with cross-platform speed. Whether you’re launching a startup MVP or an enterprise app, we design, code, test, and ship apps that users love using.
          </p>
          <div className="flex justify-center">
            <a
              href="/quote"
              className="px-7 py-3 rounded-lg bg-blue-600 text-white font-bold text-base md:text-lg shadow hover:bg-blue-700 transition-all duration-200 min-w-[180px] flex items-center justify-center"
            >
              Let’s Build your Mobile App →
            </a>
          </div>
        </div>
      </section>
      {/* Overview Paragraphs */}
      <section className="relative bg-white dark:bg-[#0a1225] py-8 md:py-10 px-4 md:px-0 mt-12 md:mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 font-medium mb-4">
            Our mobile apps are fast, smooth, and launch-ready. No laggy experiences. No half-baked features.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default MobileAppDevelopment; 