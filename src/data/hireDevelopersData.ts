export interface HireDeveloperCategory {
  category: string
  items: HireDeveloperItem[]
}

export interface TechnologyItem {
  name: string
  description: string
  iconPath?: string
}

export interface TechnologyCategory {
  name: string
  technologies: TechnologyItem[]
}

export interface HireDeveloperItem {
  slug: string
  title: string
  category: string
  imagePath?: string
  technologyCategories?: TechnologyCategory[]
  seoKeywords?: string
  seoDescription?: string
  customContent?: {
    expertiseParagraph1?: string
    expertiseParagraph2?: string
  }
}

// AI Tools categories for different developer types
const codingAITools: TechnologyCategory = {
  name: "AI Tools",
  technologies: [
    { 
      name: "ChatGPT", 
      description: "OpenAI's conversational AI assistant for code generation, debugging, and technical assistance.", 
      iconPath: "/assets/technologies/chatgpt.svg" 
    },
    { 
      name: "GitHub Copilot", 
      description: "AI-powered code completion tool that suggests code snippets and entire functions as you type.", 
      iconPath: "/assets/technologies/githubcopilot.svg" 
    },
    { 
      name: "Claude", 
      description: "Anthropic's AI assistant for code review, documentation, and complex problem-solving.", 
      iconPath: "/assets/technologies/claude.svg" 
    },
    { 
      name: "Cursor", 
      description: "AI-powered code editor that understands context and helps write better code faster.", 
      iconPath: "/assets/technologies/cursor.svg" 
    },
    { 
      name: "OpenAI API", 
      description: "API for integrating GPT models into applications for natural language processing and generation.", 
      iconPath: "/assets/technologies/chatgpt.svg" 
    },
  ]
}

const designAITools: TechnologyCategory = {
  name: "AI Tools",
  technologies: [
    { 
      name: "ChatGPT", 
      description: "OpenAI's conversational AI assistant for design ideation, content creation, and technical assistance.", 
      iconPath: "/assets/technologies/chatgpt.svg" 
    },
    { 
      name: "Midjourney", 
      description: "AI image generation tool for creating design assets, mockups, and visual content.", 
      iconPath: "/assets/technologies/midjourney.svg" 
    },
    { 
      name: "GitHub Copilot", 
      description: "AI-powered code completion for implementing design components and UI code.", 
      iconPath: "/assets/technologies/githubcopilot.svg" 
    },
    { 
      name: "Claude", 
      description: "AI assistant for design documentation, user experience analysis, and design system creation.", 
      iconPath: "/assets/technologies/claude.svg" 
    },
  ]
}

const mobileWebAITools: TechnologyCategory = {
  name: "AI Tools",
  technologies: [
    { 
      name: "ChatGPT", 
      description: "OpenAI's conversational AI assistant for code generation, debugging, and technical assistance.", 
      iconPath: "/assets/technologies/chatgpt.svg" 
    },
    { 
      name: "GitHub Copilot", 
      description: "AI-powered code completion tool that suggests code snippets and entire functions as you type.", 
      iconPath: "/assets/technologies/githubcopilot.svg" 
    },
    { 
      name: "Claude", 
      description: "Anthropic's AI assistant for code review, documentation, and complex problem-solving.", 
      iconPath: "/assets/technologies/claude.svg" 
    },
    { 
      name: "Cursor", 
      description: "AI-powered code editor that understands context and helps write better code faster.", 
      iconPath: "/assets/technologies/cursor.svg" 
    },
    { 
      name: "Midjourney", 
      description: "AI image generation tool for creating app icons, UI mockups, and visual design assets.", 
      iconPath: "/assets/technologies/midjourney.svg" 
    },
    { 
      name: "OpenAI API", 
      description: "API for integrating GPT models into mobile and web applications.", 
      iconPath: "/assets/technologies/chatgpt.svg" 
    },
  ]
}

