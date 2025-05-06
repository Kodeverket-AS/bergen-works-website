import { PortableTextWrapper } from "@/components/layout/portableText/wrapper";
import { ArticleImageCard } from "@/components/ui/cards/articleImage";
import { getArticle, getArticles, urlFor } from "@/libs/sanity/fetch";
import Image from "next/image";

// Generate static pages for existing articles
export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug?.current,
  }));
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const article = await getArticle(slug);

  if (!article) {
    return <div>Not found :/</div>;
  }

  return (
    <div className="container mx-auto text-moss-600 p-6 rounded-lg shadow-lg">
      {article.background && (
        <div className="relative mx-auto h-64 w-full bg-contain bg-no-repeat bg-center rounded-lg mb-6">
          <Image
            src={
              article.background
                ? (await urlFor(article.background)).url()
                : "/infoIcon3.png"
            }
            alt="image"
            fill
            className="absolute object-contain"
          />
        </div>
      )}
      <h1 className="text-5xl font-semibold text-center text-moss-200 mb-6 leading-tight">
        {article.title}
      </h1>
      <div className="flex justify-center items-center space-x-4 mb-6 text-sm text-moss-100">
        {article?.releaseDate && (
          <p>{new Date(article.releaseDate).toLocaleDateString()}</p>
        )}
        <span className="font-semibold">|</span>
        <p>Autor: {article.author}</p>
      </div>
      <div className="mt-8 text-text-light text-lg leading-relaxed space-y-6">
        <PortableTextWrapper value={article.articleBody} />
      </div>
      {article.images && (
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
          {article.images.map((image) => (
            <ArticleImageCard key={image._key} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}
