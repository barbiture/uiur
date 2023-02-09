/** @type {import('next').NextConfig} */
module.exports = {
    env: {
        TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
        TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN,
        GTM: process.env.GTM
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://api.telegram.org/:path*',
            },
        ]
    },
    i18n: {
        locales: ['uk', 'en'],
        defaultLocale: 'uk',
    },
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
};
