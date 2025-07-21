import Link from 'next/link';
import { notFound } from 'next/navigation';
import { wpFetchPosts } from '@/lib/apollo/fetch/posts';
import { wpFetchTags } from '@/lib/apollo/fetch/tags';
import { ArticlesContainer } from '@/components/layout/articles/container';

export default async function Page({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;

  // Get tag meta
  const availableTags = await wpFetchTags();
  const tagMeta = availableTags.tags.find((el) => el.slug === decodeURI(tag));

  // If tag can't be found return 404
  if (!tagMeta) return notFound();

  // Fetch filtered posts
  const result = await wpFetchPosts({ tags: tagMeta.slug });

  return (
    <main className='flex flex-col gap-4 pb-4'>
      <h1 className='text-center text-3xl'>
        Alle artikler med <span className='font-bold'>{tagMeta.name}</span> tag
      </h1>
      <Link href='/articles/tags' className='text-center text-gray-600 hover:underline duration-300'>
        Gå tilbake til artikkel tags
      </Link>
      <ArticlesContainer articles={result.posts} />
    </main>
  );
}
