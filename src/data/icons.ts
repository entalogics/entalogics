import { Globe, Smartphone, Palette, Monitor, Settings, Code, Brain, Chrome } from "lucide-react"

export const icons = {
  "SaaS Product Development": Code,
  "AI-Powered Apps & Platforms": Brain,
  "Web App Development": Globe,
  "Mobile App Development": Smartphone,
  "Chromium & Browser Development": Chrome,
  "UI/UX Design": Palette,
  "Desktop Software Development": Monitor,
  "Maintenance & Support": Settings,
  "Web3 & Trading Platforms": Globe,
} as const

export type IconName = keyof typeof icons
