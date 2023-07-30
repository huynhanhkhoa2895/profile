/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'profile.sega-group.com'],
    minimumCacheTTL: 60
  }
}

module.exports = nextConfig
