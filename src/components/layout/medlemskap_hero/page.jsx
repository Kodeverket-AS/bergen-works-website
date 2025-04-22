import React from 'react'


const Hero = () => {
  return (
    <div className=''>
      <div className='flex flex-col m-3 p-5 gap-3 w-full md:flex-row'>

         <div className='overflow-hidden h-60 md:h-80 lg:h-96 '>
              <img className="rounded-3xl" src="/BW_bygning.png" alt="BergenWorks Lokaler" />
          </div>

          <div className='rounded-3xl p-5 bg-gray-950 text-white md:max-w-1/2'>
             <div className='flex flex-col gap-5'>
                  <div><h1 className='text-4xl font-bold'>Medlemskap</h1></div>
                  <div><p className='text-xl'>Alle våre medlemskap er skreddersøm, tilpasset akkurat dine behov. Vi tilbyr både faste plasser på fulltid, åpne plasser i kontorlandskap, samt vennskap. Det siste innebærer at du har plass hos oss en dag i uken, og kombineres veldig fint med hjemmekontor. Vi har også virtuelle løsninger som møterom, seminarer og arbeidsrelaterte sosiale plattformer. Som medlem av Bergen.Works har du tilgang til et nettverk av coworkere, kunder, rådgivere og investorer. Medlemmer kan booke alt fra mentoring og møterom, delta på seminarer og workshops, samt andre eventer hos oss og våre samarbeidspartnere.</p></div>
                  <div><button className='mt-5 p-3 rounded-2xl bg-amber-50  text-black '>Ta kontakt</button></div>
              </div>
          </div>
      </div>
     
    </div>
  )
}

export default Hero