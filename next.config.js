/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify is now default in Next.js 15, remove this line
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'entalogics.com',
      },
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      // Redirect www to non-www (canonical)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.entalogics.com',
          },
        ],
        destination: 'https://entalogics.com/:path*',
        permanent: true,
      },
      // Redirect HTTP to HTTPS
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://entalogics.com/:path*',
        permanent: true,
      },
      // Redirect old domain if any
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'old-domain.com',
          },
        ],
        destination: 'https://entalogics.com/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      // Critical files (JS/CSS/HTML) – always fetch latest version
      {
        source: '/:all*(js|css|html)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
      // Static assets (images, videos) – long-term caching for performance
      {
        source: '/:all*(png|jpg|jpeg|svg|webp|gif|ico|mp4|webm|ogg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Fonts – long-term caching
      {
        source: '/:all*(woff|woff2|ttf|eot|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Security headers for all pages
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
  // Enable compression
  compress: true,
  // Enable experimental features for better performance
  experimental: {
    scrollRestoration: true,
  },
  // Turbopack configuration (replaces webpack config for Turbopack)
  // Note: turbo config is now handled by Next.js 15 automatically
  // Remove webpack config when using Turbopack, or keep it for fallback
  // webpack: (config, { dev, isServer }) => {
  //   // Optimize bundle size
  //   if (!dev && !isServer) {
  //     config.optimization.splitChunks = {
  //       chunks: 'all',
  //       cacheGroups: {
  //         vendor: {
  //           test: /[\\/]node_modules[\\/]/,
  //           name: 'vendors',
  //           chunks: 'all',
  //         },
  //       },
  //     };
  //   }
  //   return config;
  // },
};

module.exports = nextConfig;