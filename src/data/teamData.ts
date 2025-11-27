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
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form.",
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
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form.",
    bgColor: "bg-pink-100 dark:bg-pink-900/20",
  },
  {
    name: "M Shehzad",
    role: "Senior Software Engineer",
    expertise: ["React", "Node.js", "TypeScript", "Next.js"],
    avatar: "/assets/team/shehzad.png",
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    rating: 4.9,
    reviewCount: 28,
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form.",
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
  },
  {
    name: "Daniyal Ahmad",
    role: "Senior Full-Stack Developer",
    expertise: ["Python", "Django", "PostgreSQL", "API Design"],
    avatar: "/assets/team/danial.png",
    gradient: "from-purple-500 via-violet-500 to-purple-600",
    rating: 5.0,
    reviewCount: 32,
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form.",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
  },
  {
    name: "Ahmad Abdullah",
    role: "Senior UI/UX Designer",
    expertise: ["React", "UI/UX", "Tailwind CSS", "Animation"],
    avatar: "/assets/team/ahmad.png",
    gradient: "from-green-500 via-emerald-500 to-green-600",
    rating: 4.8,
    reviewCount: 25,
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form.",
    bgColor: "bg-green-100 dark:bg-green-900/20",
  },
]


