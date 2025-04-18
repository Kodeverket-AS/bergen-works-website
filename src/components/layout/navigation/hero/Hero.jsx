import { FasiliteterCard } from "@/components/ui/FasiliteterCard";

export default function Hero() {
  return (
    <div className="mb-10 flex">
      <FasiliteterCard
        imageSrc="/BW_Bygning.png"
        alt={"Image of building"}
        headerText={"Bergen.Works"}
        paragraphText={"Innovation in the heart of the city"}
        buttonText={"Ta kontakt"}
        buttonLink={"/"}
        reverse={false}
        cardStyle={"gap-3 md:gap-5"}
        imageContainerStyle={"w-full h-[400] md:h-auto lg:w-3/5 lg:h-auto"}
        headerStyle="text-4xl  xl:text-5xl font-space-grotesk"
        textContainerStyle="bg-black text-white lg:w-2/5 xl:h-[450] flex flex-col justify-end t p-4 h-full"
        paragraphStyle=" text-4xl lg:my-4 font-space-grotesk"
        buttonStyle="bg-white text-black hover:bg-accept-600 hover:text-[var(--text-dark)] text-[var(--text-light)]"
      />
    </div>
  );
}
