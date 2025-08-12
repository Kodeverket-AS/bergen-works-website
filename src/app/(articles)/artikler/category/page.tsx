import Link from 'next/link';
import { wpFetchCategoriesServer } from '@/lib/apollo/server/articles/categories';

export default async function Page() {
  const result = await wpFetchCategoriesServer();

  return (
    <main className='flex flex-col gap-4 pb-4'>
      <h1 className='text-center text-2xl'>Liste over alle tilgjengelige kategorier</h1>
      <div className='flex justify-center'>
        <div className='w-full sm:w-1/2 flex flex-wrap justify-center gap-2'>
          {result.categories.map((category) => (
            <Link
              key={category.id}
              href={'/artikler?category=' + category.slug}
              className='border rounded-md px-2 bg-moss-100 hover:bg-moss-200 duration-300'
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
