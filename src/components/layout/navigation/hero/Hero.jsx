import { FasiliteterCard } from "@/components/ui/FasiliteterCard";
import { Button } from "@/components/ui/buttons/Button";

export default function Hero() {
  return (
    <div className="mb-10 flex">
      <FasiliteterCard
        imageSrc="/bygg.png"
        alt={"Image of main building"}
        headerText={"Bergen.Works"}
        paragraphText={"Innovation in the heart of the city"}
        reverse={false}
        cardStyle={""}
        imageContainerStyle={
          "w-full h-[400px] md:h-[350px] xl:h-[400px] lg:w-3/5"
        }
        headerStyle="hidden md:block text-4xl md:text-5xl xl:text-6xl font-space-grotesk"
        textContainerStyle="justify-between bg-black text-white h-auto lg:w-2/5 xl:w-[1/3]"
        paragraphStyle="py-2 text-5xl md:text-4xl xl:text-5xl lg:my-4 "
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
  );
}
