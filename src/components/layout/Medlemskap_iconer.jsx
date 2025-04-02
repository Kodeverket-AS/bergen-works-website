import React from 'react'
import Image from 'next/image'

const Medlemskap_iconer = () => {
  return (
<div className='flex flex-col items-center justify-center bg-gray-200 gap-3 mt-5 mb-5'>  
  <div className='flex flex-row  gap-3'>
    <div className=''><img className='border-2 border-black h-60 w-auto' src="wi-fi_logo.png" alt="" /></div>
    <div className=''><img className='border-2 border-black h-60 w-auto' src="printer_logo.png" alt="" /></div>
    <div className=''><img className='border-2 border-black h-60 w-auto' src="telefon-rom_logo.png" alt="" /></div>
    <div className=''><img className='border-2 border-black h-60 w-auto' src="te_logo.png" alt="" /></div>
  </div>
    <div className='flex flex-row gap-3'>
    <div className=''><img className='border-2 border-black h-60 w-auto' src="moterom_logo.png" alt="" /></div>
    <div className=''><img className='border-2 border-black h-60 w-auto' src="event_logo.png" alt="" /></div>
    <div className=''><img className='border-2 border-black h-60 w-auto' src="kjokken_logo.png" alt="" /></div>
    <div className=''><img className='border-2 border-black h-60 w-auto' src="nettverk_logo.png" alt="" /></div> 
    </div>   
  </div>  
  )
}

export default Medlemskap_iconer