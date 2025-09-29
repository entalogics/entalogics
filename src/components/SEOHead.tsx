import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  structuredData?: any;
  canonicalUrl?: string;
}

const SEOHead = ({
  title = "Entalogics - Custom Software Development Agency",
  description = "Full-stack development agency specializing in AI, SaaS, web apps, mobile apps, and custom Chromium browser development. We turn your idea into a scalable product with clean code.",
  keywords = "software development, AI development, SaaS development, web development, mobile app development, Chromium browser development, custom software, full-stack development, React, Next.js, TypeScript, Node.js, Python, Flutter, React Native",
  image = "https://entalogics.com/assets/og-image.jpg",
  url,
  type = "website",
  author = "Entalogics",
  publishedTime,
  modifiedTime,
  noIndex = false,
  structuredData,
  canonicalUrl
}: SEOHeadProps) => {
  const router = useRouter();
  const baseUrl = 'https://entalogics.com';
  const fullUrl = url || `${baseUrl}${router.asPath}`;
  const canonical = canonicalUrl || fullUrl;

  // Enhanced title with brand consistency
  const fullTitle = title.includes('Entalogics') ? title : `${title} | Entalogics`;

  // Enhanced description with length optimization
  const optimizedDescription = description.length > 160 
    ? description.substring(0, 157) + '...'
    : description;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={optimizedDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Language and Locale */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_US" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${title} - Entalogics`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Entalogics" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${title} - Entalogics`} />
      <meta name="twitter:site" content="@entalogics" />
      <meta name="twitter:creator" content="@entalogics" />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:author" content={author} />
          <meta property="article:section" content="Technology" />
          <meta property="article:tag" content="Software Development" />
          {modifiedTime && (
            <meta property="article:modified_time" content={modifiedTime} />
          )}
        </>
      )}
      
      {/* Service specific meta tags */}
      {type === 'service' && (
        <>
          <meta property="service:name" content={title} />
          <meta property="service:description" content={description} />
          <meta property="service:provider" content="Entalogics" />
        </>
      )}
      
      {/* Additional SEO Meta Tags */}
      <meta name="generator" content="Next.js" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Entalogics" />
      <meta name="application-name" content="Entalogics" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//app.cal.com" />
      
      {/* Preconnect for Critical Resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://entalogics.com" />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/assets/Favicon/Entalogics favicon blue color.svg" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2)
          }}
        />
      )}
    </Head>
  );
};

export default SEOHead;
