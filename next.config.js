/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [{
            source: '/(.*)',
            headers: [{
                key: 'Content-Security-Policy',
                value: "frame-ancestors https://ll-ms-attentions-arabic-explanation-ebon.vercel.app",
            }, ],
        }, ];
    },
};

module.exports = nextConfig;