"use client";

import { useSanity } from "@/components/SanityContext";
import { useParams } from "next/navigation";
import { PortableText } from "@portabletext/react";

const ArticlePage = () => {
  const { articles, loading } = useSanity();
  const { id } = useParams();

  const article = articles.find((a) => a._id === id);

  if (loading)
    return (
      <p className="text-2xl text-center text-moss-100">Vennligst vent...</p>
    );
  if (!article)
    return (
      <p className="text-2xl text-center text-moss-100">Artikkel finnes ikke</p>
    );

  const customSerializers = {
    types: {
      image: ({ value }) => {
        if (!value.asset?.url) {
          return <p className="text-red-500">Bilde finnes ikke</p>;
        }

        return (
          <div className="w-full mb-4">
            <img
              src={value.asset.url}
              alt={value.alt || "Image"}
              className="object-contain rounded-lg"
            />
          </div>
        );
      },
    },

    block: {
      h1: ({ children }) => (
        <h1 className="text-5xl text-moss-600 mb-6 leading-tight">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-4xl mt-12 text-moss-500 mb-4">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-3xl text-moss-500 mb-3">{children}</h3>
      ),
      normal: ({ children }) => (
        <p className="text-lg text-text-light mb-4">{children}</p>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 pl-4 text-text-light text-lg italic mb-6">
          {children}
        </blockquote>
      ),
    },
  };

  return (
    <div className="container mx-auto text-moss-600 p-6 rounded-lg shadow-lg">
      {article.background?.asset?.url && (
        <div
          className="mx-auto h-64 w-full bg-contain bg-no-repeat bg-center rounded-lg mb-6"
          style={{ backgroundImage: `url(${article.background.asset.url})` }}
        />
      )}

      <h1 className="text-5xl font-extrabold text-center text-moss-200 mb-6 leading-tight">
        {article.title}
      </h1>

      <div className="flex justify-center items-center space-x-4 mb-6 text-sm text-moss-100">
        <p>{new Date(article.releaseDate).toLocaleDateString()}</p>
        <span className="font-semibold">|</span>
        <p>Autor: {article.author}</p>
      </div>

      <div className="mt-8 text-text-light text-lg leading-relaxed space-y-6">
        <PortableText
          value={article.articleBody}
          components={customSerializers}
        />
      </div>

      {article.images?.length > 0 && (
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
          {article.images.map((img, index) => (
            <div key={index} className="group relative overflow-hidden">
              <img
                src={img.asset?.url}
                alt={img.alt || "image"}
                className="w-full h-64 object-cover rounded-xl shadow-md group-hover:object-contain group-hover:scale-100 group-hover:shadow-xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticlePage;
