"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Rocket, Phone, ArrowRight } from "lucide-react"
import Heading from "./ui/Heading"
import Paragraph from "./ui/Paragraph"
import Button from "./ui/Button"

const CTA = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-white dark:bg-[#0a1225]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Heading level={2} className="mb-6">
            Let's Build Something <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Together</span>
          </Heading>
          <Paragraph size="lg" className="mb-8 max-w-2xl mx-auto">
            No sales fluff. No tech buzzwords. Just honest conversation about where you are — 
            and how we can help you move forward, fast.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
