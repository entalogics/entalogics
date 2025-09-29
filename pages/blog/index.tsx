import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../src/components/Layout';
import { Calendar, Clock, User, ArrowRight, ArrowLeft } from 'lucide-react';
import { getBlogPosts } from '../../src/data/blogData';
import Head from 'next/head';

const BlogIndex = () => {
  const blogPosts = getBlogPosts();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Head>
        <title>Blog | Entalogics</title>
        <meta name="description" content="Insights, tutorials, and thoughts on technology, development, and industry trends from the Entalogics team." />
        <meta property="og:title" content="Entalogics Blog - Insights & Tutorials" />
        <meta property="og:description" content="Insights, tutorials, and thoughts on technology, development, and industry trends from the Entalogics team." />
        <meta property="og:image" content="https://entalogics.com/assets/og-image.jpg" />
        <meta property="og:url" content="https://entalogics.com/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Entalogics Blog - Insights & Tutorials" />
        <meta name="twitter:description" content="Insights, tutorials, and thoughts on technology, development, and industry trends from the Entalogics team." />
        <meta name="twitter:image" content="https://entalogics.com/assets/og-image.jpg" />
        <link rel="canonical" href="https://entalogics.com/blog" />
      </Head>
      <Layout>
        <section className="py-10 md:py-20 bg-white dark:bg-[#0d0d0d] relative overflow-hidden">
          {/* Background gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 opacity-60"></div>
          
          <div className="container mx-auto px-4 md:px-12 relative z-10">
            {/* Back to Home */}
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center text-[#512feb] dark:text-[#512feb] font-semibold hover:underline"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>

            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black dark:text-white mb-2 md:mb-6 tracking-tight">
                Our Blog
              </h1>
              <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 font-normal leading-relaxed mb-4 md:mb-6">
                Insights, tutorials, and thoughts on technology, development, and industry trends.
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8">
              {blogPosts.map((post, index) => (
                <div
                  key={post.slug}
                  className="relative h-full flex flex-col group bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-[#e5e7eb] dark:border-white/30 rounded-2xl px-6 py-5 md:px-6 md:py-6 shadow-lg shadow-black/5 dark:shadow-black/30 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/50 transition-all duration-200"
                >
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.15 } }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    style={{ height: "100%", display: "flex", flexDirection: "column" }}
                  >
                  {/* Category Badge */}
                  <div className="flex-shrink-0 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#512feb]/10 text-[#512feb] dark:bg-[#512feb]/20 dark:text-[#512feb]">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-grow flex flex-col">
                    <h4 className="font-medium text-base md:text-lg tracking-tight text-black dark:text-white mb-2 md:mb-3 leading-tight line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-sm md:text-base text-[#4B5563] dark:text-[#A1A1AA] leading-relaxed font-normal mb-3 md:mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.publishDate)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">{post.author}</span>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-auto flex-shrink-0 pt-2 flex justify-center md:justify-start">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center px-3 py-1.5 rounded-full border border-[#512feb] text-xs md:text-sm font-semibold text-[#512feb] dark:text-[#512feb] bg-transparent hover:bg-[#512feb] hover:text-white dark:hover:bg-[#512feb] dark:hover:text-white transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#512feb]/20"
                      style={{ minWidth: 0 }}
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BlogIndex; 