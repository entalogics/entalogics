import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = ({ logoSrc }: { logoSrc?: string }) => {
  const { theme } = useTheme();
  // Always use blue favicon
  const faviconSrc = '/assets/Favicon/Entalogics favicon blue color.svg';
  
  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Process', path: '#' },
      { name: 'Case Studies', path: '#' },
      { name: 'Our Team', path: '#' },
    ],
    services: [
      { name: 'SaaS Product Development', path: '/services/saas-development' },
      { name: 'AI-Powered Apps & Platforms', path: '/services/ai-apps' },
      { name: 'Web App Development', path: '/services/web-development' },
      { name: 'Mobile App Development', path: '/services/mobile-apps' },
      { name: 'Chromium & Browser Development', path: '/services/browser-development' },
      { name: 'UI/UX Design', path: '/services/ui-ux-design' },
    ],
    connect: [
      { name: 'Contact Us', path: '#contact' },
      { name: 'Book a Call', path: '#contact' },
      { name: 'FAQ', path: '#faq' },
      { name: 'Support', path: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, path: '#', accentColor: 'neon-cyan' },
    { icon: Twitter, path: '#', accentColor: 'neon-orange' },
    { icon: Github, path: '#', accentColor: 'neon-cyan' },
    { icon: Mail, path: '#', accentColor: 'neon-orange' },
  ];

  return (
    <footer className="bg-white dark:bg-[#0a1225] pt-20 pb-8 relative overflow-hidden">
      {/* Blurred background circles for RozmeriGPT effect */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-100/40 dark:bg-blue-600/5 blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-purple-100/40 dark:bg-purple-600/5 blur-3xl z-0 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Logo and Newsletter */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <Link href="/" className="flex items-center space-x-3 group items-center">
                <img src={faviconSrc} alt="Entalogics logo" className="w-10 h-10" />
                <div>
                  <span className="text-2xl font-bold text-black dark:text-white tracking-tight uppercase">ENTALOGICS</span>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 -mt-1">Built With Logic</div>
                </div>
              </Link>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-sm font-normal leading-relaxed">
              We're your full-stack development partner for modern startups and scaleups. From custom browsers to SaaS apps—designed, engineered, and launched with clarity.
            </p>
            <h4 className="font-bold text-black dark:text-white mb-4">Subscribe to our Newsletter</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 font-normal leading-relaxed">
              Get the latest insights on technology, development, and design delivered to your inbox.
            </p>
            <form className="flex items-center space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 text-sm bg-white dark:bg-[#111A2F] border border-gray-300 dark:border-blue-900/40 rounded-lg focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none text-black dark:text-white font-normal"
              />
              <button type="submit" className="px-5 py-3 bg-blue-600 text-white rounded-lg font-bold shadow hover:bg-blue-700 transition-all duration-200 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400/40">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Spacer */}
          <div className="lg:col-span-1"></div>

          {/* Column 2, 3, 4: Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-black dark:text-white mb-6">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map(link => (
                  <li key={link.name}>
                    <Link 
                      href={link.path} 
                      className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-normal transition-all duration-300 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-black dark:text-white mb-6">Services</h4>
              <ul className="space-y-4">
                {footerLinks.services.map(link => (
                  <li key={link.name}>
                    <Link 
                      href={link.path} 
                      className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-normal transition-all duration-300 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-black dark:text-white mb-6">Connect</h4>
              <ul className="space-y-4">
                {footerLinks.connect.map(link => (
                  <li key={link.name}>
                    <Link 
                      href={link.path} 
                      className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-normal transition-all duration-300 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Socials */}
        <div className="border-t border-gray-200 dark:border-blue-900/40 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0 font-normal">
            &copy; {new Date().getFullYear()} Entalogics. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.path} 
                className={`w-10 h-10 rounded-lg bg-white dark:bg-[#111A2F] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-blue-900/10 transition-all duration-300 border border-gray-300 dark:border-blue-900/40 hover:border-blue-600 dark:hover:border-blue-400`}
              >
                <link.icon className="w-5 h-5" strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 