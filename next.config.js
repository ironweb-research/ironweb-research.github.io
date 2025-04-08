/**
 *  @type {import('next').NextConfig}
 */

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'], // Add MDX and other extensions
};

module.exports = withMDX(nextConfig);