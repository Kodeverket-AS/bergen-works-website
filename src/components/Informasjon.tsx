import Image from 'next/image';

export function InformationSection() {
  return (
    <div className='flex flex-col items-center justify-center gap-3 md:gap-6'>
      <div className='co-work lg:max-h-[360px] xl:max-h-[400px] bg-[#1D1D1D] text-light-text lg:bg-transparent rounded-2xl grid lg:grid-cols-3 items-center lg:flex-row h-[780px] w-full lg:h-[450px] xl:h-[500px] gap-3 md:gap-6 '>
        <div className='p-10 select-none md:bg-[#1D1D1D] w-full h-full lg:col-span-1 rounded-2xl'>
          <div className='bg-black relative rounded-lg w-full h-70 xl:h-full '>
            <Image
              src='/officeCircle.png'
              alt='Picture of logo and people in meetingroom'
              fill
              draggable={false}
              className='object-contain rounded-2xl p-4 '
              priority
            />
          </div>
        </div>
        <div className='text-[var(--text-light)] w-full px-10 rounded-2xl lg:col-span-2 h-full lg:bg-[#1D1D1D]'>
          <div className='lg:px-2 3xl:px-10 '>
            <h2 className='font-bold text-[40px] xl:text-[50px] md:mt-1 lg:my-8 xl:mt-10 3xl:mt-12'>Co-work</h2>
            <p className='lg:hidden my-1'>
              Med en beliggenhet i vakre Skostredet har Bergen.Works drevet coworking space siden 2017. Vi ble startet
              av gründere og for gründere.
            </p>
            <p className='hidden lg:block xl:text-lg '>
              Med en beliggenhet i vakre Skostredet har Bergen.Works drevet coworking space siden 2017. Vi ble startet
              av gründere og for gründere.
            </p>
            <p className=' xl:text-lg mt-2 pb-4 md:mb-0 '>
              Coworking space gir deg tilgang til et inspirerende miljø, nye samarbeidspartnere og økt produktivitet.
              Hos Bergen.Works har vi ledige plasser for deg som vil jobbe i et dynamisk og sosialt fellesskap – enten
              du er gründer, investor, freelancer eller en del av en bedrift.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
