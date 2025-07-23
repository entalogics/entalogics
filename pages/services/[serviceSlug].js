import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { servicesData } from '../../src/data/servicesData';
import Contact from '../../src/components/Contact';
import Layout from '../../src/components/Layout';
import Head from 'next/head';

const ServicePage = () => {
  const router = useRouter();
  const { serviceSlug } = router.query;
  const service = servicesData[serviceSlug];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [serviceSlug]);

  if (!service) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold">Service not found</h1>
          <button 
            onClick={() => router.push('/')} 
            className="text-primary-600 dark:text-primary-400 mt-4 inline-block"
          >
            Go back to Home
          </button>
        </div>
      </Layout>
    );
  }

  const renderContent = (item, index) => {
    switch (item.type) {
      case 'h2':
        return <h2 key={index} className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6 mt-12">{item.text}</h2>;
      case 'h3':
        return <h3 key={index} className="text-2xl font-bold text-secondary-800 dark:text-secondary-100 mb-4 mt-8">{item.text}</h3>;
      case 'p':
        return <p key={index} className="text-lg text-secondary-700 dark:text-secondary-300 mb-6 leading-relaxed">{item.text}</p>;
      case 'list':
        return (
          <ul key={index} className="space-y-4 mb-8">
            {item.items.map((li, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary-500 dark:text-primary-400 mr-4 mt-1 flex-shrink-0" />
                <span className="text-lg text-secondary-700 dark:text-secondary-300" dangerouslySetInnerHTML={{ __html: li.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></span>
              </li>
            ))}
          </ul>
        );
      case 'technologies':
        return (
          <div key={index} className="flex flex-wrap gap-3 mb-8">
            {item.items.map((tech, i) => (
              <span key={i} className="bg-primary-100 dark:bg-secondary-800 text-primary-700 dark:text-primary-300 font-medium px-4 py-2 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Head>
        <title>{service.title} | Services | Entalogics</title>
        <meta name="description" content={service.tagline || 'Explore our custom software, AI, and web development services.'} />
        <meta property="og:title" content={service.title + ' | Services | Entalogics'} />
        <meta property="og:description" content={service.tagline || 'Explore our custom software, AI, and web development services.'} />
        <meta property="og:image" content="https://entalogics.com/assets/og-image.jpg" />
        <meta property="og:url" content={`https://entalogics.com/services/${serviceSlug}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.title + ' | Services | Entalogics'} />
        <meta name="twitter:description" content={service.tagline || 'Explore our custom software, AI, and web development services.'} />
        <meta name="twitter:image" content="https://entalogics.com/assets/og-image.jpg" />
        <link rel="canonical" href={`https://entalogics.com/services/${serviceSlug}`} />
      </Head>
      {/* Hero Section */}
      <section className="relative bg-secondary-50 dark:bg-secondary-900 pt-32 pb-20">
        <div className="container-custom">
          <motion.button
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-semibold mb-8"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Services</span>
          </motion.button>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-secondary-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {service.title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {service.tagline}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          {service.content.map(renderContent)}
        </div>
      </section>

      <Contact />
    </Layout>
  );
};

export default ServicePage; 