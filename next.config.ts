/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'backend-url-here', // 👈 ALLOW YOUR BACKEND
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'main-url',     // 👈 ALLOW YOUR MAIN DOMAIN
        pathname: '/**',
      },
    ],
    // Keep responsive widths large enough for cards/hero images.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['main-url'],
    },
  },
};

export default nextConfig;
