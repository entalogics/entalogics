import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import { getBlogPosts } from "../data/blogData"
import Heading from "./ui/Heading"
import SubHeading from "./ui/SubHeading"
import Button from "./ui/Button"
import { motion } from "framer-motion"

const Blog = () => {
  const blogPosts = getBlogPosts().slice(0, 3) // Show only 3 posts on homepage

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
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section
      id="blog"
      className="relative px-4 md:px-12 py-1 md:py-2 overflow-hidden "
    >

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <Heading level={2} className="mb-6" gradient={true} gradientText="Insights">
            Latest Insights
          </Heading>

          <SubHeading size="sm" className="max-w-3xl mx-auto" center={true}>
            Stay ahead with our latest thoughts on technology, development, and industry trends.
          </SubHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
          {blogPosts.map((post, index) => (
            <div className="h-full w-full" key={post.slug}>
              <div className="group relative h-full flex flex-col bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-xl border border-border dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              {/* Blog Image */}
              {post.image && (
                <div className="relative h-52 overflow-hidden rounded-t-2xl">
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
                    className="inline-flex items-center justify-center px-6 mx-auto py-2 rounded-xl bg-transparent text-primary font-semibold border-[1px] border-primary/20 dark:border-primary/30 hover:shadow-lg transition-all duration-300 group/btn text-sm hover:bg-primary/5 dark:hover:bg-primary/10"
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

        <div className="text-center mt-8">
          <Link href="/blog">
          <Button
            variant="primary"
          size="md"
            icon={<ArrowRight className="w-4 h-4" />}
                         iconPosition="right"
            className="shadow-lg hover:shadow-xl hover:-translate-y-1 ring-1 ring-primary/20 hover:ring-primary/40"
         >
            Explore All Articles
          </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog
