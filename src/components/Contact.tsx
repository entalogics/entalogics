"use client"
import React from "react"
import { Mail, Calendar, MessageSquare, ArrowRight, Phone, Rocket, MessageCircle } from "lucide-react"
import Link from "next/link"
import Heading from "./ui/Heading"
import Button from "./ui/Button"
import Paragraph from "./ui/Paragraph"

const Contact = () => {
  return (
    <section id="contact" className="relative px-4 md:px-12 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Heading + CTA */}
          <div className="space-y-5">
            <Heading level={2} className="mb-2" gradient={true} gradientText="Together.">
              Let's Build Something Logical — Together.
            </Heading>
            <Paragraph size="sm" className="text-gray-600 dark:text-gray-300 max-w-md" center={false}>
              Whether you're starting from scratch or scaling your next big idea — we're ready to bring it to life.
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-start max-md:justify-center pt-4">
                <Button
                  variant="primary"
                  size="sm"
                  icon={<Rocket className="w-5 h-5" />}
                  className="shadow-lg hover:shadow-xl py-3 ring-1 ring-primary/20 hover:ring-primary/40 font-normal"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Free Quote
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <a
                  data-cal-link="entalogics/30min"
                  data-cal-namespace="30min"
                  data-cal-config='{"layout":"month_view","theme":"auto"}'
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md cursor-pointer"
                >
                  <Phone className="w-5 h-5" />
                  Schedule Call
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
          </div>

          {/* Right: Single neutral card with full-row actions */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-xl p-2">
            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              <a href="mailto:entalogics@gmail.com" className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors">
                <div className="w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">entalogics@gmail.com</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </a>

              <button 
                data-cal-link="entalogics/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view","theme":"auto"}'
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors w-full text-left"
              >
                <div className="w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Discovery call</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Schedule a 15-min intro</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </button>

              <a href="https://wa.me/923207385471" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors">
                <div className="w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">+92 320 7385471</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </a>
            </div>
            <div className="px-4 py-3 text-center">
              <span className="text-xs text-gray-600 dark:text-gray-400">Usually responds within 2 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact