export default function sitemap() {
    return [
        {
            url: 'https://domain.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        }
        ,
        {
            url: 'https://domain.com/about',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://domain.com/projects',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        }
    ]
}