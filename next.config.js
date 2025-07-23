/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'randomuser.me',
      'cdn.worldvectorlogo.com',
      'static.clutch.co',
      'assets.goodfirms.co',
      'cdn.g2crowd.com',
    ],
  },
}

module.exports = nextConfig 