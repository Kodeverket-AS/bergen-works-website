import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/buttons/Button";
import { ContactForm } from "@/components/forms/ContactForm";

export default function Membership() {
  return (
    <main className="">
      <section className="flex flex-col w-full h-full md:flex-row gap-5">
        <div className="relative flex-1 aspect-square">
          <Image src="/Incubator.png" alt="Incubator landing page img" fill draggable={false} className="" />
        </div>
        <div className="bg-black text-light-text pt-6 pb-10 lg:pt-8 px-10  rounded-2xl w-full h-auto md:w-1/2 lg:w-2/3 ">
          <h1 className="text-3xl font-bold mb-8 md:mb-4 lg:text-4xl xl:mb-8 xl:text-5xl font-space-grotesk">
            Vi gir startups en stor fordel når det gjelder kapital innhenting
          </h1>
          <p className="xl:text-lg">
            Har du en Gründer i magen? Bergen.Works utvikler et nytt inkubasjonskonsept for de som ønsker å realisere
            dine drømmer og idéer! Ta turen innom oss for en uformell prat og en kopp kaffe! Bergen.Works er startet av
            gründere, for gründere; hos oss finner du kompetanse innen ethvert felt! Kom for kontorplass, bli for
            miljøet.
          </p>
          <Button
            href="/#contact-form"
            variant={"secondary"}
            className={"rounded-md w-full md:w-auto mt-8 md:mt-6 lg:mt-16 xl:text-lg"}
          >
            Ta kontakt
          </Button>
        </div>
      </section>

      <section className="w-full mt-10">
        <div className="bg-moss-600 text-light-text p-10 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-3xl xl:text-4xl font-semibold">Hva kan du forvente som medlem?</h2>
          <p className="text-lg xl:text-xl">
            Som medlem av Bergen.Works får du tilgang til en rekke tjenester og fordeler som hjelper deg å realisere
            ditt fulle potensial.
            <br />
            <br />
            Vi vet hvor viktig det er å ha riktig støtte på riktig tidspunkt – enten du trenger hjelp til å finjustere
            forretningsmodellen din eller finne de rette investorene. Hos oss får du tilgang til et komplett
            støtteapparat som gir deg de beste forutsetningene for å lykkes.
          </p>
          <ul className="space-y-4 text-base xl:text-lg list-disc list-inside">
            <li>
              <strong>Workshops:</strong> Praktiske og hands-on workshops som dekker viktige emner som produktutvikling,
              markedsføringsstrategier og operasjonell effektivitet.
            </li>
            <li>
              <strong>Mentorer:</strong> Koble deg med erfarne mentorer og bransjeveteraner som gir deg innsikt og råd,
              spesialtilpasset for din startups behov.
            </li>
            <li>
              <strong>Investorer:</strong> Tilgang til et nettverk av investorer som er klare til å støtte innovative
              startups på vei mot vekst.
            </li>
            <li>
              <strong>Bedriftspartnerskap:</strong> Koble deg med strategiske partnere som kan hjelpe deg med
              markedsvalidering, tilgang til ekspertise og mulige kundebaser.
            </li>
            <li>
              <strong>Gratis juridisk rådgivning:</strong> Sikre at din startup står på solid juridisk grunn med gratis
              juridiske konsultasjoner gjennom vår partner i Simonsen Vogt Wiig.
            </li>
            <li>
              <strong>In-house-tjenester:</strong> Få tilgang til gratis regnskapstjenester, markedsføring og salgskurs.
            </li>
            <li>
              <strong>Kontor- og møterom fasiliteter:</strong> Få et produktivt arbeidsmiljø med velutstyrte møterom for
              samarbeid og innovasjon.
            </li>
          </ul>
        </div>
      </section>
      <section className="w-full h-full flex flex-col md:flex-row mt-10 mb-10 ">
        <Image
          className="w-full md:w-1/2 md:object-cover md:object-center md:mt-10 md:mb-10 md:mr-5 rounded-2xl"
          src="/FasImg2.png"
          alt="Incubator landing page img "
          width={1300}
          height={450}
          draggable={false}
        />
        <div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
