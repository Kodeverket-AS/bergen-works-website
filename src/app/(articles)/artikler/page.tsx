import { Suspense, use } from 'react';
import ArticlesClientContainer from '@/components/layout/articles/clientContainer';

export default function Page({ searchParams }: { searchParams: Promise<{ tag?: string; category?: string }> }) {
  // Retrieve tags or categories from search parameters
  const { tag = null, category = null } = use(searchParams);

  return (
    <Suspense fallback={<p className='p-4 text-center'>Laster…</p>}>
      <ArticlesClientContainer tag={tag} category={category} />
    </Suspense>
  );
}
