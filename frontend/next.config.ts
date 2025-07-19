import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.fallback = {
      fs: false,
    }
    config.output.sourceMapFilename = 'static/chunks/[name].map'
    config.output.globalObject = 'self'
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
}

export default nextConfig
