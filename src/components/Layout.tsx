import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import CanonicalUrl from './CanonicalUrl';

interface LayoutProps {
  children: React.ReactNode;
  noPaddingTop?: boolean;
  canonicalPath?: string;
  noIndex?: boolean;
}

const Layout = ({ children, noPaddingTop = false, canonicalPath, noIndex = false }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a1225]">
      <Head>
        <meta name="description" content="Your full-stack development partner for modern startups and scaleups. From custom browsers to SaaS apps—designed, engineered, and launched with clarity." />
        <link rel="icon" href="/favicon.svg" />
        
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        
        {/* Language and locale */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Entalogics" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@entalogics" />
        <meta name="twitter:creator" content="@entalogics" />
        
        {/* Mobile app meta */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Entalogics" />
        <meta name="application-name" content="Entalogics" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      </Head>

      {/* Canonical URL component */}
      <CanonicalUrl path={canonicalPath} noIndex={noIndex} />

      <Header logoSrc="/assets/Favicon/Entalogics favicon blue color.svg" />

      <main className={`flex-grow ${noPaddingTop ? '' : 'pt-24'}`}>
        {children}
      </main>

      <Footer logoSrc="/assets/Favicon/Entalogics favicon blue color.svg" />
    </div>
  );
};

export default Layout; 