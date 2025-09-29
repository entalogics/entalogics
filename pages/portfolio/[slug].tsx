import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../src/components/Layout';
import { ArrowLeft, ExternalLink, Calendar, Clock, Tag, User } from 'lucide-react';
import Head from 'next/head';

const portfolioItems = [
  {
    img: 'https://framerusercontent.com/images/aazHOm8q1Dle8CaB8mAB23Iug.jpg?scale-down-to=1024',
    alt: 'Browser Development for Ghuin Company',
    slug: 'browser-ghuin',
    title: 'Browser Development for Ghuin Company',
    category: 'Browser Development',
    client: 'Ghuin Company',
    duration: '6 months',
    technologies: ['Chromium', 'C++', 'JavaScript', 'WebRTC'],
    description: 'Custom browser solution built on Chromium for enterprise use with advanced security features and custom extensions.',
    caseStudy: 'We developed a custom browser solution for Ghuin Company that required advanced security features, custom extensions, and seamless integration with their existing enterprise systems. The project involved deep Chromium customization, implementing custom protocols, and ensuring cross-platform compatibility.',
    features: [
      'Custom security protocols',
      'Enterprise-grade authentication',
      'Cross-platform compatibility',
      'Custom extension framework',
      'Advanced privacy controls'
    ],
    results: [
      '40% improvement in security compliance',
      '60% faster page load times',
      '99.9% uptime achieved',
      'Seamless enterprise integration'
    ]
  },
  {
    img: 'https://framerusercontent.com/images/Sl4cFgp0S9EM73msgCfcHS06VU4.jpg',
    alt: 'AI SaaS Platform for Innovators',
    slug: 'ai-saas',
    title: 'AI SaaS Platform for Innovators',
    category: 'AI & SaaS',
    client: 'Innovators Inc',
    duration: '8 months',
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'AWS'],
    description: 'Comprehensive AI-powered SaaS platform with machine learning capabilities and real-time analytics.',
    caseStudy: 'Built a complete AI SaaS platform from scratch, featuring machine learning models, real-time analytics, and scalable infrastructure. The platform serves thousands of users with complex AI workflows and data processing capabilities.',
    features: [
      'Machine learning model training',
      'Real-time analytics dashboard',
      'API-first architecture',
      'Multi-tenant support',
      'Advanced data visualization'
    ],
    results: [
      '500% increase in user engagement',
      '90% reduction in processing time',
      '99.5% system reliability',
      'Scalable to 100k+ users'
    ]
  },
  {
    img: 'https://framerusercontent.com/images/igYVAioJ71gEVk6mBJiW2rfDF8.jpg',
    alt: 'E-Commerce Redesign for SyntStore',
    slug: 'ecommerce-redesign',
    title: 'E-Commerce Redesign for SyntStore',
    category: 'E-Commerce',
    client: 'SyntStore',
    duration: '4 months',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    description: 'Complete e-commerce platform redesign with modern UI/UX and advanced shopping features.',
    caseStudy: 'Redesigned and rebuilt SyntStore\'s entire e-commerce platform with a focus on user experience, performance, and conversion optimization. The new platform features modern design, mobile-first approach, and advanced shopping cart functionality.',
    features: [
      'Modern, responsive design',
      'Advanced search and filtering',
      'Secure payment processing',
      'Inventory management',
      'Customer analytics'
    ],
    results: [
      '150% increase in conversions',
      '70% improvement in page speed',
      '95% mobile user satisfaction',
      'Zero security incidents'
    ]
  },
  {
    img: 'https://framerusercontent.com/images/hat47grEjBWfesZ7BaiBbeatQ.jpg',
    alt: 'Healthcare App for Medix',
    slug: 'healthcare-app',
    title: 'Healthcare App for Medix',
    category: 'Healthcare',
    client: 'Medix Healthcare',
    duration: '10 months',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'HIPAA Compliance'],
    description: 'HIPAA-compliant healthcare mobile application with patient management and telemedicine features.',
    caseStudy: 'Developed a comprehensive healthcare mobile application that enables patients to manage their health records, schedule appointments, and connect with healthcare providers through secure telemedicine features. The app is fully HIPAA compliant and handles sensitive medical data.',
    features: [
      'Patient health records management',
      'Telemedicine video calls',
      'Appointment scheduling',
      'Medication reminders',
      'HIPAA compliance'
    ],
    results: [
      '80% patient satisfaction rate',
      '50% reduction in appointment no-shows',
      '100% HIPAA compliance',
      '10k+ active users'
    ]
  },
  {
    img: 'https://framerusercontent.com/images/xgykL3t2ZWDB14YtJW3oI1dd5RA.jpg',
    alt: 'Web3 Wallet for CryptoX',
    slug: 'web3-wallet',
    title: 'Web3 Wallet for CryptoX',
    category: 'Web3 & Blockchain',
    client: 'CryptoX',
    duration: '7 months',
    technologies: ['React', 'Web3.js', 'Solidity', 'Ethereum'],
    description: 'Secure Web3 wallet application with multi-chain support and DeFi integration.',
    caseStudy: 'Built a comprehensive Web3 wallet that supports multiple blockchain networks, DeFi protocols, and NFT management. The wallet features advanced security measures, user-friendly interface, and seamless integration with various DeFi platforms.',
    features: [
      'Multi-chain support',
      'DeFi protocol integration',
      'NFT management',
      'Advanced security features',
      'Staking capabilities'
    ],
    results: [
      '200% increase in user adoption',
      'Zero security breaches',
      'Support for 10+ blockchains',
      '$50M+ in transactions processed'
    ]
  },
  {
    img: 'https://framerusercontent.com/images/efhLWkFH29SDhozs7ZhlUgWAkjk.jpg',
    alt: 'SaaS Dashboard for Finlytics',
    slug: 'saas-dashboard',
    title: 'SaaS Dashboard for Finlytics',
    category: 'FinTech',
    client: 'Finlytics',
    duration: '5 months',
    technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
    description: 'Advanced financial analytics dashboard with real-time data visualization and reporting.',
    caseStudy: 'Created a sophisticated financial analytics dashboard that processes millions of data points in real-time. The dashboard provides comprehensive financial insights, customizable reports, and advanced data visualization tools for financial professionals.',
    features: [
      'Real-time data processing',
      'Advanced data visualization',
      'Customizable reports',
      'API integrations',
      'Role-based access control'
    ],
    results: [
      '300% faster data processing',
      '95% user satisfaction',
      '50% reduction in report generation time',
      'Support for 1M+ data points'
    ]
  },
  {
    img: 'https://framerusercontent.com/images/bHK8tjLNwXKFljRK6Gy7KZ6sc.jpg',
    alt: 'Custom CRM for SalesPro',
    slug: 'custom-crm',
    title: 'Custom CRM for SalesPro',
    category: 'CRM & Sales',
    client: 'SalesPro',
    duration: '6 months',
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'Redis'],
    description: 'Custom CRM system with advanced sales pipeline management and automation features.',
    caseStudy: 'Developed a comprehensive CRM system tailored to SalesPro\'s specific business needs. The system includes advanced sales pipeline management, automated workflows, customer communication tools, and detailed analytics for sales performance tracking.',
    features: [
      'Sales pipeline management',
      'Automated workflows',
      'Customer communication tools',
      'Performance analytics',
      'Integration capabilities'
    ],
    results: [
      '120% increase in sales efficiency',
      '80% reduction in manual tasks',
      '90% user adoption rate',
      '25% improvement in lead conversion'
    ]
  },
  {
    img: 'https://framerusercontent.com/images/7vdKibdfBacm0gh8GmZgZf2seUo.jpg',
    alt: 'Mobile Banking for Bankly',
    slug: 'mobile-banking',
    title: 'Mobile Banking for Bankly',
    category: 'FinTech',
    client: 'Bankly',
    duration: '9 months',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Banking APIs'],
    description: 'Secure mobile banking application with advanced financial features and biometric authentication.',
    caseStudy: 'Built a comprehensive mobile banking application with advanced security features, biometric authentication, and seamless integration with banking systems. The app handles sensitive financial transactions with enterprise-grade security.',
    features: [
      'Biometric authentication',
      'Real-time transactions',
      'Bill payment system',
      'Investment tracking',
      'Advanced security'
    ],
    results: [
      '99.9% security compliance',
      '85% user satisfaction',
      '60% increase in mobile transactions',
      'Zero security incidents'
    ]
  },
  {
    img: 'https://framerusercontent.com/images/fDwBP8JIoY7d98D09zaO17aug.jpg',
    alt: 'Logistics Platform for MoveIt',
    slug: 'logistics-platform',
    title: 'Logistics Platform for MoveIt',
    category: 'Logistics',
    client: 'MoveIt Logistics',
    duration: '8 months',
    technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
    description: 'Comprehensive logistics management platform with real-time tracking and route optimization.',
    caseStudy: 'Developed a complete logistics management platform that handles shipment tracking, route optimization, driver management, and customer communication. The platform integrates with various shipping carriers and provides real-time updates.',
    features: [
      'Real-time tracking',
      'Route optimization',
      'Driver management',
      'Customer portal',
      'Analytics dashboard'
    ],
    results: [
      '40% improvement in delivery efficiency',
      '90% customer satisfaction',
      '50% reduction in fuel costs',
      'Real-time tracking for 100% of shipments'
    ]
  },
];

