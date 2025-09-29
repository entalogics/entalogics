"use client"
import Link from "next/link"
import { Twitter, Linkedin, Github, Mail, ArrowRight, MessageCircle } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import Image from "next/image"

const Footer = ({ logoSrc }: { logoSrc?: string }) => {
  const { theme } = useTheme()
  // Always use blue favicon
  const faviconSrc = "/assets/Favicon/Entalogics favicon blue color.svg"

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "GDPR", path: "/gdpr" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms & Conditions", path: "/terms-and-conditions" },
    ],
    services: [
      { name: "SaaS Product Development", path: "/services/saas-development" },
      { name: "AI-Powered Apps & Platforms", path: "/services/ai-apps-development" },
      { name: "Web App Development", path: "/services/web-development" },
      { name: "Desktop & Mobile App Development", path: "/services/desktop-mobile-app-development" },
      { name: "Chromium & Browser Development", path: "/services/chromium-browser-development" },
      { name: "UI/UX Design", path: "/services/ui-ux-design" },
      { name: "DevOps & Deployment", path: "/services/devops-deployment" },
      { name: "Maintenance & Support", path: "/services/maintenance-support" },
    ],
    connect: [
      { name: "Contact Us", path: "/#contact" },
      { name: "Book a Call", path: "/#contact" },
      { name: "FAQ", path: "/#faq" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, path: "https://x.com/EntaLogics", accentColor: "neon-orange", label: "X (Twitter)" },
    { icon: MessageCircle, path: "https://m.facebook.com/EntaLogics/", accentColor: "neon-cyan", label: "Facebook" },
    { icon: Mail, path: "mailto:entalogics@gmail.com", accentColor: "neon-orange", label: "Email" },
    { icon: MessageCircle, path: "https://wa.me/923207385471", accentColor: "neon-cyan", label: "WhatsApp" },
  ]

  return (
    <footer className="bg-white dark:bg-[#0a1225] relative overflow-hidden">
      {/* Top Fade Effect - More pronounced */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/0 via-white/50 to-white dark:from-[#0a1225]/0 dark:via-[#0a1225]/50 dark:to-[#0a1225] pointer-events-none"></div>
      
      {/* Background Effects */}
  
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <Link href="/" className="flex items-center space-x-4 group">
                  <div className="relative">
                    <Image
                      src={faviconSrc || "/placeholder.svg"}
                      alt="Entalogics logo"
                      width={56}
                      height={56}
                      className="w-12 h-12 sm:w-14 sm:h-14"
                    />
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                  </div>
                  <div>
                    <span className="text-3xl sm:text-4xl font-bold text-black dark:text-white tracking-tight uppercase">
                      ENTALOGICS
                    </span>
                    <div className="text-sm text-gray-500 dark:text-gray-400 -mt-1 font-medium">
                      Built With Logic
                    </div>
                  </div>
                </Link>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-base max-w-sm">
                We're your full-stack development partner for modern startups and scaleups. From custom browsers to SaaS
                apps—designed, engineered, and launched with clarity.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.path}
                    target={link.path.startsWith('http') ? '_blank' : '_self'}
                    rel={link.path.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={link.label}
                    className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 group"
                  >
                    <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="ml-4 sm:ml-8 md:ml-16 lg:ml-24">
                <h4 className="font-bold text-black dark:text-white mb-6 text-lg">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.path}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 hover:translate-x-1 block text-base group"
                      >
                        <span className="group-hover:underline">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-black dark:text-white mb-6 text-lg">Services</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.path}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 hover:translate-x-1 block text-base group"
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
        <div className="border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">
              &copy; {new Date().getFullYear()} Entalogics. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
