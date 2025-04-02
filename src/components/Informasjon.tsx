import Image from "next/image";
import InfoCard from "./ui/InfoCard";

export default function InformationSection() {
  return (
    <main className="my-10 flex flex-col items-center justify-center transition duration-500 ">
      <div className="select-none  bg-[#1D1D1D] lg:bg-transparent rounded-2xl flex flex-col items-center lg:flex-row justify-center h-[567px] w-[342px] md:h-[650px] md:w-[430px] lg:w-full lg:h-[411] gap-4 md:gap-6 xl:gap-8 lg:mb-[2em]">
        <div className="md:bg-[#1D1D1D] lg:flex lg:items-center md:p-[1em] md:w-[400] rounded-2xl lg:w-[400] lg:h-[411]  ">
          <Image
            src="/infoImage.png"
            alt="Picture of logo and people in meetingroom"
            width={294}
            height={303}
            className="mt-[1.5em] md:mt-[1em] lg:mt-0 lg:p-[0.5em] object-cover rounded-2xl md:h-[383px] md:w-[400]"
            priority
          />
        </div>
        <div className="text-[var(--text-light)] w-[294px] h-full md:w-[400] rounded-2xl md:p-[1em] lg:w-[850] lg:h-[411] lg:bg-[#1D1D1D]">
          <div className="lg:w-[500]  xl:h-[45px] lg:px-10">
            <h1 className="font-bold text-[40px] md:text-[40px] md:-mt-10 lg:my-2 ">
              Co-work
            </h1>
            <p className="text-sm md:text-base lg:hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              fuga! Dolorem, veritatis praesentium?
            </p>
            <p className="hidden lg:block lg:w-[550] xl:w-[650] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              fuga quos culpa assumenda ab iste, atque facere aut fugit rerum
              repudiandae eius praesentium alias ratione consequatur optio sit
              placeat illum cum quo quidem corporis. Deserunt placeat vel
              inventore laborum similique possimus repellat aperiam iste
              molestias rem ipsam, voluptatibus nulla quasi animi illum
              explicabo quae odio suscipit ipsa. Ipsam non tempore laudantium
              veritatis deserunt est ex, eos architecto unde? Obcaecati iste
              deserunt molestiae delectus ullam nemo.
            </p>
            <div className="w-full md:flex md:justify-center lg:justify-start mt-[1em] md:mt-[1.5em] lg:mt-[2em] xl:mt-[3em]">
              <button className="text-base md:text-md mt-[2em] md:mt-[0.5em]  w-[294px] h-[51px] lg:w-[148px] rounded-sm py-4 px-8 bg-white text-[var(--text-dark)] font-semibold  md:hover:bg-accept-600 md:hover:text-[var(--text-light)] transition-colors duration-300 cursor-pointer">
                Ta kontakt
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[342] mt-[1em] h-[398] md:w-[430px] md:h-[430] flex flex-col lg:flex-row lg:h-[194] lg:w-full  justify-around xl:justify-center gap-5 xl:gap-10 ">
        <div className="text-[var(--text-dark)]  ">
          <InfoCard
            bgColor="bg-moss-200"
            imageSrc="/infoIcon1.png"
            alt="icon"
            title="Fast Plass"
            description="xxxx,- / mnd"
            link="/"
          />
        </div>
        <div className="text-[var(--text-light)]">
          <InfoCard
            bgColor="bg-moss-600"
            imageSrc="/infoIcon2.png"
            alt="icon"
            title="Åpen Plass"
            description="xxxx,- / mnd"
            link="/"
          />
        </div>
        <div className="text-[var(--text-dark)]">
          <InfoCard
            bgColor="bg-moss-200"
            imageSrc="/infoIcon3.png"
            alt="icon"
            title="Inkubasjon"
            description="Lorem ips ipsum"
            link="/"
          />
        </div>
      </div>
    </main>
  );
}
