import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../src/components/Layout';
import { ArrowLeft, ExternalLink, Calendar, Clock, Tag, User } from 'lucide-react';
import Head from 'next/head';
import { portfolioItems } from '../../src/data/portfolioData';

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
        <title>{item?.title || 'Portfolio Item'} | Entalogics Portfolio</title>
        <meta name="description" content={item?.description || 'Portfolio item from Entalogics'} />
        <meta property="og:title" content={`${item?.title || 'Portfolio Item'} | Entalogics Portfolio`} />
        <meta property="og:description" content={item?.description || 'Portfolio item from Entalogics'} />
        <meta property="og:image" content={item.img} />
        <meta property="og:url" content={`https://entalogics.com/portfolio/${item.slug}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${item?.title || 'Portfolio Item'} | Entalogics Portfolio`} />
        <meta name="twitter:description" content={item?.description || 'Portfolio item from Entalogics'} />
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