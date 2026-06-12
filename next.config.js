/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/M3KtsyTdSf",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;