export const hireDevelopersByCategory: Record<string, HireDeveloperItem[]> = {
  "Hire Desktop Developers": [
    { 
      slug: "hire-desktop-developers", 
      title: "Desktop Developers", 
      category: "Hire Desktop Developers",
      imagePath: "/assets/technologies/chromium.svg",
      seoKeywords: "hire desktop developers, desktop application development, desktop software developers, Windows app developers, desktop programming, native desktop apps, desktop application development services, cross-platform desktop development, desktop software development, desktop app developers",
      seoDescription: "Hire expert Desktop Developers from Entalogics. Specialized in building native and cross-platform desktop applications. Create powerful desktop software with our experienced desktop developers.",
      technologyCategories: [
        {
          name: "Frameworks & Platforms",
          technologies: [
            { name: "Electron", description: "Build cross-platform desktop applications using web technologies like HTML, CSS, and JavaScript.", iconPath: "/assets/technologies/electron-logo.svg" },
            { name: "Chromium", description: "Open-source browser engine for building custom desktop browsers and applications.", iconPath: "/assets/technologies/chromium.svg" },
            { name: ".NET", description: "Microsoft framework for building Windows desktop applications with C#.", iconPath: "/assets/technologies/dotnet.svg" },
            { name: "Qt", description: "Cross-platform framework for building native desktop applications with C++.", iconPath: "/assets/technologies/cpp.svg" },
          ]
        },
        {
          name: "Languages & Tools",
          technologies: [
            { name: "C#", description: "Primary language for Windows desktop application development.", iconPath: "/assets/technologies/c.svg" },
            { name: "C++", description: "High-performance language for native desktop applications.", iconPath: "/assets/technologies/cpp.svg" },
            { name: "JavaScript", description: "For building Electron-based desktop applications.", iconPath: "/assets/technologies/javascript.svg" },
            { name: "TypeScript", description: "Typed JavaScript for building maintainable desktop applications.", iconPath: "/assets/technologies/typescript.svg" },
          ]
        },
        {
          name: "Development Tools",
          technologies: [
            { name: "Visual Studio", description: "Microsoft IDE for Windows desktop application development.", iconPath: "/assets/technologies/web.svg" },
            { name: "Visual Studio Code", description: "Code editor with extensions for desktop development.", iconPath: "/assets/technologies/web.svg" },
            { name: "Git", description: "Version control system for desktop application development.", iconPath: "/assets/technologies/git.svg" },
          ]
        },
        mobileWebAITools,
      ]
    },
    { 
      slug: "hire-electron-developers", 
      title: "Electron Developers", 
      category: "Hire Desktop Developers",
      imagePath: "/assets/technologies/electron-logo.svg",
      seoKeywords: "hire Electron developers, Electron app development, Electron framework, Electron desktop apps, Electron programming, cross-platform Electron apps, Electron application development, Electron development services, Electron JavaScript development, Electron web technologies, Electron desktop development",
      seoDescription: "Hire expert Electron Developers from Entalogics. Specialized in Electron framework for building cross-platform desktop applications with web technologies. Build native-feeling apps with Electron.",
      customContent: {
        expertiseParagraph1: "Electron has revolutionized desktop app development by allowing you to build cross-platform applications using web technologies. Our Electron Developers specialize in creating desktop apps that feel native while leveraging the power of JavaScript, React, and other web frameworks. We've built everything from code editors to communication tools using Electron.",
        expertiseParagraph2: "We understand Electron's architecture, from main and renderer processes to native module integration. Our developers know how to optimize Electron apps for performance, handle native OS integrations, and create seamless user experiences. Whether you're building a productivity tool, a developer IDE, or a business application, Electron gives you the flexibility to ship to Windows, macOS, and Linux from a single codebase."
      },
      technologyCategories: [
        {
          name: "Frameworks & Platforms",
          technologies: [
            { name: "Electron", description: "Build cross-platform desktop applications using web technologies like HTML, CSS, and JavaScript.", iconPath: "/assets/technologies/electron-logo.svg" },
            { name: "Node.js", description: "JavaScript runtime for Electron desktop application backend.", iconPath: "/assets/technologies/node.svg" },
            { name: "React", description: "UI library for building Electron application interfaces.", iconPath: "/assets/technologies/React.svg" },
            { name: "Vue.js", description: "Progressive framework for Electron desktop applications.", iconPath: "/assets/technologies/vue.svg" },
          ]
        },
        {
          name: "Languages & Tools",
          technologies: [
            { name: "JavaScript", description: "Primary language for Electron desktop application development.", iconPath: "/assets/technologies/javascript.svg" },
            { name: "TypeScript", description: "Typed JavaScript for building maintainable Electron applications.", iconPath: "/assets/technologies/typescript.svg" },
            { name: "HTML5", description: "Markup language for Electron application structure.", iconPath: "/assets/technologies/html5.svg" },
            { name: "CSS3", description: "Styling language for Electron application design.", iconPath: "/assets/technologies/html5.svg" },
          ]
        },
        {
          name: "Development Tools",
          technologies: [
            { name: "Visual Studio Code", description: "Code editor with Electron development extensions.", iconPath: "/assets/technologies/web.svg" },
            { name: "Electron Forge", description: "Tooling ecosystem for Electron application development.", iconPath: "/assets/technologies/electron-logo.svg" },
            { name: "Git", description: "Version control system for Electron projects.", iconPath: "/assets/technologies/git.svg" },
          ]
        },
        mobileWebAITools,
      ]
    },
    { 
      slug: "hire-chromium-browser-developers", 
      title: "Chromium Browser Developers", 
      category: "Hire Desktop Developers",
      imagePath: "/assets/technologies/chromium.svg",
      seoKeywords: "browser developer, browser modification, brave browser development, browser wallet development, browser AI integration, chromium browser developers, custom browser development, browser extension development, chromium-based browser, browser customization, browser development services, chromium engine development, browser wallet integration, browser AI features, brave browser developers, browser modification services, custom browser creation, chromium browser customization, browser development company, browser wallet implementation, browser AI development, brave browser customization, chromium browser modification, browser developer services, custom browser solutions, chromium browser programming, browser engine development",
      seoDescription: "Hire expert Chromium Browser Developers from Entalogics. Specialized in browser development, browser modification, Brave browser development, browser wallet integration, and browser AI features. Build custom browsers and browser-based solutions with our experts.",
      customContent: {
        expertiseParagraph1: "At Entalogics, we specialize in browser development and customization. Our Chromium Browser Developers have deep expertise in building custom browsers, modifying existing browser engines, and integrating advanced features like browser wallets and AI capabilities. Whether you're building a Brave-like browser, adding crypto wallet functionality, or implementing AI-powered browser features, our team has the skills to make it happen.",
        expertiseParagraph2: "We work with Chromium's open-source engine to create tailored browser solutions that meet your specific needs. From browser modification and customization to developing browser extensions and integrating AI features, our developers understand the complexities of browser architecture. We've helped clients build custom browsers with unique features, implement browser wallets for crypto transactions, and add AI-powered capabilities that enhance user experience."
      },
      technologyCategories: [
        {
          name: "Frameworks & Platforms",
          technologies: [
            { name: "Chromium", description: "Open-source browser engine for building custom desktop browsers and applications.", iconPath: "/assets/technologies/chromium.svg" },
            { name: "CEF", description: "Chromium Embedded Framework for integrating browser capabilities into desktop apps.", iconPath: "/assets/technologies/chromium.svg" },
            { name: "Electron", description: "Framework built on Chromium for cross-platform desktop applications.", iconPath: "/assets/technologies/electron-logo.svg" },
          ]
        },
        {
          name: "Languages & Tools",
          technologies: [
            { name: "C++", description: "Primary language for Chromium browser development and customization.", iconPath: "/assets/technologies/cpp.svg" },
            { name: "JavaScript", description: "For Chromium extension and web application development.", iconPath: "/assets/technologies/javascript.svg" },
            { name: "TypeScript", description: "Typed JavaScript for Chromium-based application development.", iconPath: "/assets/technologies/typescript.svg" },
            { name: "Python", description: "For Chromium build scripts and automation.", iconPath: "/assets/technologies/python.svg" },
          ]
        },
        {
          name: "Development Tools",
          technologies: [
            { name: "Visual Studio Code", description: "Code editor for Chromium development.", iconPath: "/assets/technologies/web.svg" },
            { name: "GN", description: "Build system generator for Chromium projects.", iconPath: "/assets/technologies/chromium.svg" },
            { name: "Git", description: "Version control for Chromium-based projects.", iconPath: "/assets/technologies/git.svg" },
          ]
        },
        mobileWebAITools,
      ]
    },
    { 
      slug: "hire-chrome-extension-developers", 
      title: "Chrome Extension Developers", 
      category: "Hire Desktop Developers",
      imagePath: "/assets/technologies/chromium.svg",
      seoKeywords: "hire Chrome extension developers, Chrome extension development, browser extension developers, Chrome extension programming, Manifest V3 developers, Chrome extension services, browser add-on development, Chrome extension customization, WebExtensions API, Chrome extension development services, extension developers for hire",
      seoDescription: "Hire expert Chrome Extension Developers from Entalogics. Specialized in Chrome extension development, Manifest V3, and browser add-ons. Build powerful browser extensions that enhance user experience.",
      customContent: {
        expertiseParagraph1: "Chrome extensions can transform how users interact with the web. Our Chrome Extension Developers specialize in building powerful, user-friendly extensions using the latest Manifest V3 standards. We create extensions that enhance productivity, add new functionality to websites, and provide seamless user experiences across Chrome and other Chromium-based browsers.",
        expertiseParagraph2: "From content blockers and productivity tools to integrations with third-party services, our developers understand the Chrome extension ecosystem inside and out. We ensure your extensions are performant, secure, and compliant with Chrome Web Store policies. Whether you need a simple utility extension or a complex application that runs in the browser, we've got the expertise to deliver."
      },
      technologyCategories: [
        {
          name: "Frameworks & Platforms",
          technologies: [
            { name: "Chrome Extension API", description: "Chrome Extensions API for building browser extensions and add-ons.", iconPath: "/assets/technologies/chromium.svg" },
            { name: "Manifest V3", description: "Latest Chrome extension manifest format for modern extension development.", iconPath: "/assets/technologies/chromium.svg" },
            { name: "WebExtensions API", description: "Cross-browser extension API for Chrome, Firefox, and Edge extensions.", iconPath: "/assets/technologies/chromium.svg" },
            { name: "React", description: "UI library for building Chrome extension popups and options pages.", iconPath: "/assets/technologies/React.svg" },
          ]
        },
        {
          name: "Languages & Tools",
          technologies: [
            { name: "JavaScript", description: "Primary language for Chrome extension development.", iconPath: "/assets/technologies/javascript.svg" },
            { name: "TypeScript", description: "Typed JavaScript for building maintainable Chrome extensions.", iconPath: "/assets/technologies/typescript.svg" },
            { name: "HTML5", description: "Markup language for extension popup and options pages.", iconPath: "/assets/technologies/html5.svg" },
            { name: "CSS3", description: "Styling language for Chrome extension interfaces.", iconPath: "/assets/technologies/html5.svg" },
          ]
        },
        {
          name: "Development Tools",
          technologies: [
            { name: "Chrome DevTools", description: "Browser developer tools for debugging Chrome extensions.", iconPath: "/assets/technologies/chromium.svg" },
            { name: "Visual Studio Code", description: "Code editor with Chrome extension development extensions.", iconPath: "/assets/technologies/web.svg" },
            { name: "Webpack", description: "Module bundler for Chrome extension projects.", iconPath: "/assets/technologies/webpack.svg" },
            { name: "Git", description: "Version control system for Chrome extension projects.", iconPath: "/assets/technologies/git.svg" },
          ]
        },
        mobileWebAITools,
      ]
    },
    { 
      slug: "hire-qt-developers", 
      title: "Qt Developers", 
      category: "Hire Desktop Developers",
      imagePath: "/assets/technologies/cpp.svg",
      seoKeywords: "hire Qt developers, Qt development, Qt framework, Qt C++ developers, Qt application development, Qt programming, Qt desktop apps, Qt GUI development, Qt cross-platform, Qt development services, QML developers, Qt Quick developers, Qt software development",
      seoDescription: "Hire expert Qt Developers from Entalogics. Specialized in Qt framework, C++, and QML for building native cross-platform desktop applications. Create beautiful, performant desktop apps with Qt.",
      technologyCategories: [
        {
          name: "Frameworks & Platforms",
          technologies: [
            { name: "Qt", description: "Cross-platform framework for building native desktop applications with C++.", iconPath: "/assets/technologies/cpp.svg" },
            { name: "Qt Quick", description: "Declarative UI framework for Qt applications.", iconPath: "/assets/technologies/cpp.svg" },
            { name: "QML", description: "Qt Modeling Language for user interface design.", iconPath: "/assets/technologies/cpp.svg" },
          ]
        },
        {
          name: "Languages & Tools",
          technologies: [
            { name: "C++", description: "Primary language for Qt desktop application development.", iconPath: "/assets/technologies/cpp.svg" },
            { name: "Python", description: "PyQt/PySide for Python-based Qt applications.", iconPath: "/assets/technologies/python.svg" },
            { name: "JavaScript", description: "For Qt Quick and QML development.", iconPath: "/assets/technologies/javascript.svg" },
          ]
        },
        {
          name: "Development Tools",
          technologies: [
            { name: "Qt Creator", description: "Official IDE for Qt application development.", iconPath: "/assets/technologies/cpp.svg" },
            { name: "Visual Studio Code", description: "Code editor with Qt extensions.", iconPath: "/assets/technologies/web.svg" },
            { name: "Git", description: "Version control system for Qt projects.", iconPath: "/assets/technologies/git.svg" },
          ]
        },
        codingAITools,
      ]
    },
    { 
      slug: "hire-cpp-desktop-developers", 
      title: "C++ Desktop Developers", 
      category: "Hire Desktop Developers",
      imagePath: "/assets/technologies/cpp.svg",
      seoKeywords: "hire C++ developers, C++ desktop development, C++ programming, native C++ apps, C++ application development, C++ software developers, C++ desktop programming, C++ GUI development, C++ development services, native desktop development, C++ Windows development, C++ Linux development",
      seoDescription: "Hire expert C++ Desktop Developers from Entalogics. Specialized in C++ for building high-performance native desktop applications. Create fast, efficient desktop software with our C++ experts.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "C++", description: "High-performance language for native desktop applications.", iconPath: "/assets/technologies/cpp.svg" },
            { name: "Qt", description: "C++ framework for cross-platform desktop applications.", iconPath: "/assets/technologies/cpp.svg" },
            { name: "GTK+", description: "GUI toolkit for C++ desktop applications on Linux.", iconPath: "/assets/technologies/cpp.svg" },
            { name: "wxWidgets", description: "C++ framework for native desktop applications.", iconPath: "/assets/technologies/cpp.svg" },
          ]
        },
        {
          name: "Development Tools",
          technologies: [
            { name: "Visual Studio", description: "Microsoft IDE for C++ desktop development on Windows.", iconPath: "/assets/technologies/web.svg" },
            { name: "CLion", description: "JetBrains IDE for C++ desktop application development.", iconPath: "/assets/technologies/cpp.svg" },
            { name: "CMake", description: "Build system generator for C++ projects.", iconPath: "/assets/technologies/cpp.svg" },
            { name: "Git", description: "Version control system for C++ projects.", iconPath: "/assets/technologies/git.svg" },
          ]
        },
        codingAITools,
      ]
    },
    { 
      slug: "hire-csharp-desktop-developers", 
      title: "C# Desktop Developers", 
      category: "Hire Desktop Developers",
      imagePath: "/assets/technologies/c.svg",
      seoKeywords: "hire C# developers, C# desktop development, C# programming, C# Windows apps, WPF developers, WinForms developers, C# application development, C# desktop programming, .NET desktop development, C# development services, C# software developers, Windows desktop development",
      seoDescription: "Hire expert C# Desktop Developers from Entalogics. Specialized in C#, WPF, and WinForms for Windows desktop application development. Build modern Windows applications with our C# experts.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "C#", description: "Primary language for Windows desktop application development.", iconPath: "/assets/technologies/c.svg" },
            { name: ".NET", description: "Microsoft framework for C# desktop applications.", iconPath: "/assets/technologies/dotnet.svg" },
            { name: "WPF", description: "Windows Presentation Foundation for rich desktop UI.", iconPath: "/assets/technologies/dotnet.svg" },
            { name: "WinForms", description: "Windows Forms for traditional desktop applications.", iconPath: "/assets/technologies/dotnet.svg" },
          ]
        },
        {
          name: "Development Tools",
          technologies: [
            { name: "Visual Studio", description: "Microsoft IDE for C# desktop application development.", iconPath: "/assets/technologies/web.svg" },
            { name: "Visual Studio Code", description: "Code editor with C# extensions.", iconPath: "/assets/technologies/web.svg" },
            { name: "Git", description: "Version control system for C# projects.", iconPath: "/assets/technologies/git.svg" },
          ]
        },
        codingAITools,
      ]
    },
  ],
  
  
  
  
  
  "Hire Mobile Apps Developers": [
    { 
      slug: "hire-mobile-app-developers", 
      title: "Mobile App Developers", 
      category: "Hire Mobile Apps Developers",
      imagePath: "/assets/technologies/mobile.svg",
      seoKeywords: "hire mobile app developers, mobile application development, iOS developers, Android developers, mobile app programming, mobile app design, mobile app development services, native app developers, mobile app development company, cross-platform app developers, mobile software developers, app development team, mobile developers for hire",
      seoDescription: "Hire expert Mobile App Developers from Entalogics. Specialized in iOS, Android, and cross-platform mobile app development. Build native and hybrid mobile applications with our experienced developers.",
      customContent: {
        expertiseParagraph1: "Mobile apps are at the heart of modern business. Our Mobile App Developers bring expertise in both native iOS and Android development, as well as cross-platform frameworks like React Native and Flutter. We understand the nuances of mobile UX, performance optimization, and platform-specific requirements that make apps successful.",
        expertiseParagraph2: "Whether you need a native iOS app built with Swift, an Android app using Kotlin, or a cross-platform solution that works everywhere, our developers have the experience to deliver. We focus on creating apps that are not just functional but delightful to use, with smooth animations, intuitive navigation, and features that users actually want."
      },
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "Swift", description: "For developing robust and secure iOS applications.", iconPath: "/assets/technologies/swift.svg" },
            { name: "Flutter", description: "These are used to develop native mobile, web, and desktop applications from a single software development kit.", iconPath: "/assets/technologies/flutter.svg" },
            { name: "React Native", description: "The approach that is best suited for creating genuinely native cross-platform applications with JavaScript and React.", iconPath: "/assets/technologies/react-native.svg" },
            { name: "Ionic", description: "To develop complex mobile applications that combine aspects of native and web applications using HTML, CSS & JS.", iconPath: "/assets/technologies/ionic.svg" },
            { name: "Java", description: "For developing feature-rich and high-end Android applications.", iconPath: "/assets/technologies/java.svg" },
            { name: "Kotlin", description: "For developing feature-rich and high-end Android applications.", iconPath: "/assets/technologies/android.svg" },
            { name: "Objective-C", description: "To find out the best practices for building strong and safe iOS applications.", iconPath: "/assets/technologies/objectivec.svg" },
            { name: "Dart", description: "Programming language used with Flutter for building cross-platform mobile applications.", iconPath: "/assets/technologies/dart.svg" },
          ]
        },
        {
          name: "Development Tools",
          technologies: [
            { name: "Xcode", description: "Apple's integrated development environment for iOS and macOS app development.", iconPath: "/assets/technologies/xcode.svg" },
            { name: "Android Studio", description: "Official IDE for Android app development with comprehensive tools and emulators.", iconPath: "/assets/technologies/android.svg" },
            { name: "Visual Studio Code", description: "Lightweight code editor with extensive mobile development extensions.", iconPath: "/assets/technologies/web.svg" },
            { name: "Git", description: "Version control system for managing mobile app source code and collaboration.", iconPath: "/assets/technologies/opensource.svg" },
          ]
        },
        {
          name: "UI/UX Design",
          technologies: [
            { name: "Figma", description: "Collaborative design tool for creating mobile app interfaces and prototypes.", iconPath: "/assets/technologies/figma.svg" },
            { name: "Sketch", description: "Design tool for creating pixel-perfect mobile app UI designs.", iconPath: "/assets/technologies/sketch.svg" },
            { name: "Adobe XD", description: "User experience design software for mobile app wireframes and prototypes.", iconPath: "/assets/technologies/adobexd.svg" },
          ]
        },
        {
          name: "Testing & Debugging",
          technologies: [
            { name: "Appium", description: "Open-source test automation framework for mobile applications.", iconPath: "/assets/technologies/appium.svg" },
            { name: "Selenium", description: "Web application testing framework adapted for mobile web testing.", iconPath: "/assets/technologies/selenium.svg" },
            { name: "Jest", description: "JavaScript testing framework for React Native applications.", iconPath: "/assets/technologies/react-native.svg" },
          ]
        },
        {
          name: "Backend & Databases",
          technologies: [
            { name: "Firebase", description: "Google's backend platform providing authentication, database, and cloud services for mobile apps.", iconPath: "/assets/technologies/firebase.svg" },
            { name: "MongoDB", description: "NoSQL database for storing mobile app data with flexible schema design.", iconPath: "/assets/technologies/mongodb.svg" },
            { name: "PostgreSQL", description: "Advanced open-source relational database for mobile app backend services.", iconPath: "/assets/technologies/postgresql.svg" },
          ]
        },
        {
          name: "APIs & Integration",
          technologies: [
            { name: "REST APIs", description: "RESTful API integration for connecting mobile apps with backend services.", iconPath: "/assets/technologies/node.svg" },
            { name: "GraphQL", description: "Query language for APIs enabling efficient data fetching in mobile applications.", iconPath: "/assets/technologies/graphql.svg" },
            { name: "WebSocket", description: "Real-time communication protocol for live features in mobile apps.", iconPath: "/assets/technologies/websocket.svg" },
          ]
        },
        mobileWebAITools,
      ]
    },
    { 
      slug: "hire-ios-app-developers", 
      title: "iOS App Developers", 
      category: "Hire Mobile Apps Developers",
      imagePath: "/assets/technologies/ios.svg",
      seoKeywords: "hire iOS developers, iOS app development, Swift developers, iOS programming, iPhone app developers, iPad app development, iOS application development, SwiftUI developers, iOS native development, Apple app developers, iOS mobile development, iOS software developers, iOS app development services",
      seoDescription: "Hire expert iOS App Developers from Entalogics. Specialized in Swift, SwiftUI, and iOS native app development. Build high-quality iPhone and iPad applications with our experienced iOS developers.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "Swift", description: "For developing robust and secure iOS applications.", iconPath: "/assets/technologies/swift.svg" },
            { name: "SwiftUI", description: "Modern declarative UI framework for building iOS applications.", iconPath: "/assets/technologies/ios.svg" },
            { name: "Objective-C", description: "To find out the best practices for building strong and safe iOS applications.", iconPath: "/assets/technologies/objectivec.svg" },
            { name: "UIKit", description: "Apple's framework for building native iOS user interfaces.", iconPath: "/assets/technologies/ios.svg" },
          ]
        },
        {
          name: "Development Tools",
          technologies: [
            { name: "Xcode", description: "Apple's integrated development environment for iOS app development.", iconPath: "/assets/technologies/xcode.svg" },
            { name: "CocoaPods", description: "Dependency manager for iOS projects.", iconPath: "/assets/technologies/cocoapods.svg" },
            { name: "Swift Package Manager", description: "Apple's official package manager for Swift projects.", iconPath: "/assets/technologies/swift.svg" },
          ]
        },
        {
          name: "Testing & Debugging",
          technologies: [
            { name: "XCTest", description: "Apple's testing framework for iOS applications.", iconPath: "/assets/technologies/ios.svg" },
            { name: "Appium", description: "Cross-platform mobile app testing for iOS applications.", iconPath: "/assets/technologies/appium.svg" },
          ]
        },
        mobileWebAITools,
      ]
    },
    { 
      slug: "hire-android-app-developers", 
      title: "Android App Developers", 
      category: "Hire Mobile Apps Developers",
      imagePath: "/assets/technologies/android.svg",
      seoKeywords: "hire Android developers, Android app development, Kotlin developers, Java Android developers, Android programming, Android application development, Android native development, Android mobile development, Android software developers, Android app development services, Google Play developers",
      seoDescription: "Hire expert Android App Developers from Entalogics. Specialized in Kotlin, Java, and Android native app development. Build high-performance Android applications for Google Play Store.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "Java", description: "For developing feature-rich and high-end Android applications.", iconPath: "/assets/technologies/java.svg" },
            { name: "Kotlin", description: "For developing feature-rich and high-end Android applications.", iconPath: "/assets/technologies/android.svg" },
            { name: "Jetpack Compose", description: "Modern Android UI toolkit for building native Android apps.", iconPath: "/assets/technologies/android.svg" },
            { name: "Android SDK", description: "Software development kit for building Android applications.", iconPath: "/assets/technologies/android.svg" },
          ]
        },
        {
          name: "Development Tools",
          technologies: [
            { name: "Android Studio", description: "Official IDE for Android app development.", iconPath: "/assets/technologies/android.svg" },
            { name: "Gradle", description: "Build automation tool for Android projects.", iconPath: "/assets/technologies/gradle.svg" },
          ]
        },
        {
          name: "Testing & Debugging",
          technologies: [
            { name: "JUnit", description: "Unit testing framework for Android applications.", iconPath: "/assets/technologies/junit.svg" },
            { name: "Espresso", description: "UI testing framework for Android apps.", iconPath: "/assets/technologies/epresso.svg" },
            { name: "Appium", description: "Mobile app testing automation for Android.", iconPath: "/assets/technologies/appium.svg" },
          ]
        },
        mobileWebAITools,
      ]
    },
    { 
      slug: "hire-cross-platform-app-developers", 
      title: "Cross Platform App Developers", 
      category: "Hire Mobile Apps Developers",
      imagePath: "/assets/technologies/react-native.svg",
      seoKeywords: "hire cross-platform developers, cross-platform app development, React Native developers, Flutter developers, Xamarin developers, multi-platform development, cross-platform mobile apps, hybrid app developers, cross-platform programming, unified app development, single codebase apps",
      seoDescription: "Hire expert Cross Platform App Developers from Entalogics. Specialized in React Native, Flutter, and Xamarin. Build apps that work on both iOS and Android with a single codebase.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "React Native", description: "The approach that is best suited for creating genuinely native cross-platform applications with JavaScript and React.", iconPath: "/assets/technologies/react-native.svg" },
            { name: "Flutter", description: "These are used to develop native mobile, web, and desktop applications from a single software development kit.", iconPath: "/assets/technologies/flutter.svg" },
            { name: "Ionic", description: "To develop complex mobile applications that combine aspects of native and web applications using HTML, CSS & JS.", iconPath: "/assets/technologies/ionic.svg" },
            { name: "Xamarin", description: "Microsoft framework for building cross-platform mobile apps with C#.", iconPath: "/assets/technologies/dotnet.svg" },
          ]
        },
        {
          name: "Development Tools",
          technologies: [
            { name: "Visual Studio Code", description: "Code editor with extensions for cross-platform development.", iconPath: "/assets/technologies/web.svg" },
            { name: "Expo", description: "Development platform for React Native applications.", iconPath: "/assets/technologies/expo.svg" },
          ]
        },
        mobileWebAITools,
      ]
    },
    { 
      slug: "hire-flutter-app-developers", 
      title: "Flutter App Developers", 
      category: "Hire Mobile Apps Developers",
      imagePath: "/assets/technologies/flutter.svg",
      seoKeywords: "hire Flutter developers, Flutter app development, Dart developers, Flutter programming, Flutter mobile development, Flutter cross-platform, Flutter UI development, Flutter application development, Flutter framework developers, Google Flutter developers, Flutter development services",
      seoDescription: "Hire expert Flutter App Developers from Entalogics. Specialized in Flutter and Dart for building beautiful, fast cross-platform mobile applications. Experienced Flutter developers ready for your project.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "Flutter", description: "These are used to develop native mobile, web, and desktop applications from a single software development kit.", iconPath: "/assets/technologies/flutter.svg" },
            { name: "Dart", description: "Programming language used with Flutter for building cross-platform applications.", iconPath: "/assets/technologies/dart.svg" },
            { name: "Material Design", description: "Google's design system for Flutter applications.", iconPath: "/assets/technologies/materialdesign.svg" },
          ]
        },
        {
          name: "Development Tools",
          technologies: [
            { name: "Flutter SDK", description: "Software development kit for Flutter app development.", iconPath: "/assets/technologies/flutter.svg" },
            { name: "Android Studio", description: "IDE with Flutter plugin for mobile app development.", iconPath: "/assets/technologies/android.svg" },
          ]
        },
        mobileWebAITools,
      ]
    },
    { 
      slug: "hire-react-native-app-developers", 
      title: "React Native App Developers", 
      category: "Hire Mobile Apps Developers",
      imagePath: "/assets/technologies/react-native.svg",
      seoKeywords: "hire React Native developers, React Native app development, React Native programming, React Native mobile development, React Native cross-platform, React Native application development, React Native framework, React Native developers for hire, React Native development services, JavaScript mobile development",
      seoDescription: "Hire expert React Native App Developers from Entalogics. Specialized in React Native for building native mobile apps with JavaScript. Experienced React Native developers for iOS and Android.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "React Native", description: "The approach that is best suited for creating genuinely native cross-platform applications with JavaScript and React.", iconPath: "/assets/technologies/react-native.svg" },
            { name: "JavaScript", description: "Client-side scripting language for dynamic mobile app behavior.", iconPath: "/assets/technologies/javascript.svg" },
            { name: "TypeScript", description: "Typed superset of JavaScript for building scalable React Native apps.", iconPath: "/assets/technologies/typescript.svg" },
          ]
        },
        {
          name: "Development Tools",
          technologies: [
            { name: "Expo", description: "Development platform and toolchain for React Native applications.", iconPath: "/assets/technologies/expo.svg" },
            { name: "Metro", description: "JavaScript bundler for React Native applications.", iconPath: "/assets/technologies/metro.svg" },
          ]
        },
        mobileWebAITools,
      ]
    },
  ],
  "Hire Microsoft Developers": [
    { 
      slug: "hire-dotnet-developers", 
      title: ".NET Developers", 
      category: "Hire Microsoft Developers",
      imagePath: "/assets/technologies/dotnet.svg",
      seoKeywords: "hire .NET developers, .NET development, C# developers, ASP.NET developers, .NET Core developers, .NET framework development, Microsoft .NET developers, .NET programming, .NET application development, .NET software development, .NET development services, .NET Core programming",
      seoDescription: "Hire expert .NET Developers from Entalogics. Specialized in .NET, .NET Core, C#, and ASP.NET development. Build enterprise-grade applications with our experienced .NET developers.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: ".NET", description: "Framework for building and running Windows applications.", iconPath: "/assets/technologies/dotnet.svg" },
            { name: "C#", description: "A versatile programming language used for developing Windows, web, and mobile apps.", iconPath: "/assets/technologies/c.svg" },
            { name: "ASP.NET", description: "Web framework for building dynamic web applications with .NET.", iconPath: "/assets/technologies/aspnet.svg" },
            { name: ".NET Core", description: "Cross-platform .NET framework for modern application development.", iconPath: "/assets/technologies/dotnetcore.svg" },
          ]
        },
        {
          name: "Backend & Databases",
          technologies: [
            { name: "MS SQL", description: "Microsoft SQL Server database for .NET applications.", iconPath: "/assets/technologies/mssql.svg" },
            { name: "Entity Framework", description: "ORM framework for .NET database operations.", iconPath: "/assets/technologies/dotnet.svg" },
          ]
        },
        codingAITools,
      ]
    },
    { 
      slug: "hire-sharepoint-developers", 
      title: "SharePoint Developers", 
      category: "Hire Microsoft Developers",
      imagePath: "/assets/technologies/sharepoint.svg",
      seoKeywords: "hire SharePoint developers, SharePoint development, SharePoint customization, SharePoint integration, SharePoint solutions, SharePoint framework developers, SharePoint online development, SharePoint on-premises, SharePoint app development, SharePoint consulting, SharePoint development services",
      seoDescription: "Hire expert SharePoint Developers from Entalogics. Specialized in SharePoint customization, integration, and solution development. Build powerful collaboration solutions with our SharePoint experts.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: ".NET", description: "Framework for SharePoint development and customization.", iconPath: "/assets/technologies/dotnet.svg" },
            { name: "C#", description: "Primary language for SharePoint server-side development.", iconPath: "/assets/technologies/c.svg" },
            { name: "JavaScript", description: "Client-side scripting for SharePoint customization.", iconPath: "/assets/technologies/javascript.svg" },
          ]
        },
        {
          name: "Development Tools",
          technologies: [
            { name: "SharePoint Framework", description: "Modern development framework for SharePoint solutions.", iconPath: "/assets/technologies/sharepoint.svg" },
            { name: "PowerShell", description: "Automation and scripting for SharePoint administration.", iconPath: "/assets/technologies/powershell.svg" },
          ]
        },
        codingAITools,
      ]
    },
    { 
      slug: "hire-power-platform-developers", 
      title: "Power Platform Developers", 
      category: "Hire Microsoft Developers",
      imagePath: "/assets/technologies/power-platform.svg",
      seoKeywords: "hire Power Platform developers, Power Platform development, Power Apps developers, Power Automate developers, Power BI developers, Microsoft Power Platform, low-code development, Power Platform solutions, Power Platform consulting, Power Platform integration, Power Platform services",
      seoDescription: "Hire expert Power Platform Developers from Entalogics. Specialized in Power Apps, Power Automate, and Power BI. Build low-code business solutions with our Power Platform experts.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "Power Apps", description: "Low-code platform for building custom business applications.", iconPath: "/assets/technologies/powerapps.svg" },
            { name: "Power Automate", description: "Workflow automation platform for business processes.", iconPath: "/assets/technologies/powerautomate.svg" },
            { name: "Power BI", description: "Business intelligence platform for data visualization and analytics.", iconPath: "/assets/technologies/powerbi.svg" },
          ]
        },
        codingAITools,
      ]
    },
    { 
      slug: "hire-power-bi-developers", 
      title: "Power BI Developers", 
      category: "Hire Microsoft Developers",
      imagePath: "/assets/technologies/power-platform.svg",
      seoKeywords: "hire Power BI developers, Power BI development, Power BI dashboards, Power BI reports, DAX developers, Power BI consulting, Power BI visualization, Power BI data modeling, Power BI integration, Power BI services, business intelligence developers, Power BI analytics",
      seoDescription: "Hire expert Power BI Developers from Entalogics. Specialized in Power BI dashboards, reports, DAX, and data visualization. Transform your data into actionable insights with our Power BI experts.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "Power BI", description: "Business intelligence platform for data visualization and analytics.", iconPath: "/assets/technologies/powerbi.svg" },
            { name: "DAX", description: "Data Analysis Expressions language for Power BI calculations.", iconPath: "/assets/technologies/DAX.svg" },
            { name: "M Query", description: "Query language for Power Query data transformations.", iconPath: "/assets/technologies/power-platform.svg" },
          ]
        },
        codingAITools,
      ]
    },
    { 
      slug: "hire-powerapps-developers", 
      title: "PowerApps Developers", 
      category: "Hire Microsoft Developers",
      imagePath: "/assets/technologies/power-platform.svg",
      seoKeywords: "hire PowerApps developers, PowerApps development, Power Apps development, PowerApps customization, PowerApps solutions, Power Fx developers, low-code app development, PowerApps consulting, PowerApps integration, canvas apps, model-driven apps, PowerApps services",
      seoDescription: "Hire expert PowerApps Developers from Entalogics. Specialized in PowerApps, Power Fx, and low-code app development. Build custom business applications quickly with our PowerApps experts.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "Power Apps", description: "Low-code platform for building custom business applications.", iconPath: "/assets/technologies/powerapps.svg" },
            { name: "Power Fx", description: "Low-code programming language for Power Apps.", iconPath: "/assets/technologies/power-platform.svg" },
          ]
        },
        codingAITools,
      ]
    },
    { 
      slug: "hire-power-automate-developers", 
      title: "Power Automate Developers", 
      category: "Hire Microsoft Developers",
      imagePath: "/assets/technologies/power-platform.svg",
      seoKeywords: "hire Power Automate developers, Power Automate development, workflow automation, Power Automate flows, RPA developers, business process automation, Power Automate consulting, Power Automate integration, automation solutions, Power Automate services, Microsoft Flow developers",
      seoDescription: "Hire expert Power Automate Developers from Entalogics. Specialized in workflow automation, RPA, and business process automation. Automate your workflows with our Power Automate experts.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "Power Automate", description: "Workflow automation platform for business processes.", iconPath: "/assets/technologies/powerautomate.svg" },
            { name: "Power Automate Desktop", description: "RPA solution for desktop automation workflows.", iconPath: "/assets/technologies/power-platform.svg" },
          ]
        },
        codingAITools,
      ]
    },
  ],
  "Hire Web Developers": [
    { 
      slug: "hire-web-developers", 
      title: "Web Developers", 
      category: "Hire Web Developers",
      imagePath: "/assets/technologies/React.svg",
      seoKeywords: "hire web developers, web development, frontend developers, backend developers, full-stack developers, web application development, website development, web programming, web development services, responsive web development, modern web development, web developers for hire",
      seoDescription: "Hire expert Web Developers from Entalogics. Specialized in frontend, backend, and full-stack web development. Build modern, responsive web applications with our experienced web developers.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "React", description: "Modern UI library for building interactive web applications.", iconPath: "/assets/technologies/React.svg" },
            { name: "Angular", description: "Enterprise web framework for building scalable applications.", iconPath: "/assets/technologies/angular.svg" },
            { name: "Vue.js", description: "Progressive framework for building user interfaces.", iconPath: "/assets/technologies/vue.svg" },
            { name: "Node.js", description: "JavaScript runtime for building server-side web applications.", iconPath: "/assets/technologies/node.svg" },
            { name: "Python", description: "Versatile programming language for web development and backend services.", iconPath: "/assets/technologies/python.svg" },
            { name: "Java", description: "Enterprise-grade platform for building robust web applications.", iconPath: "/assets/technologies/java.svg" },
            { name: "TypeScript", description: "Typed JavaScript for building maintainable web applications.", iconPath: "/assets/technologies/typescript.svg" },
            { name: "HTML5", description: "Markup language for structuring and displaying web content.", iconPath: "/assets/technologies/html5.svg" },
            { name: "JavaScript", description: "Client-side scripting language for dynamic website behavior.", iconPath: "/assets/technologies/javascript.svg" },
          ]
        },
        {
          name: "Frontend Technology",
          technologies: [
            { name: "Next.js", description: "React framework for production-ready web applications.", iconPath: "/assets/technologies/nextjs.svg" },
            { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development.", iconPath: "/assets/technologies/tailwind.svg" },
            { name: "Sass", description: "CSS preprocessor for enhanced styling capabilities.", iconPath: "/assets/technologies/html5.svg" },
          ]
        },
        {
          name: "Backend & Databases",
          technologies: [
            { name: "Express.js", description: "Web application framework for Node.js backend development.", iconPath: "/assets/technologies/express.svg" },
            { name: "Django", description: "High-level Python web framework for rapid development.", iconPath: "/assets/technologies/django.svg" },
            { name: "PostgreSQL", description: "Advanced open source database for web applications.", iconPath: "/assets/technologies/postgresql.svg" },
            { name: "MongoDB", description: "NoSQL database for flexible web application data storage.", iconPath: "/assets/technologies/mongodb.svg" },
          ]
        },
        {
          name: "Development Tools",
          technologies: [
            { name: "Git", description: "Version control system for web development collaboration.", iconPath: "/assets/technologies/opensource.svg" },
            { name: "Docker", description: "Containerization platform for web application deployment.", iconPath: "/assets/technologies/docker.svg" },
            { name: "Webpack", description: "Module bundler for JavaScript web applications.", iconPath: "/assets/technologies/webpack.svg" },
          ]
        },
        mobileWebAITools,
      ]
    },
    { 
      slug: "hire-java-developers", 
      title: "Java Developers", 
      category: "Hire Web Developers",
      imagePath: "/assets/technologies/java.svg",
      seoKeywords: "hire Java developers, Java development, Java programming, Spring Boot developers, Java application development, enterprise Java developers, Java web development, Java backend development, Java software development, Java development services, Spring Framework developers",
      seoDescription: "Hire expert Java Developers from Entalogics. Specialized in Java, Spring Boot, and enterprise Java development. Build scalable, robust applications with our experienced Java developers.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "Java", description: "Enterprise-grade platform for building robust web and backend applications.", iconPath: "/assets/technologies/java.svg" },
            { name: "Spring Boot", description: "Java framework for building production-ready applications.", iconPath: "/assets/technologies/springbot.svg" },
            { name: "Spring Framework", description: "Comprehensive framework for Java enterprise development.", iconPath: "/assets/technologies/java.svg" },
            { name: "Hibernate", description: "Object-relational mapping framework for Java applications.", iconPath: "/assets/technologies/hibernate.svg" },
          ]
        },
        {
          name: "Backend & Databases",
          technologies: [
            { name: "MySQL", description: "Open source relational database for Java applications.", iconPath: "/assets/technologies/mysql.svg" },
            { name: "PostgreSQL", description: "Advanced database for enterprise Java applications.", iconPath: "/assets/technologies/postgresql.svg" },
            { name: "Oracle", description: "Enterprise database for mission-critical Java applications.", iconPath: "/assets/technologies/oracle.svg" },
          ]
        },
        codingAITools,
      ]
    },
    { 
      slug: "hire-python-developers", 
      title: "Python Developers", 
      category: "Hire Web Developers",
      imagePath: "/assets/technologies/python.svg",
      seoKeywords: "hire Python developers, Python development, Python programming, Django developers, Flask developers, FastAPI developers, Python web development, Python backend development, Python application development, Python development services, Python software developers",
      seoDescription: "Hire expert Python Developers from Entalogics. Specialized in Python, Django, Flask, and FastAPI development. Build powerful web applications and APIs with our experienced Python developers.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "Python", description: "Versatile programming language for web development and backend services.", iconPath: "/assets/technologies/python.svg" },
            { name: "Django", description: "High-level Python web framework for rapid development.", iconPath: "/assets/technologies/django.svg" },
            { name: "Flask", description: "Lightweight Python web framework for building APIs and web apps.", iconPath: "/assets/technologies/flask.svg" },
            { name: "FastAPI", description: "Modern Python framework for building high-performance APIs.", iconPath: "/assets/technologies/FastApi.svg" },
          ]
        },
        {
          name: "Backend & Databases",
          technologies: [
            { name: "PostgreSQL", description: "Advanced database for Python web applications.", iconPath: "/assets/technologies/postgresql.svg" },
            { name: "MongoDB", description: "NoSQL database for Python applications.", iconPath: "/assets/technologies/mongodb.svg" },
            { name: "Redis", description: "In-memory data store for Python caching and sessions.", iconPath: "/assets/technologies/reddis.svg" },
          ]
        },
        mobileWebAITools,
      ]
    },
    { 
      slug: "hire-node-developers", 
      title: "Node Developers", 
      category: "Hire Web Developers",
      imagePath: "/assets/technologies/node.svg",
      seoKeywords: "hire Node.js developers, Node.js development, Node programming, Express.js developers, Nest.js developers, Node.js backend development, Node.js API development, Node.js application development, Node.js development services, JavaScript backend developers, Node.js server development",
      seoDescription: "Hire expert Node.js Developers from Entalogics. Specialized in Node.js, Express.js, and Nest.js development. Build fast, scalable backend services and APIs with our experienced Node.js developers.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "Node.js", description: "JavaScript runtime for building server-side web applications.", iconPath: "/assets/technologies/node.svg" },
            { name: "Express.js", description: "Web application framework for Node.js backend development.", iconPath: "/assets/technologies/express.svg" },
            { name: "Nest.js", description: "Progressive Node.js framework for building efficient server-side applications.", iconPath: "/assets/technologies/node.svg" },
            { name: "TypeScript", description: "Typed JavaScript for Node.js backend development.", iconPath: "/assets/technologies/typescript.svg" },
          ]
        },
        {
          name: "Backend & Databases",
          technologies: [
            { name: "MongoDB", description: "NoSQL database for Node.js applications.", iconPath: "/assets/technologies/mongodb.svg" },
            { name: "PostgreSQL", description: "Relational database for Node.js backend services.", iconPath: "/assets/technologies/postgresql.svg" },
            { name: "Redis", description: "In-memory data store for Node.js caching.", iconPath: "/assets/technologies/reddis.svg" },
          ]
        },
        mobileWebAITools,
      ]
    },
    { 
      slug: "hire-angular-developers", 
      title: "Angular Developers", 
      category: "Hire Web Developers",
      imagePath: "/assets/technologies/angular.svg",
      seoKeywords: "hire Angular developers, Angular development, Angular programming, Angular framework, TypeScript Angular developers, Angular application development, Angular web development, Angular frontend development, Angular development services, Angular UI development, Angular enterprise development",
      seoDescription: "Hire expert Angular Developers from Entalogics. Specialized in Angular, TypeScript, and enterprise frontend development. Build scalable, maintainable web applications with our experienced Angular developers.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "Angular", description: "Enterprise web framework for building scalable applications.", iconPath: "/assets/technologies/angular.svg" },
            { name: "TypeScript", description: "Typed JavaScript for Angular application development.", iconPath: "/assets/technologies/typescript.svg" },
            { name: "RxJS", description: "Reactive programming library for Angular applications.", iconPath: "/assets/technologies/rx.svg" },
          ]
        },
        {
          name: "Frontend Technology",
          technologies: [
            { name: "Angular Material", description: "Material Design components for Angular applications.", iconPath: "/assets/technologies/angular.svg" },
            { name: "Bootstrap", description: "CSS framework for responsive Angular applications.", iconPath: "/assets/technologies/bootstrap.svg" },
          ]
        },
        codingAITools,
      ]
    },
    { 
      slug: "hire-odoo-developers", 
      title: "Odoo Developers", 
      category: "Hire Web Developers",
      imagePath: "/assets/technologies/odoo.svg",
      seoKeywords: "hire Odoo developers, Odoo development, Odoo customization, Odoo ERP development, Odoo module development, Odoo integration, Odoo consulting, Odoo implementation, Odoo development services, Odoo programming, Odoo solutions, Odoo framework developers",
      seoDescription: "Hire expert Odoo Developers from Entalogics. Specialized in Odoo ERP customization, module development, and integration. Build powerful business management solutions with our Odoo experts.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "Python", description: "Primary programming language for Odoo development.", iconPath: "/assets/technologies/python.svg" },
            { name: "JavaScript", description: "Client-side scripting for Odoo customizations.", iconPath: "/assets/technologies/javascript.svg" },
            { name: "XML", description: "Markup language for Odoo views and data structures.", iconPath: "/assets/technologies/xml.svg" },
          ]
        },
        {
          name: "Backend & Databases",
          technologies: [
            { name: "PostgreSQL", description: "Database system used by Odoo for data storage.", iconPath: "/assets/technologies/postgresql.svg" },
          ]
        },
        codingAITools,
      ]
    },
    { 
      slug: "hire-ai-ml-developers", 
      title: "AI/ML Developers", 
      category: "Hire Web Developers",
      imagePath: "/assets/technologies/python.svg",
      seoKeywords: "hire AI developers, hire ML developers, artificial intelligence developers, machine learning developers, AI development, ML development, TensorFlow developers, PyTorch developers, AI application development, machine learning solutions, AI integration, ML model development, AI consulting, deep learning developers",
      seoDescription: "Hire expert AI/ML Developers from Entalogics. Specialized in artificial intelligence, machine learning, TensorFlow, and PyTorch. Build intelligent applications and ML models with our AI/ML experts.",
      customContent: {
        expertiseParagraph1: "AI and machine learning are transforming industries, and our AI/ML Developers are at the forefront of this revolution. We work with TensorFlow, PyTorch, and other cutting-edge ML frameworks to build models that solve real business problems. From natural language processing to computer vision, our developers have experience across the AI spectrum.",
        expertiseParagraph2: "We don't just build models—we build complete AI solutions. Our developers understand data preprocessing, model training, deployment, and monitoring. Whether you need to integrate AI into existing applications or build AI-powered products from scratch, we have the expertise to make it happen. We work with OpenAI APIs, LangChain, and custom models to deliver intelligent solutions."
      },
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "Python", description: "Primary language for AI and machine learning development.", iconPath: "/assets/technologies/python.svg" },
            { name: "TensorFlow", description: "Open-source machine learning framework for AI applications.", iconPath: "/assets/technologies/tensorflow.svg" },
            { name: "PyTorch", description: "Deep learning framework for building AI models.", iconPath: "/assets/technologies/python.svg" },
          ]
        },
        {
          name: "AI Tools",
          technologies: [
            { name: "ChatGPT", description: "OpenAI's conversational AI assistant for AI/ML code generation, model debugging, and technical assistance.", iconPath: "/assets/technologies/chatgpt.svg" },
            { name: "GitHub Copilot", description: "AI-powered code completion for machine learning and data science workflows.", iconPath: "/assets/technologies/githubcopilot.svg" },
            { name: "Claude", description: "Anthropic's AI assistant for code review, model documentation, and complex AI problem-solving.", iconPath: "/assets/technologies/claude.svg" },
            { name: "Google Gemini", description: "Google's multimodal AI model for AI research, model analysis, and technical documentation.", iconPath: "/assets/technologies/gemini.svg" },
            { name: "Cursor", description: "AI-powered code editor for building and training machine learning models.", iconPath: "/assets/technologies/cursor.svg" },
            { name: "OpenAI API", description: "API for integrating GPT models and building AI-powered applications.", iconPath: "/assets/technologies/chatgpt.svg" },
          ]
        },
      ]
    },
  ],
  
  "Hire a Team": [
    { 
      slug: "hire-dedicated-developers", 
      title: "Dedicated Developers", 
      category: "Hire a Team",
      imagePath: "/assets/technologies/node.svg",
      seoKeywords: "hire dedicated developers, dedicated development team, full-time developers, remote developers, dedicated programmers, dedicated software developers, dedicated development resources, offshore developers, dedicated team, development team hiring, dedicated engineers, software development team, dedicated coders, full-stack developers, dedicated tech team",
      seoDescription: "Hire dedicated developers from Entalogics. Get full-time, committed developers who work exclusively on your projects. Expert full-stack developers ready to join your team and deliver results.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "React", description: "Modern UI library for building interactive web applications.", iconPath: "/assets/technologies/React.svg" },
            { name: "Node.js", description: "JavaScript runtime for building server-side applications.", iconPath: "/assets/technologies/node.svg" },
            { name: "Python", description: "Versatile programming language for full-stack development.", iconPath: "/assets/technologies/python.svg" },
            { name: "Java", description: "Enterprise-grade platform for building robust applications.", iconPath: "/assets/technologies/java.svg" },
            { name: ".NET", description: "Framework for building Windows and web applications.", iconPath: "/assets/technologies/dotnet.svg" },
          ]
        },
        {
          name: "Development Tools",
          technologies: [
            { name: "Git", description: "Version control system for development collaboration.", iconPath: "/assets/technologies/git.svg" },
            { name: "Docker", description: "Containerization platform for application deployment.", iconPath: "/assets/technologies/docker.svg" },
            { name: "Jenkins", description: "CI/CD automation for continuous integration and deployment.", iconPath: "/assets/technologies/jenkins-icon.svg" },
          ]
        },
        codingAITools,
      ]
    },
    { 
      slug: "hire-salesforce-developers", 
      title: "Salesforce Developers", 
      category: "Hire a Team",
      imagePath: "/assets/technologies/salesforce.svg",
      seoKeywords: "hire salesforce developers, salesforce development, salesforce customization, apex developers, lightning developers, salesforce consultants, salesforce implementation, salesforce integration, salesforce CRM development, salesforce app development, salesforce platform development, salesforce cloud development, salesforce certified developers, salesforce development services",
      seoDescription: "Hire expert Salesforce Developers from Entalogics. Specialized in Salesforce customization, Apex development, Lightning Web Components, and Salesforce CRM implementation. Certified Salesforce developers ready for your projects.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "Apex", description: "Salesforce's proprietary programming language for backend development.", iconPath: "/assets/technologies/salesforce.svg" },
            { name: "Lightning Web Components", description: "Modern web components framework for Salesforce UI.", iconPath: "/assets/technologies/salesforce.svg" },
            { name: "Visualforce", description: "Markup language for building Salesforce user interfaces.", iconPath: "/assets/technologies/salesforce.svg" },
          ]
        },
        {
          name: "Development Tools",
          technologies: [
            { name: "Salesforce CLI", description: "Command-line interface for Salesforce development.", iconPath: "/assets/technologies/salesforce.svg" },
            { name: "VS Code", description: "Code editor with Salesforce extensions for development.", iconPath: "/assets/technologies/web.svg" },
          ]
        },
        codingAITools,
      ]
    },
    { 
      slug: "hire-open-source-developers", 
      title: "Open Source Developers", 
      category: "Hire a Team",
      imagePath: "/assets/technologies/opensource.svg",
      seoKeywords: "hire open source developers, open source development, open source software developers, open source contributors, open source programming, open source projects, open source technologies, open source community developers, open source code development, open source software engineering, open source application development",
      seoDescription: "Hire experienced Open Source Developers from Entalogics. Expert in open source technologies, frameworks, and tools. Developers who understand open source best practices and contribute to the community.",
      technologyCategories: [
        {
          name: "Languages & Frameworks",
          technologies: [
            { name: "Python", description: "Open-source programming language for versatile development.", iconPath: "/assets/technologies/python.svg" },
            { name: "JavaScript", description: "Open-source scripting language for web development.", iconPath: "/assets/technologies/javascript.svg" },
            { name: "React", description: "Open-source UI library for building web applications.", iconPath: "/assets/technologies/React.svg" },
            { name: "Node.js", description: "Open-source JavaScript runtime for server-side development.", iconPath: "/assets/technologies/node.svg" },
          ]
        },
        {
          name: "Backend & Databases",
          technologies: [
            { name: "PostgreSQL", description: "Advanced open-source database for applications.", iconPath: "/assets/technologies/postgresql.svg" },
            { name: "MySQL", description: "Open-source relational database management system.", iconPath: "/assets/technologies/mysql.svg" },
            { name: "MongoDB", description: "Open-source NoSQL database for modern applications.", iconPath: "/assets/technologies/mongodb.svg" },
          ]
        },
        codingAITools,
      ]
    },
  ],
}

// Flatten all hire developers into a single object for easy lookup
export const hireDevelopersData: Record<string, HireDeveloperItem> = {}
Object.values(hireDevelopersByCategory).forEach(items => {
  items.forEach(item => {
    hireDevelopersData[item.slug] = item
  })
})

// Get all hire developer slugs
export const getAllHireDeveloperSlugs = (): string[] => {
  return Object.keys(hireDevelopersData)
}

// Get hire developer by slug
export const getHireDeveloperBySlug = (slug: string): HireDeveloperItem | undefined => {
  return hireDevelopersData[slug]
}

// Get all categories
export const getHireDeveloperCategories = (): string[] => {
  return Object.keys(hireDevelopersByCategory)
}

