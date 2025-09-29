import { GetServerSideProps } from 'next';

const ImageSitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://entalogics.com';
  
  // Define all images with SEO data
  const images = [
    {
      loc: `${baseUrl}/assets/og-image.jpg`,
      title: 'Entalogics - Custom Software Development Agency',
      caption: 'Full-stack development agency specializing in SaaS, AI, and custom browser development',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/about.png`,
      title: 'About Entalogics Team',
      caption: 'Meet our expert team of full-stack developers and designers',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/umar.jpg`,
      title: 'Umar Abdullah - Founder & Lead Developer',
      caption: 'Founder and lead developer with 5+ years of experience in software development',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/logo.svg`,
      title: 'Entalogics Logo',
      caption: 'Entalogics company logo and branding',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/assets/Favicon/Entalogics favicon blue color.svg`,
      title: 'Entalogics Favicon - Blue',
      caption: 'Entalogics favicon in blue color',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/assets/services/saas.jpg`,
      title: 'SaaS Development Services',
      caption: 'Complete SaaS solutions with billing, auth, and multi-tenant architecture',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/assets/services/ai.jpg`,
      title: 'AI-Powered Applications Development',
      caption: 'Custom AI solutions with LLM integration and agent workflows',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/assets/services/web-app.jpg`,
      title: 'Web Application Development',
      caption: 'Modern web applications using React, Next.js, and TypeScript',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/assets/services/mobile-app.jpg`,
      title: 'Mobile App Development',
      caption: 'Cross-platform mobile apps with Flutter and React Native',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/assets/services/chromium.jpg`,
      title: 'Chromium Browser Development',
      caption: 'Custom browser solutions for privacy, crypto, and enterprise use',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/assets/services/ui.jpg`,
      title: 'UI/UX Design Services',
      caption: 'User-centered design from wireframes to functional interfaces',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/assets/tech-icons/react.svg`,
      title: 'React Technology Icon',
      caption: 'React JavaScript library for building user interfaces',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/assets/tech-icons/nextjs.svg`,
      title: 'Next.js Technology Icon',
      caption: 'Next.js React framework for production',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/assets/tech-icons/typescript.svg`,
      title: 'TypeScript Technology Icon',
      caption: 'TypeScript programming language',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/assets/tech-icons/nodejs.svg`,
      title: 'Node.js Technology Icon',
      caption: 'Node.js JavaScript runtime',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/assets/tech-icons/python.svg`,
      title: 'Python Technology Icon',
      caption: 'Python programming language',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/assets/tech-icons/flutter.svg`,
      title: 'Flutter Technology Icon',
      caption: 'Flutter UI toolkit for building natively compiled applications',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/assets/tech-icons/docker.svg`,
      title: 'Docker Technology Icon',
      caption: 'Docker containerization platform',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/assets/tech-icons/postgresql.svg`,
      title: 'PostgreSQL Technology Icon',
      caption: 'PostgreSQL open source relational database',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/assets/tech-icons/graphql.svg`,
      title: 'GraphQL Technology Icon',
      caption: 'GraphQL query language for APIs',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/assets/tech-icons/tailwindcss.svg`,
      title: 'Tailwind CSS Technology Icon',
      caption: 'Tailwind CSS utility-first CSS framework',
      license: `${baseUrl}/terms-and-conditions`
    },
    {
      loc: `${baseUrl}/assets/tech-icons/figma.svg`,
      title: 'Figma Technology Icon',
      caption: 'Figma collaborative interface design tool',
      license: `${baseUrl}/terms-and-conditions`
    }
  ];

  // Generate XML sitemap for images
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${images
  .map(
    (image) => `  <url>
    <loc>${baseUrl}</loc>
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
      <image:license>${image.license}</image:license>
    </image:image>
  </url>`
  )
  .join('\n')}
</urlset>`;

  // Set headers
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default ImageSitemap;
