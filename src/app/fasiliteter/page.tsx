import { FasiliteterCard } from "@/components/ui/FasiliteterCard";
import { Button } from "@/components/ui/buttons/Button";

export default function Facilities() {
  return (
    <main className="">
      <div className=" mb-10">
        <FasiliteterCard
          imageSrc="/bygg.png"
          alt={"Image of building"}
          headerText={"Fasiliteter"}
          paragraphText={
            "Bergen.Works er stedet hvor du kan realisere ditt potensial. Her kombineres fleksible & moderne kontorløsninger, profesjonalitet og et varmt fellesskap. Vi legger til rette for at du kan fokusere på det du gjør best – mens vi tar oss av resten."
          }
          cardStyle={"gap-3 md:gap-6"}
          imageContainerStyle={"w-full h-[400px] md:w-1/2 lg:w-8/12 md:h-auto"}
          headerStyle={"text-4xl md:text-5xl"}
          textContainerStyle={
            "w-full h-full md:w-1/2 lg:w-1/2 md:h-auto xl:w-[1/3] text-dark-text"
          }
          paragraphStyle={"lg:my-4 lg:text-lg xl:text-xl pt-4"}
          largeScreenReverse={false}
          smallScreenReverse={false}
        />
      </div>
      <div className="mb-10">
        <FasiliteterCard
          imageSrc="/FasImg2.png"
          alt={"Image of Meetingroom"}
          headerText={"Møterom"}
          paragraphText={
            "Med flere møterom i Skostredet, er sjansen stor for at vi har et møterom tilgjengelig til deg på ønsket tidspunkt. Vi har møterom i ulike størrelser, fra 2-50 personer."
          }
          cardStyle={"gap-3 md:gap-6"}
          imageContainerStyle={"w-full h-[250px] md:w-2/3 md:h-auto"}
          headerStyle={"text-3xl md:text-4xl lg:text-5xl"}
          textContainerStyle={
            "bg-moss-600 text-light-text w-full h-full md:w-1/2 lg:w-1/2 md:h-auto xl:w-[1/3]"
          }
          paragraphStyle={"lg:my-5 lg:text-lg xl:text-xl pt-4"}
          largeScreenReverse={true}
          smallScreenReverse={true}
          button={
            <Button
              href="/#contact-form"
              variant={"secondary"}
              className={"rounded-md w-full md:w-auto mt-8 lg:text-lg"}
            >
              Ta kontakt
            </Button>
          }
        />
      </div>
      <div className="mb-10">
        <FasiliteterCard
          imageSrc={"/FasImg3.png"}
          alt={"Image of kitchen area"}
          headerText={"Booking av hele lokaler til arrangement"}
          paragraphText={
            "Du kan også booke lokalene våre for diverse arrangementer som kurs, konferanser, og sosiale eventer. Ta kontakt med oss for å høre om tilgjengelighet, pris, og cateringmuligheter, så skreddersyr vi et tilbud som passer til ditt arrangement."
          }
          cardStyle={"gap-3 md:gap-6"}
          imageContainerStyle={"w-full h-[400px] md:w-2/3 md:h-auto"}
          headerStyle={"text-2xl md:text-3xl lg:text-4xl "}
          textContainerStyle={
            "w-full h-full md:w-1/2 text-dark-text lg:w-1/2 md:h-auto xl:w-[1/3]"
          }
          paragraphStyle={"lg:my-8 xl:mr-10 lg:text-lg xl:text-xl pt-4 lg:pt-0"}
          largeScreenReverse={false}
          smallScreenReverse={true}
          button={
            <Button
              href="/#contact-form"
              variant={"primary"}
              className={"rounded-md w-full md:w-auto mt-8 lg:text-lg"}
            >
              Ta kontakt
            </Button>
          }
        />
      </div>
    </main>
  );
}
