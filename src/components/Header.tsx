"use client"

import { useState, useEffect } from "react"
import type { MouseEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Type assertion for motion components
const MotionButton = motion.button as any
const MotionDiv = motion.div as any
import { Menu, X, Sun, Moon, ArrowUpRight, Home, Briefcase, Image as ImageIcon, HelpCircle, Phone, Mail, MessageCircle, ChevronDown } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import Link from "next/link"
import Image from "next/image"
import { servicesData } from "../data/servicesData"
import ServicesDropdown from "./ServicesDropdown"

const navItems: { name: string; href: string }[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "FAQs", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

const Header = ({ logoSrc }: { logoSrc?: string }) => {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [shrink, setShrink] = useState(false)
  const [isServicesHovered, setIsServicesHovered] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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
        className={`pointer-events-auto w-full max-w-6xl mx-auto px-2 transition-all duration-300 ${shrink ? "max-w-xl" : "max-w-6xl"}`}
      >
        <div
          className={`grid grid-cols-2 md:grid-cols-3 items-center bg-white/80 dark:bg-[#0a1225]/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200 dark:border-blue-900/40 ${shrink ? "px-3 py-1" : "px-4 py-2 md:py-3"} transition-all duration-300 w-full`}
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
                return (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setIsServicesHovered(true)}
                    onMouseLeave={() => setIsServicesHovered(false)}
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
                      onClose={() => setIsServicesHovered(false)}
                      shrink={shrink}
                    />
                  </div>
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
              onClick={() => handleNavClick("#contact")}
              className={`hidden md:flex lg:flex items-center justify-center transition-all duration-200 font-semibold rounded-xl shadow-md text-sm ${shrink ? "" : ""}
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
                <ArrowUpRight className="w-5 h-5" />
              ) : (
                <>
                  Book a call <span className="ml-1 text-sm">↗</span>
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
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
              className="absolute right-0 top-0 h-full w-[90%] sm:w-[85%] md:w-[86%] max-w-sm bg-white dark:bg-[#0b142a] shadow-2xl flex flex-col rounded-l-2xl overflow-hidden"
              role="dialog"
              aria-modal="true"
              onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              {/* Drawer header with gradient brand */}
              <div className="relative px-4 sm:px-5 pt-4 sm:pt-5 pb-3 sm:pb-4 bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 flex items-center justify-center">
                      <Image
                        src="/assets/Favicon/Entalogics favicon white color.svg"
                        alt="Entalogics logo"
                        width={22}
                        height={22}
                        sizes="22px"
                        className="object-contain w-5 h-5 sm:w-[22px] sm:h-[22px]"
                      />
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-white font-semibold text-sm sm:text-base">Entalogics</span>
                      <span className="text-white/80 text-[10px] sm:text-xs">Build with clarity</span>
                    </div>
                  </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                    className="text-white/90 hover:text-white p-1.5 sm:p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close menu"
                    type="button"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-auto px-3 sm:px-4 py-3 sm:py-4" style={{ WebkitOverflowScrolling: 'touch' }}>
                <div className="flex flex-col gap-1 sm:gap-1.5">
                  {navItems.map((item, index) => {
                    const Icon = item.name === "Home" ? Home : item.name === "Services" ? Briefcase : item.name === "Portfolio" ? ImageIcon : item.name === "FAQs" ? HelpCircle : Phone
                    
                    if (item.name === "Services") {
                      const services = Object.values(servicesData)
                      return (
                        <div key={item.name} className="w-full">
                          <MotionButton
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 + index * 0.05 }}
                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                            className="w-full text-left px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl text-sm sm:text-[15px] font-medium text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 min-h-[48px]"
                            type="button"
                          >
                            <span className="flex items-center">
                              <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-gray-400 flex-shrink-0" />
                              {item.name}
                              <ChevronDown className={`w-4 h-4 ml-auto text-gray-400 transition-transform duration-200 flex-shrink-0 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
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
                                  className="pl-6 sm:pl-8 pr-2 sm:pr-3 py-2 space-y-1 max-h-[60vh] overflow-y-auto custom-scrollbar"
                                  style={{ 
                                    scrollBehavior: 'smooth',
                                    WebkitOverflowScrolling: 'touch'
                                  }}
                                  onWheel={(e: React.WheelEvent) => {
                                    e.stopPropagation()
                                  }}
                                >
                                  {services.map((service, serviceIndex) => {
                                    const ServiceIcon = service.icon || Briefcase
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
                                          className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors min-h-[44px]"
                                        >
                                          <ServiceIcon className="w-4 h-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                                          <span className="font-medium">{service.title}</span>
                                        </div>
                                      </Link>
                                    )
                                  })}
                                  
                                  {/* View All Services as part of list */}
                                  <Link
                                    href="/services"
                                    onClick={() => {
                                      setIsMobileServicesOpen(false)
                                      setIsMenuOpen(false)
                                    }}
                                    className="block mt-2"
                                  >
                                    <div
                                      className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-t border-gray-200 dark:border-gray-700 pt-3 mt-1 min-h-[44px]"
                                    >
                                      <Briefcase className="w-4 h-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                                      <span>All Services</span>
                                      <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-gray-400 flex-shrink-0" />
                                    </div>
                                  </Link>
                                </div>
                              </MotionDiv>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    }
                    
                    return (
                      <MotionButton
                        key={item.name}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + index * 0.05 }}
                        onClick={() => handleNavClick(item.href)}
                        className="w-full text-left px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl text-sm sm:text-[15px] font-medium text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 min-h-[48px]"
                        type="button"
                      >
                        <span className="flex items-center">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-gray-400 flex-shrink-0" />
                          {item.name}
                          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-auto text-gray-300 flex-shrink-0" />
                        </span>
                      </MotionButton>
                    )
                  })}
                </div>
              </nav>

              {/* Footer CTA / theme and quick contacts */}
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 md:pb-6 pt-3 border-t border-gray-200/70 dark:border-white/10">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Quick actions</span>
                  <MotionButton
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleTheme}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-colors border border-gray-200 dark:border-blue-900/40 bg-gray-100 dark:bg-blue-900/10 min-w-[44px] min-h-[44px]"
                    aria-label="Toggle theme"
                    type="button"
                  >
                    {theme === "light" ? <Moon className="w-4 h-4 sm:w-5 sm:h-5" /> : <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
                  </MotionButton>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3">
                  <MotionButton
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => (window.location.href = "mailto:entalogics@gmail.com")}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium min-h-[44px]"
                    type="button"
                  >
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" /> <span className="hidden xs:inline">Email</span>
                  </MotionButton>
                  <MotionButton
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => (window.location.href = "https://wa.me/923207385471")}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium min-h-[44px]"
                    type="button"
                  >
                    <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" /> <span className="hidden xs:inline">WhatsApp</span>
                  </MotionButton>
                </div>
              <MotionButton
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                onClick={() => handleNavClick("#contact")}
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-md border border-blue-500/40 text-sm sm:text-base min-h-[48px]"
                type="button"
              >
                  Book a call <span className="ml-1">↗</span>
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
