/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        outputFileTracingExcludes: {
            '/node_modules/canvas': true,
        },
    outputFileTracingIgnores: ['canvas'],
    },
};

export default nextConfig;
// module.exports = nextConfig;
