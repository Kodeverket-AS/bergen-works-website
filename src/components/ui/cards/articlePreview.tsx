import { getAllWordpressPostDetails } from "@/lib/apollo/fetch";
import Image from "next/image";
import Link from "next/link";

type ArticlePreviewCardProps = NonNullable<Awaited<ReturnType<typeof getAllWordpressPostDetails>>>[number];

export async function ArticlePreviewCard({ title, slug, excerpt, featuredImage, date, tags }: ArticlePreviewCardProps) {
  // Format date for readability per client request
  const postDate = new Date(date);
  const postDateFormatted = new Intl.DateTimeFormat("no-NO", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(postDate);

  return (
    <div className="flex flex-col gap-4 p-2 border-8 border-moss-200">
      <Image
        src={featuredImage.node.sourceUrl}
        alt={featuredImage.node.altText}
        sizes="50vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={500}
        height={300}
      />
      <span className="flex flex-col">
        <Link href={slug} className="text-moss-600 font-medium">
          {title}
        </Link>
        <p className="capitalize text-xs text-gray-400">{postDateFormatted}</p>
      </span>
      <span dangerouslySetInnerHTML={{ __html: excerpt }}></span>
      <span className="flex gap-2 flex-wrap mt-auto">
        {tags.map((tag, index) => (
          <Link key={index} href={"articles/tags/" + encodeURI(tag)} className="text-xs px-1 bg-moss-100 rounded-sm">
            {tag}
          </Link>
        ))}
      </span>
      <Link href={slug} className="ml-auto">
        Les mer »
      </Link>
    </div>
  );
}
