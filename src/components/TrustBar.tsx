import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700', '800', '900'], display: 'swap' });

const logos = [
  { name: 'Marvian', src: '/assets/trustbar logos/marvian logo-01.svg' },
  { name: 'Matchups', src: '/assets/trustbar logos/Matchups Logo-01.svg' },
  { name: 'Aol', src: '/assets/trustbar logos/Aol Logo-01.svg' },
  { name: 'Upwork', src: '/assets/trustbar logos/Upwork Logo-01.svg' },
  { name: 'SentryBay', src: '/assets/trustbar logos/SentryBay-Limited-logo-01-01.svg' },
];

const TrustBar = () => {
  const { theme } = useTheme();
  const centralWidth = 40; // mobile default
  const centralWidthSm = 64; // desktop (increased)
  // Always use blue favicon for best contrast
  const faviconSrc = theme === 'dark'
    ? '/assets/Favicon/Entalogics favicon white color.svg'
    : '/assets/Favicon/Entalogics favicon blue color.svg';
  return (
    <section className="relative flex flex-col items-center justify-center py-4 sm:py-6 pb-0 mb-0 -mb-12 sm:-mt-24 bg-transparent overflow-visible" style={{ minHeight: 180 }}>
      {/* Heading and Subtitle - above tray */}
      <div className="container mx-auto px-2 sm:px-4 md:px-12 relative z-10 text-center mt-6 sm:mt-10 mb-0">
        <h2 className={`text-2xl md:text-3xl font-bold text-black dark:text-white mb-2 sm:mb-3 ${poppins.className}`}>
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Trusted</span> by Industry Leaders
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-2 sm:px-4 mt-2">
          From global startups to funded scaleups — Entalogics has partnered with 500+ teams building AI tools, custom software, and next-gen platforms.
        </p>
      </div>
      {/* Animated Logo Tray with Central Image */}
      <div className="relative w-full flex items-center justify-center" style={{ minHeight: 180 }}>
        {/* Central Highlighted Image */}
        <div className="absolute left-1/2 top-1/2 z-20 pointer-events-none"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <div className={
            `rounded-lg p-1.5 sm:p-2 backdrop-blur-md flex items-center justify-center w-[40px] h-[40px] sm:w-14 sm:h-14 ` +
            (theme === 'dark'
              ? 'bg-gradient-to-br from-blue-600 to-blue-900 border border-blue-400 shadow-[0_0_16px_4px_rgba(83,75,211,0.25)]'
              : 'bg-white/10 border border-blue-200 shadow-[0_0_16px_4px_rgba(98,92,208,0.15)]')
          }>
            <Image src={faviconSrc} alt="Entalogics Favicon" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" style={{ width: 'auto', height: 'auto' }} />
          </div>
        </div>
        {/* Logos Row: left-to-center (marquee, duplicated for smooth loop) */}
        <div className="absolute left-0 top-1/2 w-1/2 flex items-center justify-end overflow-hidden" style={{ transform: 'translateY(-50%)', height: centralWidth }}>
          <div className="marquee-track-ltr flex items-center gap-4 sm:gap-10" style={{ width: 'max-content', animation: 'marqueeLTR 24s linear infinite' }}>
            {[...logos, ...logos].map((logo, idx) => (
              <div key={logo.name + 'ltr' + idx} className="flex items-center justify-center min-w-[48px] sm:min-w-[90px] h-8 sm:h-12 transition">
                <Image src={logo.src} alt={logo.name} width={32} height={28} className="h-7 w-auto sm:h-8" loading="lazy" />
              </div>
            ))}
          </div>
          {/* Fade-out mask on right (center) */}
          <div className="absolute right-0 top-0 h-full" style={{ width: centralWidth, pointerEvents: 'none', background: 'linear-gradient(to right, transparent 60%, #fff 100%)' }} />
        </div>
        {/* Logos Row: right-to-center (marquee, duplicated for smooth loop) */}
        <div className="absolute right-0 top-1/2 w-1/2 flex items-center justify-start overflow-hidden" style={{ transform: 'translateY(-50%)', height: centralWidth }}>
          <div className="marquee-track-rtl flex items-center gap-4 sm:gap-10" style={{ width: 'max-content', animation: 'marqueeRTL 24s linear infinite' }}>
            {[...logos, ...logos].slice().reverse().map((logo, idx) => (
              <div key={logo.name + 'rtl' + idx} className="flex items-center justify-center min-w-[48px] sm:min-w-[90px] h-8 sm:h-12 transition">
                <Image src={logo.src} alt={logo.name} width={32} height={28} className="h-7 w-auto sm:h-8" loading="lazy" />
              </div>
            ))}
          </div>
          {/* Fade-out mask on left (center) */}
          <div className="absolute left-0 top-0 h-full" style={{ width: centralWidth, pointerEvents: 'none', background: 'linear-gradient(to left, transparent 60%, #fff 100%)' }} />
        </div>
      </div>
      <style>{`
        @keyframes marqueeLTR {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        @keyframes marqueeRTL {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .fade-out-right {
          mask-image: linear-gradient(to right, #000 80%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, #000 80%, transparent 100%);
        }
        .fade-out-left {
          mask-image: linear-gradient(to left, #000 80%, transparent 100%);
          -webkit-mask-image: linear-gradient(to left, #000 80%, transparent 100%);
        }
      `}</style>
    </section>
  );
};

export default TrustBar; 