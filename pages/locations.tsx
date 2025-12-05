import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../src/components/Layout';
import Heading from '../src/components/ui/Heading';
import Paragraph from '../src/components/ui/Paragraph';
import Button from '../src/components/ui/Button';
import CTA from '../src/components/CTA';
import FAQ from '../src/components/FAQ';
import FounderCTASection from '../src/components/FounderCTASection';
import { MapPin, Globe, Building2, ArrowRight, CheckCircle } from 'lucide-react';
import { topLocations } from '../src/data/topLocationsData';
import { usaDetailedStates } from '../src/data/usaDetailedLocations';

const LocationsPage = () => {
  // Get US location data
  const usLocation = topLocations.find(loc => loc.code === 'US');
  const usStates = usLocation?.states || [];

  // Get other countries
  const otherCountries = topLocations.filter(loc => loc.code !== 'US');

  return (
    <Layout noPaddingTop>
      <Head>
        <title>Global Software Development Services | Locations We Serve | Entalogics</title>
        <meta
          name="description"
          content="Entalogics provides expert software development services to clients in the world's top tech markets. Serving USA (all 50 states), UK, Canada, Australia, Germany, Singapore, Japan, and 15+ more high-value markets."
        />
        <meta
          name="keywords"
          content="software development locations, global software services, USA software development, UK software development, Canada software development, Australia software development, software development companies by location, Entalogics locations"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Global Software Development Services | Locations We Serve | Entalogics" />
        <meta property="og:description" content="Expert software development services in USA, UK, Canada, Australia, Germany, Singapore, Japan, and 15+ more top tech markets." />
        <meta property="og:url" content="https://entalogics.com/locations" />
        <link rel="canonical" href="https://entalogics.com/locations" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Global Software Development Services",
              "description": "Expert software development services serving clients worldwide",
              "provider": {
                "@type": "Organization",
                "name": "Entalogics",
                "url": "https://entalogics.com"
              },
              "areaServed": [
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "United Kingdom" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Country", "name": "Australia" },
                { "@type": "Country", "name": "Germany" },
                { "@type": "Country", "name": "Singapore" },
                { "@type": "Country", "name": "Japan" }
              ],
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://entalogics.com/locations"
              }
            })
          }}
        />
      </Head>

      {/* Hero Section - Redesigned */}
      <section className="relative pt-24 pb-16 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 bg-[#512feb] text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Global Coverage Badge */}
            <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="text-xs sm:text-sm font-medium text-white">Global Coverage</span>
            </div>

            {/* Main Heading */}
            <Heading
              level={1}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight"
            >
              Top Software Development Company Serving Top Global Markets
            </Heading>

            {/* Description */}
            <Paragraph className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed">
              Entalogics provides expert software development services to clients in the world's top tech markets. We work with businesses in USA (all 50 states), UK (all regions), Singapore, Japan, China, Canada, Australia, Germany, and 15+ more high-value markets where actual buyers are available.
            </Paragraph>

            {/* CTA Buttons */}
            <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center bg-white text-[#512feb] hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-[#512feb] border-2 border-white text-white hover:bg-[#421ecf] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-lg transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive USA Coverage */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#0a1225]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Comprehensive USA Coverage - All 50 States, 500+ Cities, Tech Hubs
            </Heading>
            <Paragraph className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Serving 1144+ cities across all 50 states, including major tech hubs like Silicon Valley, Silicon Alley, Silicon Prairie, Research Triangle Park, and 447+ specific tech districts and neighborhoods.
            </Paragraph>
          </div>

          {/* Top States with Detailed Coverage */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-black dark:text-white">
              Top States with Detailed City & Tech Hub Coverage
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {usStates.slice(0, 10).map((state) => {
                const detailedState = usaDetailedStates.find(s => s.name === state.name);
                const majorCities = detailedState?.majorCities || state.majorCities;
                const techHubs = detailedState?.techHubs || [];
                const secondaryCities = detailedState?.secondaryCities || [];

                return (
                  <div
                    key={state.name}
                    className="p-4 sm:p-5 md:p-6 bg-gray-50 dark:bg-[#1a1f35] rounded-xl border border-gray-200 dark:border-gray-800 hover:border-[#512feb] transition-colors"
                  >
                    <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#512feb] flex-shrink-0 mt-1" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-black dark:text-white">
                          {state.name} {state.abbreviation && `(${state.abbreviation})`}
                        </h4>
                        <Link
                          href={`/locations/top-software-development-company-in-${state.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-xs sm:text-sm text-[#512feb] hover:underline break-words"
                        >
                          software development in {state.name}
                        </Link>
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                          Cities:
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {majorCities.slice(0, 6).join(', ')}
                          {majorCities.length > 6 && ` +${majorCities.length - 6} more`}
                        </p>
                        {secondaryCities && secondaryCities.length > 0 && (
                          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 line-clamp-1">
                            Also: {secondaryCities.slice(0, 3).join(', ')}
                            {secondaryCities.length > 3 && ` +${secondaryCities.length - 3} more`}
                          </p>
                        )}
                      </div>

                      {techHubs.length > 0 && (
                        <div>
                          <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                            Tech Hubs:
                          </p>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                            {techHubs.slice(0, 4).join(', ')}
                            {techHubs.length > 4 && ` +${techHubs.length - 4} more`}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* All 50 States List */}
          <div className="bg-gray-50 dark:bg-[#1a1f35] rounded-xl p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-black dark:text-white">
              All 50 States Coverage
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
              {usStates.map((state) => (
                <Link
                  key={state.name}
                  href={`/locations/top-software-development-company-in-${state.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-3 bg-white dark:bg-[#0a1225] rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                >
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#512feb] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-black dark:text-white group-hover:text-[#512feb] transition-colors truncate">
                    {state.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UK Regions */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-[#0f1629]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Serving All UK Regions
            </Heading>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {topLocations
              .find(loc => loc.code === 'GB')
              ?.states?.map((region) => (
                <div
                  key={region.name}
                  className="p-4 sm:p-5 md:p-6 bg-white dark:bg-[#1a1f35] rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-black dark:text-white">
                    {region.name}
                  </h4>
                  <Link
                    href={`/locations/top-software-development-company-in-${region.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-xs sm:text-sm text-[#512feb] hover:underline mb-2 sm:mb-3 block"
                  >
                    software development in {region.name}
                  </Link>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {region.majorCities.slice(0, 4).map((city) => (
                      <span
                        key={city}
                        className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-gray-700 dark:text-gray-300"
                      >
                        {city}
                      </span>
                    ))}
                    {region.majorCities.length > 4 && (
                      <span className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-gray-700 dark:text-gray-300">
                        +{region.majorCities.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Top Global Markets */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#0a1225]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Top Global Markets - 20 Countries with Highest Buyer Concentration
            </Heading>
            <Paragraph className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Focused on countries with highest concentration of software development buyers and tech companies.
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {otherCountries.map((country) => (
              <div
                key={country.code}
                className="p-4 sm:p-5 md:p-6 bg-gray-50 dark:bg-[#1a1f35] rounded-xl border border-gray-200 dark:border-gray-800 hover:border-[#512feb] transition-colors"
              >
                <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#512feb] flex-shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-black dark:text-white">
                      {country.country}
                    </h4>
                    <Link
                      href={`/locations/top-software-development-company-in-${country.country.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-xs sm:text-sm text-[#512feb] hover:underline break-words"
                    >
                      software development in {country.country}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {country.majorCities.slice(0, 3).map((city) => (
                    <span
                      key={city}
                      className="px-2 sm:px-3 py-1 bg-white dark:bg-[#0a1225] rounded-full text-xs text-gray-700 dark:text-gray-300"
                    >
                      {city}
                    </span>
                  ))}
                  {country.majorCities.length > 3 && (
                    <span className="px-2 sm:px-3 py-1 bg-white dark:bg-[#0a1225] rounded-full text-xs text-gray-700 dark:text-gray-300">
                      +{country.majorCities.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#512feb] to-[#6d4aff] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
              Why Choose Entalogics for Global Software Development?
            </Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {[
                {
                  title: 'Direct Collaboration',
                  description: 'Work directly with senior developers, no middle managers.',
                },
                {
                  title: 'Fair Pricing',
                  description: 'Quality code at fair prices, no hidden fees or markup.',
                },
                {
                  title: 'Global Experience',
                  description: '600+ products built, companies scaled to $40M+ ARR.',
                },
              ].map((benefit, index) => (
                <div key={index} className="p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                  <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{benefit.title}</h4>
                  <p className="text-sm sm:text-base text-white/90">{benefit.description}</p>
                </div>
              ))}
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#512feb] rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <FAQ />
      <FounderCTASection />
    </Layout>
  );
};

export default LocationsPage;

