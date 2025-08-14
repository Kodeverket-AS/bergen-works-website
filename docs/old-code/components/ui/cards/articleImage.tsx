import { urlFor } from '@/lib/sanity/client';
import { Article } from '@/types/sanity/sanity.types';
import Image from 'next/image';

export async function ArticleImageCard({ image }: { image: NonNullable<Article['images']>[number] }) {
  return (
    <div className='group relative h-64 aspect-video overflow-hidden'>
      <Image
        src={image ? (await urlFor(image)).url() : '/'}
        alt='img'
        fill
        className='w-full h-full object-cover rounded-xl shadow-md group-hover:object-contain group-hover:scale-100 group-hover:shadow-xl transition-all duration-300'
      />
      <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300' />
    </div>
  );
}
