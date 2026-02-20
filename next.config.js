/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.wallpapersden.com',
        port: '',
        pathname: '/image/**',
      },
    ],
  }
};

module.exports = nextConfig;