import React from "react";

const Kom_i_gang = () => {
    return (
        <section className='w-full mb-10'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row gap-6 md:gap-10 my-10 md:my-15'>
                    <div className='flex flex-col gap-4 md:gap-6 w-full md:w-1/2'>
                        <div className='gap-3'>
                            <h2 className='text-2xl md:text-3xl xl:text-4xl font-semibold mb-4 md:mb-6'>
                                Kom igang med Bergen.Works
                            </h2>
                            <p className='text-lg md:text-xl xl:text-2xl'>
                                Er du interessert i å bli en del av felleskapet
                                eller har du noen spørsmål? Fyll ut
                                kontakskjemaet og så kontakter vi deg
                                fortløpende.
                            </p>
                        </div>
                        <div className='flex flex-col gap-3 mt-4'>
                            <p className='text-md md:text-md'>
                                Her kommer kontaktskjema
                            </p>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img
                            className='w-full h-auto rounded-lg object-cover'
                            src='Møte-rom.png'
                            alt='Møterom i Bergen.Works'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Kom_i_gang;
