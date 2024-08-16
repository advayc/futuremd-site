/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['scontent.cdninstagram.com'], // allow images from Instagram's CDN
  },
};

export default nextConfig; 