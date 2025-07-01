import { getWordpressArticle, getWordpressArticleSlugs } from "@/lib/apollo/fetch";
import Link from "next/link";

interface Slugs {
  year: string;
  month: string;
  day: string;
  slug: string;
}

export default async function Page({ params }: { params: Promise<Slugs> }) {
  const { year, month, day, slug } = await params;
  // Add zod validation of dates

  // tmp fetch all available posts for generating links
  const available = await getWordpressArticleSlugs();

  // tmp null check on slug
  if (!slug || slug.length === 0) {
    return false;
  }

  // tmp get content of post for rendering
  const content = await getWordpressArticle(slug);

  // Create fallback if !content

  return (
    <main className="">
      Path: {year}/{month}/{day}/{slug}
      <hr />
      <div className="flex flex-col">
        {available?.map((item, index) => (
          <Link key={index} href={`/1/1/1/${item.slug}`} className="hover:text-blue-500">
            {item.title}
          </Link>
        ))}
      </div>
      <hr />
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
    </main>
  );
}
