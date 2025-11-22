"use client"
import Marquee from "react-fast-marquee"
import { useTheme } from "../context/ThemeContext"
import Image from "next/image"
import { Poppins } from "next/font/google"
import Heading from "./ui/Heading"
import Paragraph from "./ui/Paragraph"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
})

const logos = [
  { name: "Aol", src: "/assets/trustbar logos/Aol Logo-01.svg" },
  { name: "Upwork", src: "/assets/trustbar logos/Upwork Logo-01.svg" },
  { name: "Matchups", src: "/assets/trustbar logos/Matchups Logo-01.svg" },
  { name: "SentryBay", src: "/assets/trustbar logos/SentryBay-Limited-logo-01-01.svg" },
  { name: "Sociall", src: "/assets/trustbar logos/sociall.svg" },
  { name: "Modestly", src: "/assets/trustbar logos/modestly.svg" },
  { name: "Top Developers", src: "/assets/trustbar logos/entalogics-top-developers.svg" },
]

interface TrustBarProps {
  speed?: number
  noPaddingTop?: boolean
  showHeading?: boolean
  showDescription?: boolean
  descriptionBelow?: boolean
  noDescriptionGap?: boolean
  descriptionMarginTop?: string
}

const TrustBar = ({ speed = 30, noPaddingTop = false }: TrustBarProps) => {
  const { theme } = useTheme()

  const gradientColor = theme === "dark" ? "#0a1225" : "#ffffff"

  return (
    <section className={`relative ${noPaddingTop ? 'pt-0' : 'pt-0 md:pt-0'} flex flex-col items-center justify-center overflow-hidden`}>
     
      {/* Marquee Section */}
      <div className="relative w-full flex items-center justify-center " style={{ minHeight: 80 }}>
        <Marquee
          speed={speed}
          gradient
          gradientColor={gradientColor}
          gradientWidth={100}
          pauseOnHover={false}
          play={true}
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex items-center justify-center w-[100px] sm:w-[100px] h-12 flex-shrink-0 mx-4 sm:mx-6 transition-all duration-300 opacity-90 hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={100}
                height={50}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Description Below */}
      <div className="container mx-auto text-center px-4 pb-3">
        <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-[13px]">
          Our work spans startups, SMEs, and enterprise companies around the world.
        </p>
      </div>

    </section>
  )
}

export default TrustBar