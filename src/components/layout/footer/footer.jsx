import React from 'react'


function Footer() {
  return (
    <div className='bg-white'>
        <div className='w-full flex flex-col p-7 lg:flex lg:justify-center lg:items-center lg:flex-row lg:gap-5'>
        <div className='flex flex-row lg:flex-col'>
            
            <div className='flex flex-row gap-1 lg:flex-col'>
                <div>
                    <img className='rounded-2xl' src="/Footer_Logo.png" alt="Bergen Works Logo" />
                </div>
                <div className='flex felx-row p-10 gap-4 lg:p-5 lg:gap-7 lg:justify-center'>
                    <img src="/FB_icon.png" alt=" small icon" />
                    <img src="/IG_icon.png" alt=" small icon" />
                    <img src="/IN_icon.png" alt=" small icon " />
                </div>
            </div>
        </div>

        <div className='flex flex-col mt-5 ml-3 lg:gap-4 lg:mt-0'>
            <div><p className='text-black'>Vestre Skostredet 2, 5017 Bergen</p></div>

            <div className='flex flex-row '>
                <div><img src="/Mail_icon.png" alt="" /></div>
                <div><p className='text-black'>hello@bergen.works</p></div>
                
            </div>
            <div className='flex flex-row'>
                <div><img src="/Phone_icon.png" alt="" /></div>
                <div><p className='text-black'>485 02 813</p></div>
            </div>
        </div>
    </div>
        <div className='text-black flex justify-center'><p>Utviklet i regnet av Kodeverket Bergen © 2025</p></div>
    </div>
    
  )
}

export default Footer