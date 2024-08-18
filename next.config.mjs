/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
    outputFileTracingIgnores: ['canvas'],
    },
};

export default nextConfig;
// module.exports = nextConfig;
