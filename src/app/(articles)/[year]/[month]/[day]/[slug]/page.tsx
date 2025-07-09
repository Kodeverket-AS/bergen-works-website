import {
  getAllWordpressPostDetails,
  getWordpressArticle,
  getWordpressArticleSlugs,
} from "@/lib/apollo/fetch";
import Link from "next/link";
import "@/assets/styles/frontend.min.css";

interface Slugs {
  year: string;
  month: string;
  day: string;
  slug: string;
}

export default async function Page({ params }: { params: Promise<Slugs> }) {
  const { year, month, day, slug } = await params;
  // Add zod validation of dates, if typeof dates !== number throw normal 404.

  // tmp null check on slug
  if (!slug || slug.length === 0) {
    return false;
  }

  // tmp get content of post for rendering
  const content = await getWordpressArticle(slug);

  console.log(content);

  // Create fallback if !content

  return (
    <main className="flex flex-col gap-4 pb-8">
      <h1 className="text-center p-4">{content?.title}</h1>
      {content?.contentStyles && (
        <style dangerouslySetInnerHTML={{ __html: content.contentStyles }} />
      )}
      {content?.content && (
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
      )}
    </main>
  );
}
