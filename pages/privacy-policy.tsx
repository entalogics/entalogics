"use client"

import React, { useState, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import { Home } from "lucide-react"
import Layout from "../src/components/Layout"
import Heading from "../src/components/ui/Heading"
import Paragraph from "../src/components/ui/Paragraph"

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "information-gathering", title: "Information Gathering" },
    { id: "information-usage", title: "Information Usage" },
    { id: "information-storing", title: "Information Storing" },
    { id: "cookies", title: "Cookies" },
    { id: "data-retention", title: "Data Retention" },
    { id: "data-processing", title: "Data Processing and Transfer" },
    { id: "security", title: "Security" },
    { id: "information-we-process", title: "Information We Process" },
    { id: "contact-us", title: "Contact Us" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <>
      <Head>
        <title>Privacy Policy | Data Protection | Entalogics</title>
        <meta name="description" content="Read Entalogics' Privacy Policy to understand how we collect, use, and protect your personal data. Learn about our data protection practices and your privacy rights." />
        <meta name="keywords" content="privacy policy, data protection, personal information, privacy rights, data collection, data usage, Entalogics privacy, user privacy, data security" />
        <meta name="author" content="Entalogics" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://entalogics.com/privacy-policy" />
      </Head>

      <Layout>
        <div className="min-h-screen bg-white dark:bg-[#0a1225] text-gray-900 dark:text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Home className="w-4 h-4" />
              </Link>
              <span>/</span>
              <span className="text-gray-900 dark:text-white">Privacy Policy</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3 w-full">
                {/* Title */}
                <div className="mb-8">
                  <Heading level={1} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
              Privacy Policy
                  </Heading>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Last Modified: January, 2025
                  </p>
                </div>

                {/* Introduction */}
                <section id="introduction" className="mb-8">
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Our company, Entalogics, is committed to protecting the privacy of our clients and users of our IT services. This Privacy Policy explains how we collect, use, and disclose information about you when you use our services or visit our website. By using our services or visiting our website, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.
                  </Paragraph>
                </section>

                {/* Information Gathering */}
                <section id="information-gathering" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Information Gathering
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We may collect information about you when you use our services or visit our website, such as your name, email address, phone number, company name, and IP address. We may also collect information about your usage of our services, such as the pages you visit, the actions you take, the time you spend on our website, and the devices and browsers you use to access our services.
                  </Paragraph>
                </section>

                {/* Information Usage */}
                <section id="information-usage" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Information Usage
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    We use the information we collect about you for various purposes, including:
                  </Paragraph>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li>Providing and improving our software development services</li>
                    <li>Communicating with you about your account, projects, or our services</li>
                    <li>Marketing purposes, including sending email campaigns and newsletters about our services</li>
                    <li>Analyzing the usage of our website and services to enhance user experience</li>
                    <li>Preventing fraud and ensuring the security of our website and services</li>
                    <li>Complying with legal obligations and responding to legal requests</li>
                  </ul>
                </section>

                {/* Information Storing */}
                <section id="information-storing" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Information Storing
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We store the information we collect about you on secure servers located in trusted data centers. We take appropriate technical and organizational security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. This includes encryption, access controls, regular security audits, and staff training on data protection.
                  </Paragraph>
                </section>

                {/* Cookies */}
                <section id="cookies" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Cookies
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Our website uses cookies to improve your experience and gather information about how you use our website. A cookie is a small data file that is stored on your device when you visit our website. You can configure your browser to reject cookies or to notify you when a website attempts to place a cookie on your device. However, if you reject cookies, you may not be able to use certain features of our website.
                  </Paragraph>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We use cookies for various purposes, including to recognize your browser, remember your preferences, provide you with a more personalized experience, and analyze website traffic and usage patterns.
                  </Paragraph>
                </section>

                {/* Data Retention */}
                <section id="data-retention" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Data Retention
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We retain the information we collect about you for as long as necessary to provide you with our services, comply with our legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, we will securely delete or anonymize it in accordance with our data retention policies.
                  </Paragraph>
                </section>

                {/* Data Processing and Transfer */}
                <section id="data-processing" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Data Processing and Transfer
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We process your information on secure servers located in various regions, including the United Arab Emirates and other jurisdictions where we operate. By using our services or visiting our website, you consent to the processing and transfer of your information to these locations. We ensure that appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.
                  </Paragraph>
                </section>

                {/* Security */}
                <section id="security" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Security
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We use appropriate technical and organizational security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. These measures include encryption, secure data transmission protocols, access controls, regular security assessments, and staff training. Despite these measures, no security system is impenetrable, and we cannot guarantee the absolute security of our servers or the information stored on them.
                  </Paragraph>
                </section>

                {/* Information We Process */}
                <section id="information-we-process" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Information We Process
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    We process the following information about you:
                  </Paragraph>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li>Personal information, such as your name, email address, phone number, company name, and IP address</li>
                    <li>Usage information, such as the pages you visit, the actions you take, and the time you spend on our website</li>
                    <li>Technical information, such as your device type, browser type, operating system, and network information</li>
                    <li>Any other information you provide to us through our website, services, or communications</li>
                  </ul>
                </section>

                {/* Contact Us */}
                <section id="contact-us" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Contact Us
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    If you have any questions about this Privacy Policy or our treatment of your information, please contact us at{" "}
                    <a href="mailto:info@entalogics.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                      info@entalogics.com
                    </a>
                    {" "}or through our{" "}
                    <Link href="/contact-us" className="text-blue-600 dark:text-blue-400 hover:underline">
                      contact page
                    </Link>
                    .
                  </Paragraph>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                    This Privacy Policy is subject to change at any time, and changes will be effective upon posting on our website. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                  </Paragraph>
                </section>
            </div>

              {/* Table of Contents - Sticky Sidebar - Hidden on Mobile */}
              <aside className="hidden lg:block lg:col-span-1">
                <div className="lg:sticky lg:top-24">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Table of Contents
                  </h2>
                  <ul className="space-y-1">
                    {sections.map((section) => (
                      <li key={section.id} className="relative">
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full text-left text-sm transition-colors duration-200 pl-3 ${
                            activeSection === section.id
                              ? "text-blue-600 dark:text-blue-400 font-medium"
                              : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                          }`}
                        >
                          {activeSection === section.id && (
                            <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-600 dark:bg-blue-400"></span>
                          )}
                          {section.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default PrivacyPolicyPage
