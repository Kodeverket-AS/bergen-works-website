import React from 'react'
import Personvernerklæring from '../../../app/personvern/page';


function Footer() {
  return (
    <footer>
      <section className="">
        <div className="">
          <div className="flex flex-col md:flex-row md:gap-5">            
              <div className='flex flex-col items-center justify-center'>
                <a href='/'>
                <img 
                className="w-full h-2/3 rounded-2xl md:h-full"
                src="/Footer_Logo.png"
                alt="Bergen Works Logo"
              />
              </a>

              <div className="flex felx-row gap-4 mt-4 mb-4 items-center justify-center h-1/3 md:hidden">
                <a href=''>
                  <img
                  className=" w-14 h-14 "
                  src="facebook.png"
                  alt=" small icon"
                />
                </a>
                
                                
                <a href=''>
                  <img
                  className=" w-14 h-14 "
                  src="instagram.png"
                  alt=" small icon"
                />
                </a>
                
                
                <a href=''>
                  <img
                  className=" w-14 h-14 "
                  src="linkedin.png"
                  alt=" small icon "
                />
                </a>
                
                              
            </div>
              </div>
              

            <div className="flex flex-col items-center justify-center mt-4 mb-4 md:items-baseline md:justify-start">
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
          <p className="md:hidden">
            Utviklet i regnet av Kodeverket Bergen © 2025
          </p>
        </div>
      </section>
      <section className='hidden md:block'>
      <div className="flex felx-row gap-4 mt-4 mb-4 items-center justify-center h-1/3">
                <a href=''>
                  <img
                  className=" w-7 h-7 "
                  src="facebook.png"
                  alt=" small icon"
                />
                </a>
                
                
                <a href=''>
                  <img
                  className=" w-7 h-7 "
                  src="instagram.png"
                  alt=" small icon"
                />
                </a>
                
                
                <a href=''>
                  <img
                  className=" w-7 h-7 "
                  src="linkedin.png"
                  alt=" small icon "
                />
                </a>
                
                              
            </div>
      <p className="flex justify-center">Utviklet i regnet av Kodeverket Bergen © 2025</p>
      <a href="/personvern">
      <p className="flex justify-center">Personvernerklæring</p>
      </a>
      </section>
    </footer>
  );
}

export default Footer