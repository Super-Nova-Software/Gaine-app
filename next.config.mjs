/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1', // Replace with your actual image host
        port: '8000', // Optional: specify port if needed
        pathname: '/**', // Optional: specify path patterns if needed
      },
    ],
  },
};

export default nextConfig;
