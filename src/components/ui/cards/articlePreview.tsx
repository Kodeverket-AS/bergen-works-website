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
    <div className='flex flex-col gap-4 p-2 border-8 border-moss-200'>
      <Image
        src={featuredImage.node?.sourceUrl ? featuredImage.node?.sourceUrl : 'KoV-ov.png'}
        alt={featuredImage.node?.altText ? featuredImage.node.altText : ''}
        sizes='50vw'
        style={{
          width: '100%',
          height: 'auto',
        }}
        width={500}
        height={300}
      />
      <span className='flex flex-col'>
        <Link href={uri} className='text-moss-600 font-medium'>
          {title}
        </Link>
        <span className='flex justify-between flex-wrap text-xs text-gray-400'>
          <p className='capitalize'>{postDateFormatted}</p>
          <Link href={category ? `/articles?category=${category.slug}` : '/articles'}>
            {category ? category.name : 'ukategorisert'}
          </Link>
        </span>
      </span>
      {excerpt && <span dangerouslySetInnerHTML={{ __html: excerpt }}></span>}
      <span className='flex gap-2 flex-wrap mt-auto'>
        {tags.nodes.map((tag, index) => (
          <Link
            key={index}
            href={'/articles?tag=' + encodeURI(tag.slug)}
            className='text-xs px-1 bg-moss-100 rounded-sm'
          >
            {tag.name}
          </Link>
        ))}
      </span>
      <Link href={uri} className='ml-auto'>
        Les mer »
      </Link>
    </div>
  );
}
