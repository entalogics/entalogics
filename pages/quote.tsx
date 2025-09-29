import React, { useState, useEffect } from 'react';
import Layout from '../src/components/Layout';
import Link from 'next/link';
import { ArrowLeft, Mail, Briefcase, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

interface QuoteFormState {
  name: string;
  country: string;
  email: string;
  phone: string;
  description: string;
  lookingFor: string[];
  budget: string;
  budgetCustom?: string;
}

const initialState: QuoteFormState = {
  name: '',
  country: '',
  email: '',
  phone: '',
  description: '',
  lookingFor: [],
  budget: '',
  budgetCustom: '',
};

const countries = [
  '', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'India', 'Pakistan', 'Other',
];

const lookingForGroups = [
  {
    label: 'Development Services',
    options: [
      'Mobile App Development',
      'Web Development',
      'Frontend',
      'Custom Software',
      'Readymade Solutions',
      'Browser Development & Modificarions (Chromium/Brave)',
      'Electron App Development',
    ],
  },
  {
    label: 'AI & Automation',
    options: [
      'AI Agents',
      'AI App Development',
      'AI-Powered Web Platforms',
    ],
  },
  {
    label: 'Team & Business Solutions',
    options: [
      'Hire Dedicated Developer',
      'Partnership Opportunities',
    ],
  },
];

const budgetOptions = [
  'Under $5,000',
  '$5,000 – $10,000',
  '$10,000 – $20,000',
  '$20,000+',
  'Custom budget',
];

const SPAM_KEYWORDS = [
  'loan', 'sex', 'porn', 'viagra', 'casino', 'bet', 'bitcoin', 'crypto', 'escort', 'nude', 'xxx', 'win', 'prize', 'money', 'credit', 'debt', 'gamble', 'pills', 'cialis', 'payday', 'hack', 'hacker', 'password', 'bank', 'investment', 'forex', 'mlm', 'scam', 'fraud', 'fake', 'replica', 'counterfeit', 'pharmacy', 'dating', 'adult', 'escort', 'escort service', 'escort girl', 'escort agency', 'escort girls', 'escort agencies', 'escort services', 'escort directory', 'escort listings', 'escort reviews', 'escort ads', 'escort classified', 'escort classifieds', 'escort guide', 'escort guides', 'escort magazine', 'escort magazines', 'escort news', 'escort portal', 'escort portals', 'escort site', 'escort sites', 'escort website', 'escort websites', 'escort world', 'escorts', 'escorts agency', 'escorts agencies', 'escorts classified', 'escorts classifieds', 'escorts directory', 'escorts guide', 'escorts magazine', 'escorts magazines', 'escorts news', 'escorts portal', 'escorts portals', 'escorts site', 'escorts sites', 'escorts website', 'escorts websites', 'escorts world', 'escortservice', 'escortservices', 'escortweb', 'escortwebs', 'escortwebsite', 'escortwebsites', 'escortworld', 'escortworlds', 'escortzone', 'escortzones', 'escortzone.com', 'escortzone.net', 'escortzone.org', 'escortzone.info', 'escortzone.biz', 'escortzone.co.uk', 'escortzone.de', 'escortzone.fr', 'escortzone.it', 'escortzone.nl', 'escortzone.pl', 'escortzone.ru', 'escortzone.se', 'escortzone.us', 'escortzone.xxx', 'escortzone.xyz', 'escortzone1.com', 'escortzone2.com', 'escortzone3.com', 'escortzone4.com', 'escortzone5.com', 'escortzone6.com', 'escortzone7.com', 'escortzone8.com', 'escortzone9.com', 'escortzone10.com', 'escortzone11.com', 'escortzone12.com', 'escortzone13.com', 'escortzone14.com', 'escortzone15.com', 'escortzone16.com', 'escortzone17.com', 'escortzone18.com', 'escortzone19.com', 'escortzone20.com', 'escortzone21.com', 'escortzone22.com', 'escortzone23.com', 'escortzone24.com', 'escortzone25.com', 'escortzone26.com', 'escortzone27.com', 'escortzone28.com', 'escortzone29.com', 'escortzone30.com', 'escortzone31.com', 'escortzone32.com', 'escortzone33.com', 'escortzone34.com', 'escortzone35.com', 'escortzone36.com', 'escortzone37.com', 'escortzone38.com', 'escortzone39.com', 'escortzone40.com', 'escortzone41.com', 'escortzone42.com', 'escortzone43.com', 'escortzone44.com', 'escortzone45.com', 'escortzone46.com', 'escortzone47.com', 'escortzone48.com', 'escortzone49.com', 'escortzone50.com', 'escortzone51.com', 'escortzone52.com', 'escortzone53.com', 'escortzone54.com', 'escortzone55.com', 'escortzone56.com', 'escortzone57.com', 'escortzone58.com', 'escortzone59.com', 'escortzone60.com', 'escortzone61.com', 'escortzone62.com', 'escortzone63.com', 'escortzone64.com', 'escortzone65.com', 'escortzone66.com', 'escortzone67.com', 'escortzone68.com', 'escortzone69.com', 'escortzone70.com', 'escortzone71.com', 'escortzone72.com', 'escortzone73.com', 'escortzone74.com', 'escortzone75.com', 'escortzone76.com', 'escortzone77.com', 'escortzone78.com', 'escortzone79.com', 'escortzone80.com', 'escortzone81.com', 'escortzone82.com', 'escortzone83.com', 'escortzone84.com', 'escortzone85.com', 'escortzone86.com', 'escortzone87.com', 'escortzone88.com', 'escortzone89.com', 'escortzone90.com', 'escortzone91.com', 'escortzone92.com', 'escortzone93.com', 'escortzone94.com', 'escortzone95.com', 'escortzone96.com', 'escortzone97.com', 'escortzone98.com', 'escortzone99.com', 'escortzone100.com'
];

export default function QuotePage() {
  const [form, setForm] = useState<QuoteFormState>(initialState);
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [lastSubmit, setLastSubmit] = useState(0);

  useEffect(() => {
    const hasDismissed = sessionStorage.getItem('quotePopupDismissed');
    if (!hasDismissed) {
      const timer = setTimeout(() => {
        // setShowHelpPopup(true); // This line is removed
      }, 1500); // 1.5-second delay before showing
      return () => clearTimeout(timer);
    }
  }, []);

  function validate() {
    const errs: any = {};
    if (!form.name.trim()) errs.name = 'Full Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.country.trim()) errs.country = 'Country is required';
    if (!form.description.trim()) errs.description = 'Project description is required';
    if (form.description.length < 50) errs.description = 'Please provide at least 50 characters.';
    if (form.description.length > 1500) errs.description = 'Please keep your message under 1500 characters.';
    if (SPAM_KEYWORDS.some(word => form.description.toLowerCase().includes(word))) errs.description = 'Your message contains blocked words.';
    if (!form.lookingFor.length) errs.lookingFor = 'Please select at least one option';
    if (!form.budget) errs.budget = 'Budget is required';
    if (form.budget === 'Custom budget' && !form.budgetCustom?.trim()) errs.budgetCustom = 'Please enter a custom amount';
    return errs;
  }

  function handleCheckbox(option: string) {
    setForm(f => ({
      ...f,
      lookingFor: f.lookingFor.includes(option)
        ? f.lookingFor.filter((o: string) => o !== option)
        : [...f.lookingFor, option],
    }));
  }

  function handleBudget(option: string) {
    setForm(f => ({ ...f, budget: option }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError('');
    if (honeypot) return; // honeypot trap
    if (Date.now() - lastSubmit < 3000) return; // debounce: 3s between submits
    setLastSubmit(Date.now());
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm(initialState);
      } else {
        const data = await res.json();
        setServerError(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setServerError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Contact | Entalogics</title>
        <meta name="description" content="Get in touch with Entalogics for your software, AI, or web project. Fast, transparent, and tailored to your needs." />
        <meta property="og:title" content="Contact | Entalogics" />
        <meta property="og:description" content="Get in touch with Entalogics for your software, AI, or web project. Fast, transparent, and tailored to your needs." />
        <meta property="og:image" content="https://entalogics.com/assets/og-image.jpg" />
        <meta property="og:url" content="https://entalogics.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Entalogics" />
        <meta name="twitter:description" content="Get in touch with Entalogics for your software, AI, or web project. Fast, transparent, and tailored to your needs." />
        <meta name="twitter:image" content="https://entalogics.com/assets/og-image.jpg" />
        <link rel="canonical" href="https://entalogics.com/contact" />
      </Head>
      <Layout>
        <section className="relative bg-white dark:bg-[#0a1225] overflow-hidden">
          {/* Blurred background circles */}
          <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-blue-100/50 dark:bg-blue-600/5 blur-3xl z-0 pointer-events-none"></div>
          <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-purple-100/50 dark:bg-purple-600/5 blur-3xl z-0 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 md:px-12 relative z-10">
            
            {/* Page Title & Subtitle */}
            <div className="text-center mb-10 pt-8 md:pt-12">
              <h1 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white mb-2">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">CONTACT</span> US
              </h1>
              <p className="text-base md:text-lg text-text-secondary dark:text-white max-w-2xl mx-auto font-medium">
                We ensure we get back to you within 24 hours, with an estimate ready to be evaluated by you.
              </p>
            </div>

            {/* Form Card Section */}
            <div className="pb-10 md:pb-16 flex justify-center items-start">
              <div className="w-full max-w-3xl bg-white dark:bg-[#111A2F] rounded-2xl shadow-lg border border-gray-200 dark:border-blue-900/40 p-6 md:p-10 mx-2">
                {success ? (
                  <div className="text-center py-8">
                    <h2 className="text-2xl font-extrabold mb-2 text-blue-600 dark:text-blue-400">Thank you!</h2>
                    <p className="text-gray-700 dark:text-gray-200 mb-4">We received your message and will get in touch soon.</p>
                    <Link href="/" className="inline-block mt-4 px-7 py-3 font-bold rounded-lg shadow transition-all duration-200 text-base bg-blue-600 hover:bg-blue-700 text-white">Back to Home</Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <input type="text" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" value={honeypot} onChange={e => setHoneypot(e.target.value)} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300" htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-blue-400/30 bg-white dark:bg-[#0D1526] text-black dark:text-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition placeholder-gray-400 dark:placeholder-gray-500 text-base"
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          placeholder="Your full name"
                        />
                        {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300" htmlFor="country">Select Country *</label>
                        <select
                          id="country"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-blue-400/30 bg-white dark:bg-[#0D1526] text-black dark:text-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition placeholder-gray-400 dark:placeholder-gray-500 text-base"
                          value={form.country}
                          onChange={e => setForm(f => ({ ...f, country: e.target.value }))}
                        >
                          {countries.map((c, i) => <option key={i} value={c}>{c || 'Select Country'}</option>)}
                        </select>
                        {errors.country && <span className="text-xs text-red-500">{errors.country}</span>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300" htmlFor="email">Email *</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-blue-400/30 bg-white dark:bg-[#0D1526] text-black dark:text-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition placeholder-gray-400 dark:placeholder-gray-500 text-base"
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          placeholder="you@email.com"
                        />
                        {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300" htmlFor="phone">Phone Number</label>
                        <input
                          type="text"
                          id="phone"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-blue-400/30 bg-white dark:bg-[#0D1526] text-black dark:text-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition placeholder-gray-400 dark:placeholder-gray-500 text-base"
                          value={form.phone}
                          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                          placeholder="(optional)"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300" htmlFor="description">How Can We Help? *</label>
                      <textarea
                        id="description"
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-blue-400/30 bg-white dark:bg-[#0D1526] text-black dark:text-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition placeholder-gray-400 dark:placeholder-gray-500 text-base"
                        value={form.description}
                        onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                        placeholder="Describe your project, goals, and requirements..."
                        minLength={50}
                        maxLength={1500}
                      />
                      {errors.description && <span className="text-xs text-red-500">{errors.description}</span>}
                    </div>
                    <div className="mt-4">
                      <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">What Are You Looking For? *</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1">
                        {lookingForGroups.map(group => (
                          <div key={group.label} className="mb-2">
                            <div className="font-bold text-xs text-gray-600 dark:text-gray-300 mb-1 flex items-center gap-1">
                              {group.label === 'Development Services' && <span className="text-lg">🧩</span>}
                              {group.label === 'AI & Automation' && <span className="text-lg">🧠</span>}
                              {group.label === 'Team & Business Solutions' && <span className="text-lg">👥</span>}
                              {group.label}
                            </div>
                            <div className="flex flex-col gap-1">
                              {group.options.map(option => (
                                <label key={option} className="flex items-center gap-2 text-xs font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={form.lookingFor.includes(option)}
                                    onChange={() => handleCheckbox(option)}
                                    className="accent-blue-600 w-4 h-4 rounded"
                                  />
                                  {option}
                                </label>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      {errors.lookingFor && <span className="text-xs text-red-500">{errors.lookingFor}</span>}
                    </div>
                    <div className="mt-4">
                      <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">Select Your Budget *</label>
                      <div className="flex flex-col gap-2 mt-1">
                        {budgetOptions.map(option => (
                          <label key={option} className="flex items-center gap-2 text-xs font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
                            <input
                              type="radio"
                              name="budget"
                              value={option}
                              checked={form.budget === option}
                              onChange={() => handleBudget(option)}
                              className="accent-blue-600 w-4 h-4"
                            />
                            {option}
                            {option === 'Custom budget' && form.budget === 'Custom budget' && (
                              <input
                                type="text"
                                className="ml-2 px-3 py-1 rounded border border-gray-300 dark:border-blue-400/30 bg-white dark:bg-[#0D1526] text-black dark:text-white text-xs focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition w-32"
                                placeholder="Enter amount"
                                value={form.budgetCustom || ''}
                                onChange={e => setForm(f => ({ ...f, budgetCustom: e.target.value }))}
                              />
                            )}
                          </label>
                        ))}
                      </div>
                      {errors.budget && <span className="text-xs text-red-500">{errors.budget}</span>}
                      {form.budget === 'Custom budget' && errors.budgetCustom && <span className="text-xs text-red-500">{errors.budgetCustom}</span>}
                    </div>
                    {serverError && <div className="text-red-500 text-sm mt-2 mb-2">{serverError}</div>}
                    <div className="flex justify-center mt-6">
                      <button type="submit" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition-all duration-200 text-base border-0 focus:outline-none focus:ring-2 focus:ring-blue-400/40 disabled:opacity-60 min-w-[140px]" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Contact/FAQ Section */}
            <div className="py-10 md:py-16 flex flex-col items-center">
              <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-8">HAVE A <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">QUESTION?</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                <div className="flex flex-col items-center bg-white dark:bg-[#111A2F] rounded-xl border border-gray-200 dark:border-blue-900/40 shadow-lg p-6">
                  <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                  <div className="font-semibold mb-1 text-black dark:text-white">General Inquiry</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">entalogics@gmail.com</div>
                </div>
                <div className="flex flex-col items-center bg-white dark:bg-[#111A2F] rounded-xl border border-gray-200 dark:border-blue-900/40 shadow-lg p-6">
                  <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                  <div className="font-semibold mb-1 text-black dark:text-white">Career</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">hr@entalogics.com</div>
                </div>
                <div className="flex flex-col items-center bg-white dark:bg-[#111A2F] rounded-xl border border-gray-200 dark:border-blue-900/40 shadow-lg p-6">
                  <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                  <div className="font-semibold mb-1 text-black dark:text-white">WhatsApp</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">+92 320 7385471</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
} 