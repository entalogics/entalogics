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
      keywords: 'top SaaS development company, best SaaS developers, leading SaaS development agency, premier SaaS development services, top subscription software developers, best multi-tenant architecture developers, SaaS development, subscription software, multi-tenant architecture, billing systems, user management'
    },
    {
      name: 'AI-Powered Applications',
      description: 'Custom AI solutions with LLM integration and agent workflows',
      keywords: 'top AI development company, best AI developers, leading AI development agency, premier AI development services, top machine learning developers, best LLM integration experts, AI development, machine learning, LLM integration, AI agents, artificial intelligence'
    },
    {
      name: 'Web Development',
      description: 'Modern web applications using React, Next.js, and TypeScript',
      keywords: 'top web development company, best web developers, leading web development agency, premier web development services, top React developers, best Next.js developers, web development, React, Next.js, TypeScript, frontend development, web applications'
    },
    {
      name: 'Mobile App Development',
      description: 'Cross-platform mobile apps with Flutter and React Native',
      keywords: 'top mobile app development company, best mobile app developers, leading mobile app development agency, premier mobile app development services, top Flutter developers, best React Native developers, mobile app development, Flutter, React Native, iOS, Android, cross-platform'
    },
    {
      name: 'Chromium Browser Development',
      description: 'Custom browser solutions for privacy, crypto, and enterprise use',
      keywords: 'top Chromium browser developers, best custom browser developers, leading browser development agency, premier Chromium development services, top privacy browser developers, best enterprise browser developers, Chromium browser, custom browser, privacy browser, enterprise browser, browser development'
    },
    {
      name: 'UI/UX Design',
      description: 'User-centered design from wireframes to functional interfaces',
      keywords: 'top UI UX design agency, best UI designers, leading UX design company, premier UI design services, top user experience designers, best interface design agency, UI design, UX design, user interface, user experience, design systems, wireframing'
    }
  ],
  
  // Target Keywords by Page
  keywords: {
    home: [
      'top development agency in US',
      'best software development company UK',
      'leading full-stack development agency',
      'top custom software developers',
      'premier AI development company',
      'best SaaS development agency',
      'top web development company',
      'leading mobile app developers',
      'top Chromium browser developers',
      'best software agency worldwide',
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
      'top development agency founder',
      'best software development team leader',
      'leading full-stack developer Umar Abdullah',
      'top AI development expert',
      'premier SaaS development founder',
      'best Chromium browser developer',
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
      'top software development services',
      'best SaaS development company',
      'leading AI development agency',
      'premier web development services',
      'top mobile app development company',
      'best UI UX design agency',
      'leading Chromium browser developers',
      'top maintenance support services',
      'best custom software developers',
      'premier full-stack development agency',
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
      home: 'Top Development Agency in US & UK | AI, SaaS & Web Apps | Entalogics',
      about: 'About Us | Leading Full-Stack Development Team | Top Developers | Entalogics',
      services: 'Top Software Development Services | Best AI, SaaS & Web Developers | Entalogics',
      contact: 'Contact Top Development Agency | Leading Software Developers | Entalogics',
      quote: 'Get Quote from Top Development Agency | Best Software Developers | Entalogics',
      blog: 'Blog | Top Development Agency Insights | Software Development | Entalogics',
      portfolio: 'Portfolio | Top Development Agency Projects | Best Software Developers | Entalogics'
    },
    description: {
      home: 'Leading development agency in US & UK. Top custom software developers specializing in AI applications, SaaS platforms, web apps, mobile apps, and Chromium browsers. Premier full-stack development with 5+ years expertise and 100+ successful projects.',
      about: 'Meet Umar Abdullah, founder of top development agency Entalogics. Leading full-stack developer with 5+ years experience in AI SaaS platforms, web applications, mobile apps, and custom Chromium browser development. Premier software development team delivering excellence.',
      services: 'Top software development services from leading agency. Best AI developers, premier SaaS development, top web developers, leading mobile app developers, and top Chromium browser developers. Expert team delivering scalable solutions worldwide.',
      contact: 'Contact top development agency Entalogics. Leading software developers specializing in AI, SaaS, web apps, mobile apps, and custom Chromium browser development. Get free consultation from premier development team.',
      quote: 'Get quote from top development agency Entalogics. Best software developers for AI applications, SaaS platforms, web apps, mobile apps, and Chromium browsers. Premier full-stack development services with fast response.',
      blog: 'Latest insights from top development agency Entalogics. Expert articles on software development, AI, SaaS, web development, and technology trends from leading developers worldwide.',
      portfolio: 'Explore portfolio of top development agency Entalogics. Successful AI applications, SaaS platforms, web apps, mobile apps, and custom Chromium browsers built by best software developers for clients worldwide.'
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
