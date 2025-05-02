import { FasiliteterCard } from "@/components/ui/FasiliteterCard";

export default function Facilities() {
  return (
    <main>
      <div className="mb-10">
        <FasiliteterCard
          imageSrc="/bygg.png"
          alt={"Image of building"}
          headerText={"Fasiliteter"}
          paragraphText={
            "Bergen.Works er mer enn bare et kontorfellesskap. Som medlem har du tilgang til nettverk, møterom og event-spaces. Du kan også booke våre fasiliteter uten å være medlem. Les mer om hva vi tilbyr og meld interesse for å få et pristilbud."
          }
          buttonText={"Ta kontakt"}
          buttonLink={"/#contact-form"}
          cardStyle={"gap-3 md:gap-6"}
          imageContainerStyle={"w-full h-[400] md:w-1/2 lg:w-8/12 md:h-auto"}
          headerStyle={"text-4xl md:text-5xl"}
          textContainerStyle={
            "w-full h-full md:w-1/2   lg:w-1/2 md:h-auto xl:w-[1/3]"
          }
          paragraphStyle={"lg:my-4 lg:text-lg xl:text-xl pt-4 "}
          buttonStyle="bg-moss-600 text-[var(--text-light)] hover:bg-[#1C2B14] w-full md:w-1/2 xl:w-1/3 mt-6 lg:text-lg"
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
            "Med flere møterom i Skostredet, er sjansen stor for at vi har et møterom tilgjengelig til deg på ønsket tidspunkt. Vi har møterom i ulike størrelser, fra 2-12 personer."
          }
          buttonText={"Ta kontakt"}
          buttonLink={"/#contact-form"}
          cardStyle={"gap-3 md:gap-6"}
          imageContainerStyle={"w-full h-[250] md:w-2/3 md:h-auto"}
          headerStyle={"text-3xl md:text-4xl lg:text-5xl"}
          textContainerStyle={
            "bg-moss-600 text-[var(--text-light)] w-full h-full md:w-1/2 lg:w-1/2 md:h-auto xl:w-[1/3]"
          }
          paragraphStyle={"lg:my-5 lg:text-lg xl:text-xl pt-4"}
          buttonStyle="bg-white text-[var(--text-dark)] hover:bg-gray-300 w-full md:w-1/2 xl:w-1/3 mt-6 lg:text-lg"
          largeScreenReverse={true}
          smallScreenReverse={true}
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
          buttonText={"Ta kontakt"}
          buttonLink={"/#contact-form"}
          cardStyle={"gap-3 md:gap-6"}
          imageContainerStyle={"w-full h-[400] md:w-2/3 md:h-auto"}
          headerStyle={"text-2xl md:text-3xl lg:text-4xl "}
          textContainerStyle={
            "w-full h-full md:w-1/2 lg:w-1/2 md:h-auto xl:w-[1/3]"
          }
          paragraphStyle={"lg:my-8 xl:mr-10 lg:text-lg xl:text-xl pt-4 lg:pt-0"}
          buttonStyle="bg-moss-600 text-[var(--text-light)] hover:bg-[#1C2B14] w-full md:w-1/2 xl:w-1/3  mt-6 lg:mt-0 lg:text-lg"
          largeScreenReverse={false}
          smallScreenReverse={true}
        />
      </div>
    </main>
  );
}
