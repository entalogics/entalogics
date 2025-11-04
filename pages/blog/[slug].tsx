import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../../src/components/Layout';
import FAQ from '../../src/components/FAQ';
import FounderCTASection from '../../src/components/FounderCTASection';
import Heading from '../../src/components/ui/Heading';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { getBlogPost, getBlogPosts } from '../../src/data/blogData';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

interface BlogPostPageProps {
  post: any;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  const router = useRouter();

  // Helper function to render HTML titles
  const renderTitle = (title: string) => {
    return { __html: title };
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!post) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold text-black dark:text-white mb-4">Blog post not found</h1>
          <Link href="/blog" className="text-[#512feb] hover:underline">
            Back to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{post?.title || 'Blog Post'} | Entalogics Blog</title>
        <meta name="description" content={post?.excerpt || 'Blog post from Entalogics'} />
        <meta property="og:title" content={`${post?.title || 'Blog Post'} | Entalogics Blog`} />
        <meta property="og:description" content={post?.excerpt || 'Blog post from Entalogics'} />
        <meta property="og:image" content={post.ogImage || 'https://entalogics.com/assets/og-image.jpg'} />
        <meta property="og:url" content={`https://entalogics.com/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post?.title || 'Blog Post'} | Entalogics Blog`} />
        <meta name="twitter:description" content={post?.excerpt || 'Blog post from Entalogics'} />
        <meta name="twitter:image" content={post.ogImage || 'https://entalogics.com/assets/og-image.jpg'} />
        <link rel="canonical" href={`https://entalogics.com/blog/${post.slug}`} />
      </Head>
      <div className="bg-white dark:bg-[#0a1225] text-black dark:text-white">
        <article className="relative py-8 md:py-12 lg:py-16 px-4 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-100/20 dark:bg-blue-600/5 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-purple-100/20 dark:bg-purple-600/5 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Category Badge */}
                  <div className="mb-6">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-700">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 leading-tight"
                    dangerouslySetInnerHTML={renderTitle(post.title)}
                  />

                  {/* Excerpt */}
                  <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-8 text-base text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800 pb-8">
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5" />
                      <span>{formatDate(post.publishDate)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Visual - Featured Image */}
              {post.image && (
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white dark:from-gray-800 to-gray-100 dark:to-gray-700 border-2 border-gray-200/50 dark:border-gray-600/50 shadow-xl">
                      <div className="relative h-64 md:h-80 lg:h-[440px]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover object-center hover:scale-105 transition-transform duration-700"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-7xl mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div 
                className="prose prose-xl max-w-none prose-headings:text-black prose-headings:dark:text-white prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-strong:text-black prose-strong:dark:text-white prose-li:text-gray-700 prose-li:dark:text-gray-300 prose-ul:text-gray-700 prose-ul:dark:text-gray-300 prose-ol:text-gray-700 prose-ol:dark:text-gray-300 prose-a:text-blue-600 prose-a:dark:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-code:text-gray-800 prose-code:dark:text-gray-200 prose-code:bg-gray-100 prose-code:dark:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-100 prose-pre:dark:bg-gray-800 prose-pre:border prose-pre:border-gray-200 prose-pre:dark:border-gray-700"
                style={{
                  '--tw-prose-bullets': '#6b7280',
                  '--tw-prose-counters': '#6b7280'
                } as React.CSSProperties}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.div>
          </div>
        </article>
      </div>
      
      {/* FAQ Component */}
      <FAQ showCta={false} />
      
      {/* CTA Component - Founder CTA Section */}
      <FounderCTASection />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getBlogPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: 'blocking', // Enable dynamic page generation for new slugs
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default BlogPostPage; 