import { 
  Globe, 
  Smartphone, 
  Palette, 
  Monitor, 
  Settings,
  Code,
  Brain,
  Chrome
} from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  features?: string[] | string[][];
}

export const servicesData = {
  'saas-development': {
    title: 'SaaS Product Development',
    slug: 'saas-development',
    icon: Code,
    tagline: 'We design & build SaaS platforms from idea to scale. Think dashboards, billing, auth, API, onboarding — we handle it all.',
    description: 'Complete SaaS solutions built for growth.',
    features: [
      ['Multi-tenant logic', 'API integrations'],
      ['Growth-ready firms', 'Secure infrastructure'],
      ['Automated billing', 'User onboarding flows']
    ],
    process: [
      'Requirements analysis',
      'Architecture design',
      'Core development',
      'Testing & optimization',
      'Deployment & support'
    ]
  },
  'ai-apps-development': {
    title: 'AI-Powered Apps & Platforms',
    slug: 'ai-apps-development',
    icon: Brain,
    tagline: 'We develop AI-native tools and workflows — from custom LLM apps to agent-powered dashboards.',
    description: 'AI solutions that drive real business value.',
    features: [
      ['Agent dashboards', 'OpenAI, DeepSeek'],
      ['Full AI app lifecycle', 'Prompt engineering'],
      ['Custom LLM workflows', 'Vector DBs, LangChain']
    ],
    process: [
      'AI strategy planning',
      'Model integration',
      'Workflow development',
      'Testing & optimization',
      'Deployment & monitoring'
    ]
  },
  'web-development': {
    title: 'Web App Development',
    slug: 'web-development',
    icon: Globe,
    tagline: 'Build pixel-perfect, SEO-ready, fast web apps using modern stacks (Next.js, React, Vue, etc).',
    description: 'Modern web applications that drive results.',
    features: [
      ['Landing pages, portals', 'And scale'],
      ['Dashboards, Admin ', 'API connectivity'],
      ['Responsive design', 'SEO optimization']
    ],
    process: [
      'Discovery & planning',
      'UI/UX design',
      'Frontend development',
      'Backend integration',
      'Testing & launch'
    ]
  },
  'mobile-apps': {
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    icon: Smartphone,
    tagline: 'Native + cross-platform mobile apps using Flutter & React Native.',
    description: 'Mobile experiences that users love.',
    features: [
      ['Strategy, design, dev', 'Included'],
      ['App Store optimization', 'Push notifications'],
      ['Cross-platform builds', 'Native performance']
    ],
    process: [
      'Platform strategy',
      'UI/UX design',
      'Native development',
      'Testing & QA',
      'Store deployment'
    ]
  },
  'browser-development': {
    title: 'Chromium & Browser Development',
    slug: 'chromium-browser-development',
    icon: Chrome,
    tagline: 'Custom browsers for privacy, crypto, AI, or enterprise use.',
    description: 'Custom browser solutions built for your specific needs.',
    features: [
      ['Chromium, Brave forks', 'Web3, wallet-ready'],
      ['NTPs, extensions, VPN', 'Custom branding'],
      ['Privacy features', 'Multi-platform support']
    ],
    process: [
      'Requirements analysis',
      'Architecture design',
      'Core development',
      'Testing & optimization',
      'Deployment & support'
    ]
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    icon: Palette,
    tagline: 'We create intuitive, clean interfaces that convert. From Figma to functional.',
    description: 'Design that converts visitors into customers.',
    features: [
      ['Wireframes & prototype', 'User flows'],
      ['UX-first thinking', 'Component libraries'],
      ['Design systems', 'Accessibility audits']
    ],
    process: [
      'User research',
      'Wireframing',
      'Visual design',
      'Prototyping',
      'User testing'
    ]
  },
  'desktop-software-development': {
    title: 'Desktop Software Development',
    slug: 'desktop-software-development',
    icon: Monitor,
    tagline: 'We build high-performance desktop apps with deep OS integrations… they run smooth on Win, Mac & Linux…',
    description: 'Desktop applications that feel native.',
    features: [
      ['Cross-platform Built', 'Enterprize-ready'],
      ['Native OS integration', 'Custom tooling'],
      ['High performance', 'Seamless updates']
    ],
    process: [
      'Platform analysis',
      'Architecture design',
      'Core development',
      'OS integration',
      'Distribution setup'
    ]
  },
  'maintenance-support': {
    title: 'Maintenance & Support',
    slug: 'maintenance-support',
    icon: Settings,
    tagline: 'We keep your software running smoothly with proactive care… fixing issues before you even no…',
    description: 'Keep your software running smoothly.',
    features: [
      ['24/7 monitoring', 'Security updates'],
      ['Performance focused', 'Bug fixes'],
      ['Feature enhancements', 'Proactive support']
    ],
    process: [
      'System monitoring',
      'Issue identification',
      'Quick resolution',
      'Performance tuning',
      'Regular updates'
    ]
  },
  'web3-trading': {
    title: 'Web3 & Trading Platforms',
    slug: 'web3-trading',
    icon: Globe,
    tagline: 'We deliver decentralized trading platforms for modern markets… powered by smart contract tech & decenta…',
    description: 'Decentralized trading solutions for the future.',
    features: [
      ['Contract integration', 'Security audits'],
      ['Real-time market data', 'Wallet connectivity'],
      ['Decentralized protocols', 'Custom trading UIs']
    ],
    process: [
      'Requirements analysis',
      'Smart contract development',
      'Platform integration',
      'Testing & security audits',
      'Deployment & support'
    ]
  }
}; 