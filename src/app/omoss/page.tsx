
import { FasiliteterCard } from "@/components/ui/FasiliteterCard";
import React from "react";

export default function Incubator() {
  return (
    <main className="px-4 lg:px-20">
      <FasiliteterCard
        imageSrc="/bygg.png"
        alt="Image of building"
        headerText="Om oss"
        paragraphText="Med en beliggenhet i vakre Skostredet har Bergen.Works drevet coworking space siden 2017. Vi ble startet av gründere og for gründere, og entreprenørskap i en eller annen form er det vi driver med. Våre medlemmer er mest opptatte med kreativ innovasjon, og ikke minst det å finne morgendagens løsninger på dagens problemer. Vi har alltid plass til flere hos oss som trenger plass i et arbeidsfelleskap for å realisere sine drømmer og idéer, og vi tilbyr også mentoring til våre medlemmer."
        buttonText=""
        buttonLink=""
        smallScreenReverse={false}
        largeScreenReverse={false}
        cardStyle=""
        imageContainerStyle=" brightness-80 contrast-80 lg:w-3/5 lg:h-[450px] h-104 "
        textContainerStyle="text-white bg-black lg:w-2/5 xl:h-[450px] gap-5"
        headerStyle="text-white text-3xl md:text-4xl xl:text-5xl"
        paragraphStyle="lg:my-4"
        buttonStyle=""
      />

      <FasiliteterCard
        imageSrc="/infoImage.png"
        alt="Picture of logo and people in meetingroom"
        headerText="Bærebjelken for vår virksomhet er sosial innovasjon"
        paragraphText="Vi ønsker å bidra til å utvikle smarte hoder til kreativ tech industri. Vi tilrettelegger derfor en arena for samarbeid og inkludering, hvor det enkelte medlem kan ta del i fellesskapet som mentor, innovatør, arbeidssøkende eller vekstbedrift. Med lokalisering i hjertet av Bergen, og tett tilknytning mot kultur, mener vi at vårt miljø bidrar til innovativ vekst."
        buttonText="Ta kontakt"
        buttonLink="/#contact-form"
        smallScreenReverse={false}
        largeScreenReverse={true}
        cardStyle=""
        imageContainerStyle="lg:w-1/2 lg:h-[450px] h-104"
        textContainerStyle="bg-moss-600 text-white lg:w-1/2 xl:h-[450px] gap-5"
        headerStyle="text-white text-3xl md:text-3xl xl:text-3xl"
        paragraphStyle="lg:my-4"
        buttonStyle="bg-white text-black hover:text-[var(--text-dark)] text-[var(--text-light)] mt-6"
      />
    </main>
  );
}
