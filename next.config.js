/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'randomuser.me' },
      { protocol: 'https', hostname: 'cdn.worldvectorlogo.com' },
      { protocol: 'https', hostname: 'static.clutch.co' },
      { protocol: 'https', hostname: 'assets.goodfirms.co' },
      { protocol: 'https', hostname: 'cdn.g2crowd.com' },
      { protocol: 'https', hostname: 'framerusercontent.com' },
    ],
  },
};

module.exports = nextConfig; 