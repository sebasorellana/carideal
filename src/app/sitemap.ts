import type { MetadataRoute } from "next";
import { getAbsoluteUrl } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getAbsoluteUrl("/initial-screen"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: getAbsoluteUrl("/"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
