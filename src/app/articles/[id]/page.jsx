"use client";

import { useSanity } from "@/components/SanityContext";
import { useParams } from "next/navigation";
import { PortableText } from "@portabletext/react";

const ArticlePage = () => {
  const { articles, loading } = useSanity();
  const { id } = useParams();

  const article = articles.find((a) => a._id === id);

  if (loading)
    return <p className="text-2xl text-center text-moss-100">Vennligst vent</p>;
  if (!article)
    return (
      <p className="text-2xl text-center text-moss-100">Artikle finnes ikke</p>
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
              className=" max-w-200 object-contain rounded-lg shadow-lg"
            />
          </div>
        );
      },
    },

    block: {
      h1: ({ children }) => (
        <h1 className="text-5xl font-extrabold text-moss-100 mb-6 leading-tight">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-4xl font-bold text-moss-100 mb-4">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-3xl font-semibold text-moss-100 mb-3">
          {children}
        </h3>
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
    <div className="container mx-auto p-6 bg-moss-600 text-moss-100 rounded-lg shadow-lg">

      {article.background?.asset?.url && (
        <div
          className="mx-auto h-100 w-200 bg-contain bg-no-repeat bg-center rounded-lg mb-6 shadow-xl"
          style={{ backgroundImage: `url(${article.background.asset.url})` }}
        />
      )}

   
      <h1 className="text-5xl font-extrabold text-center text-moss-100 mb-6 leading-tight">
        {article.title}
      </h1>

      
      <div className="flex justify-center items-center space-x-4 mb-6 text-sm text-moss-200">
        <p>{article.releaseDate}</p>
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
            <div key={index} className="group relative">
              <img
                src={img.asset?.url}
                alt={img.alt || "image"}
                className="w-full h-56 object-cover rounded-xl shadow-md transition-all transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-all rounded-xl" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticlePage;

