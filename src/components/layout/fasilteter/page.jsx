import React from 'react';

const Fasiliteter = () => {
  const partners = [
    { logo: "wifi_icon.png", url: "" },
    { logo: "printer_icon.png", url: "" },
    { logo: "telephonRoon_icon.png", url: "" },
    { logo: "networking_icon.png", url: "" },
    { logo: "moterom_icon.png", url: "" },
    { logo: "kjoken_icon.png", url: "" },
    { logo: "kaffe_tee_icon.png", url: "" },
    { logo: "event_icon.png", url: "" }
  ];

  return (
    <div className=' flex flex-col gap-3 p-10 m-3 lg:flex-row bg-white text-black'>
      <div className='shadow-2xl rounded-2xl p-3 '>
        <h1 className='text-4xl'>Fasiliteter</h1>
        <p className='text-2xl'>Vi bryr oss om din bekvemmelighet og ditt humør</p>
        <p className='text-xl'>Det beste for kundene</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  shadow-2xl p-3 rounded-2xl w-full max-w-5xl'>
        {partners.map((partner, index) => (
          <div key={index} className='w-full flex justify-center'>
            <a href={partner.url} target="_blank" rel="noopener noreferrer">
              <img src={partner.logo} alt={partner.logo.split('_')[0]} className='w-40 h-auto rounded-2xl border-2 border-black ' />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fasiliteter;
