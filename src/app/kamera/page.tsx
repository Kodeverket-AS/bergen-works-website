import React from "react";
import Image from "next/image";

export default function Page() { 
    return (
    <main>
        <section className="flex flex-col md:flex-row lg:flex-row w-full h-full ">
            <div className="md:w-1/3 lg:w-1/3">
                <Image
                    src="/KoV-ov.png"
                    alt="Camera landing page img"
                    width={450}
                    height={450}
                    draggable={false}
                    className="h-auto w-full object-cover object-center "                                                       
                />              
            </div>
            <div className="flex flex-col bg-black text-white rounded-2xl p-10 md:w-2/3 lg:w-2/3">
                <h1 className="text-5xl mb-8 font-bold">Videoovervåking</h1>
                <p className="text-4xl mb-5">Sikkerhet på eiendommen // Security on Property</p>
                <p className="text-lg">Informasjon om Videoovervåking// Information regarding video surveillance.</p>
                <p className="text-lg font-bold">Bergen Works AS praktiserer videoovervåking på utvalgte eiendommer. Formålet er å øke sikkerheten for våre leietakere, forebygge hærverk på eiendommene og forebygge uønsket atferd.</p>
            </div>
        </section>
        <section className="flex flex-col md:flex-row lg:flex-row w-full h-full my-5">
            <div className="flex flex-col md:w-1/4">
                <Image
                    src="/KoV-inf.png"
                    alt="Camera landing page img"
                    width={450}
                    height={450}
                    draggable={false}
                    className="h-full w-full object-cover object-center"                                                       
                />  
                <h1>Informasjon om behandlingen:</h1>
                <p>Opptakene spares i syv dager. Deretter slettes de automatisk. Det er mulighet for live overvåking. Lagring av opptak skjer lokalt og/eller innenfor EU i skylagring.</p>
            </div>
            <div className="flex flex-col md:w-1/4">
                <Image
                    src="/KoV-ret.png"
                    alt="Camera landing page img"
                    width={450}
                    height={450}
                    draggable={false}
                    className="h-full w-full object-cover object-center"                                                       
                />  
                <h1>Dine rettigheter:</h1>
                <p>Du kan be om innsyn i opptakene, samt be om sletting av personopplysninger.</p>
            </div>
            <div className="flex flex-col md:w-1/4">
                <Image
                    src="/KoV-krit.png"
                    alt="Camera landing page img"
                    width={450}
                    height={450}
                    draggable={false}
                    className="h-full w-full object-cover object-center"                                                       
                />  
                <h1>Kriterier for uttak av video:</h1>
                <p>Krever anmodning fra politiet.</p>
            </div>
            <div className="flex flex-col md:w-1/4">
                <Image
                    src="/KoV-mail.png"
                    alt="Camera landing page img"
                    width={450}
                    height={450}
                    draggable={false}
                    className="h-full w-full object-cover object-center"                                                       
                />  
                <h1>Behandlingsansvarlig er Bergen Works AS.</h1>
                <p>Telefonnummer: 485 02 813</p>
                <p>E-post: hello@bergen.works</p>
            </div>
        </section>
    </main>
    );
} 
    
