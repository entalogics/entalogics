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

const HomePage = () => {
  return (
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
  );
};

export default HomePage; 