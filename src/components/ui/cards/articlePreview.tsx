import { type WordpressPost } from '@/types/apollo/response.types';
import Image from 'next/image';
import Link from 'next/link';
export function ArticlePreviewCard({ title, excerpt, featuredImage, date, tags, categories, uri }: WordpressPost) {
  // Format date for readability per client request
  const postDate = new Date(date);
  const postDateFormatted = new Intl.DateTimeFormat('no-NO', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(postDate);
  // Get main category
  const category = categories.nodes.at(0);
  return (
    <div className='m-4 flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-transform duration-300 ease-in-out  hover:shadow-2xl'>
      <Link href={uri} className='relative block'>
        <Image
          src={featuredImage.node?.sourceUrl || '/KoV-ov.png'}
          alt={featuredImage.node?.altText || 'Article image'}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
          width={500}
          height={300}
          className='transition-transform duration-300 group-hover:scale-105'
        />
        {category && (
          <span className='absolute bottom-2 left-4 rounded-full bg-moss-500 px-3 py-1 text-white transition-transform duration-300 hover:scale-110'>
            {category.name}
          </span>
        )}
      </Link>
      <div className='flex flex-1 flex-col mt-6 p-6'>
        <div className='flex-1'>
          <p className='text-sm text-gray-500'>{postDateFormatted}</p>
          <Link href={uri}>
            <h3 className='mt-2 text-xl font-bold text-gray-800 hover:text-moss-600 mt-10'>{title}</h3>
          </Link>
          {excerpt && (
            <div
              className='prose prose-sm mt-3 text-gray-600'
              dangerouslySetInnerHTML={{ __html: excerpt }}
            ></div>
          )}
        </div>
        <div className='mt-6 flex flex-col'>
          <div className='flex flex-wrap gap-2'>
            {tags.nodes.map((tag, index) => (
              <Link
                key={index}
                href={'/artikler?tag=' + encodeURI(tag.slug)}
                className='rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600 hover:bg-gray-200'
              >
                #{tag.name}
              </Link>
            ))}
          </div>
          <Link href={uri} className='ml-auto mt-4 font-semibold text-moss-600 hover:text-moss-800'>
            Les mer →
          </Link>
        </div>
      </div>
    </div>
  );
}