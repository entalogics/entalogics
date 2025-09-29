"use client"
import { Star } from "lucide-react"
import Image from "next/image"
import Heading from "./ui/Heading"
import SubHeading from "./ui/SubHeading"
import Paragraph from "./ui/Paragraph"

const trustLogos = [
  { name: "Upwork", src: "https://cdn.worldvectorlogo.com/logos/upwork.svg" },
  { name: "Clutch", src: "/clutch.png" },
  { name: "GoodFirms", src: "goodfirms.png" },
  { name: "G2", src: "/g2.png" },
]

const AVATAR_SRC = "/assets/entalogics customers reviews avatar.webp"

const testimonials = [
  {
    name: "Lucas A.",
    role: "SaaS Founder",
    company: "Canada",
    quote:
      "Entalogics didn't just build the product — they helped us shape it. From first call to live launch, the process was smooth, clear, and surprisingly fast.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Stefano M.",
    role: "Web3 Startup",
    company: "UAE",
    quote:
      "We needed a browser fork with custom AI features and wallet integration. Umar's team knew exactly how to handle it — very few devs can pull that off at this level.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Mina T.",
    role: "HealthTech Product Lead",
    company: "UK",
    quote:
      "Their team is full-stack in the real sense — design, dev, deployment. Super responsive and detail-focused. We've already booked Phase 2.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Harish G.",
    role: "Marketing SaaS",
    company: "India",
    quote:
      "Top-tier communication and problem-solving. The AI-powered dashboard they built now saves our team hours daily.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "David K.",
    role: "Startup Advisor",
    company: "Germany",
    quote: "It's rare to find a dev team that actually thinks like product owners. Entalogics does.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "Stellar Solutions",
    quote: "Exceptional code quality and support. Highly recommended for any project.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Michael Brown",
    role: "CEO",
    company: "Innovate Inc.",
    quote: "Game-changing expertise, delivered beyond expectations. Would hire again.",
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "David Lee",
    role: "Product Manager",
    company: "QuantumLeap",
    quote: "Truly top-tier development and design. Great communication and results.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "NextGen Apps",
    quote: "Flawless product, tight deadline, very impressed with the attention to detail.",
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Chris Thompson",
    role: "Technical Lead",
    company: "Apex Industries",
    quote: "Clean, efficient, and perfectly documented. A pleasure to work with.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    name: "Jessica Martinez",
    role: "VP Engineering",
    company: "Momentum Co",
    quote: "A true partner in every sense. Invested in our success and it shows.",
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Alex Kim",
    role: "CTO",
    company: "FinTechPro",
    quote: "Fast, reliable, and innovative.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    name: "Priya Singh",
    role: "Product Owner",
    company: "HealthSync",
    quote: "Great communication and delivery.",
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Liam Chen",
    role: "Lead Dev",
    company: "EduTech",
    quote: "Exceeded all our expectations.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Olivia White",
    role: "COO",
    company: "RetailX",
    quote: "Professional and proactive team.",
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    name: "Noah Wilson",
    role: "Founder",
    company: "LogiSoft",
    quote: "Delivered on time, every time.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    name: "Sophia Patel",
    role: "Manager",
    company: "GreenApps",
    quote: "Loved the attention to detail.",
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Ethan Clark",
    role: "CEO",
    company: "CloudNova",
    quote: "Superb technical skills.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    name: "Mia Lopez",
    role: "CTO",
    company: "SaaSly",
    quote: "Very responsive and skilled.",
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    name: "Benjamin Scott",
    role: "Lead Engineer",
    company: "Buildify",
    quote: "Would recommend to anyone.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    name: "Ava Turner",
    role: "Product Lead",
    company: "Appify",
    quote: "Great experience from start to finish.",
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    name: "Lucas Green",
    role: "CTO",
    company: "EcoSoft",
    quote: "Top-notch service and results.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    name: "Ella King",
    role: "Founder",
    company: "Marketly",
    quote: "Impressed with the professionalism.",
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    name: "Henry Adams",
    role: "Manager",
    company: "BizBoost",
    quote: "Quick turnaround and high quality.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Grace Baker",
    role: "COO",
    company: "TechNest",
    quote: "Fantastic results, every time.",
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Jack Carter",
    role: "CEO",
    company: "DevWorks",
    quote: "Reliable and creative team.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Zoe Evans",
    role: "Lead Designer",
    company: "Designly",
    quote: "Beautiful UI and smooth UX.",
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
  },
]

interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  rating: number
  avatar: string
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex-shrink-0 backdrop-blur-lg border border-gray-200 dark:border-white/20 rounded-xl p-3 md:p-4 flex flex-col items-center shadow-md min-w-[140px] max-w-[140px] md:min-w-[240px] md:max-w-[240px] mx-1 md:mx-2 h-[120px] md:h-[140px] justify-between">
    <div className="flex items-center mb-1">
      {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-[#01F5C3] fill-[#01F5C3] mr-0.5" />
      ))}
      {testimonial.rating % 1 !== 0 && (
        <Star className="w-3 h-3 md:w-4 md:h-4 text-[#01F5C3] fill-[#01F5C3] mr-0.5 opacity-60" />
      )}
      <span className="ml-1 text-xs font-semibold text-gray-700 dark:text-gray-200">
        ({testimonial.rating.toFixed(1)})
      </span>
    </div>
    <p className="text-xs md:text-sm text-gray-700 dark:text-gray-200 text-center mb-1 line-clamp-3">
      "{testimonial.quote}"
    </p>
    <div className="flex items-center mt-3">
      <Image
        src={testimonial.avatar || AVATAR_SRC}
        alt={testimonial.name}
        width={40}
        height={40}
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover mr-3 border border-gray-300 dark:border-blue-900/40"
      />
      <div>
        <div className="text-xs font-bold text-black dark:text-white text-center">{testimonial.name}</div>
        <div className="text-[10px] md:text-[11px] text-gray-500 dark:text-gray-400 text-center">
          {testimonial.role}
        </div>
      </div>
    </div>
  </div>
)

const Testimonials = () => {
  // Show only the first 6 testimonials for the grid (customize as needed)
  const featured = testimonials.slice(0, 6)
  return (
    <section id="testimonials" className="relative bg-white dark:bg-[#0a1225]  px-4 md:px-8 overflow-hidden">
     
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <Heading level={2} className="mb-6" gradient={true} gradientText="Clients Say">
            What Our Clients Say
          </Heading>

          <Paragraph size="sm" className="max-w-3xl mx-auto" center={true}>
            Real feedback from founders, product leads, and long-term partners we've helped scale their businesses.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featured.map((testimonial, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/5 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-0.5" />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
                    ({testimonial.rating})
                  </span>
                </div>
              </div>

              <blockquote className="text-gray-700 dark:text-gray-200 text-base leading-relaxed mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center pt-4 border-t border-gray-200/50 dark:border-white/10">
                <div className="relative">
                  <Image
                    src={testimonial.avatar || AVATAR_SRC}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-xl object-cover border-2 border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-colors duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = AVATAR_SRC
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                </div>
                <div className="ml-4">
                  <div className="text-black dark:text-white font-semibold text-sm leading-tight">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm leading-tight">{testimonial.role}</div>
                  <div className="text-blue-600 dark:text-blue-400 text-xs font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
