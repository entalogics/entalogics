import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Link from 'next/link';
import Image from 'next/image';

const navItems: { name: string; href: string }[] = [
  { name: 'Process', href: '#process' },
  { name: 'Services', href: '#services' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Plans', href: '#plans' },
  { name: 'Contact', href: '#contact' },
];

const Header = ({ logoSrc }: { logoSrc?: string }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  const handleNavClick = (href: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/${href}`;
    } else {
      scrollToSection(href);
    }
  };

  return (
    <header className={`fixed top-4 left-0 w-full z-50 flex justify-center transition-all duration-300 ${shrink ? 'pt-0' : ''} ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Blurred background circles for RozmeriGPT effect */}
      {theme === 'dark' && (
        <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl z-0 pointer-events-none"></div>
      )}
      <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-purple-100/40 dark:bg-purple-600/5 blur-3xl z-0 pointer-events-none"></div>
      <div className={`pointer-events-auto w-full max-w-6xl mx-auto px-2 transition-all duration-300 ${shrink ? 'max-w-xl' : 'max-w-6xl'}`}>
        <div className={`grid grid-cols-2 md:grid-cols-3 items-center bg-white/80 dark:bg-[#0a1225]/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200 dark:border-blue-900/40 ${shrink ? 'px-3 py-1' : 'px-4 py-2 md:py-3'} transition-all duration-300 w-full`}>
          {/* Logo */}
          <div className="flex items-center justify-self-start">
            <Link href="/" className="flex items-center space-x-2 group">
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center bg-transparent p-0 ${shrink ? 'w-8 h-8' : ''}`}
              >
                <Image
                  src={logoSrc ? logoSrc : (theme === 'dark' ? '/assets/logo icon white.svg' : '/assets/logo icon black.svg')}
                  alt="Entalogics logo"
                  width={32}
                  height={32}
                  className={`object-contain transition-all duration-300 ${shrink ? 'w-7 h-7' : 'w-8 h-8'}`}
                  draggable="false"
                />
              </div>
              {!shrink && (
                <span className="text-lg font-bold text-black dark:text-white tracking-tight transition-all duration-200">Entalogics</span>
              )}
            </Link>
          </div>

          {/* Nav links (centered) */}
          <nav className={`hidden md:flex justify-self-center items-center ${shrink ? 'space-x-2' : 'space-x-6'}`}>
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                onClick={() => handleNavClick(item.href)}
                className={`text-base font-medium transition-colors px-2 py-1 rounded ${shrink ? 'text-gray-700 dark:text-gray-300 text-sm' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Right side: theme toggle + CTA */}
          <div className={`flex items-center justify-self-end space-x-2`}>
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9, rotate: 15 }}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors border border-gray-200 dark:border-blue-900/40 bg-gray-100 dark:bg-blue-900/10"
              aria-label="Toggle theme"
            >
              {theme === 'light' 
                ? <Moon className="w-5 h-5" /> 
                : <Sun className="w-5 h-5 text-white" />
              }
            </motion.button>
            {/* Book a call button: only show on md+ screens */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => handleNavClick('#contact')}
              className={`ml-2 hidden md:flex items-center justify-center transition-all duration-200 font-bold rounded-lg shadow text-base ${shrink ? 'mr-1' : ''}
                ${theme === 'dark' 
                  ? (shrink ? 'bg-blue-600 text-white hover:bg-blue-700 w-9 h-9 p-0 border border-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700 px-5 py-2 border border-blue-600')
                  : (shrink ? 'bg-blue-600 text-white hover:bg-blue-700 w-9 h-9 p-0 border border-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700 px-5 py-2 border border-blue-600')
              }
              `}
              aria-label="Book a call"
            >
              {shrink ? <ArrowUpRight className="w-5 h-5" /> : <>Book a call <span className="ml-1">↗</span></>}
            </motion.button>
            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-colors border border-gray-200 dark:border-blue-900/40 bg-gray-100 dark:bg-blue-900/10"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xs mx-auto bg-white dark:bg-[#111A2F] rounded-xl shadow-2xl p-6 flex flex-col items-center"
            >
              {/* Close button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black dark:hover:text-white p-2 rounded-full focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
              <nav className="flex flex-col items-center space-y-6 mt-8 w-full">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.08 }}
                    onClick={() => handleNavClick(item.href)}
                    className="text-xl font-bold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full text-center"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </nav>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + navItems.length * 0.08 }}
                onClick={() => handleNavClick('#contact')}
                className="mt-8 w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow transition-colors text-base"
              >
                Book a Call
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 