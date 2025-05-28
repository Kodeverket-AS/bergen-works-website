"use client"
import React, { useState, useEffect } from "react";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Footer() {
    const [isVisible, setIsVisible] = useState(false);

   
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

   
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer>
            <section >
                <div className='mb-8'>
                    <div className='flex flex-col md:flex-row md:gap-5 mb-4'>
                        <div className='flex flex-col items-center justify-center'>
                            <a href='/'>
                                <img
                                    className='w-full h-2/3 rounded-2xl md:h-full'
                                    src='/Footer_Logo.png'
                                    alt='Bergen Works Logo'
                                />
                            </a>

                            <div className='flex felx-row gap-4 mt-4 mb-4 items-center justify-center h-1/3 md:hidden'>
                                <a
                                    href='https://www.facebook.com/bergenworks'
                                    target='_blank'
                                >
                                    <img
                                        className='w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14'
                                        src='facebook.png'
                                        alt=' small icon'
                                    />
                                </a>

                                <a
                                    href='https://www.instagram.com/bergen_works/'
                                    target='_blank'
                                >
                                    <img
                                        className='w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14'
                                        src='instagram.png'
                                        alt=' small icon'
                                    />
                                </a>

                                <a
                                    href='https://www.linkedin.com/company/bergen-works/posts/?feedView=all'
                                    target='_blank'
                                >
                                    <img
                                        className='w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14'
                                        src='linkedin.png'
                                        alt=' small icon '
                                    />
                                </a>
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center mt-4 mb-4 md:items-baseline md:justify-start'>
                            <p className=''>Vestre Skostredet 2, 5017 Bergen</p>

                            <div className='flex items-center'>
                                <img
                                    className='w-8 h-8'
                                    src='/email.png'
                                    alt='Email icon'
                                />
                                <a
                                    href='mailto:hello@bergen.works'
                                    className='pl-2 text-black hover:underline'
                                >
                                    hello@bergen.works
                                </a>
                            </div>
                            <div className='flex items-center'>
                                <img
                                    className='w-8 h-8'
                                    src='telephone.png'
                                    alt='Phone icon'
                                />
                                <a
                                    href='tel:+4748502813'
                                    className='pl-2 text-black hover:underline'
                                >
                                    485 02 813
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className='md:hidden'>
                        Utviklet i regnet av Kodeverket Bergen © 2025
                    </p>
                </div>
            </section>
            <section className='hidden md:block'>
                <div className='flex felx-row gap-4 mt-4 mb-4 items-center justify-center h-1/3'>
                    <a
                        href='https://www.facebook.com/bergenworks'
                        target='_blank'
                    >
                        <img
                            className=' w-7 h-7 '
                            src='facebook.png'
                            alt=' small icon'
                        />
                    </a>

                    <a
                        href='https://www.instagram.com/bergen_works/'
                        target='_blank'
                    >
                        <img
                            className=' w-7 h-7 '
                            src='instagram.png'
                            alt=' small icon'
                        />
                    </a>

                    <a
                        href='https://www.linkedin.com/company/bergen-works/posts/?feedView=all'
                        target='_blank'
                    >
                        <img
                            className=' w-7 h-7 '
                            src='linkedin.png'
                            alt=' small icon '
                        />
                    </a>
                </div>
                <p className='flex justify-center'>
                    Utviklet i regnet av Kodeverket Bergen © 2025
                </p>
                <a href='/personvern'>
                    <p className='flex justify-center mb-8'>Personvernerklæring</p>
                </a>
            </section>

         
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 z-50"
                    aria-label="Scroll to top"
                >
                    <KeyboardArrowUpIcon sx={{ fontSize: 32, color: '#333' }} />
                </button>
            )}
        </footer>
    );
}

export default Footer;
