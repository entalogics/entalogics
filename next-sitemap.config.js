/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://entalogics.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*', '/_next/*', '/404'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
    additionalSitemaps: [],
  },
  // Note: next-sitemap automatically discovers routes from getStaticPaths
  // So we don't need additionalPaths - it will find all dynamic routes automatically
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.7
    let changefreq = 'monthly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'weekly'
    } else if (path === '/about' || path === '/contact-us') {
      priority = 0.8
      changefreq = 'monthly'
    } else if (path === '/services' || path === '/technologies') {
      priority = 0.8
      changefreq = 'monthly'
    } else if (path === '/blog') {
      priority = 0.6
      changefreq = 'weekly'
    } else if (path === '/portfolio') {
      priority = 0.7
      changefreq = 'monthly'
    } else if (path === '/faqs' || path === '/team') {
      priority = 0.6
      changefreq = 'monthly'
    } else if (path === '/founder') {
      priority = 0.5
      changefreq = 'monthly'
    } else if (path.includes('/privacy-policy') || path.includes('/gdpr') || path.includes('/terms')) {
      priority = 0.3
      changefreq = 'yearly'
    } else if (path.includes('/services/')) {
      priority = 0.8
      changefreq = 'monthly'
    } else if (path.includes('/technologies/')) {
      priority = 0.7
      changefreq = 'monthly'
    } else if (path.includes('/blog/')) {
      priority = 0.6
      changefreq = 'weekly'
    } else if (path.startsWith('/hire-')) {
      priority = 0.7
      changefreq = 'monthly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}
