import Head from 'next/head';

interface PerformanceOptimizerProps {
  preloadImages?: string[];
  criticalCSS?: string;
}

const PerformanceOptimizer = ({ 
  preloadImages = [], 
  criticalCSS 
}: PerformanceOptimizerProps) => {
  return (
    <Head>
      {/* Critical Resource Hints */}
      <link rel="preload" href="/assets/Favicon/Entalogics favicon blue color.svg" as="image" type="image/svg+xml" />
      <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
      
      {/* Preload critical images */}
      {preloadImages.map((image, index) => (
        <link
          key={index}
          rel="preload"
          href={image}
          as="image"
          type="image/webp"
        />
      ))}
      
      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;800&family=Inter:wght@400;600;800;900&family=Poppins:wght@400;600;700;800;900&display=swap"
        as="style"
        onLoad={(e) => {
          const target = e.target as HTMLLinkElement;
          target.onload = null;
          target.rel = 'stylesheet';
        }}
      />
      
      {/* Critical CSS inline */}
      {criticalCSS && (
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      )}
      
      {/* Performance hints */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Resource hints for external services */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//app.cal.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Preconnect to critical origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://app.cal.com" />
      
      {/* Service Worker registration */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('SW registered: ', registration);
                  })
                  .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
              });
            }
          `
        }}
      />
    </Head>
  );
};

export default PerformanceOptimizer;
