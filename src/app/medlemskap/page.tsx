import { FasiliteterCard } from '../../components/ui/FasiliteterCard';
import Eget_Kontor from '../../components/layout/eget_komtor/page';
import Medlemskap_iconer from '../../components/layout/Medlemskap_iconer';
import Kom_i_gang from '../../components/layout/kom_i_gang';


export default function Incubator() {
  return <main>
     <div className="mb-10">
          <FasiliteterCard
            imageSrc="/BW_Bygning.png"
            alt={"Image of building"}
            headerText={"Medlemskap"}
            paragraphText={"Alle våre medlemskap er skreddersøm, tilpasset akkurat dine behov. Vi tilbyr både faste plasser på fulltid, åpne plasser i kontorlandskap, samt vennskap. Det siste innebærer at du har plass hos oss en dag i uken, og kombineres veldig fint med hjemmekontor. Vi har også virtuelle løsninger som møterom, seminarer og arbeidsrelaterte sosiale plattformer. Som medlem av Bergen.Works har du tilgang til et nettverk av coworkere, kunder, rådgivere og investorer. Medlemmer kan booke alt fra mentoring og møterom, delta på seminarer og workshops, samt andre eventer hos oss og våre samarbeidspartnere."}
            buttonText={"Ta kontakt"}
            buttonLink={"/"}
            smallScreenReverse={false}
            largeScreenReverse={false}
            cardStyle={"gap-3 mg:gap-6"}
            imageContainerStyle={"w-full h-[400] md:h-auto lg:w-3/5  lg:h-auto"}
            headerStyle={"text-2xl md:text-2xl xl:text-3xl  "}
            textContainerStyle={"bg-black text-white lg:w-2/5 xl:h-auto"}
            paragraphStyle={"lg:my-4"}
            buttonStyle="bg-white text-black hover:bg-accept-600 hover:text-[var(--text-dark)] text-[var(--text-light)] "
          />
        </div>
    <Eget_Kontor />
    <Medlemskap_iconer />
    <Kom_i_gang />

  </main>;
}
