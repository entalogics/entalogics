import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../src/components/Layout';
import FAQ from '../../src/components/FAQ';
import CTA from '../../src/components/CTA';
import Heading from '../../src/components/ui/Heading';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { getBlogPosts } from '../../src/data/blogData';
import Head from 'next/head';

const BlogIndex = () => {
  const blogPosts = getBlogPosts();
  
  // Helper function to strip HTML tags for card titles
  const stripHtml = (html: string) => {
    if (typeof window === 'undefined') {
      // Server-side: simple regex to remove HTML tags
      return html.replace(/<[^>]*>/g, '');
    }
    // Client-side: use DOMParser
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

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
        <title>Blog | Software Development Insights & Tutorials | Entalogics</title>
        <meta name="description" content="Read insights, tutorials, and expert articles on software development, SaaS, AI, web development, mobile apps, and technology trends from the Entalogics team." />
        <meta name="keywords" content="software development blog, SaaS development articles, AI development tutorials, web development insights, mobile app development guides, technology blog, programming tutorials, software engineering blog, Entalogics blog" />
        <meta name="author" content="Entalogics" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Blog | Software Development Insights & Tutorials | Entalogics" />
        <meta property="og:description" content="Read insights, tutorials, and expert articles on software development, SaaS, AI, web development, mobile apps, and technology trends from the Entalogics team." />
        <meta property="og:image" content="https://entalogics.com/assets/og-image.jpg" />
        <meta property="og:url" content="https://entalogics.com/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Software Development Insights & Tutorials | Entalogics" />
        <meta name="twitter:description" content="Read insights, tutorials, and expert articles on software development, SaaS, AI, web development, mobile apps, and technology trends from the Entalogics team." />
        <meta name="twitter:image" content="https://entalogics.com/assets/og-image.jpg" />
        <link rel="canonical" href="https://entalogics.com/blog" />
      </Head>
      <Layout>
        <section className="relative px-4 md:px-12 pt-0 pb-8 md:py-12 overflow-hidden bg-white dark:bg-[#0a1225]">
          <div className="container mx-auto px-0 md:px-8 relative z-10 max-w-7xl">

            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12 pt-4 md:pt-0">
              <Heading 
                level={1}
                gradient={true}
                gradientText="Blog"
                className="text-balance mb-2 md:mb-4"
              >
                Our Blog
              </Heading>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-normal leading-relaxed mb-0">
                Insights, tutorials, and thoughts on technology, development, and industry trends.
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
              {blogPosts.map((post, index) => (
                <div className="h-full w-full" key={post.slug}>
                  <div className="group relative h-full flex flex-col bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-xl border border-border dark:border-gray-700 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    {/* Blog Image */}
                    {post.image && (
                      <div className="relative h-52 overflow-hidden rounded-t-lg">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                  {/* Category Badge */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-blue-600/90 dark:bg-blue-500/90 text-white shadow-sm backdrop-blur-sm">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                      {post.category}
                    </span>
                  </div>
                      </div>
                    )}

                    <div className="relative z-10 flex-grow flex flex-col p-3">
                  <div className="flex-grow flex flex-col">
                        
                        <h4 className="font-semibold text-lg tracking-tight text-card-foreground dark:text-white leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-300 mb-2">
                          {stripHtml(post.title)}
                    </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium mb-2 line-clamp-2">
                          {post.excerpt.split(' ').slice(0, 12).join(' ')}...
                    </p>

                        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-2">
                          <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.publishDate)}</span>
                    </div>
                          <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                        <div className="flex items-center gap-2 mb-2">
                    <User className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">{post.author}</span>
                        </div>
                  </div>

                      <div className="mt-auto flex-shrink-0 pt-2 pb-1 mx-auto">
                    <Link
                      href={`/blog/${post.slug}`}
                          className="inline-flex items-center justify-center px-6 mx-auto py-2 rounded-md bg-transparent text-primary font-semibold border-[1px] border-primary/20 dark:border-primary/30 hover:shadow-lg transition-all duration-300 group/btn text-sm hover:bg-primary/5 dark:hover:bg-primary/10"
                    >
                          <span>Read Article</span>
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section with proper spacing */}
        <div className="mt-8 md:mt-12">
          <FAQ showCta={false} />
        </div>
        
        {/* CTA Component */}
        <CTA />
      </Layout>
    </>
  );
};

export default BlogIndex; 