import React from 'react';
import Layout from '../src/components/Layout';
import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import PortfolioCarousel from '../src/components/PortfolioCarousel';
import WhyChooseUs from '../src/components/WhyChooseUs';
import HowWeBuildWithYou from '../src/components/HowWeBuildWithYou';
import Testimonials from '../src/components/Testimonials';
import FAQ from '../src/components/FAQ';
import Blog from '../src/components/Blog';
import Contact from '../src/components/Contact';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Custom Software Development | Entalogics</title>
        <meta name="description" content="AI, SaaS, Web & App Development. We turn your idea into a logic-driven, scalable product. Built with clean code." />
        <meta property="og:title" content="Entalogics - Scalable Software Development" />
        <meta property="og:description" content="We build AI and SaaS products that scale. From idea to launch, with business logic baked in." />
        <meta property="og:image" content="https://entalogics.com/assets/og-image.jpg" />
        <meta property="og:url" content="https://entalogics.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Entalogics - Build Better Software" />
        <meta name="twitter:description" content="AI, SaaS, and scalable apps — built clean, built right." />
        <meta name="twitter:image" content="https://entalogics.com/assets/og-image.jpg" />
        <link rel="canonical" href="https://entalogics.com/" />
      </Head>
      <Layout noPaddingTop>
        <Hero />
        <Services />
        <PortfolioCarousel />
        <WhyChooseUs />
        <HowWeBuildWithYou />
        <Testimonials />
        <FAQ />
        <Blog />
        <Contact />
      </Layout>
    </>
  );
};

export default HomePage; 