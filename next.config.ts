import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['bawclothing.fbitsstatic.net'],
  },
  printWidth: 80,
  tabWidth: 4,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}

export default nextConfig
