/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['scontent.cdninstagram.com'], // Add this line to allow images from Instagram's CDN
  },
};

export default nextConfig; // Use export default instead of module.exports
