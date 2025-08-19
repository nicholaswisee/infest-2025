import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/erc', '/bcc', '/event', '/daftar'],
      disallow: ['/login', 'dashboard'],
    },
    sitemap: 'https://www.infestbdg.com/sitemap.xml',
  }
}