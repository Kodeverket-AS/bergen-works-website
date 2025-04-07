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
            .map((block) => {
              if (block._type === "block") {
                return block.children.map((child) => child.text).join(" ");
              } else if (block._type === "image") {
                return `<img src="${block.asset.url}" alt="${block.alt || "Image"}" />`;
              }
              return "";
            })
            .join(" ");

          return (
            <div key={article._id} className="article-card">
              <img
                src={article.background?.asset?.url}
                alt={article.title}
                className="w-100"
              />
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
