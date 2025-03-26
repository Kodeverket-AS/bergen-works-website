import React from 'react'

const Hero = () => {
  return (
    <div className='p-3 flex items-center justify-center'>
      <div className='flex flex-col w-full justify-center md:flex-row gap-3 md:gap-6 lg:gap-12'>

         <div className='overflow-hidden rounded-3xl h-60 md:h-80 lg:h-96'>
              <img className="w-full h-full object-cover object-center rounded-3xl lg:w-auto" src="/BW_Bygning.png" alt="BergenWorks Lokaler" />
          </div>

          <div className='bg-gray-950 text-white rounded-3xl pt-3 md:pl-3 md:pt-0 '>
             <div className='flex flex-col'>
                  <div><h1 className='text-4xl pt-4 pl-4'>Bergen.Works</h1></div>
                  <div><p className='text-2xl p-7'>Innovation in the heart of the city</p></div>
                  <div><button className='bg-amber-50 rounded-3xl border-2 text-black m-10 p-5'>Ta kontakt</button></div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Hero