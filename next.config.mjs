/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    eslint: {
      // Geliştirme sırasında build'i engellemesin
      ignoreDuringBuilds: true
    }
  };
  
  export default nextConfig;