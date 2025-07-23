import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../src/components/Layout';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { getBlogPost, getBlogPosts } from '../../src/data/blogData';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

interface BlogPostPageProps {
  post: any;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  const router = useRouter();

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
        <title>{post.title} | Entalogics Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title + ' | Entalogics Blog'} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.ogImage || 'https://entalogics.com/assets/og-image.jpg'} />
        <meta property="og:url" content={`https://entalogics.com/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title + ' | Entalogics Blog'} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.ogImage || 'https://entalogics.com/assets/og-image.jpg'} />
        <link rel="canonical" href={`https://entalogics.com/blog/${post.slug}`} />
      </Head>
      <article className="py-10 md:py-20 bg-white dark:bg-[#0d0d0d] relative overflow-hidden">
        {/* Background gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 opacity-60"></div>
        
        <div className="container mx-auto px-4 md:px-12 max-w-4xl relative z-10">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-[#512feb] dark:text-[#512feb] font-semibold hover:underline"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#512feb]/10 text-[#512feb] dark:bg-[#512feb]/20 dark:text-[#512feb]">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 pb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none prose-headings:text-black prose-headings:dark:text-white prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-strong:text-black prose-strong:dark:text-white prose-li:text-gray-700 prose-li:dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Back to Blog Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-[#512feb] text-sm md:text-base font-semibold text-[#512feb] dark:text-[#512feb] bg-transparent hover:bg-[#512feb] hover:text-white dark:hover:bg-[#512feb] dark:hover:text-white transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#512feb]/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Posts
            </Link>
          </motion.div>
        </div>
      </article>
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
    fallback: false,
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