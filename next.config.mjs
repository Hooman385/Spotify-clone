/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["lmvnpnikohoqjylyjjvc.supabase.co"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lmvnpnikohoqjylyjjvc.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
