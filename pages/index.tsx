"use client"

import Layout from "../src/components/Layout"
import Hero from "../src/components/Hero"
import Services from "../src/components/Services"
import PortfolioCarousel from "../src/components/PortfolioCarousel"
import WhyChooseUs from "../src/components/WhyChooseUs"
import HowWeBuildWithYou from "../src/components/HowWeBuildWithYou"
import Testimonials from "../src/components/Testimonials"
import FAQ from "../src/components/FAQ"
import Blog from "../src/components/Blog"
import Contact from "../src/components/Contact"
import TrustBar from "../src/components/TrustBar"
import Head from "next/head"

export default function Page() {
  return (
    <>
       <Head>
        <title>Custom Software Development | Entalogics</title>
        <meta name="description" content="AI, SaaS, Web & App Development. We turn your idea into a logic-driven, scalable product. Built with clean code." />
        <meta property="og:title" content="Entalogics - Scalable Software Development" />
        <meta property="og:description" content="We build AI and SaaS products that scale. From idea to launch, with business logic baked in." />
        <meta property="og:image" content="https://entalogics.com/assets/og-image.jpg" />
        <meta property="og:image:alt" content="Entalogics - Custom software, AI, SaaS, and app development" />
        <meta name="twitter:title" content="Entalogics - Build Better Software" />
        <meta name="twitter:description" content="AI, SaaS, and scalable apps — built clean, built right." />
        <meta name="twitter:image" content="https://entalogics.com/assets/og-image.jpg" />
      </Head>

      <Layout noPaddingTop canonicalPath="/">
        {/* Global Background Container - Fixed backgrounds */}
        <div className="overflow-x-hidden overflow-y-visible max-w-[100vw]">
        
          {/* HERO SECTION */}
          <section className="relative bg-transparent min-h-0 md:min-h-0 lg:min-h-screen z-10 overflow-y-visible">
            {/* Section specific gradients */}
            
            <Hero />
          </section>

     

          {/* SERVICES SECTION */}
          <section className="relative bg-transparent z-10 pt-0 md:pt-0 lg:pt-16 xl:pt-5">
            <Services />
          </section>

          {/* PORTFOLIO SECTION */}
          <section className="relative bg-transparent z-10 pt-12 md:pt-16 lg:pt-20 xl:pt-24">
            <PortfolioCarousel />
          </section>

          {/* WHY CHOOSE US SECTION */}
          <section className="relative bg-transparent z-10 pt-12 md:pt-16 lg:pt-20 xl:pt-24">
            <WhyChooseUs />
          </section>

          {/* HOW WE BUILD SECTION */}
          <section className="relative bg-transparent z-10 pt-12 md:pt-16 lg:pt-20 xl:pt-24">
            <HowWeBuildWithYou />
          </section>

          {/* TESTIMONIALS SECTION */}
          <section className="relative bg-transparent z-10 pt-12 md:pt-16 lg:pt-20 xl:pt-24">
            <Testimonials />
          </section>

          {/* FAQ SECTION */}
          <section id="faq" className="relative bg-transparent z-10 pt-12 md:pt-16 lg:pt-20 xl:pt-24">
           
            <FAQ />
          </section>

          {/* BLOG SECTION */}
          <section className="relative bg-transparent z-10 pt-12 md:pt-16 lg:pt-20 xl:pt-24">
            <Blog />
          </section>

          {/* CONTACT SECTION */}
          <section id="contact" className="relative bg-transparent z-10 py-12 md:py-16 lg:py-20 xl:pt-24">
            <Contact />
          </section>
        </div>
      </Layout>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Prevent gradient cutting during scroll */
        body {
          overflow-x: hidden;
        }
      `}</style>
    </>
  )
}
