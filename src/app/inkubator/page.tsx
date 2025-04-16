import React from "react";

export default function Membership() {
    return (
        <main className='container mx-auto px-4 py-10'>
            <div className='flex flex-col items-center justify-center text-center gap-8 my-10 md:my-20'>
                <div className='bg-moss-200 rounded-2xl p-8 flex flex-col items-center max-w-3xl'>
                    {/* Byggearbeid-ikon */}
                    <div className='text-8xl mb-6 text-white'>🏗️</div>

                    <h1 className='text-3xl md:text-4xl xl:text-5xl font-semibold mb-6 text-white'>
                        Vi bygger noe stort!
                    </h1>

                    <div className='flex flex-col gap-4 text-xl md:text-2xl text-white'>
                        <p className='mb-2'>
                            Bergen.Works Inkubator er under konstruksjon og
                            kommer snart med et fantastisk tilbud til gründere
                            og oppstartsbedrifter.
                        </p>

                        <p className='mb-2'>
                            Her vil du kunne finne alt fra kontorplasser og
                            møterom til nettverk, mentorer og ressurser som
                            hjelper din idé å vokse.
                        </p>

                        <p className='mb-6'>Følg med - vi lanserer snart!</p>
                    </div>

                    <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 w-full'>
                        <div className='rounded-lg bg-moss-600 p-4 flex flex-col items-center'>
                            <img
                                className='h-16 w-16 invert mb-3'
                                src='moterom_logo.png'
                                alt='Kontorplass'
                            />
                            <p className='text-white text-lg md:text-xl'>
                                Kontorplasser
                            </p>
                        </div>

                        <div className='rounded-lg bg-moss-600 p-4 flex flex-col items-center'>
                            <img
                                className='h-16 w-16 invert mb-3'
                                src='nettverk_logo.png'
                                alt='Nettverk'
                            />
                            <p className='text-white text-lg md:text-xl'>
                                Nettverk
                            </p>
                        </div>

                        <div className='rounded-lg bg-moss-600 p-4 flex flex-col items-center'>
                            <img
                                className='h-16 w-16 invert mb-3'
                                src='event_logo.png'
                                alt='Ressurser'
                            />
                            <p className='text-white text-lg md:text-xl'>
                                Ressurser
                            </p>
                        </div>
                    </div>

                    <button className='mt-8 bg-white text-black px-6 py-3 rounded-lg text-xl hover:bg-accept-600 hover:text-white transition-colors'>
                        Få beskjed når vi lanserer
                    </button>
                </div>
            </div>
        </main>
    );
}
