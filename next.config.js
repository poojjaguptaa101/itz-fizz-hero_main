/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // GSAP ScrollTrigger benefits from non-double invoking in dev mode
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
