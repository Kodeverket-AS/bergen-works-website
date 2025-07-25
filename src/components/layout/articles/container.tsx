import { ArticlePreviewCard } from '@/components/ui/cards/articlePreview';
import { WordpressPost } from '@/types/apollo/response.types';

export function ArticlesContainer({ articles }: { articles: WordpressPost[] }) {
  if (!articles || articles.length === 0) return false;
  return (
    <div className='w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      {articles.map((article) => (
        <ArticlePreviewCard key={article.slug} {...article} />
      ))}
    </div>
  );
}
