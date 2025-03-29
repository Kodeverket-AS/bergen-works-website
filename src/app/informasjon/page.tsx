import Image from "next/image";

export default function Information() {
  return (
    <main className="flex flex-col items-center justify-center transition-all duration-700">
      <div className=" bg-[#1D1D1D] lg:bg-transparent rounded-2xl flex flex-col items-center lg:flex-row justify-center h-[567px] w-[342px] md:h-[650px] md:w-[430px] lg:w-screen xl:w-[1300] lg:h-[411] gap-4 md:gap-6 lg:mb-[2em]">
        <div className="md:bg-[#1D1D1D] lg:flex lg:items-center md:p-[1em] md:w-[400] rounded-2xl lg:w-[430] lg:h-[411]  ">
          <Image
            src="/infoImage.png"
            alt="Picture of logo and people in meetingroom"
            width={294}
            height={303}
            className="mt-[1.5em] md:mt-[1em] lg:mt-0 lg:p-[0.5em] object-contain rounded-2xl md:h-[383px] md:w-[400]"
            priority
          />
        </div>
        <div className="text-[var(--text-light)] w-[294px] h-full md:w-[400] rounded-2xl md:p-[1em] lg:w-[870] lg:h-[411] lg:bg-[#1D1D1D]">
          <div className="lg:w-[700] xl:w-[753] xl:h-[45px] lg:px-16">
            <h1 className="font-bold text-[40px] md:text-[40px] md:-mt-10 lg:my-2 ">
              Co-work
            </h1>
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              fuga! Dolorem, veritatis praesentium?
            </p>
            <p className="hidden lg:block lg:w-[600] ">
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
            <div className="w-full md:flex md:justify-center lg:justify-start md:mt-[1em] lg:mt-5">
              <button className="text-base md:text-md mt-[2em] md:mt-[0.5em] w-[294px] h-[51px] lg:w-[148px] rounded-sm py-4 px-8 bg-white text-[var(--text-dark)] font-semibold  md:hover:bg-accept-600 md:hover:text-[var(--text-light)] transition-colors duration-300 cursor-pointer">
                Ta kontakt
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[342] mt-[1em] h-[398] md:w-[430px] md:h-[430]  flex flex-col lg:flex-row lg:h-[194] lg:w-screen xl:w-[1300]  justify-around lg:justify-between    ">
        <div className=" flex justify-evenly items-end lg:items-center p-[2em] w-[342] h-[122] lg:h-[194] lg:w-[400] md:w-[430px] rounded-2xl bg-moss-200 text-[var(--text-dark)] ">
          <Image
            className="w-[58px] h-[58px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px] xl:w-[130px] xl:h-[130px] object-cover"
            src="/infoIcon1.png"
            alt="icon"
            width={200}
            height={200}
          />

          <div className="overflow-hidden lg:mb-2 px-[1.5em] lg:px-[0.7em] flex flex-col justify-end lg:justify-center xl:justify-start h-full ">
            <h1 className="text-2xl text-light font-bold leading-10 lg:leading-9 ">
              Fast plass
            </h1>
            <p className="">xxxx,- / mnd</p>
            <p className="hidden xl:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              eius suscipit, placeat magnam fuga aspernatur, pariatur iste,
              labore similique hic veritatis adipisci corrupti ducimus harum ea
              facere veniam.
            </p>
          </div>
          <div className="mb-[0.34em] h-full flex items-end">
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.28767 1.57211L21.1439 20.4283M21.1439 20.4283L21.1439 3.92913M21.1439 20.4283L4.6447 20.4283"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-evenly items-end lg:items-center p-[2em] lg:mx-[1.1em] w-[342] h-[122] lg:h-[194] lg:w-[400] md:w-[430px] rounded-2xl bg-moss-600 text-[var(--text-light)] ">
          <Image
            className="w-[58px] h-[58px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px] xl:w-[130px] xl:h-[130px] object-cover"
            src="/infoIcon2.png"
            alt="icon"
            width={200}
            height={200}
          />

          <div className="overflow-hidden lg:mb-2 px-[1.5em] lg:px-[0.7em] flex flex-col justify-end lg:justify-center xl:justify-start h-full">
            <h1 className="text-2xl text-light font-bold leading-10 lg:leading-9">
              Åpen plass
            </h1>
            <p className="">xxxx,- / mnd</p>
            <p className="hidden xl:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              eius suscipit, placeat magnam fuga aspernatur, pariatur iste,
              labore similique hic veritatis adipisci corrupti ducimus harum ea
              facere veniam.
            </p>
          </div>
          <div className="mb-[0.34em] h-full flex justify-end items-end">
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.28767 1.57211L21.1439 20.4283M21.1439 20.4283L21.1439 3.92913M21.1439 20.4283L4.6447 20.4283"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className=" flex justify-evenly items-end lg:items-start p-[2em] w-[342] h-[122] lg:h-[194] lg:w-[400] md:w-[430px] rounded-2xl bg-moss-200 text-[var(--text-dark)] ">
          <Image
            className="w-[58px] h-[58px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px] xl:w-[130px] xl:h-[130px] object-cover"
            src="/infoIcon3.png"
            alt="icon"
            width={200}
            height={200}
          />
          <div className="px-[1.5em] flex flex-col tracking-wide">
            <h1 className="text-2xl text-light font-bold leading-10">
              Inkubasjon
            </h1>
            <p className="">Lorem, ipsum dolor.</p>
          </div>
          <div className="h-full flex items-end">
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.28767 1.57211L21.1439 20.4283M21.1439 20.4283L21.1439 3.92913M21.1439 20.4283L4.6447 20.4283"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
