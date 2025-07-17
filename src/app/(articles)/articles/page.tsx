import { wpFetchPosts } from '@/lib/apollo/fetch/posts';
import { ArticlePreviewCard } from '@/components/ui/cards/articlePreview';

export default async function Page() {
  const articles = await wpFetchPosts({ first: 6 });

  return (
    <main className='flex-1'>
      <h1 className='text-center text-3xl pb-4'>Artikler</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {articles.posts.length > 0 &&
          articles.posts?.map((article) => <ArticlePreviewCard key={article.slug} {...article} />)}
      </div>
    </main>
  );
}
