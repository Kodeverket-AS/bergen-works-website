import Link from 'next/link';
import { notFound } from 'next/navigation';
import { wpFetchPosts } from '@/lib/apollo/fetch/posts';
import { wpFetchCategories } from '@/lib/apollo/fetch/categories';
import { ArticlesContainer } from '@/components/layout/articles/container';

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  // Get tag meta
  const availableCategories = await wpFetchCategories();
  const categoryMeta = availableCategories.categories.find((el) => el.slug === decodeURI(category));

  // If tag can't be found return 404
  if (!categoryMeta) return notFound();

  // Fetch filtered posts
  const result = await wpFetchPosts({ category: [categoryMeta.id] });

  return (
    <main className='flex flex-col gap-4 pb-4'>
      <h1 className='text-center text-3xl'>
        Alle artikler i <span className='font-bold'>{categoryMeta.name}</span> kategorien
      </h1>
      <Link href='/articles/category' className='text-center text-gray-600 hover:underline duration-300'>
        Gå tilbake til artikkel kategorier
      </Link>
      <ArticlesContainer articles={result.posts} />
    </main>
  );
}
