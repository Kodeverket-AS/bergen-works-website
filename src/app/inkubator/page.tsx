import React from "react";
import Image from "next/image";
import KontaktForm from "@/components/KontaktForm";
import { Button } from "@/components/ui/buttons/Button";

export default function Membership() {
    return (
        <main>
            <section className=" flex flex-col lg:flex-row w-full">
                <div className="lg:w-1/3 lg:pr-3">
                <Image
                    src="/Incubator.png"
                    alt="Incubator landing page img"
                    width={450}
                    height={450}
                    draggable={false}
                    className="mb-10 lg:mb-0"                                                       
                    />
                </div>
                <div className="bg-black text-white rounded-2xl lg:w-2/3 p-10">
                    <h1 className="text-4xl font-bold lg:mt-18">Inkubator</h1>
                    <p className="mt-3 text-xl">Har du en Gründer i magen? Bergen.Works utvikler et nytt inkubasjonskonsept for de som ønsker å realisere dine drømmer og idéer! Ta turen innom oss for en uformell prat og en kopp kaffe! Bergen.Works er startet av gründere, for gründere; hos oss finner du kompetanse innen ethvert felt! Kom for kontorplass, bli for miljøet.</p>                    
                    <Button 
                    className="mt-5 rounded-md" 
                    variant="secondary"
                    href="/#contact-form">Ta kontakt</Button>
                </div>                
            </section>
           
            <section className="flex flex-col w-full lg:flex-row mt-10">
                <div className="flex-1">
                    <Image
                    className="rounded-2xl h-full object-cover"
                    src="/FasImg2.png"
                    alt="Incubator landing page img"
                    width={1300}
                    height={450}
                    draggable={false}
                    />
                </div>
                <div className="flex-1 flex">
                    <KontaktForm/>
                </div>
                </section>
        </main>
    );
}
