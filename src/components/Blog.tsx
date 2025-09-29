import Link from "next/link"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import { getBlogPosts } from "../data/blogData"
import Heading from "./ui/Heading"
import SubHeading from "./ui/SubHeading"
import Button from "./ui/Button"
import { motion } from "framer-motion"

const Blog = () => {
  const blogPosts = getBlogPosts().slice(0, 3) // Show only 3 posts on homepage

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
      className="relative px-4 md:px-12 py-16 md:py-24 overflow-hidden bg-white dark:bg-[#0a1225]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-purple-50/40 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10"></div>
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-blue-200/20 to-purple-200/20 dark:from-blue-600/5 dark:to-purple-600/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-l from-purple-200/20 to-blue-200/20 dark:from-purple-600/5 dark:to-blue-600/5 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <Heading level={2} className="mb-6" gradient={true} gradientText="Insights">
            Latest Insights
          </Heading>

          <SubHeading size="sm" className="max-w-3xl mx-auto" center={true}>
            Stay ahead with our latest thoughts on technology, development, and industry trends.
          </SubHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.slug}
              className="relative h-full flex flex-col group bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-xl border border-gray-200/60 dark:border-white/20 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex-shrink-0 mb-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50">
                  {post.category}
                </span>
              </div>

              <div className="flex-grow flex flex-col">
                <h4 className="font-semibold text-lg md:text-xl tracking-tight text-black dark:text-white mb-3 leading-tight line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h4>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4 pb-4 border-b border-gray-200/50 dark:border-white/10">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{formatDate(post.publishDate)}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <User className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{post.author}</span>
              </div>

              <div className="mt-auto flex-shrink-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center justify-center w-full px-4 py-3 rounded-xl border-2 border-blue-500/20 dark:border-blue-400/30 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 hover:bg-blue-500 hover:border-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/20 gap-2 group"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/blog">
          <Button
          size="md"
          variant="primary"
          
            className=" border-2 border-blue-500/30 dark:border-blue-400/40 text-base font-semibold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 hover:bg-blue-500 hover:border-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/20 gap-3 group shadow-lg hover:shadow-xl hover:-translate-y-1"
          icon={
                           <span style={{ display: "inline-flex" }}>
                             <motion.span
                               animate={{ x: [0, 8, 0] }}
                               transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.2, ease: "easeInOut" }}
                             >
                               <ArrowRight className="w-5 h-5" />
                             </motion.span>
                           </span>
                         }
                         iconPosition="right"
         >
            <span>Explore All Articles</span>
          </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog
