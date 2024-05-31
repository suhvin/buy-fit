import { SITE_DOMAIN } from '@/src/shared/configs/site-domain';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: SITE_DOMAIN,
      lastModified: new Date(),
    },
  ];
}
