import React from 'react'

const Hero = () => {
  return (
    <div className="p-3 flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full justify-center gap-6 md:gap-8 lg:gap-12">
  
        {/* Image Container */}
        <div className="overflow-hidden rounded-3xl flex-grow h-60 md:h-80 lg:h-96">
          <img className="w-full h-full object-cover object-center rounded-3xl" src="/BW_Bygning.png" alt="BergenWorks Lokaler" />
        </div>
        
        {/* Content Container */}
        <div className="bg-gray-950 text-white rounded-3xl p-4 md:p-6 flex-shrink-0 md:w-1/3 w-full">
          <h1 className="text-[clamp(2rem, 10vw, 5rem)] font-bold">Bergen.Works</h1>
          <p className="text-xl mb-4">Innovation in the heart of the city</p>
          <button className="bg-amber-50 rounded-3xl border-2 text-black py-3 px-6 w-full sm:w-auto">Ta kontakt</button>
        </div>
        
      </div>
    </div>
  )
}

export default Hero
