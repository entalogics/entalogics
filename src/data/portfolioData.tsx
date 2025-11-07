export interface PortfolioItem {
  img: string
  alt: string
  slug: string
  title: string
  category: string
  client: string
  duration: string
  technologies: string[]
  description: string
  caseStudy: string
  features: string[]
  results: string[]
}

export const portfolioItems: PortfolioItem[] = [
  {
    img: '/assets/case-studies/omni-brave-browser.jpg',
    alt: 'Omni Brave Browser',
    slug: 'omni-brave-browser',
    title: 'Omni Brave Browser',
    category: 'Browser Development',
    client: 'Omni Technologies',
    duration: '7 months',
    technologies: ['Chromium', 'React', 'TypeScript', 'Electron'],
    description: 'A hardened Chromium fork tailored for enterprise privacy, identity protection, and policy-driven browsing.',
    caseStudy: 'We engineered Omni Brave Browser as a Chromium-based application with deep privacy tooling, smart ad blocking, and centralized governance. The solution ships with an extension framework, remote configuration, and secure sync across desktop environments.',
    features: [
      'Policy-driven browsing profiles',
      'Zero-trust network rules',
      'Built-in tracker and ad blocking',
      'Custom extension marketplace',
      'Centralized device management'
    ],
    results: [
      '70% reduction in risky browsing behaviors',
      '3x faster policy rollout across teams',
      'Enterprise rollout to 15k+ devices',
      'SOC2-ready audit trail and logging'
    ]
  },
  {
    img: '/assets/case-studies/matchups-electron-browser.jpg',
    alt: 'Matchups Electron Browser',
    slug: 'matchups-electron-browser',
    title: 'Matchups Electron Browser',
    category: 'Desktop Applications',
    client: 'Matchups',
    duration: '6 months',
    technologies: ['Electron', 'React', 'Node.js', 'SQLite'],
    description: 'A secure Electron browser tuned for daily operations, multi-account access, and productivity automation.',
    caseStudy: 'Matchups needed an internal browser that locked in specific SaaS workflows while supporting isolated sessions. We built a custom Electron shell with sandboxing, automation hooks, and cloud policy sync.',
    features: [
      'Isolated profiles per workflow',
      'Deep keyboard automation',
      'Native OS integrations',
      'Encrypted local datastore',
      'Live diagnostics dashboard'
    ],
    results: [
      '55% faster onboarding for new agents',
      'Eliminated multi-login conflicts',
      'Near-zero downtime during migrations',
      'Rapid feature toggles via remote config'
    ]
  },
  {
    img: '/assets/case-studies/rozmeri-gpt-website-extension.png',
    alt: 'Rozmeri GPT Website & Chrome Extension',
    slug: 'rozmeri-gpt-website-chrome-extension',
    title: 'RozmeriGPT Web & Extension',
    category: 'AI & SaaS',
    client: 'Rozmeri Labs',
    duration: '5 months',
    technologies: ['Next.js', 'Python', 'OpenAI APIs', 'Chrome Extensions'],
    description: 'An AI-first content assistant with a unified web dashboard and Chrome extension for in-context generation.',
    caseStudy: 'Rozmeri needed consistent AI prompts across web and browser. We created a modern SaaS frontend with a companion Chrome extension sharing prompts, analytics, and usage controls through a unified backend.',
    features: [
      'Shared prompt library and history',
      'Team governance and usage limits',
      'Inline AI suggestions inside Chrome',
      'Billing and subscription management',
      'Analytics on content generation impact'
    ],
    results: [
      '4x faster content turnaround',
      'Centralized controls across teams',
      'Thousands of extension installs in launch month',
      'AI operations monitored in real time'
    ]
  },
  {
    img: '/assets/case-studies/aol-browser-development.jpeg',
    alt: 'AOL Browser Development',
    slug: 'aol-browser-development',
    title: 'AOL Browser Development',
    category: 'Enterprise Software',
    client: 'AOL',
    duration: '9 months',
    technologies: ['Chromium', 'TypeScript', 'Rust', 'WebAssembly'],
    description: 'A modernized AOL desktop browser with enhanced identity security, unified UI, and smart content delivery.',
    caseStudy: 'Partnering with AOL, we reimagined their browser stack with contemporary Chromium foundations, integrated identity, and modular feature flags to support future services.',
    features: [
      'AOL account deep-linking',
      'Unified inbox and content hub',
      'Secure media streaming pipeline',
      'Automatic updates with rollback',
      'Accessibility-first interface'
    ],
    results: [
      'Legacy tech retirement across regions',
      '30% higher session duration',
      'Reduced crash rate below 0.1%',
      'Launch aligned with new AOL branding'
    ]
  },
  {
    img: '/assets/case-studies/total-browser.png',
    alt: 'Total Security Browser Development',
    slug: 'total-security-browser-development',
    title: 'Total Security Browser Development',
    category: 'Security',
    client: 'SentryBay',
    duration: '8 months',
    technologies: ['Chromium', 'C++', 'Go', 'Zero Trust'],
    description: 'A threat-resistant browser with fingerprint isolation, threat intel feeds, and remote attestation hooks.',
    caseStudy: 'For security operations teams we built a fortified browser that locks down session metadata, rotates fingerprints, and pipes live threat intel into the browsing experience.',
    features: [
      'Dynamic browser fingerprinting',
      'Secure workspace isolation',
      'Hardware attestation support',
      'Malware URL classification',
      'SIEM integration connectors'
    ],
    results: [
      'Blocked 95% of tracked phishing attempts',
      'Reduced manual security reviews by 60%',
      'Validated for regulated finance environments',
      'Seamless rollout to SOC teams globally'
    ]
  },
  {
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=800&fit=crop',
    alt: 'Time Tracker Development Desktop',
    slug: 'time-tracker-desktop-development',
    title: 'Time Tracker Development Desktop',
    category: 'Productivity',
    client: 'WorkPulse',
    duration: '4 months',
    technologies: ['Electron', 'TypeScript', 'SQLite', 'gRPC'],
    description: 'A cross-platform time tracker with smart activity detection, offline support, and enterprise reporting.',
    caseStudy: 'WorkPulse required a privacy-conscious tracker for distributed teams. We delivered desktop clients with smart activity rules, encrypted sync, and reporting dashboards.',
    features: [
      'Automatic idle detection',
      'Project-based time tagging',
      'Offline-first sync engine',
      'Employee privacy guardrails',
      'Executive analytics portal'
    ],
    results: [
      'Recovered 18% of untracked billable hours',
      'Deployment across Windows, macOS, Linux',
      'Encrypted telemetry compliant with GDPR',
      'Manager insights delivered in real time'
    ]
  },
  {
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop',
    alt: 'Rover Web App Development',
    slug: 'rover-web-app-development',
    title: 'Rover Web App Development',
    category: 'Web Applications',
    client: 'Rover',
    duration: '5 months',
    technologies: ['Next.js', 'PostgreSQL', 'GraphQL', 'AWS'],
    description: 'A responsive portal for Rover partners with live scheduling, billing, and real-time support tools.',
    caseStudy: "We rebuilt Rover's partner hub as a reactive web app with GraphQL, streaming updates, and modular widgets so teams can customize workflows.",
    features: [
      'Real-time availability planning',
      'Dynamic pricing engine',
      'Integrated chat and support center',
      'Automated payouts and invoicing',
      'Analytics dashboards with export'
    ],
    results: [
      '30% increase in partner retention',
      'Unified experience across desktop & mobile',
      'Service rollouts without downtime',
      'Payout reconciliation time cut in half'
    ]
  },
  {
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&h=800&fit=crop',
    alt: 'VeraCross Chrome Extension Development',
    slug: 'veracross-chrome-extension-development',
    title: 'VeraCross Chrome Extension Development',
    category: 'Browser Extensions',
    client: 'VeraCross',
    duration: '3 months',
    technologies: ['Chrome Extensions', 'TypeScript', 'React', 'Firebase'],
    description: 'A contextual Chrome extension that brings student information system data into daily workflows for teachers.',
    caseStudy: 'VeraCross required a privacy-aware extension that surfaces SIS data while respecting permissions. We delivered a TypeScript-based extension with real-time updates, offline caching, and district-level theming.',
    features: [
      'Role-based data visibility',
      'Offline caching & sync',
      'District-level branding controls',
      'Shortcut-driven workflows',
      'Secure messaging hooks'
    ],
    results: [
      'Cut teacher lookup time by 65%',
      'Rolled out to 400+ schools seamlessly',
      'Zero PII exposure incidents post-launch',
      'Extension ratings above 4.8 stars'
    ]
  },
  {
    img: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=1200&h=800&fit=crop',
    alt: 'AdsLogins Fingerprint Browser Development',
    slug: 'adslogins-fingerprint-browser-development',
    title: 'AdsLogins Fingerprint Browser Development',
    category: 'Marketing Technology',
    client: 'AdsLogins',
    duration: '6 months',
    technologies: ['Chromium', 'Playwright', 'Go', 'AWS'],
    description: 'A multi-profile fingerprint browser built for performance marketers running hundreds of ad accounts securely.',
    caseStudy: 'AdsLogins needed stable browser identities with automation APIs. We built a fingerprint rotation engine, anti-detect tooling, and scripts for major ad platforms.',
    features: [
      'Fingerprint rotation and cloaking',
      'Automated login scripting',
      'Profile vault with encryption',
      'WebRTC and canvas protection',
      'Centralized team collaboration'
    ],
    results: [
      'Managed 500+ ad accounts safely',
      'Reduced bans to under 2%',
      'Automated routine account health checks',
      'Improved campaign launch speed by 40%'
    ]
  },
  {
    img: '/assets/case-studies/sociall.png',
    alt: 'Chromium based Sociall Mobile app Development',
    slug: 'sociall-mobile-app-development',
    title: 'Chromium based Sociall Mobile app Development',
    category: 'Mobile',
    client: 'Sociall',
    duration: '7 months',
    technologies: ['React Native', 'Chromium Embedded', 'GraphQL', 'Kubernetes'],
    description: 'A hybrid social media experience combining Chromium rendering with native mobile performance.',
    caseStudy: 'Sociall wanted the flexibility of web while keeping native gestures and offline support. We built a Chromium-based mobile shell with React Native UI, background sync, and rich media pipelines.',
    features: [
      'Chromium-powered feed rendering',
      'Offline media drafts and sync',
      'End-to-end encrypted messaging',
      'Create-once content tooling for creators',
      'Feature flags for rapid experiments'
    ],
    results: [
      '25% faster feature delivery using hybrid stack',
      'Doubled creator content output',
      'Achieved 4.6 app store rating at launch',
      'Streamlined A/B testing for growth teams'
    ]
  },
  {
    img: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1200&h=800&fit=crop',
    alt: 'Modern Dashboard UI Design',
    slug: 'modern-dashboard-ui-design',
    title: 'Modern Dashboard UI Design',
    category: 'UX/UI',
    client: 'DesignSphere',
    duration: '3 months',
    technologies: ['Figma', 'Tailwind CSS', 'Next.js'],
    description: 'A modern analytics dashboard experience crafted for SaaS founders who need instant insight without the noise.',
    caseStudy: 'We partnered with DesignSphere to rethink their analytics dashboard. By rebuilding the design system, we introduced adaptive layouts, behaviour-driven navigation, and accessible colour palettes.',
    features: [
      'Adaptive component library',
      'Behaviour-based navigation cues',
      'Advanced chart visualisations',
      'High-contrast accessibility mode',
      'Reusable theming tokens'
    ],
    results: [
      '40% faster user onboarding',
      'Increase in dashboard productivity by 2.5x',
      'WCAG AA compliance achieved',
      'Design system adopted across four product squads'
    ]
  },
  {
    img: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=1200&h=800&fit=crop',
    alt: 'E-Commerce Experience Redesign',
    slug: 'ecommerce-platform-redesign',
    title: 'E-Commerce Platform Redesign',
    category: 'UX/UI',
    client: 'Mercury Retail',
    duration: '4 months',
    technologies: ['Adobe XD', 'React', 'Shopify Hydrogen'],
    description: 'A full experience overhaul for a lifestyle marketplace with a focus on conversion and brand storytelling.',
    caseStudy: 'Mercury Retail needed a cohesive digital storefront that matched their in-store experience. We prototyped and iterated through customer journeys, introducing guided discovery and social proof blocks.',
    features: [
      'Guided product discovery flows',
      'Dynamic bundle builder',
      'Narrative-driven landing sections',
      'Optimised checkout micro-interactions',
      'Integrated user generated content walls'
    ],
    results: [
      '31% increase in conversion rate',
      'Average order value up by 18%',
      'Bounce rate reduced by 22%',
      'Customers reporting higher brand trust scores'
    ]
  },
  {
    img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&h=800&fit=crop',
    alt: 'Mobile Banking UX Improvements',
    slug: 'mobile-app-interface-design',
    title: 'Mobile Banking UX Improvements',
    category: 'UX/UI',
    client: 'NovaBank',
    duration: '5 months',
    technologies: ['Sketch', 'React Native', 'Framer Motion'],
    description: 'A complete UX refresh for a mobile banking app with personalised insights and trust-building microcopy.',
    caseStudy: 'NovaBank asked us to make digital banking feel intuitive for all age groups. We simplified task flows, embedded financial literacy nudges, and created transparent feedback at every touchpoint.',
    features: [
      'One-tap recurring payments',
      'Personalised financial health timeline',
      'Contextual help centre',
      'Humanised microcopy for sensitive actions',
      'Biometric-first authentication layout'
    ],
    results: [
      'Support tickets down by 47%',
      'App store rating improved from 3.1 to 4.4',
      'Daily active usage increased by 35%',
      'Transaction completion time cut in half'
    ]
  },
  {
    img: 'https://images.unsplash.com/photo-1556125574-d7f27ec36a06?w=1200&h=800&fit=crop',
    alt: 'Automated Testing Framework Rollout',
    slug: 'automated-testing-framework',
    title: 'Automated Testing Framework Rollout',
    category: 'QA',
    client: 'QualityWorks',
    duration: '6 months',
    technologies: ['Playwright', 'TypeScript', 'Azure DevOps', 'Docker'],
    description: 'A unified automated testing framework covering web, mobile, and API layers for a global SaaS product.',
    caseStudy: 'QualityWorks needed to stabilise releases across multiple teams. We built a modular automation framework, added visual diffing, and embedded it into their deployment pipeline.',
    features: [
      'Cross-platform automation libraries',
      'Self-service test data management',
      'Visual regression reporting',
      'Slack-based failure triage',
      'Containerised execution for parallel runs'
    ],
    results: [
      'Regression cycle time reduced by 60%',
      'Escaped defects down by 72%',
      'Daily smoke suite executes in under 15 minutes',
      'QA team able to support 3x more product squads'
    ]
  },
  {
    img: '/assets/case-studies/maintainance1.jpg',
    alt: 'Performance Testing & Optimisation',
    slug: 'performance-testing-optimization',
    title: 'Performance Testing & Optimisation',
    category: 'QA',
    client: 'FreightScale',
    duration: '4 months',
    technologies: ['k6', 'Grafana', 'AWS X-Ray', 'PostgreSQL'],
    description: 'End-to-end performance testing and tuning initiative for a logistics platform handling real-time tracking.',
    caseStudy: 'We stress-tested FreightScale at peak holiday load, tuning database indices, implementing back-pressure controls, and instrumenting custom performance dashboards.',
    features: [
      'Scenario-driven load modelling',
      'Real-time performance observability',
      'Optimised query execution plans',
      'Automatic throttling safeguards',
      'Continuous performance baselines'
    ],
    results: [
      '99th percentile latency reduced from 3.2s to 950ms',
      'Infrastructure spend trimmed by 18%',
      'Detect-to-resolve time for incidents cut by 40%',
      'Platform ready for 3x predicted holiday traffic'
    ]
  },
  {
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop',
    alt: 'Security Testing & Assessment',
    slug: 'security-testing-vulnerability-assessment',
    title: 'Security Testing & Vulnerability Assessment',
    category: 'QA',
    client: 'MediTrust',
    duration: '5 months',
    technologies: ['OWASP ZAP', 'Burp Suite', 'SonarQube', 'Terraform'],
    description: 'Comprehensive security testing programme for a healthcare provider with HIPAA and GDPR requirements.',
    caseStudy: 'MediTrust engaged us to harden their patient portal. We executed red team exercises, secure code reviews, and infrastructure-as-code scanning to create a continuous assurance model.',
    features: [
      'Hybrid automated + manual penetration testing',
      'Secure coding playbooks',
      'Infrastructure misconfiguration detection',
      'Executive risk dashboards',
      'Compliance-ready remediation workflows'
    ],
    results: [
      'Critical vulnerabilities reduced by 92%',
      'Achieved HIPAA and GDPR security attestations',
      'Mean time to remediate dropped below 3 days',
      'Security posture reports delivered monthly to leadership'
    ]
  },
  {
    img: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=1200&h=800&fit=crop',
    alt: 'Browser Development Guide',
    slug: 'guide-browser-development',
    title: 'Complete Guide to Browser Development',
    category: 'Guides',
    client: 'Entalogics',
    duration: 'Ongoing',
    technologies: ['Chromium', 'WebAssembly', 'Rust', 'C++'],
    description: 'An in-depth practical guide for engineering teams building custom Chromium forks.',
    caseStudy: 'We documented our approach to building secure, policy-driven browsers, covering build tooling, sandboxing, extension frameworks, and deployment automation.',
    features: [
      'Step-by-step build pipeline walkthroughs',
      'Security hardening checklists',
      'Extension architecture patterns',
      'CI/CD automation templates',
      'Performance profiling techniques'
    ],
    results: [
      'Adopted by 20+ teams building custom browsers',
      'Referenced by three enterprise security standards',
      'Increased internal onboarding speed by 3x',
      'Used as curriculum for Entalogics academy cohorts'
    ]
  },
  {
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&h=800&fit=crop',
    alt: 'Mobile App Development Best Practices',
    slug: 'guide-mobile-app-development',
    title: 'Mobile App Development Best Practices',
    category: 'Guides',
    client: 'Entalogics',
    duration: 'Ongoing',
    technologies: ['React Native', 'Flutter', 'SwiftUI', 'Kotlin Multiplatform'],
    description: 'A comprehensive best-practices playbook for shipping cross-platform mobile apps at scale.',
    caseStudy: 'We distilled lessons from dozens of mobile engagements into a living guide covering architecture, testing, feature flagging, and release management.',
    features: [
      'Architecture decision records',
      'Offline-first design templates',
      'Mobile observability setup guides',
      'App store compliance checklists',
      'Automated release workflows'
    ],
    results: [
      'Shortened feature lead time by 35% across teams',
      'Reduced mobile crash rates below 0.5%',
      'Enabled fortnightly release cadence',
      'Guided successful launches for 15+ products'
    ]
  },
  {
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop',
    alt: 'Chrome Extension Development Tutorial',
    slug: 'guide-chrome-extension-development',
    title: 'Chrome Extension Development Tutorial',
    category: 'Guides',
    client: 'Entalogics',
    duration: 'Ongoing',
    technologies: ['Chrome Extensions', 'TypeScript', 'Redux Toolkit'],
    description: 'A hands-on tutorial for creating production-ready Chrome extensions with maintainable architecture.',
    caseStudy: 'We captured our extension delivery frameworks, including state management patterns, background messaging, and Chrome Web Store packaging tips.',
    features: [
      'Boilerplate project templates',
      'Messaging pattern recipes',
      'Extension security hardening tips',
      'CI/CD scripts for auto-publishing',
      'Testing strategies for content scripts'
    ],
    results: [
      'Cut extension build time from weeks to days',
      'Improved extension approval rate to 100%',
      'Enabled reusable extension modules across projects',
      'Provided training material for partner teams'
    ]
  },
  {
    img: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=1200&h=800&fit=crop',
    alt: 'The Future of Web Browsers',
    slug: 'article-future-of-web-browsers',
    title: 'The Future of Web Browsers',
    category: 'Articles',
    client: 'Entalogics Research',
    duration: 'Published Oct 2024',
    technologies: ['Chromium', 'WebGPU', 'Privacy Sandbox'],
    description: 'An editorial deep dive into how browsers are evolving across privacy, performance, and application models.',
    caseStudy: 'Our research team analysed browser roadmaps, emerging standards, and enterprise adoption patterns to forecast the next five years of browser development.',
    features: [
      'Privacy sandbox migration roadmap',
      'WebGPU experimentation guide',
      'Trusted web activity playbook',
      'Enterprise policy governance strategies',
      'Benchmark studies across major engines'
    ],
    results: [
      'Read by 10k+ engineering leaders',
      'Cited by industry analysts in quarterly reports',
      'Helped partners prioritise browser feature adoption',
      'Kickstarted three innovation workshops with clients'
    ]
  },
  {
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    alt: 'Security in Modern Web Applications',
    slug: 'article-security-modern-web-apps',
    title: 'Security in Modern Web Applications',
    category: 'Articles',
    client: 'Entalogics Research',
    duration: 'Published Jan 2025',
    technologies: ['Zero Trust', 'OAuth2', 'GraphQL', 'CSP'],
    description: 'A practical examination of security strategies that keep modern web applications resilient without slowing teams down.',
    caseStudy: 'We chronicled our security engagements, outlining threat modelling, secure coding, and cloud hardening patterns that balance speed with safety.',
    features: [
      'Threat modelling playbooks',
      'Authentication and authorisation recipes',
      'Secure DevOps toolchain suggestions',
      'Runtime protection checklists',
      'Incident response war-room templates'
    ],
    results: [
      'Security posture score improvements up to 45%',
      'Adopted by partner security guilds worldwide',
      'Featured in security newsletters across APAC',
      'Sparked adoption of secure defaults in codebases'
    ]
  },
  {
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=800&fit=crop',
    alt: 'Performance Optimisation Techniques',
    slug: 'article-performance-optimization-techniques',
    title: 'Performance Optimisation Techniques',
    category: 'Articles',
    client: 'Entalogics Research',
    duration: 'Published Mar 2025',
    technologies: ['Next.js', 'Edge Functions', 'Redis', 'Vercel'],
    description: 'A detailed article covering real-world techniques for maximising web performance from frontend to infrastructure.',
    caseStudy: 'We captured optimisation wins from high-traffic launches, detailing our approach to observability, caching, and differential bundling.',
    features: [
      'Edge caching blueprints',
      'Real user monitoring dashboards',
      'Bundle reduction case studies',
      'Async API orchestration patterns',
      'Server timing instrumentation guides'
    ],
    results: [
      'Page load times reduced by up to 55%',
      'Improved core web vitals across case studies',
      'Reduced infrastructure costs by 20% on average',
      'Featured in performance engineering roundtables'
    ]
  }
]

