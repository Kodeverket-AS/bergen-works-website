import { type WpTag } from '@/types/apollo/shared.types';
import Link from 'next/link';

export function ArticleTag(tag: WpTag) {
  return (
    <Link href={'/artikler?tag=' + tag.slug} className='px-2 rounded-md bg-moss-100 hover:bg-moss-200 duration-200'>
      {tag.name.startsWith('#') ? tag.name : '#' + tag.name}
    </Link>
  );
}
