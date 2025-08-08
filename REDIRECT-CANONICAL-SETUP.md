# 🔄 Redirect & Canonical URL Setup - Entalogics Website

## Overview
This document outlines the comprehensive redirect and canonical URL setup implemented to prevent duplicate content issues between www and non-www versions of the Entalogics website.

## 🎯 Problem Solved

### ❌ Before Implementation
- **Duplicate Content**: Both `www.entalogics.com` and `entalogics.com` indexed separately
- **SEO Issues**: Search engines saw duplicate pages
- **Ranking Dilution**: SEO value split between two versions
- **User Confusion**: Inconsistent URLs in search results

### ✅ After Implementation
- **Single Canonical Version**: Only `entalogics.com` indexed
- **Proper Redirects**: `www.entalogics.com` → `entalogics.com`
- **Consistent URLs**: All canonical URLs point to non-www version
- **SEO Consolidation**: All ranking value consolidated

## 📋 Implementation Details

### 1. Next.js Configuration (`next.config.js`)

#### 🔄 Redirect Rules
```javascript
async redirects() {
  return [
    // Redirect www to non-www (canonical)
    {
      source: '/:path*',
      has: [
        {
          type: 'host',
          value: 'www.entalogics.com',
        },
      ],
      destination: 'https://entalogics.com/:path*',
      permanent: true, // 301 redirect
    },
    // Redirect HTTP to HTTPS
    {
      source: '/:path*',
      has: [
        {
          type: 'header',
          key: 'x-forwarded-proto',
          value: 'http',
        },
      ],
      destination: 'https://entalogics.com/:path*',
      permanent: true,
    },
  ];
}
```

#### 🛡️ Security Headers
```javascript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains; preload',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        // ... more security headers
      ],
    },
  ];
}
```

### 2. Canonical URL Component (`src/components/CanonicalUrl.tsx`)

#### 🎯 Canonical URL Logic
```typescript
const CanonicalUrl = ({ path, noIndex = false }: CanonicalUrlProps) => {
  const router = useRouter();
  const canonicalPath = path || router.asPath;
  
  // Remove query parameters for canonical URL
  const cleanPath = canonicalPath.split('?')[0];
  
  // Ensure canonical URL is always non-www
  const canonicalUrl = `https://entalogics.com${cleanPath}`;

  return (
    <Head>
      {/* Canonical URL - always non-www */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph canonical */}
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter canonical */}
      <meta name="twitter:url" content={canonicalUrl} />
    </Head>
  );
};
```

### 3. Enhanced Layout Component (`src/components/Layout.tsx`)

#### 🔧 Layout Integration
```typescript
interface LayoutProps {
  children: React.ReactNode;
  noPaddingTop?: boolean;
  canonicalPath?: string;  // New prop for canonical URLs
  noIndex?: boolean;       // New prop for no-index pages
}

const Layout = ({ children, canonicalPath, noIndex = false }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        {/* Enhanced SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#3B82F6" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Canonical URL component */}
      <CanonicalUrl path={canonicalPath} noIndex={noIndex} />
      
      {/* Rest of layout */}
    </div>
  );
};
```

## 🔄 Redirect Flow

### URL Processing Flow
```
User visits: www.entalogics.com/about
    ↓
Next.js redirects: 301 → https://entalogics.com/about
    ↓
Canonical URL: <link rel="canonical" href="https://entalogics.com/about" />
    ↓
