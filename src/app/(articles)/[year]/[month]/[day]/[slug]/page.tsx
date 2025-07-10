import Image from "next/image";
import { notFound } from "next/navigation";
import { getWordpressArticle, getWordpressPostsURIs } from "@/lib/apollo/fetch";
import "@/assets/styles/frontend.min.css";

export async function generateStaticParams() {
  const postsURIs = await getWordpressPostsURIs();

  return postsURIs.map((uri) => ({
    slug: uri,
  }))
}

export default async function Page({
  params,
}: {
  params: Promise<{
    year: string;
    month: string;
    day: string;
    slug: string;
  }>;
}) {
  const { year, month, day, slug } = await params;

  // Check for empty slug, return 404 if missing
  if (!slug || slug.trim().length === 0) return notFound();

  // Generate date from slug
  const postDate = new Date(Number(year), Number(month) - 1, Number(day));
  if (isNaN(postDate.getTime())) return notFound();

  // Fetch content from wordpress site based on slug
  const content = await getWordpressArticle(slug.trim());
  if (!content) return notFound();

  // Format date for readability per client request
  const postDateFormatted = new Intl.DateTimeFormat("no-NO", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(postDate);

  return (
    <main className="flex flex-col gap-4 pb-8 [&_h1]:text-[50px] [&_h2]:text-[25px] [&_h2]:font-light [&_p]:mb-7">
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
      <h1 className="self-center max-w-[768px]">{content?.title}</h1>
      {content?.content && (
        <div
          dangerouslySetInnerHTML={{ __html: content.content }}
          className="flex flex-col self-center gap-2 max-w-[768px]"
        />
      )}
    </main>
  );
}
