/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["cdn.sanity.io"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
        },
      ],
    },
  };
  
    export default nextConfig;
  