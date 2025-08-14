'use client';

import { type WpArticlesResult } from '@/types/apollo/articles.types';
import { useEffect, useState } from 'react';
import { ArticlePreviewCard } from '@/components/ui/cards/articlePreview';
import RotateRightIcon from '@mui/icons-material/RotateRight';

export default function ArticlesClientContainer({
  tag = null,
  category = null,
}: {
  tag?: string | null;
  category?: string | null;
}) {
  // Store data
  const [articles, setArticles] = useState<WpArticlesResult['posts']>([]);
  const [pageInfo, setPageInfo] = useState<WpArticlesResult['pageInfo']>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [articlePerPage] = useState(9);

  // Load more posts based on current cursors
  async function loadMore() {
    if (isLoading) return;
    setIsLoading(true);

    const response = await fetch(
      `/api/wordpress/paginate/posts?first=${articlePerPage}&after=${pageInfo?.endCursor}&tag=${tag}&category=${category}`
    );
    const data: WpArticlesResult = await response.json();

    if (data.posts.length) setArticles((old) => [...old, ...data.posts]);
    if (data.pageInfo) setPageInfo(data.pageInfo);

    setIsLoading(false);
  }

  // Handle data on page load
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      const response = await fetch(
        `/api/wordpress/paginate/posts?first=${articlePerPage}&tag=${tag}&category=${category}`
      );
      const data: WpArticlesResult = await response.json();

      if (data.posts.length) setArticles(data.posts);
      if (data.pageInfo) setPageInfo(data.pageInfo);

      setIsLoading(false);
    };

    fetchPosts();
  }, [articlePerPage, tag, category]);

  return (
    <main className='flex-1 flex flex-col gap-4 pb-4'>
      <h1 className='text-center'>Artikler fra Bergen Works</h1>
      <span className='flex flex-col'>
        {category && !isLoading && (
          <p>
            Vi fant <span className='font-bold'>{articles.length}</span> artikkler i kategorien{' '}
            <span className='font-bold'>{category}</span>
          </p>
        )}
        {tag && !isLoading && (
          <p>
            Vi fant <span className='font-bold'>{articles.length}</span> artikkler med tag{' '}
            <span className='font-bold'>{tag}</span>
          </p>
        )}
      </span>
      <div className='w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {articles.map((article) => (
          <ArticlePreviewCard
            heading='h2'
            headingStyle='text-lg md:text-xl lg:text-2xl'
            key={article.slug}
            post={article}
          />
        ))}
      </div>
      {isLoading && (
        <p className='text-center p-4 animate-pulse'>
          <RotateRightIcon className='animate-[spin_4s_ease-in-out_infinite] anim' /> Laster inn innhold...
        </p>
      )}
      {pageInfo?.hasNextPage && (
        <button disabled={!pageInfo?.hasNextPage} onClick={loadMore} className='p-2 bg-moss-200 hover:bg-moss-100'>
          {isLoading ? 'Laster inn' : 'Last inn flere artikler'}
        </button>
      )}
      {!pageInfo?.hasNextPage && articles.length > 6 && (
        <p className='text-center'>Du har kommet til slutten av artikkel framvisning</p>
      )}
    </main>
  );
}
