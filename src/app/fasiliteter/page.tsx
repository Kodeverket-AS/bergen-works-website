import { FasiliteterCard } from "@/components/ui/FasiliteterCard";

export default function Facilities() {
    return (
        <main className=''>
            <div className='mb-10'>
                <FasiliteterCard
                    imageSrc='/BW_Bygning.png'
                    alt={"Image of building"}
                    headerText={"Alt du trenger – og litt til"}
                    paragraphText={
                        "Som medlem får du tilgang til et inspirerende nettverk, moderne møterom og fleksible eventlokaler – midt i Bergen sentrum. Ikke medlem? Du kan fortsatt booke våre fasiliteter når du trenger det. Utforsk mulighetene og ta kontakt for et skreddersydd pristilbud!"
                    }
                    buttonText={"Ta kontakt"}
                    buttonLink={"/"}
                    cardStyle={"gap-3 md:gap-6"}
                    imageContainerStyle={
                        "w-full h-[400] md:w-1/2 lg:w-8/12 md:h-[450] rounded-xl"
                    }
                    headerStyle={"text-3xl md:text-4xl xl:text-5xl  "}
                    textContainerStyle={
                        "w-full h-full md:w-1/2   lg:w-1/2 md:h-[450] xl:w-[1/3]"
                    }
                    paragraphStyle={"lg:my-4 xl:text-lg"}
                    buttonStyle='bg-moss-600 hover:bg-accept-600 hover:text-[var(--text-dark)] text-[var(--text-light)] w-full md:w-1/2 mt-6  '
                    largeScreenReverse={false}
                    smallScreenReverse={false}
                />
            </div>

            <div className='mb-10'>
                <FasiliteterCard
                    imageSrc='/FasImg2.png'
                    alt={"Image of Meetingroom"}
                    headerText={
                        "Flere møterom – alltid en plass for deg i Skostredet"
                    }
                    paragraphText={
                        "Vi har møterom i ulike størrelser for 2 til 12 personer, og gode muligheter for tilgjengelighet når du trenger det."
                    }
                    buttonText={"Ta kontakt"}
                    buttonLink={"/"}
                    cardStyle={"gap-3 md:gap-6"}
                    imageContainerStyle={
                        "w-full h-[250] md:w-2/3 md:h-[450] py-10 rounded-x"
                    }
                    headerStyle={"text-2xl md:text-3xl lg:text-4xl  "}
                    textContainerStyle={
                        "bg-moss-600 text-[var(--text-light)] w-full h-full md:w-1/2   lg:w-1/2 md:h-[450] xl:w-[1/3]"
                    }
                    paragraphStyle={"lg:my-5 xl:text-lg "}
                    buttonStyle='bg-[#fffafa] hover:bg-accept-600 hover:text-[var(--text-dark)] text-[var(--text-dark)] w-full md:w-1/2 mt-6'
                    largeScreenReverse={true}
                    smallScreenReverse={true}
                />
            </div>
            <div className='mb-10'>
                <FasiliteterCard
                    imageSrc={"/FasImg3.png"}
                    alt={"Image of kitchen area"}
                    headerText={
                        "Lei lokaler til kurs, konferanser og arrangementer"
                    }
                    paragraphText={
                        "Våre fleksible lokaler passer alt fra faglige samlinger til sosiale eventer. Kontakt oss for tilgjengelighet, priser og catering – vi setter sammen et tilbud som matcher dine behov."
                    }
                    buttonText={"Ta kontakt"}
                    buttonLink={""}
                    cardStyle={"gap-3 md:gap-6"}
                    imageContainerStyle={
                        "w-full h-[400] md:w-2/3 md:h-[500] rounded-xl rounded-xl"
                    }
                    headerStyle={"text-2xl md:text-3xl lg:text-4xl "}
                    textContainerStyle={
                        "w-full h-full md:w-1/2   lg:w-1/2 md:h-[500] xl:w-[1/3] "
                    }
                    paragraphStyle={"lg:my-8 xl:mr-10 xl:text-lg"}
                    buttonStyle='bg-moss-600 hover:bg-accept-600 hover:text-[var(--text-dark)] text-[var(--text-light)] w-full md:w-1/2 mt-6    '
                    largeScreenReverse={false}
                    smallScreenReverse={true}
                />
            </div>
        </main>
    );
}
