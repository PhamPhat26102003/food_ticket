/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // Tên repository GitHub của bạn
  basePath: "/food_ticket",
  assetPrefix: "/food_ticket/",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

module.exports = nextConfig;
