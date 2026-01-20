/** @type {import('next').NextConfig} */
const nextConfig = {
  // ===== CORE CONFIGURATION =====
  reactStrictMode: true,
  swcMinify: true,
  
  // ===== IMAGE OPTIMIZATION =====
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // ===== HEADERS & SECURITY =====
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          }
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,PATCH,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ]
      }
    ]
  },
  
  // ===== PERFORMANCE OPTIMIZATION =====
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  
  // ===== COMPRESSION =====
  compress: true,
  
  // ===== ENVIRONMENT VARIABLES =====
  env: {
    SITE_URL: process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000',
    FORMSPREE_ENDPOINT: process.env.FORMSPREE_ENDPOINT || 'https://formspree.io/f/mkooorve',
    NODE_ENV: process.env.NODE_ENV || 'development',
  },
  
  // ===== REWRITES & REDIRECTS =====
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ]
  },
  
  // ===== WEBPACK OPTIMIZATIONS =====
  webpack: (config, { dev, isServer }) => {
    // Optimize moment.js and other large libraries
    config.resolve.alias = {
      ...config.resolve.alias,
      'moment$': 'moment/moment.js',
    }
    
    // Bundle analyzer (optional - enable for analysis)
    if (process.env.ANALYZE === 'true') {
      const withBundleAnalyzer = require('@next/bundle-analyzer')({
        enabled: true,
      })
      return withBundleAnalyzer(config)
    }
    
    return config
  },
  
  // ===== PWA SUPPORT (Optional) =====
  // Uncomment if you want to add PWA support
  // pwa: {
  //   dest: 'public',
  //   disable: process.env.NODE_ENV === 'development',
  //   register: true,
  //   skipWaiting: true,
  // },
  
  // ===== I18N (Optional) =====
  // i18n: {
  //   locales: ['en'],
  //   defaultLocale: 'en',
  // },
  
  // ===== OUTPUT STANDALONE (For Docker) =====
  output: 'standalone',
  
  // ===== TURBOPACK (Development only - optional) =====
  // experimental: {
  //   turbo: {
  //     rules: {
  //       '*.svg': {
  //         loaders: ['@svgr/webpack'],
  //         as: '*.js',
  //       },
  //     },
  //   },
  // },
}

// Conditionally add bundle analyzer in development
if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
  })
  module.exports = withBundleAnalyzer(nextConfig)
} else {
  module.exports = nextConfig
}

