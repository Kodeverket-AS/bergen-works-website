import { FasiliteterCard } from "../../components/ui/FasiliteterCard";
import Eget_Kontor from "../../components/layout/eget_komtor/page";
import Medlemskap_iconer from "../../components/layout/Medlemskap_iconer";
import Kom_i_gang from "../../components/layout/kom_i_gang";
import { Button } from "@/components/ui/buttons/Button";

export default function Incubator() {
  return (
    <main>
      <div className="mb-10">
        <FasiliteterCard
          imageSrc="/bygg.png"
          alt={"Image of building"}
          headerText={"Medlemskap på dine premisser"}
          paragraphText={
            "Hos Bergen.Works finnes det ingen standardløsninger – bare fleksible medlemskap tilpasset deg og din hverdag. Velg mellom faste plasser, åpne kontorlandskap eller vårt populære Vennskap, der du har fast plass én dag i uken – perfekt for deg som kombinerer med hjemmekontor. Trenger du bare en digital base? Vi tilbyr også virtuelle medlemskap med tilgang til møterom, seminarer og faglige nettverk. Som medlem blir du en del av et levende fellesskap av gründere, rådgivere, investorer og kreative sjeler. Du får tilgang til mentoring, workshops, arrangementer og spennende samarbeid – både hos oss og våre partnere."
          }
          smallScreenReverse={false}
          largeScreenReverse={false}
          cardStyle={"gap-3 mg:gap-6"}
          imageContainerStyle={"w-full h-[400] md:h-auto md:w-3/5 lg:w-3/5 lg:h-auto objert-center object-cover"}
          headerStyle={"text-2xl md:text-2xl xl:text-3xl  "}
          textContainerStyle={"bg-black text-white md:w-2/5 lg:w-2/5 xl:h-auto"}
          paragraphStyle={"lg:my-4"}
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
      <Eget_Kontor />
      <Medlemskap_iconer />
      <Kom_i_gang />
    </main>
  );
}
