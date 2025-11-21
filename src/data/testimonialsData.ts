

interface Testimonial {
    id: number
    text: string
    author: string
    role: string
    avatar: string
  }

export const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Working with Entalogics was a game-changer for our business. Their team's expertise in web development and AI integration transformed our online presence. The solution they delivered helped us reduce bounce rates by 40% and increase user engagement like never before.",
      author: "Lauren M",
      role: "hardware Technician",
      avatar: "https://demo.awaikenthemes.com/nextmind/wp-content/uploads/2025/05/author-3.jpg"
    },
    {
      id: 2,
      text: "The Entalogics team exceeded our expectations at every turn. Their attention to detail, clear communication, and technical expertise made the development process smooth and stress-free. We're thrilled with the final product and the ongoing support they provide.",
      author: "Jason M",
      role: "hardware Technician",
      avatar: "https://demo.awaikenthemes.com/nextmind/wp-content/uploads/2025/05/author-2.jpg"
    },
    {
      id: 3,
      text: "As a fintech startup, we needed a development partner who understood both technology and our industry's unique requirements. Entalogics delivered exactly that. Their custom software solution has streamlined our operations and significantly improved our customer experience.",
      author: "Jenny W",
      role: "fintech startup",
      avatar: "https://demo.awaikenthemes.com/nextmind/wp-content/uploads/2025/05/author-1.jpg"
    },
  ]