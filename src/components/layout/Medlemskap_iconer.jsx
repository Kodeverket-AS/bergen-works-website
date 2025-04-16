import React from "react";

const Medlemskap_iconer = () => {
    return (
        <section className='w-full overflow-x-auto'>
            <div className='flex flex-wrap flex-col items-center justify-center bg-white gap-10 p-5'>
                <div className='flex flex-row gap-15 overflow-x-auto'>
                    <div className='rounded-2xl bg-moss-200 p-4'>
                        <img
                            className='min-h-70 min-w-70 invert'
                            src='wi-fi_logo.png'
                            alt='Wi-Fi'
                        />
                        <p className='text-white text-2xl text-center mt-4'>
                            Wi-Fi
                        </p>
                    </div>
                    <div className='rounded-2xl bg-moss-600 p-4'>
                        <img
                            className='min-h-70 min-w-70 invert'
                            src='printer_logo.png'
                            alt='Printer'
                        />
                        <p className='text-white text-2xl text-center mt-4'>
                            Printer
                        </p>
                    </div>
                    <div className='rounded-2xl bg-moss-200 p-4'>
                        <img
                            className='min-h-70 min-w-70 invert'
                            src='telefon-rom_logo.png'
                            alt='Telefon-rom'
                        />
                        <p className='text-white text-2xl text-center mt-4'>
                            Telefon-rom
                        </p>
                    </div>
                    <div className='rounded-2xl bg-moss-600 p-4'>
                        <img
                            className='min-h-70 min-w-70 invert'
                            src='te_logo.png'
                            alt='Kaffe/Te'
                        />
                        <p className='text-white text-2xl text-center mt-4'>
                            Kaffe/Te
                        </p>
                    </div>
                </div>
                <div className='flex flex-row gap-15 overflow-x-auto'>
                    <div className='rounded-2xl bg-moss-600 p-4'>
                        <img
                            className='min-h-70 min-w-70 invert'
                            src='moterom_logo.png'
                            alt='Møterom'
                        />
                        <p className='text-white text-2xl text-center mt-4'>
                            Møterom
                        </p>
                    </div>
                    <div className='rounded-2xl bg-moss-200 p-4'>
                        <img
                            className='min-h-70 min-w-70 invert'
                            src='event_logo.png'
                            alt='Event område'
                        />
                        <p className='text-white text-2xl text-center mt-4'>
                            Event område
                        </p>
                    </div>
                    <div className='rounded-2xl bg-moss-600 p-4'>
                        <img
                            className='min-h-70 min-w-70 invert'
                            src='kjokken_logo.png'
                            alt='Kjøkken'
                        />
                        <p className='text-white text-2xl text-center mt-4'>
                            Kjøkken
                        </p>
                    </div>
                    <div className='rounded-2xl bg-moss-200 p-4'>
                        <img
                            className='min-h-70 min-w-70 invert'
                            src='nettverk_logo.png'
                            alt='Nettverk'
                        />
                        <p className='text-white text-2xl text-center mt-4'>
                            Nettverk
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Medlemskap_iconer;
