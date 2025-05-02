import Image from "next/image";
import { InfoCard } from "./ui/InfoCard";
import { Button } from "./ui/buttons/Button";

export default function InformationSection() {
  return (
    <main className="my-10 flex flex-col items-center justify-center ">
      <div className="  bg-[#1D1D1D] lg:bg-transparent rounded-2xl flex flex-col items-center lg:flex-row justify-between h-[567px] w-[342px] md:h-[650px] md:w-[430px] lg:w-full lg:h-[411] xl:h-[450] gap-4 md:gap-5 xl:gap-9  lg:mb-[2em]">
        <div className="select-none md:bg-[#1D1D1D] lg:flex lg:items-center lg:justify-center md:p-[1em] md:w-[400] rounded-2xl lg:w-[400] lg:h-full xl:w-[500] xl:h-[450]">
          <Image
            src="/infoImage.png"
            alt="Picture of logo and people in meetingroom"
            width={300}
            height={300}
            draggable={false}
            className=" mt-[1.5em] md:mt-[1em] lg:mt-0 lg:p-[0.5em] object-cover rounded-2xl md:h-[360px] md:w-[450] xl:h-[400]"
            priority
          />
        </div>
        <div className="text-[var(--text-light)] w-[294px] h-full md:w-[400] rounded-2xl md:p-[1em] lg:w-10/12 xl:w-8/12 lg:h-[411] xl:h-[450] lg:bg-[#1D1D1D]">
          <div className=" xl:h-[45px] lg:px-10">
            <h1 className="font-bold text-[40px] xl:text-[50px] md:-mt-10 lg:my-2 ">
              Co-work
            </h1>
            <p className="text-sm md:text-base lg:hidden">
              Vi jobber med å utvikle et splitter nytt inkubasjonskonsept på
              huset. Stay tuned!
            </p>
            <p className="hidden lg:block lg:w-[550] xl:w-[650] ">
              Med en beliggenhet i vakre Skostredet har Bergen.Works drevet
              coworking space siden 2017. Vi ble startet av gründere og for
              gründere, og Bergen.Works skal være mer enn en kontorplass.
              Bærebjelkene våre er sosial, kreativ og grønn innovasjon, og vi
              vil bidra til å utvikle smarte hoder innen disse feltene. Derfor
              ønsker vi å legge til rette for en arena for samarbeid og
              inkludering der det enkelte medlem kan ta del i fellesskapet som
              mentor, innovatør, arbeidssøkende eller vekstbedrift. Sammen
              finner vi morgendagens løsninger på dagens problemstillinger.
            </p>
            <div className="w-full md:flex md:justify-center lg:justify-start mt-[1em] md:mt-[1.5em] lg:mt-[1em] xl:mt-[3em]">
              <Button
                href="/#contact-form"
                className="text-base lg:text-lg mt-[2em] md:mt-[0.5em] lg:mt-[2em]  w-[294px] lg:w-[148px] rounded-sm "
                variant={"secondary"}
              >
                Ta kontakt
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[342] mt-[1em] h-[398] md:w-[430px] md:h-[430] flex flex-col lg:flex-row lg:h-[194] lg:w-full justify-around xl:justify-center gap-5 xl:gap-10 ">
        <div className="text-[var(--text-dark)] lg:w-1/3  ">
          <InfoCard
            cardStyle="bg-moss-200 flex justify-center items-center w-full h-[140] group cursor-pointer lg:h-[200]  rounded-2xl  md:hover:scale-105"
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
              "absolute bottom-4 right-4 duration-300 md:group-hover:-translate-x-1 md:group-hover:translate-y-1 md:group-hover:rotate-45"
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
        <div className="text-[var(--text-light)] lg:w-1/3">
          <InfoCard
            cardStyle="bg-moss-600 flex justify-center items-center w-full h-[140] group cursor-pointer lg:h-[200]  rounded-2xl  duration-300 md:hover:scale-105"
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
              "absolute bottom-4 right-4 duration-300  md:group-hover:-translate-x-1 md:group-hover:translate-y-1 md:group-hover:rotate-45"
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
            cardStyle="bg-moss-200 flex justify-center items-center w-full h-[140] group cursor-pointer lg:h-[200]  rounded-2xl duration-300 md:hover:scale-105"
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
              "absolute bottom-4 right-4  duration-300 md:group-hover:-translate-x-1 md:group-hover:translate-y-1 md:group-hover:rotate-45"
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
    </main>
  );
}
