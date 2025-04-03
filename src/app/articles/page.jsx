"use client";
import { useSanity } from "@/components/SanityContext";
import Link from "next/link";

export default function ArticlesPage() {
  const { articles, loading } = useSanity();

  if (loading) return <p>Vennligst vent..</p>;

  return (
    <div>
      <h1>Våre artikler</h1>
      <div className="articles">
        {articles.map((article) => {
        
          const articleText = article.articleBody
            .map((block) => block.children.map((child) => child.text).join(" "))
            .join(" ");

          return (
            <div key={article._id} className="article-card">
              <img src={article.background?.asset?.url} alt={article.title} className="w-2/3" />
              <h2>{article.title}</h2>

              <p>{articleText.substring(0, 100)}...</p>
              <Link href={`/articles/${article._id}`}>Les mer</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
