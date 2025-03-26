import React from 'react'

const Hero = () => {
  return (
    <div className='p-3 flex items-center justify-center lg:h-1/3'>
      <div className='flex flex-col w-full justify-center md:flex-row '>
         <div>
              <img className="rounded-3xl lg:w-auto" src="/BW_Bygning.png" alt="BergenWorks Lokaler" />
          </div>

          <div className='bg-gray-950 text-white rounded-3xl pt-3 md:pl-3 md:pt-0 '>
             <div className='flex flex-col'>
                  <div><h1 className='text-4xl p-5'>Bergen.Works</h1></div>
                  <div><p className='text-1xl p-7'>Innovation in the heart of the city</p></div>
                  <div><button className='bg-amber-50 rounded-3xl border-2 text-black m-10 p-5'>Ta kontakt</button></div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Hero