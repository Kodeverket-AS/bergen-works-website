import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { wpFetchURIsServer } from '@/lib/apollo/server/articles/generateURIs';
import { wpFetchPostServer } from '@/lib/apollo/server/articles/post';
import { ArticleTag } from '@/components/ui/tags/articleTag';
import '@/assets/styles/frontend.min.css';

export async function generateStaticParams() {
  const result = await wpFetchURIsServer();

  // Quietly quit on error
  if (result.error) return [];

  return result.uri.map((item) => ({
    slug: item.uri,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: `Bergen Works - ${slug}` };
}

export default async function Page({
  params,
}: {
  params: Promise<{
    year: string;
    month: string;
    day: string;
    slug: string;
  }>;
}) {
  const { year, month, day, slug } = await params;

  // Early route validation to prevent unnecessary WordPress queries, returns 404 page if failed.
  if (!slug || slug.trim().length === 0) return notFound();
  const postDate = new Date(Number(year), Number(month) - 1, Number(day));
  if (isNaN(postDate.getTime())) return notFound();

  // Fetch content from wordpress site based on slug, returns 404 page if not found.
  const result = await wpFetchPostServer(slug.trim());
  if (result.error || !result.post) return notFound();

  // Collect required data from result
  const article = result.post;
  const featuredImage = result.post.featuredImage?.node || null;

  // Format article date for readability
  const dateFormatter = new Intl.DateTimeFormat('no-NO', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <main className='flex flex-col items-center gap-8 pb-8'>
      <Image
        src={featuredImage ? featuredImage.sourceUrl : '/KoV-ov.png'}
        alt={featuredImage ? featuredImage.altText : 'Alt text missing'}
        sizes='100vw'
        style={{
          width: '100%',
          height: 'auto',
        }}
        width={500}
        height={300}
      />
      <div className='flex flex-col items-center gap-8 max-w-3xl'>
        <h1 className='text-5xl text-center'>{article.title}</h1>
        <p className='text-gray-500'>
          Skrevet <span className='capitalize'>{dateFormatter.format(new Date(article.date))}</span>
        </p>
      </div>
      <section className='[&_h1]:text-[50px] [&_h2]:text-[25px] [&_h2]:font-light [&_p]:mb-7'>
        {article?.contentStyles && <style dangerouslySetInnerHTML={{ __html: article.contentStyles }} />}
        {article?.content && (
          <div
            dangerouslySetInnerHTML={{ __html: article.content }}
            className='mx-auto flex flex-col self-center gap-2 max-w-[768px]'
          />
        )}
        <p className='text-center p-4 text-gray-500'>
          Sist oppdatert <span className='capitalize'>{dateFormatter.format(new Date(article.modified))}</span>
        </p>
      </section>
      <div id='articleFooter' className='flex flex-col items-center gap-4'>
        {article.tags.nodes.length > 0 ? (
          <>
            <p>Klikk på en tag for å finne artikler med lignende emner</p>
            <span className='mx-auto w-full max-w-xl flex flex-wrap justify-center gap-2'>
              {article.tags && article.tags.nodes.map((tag) => <ArticleTag key={tag.id} {...tag} />)}
            </span>
            <Link href='/artikler' className='hover:underline'>
              Eller gå tilbake til hovedside for artikler
            </Link>
          </>
        ) : (
          <Link href='/artikler' className='hover:underline'>
            Gå tilbake til hovedside for artikler
          </Link>
        )}
      </div>
    </main>
  );
}
