import { ArticlePreviewCard } from '@/components/ui/cards/articlePreview';
import { WordpressPost } from '@/types/apollo/response.types';

// todo: Add loading state
export function ArticlesContainer({ articles }: { articles: WordpressPost[] }) {
  if (!articles || articles.length === 0)
    return (
      <div>
        <p>Ingen artikler funnet</p>
      </div>
    );

  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {articles.map((article) => (
        <ArticlePreviewCard key={article.slug} {...article} />
      ))}
    </div>
  );
}
