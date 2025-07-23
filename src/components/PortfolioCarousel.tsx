import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

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

const PortfolioCarousel = () => {
  const carouselRef = useRef<HTMLUListElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [lastTouched, setLastTouched] = useState<number | null>(null);
  const router = useRouter();

  // Duplicate items for seamless infinite scroll
  const items = [...portfolioItems, ...portfolioItems];

  // Auto-scroll logic
  useEffect(() => {
    if (!carouselRef.current) return;
    let frame: number;
    let lastTimestamp: number | null = null;
    const speed = 0.2; // px/ms (slower)

    function step(ts: number) {
      if (isInteracting || isHovered !== null) {
        lastTimestamp = ts;
        frame = requestAnimationFrame(step);
        return;
      }
      if (lastTimestamp !== null && carouselRef.current) {
        carouselRef.current.scrollLeft += (ts - lastTimestamp) * speed;
        // Loop logic
        const totalWidth = carouselRef.current.scrollWidth / 2;
        if (carouselRef.current.scrollLeft >= totalWidth) {
          carouselRef.current.scrollLeft -= totalWidth;
        }
      }
      lastTimestamp = ts;
      frame = requestAnimationFrame(step);
    }
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInteracting, isHovered]);

  // Pause auto-scroll on user interaction
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const onDown = (e: MouseEvent | TouchEvent) => {
      setIsInteracting(true);
      isDragging = true;
      startX = 'touches' in e ? e.touches[0].pageX : (e as MouseEvent).pageX;
      scrollLeft = el.scrollLeft;
    };
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const x = 'touches' in e ? e.touches[0].pageX : (e as MouseEvent).pageX;
      el.scrollLeft = scrollLeft - (x - startX);
    };
    const onUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };
    el.addEventListener('mousedown', onDown);
    el.addEventListener('touchstart', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    return () => {
      el.removeEventListener('mousedown', onDown);
      el.removeEventListener('touchstart', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  const handleCardClick = (slug: string) => {
    router.push(`/portfolio/${slug}`);
  };

  return (
    <section id="portfolio" className="relative w-full py-16 px-2 md:px-8 bg-transparent overflow-hidden">
      {/* Blurred background circles for gradient effect */}
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-purple-100/50 dark:bg-purple-600/10 blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute top-1/2 -left-40 w-[480px] h-[480px] rounded-full bg-blue-100/50 dark:bg-blue-600/10 blur-3xl z-0 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-black dark:text-white">
          Our Work <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Speaks for Itself</span>
        </h2>
        <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 font-normal leading-relaxed text-center mb-8 max-w-2xl mx-auto">
          From AI-native platforms to custom browsers and full-stack SaaS — here's what we've shipped.
        </p>
        <div className="relative">
          {/* Fade mask left */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10" style={{maskImage:'linear-gradient(to right,rgba(0,0,0,0) 0%,#000 100%)',WebkitMaskImage:'linear-gradient(to right,rgba(0,0,0,0) 0%,#000 100%)'}} />
          {/* Fade mask right */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10" style={{maskImage:'linear-gradient(to left,rgba(0,0,0,0) 0%,#000 100%)',WebkitMaskImage:'linear-gradient(to left,rgba(0,0,0,0) 0%,#000 100%)'}} />
          <ul
            ref={carouselRef}
            className="flex gap-6 py-2 px-1 no-scrollbar select-none"
            style={{scrollSnapType:'x mandatory',WebkitOverflowScrolling:'touch',overflowX:'auto',overflowY:'hidden'}}
          >
            {items.map((item, idx) => (
              <li
                key={idx}
                className="flex-shrink-0 group"
                style={{width:'90vw',maxWidth:407,minWidth:240,height:308, position:'relative'}}
                onMouseEnter={() => setIsHovered(idx)}
                onMouseLeave={() => setIsHovered(null)}
                onTouchStart={e => {
                  // Only show overlay on tap, not scroll
                  if (lastTouched !== idx) {
                    setIsHovered(idx);
                    setLastTouched(idx);
                  } else {
                    setIsHovered(null);
                    setLastTouched(null);
                  }
                }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg glass-light dark:glass-dark border border-gray-300 dark:border-white/10" style={{}}>
                  <div className="absolute inset-0 z-0">
                    <Image src={item.img} alt={item.alt} fill className="w-full h-full object-cover object-top rounded-2xl" sizes="(max-width: 600px) 90vw, 407px" priority={idx < 2} />
                  </div>
                  <div className="absolute inset-0 z-10" style={{background:'linear-gradient(180deg,rgba(11,13,20,0) 75%,#0b0d14 100%)',borderRadius:16}} />
                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 z-20 flex flex-col items-center justify-center transition-opacity duration-200 ${isHovered === idx ? 'opacity-100 bg-black/60' : 'opacity-0 pointer-events-none'}`}
                    style={{touchAction:'manipulation'}}
                  >
                    <div
                      className="portfolio-card-title text-white text-xs sm:text-sm md:text-base font-semibold text-center px-2 md:px-4 mb-2 md:mb-3 max-w-[90%] truncate md:whitespace-normal"
                    >
                      {item.title}
                    </div>
                    <button
                      className="portfolio-card-btn text-xs sm:text-sm px-3 py-1 rounded-full bg-white/90 text-black font-semibold shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all"
                      style={{marginTop:4}}
                      onClick={e => { e.stopPropagation(); handleCardClick(item.slug); setIsHovered(null); setLastTouched(null); }}
                    >
                      view case study
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel; 