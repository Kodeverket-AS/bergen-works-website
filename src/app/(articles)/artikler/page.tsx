'use client';

import { type WordpressPost, type PageInfo, type WordpressPostsResult } from '@/types/apollo/response.types';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArticlesContainer } from '@/components/layout/articles/container';
import RotateRightIcon from '@mui/icons-material/RotateRight';

export default function Page() {
  // Retrieve tags or categories from search parameters
  const searchParams = useSearchParams();
  const filterTag = searchParams.get('tag') || '';
  const filterCategory = searchParams.get('category') || '';

  // Store data
  const [articles, setArticles] = useState<WordpressPost[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [articlePerPage] = useState(9);

  async function loadMore() {
    if (isLoading) return;
    setIsLoading(true);

    const response = await fetch(
      `/api/wordpress?first=${articlePerPage}&after=${pageInfo?.endCursor}&tag=${filterTag}&category=${filterCategory}`
    );
    const data: WordpressPostsResult = await response.json();

    if (data?.posts) setArticles((old) => [...old, ...data.posts]);
    if (data?.pageInfo) setPageInfo(data.pageInfo);

    setIsLoading(false);
  }

  // Handle data on page load
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      const response = await fetch(
        `/api/wordpress?first=${articlePerPage}&tag=${filterTag}&category=${filterCategory}`
      );
      const data: WordpressPostsResult = await response.json();

      if (data?.posts) setArticles(data.posts);
      if (data?.pageInfo) setPageInfo(data.pageInfo);

      setIsLoading(false);
    };

    fetchPosts();
  }, [articlePerPage, filterTag, filterCategory]);

  return (
    <main className='flex-1 flex flex-col gap-4 pb-4'>
      <h1 className='text-center text-3xl'>Artikler fra Bergen Works</h1>
      <span className='flex flex-col'>
        {filterCategory && !isLoading && (
          <p>
            Vi fant <span className='font-bold'>{articles.length}</span> artikkler i kategorien{' '}
            <span className='font-bold'>{filterCategory}</span>
          </p>
        )}
        {filterTag && !isLoading && (
          <p>
            Vi fant <span className='font-bold'>{articles.length}</span> artikkler med tag{' '}
            <span className='font-bold'>{filterTag}</span>
          </p>
        )}
      </span>
      <ArticlesContainer articles={articles} />
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
