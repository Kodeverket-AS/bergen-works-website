import { Article, VippsCard } from '@/types/sanity/sanity.types';
import { sanityFetch } from './client';

export async function getArticles() {
  try {
    const QUERY = `*[_type == "article"]`;
    const result: Article[] = await sanityFetch({
      query: QUERY,
      tags: ['article'],
    });
    return result;
  } catch (error) {
    console.error('[getArticles] fetch error:', { error });
    return [];
  }
}

export async function getArticle(slug: string) {
  try {
    if (typeof slug !== 'string') return null;
    const result: Article = await sanityFetch({
      query: `*[_type == "article" && slug.current == "${slug}"][0]`,
      tags: ['all', 'articles'],
    });
    return result;
  } catch (error) {
    console.error('[getArticle] fetch error:', { error });
    return null;
  }
}

export async function getVippsCards() {
  try {
    const result: VippsCard[] = await sanityFetch({
      query: `*[_type == "vippsCard"]`,
      tags: ['vipps', 'sanity'],
    });
    return result;
  } catch (error) {
    console.error('[getVippsCards] fetch error:', { error });
    return [];
  }
}
