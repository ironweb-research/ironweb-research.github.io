/**
 *  @type {import('next').NextConfig}
 */

const nextConfig = {
    output: 'export',
    distDir: 'dist',
    experimental:{
        optimizePackageImports: ["@chakra-ui/react"],
      },
    images: {
        unoptimized: true
    },
  };
  
  module.exports = nextConfig;
