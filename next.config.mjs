/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cacheComponents: true,
    globalNotFound: true,
    viewTransition: true,
  }
};

export default nextConfig;
