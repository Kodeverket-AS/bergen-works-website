import React from "react";
import Image from "next/image";
import KontaktForm from "@/components/KontaktForm";
import { Button } from "@/components/ui/buttons/Button";

export default function Membership() {
    return (
        <main>
            <section className="flex flex-col w-full h-full items-stretch items-center md:flex-row gap-5">                
                <Image
                    src="/Incubator.png"
                    alt="Incubator landing page img"
                    width={450}
                    height={450}
                    draggable={false}
                    className="h-full w-full md:w-1/2 lg:w-1/3 object-cover object-center"                                                       
                    />                
                <div className="bg-black text-white pt-10 lg:pt-20 px-15 rounded-2xl shadow-lg w-full h-auto">
                    <h1 className="text-4xl mb-8 md:text-5xl">Inkubator</h1>
                    <p className="lg:text-2xl">Har du en Gründer i magen? Bergen.Works utvikler et nytt inkubasjonskonsept for de som ønsker å realisere dine drømmer og idéer! Ta turen innom oss for en uformell prat og en kopp kaffe! Bergen.Works er startet av gründere, for gründere; hos oss finner du kompetanse innen ethvert felt! Kom for kontorplass, bli for miljøet.</p>                    
                    <Button 
                    className="mt-12 mb-10 lg:mt-20 w-full md:w-1/2 lg:w-1/3 rounded-2xl text-lg" 
                    variant="secondary"
                    href="/#contact-form">Ta kontakt</Button>
                </div>                
            </section>
           
            <section className="w-full h-full flex flex-col md:flex-row mt-10 mb-10 ">                
                    <Image
                    className="w-full m-[12px] md:w-1/2 md:object-cover md:object-center rounded-2xl"
                    src="/FasImg2.png"
                    alt="Incubator landing page img"
                    width={1300}
                    height={450}
                    draggable={false}
                    />                
                <div>
                    <KontaktForm/>
                </div>
                </section>
        </main>
    );
}
