/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/personal-site',
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
