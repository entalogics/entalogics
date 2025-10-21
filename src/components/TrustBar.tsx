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
  { name: "Marvian", src: "/assets/trustbar logos/marvian logo-01.svg" },
  { name: "Matchups", src: "/assets/trustbar logos/Matchups Logo-01.svg" },
  { name: "Aol", src: "/assets/trustbar logos/Aol Logo-01.svg" },
  { name: "Upwork", src: "/assets/trustbar logos/Upwork Logo-01.svg" },
  { name: "SentryBay", src: "/assets/trustbar logos/SentryBay-Limited-logo-01-01.svg" },
]

interface TrustBarProps {
  speed?: number
}

const TrustBar = ({ speed = 30 }: TrustBarProps) => {
  const { theme } = useTheme()

  const faviconSrc =
    theme === "dark"
      ? "/assets/Favicon/Entalogics favicon white color.svg"
      : "/assets/Favicon/Entalogics favicon blue color.svg"

  const gradientColor = theme === "dark" ? "#0a1225" : "#ffffff"

  const renderLogos = (flip = false) =>
    [...logos, ...logos].map((logo, idx) => (
      <div
        key={`${logo.name}-${idx}`}
        className="flex items-center justify-center w-[100px] h-12 flex-shrink-0"
        style={{
          marginRight: "32px",
          transform: flip ? "scaleX(-1)" : "none",
          transformOrigin: "center center",
          lineHeight: 0,
        }}
      >
        <Image
          src={logo.src}
          alt={logo.name}
          width={80}
          height={40}
          className="object-contain opacity-70 hover:opacity-100 transition-opacity"
          style={{ display: "block" }}
        />
      </div>
    ))

  return (
    <section className="relative pt-6 md:pt-24 flex flex-col items-center justify-center overflow-hidden">
      {/* Heading */}
      <div className="container mx-auto text-center">
        <Heading level={2} gradient gradientText="Trusted">
          Trusted by Industry Leaders
        </Heading>
        <Paragraph size="sm" center className="max-w-2xl mx-auto mt-2">
          From global startups to funded scaleups — Entalogics has partnered with 500+ teams building AI tools, custom
          software, and next-gen platforms.
        </Paragraph>
      </div>

      <div className="relative w-full flex items-center justify-center " style={{ minHeight: 180 }}>
        {/* Center Icon */}
        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <div
            className={
              `rounded-lg p-2 backdrop-blur-md flex items-center justify-center w-14 h-14 ` +
              (theme === "dark"
                ? "bg-gradient-to-br from-blue-600/80 to-blue-900/80 border border-blue-400/40 shadow-[0_0_20px_8px_rgba(59,130,246,0.3)]"
                : "bg-white/80 border border-blue-500/40 shadow-[0_0_20px_8px_rgba(59,130,246,0.2)]")
            }
          >
            <Image src={faviconSrc} alt="Entalogics Favicon" width={40} height={40} style={{ display: "block" }} />
          </div>
        </div>

        {/* Left Side (mirrored marquee) */}
        <div className="absolute left-0 top-1/2 w-1/2 flex items-center overflow-hidden -translate-y-1/2 h-16">
          <div style={{ transform: "scaleX(-1)", transformOrigin: "center center", width: "100%" }}>
            <Marquee
              speed={speed}
              gradient
              gradientColor={gradientColor}
              gradientWidth={80}
              pauseOnHover={false}
              play={true}
            >
              {renderLogos(true)}
            </Marquee>
          </div>
        </div>

        {/* Right Side (normal marquee) */}
        <div className="absolute right-0 top-1/2 w-1/2 flex items-center overflow-hidden -translate-y-1/2 h-16">
          <Marquee
            speed={speed}
            direction="left"
            gradient
            gradientColor={gradientColor}
            gradientWidth={80}
            pauseOnHover={false}
            play={true}
          >
            {renderLogos(false)}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default TrustBar
