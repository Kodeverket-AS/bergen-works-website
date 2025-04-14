import React from "react";
import {partners} from "@/data/dataPartnere";

const Partnere=( )=>{
  return (
    <div className="w-full flex flex-col lg:flex-row  gap-4 my-8 ">
      <div className="flex shadow-xl w-full lg:w-1/3 rounded-xl ">
        <div className="flex lg:mt-auto  pr-4 flex-col ">
          <h1 className="text-xl font-semibold md:text-2xl lg:mb-20 lg:text-4xl p-4">
            Våre Partnere
          </h1>
          <p className="text-lg lg:text-xl lg:mb-4 2xl:text-2xl p-4">
            Gjennom tett samarbeid med våre partnere utvikler vi løsninger som
            fremmer fleksibilitet, kreativitet og trivsel på arbeidsplassen.
            Sammen former vi fremtidens arbeidsliv.
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
