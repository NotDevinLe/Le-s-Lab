/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repository name is not the root (e.g., username.github.io/repo-name),
  // uncomment and set the basePath to your repository name:
  // basePath: '/Le-s-Lab',
  // If your repository is at the root (username.github.io), leave basePath commented out
}

module.exports = nextConfig
