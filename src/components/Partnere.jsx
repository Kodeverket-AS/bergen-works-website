import { partners } from '@/data/dataPartnere';

export function Partnere() {
  return (
    <div className='w-full flex flex-col lg:flex-row  gap-3 md:gap-6 my-8 '>
      <div className='flex shadow-xl w-full rounded-xl '>
        <div className='flex flex-col w-full lg:flex-row'>          
          <h2 className='text-xl font-semibold lg:pt-8 lg:pl-5 md:text-2xl lg:mb-20 lg:text-4xl lg:w-1/3'>Våre partnere</h2>  
                
          <div className='flex flex-wrap justify-between lg:w-2/3'>
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
      
    </div>
  );
}
