/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [{
            source: '/(.*)',
            headers: [{
                    key: 'Content-Security-Policy',
                    value: "frame-ancestors https://ll-ms-attentions-arabic-explanation-ebon.vercel.app",
                },
                {
                    key: 'Access-Control-Allow-Origin',
                    value: "https://ll-ms-attentions-arabic-explanation-ebon.vercel.app",
                },
            ],
        }];
    },
};

module.exports = nextConfig;