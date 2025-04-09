import React from 'react'
import FasiliteterCard from "@/components/ui/FasiliteterCard"

const Hero = () => {
  return (
    <div className="mb-10">
            <FasiliteterCard
              imageSrc="/BW_Bygning.png"
              alt={"Image of building"}
              headerText={"Bergen.Works"}
              paragraphText={"Innovation in the heart of the city"}
              buttonText={"Ta kontakt"}
              buttonLink={"/"}
              reverse={false}
              cardStyle={""}
              imageContainerStyle={"lg:w-3/5  lg:h-[450]"}
              headerStyle={"text-4xl md:text-4xl xl:text-5xl  "}
              textContainerStyle={"bg-black text-white lg:w-2/5 xl:h-[450]"}
              paragraphStyle={"text-2xl lg:my-4"}
              buttonStyle="bg-white text-black hover:bg-accept-600 hover:text-[var(--text-dark)] text-[var(--text-light)] "
            />
          </div>         
  )
}

export default Hero