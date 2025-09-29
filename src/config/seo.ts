// SEO Configuration for Entalogics
// Centralized SEO settings and constants

export const SEO_CONFIG = {
  // Site Information
  siteName: 'Entalogics',
  siteUrl: 'https://entalogics.com',
  siteDescription: 'Full-stack development agency specializing in custom software, AI applications, and browser development. We turn your idea into a scalable product with clean code and business logic.',
  
  // Default Meta Tags
  defaultTitle: 'Entalogics - Custom Software Development Agency',
  defaultDescription: 'Transform your ideas into scalable software products. Expert full-stack development for AI applications, SaaS platforms, web apps, mobile apps, and custom Chromium browsers.',
  defaultKeywords: 'custom software development, AI development, SaaS development, web application development, mobile app development, Chromium browser development, full-stack development, React, Next.js, TypeScript, Node.js, Python, Flutter, React Native, software agency, startup development, scaleup development',
  defaultImage: 'https://entalogics.com/assets/og-image.jpg',
  
  // Social Media
  twitterHandle: '@entalogics',
  facebookAppId: 'your-facebook-app-id',
  
  // Organization Details
  organization: {
    name: 'Entalogics',
    url: 'https://entalogics.com',
    logo: 'https://entalogics.com/logo.svg',
    description: 'Full-stack development agency specializing in custom software, AI applications, and browser development',
    foundingDate: '2019',
    founder: {
      name: 'Umar Abdullah',
      jobTitle: 'Founder & Lead Developer'
    },
    address: {
      addressCountry: 'US'
    },
    contactPoint: {
      telephone: '+1-555-0123',
      contactType: 'customer service',
      email: 'info@entalogics.com'
    },
    sameAs: [
      'https://github.com/entalogics',
      'https://linkedin.com/company/entalogics'
    ]
  },
  
  // Service Categories
  services: [
    {
      name: 'SaaS Development',
      description: 'Complete SaaS solutions with billing, auth, and multi-tenant architecture',
      keywords: 'SaaS development, subscription software, multi-tenant architecture, billing systems, user management'
    },
    {
      name: 'AI-Powered Applications',
      description: 'Custom AI solutions with LLM integration and agent workflows',
      keywords: 'AI development, machine learning, LLM integration, AI agents, artificial intelligence'
    },
    {
      name: 'Web Development',
      description: 'Modern web applications using React, Next.js, and TypeScript',
      keywords: 'web development, React, Next.js, TypeScript, frontend development, web applications'
    },
    {
      name: 'Mobile App Development',
      description: 'Cross-platform mobile apps with Flutter and React Native',
      keywords: 'mobile app development, Flutter, React Native, iOS, Android, cross-platform'
    },
    {
      name: 'Chromium Browser Development',
      description: 'Custom browser solutions for privacy, crypto, and enterprise use',
      keywords: 'Chromium browser, custom browser, privacy browser, enterprise browser, browser development'
    },
    {
      name: 'UI/UX Design',
      description: 'User-centered design from wireframes to functional interfaces',
      keywords: 'UI design, UX design, user interface, user experience, design systems, wireframing'
    }
  ],
  
  // Target Keywords by Page
  keywords: {
    home: [
      'custom software development',
      'AI development',
      'SaaS development',
      'web application development',
      'mobile app development',
      'Chromium browser development',
      'full-stack development',
      'software agency',
      'startup development',
      'scaleup development'
    ],
    about: [
      'about Entalogics',
      'Umar Abdullah',
      'development team',
      'full-stack developers',
      'AI development team',
      'SaaS development experts',
      'Chromium browser developers',
      'software development company',
      'web development team',
      'mobile app developers',
      'founder',
      'lead developer',
      '5 years experience',
      'client-focused',
      'expert team'
    ],
    services: [
      'software development services',
      'SaaS development',
      'AI development',
      'web development',
      'mobile app development',
      'UI UX design',
      'Chromium browser development',
      'maintenance support',
      'custom software',
      'full-stack development',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Python',
      'Flutter',
      'React Native',
      'enterprise solutions',
      'startup development'
    ],
    contact: [
      'contact Entalogics',
      'get in touch',
      'software development consultation',
      'project inquiry',
      'development team contact',
      'quote request',
      'free consultation',
      'development services'
    ],
    quote: [
      'get quote',
      'free quote',
      'project quote',
      'development cost',
      'software development pricing',
      'custom software quote',
      'AI development quote',
      'SaaS development quote',
      'web development quote',
      'mobile app development quote'
    ]
  },
  
  // Meta Tag Templates
  metaTemplates: {
    title: {
      home: 'Custom Software Development | AI, SaaS & Web Apps | Entalogics',
      about: 'About Us | Expert Full-Stack Development Team | Entalogics',
      services: 'Software Development Services | AI, SaaS, Web & Mobile Apps | Entalogics',
      contact: 'Contact Us | Get in Touch with Our Development Team | Entalogics',
      quote: 'Get Free Quote | Custom Software Development | Entalogics',
      blog: 'Blog | Software Development Insights | Entalogics',
      portfolio: 'Portfolio | Our Development Projects | Entalogics'
    },
    description: {
      home: 'Transform your ideas into scalable software products. Expert full-stack development for AI applications, SaaS platforms, web apps, mobile apps, and custom Chromium browsers. From concept to launch with clean code and business logic.',
      about: 'Meet Umar Abdullah and the Entalogics team of expert full-stack developers. 5+ years experience in AI SaaS platforms, web applications, mobile apps, and custom Chromium browser development. Learn about our mission, expertise, and client-focused approach.',
      services: 'Comprehensive software development services including SaaS development, AI-powered applications, web development, mobile apps, UI/UX design, Chromium browser development, and maintenance support. Expert team delivering scalable solutions.',
      contact: 'Ready to start your project? Contact our expert development team for a free consultation. We specialize in AI, SaaS, web apps, mobile apps, and custom Chromium browser development.',
      quote: 'Get a free quote for your custom software development project. Expert full-stack development for AI applications, SaaS platforms, web apps, mobile apps, and Chromium browsers. No obligation, fast response.',
      blog: 'Latest insights on software development, AI, SaaS, web development, and technology trends. Expert articles from our development team at Entalogics.',
      portfolio: 'Explore our portfolio of successful software development projects. AI applications, SaaS platforms, web apps, mobile apps, and custom Chromium browsers built for clients worldwide.'
    }
  },
  
  // Performance Settings
  performance: {
    preloadImages: [
      '/assets/og-image.jpg',
      '/about.png',
      '/umar.jpg',
      '/logo.svg',
      '/assets/Favicon/Entalogics favicon blue color.svg'
    ],
    criticalResources: [
      'https://fonts.googleapis.com/css2?family=Sora:wght@400;600;800&family=Inter:wght@400;600;800;900&family=Poppins:wght@400;600;700;800;900&display=swap'
    ]
  },
  
  // Analytics and Tracking
  analytics: {
    googleAnalytics: 'GA_MEASUREMENT_ID', // Replace with actual GA4 ID
    googleTagManager: 'GTM-XXXXXXX', // Replace with actual GTM ID
    facebookPixel: 'FB_PIXEL_ID', // Replace with actual Facebook Pixel ID
    hotjar: 'HOTJAR_ID' // Replace with actual Hotjar ID
  },
  
  // Search Console
  searchConsole: {
    googleSiteVerification: 'your-google-verification-code',
    bingSiteVerification: 'your-bing-verification-code',
    yandexVerification: 'your-yandex-verification-code'
  }
};

// Helper functions for SEO
export const generateTitle = (page: keyof typeof SEO_CONFIG.metaTemplates.title, customTitle?: string): string => {
  return customTitle || SEO_CONFIG.metaTemplates.title[page] || SEO_CONFIG.defaultTitle;
};

export const generateDescription = (page: keyof typeof SEO_CONFIG.metaTemplates.description, customDescription?: string): string => {
  return customDescription || SEO_CONFIG.metaTemplates.description[page] || SEO_CONFIG.defaultDescription;
};

export const generateKeywords = (page: keyof typeof SEO_CONFIG.keywords, customKeywords?: string): string => {
  const pageKeywords = SEO_CONFIG.keywords[page] || [];
  const allKeywords = customKeywords ? `${customKeywords}, ${pageKeywords.join(', ')}` : pageKeywords.join(', ');
  return allKeywords;
};

export const generateCanonicalUrl = (path: string): string => {
  return `${SEO_CONFIG.siteUrl}${path}`;
};

export const generateImageUrl = (imagePath: string): string => {
  return imagePath.startsWith('http') ? imagePath : `${SEO_CONFIG.siteUrl}${imagePath}`;
};
