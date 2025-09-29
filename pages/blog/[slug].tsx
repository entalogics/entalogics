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
        <title>{String(post.title)} | Entalogics Blog</title>
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
      <div className="bg-white dark:bg-[#0a1225] text-black dark:text-white">
        <article className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-100/20 dark:bg-blue-600/5 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-purple-100/20 dark:bg-purple-600/5 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <div className="mb-16">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl">
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

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div 
              className="prose prose-xl max-w-none prose-headings:text-black prose-headings:dark:text-white prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-strong:text-black prose-strong:dark:text-white prose-li:text-gray-700 prose-li:dark:text-gray-300 prose-a:text-blue-600 prose-a:dark:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-code:text-gray-800 prose-code:dark:text-gray-200 prose-code:bg-gray-100 prose-code:dark:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-100 prose-pre:dark:bg-gray-800 prose-pre:border prose-pre:border-gray-200 prose-pre:dark:border-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>

          {/* Back to Blog Button */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 rounded-xl border border-blue-600 dark:border-blue-400 text-base font-semibold text-blue-600 dark:text-blue-400 bg-transparent hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/20 shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="w-5 h-5 mr-3" />
              Back to All Posts
            </Link>
            </motion.div>
          </div>
          </div>
        </article>
      </div>
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