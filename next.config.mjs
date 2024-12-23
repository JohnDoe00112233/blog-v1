/**
 * @type {import('next').NextConfig}
 */

import withBundleAnalyzer from '@next/bundle-analyzer';

const isStaticExport = 'true';

const nextConfig = {
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ,
  env: {
    BUILD_STATIC_EXPORT: isStaticExport,
  },
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}',
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.cache = false;
    return config;
  },
  ...(isStaticExport === 'true' && {
    output: 'export',
  }),
  images: {
    unoptimized: true, // Vô hiệu hóa Image Optimization API
  },
};


const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default bundleAnalyzer(nextConfig);
