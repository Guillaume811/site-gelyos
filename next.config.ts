import type { NextConfig } from 'next'
import path from 'node:path'

const stylesDir = path.resolve(__dirname, 'src/styles').replace(/\\/g, '/')

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      '@': path.resolve(__dirname, 'src'),
    }
    return config
  },
  sassOptions: {
    additionalData: `
      @use "${stylesDir}/variables" as *;
      @use "${stylesDir}/mixins" as *;
    `,
  },
}

export default nextConfig
