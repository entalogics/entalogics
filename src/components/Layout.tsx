import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import CanonicalUrl from './CanonicalUrl';
import SEOHead from './SEOHead';
import StructuredData from './StructuredData';
import PerformanceOptimizer from './PerformanceOptimizer';

interface LayoutProps {
  children: React.ReactNode;
  noPaddingTop?: boolean;
  canonicalPath?: string;
  noIndex?: boolean;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    type?: 'website' | 'article' | 'service';
    structuredData?: any;
  };
}

const Layout = ({ children, noPaddingTop = false, canonicalPath, noIndex = false, seo }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a1225]">
      {/* Enhanced SEO Head */}
      <SEOHead
        title={seo?.title}
        description={seo?.description}
        keywords={seo?.keywords}
        image={seo?.image}
        type={seo?.type}
        noIndex={noIndex}
        canonicalUrl={canonicalPath ? `https://entalogics.com${canonicalPath}` : undefined}
        structuredData={seo?.structuredData}
      />

      {/* Organization Structured Data */}
      <StructuredData type="organization" />

      {/* Performance Optimizer */}
      <PerformanceOptimizer
        preloadImages={[
          '/assets/og-image.jpg',
          '/about.png',
          '/umar.jpg'
        ]}
      />

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