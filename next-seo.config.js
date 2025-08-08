const siteConfig = {
  title: 'Entalogics - Custom Software Development Agency',
  titleTemplate: '%s | Entalogics',
  description: 'Full-stack development agency specializing in SaaS, AI, custom browsers, and scalable software solutions. From idea to launch with business logic baked in.',
  canonical: 'https://entalogics.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://entalogics.com',
    siteName: 'Entalogics',
    title: 'Entalogics - Custom Software Development Agency',
    description: 'Full-stack development agency specializing in SaaS, AI, custom browsers, and scalable software solutions.',
    images: [
      {
        url: 'https://entalogics.com/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Entalogics - Custom Software Development Agency',
      },
    ],
  },
  twitter: {
    handle: '@entalogics',
    site: '@entalogics',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    },
    {
      name: 'theme-color',
      content: '#3B82F6',
    },
    {
      name: 'msapplication-TileColor',
      content: '#3B82F6',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'Entalogics',
    },
    {
      name: 'application-name',
      content: 'Entalogics',
    },
    {
      name: 'format-detection',
      content: 'telephone=no',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.svg',
    },
    {
      rel: 'apple-touch-icon',
      href: '/assets/Favicon/Entalogics favicon blue color.svg',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      href: '/assets/Favicon/Entalogics favicon blue color.svg',
      sizes: '32x32',
      type: 'image/svg+xml',
    },
    {
      rel: 'icon',
      href: '/assets/Favicon/Entalogics favicon blue color.svg',
      sizes: '16x16',
      type: 'image/svg+xml',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
  ],
  additionalHeadTags: [
    {
      type: 'application/ld+json',
      content: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Entalogics',
        url: 'https://entalogics.com',
        logo: 'https://entalogics.com/assets/Favicon/Entalogics favicon blue color.svg',
        description: 'Full-stack development agency specializing in SaaS, AI, custom browsers, and scalable software solutions.',
        sameAs: [
          'https://twitter.com/entalogics',
          'https://linkedin.com/company/entalogics',
          'https://github.com/entalogics',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-555-123-4567',
          contactType: 'customer service',
          email: 'hello@entalogics.com',
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'US',
        },
        serviceArea: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 40.7128,
            longitude: -74.0060,
          },
          geoRadius: '50000',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Software Development Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'SaaS Development',
                description: 'Complete SaaS solutions with billing, auth, and multi-tenant architecture',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI Applications Development',
                description: 'Custom AI solutions with LLM integration and agent workflows',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Web Development',
                description: 'SEO-optimized web apps using Next.js, React, and modern stacks',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Mobile App Development',
                description: 'Cross-platform mobile apps with Flutter and React Native',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Chromium Browser Development',
                description: 'Custom browser solutions for privacy, crypto, and enterprise use',
              },
            },
          ],
        },
      }),
    },
  ],
};

// Page-specific SEO configurations
const pageConfigs = {
  home: {
    title: 'Custom Software Development | Entalogics',
    description: 'AI, SaaS, Web & App Development. We turn your idea into a logic-driven, scalable product. Built with clean code.',
    openGraph: {
      title: 'Entalogics - Scalable Software Development',
      description: 'We build AI and SaaS products that scale. From idea to launch, with business logic baked in.',
      images: [
        {
          url: 'https://entalogics.com/assets/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Entalogics - Custom software, AI, SaaS, and app development',
        },
      ],
    },
    twitter: {
      title: 'Entalogics - Build Better Software',
      description: 'AI, SaaS, and scalable apps — built clean, built right.',
    },
  },
  about: {
    title: 'About Us - Entalogics Software Development Agency',
    description: 'Learn about Entalogics, our mission, team, and approach to custom software development. We build scalable solutions for startups and enterprises.',
    openGraph: {
      title: 'About Entalogics - Our Story',
      description: 'Learn about our mission, team, and approach to software development',
    },
  },
  quote: {
    title: 'Get a Free Quote - Entalogics Software Development',
    description: 'Request a custom quote for your software development project. Get detailed pricing for SaaS, AI, web, mobile, and custom browser development.',
    openGraph: {
      title: 'Get a Free Quote - Entalogics',
      description: 'Request a custom quote for your software development project',
    },
  },
  services: {
    saas: {
      title: 'SaaS Development Services - Entalogics',
      description: 'Complete SaaS solutions with multi-tenant architecture, billing systems, user authentication, and API integrations. Built for scale.',
    },
    ai: {
      title: 'AI Applications Development - Entalogics',
      description: 'Custom AI solutions with LLM integration, agent workflows, and intelligent automation. From OpenAI to custom models.',
    },
    web: {
      title: 'Web Development Services - Entalogics',
      description: 'Modern web applications using Next.js, React, and SEO-optimized stacks. Fast, responsive, and conversion-focused.',
    },
    mobile: {
      title: 'Mobile App Development - Entalogics',
      description: 'Cross-platform mobile apps with Flutter and React Native. Native performance with rapid development.',
    },
    browser: {
      title: 'Custom Chromium Browser Development - Entalogics',
      description: 'Custom browser solutions for privacy, crypto trading, and enterprise use. Built on Chromium with advanced features.',
    },
  },
  blog: {
    title: 'Software Development Blog - Entalogics',
    description: 'Latest insights on SaaS development, AI applications, custom software, and technology trends. Expert perspectives from our development team.',
  },
  portfolio: {
    title: 'Our Work - Entalogics Portfolio',
    description: 'Showcase of successful software development projects. See our work in SaaS, AI, web applications, and custom solutions.',
  },
  contact: {
    title: 'Contact Us - Entalogics Software Development',
    description: 'Ready to start your project? Contact our development team for custom software solutions. Get in touch for a free consultation.',
  },
};

module.exports = {
  siteConfig,
  pageConfigs,
};
