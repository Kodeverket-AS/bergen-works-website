import Image from "next/image";
import { InfoCard } from "./ui/InfoCard";
import { Button } from "./ui/buttons/Button";

export default function InformationSection() {
    return (
        <main className='container mx-auto px-4 flex flex-col items-center justify-center'>
            <div className='bg-[#1D1D1D] lg:bg-transparent rounded-2xl flex flex-col lg:flex-row items-stretch justify-between w-full gap-4 md:gap-5 xl:gap-9 lg:mb-8'>
                {/* VENSTRE BOKS – BILDE */}
                <div className='select-none md:bg-[#1D1D1D] lg:flex lg:items-center lg:justify-center p-4 rounded-2xl w-full lg:flex-[5]'>
                    <Image
                        src='/infoImage.png'
                        alt='Picture of logo and people in meetingroom'
                        width={400}
                        height={400}
                        draggable={false}
                        className='object-cover w-full h-full rounded-2xl'
                        priority
                    />
                </div>

                {/* HØYRE BOKS – TEKST */}
                <div className='text-[var(--text-light)] w-full lg:flex-[7] flex flex-col justify-between rounded-2xl p-4 lg:bg-[#1D1D1D]'>
                    <div className='lg:px-10'>
                        <h1 className='font-bold text-[40px] xl:text-[50px] mt-0 lg:my-2'>
                            Co-work
                        </h1>
                        <p className='text-sm md:text-base lg:hidden'>
                            Vi jobber med å utvikle et splitter nytt
                            inkubasjonskonsept på huset. Stay tuned!
                        </p>
                        <p className='hidden lg:block lg:mt-2'>
                            Med en beliggenhet i vakre Skostredet har
                            Bergen.Works drevet coworking space siden 2017. Vi
                            ble startet av gründere og for gründere, og
                            Bergen.Works skal være mer enn en kontorplass.
                            Bærebjelkene våre er sosial, kreativ og grønn
                            innovasjon, og vi vil bidra til å utvikle smarte
                            hoder innen disse feltene. Derfor ønsker vi å legge
                            til rette for en arena for samarbeid og inkludering
                            der det enkelte medlem kan ta del i fellesskapet som
                            mentor, innovatør, arbeidssøkende eller
                            vekstbedrift. Sammen finner vi morgendagens
                            løsninger på dagens problemstillinger.
                        </p>
                        <div className='mt-6 lg:mt-10'>
                            <Button
                                href='/#contact-form'
                                className='text-base lg:text-lg w-full lg:w-auto rounded-sm'
                                variant={"secondary"}
                            >
                                Ta kontakt
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full mt-8 flex flex-col lg:flex-row justify-around xl:justify-center gap-5 xl:gap-10'>
                <div className='text-[var(--text-dark)] lg:w-1/3'>
                    <InfoCard
                        cardStyle='bg-moss-200 flex justify-center items-center w-full h-[140px] group cursor-pointer lg:h-[200px] rounded-2xl duration-300 md:hover:scale-105'
                        imageSrc='/infoIcon1.png'
                        alt='Icon'
                        title='Fast Plass'
                        description='3990,- / mnd'
                        imageStyle='w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] xl:w-[140px] xl:h-[140px]'
                        textContentStyle='p-4 xl:px-8'
                        headerStyle='h-full text-2xl font-bold'
                        paragraphStyle='mt-2 text-sm sm:text-base'
                        arrowStyle='absolute bottom-4 right-4 duration-300 md:group-hover:scale-[1.2] md:group-hover:-translate-x-1 md:group-hover:translate-y-1 md:group-hover:rotate-45'
                        modalImageSrc='/infoIcon1.png'
                        modalImageAlt='Icon'
                        modalHeader='Fast Plass'
                        modalParagraph1='3990,-/ mnd (eks. MVA)'
                        modalParagraph2='Dette inkluderer følgende: Fast plass i åpent kontorlandskap, nytraktet kaffe, tilgang til møterom, rask wifi, rengjøring, strøm, telefonbåser samt invitasjon til alle arrangementer i Bergen.Works regi.'
                        modalLinkText='Ta kontakt'
                        modalLink='/#contact-form'
                    />
                </div>

                <div className='text-[var(--text-light)] lg:w-1/3'>
                    <InfoCard
                        cardStyle='bg-moss-600 flex justify-center items-center w-full h-[140px] group cursor-pointer lg:h-[200px] rounded-2xl duration-300 md:hover:scale-105'
                        imageSrc='/infoIcon2.png'
                        alt='Icon'
                        title='Åpen Plass'
                        description='3200,- / mnd'
                        imageStyle='w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] xl:w-[140px] xl:h-[140px]'
                        textContentStyle='p-4 xl:px-8'
                        headerStyle='h-full text-2xl font-bold'
                        paragraphStyle='mt-2 text-sm sm:text-base'
                        arrowStyle='absolute bottom-4 right-4 duration-300 md:group-hover:scale-[1.2] md:group-hover:-translate-x-1 md:group-hover:translate-y-1 md:group-hover:rotate-45'
                        modalImageSrc='/infoIcon2.png'
                        modalImageAlt='Icon'
                        modalHeader='Åpen plass'
                        modalParagraph1='3200,-/ mnd (eks. MVA)'
                        modalParagraph2='Dette inkluderer følgende: Tilgang til ledig plass i åpent kontorlandskap, nytraktet kaffe, tilgang til møterom, rask wifi, rengjøring, strøm, telefonbåser samt invitasjon til alle arrangementer i Bergen.Works regi.'
                        modalLinkText='Ta kontakt'
                        modalLink='/#contact-form'
                    />
                </div>

                <div className='text-[var(--text-dark)] lg:w-1/3'>
                    <InfoCard
                        cardStyle='bg-moss-200 flex justify-center items-center w-full h-[140px] group cursor-pointer lg:h-[200px] rounded-2xl duration-300 md:hover:scale-105'
                        imageSrc='/infoIcon3.png'
                        alt='Icon'
                        title='Inkubasjon'
                        description='Gratis for deltakere'
                        imageStyle='w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] xl:w-[140px] xl:h-[140px]'
                        textContentStyle='flex flex-col justify-center p-4 xl:px-8'
                        headerStyle='h-full text-2xl font-bold'
                        paragraphStyle='mt-2 text-sm sm:text-base'
                        arrowStyle='absolute bottom-4 right-4 duration-300 md:group-hover:scale-[1.2] md:group-hover:-translate-x-1 md:group-hover:translate-y-1 md:group-hover:rotate-45'
                        modalImageSrc='/infoIcon3.png'
                        modalImageAlt='Icon'
                        modalHeader='Inkubator på Bergen.Works'
                        modalParagraph2='Har du en Gründer i magen? Bergen.Works utvikler et nytt inkubasjonskonsept for de som ønsker å realisere dine drømmer og idéer! Ta turen innom oss for en uformell prat og en kopp kaffe! Bergen.Works er startet av gründere, for gründere; hos oss finner du kompetanse innen ethvert felt! Kom for kontorplass, bli for miljøet.'
                        modalLinkText='Ta kontakt'
                        modalLink='/#contact-form'
                    />
                </div>
            </div>
        </main>
    );
}
