import React from 'react'
import Image from 'next/image'

const Medlemskap_iconer = () => {
  return (
<div className='flex flex-col items-center justify-center bg-gray-200 gap-3 p-5'>  
  <div className='flex flex-row  gap-3'>
    <div className='border-2 border-black rounded-2xl bg-moss-200'><img className=' h-60 w-auto' src="wi-fi_logo.png" alt="" /><p className='text-black text-center'>Wi-Fi</p></div>
    <div className='border-2 border-black rounded-2xl bg-moss-600'><img className=' h-60 w-auto' src="printer_logo.png" alt="" /><p className='text-black text-center'>Printer</p></div>
    <div className='border-2 border-black rounded-2xl bg-moss-200'><img className=' h-60 w-auto' src="telefon-rom_logo.png" alt="" /><p className='text-black text-center'>Telefon-rom</p></div>
    <div className='border-2 border-black rounded-2xl bg-moss-600'><img className=' h-60 w-auto' src="te_logo.png" alt="" /><p className='text-black text-center'>Keffe/Te</p></div>
  </div>
    <div className='flex flex-row gap-3'>
    <div className='border-2 border-black rounded-2xl bg-moss-600'><img className=' h-60 w-auto' src="moterom_logo.png" alt="" /><p className='text-black text-center'>Møter-rom</p></div>
    <div className='border-2 border-black rounded-2xl bg-moss-200'><img className=' h-60 w-auto' src="event_logo.png" alt="" /><p className='text-black text-center'>Event område</p></div>
    <div className='border-2 border-black rounded-2xl bg-moss-600'><img className=' h-60 w-auto' src="kjokken_logo.png" alt="" /><p className='text-black text-center'>Kjøkken</p></div>
    <div className='border-2 border-black rounded-2xl bg-moss-200'><img className=' h-60 w-auto' src="nettverk_logo.png" alt="" /><p className='text-black text-center'>Nettverk</p></div> 
    </div>   
  </div>  
  )
}

export default Medlemskap_iconer