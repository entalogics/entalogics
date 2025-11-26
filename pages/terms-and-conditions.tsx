"use client"

import React, { useState, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import { Home } from "lucide-react"
import Layout from "../src/components/Layout"
import Heading from "../src/components/ui/Heading"
import Paragraph from "../src/components/ui/Paragraph"

const TermsAndConditionsPage = () => {
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "acceptance", title: "Acceptance of Terms" },
    { id: "services", title: "Our Services" },
    { id: "use-of-services", title: "Use of Our Services" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "payment", title: "Payment Terms" },
    { id: "confidentiality", title: "Confidentiality" },
    { id: "warranties", title: "Warranties and Disclaimers" },
    { id: "limitation", title: "Limitation of Liability" },
    { id: "termination", title: "Termination" },
    { id: "modifications", title: "Modifications" },
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
        <title>Terms & Conditions | Service Agreement | Entalogics</title>
        <meta name="description" content="Read Entalogics' Terms and Conditions to understand the terms of service, user agreements, and legal policies for our software development services." />
        <meta name="keywords" content="terms and conditions, service agreement, user terms, legal terms, software development terms, Entalogics terms, service conditions, user agreement" />
        <meta name="author" content="Entalogics" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://entalogics.com/terms-and-conditions" />
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
              <span className="text-gray-900 dark:text-white">Terms & Conditions</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3 w-full">
                {/* Title */}
                <div className="mb-8">
                  <Heading level={1} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                    Terms & Conditions
                  </Heading>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Last Modified: January, 2025
                  </p>
                </div>

                {/* Introduction */}
                <section id="introduction" className="mb-8">
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Welcome to Entalogics, a software development company that provides custom software development, web applications, mobile apps, AI solutions, and related IT services ("Services"). By using our Services or visiting our website, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with these Terms, please do not use our Services.
                  </Paragraph>
                </section>

                {/* Acceptance of Terms */}
                <section id="acceptance" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Acceptance of Terms
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.
                  </Paragraph>
                </section>

                {/* Our Services */}
                <section id="services" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Our Services
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Entalogics provides the following services:
                  </Paragraph>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li>Custom software development and web application development</li>
                    <li>Mobile app development for iOS and Android platforms</li>
                    <li>AI-powered applications and machine learning solutions</li>
                    <li>SaaS product development and cloud solutions</li>
                    <li>Custom browser development based on Chromium</li>
                    <li>UI/UX design services</li>
                    <li>DevOps and cloud infrastructure services</li>
                    <li>Software maintenance and support services</li>
                  </ul>
                </section>

                {/* Use of Our Services */}
                <section id="use-of-services" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Use of Our Services
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
                  </Paragraph>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li>Use our Services in any way that violates applicable laws or regulations</li>
                    <li>Infringe upon the rights of any third party, including intellectual property rights</li>
                    <li>Interfere with or disrupt the operation of our Services or servers</li>
                    <li>Attempt to gain unauthorized access to our Services, systems, or networks</li>
                    <li>Use our Services to transmit any malicious code, viruses, or harmful data</li>
                    <li>Use automated systems to access our Services without our prior written consent</li>
                  </ul>
                </section>

                {/* Intellectual Property */}
                <section id="intellectual-property" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Intellectual Property
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    All content, materials, and intellectual property on our website and Services, including but not limited to text, graphics, logos, images, software, code, and designs, are the property of Entalogics or our licensors and are protected by copyright, trademark, and other intellectual property laws.
                  </Paragraph>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Unless otherwise specified in a separate agreement, all work product, code, and deliverables created by Entalogics for you shall be owned by you upon full payment. However, Entalogics retains the right to use general knowledge, skills, and experience gained during the project for other projects.
                  </Paragraph>
                </section>

                {/* Payment Terms */}
                <section id="payment" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Payment Terms
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Payment terms will be specified in individual service agreements or project contracts. Generally:
                  </Paragraph>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li>Payment is due according to the schedule specified in your service agreement</li>
                    <li>Late payments may incur interest charges as specified in the agreement</li>
                    <li>All prices are exclusive of applicable taxes unless otherwise stated</li>
                    <li>We reserve the right to suspend services for non-payment</li>
                    <li>Refunds, if applicable, will be processed according to the terms of your specific agreement</li>
                  </ul>
                </section>

                {/* Confidentiality */}
                <section id="confidentiality" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Confidentiality
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of our engagement. This includes business information, technical specifications, project details, and any other sensitive information. Confidentiality obligations shall survive termination of our services.
                  </Paragraph>
                </section>

                {/* Warranties and Disclaimers */}
                <section id="warranties" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Warranties and Disclaimers
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Our Services are provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding:
                  </Paragraph>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li>The uninterrupted or error-free operation of our Services</li>
                    <li>The accuracy, completeness, or reliability of any information provided</li>
                    <li>The suitability of our Services for any particular purpose</li>
                    <li>The security of data transmission over the internet</li>
                  </ul>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                    We do not guarantee that our Services will meet all your requirements or that any errors will be corrected. You use our Services at your own risk.
                  </Paragraph>
                </section>

                {/* Limitation of Liability */}
                <section id="limitation" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Limitation of Liability
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    To the maximum extent permitted by law, Entalogics shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our Services. Our total liability shall not exceed the amount you paid to us in the twelve months preceding the claim.
                  </Paragraph>
                </section>

                {/* Termination */}
                <section id="termination" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Termination
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We reserve the right to terminate or suspend your access to our Services at any time, with or without cause or notice, for any reason, including if you violate these Terms. You may terminate your use of our Services at any time by discontinuing use and notifying us. Upon termination, your right to use our Services will immediately cease, and you must destroy all copies of any materials obtained from our Services.
                  </Paragraph>
                </section>

                {/* Modifications */}
                <section id="modifications" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Modifications
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We reserve the right to modify or discontinue our Services, or change these Terms, at any time without prior notice. We may also update these Terms periodically, and the "Last Modified" date will reflect the most recent changes. Your continued use of our Services after any changes constitutes acceptance of the modified Terms. We encourage you to review these Terms regularly.
                  </Paragraph>
                </section>

                {/* Contact Us */}
                <section id="contact-us" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Contact Us
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    If you have any questions about these Terms and Conditions, please contact us at{" "}
                    <a href="mailto:info@entalogics.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                      info@entalogics.com
                    </a>
                    {" "}or through our{" "}
                    <Link href="/contact-us" className="text-blue-600 dark:text-blue-400 hover:underline">
                      contact page
                    </Link>
                    .
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

export default TermsAndConditionsPage
