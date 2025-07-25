import { WordpressTag } from '@/types/apollo/response.types';
import Link from 'next/link';

export function ArticleTag(tag: WordpressTag) {
  return (
    <Link href={'/artikler?tag=' + tag.slug} className='px-2 rounded-md bg-moss-100 hover:bg-moss-200 duration-200'>
      {tag.name.startsWith('#') ? tag.name : '#' + tag.name}
    </Link>
  );
}
