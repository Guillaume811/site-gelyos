import type { NextConfig } from 'next'
import path from 'node:path'

const stylesDir = path.resolve(__dirname, 'src/styles').replace(/\\/g, '/')

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    disableStaticImages: true,
  },
  typescript: {
    tsconfigPath: 'tsconfig.app.json',
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      '@': path.resolve(__dirname, 'src'),
    }
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|avif)$/i,
      issuer: /\.[jt]sx?$/,
      type: 'javascript/auto',
      use: [
        {
          loader: path.resolve(__dirname, 'webpack/loaders/static-image-data-loader.cjs'),
        },
      ],
    })
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
