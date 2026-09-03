import type { MetadataRoute } from "next";
import { getAbsoluteUrl } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getAbsoluteUrl("/initial-screen"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: getAbsoluteUrl("/create-account"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: getAbsoluteUrl("/login"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
