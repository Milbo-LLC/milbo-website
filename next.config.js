/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["milbo-website.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
