import type React from "react"
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Settings,
  FileText,
  Box,
  Layers,
  Terminal,
  Coffee,
  Code2,
  Apple,
  Zap,
  Package,
  ShoppingCart,
  Building2,
  FileCode,
  Server,
  HardDrive,
  Circle,
  Monitor,
  Chrome
} from "lucide-react"

export interface Technology {
  slug: string
  title: string
  category: string
  icon: React.ElementType
  iconName: string
  description?: string
  tagline?: string
  imagePath?: string
  heroDescription?: string
  expertiseContent?: {
    paragraph1: string
    paragraph2: string
  }
  seoKeywords?: string
  seoDescription?: string
  ogTitle?: string
  ogDescription?: string
}

export const technologiesByCategory: Record<string, Technology[]> = {
  Frontend: [
    { 
      slug: "react-development-services", 
      title: "React", 
      category: "Frontend", 
      icon: Code, 
      iconName: "Code", 
      tagline: "Modern UI library", 
      imagePath: "/assets/technologies/React.svg",
      seoKeywords: "React development, React developers, React.js development, React development company, React programming, React web development, React applications, React UI development, React consulting, React.js services, React framework, React.js developers, best React developers, professional React development, React frontend development, React.js applications, React development services, hire React developers, React experts, Entalogics React",
      seoDescription: "Expert React development services by Entalogics. Professional React.js developers delivering scalable, high-performance web applications with modern React frameworks and best practices.",
      ogTitle: "React Development Services | Expert React.js Developers | Entalogics",
      ogDescription: "Professional React development services by expert React.js developers. Build scalable, high-performance web applications with modern React frameworks."
    },
    { 
      slug: "angular-development-services", 
      title: "Angular", 
      category: "Frontend", 
      icon: Code, 
      iconName: "Code", 
      tagline: "Enterprise web framework", 
      imagePath: "/assets/technologies/angular.svg",
      seoKeywords: "Angular development, Angular developers, Angular.js development, Angular development company, Angular programming, Angular web development, Angular applications, Angular framework, Angular consulting, Angular services, Angular TypeScript, Angular developers hire, best Angular developers, professional Angular development, Angular frontend development, Angular enterprise development, Angular development services, hire Angular developers, Angular experts, Entalogics Angular",
      seoDescription: "Expert Angular development services by Entalogics. Professional Angular developers delivering enterprise-grade web applications with TypeScript and modern Angular frameworks.",
      ogTitle: "Angular Development Services | Expert Angular Developers | Entalogics",
      ogDescription: "Professional Angular development services for enterprise applications. Expert Angular developers delivering scalable, type-safe web applications."
    },
    { 
      slug: "typescript-development-services", 
      title: "TypeScript", 
      category: "Frontend", 
      icon: FileCode, 
      iconName: "FileCode", 
      tagline: "Typed JavaScript", 
      imagePath: "/assets/technologies/typescript.svg",
      seoKeywords: "TypeScript development, TypeScript developers, TypeScript programming, TypeScript development company, TypeScript services, TypeScript consulting, TypeScript applications, TypeScript framework, TypeScript web development, TypeScript frontend, hire TypeScript developers, best TypeScript developers, professional TypeScript development, TypeScript development services, TypeScript experts, TypeScript programming services, Entalogics TypeScript, TypeScript backend development, TypeScript full-stack",
      seoDescription: "Expert TypeScript development services by Entalogics. Professional TypeScript developers delivering type-safe applications with enhanced code quality and developer productivity.",
      ogTitle: "TypeScript Development Services | Expert TypeScript Developers | Entalogics",
      ogDescription: "Professional TypeScript development services. Expert TypeScript developers delivering type-safe, maintainable applications with superior code quality."
    },
    { 
      slug: "vue-development-services", 
      title: "Vue", 
      category: "Frontend", 
      icon: Code, 
      iconName: "Code", 
      tagline: "Progressive framework", 
      imagePath: "/assets/technologies/vue.svg",
      seoKeywords: "Vue development, Vue.js developers, Vue development company, Vue programming, Vue web development, Vue applications, Vue.js framework, Vue consulting, Vue.js services, Vue.js development, hire Vue developers, best Vue developers, professional Vue development, Vue frontend development, Vue.js applications, Vue development services, Vue experts, Vue.js programming, Entalogics Vue, Vue.js consulting",
      seoDescription: "Expert Vue.js development services by Entalogics. Professional Vue developers delivering progressive, scalable web applications with modern Vue.js frameworks.",
      ogTitle: "Vue.js Development Services | Expert Vue Developers | Entalogics",
      ogDescription: "Professional Vue.js development services by expert developers. Build progressive, scalable web applications with Vue.js framework."
    },
    { 
      slug: "html5-development-services", 
      title: "HTML5", 
      category: "Frontend", 
      icon: Globe, 
      iconName: "Globe", 
      tagline: "Modern web markup", 
      imagePath: "/assets/technologies/html5.svg",
      seoKeywords: "HTML5 development, HTML5 developers, HTML5 programming, HTML5 development company, HTML5 web development, HTML5 applications, HTML5 markup, HTML5 services, HTML5 consulting, HTML5 semantic markup, HTML5 responsive design, hire HTML5 developers, best HTML5 developers, professional HTML5 development, HTML5 development services, HTML5 experts, HTML5 CSS3, Entalogics HTML5, HTML5 frontend development",
      seoDescription: "Expert HTML5 development services by Entalogics. Professional HTML5 developers delivering modern, semantic, responsive web applications with HTML5 best practices.",
      ogTitle: "HTML5 Development Services | Expert HTML5 Developers | Entalogics",
      ogDescription: "Professional HTML5 development services. Expert HTML5 developers delivering modern, semantic, and accessible web applications."
    },
  ],
  Backend: [
    { 
      slug: "dotnet-development-services", 
      title: ".NET", 
      category: "Backend", 
      icon: Code2, 
      iconName: "Code2", 
      tagline: "Microsoft framework", 
      imagePath: "/assets/technologies/dotnet.svg",
      heroDescription: "Unlock scalable, high-performance backend solutions with .NET and transform your development process. At Entalogics, as the top .NET Development company, we design scalable backend infrastructure that scales our real-time solutions & optimizes performance.",
      expertiseContent: {
        paragraph1: "Entalogics' areas of expertise are full-stack backend development services exclusive to startups and enterprises looking for digital transformation. Entalogics' skilled .NET developers and UX/UI designers, alongside product specialists, have vast knowledge in native, cross, and web applications, guaranteeing that each of the applications is meticulously designed with the company and customer's goals in mind.",
        paragraph2: "We focus on creating highly usable, highly available, and high-performance apps that are easily integrated across multiple backend platforms. No matter whether we are to develop an engaging, easily usable interface with a variety of features or to set up a multifaceted backend infrastructure, we make sure that any app meets strictly defined technical specifications of reliability, safety, and quality at every stage of the development process."
      },
      seoKeywords: ".NET development, .NET developers, .NET framework, ASP.NET development, C# developers, .NET Core, .NET services, Microsoft .NET, .NET consulting, .NET solutions, .NET applications, .NET programming, .NET software, .NET platform, .NET architecture, Entalogics .NET, best .NET developers, .NET development company, .NET experts, professional .NET services",
      seoDescription: "Expert .NET development services by Entalogics. Professional .NET developers delivering scalable backend solutions, ASP.NET applications, and high-performance .NET Core services for enterprises and startups.",
      ogTitle: ".NET Development Services | Expert .NET Developers | Entalogics",
      ogDescription: "Unlock scalable, high-performance backend solutions with professional .NET development services. Expert .NET developers delivering enterprise-grade applications and optimized .NET architectures."
    },
    { 
      slug: "node-development-services", 
      title: "Node", 
      category: "Backend", 
      icon: Terminal, 
      iconName: "Terminal", 
      tagline: "JavaScript runtime", 
      imagePath: "/assets/technologies/node.svg",
      seoKeywords: "Node.js development, Node.js developers, Node development company, Node.js programming, Node.js backend development, Node.js services, Node.js consulting, Node.js applications, Node.js API development, Express.js development, Node.js microservices, hire Node.js developers, best Node.js developers, professional Node.js development, Node.js development services, Node.js experts, Node.js full-stack, Entalogics Node.js, Node.js backend services",
      seoDescription: "Expert Node.js development services by Entalogics. Professional Node.js developers delivering scalable backend solutions, REST APIs, microservices, and real-time applications.",
      ogTitle: "Node.js Development Services | Expert Node.js Developers | Entalogics",
      ogDescription: "Professional Node.js development services. Expert Node.js developers delivering scalable backend solutions, APIs, and high-performance server applications."
    },
    { 
      slug: "python-development-services", 
      title: "Python", 
      category: "Backend", 
      icon: Code, 
      iconName: "Code", 
      tagline: "Versatile programming language", 
      imagePath: "/assets/technologies/python.svg",
      seoKeywords: "Python development, Python developers, Python development company, Python programming, Python backend development, Python web development, Django development, Flask development, Python services, Python consulting, Python applications, hire Python developers, best Python developers, professional Python development, Python development services, Python experts, Python API development, Entalogics Python, Python full-stack development",
      seoDescription: "Expert Python development services by Entalogics. Professional Python developers delivering scalable backend solutions, Django/Flask applications, and data processing services.",
      ogTitle: "Python Development Services | Expert Python Developers | Entalogics",
      ogDescription: "Professional Python development services. Expert Python developers delivering scalable backend solutions, web applications, and data processing services."
    },
    { 
      slug: "java-development-services", 
      title: "Java", 
      category: "Backend", 
      icon: Coffee, 
      iconName: "Coffee", 
      tagline: "Enterprise-grade platform", 
      imagePath: "/assets/technologies/java.svg",
      seoKeywords: "Java development, Java developers, Java development company, Java programming, Java backend development, Java enterprise development, Spring Boot development, Java services, Java consulting, Java applications, Java microservices, hire Java developers, best Java developers, professional Java development, Java development services, Java experts, Enterprise Java development, Entalogics Java, Java full-stack development",
      seoDescription: "Expert Java development services by Entalogics. Professional Java developers delivering enterprise-grade applications, Spring Boot solutions, and scalable backend systems.",
      ogTitle: "Java Development Services | Expert Java Developers | Entalogics",
      ogDescription: "Professional Java development services for enterprise applications. Expert Java developers delivering scalable, robust backend solutions with Spring Boot."
    },
    { 
      slug: "open-source-development-services", 
      title: "Open Source", 
      category: "Backend", 
      icon: Box, 
      iconName: "Box", 
      tagline: "Open source solutions", 
      imagePath: "/assets/technologies/opensource.svg",
      seoKeywords: "Open source development, open source developers, open source development company, open source software development, open source solutions, open source consulting, open source services, open source applications, open source platform development, hire open source developers, best open source developers, professional open source development, open source development services, open source experts, Entalogics open source, open source backend development",
      seoDescription: "Expert open source development services by Entalogics. Professional open source developers delivering cost-effective, flexible solutions using community-driven technologies.",
      ogTitle: "Open Source Development Services | Expert Open Source Developers | Entalogics",
      ogDescription: "Professional open source development services. Expert developers delivering flexible, cost-effective solutions using community-driven open source technologies."
    },
    { 
      slug: "ruby-on-rails-development-services", 
      title: "Ruby on Rails", 
      category: "Backend", 
      icon: Code, 
      iconName: "Code", 
      tagline: "Rapid web development", 
      imagePath: "/assets/technologies/rubyandrails.svg",
      seoKeywords: "Ruby on Rails development, Rails developers, Ruby on Rails development company, Rails programming, Rails web development, Rails backend development, Rails services, Rails consulting, Rails applications, hire Rails developers, best Rails developers, professional Rails development, Ruby on Rails development services, Rails experts, Rails API development, Entalogics Rails, Ruby on Rails full-stack",
      seoDescription: "Expert Ruby on Rails development services by Entalogics. Professional Rails developers delivering rapid, scalable web applications with convention-over-configuration principles.",
      ogTitle: "Ruby on Rails Development Services | Expert Rails Developers | Entalogics",
      ogDescription: "Professional Ruby on Rails development services. Expert Rails developers delivering rapid, scalable web applications with best practices."
    },
  ],
  Mobile: [
    { 
      slug: "mobile-development-services", 
      title: "Mobile", 
      category: "Mobile", 
      icon: Smartphone, 
      iconName: "Smartphone", 
      tagline: "Mobile development", 
      imagePath: "/assets/technologies/mobile.svg",
      seoKeywords: "Mobile app development, mobile developers, mobile application development, mobile development company, iOS Android development, mobile app services, mobile consulting, native mobile apps, cross-platform mobile, mobile development services, hire mobile developers, best mobile developers, professional mobile development, mobile app development company, mobile experts, Entalogics mobile, mobile app programming",
      seoDescription: "Expert mobile app development services by Entalogics. Professional mobile developers delivering native iOS, Android, and cross-platform mobile applications for businesses worldwide.",
      ogTitle: "Mobile App Development Services | Expert Mobile Developers | Entalogics",
      ogDescription: "Professional mobile app development services. Expert mobile developers delivering native and cross-platform mobile applications for iOS and Android."
    },
    { 
      slug: "ios-development-services", 
      title: "iOS", 
      category: "Mobile", 
      icon: Apple, 
      iconName: "Apple", 
      tagline: "Apple platform", 
      imagePath: "/assets/technologies/ios.svg",
      seoKeywords: "iOS development, iOS developers, iOS app development, iOS development company, Swift development, iOS programming, iOS app services, iOS consulting, iPhone app development, iPad app development, SwiftUI development, iOS developers hire, best iOS developers, professional iOS development, iOS development services, iOS experts, Entalogics iOS, native iOS apps",
      seoDescription: "Expert iOS app development services by Entalogics. Professional iOS developers delivering native iPhone and iPad applications using Swift and SwiftUI.",
      ogTitle: "iOS Development Services | Expert iOS Developers | Entalogics",
      ogDescription: "Professional iOS app development services. Expert iOS developers delivering native iPhone and iPad applications with Swift and modern iOS frameworks."
    },
    { 
      slug: "android-development-services", 
      title: "Android", 
      category: "Mobile", 
      icon: Smartphone, 
      iconName: "Smartphone", 
      tagline: "Google platform", 
      imagePath: "/assets/technologies/android.svg",
      seoKeywords: "Android development, Android developers, Android app development, Android development company, Kotlin development, Android programming, Android app services, Android consulting, Android application development, Android developers hire, best Android developers, professional Android development, Android development services, Android experts, Entalogics Android, native Android apps, Jetpack Compose",
      seoDescription: "Expert Android app development services by Entalogics. Professional Android developers delivering native Android applications using Kotlin and Jetpack Compose.",
      ogTitle: "Android Development Services | Expert Android Developers | Entalogics",
      ogDescription: "Professional Android app development services. Expert Android developers delivering native Android applications with Kotlin and modern Android frameworks."
    },
    { 
      slug: "react-native-development-services", 
      title: "React Native", 
      category: "Mobile", 
      icon: Code, 
      iconName: "Code", 
      tagline: "Cross-platform framework", 
      imagePath: "/assets/technologies/react-native.svg",
      seoKeywords: "React Native development, React Native developers, React Native app development, React Native development company, React Native programming, React Native services, React Native consulting, cross-platform mobile development, React Native apps, hire React Native developers, best React Native developers, professional React Native development, React Native development services, React Native experts, Entalogics React Native, React Native mobile apps",
      seoDescription: "Expert React Native development services by Entalogics. Professional React Native developers delivering cross-platform mobile applications for iOS and Android.",
      ogTitle: "React Native Development Services | Expert React Native Developers | Entalogics",
      ogDescription: "Professional React Native development services. Expert React Native developers delivering cross-platform mobile applications for iOS and Android from a single codebase."
    },
    { 
      slug: "flutter-development-services", 
      title: "Flutter", 
      category: "Mobile", 
      icon: Zap, 
      iconName: "Zap", 
      tagline: "Google's UI toolkit", 
      imagePath: "/assets/technologies/flutter.svg",
      seoKeywords: "Flutter development, Flutter developers, Flutter app development, Flutter development company, Flutter programming, Flutter services, Flutter consulting, Dart development, Flutter mobile apps, Flutter cross-platform, hire Flutter developers, best Flutter developers, professional Flutter development, Flutter development services, Flutter experts, Entalogics Flutter, Flutter UI development",
      seoDescription: "Expert Flutter development services by Entalogics. Professional Flutter developers delivering beautiful, natively compiled mobile applications for iOS, Android, web, and desktop.",
      ogTitle: "Flutter Development Services | Expert Flutter Developers | Entalogics",
      ogDescription: "Professional Flutter development services. Expert Flutter developers delivering beautiful, natively compiled applications for mobile, web, and desktop platforms."
    },
    { 
      slug: "ionic-development-services", 
      title: "Ionic", 
      category: "Mobile", 
      icon: Smartphone, 
      iconName: "Smartphone", 
      tagline: "Hybrid app framework", 
      imagePath: "/assets/technologies/ionic.svg",
      seoKeywords: "Ionic development, Ionic developers, Ionic app development, Ionic development company, Ionic framework, Ionic programming, Ionic services, Ionic consulting, hybrid mobile apps, Ionic Angular, Ionic React, Ionic Vue, hire Ionic developers, best Ionic developers, professional Ionic development, Ionic development services, Ionic experts, Entalogics Ionic",
      seoDescription: "Expert Ionic development services by Entalogics. Professional Ionic developers delivering hybrid mobile applications using web technologies for iOS, Android, and web.",
      ogTitle: "Ionic Development Services | Expert Ionic Developers | Entalogics",
      ogDescription: "Professional Ionic development services. Expert Ionic developers delivering hybrid mobile applications using web technologies for cross-platform deployment."
    },
    { 
      slug: "phonegap-development-services", 
      title: "PhoneGap", 
      category: "Mobile", 
      icon: Package, 
      iconName: "Package", 
      tagline: "Apache Cordova", 
      imagePath: "/assets/technologies/phonegap.svg",
      seoKeywords: "PhoneGap development, PhoneGap developers, PhoneGap app development, PhoneGap development company, Apache Cordova development, PhoneGap services, PhoneGap consulting, hybrid app development, Cordova development, PhoneGap mobile apps, hire PhoneGap developers, best PhoneGap developers, professional PhoneGap development, PhoneGap development services, PhoneGap experts, Entalogics PhoneGap",
      seoDescription: "Expert PhoneGap (Apache Cordova) development services by Entalogics. Professional PhoneGap developers delivering hybrid mobile applications using HTML5, CSS3, and JavaScript.",
      ogTitle: "PhoneGap Development Services | Expert PhoneGap Developers | Entalogics",
      ogDescription: "Professional PhoneGap development services. Expert PhoneGap developers delivering hybrid mobile applications using Apache Cordova and web technologies."
    },
    { 
      slug: "pwa-development-services", 
      title: "PWA", 
      category: "Mobile", 
      icon: Globe, 
      iconName: "Globe", 
      tagline: "Progressive Web Apps", 
      imagePath: "/assets/technologies/pwa-icon.svg",
      seoKeywords: "PWA development, Progressive Web App development, PWA developers, PWA development company, PWA services, PWA consulting, Progressive Web Apps, PWA programming, service workers, PWA apps, hire PWA developers, best PWA developers, professional PWA development, PWA development services, PWA experts, Entalogics PWA, web app development",
      seoDescription: "Expert Progressive Web App (PWA) development services by Entalogics. Professional PWA developers delivering web applications that work offline and feel like native apps.",
      ogTitle: "PWA Development Services | Expert Progressive Web App Developers | Entalogics",
      ogDescription: "Professional Progressive Web App development services. Expert PWA developers delivering web applications with offline capabilities and app-like experiences."
    },
  ],
  Desktop: [
    { 
      slug: "desktop-development-services", 
      title: "Desktop", 
      category: "Desktop", 
      icon: Monitor, 
      iconName: "Monitor", 
      tagline: "Desktop application development", 
      imagePath: "/assets/technologies/desktop.svg",
      seoKeywords: "Desktop app development, desktop application development, desktop developers, desktop development company, desktop software development, desktop application services, desktop consulting, native desktop apps, Windows desktop apps, macOS desktop apps, Linux desktop apps, hire desktop developers, best desktop developers, professional desktop development, desktop development services, desktop experts, Entalogics desktop",
      seoDescription: "Expert desktop application development services by Entalogics. Professional desktop developers delivering native desktop applications for Windows, macOS, and Linux platforms.",
      ogTitle: "Desktop Application Development Services | Expert Desktop Developers | Entalogics",
      ogDescription: "Professional desktop application development services. Expert desktop developers delivering native applications for Windows, macOS, and Linux."
    },
    { 
      slug: "electron-development-services", 
      title: "Electron", 
      category: "Desktop", 
      icon: Monitor, 
      iconName: "Monitor", 
      tagline: "Cross-platform desktop apps", 
      imagePath: "/assets/technologies/electron-logo.svg",
      seoKeywords: "Electron development, Electron developers, Electron app development, Electron development company, Electron framework, Electron programming, Electron desktop apps, cross-platform desktop, Electron services, Electron consulting, hire Electron developers, best Electron developers, professional Electron development, Electron development services, Electron experts, Entalogics Electron",
      seoDescription: "Expert Electron desktop application development services by Entalogics. Professional Electron developers delivering cross-platform desktop applications using web technologies.",
      ogTitle: "Electron Development Services | Expert Electron Developers | Entalogics",
      ogDescription: "Professional Electron development services. Expert Electron developers delivering cross-platform desktop applications for Windows, macOS, and Linux."
    },
    { 
      slug: "wpf-development-services", 
      title: "WPF", 
      category: "Desktop", 
      icon: Monitor, 
      iconName: "Monitor", 
      tagline: "Windows Presentation Foundation", 
      imagePath: "/assets/technologies/wpf.svg",
      seoKeywords: "WPF development, WPF developers, WPF application development, WPF development company, Windows Presentation Foundation, WPF programming, WPF desktop apps, WPF services, WPF consulting, .NET WPF, WPF XAML, hire WPF developers, best WPF developers, professional WPF development, WPF development services, WPF experts, Entalogics WPF",
      seoDescription: "Expert WPF (Windows Presentation Foundation) development services by Entalogics. Professional WPF developers delivering rich Windows desktop applications with .NET.",
      ogTitle: "WPF Development Services | Expert WPF Developers | Entalogics",
      ogDescription: "Professional WPF development services. Expert WPF developers delivering rich Windows desktop applications using Windows Presentation Foundation."
    },
    { 
      slug: "tauri-development-services", 
      title: "Tauri", 
      category: "Desktop", 
      icon: Monitor, 
      iconName: "Monitor", 
      tagline: "Modern desktop framework", 
      imagePath: "/assets/technologies/Tauri.svg",
      seoKeywords: "Tauri development, Tauri developers, Tauri app development, Tauri development company, Tauri framework, Tauri programming, Tauri desktop apps, Rust Tauri, Tauri services, Tauri consulting, cross-platform desktop Tauri, hire Tauri developers, best Tauri developers, professional Tauri development, Tauri development services, Tauri experts, Entalogics Tauri",
      seoDescription: "Expert Tauri desktop application development services by Entalogics. Professional Tauri developers delivering lightweight, secure cross-platform desktop applications.",
      ogTitle: "Tauri Development Services | Expert Tauri Developers | Entalogics",
      ogDescription: "Professional Tauri development services. Expert Tauri developers delivering lightweight, secure cross-platform desktop applications using Rust."
    },
    { 
      slug: "qt-development-services", 
      title: "Qt", 
      category: "Desktop", 
      icon: Monitor, 
      iconName: "Monitor", 
      tagline: "Cross-platform GUI framework", 
      imagePath: "/assets/technologies/qt.svg",
      seoKeywords: "Qt development, Qt developers, Qt application development, Qt development company, Qt framework, Qt programming, Qt GUI development, Qt desktop apps, Qt services, Qt consulting, C++ Qt, Qt QML, cross-platform Qt, hire Qt developers, best Qt developers, professional Qt development, Qt development services, Qt experts, Entalogics Qt",
      seoDescription: "Expert Qt desktop application development services by Entalogics. Professional Qt developers delivering cross-platform GUI applications for Windows, macOS, Linux, and embedded systems.",
      ogTitle: "Qt Development Services | Expert Qt Developers | Entalogics",
      ogDescription: "Professional Qt development services. Expert Qt developers delivering cross-platform GUI applications using Qt framework for desktop and embedded systems."
    },
    { 
      slug: "winforms-development-services", 
      title: "WinForms", 
      category: "Desktop", 
      icon: Monitor, 
      iconName: "Monitor", 
      tagline: "Windows Forms applications", 
      imagePath: "/assets/technologies/winforms.svg",
      seoKeywords: "WinForms development, WinForms developers, Windows Forms development, WinForms development company, WinForms programming, WinForms desktop apps, .NET WinForms, Windows Forms applications, WinForms services, WinForms consulting, hire WinForms developers, best WinForms developers, professional WinForms development, WinForms development services, WinForms experts, Entalogics WinForms",
      seoDescription: "Expert WinForms (Windows Forms) development services by Entalogics. Professional WinForms developers delivering Windows desktop applications with .NET Framework.",
      ogTitle: "WinForms Development Services | Expert WinForms Developers | Entalogics",
      ogDescription: "Professional WinForms development services. Expert WinForms developers delivering Windows desktop applications using Windows Forms and .NET."
    },
    { 
      slug: "cpp-development-services", 
      title: "C++", 
      category: "Desktop", 
      icon: Code2, 
      iconName: "Code2", 
      tagline: "High-performance programming language", 
      imagePath: "/assets/technologies/c++.svg",
      seoKeywords: "C++ development, C++ developers, C++ programming, C++ development company, C++ services, C++ consulting, C++ applications, C++ software development, C++ desktop apps, C++ performance optimization, hire C++ developers, best C++ developers, professional C++ development, C++ development services, C++ experts, Entalogics C++, C++ programming services",
      seoDescription: "Expert C++ development services by Entalogics. Professional C++ developers delivering high-performance desktop applications, system software, and performance-critical solutions.",
      ogTitle: "C++ Development Services | Expert C++ Developers | Entalogics",
      ogDescription: "Professional C++ development services. Expert C++ developers delivering high-performance applications, system software, and performance-critical solutions."
    },
    { 
      slug: "chromium-development-services", 
      title: "Chromium", 
      category: "Desktop", 
      icon: Chrome, 
      iconName: "Chrome", 
      tagline: "Custom browser development", 
      imagePath: "/assets/technologies/chromium.svg",
      seoKeywords: "Chromium development, Chromium developers, Chromium browser development, custom browser development, Chromium services, Chromium consulting, Chromium-based browsers, browser development, Chromium framework, custom browser solutions, hire Chromium developers, best Chromium developers, professional Chromium development, Chromium development services, Chromium experts, Entalogics Chromium, browser customization",
      seoDescription: "Expert Chromium browser development services by Entalogics. Professional Chromium developers delivering custom browser solutions, browser extensions, and Chromium-based applications.",
      ogTitle: "Chromium Development Services | Expert Chromium Developers | Entalogics",
      ogDescription: "Professional Chromium browser development services. Expert Chromium developers delivering custom browser solutions and Chromium-based applications."
    },
  ],
  DevOps: [
    { 
      slug: "azure-development-services", 
      title: "Azure", 
      category: "DevOps", 
      icon: Cloud, 
      iconName: "Cloud", 
      tagline: "Microsoft cloud platform", 
      imagePath: "/assets/technologies/azure.svg",
      heroDescription: "Accelerate your cloud journey with Microsoft Azure's comprehensive platform services. At Entalogics, as a premier Azure Development company, we architect scalable cloud solutions using Azure's extensive service portfolio to drive innovation and operational efficiency.",
      expertiseContent: {
        paragraph1: "Entalogics delivers comprehensive Azure cloud development services specifically tailored for enterprises leveraging Microsoft ecosystem and startups seeking enterprise-grade cloud infrastructure. Our Azure-certified developers and cloud architects possess deep expertise in Azure App Services, Azure Functions, Azure Kubernetes Service, and Azure DevOps, ensuring seamless integration with existing Microsoft technologies.",
        paragraph2: "We design Azure solutions emphasizing hybrid cloud architectures, security compliance, and cost optimization strategies. Whether migrating legacy applications to Azure, building cloud-native applications, or implementing infrastructure-as-code practices, we ensure every Azure implementation meets enterprise security standards and delivers measurable business value."
      },
      seoKeywords: "Azure development, Azure developers, Microsoft Azure, Azure cloud services, Azure consulting, Azure migration, Azure architecture, Azure solutions, Azure cloud platform, Azure DevOps, Azure infrastructure, Azure services, Azure deployment, Azure management, Entalogics Azure, best Azure developers, Azure development company, Azure experts, professional Azure services, Azure App Services",
      seoDescription: "Expert Azure development services by Entalogics. Professional Azure developers delivering scalable cloud solutions, Azure migration, hybrid cloud architectures, and optimized Azure services for Microsoft ecosystem.",
      ogTitle: "Azure Development Services | Expert Azure Developers | Entalogics",
      ogDescription: "Accelerate your cloud journey with professional Azure development services. Expert Azure developers delivering scalable cloud solutions, migration services, and enterprise-grade Azure architectures."
    },
    { 
      slug: "aws-development-services", 
      title: "AWS", 
      category: "DevOps", 
      icon: Cloud, 
      iconName: "Cloud", 
      tagline: "Amazon Web Services", 
      imagePath: "/assets/technologies/aws.svg",
      heroDescription: "Transform your cloud infrastructure with Amazon Web Services and leverage scalable, reliable cloud solutions. At Entalogics, as a leading AWS Development company, we build robust cloud architectures that optimize performance, reduce costs, and scale seamlessly with your business needs.",
      expertiseContent: {
        paragraph1: "Entalogics' areas of expertise are full-stack devops development services exclusive to startups and enterprises looking for digital transformation. Entalogics' skilled AWS developers and UX/UI designers, alongside product specialists, have vast knowledge in native, cross, and web applications, guaranteeing that each of the applications is meticulously designed with the company and customer's goals in mind.",
        paragraph2: "We focus on creating highly usable, highly available, and high-performance apps that are easily integrated across multiple devops platforms. No matter whether we are to develop an engaging, easily usable interface with a variety of features or to set up a multifaceted backend infrastructure, we make sure that any app meets strictly defined technical specifications of reliability, safety, and quality at every stage of the development process."
      },
      seoKeywords: "AWS development, AWS developers, Amazon Web Services, AWS cloud services, AWS consulting, AWS migration, AWS architecture, AWS solutions, cloud development, AWS DevOps, AWS infrastructure, AWS services, AWS platform, AWS deployment, AWS management, Entalogics AWS, best AWS developers, AWS development company, AWS experts, professional AWS services",
      seoDescription: "Expert AWS development services by Entalogics. Professional AWS developers delivering scalable cloud solutions, AWS migration, infrastructure optimization, and cost-effective AWS architectures for startups and enterprises.",
      ogTitle: "AWS Development Services | Expert AWS Developers | Entalogics",
      ogDescription: "Transform your business with professional AWS development services. Expert AWS developers delivering scalable cloud solutions, migration services, and optimized AWS architectures."
    },
    { 
      slug: "google-cloud-development-services", 
      title: "Google Cloud", 
      category: "DevOps", 
      icon: Cloud, 
      iconName: "Cloud", 
      tagline: "Google cloud platform", 
      imagePath: "/assets/technologies/google-cloud.svg",
      heroDescription: "Leverage Google Cloud Platform's advanced infrastructure and AI capabilities to transform your business operations. At Entalogics, as a leading Google Cloud Development company, we build scalable cloud solutions using GCP's innovative services to drive data-driven decision making and operational excellence.",
      expertiseContent: {
        paragraph1: "Entalogics specializes in Google Cloud Platform implementations, delivering cloud-native solutions for organizations seeking to leverage Google's advanced analytics, machine learning, and global infrastructure. Our GCP-certified engineers excel in Compute Engine, Cloud Functions, BigQuery, and Google Kubernetes Engine, ensuring applications that scale globally while maintaining optimal performance.",
        paragraph2: "We architect GCP solutions focusing on data analytics, machine learning integration, and serverless architectures that reduce operational overhead. Whether building data warehouses, implementing AI-powered features, or creating multi-region deployments, our GCP solutions demonstrate exceptional scalability, reliability, and cost-efficiency."
      },
      seoKeywords: "Google Cloud development, GCP development, Google Cloud Platform developers, GCP development company, Google Cloud services, GCP consulting, Google Cloud migration, GCP architecture, Google Cloud solutions, GCP DevOps, Google Cloud infrastructure, GCP services, Google Cloud deployment, GCP management, Entalogics GCP, best GCP developers, Google Cloud development company, GCP experts, professional Google Cloud services, GCP App Engine",
      seoDescription: "Expert Google Cloud Platform development services by Entalogics. Professional GCP developers delivering scalable cloud solutions, data analytics, AI/ML integration, and optimized GCP architectures.",
      ogTitle: "Google Cloud Development Services | Expert GCP Developers | Entalogics",
      ogDescription: "Leverage Google Cloud Platform's advanced infrastructure with professional GCP development services. Expert GCP developers delivering scalable, AI-powered cloud solutions."
    },
    { 
      slug: "jenkins-development-services", 
      title: "Jenkins", 
      category: "DevOps", 
      icon: Settings, 
      iconName: "Settings", 
      tagline: "CI/CD automation", 
      imagePath: "/assets/technologies/jenkins-icon.svg",
      heroDescription: "Automate your software delivery pipeline with Jenkins and accelerate your development workflow. At Entalogics, as an expert Jenkins Development company, we implement robust CI/CD pipelines that enable continuous integration, automated testing, and seamless deployments across environments.",
      expertiseContent: {
        paragraph1: "Entalogics implements Jenkins-based CI/CD pipelines that automate build, test, and deployment processes, significantly reducing manual errors and accelerating release cycles. Our Jenkins specialists design pipeline-as-code using Jenkinsfiles, integrate with version control systems, and configure automated triggers to ensure consistent, reliable software delivery.",
        paragraph2: "We configure Jenkins pipelines emphasizing parallel builds, distributed builds across agents, and comprehensive test automation integration. Whether setting up complex multi-stage pipelines, integrating with container registries, or implementing blue-green deployments, our Jenkins solutions enable teams to release software faster while maintaining quality standards."
      },
      seoKeywords: "Jenkins development, Jenkins CI/CD, Jenkins automation, Jenkins pipeline development, Jenkins consulting, Jenkins services, Jenkins setup, Jenkins configuration, CI/CD pipeline development, Jenkins experts, Jenkins DevOps, Jenkins deployment, Jenkins automation services, Entalogics Jenkins, best Jenkins developers, Jenkins development company, professional Jenkins services",
      seoDescription: "Expert Jenkins CI/CD development services by Entalogics. Professional Jenkins developers delivering automated pipelines, continuous integration, and seamless deployment solutions.",
      ogTitle: "Jenkins CI/CD Development Services | Expert Jenkins Developers | Entalogics",
      ogDescription: "Automate your software delivery with professional Jenkins CI/CD services. Expert Jenkins developers delivering robust pipelines and automated deployment solutions."
    },
    { 
      slug: "selenium-development-services", 
      title: "Selenium", 
      category: "DevOps", 
      icon: Circle, 
      iconName: "Circle", 
      tagline: "Test automation", 
      imagePath: "/assets/technologies/selenium.svg",
      heroDescription: "Automate web application testing with Selenium and ensure quality across browsers and platforms. At Entalogics, as a leading Selenium Development company, we create comprehensive test automation frameworks that reduce manual testing effort and improve application reliability.",
      expertiseContent: {
        paragraph1: "Entalogics develops Selenium-based test automation frameworks that validate web applications across multiple browsers and operating systems, ensuring consistent user experiences regardless of the client environment. Our Selenium experts design maintainable test suites using Page Object Model patterns, implement cross-browser testing strategies, and integrate with CI/CD pipelines for continuous validation.",
        paragraph2: "We build Selenium test automation emphasizing reusable test components, parallel test execution, and comprehensive reporting mechanisms. Whether automating regression testing, implementing data-driven testing approaches, or creating end-to-end test scenarios, our Selenium solutions significantly reduce testing time while improving test coverage and reliability."
      },
      seoKeywords: "Selenium development, Selenium test automation, Selenium testing services, Selenium framework development, Selenium consulting, Selenium QA automation, Selenium web testing, Selenium test development, automated testing services, Selenium experts, Selenium services, Entalogics Selenium, best Selenium developers, Selenium development company, professional Selenium testing, Selenium automation services",
      seoDescription: "Expert Selenium test automation services by Entalogics. Professional Selenium developers delivering comprehensive test automation frameworks for web applications across browsers.",
      ogTitle: "Selenium Test Automation Services | Expert Selenium Developers | Entalogics",
      ogDescription: "Automate web application testing with professional Selenium services. Expert Selenium developers delivering comprehensive test automation frameworks."
    },
    { 
      slug: "appium-development-services", 
      title: "Appium", 
      category: "DevOps", 
      icon: Smartphone, 
      iconName: "Smartphone", 
      tagline: "Mobile test automation", 
      imagePath: "/assets/technologies/appium.svg",
      heroDescription: "Automate mobile application testing across iOS and Android platforms with Appium's cross-platform capabilities. At Entalogics, as an expert Appium Development company, we create mobile test automation frameworks that validate native, hybrid, and mobile web applications efficiently.",
      expertiseContent: {
        paragraph1: "Entalogics implements Appium test automation frameworks that enable cross-platform mobile testing using a single API, allowing teams to write tests once and run them on both iOS and Android devices. Our Appium specialists excel in setting up test environments, implementing mobile-specific testing strategies, and integrating with cloud-based device farms for scalable test execution.",
        paragraph2: "We develop Appium test suites focusing on real device testing, gesture automation, and mobile-specific validation scenarios. Whether automating native mobile apps, hybrid applications, or mobile web experiences, our Appium solutions provide comprehensive test coverage that ensures mobile applications perform consistently across devices and platforms."
      },
      seoKeywords: "Appium development, Appium test automation, Appium mobile testing, Appium services, Appium consulting, Appium framework development, mobile test automation, Appium iOS testing, Appium Android testing, Appium experts, Appium services, Entalogics Appium, best Appium developers, Appium development company, professional Appium testing, Appium automation services",
      seoDescription: "Expert Appium mobile test automation services by Entalogics. Professional Appium developers delivering cross-platform mobile testing frameworks for iOS and Android applications.",
      ogTitle: "Appium Mobile Test Automation Services | Expert Appium Developers | Entalogics",
      ogDescription: "Automate mobile application testing with professional Appium services. Expert Appium developers delivering cross-platform mobile test automation frameworks."
    },
    { 
      slug: "devops-development-services", 
      title: "DevOps", 
      category: "DevOps", 
      icon: Settings, 
      iconName: "Settings", 
      tagline: "DevOps practices", 
      imagePath: "/assets/technologies/devops.svg",
      heroDescription: "Transform your software delivery with DevOps practices that bridge development and operations. At Entalogics, as a leading DevOps Development company, we implement comprehensive DevOps strategies including CI/CD, infrastructure as code, and monitoring solutions that accelerate delivery while improving reliability.",
      expertiseContent: {
        paragraph1: "Entalogics' areas of expertise encompass comprehensive DevOps development services exclusively designed for startups and enterprises pursuing digital transformation and operational excellence. Our skilled DevOps engineers, automation specialists, and infrastructure architects possess extensive knowledge in containerization, orchestration, and cloud platforms, ensuring that every DevOps implementation accelerates development cycles while maintaining system reliability.",
        paragraph2: "We focus on implementing DevOps practices that enable rapid, reliable software delivery through automated pipelines, infrastructure automation, and comprehensive monitoring. Whether establishing CI/CD workflows, containerizing applications, or implementing infrastructure as code, we ensure that every DevOps transformation meets strict requirements for scalability, security, and operational efficiency throughout the software lifecycle."
      },
      seoKeywords: "DevOps development, DevOps services, DevOps consulting, DevOps implementation, DevOps automation, DevOps engineers, DevOps practices, CI/CD implementation, DevOps transformation, DevOps strategy, infrastructure automation, DevOps experts, Entalogics DevOps, best DevOps developers, DevOps development company, professional DevOps services, DevOps solutions",
      seoDescription: "Expert DevOps development services by Entalogics. Professional DevOps engineers delivering CI/CD pipelines, infrastructure automation, and comprehensive DevOps transformation solutions.",
      ogTitle: "DevOps Development Services | Expert DevOps Engineers | Entalogics",
      ogDescription: "Transform your software delivery with professional DevOps services. Expert DevOps engineers delivering automated pipelines, infrastructure automation, and reliable deployments."
    },
  ],
  "CMS / CRM": [
    { 
      slug: "salesforce-development-services", 
      title: "Salesforce", 
      category: "CMS / CRM", 
      icon: Building2, 
      iconName: "Building2", 
      tagline: "CRM platform", 
      imagePath: "/assets/technologies/salesforce.svg",
      seoKeywords: "Salesforce development, Salesforce developers, Salesforce CRM development, Salesforce development company, Salesforce consulting, Salesforce services, Salesforce customization, Salesforce integration, Salesforce implementation, Salesforce experts, hire Salesforce developers, best Salesforce developers, professional Salesforce development, Salesforce development services, Entalogics Salesforce, Salesforce CRM solutions",
      seoDescription: "Expert Salesforce CRM development services by Entalogics. Professional Salesforce developers delivering CRM customization, integration, and implementation solutions for businesses.",
      ogTitle: "Salesforce Development Services | Expert Salesforce Developers | Entalogics",
      ogDescription: "Professional Salesforce CRM development services. Expert Salesforce developers delivering customization, integration, and implementation solutions."
    },
    { 
      slug: "sharepoint-development-services", 
      title: "SharePoint", 
      category: "CMS / CRM", 
      icon: FileText, 
      iconName: "FileText", 
      tagline: "Microsoft collaboration", 
      imagePath: "/assets/technologies/sharepoint.svg",
      seoKeywords: "SharePoint development, SharePoint developers, SharePoint development company, SharePoint consulting, SharePoint services, SharePoint customization, SharePoint integration, SharePoint implementation, SharePoint Online, SharePoint experts, hire SharePoint developers, best SharePoint developers, professional SharePoint development, SharePoint development services, Entalogics SharePoint",
      seoDescription: "Expert SharePoint development services by Entalogics. Professional SharePoint developers delivering collaboration solutions, document management, and SharePoint customization.",
      ogTitle: "SharePoint Development Services | Expert SharePoint Developers | Entalogics",
      ogDescription: "Professional SharePoint development services. Expert SharePoint developers delivering collaboration solutions and document management systems."
    },
    { 
      slug: "power-platform-development-services", 
      title: "Power Platform", 
      category: "CMS / CRM", 
      icon: Zap, 
      iconName: "Zap", 
      tagline: "Microsoft Power Platform", 
      imagePath: "/assets/technologies/power-platform.svg",
      seoKeywords: "Power Platform development, Power Platform developers, Power Apps development, Power Automate development, Power BI development, Power Platform consulting, Microsoft Power Platform, Power Platform services, Power Platform experts, hire Power Platform developers, best Power Platform developers, professional Power Platform development, Power Platform development services, Entalogics Power Platform",
      seoDescription: "Expert Microsoft Power Platform development services by Entalogics. Professional Power Platform developers delivering Power Apps, Power Automate, and Power BI solutions.",
      ogTitle: "Power Platform Development Services | Expert Power Platform Developers | Entalogics",
      ogDescription: "Professional Microsoft Power Platform development services. Expert developers delivering Power Apps, Power Automate, and Power BI solutions."
    },
    { 
      slug: "servicenow-development-services", 
      title: "ServiceNow", 
      category: "CMS / CRM", 
      icon: Settings, 
      iconName: "Settings", 
      tagline: "IT service management", 
      imagePath: "/assets/technologies/servicenow.svg",
      seoKeywords: "ServiceNow development, ServiceNow developers, ServiceNow development company, ServiceNow consulting, ServiceNow services, ServiceNow implementation, ServiceNow customization, IT service management, ServiceNow experts, hire ServiceNow developers, best ServiceNow developers, professional ServiceNow development, ServiceNow development services, Entalogics ServiceNow",
      seoDescription: "Expert ServiceNow development services by Entalogics. Professional ServiceNow developers delivering IT service management solutions, customization, and implementation.",
      ogTitle: "ServiceNow Development Services | Expert ServiceNow Developers | Entalogics",
      ogDescription: "Professional ServiceNow development services. Expert ServiceNow developers delivering IT service management solutions and customization services."
    },
    { 
      slug: "dynamics-365-development-services", 
      title: "Dynamics 365", 
      category: "CMS / CRM", 
      icon: Building2, 
      iconName: "Building2", 
      tagline: "Microsoft business apps", 
      imagePath: "/assets/technologies/dynamics365.svg",
      seoKeywords: "Dynamics 365 development, Dynamics 365 developers, Dynamics 365 development company, Dynamics 365 consulting, Dynamics 365 services, Dynamics 365 implementation, Dynamics 365 customization, Microsoft Dynamics 365, Dynamics 365 experts, hire Dynamics 365 developers, best Dynamics 365 developers, professional Dynamics 365 development, Dynamics 365 development services, Entalogics Dynamics 365",
      seoDescription: "Expert Dynamics 365 development services by Entalogics. Professional Dynamics 365 developers delivering business application solutions, CRM, and ERP implementations.",
      ogTitle: "Dynamics 365 Development Services | Expert Dynamics 365 Developers | Entalogics",
      ogDescription: "Professional Dynamics 365 development services. Expert Dynamics 365 developers delivering business application solutions and CRM/ERP implementations."
    },
    { 
      slug: "wordpress-development-services", 
      title: "Wordpress", 
      category: "CMS / CRM", 
      icon: Globe, 
      iconName: "Globe", 
      tagline: "Content management", 
      imagePath: "/assets/technologies/wordpress.svg",
      seoKeywords: "WordPress development, WordPress developers, WordPress development company, WordPress website development, WordPress customization, WordPress services, WordPress consulting, WordPress plugin development, WordPress theme development, WordPress experts, hire WordPress developers, best WordPress developers, professional WordPress development, WordPress development services, Entalogics WordPress",
      seoDescription: "Expert WordPress development services by Entalogics. Professional WordPress developers delivering custom websites, themes, plugins, and WordPress customization solutions.",
      ogTitle: "WordPress Development Services | Expert WordPress Developers | Entalogics",
      ogDescription: "Professional WordPress development services. Expert WordPress developers delivering custom websites, themes, plugins, and WordPress solutions."
    },
    { 
      slug: "shopify-development-services", 
      title: "Shopify", 
      category: "CMS / CRM", 
      icon: ShoppingCart, 
      iconName: "ShoppingCart", 
      tagline: "E-commerce platform", 
      imagePath: "/assets/technologies/shopify.svg",
      seoKeywords: "Shopify development, Shopify developers, Shopify store development, Shopify development company, Shopify customization, Shopify services, Shopify consulting, Shopify app development, Shopify theme development, Shopify experts, hire Shopify developers, best Shopify developers, professional Shopify development, Shopify development services, e-commerce development, Entalogics Shopify",
      seoDescription: "Expert Shopify e-commerce development services by Entalogics. Professional Shopify developers delivering custom online stores, themes, apps, and Shopify customization.",
      ogTitle: "Shopify Development Services | Expert Shopify Developers | Entalogics",
      ogDescription: "Professional Shopify e-commerce development services. Expert Shopify developers delivering custom online stores, themes, and apps."
    },
    { 
      slug: "odoo-development-services", 
      title: "Odoo", 
      category: "CMS / CRM", 
      icon: Package, 
      iconName: "Package", 
      tagline: "Business management", 
      imagePath: "/assets/technologies/odoo.svg",
      seoKeywords: "Odoo development, Odoo developers, Odoo development company, Odoo ERP development, Odoo customization, Odoo services, Odoo consulting, Odoo implementation, Odoo module development, Odoo experts, hire Odoo developers, best Odoo developers, professional Odoo development, Odoo development services, Entalogics Odoo",
      seoDescription: "Expert Odoo ERP development services by Entalogics. Professional Odoo developers delivering business management solutions, ERP implementations, and Odoo customization.",
      ogTitle: "Odoo Development Services | Expert Odoo Developers | Entalogics",
      ogDescription: "Professional Odoo ERP development services. Expert Odoo developers delivering business management solutions and ERP implementations."
    },
    { 
      slug: "sap-development-services", 
      title: "SAP", 
      category: "CMS / CRM", 
      icon: Building2, 
      iconName: "Building2", 
      tagline: "Enterprise software", 
      imagePath: "/assets/technologies/sap.svg",
      seoKeywords: "SAP development, SAP developers, SAP development company, SAP consulting, SAP services, SAP implementation, SAP customization, SAP ERP development, SAP ABAP development, SAP experts, hire SAP developers, best SAP developers, professional SAP development, SAP development services, Entalogics SAP",
      seoDescription: "Expert SAP development services by Entalogics. Professional SAP developers delivering enterprise software solutions, SAP implementations, and SAP customization services.",
      ogTitle: "SAP Development Services | Expert SAP Developers | Entalogics",
      ogDescription: "Professional SAP development services. Expert SAP developers delivering enterprise software solutions and SAP implementations."
    },
  ],
  Database: [
    { 
      slug: "mssql-development-services", 
      title: "MsSQL", 
      category: "Database", 
      icon: Database, 
      iconName: "Database", 
      tagline: "Microsoft SQL Server", 
      imagePath: "/assets/technologies/mssql.svg",
      seoKeywords: "MS SQL development, SQL Server development, MS SQL developers, SQL Server developers, MS SQL development company, SQL Server consulting, MS SQL services, SQL Server database development, MS SQL Server, SQL Server experts, hire SQL Server developers, best SQL Server developers, professional SQL Server development, MS SQL development services, Entalogics SQL Server",
      seoDescription: "Expert MS SQL Server development services by Entalogics. Professional SQL Server developers delivering database solutions, optimization, and SQL Server implementation services.",
      ogTitle: "MS SQL Server Development Services | Expert SQL Server Developers | Entalogics",
      ogDescription: "Professional MS SQL Server development services. Expert SQL Server developers delivering database solutions, optimization, and implementation services."
    },
    { 
      slug: "cosmosdb-development-services", 
      title: "CosmosDB", 
      category: "Database", 
      icon: Database, 
      iconName: "Database", 
      tagline: "Azure Cosmos DB", 
      imagePath: "/assets/technologies/cosmosdb.svg",
      seoKeywords: "CosmosDB development, Azure Cosmos DB development, CosmosDB developers, CosmosDB development company, CosmosDB consulting, CosmosDB services, Azure Cosmos DB, CosmosDB NoSQL, CosmosDB implementation, CosmosDB experts, hire CosmosDB developers, best CosmosDB developers, professional CosmosDB development, CosmosDB development services, Entalogics CosmosDB",
      seoDescription: "Expert Azure Cosmos DB development services by Entalogics. Professional CosmosDB developers delivering globally distributed NoSQL database solutions and implementations.",
      ogTitle: "Azure Cosmos DB Development Services | Expert CosmosDB Developers | Entalogics",
      ogDescription: "Professional Azure Cosmos DB development services. Expert CosmosDB developers delivering globally distributed NoSQL database solutions."
    },
    { 
      slug: "dynamodb-development-services", 
      title: "DynamoDB", 
      category: "Database", 
      icon: Database, 
      iconName: "Database", 
      tagline: "Amazon DynamoDB", 
      imagePath: "/assets/technologies/dynamodb.svg",
      seoKeywords: "DynamoDB development, Amazon DynamoDB development, DynamoDB developers, DynamoDB development company, DynamoDB consulting, DynamoDB services, AWS DynamoDB, DynamoDB NoSQL, DynamoDB implementation, DynamoDB experts, hire DynamoDB developers, best DynamoDB developers, professional DynamoDB development, DynamoDB development services, Entalogics DynamoDB",
      seoDescription: "Expert Amazon DynamoDB development services by Entalogics. Professional DynamoDB developers delivering serverless NoSQL database solutions and AWS database implementations.",
      ogTitle: "Amazon DynamoDB Development Services | Expert DynamoDB Developers | Entalogics",
      ogDescription: "Professional Amazon DynamoDB development services. Expert DynamoDB developers delivering serverless NoSQL database solutions on AWS."
    },
    { 
      slug: "mysql-development-services", 
      title: "MySQL", 
      category: "Database", 
      icon: Database, 
      iconName: "Database", 
      tagline: "Open source database", 
      imagePath: "/assets/technologies/mysql.svg",
      seoKeywords: "MySQL development, MySQL developers, MySQL development company, MySQL database development, MySQL consulting, MySQL services, MySQL optimization, MySQL implementation, MySQL experts, hire MySQL developers, best MySQL developers, professional MySQL development, MySQL development services, open source database, Entalogics MySQL",
      seoDescription: "Expert MySQL database development services by Entalogics. Professional MySQL developers delivering open-source database solutions, optimization, and MySQL implementation services.",
      ogTitle: "MySQL Development Services | Expert MySQL Developers | Entalogics",
      ogDescription: "Professional MySQL database development services. Expert MySQL developers delivering open-source database solutions and optimization services."
    },
    { 
      slug: "postgresql-development-services", 
      title: "PostgreSQL", 
      category: "Database", 
      icon: Database, 
      iconName: "Database", 
      tagline: "Advanced open source database", 
      imagePath: "/assets/technologies/postgresql.svg",
      seoKeywords: "PostgreSQL development, PostgreSQL developers, PostgreSQL development company, PostgreSQL database development, PostgreSQL consulting, PostgreSQL services, PostgreSQL optimization, PostgreSQL implementation, PostgreSQL experts, hire PostgreSQL developers, best PostgreSQL developers, professional PostgreSQL development, PostgreSQL development services, Entalogics PostgreSQL",
      seoDescription: "Expert PostgreSQL database development services by Entalogics. Professional PostgreSQL developers delivering advanced open-source database solutions, optimization, and implementations.",
      ogTitle: "PostgreSQL Development Services | Expert PostgreSQL Developers | Entalogics",
      ogDescription: "Professional PostgreSQL database development services. Expert PostgreSQL developers delivering advanced open-source database solutions and optimization."
    },
    { 
      slug: "oracle-development-services", 
      title: "Oracle", 
      category: "Database", 
      icon: Database, 
      iconName: "Database", 
      tagline: "Enterprise database", 
      imagePath: "/assets/technologies/oracle.svg",
      seoKeywords: "Oracle development, Oracle developers, Oracle database development, Oracle development company, Oracle consulting, Oracle services, Oracle database, Oracle implementation, Oracle experts, hire Oracle developers, best Oracle developers, professional Oracle development, Oracle development services, Oracle database administration, Entalogics Oracle",
      seoDescription: "Expert Oracle database development services by Entalogics. Professional Oracle developers delivering enterprise-grade database solutions, optimization, and Oracle implementation services.",
      ogTitle: "Oracle Database Development Services | Expert Oracle Developers | Entalogics",
      ogDescription: "Professional Oracle database development services. Expert Oracle developers delivering enterprise-grade database solutions and implementations."
    },
    { 
      slug: "firebase-development-services", 
      title: "Firebase", 
      category: "Database", 
      icon: Server, 
      iconName: "Server", 
      tagline: "Google backend platform", 
      imagePath: "/assets/technologies/firebase.svg",
      seoKeywords: "Firebase development, Firebase developers, Firebase development company, Firebase database development, Firebase consulting, Firebase services, Firebase Realtime Database, Firebase Firestore, Firebase implementation, Firebase experts, hire Firebase developers, best Firebase developers, professional Firebase development, Firebase development services, Entalogics Firebase",
      seoDescription: "Expert Firebase development services by Entalogics. Professional Firebase developers delivering Google's backend platform solutions, Firestore databases, and Firebase implementations.",
      ogTitle: "Firebase Development Services | Expert Firebase Developers | Entalogics",
      ogDescription: "Professional Firebase development services. Expert Firebase developers delivering Google's backend platform solutions and database implementations."
    },
    { 
      slug: "mongodb-development-services", 
      title: "MongoDB", 
      category: "Database", 
      icon: Database, 
      iconName: "Database", 
      tagline: "NoSQL database", 
      imagePath: "/assets/technologies/mongodb.svg",
      seoKeywords: "MongoDB development, MongoDB developers, MongoDB development company, MongoDB database development, MongoDB consulting, MongoDB services, MongoDB NoSQL, MongoDB implementation, MongoDB experts, hire MongoDB developers, best MongoDB developers, professional MongoDB development, MongoDB development services, Entalogics MongoDB",
      seoDescription: "Expert MongoDB development services by Entalogics. Professional MongoDB developers delivering NoSQL database solutions, schema design, and MongoDB implementation services.",
      ogTitle: "MongoDB Development Services | Expert MongoDB Developers | Entalogics",
      ogDescription: "Professional MongoDB development services. Expert MongoDB developers delivering NoSQL database solutions and implementations."
    },
    { 
      slug: "redis-development-services", 
      title: "Redis", 
      category: "Database", 
      icon: HardDrive, 
      iconName: "HardDrive", 
      tagline: "In-memory data store", 
      imagePath: "/assets/technologies/reddis.svg",
      seoKeywords: "Redis development, Redis developers, Redis development company, Redis database development, Redis consulting, Redis services, Redis caching, Redis implementation, Redis experts, hire Redis developers, best Redis developers, professional Redis development, Redis development services, in-memory database, Entalogics Redis",
      seoDescription: "Expert Redis development services by Entalogics. Professional Redis developers delivering in-memory data store solutions, caching implementations, and Redis optimization services.",
      ogTitle: "Redis Development Services | Expert Redis Developers | Entalogics",
      ogDescription: "Professional Redis development services. Expert Redis developers delivering in-memory data store solutions and caching implementations."
    },
  ],
}

// Flatten all technologies into a single object for easy lookup
export const technologiesData: Record<string, Technology> = {}
Object.values(technologiesByCategory).forEach(techs => {
  techs.forEach(tech => {
    technologiesData[tech.slug] = tech
  })
})

// Get all technology slugs
export const getAllTechnologySlugs = (): string[] => {
  return Object.keys(technologiesData)
}

// Get technology by slug
export const getTechnologyBySlug = (slug: string): Technology | undefined => {
  return technologiesData[slug]
}

// Get all categories
export const getTechnologyCategories = (): string[] => {
  return Object.keys(technologiesByCategory)
}

