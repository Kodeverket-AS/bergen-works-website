import React from "react";

const Partnere = () => {
  const partners = [
    { logo: "DnB_Logo.png", url: "https://www.dnb.no" },
    { logo: "simonsen_Logo.png", url: "https://svw.no/" },
    { logo: "Escalon_Logo.png", url: "https://escalon.services/" },
    { logo: "pallas_Logo.png", url: "https://pallas.no/" },
    { logo: "Syde_Logo.png", url: "https://syde.no/" },
    { logo: "Innovation_Logo.png", url: "" },
    { logo: "Kodeverket_Logo.png", url: "https://www.kodeverketbergen.no/" },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row  gap-4 my-8">
      <div className="flex shadow-xl w-full lg:w-1/3 rounded-xl ">
        <div className="flex lg:mt-auto mb-12 pr-4 flex-col ">
          <h1 className="text-xl font-semibold md:text-2xl lg:text-4xl p-4">
            Våre Partnere
          </h1>
          <p className="lg:text-2xl md:text-lg p-4">
            Sammen skaper vi innovative løsninger for fremtidens arbeidsplasser.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-between shadow-xl rounded-xl p-4 lg:w-2/3">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="w-1/3 lg:w-1/4 3xl:w-1/5 flex justify-center  items-center "
          >
            <a href={partner.url} target="_blank" rel="noopener noreferrer">
              <img
                src={partner.logo}
                alt={partner.logo.split("_")[0]}
                className="max-w-full h-auto"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partnere;
