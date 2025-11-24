"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Mail,
  Phone,
  Send,
  CheckCircle,
  Calendar,
  X,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Type assertion for motion components to fix TypeScript issues
const MotionDiv = motion.div as any
const MotionH2 = motion.h2 as any
const MotionP = motion.p as any

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
          console.log('🌍 Country Detected from IP:', data.country)
          console.log('📍 IP Address:', data.ip || 'Not available')
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

const ContactFormSection = () => {
  const [form, setForm] = useState<QuoteFormState>(initialState)
  const [errors, setErrors] = useState<any>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const [lastSubmit, setLastSubmit] = useState(0)
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
              console.log('🌍 Country Detected from IP:', detectedCountry)
              console.log('📍 IP-Based Location:', detectedCountry)
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

  // Auto-close success modal after 4 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false)
      }, 4000) // 4 seconds

      return () => clearTimeout(timer)
    }
  }, [success])

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
    <div className="relative overflow-hidden bg-background dark:bg-[#0a1225]">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-0 pt-0 pb-2 md:py-20 md:pt-4 md:pb-4">
        <div className="max-w-6xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Two Separate Cards Container */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative overflow-hidden lg:overflow-visible">
              {/* LEFT SIDE - Form Card (Separate Container) */}
              <div className="lg:col-span-2 relative">
                {/* Extended Background - Light Mode */}
                <div className="absolute inset-0 bg-white rounded-lg right-0 lg:-right-32 xl:-right-40 2xl:-right-48 dark:hidden" style={{ zIndex: 0 }}></div>
                {/* Extended Background - Dark Mode */}
                <div className="absolute inset-0 bg-gray-800 rounded-lg right-0 lg:-right-32 xl:-right-40 2xl:-right-48 hidden dark:block" style={{ zIndex: 0 }}></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden" style={{ zIndex: 1 }}>      
                  <div className="px-1 py-6 md:p-12" ref={formRef}>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white flex items-center gap-3 mb-3">
                          Contact us
                          <span className="text-blue-500">✦</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
                          Let's turn your concept into a successful commercial product together!
                        </p>
                      </div>

                      {/* Simple Form - All Fields */}
                      <div className="space-y-6">
                        <MotionDiv
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-1">
                                <label
                                  className="block text-sm font-medium text-black dark:text-blue-400"
                                  htmlFor="fullName"
                                >
                                  Your name
                                </label>
                                <input
                                  type="text"
                                  id="fullName"
                                  className="w-full px-0 py-2 border-0 border-b border-gray-300 dark:border-gray-600 bg-transparent text-gray-500 dark:text-gray-400 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:text-gray-700 dark:focus:text-gray-200 transition-colors text-base"
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
                                  className="block text-sm font-medium text-black dark:text-gray-400"
                                  htmlFor="email"
                                >
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  className="w-full px-0 py-2 border-0 border-b border-gray-300 dark:border-gray-600 bg-transparent text-gray-500 dark:text-gray-400 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:text-gray-700 dark:focus:text-gray-200 transition-colors text-base"
                                  style={{ borderBottomWidth: '1px', backgroundColor: 'transparent' }}
                                  autoComplete="off"
                                  value={form.email}
                                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                                  placeholder="example@email.com"
                                />
                                {errors.email && <span className="text-sm text-red-500 dark:text-red-400">{errors.email}</span>}
                              </div>

                              <div className="space-y-1">
                                <label
                                  className="block text-sm font-medium text-black dark:text-gray-400"
                                  htmlFor="phone"
                                >
                                  Mobile Number
                                </label>
                                <input
                                  type="text"
                                  id="phone"
                                  className="w-full px-0 py-2 border-0 border-b border-gray-300 dark:border-gray-600 bg-transparent text-gray-500 dark:text-gray-400 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:text-gray-700 dark:focus:text-gray-200 transition-colors text-base"
                                  style={{ borderBottomWidth: '1px', backgroundColor: 'transparent' }}
                                  autoComplete="off"
                                  value={form.phone}
                                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                                  placeholder="+1 234 567 8900"
                                />
                              </div>
                              
                              <div className="space-y-1">
                                <label
                                  className="block text-sm font-medium text-black dark:text-gray-400"
                                  htmlFor="company"
                                >
                                  Company Name
                                </label>
                                <input
                                  type="text"
                                  id="company"
                                  className="w-full px-0 py-2 border-0 border-b border-gray-300 dark:border-gray-600 bg-transparent text-gray-500 dark:text-gray-400 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:text-gray-700 dark:focus:text-gray-200 transition-colors text-base"
                                  style={{ borderBottomWidth: '1px', backgroundColor: 'transparent' }}
                                  autoComplete="off"
                                  value={form.company}
                                  onChange={(e) => {
                                    const companyValue = e.target.value
                                    setForm((f) => {
                                      const updatedForm = { ...f, company: companyValue }
                                      
                                      // Console mein country aur IP location show karo jab company name type ho
                                      if (companyValue.trim()) {
                                        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
                                        console.log('🏢 Company Name:', companyValue)
                                        console.log('🌍 Detected Country:', updatedForm.country || 'Not detected yet')
                                        console.log('📍 IP-Based Location:', updatedForm.country || 'Other')
                                        console.log('📧 Email:', updatedForm.email || 'Not entered')
                                        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
                                      }
                                      
                                      return updatedForm
                                    })
                                  }}
                                  placeholder="Your Company Name"
                                />
                              </div>

                              <div className="space-y-1">
                                <label
                                  className="block text-sm font-medium text-black dark:text-gray-400"
                                  htmlFor="website"
                                >
                                  Website URL
                                </label>
                                <input
                                  type="url"
                                  id="website"
                                  className="w-full px-0 py-2 border-0 border-b border-gray-300 dark:border-gray-600 bg-transparent text-gray-500 dark:text-gray-400 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:text-gray-700 dark:focus:text-gray-200 transition-colors text-base"
                                  style={{ borderBottomWidth: '1px', backgroundColor: 'transparent' }}
                                  autoComplete="off"
                                  value={form.website}
                                  onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
                                  placeholder="https://yourwebsite.com"
                                />
                              </div>
                            </div>

                            {/* Message Field */}
                            <div className="space-y-1">
                              <label
                                className="block text-sm font-semibold text-black dark:text-gray-400"
                                htmlFor="description"
                              >
                                Tell us more about your project
                              </label>
                              <textarea
                                id="description"
                                rows={5}
                                className="w-full px-0 py-2 border-0 border-b border-gray-300 dark:border-gray-600 bg-transparent text-gray-500 dark:text-gray-400 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:text-gray-700 dark:focus:text-gray-200 transition-colors resize-none text-base"
                                style={{ borderBottomWidth: '1px', backgroundColor: 'transparent' }}
                                value={form.description}
                                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                                placeholder="Write your message"
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
                              <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={form.consent}
                                  onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                                  className="w-5 h-5 text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-500 rounded-full focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:ring-offset-0 cursor-pointer transition-all duration-200 appearance-none checked:bg-blue-600 dark:checked:bg-blue-500 checked:border-blue-600 dark:checked:border-blue-500 hover:border-blue-500 dark:hover:border-blue-400 relative flex-shrink-0"
                                  style={{
                                    backgroundImage: form.consent ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'20 6 9 17 4 12\'%3E%3C/polyline%3E%3C/svg%3E")' : 'none',
                                    backgroundSize: '60%',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                  }}
                                />
                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                  I consent to EntaLogics to store my personal information according to the{" "}
                                  <Link 
                                    href="/privacy-policy" 
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
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
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed border border-blue-500/50"
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
                        </MotionDiv>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - Contact Info Card (Separate Container) */}
              <div className="lg:col-span-1 flex items-center relative" style={{ zIndex: 2 }}>
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 md:p-12 text-white flex flex-col rounded-lg w-full">
                  <div className="space-y-6 mb-6">
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

                    {/* Helpful Message */}
                    <div className="pt-2">
                      <p className="text-white/90 leading-relaxed text-sm md:text-base">
                        Have questions? We're here to help! Reach out via email or schedule a meeting to discuss your project.
                      </p>
                    </div>
                  </div>

                  {/* Schedule Meeting Button */}
                  <div className="mb-6">
                    <button
                      data-cal-link="entalogics/30min"
                      data-cal-namespace="30min"
                      data-cal-config='{"layout":"month_view","theme":"auto"}'
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 rounded-lg transition-all shadow-sm hover:shadow-md cursor-pointer backdrop-blur-sm"
                    >
                      <Calendar className="w-5 h-5" />
                      Schedule a Meeting
                    </button>
                  </div>

                  {/* Social Media Icons */}
                  <div className="flex items-center justify-center gap-3 mt-auto pt-6 border-t border-white/20">
                    <a
                      href="https://x.com/EntaLogics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
                      aria-label="X (Twitter)"
                      style={{ border: '1px solid white' }}
                    >
                      <Twitter className="w-4 h-4" strokeWidth={2} style={{ stroke: 'white', fill: 'none' }} />
                    </a>
                    <a
                      href="https://m.facebook.com/EntaLogics/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
                      aria-label="Facebook"
                      style={{ border: '1px solid white' }}
                    >
                      <Facebook className="w-4 h-4" strokeWidth={2} style={{ stroke: 'white', fill: 'none' }} />
                    </a>
                    <a
                      href="mailto:info@entalogics.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
                      aria-label="Email"
                      style={{ border: '1px solid white' }}
                    >
                      <Mail className="w-4 h-4" strokeWidth={2} style={{ stroke: 'white', fill: 'none' }} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/enta-logics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
                      aria-label="LinkedIn"
                      style={{ border: '1px solid white' }}
                    >
                      <Linkedin className="w-4 h-4" strokeWidth={2} style={{ stroke: 'white', fill: 'none' }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>

      {/* Success Modal Popup */}
      <AnimatePresence>
        {success && (
          <MotionDiv
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
            onClick={() => setSuccess(false)}
          >
            <MotionDiv
              key="modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSuccess(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Success Content */}
              <div className="text-center">
                <MotionDiv
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
                </MotionDiv>
                
                <MotionH2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
                >
                  Message Sent!
                </MotionH2>
                
                <MotionP
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed"
                >
                  Thank you for reaching out! We've received your message and will get back to you within 24 hours.
                </MotionP>

                <MotionDiv
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-3 justify-center"
                >
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Close
                  </button>
                  <Link
                    href="/"
                    className="px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-all duration-200 text-center"
                  >
                    Go to Home
                  </Link>
                </MotionDiv>
              </div>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ContactFormSection

