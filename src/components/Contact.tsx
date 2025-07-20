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
    <section id="contact" className="py-14 md:py-20 bg-white dark:bg-[#0d0d0d] relative overflow-hidden">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 opacity-60"></div>
      <div className="container mx-auto px-[20px] md:px-12 max-w-3xl overflow-x-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6 md:mb-10"
        >
          <h2 className="text-2xl md:text-2xl font-bold text-black dark:text-white mb-2 md:mb-2">
            Let's Build Something Logical — Together.
          </h2>
          <p className="text-base md:text-sm text-gray-600 dark:text-[#A1A1AA] max-w-2xl mx-auto mb-4 md:mb-6 font-normal">
            Whether you're starting from scratch or scaling your next big idea — we're ready to bring it to life.
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Contact Info */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#f3f0ff] text-[#512feb] border border-[#e5e5e5]">
                <Mail className="w-5 h-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-medium mb-0.5">Drop us a message</span>
                <span className="text-sm text-[#111827] dark:text-white font-semibold">hello@entalogics.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#f3f0ff] text-[#512feb] border border-[#e5e5e5]">
                <Calendar className="w-5 h-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-medium mb-0.5">Book a 15-min Discovery Call</span>
                <span className="text-sm text-[#512feb] font-semibold">Schedule Now</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#f3f0ff] text-[#512feb] border border-[#e5e5e5]">
                <Linkedin className="w-5 h-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-medium mb-0.5">Prefer chat?</span>
                <span className="text-sm text-[#512feb] font-semibold">Ping us directly on LinkedIn or Upwork</span>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/quote" className="inline-block px-4 py-2 bg-[#512feb] text-white rounded-lg font-semibold text-xs shadow hover:bg-[#4a2bd4] transition">Request a Quote</Link>
            </div>
          </div>
          {/* Badges */}
          <div className="flex-1 flex flex-col gap-2 items-center md:items-start mt-8 md:mt-0">
            <div className="flex gap-4 flex-wrap bg-white/80 dark:bg-neutral-900/80 rounded-xl px-4 py-3 border border-gray-200 dark:border-gray-800">
              <span className="flex items-center gap-1 text-xs text-green-600 font-semibold"><span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> NDA Friendly</span>
              <span className="flex items-center gap-1 text-xs text-blue-600 font-semibold"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span> SSL Secure</span>
              <span className="flex items-center gap-1 text-xs text-purple-600 font-semibold"><span className="w-2 h-2 rounded-full bg-purple-500 inline-block"></span> Top Rated Plus Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 