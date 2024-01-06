export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: '/',
            disallow: '/adim',
        },
        sitemap: 'https://domain.com'
    }
}