import { ImageTextCard } from "@/components/ui/ImageTextCard";
import { Button } from "@/components/ui/buttons/Button";
import { GetStarted } from "@/components/layout/GetStarted";
import MedlemskapServices from "./MedlemskapServices";
import Medlemskap_iconer from "./MedlemskapIconer";

export default function Incubator() {
  return (
    <main className='flex flex-col gap-3 md:gap-6'>
      <div className='flex flex-col gap-3 md:gap-6'>
        <ImageTextCard
          imageSrc='/bygg.png'
          alt={'Image of building'}
          headerText={'Bli en del av et inspirerende fellesskap'}
          paragraphText={
            'Jobb side om side med noen av Bergens mest innovative  selskaper. Få tilgang til moderne fasiliteter, sosiale soner, møterom, medlemsfordeler, digitale tjenester og inspirerende arrangementer – alt tilrettelagt for at du og din bedrift skal vokse.'
          }
          smallScreenReverse={false}
          largeScreenReverse={false}
          cardStyle={'gap-3 md:gap-6'}
          imageContainerStyle={'w-full h-[400px] md:h-auto md:w-1/2 lg:w-3/5 lg:h-auto'}
          headerStyle={'text-2xl md:text-2xl xl:text-3xl'}
          textContainerStyle={'bg-black text-white md:w-1/2 lg:w-2/5 xl:h-auto'}
          paragraphStyle={'my-4'}
          button={
            <Button
              href='/#contact-form'
              variant={'secondary'}
              className={'rounded-md w-full md:w-auto mt-8 lg:text-lg'}
            >
              Ta kontakt
            </Button>
          }
        />
      </div>
      <MedlemskapServices />
      <Medlemskap_iconer />
      <GetStarted />
    </main>
  );
}
