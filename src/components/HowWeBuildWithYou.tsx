import { motion } from 'framer-motion';

const buildSteps = [
  {
    icon: '🧭',
    title: 'Discovery & Strategy',
    desc: 'We shape your idea into a plan with clear goals and scope.'
  },
  {
    icon: '🏗️',
    title: 'Architecture & Planning',
    desc: 'We architect a stable, scalable backend and system flow.'
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Wireframes and user journeys, designed for clarity and speed.'
  },
  {
    icon: '💻',
    title: 'Agile Development',
    desc: 'We build in sprints — fast, testable modules with updates.'
  },
  {
    icon: '🧪',
    title: 'Testing & QA',
    desc: 'We test, refine, and perfect every part before launch.'
  },
  {
    icon: '🚀',
    title: 'Launch & Support',
    desc: 'We launch with confidence — and stay for ongoing growth.'
  },
];

const HowWeBuildWithYou = () => {
  return (
    <section id="how-we-build-with-you" className="relative z-10 container mx-auto px-4 md:px-12 py-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-3">
          <span className="text-black dark:text-white">How We</span> <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Build With You</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
          Our process keeps you in the loop — with speed, clarity, and zero guesswork. We don't just code — we collaborate.
        </p>
      </div>
      {/* Desktop grid, mobile horizontal scroll */}
      <div className="hidden md:grid grid-cols-3 gap-8 max-w-5xl mx-auto">
        {buildSteps.map((step, i) => (
          <motion.div
            key={step.title}
            className="glass-light dark:glass-dark rounded-2xl shadow-lg border border-white/20 dark:border-blue-900/40 p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200"
            whileHover={{ y: -4 }}
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20 text-3xl mb-4">
              {step.icon}
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
      {/* Mobile horizontal scroll */}
      <div className="md:hidden flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory">
        {buildSteps.map((step, i) => (
          <motion.div
            key={step.title}
            className="min-w-[270px] max-w-[300px] glass-light dark:glass-dark rounded-2xl shadow-lg border border-white/20 dark:border-blue-900/40 p-5 flex flex-col items-center text-center snap-center hover:-translate-y-1 transition-transform duration-200"
            whileHover={{ y: -4 }}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20 text-2xl mb-3">
              {step.icon}
            </div>
            <h3 className="font-bold text-base mb-1 text-gray-900 dark:text-white">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
      {/* CTA Button */}
      <div className="flex justify-center mt-10">
        <a href="#contact" className="px-7 py-3 font-bold rounded-lg shadow transition-all duration-200 text-base bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400/40">
          Let’s Build Together
        </a>
      </div>
    </section>
  );
};

export default HowWeBuildWithYou; 