import React from 'react';
import Head from 'next/head';
import Layout from '../src/components/Layout';

const ChromiumBrowserDevelopment = () => (
  <>
    <Head>
      <title>Chromium Browser Development & Customization | Entalogics</title>
      <meta name="description" content="We build and modify Chromium-based browsers tailored for privacy, AI, crypto, or enterprise needs. Custom UI, search engine, and feature integrations." />
      <meta property="og:title" content="Chromium Browser Development Experts" />
      <meta property="og:description" content="Custom Chromium builds with AI, Web3, and enterprise features. Modified Brave & Chromium forks for your product." />
      <meta property="og:image" content="https://entalogics.com/assets/chromium-og.jpg" />
      <meta property="og:url" content="https://entalogics.com/chromium-browser-development" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Chromium Browser Builders | Entalogics" />
      <meta name="twitter:description" content="From rebranding Brave to building full-featured AI browsers — we handle all Chromium customization." />
      <meta name="twitter:image" content="https://entalogics.com/assets/chromium-og.jpg" />
      <link rel="canonical" href="https://entalogics.com/chromium-browser-development" />
    </Head>
    <Layout>
      <section className="py-20 px-4 bg-white dark:bg-[#0a1225] min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-black dark:text-white">
          Chromium Browser Development & Customization
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          We build and modify Chromium-based browsers tailored for privacy, AI, crypto, or enterprise needs. Custom UI, search engine, and feature integrations.
        </p>
        <div className="mt-8">
          <a href="/quote" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition-all text-lg">Request a Consultation</a>
        </div>
      </section>
    </Layout>
  </>
);

export default ChromiumBrowserDevelopment; 