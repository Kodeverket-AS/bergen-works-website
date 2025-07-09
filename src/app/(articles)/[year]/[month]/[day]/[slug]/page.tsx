import { getAllWordpressPostDetails, getWordpressArticle, getWordpressArticleSlugs } from "@/lib/apollo/fetch";
import Link from "next/link";
import "@/assets/styles/frontend.min.css";
import Image from "next/image";

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

  // Generate date from slug
  const postDate = new Date(Number(year), Number(month) - 1, Number(day));
  if (isNaN(postDate.getTime())) {
    throw new Error("Invalid date parameters");
  }
  const postDateFormatted = new Intl.DateTimeFormat("no-NO", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(postDate);

  // tmp get content of post for rendering
  const content = await getWordpressArticle(slug);

  // Create fallback if !content

  return (
    <main className="flex flex-col gap-4 pb-8 [&_h1]:text-[50px] [&_h2]:text-[25px] [&_p]:mb-7">
      {content?.contentStyles && <style dangerouslySetInnerHTML={{ __html: content.contentStyles }} />}
      <p className="capitalize">{postDateFormatted}</p>
      {content?.featuredImage && (
        <Image
          src={content.featuredImage.node.sourceUrl}
          alt={content.featuredImage.node.altText}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
        />
      )}
      <h1>{content?.title}</h1>
      {content?.content && (
        <div dangerouslySetInnerHTML={{ __html: content.content }} className="flex flex-col gap-2" />
      )}
    </main>
  );
}
