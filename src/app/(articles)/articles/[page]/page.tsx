import { wpFetchPosts } from "@/lib/apollo/fetch/posts";
import { ArticlePreviewCard } from "@/components/ui/cards/articlePreview";
import { PaginationContainer } from "@/components/ui/pagination/container";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  // Check if page param is a valid number
  const { page } = await params;
  const pageNumber = Number(page);
  if (isNaN(pageNumber)) return notFound();

  // How many articles should the page display?
  const ARTICLES_PER_PAGE = 10;

  // todo: Create function that uses edges to find max pages
  // todo: Use said function to throw 404 if pageNumber exceeds max pages

  // Function that finds cursor for this page
  const offsetCursor = "YXJyYXljb25uZWN0aW9uOjMxMzM=";

  // Fetch relevant articles for this page
  const articles = await wpFetchPosts({ first: ARTICLES_PER_PAGE, after: offsetCursor });

  return (
    <main className="flex-1">
      <h1>Page {page}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {articles.posts.length > 0 &&
          articles.posts?.map((article) => <ArticlePreviewCard key={article.slug} {...article} />)}
      </div>
      <PaginationContainer current={pageNumber} max={10} rootUrl="/articles/" />
    </main>
  );
}
