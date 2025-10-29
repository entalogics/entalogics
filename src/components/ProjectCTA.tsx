import React from "react"
import Link from "next/link"
import { Calendar } from "lucide-react"
import Heading from "./ui/Heading"
import Paragraph from "./ui/Paragraph"
import Button from "./ui/Button"

const ProjectCTA = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white shadow-xl">
      <Heading level={3} className="text-white mb-4">
        Ready to Build Something Amazing?
      </Heading>
      <Paragraph size="sm" className="text-white/90 mb-6 max-w-2xl mx-auto">
        Let's discuss your project and see how we can help you achieve your goals with quality software at fair pricing.
      </Paragraph>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/quote">
          <Button
            variant="secondary"
            size="md"
            className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg font-normal"
          >
            Get a Quote
          </Button>
        </Link>
        <button
          data-cal-link="entalogics/30min"
          data-cal-namespace="30min"
          data-cal-config='{"layout":"month_view","theme":"auto"}'
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-lg transition-colors shadow-sm hover:shadow-md cursor-pointer backdrop-blur-sm"
        >
          <Calendar className="w-5 h-5" />
          Schedule a Call
        </button>
      </div>
    </div>
  )
}

export default ProjectCTA

