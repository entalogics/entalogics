import React from 'react';
import Layout from '../src/components/Layout';
import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import CaseStudies from '../src/components/CaseStudies';
import WhyChooseUs from '../src/components/WhyChooseUs';
import Process from '../src/components/Process';
import Testimonials from '../src/components/Testimonials';
import FAQ from '../src/components/FAQ';
import Blog from '../src/components/Blog';
import Contact from '../src/components/Contact';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <CaseStudies />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQ />
      <Blog />
      <Contact />
    </Layout>
  );
};

export default HomePage; 