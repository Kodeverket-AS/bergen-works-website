import React from 'react'


function Footer() {
  return (
    <footer className=" w-full">
      <div className=" m-4 shadow-xl b-2 b-green-950 flex flex-col p-4 lg:flex lg:justify-center lg:items-center lg:flex-row lg:gap-5">
        <div className="flex flex-col">
          <div className="flex flex-col lg:gap-12 lg:flex-row">
            <div className="flex gap-4 lg:gap-8 lg:flex-col">
              <img
                className="w-1/2 max-w-54 lg:w-5/6 lg:mx-w-96 rounded-2xl"
                src="/Footer_Logo.png"
                alt="Bergen Works Logo"
              />

              <div className="flex mt-auto w-1/2 gap-4  lg:gap-7 ">
                <img
                  className=" w-14 h-14 "
                  src="facebook.png"
                  alt=" small icon"
                />
                <img
                  className=" w-14 h-14 "
                  src="instagram.png"
                  alt=" small icon"
                />
                <img
                  className=" w-14 h-14 "
                  src="linkedin.png"
                  alt=" small icon "
                />
              </div>
            </div>

            <div className="flex  leading-9 flex-col tracking-wide mt-5 ml-3 lg:gap-4 lg:mt-0">
              <p className="">Vestre Skostredet 2, 5017 Bergen</p>

              <div className="flex  ">
                <img className="w-8 h-8 " src="/email.png" alt="" />

                <p className="pl-2">hello@bergen.works</p>
              </div>
              <div className="flex ">
                <img className="w-8 h-8 " src="telephone.png" alt="" />

                <p className=" pl-2">485 02 813</p>
              </div>
            </div>
          </div>
          <p className=" text-sm py-6 text-center lg:mt-8">
            Utviklet i regnet av Kodeverket Bergen © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer