/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**", // allow all paths from Cloudinary
      },
    ],
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || "https://main.d9v2opappg0sb.amplifyapp.com",
  },
  eslint: {
    ignoreDuringBuilds: true, // 👈 Skip ESLint checks in Amplify
  },
};

module.exports = nextConfig;