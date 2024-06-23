/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hsi-sandbox.vercel.app",
      },
    ],
  },
  experimental: {
    reactCompiler: true,
    ppr: true,
  },
};

export default nextConfig;
