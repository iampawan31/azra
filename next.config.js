/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'server',
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
}

module.exports = nextConfig
