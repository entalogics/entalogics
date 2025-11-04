import React from "react"
import Head from "next/head"
import Layout from "../src/components/Layout"
import TypewriterCTA from "../src/components/TypewriterCTA"

const TermsAndConditionsPage = () => {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Service Agreement | Entalogics</title>
        <meta name="description" content="Read Entalogics' Terms and Conditions to understand the terms of service, user agreements, and legal policies for our software development services." />
        <meta name="keywords" content="terms and conditions, service agreement, user terms, legal terms, software development terms, Entalogics terms, service conditions, user agreement" />
        <meta name="author" content="Entalogics" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Terms & Conditions | Service Agreement | Entalogics" />
        <meta property="og:description" content="Read Entalogics' Terms and Conditions to understand the terms of service and legal policies." />
        <meta property="og:url" content="https://entalogics.com/terms-and-conditions" />
        <meta property="og:site_name" content="Entalogics" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Terms & Conditions | Service Agreement | Entalogics" />
        <meta name="twitter:description" content="Read Entalogics' Terms and Conditions to understand the terms of service and legal policies." />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://entalogics.com/terms-and-conditions" />
        <meta name="theme-color" content="#3b82f6" />
        
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Layout>
        <div className="min-h-screen bg-background dark:bg-[#0b1327] text-foreground dark:text-white">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-4 md:py-16">
            {/* Simple Title with Gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Terms & Conditions
            </h1>
            
            {/* Main Content - Simple Text */}
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Welcome to Entalogics, a software development company that provides online services and mobile applications ("Services"). By using our Services, you agree to be bound by these terms and conditions ("Terms"). If you do not agree with these Terms, do not use our Services.
              </p>

              <p>
                Use of Our Services
              </p>
              <p className="mb-3">
                You may use our Services only for lawful purposes and in accordance with these Terms. You may not use our Services in any way that violates any applicable federal, state, or local laws or regulations, infringes the rights of any third party, or interferes with the operation of our Services. You are responsible for all activities that occur under your account and for keeping your account password secure. If you become aware of any unauthorized use of your account, you should notify us immediately.
              </p>

              <p>
                Intellectual Property
              </p>
              <p className="mb-3">
                Our Services and all content and materials included on them, such as text, graphics, logos, images, and software, are the property of Entalogics or our licensors and are protected by copyright and trademark laws. You may not use any content or materials on our Services for any commercial purpose without the express written consent of Entalogics.
              </p>

              <p>
                Modification of Services and Termination
              </p>
              <p className="mb-3">
                We reserve the right to modify or discontinue our Services at any time, without notice to you. We will not be liable to you or any third party for any modification, suspension, or discontinuation of our Services. We may terminate your access to our Services at any time, without notice, for any reason, including if you violate these Terms. Upon termination, you must destroy all copies of any materials you have obtained from our Services.
              </p>

              <p>
                Disclaimer of Warranties
              </p>
              <p>
                Our Services are provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, as to the operation of our Services or the information, content, materials, or products included on them. We do not warrant that our Services will be uninterrupted or error-free.
              </p>
            </div>

            {/* Typewriter CTA Section */}
            <TypewriterCTA />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default TermsAndConditionsPage
