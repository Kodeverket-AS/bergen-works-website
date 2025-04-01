import React from 'react';
import Image from 'next/image';

const Fasiliteter = () => {
  return (
      <div className='flex flex-col m-3 p-10 gap-3 lg:flex-row bg-white text-black'> 
        <div className='p-5 shadow-2xl'>
          <h1 className='text-4xl'>Fasiliteter</h1>
          <p className='text-2xl'>Vi bryr oss om din bekvemmelighet og ditt humør</p>
          <p className='text-xl'>Det beste for kundene</p>
        </div>

        <div className='flex flex-col flex-wrap justify-center place-content-center md:flex-row gap-5 bg-white text-black '>
          <div className='w-50 h-auto border-2 border-black rounded-2xl'><img src="wifi_icon.png" alt="" />
          <p className='text-center text-2xl'>Wi-Fi</p>
          </div>
          <div className='w-50 h-auto border-2 border-black rounded-2xl'><img src="printer_icon.png" alt="" />
          <p className='text-center text-2xl'>Printer</p>
          </div>
          <div className='w-50 h-auto border-2 border-black rounded-2xl'><img src="telephonRoon_icon.png" alt="" />
          <p className='text-center text-2xl'>TelephonRoom</p>
          </div>
          <div className='w-50 h-auto border-2 border-black rounded-2xl'><img src="networking_icon.png" alt="" />
          <p className='text-center text-2xl'>Networking</p>
          </div>
          <div className='w-50 h-auto border-2 border-black rounded-2xl'><img src="moterom_icon.png" alt="" />
          <p className='text-center text-2xl'>Møterom</p>
          </div>
          <div className='w-50 h-auto border-2 border-black rounded-2xl'><img src="kjoken_icon.png" alt="" />
          <p className='text-center text-2xl'>Kjøken</p>
          </div>
          <div className='w-50 h-auto border-2 border-black rounded-2xl'><img src="kaffe_tee_icon.png" alt="" />
          <p className='text-center text-2xl'>Kaffe/Te</p>
          </div>
          <div className='w-50 h-auto border-2 border-black rounded-2xl'><img src="event_icon.png" alt="" />
          <p className='text-center text-2xl'>Eventer/Kurs</p>
          </div>
        </div>
      </div>
  )
}

export default Fasiliteter
