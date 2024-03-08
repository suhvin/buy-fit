import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://MY_URL.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}
