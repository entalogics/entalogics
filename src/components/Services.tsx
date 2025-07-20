import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { servicesData } from '../data/servicesData';

interface Service {
  slug: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  features?: string[] | string[][];
}

const servicesList: Service[] = Object.values(servicesData);

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      className="relative h-full min-h-[340px] flex flex-col group bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-[#e5e7eb] dark:border-white/30 rounded-2xl px-8 py-7 shadow-lg shadow-black/5 dark:shadow-black/30 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/50 transition-all duration-200"
      whileHover={{ y: -4, transition: { duration: 0.15 } }}
      style={{ boxSizing: 'border-box' }}
    >
      <div className="flex-shrink-0 mb-4 md:mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-xl text-[#512feb] dark:text-[#512feb]">
          {React.createElement(service.icon, {
            className: 'w-7 h-7',
            stroke: 'currentColor',
            strokeWidth: 2,
            color: 'inherit',
            style: { color: 'inherit' },
          })}
        </div>
      </div>
      <div className="flex-grow flex flex-col">
        <h4 className="font-semibold text-lg tracking-tight text-black dark:text-white mb-2 leading-tight">{service.title}</h4>
        <p className="text-base text-[#4B5563] dark:text-[#A1A1AA] leading-relaxed font-normal mb-4">{service.tagline}</p>
        {service.features && (
          Array.isArray(service.features[0]) ? (
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
              {service.features.flat().map((feature, idx, arr) => (
                feature ? (
                  <div key={idx} className="flex items-center gap-2 min-w-[120px]">
                    <Check className="w-3 h-3 text-[#512feb] flex-shrink-0" />
                    <span className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">{feature}</span>
                  </div>
                ) : (
                  <div key={idx} />
                )
              ))}
              {service.features.flat().length % 2 !== 0 && <div />}
            </div>
          ) : (
            <div className="mb-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 mb-1">
                  <Check className="w-3 h-3 text-[#512feb] flex-shrink-0" />
                  <span className="text-xs text-gray-600 dark:text-gray-400">{feature}</span>
                </div>
              ))}
            </div>
          )
        )}
      </div>
      <div className="mt-auto flex-shrink-0 pt-2 flex justify-center md:justify-start">
        {service.slug ? (
          <Link
            href="/quote"
            className="inline-flex items-center px-4 py-2 rounded-full border border-[#512feb] text-sm font-semibold text-[#512feb] dark:text-[#512feb] bg-transparent hover:bg-[#512feb] hover:text-white dark:hover:bg-[#512feb] dark:hover:text-white transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#512feb]/20"
            style={{ minWidth: 0 }}
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        ) : null}
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-10 md:py-20 bg-white dark:bg-[#0d0d0d] relative overflow-hidden">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 opacity-60"></div>
      
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black dark:text-white mb-2 md:mb-6 tracking-tight">
            What We Build for You
          </h2>
          <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 font-normal leading-relaxed mb-4 md:mb-6">
            From powerful SaaS platforms to cutting-edge AI apps — we bring your vision to life with logic, clarity, and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
          {servicesList.map((service, index) => (
            <div className="h-full" key={service.slug}>
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 