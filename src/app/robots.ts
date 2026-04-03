import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Replace this placeholder with your actual final live domain (e.g., https://yourdomain.com)
  const baseUrl = "https://valentinispas.vercel.app";

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
