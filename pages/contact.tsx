"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Layout from "../src/components/Layout"
import Link from "next/link"
import {
  ArrowLeft,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle,
  Users,
  Zap,
  Globe,
  MessageCircle,
  Calendar,
  Star,
  ChevronDown,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Head from "next/head"
import Heading from "../src/components/ui/Heading"
import Paragraph from "../src/components/ui/Paragraph"
import FAQ from "../src/components/FAQ"
import TrustedCompanies from "../src/components/TrustedCompanies"

interface QuoteFormState {
  firstName: string
  lastName: string
  company: string
  country: string
  email: string
  phone: string
  website: string
  description: string
  lookingFor: string[]
  budget: string
  budgetCustom?: string
  timeline: string
  projectType: string
}

const initialState: QuoteFormState = {
  firstName: "",
  lastName: "",
  company: "",
  country: "",
  email: "",
  phone: "",
  website: "",
  description: "",
  lookingFor: [],
  budget: "",
  budgetCustom: "",
  timeline: "",
  projectType: "",
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

export default function QuotePage() {
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

  useEffect(() => {
    const hasDismissed = sessionStorage.getItem("quotePopupDismissed")
    if (!hasDismissed) {
      const timer = setTimeout(() => {
        // setShowHelpPopup(true); // This line is removed
      }, 1500) // 1.5-second delay before showing
      return () => clearTimeout(timer)
    }
  }, [])

  // Effect to handle scrolling when step changes
  useEffect(() => {
    if (currentStep > 1) {
      // Only scroll if we're not on the first step (to avoid scrolling on initial load)
      const timer = setTimeout(() => {
        scrollToFormCenter()
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [currentStep])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.dropdown-container')) {
        setTimelineDropdownOpen(false)
        setProjectTypeDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  function validate() {
    const errs: any = {}
    if (!form.firstName.trim()) errs.firstName = "First Name is required"
    if (!form.lastName.trim()) errs.lastName = "Last Name is required"
    if (!form.email.trim()) errs.email = "Email is required"
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Invalid email"
    if (!form.country.trim()) errs.country = "Country is required"
    if (!form.description.trim()) errs.description = "Project description is required"
    if (form.description.length < 50) errs.description = "Please provide at least 50 characters."
    if (form.description.length > 1500) errs.description = "Please keep your message under 1500 characters."
    if (SPAM_KEYWORDS.some((word) => form.description.toLowerCase().includes(word)))
      errs.description = "Your message contains blocked words."
    if (!form.lookingFor.length) errs.lookingFor = "Please select at least one option"
    if (!form.budget) errs.budget = "Budget is required"
    if (form.budget === "Custom budget" && !form.budgetCustom?.trim())
      errs.budgetCustom = "Please enter a custom amount"
    if (!form.timeline || form.timeline === "") {
      errs.timeline = "Timeline is required"
    }
    if (!form.projectType || form.projectType === "") {
      errs.projectType = "Project type is required"
    }
    return errs
  }

  function validateStep(step: number) {
    const errs: any = {}
    
    if (step === 1) {
      if (!form.firstName.trim()) errs.firstName = "First Name is required"
      if (!form.lastName.trim()) errs.lastName = "Last Name is required"
      if (!form.email.trim()) errs.email = "Email is required"
      else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Invalid email"
      if (!form.country.trim()) errs.country = "Country is required"
    }
    
    if (step === 2) {
      if (!form.description.trim()) errs.description = "Project description is required"
      else if (form.description.length < 50) errs.description = "Please provide at least 50 characters."
      else if (form.description.length > 1500) errs.description = "Please keep your message under 1500 characters."
      else if (SPAM_KEYWORDS.some((word) => form.description.toLowerCase().includes(word)))
        errs.description = "Your message contains blocked words."
      if (!form.lookingFor.length) errs.lookingFor = "Please select at least one option"
    }
    
    if (step === 3) {
      if (!form.budget) errs.budget = "Budget is required"
      if (form.budget === "Custom budget" && !form.budgetCustom?.trim())
        errs.budgetCustom = "Please enter a custom amount"
      if (!form.timeline) errs.timeline = "Timeline is required"
      if (!form.projectType) errs.projectType = "Project type is required"
    }
    
    return errs
  }

  function nextStep() {
    const stepErrs = validateStep(currentStep)
    setStepErrors(stepErrs)
    
    if (Object.keys(stepErrs).length === 0) {
      setCurrentStep(prev => Math.min(prev + 1, 3))
      // Scroll to center after step change
      setTimeout(() => {
        scrollToFormCenter()
      }, 300) // Increased delay to allow state update and DOM rendering
    }
  }

  function prevStep() {
    setCurrentStep(prev => Math.max(prev - 1, 1))
    setStepErrors({})
    // Scroll to center after step change
    setTimeout(() => {
      scrollToFormCenter()
    }, 300) // Increased delay to allow state update and DOM rendering
  }

  function handleCheckbox(option: string) {
    setForm((f) => ({
      ...f,
      lookingFor: f.lookingFor.includes(option)
        ? f.lookingFor.filter((o: string) => o !== option)
        : [...f.lookingFor, option],
    }))
  }

  function handleBudget(option: string) {
    setForm((f) => ({ ...f, budget: option }))
  }

  function handleTimelineSelect(option: string) {
    setForm((f) => ({ ...f, timeline: option }))
    setTimelineDropdownOpen(false)
  }

  function handleProjectTypeSelect(option: string) {
    setForm((f) => ({ ...f, projectType: option }))
    setProjectTypeDropdownOpen(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setServerError("")
    if (honeypot) return // honeypot trap
    if (Date.now() - lastSubmit < 3000) return // debounce: 3s between submits
    setLastSubmit(Date.now())
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setLoading(true)
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSuccess(true)
        setForm({
          firstName: "",
          lastName: "",
          company: "",
          country: "",
          email: "",
          phone: "",
          website: "",
          description: "",
          lookingFor: [],
          budget: "",
          budgetCustom: "",
          timeline: "",
          projectType: "",
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
        <title>Contact Us | Get Free Quote | Entalogics</title>
        <meta
          name="description"
          content="Contact Entalogics for your software development needs. Get free quotes for AI SaaS platforms, web apps, mobile apps, and custom Chromium browser development. Fast response guaranteed."
        />
        <meta
          name="keywords"
          content="contact Entalogics, software development quote, AI development contact, web development quote, mobile app development, Chromium browser development, free consultation, development services contact"
        />
        <meta name="author" content="Entalogics" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us | Get Free Quote | Entalogics" />
        <meta
          property="og:description"
          content="Contact Entalogics for your software development needs. Get free quotes for AI SaaS platforms, web apps, and custom Chromium browser development."
        />
        <meta property="og:image" content="https://entalogics.com/assets/og-image.jpg" />
        <meta property="og:url" content="https://entalogics.com/contact" />
        <meta property="og:site_name" content="Entalogics" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Get Free Quote | Entalogics" />
        <meta
          name="twitter:description"
          content="Contact Entalogics for your software development needs. Get free quotes for AI SaaS platforms and custom development."
        />
        <meta name="twitter:image" content="https://entalogics.com/assets/og-image.jpg" />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://entalogics.com/contact" />
        <meta name="theme-color" content="#3b82f6" />
        
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        <div className="bg-background dark:bg-[#0a1225] min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-background dark:bg-[#0a1225] py-8 md:py-12 lg:py-16">
          <div className="container mx-auto px-2 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-800">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Get in Touch
                </div>
                
                <Heading level={1} className="text-center mb-6">
                      Contact{" "}
                      <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                        Us
                      </span>
                </Heading>
                
                <Paragraph size="lg" className="text-center max-w-3xl mx-auto">
                      Ready to bring your vision to life? Our team of experienced developers and designers is here to
                      help you create exceptional digital solutions.
                </Paragraph>

                </div>
              </motion.div>
            </div>
          </div>
        </section>

          {/* Contact Form Section */}
          <section className="pt-2 pb-12 bg-muted/30 dark:bg-[#0a1225]">
            <div className="container mx-auto px-1 md:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div ref={formRef} className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-2xl rounded-2xl shadow-lg border border-gray-200 dark:border-white/10 p-4 md:p-12">
                {success ? (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                    <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 backdrop-blur-xl border border-green-200 dark:border-green-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Thank You!</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg max-w-md mx-auto">
                      Your message has been received. We'll get back to you within 24 hours.
                    </p>
                    <Link 
                      href="/" 
                      className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Return to Home
                    </Link>
                    </div>
                  </motion.div>
                ) : (
                  <div>
                    <div className="text-center mb-8">
                      <Heading level={3} className="mb-4">
                            Send us a{" "}
                            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                              Message
                            </span>
                      </Heading>
                      <Paragraph size="sm" className="max-w-2xl mx-auto">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </Paragraph>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                           <input
                             type="text"
                             style={{ display: "none" }}
                             tabIndex={-1}
                             autoComplete="off"
                             value={honeypot}
                             onChange={(e) => setHoneypot(e.target.value)}
                           />

                           {/* Stepper Navigation */}
                           <div className="mb-8 px-6 sm:px-0">
                             <div className="flex items-center justify-center space-x-2 sm:space-x-4">
                               {[1, 2, 3].map((step) => {
                                 const hasStepErrors = step === 1 && (errors.firstName || errors.lastName || errors.email || errors.country) ||
                                                      step === 2 && (errors.description || errors.lookingFor) ||
                                                      step === 3 && (errors.budget || errors.timeline || errors.projectType || errors.budgetCustom)
                                 return (
                                   <div key={step} className="flex items-center">
                                     <div
                                       className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                         hasStepErrors
                                           ? "bg-red-500 text-white shadow-lg"
                                           : currentStep >= step
                                           ? "bg-blue-600 text-white shadow-lg"
                                           : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                                       }`}
                                     >
                                       {hasStepErrors ? "!" : step}
                                     </div>
                                     {step < 3 && (
                                       <div
                                         className={`w-12 sm:w-16 h-1 mx-1 sm:mx-2 rounded-full transition-all duration-300 ${
                                           currentStep > step
                                             ? "bg-blue-600"
                                             : "bg-gray-200 dark:bg-gray-700"
                                         }`}
                                       />
                                     )}
                                   </div>
                                 )
                               })}
                             </div>
                             <div className="text-center mt-4">
                               <p className="text-sm text-gray-600 dark:text-gray-400">
                                 Step {currentStep} of 3
                               </p>
                               {Object.keys(errors).length > 0 && (
                                 <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                                   Please complete all required fields to submit
                                 </p>
                               )}
                             </div>
                           </div>

                           {/* Step 1: Personal Information */}
                           {currentStep === 1 && (
                             <motion.div
                               initial={{ opacity: 0, x: 20 }}
                               animate={{ opacity: 1, x: 0 }}
                               exit={{ opacity: 0, x: -20 }}
                               transition={{ duration: 0.3 }}
                             >
                               <div className="space-y-6">
                               <div className="text-center mb-6">
                                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                   Personal Information
                                 </h3>
                                 <p className="text-gray-600 dark:text-gray-400">
                                   Let's start with your basic details
                                 </p>
                               </div>

                               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                 <div className="space-y-2">
                                   <label
                                     className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                                     htmlFor="firstName"
                                   >
                             First Name *
                          </label>
                        <input
                          type="text"
                           id="firstName"
                                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-base shadow-sm hover:shadow-md focus:shadow-lg"
                           value={form.firstName}
                                      onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                             placeholder="Enter your first name"
                         />
                                    {stepErrors.firstName && <span className="text-sm text-red-500">{stepErrors.firstName}</span>}
                      </div>
                        
                                   <div className="space-y-2">
                                     <label
                                       className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                                       htmlFor="lastName"
                                     >
                             Last Name *
                           </label>
                         <input
                           type="text"
                           id="lastName"
                                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-base shadow-sm hover:shadow-md focus:shadow-lg"
                           value={form.lastName}
                                      onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
                             placeholder="Enter your last name"
                         />
                                    {stepErrors.lastName && <span className="text-sm text-red-500">{stepErrors.lastName}</span>}
                       </div>

                                   <div className="space-y-2">
                                     <label
                                       className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                                       htmlFor="email"
                                     >
                            Email Address *
                          </label>
                        <input
                          type="email"
                          id="email"
                                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-base shadow-sm hover:shadow-md focus:shadow-lg"
                          value={form.email}
                                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                            placeholder="Enter your email address"
                        />
                                    {stepErrors.email && <span className="text-sm text-red-500">{stepErrors.email}</span>}
                      </div>

                                   <div className="space-y-2">
                                     <label
                                       className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                                       htmlFor="phone"
                                     >
                            Phone Number
                          </label>
                        <input
                          type="text"
                          id="phone"
                                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-base shadow-sm hover:shadow-md focus:shadow-lg"
                          value={form.phone}
                                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                            placeholder="Enter your phone number (optional)"
                          />
                        </div>
                        
                                   <div className="space-y-2">
                                     <label
                                       className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                                       htmlFor="company"
                                     >
                             Company Name
                           </label>
                         <input
                           type="text"
                           id="company"
                                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-base shadow-sm hover:shadow-md focus:shadow-lg"
                           value={form.company}
                                      onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                             placeholder="Enter your company name (optional)"
                           />
                         </div>
                         
                                   <div className="space-y-2">
                                     <label
                                       className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                                       htmlFor="country"
                                     >
                            Country *
                          </label>
                          <select
                            id="country"
                                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-base shadow-sm hover:shadow-md focus:shadow-lg"
                            value={form.country}
                                      onChange={(e) => setForm((f) => ({ ...f, country: e.target.value }))}
                                     >
                                       {countries.map((c, i) => (
                                         <option key={i} value={c}>
                                           {c || "Select your country"}
                                         </option>
                                       ))}
                          </select>
                                    {stepErrors.country && <span className="text-sm text-red-500">{stepErrors.country}</span>}
                      </div>

                                   <div className="space-y-2 md:col-span-2">
                                     <label
                                       className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                                       htmlFor="website"
                                     >
                             Website URL
                        </label>
                         <input
                           type="url"
                           id="website"
                                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-base shadow-sm hover:shadow-md focus:shadow-lg"
                           value={form.website}
                                      onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
                             placeholder="https://yourwebsite.com (optional)"
                           />
                        </div>
                    </div>
                               </div>
                             </motion.div>
                           )}

                           {/* Step 2: Project Details */}
                           {currentStep === 2 && (
                             <motion.div
                               initial={{ opacity: 0, x: 20 }}
                               animate={{ opacity: 1, x: 0 }}
                               exit={{ opacity: 0, x: -20 }}
                               transition={{ duration: 0.3 }}
                             >
                      <div className="space-y-6">
                               <div className="text-center mb-6">
                                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                   Project Details
                                 </h3>
                                 <p className="text-gray-600 dark:text-gray-400">
                                   Tell us about your project and requirements
                                 </p>
                    </div>

                      <div className="space-y-6">
                                 <div>
                                   <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                          Services Required *
                        </label>
                                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                     {lookingForGroups.map((group) => (
                                       <div key={group.label} className="space-y-3">
                              <div className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">
                                           {group.label === "Development Services" && (
                                             <Zap className="w-4 h-4 text-blue-500" />
                                           )}
                                           {group.label === "AI & Automation" && (
                                             <Globe className="w-4 h-4 text-purple-500" />
                                           )}
                                           {group.label === "Team & Business Solutions" && (
                                             <Users className="w-4 h-4 text-green-500" />
                                           )}
                              {group.label}
                            </div>
                                         <div className="space-y-2">
                                           {group.options.map((option) => (
                                             <label
                                               key={option}
                                               className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700"
                                             >
                                  <input
                                    type="checkbox"
                                    checked={form.lookingFor.includes(option)}
                                    onChange={() => handleCheckbox(option)}
                                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                  />
                                    <span className="flex-1">{option}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                                   {stepErrors.lookingFor && <span className="text-sm text-red-500">{stepErrors.lookingFor}</span>}
                    </div>

                                 <div className="space-y-2">
                                   <label
                                     className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                                     htmlFor="description"
                                   >
                                     Project Description *
                        </label>
                                   <textarea
                                     id="description"
                                     rows={4}
                                     className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none text-base shadow-sm hover:shadow-md focus:shadow-lg"
                                     value={form.description}
                                     onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                                     placeholder="Please describe your project, goals, and specific requirements..."
                                     minLength={50}
                                     maxLength={1500}
                                   />
                                   <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                                     <span>{form.description.length}/1500 characters</span>
                                     <span>Minimum 50 characters required</span>
                                   </div>
                                   {stepErrors.description && (
                                     <span className="text-sm text-red-500">{stepErrors.description}</span>
                                   )}
                                 </div>
                               </div>
                               </div>
                             </motion.div>
                           )}

                           {/* Step 3: Budget & Submit */}
                           {currentStep === 3 && (
                             <motion.div
                               initial={{ opacity: 0, x: 20 }}
                               animate={{ opacity: 1, x: 0 }}
                               exit={{ opacity: 0, x: -20 }}
                               transition={{ duration: 0.3 }}
                             >
                      <div className="space-y-6">
                               <div className="text-center mb-6">
                                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                   Project Details & Budget
                                 </h3>
                                 <p className="text-gray-600 dark:text-gray-400">
                                   Final details to complete your project request
                                 </p>
                               </div>

                               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                                 <div className="space-y-2">
                                   <label
                                     className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                                     htmlFor="timeline"
                                   >
                                     Project Timeline *
                        </label>
                                   <div className="relative dropdown-container">
                                     <button
                                       type="button"
                                       onClick={() => setTimelineDropdownOpen(!timelineDropdownOpen)}
                                       className={`w-full px-4 pr-10 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-base shadow-sm hover:shadow-md focus:shadow-lg text-left flex items-center justify-between ${
                                         timelineDropdownOpen ? 'rounded-b-none border-b-0 focus:border-b-0' : ''
                                       }`}
                                     >
                                       <span className={form.timeline ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}>
                                         {form.timeline || 'Select timeline'}
                                       </span>
                                       <ChevronDown 
                                         className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
                                           timelineDropdownOpen ? 'rotate-180' : ''
                                         }`} 
                                       />
                                     </button>
                                     
                                     <AnimatePresence>
                                       {timelineDropdownOpen && (
                                         <div className="absolute top-full left-0 right-0 z-50 ring-2 ring-blue-500/20 rounded-b-xl">
                                           <motion.div
                                             initial={{ opacity: 0, height: 0 }}
                                             animate={{ opacity: 1, height: 'auto' }}
                                             exit={{ opacity: 0, height: 0 }}
                                             transition={{ duration: 0.2 }}
                                             style={{
                                               backgroundColor: 'white',
                                               border: '1px solid #3b82f6',
                                               borderTop: 'none',
                                               borderRadius: '0 0 0.75rem 0.75rem',
                                               boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                               overflow: 'hidden'
                                             }}
                                           >
                                     {timelineOptions.map((option, i) => (
                                             <button
                                               key={i}
                                               type="button"
                                               onClick={() => handleTimelineSelect(option)}
                                               className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 ${
                                                 form.timeline === option ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'
                                               }`}
                                             >
                                         {option}
                                             </button>
                                           ))}
                                           </motion.div>
                                     </div>
                                       )}
                                     </AnimatePresence>
                                   </div>
                                   {stepErrors.timeline && <span className="text-sm text-red-500">{stepErrors.timeline}</span>}
                                 </div>

                                 <div className="space-y-2">
                                   <label
                                     className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                                     htmlFor="projectType"
                                   >
                                     Project Type *
                                   </label>
                                   <div className="relative dropdown-container">
                                     <button
                                       type="button"
                                       onClick={() => setProjectTypeDropdownOpen(!projectTypeDropdownOpen)}
                                       className={`w-full px-4 pr-10 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-base shadow-sm hover:shadow-md focus:shadow-lg text-left flex items-center justify-between ${
                                         projectTypeDropdownOpen ? 'rounded-b-none border-b-0 focus:border-b-0' : ''
                                       }`}
                                     >
                                       <span className={form.projectType ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}>
                                         {form.projectType || 'Select project type'}
                                       </span>
                                       <ChevronDown 
                                         className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
                                           projectTypeDropdownOpen ? 'rotate-180' : ''
                                         }`} 
                                       />
                                     </button>
                                     
                                     <AnimatePresence>
                                       {projectTypeDropdownOpen && (
                                         <div className="absolute top-full left-0 right-0 z-50 ring-2 ring-blue-500/20 rounded-b-xl">
                                           <motion.div
                                             initial={{ opacity: 0, height: 0 }}
                                             animate={{ opacity: 1, height: 'auto' }}
                                             exit={{ opacity: 0, height: 0 }}
                                             transition={{ duration: 0.2 }}
                                             style={{
                                               backgroundColor: 'white',
                                               border: '1px solid #3b82f6',
                                               borderTop: 'none',
                                               borderRadius: '0 0 0.75rem 0.75rem',
                                               boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                               overflow: 'hidden'
                                             }}
                                           >
                                       {projectTypeOptions.map((option, i) => (
                                             <button
                                               key={i}
                                               type="button"
                                               onClick={() => handleProjectTypeSelect(option)}
                                               className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 ${
                                                 form.projectType === option ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'
                                               }`}
                                             >
                                           {option}
                                             </button>
                                           ))}
                                           </motion.div>
                                     </div>
                                       )}
                                     </AnimatePresence>
                                   </div>
                                   {stepErrors.projectType && <span className="text-sm text-red-500">{stepErrors.projectType}</span>}
                                 </div>
                               </div>

                               <div className="text-center mb-4">
                                 <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                   Project Budget
                                 </h4>
                                 <p className="text-gray-600 dark:text-gray-400 text-sm">
                                   Help us understand your budget range
                                 </p>
                               </div>

                               <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                   {budgetOptions.map((option) => (
                                     <label
                                       key={option}
                                       className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 hover:shadow-md ${
                                         option === "Message us to discuss"
                                           ? "border-green-200 dark:border-green-700 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 bg-green-50/50 dark:bg-green-900/10"
                                           : "border-gray-200 dark:border-gray-600 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                       }`}
                                     >
                            <input
                              type="radio"
                              name="budget"
                              value={option}
                              checked={form.budget === option}
                              onChange={() => handleBudget(option)}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                                       <span
                                         className={`text-sm font-medium ${
                                           option === "Message us to discuss"
                                             ? "text-green-700 dark:text-green-300"
                                             : "text-gray-700 dark:text-gray-300"
                                         }`}
                                       >
                            {option}
                              </span>
                                       {option === "Custom budget" && form.budget === "Custom budget" && (
                              <input
                                type="text"
                                  className="ml-auto px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 w-32"
                                placeholder="Enter amount"
                                           value={form.budgetCustom || ""}
                                           onChange={(e) => setForm((f) => ({ ...f, budgetCustom: e.target.value }))}
                              />
                            )}
                                       {option === "Message us to discuss" && (
                                <MessageCircle className="w-4 h-4 text-green-600 dark:text-green-400 ml-auto" />
                              )}
                          </label>
                        ))}
                        </div>
                                 {stepErrors.budget && <span className="text-sm text-red-500">{stepErrors.budget}</span>}
                                 {form.budget === "Custom budget" && stepErrors.budgetCustom && (
                                   <span className="text-sm text-red-500">{stepErrors.budgetCustom}</span>
                                 )}

                                 <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                                     <strong>Not sure about your budget?</strong> Select "Message us to discuss" and we'll
                                     help you determine the right investment for your project.
                          </p>
                        </div>
                      </div>
                               </div>
                             </motion.div>
                           )}

                      {serverError && (
                        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                          <p className="text-sm text-red-600 dark:text-red-400">{serverError}</p>
                    </div>
                      )}

                      {/* Show validation errors for required fields */}
                      {Object.keys(errors).length > 0 && (
                        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                          <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">
                            Please complete all required fields:
                          </p>
                          <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                            {Object.entries(errors).map(([field, error]) => (
                              <li key={field}>• {String(error)}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                           {/* Navigation Buttons */}
                           <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">
                             <button
                               type="button"
                               onClick={prevStep}
                               disabled={currentStep === 1}
                               className={`w-full sm:w-auto px-6 sm:px-16 py-3 sm:py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                                 currentStep === 1
                                   ? "bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed"
                                   : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 shadow-sm hover:shadow-md"
                               }`}
                             >
                               Previous
                             </button>

                             {currentStep < 3 ? (
                               <button
                                 type="button"
                                 onClick={nextStep}
                                 className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                               >
                                 Next Step
                                 <ArrowLeft className="w-4 h-4 rotate-180" />
                               </button>
                             ) : (
                               <div className="w-full sm:w-auto">
                               <motion.div
                                 whileHover={{ scale: 1.02 }}
                                 whileTap={{ scale: 0.98 }}
                               >
                                 <button
                                   type="submit"
                                   disabled={loading}
                                   className="w-full px-6 sm:px-10 py-3 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
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
                               </motion.div>
                               </div>
                             )}
                           </div>
                  </form>
                  </div>
                )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-12 md:py-20 bg-background dark:bg-[#0a1225]">
           <div className="container mx-auto px-2 md:px-8">
                 <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-16">
                <Heading level={2} className="mb-4">
                      Get in{" "}
                      <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                        Touch
                      </span>
                </Heading>
                <Paragraph size="md" className="max-w-2xl mx-auto">
                  Choose your preferred way to contact us
                </Paragraph>
                </div>
              </motion.div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-6 lg:gap-8">
                {[
                  {
                    icon: Mail,
                       title: "Email Us",
                       description: "Send us a message anytime",
                       contact: "entalogics@gmail.com",
                       color: "blue",
                       href: "mailto:entalogics@gmail.com",
                       bgGradient: "from-blue-50/50 to-cyan-50/30 dark:from-blue-900/20 dark:to-cyan-900/10",
                       hoverGradient: "from-blue-500/5 to-cyan-500/5"
                  },
                  {
                    icon: Calendar,
                       title: "Schedule Call",
                       description: "Book a free consultation",
                       contact: "Book Now",
                       color: "purple",
                       href: "#",
                       calLink: true,
                       bgGradient: "from-purple-50/50 to-pink-50/30 dark:from-purple-900/20 dark:to-pink-900/10",
                       hoverGradient: "from-purple-500/5 to-pink-500/5"
                  },
                  {
                    icon: MessageCircle,
                       title: "WhatsApp",
                       description: "Get instant support",
                       contact: "+92 320 7385471",
                       color: "green",
                       href: "https://wa.me/923207385471",
                       bgGradient: "from-green-50/50 to-emerald-50/30 dark:from-green-900/20 dark:to-emerald-900/10",
                       hoverGradient: "from-green-500/5 to-emerald-500/5"
                     },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                       whileHover={{ y: -8, scale: 1.03 }}
                  >
                       <div className="group h-full">
                    {item.calLink ? (
                      <button
                        data-cal-link="entalogics/30min"
                        data-cal-namespace="30min"
                        data-cal-config='{"layout":"month_view","theme":"auto"}'
                              className={`block w-full bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-xl rounded-lg sm:rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:border-${item.color}-400/50 dark:hover:border-${item.color}-500/50 text-center h-full cursor-pointer relative overflow-hidden`}
                           >
                             <div className={`absolute inset-0 bg-gradient-to-br ${item.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                             <div className="relative z-10">
                               <div
                                 className={`w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 dark:from-${item.color}-900/40 dark:to-${item.color}-800/30 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md group-hover:shadow-xl`}
                               >
                                  <item.icon className={`w-5 h-5 sm:w-8 sm:h-8 text-${item.color}-600 dark:text-${item.color}-400 group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                                <h3 className={`text-base sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-2 group-hover:text-${item.color}-600 dark:group-hover:text-${item.color}-400 transition-colors duration-300`}>
                                 {item.title}
                               </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                                 {item.description}
                               </p>
                               <div
                                 className={`inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 dark:from-gray-700 dark:to-gray-600 text-${item.color}-700 dark:text-gray-200 font-bold text-sm border border-${item.color}-200/50 dark:border-gray-600/50 group-hover:from-${item.color}-100 group-hover:to-${item.color}-200 dark:group-hover:from-gray-600 dark:group-hover:to-gray-500 transition-all duration-300 shadow-md group-hover:shadow-lg`}
                               >
                          {item.contact}
                               </div>
                        </div>
                      </button>
                    ) : (
                      <a
                        href={item.href}
                              className={`block bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-xl rounded-lg sm:rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:border-${item.color}-400/50 dark:hover:border-${item.color}-500/50 text-center h-full relative overflow-hidden`}
                           >
                             <div className={`absolute inset-0 bg-gradient-to-br ${item.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                             <div className="relative z-10">
                               <div
                                 className={`w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 dark:from-${item.color}-900/40 dark:to-${item.color}-800/30 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md group-hover:shadow-xl`}
                               >
                                  <item.icon className={`w-5 h-5 sm:w-8 sm:h-8 text-${item.color}-600 dark:text-${item.color}-400 group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                                <h3 className={`text-base sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-2 group-hover:text-${item.color}-600 dark:group-hover:text-${item.color}-400 transition-colors duration-300`}>
                                 {item.title}
                               </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                                 {item.description}
                               </p>
                               <div
                                 className={`inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 dark:from-gray-700 dark:to-gray-600 text-${item.color}-700 dark:text-gray-200 font-bold text-sm border border-${item.color}-200/50 dark:border-gray-600/50 group-hover:from-${item.color}-100 group-hover:to-${item.color}-200 dark:group-hover:from-gray-600 dark:group-hover:to-gray-500 transition-all duration-300 shadow-md group-hover:shadow-lg`}
                               >
                          {item.contact}
                               </div>
                        </div>
                      </a>
                    )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20 bg-background dark:bg-[#0a1225]">
          <div className="container mx-auto px-0 md:px-8">
            <FAQ showCta={false} />
          </div>
        </section>

        {/* Trusted Companies Section */}
        <section className="py-12 md:py-20 bg-background dark:bg-[#0a1225]">
          <div className="container mx-auto px-2 md:px-8">
            <TrustedCompanies />
          </div>
        </section>
        </div>
      </Layout>
    </>
  )
} 
