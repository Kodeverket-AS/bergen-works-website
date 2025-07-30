import { type WpOrganizer } from '@/types/apollo/shared.types';
import Image from 'next/image';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import { IconLink } from '@/components/ui/links/iconLink';

export function EventOrginizerCard(organizer: WpOrganizer) {
  return (
    <div className='flex gap-4 p-2 rounded-md bg-gray-50 hover:bg-gray-100 duration-200'>
      <div className='relative h-full aspect-square shrink rounded-full bg-gray-200'>
        <Image
          src={organizer.featuredImage?.node?.sourceUrl || '/KoV-ov.png'}
          alt={organizer.featuredImage?.node?.altText || 'Alt text missing'}
          fill
          sizes='200vw'
          className='object-cover rounded-full'
        />
      </div>
      <span className='relative flex grow flex-col overflow-hidden'>
        <h3 className='text-xl font-bold'>{organizer.title}</h3>
        {organizer.excerpt && (
          <div className='italic py-1' dangerouslySetInnerHTML={{ __html: organizer.excerpt }}></div>
        )}
        {organizer.phone && <IconLink icon={<CallIcon />} link={organizer.phone} linkType='tel' />}
        {organizer.email && <IconLink icon={<AlternateEmailIcon />} link={organizer.email} linkType='mailto' />}
        {organizer.website && <IconLink link={organizer.website} />}
      </span>
    </div>
  );
}
