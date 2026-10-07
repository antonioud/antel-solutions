import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/capabilities", priority: 0.8 },
    { path: "/network", priority: 0.8 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ];
  return routes.map((r) => ({ url: `${site.url}${r.path}`, lastModified: new Date(), changeFrequency: "monthly", priority: r.priority }));
}
