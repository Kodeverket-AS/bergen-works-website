"use client";
import React, { useState } from "react";
import { fasiliteterList } from "@/data/dataFasiliteter";

const Fasiliteter = () => {
  const [activeInfo, setActiveInfo] = useState(null);

  const toggleInfo = (id) => {
    setActiveInfo((prev) => (prev === id ? null : id));
  };

  return (
    <div className='w-full flex flex-col lg:flex-row gap-3 md:gap-6 '>
      <div className='flex shadow-xl w-full lg:w-1/3 rounded-xl'>
        <div className='flex lg:mt-auto flex-col pl-4 pr-6'>
          <h3 className='text-xl font-semibold md:text-2xl lg:mb-20 lg:text-4xl p-4'>Fasilitetene</h3>
          <p className='text-lg lg:text-xl lg:mb-4 2xl:text-2xl p-4'>
            Hos Bergen.Works finner du moderne og fleksible fasiliteter – kontorer, møterom og sosiale soner – utformet
            for å inspirere til samarbeid, konsentrasjon og kreativitet.
          </p>
        </div>
      </div>

      <div className='flex flex-wrap gap-5 justify-around bg-white/30 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8 lg:w-2/3'>
        {fasiliteterList.map(({ id, icon, label, info }) => (
          <div
            key={id}
            className='w-1/4 lg:w-1/5 flex flex-col items-center cursor-pointer group relative transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-white/20 hover:backdrop-blur-sm hover:ring-2 hover:ring-moss-500
'
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
};

export default Fasiliteter;
