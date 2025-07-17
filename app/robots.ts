import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/erc', '/bcc', '/event'],
      disallow: [],
    },
    sitemap: 'https://infestbdg.com/sitemap.xml',
  }
}