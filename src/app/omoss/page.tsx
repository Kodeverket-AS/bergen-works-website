import { FasiliteterCard } from "@/components/ui/FasiliteterCard";
import React from "react";
import { Button } from "@/components/ui/buttons/Button";
import Image from "next/image";

export default function Incubator() {
  return (
    <main className="">
      <FasiliteterCard
        imageSrc="/bygg.png"
        alt="Image of building"
        headerText="Din arbeidsplass i fokus"
        paragraphText="Med en beliggenhet i vakre Skostredet har Bergen.Works drevet coworking space siden 2017. Vi ble startet av gründere og for gründere"
        smallScreenReverse={false}
        largeScreenReverse={false}
        cardStyle="gap-3 md:gap-6"
        imageContainerStyle="md:w-4/5 lg:w-3/5 md:h-auto h-96"
        textContainerStyle="text-white bg-black md:w-full lg:w-2/5 lg:h-auto"
        headerStyle="text-white text-3xl md:text-5xl xl:text-6xl"
        paragraphStyle="pt-4 lg:py-6"
        imageStyle={""}
      />

      <FasiliteterCard
        imageSrc="/infoImage.png"
        alt="Picture of logo and people in meetingroom"
        headerText="Bærebjelken for vår virksomhet er sosial innovasjon"
        paragraphText="Vi ønsker å bidra til å utvikle smarte hoder til kreativ tech industri. Vi tilrettelegger derfor en arena for samarbeid og inkludering, hvor det enkelte medlem kan ta del i fellesskapet som mentor, innovatør, arbeidssøkende eller vekstbedrift. Med lokalisering i hjertet av Bergen, og tett tilknytning mot kultur, mener vi at vårt miljø bidrar til innovativ vekst."
        smallScreenReverse={false}
        largeScreenReverse={true}
        cardStyle="gap-3 md:gap-6"
        imageContainerStyle="bg-black md:w-1/2 md:flex md:items-center md:justify-center rounded-2xl lg:w-3/6 md:h-auto h-[450]"
        imageInnerDivStyle="relative w-full h-full md:h-4/6 lg:h-full"
        textContainerStyle="bg-moss-600 text-white md:w-1/2 lg:w-3/5 "
        headerStyle="text-white text-3xl md:text-3xl lg:text-5xl xl:text-6xl py-3"
        paragraphStyle="lg:text-lg py-2 lg:py-4"
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
      <section className="w-full my-10">
        <div className="bg-[#606c38] text-[#fffafa] p-8 md:p-10 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/joachim.jpg"
            alt="Daglig leder"
            width={160}
            height={160}
            className="rounded-full aspect-square object-cover shadow-md border-4 border-[#dce1cd]"
          />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-1">Joachim Heggernes</h3>
            <p className="text-lg mb-3">Daglig leder, Bergen.Works</p>
            <p className="text-base italic max-w-xl">
              &quot;Vårt mål er å gjøre reisen din som gründer litt lettere – og
              mye mer inspirerende. Vi står klare til å støtte deg med
              kompetanse, nettverk og ekte engasjement. Kom gjerne innom for en
              prat!&quot;
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <p>
                <strong>E-post:</strong>{" "}
                <a
                  href="mailto:joachim@bergen.works"
                  className="underline hover:text-chocolate-500 transition-colors duration-200"
                >
                  joachim@bergen.works
                </a>
              </p>
              <p>
                <strong>Telefon:</strong>{" "}
                <a
                  href="tel:+4748502813"
                  className="underline hover:text-chocolate-500 transition-colors duration-200"
                >
                  +47 485 02 813
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
