import type React from "react"
import { Palette, Monitor, Settings, Code, Brain, Chrome, Globe } from "lucide-react"

export interface Service {
  slug: string
  title: string
  tagline: string
  icon: React.ElementType
  iconName: string // Added iconName for serialization
  thumbnail?: string // Added thumbnail property to Service interface
  features?: string[] | string[][]
  headline?: string
  description?: string
  detailedFeatures?: string[]
  process?: string[]
  methodology?: {
    title: string
    description: string
    steps: {
      number: string
      title: string
      description: string
      icon: string
    }[]
  }
  ogImage?: string
  technologies?: string[] // Technology icons for each service
  techStack?: {
    frontend?: { name: string; icon: string }[]
    backend?: { name: string; icon: string }[]
    database?: { name: string; icon: string }[]
    infrastructure?: { name: string; icon: string }[]
    tools?: { name: string; icon: string }[]
  }
  useCases?: string[]
  specialSections?: {
    title: string
    content: string | string[]
    icon?: string
  }[]
  benefits?: string[]
  timeline?: string
  portfolio?: {
    title: string
    description: string
    technologies: string[]
  }[]
  faqs?: {
    question: string
    answer: string
  }[]
}

export const servicesData: Record<string, Service> = {
  "saas-development": {
    title: "SaaS Product Development",
    slug: "saas-development",
    icon: Code,
    iconName: "SaaS Product Development",
    thumbnail: "/assets/services/saas.jpg",
    technologies: ["react", "nextjs", "typescript", "nodejs", "postgresql", "docker"],
    tagline:
      "We design & build SaaS platforms from idea to scale. Think dashboards, billing, auth, API, onboarding — we handle it all.",
    headline: "SaaS Product Development",
    description:
      "Launch, scale, and automate your SaaS business with a team that handles everything: dashboards, billing, onboarding, and more. We build SaaS platforms that are robust, secure, and ready for growth.",
    features: [
      ["Multi-tenant logic", "API integrations"],
      ["Growth-ready firms", "Secure infrastructure"],
      ["Automated billing", "User onboarding flows"],
    ],
    detailedFeatures: [
      "Multi-tenant architecture for scale",
      "Automated billing and subscription management",
      "User onboarding flows and role-based access",
      "API integrations with third-party services",
      "Growth-ready infrastructure and analytics",
      "Real-time analytics and reporting dashboard",
    ],
    process: [
      "Requirements analysis",
      "Architecture design",
      "Core development",
      "Testing & optimization",
      "Deployment & support",
    ],
    
    ogImage: "https://entalogics.com/assets/og-saas.jpg",
  methodology: {
    title: "Our SaaS Development Methodology",
    description: "We follow a systematic approach to build scalable, secure, and feature-rich SaaS applications that grow with your business.",
    steps: [
      {
        number: "01",
        title: "Requirements Analysis",
        description: "Analyze your market, define user personas, and create a comprehensive product roadmap.",
        icon: "📋"
      },
      {
        number: "02",
        title: "Architecture Design",
        description: "Design scalable multi-tenant architecture focused on security and performance.",
        icon: "🏗️"
      },
      {
        number: "03",
        title: "Core Development",
        description: "Build core features including auth, billing, and essential workflows.",
        icon: "💻"
      },
      {
        number: "04",
        title: "Testing & QA",
        description: "Comprehensive testing including security audits and performance optimization.",
        icon: "🔍"
      },
      {
        number: "05",
        title: "Deployment & Support",
        description: "Deploy with monitoring and provide ongoing support for smooth scaling.",
        icon: "🚀"
      },
      {
        number: "06",
        title: "Post-Launch Optimization",
        description: "Continuously improve features, performance, and UX based on analytics and feedback.",
        icon: "🔄"
      }
    ]
  },
    benefits: [
      "Faster time-to-market with proven architecture patterns",
      "Scalable infrastructure that grows with your business",
      "Built-in security and compliance features",
      "Automated billing and subscription management",
      "24/7 monitoring and support included",
    ],
    timeline: "8-16 weeks depending on complexity",
    techStack: {
      frontend: [
        { name: "React", icon: "https://cdn.simpleicons.org/react" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" }
      ],
      backend: [
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "Python", icon: "https://cdn.simpleicons.org/python" },
        { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql" }
      ],
      database: [
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" }
      ],
      infrastructure: [
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker" }
      ],
      tools: [
        { name: "Figma", icon: "https://cdn.simpleicons.org/figma" }
      ],
    },
    portfolio: [
      {
        title: "Healthcare SaaS Platform",
        description: "Multi-tenant platform for healthcare providers with HIPAA compliance",
        technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      },
      {
        title: "Project Management Tool",
        description: "Team collaboration platform with real-time updates and analytics",
        technologies: ["React", "Express", "MongoDB", "Socket.io"],
      },
    ],
    faqs: [
      {
        question: "How long does it take to build a SaaS platform?",
        answer:
          "Typically 8-16 weeks depending on complexity. We start with an MVP and iterate based on user feedback.",
      },
      {
        question: "Do you handle deployment and hosting?",
        answer: "Yes, we handle everything from deployment to ongoing maintenance and scaling as your user base grows.",
      },
    ],
  },
  "web-development": {
  title: "Web Development",
  slug: "web-development",
  icon: Globe,
  iconName: "Web Development",
  thumbnail: "/assets/services/web-app.jpg",
  technologies: ["react", "nextjs", "typescript", "tailwindcss", "nodejs", "postgresql"],
  tagline: "Modern, responsive websites & web apps. React, Next.js, full-stack solutions that scale.",
  headline: "Web Development",
  description:
    "We build modern, responsive websites and web applications using cutting-edge technologies. From simple landing pages to complex full-stack applications with React, Next.js, and robust backend solutions.",
  features: [
    ["React, Next.js, Vue", "Full-stack solutions"],
    ["Responsive design", "SEO optimized"],
    ["Performance focused", "Scalable architecture"],
  ],
  detailedFeatures: [
    "Modern frontend frameworks (React, Next.js, Vue.js, Svelte)",
    "Full-stack development with Node.js, Python, and PHP",
    "Responsive design for all devices and screen sizes",
    "SEO optimization and performance enhancement",
    "E-commerce solutions with payment integrations",
    "Content Management Systems (CMS) and admin panels",
  ],
  process: [
    "Project planning",
    "UI/UX design",
    "Frontend development", 
    "Backend integration",
    "Testing & deployment"
  ],
  methodology: {
    title: "Our Web Development Process",
    description:
      "We follow modern development practices to deliver fast, secure, and scalable web solutions that grow with your business.",
    steps: [
      {
        number: "01",
        title: "Project Planning",
        description:
          "Analyze requirements, define project scope, choose optimal tech stack, and create detailed project roadmap.",
        icon: "📋",
      },
      {
        number: "02", 
        title: "UI/UX Design",
        description:
          "Create wireframes, design mockups, and interactive prototypes focused on user experience and conversion optimization.",
        icon: "🎨",
      },
      {
        number: "03",
        title: "Frontend Development",
        description:
          "Build responsive, interactive interfaces using modern frameworks with focus on performance and accessibility.",
        icon: "💻",
      },
      {
        number: "04",
        title: "Backend Integration",
        description:
          "Develop robust APIs, database architecture, and server-side logic with security and scalability in mind.",
        icon: "⚙️",
      },
      {
        number: "05",
        title: "Testing & Deployment",
        description: "Comprehensive testing across devices, performance optimization, and seamless deployment to production.",
        icon: "🚀",
      },
      {
        number: "06",
        title: "Post-Launch Optimization",
        description: "Monitor performance and UX, iterate features, and improve SEO and conversions.",
        icon: "🔄",
      },
    ],
  },
  ogImage: "https://entalogics.com/assets/og-web-development.jpg",
  benefits: [
    "Fast loading times with optimized performance",
    "Mobile-first responsive design across all devices", 
    "SEO-friendly architecture for better search rankings",
    "Scalable codebase that grows with your business",
    "Modern security practices and data protection",
    "Easy content management and admin interfaces",
  ],
  timeline: "6-12 weeks for complete web solutions",
  techStack: {
    frontend: [
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" }
    ],
    backend: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql" }
    ],
    database: [
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" }
    ],
    infrastructure: [
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker" }
    ],
    tools: [
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma" }
    ],
  },
  portfolio: [
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with payment gateway and inventory management",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    },
    {
      title: "SaaS Dashboard",
      description: "Complex data visualization platform with real-time updates and analytics",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    },
    {
      title: "Corporate Website",
      description: "Multi-language corporate site with CMS and SEO optimization",
      technologies: ["Next.js", "Sanity CMS", "TypeScript", "Vercel"],
    },
  ],
},
  "ai-apps-development": {
    title: "AI-Powered Apps & Platforms",
    slug: "ai-apps-development",
    icon: Brain,
    iconName: "AI-Powered Apps & Platforms",
    thumbnail: "/assets/services/ai.jpg",
    technologies: ["python", "react", "nextjs", "typescript", "nodejs", "postgresql"],
    tagline: "We develop AI-native tools and workflows — from custom LLM apps to agent-powered dashboards.",
    headline: "AI-Powered Apps & Platforms",
    description:
      "From custom LLM apps to agent-powered dashboards, we build AI-native tools that drive real business value. Integrate OpenAI, DeepSeek, and more into your workflows.",
    features: [
      ["Agent dashboards", "OpenAI, DeepSeek"],
      ["Full AI app lifecycle", "Prompt engineering"],
      ["Custom LLM workflows", "Vector DBs, LangChain"],
    ],
    detailedFeatures: [
      "Agent dashboards and automation",
      "OpenAI, DeepSeek, and custom model integration",
      "Prompt engineering and workflow design",
      "Vector DBs, LangChain, and advanced AI stacks",
      "Full AI app lifecycle: strategy, build, deploy",
      "Custom AI model fine-tuning and optimization",
    ],
    process: [
      "AI strategy planning",
      "Model integration",
      "Workflow development",
      "Testing & optimization",
      "Deployment & monitoring",
    ],
    methodology: {
      title: "Our AI Development Methodology",
      description:
        "We use a systematic approach to build AI applications that deliver measurable business value and scale effectively.",
      steps: [
        {
          number: "01",
          title: "AI Strategy & Planning",
          description:
            "Identify AI opportunities, select optimal models, and design intelligent workflows tailored to your business needs.",
          icon: "🧠",
        },
        {
          number: "02",
          title: "Model Integration",
          description:
            "Integrate leading AI models (OpenAI, Anthropic, DeepSeek) with custom prompt engineering and fine-tuning.",
          icon: "🔗",
        },
        {
          number: "03",
          title: "Workflow Development",
          description:
            "Build intelligent automation workflows with vector databases, LangChain, and custom AI pipelines.",
          icon: "⚙️",
        },
        {
          number: "04",
          title: "Testing & Optimization",
          description: "Rigorous testing of AI outputs, performance optimization, and continuous model improvement.",
          icon: "🎯",
        },
        {
          number: "05",
          title: "Deployment & Monitoring",
          description: "Deploy with real-time monitoring, usage analytics, and ongoing AI model optimization.",
          icon: "📊",
        },
        {
          number: "06",
          title: "Continuous Improvement",
          description: "Iterate on prompts, fine-tuning, and workflows based on real-world usage.",
          icon: "🔁",
        },
      ],
    },
    ogImage: "https://entalogics.com/assets/og-ai.jpg",
    benefits: [
      "Custom AI solutions tailored to your business needs",
      "Integration with leading AI models and APIs",
      "Scalable architecture for high-volume processing",
      "Real-time AI workflows and automation",
      "Ongoing model optimization and updates",
    ],
    timeline: "6-12 weeks for most AI applications",
    techStack: {
      frontend: [
        { name: "React.js", icon: "https://cdn.simpleicons.org/react" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" }
      ],
      backend: [
        { name: "Python", icon: "https://cdn.simpleicons.org/python" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql" },
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" }
      ],
      infrastructure: [
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker" }
      ],
      tools: [
        { name: "Figma", icon: "https://cdn.simpleicons.org/figma" }
      ]
    },
    portfolio: [
      {
        title: "AI Content Generator",
        description: "Multi-modal content creation platform with custom brand voice",
        technologies: ["OpenAI GPT-4", "DALL-E", "React", "Python"],
      },
      {
        title: "Document Analysis Tool",
        description: "AI-powered document processing and insights extraction",
        technologies: ["LangChain", "Vector DB", "FastAPI", "Next.js"],
      },
    ],
  },
  
  "desktop-mobile-app-development": {
    title: "Desktop & Mobile App Development",
    slug: "desktop-mobile-app-development",
    icon: Monitor,
    iconName: "Desktop & Mobile App Development",
    thumbnail: "/assets/services/soft.jpg",
    technologies: ["flutter", "react", "typescript", "nodejs", "docker"],
    tagline:
      "Cross-platform desktop & mobile apps with native performance. Flutter, React Native, Electron — we build for all platforms.",
    headline: "Desktop & Mobile App Development",
    description:
      "We build high-performance desktop and mobile applications with deep OS integrations. From cross-platform mobile apps using Flutter and React Native to native desktop software for Windows, Mac, and Linux.",
    features: [
      ["Cross-platform builds", "Native performance"],
      ["Desktop & mobile apps", "OS integration"],
      ["App Store optimization", "Enterprise-ready"],
    ],
    detailedFeatures: [
      "Cross-platform builds for desktop (Win, Mac, Linux) and mobile (iOS, Android)",
      "Native OS integration and custom tooling",
      "App Store and Play Store optimization",
      "Enterprise-ready security and compliance",
      "Push notifications and user engagement features",
      "Offline functionality and local data storage",
    ],
    process: ["Platform strategy", "UI/UX design", "Cross-platform development", "Testing & QA", "Store deployment"],
    methodology: {
      title: "Our Cross-Platform Development Process",
      description:
        "We use modern frameworks and tools to deliver applications that work seamlessly across desktop and mobile platforms.",
      steps: [
        {
          number: "01",
          title: "Platform Strategy",
          description:
            "Analyze target platforms, define user requirements, and choose optimal development frameworks for maximum reach.",
          icon: "🎯",
        },
        {
          number: "02",
          title: "UI/UX Design",
          description:
            "Create platform-specific designs that feel native while maintaining consistent branding across all devices.",
          icon: "🎨",
        },
        {
          number: "03",
          title: "Cross-Platform Development",
          description:
            "Build using Flutter, React Native, and Electron to ensure native performance on all target platforms.",
          icon: "💻",
        },
        {
          number: "04",
          title: "Testing & QA",
          description:
            "Comprehensive testing across all platforms including device-specific features and performance optimization.",
          icon: "🔍",
        },
        {
          number: "05",
          title: "Deployment & Distribution",
          description: "Handle app store submissions, desktop distribution, and ongoing updates across all platforms.",
          icon: "🚀",
        },
        {
          number: "06",
          title: "Post-Launch Optimization",
          description: "Track crashes and performance, ship improvements, and optimize store rankings.",
          icon: "🔄",
        },
      ],
    },
    ogImage: "https://entalogics.com/assets/og-desktop-mobile.jpg",
    benefits: [
      "Single codebase for multiple platforms reduces development time",
      "Native performance and OS integration on all platforms",
      "App Store optimization and distribution handling",
      "Cross-platform compatibility and consistent user experience",
      "Enterprise-grade security and compliance features",
    ],
    timeline: "10-18 weeks for cross-platform applications",
    techStack: {
      frontend: [
        { name: "React Native", icon: "https://cdn.simpleicons.org/react" },
        { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" }
      ],
      backend: [
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql" },
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" }
      ],
      infrastructure: [
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker" }
      ],
      tools: [
        { name: "Figma", icon: "https://cdn.simpleicons.org/figma" }
      ],
    },
    portfolio: [
      {
        title: "Cross-Platform Productivity Suite",
        description: "Desktop and mobile app for team collaboration with real-time sync",
        technologies: ["Flutter", "Electron", "Firebase", "TypeScript"],
      },
      {
        title: "Enterprise Management System",
        description: "Multi-platform business application with offline capabilities",
        technologies: ["React Native", "Tauri", "Supabase", "Node.js"],
      },
    ],
  },
  "chromium-browser-development": {
    title: "Chromium & Browser Development",
    slug: "chromium-browser-development",
    icon: Chrome,
    iconName: "Chromium & Browser Development",
    thumbnail: "/assets/services/chromium.jpg",
    technologies: ["react", "typescript", "nodejs", "docker"],
    tagline: "Custom browsers for privacy, crypto, AI, or enterprise use.",
    headline: "Chromium & Browser Development",
    description:
      "Custom browsers for privacy, crypto, AI, or enterprise use. We build and modify Chromium-based browsers tailored for your needs, including custom UI, search engine, and feature integrations.",
    features: [
      ["Chromium, Brave forks", "Web3, wallet-ready"],
      ["NTPs, extensions, VPN", "Custom branding"],
      ["Privacy features", "Multi-platform support"],
    ],
    detailedFeatures: [
      "Chromium and Brave forks",
      "Web3, wallet, and extension support",
      "Custom branding and privacy features",
      "Multi-platform support (Win, Mac, Linux)",
      "Enterprise and AI integrations",
      "Custom search engines and NTPs",
    ],
    process: [
      "Requirements analysis",
      "Architecture design",
      "Core development",
      "Testing & optimization",
      "Deployment & support",
    ],
    ogImage: "https://entalogics.com/assets/chromium-og.jpg",
    benefits: [
      "Custom browser tailored to your specific needs",
      "Enhanced privacy and security features",
      "Cross-platform compatibility (Windows, Mac, Linux)",
      "Custom extensions and integrations",
      "White-label branding and customization",
    ],
    timeline: "12-20 weeks for custom browser development",
    techStack: {
      frontend: [
        { name: "React", icon: "https://cdn.simpleicons.org/react" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" }
      ],
      backend: [
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql" }
      ],
      infrastructure: [
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker" }
      ],
      tools: [
        { name: "Figma", icon: "https://cdn.simpleicons.org/figma" }
      ],
    },
    methodology: {
      title: "Our Browser Development Methodology",
      description: "A structured approach to building and customizing Chromium-based browsers for performance, security, and UX.",
      steps: [
        {
          number: "01",
          title: "Requirements & Compliance",
          description: "Define goals, privacy requirements, and platform targets with regulatory considerations.",
          icon: "📋",
        },
        {
          number: "02",
          title: "Fork & Architecture",
          description: "Plan codebase fork, modules, and integrations (NTP, extensions, search, telemetry).",
          icon: "🏗️",
        },
        {
          number: "03",
          title: "Feature Development",
          description: "Implement custom UI, privacy features, wallet/VPN, and enterprise policies.",
          icon: "🧩",
        },
        {
          number: "04",
          title: "Security & QA",
          description: "Harden builds, run security checks, and conduct automated and manual testing.",
          icon: "🔒",
        },
        {
          number: "05",
          title: "Build & Distribution",
          description: "Set up CI/CD, sign builds, and distribute for Windows, macOS, and Linux.",
          icon: "🚀",
        },
        {
          number: "06",
          title: "Updates & Telemetry",
          description: "Ship auto-updates, analyze usage (privacy-preserving), and iterate features.",
          icon: "🔄",
        },
      ],
    },
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    icon: Palette,
    iconName: "UI/UX Design",
    thumbnail: "/assets/services/ui.jpg",
    technologies: ["figma", "react", "tailwindcss", "typescript"],
    tagline: "We create intuitive, clean interfaces that convert. From Figma to functional.",
    headline: "UI/UX Design",
    description:
      "We create intuitive, clean interfaces that convert. From Figma to functional, our design team ensures your product is beautiful, usable, and conversion-focused.",
    features: [
      ["Wireframes & prototype", "User flows"],
      ["UX-first thinking", "Component libraries"],
      ["Design systems", "Accessibility audits"],
    ],
    detailedFeatures: [
      "Wireframes, prototypes, and user flows",
      "UX-first thinking and accessibility audits",
      "Component libraries and design systems",
      "Visual design and branding",
      "User testing and iteration",
      "Design handoff and developer collaboration",
    ],
    process: ["User research", "Wireframing", "Visual design", "Prototyping", "User testing"],
    methodology: {
      title: "Our Design Methodology",
      description: "An iterative, user-centered process to design delightful, accessible, and conversion-focused experiences.",
      steps: [
        {
          number: "01",
          title: "Discovery & Research",
          description: "Stakeholder interviews, competitor analysis, and user research to frame the problem.",
          icon: "🔎",
        },
        {
          number: "02",
          title: "Information Architecture",
          description: "Define user flows, sitemaps, and content hierarchy for clarity and navigation.",
          icon: "🧭",
        },
        {
          number: "03",
          title: "Wireframing",
          description: "Low-fidelity screens to validate structure, layout, and interaction patterns early.",
          icon: "📐",
        },
        {
          number: "04",
          title: "Visual Design",
          description: "High-fidelity designs, components, and design system with accessibility in mind.",
          icon: "🎨",
        },
        {
          number: "05",
          title: "Prototyping & Testing",
          description: "Interactive prototypes and usability testing to refine UX and reduce friction.",
          icon: "🧪",
        },
        {
          number: "06",
          title: "Handoff & Iteration",
          description: "Dev-ready specs and ongoing iterations based on analytics and feedback.",
          icon: "🔄",
        },
      ],
    },
    ogImage: "https://entalogics.com/assets/og-uiux.jpg",
    benefits: [
      "User-centered design that increases conversions",
      "Consistent design system and component library",
      "Accessibility-compliant interfaces",
      "Mobile-first responsive design approach",
      "Iterative design process with user feedback",
    ],
    timeline: "3-6 weeks for complete design system",
    techStack: {
      tools: [
        { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
        { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg" },
        { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
        { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg" },
        { name: "Sketch", icon: "https://cdn.simpleicons.org/sketch/F7B500" }
      ],
      frontend: [
        { name: "React", icon: "https://cdn.simpleicons.org/react" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" }
      ],
      infrastructure: [
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker" }
      ],
    },
  },
  "maintenance-support": {
    title: "Maintenance & Support",
    slug: "maintenance-support",
    icon: Settings,
    iconName: "Maintenance & Support",
    thumbnail: "/assets/services/maintainance.jpg",
    technologies: ["docker", "nodejs", "postgresql", "typescript"],
    tagline: "We keep your software running smoothly with proactive care… fixing issues before you even no…",
    headline: "Maintenance & Support",
    description:
      "Keep your software running smoothly with proactive care. We fix issues before you even notice, with 24/7 monitoring, security updates, and performance tuning.",
    features: [
      ["24/7 monitoring", "Security updates"],
      ["Performance focused", "Bug fixes"],
      ["Feature enhancements", "Proactive support"],
    ],
    detailedFeatures: [
      "24/7 monitoring and proactive support",
      "Security updates and bug fixes",
      "Performance tuning and enhancements",
      "Feature updates and improvements",
      "Regular system health checks",
      "Database optimization and backup management",
    ],
    process: ["System monitoring", "Issue identification", "Quick resolution", "Performance tuning", "Regular updates"],
    ogImage: "https://entalogics.com/assets/og-support.jpg",
    benefits: [
      "24/7 monitoring and proactive issue resolution",
      "Regular security updates and patches",
      "Performance optimization and scaling",
      "Feature enhancements and improvements",
      "Dedicated support team and SLA guarantees",
    ],
    timeline: "Ongoing monthly or annual contracts",
    techStack: {
      backend: [
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "Python", icon: "https://cdn.simpleicons.org/python" }
      ],
      database: [
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
        { name: "Redis", icon: "https://cdn.simpleicons.org/redis" }
      ],
      infrastructure: [
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
        { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes" },
        { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx" }
      ],
      tools: [
        { name: "Sentry", icon: "https://cdn.simpleicons.org/sentry" },
        { name: "Datadog", icon: "https://cdn.simpleicons.org/datadog" },
        { name: "Grafana", icon: "https://cdn.simpleicons.org/grafana" }
      ],
    },
  },
  "cloud-devops-solutions": {
    title: "Cloud & DevOps Solutions",
    slug: "cloud-devops-solutions",
    icon: Settings,
    iconName: "Cloud & DevOps Solutions",
    thumbnail: "/assets/services/illlustration.jpg",
    technologies: ["docker", "nodejs", "postgresql", "python"],
    tagline: "Set up CI/CD pipelines, cloud hosting, and monitoring for smooth deployments.",
    headline: "Cloud & DevOps Solutions",
    description:
      "We help you set up robust CI/CD pipelines, cloud hosting, and comprehensive monitoring systems for smooth and reliable deployments. From infrastructure setup to automated deployments, we handle it all.",
    features: [
      ["CI/CD pipelines", "Cloud hosting"],
      ["Infrastructure automation", "Monitoring & alerting"],
      ["Auto-scaling", "Security hardening"],
    ],
    detailedFeatures: [
      "Complete CI/CD pipeline setup and automation",
      "Cloud infrastructure provisioning and management",
      "Infrastructure as Code (IaC) implementation",
      "Container orchestration with Kubernetes",
      "Comprehensive monitoring and alerting systems",
      "Security hardening and compliance implementation",
    ],
    process: [
      "Infrastructure assessment",
      "CI/CD pipeline setup",
      "Cloud infrastructure deployment",
      "Monitoring implementation",
      "Security & optimization",
    ],
    methodology: {
      title: "Our Cloud Migration Process",
      description: "A systematic approach to setting up robust CI/CD pipelines and cloud infrastructure for reliable deployments.",
      steps: [
        {
          number: "01",
          title: "Infrastructure Assessment",
          description: "Analyze current setup, identify requirements, and plan CI/CD and cloud infrastructure strategy.",
          icon: "📊",
        },
        {
          number: "02",
          title: "CI/CD Pipeline Setup",
          description: "Design and implement automated build, test, and deployment pipelines.",
          icon: "📋",
        },
        {
          number: "03",
          title: "Cloud Infrastructure Deployment",
          description: "Set up cloud infrastructure, configure networking, and implement security measures.",
          icon: "🏗️",
        },
        {
          number: "04",
          title: "Monitoring Implementation",
          description: "Set up comprehensive monitoring, logging, and alerting systems.",
          icon: "🚚",
        },
        {
          number: "05",
          title: "Security & Optimization",
          description: "Implement security hardening, performance optimization, and compliance measures.",
          icon: "🔍",
        },
        {
          number: "06",
          title: "Deployment & Support",
          description: "Deploy applications, monitor performance, and provide ongoing support and optimization.",
          icon: "🚀",
        },
      ],
    },
    ogImage: "https://entalogics.com/assets/og-cloud-devops.jpg",
    benefits: [
      "Faster and more reliable deployments",
      "Reduced manual errors and downtime",
      "Better scalability and performance",
      "Enhanced security and compliance",
      "Improved team productivity",
    ],
    timeline: "2-6 weeks for complete DevOps setup",
    techStack: {
      frontend: [
        { name: "React", icon: "https://cdn.simpleicons.org/react" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" }
      ],
      backend: [
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "Python", icon: "https://cdn.simpleicons.org/python" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker" }
      ],
      database: [
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" }
      ],
      infrastructure: [
        { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud" },
        { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes" },
        { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" }
      ],
      tools: [
        { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions" },
        { name: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins" },
        { name: "Grafana", icon: "https://cdn.simpleicons.org/grafana" }
      ],
    },
    portfolio: [
      {
        title: "E-commerce Platform DevOps",
        description: "Complete CI/CD and cloud infrastructure for online retail platform",
        technologies: ["Google Cloud", "Kubernetes", "Terraform", "Docker"],
      },
      {
        title: "SaaS Application Deployment",
        description: "Automated deployment pipeline with monitoring for SaaS platform",
        technologies: ["Google Cloud", "GitHub Actions", "Kubernetes", "Monitoring"],
      },
    ],
  },
  "automation-workflow-tools": {
    title: "Automation & Workflow Tools",
    slug: "automation-workflow-tools",
    icon: Settings,
    iconName: "Automation & Workflow Tools",
    thumbnail: "/assets/services/automation.jpg",
    technologies: ["python", "nodejs", "typescript", "docker", "powershell", "power-automate", "microsoft-teams"],
    tagline: "Design scripts, bots, and automation systems to save time and cut manual work.",
    headline: "Automation & Workflow Tools",
    description:
      "We design and build custom automation scripts, bots, and workflow systems that save time and eliminate manual work. From simple scripts to complex automation platforms, we help you work smarter, not harder.",
    features: [
      ["Custom scripts", "Workflow automation"],
      ["Bot development", "Process optimization"],
      ["API integrations", "Data processing"],
    ],
    detailedFeatures: [
      "Custom automation scripts and tools",
      "Workflow automation and process optimization",
      "Chatbot and AI assistant development",
      "API integrations and data processing",
      "Business process automation",
      "Task scheduling and monitoring systems",
    ],
    process: [
      "Process analysis",
      "Automation strategy",
      "Tool development",
      "Integration & testing",
      "Deployment & monitoring",
    ],
    methodology: {
      title: "Our Automation Development Process",
      description: "A systematic approach to building automation solutions that streamline workflows and boost productivity.",
      steps: [
        {
          number: "01",
          title: "Process Analysis",
          description: "Analyze current workflows, identify automation opportunities, and define requirements.",
          icon: "📊",
        },
        {
          number: "02",
          title: "Automation Strategy",
          description: "Design automation architecture, choose tools, and plan implementation approach.",
          icon: "🔧",
        },
        {
          number: "03",
          title: "Tool Development",
          description: "Build custom scripts, bots, and automation tools tailored to your needs.",
          icon: "📈",
        },
        {
          number: "04",
          title: "Integration & Testing",
          description: "Integrate with existing systems, test thoroughly, and validate functionality.",
          icon: "🧠",
        },
        {
          number: "05",
          title: "Deployment & Monitoring",
          description: "Deploy automation solutions, set up monitoring, and provide training.",
          icon: "🔍",
        },
        {
          number: "06",
          title: "Optimization & Support",
          description: "Monitor performance, optimize workflows, and provide ongoing support.",
          icon: "🎓",
        },
      ],
    },
    ogImage: "https://entalogics.com/assets/og-automation.jpg",
    benefits: [
      "Significant time savings and efficiency gains",
      "Reduced human errors and manual work",
      "Improved consistency and reliability",
      "Better resource utilization",
      "Scalable automation solutions",
    ],
    timeline: "2-8 weeks depending on complexity",
    techStack: {
      backend: [
        { name: "Python", icon: "https://cdn.simpleicons.org/python" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
        { name: "PowerShell", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg" }
      ],
      tools: [
        { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier" },
        { name: "Selenium", icon: "https://cdn.simpleicons.org/selenium" },
        { name: "Puppeteer", icon: "https://cdn.simpleicons.org/puppeteer" },
        { name: "Slack", icon: "https://cdn.simpleicons.org/slack" },
        { name: "Discord", icon: "https://cdn.simpleicons.org/discord" }
      ],
    },
    useCases: [
      "Data processing and migration automation",
      "Customer service chatbot development",
      "Social media posting automation",
      "Email marketing automation",
      "File processing and organization",
      "Report generation and distribution",
    ],
    portfolio: [
      {
        title: "Customer Support Bot",
        description: "AI-powered chatbot for handling customer inquiries and support tickets",
        technologies: ["Python", "OpenAI API", "Slack API", "PostgreSQL"],
      },
      {
        title: "Data Processing Pipeline",
        description: "Automated data processing and reporting system for business analytics",
        technologies: ["Python", "Pandas", "Selenium", "AWS S3"],
      },
    ],
  },
}

export const getAllServiceSlugs = (): string[] => {
  return Object.keys(servicesData)
}

export const getServiceBySlug = (slug: string): Service | null => {
  return servicesData[slug] || null
}
