/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // module: {
  //   export: {
  //     images: {
  //       domains: ["https://pngimg.com/uploads/google/google_PNG19644.png"],
  //     },
  //   },
  // },
};

module.exports = {
  nextConfig,
  images: {
    domains: ["pngimg.com"],
  },
};
