import { FasiliteterCard } from "@/components/ui/FasiliteterCard";
import React from "react";
import { Button } from "@/components/ui/buttons/Button";

export default function Incubator() {
  return (
    <main className="px-4 lg:px-20">
      <FasiliteterCard
        imageSrc="/bygg.png"
        alt="Image of building"
        headerText="Om oss"
        paragraphText="Med en beliggenhet i vakre Skostredet har Bergen.Works drevet coworking space siden 2017. Vi ble startet av gründere og for gründere, og entreprenørskap i en eller annen form er det vi driver med. Våre medlemmer er mest opptatte med kreativ innovasjon, og ikke minst det å finne morgendagens løsninger på dagens problemer. Vi har alltid plass til flere hos oss som trenger plass i et arbeidsfelleskap for å realisere sine drømmer og idéer, og vi tilbyr også mentoring til våre medlemmer."
        smallScreenReverse={false}
        largeScreenReverse={false}
        cardStyle=""
        imageContainerStyle=" md:w-4/5 lg:w-3/5 md:h-auto h-96 "
        textContainerStyle="text-white bg-black md:w-full lg:w-2/5 lg:h-auto "
        headerStyle="text-white text-3xl md:text-5xl lg:text-6xl "
        paragraphStyle="pt-4 lg:py-6"
      />

      <FasiliteterCard
        imageSrc="/infoImage.png"
        alt="Picture of logo and people in meetingroom"
        headerText="Bærebjelken for vår virksomhet er sosial innovasjon"
        paragraphText="Vi ønsker å bidra til å utvikle smarte hoder til kreativ tech industri. Vi tilrettelegger derfor en arena for samarbeid og inkludering, hvor det enkelte medlem kan ta del i fellesskapet som mentor, innovatør, arbeidssøkende eller vekstbedrift. Med lokalisering i hjertet av Bergen, og tett tilknytning mot kultur, mener vi at vårt miljø bidrar til innovativ vekst."
        smallScreenReverse={false}
        largeScreenReverse={true}
        cardStyle=""
        imageContainerStyle=" lg:w-1/2 lg:h-[450px] h-104"
        textContainerStyle="bg-moss-600 text-white lg:w-1/2 xl:h-[450px]"
        headerStyle="text-white text-3xl md:text-3xl xl:text-3xl"
        paragraphStyle="lg:my-4"
        button={
          <Button
            href="/#contact-form"
            variant={"secondary"}
            className={"rounded-md  w-full md:w-auto mt-6 lg:text-lg"}
          >
            Ta kontakt
          </Button>
        }
      />
    </main>
  );
}
