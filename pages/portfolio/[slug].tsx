import React from 'react';
import { useRouter } from 'next/router';

const portfolioItems = [
  {
    img: 'https://framerusercontent.com/images/aazHOm8q1Dle8CaB8mAB23Iug.jpg?scale-down-to=1024',
    alt: 'Portfolio 1',
    slug: 'browser-ghuin',
    title: 'Browser Development for Ghuin Company',
    caseStudy: 'Details about browser development for Ghuin Company.'
  },
  {
    img: 'https://framerusercontent.com/images/Sl4cFgp0S9EM73msgCfcHS06VU4.jpg',
    alt: 'Portfolio 2',
    slug: 'ai-saas',
    title: 'AI SaaS Platform for Innovators',
    caseStudy: 'Details about AI SaaS platform.'
  },
  {
    img: 'https://framerusercontent.com/images/igYVAioJ71gEVk6mBJiW2rfDF8.jpg',
    alt: 'Portfolio 3',
    slug: 'ecommerce-redesign',
    title: 'E-Commerce Redesign for SyntStore',
    caseStudy: 'Details about e-commerce redesign.'
  },
  {
    img: 'https://framerusercontent.com/images/hat47grEjBWfesZ7BaiBbeatQ.jpg',
    alt: 'Portfolio 4',
    slug: 'healthcare-app',
    title: 'Healthcare App for Medix',
    caseStudy: 'Details about healthcare app.'
  },
  {
    img: 'https://framerusercontent.com/images/xgykL3t2ZWDB14YtJW3oI1dd5RA.jpg',
    alt: 'Portfolio 5',
    slug: 'web3-wallet',
    title: 'Web3 Wallet for CryptoX',
    caseStudy: 'Details about web3 wallet.'
  },
  {
    img: 'https://framerusercontent.com/images/efhLWkFH29SDhozs7ZhlUgWAkjk.jpg',
    alt: 'Portfolio 6',
    slug: 'saas-dashboard',
    title: 'SaaS Dashboard for Finlytics',
    caseStudy: 'Details about SaaS dashboard.'
  },
  {
    img: 'https://framerusercontent.com/images/bHK8tjLNwXKFljRK6Gy7KZ6sc.jpg',
    alt: 'Portfolio 7',
    slug: 'custom-crm',
    title: 'Custom CRM for SalesPro',
    caseStudy: 'Details about custom CRM.'
  },
  {
    img: 'https://framerusercontent.com/images/7vdKibdfBacm0gh8GmZgZf2seUo.jpg',
    alt: 'Portfolio 8',
    slug: 'mobile-banking',
    title: 'Mobile Banking for Bankly',
    caseStudy: 'Details about mobile banking.'
  },
  {
    img: 'https://framerusercontent.com/images/fDwBP8JIoY7d98D09zaO17aug.jpg',
    alt: 'Portfolio 9',
    slug: 'logistics-platform',
    title: 'Logistics Platform for MoveIt',
    caseStudy: 'Details about logistics platform.'
  },
];

const PortfolioCaseStudy = () => {
  const router = useRouter();
  const { slug } = router.query;
  const item = portfolioItems.find(i => i.slug === slug);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
        <p className="text-gray-500">Sorry, we couldn't find this portfolio item.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-white dark:bg-[#0a1225]">
      <div className="max-w-2xl w-full mx-auto bg-white dark:bg-[#111A2F] rounded-2xl shadow-lg border border-gray-200 dark:border-blue-900/40 p-6 md:p-10 flex flex-col items-center">
        <img src={item.img} alt={item.alt} className="w-full h-64 object-cover rounded-xl mb-6" />
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 text-black dark:text-white">{item.title}</h1>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 text-center mb-4">{item.caseStudy}</p>
        <button onClick={() => router.back()} className="mt-4 px-5 py-2 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all">Back</button>
      </div>
    </div>
  );
};

export default PortfolioCaseStudy; 