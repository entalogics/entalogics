import React from "react"
import Head from "next/head"
import Layout from "../src/components/Layout"
import TypewriterCTA from "../src/components/TypewriterCTA"

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Data Protection | Entalogics</title>
        <meta name="description" content="Read Entalogics' Privacy Policy to understand how we collect, use, and protect your personal data. Learn about our data protection practices and your privacy rights." />
        <meta name="keywords" content="privacy policy, data protection, personal information, privacy rights, data collection, data usage, Entalogics privacy, user privacy, data security" />
        <meta name="author" content="Entalogics" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Privacy Policy | Data Protection | Entalogics" />
        <meta property="og:description" content="Read Entalogics' Privacy Policy to understand how we collect, use, and protect your personal data." />
        <meta property="og:url" content="https://entalogics.com/privacy-policy" />
        <meta property="og:site_name" content="Entalogics" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy | Data Protection | Entalogics" />
        <meta name="twitter:description" content="Read Entalogics' Privacy Policy to understand how we collect, use, and protect your personal data." />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://entalogics.com/privacy-policy" />
        <meta name="theme-color" content="#3b82f6" />
        
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Layout>
        <div className="min-h-screen bg-background dark:bg-[#0b1327] text-foreground dark:text-white">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-4 md:py-16">
            {/* Simple Title with Gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            
            {/* Main Content - Simple Text */}
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                At Entalogics, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our websites and online services, including mobile applications ("Services").
              </p>

              <p>
                By using our Services, you agree to the collection, use, and sharing of your information as described in this Privacy Policy. If you do not agree with our policies and practices, do not use our Services.
              </p>

              <p>
                Information We Collect
              </p>
              <p className="mb-3">
                We may collect personal information such as your name, email address, phone number, demographic information, technical information including your IP address and device type, location information, and information about your use of our Services. We may collect this information directly from you, or we may collect it automatically as you use our Services.
              </p>

              <p>
                How We Use Your Information
              </p>
              <p className="mb-3">
                We may use the information we collect about you to provide and improve our Services, communicate with you such as sending updates or newsletters, personalize your experience on our Services, analyze and understand how our Services are used, and enforce our policies and terms of use.
              </p>

              <p>
                Sharing Your Information
              </p>
              <p className="mb-3">
                We may share your information with service providers and business partners who perform services on our behalf, with law enforcement or in response to legal process, and with other users of our Services if you choose to share information with them. We may also share aggregated or de-identified information that does not directly identify you.
              </p>

              <p>
                Your Choices and Rights
              </p>
              <p>
                You can choose not to provide personal information to us, though this may limit your ability to use some of our Services. You can update or delete your personal information at any time by contacting us. You can opt out of receiving marketing communications from us by following the unsubscribe instructions in the communications we send you. You can exercise your rights under applicable data protection laws, including the right to request access to, correction of, or deletion of your personal information.
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

export default PrivacyPolicyPage
