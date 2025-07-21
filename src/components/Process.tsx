import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Phone, Target, Palette, Code, Shield, Rocket } from 'lucide-react';

const stepVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.25, duration: 0.7, type: 'spring', bounce: 0.18 } }),
  exit: { opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.5 } }
};

const Process = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [stepInView, setStepInView] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const scrollY = window.scrollY + window.innerHeight * 0.8;
      let newStep = 0;
      for (let i = 0; i < processSteps.length; i++) {
        const stepOffset = sectionTop + 120 + i * 120; // 120px per step
        if (scrollY > stepOffset) newStep = i + 1;
      }
      setStepInView(newStep);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [inView, controls]);

  const processSteps = [
    {
      step: '1',
      title: 'Discovery Call',
      description: 'We understand your goals, challenges, and what your users actually need.',
      icon: <Phone className="w-8 h-8" />,
      accentColor: 'neon-cyan',
      details: [
        'Initial consultation and requirements gathering',
        'Understanding your business objectives',
        'Identifying user needs and pain points',
        'Defining project scope and timeline'
      ]
    },
    {
      step: '2',
      title: 'Strategy & Planning',
      description: 'We define tech stack, timelines, and milestones. You get a clear roadmap from day one.',
      icon: <Target className="w-8 h-8" />,
      accentColor: 'neon-orange',
      details: [
        'Technology stack selection',
        'Project timeline and milestones',
        'Resource allocation and team structure',
        'Risk assessment and mitigation strategies'
      ]
    },
    {
      step: '3',
      title: 'Design & Prototyping',
      description: 'You\'ll see your product early — clickable, testable, and feedback-ready before we write a single line of code.',
      icon: <Palette className="w-8 h-8" />,
      accentColor: 'neon-cyan',
      details: [
        'UI/UX design and wireframing',
        'Interactive prototypes and mockups',
        'User testing and feedback collection',
        'Design system and component library'
      ]
    },
    {
      step: '4',
      title: 'Development',
      description: 'We build in agile sprints with weekly updates. You stay in control — no surprises.',
      icon: <Code className="w-8 h-8" />,
      accentColor: 'neon-orange',
      details: [
        'Agile development with weekly sprints',
        'Regular demos and progress updates',
        'Code reviews and quality assurance',
        'Continuous integration and deployment'
      ]
    },
    {
      step: '5',
      title: 'Testing & QA',
      description: 'We break it before users do. Every screen, flow, and feature is stress-tested and validated.',
      icon: <Shield className="w-8 h-8" />,
      accentColor: 'neon-cyan',
      details: [
        'Comprehensive testing across devices',
        'Performance and security testing',
        'User acceptance testing',
        'Bug fixes and optimization'
      ]
    },
    {
      step: '6',
      title: 'Launch & Support',
      description: 'We go live, track performance, and stay available for quick fixes, iterations, or scaling.',
      icon: <Rocket className="w-8 h-8" />,
      accentColor: 'neon-orange',
      details: [
        'Production deployment and launch',
        'Performance monitoring and analytics',
        'Ongoing support and maintenance',
        'Feature updates and enhancements'
      ]
    }
  ];

  return (
    <section id="process" className="relative isolate bg-gray-50 dark:bg-[#0D1526] py-20 px-4 md:px-12 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Blurred background circles for RozmeriGPT effect */}
        <div className="absolute -top-1/4 -right-40 w-[520px] h-[520px] rounded-full bg-purple-100/50 dark:bg-purple-600/5 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-40 w-[480px] h-[480px] rounded-full bg-blue-100/50 dark:bg-blue-600/5 blur-3xl pointer-events-none"></div>
      </div>

      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white mb-4">
          How We <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Build With You</span>
        </h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="text-base md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4 md:mb-4">
            Our process keeps you in the loop — with speed, clarity, and zero guesswork. We don't just code — we collaborate.
          </p>
        </motion.div>
        <div className="relative flex flex-col items-center">
          <div className="flex flex-col gap-10 w-full z-10">
          {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                animate={stepInView > idx ? 'visible' : 'hidden'}
                exit="exit"
                variants={stepVariants}
                className="relative flex items-center w-full"
              >
                {/* Step circle */}
                <div className="flex flex-col items-center mr-6">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white dark:border-background-darkCard bg-gradient-to-br from-blue-500 to-sky-500 mb-2 z-10`}>{step.step}</div>
                  {idx < processSteps.length - 1 && (
                    <div className="w-1 h-10 bg-gradient-to-b from-blue-400 to-sky-400 opacity-60" style={{ minHeight: 40 }} />
                  )}
              </div>
                {/* Step content */}
                <div className="flex-1 bg-white dark:bg-[#111A2F] border border-gray-300 dark:border-blue-900/40 rounded-xl px-5 py-4 shadow-md">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-blue-600 dark:text-blue-400">{React.cloneElement(step.icon, { className: 'w-6 h-6' })}</span>
                    <span className="text-base md:text-lg font-semibold text-black dark:text-white">{step.title}</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
          ))}
          </div>
        </div>
        {/* CTA at end */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={stepInView === processSteps.length ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4">💬 Ready to start building?</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3 rounded-lg font-bold text-base bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/40 shadow-lg"
            style={{ minWidth: 0 }}
          >
            Book a 15-min call →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process; 