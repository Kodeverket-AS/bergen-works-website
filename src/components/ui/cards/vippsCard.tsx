'use client';

import { type VippsCard } from '@/types/sanity/sanity.types';
import { InfoCard } from '../InfoCard';

interface VippsCardProps {
  data: VippsCard;
  index: number;
}

export function VippsCard({ data, index }: VippsCardProps) {
  const { title, url, description, details } = data;
  const isEven = index % 2;
  return (
    <InfoCard
      /* data */
      title={title!}
      description={`${details?.price},- / ${details?.unitAmount} ${details?.unitType}`}
      isVippsLink
      modalLink={url}
      modalHeader={title!}
      modalParagraph1={`${details?.price},- / ${details?.unitAmount} ${details?.unitType}`}
      modalParagraph2={description}
      /* Styles */
      imageSrc='/infoIcon2.png'
      alt='Icon'
      modalImageSrc={'/infoIcon2.png'}
      modalImageAlt={'Icon'}
      cardStyle={`${isEven ? 'bg-moss-600 text-light-text' : 'bg-moss-400'} flex justify-center items-center w-full h-[140px] group cursor-pointer lg:h-[200px] rounded-2xl duration-300 md:hover:scale-105`}
      imageStyle={'w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] xl:w-[140px] xl:h-[140px]'}
      textContentStyle={'p-4 xl:px-8'}
      headerStyle={'h-full text-2xl font-bold'}
      paragraphStyle={'mt-2 text-sm sm:text-base'}
      arrowStyle={
        'absolute bottom-4 right-4 duration-300 md:group-hover:scale-[1.2] md:group-hover:-translate-x-1 md:group-hover:translate-y-1 md:group-hover:rotate-45'
      }
    />
  );
}
