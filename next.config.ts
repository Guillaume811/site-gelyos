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
      '~': path.resolve(__dirname, 'src'),
      '~components': path.resolve(__dirname, 'src/components'),
      '~layout': path.resolve(__dirname, 'src/app/layout'),
      '~styles': path.resolve(__dirname, 'src/styles'),
      '~assets': path.resolve(__dirname, 'src/assets'),
      '~ressources': path.resolve(__dirname, 'src/ressources'),
      '~animations': path.resolve(__dirname, 'src/animations'),
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
