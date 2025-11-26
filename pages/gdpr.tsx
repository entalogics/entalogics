"use client"

import React, { useState, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import { Home } from "lucide-react"
import Layout from "../src/components/Layout"
import Heading from "../src/components/ui/Heading"
import Paragraph from "../src/components/ui/Paragraph"

const GDPRPage = () => {
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "our-commitment", title: "Our Commitment to GDPR" },
    { id: "your-rights", title: "Your Rights Under GDPR" },
    { id: "data-collection", title: "Data Collection" },
    { id: "legal-basis", title: "Legal Basis for Processing" },
    { id: "data-security", title: "Data Security" },
    { id: "data-retention", title: "Data Retention" },
    { id: "data-breaches", title: "Data Breaches" },
    { id: "international-transfers", title: "International Data Transfers" },
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
        <title>GDPR Compliance | Data Protection | Entalogics</title>
        <meta name="description" content="Learn about Entalogics' GDPR compliance and data protection measures. We ensure your personal data is secure and handled according to EU regulations." />
        <meta name="keywords" content="GDPR compliance, data protection, privacy regulations, EU data law, personal data security, Entalogics GDPR, data privacy, GDPR compliance software development" />
        <meta name="author" content="Entalogics" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://entalogics.com/gdpr" />
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
              <span className="text-gray-900 dark:text-white">GDPR</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3 w-full">
                {/* Title */}
                <div className="mb-8">
                  <Heading level={1} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                    GDPR Compliance
                  </Heading>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Last Modified: January, 2025
                  </p>
                </div>

                {/* Introduction */}
                <section id="introduction" className="mb-8">
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The General Data Protection Regulation (EU) 2016/679 (GDPR) is a regulation in EU law on data protection and privacy in the European Union (EU) and the European Economic Area (EEA). Entalogics is committed to ensuring full compliance with GDPR and protecting the privacy rights of all individuals whose personal data we process.
                  </Paragraph>
                </section>

                {/* Our Commitment to GDPR */}
                <section id="our-commitment" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Our Commitment to GDPR
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Entalogics is committed to protecting the personal data of our clients, employees, and website visitors in accordance with GDPR requirements. We implement appropriate technical and organizational measures to ensure data protection by design and by default, and we regularly review and update our data protection practices to maintain compliance.
                  </Paragraph>
                </section>

                {/* Your Rights Under GDPR */}
                <section id="your-rights" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Your Rights Under GDPR
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Under GDPR, you have the following rights regarding your personal data:
                  </Paragraph>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li><strong>Right to Access:</strong> You have the right to request access to your personal data and receive a copy of the data we hold about you.</li>
                    <li><strong>Right to Rectification:</strong> You have the right to request correction of inaccurate or incomplete personal data.</li>
                    <li><strong>Right to Erasure:</strong> You have the right to request deletion of your personal data under certain circumstances.</li>
                    <li><strong>Right to Restrict Processing:</strong> You have the right to request restriction of processing of your personal data.</li>
                    <li><strong>Right to Data Portability:</strong> You have the right to receive your personal data in a structured, commonly used format.</li>
                    <li><strong>Right to Object:</strong> You have the right to object to processing of your personal data for certain purposes.</li>
                    <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you have the right to withdraw consent at any time.</li>
                  </ul>
                </section>

                {/* Data Collection */}
                <section id="data-collection" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Data Collection
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We collect personal data only when necessary for providing our services or when you have given explicit consent. We clearly inform you about what data we collect, why we collect it, and how we use it. We minimize data collection to only what is necessary for the specified purposes.
                  </Paragraph>
                </section>

                {/* Legal Basis for Processing */}
                <section id="legal-basis" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Legal Basis for Processing
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    We process personal data based on one or more of the following legal bases:
                  </Paragraph>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li><strong>Consent:</strong> When you have given clear consent for specific processing activities</li>
                    <li><strong>Contract:</strong> When processing is necessary for the performance of a contract with you</li>
                    <li><strong>Legal Obligation:</strong> When processing is necessary to comply with legal obligations</li>
                    <li><strong>Legitimate Interests:</strong> When processing is necessary for our legitimate business interests, provided these do not override your rights and freedoms</li>
                  </ul>
                </section>

                {/* Data Security */}
                <section id="data-security" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Data Security
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, regular security audits, staff training, and secure data transmission protocols. We regularly review and update our security measures to address emerging threats.
                  </Paragraph>
                </section>

                {/* Data Retention */}
                <section id="data-retention" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Data Retention
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. When personal data is no longer needed, we securely delete or anonymize it in accordance with our data retention policies and GDPR requirements.
                  </Paragraph>
                </section>

                {/* Data Breaches */}
                <section id="data-breaches" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Data Breaches
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the event of a personal data breach that is likely to result in a risk to your rights and freedoms, we will notify the relevant supervisory authority within 72 hours of becoming aware of the breach, where feasible. If the breach is likely to result in a high risk to your rights and freedoms, we will also notify you without undue delay.
                  </Paragraph>
                </section>

                {/* International Data Transfers */}
                <section id="international-transfers" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    International Data Transfers
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    When we transfer personal data outside the EEA, we ensure appropriate safeguards are in place, such as standard contractual clauses approved by the European Commission, adequacy decisions, or other legally recognized transfer mechanisms. We ensure that your personal data receives an adequate level of protection regardless of where it is processed.
                  </Paragraph>
                </section>

                {/* Contact Us */}
                <section id="contact-us" className="mb-8">
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Contact Us
                  </Heading>
                  <Paragraph size="md" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    If you have any questions about our GDPR compliance, wish to exercise your rights under GDPR, or have concerns about how we handle your personal data, please contact us at{" "}
                    <a href="mailto:info@entalogics.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                      info@entalogics.com
                    </a>
                    {" "}or through our{" "}
                    <Link href="/contact-us" className="text-blue-600 dark:text-blue-400 hover:underline">
                      contact page
                    </Link>
                    . We will respond to your request within one month.
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

export default GDPRPage
