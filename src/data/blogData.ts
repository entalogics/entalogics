import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  image?: string;
}

export const blogData: { [key: string]: BlogPost } = {
  'ai-development-trends-2025': {
    slug: 'ai-development-trends-2025',
    title: 'Building <span style="background: linear-gradient(135deg, #3B82F6, #8B5CF6, #3B82F6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">AI Development Trends</span> That Will Dominate 2025',
    excerpt: 'Discover the cutting-edge AI technologies and development approaches that are reshaping how we build intelligent applications.',
    content: `
      <h2>The Rise of AI-Native Applications</h2>
      <p>As we move through 2025, AI development is undergoing a fundamental shift. No longer are AI features simply add-ons to existing applications. Instead, we're seeing the emergence of truly AI-native applications built from the ground up with artificial intelligence at their core.</p>
      
      <h3>Key Trends Shaping AI Development</h3>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li style="margin: 0.5rem 0;"><strong>Agent-Based Architectures:</strong> Moving beyond simple API calls to autonomous AI agents that can reason, plan, and execute complex workflows.</li>
        <li style="margin: 0.5rem 0;"><strong>Multimodal AI Integration:</strong> Combining text, image, audio, and video processing in unified AI systems.</li>
        <li style="margin: 0.5rem 0;"><strong>Edge AI Deployment:</strong> Running AI models directly on devices for faster response times and improved privacy.</li>
        <li style="margin: 0.5rem 0;"><strong>Custom Model Fine-tuning:</strong> Tailoring large language models to specific business domains and use cases.</li>
      </ul>
      
      <h3>Development Best Practices</h3>
      <p>Successful AI development requires a thoughtful approach to architecture, data management, and user experience. Teams must consider:</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li style="margin: 0.5rem 0;">Robust error handling for AI model failures</li>
        <li style="margin: 0.5rem 0;">Transparent AI decision-making processes</li>
        <li style="margin: 0.5rem 0;">Scalable infrastructure for model serving</li>
        <li style="margin: 0.5rem 0;">Continuous model monitoring and improvement</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      <p>The future of AI development lies in creating systems that are not just intelligent, but also trustworthy, explainable, and aligned with human values. As developers, our challenge is to build AI applications that enhance human capabilities while maintaining the highest standards of ethics and reliability.</p>
    `,
    author: 'Entalogics Team',
    publishDate: '2025-01-15',
    readTime: '5 min read',
    category: 'AI Development',
    image: '/assets/services/ai-solutions-for-apps-by-entalogics.svg'
  },
  'saas-architecture-best-practices': {
    slug: 'saas-architecture-best-practices',
    title: 'Building <span style="background: linear-gradient(135deg, #3B82F6, #8B5CF6, #3B82F6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Scalable SaaS Architecture</span>: Best Practices for 2025',
    excerpt: 'Learn the essential architectural patterns and strategies for building SaaS applications that can scale from startup to enterprise.',
    content: `
      <h2>Foundation Principles for SaaS Architecture</h2>
      <p>Building a successful SaaS application requires careful consideration of architecture from day one. The decisions you make early on will determine your ability to scale, maintain, and evolve your platform as your user base grows.</p>
      
      <h3>Multi-Tenancy Strategies</h3>
      <p>One of the most critical decisions in SaaS architecture is how to handle multi-tenancy. There are three main approaches:</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li style="margin: 0.5rem 0;">
          <strong>Database-per-tenant:</strong> Highest isolation but higher resource costs
        </li>
        <li style="margin: 0.5rem 0;">
          <strong>Shared database, separate schemas:</strong> Good balance of isolation and efficiency
        </li>
        <li style="margin: 0.5rem 0;">
          <strong>Shared database, shared schema:</strong> Most efficient but requires careful data isolation
        </li>
      </ul>
      
      <h3>Microservices vs Monolith</h3>
      <p>While microservices offer flexibility and scalability, they also introduce complexity. For many SaaS applications, a well-structured monolith with clear boundaries can be the right choice initially, with the option to extract services as needed.</p>
      
      <h3>Essential Infrastructure Components</h3>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li style="margin: 0.5rem 0;">
          Load balancing and auto-scaling
        </li>
        <li style="margin: 0.5rem 0;">
          Database read replicas and caching layers
        </li>
        <li style="margin: 0.5rem 0;">
          Message queues for asynchronous processing
        </li>
        <li style="margin: 0.5rem 0;">
          Monitoring and observability tools
        </li>
        <li style="margin: 0.5rem 0;">
          CI/CD pipelines for reliable deployments
        </li>
      </ul>
      
      <h2>Security and Compliance</h2>
      <p>SaaS applications must be built with security as a first-class concern. This includes implementing proper authentication, authorization, data encryption, and compliance with relevant regulations like GDPR, SOC 2, and industry-specific standards.</p>
    `,
    author: 'Entalogics Team',
    publishDate: '2025-01-10',
    readTime: '7 min read',
    category: 'SaaS Development',
    image: '/assets/services/saas-product-development-services-by-entalogics.svg'
  },
  'mobile-app-performance-optimization': {
    slug: 'mobile-app-performance-optimization',
    title: 'Mobile App <span style="background: linear-gradient(135deg, #3B82F6, #8B5CF6, #3B82F6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Performance Optimization</span>: Techniques That Actually Work',
    excerpt: 'Discover proven techniques for optimizing mobile app performance, from startup time to memory usage and battery efficiency.',
    content: `
      <h2>Why Performance Matters in Mobile Apps</h2>
      <p>In the competitive mobile app market, performance can be the difference between success and failure. Users expect apps to be fast, responsive, and battery-efficient. Poor performance leads to higher uninstall rates and negative reviews.</p>
      
      <h3>Startup Time Optimization</h3>
      <p>First impressions matter. Users expect apps to launch quickly. Here are key strategies:</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li style="margin: 0.5rem 0;">
          <strong>Lazy Loading:</strong> Only load essential components on startup
        </li>
        <li style="margin: 0.5rem 0;">
          <strong>Background Processing:</strong> Move non-critical operations to background threads
        </li>
        <li style="margin: 0.5rem 0;">
          <strong>Asset Optimization:</strong> Compress images and minimize bundle size
        </li>
        <li style="margin: 0.5rem 0;">
          <strong>Cold Start Optimization:</strong> Minimize initialization code
        </li>
      </ul>
      
      <h3>Memory Management</h3>
      <p>Efficient memory usage is crucial for maintaining smooth performance:</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li style="margin: 0.5rem 0;">
          Implement proper object lifecycle management
        </li>
        <li style="margin: 0.5rem 0;">
          Use memory-efficient data structures
        </li>
        <li style="margin: 0.5rem 0;">
          Implement image caching with size limits
        </li>
        <li style="margin: 0.5rem 0;">
          Monitor memory usage in production
        </li>
      </ul>
      
      <h3>Network Optimization</h3>
      <p>Network requests are often the biggest performance bottleneck:</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li style="margin: 0.5rem 0;">
          Implement intelligent caching strategies
        </li>
        <li style="margin: 0.5rem 0;">
          Use compression for API responses
        </li>
        <li style="margin: 0.5rem 0;">
          Batch network requests when possible
        </li>
        <li style="margin: 0.5rem 0;">
          Implement offline-first architecture
        </li>
      </ul>
      
      <h2>Testing and Monitoring</h2>
      <p>Performance optimization is an ongoing process. Implement comprehensive testing on real devices and continuous monitoring in production to identify and resolve performance issues before they impact users.</p>
    `,
    author: 'Entalogics Team',
    publishDate: '2025-01-05',
    readTime: '6 min read',
    category: 'Mobile Development',
    image: '/assets/services/desktop-applications-services-by-entalogics.svg'
  }
};

export const getBlogPosts = (): BlogPost[] => {
  return Object.values(blogData);
};

export const getBlogPost = (slug: string): BlogPost | null => {
  return blogData[slug] || null;
}; 