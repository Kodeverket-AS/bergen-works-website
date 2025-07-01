import React from "react";
import { FasiliteterCard } from "@/components/ui/FasiliteterCard";

const MedlemskapServices = () => {
    return (
        <div className="w-full">
            <FasiliteterCard
                imageSrc="/Eget_kontor_logo.png"
                alt="Eget kontor logo"
                headerText="Inkubasjon"
                paragraphText={
                    <>
                        <span className="text-2xl pt-3 block">Gratis for deltakere</span>
                        <p className="mt-1">Har du en gründer i magen? Bergen.Works utvikler et helt nytt inkubasjonsprogram for deg som vil gjøre idé til virkelighet.</p>
                        <p className="mt-1">Stikk innom for en uformell prat og en kopp kaffe – vi elsker å høre om nye idéer! Bergen.Works er startet av gründere, for gründere – her finner du både kontorplass og et sterkt fagmiljø med kompetanse innen alle felt.</p>
                        <p className="mt-1 font-bold">Kom for kontorplassen, bli for fellesskapet.</p>
                    </>
                }
                smallScreenReverse={false}
                largeScreenReverse={false}
                cardStyle="mb-5 gap-5  rounded-2xl"
                imageContainerStyle="flex justify-center items-center md:w-2/5 h-60 md:h-auto"
                imageStyle="w-60 md:w-70 h-60 md:h-70 xl:w-80 xl:h-80 m-auto"
                textContainerStyle="bg-moss-100/80 text-black md:w-3/5"
                headerStyle="text-3xl font-bold"
                paragraphStyle=""
            />

            <FasiliteterCard
                imageSrc="/FastPlass_logo.png"
                alt="Fast plass logo"
                headerText="Fast plass"
                paragraphText={
                    <>
                        <span className="text-2xl pt-3 block">3990,-/mnd (eks.MVA)</span>
                        <p className="mt-1">Dette inkluderer følgende: Fast plass i åpent kontorlandskap, nytraktet kaffe, tilgang til møterom, rask wifi, rengjøring, strøm, telefonbåser samt invitasjon til alle arrangementer i Bergen.Works regi.</p>
                    </>
                }
                smallScreenReverse={false}
                largeScreenReverse={true}
                cardStyle="mb-5 gap-5 "
                imageContainerStyle="md:w-2/5 h-60 md:h-auto"
                imageStyle="w-60 md:w-70 h-60 md:h-70  xl:w-80 xl:h-80 m-auto"
                textContainerStyle="bg-moss-200/80 text-black md:w-3/5"
                headerStyle="text-3xl font-bold"
                paragraphStyle=""
            />

            <FasiliteterCard
                imageSrc="/AApenPlass_logo.png"
                alt="Åpen plass logo"
                headerText="Åpen plass"
                paragraphText={
                    <>
                        <span className="text-2xl pt-3 block">3299,-/mnd (eks.MVA)</span>
                        <p className="mt-1">Dette inkluderer følgende: Tilgang til ledig plass i åpent kontorlandskap, nytraktet kaffe, tilgang til møterom, rask wifi, rengjøring, strøm, telefonbåser samt invitasjon til alle arrangementer i Bergen.Works regi.</p>
                    </>
                }
                smallScreenReverse={false}
                largeScreenReverse={false}
                cardStyle="mb-5 gap-5  rounded-2xl"
                imageContainerStyle="md:w-2/5 h-60 md:h-auto"
                imageStyle="w-60 md:w-70 h-60 md:h-70 flex  xl:w-80 xl:h-80 m-auto"
                textContainerStyle="bg-moss-400/30 text-black md:w-3/5"
                headerStyle="text-3xl font-bold"
                paragraphStyle=""
            />
        </div>
    );
};

export default MedlemskapServices;
