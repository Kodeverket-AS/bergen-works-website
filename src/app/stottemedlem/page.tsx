import React from 'react';
import Image from 'next/image';
import { ImageTextCard } from '@/components/ui/ImageTextCard';
import { Button } from '@/components/ui/buttons/Button';

export default function SupportMembershipPage() {
  return (
    <main className='flex flex-col gap-3 md:gap-6'>
      <ImageTextCard
        imageSrc='/infoImage.png'
        alt='Fellesskap hos Bergen.Works'
        headerText='Hold kontakten med Bergen.Works – bli støttemedlem'
        headingTag='h1'
        paragraphText='Er din bedrift tidligere medlem hos Bergen.Works? Dere kan fortsatt være en del av fellesskapet gjennom vårt støttemedlemskap – en enkel måte å bevare tilknytningen, være oppdatert og bidra til utviklingen av Bergens næringsliv.'
        smallScreenReverse={false}
        largeScreenReverse={false}
        cardStyle='gap-3 md:gap-6'
        imageContainerStyle='flex items-center justify-center md:w-2/5 lg:w-1/3 h-auto bg-white p-6 rounded-2xl shadow-md'
        textContainerStyle='text-white bg-black md:w-full lg:w-2/3 lg:h-auto'
        headerStyle='text-white text-3xl md:text-5xl xl:text-6xl'
        paragraphStyle='pt-4 lg:py-6'
      />

      <ImageTextCard
        imageSrc='/BW_Logo.png'
        alt='Faglig arrangement hos Bergen.Works'
        headerText='Dette får dere som støttemedlem'
        paragraphText={`Tilgang til eksklusive arrangementer og faglige seminarer • Mulighet til å delta i spennende samarbeidsprosjekter • Økt synlighet gjennom våre kanaler og nettverk • Rabatter på leie av lokaler og tjenester.`}
        smallScreenReverse={false}
        largeScreenReverse={true}
        cardStyle='gap-3 md:gap-6'
        imageContainerStyle='bg-black rounded-2xl md:w-1/2 lg:w-3/6 md:h-auto h-[450] grid place-items-center'
        imageInnerDivStyle='w-full h-full grid place-items-center'
        imageStyle='object-contain size-64'
        textContainerStyle='bg-moss-600 text-white md:w-1/2 lg:w-3/5'
        headerStyle='text-white text-3xl md:text-3xl lg:text-5xl xl:text-6xl py-3'
        paragraphStyle='lg:text-lg py-2 lg:py-4'
        button={
          <Button href='/#contact-form' variant={'secondary'} className={'rounded-md w-full md:w-auto mt-8 lg:text-lg'}>
            Ta kontakt
          </Button>
        }
      />

      <section className='w-full flex flex-col gap-3 md:gap-6'>
        <div className='bg-[#283618] text-[#fffafa] p-8 md:p-10 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6'>
          <div className='flex-1'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-2'>Pris for støttemedlemskap</h2>
            <p className='text-lg opacity-90'>
              Kr <strong>790,-</strong> pr. år · <span className='whitespace-nowrap'>Kr 592,50 eks. mva</span>.
            </p>

            <ul className='mt-6 space-y-2 text-base'>
              {[
                'Eksklusive arrangementer & faglige seminarer.',
                'Mulighet til å delta i samarbeidsprosjekter og nettverk.',
                'Synlighet i våre kanaler.',
                'Rabatter på leie av lokaler og tjenester.',
              ].map((benefit, index) => (
                <li key={index}>• {benefit}</li>
              ))}
            </ul>
          </div>

          <div className='w-full md:w-1/2'>
            <div className='bg-[#606c38] rounded-2xl p-10 shadow-lg flex flex-col items-center text-center min-h-[350px]'>
              <Image src='/nettverk_logo.png' alt='Bergen.Works' width={90} height={90} className='rounded-full mb-4' />
              <h3 className='font-bold text-xl md:text-2xl'>Bergen.Works</h3>
              <p className='text-base md:text-lg opacity-90 mb-6'>Støtt lokal innovasjon og fellesskap</p>
              <p className='italic text-sm md:text-base opacity-90 max-w-md'>
                «Perfekt løsning for bedrifter som ønsker å opprettholde kontakten, holde seg faglig oppdatert – og
                samtidig bidra til utviklingen av Bergens næringsliv.»
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
