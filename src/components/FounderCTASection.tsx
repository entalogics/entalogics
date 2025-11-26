import React from "react"
import Link from "next/link"
import { Calendar } from "lucide-react"
import Heading from "./ui/Heading"
import Paragraph from "./ui/Paragraph"
import Button from "./ui/Button"

interface FounderCTASectionProps {
  title?: string
  description?: string
  showQuoteButton?: boolean
  showScheduleButton?: boolean
}

const FounderCTASection: React.FC<FounderCTASectionProps> = ({
  title = "Ready to Build Something Amazing?",
  description = "Let's discuss your project and see how we can help you achieve your goals with quality software at fair pricing.",
  showQuoteButton = true,
  showScheduleButton = true,
}) => {
  return (
    <section className="pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12  relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="space-y-8">
          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-md p-8 text-center text-white shadow-xl">
            <Heading level={3} className="text-white mb-4">
              {title}
            </Heading>
            <Paragraph size="sm" className="text-white/90 mb-6 max-w-2xl mx-auto">
              {description}
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {showQuoteButton && (
                <Link href="/contact-us" className="w-full sm:w-auto">
                  <Button
                    variant="secondary"
                    size="md"
                    className="bg-white dark:bg-white text-blue-600 dark:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-100 border-0 dark:border-0 shadow-lg font-normal w-full sm:w-auto"
                  >
                    Get a Quote
                  </Button>
                </Link>
              )}
              {showScheduleButton && (
                <button
                  data-cal-link="entalogics/30min"
                  data-cal-namespace="30min"
                  data-cal-config='{"layout":"month_view","theme":"auto"}'
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-md transition-colors shadow-sm hover:shadow-md cursor-pointer backdrop-blur-sm w-full sm:w-auto"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule a Call
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderCTASection

