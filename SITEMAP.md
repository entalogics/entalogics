# Entalogics Website Sitemap

## Overview
This document outlines the sitemap structure for the Entalogics website, including all pages, their priorities, and update frequencies.

## Sitemap Files Created

### 1. Static Sitemap (`public/sitemap.xml`)
- **Location**: `/public/sitemap.xml`
- **Purpose**: Static XML sitemap for search engines
- **Update**: Manual updates required when adding new pages

### 2. Dynamic Sitemap (`pages/sitemap.xml.tsx`)
- **Location**: `/pages/sitemap.xml.tsx`
- **Purpose**: Dynamic sitemap generation using Next.js
- **Update**: Automatically generates current date and can be extended for dynamic content

### 3. Robots.txt (`public/robots.txt`)
- **Location**: `/public/robots.txt`
- **Purpose**: Tells search engines how to crawl the site
- **Features**: References sitemap and sets crawl rules

## Page Structure & Priorities

### 🏠 Main Pages (Priority: 0.8-1.0)
| Page | URL | Priority | Change Frequency |
|------|-----|----------|------------------|
| Homepage | `/` | 1.0 | Weekly |
| Quote Request | `/quote` | 0.9 | Monthly |
| About | `/about` | 0.8 | Monthly |
| Chromium Browser | `/chromium-browser-development` | 0.8 | Monthly |

### 🛠️ Service Pages (Priority: 0.7-0.8)
| Service | URL | Priority | Change Frequency |
|---------|-----|----------|------------------|
| SaaS Development | `/services/saas-development` | 0.8 | Monthly |
| AI Apps Development | `/services/ai-apps-development` | 0.8 | Monthly |
| Web Development | `/services/web-development` | 0.8 | Monthly |
| Mobile App Development | `/services/mobile-app-development` | 0.8 | Monthly |
| Chromium Browser Development | `/services/chromium-browser-development` | 0.8 | Monthly |
| UI/UX Design | `/services/ui-ux-design` | 0.7 | Monthly |
| Desktop Software | `/services/desktop-software` | 0.7 | Monthly |
| DevOps Deployment | `/services/devops-deployment` | 0.7 | Monthly |
| Maintenance & Support | `/services/maintenance-support` | 0.7 | Monthly |
| Web3 & Trading | `/services/web3-trading` | 0.7 | Monthly |

### 📚 Content Pages (Priority: 0.6-0.7)
| Page | URL | Priority | Change Frequency |
|------|-----|----------|------------------|
| Portfolio | `/portfolio` | 0.7 | Monthly |
| Blog | `/blog` | 0.6 | Weekly |
| Case Studies | `/case-studies` | 0.6 | Monthly |

## Priority Guidelines

### Priority 1.0 (Highest)
- **Homepage**: Main landing page with highest visibility

### Priority 0.9 (Very High)
- **Quote Page**: High conversion potential
- **Contact Forms**: Lead generation pages

### Priority 0.8 (High)
- **Main Service Pages**: Core business offerings
- **About Page**: Company information
- **Key Service Pages**: Primary service offerings

### Priority 0.7 (Medium-High)
- **Secondary Services**: Supporting service pages
- **Portfolio**: Showcase work
- **Support Services**: Maintenance and operational services

### Priority 0.6 (Medium)
- **Blog**: Content marketing
- **Case Studies**: Detailed project examples

## Change Frequency Guidelines

### Weekly
- **Homepage**: Regular updates with new content
- **Blog**: New blog posts and content updates

### Monthly
- **Service Pages**: Periodic updates to service descriptions
- **About Page**: Company updates
- **Portfolio**: New project additions
- **Case Studies**: New case study additions

## SEO Benefits

### ✅ Search Engine Optimization
- **Better Indexing**: Helps search engines discover all pages
- **Priority Signaling**: Tells search engines which pages are most important
- **Update Frequency**: Helps search engines know how often to check for updates

### ✅ User Experience
- **Site Structure**: Clear organization of content
- **Navigation**: Logical page hierarchy
- **Accessibility**: Easy for users and search engines to navigate

## Maintenance

### Adding New Pages
1. **Static Sitemap**: Update `/public/sitemap.xml`
2. **Dynamic Sitemap**: Update `/pages/sitemap.xml.tsx`
3. **Robots.txt**: Add new page paths if needed

### Updating Existing Pages
1. **Content Updates**: Update `lastmod` date
2. **Priority Changes**: Adjust based on business importance
3. **Frequency Changes**: Update `changefreq` based on update schedule

### Best Practices
- ✅ Keep sitemap updated with new pages
- ✅ Use appropriate priorities for business goals
- ✅ Set realistic change frequencies
- ✅ Include all important pages
- ✅ Exclude admin/private pages
- ✅ Use canonical URLs
- ✅ Submit to search engines after updates

## Search Engine Submission

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your sitemap URL: `https://entalogics.com/sitemap.xml`
3. Monitor indexing status

### Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your sitemap URL: `https://entalogics.com/sitemap.xml`
3. Monitor indexing status

## Monitoring

### Key Metrics to Track
- **Indexed Pages**: Number of pages in search results
- **Crawl Errors**: Any issues with page crawling
- **Sitemap Status**: Whether sitemap is being read correctly
- **Page Performance**: How well pages rank in search results

### Tools
- **Google Search Console**: Primary monitoring tool
- **Bing Webmaster Tools**: Secondary monitoring
- **Screaming Frog**: Technical SEO audit tool
- **Ahrefs/SEMrush**: Competitive analysis

---

**Last Updated**: January 2024
**Next Review**: Monthly
**Maintained By**: Development Team
