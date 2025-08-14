import { type WpPost } from '@/types/apollo/articles.types';
import Image from 'next/image';
import Link from 'next/link';

export function ArticlePreviewCard({ title, excerpt, featuredImage, date, uri }: WpPost) {
  // Format date for readability
  const postDate = new Date(date);
  const postDateFormatted = new Intl.DateTimeFormat('no-NO', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(postDate);

  // Modify excerpt text string to replace [...] with just ...
  const modifiedExcerpt = excerpt?.replace('[&hellip;]', '...') || '';

  return (
    <div className='flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-transform duration-300 ease-in-out  hover:shadow-2xl'>
      <Link href={uri} className='relative block'>
        <Image
          src={featuredImage?.node?.sourceUrl || '/KoV-ov.png'}
          alt={featuredImage?.node?.altText || 'Article image'}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          style={{
            width: '100%',
            height: 'auto',
            aspectRatio: '16/9',
            objectFit: 'cover',
          }}
          width={500}
          height={300}
          className='transition-transform duration-300 group-hover:scale-105'
        />
      </Link>
      <div className='flex flex-1 flex-col mt-6 p-6'>
        <div className='flex-1'>
          <p className='text-sm text-gray-500'>{postDateFormatted}</p>
          <Link href={uri}>
            <h2 className='mt-2 text-xl font-bold text-gray-800 hover:text-moss-600'>{title}</h2>
          </Link>
          {excerpt && (
            <div
              className='prose prose-sm mt-3 text-gray-600'
              dangerouslySetInnerHTML={{ __html: modifiedExcerpt }}
            ></div>
          )}
        </div>
        <Link
          href={uri}
          className='ml-auto mt-4 font-semibold text-moss-600 hover:text-moss-800 transition-transform duration-300 hover:scale-110 inline-block'
        >
          Les mer →
        </Link>
      </div>
    </div>
  );
}
