"use client"

import React, { useState, useEffect, useRef } from "react"
import type { MouseEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Type assertion for motion components
const MotionButton = motion.button as any
const MotionDiv = motion.div as any
import { Menu, X, Sun, Moon, ArrowUpRight, Home, Briefcase, Image as ImageIcon, HelpCircle, Phone, Mail, Linkedin, ChevronDown, Code, Users } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import Link from "next/link"
import Image from "next/image"
import { servicesData } from "../data/servicesData"
import ServicesDropdown from "./ServicesDropdown"
import TechnologiesDropdown from "./TechnologiesDropdown"
import HireDevelopersDropdown from "./HireDevelopersDropdown"
import { technologiesByCategory } from "../data/technologiesData"
import { hireDevelopersByCategory, getHireDeveloperCategories } from "../data/hireDevelopersData"

const navItems: { name: string; href: string }[] = [
  { name: "Services", href: "#services" },
  { name: "Technology", href: "/technologies" },
  { name: "Hire Developers", href: "#hire-developers" },
  { name: "Contact", href: "/contact-us" },
]

const Header = ({ logoSrc }: { logoSrc?: string }) => {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [shrink, setShrink] = useState(false)
  const [isServicesHovered, setIsServicesHovered] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isTechnologyHovered, setIsTechnologyHovered] = useState(false)
  const [isMobileTechnologyOpen, setIsMobileTechnologyOpen] = useState(false)
  const [isHireDevelopersHovered, setIsHireDevelopersHovered] = useState(false)
  const [isMobileHireDevelopersOpen, setIsMobileHireDevelopersOpen] = useState(false)
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const technologyTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const hireDevelopersTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current)
      }
      if (technologyTimeoutRef.current) {
        clearTimeout(technologyTimeoutRef.current)
      }
      if (hireDevelopersTimeoutRef.current) {
        clearTimeout(hireDevelopersTimeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Only shrink on desktop (md and above)
      if (window.innerWidth >= 768) {
        setShrink(window.scrollY > 40)
      } else {
        setShrink(false) // Never shrink on mobile
      }
    }
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll) // Handle resize to check screen size
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleNavClick = (href: string) => {
    if (href === "/") {
      // If it's the home link, always go to homepage
      window.location.href = "/"
    } else if (window.location.pathname !== "/") {
      // If we're not on homepage and it's a section link, go to homepage first
      window.location.href = `/${href}`
    } else {
      // If we're on homepage, scroll to section
      scrollToSection(href)
    }
  }

  return (
    <header
      className={`fixed top-4 left-0 w-full z-50 flex justify-center transition-all duration-300 ${shrink ? "pt-0" : ""} ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {/* Blurred background circles for RozmeriGPT effect */}
      {theme === "dark" && (
        <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl z-0 pointer-events-none"></div>
      )}
      <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-purple-100/40 dark:bg-purple-600/5 blur-3xl z-0 pointer-events-none"></div>
      <div
        className={`pointer-events-auto w-full max-w-6xl mx-auto px-2 transition-all duration-300 ${shrink ? "max-w-[650px]" : "max-w-6xl"}`}
      >
        <div
          className={`grid grid-cols-2 md:grid-cols-3 items-center bg-white/80 dark:bg-[#0a1225]/80 backdrop-blur-lg rounded-md shadow-md border border-gray-200 dark:border-blue-900/40 ${shrink ? "px-3 py-1" : "px-4 py-2 md:py-3"} transition-all duration-300 w-full`}
        >
          {/* Logo */}
          <div className="flex items-center justify-self-start">
            <Link href="/" className="flex items-center space-x-2 group">
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center bg-transparent p-0 ${shrink ? "w-8 h-8" : ""}`}
              >
                <Image
                  src={logoSrc || "/assets/Favicon/Entalogics favicon blue color.svg"}
                  alt="Entalogics logo"
                  width={32}
                  height={32}
                  priority
                  sizes="32px"
                  className={`object-contain transition-all duration-300 ${shrink ? "w-7 h-7" : "w-8 h-8"}`}
                  draggable="false"
                />
              </div>
              {!shrink && (
                <span className="text-lg font-poppins font-bold text-black dark:text-white tracking-tight transition-all duration-200">
                  Entalogics
                </span>
              )}
            </Link>
          </div>

          {/* Nav links (centered) */}
          <nav className={`hidden md:flex lg:flex justify-self-center items-center ${shrink ? "space-x-2 mr-8" : "space-x-6"}`}>
            {navItems.map((item, index) => {
              if (item.name === "Services") {
                const services = Object.values(servicesData)
                const handleServicesMouseEnter = () => {
                  // Clear any existing timeout
                  if (servicesTimeoutRef.current) {
                    clearTimeout(servicesTimeoutRef.current)
                    servicesTimeoutRef.current = null
                  }
                  setIsServicesHovered(true)
                }

                const handleServicesMouseLeave = () => {
                  // Add delay before hiding
                  servicesTimeoutRef.current = setTimeout(() => {
                    setIsServicesHovered(false)
                  }, 500) // 500ms delay
                }

                return (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <MotionButton
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className={`text-base font-medium transition-colors px-2 py-1 rounded flex items-center gap-1 ${shrink ? "text-gray-700 dark:text-gray-300 text-sm" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}
                      type="button"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesHovered ? "rotate-180" : ""}`} />
                    </MotionButton>
                    
                    {/* Services Dropdown - Separate Component */}
                    <ServicesDropdown 
                      isOpen={isServicesHovered}
                      onClose={() => {
                        if (servicesTimeoutRef.current) {
                          clearTimeout(servicesTimeoutRef.current)
                          servicesTimeoutRef.current = null
                        }
                        setIsServicesHovered(false)
                      }}
                      shrink={shrink}
                      onMouseEnter={handleServicesMouseEnter}
                      onMouseLeave={handleServicesMouseLeave}
                    />
                  </div>
                )
              }
              
              if (item.name === "Technology") {
                const handleMouseEnter = () => {
                  // Clear any existing timeout
                  if (technologyTimeoutRef.current) {
                    clearTimeout(technologyTimeoutRef.current)
                    technologyTimeoutRef.current = null
                  }
                  setIsTechnologyHovered(true)
                }

                const handleMouseLeave = () => {
                  // Add delay before hiding (increased delay like services)
                  technologyTimeoutRef.current = setTimeout(() => {
                    setIsTechnologyHovered(false)
                  }, 500) // 500ms delay - longer than before
                }

                return (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <MotionButton
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className={`text-base font-medium transition-colors px-2 py-1 rounded flex items-center gap-1 ${shrink ? "text-gray-700 dark:text-gray-300 text-sm" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}
                      type="button"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isTechnologyHovered ? "rotate-180" : ""}`} />
                    </MotionButton>
                    
                    {/* Technologies Dropdown - Separate Component */}
                    <TechnologiesDropdown 
                      isOpen={isTechnologyHovered}
                      onClose={() => {
                        if (technologyTimeoutRef.current) {
                          clearTimeout(technologyTimeoutRef.current)
                          technologyTimeoutRef.current = null
                        }
                        setIsTechnologyHovered(false)
                      }}
                      shrink={shrink}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                )
              }
              
              if (item.name === "Hire Developers") {
                const handleHireDevelopersMouseEnter = () => {
                  // Clear any existing timeout
                  if (hireDevelopersTimeoutRef.current) {
                    clearTimeout(hireDevelopersTimeoutRef.current)
                    hireDevelopersTimeoutRef.current = null
                  }
                  setIsHireDevelopersHovered(true)
                }

                const handleHireDevelopersMouseLeave = () => {
                  // Add delay before hiding
                  hireDevelopersTimeoutRef.current = setTimeout(() => {
                    setIsHireDevelopersHovered(false)
                  }, 500)
                }

                return (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={handleHireDevelopersMouseEnter}
                    onMouseLeave={handleHireDevelopersMouseLeave}
                  >
                    <MotionButton
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className={`text-base font-medium transition-colors px-2 py-1 rounded flex items-center gap-1 whitespace-nowrap ${shrink ? "text-gray-700 dark:text-gray-300 text-sm" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}
                      type="button"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isHireDevelopersHovered ? "rotate-180" : ""}`} />
                    </MotionButton>
                    
                    {/* Hire Developers Dropdown - Separate Component */}
                    <HireDevelopersDropdown 
                      isOpen={isHireDevelopersHovered}
                      onClose={() => {
                        if (hireDevelopersTimeoutRef.current) {
                          clearTimeout(hireDevelopersTimeoutRef.current)
                          hireDevelopersTimeoutRef.current = null
                        }
                        setIsHireDevelopersHovered(false)
                      }}
                      shrink={shrink}
                      onMouseEnter={handleHireDevelopersMouseEnter}
                      onMouseLeave={handleHireDevelopersMouseLeave}
                    />
                  </div>
                )
              }
              
              // If it's Contact, use Link to navigate to /contact-us
              if (item.name === "Contact") {
                return (
                  <Link key={index} href="/contact-us">
                    <MotionButton
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className={`text-base font-medium transition-colors px-2 py-1 rounded ${shrink ? "text-gray-700 dark:text-gray-300 text-sm" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}
                      type="button"
                    >
                      {item.name}
                    </MotionButton>
                  </Link>
                )
              }
              
              return (
              <MotionButton
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                onClick={() => handleNavClick(item.href)}
                className={`text-base font-medium transition-colors px-2 py-1 rounded ${shrink ? "text-gray-700 dark:text-gray-300 text-sm" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}
                type="button"
              >
                {item.name}
              </MotionButton>
              )
            })}
          </nav>

          {/* Right side: theme toggle + CTA */}
          <div className={`flex items-center justify-self-end ${shrink ? "space-x-3 pl-4" : "space-x-4"}`}>
            <MotionButton
              onClick={toggleTheme}
              whileTap={{ scale: 0.9, rotate: 15 }}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors border border-gray-200 dark:border-blue-900/40 bg-gray-100 dark:bg-blue-900/10`}
              aria-label="Toggle theme"
              type="button"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-white" />}
            </MotionButton>
            {/* Book a call button: only show on md+ screens */}
              <MotionButton
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              data-cal-link="entalogics/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view","theme":"auto"}'
                className={`hidden md:flex lg:flex items-center justify-center transition-all duration-200 font-semibold rounded-md shadow-sm text-sm ${shrink ? "" : ""}
                ${
                  theme === "dark"
                    ? shrink
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 w-9 h-9 p-0 border border-blue-500/50 shadow-blue-500/25"
                      : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 px-4 py-2.5 border border-blue-500/50 shadow-blue-500/25"
                    : shrink
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 w-9 h-9 p-0 border border-blue-500/50 shadow-blue-500/25"
                      : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 px-4 py-2.5 border border-blue-500/50 shadow-blue-500/25"
                }
              `}
              aria-label="Book a call"
              type="button"
              >
                {shrink ? (
                <Phone className="w-5 h-5" />
                ) : (
                  <>
                  Book a call <Phone className="w-4 h-4 ml-1 inline" />
                  </>
                )}
              </MotionButton>
            {/* Mobile menu button */}
            <MotionButton
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden lg:hidden w-9 h-9 rounded-full flex items-center justify-center transition-colors border border-gray-200 dark:border-blue-900/40 bg-gray-100 dark:bg-blue-900/10"
              aria-label="Toggle Menu"
              type="button"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-gray-800 dark:text-white" /> : <Menu className="w-5 h-5 text-gray-800 dark:text-white" />}
            </MotionButton>
          </div>
        </div>
      </div>
      {/* Mobile Menu Drawer (mobile only) */}
      <AnimatePresence>
        {isMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 bg-black/40 dark:bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          >
            <MotionDiv
              initial={{ x: 360 }}
              animate={{ x: 0 }}
              exit={{ x: 360 }}
              transition={{ type: "spring", stiffness: 380, damping: 34, mass: 0.7 }}
              className="absolute right-0 top-0 h-full w-[85%] sm:w-[80%] max-w-xs bg-white dark:bg-[#0a1225] shadow-2xl flex flex-col overflow-hidden"
              role="dialog"
              aria-modal="true"
              onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              {/* Drawer header - Compact */}
              <div className="relative px-4 pt-3 pb-2.5 bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/assets/Favicon/Entalogics favicon white color.svg"
                        alt="Entalogics logo"
                        width={18}
                        height={18}
                        sizes="18px"
                        className="object-contain w-4 h-4"
                      />
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-white font-semibold text-sm">Entalogics</span>
                      <span className="text-white/80 text-[10px]">AI amplifies us — it doesn’t replace.</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white/90 hover:text-white p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors hover:bg-white/10"
                    aria-label="Close menu"
                    type="button"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-auto px-3 py-2" style={{ WebkitOverflowScrolling: 'touch' }}>
                <div className="flex flex-col gap-0.5">
                  {navItems.map((item, index) => {
                    const Icon = item.name === "Services" ? Briefcase : item.name === "Technology" ? Code : item.name === "Hire Developers" ? Users : item.name === "Portfolio" ? ImageIcon : item.name === "FAQs" ? HelpCircle : Phone
                    
                    if (item.name === "Services") {
                      const services = Object.values(servicesData)
                      return (
                        <div key={item.name} className="w-full">
                          <MotionButton
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 + index * 0.05 }}
                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                            type="button"
                          >
                            <span className="flex items-center">
                              <Icon className="w-4 h-4 mr-2.5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                              {item.name}
                              <ChevronDown className={`w-4 h-4 ml-auto text-gray-400 dark:text-gray-500 transition-transform duration-200 flex-shrink-0 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                            </span>
                          </MotionButton>
                          
                          {/* Mobile Services Dropdown */}
                          <AnimatePresence>
                            {isMobileServicesOpen && (
                              <MotionDiv
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div 
                                  className="pl-5 pr-2 py-1.5 space-y-0.5 max-h-[50vh] overflow-y-auto custom-scrollbar"
                                  style={{ 
                                    scrollBehavior: 'smooth',
                                    WebkitOverflowScrolling: 'touch'
                                  }}
                                  onWheel={(e: React.WheelEvent) => {
                                    e.stopPropagation()
                                  }}
                                >
                                  {services.map((service, serviceIndex) => {
                                    const imagePath = service.imagePath || `/assets/services-logos/${service.slug}.svg`
                                    return (
                                      <Link
                                        key={service.slug}
                                        href={`/services/${service.slug}`}
                                        onClick={() => {
                                          setIsMobileServicesOpen(false)
                                          setIsMenuOpen(false)
                                        }}
                                      >
                                        <div
                                          className="flex items-center gap-2 px-2 py-2 rounded-md text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                                        >
                                          <div className="w-3.5 h-3.5 flex-shrink-0 flex items-center justify-center">
                                            <img
                                              src={imagePath}
                                              alt={`${service.title} icon`}
                                              className="w-full h-full object-contain"
                                            />
                                          </div>
                                          <span className="font-medium">{service.title}</span>
                                        </div>
                                      </Link>
                                    )
                                  })}
                                  
                                  {/* View All Services */}
                                  <Link
                                    href="/services"
                                    onClick={() => {
                                      setIsMobileServicesOpen(false)
                                      setIsMenuOpen(false)
                                    }}
                                    className="block mt-1.5 pt-1.5 border-t border-gray-200 dark:border-gray-700"
                                  >
                                    <div
                                      className="flex items-center gap-2 px-2 py-2 rounded-md text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                    >
                                      <Briefcase className="w-3.5 h-3.5 flex-shrink-0" />
                                      <span>All Services</span>
                                      <ArrowUpRight className="w-3 h-3 ml-auto flex-shrink-0" />
                                    </div>
                                  </Link>
                                </div>
                              </MotionDiv>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    }
                    
                    if (item.name === "Technology") {
                      const categories = Object.keys(technologiesByCategory)
                      return (
                        <div key={item.name} className="w-full">
                          <MotionButton
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 + index * 0.05 }}
                            onClick={() => setIsMobileTechnologyOpen(!isMobileTechnologyOpen)}
                            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                            type="button"
                          >
                            <span className="flex items-center">
                              <Icon className="w-4 h-4 mr-2.5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                              {item.name}
                              <ChevronDown className={`w-4 h-4 ml-auto text-gray-400 dark:text-gray-500 transition-transform duration-200 flex-shrink-0 ${isMobileTechnologyOpen ? 'rotate-180' : ''}`} />
                            </span>
                          </MotionButton>
                          
                          {/* Mobile Technology Dropdown */}
                          <AnimatePresence>
                            {isMobileTechnologyOpen && (
                              <MotionDiv
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div 
                                  className="pl-5 pr-2 py-1.5 space-y-2 max-h-[50vh] overflow-y-auto custom-scrollbar"
                                  style={{ 
                                    scrollBehavior: 'smooth',
                                    WebkitOverflowScrolling: 'touch'
                                  }}
                                  onWheel={(e: React.WheelEvent) => {
                                    e.stopPropagation()
                                  }}
                                >
                                  {categories.map((category) => {
                                    const categoryTechs = technologiesByCategory[category]
                                    return (
                                      <div key={category} className="space-y-1">
                                        <h5 className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-2">
                                          {category}
                                        </h5>
                                        {categoryTechs.map((tech: any) => {
                                          const imagePath = tech.imagePath || `/assets/technologies/${tech.slug.replace('-development-services', '')}.svg`
                                          return (
                                            <Link
                                              key={tech.slug}
                                              href={`/technologies/${tech.slug}`}
                                              onClick={() => {
                                                setIsMobileTechnologyOpen(false)
                                                setIsMenuOpen(false)
                                              }}
                                            >
                                              <div
                                                className="flex items-center gap-2 px-2 py-1.5 rounded-md text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                                              >
                                                <div className="w-3.5 h-3.5 flex-shrink-0 flex items-center justify-center">
                                                  <img
                                                    src={imagePath}
                                                    alt={`${tech.title} icon`}
                                                    className="w-full h-full object-contain"
                                                  />
                                                </div>
                                                <span className="font-medium">{tech.title}</span>
                                              </div>
                                            </Link>
                                          )
                                        })}
                                      </div>
                                    )
                                  })}
                                  
                                  {/* View All Technologies */}
                                  <Link
                                    href="/technologies"
                                    onClick={() => {
                                      setIsMobileTechnologyOpen(false)
                                      setIsMenuOpen(false)
                                    }}
                                    className="block mt-1.5 pt-1.5 border-t border-gray-200 dark:border-gray-700"
                                  >
                                    <div
                                      className="flex items-center gap-2 px-2 py-2 rounded-md text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                    >
                                      <Code className="w-3.5 h-3.5 flex-shrink-0" />
                                      <span>All Technologies</span>
                                      <ArrowUpRight className="w-3 h-3 ml-auto flex-shrink-0" />
                                    </div>
                                  </Link>
                                </div>
                              </MotionDiv>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    }
                    
                    if (item.name === "Hire Developers") {
                      const hireDeveloperCategories = getHireDeveloperCategories()
                      return (
                        <div key={item.name} className="w-full">
                          <MotionButton
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 + index * 0.05 }}
                            onClick={() => setIsMobileHireDevelopersOpen(!isMobileHireDevelopersOpen)}
                            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                            type="button"
                          >
                            <span className="flex items-center">
                              <Icon className="w-4 h-4 mr-2.5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                              {item.name}
                              <ChevronDown className={`w-4 h-4 ml-auto text-gray-400 dark:text-gray-500 transition-transform duration-200 flex-shrink-0 ${isMobileHireDevelopersOpen ? 'rotate-180' : ''}`} />
                            </span>
                          </MotionButton>
                          
                          {/* Mobile Hire Developers Dropdown */}
                          <AnimatePresence>
                            {isMobileHireDevelopersOpen && (
                              <MotionDiv
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div 
                                  className="pl-5 pr-2 py-1.5 space-y-2 max-h-[50vh] overflow-y-auto custom-scrollbar"
                                  style={{ 
                                    scrollBehavior: 'smooth',
                                    WebkitOverflowScrolling: 'touch'
                                  }}
                                  onWheel={(e: React.WheelEvent) => {
                                    e.stopPropagation()
                                  }}
                                >
                                  {hireDeveloperCategories.map((category) => {
                                    const categoryItems = hireDevelopersByCategory[category]
                                    return (
                                      <div key={category} className="space-y-1">
                                        <h5 className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-2">
                                          {category}
                                        </h5>
                                        {categoryItems.map((hireDev: any) => {
                                          return (
                                            <Link
                                              key={hireDev.slug}
                                              href={`/${hireDev.slug}`}
                                              onClick={() => {
                                                setIsMobileHireDevelopersOpen(false)
                                                setIsMenuOpen(false)
                                              }}
                                            >
                                              <div
                                                className="flex items-center gap-2 px-2 py-1.5 rounded-md text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                                              >
                                                <div className="w-0.5 h-3 bg-gray-300 dark:bg-gray-600 rounded-full flex-shrink-0"></div>
                                                <span className="font-medium">{hireDev.title}</span>
                                              </div>
                                            </Link>
                                          )
                                        })}
                                      </div>
                                    )
                                  })}
                                  
                                  {/* Contact Us to Hire */}
                                  <Link
                                    href="/contact-us"
                                    onClick={() => {
                                      setIsMobileHireDevelopersOpen(false)
                                      setIsMenuOpen(false)
                                    }}
                                    className="block mt-1.5 pt-1.5 border-t border-gray-200 dark:border-gray-700"
                                  >
                                    <div
                                      className="flex items-center gap-2 px-2 py-2 rounded-md text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                    >
                                      <Users className="w-3.5 h-3.5 flex-shrink-0" />
                                      <span>Contact Us to Hire</span>
                                      <ArrowUpRight className="w-3 h-3 ml-auto flex-shrink-0" />
                                    </div>
                                  </Link>
                                </div>
                              </MotionDiv>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    }
                    
                    // If it's Contact, use Link to navigate to /contact-us
                    if (item.name === "Contact") {
                      return (
                        <Link key={item.name} href="/contact-us" onClick={() => setIsMenuOpen(false)}>
                          <MotionButton
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 + index * 0.05 }}
                            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                            type="button"
                          >
                            <span className="flex items-center">
                              <Icon className="w-4 h-4 mr-2.5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                              {item.name}
                              <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-gray-400 dark:text-gray-500 flex-shrink-0" />
                            </span>
                          </MotionButton>
                        </Link>
                      )
                    }
                    
                    return (
                      <MotionButton
                        key={item.name}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + index * 0.05 }}
                        onClick={() => handleNavClick(item.href)}
                        className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                        type="button"
                      >
                        <span className="flex items-center">
                          <Icon className="w-4 h-4 mr-2.5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                          {item.name}
                          <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-gray-400 dark:text-gray-500 flex-shrink-0" />
                        </span>
                      </MotionButton>
                    )
                  })}
                </div>
              </nav>

              {/* Footer CTA / theme and quick contacts - Compact */}
              <div className="px-3 pb-3 pt-2.5 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Quick actions</span>
                  <MotionButton
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleTheme}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                    aria-label="Toggle theme"
                    type="button"
                  >
                    {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-white" />}
                  </MotionButton>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2.5">
                  <MotionButton
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => (window.location.href = "mailto:info@entalogics.com")}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    type="button"
                  >
                    <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Email</span>
                  </MotionButton>
                  <MotionButton
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => (window.location.href = "https://www.linkedin.com/company/enta-logics")}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    type="button"
                  >
                    <Linkedin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>LinkedIn</span>
                  </MotionButton>
                </div>
                <MotionButton
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  data-cal-link="entalogics/30min"
                  data-cal-namespace="30min"
                  data-cal-config='{"layout":"month_view","theme":"auto"}'
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-sm text-sm"
                  type="button"
                >
                  Book a call <Phone className="w-4 h-4 ml-1 inline" />
                </MotionButton>
              </div>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
      
      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar {
          overflow-y: auto !important;
          overflow-x: hidden !important;
          scrollbar-width: thin;
          scrollbar-color: rgba(156, 163, 175, 0.3) transparent;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.4);
          border-radius: 10px;
          border: 2px solid transparent;
          background-clip: padding-box;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.6);
          background-clip: padding-box;
        }
        .dark .custom-scrollbar {
          scrollbar-color: rgba(59, 130, 246, 0.4) transparent;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.4);
          background-clip: padding-box;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.6);
          background-clip: padding-box;
        }
      `}</style>
    </header>
  )
}

export default Header
