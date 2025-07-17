import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { wpFetchPost } from '@/lib/apollo/fetch/post';
import { wpFetchURIs } from '@/lib/apollo/fetch/generateURIs';
import '@/assets/styles/frontend.min.css';

export const dynamicParams = false;

export async function generateStaticParams() {
  const result = await wpFetchURIs();

  return result.uri.map((item) => ({
    slug: item.uri,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return {
    title: `Bergen Works - ${params.slug}`,
  };
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

  // Check for empty slug, return 404 if missing
  if (!slug || slug.trim().length === 0) return notFound();

  // Generate date from slug
  const postDate = new Date(Number(year), Number(month) - 1, Number(day));
  if (isNaN(postDate.getTime())) return notFound();

  // Fetch content from wordpress site based on slug
  const result = await wpFetchPost(slug.trim());
  if (result.error || !result.post) return notFound();

  // Collect required data from result
  const article = result.post;
  const featuredImage = result.post.featuredImage.node || null;
  // todo - replace placeholder image below

  // Format date for readability per client request
  const postDateFormatted = new Intl.DateTimeFormat('no-NO', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(postDate);

  return (
    <main className='flex flex-col gap-4 pb-8 [&_h1]:text-[50px] [&_h2]:text-[25px] [&_h2]:font-light [&_p]:mb-7'>
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
      <h1 className='self-center max-w-[768px]'>{article.title}</h1>
      <p className='self-center capitalize text-gray-500'>{postDateFormatted}</p>
      {article?.content && (
        <div
          dangerouslySetInnerHTML={{ __html: article.content }}
          className='flex flex-col self-center gap-2 max-w-[768px]'
        />
      )}
      {article?.contentStyles && <style dangerouslySetInnerHTML={{ __html: article.contentStyles }} />}
    </main>
  );
}
