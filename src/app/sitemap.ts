import { MetadataRoute } from 'next';
import { wpFetchURIsServer } from '@/lib/apollo/server/articles/generateURIs';
import { wpFetchEventsServer } from '@/lib/apollo/server/events/events';

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
  const articles = await wpFetchURIsServer();
  const articleURIs: MetadataRoute.Sitemap = articles.uri.map((article) => {
    const dateString = article.modified ?? article.date;
    const date = dateString ? new Date(dateString) : new Date();
    return {
      url: `${baseUrl}/${article.uri}`,
      lastModified: date.toISOString(),
      alternates: {
        languages: {
          no: `${baseUrl}/${article.uri}`,
        },
      },
    };
  });

  // Fetch and proccess available generated wordpress events
  const events = await wpFetchEventsServer();
  const eventsURIs: MetadataRoute.Sitemap = events.events.map((article) => {
    const dateString = article.modified ?? article.date;
    const date = dateString ? new Date(dateString) : new Date();
    return {
      url: `${baseUrl}/event/${article.slug}`,
      lastModified: date.toISOString(),
      alternates: {
        languages: {
          no: `${baseUrl}/event/${article.slug}`,
        },
      },
    };
  });

  return [...articleURIs, ...eventsURIs, ...staticURIs];
}
