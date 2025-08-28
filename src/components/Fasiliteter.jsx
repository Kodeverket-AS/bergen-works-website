'use client';

import { useState } from 'react';
import { fasiliteterList } from '@/data/dataFasiliteter';

export function Fasiliteter() {
  const [activeInfo, setActiveInfo] = useState(null);

  const toggleInfo = (id) => {
    setActiveInfo((prev) => (prev === id ? null : id));
  };

  return (
    <div className='w-full flex flex-col lg:flex-row lg:items-center gap-3 md:gap-6 p-6 lg:p-10 rounded-xl shadow-xl border border-gray-100'>
      <div className='flex-1 flex flex-col gap-3 md:gap-6'>
        <h2 className='font-semibold text-2xl md:text-3xl lg:text-4xl'>Fasilitetene</h2>
        <p className='text-lg lg:text-xl lg:mb-4 2xl:text-2x'>
          Hos Bergen.Works finner du moderne og fleksible fasiliteter - kontorer, møterom og sosiale soner - utformet
          for å inspirere til samarbeid, konsentrasjon og kreativitet.
        </p>
      </div>
      <div className='flex-2 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6 p-6 lg:p-10'>
        {fasiliteterList.map(({ id, icon, label, info }) => (
          <div
            key={id}
            className='group relative flex flex-col items-center cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-white/20 hover:backdrop-blur-sm hover:ring-2 hover:ring-moss-500'
            onClick={() => toggleInfo(id)}
          >
            <img src={icon} alt={label} className='hover:scale-105 transition-transform duration-200' />
            <p className='text-center lg:text-xl'>{label}</p>
            <div className='mt-2 text-sm text-center text-gray-600 min-h-[40px] transition-all duration-300'>
              {activeInfo === id ? info : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
