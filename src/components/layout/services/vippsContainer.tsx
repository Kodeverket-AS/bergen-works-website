'use server';

import { VippsCard } from '@/components/ui/cards/vippsCard';
import { InfoCard } from '@/components/ui/InfoCard';
import { getVippsCards } from '@/lib/sanity/fetch';

export async function VippsCardsContainer() {
  const result = await getVippsCards();

  return (
    <div className='w-full grid lg:grid-cols-3 gap-3 md:gap-6'>
      {result.map((item, index) => (
        <VippsCard key={item._id} data={item} index={index} />
      ))}
      <InfoCard
        /* Card */
        cardStyle='odd:bg-moss-400 even:bg-moss-600 even:text-white flex justify-center items-center w-full h-[140px] group cursor-pointer lg:h-[200px] rounded-2xl duration-300 md:hover:scale-105'
        imageSrc='/infoIcon3.png'
        alt='Icon'
        title='Inkubasjon'
        description='Gratis for deltakere'
        /* Card tyle */
        imageStyle={'w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] xl:w-[140px] xl:h-[140px]'}
        textContentStyle={'flex flex-col justify-center p-4 xl:px-8'}
        headerStyle={'h-full text-2xl  font-bold '}
        paragraphStyle={'mt-2 text-sm sm:text-base'}
        arrowStyle={
          'absolute bottom-4 right-4  duration-300  md:group-hover:scale-[1.2]  md:group-hover:-translate-x-1 md:group-hover:translate-y-1 md:group-hover:rotate-45'
        }
        /* Modal */
        modalImageSrc={'/infoIcon3.png'}
        modalImageAlt={'Icon'}
        modalHeader={'Inkubator på Bergen.Works'}
        modalParagraph2={
          'Har du en Gründer i magen? Bergen.Works utvikler et nytt inkubasjonskonsept for de som ønsker å realisere dine drømmer og idéer! Ta turen innom oss for en uformell prat og en kopp kaffe! Bergen.Works er startet av gründere, for gründere; hos oss finner du kompetanse innen ethvert felt! Kom for kontorplass, bli for miljøet.'
        }
        modalLinkText={'Ta kontakt'}
        modalLink={'/#contact-form'}
      />
    </div>
  );
}
