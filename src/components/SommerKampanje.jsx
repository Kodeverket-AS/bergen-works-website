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
        className="relative text-moss-600 font-work-sans rounded-xl shadow-2xl p-2 sm:p-3 md:p-6 lg:p-7 w-full max-w-[85vw] sm:max-w-sm md:max-w-xl mx-auto transform transition-all duration-300 ease-out scale-100 opacity-100 bg-white/90 max-h-[85vh] md:max-h-[96vh] overflow-y-auto"
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
          </div>

          <h2
            className="text-3xl md:text-4xl font-extrabold mb-3 font-space-grotesk"
          >
            Sommerkampanje:
            <br/> <span className="text-moss-500">Få én måned gratis!</span>
          </h2>

          <div className="mb-4 flex justify-center">
            <Image src="/FastPlass_logo.png" alt="office" width={42} height={42} className="opacity-90 sm:w-[56px] sm:h-[56px]" />
          </div>

          <div className="mb-4 sm:mb-6">
            <h1 className='text-base sm:text-xl leading-relaxed'> <strong> Registrer deg for fast kontorplass før 30. juli  </strong> , og få én måned gratis leie! </h1> 
            <span className="font-semibold text-xs sm:text-sm text-moss-500 ">
              Gjelder kun nye medlemmer som inngår avtale i juni.
            </span >
              <br/>
            <br />
               <div className='rounded-xl font-semibold text-sm sm:text-lg leading-6 sm:leading-7 text-glow'>
            Perfekt for deg som trenger et inspirerende sted å jobbe gjennom sommeren – supert
            nettverk inkludert.
               </div>
           </div>

          <a
            href="/#contact-form"
            className="w-full sm:inline-block sm:w-auto bg-moss-500 text-white font-bold py-1.5 px-3 sm:py-3 sm:px-6 rounded-full text-xs sm:text-base uppercase tracking-wide hover:bg-moss-600 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleClose}
          >
            Sikre deg din kontorplass i dag!
          </a>

          <p className="text-xs mt-3 text-gray-600 italic">Begrenset antall plasser.</p>

          <div className="mt-6 pt-3 border-t border-gray-300 flex justify-center ">
            <Image src="/BW_Logo.png" alt="Logo Bergen Work" width={84} height={42} className="hidden sm:block" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default SommerKampanje;