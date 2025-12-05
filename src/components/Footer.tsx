"use client"
import Link from "next/link"
import { Twitter, Linkedin, Github, Mail, ArrowRight, Facebook } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import Image from "next/image"
import { servicesData } from "../data/servicesData"
import { hireDevelopersByCategory, getHireDeveloperCategories } from "../data/hireDevelopersData"

const Footer = ({ logoSrc }: { logoSrc?: string }) => {
  const { theme } = useTheme()
  // Always use blue favicon
  const faviconSrc = "/assets/Favicon/Entalogics favicon blue color.svg"

  // Get services dynamically from servicesData
  const services = Object.values(servicesData).slice(0, 8) // Limit to 8 services for footer

  // Get one developer from each main category for footer
  const categories = getHireDeveloperCategories()
  const hireDevelopers = categories.map(category => {
    const categoryItems = hireDevelopersByCategory[category]
    return categoryItems && categoryItems.length > 0 ? categoryItems[0] : null
  }).filter(Boolean)
  
  // Add specific developers that should always be in footer
  const allDevelopers = Object.values(hireDevelopersByCategory).flat()
  const chromiumDeveloper = allDevelopers.find(dev => dev.slug === "hire-chromium-browser-developers")
  const aiMlDeveloper = allDevelopers.find(dev => dev.slug === "hire-ai-ml-developers")
  const pythonDeveloper = allDevelopers.find(dev => dev.slug === "hire-python-developers")
  
  const hasChromium = hireDevelopers.some(dev => dev?.slug === "hire-chromium-browser-developers")
  const hasAiMl = hireDevelopers.some(dev => dev?.slug === "hire-ai-ml-developers")
  const hasPython = hireDevelopers.some(dev => dev?.slug === "hire-python-developers")
  
  // Add Chromium Browser Developer if not already included
  if (chromiumDeveloper && !hasChromium) {
    hireDevelopers.push(chromiumDeveloper)
  }
  
  // Add AI/ML Developers if not already included
  if (aiMlDeveloper && !hasAiMl) {
    hireDevelopers.push(aiMlDeveloper)
  }
  
  // Add Python Developers if not already included
  if (pythonDeveloper && !hasPython) {
    hireDevelopers.push(pythonDeveloper)
  }
  
  const finalHireDevelopers = hireDevelopers.slice(0, 10) // Limit to 10 developers for footer

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/team" },
      { name: "Meet the Founder", path: "/founder" },
      { name: "Technologies", path: "/technologies" },
      { name: "Locations", path: "/locations" },
      { name: "FAQs", path: "/faqs" },
      { name: "GDPR", path: "/gdpr" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms & Conditions", path: "/terms-and-conditions" },
    ],
    services: services.map(service => ({
      name: service.title,
      path: `/services/${service.slug}`
    })),
    hireDevelopers: finalHireDevelopers.map(dev => ({
      name: dev!.title,
      path: `/${dev!.slug}`
    })),
    connect: [
      { name: "Contact Us", path: "/contact-us" },
      { name: "Book a Call", path: "/#contact" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, path: "https://x.com/EntaLogics", accentColor: "neon-orange", label: "X (Twitter)" },
    { icon: Facebook, path: "https://m.facebook.com/EntaLogics/", accentColor: "neon-cyan", label: "Facebook" },
    { icon: Mail, path: "mailto:info@entalogics.com", accentColor: "neon-orange", label: "Email" },
    { icon: Linkedin, path: "https://www.linkedin.com/company/enta-logics", accentColor: "neon-cyan", label: "LinkedIn" },
  ]

  return (
    <footer className=" relative overflow-hidden">
      {/* Top Fade Effect - More pronounced */}
      <div className="absolute top-0 left-0 right-0 h-32  pointer-events-none"></div>
      
      {/* Background Effects */}
  
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        {/* Main Footer Content */}
        <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-16">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6 sm:mb-8">
                <Link href="/" className="flex items-center space-x-3 sm:space-x-4 group">
                  <div className="relative">
                    <Image
                      src={faviconSrc || "/placeholder.svg"}
                      alt="Entalogics logo"
                      width={56}
                      height={56}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                    />
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white tracking-tight uppercase">
                      ENTALOGICS
                    </span>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 -mt-0.5 sm:-mt-1 font-medium">
                      AI amplifies us — it doesn't replace.
                    </div>
                  </div>
                </Link>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base max-w-sm">
                We're your full-stack development partner for modern startups and scaleups. From custom browsers to SaaS
                apps—designed, engineered, and launched with clarity.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.path}
                    target={link.path.startsWith('http') ? '_blank' : '_self'}
                    rel={link.path.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={link.label}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 group"
                  >
                    <link.icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
              <div>
                <h4 className="font-bold text-black dark:text-white mb-4 sm:mb-6 text-base sm:text-lg">Company</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.path}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 hover:translate-x-1 block text-sm sm:text-base group"
                      >
                        <span className="group-hover:underline">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-black dark:text-white mb-4 sm:mb-6 text-base sm:text-lg">Services</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.path}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 hover:translate-x-1 block text-sm sm:text-base group"
                      >
                        <span className="group-hover:underline">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-black dark:text-white mb-4 sm:mb-6 text-base sm:text-lg">Hire Developers</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.hireDevelopers.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.path}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 hover:translate-x-1 block text-sm sm:text-base group"
                      >
                        <span className="group-hover:underline">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-4 sm:py-6 md:py-8">
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 font-medium text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Entalogics. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
