import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import Layout from '../src/components/Layout';
import Heading from '../src/components/ui/Heading';
import Paragraph from '../src/components/ui/Paragraph';
import { useState } from 'react';

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      category: 'General',
      questions: [
        {
          question: 'What is Entalogics and what services do you provide?',
          answer: 'Entalogics is a full-stack development agency specializing in custom software, AI applications, and browser development. We provide comprehensive services including SaaS development, AI-powered applications, web development, mobile app development, UI/UX design, Chromium browser development, and ongoing maintenance support.'
        },
        {
          question: 'How long has Entalogics been in business?',
          answer: 'Entalogics was founded in 2019 by Umar Abdullah, bringing over 5 years of experience in full-stack development. We have successfully delivered 100+ projects for startups, scaleups, and enterprises worldwide.'
        },
        {
          question: 'What makes Entalogics different from other development agencies?',
          answer: 'We focus on building scalable products with clean code and business logic baked in. Our team combines technical expertise with business understanding, ensuring your software not only works but also drives real business value. We specialize in AI, SaaS, and custom browser development with a client-focused approach.'
        },
        {
          question: 'Do you work with startups, enterprises, or both?',
          answer: 'We work with all types of clients - from early-stage startups to large enterprises. Our flexible approach allows us to scale our services based on your needs, whether you need an MVP for a startup or a complex enterprise solution.'
        }
      ]
    },
    {
      category: 'Services',
      questions: [
        {
          question: 'What technologies do you use for development?',
          answer: 'We use modern, proven technologies including React, Next.js, TypeScript, Node.js, Python, Flutter, React Native, PostgreSQL, Docker, and more. Our tech stack is chosen based on your specific requirements and long-term scalability needs.'
        },
        {
          question: 'Do you provide AI development services?',
          answer: 'Yes, we specialize in AI-powered applications including custom LLM integrations, agent workflows, OpenAI and DeepSeek implementations, vector databases, LangChain, and full AI app lifecycle development from strategy to deployment.'
        },
        {
          question: 'Can you build custom Chromium browsers?',
          answer: 'Absolutely! We develop custom Chromium and Brave-based browsers for privacy, crypto, enterprise use, and specialized applications. This includes custom UI, search engines, extensions, VPN integration, and multi-platform support.'
        },
        {
          question: 'Do you offer UI/UX design services?',
          answer: 'Yes, we provide complete UI/UX design services including wireframes, prototypes, user flows, design systems, accessibility audits, and design handoff. Our design team ensures your product is both beautiful and conversion-focused.'
        }
      ]
    },
    {
      category: 'Process & Timeline',
      questions: [
        {
          question: 'What is your typical development process?',
          answer: 'Our process includes: 1) Requirements analysis and planning, 2) Architecture design, 3) Development sprints with regular updates, 4) Testing and quality assurance, 5) Deployment and launch, 6) Ongoing support and maintenance. We maintain transparent communication throughout.'
        },
        {
          question: 'How long does a typical project take?',
          answer: 'Project timelines vary based on complexity: SaaS platforms (8-16 weeks), AI applications (6-12 weeks), web applications (6-12 weeks), mobile apps (10-18 weeks), custom browsers (12-20 weeks). We provide detailed timelines during the planning phase.'
        },
        {
          question: 'Do you provide project updates during development?',
          answer: 'Yes, we provide regular updates through your preferred communication method - weekly progress reports, demo sessions, and real-time project tracking. You can also schedule calls with our team anytime to discuss progress or changes.'
        },
        {
          question: 'Can you work with our existing team?',
          answer: 'Absolutely! We can integrate with your existing development team, provide technical leadership, or work as an extension of your team. We adapt our collaboration style to fit your needs and workflows.'
        }
      ]
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          question: 'How do you price your services?',
          answer: 'We offer flexible pricing models: fixed-price projects for well-defined scopes, hourly rates for ongoing work, and retainer agreements for long-term partnerships. Pricing depends on project complexity, timeline, and specific requirements.'
        },
        {
          question: 'Do you provide free consultations?',
          answer: 'Yes, we offer free initial consultations to understand your project requirements, discuss technical approaches, and provide preliminary estimates. This helps both parties determine if we\'re a good fit for your project.'
        },
        {
          question: 'What payment terms do you offer?',
          answer: 'We typically work with milestone-based payments for larger projects, monthly billing for ongoing work, and flexible payment terms based on project duration. We accept various payment methods and can accommodate different billing cycles.'
        },
        {
          question: 'Do you offer maintenance and support packages?',
          answer: 'Yes, we provide comprehensive maintenance and support packages including 24/7 monitoring, security updates, performance optimization, feature enhancements, and technical support. Packages are tailored to your specific needs.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'Do you follow security best practices?',
          answer: 'Security is a top priority. We implement industry-standard security practices including SSL encryption, secure authentication, data protection, regular security audits, and compliance with relevant regulations like GDPR and SOC 2.'
        },
        {
          question: 'Can you help with deployment and hosting?',
          answer: 'Yes, we handle complete deployment and hosting setup including cloud infrastructure, CI/CD pipelines, domain configuration, SSL certificates, and ongoing server management. We work with major cloud providers like AWS, Google Cloud, and Azure.'
        },
        {
          question: 'Do you provide code documentation and handover?',
          answer: 'Absolutely! We provide comprehensive documentation including code comments, API documentation, deployment guides, and knowledge transfer sessions. We ensure your team can maintain and extend the codebase after handover.'
        },
        {
          question: 'What if we need changes after the project is complete?',
          answer: 'We offer post-launch support and can implement changes, bug fixes, and new features. We provide maintenance packages and are available for ongoing development work to ensure your software continues to meet your evolving needs.'
        }
      ]
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(category => 
      category.questions.map(q => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      }))
    )
  };

  return (
    <Layout
      canonicalPath="/faq"
      seo={{
        title: "Frequently Asked Questions | Software Development | Entalogics",
        description: "Find answers to common questions about our software development services, AI applications, SaaS development, pricing, process, and technical capabilities. Get insights from our expert team.",
        keywords: "FAQ, frequently asked questions, software development FAQ, AI development questions, SaaS development FAQ, web development questions, mobile app development FAQ, pricing questions, development process, technical questions, Entalogics FAQ",
        image: "https://entalogics.com/assets/og-faq.jpg",
        type: "website",
        structuredData
      }}
    >
      <div className="min-h-screen bg-white dark:bg-[#0a1225] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-full px-4 py-2 mb-6">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">FAQ</span>
            </div>
            
            <Heading level={1} className="mb-6">
              Frequently Asked Questions
            </Heading>
            
            <Paragraph size="lg" className="max-w-3xl mx-auto mb-8">
              Find answers to common questions about our software development services, 
              process, pricing, and technical capabilities.
            </Paragraph>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* FAQ Content */}
          <div className="space-y-8">
            {filteredData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4">
                  <Heading level={3} className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.category}
                  </Heading>
                </div>
                
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = faqData.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.questions.length, 0) + itemIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div key={itemIndex} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          <span className="font-medium text-gray-900 dark:text-white pr-4">
                            {item.question}
                          </span>
                          <ChevronDown 
                            className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{ height: isOpen ? 'auto' : 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4">
                            <Paragraph className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {item.answer}
                            </Paragraph>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <Heading level={2} className="mb-4">
              Still have questions?
            </Heading>
            <Paragraph className="mb-6 text-gray-600 dark:text-gray-300">
              Can't find what you're looking for? Our team is here to help.
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Contact Us
              </a>
              <a
                href="/quote"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
