import React from "react";
import KontaktForm from "../KontaktForm";

const Kom_i_gang = () => {
    return (
        <section className='flex w-full h-auto '>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row gap-6 md:gap-10 my-10 md:my-15'>
                    <div className='w-full md:w-1/2'>
                        <KontaktForm />
                    </div>
                    <div className='w-full md:w-1/2 pb-12'>
                        <img
                            className='w-full mt-12 object-cover h-full rounded-lg'
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
