import {
  getAllWordpressPostDetails,
  getWordpressArticle,
  getWordpressArticleSlugs,
} from "@/lib/apollo/fetch";
import Link from "next/link";

interface Slugs {
  year: string;
  month: string;
  day: string;
  slug: string;
}

export default async function Page({ params }: { params: Promise<Slugs> }) {
  const { year, month, day, slug } = await params;
  // Add zod validation of dates, if typeof dates !== number throw normal 404.

  // tmp fetch all available posts for generating links
  const available = await getAllWordpressPostDetails();

  // tmp null check on slug
  if (!slug || slug.length === 0) {
    return false;
  }

  // tmp get content of post for rendering
  const content = await getWordpressArticle(slug);

  // Create fallback if !content

  return (
    <main className="flex flex-col gap-4 pb-8">
      <div className="flex flex-col">
        {available?.map((item, index) => (
          <Link
            key={index}
            href={`${item.uri}`}
            className="hover:text-blue-500"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <hr />
      <h1>{}</h1>
      <hr />
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
    </main>
  );
}
