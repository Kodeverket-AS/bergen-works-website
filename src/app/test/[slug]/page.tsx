import { getArticle, getArticles } from "@/libs/sanity/fetch";

// Generate static pages for existing articles
export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article._id,
  }));
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const article = await getArticle(slug);
  console.log(article);
  return <div>article</div>;
}
