import type { MetadataRoute } from "next";
import { BLOGS_DATA } from "@/data/blogs";
import { ROOMS_DATA } from "@/data/rooms";

const BASE_URL = "https://www.peninsulagrand.com";

// next.config.ts sets trailingSlash: true, so every URL ends with "/"
const url = (path: string) => `${BASE_URL}${path}/`;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: url("/rooms"), changeFrequency: "monthly", priority: 0.9 },
    { url: url("/banquets"), changeFrequency: "monthly", priority: 0.9 },
    { url: url("/weddings"), changeFrequency: "monthly", priority: 0.9 },
    { url: url("/dining"), changeFrequency: "monthly", priority: 0.8 },
    { url: url("/about"), changeFrequency: "yearly", priority: 0.6 },
    { url: url("/contact"), changeFrequency: "yearly", priority: 0.7 },
    { url: url("/blog"), changeFrequency: "weekly", priority: 0.7 },
  ];

  const roomPages: MetadataRoute.Sitemap = ROOMS_DATA.map((room) => ({
    url: url(`/rooms/${room.slug}`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOGS_DATA.map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...roomPages, ...blogPages];
}
