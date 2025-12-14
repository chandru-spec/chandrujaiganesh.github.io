/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/chandrujaiganesh", // This MUST match your repository name exactly
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
