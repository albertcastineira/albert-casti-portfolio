import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["es", "en"];
  const localeUrls = {
    es: `${siteUrl}/es`,
    en: `${siteUrl}/en`,
  };

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === "es" ? 1 : 0.9,
    alternates: {
      languages: localeUrls,
    },
  }));
}
