import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../src/components/Layout';
import Heading from '../../src/components/ui/Heading';
import Paragraph from '../../src/components/ui/Paragraph';
import Button from '../../src/components/ui/Button';
import CTA from '../../src/components/CTA';
import FAQ from '../../src/components/FAQ';
import FounderCTASection from '../../src/components/FounderCTASection';
import { topLocations } from '../../src/data/topLocationsData';
import { servicesData } from '../../src/data/servicesData';
import { MapPin, Code, Smartphone, Globe, Brain, Chrome, Palette, Monitor, Settings, Zap, Database, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700', '800', '900'], 
  display: 'swap' 
});

interface LocationPageProps {
  location: {
    name: string;
    type: 'state' | 'country';
    slug: string;
    cities: string[];
    description: string;
    abbreviation?: string;
  };
  services: Array<{
    slug: string;
    title: string;
    tagline: string;
    iconName: string;
  }>;
}

const iconMap: { [key: string]: React.ElementType } = {
  Code,
  Smartphone,
  Globe,
  Zap,
  Database,
  Shield,
  Brain,
  Chrome,
  Palette,
  Monitor,
  Settings,
};

const LocationServicePage: React.FC<LocationPageProps> = ({ location, services }) => {
  const locationName = location.name;
  const isState = location.type === 'state';
  const locationType = isState ? 'State' : 'Country';

  return (
    <Layout noPaddingTop>
      <Head>
        <title>Software Development Services in {locationName} | Entalogics</title>
        <meta
          name="description"
          content={`Professional software development services in ${locationName}. Hire expert developers for web, mobile, SaaS, and AI applications. Serving ${location.cities.slice(0, 5).join(', ')}, and more.`}
        />
        <meta name="keywords" content={`software development ${locationName}, developers ${locationName}, ${locationName} software company, tech services ${locationName}, ${location.cities.map(c => `developers ${c}`).join(', ')}`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`Software Development Services in ${locationName} | Entalogics`} />
        <meta property="og:description" content={`Professional software development services in ${locationName}. Expert developers for web, mobile, SaaS, and AI applications.`} />
        <meta property="og:url" content={`https://entalogics.com/locations/${location.slug}`} />
        <link rel="canonical" href={`https://entalogics.com/locations/${location.slug}`} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": `Software Development Services in ${locationName}`,
              "description": `Professional software development services in ${locationName}`,
              "provider": {
                "@type": "Organization",
                "name": "Entalogics",
                "url": "https://entalogics.com"
              },
              "areaServed": {
                "@type": isState ? "State" : "Country",
                "name": locationName
              },
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": `https://entalogics.com/locations/${location.slug}`
              }
            })
          }}
        />
      </Head>

      {/* Hero Section - Matching Homepage Style */}
      <section className="relative isolate w-full overflow-hidden !overflow-y-visible flex flex-col items-center justify-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8 pb-6 md:pb-8 bg-white dark:bg-[#0a1225]">
        {/* Main Content Container */}
        <div className="w-full max-w-[1050px] max-laptop:max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:col-span-7">
            {/* Location Badge */}
            <div className="mb-3 sm:mb-4 md:mb-5 flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#512feb]" />
                <span>Serving {locationName}</span>
              </div>
            </div>

            {/* Main heading with gradient - Matching Homepage Style */}
            <Heading
              level={1}
              className={`relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[700] leading-[1.1] mb-2 sm:mb-3 ${poppins.className}`}
            >
              <span className="block">
                <span className="text-black dark:text-white">Top Software </span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-[800]">
                  Development
                </span>
              </span>
              <span className="block text-black dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Company in {locationName}</span>
              <span className="block text-[#4F46E5] dark:text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl font-[500] mt-2 sm:mt-3">
                Expert Developers & Custom Solutions
              </span>
            </Heading>

            {/* Subtitle */}
            <p className="mb-4 sm:mb-5 md:mb-6 max-w-xl mx-auto lg:mx-0 text-gray-600 dark:text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base">
              Professional software development services for {locationName}. Expert developers for web applications, mobile apps, SaaS platforms, and AI solutions — with <span className="text-blue-600 dark:text-blue-400 font-semibold">senior-level expertise</span>.
            </p>

            {/* Cities Display */}
            <div className="mb-4 sm:mb-5 md:mb-6 flex flex-wrap justify-center lg:justify-start gap-2">
              {location.cities.slice(0, 6).map((city) => (
                <span
                  key={city}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {city}
                </span>
              ))}
              {location.cities.length > 6 && (
                <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                  +{location.cities.length - 6} more
                </span>
              )}
            </div>

            {/* Buttons - Matching Homepage Style */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap">
              <Link href="/#contact" className="inline-block group">
                <div
                  className="relative rounded-lg p-[1px] transition-all duration-300 group-hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #8b5cf6, #3b82f6)',
                  }}
                >
                  <button className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-md flex items-center justify-center gap-2 whitespace-nowrap group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_40px_rgba(139,92,246,0.3)] transition-shadow duration-300">
                    <span>Start your project</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{ display: "inline-flex" }}
                    >
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </motion.span>
                  </button>
                </div>
              </Link>

              <Link href="/services" className="inline-block">
                <button className="text-xs sm:text-sm font-[500] px-4 sm:px-5 py-2.5 sm:py-3 whitespace-nowrap bg-transparent border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors rounded-md">
                  View Services
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Location Info Cards */}
          <div className="flex items-center justify-center order-2 lg:justify-end lg:col-span-5 mt-6 sm:mt-8 lg:mt-0">
            <div className="w-full max-w-sm space-y-3 sm:space-y-4">
              {/* Location Stats Card */}
              <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-2 sm:mb-3">
                  <div className="p-1.5 sm:p-2 bg-blue-600 rounded-lg">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Cities Served</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{location.cities.length}+</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Major cities including {location.cities.slice(0, 3).join(', ')} and more
                </p>
              </div>

              {/* Services Card */}
              <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-3 mb-2 sm:mb-3">
                  <div className="p-1.5 sm:p-2 bg-purple-600 rounded-lg">
                    <Code className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Services Available</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{services.length}+</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Web, Mobile, SaaS, AI & more
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#0a1225]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Our Services in {locationName}
            </Heading>
            <Paragraph className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We offer comprehensive software development services tailored for businesses in {locationName}
            </Paragraph>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.iconName] || Code;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group p-4 sm:p-5 md:p-6 bg-gray-50 dark:bg-[#1a1f35] rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-[#512feb]"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-[#512feb]/10 rounded-lg group-hover:bg-[#512feb] transition-colors flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#512feb] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-black dark:text-white group-hover:text-[#512feb] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-[#0f1629]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
              Why Choose Entalogics for {locationName} Development
            </Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  title: 'Direct Collaboration',
                  description: 'Work directly with senior developers, no middle managers or account executives.',
                },
                {
                  title: 'Cost-Effective Solutions',
                  description: 'Get premium development services at competitive rates without sacrificing quality.',
                },
                {
                  title: 'Fast Time to Market',
                  description: 'Start development immediately with our ready-to-work development teams.',
                },
                {
                  title: 'Scalable Teams',
                  description: 'Scale your development team up or down based on project needs.',
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 md:p-6 bg-white dark:bg-[#1a1f35] rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#512feb] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-black dark:text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cities Served Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#0a1225]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Cities We Serve in {locationName}
            </Heading>
            <Paragraph className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
              We provide software development services to businesses across {locationName}, including:
            </Paragraph>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {location.cities.map((city) => (
                <div
                  key={city}
                  className="p-3 sm:p-4 bg-gray-50 dark:bg-[#1a1f35] rounded-lg text-center"
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#512feb] mx-auto mb-1 sm:mb-2" />
                  <span className="text-xs sm:text-sm text-black dark:text-white font-medium">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <FAQ />
      <FounderCTASection />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate paths for US states and top countries with SEO-friendly URLs
  const paths: Array<{ params: { locationSlug: string } }> = [];

  // Helper function to create SEO-friendly slug
  const createSEOSlug = (locationName: string) => {
    const baseSlug = locationName.toLowerCase().replace(/\s+/g, '-');
    return `top-software-development-company-in-${baseSlug}`;
  };

  // Add US states
  const usLocation = topLocations.find(loc => loc.code === 'US');
  if (usLocation?.states) {
    usLocation.states.forEach((state) => {
      const slug = createSEOSlug(state.name);
      paths.push({
        params: { locationSlug: slug },
      });
    });
  }

  // Add top countries (excluding US as we handle states separately)
  topLocations
    .filter(loc => loc.code !== 'US')
    .forEach((location) => {
      const slug = createSEOSlug(location.country);
      paths.push({
        params: { locationSlug: slug },
      });
    });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const locationSlug = params?.locationSlug as string;

  // Extract location name from SEO-friendly slug
  // Format: "top-software-development-company-in-{location}"
  const locationNameMatch = locationSlug.match(/^top-software-development-company-in-(.+)$/);
  if (!locationNameMatch) {
    return {
      notFound: true,
    };
  }
  
  const locationNameSlug = locationNameMatch[1];
  const locationName = locationNameSlug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  // Find location in topLocations
  let locationData: any = null;
  let locationType: 'state' | 'country' = 'country';

  // Check if it's a US state
  const usLocation = topLocations.find(loc => loc.code === 'US');
  if (usLocation?.states) {
    const state = usLocation.states.find(
      (s) => s.name.toLowerCase().replace(/\s+/g, '-') === locationNameSlug
    );
    if (state) {
      locationData = {
        name: state.name,
        abbreviation: state.abbreviation,
        cities: state.majorCities,
      };
      locationType = 'state';
    }
  }

  // If not a state, check countries
  if (!locationData) {
    const country = topLocations.find(
      (loc) => loc.country.toLowerCase().replace(/\s+/g, '-') === locationNameSlug
    );
    if (country) {
      locationData = {
        name: country.country,
        cities: country.majorCities,
      };
      locationType = 'country';
    }
  }

  if (!locationData) {
    return {
      notFound: true,
    };
  }

  // Get all services
  const services = Object.values(servicesData).map((service) => ({
    slug: service.slug,
    title: service.title,
    tagline: service.tagline,
    iconName: service.iconName,
  }));

  return {
    props: {
      location: {
        name: locationData.name,
        type: locationType,
        slug: locationSlug, // Full SEO-friendly slug (e.g., "top-software-development-company-in-texas")
        cities: locationData.cities || [],
        description: `Software development services in ${locationData.name}`,
        abbreviation: locationData.abbreviation || null,
      },
      services,
    },
  };
};

export default LocationServicePage;

