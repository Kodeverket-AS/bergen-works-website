import React from 'react';

const Partnere = () => {
  const partners = [
    { logo: "DnB_Logo.png", url: "https://www.dnb.no" },
    { logo: "simonsen_Logo.png", url: "https://svw.no/" },
    { logo: "Escalon_Logo.png", url: "https://escalon.services/" },
    { logo: "pallas_Logo.png", url: "https://pallas.no/" },
    { logo: "Syde_Logo.png", url: "https://syde.no/" },
    { logo: "Innovation_Logo.png", url: "" },
    { logo: "Kodeverket_Logo.png", url: "https://www.kodeverketbergen.no/" }
  ];

  return (
    <div className='flex flex-col gap-3 p-10 m-3 lg:flex-row bg-white text-black'>
      <div className='shadow-2xl rounded-2xl p-3 '>
        <h1 className='text-4xl'>Våre Partnere</h1>
        <p className='text-2xl'>Vi bryr oss om partnerne våre</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  shadow-2xl p-3 rounded-2xl w-full max-w-5xl'>
        {partners.map((partner, index) => (
          <div key={index} className='w-full flex justify-center'>
            <a href={partner.url} target="_blank" rel="noopener noreferrer">
              <img src={partner.logo} alt={partner.logo.split('_')[0]} className='w-40 h-auto rounded-2xl shadow-2xl' />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partnere;

