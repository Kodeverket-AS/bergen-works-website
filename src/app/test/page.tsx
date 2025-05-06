import { getArticles } from "@/libs/sanity/fetch";
import Link from "next/link";

export default async function page() {
  const articles = await getArticles();
  console.log(articles.at(0));
  return (
    <div className="flex flex-col gap-2">
      {articles.map((article) => (
        <Link href={`/test/${article._id}`}>{article.title}</Link>
      ))}
    </div>
  );
}