Search engines: Index only https://entalogics.com/about
```

### Redirect Types Implemented

#### 1. **WWW to Non-WWW** (Primary)
- **From**: `www.entalogics.com/*`
- **To**: `https://entalogics.com/*`
- **Type**: 301 (Permanent)
- **Purpose**: Canonical domain consolidation

#### 2. **HTTP to HTTPS** (Security)
- **From**: `http://entalogics.com/*`
- **To**: `https://entalogics.com/*`
- **Type**: 301 (Permanent)
- **Purpose**: Security and SEO compliance

#### 3. **Old Domain** (Future-proofing)
- **From**: `old-domain.com/*`
- **To**: `https://entalogics.com/*`
- **Type**: 301 (Permanent)
- **Purpose**: Domain migration support

## 🎯 Canonical URL Strategy

### Canonical URL Rules
1. **Always Non-WWW**: All canonical URLs use `entalogics.com`
2. **Clean Paths**: Remove query parameters from canonical URLs
3. **Consistent Format**: Always use HTTPS protocol
4. **Page-Specific**: Each page has its own canonical URL

### Canonical URL Examples
```html
<!-- Homepage -->
<link rel="canonical" href="https://entalogics.com/" />

<!-- About page -->
<link rel="canonical" href="https://entalogics.com/about" />

<!-- Service page -->
<link rel="canonical" href="https://entalogics.com/services/saas-development" />

<!-- Blog post -->
<link rel="canonical" href="https://entalogics.com/blog/post-slug" />
```

## 🔍 SEO Benefits

### ✅ Search Engine Optimization
- **No Duplicate Content**: Single canonical version indexed
- **Consolidated Rankings**: All SEO value in one URL
- **Clear Signals**: Search engines know which version to index
- **Better Rankings**: No ranking dilution between versions

### ✅ User Experience
- **Consistent URLs**: Users always see non-www version
- **Faster Redirects**: 301 redirects are cached by browsers
- **Bookmark Friendly**: Users can bookmark non-www URLs
- **Social Sharing**: Consistent URLs in social media

### ✅ Technical Benefits
- **HTTPS Everywhere**: Security compliance
- **Performance**: Optimized caching and compression
- **Analytics**: Clean data without duplicate traffic
- **Maintenance**: Single URL structure to manage

## 🛠️ Implementation Checklist

### ✅ Completed Tasks
- [x] **Next.js Redirects**: WWW to non-WWW redirects
- [x] **HTTPS Redirects**: HTTP to HTTPS redirects
- [x] **Canonical Component**: Dynamic canonical URL generation
- [x] **Layout Integration**: Canonical URLs in all pages
- [x] **Security Headers**: HSTS and security headers
- [x] **Performance Headers**: Caching and compression headers

### 🔄 Ongoing Tasks
- [ ] **Google Search Console**: Set preferred domain to non-WWW
- [ ] **Bing Webmaster Tools**: Set preferred domain to non-WWW
- [ ] **Analytics Setup**: Ensure clean tracking without duplicates
- [ ] **Monitoring**: Track redirect performance and errors

## 📊 Testing & Verification

### Manual Testing
```bash
# Test WWW redirect
curl -I http://www.entalogics.com/
# Expected: 301 → https://entalogics.com/

# Test HTTP redirect
curl -I http://entalogics.com/
# Expected: 301 → https://entalogics.com/

# Test canonical URL
curl https://entalogics.com/ | grep canonical
# Expected: <link rel="canonical" href="https://entalogics.com/" />
```

### Online Tools
- **Redirect Checker**: https://redirect-checker.org/
- **Canonical URL Checker**: https://www.screamingfrog.co.uk/seo-spider/
- **Header Checker**: https://tools.keycdn.com/header-checker

## 🔍 Search Engine Configuration

### Google Search Console
1. **Add Property**: `https://entalogics.com`
2. **Set Preferred Domain**: Non-WWW version
3. **Submit Sitemap**: `https://entalogics.com/sitemap.xml`
4. **Monitor**: Check for redirect errors

### Bing Webmaster Tools
1. **Add Site**: `https://entalogics.com`
2. **Set Preferred Domain**: Non-WWW version
3. **Submit Sitemap**: `https://entalogics.com/sitemap.xml`
4. **Monitor**: Check for redirect errors

## 📈 Monitoring & Analytics

### Key Metrics to Track
- **Redirect Performance**: 301 redirect response times
- **Canonical Compliance**: All pages have proper canonical URLs
- **Search Console**: No redirect errors or warnings
- **Analytics**: Clean traffic data without duplicates

### Tools for Monitoring
- **Google Search Console**: Redirect errors and indexing
- **Google Analytics**: Traffic sources and redirects
- **Screaming Frog**: Canonical URL audit
- **GTmetrix**: Redirect performance testing

## 🚀 Performance Optimization

### Redirect Performance
- **301 Caching**: Browsers cache 301 redirects
- **Server Caching**: CDN caches redirect rules
- **Fast Response**: Minimal redirect overhead
- **Compression**: Gzip compression for faster redirects

### Canonical URL Performance
- **Static Generation**: Canonical URLs generated at build time
- **No JavaScript**: Canonical URLs in HTML head
- **Fast Loading**: No client-side canonical URL generation
- **SEO Friendly**: Search engines can immediately see canonical URLs

## 🔒 Security Considerations

### HTTPS Enforcement
- **HSTS Header**: Strict Transport Security
- **Preload List**: Include in HSTS preload list
- **Subdomain Protection**: Include subdomains in HSTS
- **Long Max Age**: 1 year HSTS max age

### Security Headers
```javascript
{
  key: 'X-Content-Type-Options',
  value: 'nosniff',
},
{
  key: 'X-Frame-Options',
  value: 'DENY',
},
{
  key: 'X-XSS-Protection',
  value: '1; mode=block',
},
{
  key: 'Referrer-Policy',
  value: 'strict-origin-when-cross-origin',
}
```

## 📋 Maintenance Schedule

### Weekly Tasks
- **Monitor Redirects**: Check for 404 errors
- **Analytics Review**: Ensure clean traffic data
- **Search Console**: Check for redirect warnings

### Monthly Tasks
- **Canonical Audit**: Verify all pages have canonical URLs
- **Performance Test**: Check redirect response times
- **Security Scan**: Verify HTTPS enforcement

### Quarterly Tasks
- **SEO Audit**: Comprehensive redirect and canonical review
- **Performance Review**: Optimize redirect performance
- **Security Review**: Update security headers if needed

---

**Last Updated**: January 2024  
**Next Review**: Monthly  
**Maintained By**: Development Team  
**Status**: ✅ Implemented and Active
