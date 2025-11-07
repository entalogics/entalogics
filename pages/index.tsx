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
import FounderCTASection from "../src/components/FounderCTASection"
import TrustBar from "../src/components/TrustBar"
import Head from "next/head"
import ComparisonSectionWrapper from "@/components/parallax/comparison-section-wrapper"


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
        {/* Global Background Container - No overflow-hidden to allow sticky positioning for parallax */}
        <div className="w-full relative max-w-[100vw]">

          {/* HERO SECTION */}
          <section 
            className="relative overflow-y-visible bg-white dark:bg-[#0a1225]" 
            style={{ 
              overflowX: 'clip'
            }}
          >
            <div className="relative z-10">
              <Hero />
            </div>
          </section>



          {/* SERVICES SECTION */}
          <section 
            className="relative pt-0 md:pt-0 lg:pt-16 xl:pt-5" 
            style={{ 
              overflowX: 'clip'
            }}
          >
            <div className="relative z-10">
              <Services />
            </div>
          </section>

          {/* PORTFOLIO SECTION */}
          <section className="relative bg-transparent pt-12 md:pt-16 lg:pt-20 xl:pt-24" style={{ overflowX: 'clip' }}>
            <PortfolioCarousel />
          </section>

          {/* WHY CHOOSE US SECTION */}
           {/* HOW WE DIFFER PARALLAX SECTION - Isolated from z-index stacking */}
           <section className="relative bg-transparent pt-12 md:pt-5 lg:pt-5 xl:pt-5" style={{ overflowX: 'clip' }}>
            <ComparisonSectionWrapper />
          </section>
          {/* HOW WE BUILD SECTION */}
          
           
      


          {/* TESTIMONIALS SECTION */}
          <section className="relative bg-transparent pt-12 md:pt-16 lg:pt-20 xl:pt-0" style={{ overflowX: 'clip' }}>
            <Testimonials />
          </section>

          {/* FAQ SECTION */}
          <section id="faq" className="relative bg-transparent pt-12 md:pt-16 lg:pt-20 xl:pt-24" style={{ overflowX: 'clip' }}>
            <FAQ showCta={false} />
          </section>

          {/* CTA SECTION - Last Section from Service Slug Page */}
          <FounderCTASection />

          {/* BLOG SECTION */}
          <section className="relative bg-transparent pt-6 md:pt-8 lg:pt-10 xl:pt-12" style={{ overflowX: 'clip' }}>
            <Blog />
          </section>

          {/* CONTACT SECTION */}
          <section id="contact" className="relative bg-transparent py-12 md:py-16 lg:py-20 xl:pt-24" style={{ overflowX: 'clip' }}>
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
          overflow-x: hidden;
          max-width: 100vw;
        }

        /* Prevent gradient cutting during scroll */
        body {
          overflow-x: hidden;
          max-width: 100vw;
        }
      `}</style>
    </>
  )
}
