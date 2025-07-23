import {
  ShieldCheck,
  Code2,
  Palette,
  LifeBuoy,
  Users,
  Rocket,
  BrainCircuit,
  Globe,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../src/components/Layout";
import { motion } from "framer-motion";
import React from "react";

export async function getStaticProps() {
  return { props: {} };
}

const AboutPage = () => {
  const sections = [
    {
      title: "Who We Are",
      icon: <Users className="w-8 h-8 mb-4 text-[#512feb]" />,
      content:
        "We're a team of engineers, designers, architects, and problem-solvers who genuinely care about the quality of what we ship. But more than that — we care about what it means for you and your users.",
      points: [
        "Tech-obsessed, people-first.",
        "Startup agile, enterprise reliable.",
        "Transparent, honest, and execution-driven.",
      ],
    },
    {
      title: "What We Do Really Well",
      icon: <Rocket className="w-8 h-8 mb-4 text-[#512feb]" />,
      content:
        "We’re a full-stack product development company. That means from day one, we can help you shape your idea — or scale your existing platform — across every layer of your technology stack.",
      subSections: [
        {
          title: "Product Engineering",
          icon: <Code2 className="w-7 h-7 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />,
          description: "We take ownership of the entire software lifecycle:",
          items: [
            "SaaS product development (from MVPs to mature platforms)",
            "Custom web & mobile apps using modern stacks",
            "AI-based tools, workflows, agents & integrations",
            "Native & cross-platform desktop applications",
            "Web3, blockchain, and smart contract platforms",
            "API engineering, data pipelines, and integrations",
          ],
        },
        {
          title: "Browser & Privacy-Based Software",
          icon: <Globe className="w-7 h-7 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />,
          description:
            "One of our niche strengths: building Chromium/Brave forks and custom browsers for crypto, privacy, or enterprise-grade needs.",
          items: [
            "Extension support",
            "Wallet integration",
            "VPN, proxy, and DNS controls",
            "Web3-ready features",
          ],
        },
        {
          title: "UI/UX Design That Converts",
          icon: <Palette className="w-7 h-7 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />,
          description: "We don’t just design pretty screens. We design journeys that:",
          items: [
            "Guide users with clarity",
            "Remove friction",
            "Drive engagement and retention",
          ],
        },
        {
          title: "Ongoing Support & Maintenance",
          icon: <LifeBuoy className="w-7 h-7 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />,
          description: "We stick around. After launch, we handle:",
          items: [
            "24/7 monitoring",
            "Performance upgrades",
            "Feature additions",
            "Proactive security and compliance updates",
          ],
        },
      ],
    },
    {
      title: "Who We Work With",
      icon: <Users className="w-8 h-8 mb-4 text-[#512feb]" />,
      content:
        "We work best with companies that want more than just another “dev team.” We become an extension of your vision — from tech to product strategy.",
      points: [
        "Early-stage founders who need a reliable partner to shape and ship an MVP",
        "Scaling startups that need help with refactoring, expanding, or re-platforming",
        "Enterprise teams looking for dedicated engineering squads or niche technical expertise",
        "Innovation leaders at established companies who want to launch new digital products fast — without waiting on legacy IT",
      ],
    },
  ];

  const approachSteps = [
    { title: "Understand your goals.", description: "We start with the “why” — not just what you want to build, but what success looks like." },
    { title: "Plan collaboratively.", description: "Expect no fluff. We break down the tech, identify risks, and build a plan you can trust." },
    { title: "Design & develop with care.", description: "We iterate fast, communicate clearly, and build as if we’re on your team (because we are)." },
    { title: "Launch and support.", description: "Your product deserves smooth delivery and rock-solid support. We stick with you post-launch to keep everything stable and scalable." },
  ];
  
  const whyUsPoints = [
      "Trusted delivery partners — not just freelancers or coders",
      "Deep technical knowledge across modern stacks",
      "Top-rated talent on global platforms",
      "NDA and security-friendly from day one",
      "Scalable team structure — we grow with you",
  ];

  return (
    <Layout>
      <Head>
        <title>About Entalogics — Full-Stack Devs & Chromium Browser Experts</title>
        <meta name="description" content="We're a team of full-stack developers specializing in AI SaaS platforms, scalable apps, and custom Chromium browser development." />
        {/* Open Graph */}
        <meta property="og:title" content="About Entalogics — Your Dev Partner for AI, SaaS & Browsers" />
        <meta property="og:description" content="From MVPs to AI software and Chromium-based browsers, Entalogics is the team behind scalable, logic-driven solutions." />
        <meta property="og:image" content="https://entalogics.com/assets/about-og.jpg" />
        <meta property="og:url" content="https://entalogics.com/about" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Entalogics — AI & Chromium Dev Agency" />
        <meta name="twitter:description" content="We engineer clean, scalable code for AI SaaS, web platforms, and custom Chromium browsers." />
        <meta name="twitter:image" content="https://entalogics.com/assets/about-og.jpg" />
        {/* Canonical */}
        <link rel="canonical" href="https://entalogics.com/about" />
      </Head>

      <div className="bg-white dark:bg-[#0a1225] text-black dark:text-white">
        {/* Hero Section */}
        <section className="relative text-center pt-20 pb-20 px-4 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-100/40 dark:bg-blue-600/5 blur-3xl z-0 pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-purple-100/40 dark:bg-purple-600/5 blur-3xl z-0 pointer-events-none"></div>
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
                    About <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">EntaLogics</span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-8 max-w-4xl mx-auto leading-snug">
                    Turning bold ideas into real, scalable products — one line of thoughtful code at a time.
                </p>
                <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
                    At EntaLogics, we don’t just write software — we engineer outcomes. We partner with startups, enterprises, and fast-growing tech companies to help them go from <span className="font-bold text-black dark:text-white">“we’ve got an idea”</span> to <span className="font-bold text-black dark:text-white">“we’ve built something real — and it works beautifully.”</span>
                </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 bg-gray-50 dark:bg-[#0D1526] px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Who We Are</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Tech-obsessed, people-first. Startup agile, enterprise reliable.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white dark:bg-[#111A2F] p-6 rounded-xl shadow-lg border border-gray-200 dark:border-blue-900/40">
                        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Transparent</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">Honest and execution-driven in everything we do.</p>
                    </div>
                    <div className="bg-white dark:bg-[#111A2F] p-6 rounded-xl shadow-lg border border-gray-200 dark:border-blue-900/40">
                        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Problem-Solvers</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">We genuinely care about the quality of what we ship.</p>
                    </div>
                     <div className="bg-white dark:bg-[#111A2F] p-6 rounded-xl shadow-lg border border-gray-200 dark:border-blue-900/40">
                        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Mission-Driven</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">To make complex software feel effortless for you and your users.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* What We Do */}
        <section className="py-20 px-4 bg-white dark:bg-[#0a1225]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What We Do <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Really Well</span></h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">From day one, we can help you shape your idea or scale your existing platform.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {sections[1].subSections?.map(sub => (
                        <div key={sub.title} className="flex flex-col h-full bg-gray-50 dark:bg-[#111A2F] p-6 rounded-xl border border-gray-200 dark:border-blue-900/40 shadow-lg">
                            <div className="flex items-center mb-3">
                                {sub.icon}
                                <h3 className="text-xl font-bold">{sub.title}</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{sub.description}</p>
                            <ul className="space-y-3">
                                {sub.items.map(item => (
                                    <li key={item} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-emerald-500 flex-shrink-0" />
                                        <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Our Approach */}
        <section className="py-20 bg-gray-50 dark:bg-[#0D1526] px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Approach</span></h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">We keep things simple, efficient, and human.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {approachSteps.map((step, index) => (
                        <div key={index} className="relative p-6 bg-white dark:bg-[#111A2F] rounded-xl shadow-lg border border-gray-200 dark:border-blue-900/40">
                            <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-3">0{index + 1}</div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Who We Work With */}
        <section className="py-20 px-4 bg-white dark:bg-[#0a1225]">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Who We <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Work With</span></h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">We become an extension of your vision — from tech to product strategy. We’ve built platforms for fintech startups, crypto firms, healthcare innovators, and more.</p>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                    {sections[2].points?.map(point => (
                         <div key={point} className="bg-gray-50 dark:bg-[#111A2F] p-6 rounded-lg border border-gray-200 dark:border-blue-900/40 flex items-start shadow-lg">
                             <CheckCircle className="w-6 h-6 mr-3 mt-1 text-emerald-500 flex-shrink-0" />
                             <p className="text-gray-700 dark:text-gray-300">{point}</p>
                         </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Why Clients Stick With Us */}
        <section className="py-20 bg-gray-50 dark:bg-[#0D1526] px-4">
            <div className="max-w-4xl mx-auto text-center">
                 <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">Why Clients <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Stick With Us</span></h2>
                 <ul className="space-y-4 text-left">
                    {whyUsPoints.map(point => (
                        <li key={point} className="bg-white dark:bg-[#111A2F] p-5 rounded-lg text-lg flex items-center shadow-lg border border-gray-200 dark:border-blue-900/40">
                            <CheckCircle className="w-6 h-6 mr-4 text-emerald-500 flex-shrink-0" />
                            <span className="font-semibold">{point}</span>
                        </li>
                    ))}
                 </ul>
            </div>
        </section>
        
        {/* CTA */}
        <section className="text-center py-20 px-4 bg-white dark:bg-[#0a1225]">
             <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4">
                Let’s Build Something <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Together</span>
             </h2>
             <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-8">
                 No sales fluff. No tech buzzwords. Just honest conversation about where you are — and how we can help you move forward, fast.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  className="w-full sm:w-auto px-7 py-3 font-bold rounded-lg shadow transition-all duration-200 text-base bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                  data-cal-link="entalogics/30min"
                  data-cal-namespace="30min"
                  data-cal-config='{"layout":"month_view","theme":"auto"}'
                >
                  Schedule a Quick Call <ArrowRight className="w-5 h-5" />
                </button>
                <Link href="/quote" legacyBehavior>
                    <a className="w-full sm:w-auto px-7 py-3 font-bold rounded-lg border border-gray-300 dark:border-blue-400/30 bg-white dark:bg-transparent text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 flex items-center gap-2 transition-all duration-200 text-base">
                        Get a Quote
                    </a>
                </Link>
             </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage; 