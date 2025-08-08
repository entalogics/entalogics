import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { servicesData } from '../../src/data/servicesData';
import Contact from '../../src/components/Contact';
import Layout from '../../src/components/Layout';
import Head from 'next/head';

const ServicePage = () => {
  const router = useRouter();
  const { serviceSlug } = router.query;
  const service = servicesData[serviceSlug];
  // Custom content for each service
  const customContent = {
    'saas-development': {
      headline: 'SaaS Product Development',
      description: 'Launch, scale, and automate your SaaS business with a team that handles everything: dashboards, billing, onboarding, and more. We build SaaS platforms that are robust, secure, and ready for growth.',
      features: [
        'Multi-tenant architecture for scale',
        'Automated billing and subscription management',
        'User onboarding flows and role-based access',
        'API integrations with third-party services',
        'Growth-ready infrastructure and analytics',
      ],
      process: [
        'Requirements analysis',
        'Architecture design',
        'Core development',
        'Testing & optimization',
        'Deployment & support',
      ],
      ogImage: 'https://entalogics.com/assets/og-saas.jpg',
    },
    'ai-apps': {
      headline: 'AI-Powered Apps & Platforms',
      description: 'From custom LLM apps to agent-powered dashboards, we build AI-native tools that drive real business value. Integrate OpenAI, DeepSeek, and more into your workflows.',
      features: [
        'Agent dashboards and automation',
        'OpenAI, DeepSeek, and custom model integration',
        'Prompt engineering and workflow design',
        'Vector DBs, LangChain, and advanced AI stacks',
        'Full AI app lifecycle: strategy, build, deploy',
      ],
      process: [
        'AI strategy planning',
        'Model integration',
        'Workflow development',
        'Testing & optimization',
        'Deployment & monitoring',
      ],
      ogImage: 'https://entalogics.com/assets/og-ai.jpg',
    },
    'web-development': {
      headline: 'Web App Development',
      description: 'Build pixel-perfect, SEO-ready, and blazing-fast web apps using modern stacks like Next.js, React, and Vue. We deliver web applications that drive results and scale with your business.',
      features: [
        'Landing pages, portals, and dashboards',
        'API connectivity and backend integration',
        'Responsive design and accessibility',
        'SEO optimization and analytics',
        'Performance-focused builds',
      ],
      process: [
        'Discovery & planning',
        'UI/UX design',
        'Frontend development',
        'Backend integration',
        'Testing & launch',
      ],
      ogImage: 'https://entalogics.com/assets/og-web.jpg',
    },
    'mobile-apps': {
      headline: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps built with Flutter and React Native. We create mobile experiences that users love, with native performance and App Store optimization.',
      features: [
        'Strategy, design, and development included',
        'App Store and Play Store optimization',
        'Push notifications and user engagement',
        'Cross-platform builds for iOS and Android',
        'Native performance and smooth UX',
      ],
      process: [
        'Platform strategy',
        'UI/UX design',
        'Native development',
        'Testing & QA',
        'Store deployment',
      ],
      ogImage: 'https://entalogics.com/assets/og-mobile.jpg',
    },
    'browser-development': {
      headline: 'Chromium & Browser Development',
      description: 'Custom browsers for privacy, crypto, AI, or enterprise use. We build and modify Chromium-based browsers tailored for your needs, including custom UI, search engine, and feature integrations.',
      features: [
        'Chromium and Brave forks',
        'Web3, wallet, and extension support',
        'Custom branding and privacy features',
        'Multi-platform support (Win, Mac, Linux)',
        'Enterprise and AI integrations',
      ],
      process: [
        'Requirements analysis',
        'Architecture design',
        'Core development',
        'Testing & optimization',
        'Deployment & support',
      ],
      ogImage: 'https://entalogics.com/assets/chromium-og.jpg',
    },
    'ui-ux-design': {
      headline: 'UI/UX Design',
      description: 'We create intuitive, clean interfaces that convert. From Figma to functional, our design team ensures your product is beautiful, usable, and conversion-focused.',
      features: [
        'Wireframes, prototypes, and user flows',
        'UX-first thinking and accessibility audits',
        'Component libraries and design systems',
        'Visual design and branding',
        'User testing and iteration',
      ],
      process: [
        'User research',
        'Wireframing',
        'Visual design',
        'Prototyping',
        'User testing',
      ],
      ogImage: 'https://entalogics.com/assets/og-uiux.jpg',
    },
    'desktop-software-development': {
      headline: 'Desktop Software',
      description: 'We build high-performance desktop apps with deep OS integrations. Our desktop applications feel native and run smoothly on Windows, Mac, and Linux.',
      features: [
        'Cross-platform builds (Win, Mac, Linux)',
        'Native OS integration and custom tooling',
        'Enterprise-ready and secure',
        'High performance and seamless updates',
        'Custom features for your workflow',
      ],
      process: [
        'Platform analysis',
        'Architecture design',
        'Core development',
        'OS integration',
        'Distribution setup',
      ],
      ogImage: 'https://entalogics.com/assets/og-desktop.jpg',
    },
    'maintenance-support': {
      headline: 'Maintenance & Support',
      description: 'Keep your software running smoothly with proactive care. We fix issues before you even notice, with 24/7 monitoring, security updates, and performance tuning.',
      features: [
        '24/7 monitoring and proactive support',
        'Security updates and bug fixes',
        'Performance tuning and enhancements',
        'Feature updates and improvements',
        'Regular system health checks',
      ],
      process: [
        'System monitoring',
        'Issue identification',
        'Quick resolution',
        'Performance tuning',
        'Regular updates',
      ],
      ogImage: 'https://entalogics.com/assets/og-support.jpg',
    },
    'web3-trading': {
      headline: 'Web3 & Trading Platforms',
      description: 'We deliver decentralized trading platforms for modern markets, powered by smart contract technology and real-time data. Build the future of trading with Entalogics.',
      features: [
        'Smart contract integration and audits',
        'Real-time market data and analytics',
        'Wallet connectivity and decentralized protocols',
        'Custom trading UIs and dashboards',
        'Security-focused architecture',
      ],
      process: [
        'Requirements analysis',
        'Smart contract development',
        'Platform integration',
        'Testing & security audits',
        'Deployment & support',
      ],
      ogImage: 'https://entalogics.com/assets/og-web3.jpg',
    },
  };

  useEffect(() => {
    if (serviceSlug === 'saas-development' && typeof window !== 'undefined') {
      window.location.href = '/services/saas-development';
    }
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [serviceSlug]);

  if (!service) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold">Service not found</h1>
          <button 
            onClick={() => router.push('/')} 
            className="text-primary-600 dark:text-primary-400 mt-4 inline-block"
          >
            Go back to Home
          </button>
        </div>
      </Layout>
    );
  }

  // Use custom content if available
  const content = customContent[serviceSlug] || {};

  // Special UI for SaaS Product Development
  const isSaaS = serviceSlug === 'saas-development';

  return (
    <Layout>
      <Head>
        <title>SaaS Product Development | Services | Entalogics</title>
        <meta name="description" content="From your idea to a scalable SaaS platform — Entalogics designs, develops, and deploys growth-ready SaaS products with clean architecture, strong logic, and real business goals." />
        <meta property="og:title" content="SaaS Product Development | Services | Entalogics" />
        <meta property="og:description" content="From your idea to a scalable SaaS platform — Entalogics designs, develops, and deploys growth-ready SaaS products with clean architecture, strong logic, and real business goals." />
        <meta property="og:image" content="https://entalogics.com/assets/og-saas.jpg" />
        <meta property="og:url" content={`https://entalogics.com/services/saas-development`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SaaS Product Development | Services | Entalogics" />
        <meta name="twitter:description" content="From your idea to a scalable SaaS platform — Entalogics designs, develops, and deploys growth-ready SaaS products with clean architecture, strong logic, and real business goals." />
        <meta name="twitter:image" content="https://entalogics.com/assets/og-saas.jpg" />
        <link rel="canonical" href={`https://entalogics.com/services/saas-development`} />
      </Head>
      <section className={`relative pt-32 pb-16 min-h-[60vh] ${isSaaS ? 'bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#0a1225] dark:via-[#0a1225] dark:to-blue-900/10' : 'bg-secondary-50 dark:bg-secondary-900'}`}>
        <div className="container-custom max-w-4xl mx-auto px-4 md:px-8">
          <motion.button
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold mb-8 hover:underline"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Services</span>
          </motion.button>

          {isSaaS ? (
            <>
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 via-purple-400 to-blue-600 text-white text-3xl shadow-lg">🚀</span>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">SaaS Product Development</h1>
              </div>
              <p className="text-lg md:text-2xl text-gray-700 dark:text-blue-200 max-w-3xl mb-6 font-semibold">From your idea to a scalable SaaS platform — <span className="text-blue-600 dark:text-blue-400">we design, develop, and deploy it all.</span></p>
              <p className="text-base md:text-lg text-gray-700 dark:text-blue-200 mb-10">At <span className="font-bold text-blue-600 dark:text-blue-400">Entalogics</span>, we don’t just write code — we engineer growth-ready SaaS platforms built around clean architecture, strong logic, and real business goals. Whether you're building a brand-new product or upgrading an existing one, our team works closely with you to bring your SaaS vision to life — <span className="font-semibold text-purple-600 dark:text-purple-400">fast, secure, and beautifully structured</span>.</p>

              {/* What We Offer */}
              <div className="mb-10 p-6 rounded-2xl bg-white/80 dark:bg-blue-900/30 shadow-md border border-blue-100 dark:border-blue-900/40">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 text-xl">🧩</span>
                  <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white">What We Offer — <span className="text-blue-600 dark:text-blue-400">End-to-End SaaS Development</span></h2>
                </div>
                <p className="mb-6 text-base md:text-lg text-gray-700 dark:text-blue-200">We handle every piece of the SaaS puzzle so you don’t have to juggle multiple teams or freelancers.</p>
                <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 text-white text-lg">1</span>
                    <div>
                      <h3 className="font-semibold text-lg md:text-xl mb-1 text-blue-700 dark:text-blue-300">Multi-Tenant Architecture</h3>
                      <p className="text-gray-700 dark:text-blue-200">We design flexible and secure multi-tenant systems — perfect for platforms that serve multiple organizations or user bases. From role-based permissions to isolated data layers, everything is structured for scale.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 text-white text-lg">2</span>
                    <div>
                      <h3 className="font-semibold text-lg md:text-xl mb-1 text-blue-700 dark:text-blue-300">Authentication & User Management</h3>
                      <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-blue-200 space-y-1">
                        <li>Email, Google, Apple logins</li>
                        <li>Magic links, OTP, and 2FA integration</li>
                        <li>Onboarding flows with guided tutorials</li>
                        <li>Role management & team invites</li>
                        <li>Password recovery, SSO, and user sessions</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 text-white text-lg">3</span>
                    <div>
                      <h3 className="font-semibold text-lg md:text-xl mb-1 text-blue-700 dark:text-blue-300">Dashboards & Admin Panels</h3>
                      <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-blue-200 space-y-1">
                        <li>Data-rich analytics panels</li>
                        <li>Admin portals to control everything</li>
                        <li>Billing dashboards with Stripe integration</li>
                        <li>Usage reports, feature toggles, and more</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 text-white text-lg">4</span>
                    <div>
                      <h3 className="font-semibold text-lg md:text-xl mb-1 text-blue-700 dark:text-blue-300">Subscriptions & Payments</h3>
                      <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-blue-200 space-y-1">
                        <li>One-time and recurring payments</li>
                        <li>Stripe, Paddle, Razorpay, or custom gateways</li>
                        <li>Multi-currency & invoice management</li>
                        <li>Coupon support, trials, billing logic</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 text-white text-lg">5</span>
                    <div>
                      <h3 className="font-semibold text-lg md:text-xl mb-1 text-blue-700 dark:text-blue-300">APIs & Webhooks</h3>
                      <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-blue-200 space-y-1">
                        <li>RESTful and GraphQL APIs</li>
                        <li>Custom internal APIs with rate limiting</li>
                        <li>Webhook triggers for external integrations</li>
                        <li>Secure token-based access controls</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & Compliance */}
              <div className="mb-10 p-6 rounded-2xl bg-white/80 dark:bg-blue-900/30 shadow-md border border-blue-100 dark:border-blue-900/40">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 text-xl">🔐</span>
                  <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white">Security & Compliance</h2>
                </div>
                <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-blue-200 space-y-1">
                  <li>OWASP-protected architecture</li>
                  <li>Activity logs & audit trails</li>
                  <li>Secure API tokens and user sessions</li>
                  <li>GDPR-ready user data flows</li>
                  <li>Role-based access to sensitive actions</li>
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-10 p-6 rounded-2xl bg-white/80 dark:bg-blue-900/30 shadow-md border border-blue-100 dark:border-blue-900/40">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 text-xl">📦</span>
                  <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white">Tech Stack We Use</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Frontend</h4>
                    <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-blue-200 space-y-1">
                      <li>React.js / Next.js</li>
                      <li>Tailwind CSS / Chakra UI</li>
                      <li>TypeScript / SWR / TanStack Query</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Backend</h4>
                    <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-blue-200 space-y-1">
                      <li>Node.js / Express</li>
                      <li>Python / FastAPI</li>
                      <li>Supabase / Firebase / PostgreSQL / MongoDB</li>
                      <li>Redis for caching</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Infrastructure</h4>
                    <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-blue-200 space-y-1">
                      <li>Dockerized deploys</li>
                      <li>Vercel / Railway / AWS / GCP</li>
                      <li>GitHub Actions CI/CD</li>
                      <li>Domain, subdomain, email, & SSL setup</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-10 p-6 rounded-2xl bg-white/80 dark:bg-blue-900/30 shadow-md border border-blue-100 dark:border-blue-900/40">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 text-xl">💡</span>
                  <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white">Use Cases We Specialize In</h2>
                </div>
                <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-blue-200 space-y-1">
                  <li>B2B SaaS dashboards (admin portals, analytics, reports)</li>
                  <li>Marketplaces and membership platforms</li>
                  <li>SaaS CRMs, HR tools, team managers</li>
                  <li>Internal productivity platforms</li>
                  <li>AI-integrated SaaS tools</li>
                </ul>
              </div>

              {/* Responsive Design */}
              <div className="mb-10 p-6 rounded-2xl bg-white/80 dark:bg-blue-900/30 shadow-md border border-blue-100 dark:border-blue-900/40">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 text-xl">📱</span>
                  <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white">Fully Responsive Design</h2>
                </div>
                <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-blue-200 space-y-1">
                  <li>Mobile-first UI with smooth transitions</li>
                  <li>Desktop layouts with keyboard nav & modals</li>
                  <li>Dark/light theme switcher built-in</li>
                  <li>Optimized for accessibility and performance (Lighthouse score &gt;90)</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="text-center mt-12 mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">🟦 Let’s Build Your SaaS Product the Right Way</h2>
                <p className="text-lg md:text-xl text-gray-700 dark:text-blue-200 mb-6">Ready to go from an idea → MVP → launch → scale?<br />Let’s architect it with logic, security, and clean design — all under one roof.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#contact" className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 hover:from-blue-700 hover:to-purple-600 text-white font-bold text-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/40 text-center">Book a Consultation</a>
                  <a href="/quote" className="px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 dark:text-blue-400 bg-white dark:bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 font-bold text-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/40 text-center">Get a Quote</a>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Features */}
              {content.features && (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-8">
                  {content.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary-500 dark:text-primary-400 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-lg text-secondary-700 dark:text-secondary-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              {/* Process */}
              {content.process && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4 text-secondary-900 dark:text-white">Our Process</h3>
                  <ol className="list-decimal list-inside space-y-2 text-lg text-secondary-700 dark:text-secondary-300">
                    {content.process.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      <Contact />
    </Layout>
  );
};

export default ServicePage; 