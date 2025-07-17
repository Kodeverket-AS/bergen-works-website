import { wpFetchURIs } from '@/lib/apollo/fetch/generateURIs';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base url for processing subsequent paths
  const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.bergen.works';

  // Static pages
  const STATIC_PAGES: string[] = [
    'articles',
    'events',
    'fasiliteter',
    'informasjon',
    'inkubator',
    'kameraovervaking',
    'medlemskap',
    'omoss',
    'personvern',
  ];
  const staticURIs: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: `${baseUrl}/${page}`,
    alternates: {
      languages: {
        no: `${baseUrl}/${page}`,
      },
    },
  }));

  // Fetch and proccess available generated wordpress articles
  // Todo: perhaps we should check isSticky for adding higher priority value?
  const wpResult = await wpFetchURIs();
  const articleURIs: MetadataRoute.Sitemap = wpResult.uri.map((article) => ({
    url: `${baseUrl}/${article.uri}`,
    lastModified: new Date(article.modified),
    alternates: {
      languages: {
        no: `${baseUrl}/${article.uri}`,
      },
    },
  }));

  return [...articleURIs, ...staticURIs];
}
