import React from "react";

export function Personvernerklæring() {
    return (
    <main className="flex flex-col items-center">
    <section className="w-full py-24">
        <div className="container mx-auto flex flex-col gap-12 px-4 lg:px-8">
            <h1 className="text-center">Personvernerklæring</h1>
            <p className="text-pretty">Bergen.Works er behandlingsansvarlig for behandlingen av personopplysninger som beskrevet i denne personvernerklæringen. I denne personvernerklæringen forklarer vi hva slags personopplysninger vi lagrer og hvordan vi behandler dem. Denne personvernerklæringen gjelder for:</p>

            <div className="flex flex-col gap-4">
                <h2>Personopplysninger vi samler inn og behandler</h2>
                <p>Vi behandler følgende kategorier av personopplysninger:</p>

                <ul className="list-disc list-outside flex flex-col gap-2 pl-4">
                    <li>
                    <h3>Kontaktinformasjon</h3>
                    <p>Adresse, telefonnummer, epostadresse</p>
                    </li>
                    <li>
                        <h3>Kundehistorikk og kundeengasjement</h3>
                        <p>Bestillings- og leveringsopplysninger, handlekurvbevegelser, rabattkoder, lojalitetsprograminformasjon, aktive produkter og avtaler samt produkter og tjenester du har hatt tidligere, hvor mye og hvor ofte de brukes, status på produkter/tjenester</p>
                    </li>
                    <li>
                        <h3>Kundeaktivitet</h3>
                        <p>Lese- og handlingshistorikk fra app, nettsider eller elektronisk kommunikasjon vi sender ut. Samt teknisk informasjon om enhetene du bruker.</p>
                    </li>
                    </ul>
                        <p>Personopplysningene samles inn direkte fra deg gjennom informasjon du oppgir til oss og i forbindelse med at du bruker våre tjenester og produkter.</p>
                        </div>
                            <div className="flex flex-col gap-4">
                                <h2>Hvordan vi bruker personopplysningene</h2>
                                <h3>Levering av tjeneste/avtaleinngåelse</h3>
                                <p>Vi bruker dine personopplysninger til å oppfylle våre avtaler med deg, det vil si når du har bestilt et produkt eller en tjeneste fra oss. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er at behandlingen er nødvendig for å oppfylle en avtale med deg.</p>
                            
                                <h3>Administrasjon av kundeforhold</h3>
                                <p>Vi bruker dine personopplysninger til å administrere vårt kundeforhold med deg. Det kan for eksempel være kundeservice, klagebehandling og feilretting vedrørende ditt kundeforhold. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er at behandlingen er nødvendig for å oppfylle en avtale med deg.</p>

                                <h3>Analyse, forretningsutvikling og forbedring av tjenester</h3>
                                <p>Vi arbeider kontinuerlig med å utvikle og forbedre våre tjenester og produkter. Mye av dette arbeidet innebærer å analysere ulike former for personopplysninger, som for eksempel kundeaktivitet, kundehistorikk og konto og profilinformasjon. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er vår berettigede interesse.</p>

                                <h3>Tilpasset brukeropplevelse</h3>
                                <p>Vi tilpasser brukeropplevelsen og kommunikasjonen til ditt kundeforhold og dette bruker vi personopplysninger til. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er vår berettigede interesse</p>
                                
                                <h3>Salg og markedsføring</h3>
                                <p>Vi bruker personopplysninger i forbindelse med salg og markedsføring av våre produkter og tjenester, for eksempel ved at du mottar e-post fra oss. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er vår berettigede interesse. Du har mulighet å reservere deg fra deler av denne behandlingen ved å, for eksempel, reservere deg fra å motta e-post fra oss. I tillegg til dette kan vi også be deg om samtykke til å bruke dine personopplysninger til såkalt profilering, hvor vi utleder interesser og behov på bakgrunn av dine personopplysninger. Hensikten med profilering vil være at markedsføringen vår skal bli mer relevant.</p>                                
                            </div>

                                <div className="flex flex-col gap-4">
                                    <h2>Dine rettigheter</h2>
                                    <p>Dersom du ønsker å utøve noen av dine rettigheter, ta kontakt med oss. 
                                    <a href="mailto:post@bergen.works" className="text-blue-500">post@bergen.works</a></p>
                                    <h3>Rett til innsyn i egne opplysninger</h3>
                                    <p>Du kan be om en kopi av alle opplysninger vi behandler om deg. Ta kontakt på e-postadressen ovenfor for å bruke innsynsretten din.</p>
                                    
                                    <h3>Rett til korrigering av personopplysninger</h3>
                                    <p>Du har rett til å be oss rette eller supplere opplysninger som er feilaktige eller misvisende.</p>
                                    
                                    <h3>Retten til sletting av personopplysninger</h3>
                                    <p>Du har rett til å få dine personopplysninger slettet uten ugrunnet opphold. Du kan derfor når som helst be oss slette opplysninger om deg selv. Men merk at informasjon som vi er pålagt å beholde av hensyn til andre rettslige forpliktelser (som for eksempel bokføringsloven) ikke vil bli slettet.</p>
                                    
                                    <h3>Begrensning av behandling av personopplysninger</h3>
                                    <p>I noen situasjoner kan du også be oss begrense behandlingen av opplysninger om deg. Dette gjør du ved å administrere samtykker eller reservasjoner i våre løsninger.</p>
                                    
                                    <h3>Protestere mot en behandling av personopplysninger</h3>
                                    <p>Dersom vi behandler opplysninger om deg med grunnlag i våre oppgaver eller på bakgrunn av en interesseavveining, har du rett til å protestere på vår behandling av opplysninger om deg. Dette gjør du ved å administrere samtykker eller reservasjoner i våre løsninger.</p>
                                    
                                    <h3>Dataportabilitet</h3>
                                    <p>Du har rett til å få utlevert dine personopplysninger i et strukturert, alminnelig anvendt og maskinlesbart format. Ta kontakt på e-postadressen ovenfor for å få utlevert dine personopplysninger.</p>
                                    
                                    <h3>Du kan klage på vår behandling av personopplysninger</h3>
                                    <p>Vi håper du vil si ifra dersom du mener vi ikke overholder reglene i personopplysningsloven. Si da gjerne først i fra gjennom den kontakten eller kanalen du allerede har etablert med oss. Du kan også klage over vår behandling av personopplysninger. Dette gjør du til Datatilsynet</p>                                    
                                </div>
                            </div>
                        </section>
                    </main>
    );
}
