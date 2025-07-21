import React from 'react';

const logos = [
  { name: 'Marvian', src: '/assets/trustbar logos/marvian logo-01.svg' },
  { name: 'Matchups', src: '/assets/trustbar logos/Matchups Logo-01.svg' },
  { name: 'Aol', src: '/assets/trustbar logos/Aol Logo-01.svg' },
  { name: 'Upwork', src: '/assets/trustbar logos/Upwork Logo-01.svg' },
  { name: 'SentryBay', src: '/assets/trustbar logos/SentryBay-Limited-logo-01-01.svg' },
];

const TrustBar = () => {
  return (
    <section className="pt-6 pb-6 bg-white dark:bg-[#0a1225] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Blurred background circles for RozmeriGPT effect */}
      <div className="absolute -top-12 -left-12 w-72 h-72 rounded-full bg-blue-100/40 dark:bg-blue-600/5 blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-purple-100/40 dark:bg-purple-600/5 blur-3xl z-0 pointer-events-none"></div>
      {/* Section Title and Subtitle */}
      <div className="container mx-auto px-[20px] md:px-12 relative z-10 text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-2 sm:mb-3">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Trusted</span> by Industry Leaders
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-2 sm:px-4 mt-2">
          From global startups to funded scaleups — Entalogics has partnered with 500+ teams building AI tools, custom software, and next-gen platforms.
        </p>
      </div>
      <div className="w-full overflow-hidden">
        <div className="flex items-center gap-8 md:gap-12 animate-marquee whitespace-nowrap will-change-transform px-2 md:px-0" style={{animation: 'marquee 32s linear infinite'}}>
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={logo.name + idx} className="flex items-center justify-center min-w-[64px] md:min-w-[90px] h-10 md:h-12 transition-all">
              <img src={logo.src} alt={logo.name} className="h-8 md:h-10 w-auto object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Tagline */}
      <div className="relative z-10 text-center mt-6 px-4">
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          "Rated 5.0 on Upwork, loved by 500+ founders, backed by code that scales."
        </p>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustBar; 