import { ArticlePreviewCard } from "@/components/ui/cards/articlePreview";
import { getAllWordpressPostDetails } from "@/lib/apollo/fetch";

export default async function Page() {
  const articles = await getAllWordpressPostDetails();

  return (
    <main className="flex-1">
      <h1>Artikler</h1>
      <div className="grid grid-cols-3">
        {articles?.map((article) => <ArticlePreviewCard key={article.slug} {...article} />)}
      </div>
    </main>
  );
}
