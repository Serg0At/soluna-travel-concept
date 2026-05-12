/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the demo can ship to any host (Vercel, Netlify, even a zip → cPanel).
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
