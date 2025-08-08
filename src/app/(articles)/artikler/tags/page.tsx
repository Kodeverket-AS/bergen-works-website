import { wpFetchTags } from '@/lib/apollo/client/fetch/articles/tags';
import Link from 'next/link';

export default async function Page() {
  const result = await wpFetchTags();

  return (
    <main className='flex flex-col gap-4 pb-4'>
      <h1 className='text-center text-2xl'>Liste over alle tilgjengelige tags</h1>
      <div className='flex justify-center'>
        <div className='w-full sm:w-1/2 flex flex-wrap justify-center gap-2'>
          {result.tags.map((tag) => (
            <Link
              key={tag.id}
              href={'/artikler?tags' + tag.slug}
              className='border rounded-md px-2 bg-moss-100 hover:bg-moss-200 duration-300'
            >
              {tag.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
