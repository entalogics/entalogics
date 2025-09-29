import React from "react"
import Head from "next/head"
import Layout from "../src/components/Layout"
import TypewriterCTA from "../src/components/TypewriterCTA"

const GDPRPage = () => {

  return (
    <>
      <Head>
        <title>GDPR Compliance | Data Protection | Entalogics</title>
        <meta name="description" content="Learn about Entalogics' GDPR compliance and data protection measures. We ensure your personal data is secure and handled according to EU regulations." />
        <meta name="keywords" content="GDPR compliance, data protection, privacy regulations, EU data law, personal data security, Entalogics GDPR, data privacy, GDPR compliance software development" />
        <meta name="author" content="Entalogics" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GDPR Compliance | Data Protection | Entalogics" />
        <meta property="og:description" content="Learn about Entalogics' GDPR compliance and data protection measures. We ensure your personal data is secure and handled according to EU regulations." />
        <meta property="og:url" content="https://entalogics.com/gdpr" />
        <meta property="og:site_name" content="Entalogics" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="GDPR Compliance | Data Protection | Entalogics" />
        <meta name="twitter:description" content="Learn about Entalogics' GDPR compliance and data protection measures." />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://entalogics.com/gdpr" />
        <meta name="theme-color" content="#3b82f6" />
        
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Layout>
        <style jsx>{`
          .outline-text {
            -webkit-text-stroke: 1px black;
            color: transparent;
          }
          .dark .outline-text {
            -webkit-text-stroke: 1px white;
            color: transparent;
          }
        `}</style>
        <div className="min-h-screen bg-background dark:bg-[#0b1327] text-foreground dark:text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-16">
            {/* Simple Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              GDPR
            </h1>
            
            {/* Main Content - Simple Text */}
            <div className="space-y-6 text-gray-500 dark:text-gray-400 leading-relaxed">
              <p>
                The General Data Protection Regulation (EU) 2016/679 (GDPR) is a <span className="text-black dark:text-white font-medium dark:font-normal">regulation</span> in EU law on <span className="text-black dark:text-white font-medium dark:font-normal">data protection</span> and <span className="text-black dark:text-white font-medium dark:font-normal">privacy</span> in the European Union (EU) and the European Economic Area (EEA). It also addresses the transfer of <span className="text-black dark:text-white font-medium dark:font-normal">personal data</span> outside the EU and EEA areas. The GDPR's primary aim is to give individuals control over their personal data and to simplify the regulatory environment for <span className="text-black dark:text-white font-medium dark:font-normal">international business</span> by unifying the regulation within the EU.<sup>[1]</sup> Superseding the Data Protection Directive 95/46/EC, the regulation contains provisions and requirements related to the processing of personal data of individuals (formally called <span className="text-black dark:text-white font-medium dark:font-normal">data subjects</span> in the GDPR) who are located in the EEA, and applies to any enterprise—regardless of its location and the data subjects' citizenship or residence—that is processing the personal information of individuals inside the EEA.<sup>a</sup>
              </p>

              <p>
                Controllers and processors of personal data must put in place <span className="text-black dark:text-white font-medium dark:font-normal">appropriate technical and organizational measures</span> to implement the data protection principles. Business processes that handle personal data must be designed and built with consideration of the principles and provide safeguards to protect data (for example, using <span className="text-black dark:text-white font-medium dark:font-normal">pseudonymization</span> or full <span className="text-black dark:text-white font-medium dark:font-normal">anonymization</span> where appropriate). Data controllers must design information systems with privacy in mind. For instance, using the highest-possible privacy settings by default, so that the datasets are not publicly available by default and cannot be used to identify a subject. No personal data may be processed unless this processing is done under one of the six lawful bases specified by the regulation (<span className="text-black dark:text-white font-medium dark:font-normal">consent</span>, <span className="text-black dark:text-white font-medium dark:font-normal">contract</span>, <span className="text-black dark:text-white font-medium dark:font-normal">public task</span>, <span className="text-black dark:text-white font-medium dark:font-normal">vital interest</span>, <span className="text-black dark:text-white font-medium dark:font-normal">legitimate interest</span> or <span className="text-black dark:text-white font-medium dark:font-normal">legal requirement</span>). When the processing is based on consent the data subject has the right to revoke it at any time.
              </p>

              <p>
                Data controllers must clearly disclose any <span className="text-black dark:text-white font-medium dark:font-normal">data collection</span>, declare the lawful basis and purpose for data processing, and state how long data is being retained and if it is being shared with any third parties or outside of the EEA. Firms have the obligation to protect data of employees and consumers to the degree where only the necessary data is extracted with minimum interference with data privacy from employees, consumers, or third parties. Firms should have internal controls and regulations for various departments such as audit, internal controls, and operations. Data subjects have the right to request a <span className="text-black dark:text-white font-medium dark:font-normal">portable</span> copy of the data collected by a controller in a common format, and the right to have their <span className="text-black dark:text-white font-medium dark:font-normal">data erased</span> under certain circumstances. Public authorities, and businesses whose core activities consist of regular or systematic processing of personal data, are required to employ a <span className="text-black dark:text-white font-medium dark:font-normal">data protection officer (DPO)</span>, who is responsible for managing compliance with the GDPR. Businesses must report <span className="text-black dark:text-white font-medium dark:font-normal">data breaches</span> to national supervisory authorities within <span className="text-black dark:text-white font-medium dark:font-normal">72 hours</span> if they have an adverse effect on user privacy. In some cases, violators of the GDPR may be fined up to <span className="text-black dark:text-white font-medium dark:font-normal">€20 million</span> or up to <span className="text-black dark:text-white font-medium dark:font-normal">4%</span> of the annual worldwide turnover of the preceding financial year in case of an enterprise, whichever is greater.
              </p>

              <p>
                The GDPR was adopted on <span className="text-black dark:text-white font-medium dark:font-normal">14 April 2016</span>, and became enforceable beginning <span className="text-black dark:text-white font-medium dark:font-normal">25 May 2018</span>. As the GDPR is a <span className="text-black dark:text-white font-medium dark:font-normal">regulation</span>, not a <span className="text-black dark:text-white font-medium dark:font-normal">directive</span>, it is directly binding and applicable, but does provide flexibility for certain aspects of the regulation to be adjusted by individual member states.
              </p>

              <p>
                The regulation became a model for many national laws outside EU, including Chile, Japan, Brazil, South Korea, Argentina and Kenya. The <span className="text-black dark:text-white font-medium dark:font-normal">California Consumer Privacy Act (CCPA)</span>, adopted on <span className="text-black dark:text-white font-medium dark:font-normal">28 June 2018</span>, has many similarities with the GDPR.<sup>[2]</sup>
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

export default GDPRPage
