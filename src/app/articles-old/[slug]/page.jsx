import { client } from "@/app/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Quote } from "lucide-react";
import Link from "next/link";
import ShareButtons from './ShareButtons'; 
import { notFound } from 'next/navigation';

export const revalidate = 60;

const articleQuery = `*[_type == "article" && slug.current == $slug][0]{
  _id, 
  title,
  slug,
  articleBody[]{
    ..., 
    _type == "image" => {
      asset -> { url },
      alt
    }
  }, 
  background { asset -> { url } }, 
  releaseDate, 
  author, 
  category, 
  tags, 
  images[]{
    asset -> { url },
    alt
  } 
}`;

const getArticleBySlug = (slug) => client.fetch(articleQuery, { slug });

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "article"]{ "slug": slug.current }`);
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const article = await getArticleBySlug(params.slug);
  return {
    title: article?.title || 'Article Not Found',
  };
}

const customSerializers = {
  types: {
    image: ({ value }) => (
      <div className="w-full flex mb-4">
        {value.asset?.url ? (
          <div className="relative w-full h-[400px]">
            <Image
              src={value.asset.url}
              alt={value.alt || "Image"}
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <p className="text-chocolate-600">Bilde finnes ikke</p>
        )}
      </div>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-5xl text-moss-600 mb-6 leading-tight">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl mt-12 text-moss-500 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl text-moss-400 mb-3">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-lg text-moss-500 mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-6 text-moss-500 italic mb-6 border-chocolate-500 relative">
        <Quote className="absolute -left-5 top-1 text-chocolate-500 w-5 h-5" />
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 text-moss-500 mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 text-moss-500 mb-4">{children}</ol>
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-chocolate-600 underline hover:text-chocolate-500 transition"
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-moss-200 text-moss-600 px-1 py-0.5 rounded text-sm">
        {children}
      </code>
    ),
  },
};

export default async function ArticlePage({ params }) {
  const article = await getArticleBySlug(params.slug);

  if (!article) { notFound()

    
   {/* }return (
        
      {/* <div className="container mx-auto p-6">
        <p className="text-2xl text-center text-moss-100">Artikkel finnes ikke</p>
      </div>); */}
    
  }

  const articleUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/articles/${article.slug.current}`;

  return (
    <div className="container mx-auto text-moss-600 p-6 rounded-lg shadow-lg my-12">
      <div className="mb-6 text-sm text-moss-400">
        <Link href="/" className="hover:text-moss-500">Home</Link> &gt;{" "}
        <Link href="/articles" className="hover:text-moss-500">Artikler</Link> &gt;{" "}
        <span className="text-moss-600">{article.title}</span>
      </div>

      {article.background?.asset?.url && (
        <div className="relative mx-auto h-64 w-full mb-6">
          <Image
            src={article.background.asset.url}
            alt="Background"
            fill
            priority
            className="object-contain rounded-lg"
            sizes="100vw"
          />
        </div>
      )}

      <h1 className="text-5xl font-semibold text-center text-moss-200 mb-6 leading-tight">
        {article.title}
      </h1>

      <div className="flex justify-center items-center space-x-4 mb-6 text-sm text-moss-100">
        <p>{new Date(article.releaseDate).toLocaleDateString()}</p>
        <span className="font-semibold">|</span>
        <p>Autor: {article.author}</p>
      </div>

      <div className="mt-8 text-text-light text-lg leading-relaxed space-y-6">
        <PortableText value={article.articleBody} components={customSerializers}  key={article._id}/>
      </div>

      <ShareButtons title={article.title} url={articleUrl} />

      {article.images?.length > 0 && (
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
          {article.images.map((img, index) => (
            <div key={index} className="group relative h-64 overflow-hidden rounded-xl">
              <Image
                src={img.asset?.url}
                alt={img.alt || "image"}
                fill
                loading="lazy"

                className="object-cover rounded-xl shadow-md group-hover:object-contain group-hover:scale-100 group-hover:shadow-xl transition-all duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
