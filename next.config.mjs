/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/klagan',
  reactStrictMode: false,
  images: {
    domains: ['i.annihil.us']
  },
  env: {
    MARVEL_PUBLIC_TOKEN: process.env.MARVEL_PUBLIC_TOKEN
  }
};

export default nextConfig;
