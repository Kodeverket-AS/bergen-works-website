import React from 'react';


const Fasiliteter = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row  gap-4 my-8">
      <div className="flex shadow-xl w-full  lg:w-1/3 rounded-xl ">
        <div className="flex lg:mt-auto  flex-col pl-4 pr-6">
          <h1 className="text-xl font-semibold md:text-2xl lg:text-4xl p-4">
            Fasilitetene
          </h1>
          <p className="text-lg lg:text-2xl md:text-lg p-4 ">
            Hos Bergen.Works finner du moderne og fleksible fasiliteter –
            kontorer, møterom og sosiale soner – utformet for å inspirere til
            samarbeid, konsentrasjon og kreativitet.
          </p>
      
        </div>
      </div>

      <div className="flex flex-wrap gap-5 justify-around shadow-xl rounded-xl p-12 lg:w-2/3  ">
        <div className="w-1/4 lg:w-1/5  flex flex-col justify-center  items-center  ">
          <a href="">
            <img src="wifi_icon.png" alt="" />
          </a>
          <p className="text-center text-xl lg:text-2xl">Wi-Fi</p>
        </div>
        <div className="w-1/4 lg:w-1/5  flex flex-col justify-center  items-center  ">
          <a href="">
            <img src="printer_icon.png" alt="" />
          </a>
          <p className="text-center text-xl lg:text-2xl">Printer</p>
        </div>
        <div className="w-1/4 lg:w-1/5  flex flex-col justify-center  items-center  ">
          <a href="">
            <img src="telephonRoon_icon.png" alt="" />
          </a>
          <p className="text-center text-xl lg:text-2xl">TelephonRoom</p>
        </div>
        <div className="w-1/4 lg:w-1/5  flex flex-col justify-center  items-center  ">
          <a href="">
            <img src="networking_icon.png" alt="" />
          </a>
          <p className="text-center text-xl lg:text-2xl">Networking</p>
        </div>
        <div className="w-1/4 lg:w-1/5  flex flex-col justify-center  items-center  ">
          <a href="">
            <img src="moterom_icon.png" alt="" />
          </a>
          <p className="text-center text-xl lg:text-2xl">Møterom</p>
        </div>
        <div className="w-1/4 lg:w-1/5  flex flex-col justify-center  items-center  ">
          <a href="">
            <img src="kjoken_icon.png" alt="" />
          </a>
          <p className="text-center text-xl lg:text-2xl">Kjøken</p>
        </div>
        <div className="w-1/4 lg:w-1/5  flex flex-col justify-center  items-center  ">
          <a href="">
            <img src="kaffe_tee_icon.png" alt="" />
          </a>
          <p className="text-center text-xl lg:text-2xl">Kaffe/Te</p>
        </div>
        <div className="w-1/4 lg:w-1/5  flex flex-col justify-center  items-center  ">
          <a href="">
            <img src="event_icon.png" alt="" />
          </a>
          <p className="text-center text-xl lg:text-2xl">Eventer/Kurs</p>
        </div>
      </div>
    </div>
  );
}

export default Fasiliteter
