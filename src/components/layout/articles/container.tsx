import { type WpPost } from '@/types/apollo/articles.types';
import Link from 'next/link';
import { ArticlePreviewCard } from '@/components/ui/cards/articlePreview';

export function ArticlesContainer({ articles }: { articles: WpPost[] }) {
  if (!articles || articles.length === 0) return false;

  return (
    <div className='flex flex-col items-center gap-4'>
      <Link href='/artikler' className='text-3xl'>
        Nyeste artikler
      </Link>
      <div className='w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {articles.map((article) => (
          <ArticlePreviewCard key={article.slug} {...article} />
        ))}
      </div>
    </div>
  );
}
