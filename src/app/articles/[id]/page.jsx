"use client";

import { useSanity } from "@/components/SanityContext";
import { useParams } from "next/navigation";
import { PortableText } from "@portabletext/react";

const ArticlePage = () => {
  const { articles, loading } = useSanity();
  const { id } = useParams();

  const article = articles.find((a) => a._id === id);

  if (loading) return <p>Vennligst vent</p>;
  if (!article) return <p>Artikle finnes ikke</p>;

  return (
    <div className="container mx-auto p-4">
      {article.background?.asset?.url && (
        <div
          className="h-64 bg-cover bg-center mb-4"
          style={{ backgroundImage: `url(${article.background.asset.url})` }}
        />
      )}

      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="text-gray-500 text-sm">
        {article.releaseDate} | Autor: {article.author}
      </p>

      <div className="mt-4">
        <PortableText value={article.articleBody} />
      </div>

      {article.images?.length > 0 && (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {article.images.map((img, index) => (
            <img
              key={index}
              src={img.asset?.url}
              alt={img.alt || "Brak opisu"}
              className="w-full h-40 object-cover rounded-md shadow-md"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticlePage;
