import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { getBlogPosts } from '../data/blogData';

const Blog = () => {
  const blogPosts = getBlogPosts().slice(0, 3); // Show only 3 posts on homepage

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="relative isolate bg-white dark:bg-[#0a1225] py-20 px-4 md:px-12 overflow-hidden">
      {/* Blurred background circles for RozmeriGPT effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-purple-100/50 dark:bg-purple-600/5 blur-3xl pointer-events-none"></div>
        <div className="absolute -top-1/4 -left-40 w-[480px] h-[480px] rounded-full bg-blue-100/50 dark:bg-blue-600/5 blur-3xl pointer-events-none"></div>
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white">
            Our Latest <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Insights & Updates</span>
          </h2>
          <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 font-normal leading-relaxed mb-4 md:mb-6">
            Stay ahead with our latest thoughts on technology, development, and industry trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              className="relative h-full flex flex-col group bg-white dark:bg-[#111A2F] border border-gray-300 dark:border-blue-900/40 rounded-2xl px-6 py-5 md:px-6 md:py-6 shadow-lg shadow-black/5 dark:shadow-blue-900/10 hover:shadow-2xl hover:shadow-blue-900/20 dark:hover:shadow-blue-900/20 transition-all duration-200"
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              {/* Category Badge */}
              <div className="flex-shrink-0 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex-grow flex flex-col">
                <h4 className="font-medium text-base md:text-lg tracking-tight text-black dark:text-white mb-2 md:mb-3 leading-tight line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-normal mb-3 md:mb-4 line-clamp-3">
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
                  className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 dark:border-blue-400/30 text-sm font-bold text-gray-900 dark:text-white bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/20 gap-2"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-7 py-3 rounded-lg border border-gray-300 dark:border-blue-400/30 text-base font-bold text-gray-900 dark:text-white bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/20 gap-2"
          >
            <span>View All Posts</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog; 