"use client"
import React from "react"
import { Mail, Calendar, MessageSquare, ArrowRight, Phone, Rocket, Linkedin } from "lucide-react"
import Link from "next/link"
import Heading from "./ui/Heading"
import Button from "./ui/Button"
import Paragraph from "./ui/Paragraph"

const Contact = () => {
  return (
    <section id="contact" className="relative px-4 py-16 md:px-8 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 " aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] items-center">
          {/* Left column */}
          <div>
            <Heading level={2} className="mb-4 leading-tight" gradient gradientText="Together.">
              Let's Build Something Logical — Together.
            </Heading>
            <Paragraph size="sm" className="text-gray-600 dark:text-gray-300 max-w-xl">
              Whether you're starting from scratch or scaling your next big idea — we're ready to bring it to life.
            </Paragraph>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-white px-6 py-3 text-sm font-semibold shadow-[0_12px_30px_rgba(59,130,246,0.25)] hover:shadow-[0_16px_38px_rgba(59,130,246,0.32)] transition-shadow"
              >
                <Rocket className="h-5 w-5" />
                Get Free Quote
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <button
                data-cal-link="entalogics/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view","theme":"auto"}'
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300/80 dark:border-gray-600 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:border-primary/60 hover:shadow-md transition"
              >
                <Phone className="h-5 w-5" />
                Schedule Call
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right column */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-primary/15 blur-2xl" aria-hidden="true" />
            <div className="relative rounded-3xl border border-white/70 dark:border-white/10 bg-white/85 dark:bg-slate-900/80 backdrop-blur-xl shadow-xl shadow-primary/10">
              <div className="divide-y divide-gray-200/80 dark:divide-white/10">
                <a
                  href="mailto:info@entalogics.com"
                  className="group flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-primary/5 dark:hover:bg-white/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary dark:border-teal-300/30 dark:bg-teal-300/10 dark:text-teal-200">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">info@entalogics.com</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <button
                  data-cal-link="entalogics/30min"
                  data-cal-namespace="30min"
                  data-cal-config='{"layout":"month_view","theme":"auto"}'
                  className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-primary/5 dark:hover:bg-white/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary dark:border-teal-300/30 dark:bg-teal-300/10 dark:text-teal-200">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Discovery call</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Schedule a 15-min intro</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <a
                  href="https://www.linkedin.com/company/enta-logics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-primary/5 dark:hover:bg-white/5"
                  aria-label="Visit EntaLogics on LinkedIn"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary dark:border-teal-300/30 dark:bg-teal-300/10 dark:text-teal-200">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">linkedin.com/company/enta-logics</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
              <div className="px-6 pb-5 pt-4 text-center">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                  Usually responds within 2 hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact