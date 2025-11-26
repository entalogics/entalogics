"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Layout from "../src/components/Layout"
import Head from "next/head"
import Link from "next/link"
import {
  ArrowLeft,
  Mail,
  Phone,
  Send,
  CheckCircle,
  Users,
  Zap,
  Globe,
  MessageCircle,
  ChevronDown,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Heading from "../src/components/ui/Heading"
import Paragraph from "../src/components/ui/Paragraph"

interface QuoteFormState {
  fullName: string
  company: string
  country: string
  email: string
  phone: string
  website: string
  description: string
  consent: boolean
}

const initialState: QuoteFormState = {
  fullName: "",
  company: "",
  country: "",
  email: "",
  phone: "",
  website: "",
  description: "",
  consent: false,
}

const countries = [
  "",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "United Arab Emirates",
  "Pakistan",
  "Other",
]

const lookingForGroups = [
  {
    label: "Development Services",
    options: [
      "Mobile App Development",
      "Web Development",
      "Frontend",
      "Custom Software",
      "Readymade Solutions",
      "Browser Development & Modificarions (Chromium/Brave)",
      "Electron App Development",
    ],
  },
  {
    label: "AI & Automation",
    options: ["AI Agents", "AI App Development", "AI-Powered Web Platforms"],
  },
  {
    label: "Team & Business Solutions",
    options: ["Hire Dedicated Developer", "Partnership Opportunities"],
  },
]

const budgetOptions = [
  "Under $5,000",
  "$5,000 – $10,000",
  "$10,000 – $20,000",
  "$20,000+",
  "Custom budget",
  "Message us to discuss",
]

const timelineOptions = [
  "ASAP (Rush job)",
  "1-2 weeks",
  "1 month",
  "2-3 months",
  "3-6 months",
  "6+ months",
  "Flexible",
]

const projectTypeOptions = [
  "New Project",
  "Existing Project Enhancement",
  "Bug Fixes & Maintenance",
  "Complete Redesign",
  "Migration/Upgrade",
  "Consultation Only",
]

// Function to detect country from IP address using Next.js API route (server-side)
async function detectCountryFromIP(): Promise<string> {
  // Only run on client-side
  if (typeof window === 'undefined') {
    return 'Other'
  }
  
  try {
    // Call our Next.js API route which handles IP detection server-side (no CORS issues)
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout
    
    const response = await fetch('/api/detect-country', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      signal: controller.signal,
    }).catch(() => null) // Catch network errors
    
    clearTimeout(timeoutId)
    
    if (response && response.ok) {
      try {
        const data = await response.json()
        if (data.country) {
          return data.country
        }
      } catch {
        // JSON parse error - ignore
      }
    }
  } catch {
    // API call failed - return Other
  }
  
  return 'Other'
}

const SPAM_KEYWORDS = [
  "loan",
  "sex",
  "porn",
  "viagra",
  "casino",
  "bet",
  "bitcoin",
  "crypto",
  "escort",
  "nude",
  "xxx",
  "win",
  "prize",
  "money",
  "credit",
  "debt",
  "gamble",
  "pills",
  "cialis",
  "payday",
  "hack",
  "hacker",
  "password",
  "bank",
  "investment",
  "forex",
  "mlm",
  "scam",
  "fraud",
  "fake",
  "replica",
  "counterfeit",
  "pharmacy",
  "dating",
  "adult",
  "escort",
  "escort service",
  "escort girl",
  "escort agency",
  "escort girls",
  "escort agencies",
  "escort services",
  "escort directory",
  "escort listings",
  "escort reviews",
  "escort ads",
  "escort classified",
  "escort classifieds",
  "escort guide",
  "escort guides",
  "escort magazine",
  "escort magazines",
  "escort news",
  "escort portal",
  "escort portals",
  "escort site",
  "escort sites",
  "escort website",
  "escort websites",
  "escort world",
  "escorts",
  "escorts agency",
  "escorts agencies",
  "escorts classified",
  "escorts classifieds",
  "escorts directory",
  "escorts guide",
  "escorts magazine",
  "escorts magazines",
  "escorts news",
  "escorts portal",
  "escorts portals",
  "escorts site",
  "escorts sites",
  "escorts website",
  "escorts websites",
  "escorts world",
  "escortservice",
  "escortservices",
  "escortweb",
  "escortwebs",
  "escortwebsite",
  "escortwebsites",
  "escortworld",
  "escortworlds",
  "escortzone",
  "escortzones",
  "escortzone.com",
  "escortzone.net",
  "escortzone.org",
  "escortzone.info",
  "escortzone.biz",
  "escortzone.co.uk",
  "escortzone.de",
  "escortzone.fr",
  "escortzone.it",
  "escortzone.nl",
  "escortzone.pl",
  "escortzone.ru",
  "escortzone.se",
  "escortzone.us",
  "escortzone.xxx",
  "escortzone.xyz",
  "escortzone1.com",
  "escortzone2.com",
  "escortzone3.com",
  "escortzone4.com",
  "escortzone5.com",
  "escortzone6.com",
  "escortzone7.com",
  "escortzone8.com",
  "escortzone9.com",
  "escortzone10.com",
  "escortzone11.com",
  "escortzone12.com",
  "escortzone13.com",
  "escortzone14.com",
  "escortzone15.com",
  "escortzone16.com",
  "escortzone17.com",
  "escortzone18.com",
  "escortzone19.com",
  "escortzone20.com",
  "escortzone21.com",
  "escortzone22.com",
  "escortzone23.com",
  "escortzone24.com",
  "escortzone25.com",
  "escortzone26.com",
  "escortzone27.com",
  "escortzone28.com",
  "escortzone29.com",
  "escortzone30.com",
  "escortzone31.com",
  "escortzone32.com",
  "escortzone33.com",
  "escortzone34.com",
  "escortzone35.com",
  "escortzone36.com",
  "escortzone37.com",
  "escortzone38.com",
  "escortzone39.com",
  "escortzone40.com",
  "escortzone41.com",
  "escortzone42.com",
  "escortzone43.com",
  "escortzone44.com",
  "escortzone45.com",
  "escortzone46.com",
  "escortzone47.com",
  "escortzone48.com",
  "escortzone49.com",
  "escortzone50.com",
  "escortzone51.com",
  "escortzone52.com",
  "escortzone53.com",
  "escortzone54.com",
  "escortzone55.com",
  "escortzone56.com",
  "escortzone57.com",
  "escortzone58.com",
  "escortzone59.com",
  "escortzone60.com",
  "escortzone61.com",
  "escortzone62.com",
  "escortzone63.com",
  "escortzone64.com",
  "escortzone65.com",
  "escortzone66.com",
  "escortzone67.com",
  "escortzone68.com",
  "escortzone69.com",
  "escortzone70.com",
  "escortzone71.com",
  "escortzone72.com",
  "escortzone73.com",
  "escortzone74.com",
  "escortzone75.com",
  "escortzone76.com",
  "escortzone77.com",
  "escortzone78.com",
  "escortzone79.com",
  "escortzone80.com",
  "escortzone81.com",
  "escortzone82.com",
  "escortzone83.com",
  "escortzone84.com",
  "escortzone85.com",
  "escortzone86.com",
  "escortzone87.com",
  "escortzone88.com",
  "escortzone89.com",
  "escortzone90.com",
  "escortzone91.com",
  "escortzone92.com",
  "escortzone93.com",
  "escortzone94.com",
  "escortzone95.com",
  "escortzone96.com",
  "escortzone97.com",
  "escortzone98.com",
  "escortzone99.com",
  "escortzone100.com",
]

export default function Contact2Page() {
  const [form, setForm] = useState<QuoteFormState>(initialState)
  const [errors, setErrors] = useState<any>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const [lastSubmit, setLastSubmit] = useState(0)
  const [currentStep, setCurrentStep] = useState(1)
  const [stepErrors, setStepErrors] = useState<any>({})
  const [timelineDropdownOpen, setTimelineDropdownOpen] = useState(false)
  const [projectTypeDropdownOpen, setProjectTypeDropdownOpen] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  // Function to scroll form to center of viewport
  const scrollToFormCenter = () => {
    if (formRef.current) {
      const formElement = formRef.current
      const formRect = formElement.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const formHeight = formRect.height
      
      // Calculate the position to center the form
      const scrollTop = window.pageYOffset + formRect.top - (viewportHeight / 2) + (formHeight / 2)
      
      // Ensure we don't scroll to negative values
      const finalScrollTop = Math.max(0, scrollTop)
      
      // Smooth scroll to the calculated position
      window.scrollTo({
        top: finalScrollTop,
        behavior: 'smooth'
      })
    }
  }

  // Effect to detect country from IP address on component mount (client-side only)
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return
    
    let isMounted = true
    let timeoutId: NodeJS.Timeout | null = null
    
    const detectCountry = async () => {
      // Wrap in try-catch to prevent any errors from crashing the app
      try {
        // Add a small delay to ensure component is fully mounted
        await new Promise(resolve => setTimeout(resolve, 100))
        
        if (!isMounted) return
        
        // Call the function - it will never throw, always returns a string
        const detectedCountry = await detectCountryFromIP()
        
        if (isMounted && detectedCountry && detectedCountry !== 'Other') {
          setForm((f) => {
            // Only update if country is not already set
            if (!f.country) {
              return { ...f, country: detectedCountry }
            }
            return f
          })
        }
      } catch (error: any) {
        // This should never happen since detectCountryFromIP never throws
        // But just in case, silently handle it
        if (process.env.NODE_ENV === 'development') {
          console.warn('Unexpected error in country detection:', error)
        }
      }
    }
    
    // Delay execution slightly to avoid blocking initial render
    timeoutId = setTimeout(() => {
      detectCountry()
    }, 500)
    
    return () => {
      isMounted = false
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, []) // Run only once on mount


  function validate() {
    const errs: any = {}
    if (!form.fullName.trim()) errs.fullName = "Your name is required"
    if (!form.email.trim()) errs.email = "Email is required"
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Invalid email"
    if (!form.description.trim()) errs.description = "Message is required"
    if (form.description.length < 10) errs.description = "Please provide at least 10 characters."
    if (form.description.length > 1500) errs.description = "Please keep your message under 1500 characters."
    if (SPAM_KEYWORDS.some((word) => form.description.toLowerCase().includes(word)))
      errs.description = "Your message contains blocked words."
    if (!form.consent) errs.consent = "You must consent to proceed"
    return errs
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setServerError("")
    if (honeypot) return // honeypot trap
    if (Date.now() - lastSubmit < 3000) return // debounce: 3s between submits
    setLastSubmit(Date.now())
    
    // Ensure country is detected from IP if not already set
    let finalForm = { ...form }
    if (!finalForm.country) {
      const detectedCountry = await detectCountryFromIP()
      finalForm.country = detectedCountry || "Other"
      // Update form state with detected country
      setForm(finalForm)
    }
    
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setLoading(true)
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalForm),
      })
      if (res.ok) {
        setSuccess(true)
        setForm({
          fullName: "",
          company: "",
          country: "",
          email: "",
          phone: "",
          website: "",
          description: "",
          consent: false,
        })
        // Scroll to center when success screen appears
        setTimeout(() => {
          scrollToFormCenter()
        }, 200) // Delay to allow success state to render
      } else {
        const data = await res.json()
        setServerError(data.error || "Something went wrong.")
      }
    } catch (err) {
      setServerError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Contact Us | Entalogics</title>
        <meta
          name="description"
          content="Contact Entalogics for your software development needs. Get in touch with our team."
        />
        <link rel="canonical" href="https://entalogics.com/contact2" />
      </Head>
      <Layout>
        <div className="min-h-screen relative overflow-hidden bg-background dark:bg-[#0a1225]">
          {/* Split Background - Diagonal split from top-left to bottom-right */}    
        

          {/* Main Content */}
          <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 md:pt-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Two Separate Cards Container */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative">
                  {/* LEFT SIDE - Form Card (Separate Container) */}
                  <div className="lg:col-span-2 relative">
                    {/* Extended Background with Shadow - Light Mode */}
                    <div className="absolute inset-0 bg-white rounded-lg -right-16 lg:-right-32 xl:-right-40 2xl:-right-48 dark:hidden shadow-2xl" style={{ zIndex: 0, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}></div>
                    {/* Extended Background with Shadow - Dark Mode */}
                    <div className="absolute inset-0 bg-gray-800 rounded-lg -right-16 lg:-right-32 xl:-right-40 2xl:-right-48 hidden dark:block shadow-2xl" style={{ zIndex: 0, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden" style={{ zIndex: 1 }}>
                      <div className="p-8 md:p-12" ref={formRef}>
                      
                      {success ? (
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                          <div className="text-center py-16">
                            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                              <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Thank You!</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg max-w-md mx-auto">
                              Your message has been received. We'll get back to you within 24 hours.
                            </p>
                            <Link 
                              href="/" 
                              className="inline-flex items-center px-8 py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                              <ArrowLeft className="w-5 h-5 mr-2" />
                              Return to Home
                            </Link>
                          </div>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                          <input
                            type="text"
                            style={{ display: "none" }}
                            tabIndex={-1}
                            autoComplete="off"
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                          />

                          {/* Form Heading */}
                          <div className="mb-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-3">
                              Contact us
                              <span className="text-green-500">✦</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
                              Let's turn your concept into a successful commercial product together!
                            </p>
                          </div>

                          {/* Simple Form - All Fields */}
                          <div className="space-y-6">
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div className="space-y-1">
                                    <label
                                      className="block text-sm font-medium text-green-600 dark:text-green-400"
                                      htmlFor="fullName"
                                    >
                                      Your name
                                    </label>
                                    <input
                                      type="text"
                                      id="fullName"
                                      className="w-full px-0 py-2 border-0 border-b border-gray-300 dark:border-gray-600 bg-transparent text-gray-500 dark:text-gray-400 placeholder-gray-400 dark:placeholder-gray-500 focus:border-teal-700 dark:focus:border-teal-500 focus:outline-none focus:text-gray-700 dark:focus:text-gray-200 transition-colors text-base"
                                      style={{ borderBottomWidth: '1px', backgroundColor: 'transparent' }}
                                      autoComplete="off"
                                      value={form.fullName}
                                      onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                                      placeholder="First and Last Name"
                                    />
                                    {errors.fullName && <span className="text-sm text-red-500 dark:text-red-400">{errors.fullName}</span>}
                                  </div>

                                  <div className="space-y-1">
                                    <label
                                      className="block text-sm font-medium text-gray-600 dark:text-gray-400"
                                      htmlFor="email"
                                    >
                                      Email Address
                                    </label>
                                    <input
                                      type="email"
                                      id="email"
                                      className="w-full px-0 py-2 border-0 border-b border-gray-300 dark:border-gray-600 bg-transparent text-gray-500 dark:text-gray-400 placeholder-gray-400 dark:placeholder-gray-500 focus:border-teal-700 dark:focus:border-teal-500 focus:outline-none focus:text-gray-700 dark:focus:text-gray-200 transition-colors text-base"
                                      style={{ borderBottomWidth: '1px', backgroundColor: 'transparent' }}
                                      autoComplete="off"
                                      value={form.email}
                                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                                      placeholder=""
                                    />
                                    {errors.email && <span className="text-sm text-red-500 dark:text-red-400">{errors.email}</span>}
                                  </div>

                                  <div className="space-y-1">
                                    <label
                                      className="block text-sm font-medium text-gray-600 dark:text-gray-400"
                                      htmlFor="phone"
                                    >
                                      Mobile Number
                                    </label>
                                    <input
                                      type="text"
                                      id="phone"
                                      className="w-full px-0 py-2 border-0 border-b border-gray-300 dark:border-gray-600 bg-transparent text-gray-500 dark:text-gray-400 placeholder-gray-400 dark:placeholder-gray-500 focus:border-teal-700 dark:focus:border-teal-500 focus:outline-none focus:text-gray-700 dark:focus:text-gray-200 transition-colors text-base"
                                      style={{ borderBottomWidth: '1px', backgroundColor: 'transparent' }}
                                      autoComplete="off"
                                      value={form.phone}
                                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                                      placeholder=""
                                    />
                                  </div>
                                  
                                  <div className="space-y-1">
                                    <label
                                      className="block text-sm font-medium text-gray-600 dark:text-gray-400"
                                      htmlFor="company"
                                    >
                                      Company Name
                                    </label>
                                    <input
                                      type="text"
                                      id="company"
                                      className="w-full px-0 py-2 border-0 border-b border-gray-300 dark:border-gray-600 bg-transparent text-gray-500 dark:text-gray-400 placeholder-gray-400 dark:placeholder-gray-500 focus:border-teal-700 dark:focus:border-teal-500 focus:outline-none focus:text-gray-700 dark:focus:text-gray-200 transition-colors text-base"
                                      style={{ borderBottomWidth: '1px', backgroundColor: 'transparent' }}
                                      autoComplete="off"
                                      value={form.company}
                                      onChange={(e) => {
                                        const companyValue = e.target.value
                                        setForm((f) => {
                                          return { ...f, company: companyValue }
                                        })
                                      }}
                                      placeholder=""
                                    />
                                  </div>

                                  <div className="space-y-1">
                                    <input
                                      type="url"
                                      id="website"
                                      className="w-full px-0 py-2 border-0 border-b border-gray-300 dark:border-gray-600 bg-transparent text-gray-500 dark:text-gray-400 placeholder-gray-400 dark:placeholder-gray-500 focus:border-teal-700 dark:focus:border-teal-500 focus:outline-none focus:text-gray-700 dark:focus:text-gray-200 transition-colors text-base"
                                      style={{ borderBottomWidth: '1px', backgroundColor: 'transparent' }}
                                      autoComplete="off"
                                      value={form.website}
                                      onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
                                      placeholder="Website URL"
                                    />
                                  </div>
                                </div>

                                {/* Message Field */}
                                <div className="space-y-1">
                                  <label
                                    className="block text-sm font-medium text-gray-600 dark:text-gray-400"
                                    htmlFor="description"
                                  >
                                    Write your message here...
                                  </label>
                                  <textarea
                                    id="description"
                                    rows={5}
                                    className="w-full px-0 py-2 border-0 border-b border-gray-300 dark:border-gray-600 bg-transparent text-gray-500 dark:text-gray-400 placeholder-gray-400 dark:placeholder-gray-500 focus:border-teal-700 dark:focus:border-teal-500 focus:outline-none focus:text-gray-700 dark:focus:text-gray-200 transition-colors resize-none text-base"
                                    style={{ borderBottomWidth: '1px', backgroundColor: 'transparent' }}
                                    value={form.description}
                                    onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                                    placeholder=""
                                    minLength={10}
                                    maxLength={1500}
                                  />
                                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                                    <span>{form.description.length}/1500 characters</span>
                                    <span>Minimum 10 characters required</span>
                                  </div>
                                  {errors.description && (
                                    <span className="text-sm text-red-500 dark:text-red-400">{errors.description}</span>
                                  )}
                                </div>

                                {/* Consent Checkbox */}
                                <div className="space-y-2">
                                  <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                      type="checkbox"
                                      checked={form.consent}
                                      onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                                      className="mt-1 w-4 h-4 text-teal-700 dark:text-teal-400 bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500 rounded focus:ring-teal-700 dark:focus:ring-teal-400 focus:ring-2"
                                    />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                      I consent to Pecode to store my personal information according to the{" "}
                                      <Link 
                                        href="/privacy-policy" 
                                        className="text-teal-700 dark:text-teal-400 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        Privacy Policy
                                      </Link>
                                    </span>
                                  </label>
                                  {errors.consent && (
                                    <span className="text-sm text-red-500 dark:text-red-400 block">{errors.consent}</span>
                                  )}
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center pt-4">
                                  <button
                                    type="submit"
                                    disabled={loading}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                  >
                                    {loading ? (
                                      <>
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span className="hidden sm:inline">Sending Message...</span>
                                        <span className="sm:hidden">Sending...</span>
                                      </>
                                    ) : (
                                      <>
                                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                                        <span className="hidden sm:inline">Send Message</span>
                                        <span className="sm:hidden">Send</span>
                                      </>
                                    )}
                                  </button>
                                </div>

                                {serverError && (
                                  <div className="text-center">
                                    <p className="text-sm text-red-500 dark:text-red-400">{serverError}</p>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          </div>
                        </form>
                      )}
                      </div>
                    </div>
                  </div>





                  {/* RIGHT SIDE - Contact Info Card (Separate Container) */}
                  <div className="lg:col-span-1 flex items-center relative" style={{ zIndex: 2 }}>
                    <div className="bg-teal-700 p-8 md:p-12 text-white flex flex-col rounded-lg shadow-2xl w-full" style={{ backgroundColor: '#0F766E', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}>
                      <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact Info</h2>
                      
                      <div className="space-y-6">
                        {/* Address */}
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 flex-shrink-0 mt-1 flex items-center justify-center">
                            <MapPin className="w-5 h-5" strokeWidth={2} style={{ stroke: 'white', fill: 'none' }} />
                          </div>
                          <div>
                            <p className="text-white leading-relaxed text-sm md:text-base">
                              2912 Meadowbrook Road<br />
                              Los Angeles, CA 90017
                            </p>
                          </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 flex-shrink-0 mt-1 flex items-center justify-center">
                            <Mail className="w-5 h-5" strokeWidth={2} style={{ stroke: 'white', fill: 'none' }} />
                          </div>
                          <div>
                            <a 
                              href="mailto:info@entalogics.com" 
                              className="text-white hover:text-white/80 transition-colors text-sm md:text-base"
                            >
                              info@entalogics.com
                            </a>
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 flex-shrink-0 mt-1 flex items-center justify-center">
                            <Phone className="w-5 h-5" strokeWidth={2} style={{ stroke: 'white', fill: 'none' }} />
                          </div>
                          <div>
                            <a 
                              href="tel:+923207385471" 
                              className="text-white hover:text-white/80 transition-colors text-sm md:text-base"
                            >
                              +92 320 7385471
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Social Media Icons */}
                      <div className="flex items-center gap-3 mt-auto pt-8 border-t border-white/20">
                        <a
                          href="https://m.facebook.com/EntaLogics/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-all"
                          aria-label="Facebook"
                          style={{ borderColor: 'white' }}
                        >
                          <Facebook className="w-4 h-4" strokeWidth={2} style={{ stroke: 'white', fill: 'white' }} />
                        </a>
                        <a
                          href="https://x.com/EntaLogics"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-all"
                          aria-label="Twitter"
                          style={{ borderColor: 'white' }}
                        >
                          <Twitter className="w-4 h-4" strokeWidth={2} style={{ stroke: 'white', fill: 'white' }} />
                        </a>
                        <a
                          href="https://www.instagram.com/entalogics"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-all"
                          aria-label="Instagram"
                          style={{ borderColor: 'white' }}
                        >
                          <Instagram className="w-4 h-4" strokeWidth={2} style={{ stroke: 'white', fill: 'white' }} />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/enta-logics"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-all"
                          aria-label="LinkedIn"
                          style={{ borderColor: 'white' }}
                        >
                          <Linkedin className="w-4 h-4" strokeWidth={2} style={{ stroke: 'white', fill: 'white' }} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
