import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {

    return [
    {
        url: "https://infestbdg.com",
        lastModified: new Date(),
    },
    {
        url: "https://infestbdg.com/event",
        lastModified: new Date(),
    },
        {
        url: "https://infestbdg.com/erc",
        lastModified: new Date(),
    },
        {
        url: "https://infestbdg.com/bcc",
        lastModified: new Date(),
    },
        {
        url: "https://infestbdg.com/daftar",
        lastModified: new Date(),
    },
]
}