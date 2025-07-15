import Link from "next/link";
import { notFound } from "next/navigation";
import { wpFetchPosts } from "@/lib/apollo/fetch/posts";
import { wpFetchCategories } from "@/lib/apollo/fetch/categories";
import { ArticlePreviewCard } from "@/components/ui/cards/articlePreview";

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
    <main className="flex flex-col gap-4 pb-4">
      <h1>
        All posts in category <span className="font-bold">{categoryMeta.name}</span>
      </h1>
      <div className="grid py-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {result.posts.length > 0 &&
          result.posts?.map((article) => <ArticlePreviewCard key={article.slug} {...article} />)}
      </div>
      <div className="flex justify-center">
        <Link href="/articles/category" className="hover:underline duration-300">
          Return to categories
        </Link>
      </div>
    </main>
  );
}
