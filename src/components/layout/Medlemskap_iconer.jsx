import React from 'react'
import Image from 'next/image'

const Medlemskap_iconer = () => {
  return (
<div className='flex flex-col items-center justify-center bg-white gap-10 p-5'>  
  <div className='flex flex-row  gap-15'>
    <div className='rounded-2xl  bg-moss-200'><img className='h-70 w-70' src="wi-fi_logo.png" alt="" /><p className='text-black text-2xl  text-center'>Wi-Fi</p></div>
    <div className='rounded-2xl  bg-moss-600'><img className='h-70 w-70' src="printer_logo.png" alt="" /><p className='text-black text-2xl text-center'>Printer</p></div>
    <div className='rounded-2xl  bg-moss-200'><img className='h-70 w-70' src="telefon-rom_logo.png" alt="" /><p className='text-black text-2xl  text-center'>Telefon-rom</p></div>
    <div className='rounded-2xl  bg-moss-600'><img className='h-70 w-70' src="te_logo.png" alt="" /><p className='text-black text-2xl  text-center'>Keffe/Te</p></div>
  </div>
    <div className='flex flex-row gap-15'>
    <div className='rounded-2xl bg-moss-600'><img className=' h-70 w-70' src="moterom_logo.png" alt="" /><p className='text-black text-2xl  text-center'>Møter-rom</p></div>
    <div className='rounded-2xl bg-moss-200'><img className=' h-70 w-70' src="event_logo.png" alt="" /><p className='text-black text-2xl  text-center'>Event område</p></div>
    <div className='rounded-2xl bg-moss-600'><img className=' h-70 w-70' src="kjokken_logo.png" alt="" /><p className='text-black text-2xl  text-center'>Kjøkken</p></div>
    <div className='rounded-2xl bg-moss-200'><img className=' h-70 w-70' src="nettverk_logo.png" alt="" /><p className='text-black text-2xl  text-center'>Nettverk</p></div> 
    </div>   
  </div>  
  )
}

export default Medlemskap_iconer