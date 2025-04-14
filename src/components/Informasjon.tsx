import Image from "next/image";
import { InfoCard } from "./ui/InfoCard";

export default function InformationSection() {
  return (
    <main className="my-10 flex flex-col items-center justify-center transition duration-500">
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
              <button className="text-base md:text-md mt-[2em] md:mt-[0.5em]  w-[294px] h-[51px] lg:w-[148px] rounded-sm py-4 px-8 bg-white text-[var(--text-dark)] font-semibold  md:hover:bg-accept-600 md:hover:text-[var(--text-light)] transition-colors duration-300 cursor-pointer">
                Ta kontakt
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[342] mt-[1em] h-[398] md:w-[430px] md:h-[430] flex flex-col lg:flex-row lg:h-[194] lg:w-full  justify-around xl:justify-center gap-5 xl:gap-10 ">
        <div className="text-[var(--text-dark)] lg:w-1/3  ">
          <InfoCard
            bgColor="bg-moss-200"
            imageSrc="/infoIcon1.png"
            alt="icon"
            title="Fast Plass"
            description="xxxx,- / mnd"
            link="/"
          />
        </div>
        <div className="text-[var(--text-light)] lg:w-1/3">
          <InfoCard
            bgColor="bg-moss-600"
            imageSrc="/infoIcon2.png"
            alt="icon"
            title="Åpen Plass"
            description="xxxx,- / mnd"
            link="/"
          />
        </div>
        <div className="text-[var(--text-dark)] lg:w-1/3">
          <InfoCard
            bgColor="bg-moss-200"
            imageSrc="/infoIcon3.png"
            alt="icon"
            title="Inkubasjon"
            description="Lorem ips ipsum"
            link="/"
          />
        </div>
      </div>
    </main>
  );
}
