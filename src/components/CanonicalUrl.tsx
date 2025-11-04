import Head from 'next/head';
import { useRouter } from 'next/router';

interface CanonicalUrlProps {
  path?: string;
  noIndex?: boolean;
}

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
      
      {/* Prevent indexing if specified */}
      {noIndex && (
        <meta name="robots" content="noindex, nofollow" />
      )}
      
      {/* Additional SEO meta tags */}
      <meta name="author" content="Entalogics" />
      <meta name="generator" content="Next.js" />
      
      {/* Open Graph canonical */}
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter canonical */}
      <meta name="twitter:url" content={canonicalUrl} />
      
      {/* Language and locale */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_US" />
      
      {/* Site verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Preconnect for critical resources */}
      <link rel="preconnect" href="https://entalogics.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
};

export default CanonicalUrl;
