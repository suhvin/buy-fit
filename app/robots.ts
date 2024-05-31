import { SITEMAP_URL } from '@/src/shared/configs/site-domain';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: SITEMAP_URL,
  };
}
