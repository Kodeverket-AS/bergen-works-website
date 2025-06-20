'use client'; 

import { useState, useEffect } from 'react';
import Image from 'next/image';

const SommerKampanje = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isMounted, setIsMounted] = useState(false); 

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []); 


  useEffect(() => {
    if (!isOpen) return; 

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]); 

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen || !isMounted) return null;

  return (
    <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4">
      <div
        className="relative text-moss-600 font-work-sans rounded-xl shadow-2xl p-2 sm:p-4 md:p-8 lg:p-10 w-full max-w-[99vw] sm:max-w-xl md:max-w-3xl mx-auto transform transition-all duration-300 ease-out scale-100 opacity-100 bg-white/90 max-h-[85vh] md:max-h-[96vh] overflow-y-auto"
        style={{
          backgroundImage: 'url(/beach.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold transition-transform duration-200 hover:scale-110"
          aria-label="Close"
        >
          &times;
        </button>

        <div className="text-center ">
          <div className="mb-4 flex justify-center">
            <Image
              src="/sun.png"
              alt="Sun icon"
              width={60}
              height={60}
              className="animate-spin-slow sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]"
            />
          </div>

          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 font-space-grotesk"
          
          >
            Sommerkampanje:
            <br/> <span className="text-moss-500">Få én måned gratis!</span>
          </h2>

          <div className="mb-6 flex justify-center">
            <Image src="/FastPlass_logo.png" alt="office" width={60} height={60} className="opacity-90 sm:w-[80px] sm:h-[80px]" />
          </div>

          <div className="mb-6 sm:mb-8">
            <h1 className='text-lg sm:text-2xl leading-relaxed'> <strong> Registrer deg for fast kontorplass før 30. juli  </strong> , og få én måned gratis leie! </h1> 
            <span className="font-semibold text-xs sm:text-base text-moss-500 ">
              Gjelder kun nye medlemmer som inngår avtale i juni.
            </span >
              <br/>
                <br />
               <div className='rounded-xl font-semibold text-base sm:text-2xl leading-7 sm:leading-9 text-glow'>
  Perfekt for deg som trenger et inspirerende sted å jobbe gjennom sommeren – supert
              nettverk inkludert.
 
               </div>
           </div>

          <a
            href="/#contact-form"
            className="w-full sm:inline-block sm:w-auto bg-moss-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-lg uppercase tracking-wide hover:bg-moss-600 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleClose}
          >
            Sikre deg din kontorplass i dag!
          </a>

          <p className="text-sm mt-4 text-gray-600 italic">Begrenset antall plasser.</p>

          <div className="mt-8 pt-4 border-t border-gray-300 flex justify-center ">
            <Image src="/BW_logo.png" alt="Logo Bergen Work" width={120} height={60} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default SommerKampanje;