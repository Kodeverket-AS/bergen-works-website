import { FasiliteterCard } from "@/components/ui/FasiliteterCard";

export default function Hero() {
  return (
    <div className="mb-10 flex">
      <FasiliteterCard
        imageSrc="/bygg.png"
        alt={"Image of  main building"}
        headerText={"Bergen.Works"}
        paragraphText={"Innovation in the heart of the city"}
        buttonText={"Ta kontakt"}
        buttonLink={"/#contact-form"}
        reverse={false}
        cardStyle={""}
        imageContainerStyle={"w-full h-[400] lg:w-3/5"}
        headerStyle="text-5xl xl:text-6xl font-space-grotesk"
        textContainerStyle="justify-between bg-black text-white h-auto lg:w-2/5 xl:w-[1/3]"
        paragraphStyle="py-2 text-4xl md:text-5xl lg:my-4 "
        buttonStyle=" bg-white text-[var(--text-dark)] hover:bg-gray-300 w-full md:w-auto mt-6 lg:text-lg"
      />
    </div>
  );
}