const PortfolioCaseStudy = () => {
  const router = useRouter();
  const { slug } = router.query;
  const item = portfolioItems.find(i => i.slug === slug);

  if (!item) {
    return (
      <Layout>
        <Head>
          <title>Portfolio Item Not Found | Entalogics</title>
          <meta name="description" content="The requested portfolio item could not be found." />
        </Head>
        <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-white dark:bg-[#0a1225]">
          <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">Case Study Not Found</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Sorry, we couldn't find this portfolio item.</p>
          <Link href="/portfolio" className="text-blue-600 dark:text-blue-400 hover:underline text-lg">
            Back to Portfolio
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{item.title} | Entalogics Portfolio</title>
        <meta name="description" content={item.description} />
        <meta property="og:title" content={item.title + ' | Entalogics Portfolio'} />
        <meta property="og:description" content={item.description} />
        <meta property="og:image" content={item.img} />
        <meta property="og:url" content={`https://entalogics.com/portfolio/${item.slug}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={item.title + ' | Entalogics Portfolio'} />
        <meta name="twitter:description" content={item.description} />
        <meta name="twitter:image" content={item.img} />
        <link rel="canonical" href={`https://entalogics.com/portfolio/${item.slug}`} />
      </Head>
      
      <div className="bg-white dark:bg-[#0a1225] text-black dark:text-white">
        <article className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-100/20 dark:bg-blue-600/5 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-purple-100/20 dark:bg-purple-600/5 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto">

            {/* Project Header */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Category Badge */}
                <div className="mb-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-700">
                    <Tag className="w-4 h-4 mr-2" />
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
                  {item.title}
                </h1>

                {/* Description */}
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl">
                  {item.description}
                </p>

                {/* Project Meta Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <User className="w-5 h-5" />
                    <div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-500">Client</div>
                      <div className="text-lg font-semibold text-black dark:text-white">{item.client}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Clock className="w-5 h-5" />
                    <div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-500">Duration</div>
                      <div className="text-lg font-semibold text-black dark:text-white">{item.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-5 h-5" />
                    <div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-500">Category</div>
                      <div className="text-lg font-semibold text-black dark:text-white">{item.category}</div>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Project Image */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={item.img} 
                    alt={item.alt} 
                    className="w-full h-96 md:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>
            </div>

            {/* Case Study Content */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-8">Project Overview</h2>
                <div className="prose prose-xl max-w-none prose-headings:text-black prose-headings:dark:text-white prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-strong:text-black prose-strong:dark:text-white prose-li:text-gray-700 prose-li:dark:text-gray-300">
                  <p className="text-xl leading-relaxed">{item.caseStudy}</p>
                </div>
              </motion.div>
            </div>

            {/* Features and Results Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6">Key Features</h3>
                <ul className="space-y-4">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-lg text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6">Results Achieved</h3>
                <ul className="space-y-4">
                  {item.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-lg text-gray-700 dark:text-gray-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

          </div>
        </article>
      </div>
    </Layout>
  );
};

export default PortfolioCaseStudy; 