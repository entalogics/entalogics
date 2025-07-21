import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const trustLogos = [
  { name: 'Upwork', src: 'https://cdn.worldvectorlogo.com/logos/upwork.svg' },
  { name: 'Clutch', src: 'https://static.clutch.co/static/img/logos--v2/logo-clutch.svg' },
  { name: 'GoodFirms', src: 'https://assets.goodfirms.co/images/logo/goodfirms.svg' },
  { name: 'G2', src: 'https://cdn.g2crowd.com/image/upload/v1689695486/logos/g2/g2-logo-full-color.svg' },
];

const testimonials = [
  { 
    name: 'Lucas A.', 
    role: 'SaaS Founder', 
    company: 'Canada', 
    quote: 'Entalogics didn\'t just build the product — they helped us shape it. From first call to live launch, the process was smooth, clear, and surprisingly fast.', 
    rating: 5, 
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg' 
  },
  { 
    name: 'Stefano M.', 
    role: 'Web3 Startup', 
    company: 'UAE', 
    quote: 'We needed a browser fork with custom AI features and wallet integration. Umar\'s team knew exactly how to handle it — very few devs can pull that off at this level.', 
    rating: 5, 
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg' 
  },
  { 
    name: 'Mina T.', 
    role: 'HealthTech Product Lead', 
    company: 'UK', 
    quote: 'Their team is full-stack in the real sense — design, dev, deployment. Super responsive and detail-focused. We\'ve already booked Phase 2.', 
    rating: 5, 
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg' 
  },
  { 
    name: 'Harish G.', 
    role: 'Marketing SaaS', 
    company: 'India', 
    quote: 'Top-tier communication and problem-solving. The AI-powered dashboard they built now saves our team hours daily.', 
    rating: 5, 
    avatar: 'https://randomuser.me/api/portraits/men/51.jpg' 
  },
  { 
    name: 'David K.', 
    role: 'Startup Advisor', 
    company: 'Germany', 
    quote: 'It\'s rare to find a dev team that actually thinks like product owners. Entalogics does.', 
    rating: 5, 
    avatar: 'https://randomuser.me/api/portraits/men/68.jpg' 
  },
    { 
      name: 'Sarah Johnson', 
    role: 'CTO', 
      company: 'Stellar Solutions', 
    quote: 'Exceptional code quality and support. Highly recommended for any project.', 
      rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg' 
    },
    { 
      name: 'Michael Brown', 
    role: 'CEO', 
      company: 'Innovate Inc.', 
    quote: 'Game-changing expertise, delivered beyond expectations. Would hire again.', 
    rating: 4.9, 
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg' 
    },
    { 
      name: 'David Lee', 
    role: 'Product Manager', 
      company: 'QuantumLeap', 
    quote: 'Truly top-tier development and design. Great communication and results.', 
      rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg' 
    },
    { 
      name: 'Emily Rodriguez', 
    role: 'Founder', 
      company: 'NextGen Apps', 
    quote: 'Flawless product, tight deadline, very impressed with the attention to detail.', 
    rating: 4.8, 
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg' 
    },
    { 
      name: 'Chris Thompson', 
    role: 'Technical Lead', 
      company: 'Apex Industries', 
    quote: 'Clean, efficient, and perfectly documented. A pleasure to work with.', 
      rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/51.jpg' 
    },
    { 
      name: 'Jessica Martinez', 
    role: 'VP Engineering', 
      company: 'Momentum Co', 
    quote: 'A true partner in every sense. Invested in our success and it shows.', 
    rating: 4.9, 
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg' 
  },
  { 
    name: 'Alex Kim', 
    role: 'CTO', 
    company: 'FinTechPro', 
    quote: 'Fast, reliable, and innovative.', 
    rating: 5, 
    avatar: 'https://randomuser.me/api/portraits/men/23.jpg' 
  },
  { 
    name: 'Priya Singh', 
    role: 'Product Owner', 
    company: 'HealthSync', 
    quote: 'Great communication and delivery.', 
    rating: 4.8, 
    avatar: 'https://randomuser.me/api/portraits/women/21.jpg' 
  },
  { 
    name: 'Liam Chen', 
    role: 'Lead Dev', 
    company: 'EduTech', 
    quote: 'Exceeded all our expectations.', 
    rating: 5, 
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg' 
  },
  { 
    name: 'Olivia White', 
    role: 'COO', 
    company: 'RetailX', 
    quote: 'Professional and proactive team.', 
    rating: 4.9, 
    avatar: 'https://randomuser.me/api/portraits/women/52.jpg' 
  },
  { 
    name: 'Noah Wilson', 
    role: 'Founder', 
    company: 'LogiSoft', 
    quote: 'Delivered on time, every time.', 
    rating: 5, 
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg' 
  },
  { 
    name: 'Sophia Patel', 
    role: 'Manager', 
    company: 'GreenApps', 
    quote: 'Loved the attention to detail.', 
    rating: 4.8, 
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg' 
  },
  { 
    name: 'Ethan Clark', 
    role: 'CEO', 
    company: 'CloudNova', 
    quote: 'Superb technical skills.', 
    rating: 5, 
    avatar: 'https://randomuser.me/api/portraits/men/28.jpg' 
  },
  { 
    name: 'Mia Lopez', 
    role: 'CTO', 
    company: 'SaaSly', 
    quote: 'Very responsive and skilled.', 
    rating: 4.9, 
    avatar: 'https://randomuser.me/api/portraits/women/29.jpg' 
  },
  { 
    name: 'Benjamin Scott', 
    role: 'Lead Engineer', 
    company: 'Buildify', 
    quote: 'Would recommend to anyone.', 
    rating: 5, 
    avatar: 'https://randomuser.me/api/portraits/men/19.jpg' 
  },
  { 
    name: 'Ava Turner', 
    role: 'Product Lead', 
    company: 'Appify', 
    quote: 'Great experience from start to finish.', 
    rating: 4.8, 
    avatar: 'https://randomuser.me/api/portraits/women/18.jpg' 
  },
  { 
    name: 'Lucas Green', 
    role: 'CTO', 
    company: 'EcoSoft', 
    quote: 'Top-notch service and results.', 
    rating: 5, 
    avatar: 'https://randomuser.me/api/portraits/men/14.jpg' 
  },
  { 
    name: 'Ella King', 
    role: 'Founder', 
    company: 'Marketly', 
    quote: 'Impressed with the professionalism.', 
    rating: 4.9, 
    avatar: 'https://randomuser.me/api/portraits/women/14.jpg' 
  },
  { 
    name: 'Henry Adams', 
    role: 'Manager', 
    company: 'BizBoost', 
    quote: 'Quick turnaround and high quality.', 
    rating: 5, 
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg' 
  },
  { 
    name: 'Grace Baker', 
    role: 'COO', 
    company: 'TechNest', 
    quote: 'Fantastic results, every time.', 
    rating: 4.8, 
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg' 
  },
  { 
    name: 'Jack Carter', 
    role: 'CEO', 
    company: 'DevWorks', 
    quote: 'Reliable and creative team.', 
      rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg' 
  },
  { 
    name: 'Zoe Evans', 
    role: 'Lead Designer', 
    company: 'Designly', 
    quote: 'Beautiful UI and smooth UX.', 
    rating: 4.9, 
    avatar: 'https://randomuser.me/api/portraits/women/11.jpg' 
    },
];

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex-shrink-0 bg-white/70 dark:bg-white/10 backdrop-blur-lg border border-[#e5e7eb] dark:border-white/20 rounded-xl p-3 md:p-4 flex flex-col items-center shadow-md min-w-[140px] max-w-[140px] md:min-w-[240px] md:max-w-[240px] mx-1 md:mx-2 h-[120px] md:h-[140px] justify-between">
    <div className="flex items-center mb-1">
      {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-[#01F5C3] fill-[#01F5C3] mr-0.5" />
      ))}
      {testimonial.rating % 1 !== 0 && (
        <Star className="w-3 h-3 md:w-4 md:h-4 text-[#01F5C3] fill-[#01F5C3] mr-0.5 opacity-60" />
      )}
      <span className="ml-1 text-xs font-semibold text-gray-700 dark:text-gray-200">{testimonial.rating.toFixed(1)}</span>
    </div>
    <p className="text-xs md:text-sm text-gray-700 dark:text-gray-200 text-center mb-1 line-clamp-3">"{testimonial.quote}"</p>
    <div className="text-xs font-bold text-black dark:text-white text-center">{testimonial.name}</div>
    <div className="text-[10px] md:text-[11px] text-gray-500 dark:text-gray-400 text-center">{testimonial.role}, {testimonial.company}</div>
    </div>
);

