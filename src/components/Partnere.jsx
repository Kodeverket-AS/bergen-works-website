import { partners } from '@/data/dataPartnere';

export function Partnere() {
  return (
    <div className='w-full flex flex-col lg:flex-row lg:items-center gap-3 md:gap-6 p-6 lg:p-10 rounded-xl shadow-xl border border-gray-100'>
      <div className='flex flex-col w-full lg:flex-row'>
        <div className='flex-1 flex flex-col justify-center gap-3 md:gap-6'>
          <h2 className='font-semibold text-2xl md:text-3xl lg:text-4xl'>Våre partnere</h2>
          <p className='text-lg lg:text-xl lg:mb-4 2xl:text-2x'>Vi bryr oss om partnerne våre</p>
        </div>
        <div className='flex-2 flex flex-wrap justify-between'>
          {partners.map((partner, index) => (
            <div key={index} className='w-1/3 lg:w-1/4 3xl:w-1/5 flex justify-center  items-center '>
              <a href={partner.url} target='_blank' rel='noopener noreferrer'>
                <img src={partner.logo} alt={partner.logo.split('_')[0]} className='max-w-full rounded-xl h-auto' />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
