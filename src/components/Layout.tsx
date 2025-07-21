import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  noPaddingTop?: boolean;
}

const Layout = ({ children, noPaddingTop = false }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a1225]">
      <Head>
        <title>Entalogics - We Build What Others Don’t Dare To</title>
        <meta name="description" content="Your full-stack development partner for modern startups and scaleups. From custom browsers to SaaS apps—designed, engineered, and launched with clarity." />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header />

      <main className={`flex-grow ${noPaddingTop ? '' : 'pt-24'}`}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout; 