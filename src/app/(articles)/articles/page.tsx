import { wpFetchPosts } from '@/lib/apollo/fetch/posts';
import { ArticlesContainer } from '@/components/layout/articles/container';

export default async function Page() {
  const articles = await wpFetchPosts({ first: 6 });

  return (
    <main className='flex-1'>
      <h1 className='text-center text-3xl pb-4'>Artikler</h1>
      <ArticlesContainer articles={articles.posts} />
    </main>
  );
}
