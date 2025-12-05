export interface TeamMember {
  name: string
  role: string
  expertise: string[]
  avatar: string
  gradient: string
  rating: number
  reviewCount: number
  description?: string
  bgColor?: string
}

export const allTeamMembers: TeamMember[] = [
  {
    name: "Umar Abdullah",
    role: "Founder & CEO",
    expertise: [],
    avatar: "/assets/team/umar.png",
    gradient: "from-blue-500 via-purple-500 to-blue-600",
    rating: 5,
    reviewCount: 0,
    description: "Founder with 11+ years of experience building products that scale to $40M+ ARR. Passionate about delivering quality code at fair prices, working directly with clients without layers or markup.",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
  },
  {
    name: "M Bilal",
    role: "Co-Founder & CTO",
    expertise: [],
    avatar: "/assets/team/bilal.png",
    gradient: "from-indigo-500 via-blue-500 to-purple-600",
    rating: 5,
    reviewCount: 0,
    description: "Co-founder and technical leader with extensive experience in architecture and system design. Ensures our technical standards remain high while delivering scalable solutions for clients.",
    bgColor: "bg-pink-100 dark:bg-pink-900/20",
  },
  {
    name: "M Shehzad",
    role: "Head of Software Engineering",
    expertise: ["React", "Node.js", "TypeScript", "Next.js"],
    avatar: "/assets/team/shehzad.png",
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    rating: 4.9,
    reviewCount: 28,
    description: "Senior engineer specializing in modern web technologies. Leads our engineering team in building robust, scalable applications using React, Node.js, and TypeScript.",
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
  },
  {
    name: "Daniyal Ahmad",
    role: "Head of Full-Stack Development",
    expertise: ["Python", "Django", "PostgreSQL", "API Design"],
    avatar: "/assets/team/danial.png",
    gradient: "from-purple-500 via-violet-500 to-purple-600",
    rating: 5.0,
    reviewCount: 32,
    description: "Expert full-stack developer with deep expertise in Python, Django, and database architecture. Designs and builds comprehensive solutions from backend APIs to frontend interfaces.",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
  },
  {
    name: "Ahmad Abdullah",
    role: "Head of UI/UX Design",
    expertise: ["React", "UI/UX", "Tailwind CSS", "Animation"],
    avatar: "/assets/team/ahmad.png",
    gradient: "from-green-500 via-emerald-500 to-green-600",
    rating: 4.8,
    reviewCount: 25,
    description: "Creative designer focused on creating intuitive, beautiful user experiences. Combines design expertise with frontend development skills to deliver pixel-perfect, conversion-focused interfaces.",
    bgColor: "bg-green-100 dark:bg-green-900/20",
  },
]


