import { GetServerSideProps } from 'next';

const Sitemap = () => {
  // This component doesn't render anything
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://entalogics.com';
  
  // Define all static pages with enhanced SEO data
  const staticPages = [
    { 
      url: '/', 
      priority: '1.0', 
      changefreq: 'weekly',
      image: {
        loc: '/assets/og-image.jpg',
        title: 'Entalogics - Custom Software Development Agency',
        caption: 'Full-stack development agency specializing in SaaS, AI, and custom browser development'
      }
    },
    { 
      url: '/about', 
      priority: '0.8', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/about-hero.jpg',
        title: 'About Entalogics - Our Story',
        caption: 'Learn about our mission, team, and approach to software development'
      }
    },
    { 
      url: '/contact', 
      priority: '0.9', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/contact-hero.jpg',
        title: 'Contact Entalogics - Get Free Quote',
        caption: 'Ready to start your project? Get a free quote from our development team'
      }
    },
    { 
      url: '/services', 
      priority: '0.8', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/services-hero.jpg',
        title: 'Our Services - Software Development Solutions',
        caption: 'Comprehensive software development services from web apps to AI solutions'
      }
    },
    { 
      url: '/blog', 
      priority: '0.6', 
      changefreq: 'weekly',
      image: {
        loc: '/assets/blog-hero.jpg',
        title: 'Entalogics Blog - Software Development Insights',
        caption: 'Latest insights on SaaS, AI, and custom software development'
      }
    },
    { 
      url: '/portfolio', 
      priority: '0.7', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/portfolio-hero.jpg',
        title: 'Entalogics Portfolio - Our Work',
        caption: 'Showcase of our successful software development projects'
      }
    },
    { 
      url: '/privacy-policy', 
      priority: '0.3', 
      changefreq: 'yearly'
    },
    { 
      url: '/terms-and-conditions', 
      priority: '0.3', 
      changefreq: 'yearly'
    },
    { 
      url: '/gdpr', 
      priority: '0.3', 
      changefreq: 'yearly'
    }
  ];

  // Define all service pages with enhanced SEO data
  const servicePages = [
    { 
      url: '/services/saas-development', 
      priority: '0.8', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/services/saas.jpg',
        title: 'SaaS Product Development Services',
        caption: 'Complete SaaS solutions with billing, auth, and multi-tenant architecture'
      }
    },
    { 
      url: '/services/web-development', 
      priority: '0.8', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/services/web-app.jpg',
        title: 'Modern Web Application Development',
        caption: 'SEO-optimized web apps using Next.js, React, and modern stacks'
      }
    },
    { 
      url: '/services/ai-apps-development', 
      priority: '0.8', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/services/ai.jpg',
        title: 'AI-Powered Applications Development',
        caption: 'Custom AI solutions with LLM integration and agent workflows'
      }
    },
    { 
      url: '/services/desktop-mobile-app-development', 
      priority: '0.8', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/services/soft.jpg',
        title: 'Desktop & Mobile App Development',
        caption: 'Cross-platform desktop and mobile apps with native performance'
      }
    },
    { 
      url: '/services/chromium-browser-development', 
      priority: '0.8', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/services/chromium.jpg',
        title: 'Custom Chromium Browser Development',
        caption: 'Privacy-focused and enterprise browser solutions'
      }
    },
    { 
      url: '/services/ui-ux-design', 
      priority: '0.7', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/services/ui.jpg',
        title: 'UI/UX Design Services',
        caption: 'User-centered design from wireframes to functional interfaces'
      }
    },
    { 
      url: '/services/maintenance-support', 
      priority: '0.7', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/services/maintainance.jpg',
        title: 'Software Maintenance and Support',
        caption: '24/7 monitoring, updates, and proactive support'
      }
    },
    { 
      url: '/services/cloud-devops-solutions', 
      priority: '0.7', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/services/illlustration.jpg',
        title: 'Cloud & DevOps Solutions',
        caption: 'CI/CD pipelines and cloud deployment solutions'
      }
    },
    { 
      url: '/services/automation-workflow-tools', 
      priority: '0.7', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/services/soft.jpg',
        title: 'Automation & Workflow Tools',
        caption: 'Custom automation scripts and workflow systems'
      }
    }
  ];

  // Define blog posts with enhanced SEO data
  const blogPages = [
    { 
      url: '/blog/ai-development-trends-2024', 
      priority: '0.6', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/services/saas.jpg',
        title: 'AI Development Trends 2024 - Entalogics Blog',
        caption: 'Discover cutting-edge AI technologies and development approaches reshaping intelligent applications'
      }
    },
    { 
      url: '/blog/saas-architecture-best-practices', 
      priority: '0.6', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/services/web-app.jpg',
        title: 'SaaS Architecture Best Practices - Entalogics Blog',
        caption: 'Learn essential architectural patterns for building scalable SaaS applications'
      }
    },
    { 
      url: '/blog/mobile-app-performance-optimization', 
      priority: '0.6', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/services/mobile-app.jpg',
        title: 'Mobile App Performance Optimization - Entalogics Blog',
        caption: 'Proven techniques for optimizing mobile app performance and user experience'
      }
    }
  ];

  // Combine all pages
  const allPages = [...staticPages, ...servicePages, ...blogPages];

  // Generate XML sitemap with image support
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${page.image ? `
    <image:image>
      <image:loc>${baseUrl}${page.image.loc}</image:loc>
      <image:title>${page.image.title}</image:title>
      <image:caption>${page.image.caption}</image:caption>
    </image:image>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`;

  // Set headers
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
