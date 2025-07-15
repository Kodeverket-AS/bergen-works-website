import Link from "next/link";
import { notFound } from "next/navigation";
import { wpFetchPosts } from "@/lib/apollo/fetch/posts";
import { wpFetchTags } from "@/lib/apollo/fetch/tags";
import { ArticlePreviewCard } from "@/components/ui/cards/articlePreview";

export default async function Page({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;

  // Get tag meta
  const availableTags = await wpFetchTags();
  const tagMeta = availableTags.tags.find((el) => el.slug === decodeURI(tag));

  // If tag can't be found return 404
  if (!tagMeta) return notFound();

  // Fetch filtered posts
  const result = await wpFetchPosts({ tags: [tagMeta.id] });

  return (
    <main className="flex flex-col gap-4 pb-4">
      <h1>
        List of all posts with tag <span className="font-bold">{tagMeta.name}</span>
      </h1>
      <div className="grid py-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {result.posts.length > 0 &&
          result.posts?.map((article) => <ArticlePreviewCard key={article.slug} {...article} />)}
      </div>
      <div className="flex justify-center">
        <Link href="/articles/tags" className="hover:underline duration-300">
          Return to all tags
        </Link>
      </div>
    </main>
  );
}
