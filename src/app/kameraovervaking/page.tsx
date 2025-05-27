import React from "react";
import Image from "next/image";

export default function Page() { 
    return (
    <main>
        <section className="flex flex-col md:flex-row lg:flex-row w-full h-full ">
            <div className="md:w-full lg:w-1/3">
                <Image
                    src="/KoV-ov.png"
                    alt="Camera landing page img"
                    width={450}
                    height={450}
                    draggable={false}
                    className="flex-shrink:0 h-auto w-full"                                                       
                />              
            </div>
            <div className="flex flex-shrink:1 flex-col bg-black text-white rounded-2xl p-10 w-full lg:w-2/3">
                <h1 className="text-3xl mb-8 md:text-3xl md:mb-3 lg:text-5xl font-bold">Videoovervåking</h1>
                <p className="text-2xl md:text-lg lg:text-4xl mb-5">Sikkerhet på eiendommen // Security on Property</p>
                <p className="text-lg md:text-md">Informasjon om Videoovervåking// Information regarding video surveillance.</p>
                <p className="text-lg font-bold">Bergen Works AS praktiserer videoovervåking på utvalgte eiendommer. Formålet er å øke sikkerheten for våre leietakere, forebygge hærverk på eiendommene og forebygge uønsket atferd.</p>
            </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-15 mb-15">
            <div className="flex flex-col shadow-2xl rounded-2xl md:min-h-[500px]">
                <Image
                src="/KoV-inf.png"
                alt="Camera landing page img"
                width={450}
                height={450}
                draggable={false}
                className="w-full md:h-1/2 object-contain px-12 pt-12"
                />
                <div className="flex flex-col p-5 h-1/2">
                    <h1 className="font-bold sm:text-2xl lg:text-lg xl:text-2xl mb-3">Informasjon om behandlingen:</h1>
                    <p>Opptakene spares i syv dager...</p>
                </div>
            </div>

            <div className="flex flex-col shadow-2xl rounded-2xl md:min-h-[500px]">
                <Image
                src="/KoV-ret.png"
                alt="Camera landing page img"
                width={450}
                height={450}
                draggable={false}
                className="w-full md:h-1/2 object-contain  px-12 pt-12"
                />
                <div className="flex flex-col p-5 h-1/2">
                    <h1 className="font-bold sm:text-2xl lg:text-lg xl:text-2xl mb-3">Dine rettigheter:</h1>
                    <p>Du kan be om innsyn...</p>
                </div>
            </div>

            <div className="flex flex-col shadow-2xl rounded-2xl md:min-h-[500px]">
                <Image
                src="/KoV-krit.png"
                alt="Camera landing page img"
                width={450}
                height={450}
                draggable={false}
                className=" w-full md:h-1/2 object-contain px-12 pt-12"
                />
                <div className="flex flex-col p-5 h-1/2">
                    <h1 className="font-bold sm:text-2xl lg:text-lg xl:text-2xl mb-3">Kriterier for uttak av video:</h1>
                    <p>Krever anmodning fra politiet.</p>
                </div>
            </div>

            <div className="flex flex-col shadow-2xl rounded-2xl md:min-h-[500px]">
                <Image
                src="/KoV-mail.png"
                alt="Camera landing page img"
                width={450}
                height={450}
                draggable={false}
                className=" w-full md:h-1/2 object-contain px-12 pt-12"
                />
                <div className="flex flex-col p-5 h-1/2">
                    <h1 className="font-bold sm:text-2xl lg:text-lg xl:text-2xl mb-3">Behandlingsansvarlig er Bergen Works AS.</h1>
                    <p>Telefonnummer: 48502813</p>
                    <p>E-post: hello@bergen.works</p>
                </div>
            </div>
</section>
    </main>
    );
} 
    
