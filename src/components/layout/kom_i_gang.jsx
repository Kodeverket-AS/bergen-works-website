import React from "react";
import KontaktForm from "../KontaktForm";
import Image from "next/image";

const Kom_i_gang = () => {
  return (
    <section className="flex w-full h-auto ">
      <div className="w-full h-full  flex flex-col md:flex-row justify-center my-10  md:gap-3 lg:gap-10">
        <div className="w-full md:w-1/2">
          <KontaktForm />
        </div>
        <div className="relative my-10 h-[350px]  md:h-auto md:w-1/2">
          <Image
            className="object-cover rounded-2xl"
            src="/Møte-rom.png"
            alt="Møterom i Bergen.Works"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default Kom_i_gang;
