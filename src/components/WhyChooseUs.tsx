import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Settings, Lock, Brain, Code2, MousePointerClick, Briefcase, Rocket, DollarSign, Shield, Globe, Star, Users } from 'lucide-react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700', '800', '900'], display: 'swap' });

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const CleanArchitectureIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12H36V36H12V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
      <path d="M18 18H30V30H18V18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 6V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 36V42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M42 24H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 24H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const ExpertTeamIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 26C29.5228 26 34 21.5228 34 16C34 10.4772 29.5228 6 24 6C18.4772 6 14 10.4772 14 16C14 21.5228 18.4772 26 24 26Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30.5 30.25C34.33 32.61 37 36.62 37 41V42H11V41C11 36.62 13.67 32.61 17.5 30.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </svg>
  );

  const ScalableSolutionsIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 38V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 38V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 38V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const stats = [
    { icon: <Brain className="w-5 h-5" />, value: "33+", label: "Products Launched" },
    { icon: <DollarSign className="w-5 h-5" />, value: "$40M+", label: "ARR Scaled" },
    { icon: <Shield className="w-5 h-5" />, value: "Privacy", label: "Focused Stack" },
    { icon: <Star className="w-5 h-5" />, value: "Top Rated", label: "Plus on Upwork" },
  ];

  // For mobile, sort by length ascending; for desktop, keep original order
  const coreBeliefs = [
    "Own what you ship",
    "Build smart, scalable code",
    "Think like product partners",
    "Communicate with logic",
    "Design for clarity & simplicity"
  ];

  const points = [
    {
      icon: <Code2 className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Full-Stack Specialization",
      desc: "We handle frontend, backend, and everything in between. No need to juggle multiple vendors. Our team consistently delivers a cohesive, fully integrated product."
    },
    {
      icon: <Settings className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Agile, Fast, Reliable",
      desc: "We follow Agile methodology with weekly sprints, milestone tracking, and regular demos. That means faster delivery cycles and zero guesswork for you."
    },
    {
      icon: <Lock className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Code That Won't Break",
      desc: "We write maintainable, scalable code with documentation and clean structure. Entalogics makes sure your product can evolve with future features or tech changes."
    },
    {
      icon: <MousePointerClick className="w-5 h-5 md:w-6 md:h-6" />,
      title: "UI/UX That Converts",
      desc: "We design interfaces that drive actions: improved usability, increased engagement, and higher ROI. Our UX/UI specialists make your visitors fall in love with your site/app."
    },
    {
      icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Industry-Specific Solutions",
      desc: "From healthcare to eCommerce to SaaS, we understand industry constraints and user expectations, building software that performs where it matters."
    },
    {
      icon: <Brain className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Post-Launch Partnership",
      desc: "We don't disappear after delivery. Our post-launch support ensures updates, improvements, and peace of mind as your product grows."
    }
  ];

  return (
    <section id="why-choose-us" className="relative bg-white dark:bg-[#0a1225] py-20 px-4 md:px-12 overflow-hidden">
      {/* Blurred background circles for RozmeriGPT effect */}
      <div className="absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full bg-blue-100/50 dark:bg-blue-600/5 blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-purple-100/50 dark:bg-purple-600/5 blur-3xl z-0 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div
          className="text-center mb-8 md:mb-12"
        >
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-2 md:mb-4 tracking-tight ${poppins.className}`}>
            Your <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Long-Term Tech Partner</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-4 md:mb-6 font-normal leading-relaxed">
            Entalogics was founded with one goal — to bring clarity and logic into software development. 
            We're a team of engineers, designers, and product minds helping founders go from idea to launch… with systems that scale.
          </p>
        </div>
        {/* Stats Block */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 md:flex md:flex-wrap justify-center items-center gap-4 mb-12 max-w-5xl mx-auto"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4 glass-light dark:glass-dark rounded-xl border border-gray-300 dark:border-blue-900/40 shadow-lg w-full aspect-[4/2] min-h-[110px] md:min-w-[220px] md:max-w-[260px] md:w-auto flex-1 lg:min-w-0 lg:max-w-none"
            >
              <span className="text-blue-600 dark:text-blue-400 mb-2">{stat.icon}</span>
              <div className="text-lg md:text-xl font-bold text-black dark:text-white">{stat.value}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
        {/* Core Beliefs */}
        <div
          className="mb-12"
        >
          <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white text-center mb-6">
            Our Core Beliefs
          </h3>
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 md:gap-4">
            {coreBeliefs.map((belief, idx) => (
              <span
                key={idx}
                className="px-2 py-1 md:px-5 md:py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-[11px] md:text-sm font-medium border border-blue-200 dark:border-blue-700 whitespace-nowrap"
              >
                {belief}
              </span>
            ))}
          </div>
        </div>

        <div
          className="text-center mb-8"
        >
          <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-4">Why Entalogics Is Your Go-to Development Agency</h3>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-normal">
            You'll find hundreds of full-stack development agencies out there. But Entalogics is different from all the mediocre ones. Here's how:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          {points.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start glass-light dark:glass-dark rounded-xl p-5 md:p-6 border border-gray-300 dark:border-blue-900/40 shadow-lg hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-200"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-3">
                {item.icon}
              </span>
              <h3 className="text-lg font-bold text-black dark:text-white mb-1 leading-tight">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-normal leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 