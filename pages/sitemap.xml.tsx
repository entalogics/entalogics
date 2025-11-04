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
      priority: '0.8', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/contact-hero.jpg',
        title: 'Contact Entalogics - Get in Touch',
        caption: 'Ready to start your project? Contact our development team'
      }
    },
    { 
      url: '/chromium-browser-development', 
      priority: '0.8', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/chromium-browser.jpg',
        title: 'Custom Chromium Browser Development',
        caption: 'Custom browser solutions for privacy, crypto, and enterprise use'
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
      url: '/case-studies', 
      priority: '0.6', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/case-studies.jpg',
        title: 'Case Studies - Entalogics Success Stories',
        caption: 'Detailed case studies of our software development projects'
      }
    },
    { 
      url: '/privacy-policy', 
      priority: '0.3', 
      changefreq: 'yearly'
    },
    { 
      url: '/terms-of-service', 
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
        loc: '/assets/saas-development.jpg',
        title: 'SaaS Product Development Services',
        caption: 'Complete SaaS solutions with billing, auth, and multi-tenant architecture'
      }
    },
    { 
      url: '/services/ai-apps-development', 
      priority: '0.8', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/ai-apps.jpg',
        title: 'AI-Powered Applications Development',
        caption: 'Custom AI solutions with LLM integration and agent workflows'
      }
    },
    { 
      url: '/services/web-development', 
      priority: '0.8', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/web-development.jpg',
        title: 'Modern Web Application Development',
        caption: 'SEO-optimized web apps using Next.js, React, and modern stacks'
      }
    },
    { 
      url: '/services/mobile-app-development', 
      priority: '0.8', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/mobile-apps.jpg',
        title: 'Mobile App Development Services',
        caption: 'Cross-platform mobile apps with Flutter and React Native'
      }
    },
    { 
      url: '/services/chromium-browser-development', 
      priority: '0.8', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/chromium-browser.jpg',
        title: 'Custom Chromium Browser Development',
        caption: 'Privacy-focused and enterprise browser solutions'
      }
    },
    { 
      url: '/services/ui-ux-design', 
      priority: '0.7', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/ui-ux-design.jpg',
        title: 'UI/UX Design Services',
        caption: 'User-centered design from wireframes to functional interfaces'
      }
    },
    { 
      url: '/services/desktop-software-development', 
      priority: '0.7', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/desktop-software.jpg',
        title: 'Desktop Software Development',
        caption: 'Cross-platform desktop applications with native OS integration'
      }
    },
    { 
      url: '/services/devops-deployment', 
      priority: '0.7', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/devops.jpg',
        title: 'DevOps and Deployment Services',
        caption: 'CI/CD pipelines and cloud deployment solutions'
      }
    },
    { 
      url: '/services/maintenance-support', 
      priority: '0.7', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/maintenance.jpg',
        title: 'Software Maintenance and Support',
        caption: '24/7 monitoring, updates, and proactive support'
      }
    },
    { 
      url: '/services/web3-trading', 
      priority: '0.7', 
      changefreq: 'monthly',
      image: {
        loc: '/assets/web3-trading.jpg',
        title: 'Web3 and Trading Platform Development',
        caption: 'Decentralized trading platforms with smart contract integration'
      }
    }
  ];

  // Combine all pages
  const allPages = [...staticPages, ...servicePages];

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
