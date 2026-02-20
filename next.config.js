/** @type {import('next').NextConfig} */
const nextConfig = {
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
