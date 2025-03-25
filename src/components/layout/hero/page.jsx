import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-auto'>
        <div>
            <img
            src="/BW_Bygning.png"
            alt="BergenWorks Lokaler"
            className="rounded-3xl m-3 w-full h-auto md:pr-3 "/>
        </div>
        <div className='m-3 bg-gray-950 text-white rounded-3xl md:flex-row pr-3 w-1/2 max-h-96'>
            <div className='flex flex-col'>
                <div><h1 className='text-5xl p-5'>Bergen.Works</h1></div>
                <div><p className='text-2xl pl-7'>Innovation in the heart of the city</p></div>
                <div><button className='bg-amber-50 rounded-3xl border-2 text-black m-10 p-7'>Ta kontakt</button></div>
            </div>
            <div></div> 
        </div>
    </div>
  )
}

export default Hero