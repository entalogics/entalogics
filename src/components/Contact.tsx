import React, { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Mail, Phone, Globe, Send, MessageCircle, Calendar, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />,
      label: 'Drop us a message',
      value: 'hello@entalogics.com',
      link: 'mailto:hello@entalogics.com'
    },
    {
      icon: <Calendar className="w-5 h-5 md:w-6 md:h-6" />,
      label: 'Book a 15-min Discovery Call',
      value: 'Schedule Now',
      link: '#'
    },
    {
      icon: <Linkedin className="w-5 h-5 md:w-6 md:h-6" />,
      label: 'Prefer chat?',
      value: 'Ping us directly on LinkedIn or Upwork',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="relative bg-gray-50 dark:bg-[#0D1526] py-20 px-4 md:px-12 overflow-hidden">
      {/* Blurred background circles for RozmeriGPT effect */}
      <div className="absolute -top-1/2 -right-40 w-[520px] h-[520px] rounded-full bg-purple-100/50 dark:bg-purple-600/5 blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute top-1/2 -left-40 w-[480px] h-[480px] rounded-full bg-blue-100/50 dark:bg-blue-600/5 blur-3xl z-0 pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white">
            Let's Build Something <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Logical — Together.</span>
          </h2>
          <p className="text-base md:text-sm text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-4 md:mb-6 font-normal">
            Whether you're starting from scratch or scaling your next big idea — we're ready to bring it to life.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Contact Info */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <Mail className="w-5 h-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-0.5">Drop us a message</span>
                <a href="mailto:hello@entalogics.com" className="text-sm text-black dark:text-white font-semibold hover:underline">hello@entalogics.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <Calendar className="w-5 h-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-0.5">Book a 15-min Discovery Call</span>
                <a href="#" className="text-sm text-blue-600 dark:text-blue-400 font-semibold hover:underline">Schedule Now</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <Linkedin className="w-5 h-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-0.5">Prefer chat?</span>
                <a href="#" className="text-sm text-blue-600 dark:text-blue-400 font-semibold hover:underline">Ping us on LinkedIn or Upwork</a>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/quote" className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg font-bold text-xs shadow hover:bg-blue-700 transition">Request a Quote</Link>
            </div>
          </div>
          {/* Badges */}
          <div className="flex-1 flex flex-col gap-2 items-center md:items-start mt-8 md:mt-0">
            <div className="flex gap-4 flex-wrap bg-white dark:bg-[#111A2F] rounded-xl px-4 py-3 border border-gray-300 dark:border-blue-900/40">
              <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span> NDA Friendly</span>
              <span className="flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 font-semibold"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span> SSL Secure</span>
              <span className="flex items-center gap-1.5 text-xs text-violet-600 dark:text-violet-400 font-semibold"><span className="w-2 h-2 rounded-full bg-violet-500 inline-block"></span> Top Rated Plus Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 