const Testimonials = () => {
  const marqueeRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse/touch drag handlers
  const handleDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    setStartX(pageX);
    if (marqueeRef.current) {
      setScrollLeft(marqueeRef.current.scrollLeft);
    }
  };
  const handleDragMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !marqueeRef.current) return;
    const x = 'touches' in e ? e.touches[0].pageX : e.pageX;
    const walk = (x - startX) * -1; // reverse direction
    marqueeRef.current.scrollLeft = scrollLeft + walk;
  };
  const handleDragEnd = () => setIsDragging(false);

  // Duplicate testimonials 3x for smooth infinite scroll
  const marqueeTestimonials = [...testimonials, ...testimonials, ...testimonials];
  return (
    <section id="testimonials" className="relative bg-white dark:bg-[#0a1225] py-20 px-4 md:px-12 overflow-hidden">
      {/* Blurred background circles for RozmeriGPT effect */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-[480px] h-[480px] rounded-full bg-blue-100/50 dark:bg-blue-600/5 blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-[520px] h-[520px] rounded-full bg-purple-100/50 dark:bg-purple-600/5 blur-3xl z-0 pointer-events-none"></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white mb-12">
          What Our <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Clients Say</span>
        </h2>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-center">
            Real feedback from founders, product leads, and long-term partners we've helped scale.
          </p>
        {/* Infinite horizontal scroll with drag support */}
        <div
          className="w-full overflow-x-hidden relative"
          ref={marqueeRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div className={`flex items-center gap-4 animate-marquee-infinite py-2${isDragging ? ' pause-marquee' : ''}`} style={{animation: isDragging ? 'none' : 'marquee-infinite 35s linear infinite'}}>
            <div className="min-w-[40px] md:min-w-[120px]" />
            {marqueeTestimonials.map((testimonial, idx) => (
               <div key={idx} className="flex-shrink-0 bg-white dark:bg-[#111A2F] border border-gray-300 dark:border-blue-900/40 rounded-xl p-3 md:p-4 flex flex-col items-center shadow-md min-w-[140px] max-w-[140px] md:min-w-[240px] md:max-w-[240px] mx-1 md:mx-2 h-[120px] md:h-[140px] justify-between">
                <div className="flex items-center mb-1">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-emerald-500 fill-emerald-500 mr-0.5" />
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-emerald-500 fill-emerald-500 mr-0.5 opacity-60" />
                  )}
                  <span className="ml-1 text-xs font-semibold text-gray-700 dark:text-gray-200">{testimonial.rating.toFixed(1)}</span>
                </div>
                <p className="text-xs md:text-sm text-gray-700 dark:text-gray-200 text-center mb-1 line-clamp-3">"{testimonial.quote}"</p>
                <div className="text-xs font-bold text-black dark:text-white text-center">{testimonial.name}</div>
                <div className="text-[10px] md:text-[11px] text-gray-500 dark:text-gray-400 text-center">{testimonial.role}, {testimonial.company}</div>
                </div>
            ))}
            <div className="min-w-[40px] md:min-w-[120px]" />
          </div>
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-8"
        >
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4">
            Want to see what we could build for you?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3 rounded-lg font-bold text-base bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/40 shadow-lg"
          >
            Let's talk →
          </a>
        </motion.div>
        
        <style>{`
          @keyframes marquee-infinite {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .pause-marquee {
            animation-play-state: paused !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonials; 