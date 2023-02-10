/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  eslint: {
    dirs: ["src"],
  },
  i18n: {
    locales: ["en", "ua"],
    defaultLocale: "en",
    locateDetection: false,
  },
};

module.exports = nextConfig;
