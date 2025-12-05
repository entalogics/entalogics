"use client"

import Layout from "../src/components/Layout"
import Hero from "../src/components/Hero"
import Reviews from "../src/components/Reviews"
import Services from "../src/components/Services"
import PortfolioCarousel from "../src/components/PortfolioCarousel"
import WhyChooseUs from "../src/components/WhyChooseUs"
import HowWeBuildWithYou from "../src/components/HowWeBuildWithYou"
import FAQ from "../src/components/FAQ"
import Blog from "../src/components/Blog"
import ContactFormSection from "../src/components/ContactFormSection"
import FounderCTASection from "../src/components/FounderCTASection"
import TrustBar from "../src/components/TrustBar"
import Head from "next/head"
import ComparisonSectionWrapper from "@/components/parallax/comparison-section-wrapper"


export default function Page() {
  return (
    <>
      <Head>
        <title>Top Software Development Company | Global Software Developers | Entalogics</title>
        <meta name="description" content="Top software development company serving clients in top global markets. Hire expert developers in USA (all 50 states, 500+ cities, tech hubs), UK (all regions), Singapore, Japan, China, Canada, Australia, Germany, and 15+ high-value markets. Custom software, AI, SaaS, Web & App Development. Senior developers working directly with you." />
        <meta name="keywords" content="top software development company, best software developers, hire software developers USA, software developers California, software developers Texas, software developers New York, software developers Florida, software developers Illinois, software developers Massachusetts, software developers Washington, software developers UK, software developers Singapore, software developers Japan, software developers China, software development company Canada, top developers Australia, software company Germany, custom software development, expert developers worldwide, Entalogics" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="yandex" content="index, follow" />
        <meta property="og:title" content="Top Software Development Company | Custom Software Developers USA | Entalogics" />
        <meta property="og:description" content="Top software development company serving clients across the USA. Hire expert developers in California, Texas, New York, Florida, and all 50 states." />
        <meta property="og:image" content="https://entalogics.com/og-image.png" />
        <meta property="og:image:alt" content="Entalogics - Custom software, AI, SaaS, and app development" />
        <meta name="twitter:title" content="Top Software Development Company | Entalogics" />
        <meta name="twitter:description" content="Top software development company serving clients worldwide. Expert developers working directly with you." />
        <meta name="twitter:image" content="https://entalogics.com/og-image.png" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Entalogics",
              "description": "Top software development company providing custom software, AI, SaaS, and web development services across the USA",
              "url": "https://entalogics.com",
              "logo": "https://entalogics.com/assets/Favicon/Entalogics favicon blue color.svg",
              "image": "https://entalogics.com/og-image.png",
              "telephone": "+1-XXX-XXX-XXXX",
              "email": "info@entalogics.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US",
                "addressRegion": "USA"
              },
              "areaServed": [
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "United Kingdom" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Country", "name": "Australia" },
                { "@type": "Country", "name": "Germany" },
                { "@type": "Country", "name": "France" },
                { "@type": "Country", "name": "Worldwide" }
              ],
              "serviceType": [
                "Software Development",
                "Custom Software Development",
                "AI Development",
                "SaaS Development",
                "Web Development",
                "Mobile App Development"
              ],
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "100+"
              }
            })
          }}
        />
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

          {/* REVIEWS SECTION */}
          <section 
            className="relative pt-5" 
            style={{ 
              overflowX: 'clip'
            }}
          >
            <div className="relative z-10">
              <Reviews />
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
          {/* <section className="relative bg-transparent pt-12 md:pt-16 lg:pt-20 xl:pt-0" style={{ overflowX: 'clip' }}>
            <Testimonials />
          </section> */}

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
          <section id="contact" className="relative bg-transparent pt-6 md:pt-8 lg:pt-10 xl:pt-12 pb-4 md:pb-6 lg:pb-8" style={{ overflowX: 'clip' }}>
            <ContactFormSection />
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
