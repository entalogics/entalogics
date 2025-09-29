import Head from 'next/head';
import { useRouter } from 'next/router';

interface StructuredDataProps {
  type?: 'website' | 'organization' | 'service' | 'article' | 'person' | 'faq';
  data?: any;
}

const StructuredData = ({ type = 'website', data }: StructuredDataProps) => {
  const router = useRouter();
  const baseUrl = 'https://entalogics.com';

  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Entalogics",
          "url": baseUrl,
          "logo": `${baseUrl}/logo.svg`,
          "description": "Full-stack development agency specializing in custom software, AI applications, and browser development. We turn your idea into a scalable product with clean code and business logic.",
          "foundingDate": "2019",
          "founder": {
            "@type": "Person",
            "name": "Umar Abdullah",
            "jobTitle": "Founder & Lead Developer"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-0123",
            "contactType": "customer service",
            "email": "info@entalogics.com"
          },
          "sameAs": [
            "https://github.com/entalogics",
            "https://linkedin.com/company/entalogics"
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 40.7128,
              "longitude": -74.0060
            },
            "geoRadius": "10000000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Software Development Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "SaaS Development",
                  "description": "Complete SaaS solutions with billing, auth, and multi-tenant architecture"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI-Powered Applications",
                  "description": "Custom AI solutions with LLM integration and agent workflows"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web Development",
                  "description": "Modern web applications using React, Next.js, and TypeScript"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Mobile App Development",
                  "description": "Cross-platform mobile apps with Flutter and React Native"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Chromium Browser Development",
                  "description": "Custom browser solutions for privacy, crypto, and enterprise use"
                }
              }
            ]
          }
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data?.title || "Software Development Service",
          "description": data?.description || "Professional software development services",
          "provider": {
            "@type": "Organization",
            "name": "Entalogics",
            "url": baseUrl
          },
          "serviceType": data?.category || "Software Development",
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": data?.title || "Service Offerings"
          }
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data?.title || "Article Title",
          "description": data?.description || "Article description",
          "author": {
            "@type": "Organization",
            "name": "Entalogics"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Entalogics",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/logo.svg`
            }
          },
          "datePublished": data?.datePublished || new Date().toISOString(),
          "dateModified": data?.dateModified || new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}${router.asPath}`
          }
        };

      case 'person':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Umar Abdullah",
          "jobTitle": "Founder & Lead Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Entalogics"
          },
          "description": "Full-stack developer with 5+ years of experience in AI, SaaS, and custom software development",
          "knowsAbout": [
            "Software Development",
            "AI Development",
            "SaaS Development",
            "Web Development",
            "Mobile App Development",
            "Chromium Browser Development"
          ],
          "alumniOf": "Computer Science",
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Software Developer",
            "occupationLocation": {
              "@type": "Country",
              "name": "United States"
            }
          }
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data?.faqs?.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          })) || []
        };

      default:
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Entalogics",
          "url": baseUrl,
          "description": "Full-stack development agency specializing in custom software, AI applications, and browser development",
          "publisher": {
            "@type": "Organization",
            "name": "Entalogics"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        };
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData(), null, 2)
        }}
      />
    </Head>
  );
};

export default StructuredData;
