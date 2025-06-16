import Image from "next/image";
import { InfoCard } from "./ui/InfoCard";
// import { Button } from "./ui/buttons/Button";

export default function InformationSection() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="bg-[#1D1D1D] text-light-text lg:bg-transparent rounded-2xl flex flex-col items-center lg:flex-row  h-[700px] w-full lg:h-[450px] xl:h-[500px] gap-3 md:gap-6 lg:mb-[2em]">
        <div className="p-10 select-none  md:bg-[#1D1D1D]  w-full h-full lg:w-1/3 rounded-2xl">
          <div className="bg-black relative rounded-lg w-full h-96 lg:h-full ">
            <Image
              src="/officeCircle.png"
              alt="Picture of logo and people in meetingroom"
              fill
              draggable={false}
              className="object-contain rounded-2xl p-4  "
              priority
            />
          </div>
        </div>
        <div className="text-[var(--text-light)] w-full px-10 rounded-2xl lg:w-2/3 h-full lg:bg-[#1D1D1D]">
          <div className="lg:px-2 3xl:px-10 ">
            <h1 className="font-bold text-[40px] xl:text-[50px] md:mt-1 lg:my-8 xl:mt-10 3xl:mt-12">
              Co-work
            </h1>
            <p className="lg:hidden my-1">
              Med en beliggenhet i vakre Skostredet har Bergen.Works drevet
              coworking space siden 2017. Vi ble startet av gründere og for
              gründere.
            </p>
            <p className="hidden lg:block xl:text-lg ">
              Med en beliggenhet i vakre Skostredet har Bergen.Works drevet
              coworking space siden 2017. Vi ble startet av gründere og for
              gründere.
            </p>
            <p className="hidden lg:block xl:text-lg mt-2 ">
              coworking space gir deg tilgang til et inspirerende miljø, nye
              samarbeidspartnere og økt produktivitet. Hos Bergen.Works har vi
              ledige plasser for deg som vil jobbe i et dynamisk og sosialt
              fellesskap – enten du er gründer, investor, freelancer eller en
              del av en bedrift.
            </p>
            {/* <div className='w-full my-8 xl:my-14 3xl:mt-24'>
                            <Button
                                href='/#contact-form'
                                className=' lg:text-lg font-bold w-full lg:w-auto rounded-sm'
                                variant={"secondary"}
                            >
                                Ta kontakt
                            </Button>
                        </div> */}
          </div>
        </div>
      </div>
      <div className="w-full mt-[1em] md:px-10 flex flex-col lg:flex-row  lg:w-full justify-around xl:justify-center gap-5 xl:gap-10 ">
        <div className="text-dark-text lg:w-1/3  ">
          <InfoCard
            cardStyle="bg-moss-200 flex justify-center items-center w-full h-[140px] group cursor-pointer lg:h-[200px] rounded-2xl md:hover:scale-105"
            imageSrc="/infoIcon1.png"
            alt="Icon"
            title="Fast Plass"
            description="3990,- / mnd"
            imageStyle={
              "w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] xl:w-[140px] xl:h-[140px]"
            }
            textContentStyle={"p-4 xl:px-8"}
            headerStyle={"h-full text-2xl  font-bold"}
            paragraphStyle={"mt-2 text-sm sm:text-base"}
            arrowStyle={
              "absolute bottom-4 right-4 duration-300 md:group-hover:scale-[1.2]  md:group-hover:-translate-x-1 md:group-hover:translate-y-1 md:group-hover:rotate-45"
            }
            modalImageSrc={"/infoIcon1.png"}
            modalImageAlt={"Icon"}
            modalHeader={"Fast Plass"}
            modalParagraph1={"3990,-/ mnd (eks. MVA)"}
            modalParagraph2={
              "Dette inkluderer følgende: Fast plass i åpent kontorlandskap, nytraktet kaffe, tilgang til møterom, rask wifi, rengjøring, strøm, telefonbåser samt invitasjon til alle arrangementer i Bergen.Works regi."
            }
            modalLinkText={"Ta kontakt"}
            modalLink={"/#contact-form"}
          />
        </div>
        <div className="text-light-text lg:w-1/3">
          <InfoCard
            cardStyle="bg-moss-600 flex justify-center items-center w-full h-[140px] group cursor-pointer lg:h-[200px]  rounded-2xl  duration-300 md:hover:scale-105"
            imageSrc="/infoIcon2.png"
            alt="Icon"
            title="Åpen Plass"
            description="3200,- / mnd"
            imageStyle={
              "w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] xl:w-[140px] xl:h-[140px]"
            }
            textContentStyle={"p-4 xl:px-8"}
            headerStyle={"h-full text-2xl  font-bold"}
            paragraphStyle={"mt-2 text-sm sm:text-base"}
            arrowStyle={
              "absolute bottom-4 right-4 duration-300 md:group-hover:scale-[1.2]  md:group-hover:-translate-x-1 md:group-hover:translate-y-1 md:group-hover:rotate-45"
            }
            modalImageSrc={"/infoIcon2.png"}
            modalImageAlt={"Icon"}
            modalHeader={"Åpen plass"}
            modalParagraph1={"3200,-/ mnd (eks. MVA)"}
            modalParagraph2={
              "Dette inkluderer følgende: Tilgang til ledig plass i åpent kontorlandskap, nytraktet kaffe, tilgang til møterom, rask wifi, rengjøring, strøm, telefonbåser samt invitasjon til alle arrangementer i Bergen.Works regi."
            }
            modalLinkText={"Ta kontakt"}
            modalLink={"/#contact-form"}
          />
        </div>
        <div className="text-[var(--text-dark)] lg:w-1/3">
          <InfoCard
            cardStyle="bg-moss-200 flex justify-center items-center w-full h-[140px] group cursor-pointer lg:h-[200px] rounded-2xl duration-300 md:hover:scale-105"
            imageSrc="/infoIcon3.png"
            alt="Icon"
            title="Inkubasjon"
            description="Gratis for deltakere"
            imageStyle={
              "w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] xl:w-[140px] xl:h-[140px]"
            }
            textContentStyle={"flex flex-col justify-center p-4 xl:px-8"}
            headerStyle={"h-full text-2xl  font-bold "}
            paragraphStyle={"mt-2 text-sm sm:text-base"}
            arrowStyle={
              "absolute bottom-4 right-4  duration-300  md:group-hover:scale-[1.2]  md:group-hover:-translate-x-1 md:group-hover:translate-y-1 md:group-hover:rotate-45"
            }
            modalImageSrc={"/infoIcon3.png"}
            modalImageAlt={"Icon"}
            modalHeader={"Inkubator på Bergen.Works"}
            modalParagraph2={
              "Har du en Gründer i magen? Bergen.Works utvikler et nytt inkubasjonskonsept for de som ønsker å realisere dine drømmer og idéer! Ta turen innom oss for en uformell prat og en kopp kaffe! Bergen.Works er startet av gründere, for gründere; hos oss finner du kompetanse innen ethvert felt! Kom for kontorplass, bli for miljøet."
            }
            modalLinkText={"Ta kontakt"}
            modalLink={"/#contact-form"}
          />
        </div>
      </div>
    </div>
  );
}
