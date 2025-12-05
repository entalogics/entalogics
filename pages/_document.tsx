import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  // Build timestamp to help with cache invalidation
  const buildVersion = process.env.NEXT_PUBLIC_BUILD_ID || Date.now().toString();
  
  return (
    <Html lang="en">
      <Head>
        {/* Sora Google Fonts - removed for next/font migration */}
        <link rel="icon" type="image/svg+xml" href="/assets/Favicon/Entalogics favicon blue color.svg" />
        <meta name="build-version" content={buildVersion} />
        
        {/* Global SEO - Allow all search engines to index */}
        {/* Default: index, follow - Individual pages can override if needed */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="yandex" content="index, follow" />
        <meta name="slurp" content="index, follow" />
        
        {/* Language and Geo */}
        <meta httpEquiv="content-language" content="en" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="Worldwide" />
        <meta name="geo.placename" content="Global" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
              Cal("init", "30min", {origin:"https://app.cal.com"});
              Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
            `,
          }}
        />
      </body>
    </Html>
  );
} 