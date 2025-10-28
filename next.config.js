/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Image optimization and caching
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
    minimumCacheTTL: 0, // disable Next.js image cache
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async redirects() {
    return [
      // Redirect www to non-www
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
      // Redirect old domain
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
    ]
  },

  async headers() {
    return [
      // Next.js Image Optimization API - never cache
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
        ],
      },

      // Next.js static files (with hashes) - safe to cache
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },

      // All other routes - no cache + security headers
      {
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store, must-revalidate' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
        ],
      },
    ]
  },

  compress: true,

  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
