/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'scontent.cdninstagram.com',
      'instagram.fxxx1-1.fna.fbcdn.net',  // Example: add specific Instagram CDN domains
      'scontent.xx.fbcdn.net',            // Add this if the images are served from this domain
      'cdninstagram.com',                 // Generic domain if Instagram changes their CDN
      'fbcdn.net',                        // Another possible domain for Facebook/Instagram images
    ],
  },
};

export default nextConfig;
